import react, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

function Dashboard(props) {
    const { userInfos } = useContext(UserContext);
    console.log(userInfos);
    return (
        <>
            <h2>dashboard</h2>
            <p>welcome onboard {userInfos.alias}</p>
        </>
    );
}

export default Dashboard;
