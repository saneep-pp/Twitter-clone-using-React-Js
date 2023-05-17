import './App.scss';

import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import LeftPane from './Components/leftPanel/leftPanel';
const App=()=> {
  return (
    <Router>
    <div className="App">
      <LeftPane></LeftPane>
      <Switch>
        <Route path="/" exact>Home</Route>
        <Route path="/explore" exact>Explore</Route>
        <Route path="/notifications" exact>Notifications</Route>
        <Route path="/messages" exact>Messages</Route>
        <Route path="/bookmarks" exact>Bookmarks</Route>
        <Route path="/lists" exact>Lists</Route>
        <Route path="/profile" exact>Profile</Route>
      </Switch>
      <div className='right-pane'>
         <div>RightPane</div>
      </div>
    </div>
    </Router>
  );
}

export default App;
