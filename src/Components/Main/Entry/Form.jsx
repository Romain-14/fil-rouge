import React, { useContext, useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {UserContext} from '../../../context/UserContext';
import { validate } from "../../../lib/sanitize";
import spinner from './spinner.svg';

function Form({formType}) {
    const {saveUserToLS, getUserFromLS} = useContext(UserContext);
    
    const navigate = useNavigate();
    const timer = useRef(null);
    const tag = useRef(null);
    const [inputs, setInputs] = useState({ alias: "", password: "" });
    const [isDisabled, setIsDisabled] = useState(false);

    const [redirect, setRedirect] = useState(false);

    const [msg, setMsg] = useState(null);


    const handleSignin = () => {
        const resLS = getUserFromLS("user");
        const validated = validate("signin", inputs, resLS);
        setMsg(validated); 
        if(validated === true) {
            setRedirect(true);
            resLS.isLogged = true;
            saveUserToLS("user", resLS);
            handleRedirect("dashboard");
        }       
    }

    const handleSignup = () => {
        const validated = validate("signup", inputs);
        setMsg(validated); 
        if(validated === true) {
            setRedirect(true);
            saveUserToLS("user", inputs);
            handleRedirect("signin");
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(formType === "signin"){
            handleSignin();
        }
        if(formType === "signup"){
            handleSignup();
        }
        setInputs({alias: "", password: "" });        
    };

    const handleRedirect = (redirectTo) => {
        timer.current = setTimeout(() => {            
            navigate(redirectTo === "dashboard" ? `/entry/${redirectTo}` : "..");
        }, 2000);       
    }

    useEffect(()=>{
        return () => {           
            setRedirect(false);
            clearTimeout(timer.current);
            timer.current = null;
            } 
    }, [])

    return (
    
        <form onSubmit={onSubmitHandler}>

            {redirect && <img src={spinner} alt=""/>}

            <fieldset ref={tag}>
                <legend>{formType === "signin" ? "Sign in" : "Sign up" }</legend>
                <input
                    type="text"
                    placeholder="alias"
                    value={inputs.alias}
                    onChange={(e) =>
                        setInputs({ ...inputs, alias: e.target.value })
                    }
                />
                <input
                    type="password"
                    placeholder="password"
                    value={inputs.password}
                    onChange={(e) =>
                        setInputs({ ...inputs, password: e.target.value })
                    }
                    />
                {msg && <p>{msg}</p>}

                <input type="submit" value="send" disabled={isDisabled}/>
            </fieldset>
        </form>
   
    );
}

export default Form