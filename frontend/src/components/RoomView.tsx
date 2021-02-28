const RoomView = function (props) {
  const { rooms } = props;
  return (
    <>
      {rooms.map((room) => (
        <div>{room.title}</div>
      ))}
    </>
  );
};

export default RoomView;
