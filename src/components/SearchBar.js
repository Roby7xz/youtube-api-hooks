import React, { useState } from "react";

function SearchBar({ onFormSubmit }) {

    const [keyword, setKeyword] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(keyword);
    }

    return (
        <div className="ui search-bar segment" style={{ marginTop: "10px" }}>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label className="ui">Video Search</label>
                    <input
                        type="text"
                        placeholder="Type keyword ..."
                        value={keyword}
                        onChange={(event) => setKeyword(event.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;