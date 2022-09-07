import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Header() {
    const { userInfos } = useContext(UserContext);

    console.log(userInfos);

    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="shop">shop</Link>
                {!userInfos?.isLogged ? (
                    <Link to="entry">sign in/up</Link>
                ) : (
                    <>
                        <Link to="entry/dashboard">dashboard</Link>
                        <Link to="entry/signout">sign out</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
