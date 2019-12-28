import React from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList.js";
import YouTube from "../api/youtube.js";

class App extends React.Component {
  state = { videos: [] };

  onSearch = async term => {
    const response = await YouTube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
