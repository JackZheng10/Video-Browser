import React from "react";
import SearchBar from "./SearchBar.js";
import VideoList from "./VideoList.js";
import VideoDetail from "./VideoDetail.js";
import YouTube from "../api/youtube.js";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearch("github");
  }

  onSearch = async term => {
    const response = await YouTube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearch={this.onSearch} />
        <div className={"ui grid"}>
          <div className={"ui row"}>
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
