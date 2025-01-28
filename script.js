function searchMovies(event) {
    event.preventDefault(); 

    const query = document.getElementById("query").value.trim();
    if (!query) return;

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '<p class="text-center">Loading...</p>';

    fetch(`http://localhost:3000/api/movies?query=${query}`)
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch data");
            return response.json();
        })
        .then(movies => {
            resultsDiv.innerHTML = "";
            if (movies.length === 0) {
                resultsDiv.innerHTML = '<p class="text-center">No movies found</p>';
                return;
            }
            movies.forEach(movie => {
                const movieCard = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="card-img-top" alt="${movie.title}">
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                <p class="card-text">${movie.overview || "No description available"}</p>
                            </div>
                        </div>
                    </div>
                `;
                resultsDiv.innerHTML += movieCard;
            });
        })
        .catch(error => {
            resultsDiv.innerHTML = `<p class="text-danger text-center">Error: ${error.message}</p>`;
        });
}

function fetchPopularMovies() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = '<p class="text-center">Loading popular movies...</p>';

    fetch(`http://localhost:3000/api/popular-movies`)  
        .then(response => {
            if (!response.ok) throw new Error("Failed to fetch data");
            return response.json();
        })
        .then(movies => {
            resultsDiv.innerHTML = "";
            if (movies.length === 0) {
                resultsDiv.innerHTML = '<p class="text-center">No popular movies found</p>';
                return;
            }

           
            movies.forEach(movie => {
                const movieCard = `
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" class="card-img-top" alt="${movie.title}">
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                <p class="card-text">${movie.overview || "No description available"}</p>
                            </div>
                        </div>
                    </div>
                `;
                resultsDiv.innerHTML += movieCard;
            });
        })
        .catch(error => {
            resultsDiv.innerHTML = `<p class="text-danger text-center">Error: ${error.message}</p>`;
        });
}