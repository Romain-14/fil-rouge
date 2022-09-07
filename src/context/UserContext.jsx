import { createContext, useState } from "react";
import {setLS, getLS, deleteLS} from '../lib/localstorage';


export const UserContext = createContext();

function UserContextProvider (props){
    const [userInfos, setUserInfos] = useState({isLogged: false});

    const saveUserToLS = (key, datas) => {
        setLS(key, datas);
    }

    const getUserFromLS = (key) => {
        const userInfosLS = getLS(key);
        setUserInfos(userInfosLS);
        return userInfosLS;
    }

    const removeUserFromLS = (key) => {
        deleteLS(key);
        setUserInfos({isLogged: false});
    }

    return (
        <UserContext.Provider value={{userInfos, saveUserToLS, getUserFromLS, removeUserFromLS}}>
            {props.children}
        </UserContext.Provider>
    )

}


export default UserContextProvider;