import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

function useVideos(defaultSearchKeyword) {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchKeyword);
    }, [defaultSearchKeyword]);

    const search = async (keyword) => {
        const response = await youtube.get("/search", {
            params: {
                q: keyword
            }
        });

        setVideos(response.data.items);
        // setSelectedVideo(response.data.items[0]); //Default selected video
    }

    return [videos, search];
}

export default useVideos;