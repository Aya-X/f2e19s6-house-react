import { Link, useParams } from 'react-router-dom';

function Room(): JSX.Element {
  const { roomId } = useParams();

  return (
    <>
      <h1>ROOM</h1>
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
