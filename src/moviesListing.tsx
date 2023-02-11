import React from "react";

const Movies: React.FC = () => {
    let [movies, setMovies] = React.useState<Movie[]>([]);

    React.useEffect(() => {
        useFetchMovies<Movie>("http://20.108.66.200:4000/movies").then(movies => {
            setMovies(movies)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    

    return (
        <div className="container">
            {movies.map((movie) => (
                <div className="container_movie">
                    <div className="poster"><img src={movie.poster}/></div>
                    <div key={movie.id}>{movie.title}</div>
                </div>
            ))}
        </div>
    )
}

interface Movie {
    id: number;
    title: string;
    poster: string;
}

function useFetchMovies<T>(url: string): Promise<T[]> {
    return fetch(url, {
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
      .then(response => {
        if (!response.ok) {
          console.log(response.statusText)
        }
        return response.json() as Promise<T[]>
      })
  }

export default Movies