import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface IRoom {
  id: number;
  name: string;
}

function Root(): JSX.Element {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    function getRooms() {
      const requestOptions = {
        method: 'GET',
        headers: {
          Authorization: import.meta.env.VITE_APP_TOKEN,
        },
      };

      fetch(
        'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        requestOptions,
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setRooms(result.items);
        })
        .catch((error) => console.log('ERROR:::', error));
    }

    getRooms();
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
