import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Feed from "./Components/Feed/Feed";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/signup"/>} />
      </Routes>
    </div>
  );
}

export default App;
