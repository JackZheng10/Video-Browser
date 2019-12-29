import React from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail.js";
import YouTube from "../api/youtube.js";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onSearch = async term => {
    const response = await YouTube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
