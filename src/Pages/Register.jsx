import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function Register() {

    const [id, idchange] = useState("");
    const [password, passwordchange] = useState("");
    const [email, emailchange] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let regobj = { id, password, email };
        fetch("http://localhost:3003/users", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj)
            }).then((res) => {
                // toast.success('Registered successfully.')
                navigate('/login');
            }).catch((err) => {
                console.log('Failed :' + err.message);
            });
        
    }
    return (
        <div className="login-form">
            <form onSubmit={handlesubmit}>
                <h2 className="text-center">Register</h2>
                <div className="form-group">
                    <input value={id} onChange={e => idchange(e.target.value)} type="text" className="form-control" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <input value={email} type="email" onChange={e => emailchange(e.target.value)} className="form-control" placeholder="email" required="required" />
                </div>
                <div className="form-group">
                    <input value={password} type="password" onChange={e => passwordchange(e.target.value)} className="form-control" placeholder="Password" required="required" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </div>
                
            </form>
            <p className="text-center"><a href="#">Create an Account</a></p>
        </div>
    )
}
