import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Recipes.css';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footerm';

const saladsData = [
  {
    id: 1,
    title: 'Kachumbari',
    ingredients: ['4 large onions', '4 large tomatoes', '1 bunch of coriander (dhania)', '1 large carrot (optional)', '1 teaspoon of salt',
      'Some hot water', 'Zesta hot and sweet sauce'],
    instructions: (
      <div>
        <p>Wash and chop your onions into cubes and put them into a clean bowl. In the bowl add one teaspoon of salt and some hot water. Soak for about 2-5 minutes. We do this to remove the bitter taste in the raw onions.</p>
        <p>As the onions are soaking, wash and chop your tomatoes into cubes and put them in a clean bowl.</p>
        <p>Peel your carrot, wash it, then grate it.</p>
        <p>Add the grated carrot into the bowl that has the chopped tomatoes.</p>
        <p>By now your soaking time is over, drain the water in the onions completely, then add the chopped onions in the bowl with the tomatoes and carrots.</p>
        <p>Wash your coriander (dhania) and chop it into small size, add it to the other ingredients.</p>
        <p>Take your Zesta hot and sweet sauce and add it all to your ingredients in the bowl. Then mix it all up using a spoon.</p>
        <p>Best served with Pilau, fried rice, fries, and baked potatoes, but one can try with any meal, no limitations. NB: If you are not a chili person, you can use Zesta tomato sauce.</p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Coleslow',
    ingredients: [
      '4 large onions',
      '4 large tomatoes',
      '1 bunch of coriander (dhania)',
      '1 large carrot (optional)',
      '1 teaspoon of salt',
      'Some hot water',
      'Zesta hot and sweet sauce',
    ],
    instructions: (
      <div>
        <p>Wash the cabbage and chop it into small size, put it into a large bowl.</p>
        <p>Peel the carrots, wash them, then grate them.</p>
        <p>Add the grated carrots into the chopped cabbage.</p>
        <p>Peel up the pineapple and chop it into cubes, then add it to the chopped cabbage and the grated carrots.</p>
        <p>Take the mayonnaise and add it to the ingredients in the bowl.</p>
        <p>Add two to three tablespoons of sugar into the bowl.</p>
        <p>Mix all the ingredients up. There you have your coleslaw.</p>
        <p>Best served with rice, fries, or Pilau.</p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Cabbage Salad',
    ingredients: [
      'Small size cabbage',
      '2 medium size onions',
      '1 large carrot',
      '1 large lemon',
      '1 tablespoon of sugar',
      '1 tablespoon of salad oil',
    ],
    instructions: (
      <div>
        <p>Wash and chop the cabbage into small size. Put the chopped cabbage into a clean large bowl.</p>
        <p>Peel the onions and chop them into small size. Add the chopped onions into the chopped cabbage.</p>
        <p>Peel and wash the carrot, then grate it.</p>
        <p>Add the grated carrot into the chopped cabbage and onions.</p>
        <p>Add sugar and one tablespoon of salad oil into the bowl with the cabbage, onions, and grated carrot.</p>
        <p>Wash the lemon and cut it into half. Squeeze the lemon juice into the other ingredients and mix all the ingredients up using a spoon.</p>
        <p>Best served with fries, roasted potatoes, baked potatoes. Can try with other dishes.</p>
      </div>
    ),
  },
  // Add more recipes as needed
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


function Salads() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Salads">
      <div className="saladsection">
        <NavBar />
        <h1>Salads</h1>
      </div>

      <div className='section2'>
        <div className='slider'>
          {/* Display recipes using the carousel */}
          <Slider {...settings}>
            {saladsData.map((recipe) => (
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

export default Salads