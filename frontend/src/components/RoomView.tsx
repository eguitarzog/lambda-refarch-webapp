import { useParams } from "react-router-dom";
import useFetch from "use-http";
import styles from "../styles/room.module.scss";

const RoomView = function () {
  const { id } = useParams();
  const { loading, error, data = {} } = useFetch(`/room.json?id=${id}`, {}, []);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    console.error(error);
    return <>Error</>;
  }

  const room: IRoom = data;
  console.log("render");

  return (
    <>
      <h1>{room.title}</h1>
      <div className={styles.task}>
        <input type="checkbox" />
        {room.tasks?.map((task) => (
          <div key={task.id}>{task.title}</div>
        ))}
      </div>
      <div>
        {room.logs?.map((log) => (
          <div key={log.id}>{log.duration}</div>
        ))}
      </div>
    </>
  );
};

export default RoomView;
