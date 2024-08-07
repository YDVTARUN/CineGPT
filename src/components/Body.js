import React, { useEffect } from 'react';
import Login from './Login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Browse from './Browse';
import { auth } from '../utils/firebase';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Preview from './Preview';

const Body = () => {
  const dispatch = useDispatch();
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/selmov/:movie_id",
      element: <Preview />
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <div> 
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
