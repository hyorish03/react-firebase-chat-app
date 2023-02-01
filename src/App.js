import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ChatPage />} />
      <Route exact path="/Login" element={<LoginPage />} />
      <Route exact path="/Register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
