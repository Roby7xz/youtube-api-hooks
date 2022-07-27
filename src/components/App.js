import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onKeywordSubmit("Sabaton");
  }

  onKeywordSubmit = async (keyword) => {
    const response = await youtube.get("/search", {
      params: {
        q: keyword
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0] //Default selected video
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onKeywordSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
