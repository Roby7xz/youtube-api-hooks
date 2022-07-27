import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../api/youtube";
import VideoList from "./VideoList";

class App extends React.Component {

  state = { videos: [] };

  onKeywordSubmit = async (keyword) => {
    const response = await youtube.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onKeywordSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
