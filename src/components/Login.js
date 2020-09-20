import React from "react";
import { auth, provider } from "../config/firebase";

// assets
import "../assets/css/login.css";
import facebookTextLogo from "../assets/images/facebook-logo.png";
import Button from "@material-ui/core/Button";
import {useStateValue} from '../dataLayer/Provider';
import {actionTypes} from '../dataLayer/reducer';

function Login(props) {
  const [{}, dispatch] = useStateValue();

  const singIn = () => {
    // sign in stuff
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          payload: result.user
        })
      })
      .catch(e => alert(e.message));
  };
  return (
    <div className="login">
      <div className="login__top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt=""
        />
        <img src={facebookTextLogo} alt="" />
      </div>
      <Button className={"login__singin"} type={"submit"} onClick={singIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
