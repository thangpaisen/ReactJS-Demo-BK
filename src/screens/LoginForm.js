import { useEffect, useState } from "react";
import { login } from "../api/api.js";
import { useHistory } from "react-router-dom";
import "./styles.css";
export default function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const history = useHistory();
  const handleValue = (value, type) => {
    console.log("handleValue");
    let trimValue = value.trim();
    if (type == "name") {
      setUserName(trimValue);
    } else {
      setPassword(trimValue);
    }
  };
  const handleOnLogin = async () => {
    try {
      console.log("handleOnLogin", userName, password);
      let { data } = await login(userName, password);
      console.log("data", data);
      if (data.status !== "success") {
        setStatus(data.message);
      } else {
        setStatus("");
        localStorage.setItem("UserInfo",JSON.stringify(data.data));
        window.location.href = "/";
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to React App</h2>
        <p>Please login to continue ...</p>
        <p className="status">{status}</p>
        <div className="inputCont">
          <input
            className="inputBox"
            placeholder="User Name ..."
            value={userName}
            onChange={(name) => {
              handleValue(name.target.value, "name");
              if(status) setStatus("")
            }}
          />
          <input
            className="inputBox"
            placeholder="Password ..."
            type={"password"}
            value={password}
            onChange={(pw) => {
              handleValue(pw.target.value, "password");
              if(status) setStatus("")
            }}
          />
        </div>
        <button
          disabled={userName !== "" && password !== "" ? false : true}
          className="loginBtn"
          type="button"
          onClick={() => {
            if (userName !== "" && password !== "") handleOnLogin();
          }}
        >
          Login
        </button>
      </header>
    </div>
  );
}
