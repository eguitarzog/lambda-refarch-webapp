import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "use-http";
import styles from "../styles/room.module.scss";
import create, { SetState, GetState } from "zustand";
import Timer from "./Timer";

type IRoomViewStore = {
  isEditing: boolean;
  setIsEditing(isEditing: boolean);
};

const useRoomViewStore = create<IRoomViewStore>(
  (set: SetState<IRoomViewStore>, get: GetState<IRoomViewStore>) => ({
    isEditing: false,
    setIsEditing: (isEditing) => set({ isEditing }),
  })
);

const RoomView = () => {
  const { id } = useParams();
  const [room, setRoom] = useState<IRoom>();
  const { get, post, patch, del, response, loading, error } = useFetch(
    "http://localhost:8000"
  );

  useEffect(() => {
    getRoom(id);
  }, []);

  const { isEditing, setIsEditing } = useRoomViewStore(
    ({ isEditing, setIsEditing }) => ({
      isEditing,
      setIsEditing,
    })
  );

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    console.error(error);
    return <>Error</>;
  }

  async function getRoom(id) {
    const room = await get(`/rooms/${id}?_embed=tasks`);
    if (response.ok) {
      setRoom(room);
    }
  }

  async function createTask(roomId: string, title: string) {
    const newTask = await post(`/rooms/${roomId}/tasks`, {
      title,
      isDone: false,
    });
    if (response.ok && room) {
      setRoom({ ...room, tasks: [...room.tasks, newTask] });
    }
  }

  async function deleteTask(id) {
    await del(`/tasks/${id}`);
    if (response.ok && room) {
      const tasks = room.tasks.filter(({ id: taskId }) => taskId !== id);
      setRoom({ ...room, tasks });
    }
  }

  async function updateTask(id, options) {
    const updatedTask = await patch(`/tasks/${id}`, options);
    console.log("updatedTask", updatedTask);
    if (response.ok && room) {
      const tasks = room.tasks.map((task) =>
        task.id === id ? updatedTask : task
      );
      setRoom({ ...room, tasks });
    }
  }

  return room ? (
    <>
      <h1>{room.title}</h1>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      {room.tasks?.map((task) => (
        <div className={styles.task} key={task.id}>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={(event) =>
              updateTask(task.id, { isDone: event.target.checked })
            }
          />
          <div>{task.title}</div>
          {isEditing && (
            <button onClick={() => deleteTask(task.id)}>del</button>
          )}
        </div>
      ))}
      <button onClick={() => createTask("1", "my task")}>+ New Task</button>

      <Timer
        onTimeUp={() => {
          console.log("time up");
        }}
        duration={3000}
      />

      <div>
        {room.logs?.map((log) => (
          <div key={log.id}>{log.duration}</div>
        ))}
      </div>
    </>
  ) : (
    <></>
  );
};

export default RoomView;
