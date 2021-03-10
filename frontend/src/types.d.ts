declare module "*.scss";
interface IRoom {
  id?: string;
  title: string;
  tasks: ITask[];
  logs: ILog[];
}

interface ITask {
  id?: string;
  title: string;
  isDone: boolean;
}

interface ILog {
  id?: string;
  duration: number;
  elapsed: number;
  status: string;
}

interface ITimerProps {
  duration: number;
  onTimeUp();
}
