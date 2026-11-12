import React from "react";
import "../Recipes.css";
import RecipeBrowser from "../Pages/RecipeBrowser";

const coffeeData = [
  {
    id: 1,
    title: "Homemade Mocha Coffee",
    ingredients: ["Instant coffee", "Drinking chocolate", "Sugar", "Hot water", "Milk"],
    steps: [
      "In a clean mug, combine 1 teaspoon of instant coffee, 1 teaspoon of drinking chocolate, 2 teaspoons of sugar and 2 teaspoons of hot water. Stir until smooth and set aside.",
      "Bring the milk to a boil in a small saucepan (sufuria).",
      "Pour the hot milk into a heat-resistant bottle and shake until it is foamy.",
      "Swirl the bottle, then pour the milk into the mug while holding the mug at a slant for the best mocha.",
    ],
    tip: "Best served with cookies or cakes.",
  },
  {
    id: 2,
    title: "Homemade Cappuccino with Latte Art",
    ingredients: ["Instant coffee", "Sugar", "Hot water", "Dark chocolate bar", "Milk"],
    stages: [
      {
        title: "Cappuccino",
        steps: [
          "In a clean bowl, mix 1 tablespoon of coffee, 1 tablespoon of sugar and 1 tablespoon of hot water. Whisk with a fork or whisk until it becomes a creamy brown paste. Set aside.",
          "Bring the milk to a boil in a clean saucepan (sufuria).",
          "Put the coffee paste in a cappuccino cup (or any cup) and, holding the cup at a slant, gently pour in the hot milk until the cup is full.",
          "Stir gently with a spoon.",
        ],
      },
      {
        title: "Flower latte art",
        steps: [
          "Melt the dark chocolate over medium heat to make a syrup. You can also use shop-bought chocolate syrup, or mix drinking chocolate with a little water into a thick syrup.",
          "Put the syrup in a plastic bag, cut a small hole in the corner and draw three rings on top of the cappuccino.",
          "Drag a toothpick outward from the first ring, about 6 times, to pull the rings into a flower.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Homemade Mocha Frappuccino",
    ingredients: [
      "Ice cubes", "500ml milk", "Icing sugar or normal sugar", "Vanilla essence",
      "2 tablespoons of instant coffee", "2 tablespoons of drinking chocolate",
      "Whipping cream", "Chocolate syrup (for decorating)", "Water",
    ],
    steps: [
      "In one small cup, mix the instant coffee with 2 tablespoons of water. In another, mix the drinking chocolate with 2 tablespoons of water. Set both aside.",
      "In a blender, combine the ice cubes, milk, 1 tablespoon of icing sugar, 1 teaspoon of vanilla extract, the coffee mixture and the chocolate mixture. Blend until smooth.",
      "Pour into a glass, top with whipped cream and decorate with chocolate syrup.",
    ],
    tip: "Best served after meals.",
  },
  {
    id: 4,
    title: "Homemade Coffee Caramel Frappuccino",
    ingredients: [
      "Ice cubes", "Milk", "Caramel sauce", "Whipped cream", "Melted white chocolate",
      "Instant coffee", "Sugar", "Vanilla essence", "Water",
    ],
    stages: [
      {
        title: "Whipped topping",
        steps: [
          "Whisk the whipped cream in a mixing bowl until fluffy.",
          "Add 1 cup of the instant coffee mixture, the melted white chocolate and some caramel sauce. Whisk together and chill in the fridge.",
        ],
      },
      {
        title: "Blend and serve",
        steps: [
          "In a blender, combine 500ml of cold coffee, 1 cup of milk, 1 tablespoon of sugar, some caramel sauce, ice cubes and 1 teaspoon of vanilla essence. Blend until smooth.",
          "Using a piping bag, put some of the chilled whipped topping at the bottom of a glass. Add the blended mixture, then top with more topping and a drizzle of caramel sauce.",
        ],
      },
    ],
    tip: "Best served as a dessert or at snack time.",
  },
  {
    id: 5,
    title: "Homemade Hot and Cold Macchiato",
    ingredients: ["Instant coffee", "Water", "Milk", "Caramel sauce", "Ice cubes", "Whipped cream"],
    stages: [
      {
        title: "Hot macchiato",
        steps: [
          "Gently pour caramel sauce around the inside of a coffee mug.",
          "Mix 2 teaspoons of instant coffee with water to make a smooth coffee mixture and add it to the mug.",
          "Bring the milk to a boil and whisk until frothy.",
          "Add the frothed milk to the mug.",
          "Top with a swirl of caramel sauce.",
        ],
      },
      {
        title: "Cold macchiato",
        steps: [
          "Gently pour caramel sauce around the inside of a clear party cup.",
          "Add the ice cubes.",
          "Mix 2 teaspoons of instant coffee with water to make a smooth coffee mixture and add it to the cup.",
          "Add cold milk, unboiled.",
          "Top with a swirl of whipped cream and a drizzle of caramel sauce.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Homemade Affogato",
    ingredients: [
      "Instant coffee", "Chilled water", "Vanilla ice cream", "Chocolate syrup",
      "2 Oreo cookies", "Grated milky chocolate bar",
    ],
    steps: [
      "In a small cup, mix 2 teaspoons of coffee with 2 tablespoons of water to make an espresso-style mixture.",
      "Put 2 big scoops of vanilla ice cream in a glass.",
      "Pour the coffee mixture over the ice cream.",
      "Decorate with chocolate syrup, crushed cookies and grated chocolate.",
    ],
  },
  {
    id: 7,
    title: "Homemade Oreo Ice Cream",
    ingredients: ["6 Oreo biscuits", "Heavy whipping cream", "Sweetened condensed milk", "1 teaspoon of vanilla essence"],
    steps: [
      "Whisk the whipping cream until fluffy.",
      "Add the sweetened condensed milk and whisk until fluffy again.",
      "Add the vanilla essence and fold it in.",
      "Crush the Oreo biscuits, add them to the mixture and fold.",
      "Transfer to a container and freeze for about 6 hours.",
    ],
  },
  {
    id: 8,
    title: "Homemade Microwave Mug Cake",
    ingredients: [
      "1 tablespoon of butter", "2 tablespoons of sugar", "1 tablespoon of vegetable oil",
      "4 tablespoons of all-purpose flour", "1 teaspoon of baking powder", "1 tablespoon of cocoa",
      "½ cup of milk", "1 scoop of vanilla ice cream",
    ],
    steps: [
      "In a microwave-safe mug, mix the butter and sugar well.",
      "Add the vegetable oil and stir well.",
      "Add the flour, baking powder and cocoa and mix well.",
      "Add the milk and fold until smooth.",
      "Microwave for 2 minutes.",
      "Let it cool, then top with a scoop of ice cream.",
    ],
    tip: "Enjoy as a snack or dessert.",
  },
];

function Coffee() {
  return (
    <RecipeBrowser
      title="Coffee"
      heroClass="coffeeSection"
      storageKey="coffee"
      recipes={coffeeData}
    />
  );
}

export default Coffee;