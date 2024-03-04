import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Recipes.css';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footerm';

const coffeeData = [

];

function RecipeCard({ title, ingredients, instructions }) {
  return (
    <div className="recipe-card">
      <h2>{title}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <div>{instructions}</div>
    </div>
  );
}

function Coffee() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='Coffee'>
      <div className='coffeeSection'>
        <NavBar />
        <h1>Coffee</h1>
      </div>

      <div className="section2">
        <div className='slider'>
          <Slider {...settings}>
            {coffeeData.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                title={recipe.title}
                ingredients={recipe.ingredients}
                instructions={recipe.instructions}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className="section3">

        <Footer />

      </div>
    </div>
  )
}

export default Coffee