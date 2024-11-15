import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";

const Login = ({ setUser }) => {
  const handelSuccess = (credentialRespons) => {
    console.log("log in success", credentialRespons);
    setUser(credentialRespons);
    localStorage.setItem("user", JSON.stringify(credentialRespons));
  };

  const handelError = () => {
    console.log("log in Error");
  };

  const login = useGoogleLogin({
    onSuccess: handelSuccess,
    onError: handelError,
  });
  return (
    <div className="flex items-center justify-normal  h-screen w-full">
      
      <div className="text-white flex  justify-between m-auto border bg-white  p-3  px-5 rounded-full" onClick={()=>login()}>
        <img src="Google_logo.png" alt="" className="w-7 h-6 rounded-lg me-3" />
        <p className="font-bold text-black">Google log in</p>
        <img src="treeDots.png" alt="" className="ms-3" />
      </div>
    </div>
  );
};

export default Login;
