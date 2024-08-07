// import React from 'react';
// import { getAuth, signOut } from "firebase/auth";
// import { auth } from '../utils/firebase';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeUser } from '../utils/userSlice';

// const Header = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector(store => store.user);
//   const handleSignOut = () => {
//     signOut(auth).then(() => {
//       navigate("/");
//       dispatch(removeUser());
//       // Sign-out successful.
//     }).catch((error) => {
//       // An error happened.
//     });
//   }
//   return (
//     <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full h-30 flex justify-between items-center '>
//         <h1 className=' font-bold text-3xl text-red-600'>CineQuest</h1>
//         { user &&
//         (<div className='flex gap-10 items-center'>
//           <div>
//             <img width={45} className='rounded-lg' src='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg' alt='user-profile'/>
//           </div>
//           <button onClick={handleSignOut} className='cursor-pointer bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300'>Sign Out</button>
//         </div>)}
//     </div>
//   )
// }

// export default Header;

import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearch } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt?.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  }
  return (
    <div className="fixed top-0 left-0 right-0 px-8 z-50 py-2 bg-gradient-to-b from-black  w-full flex justify-between items-center">
      <h1 className="font-bold text-3xl text-red-600">CineQuest</h1>
      {user && (
        <div className="flex gap-10 items-center">
          <button className="py-2 px-4 m-2 text-white bg-purple-600 rounded-md"
           onClick={handleGptSearch}>

            {showGptSearch ? "Home" : "GPT search"}
          </button>
          <div>
            <img
              width={45}
              className="rounded-lg"
              src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
              alt="user-profile"
            />
          </div>
          <button
            onClick={handleSignOut}
            className="cursor-pointer bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
