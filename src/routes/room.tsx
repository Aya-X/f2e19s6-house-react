import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import BasicModal from '../components/BasicModal';

import api from '../helpers/ApiService';

function Room(): JSX.Element {
  const { roomId } = useParams();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [roomData, setRoomData] = useState<object>({});

  useEffect(() => {
    api.getOneRoom(roomId).then((res: object) => {
      setRoomData(res);
    });
  }, [roomId]);

  return (
    <>
      <h1>ROOM</h1>

      <code>
        <pre>{JSON.stringify(roomData, null, 2)}</pre>
      </code>

      <button type="button" onClick={handleOpen}>
        BOOKING
      </button>

      <BasicModal open={open} handleClose={handleClose}>
        <span>BOOKING</span>
      </BasicModal>

      <p>
        roomId:<code> {roomId}</code>
      </p>

      <nav>
        <Link to="/">HOME</Link>
      </nav>
    </>
  );
}

export default Room;
