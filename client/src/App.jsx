import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/addPost"} element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
