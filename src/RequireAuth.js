import { useLocation, Navigate } from "react-router-dom";
import useStore from "./store";


const RequireAuth = ({ children }) => {
    const loggedIn = useStore(state => state.user.loggedIn);
    let location = useLocation();
    
    if (!loggedIn) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}

export default RequireAuth;