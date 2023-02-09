import "./App.css";
import { Route, Routes } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";
<<<<<<< HEAD
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
=======
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
>>>>>>> 9d0b75567a75d36222ae13120b83cc8e76cb0ca2

function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route exact path="/" element={<ChatPage />} />
      <Route exact path="/Login" element={<LoginPage />} />
      <Route exact path="/Register" element={<RegisterPage />} />
=======
      <Route path="/" element={<ChatPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
>>>>>>> 9d0b75567a75d36222ae13120b83cc8e76cb0ca2
    </Routes>
  );
}

export default App;
