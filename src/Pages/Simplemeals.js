import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Recipes.css';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footerm';

const recipesData = [
  {
    id: 1,
    title: 'Beef Pilau',
    ingredients: [
      '1 green capsicum (hoho)',
      '1 large onion',
      '4 large tomatoes',
      'Pilau masala',
      'A bunch of coriander (dhania)',
      '4 cups of rice',
      'Ginger and garlic',
      'Tomato paste',
      '400g of beef',
      '2 Beef cubes',
      'Oil',
      'Salt',
    ],
    instructions: (
      <div>
        <p>Take a clean saucepan (sufuria), put the beef add like a litre of water and bring the meat to a boil for ten minutes.</p>
        <p>Wash the tomatoes and put them in a small saucepan (sufuria) add water until it covers the tomatoes and bring to a boil.</p>
        {/* Continue with the remaining instructions */}
        {/* ... */}
      </div>
    ),
  },
  {
    id: 2,
    title: 'Fried Vegetable Rice',
    ingredients: [
      '1 Green capsicum (hoho)',
      '1 Red capsicum',
      '1 Yellow capsicum',
      '2 medium-size carrots',
      'One cup of pre-boiled peas',
      '1 large onion',
      '1 bunch of coriander (dhania)',
      'Dark Soy Sauce',
      '4 cups of rice / leftover rice can work too',
      'Oil',
      'Salt',
    ],
    instructions: (
      <div>
        <p>Take a clean medium-size saucepan (sufuria) put eight cups of clean water, some oil, and salt let the water boil as you wash the rice.</p>
        <p>Once the water has boiled, put your clean rice and let your rice boil under medium heat.</p>
        {/* Continue with the remaining instructions */}
        {/* ... */}
      </div>
    ),
  },
  {
    id: 3,
    title: 'Liver Stew',
    ingredients: [
      '400g liver',
      '1 Medium-size onion',
      '4 medium-size tomatoes',
      '1 green capsicum',
      'A bunch of coriander (dhania)',
      'Ginger',
      'Garlic',
      'Beef cubes',
      'Tomato paste',
      'Turmeric (optional)',
      'Black pepper (optional)',
      'Oil',
      'Salt',
    ],
    instructions: (
      <div>
        <p>Peel and wash all the vegetables and cut into cubes separately that is your onion, capsicum, tomatoes, and coriander (dhania).</p>
        <p>Take a clean medium-size saucepan (sufuria) add some oil and let it heat up a little then add the onion and capsicum let them cook for around two minutes then add one teaspoon of turmeric, half teaspoon of black pepper, and the ginger and garlic paste. Let it cook for another two minutes.</p>
        {/* Continue with the remaining instructions */}
        {/* ... */}
      </div>
    ),
  },
  // Add more recipes as needed
];


function RecipeCard({ title, ingredients, instructions }) {
  return (
    <div className='slider'>
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
    </div>
  );
}


function Simplemeals() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Simplemeals">
      <div className="Simplemealssec">
        <NavBar />
        <h1>Simple meals</h1>
      </div>



      <div className="section2">
        {/* Display recipes using the carousel */}
        <Slider {...settings}>
          {recipesData.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions}
            />
          ))}
        </Slider>
      </div>

      <div className="section3">
        <Footer />
      </div>
    </div>
  );
}

export default Simplemeals;

