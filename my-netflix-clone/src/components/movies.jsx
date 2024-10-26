import React, {useRef, useState, useEffect} from 'react';
import './movies.css';

const movies = [
  { id: 1, title: 'Rebel', img: '/images/rebel.webp' },
  { id: 2, title: 'Tokunbo', img: '/images/to.webp' },
  { id: 3, title: 'Uglies', img: '/images/uglies.webp' },
  { id: 4, title: 'Lisabi - The Uprising', img: '/images/Lisabi.webp' },
  { id: 5, title: 'Heaven', img: 'images/heaven.webp' },
  { id: 6, title: 'uprising', img: 'images/uprising.webp' },
  { id: 7, title: 'Dungerous', img: 'images/Dungerous.webp' },
  { id: 8, title: 'Shadow', img: 'images/shadow.webp' },
  { id: 9, title: 'Kondal', img: 'images/kondol.webp' },
  { id: 10, title: 'Marry', img: 'images/marry.webp' },
];

const Movies = () => {
  const sliderRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  const handleScroll = () => {
    if (sliderRef.current.scrollLeft > 0) {
      setIsScrolled(true); 
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    slider.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => slider.removeEventListener('scroll', handleScroll);
  }, []);
  return(
    <div className='movie-section'>
      <h2>Trending Now</h2>
      <div className="movie-slider">
      <button
          className={`arrow left ${!isScrolled ? 'hidden' : ''}`}
          onClick={scrollLeft}
        ></button>

      <div className="slider-container" ref={sliderRef}>
        {movies.map((movie,index) => (
          <>
       <div className="movie-card" key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <div className="rank">{movie.id}</div>
            </div>
      </>
          
        ))}
      </div>

      <button className="arrow right" onClick={scrollRight}>
      </button>
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
