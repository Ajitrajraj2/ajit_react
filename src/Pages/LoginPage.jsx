import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import '../assets/style/login.css'

export default function LoginPage() {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:3003/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (resp.password === password) {
                        console.log('Success');
                        sessionStorage.setItem('username',username);
                        localStorage.setItem('user', resp.id)
                        usenavigate('/')
                }else{
                        console.log('Please Enter valid credentials');
                }
                }
            ).catch((err) => {
                console.log('Login Failed due to :' + err.message);
            });
        
    }
   
   
  return (

    <div className="login-form">
    <form onSubmit={ProceedLogin}>
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input value={username} onChange={e => usernameupdate(e.target.value)} type="text" className="form-control" placeholder="Username" required="required" />
        </div>
        <div className="form-group">
            <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control" placeholder="Password" required="required" />
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">Log in</button>
        </div>
            
    </form>
    <p className="text-center"><a href="/register">Create an Account</a></p>
</div>
  )
}
