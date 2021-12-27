import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import useStore from "./store";
const sortOptions = ["Time", "Votes"];

const Dashboard = () => {
    const challenges = useStore(state => state.challenges);
    const loadingItems = useStore(state => state.loadingItems);
    const getChallenges = useStore(state => state.getChallenges);
    useEffect(() => {
        getChallenges();
    }, []);
    const [sortOption, setSortOption] = useState("Time");
    const upvoteChallenge = useStore(state => state.upvoteChallenge);
    const handleSortChange = e => {
        setSortOption(e.target.value);
    }
    let sortedChallenges = [...challenges].slice();
    if (sortOption === "Votes") {
        sortedChallenges.sort((a, b) => {
            if (b.votes > a.votes) {
                return 1;
            }
            if (a.votes > b.votes) {
                return -1;
            }
            return 0;
        });
    } else {
        sortedChallenges.sort((a, b) => {
            if (new Date(b.created_at) > new Date(a.created_at)) {
                return 1;
            }
            if (new Date(a.created_at) > new Date(b.created_at)) {
                return -1;
            }
            return 0;
        });
    }
    if (loadingItems.includes("challenges")) {
        return <div className="is-flex is-justify-content-center loading-container">
            <button className="button is-loading is-large">Loading</button>
        </div>
    }
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="sort-container" >
                    <span>Sort by: &nbsp;&nbsp;</span>
                    <span className="select is-primary">
                        <select onChange={handleSortChange}>
                            {
                                sortOptions.map((el, id) => {
                                    return <option key={id}>{el}</option>
                                })
                            }
                        </select>
                    </span>
                </div>
                <div>
                    <Link className="button is-primary is-outlined" to="/add-challenge">Create new challenge</Link>
                </div>
            </div>
            <br />
            {
                sortedChallenges.map((chanllenge, id) => {
                    return (
                        <div className="box challenge" key={id}>
                            <h2>{chanllenge.title}</h2>
                            <span className="votes">
                                <span className="tag is-primary is-light">Votes: {chanllenge.votes}</span>
                                &nbsp;
                                &nbsp;
                                <span className="upvote" onClick={() => upvoteChallenge(chanllenge.id, chanllenge.votes + 1)}>👍🏽</span>
                            </span>
                            <p>{chanllenge.description}</p>
                            <div className="tags">
                                {chanllenge.tags.map((tag, keyId) => {
                                    return <span key={keyId} className="tag is-success">{tag}</span>
                                })}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Dashboard;