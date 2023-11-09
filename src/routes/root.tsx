import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../helpers/ApiService';

interface IRoom {
  id: number;
  name: string;
}

function Root(): JSX.Element {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    api.getRooms().then((res) => {
      setRooms(res.items);
    });
  }, []);

  return (
    <>
      <h1>ROOT</h1>

      <nav>
        {rooms ? (
          <ul>
            {rooms.map((room: IRoom) => (
              <li key={room.id}>
                <Link to={`room/${room.id}`}>
                  {room.name && <span>{room.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>
            <i>LOADING...</i>
          </p>
        )}
      </nav>
    </>
  );
}

export default Root;
