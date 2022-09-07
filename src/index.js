import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import UserContextProvider from './context//UserContext';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <UserContextProvider>
        <Router>
            <App />
        </Router>
    </UserContextProvider>
);
