import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import wretch from "wretch";

const RoomView = function () {
  const { id } = useParams();
  const [room, setRoom] = useState<IRoom | undefined>();

  useEffect(() => {
    wretch(`/room.json?id=${id}`)
      .get()
      .json((json) => {
        setRoom(json as IRoom);
      });
  });

  return <>{room ? <h1>{room.title}</h1> : <>Not Found</>}</>;
};

export default RoomView;
