import React from "react";

class SearchBar extends React.Component {

    state = { keyword: "" };

    onInputChange = (event) => {
        this.setState({ keyword: event.target.value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.keyword);
    }


    render() {
        return (
            <div className="ui search-bar segment" style={{ marginTop: "10px" }}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label className="ui">Video Search</label>
                        <input
                            type="text"
                            placeholder="Type keyword ..."
                            value={this.state.keyword}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar