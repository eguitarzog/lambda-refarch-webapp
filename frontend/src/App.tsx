import './App.scss';
import RoomView from './components/RoomView';

const rooms: IRoom[] = [{ title: 'Work' }];

function App() {
  return (
    <>
      <div className='App'>Rooms</div>
      <RoomView rooms={rooms}></RoomView>
    </>
  );
}

export default App;
