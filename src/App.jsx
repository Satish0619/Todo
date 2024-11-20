import "./App.css";
import "./index.css";
import TodoList from "./components/TodoList";
import Login from "./Auth/login";
import { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("user")?.toString() || "");
  }, []);

  return (
    <div>
      <GoogleOAuthProvider clientId="986922549313-6v4spr7hq92l24pfuapecjm1jbj2n5cb.apps.googleusercontent.com">
        {user ? <TodoList /> : <Login setUser={setUser} />}
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
