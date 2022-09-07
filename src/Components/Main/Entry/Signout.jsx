import {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import {UserContext} from '../../../context/UserContext';

function Signout() {

    const {removeUserFromLS} = useContext(UserContext);
    const navigate = useNavigate();

    const signoutHandler = () => {
        removeUserFromLS("user");
        navigate("/")
    }

    useEffect(()=>{
        signoutHandler();
        // eslint-disable-next-line
    }, [])


    return null
   
}

export default Signout