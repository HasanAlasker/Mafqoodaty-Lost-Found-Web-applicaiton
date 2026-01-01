import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import { PostProvider } from "./context/postContext";

function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/landing"} element={<Landing />} />
          <Route path={"/addPost"} element={<AddPost />} />
        </Routes>
      </PostProvider>
    </BrowserRouter>
  );
}

export default App;
