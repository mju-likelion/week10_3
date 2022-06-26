import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Manage from "../src/pages/Manage";
import Education from "../src/pages/Education";
import President from "../src/pages/President";
import Promotion from "../src/pages/Promotion";
import Development from "./pages/Development";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Development" element={<Development />} />
      <Route path="/Manage" element={<Manage />} />
      <Route path="/Education" element={<Education />} />
      <Route path="/President" element={<President />} />
      <Route path="/Promotion" element={<Promotion />} />
    </Routes>
  );
}

export default App;
