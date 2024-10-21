import React from 'react';
import './movies.css';

const Movies = () => {
  return(
    <div className='movie-section'>
      <h2>Trending Now</h2>
       <div className="movie-row">
        <img src="/images/heaven.webp" alt="movie-1" />
        <img src="/images/Hitman.webp" alt="movie-2" />
        <img src="/images/Lisabi.webp" alt="movie-3" />
        <img src="/images/Dungerous.webp" alt="movie-5" />
       </div>
    <h2>More Reason To Join</h2> 
    <div class="row all-about">
      <div class="col-3 col-2 about">
        <h3>Enjoy on your TV</h3>
        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <div class="col-3 col-2 about">
        <h3>Download your shows to watch offline</h3>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div class="col-3 col-2 about">
        <h3>Watch everywhere</h3>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <div class="col-3 col-2 about">
        <h3>Create profile for kids</h3>
        <p>Send kids on adventures with their favorite characters in a space made just for them — free with your membership.</p>
      </div>
    </div>
    </div>
  );
};

export default Movies;
