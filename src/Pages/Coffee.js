import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Recipes.css';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footerm';

const coffeeData = [
  {
    id: 1,
    title: "Homemade Mocha Coffee",
    ingredients: [
      "Instant coffee",
      "Drink chocolate",
      "Sugar",
      "Hot water",
      "Milk"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Take a clean mug add one teaspoon of instant coffee, one teaspoon of drinking chocolate, two teaspoon of sugar and two teaspoon of hot water. Stir for an even solution and put it aside.</li>
          <li>Take a small saucepan (sufuria) put your milk and bring it to a boil.</li>
          <li>Once your milk is boiled put it into a heat-resistant bottle and shake it till the milk is all foamy.</li>
          <li>Swirl your bottle then pour the milk into your mug as the mug is slanted to get the best mocha coffee.</li>
          <li>Best served with cookies, cakes.</li>
        </ul>
      </div>
    )
  },

  {
    id: 2,
    title: "Homemade Cappuccino with Latte Art",
    ingredients: [
      "Instant coffee",
      "Sugar",
      "Hot water",
      "Dark Chocolate bar",
      "Milk"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Take a clean bowl add one tablespoon of coffee, one tablespoon of sugar and one tablespoon of hot water. Mix them with a spoon for an even solution then take a fork or a whisk, whisk the coffee solution till you form a creamy brown paste. Put it aside.</li>
          <li>Take a clean saucepan (sufuria) add your milk and bring it to a boil.</li>
          <li>Take a cappuccino cup or any cup you want to use then add your paste to it and as the cup is slanted add your boiled milk gently till the cup is full.</li>
          <li>Take a spoon and mix gently.</li>
          <li>For the latte art a flower design:</li>
          <ul>
            <li>Melt your dark chocolate under medium heat to form a chocolate syrup. You can just buy a chocolate syrup from a shop or rather just use drinking chocolate and water to form a thick chocolate syrup.</li>
            <li>Put your chocolate syrup into a plastic bag make a small hole and on the cappuccino draw three rings using your syrup.</li>
            <li>Using a toothpick from your first ring draw your toothpick outside do this repeatedly like 6 times and there you will have latte art on your homemade cappuccino.</li>
          </ul>
        </ul>
      </div>
    )
  },

  {
    id: 3,
    title: "Homemade Mocha Frappuccino",
    ingredients: [
      "Ice cubes",
      "500ml Milk",
      "2 tablespoon Icing sugar or normal sugar",
      "Vanilla essence",
      "2 tablespoon of Instant coffee",
      "2 tablespoon of drinking chocolate",
      "Whipping cream",
      "Water"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Take two small cups, in one cup add the instant coffee and add two tablespoon of water to make a coffee solution. The other cup add the drinking chocolate and add two tablespoon of water to form a chocolate solution. Put the solutions aside.</li>
          <li>Take your blender add your ice cubes, milk one tablespoon of icing sugar, one teaspoon of vanilla extract, the coffee solution and the chocolate solution, then blend all the ingredients to form a uniform solution.</li>
          <li>Pour the mixture into a glass and top it up with whip cream and decorate the cream using chocolate syrup. To make it more presentable.</li>
          <li>Best served after meals.</li>
        </ul>
      </div>
    )
  },
  {
    id: 4,
    title: "Homemade Coffee Caramel Frappuccino",
    ingredients: [
      "Ice cubes",
      "Milk",
      "Caramel sauce",
      "Whip cream",
      "Melted white chocolate",
      "Instant coffee",
      "Sugar",
      "Vanilla essence",
      "Water"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Take a mixing bowl add your whip cream, whisk it until all fluffy. Add one cup of instant coffee mixture, the melted white chocolate and caramel sauce whisk them all and put the mixture into a fridge to chill.</li>
          <li>Take your blender add 500ml of cold coffee, one cup of milk, one tablespoon of sugar, some caramel sauce, ice cubes and one teaspoon of vanilla essence. Blend all to for a uniform mixture.</li>
          <li>Take a glass using a piping bag put some whip cream mixture at the bottom of the glass add the blended mixture and top up with the whip cream and some caramel sauce on top.</li>
          <li>Best served as a dessert or snack time.</li>
        </ul>
      </div>
    )
  },
  {
    id: 5,
    title: "Homemade Hot and Cold Macchiato",
    ingredients: [
      "Instant coffee",
      "Water",
      "Milk",
      "Caramel sauce",
      "Ice cubes",
      "Whip cream"
    ],
    instructions: (
      <div>
        <p>Method for Hot Macchiato:</p>
        <ul>
          <li>Take a coffee mug on the side gently pour the caramel sauce all around.</li>
          <li>Add two teaspoons of instant coffee and water mix them to form a uniform coffee mixture.</li>
          <li>Bring your milk to a boil and whisk it to make it all frothy.</li>
          <li>Add the frothed milk to your coffee mug.</li>
          <li>Top that with a swirl of caramel sauce. Hot macchiato is ready.</li>
        </ul>
        <p>Method for Cold Macchiato:</p>
        <ul>
          <li>Take a clear party cup on the side gently pour the caramel sauce all around.</li>
          <li>Add the ice cubes then.</li>
          <li>Add two teaspoons of instant coffee and water mix them to form a uniform coffee mixture.</li>
          <li>Add your milk without boiling it.</li>
          <li>Top that up with a swirl of whip cream then on top add some caramel sauce.</li>
          <li>Cold macchiato is ready for drinking.</li>
        </ul>
      </div>
    )
  },
  {
    id: 6,
    title: "Homemade Affogato",
    ingredients: [
      "Instant coffee",
      "Chilled water",
      "Vanilla Ice Cream",
      "Chocolate Syrup",
      "2 Oreo Cookies",
      "Grated milky chocolate bar"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Take a small cup and mix two teaspoons of coffee with two tablespoons of water, to make an espresso mixture.</li>
          <li>Take a glass and add two big scoops of vanilla ice cream.</li>
          <li>Take your espresso mixture and add it to your ice cream.</li>
          <li>For toppings decorate it with the chocolate syrup, the crushed cookies, and the grated milky chocolate bar.</li>
        </ul>
      </div>
    )
  },
  {
    id: 7,
    title: "Homemade Ice Cream (Oreo ice cream)",
    ingredients: [
      "6 Oreo biscuits",
      "Heavy whipping cream",
      "Sweetened condensed milk",
      "1 teaspoon Vanilla essence"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Whisk the whipping cream till nice and fluffy.</li>
          <li>Add your sweetened condensed milk and whisk till fluffy.</li>
          <li>Add the vanilla essence and fold the mixture.</li>
          <li>Crush your Oreo biscuits and add them to the mixture and fold.</li>
          <li>Store your ice cream mixture into a container then freeze for around 6 hours.</li>
          <li>Ice cream is ready to serve.</li>
        </ul>
      </div>
    )
  },
  {
    id: 8,
    title: "Homemade Microwave Mug Cake",
    ingredients: [
      "1 tablespoon of butter",
      "2 tablespoons of sugar",
      "1 tablespoon of vegetable oil",
      "4 tablespoons of all-purpose flour",
      "1 teaspoon of baking powder",
      "1 tablespoon of cocoa",
      "1/2 cup of milk",
      "1 scoop of vanilla ice cream"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Take a microwave-resistant mug and add the butter and sugar, then mix well.</li>
          <li>Add the vegetable oil to the sugar-butter mixture and stir well.</li>
          <li>Next, add the flour, baking powder, and cocoa, and mix them well.</li>
          <li>Then, add the milk and fold the ingredients to form a smooth mixture.</li>
          <li>Put your cake mixture into the microwave and let it cook for 2 minutes.</li>
          <li>After two minutes, your cake should be done. Let it cool, then add a scoop of ice cream.</li>
          <li>Ready to be enjoyed as a snack or dessert.</li>
        </ul>
      </div>
    )
  }



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

      <div className="section4">

        <Footer />

      </div>
    </div>
  )
}

export default Coffee