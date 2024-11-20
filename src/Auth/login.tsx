import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  useGoogleLogin,
} from "@react-oauth/google";

const Login = ({ setUser }) => {
  const handleSuccess = (credentialResponse) => {
    const token = credentialResponse.access_token;
    fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((userInfo) => {
        localStorage.setItem("user", JSON.stringify(userInfo));
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Failed to fetch user info: ", error);
      });
  };
  const handelError = () => {
    console.log("log in Error");
  };

  const login = useGoogleLogin({
    onSuccess: handleSuccess,
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
