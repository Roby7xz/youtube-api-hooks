import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../api/youtube";

class App extends React.Component {
  onKeywordSubmit = async (keyword) => {
    await youtube.get("/search", {
      params: {
        q: keyword
      }
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onKeywordSubmit} />
      </div>
    )
  }
}

export default App;
