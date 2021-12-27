import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import RequireAuth from "./RequireAuth";
import useStore from "./store";

import Login from "./Login";
import Dashboard from "./Dashboard";
import AddChallenge from "./AddChallenge";
import { useEffect } from "react";

export function App() {
    const logoutUser = useStore(state => state.logoutUser);
    // const getChallenges = useStore(state => state.getChallenges);
    const loggedIn = useStore(state => state.user.loggedIn);
    return (
        <div className="container">
            <BrowserRouter>
                <header>
                    <Link to="/home" className="is-primary"><h1>Entropik Hack Ideas</h1></Link>
                    {loggedIn && <button className="button is-danger is-outlined is-small is-rounded" onClick={() => logoutUser()}>logout</button>}
                </header>
                <Routes>
                    <Route path="/" strict element={<Navigate to="/home" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/home" element={<RequireAuth><Dashboard /></RequireAuth>} />
                    <Route path="/add-challenge" element={<RequireAuth><AddChallenge /></RequireAuth>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
