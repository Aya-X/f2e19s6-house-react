import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import BasicModal from '../components/BasicModal';

function Room(): JSX.Element {
  const { roomId } = useParams();
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <h1>ROOM</h1>

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
