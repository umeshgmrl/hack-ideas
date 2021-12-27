import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "./store";

const tags = ["hot", "tech", "rockstar", "simple", "complex"];

const initialChallenge = {
    title: "",
    tags: "",
    votes: 0,
    description: "",
}

const AddChallenge = () => {
    const [challenge, setChallenge] = useState(initialChallenge);
    useEffect(() => {
        setChallenge(initialChallenge);
    }, [])
    const [selectedTags, setSelectedChallenges] = useState([]);
    let navigate = useNavigate();
    const addChallenge = useStore(state => state.addChallenge);
    const loadingItems = useStore(state => state.loadingItems);
    const handleSubmit = (e) => {
        e.preventDefault();
        const tempChallenge = { ...challenge };
        tempChallenge.tags = selectedTags;
        addChallenge(tempChallenge, navigate);
    }
    const handleChange = e => {
        const tempChallenge = { ...challenge };
        tempChallenge[e.target.name] = e.target.value;
        setChallenge(tempChallenge);
    }
    const handleSelectedChallenges = e => {
        setSelectedChallenges([...e.target.selectedOptions].map(el => el.value));
    }
    const { title, description } = challenge;

    return (
        <div className="add-challenge-container">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control">
                        <input
                            name="title"
                            placeholder="Title"
                            className="input"
                            type="text"
                            value={title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <br />
                <div className="field">
                    <label className="label">Description</label>
                    <div className="control">
                        <textarea
                            name="description"
                            placeholder="Description"
                            className="textarea"
                            rows="4"
                            value={description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <br />
                <div className="field">
                    <label className="label">Tags <span className="multi-select-help-text">can select multiple values</span></label>
                    <div className="control">
                        <span className="select is-primary is-multiple">
                            <select value={selectedTags} onChange={handleSelectedChallenges} multiple>
                                {
                                    tags.map(tag => {
                                        return <option key={tag} value={tag}>{tag}</option>
                                    })
                                }
                            </select>
                        </span>
                    </div>
                </div>
                <br />
                <button type="submit" className={`button is-primary ${loadingItems.includes("addChallenge") ? "is-loading" : ""}`}>Add Challenge</button>
            </form>
        </div>
    )
}

export default AddChallenge;