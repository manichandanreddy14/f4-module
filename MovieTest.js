import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies, selectedGenre } = this.props;
    return (
      <div className="movie-list">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => {
              if (!selectedGenre || movie.genre === selectedGenre) {
                return (
                  <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.year}</td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MovieList;
