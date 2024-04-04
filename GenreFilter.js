import React from 'react';

class GenreFilter extends React.Component {
  render() {
    const { genres, onGenreSelect } = this.props;
    return (
      <div className="genre-filter">
        <h3>Filter by Genre:</h3>
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onGenreSelect(genre)}>{genre}</button>
        ))}
      </div>
    );
  }
}

export default GenreFilter;
