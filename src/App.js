import "./App.css";
import { Router, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/" component={ChatPage} />
        <Route exact path="/Login" component={LoginPage} />
        <Route exact path="/Register" component={RegisterPage} />
        
      </switch>
    </Router>
  );
}

export default App;
