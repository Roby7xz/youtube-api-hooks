import Axios from "axios";

const KEY = "AIzaSyBht0jyfG7FD_F4i6Vom_TQtyotQJtbVWg";

export default Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});