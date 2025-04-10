export const GOOGLE_API_KEY = "AIzaSyDODfLSV2O5UeBtR7sTl1ML-Pye-1jigLg";

export const YOUTUBE_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&key=" +
  GOOGLE_API_KEY +
  "&q=";

// "https://youtube-search-suggestion.onrender.com/?q=";
// "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&";

// "https://suggestqueries.google.com/complete/search?client=firefox&q=";
