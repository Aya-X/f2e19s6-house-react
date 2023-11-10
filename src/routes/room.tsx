import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import BasicModal from '../components/BasicModal';
import DatePicker from '../components/DatePicker';

import api from '../helpers/ApiService';

interface IBookingItem {
  date: string;
}

interface IFindDisabledDatesParams {
  booking: IBookingItem[];
}

interface IGetOneRoomRes {
  booking: IBookingItem[];
  room: Array<object>;
  success: boolean;
}

function Room(): JSX.Element {
  const { roomId } = useParams();
  const [open, setOpen] = useState<boolean>(false);
  const [roomData, setRoomData] = useState<object>({});
  const [disabledDates, setDisabledDates] = useState<Array<string>>([]);
  const [selectedDate, setSelectedDate] = useState<object>({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const findDisabledDates = ({ booking }: IFindDisabledDatesParams) => {
    const result = Array.from(booking).map((item: IBookingItem) => item.date);
    setDisabledDates(result);
  };

  useEffect(() => {
    api.getOneRoom(roomId).then((res: IGetOneRoomRes) => {
      setRoomData(res);
      findDisabledDates(res);
    });
  }, [roomId]);

  return (
    <>
      <h1>ROOM</h1>

      <DatePicker
        setSelectedDate={setSelectedDate}
        disabledDates={disabledDates}
      />

      <code>
        <pre>{JSON.stringify(roomData, null, 2)}</pre>
      </code>

      <button type="button" onClick={handleOpen}>
        BOOKING
      </button>

      <BasicModal open={open} handleClose={handleClose}>
        <code>
          <pre>{JSON.stringify(selectedDate, null, 2)}</pre>
        </code>
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
