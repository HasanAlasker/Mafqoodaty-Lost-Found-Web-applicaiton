import { createContext, useContext, useEffect, useState } from "react";
import useApi from "../hooks/useApi";
import {
  createPost,
  deletePost,
  editPost,
  getAllFound,
  getAllLost,
} from "../api/posts";

export const PostContext = createContext();

export function usePost() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePost must be used within a provider");
  }
  return context;
}

export function PostProvider({ children }) {
  const [found, setFound] = useState([]);
  const [lost, setLost] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [status, setStatus] = useState(null);

  const {
    data: foundPosts,
    request: fetchFound,
    loading: fetchingFound,
    error: errFound,
  } = useApi(getAllFound);

  const {
    data: lostPosts,
    request: fetchLost,
    loading: fetchingLost,
    error: errLost,
  } = useApi(getAllLost);

  useEffect(() => {
    try {
      setLoading(true);
      fetchFound();
      fetchLost();
    } catch (error) {
      setError(true);
      setErrMsg(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setFound(foundPosts.data);
    setLost(lostPosts.data);
  }, [foundPosts, lostPosts]);

  // check if server is connected (add a new route tommorow)

  // create post
  const addPost = async (data) => {
    setError(false);
    setErrMsg(null);
    setLoading(true);

    try {
      const result = await createPost(data);

      if (!result.ok) {
        setError(true);
        setErrMsg(result.error);
        setStatus(result.status);
        return false;
      }

      const newPost = result.data;

      if (data.type === "lost") {
        setLost((prev) => [...prev, newPost]);
      } else {
        setFound((prev) => [...prev, newPost]);
      }

      setStatus(result.status);
      return true;
    } catch (err) {
      setError(true);
      setErrMsg(err.message || err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // edit post
  const updatePost = async (id, data) => {
    setError(false);
    setErrMsg(null);
    setLoading(true);

    try {
      const result = await editPost(id, data);

      if (!result.ok) {
        setError(true);
        setErrMsg(result.error);
        setStatus(result.status);
        return false;
      }

      const editedPost = result.data;

      if (data.type === "lost") {
        setLost((prev) =>
          prev.map((post) => (post._id === id ? editedPost : post))
        );
      } else {
        setFound((prev) =>
          prev.map((post) => (post._id === id ? editedPost : post))
        );
      }

      setStatus(result.status);
      return true;
    } catch (err) {
      setError(true);
      setErrMsg(err.message || err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // delete post
  const removePost = async (id) => {
    setError(false);
    setErrMsg(null);
    setLoading(true);

    try {
      const result = await deletePost(id);

      if (!result.ok) {
        setError(true);
        setErrMsg(result.error);
        setStatus(result.status);
        return false;
      }

      if (data.type === "lost") {
        setLost((prev) => prev.filter((post) => post._id !== id));
      } else {
        setFound((prev) => prev.filter((post) => post._id !== id));
      }

      setStatus(result.status);
      return true;
    } catch (err) {
      setError(true);
      setErrMsg(err.message || err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // verifyPassword
  const verifyPassword = async (id, data) => {};

  const value = {
    found,
    lost,
    loading,
    errMsg,
    error,
    status,
    addPost,
    updatePost,
    removePost,
    verifyPassword,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
