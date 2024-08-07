import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {  updateProfile } from "firebase/auth";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();
  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleClick = () => {
    //console.log(email.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!isSignIn) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: "Tarun Yadav", photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            navigate("/browse");
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });

         // console.log(user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //setErrorMsg(errorCode,errorMessage)

          // ..
        });
    } else {
     
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        //   console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg("user not found")
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className=" absolute">
        <img
          
          src={BG_URL}           />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 absolute p-12  my-36 mx-auto bg-black bg-opacity-80 right-0 left-0 text-white"
      >
        <h1 className=" font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-black border border-blue-100 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-black border border-blue-100 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full  bg-black border border-blue-100 rounded-md"
        />
        <p className=" my-6 text-red-700">{errorMsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-md"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          <span className="hover:cursor-pointer" onClick={toggleForm}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
