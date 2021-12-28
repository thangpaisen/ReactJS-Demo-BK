
import { useEffect, useState } from 'react';

export default function LoginForm() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleValue = (value, type) => {
        console.log("handleValue");
        let trimValue = value.trim();
        if (type == "name") {
            setUserName(trimValue)
        } else {
            setPassword(trimValue)
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>Welcome to React App</h2>
                <p>Please login to continue ...</p>
                <div className='inputCont'>
                    <input className='inputBox' placeholder='User Name ...' value={userName} onChange={(name) => { handleValue(name.target.value, "name") }} />
                    <input className='inputBox' placeholder='Password ...'type={"password"} value={password} onChange={(pw) => { handleValue(pw.target.value, "password") }} />
                </div>
                <button disabled={(userName !== "" && password !== "" ? false : true)} className='loginBtn' type="button" onClick={() => { if (userName !== "" && password !== "") window.location.href = 'http://localhost:3000/countdown' }}> Login </button>
            </header>
        </div >
    );
}