import { Link } from "react-router-dom";

const RoomListView = function (props) {
  const { rooms } = props;
  return (
    <>
      <h1>Rooms</h1>
      {rooms.map((room) => (
        <Link key={room.id} to={{ pathname: `rooms/${room.id}` }}>
          {room.title}
        </Link>
      ))}
    </>
  );
};

export default RoomListView;
