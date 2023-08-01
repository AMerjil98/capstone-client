import {Route, Routes} from "react-router-dom";
import {UserContextProvider} from "./UserContext";

import CreatePost from "./pages/create-post";
import EditPost from "./pages/editpost";
import Header from "./pages/header";
import IndexPage from "./pages/index-page";
import Layout from "./layout";
import Post from "./pages/post-1";
import PostPage from "./pages/postpage";

import '../src/styles/app.scss';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;