import Axios from "axios";

//will not work on URLs other than localhost:3000 within a browser
const APIKEY = "AIzaSyD80EAey3MljJ074Lu9ALK_Ae2mt6bozlg";

export default Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: APIKEY
  }
});
