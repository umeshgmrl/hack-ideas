import { useLocation, Navigate } from "react-router-dom";
import useStore from "./store";


const RequireAuth = ({ children }) => {
    const loggedIn = useStore(state => state.user.loggedIn);
    let location = useLocation();
    console.log(2, loggedIn);
    if (!loggedIn) {
        console.log(33)
        return <Navigate to="/login" state={{ from: location }} />;
    }
    console.log(44)
    return children;
}

export default RequireAuth;