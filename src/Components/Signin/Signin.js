import "./Signin.css"
import Logo from "./Logo.png";
import lkdin from "./linkedIn.svg";
import twtr from "./twitter.svg";
import yt from "./youtube.svg";
import axios from "axios";

function Signin() {
    var handleSubmit = async (e) => {
        e.preventDefault();
        var uname = document.querySelector('#username').value;
        var pass = document.querySelector('#password').value;
        var data = {};
        if (uname && pass) {
            data = {
                "username": uname,
                "password": pass,
            }
            console.log(data);
        }
        else {
            alert("please enter all fields...");
        }
        await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/login",
            data: data,
            headers: {
                'accept': 'application/json',
                'content-type': 'multipart/form-data',
            },
        })
        .then(res=>{
            localStorage.setItem('vedtoken', res.data.token);
            localStorage.setItem('uname', res.data.uname);
            window.location.replace('/shop');
        })
        .catch(err => {
            alert(err.response.data.message);
        })
    }
    return (
        <>
            <div class="container" id="container">
                <div class="form-container log-in-container">
                    <form action="#">
                        <div className="nav">
                            <div className="logo">
                                <a href="/"><img src={Logo} /></a>
                            </div>
                            <div className="footer_middle_left_list">
                                <div className="footer_icons">
                                    <a href="https://www.linkedin.com">
                                        <img src={lkdin} alt={lkdin} /></a>
                                </div>
                                <div className="footer_icons">
                                    <a href="https://twitter.com/?lang=en">
                                        <img src={twtr} alt={twtr} /></a>
                                </div>
                                <div className="footer_icons">
                                    <a href="https://www.youtube.com/">
                                        <img src={yt} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <h1 class="main-heading">Sign In</h1>
                        <input type="text" placeholder="Username" id="username" required/>
                        <input type="password" placeholder="Password" id="password" required/>
                        <a href="#" class="forgot">Forgot your password?</a>
                        <button type="submit" onClick={handleSubmit}>Sign In</button>
                        <span>Don't have an account? <a href="/signup">Create now</a></span>
                    </form>
                </div>
	        </div>
        </>
    );
}

export default Signin;