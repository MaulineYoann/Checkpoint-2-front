import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

function Hero({ hero }) {
  return (
    <div className="Hero">
        <Link to={ {pathname: `/${hero.id}`}}>
        <h3>{hero.name}</h3>

        </Link>
      <div className="containt">
        <img className="hero-img" src={hero.image} alt={hero.name} />
        <div className="stats">
          <span> Force :{hero.force}</span>
          <span> Vitesse :{hero.speed}</span>
          <span>Height : {hero.height}</span>
          <span>Weight : {hero.weight}</span>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
