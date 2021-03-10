import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RoomListView from "./components/RoomListView";
import RoomView from "./components/RoomView";

const rooms: IRoom[] = [{ id: "1", title: "Work", tasks: [], logs: [] }];

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <RoomListView rooms={rooms} />
          </Route>
          <Route path="/rooms/:id">
            <RoomView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
