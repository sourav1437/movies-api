// The code defines some initial values, including the API key for TMDB, API endpoints, and a default image URL.
// Initial Values
const MOVIE_DB_API = '6bf3b3542f9ff12290736047042a751d';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';
// This function is used to make a network request to the specified URL and handle the response. It uses the fetch function to make a GET request, parses the response as JSON, and then calls the onComplete function with the JSON data. If an error occurs during the fetch, it calls the onError function.
function requestMovies(url, onComplete, onError) {
    fetch(url)
        .then((res) => res.json())
        .then(onComplete)
        .catch(onError);
}
// This function takes a path as input and generates a complete URL for making API requests to TMDB. It appends the API key to the URL as a query parameter.
function generateMovieDBUrl(path) {
    const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
    return url;
}

// This function fetches the top-rated movies from TMDB using the generateMovieDBUrl function and then renders the movies using the renderMovies function. The renderMovies function is not shown in the provided code snippet.
function getTopRatedMovies() {
    const url = generateMovieDBUrl(`/movie/top_rated`);
    const render = renderMovies.bind({ title: 'Top Rated Movies' })
    requestMovies(url, render, handleGeneralError);
}
// This function fetches the trending movies (movies that are currently popular) from TMDB and then renders them using the renderMovies function.
function getTrendingMovies() {
    const url = generateMovieDBUrl('/trending/movie/day');
    const render = renderMovies.bind({ title: 'Trending Movies' })
    requestMovies(url, render, handleGeneralError);
}

// This function fetches the upcoming movies from TMDB and then renders them using the renderMovies function.
function searchUpcomingMovies() {
    const url = generateMovieDBUrl('/movie/upcoming');
    const render = renderMovies.bind({ title: 'Upcoming Movies' })
    requestMovies(url, render, handleGeneralError);
}
//  This function fetches popular movies from TMDB and then renders them using the renderMovies function.
function searchPopularMovie() {
    const url = generateMovieDBUrl('/movie/popular');
    const render = renderMovies.bind({ title: 'Popular Movies' });
    requestMovies(url, render, handleGeneralError);
}

// Invoke a different function for search movies
function searchMovie(value) {
    const url = generateMovieDBUrl('/search/movie') + '&query=' + value;
    requestMovies(url, renderSearchMovies, handleGeneralError);
}

// This function fetches videos related to a specific movie identified by movieId from TMDB and then creates a video template using the createVideoTemplate function. The createVideoTemplate function is not shown in the provided code snippet.
function getVideosByMovieId(movieId, content) {
    const url = generateMovieDBUrl(`/movie/${movieId}/videos`);
    const render = createVideoTemplate.bind({ content });
    requestMovies(url, render, handleGeneralError);
}