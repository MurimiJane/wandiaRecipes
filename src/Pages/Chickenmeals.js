import React from "react";
import "../Recipes.css";
import RecipeBrowser from "../Pages/RecipeBrowser";

const chickenData = [
  {
    id: 1,
    title: "Wet Fry Chicken (Marinated)",
    ingredients: [
      "Sliced full chicken", "2 large onions", "4 tomatoes", "1 green capsicum (hoho)",
      "2 bunches of coriander (dhania)", "Ginger and garlic", "Rosemary spice", "Turmeric",
      "Chicken masala", "Black pepper", "Tomato paste", "Chicken cubes", "Soy sauce", "Oil", "Salt",
    ],
    stages: [
      {
        title: "Marinate",
        steps: [
          "Wash and chop one onion and one bunch of coriander very small.",
          "Cut a small piece of ginger and some garlic, wash them and pound them together into a paste.",
          "In a clean bowl, combine the chicken, chopped onion and coriander, the ginger and garlic paste, 1 teaspoon of turmeric, 1 tablespoon of chicken masala, 1 teaspoon of black pepper, 2 chicken cubes, rosemary leaves, salt and a little oil.",
          "Mix well, cover the bowl with clear foil and refrigerate for 4 to 5 hours. For the best flavour, marinate overnight.",
          "Add any other spices you like. There are no limits.",
        ],
      },
      {
        title: "Cook",
        steps: [
          "Wash and chop the other onion, the other bunch of coriander, the green capsicum and the tomatoes, all small.",
          "Pound another small piece of ginger and about 4 cloves of garlic into a paste.",
          "Heat a very little oil in a clean saucepan (sufuria). Cook the onions and capsicum until soft, then add the ginger and garlic paste.",
          "Add the turmeric, chicken masala, black pepper and 1 chicken cube. Stir, then add the marinated chicken. Stir, cover and simmer for 5 to 8 minutes.",
          "Add the chopped tomatoes, tomato paste, a little salt and another chicken cube. Cover and simmer until the tomatoes cook down. Salt helps them cook faster.",
          "Stir the chicken, add a little water and some soy sauce, stir, cover and simmer for 5 minutes.",
          "Add the chopped coriander, stir, cover and turn off the heat.",
        ],
      },
    ],
    tip: "Best served with ugali, fries, baked potatoes or fried rice, or anything else you want to try it with.",
  },
  {
    id: 2,
    title: "Chicken Nuggets",
    ingredients: [
      "500g boneless chicken", "5 eggs", "Flour", "Bread crumbs", "Black pepper", "Turmeric",
      "Garam masala", "Garlic and ginger", "Chicken masala", "2 chicken cubes", "Oil", "Salt",
    ],
    stages: [
      {
        title: "Marinate",
        steps: [
          "Cut the boneless chicken into big chunks and put them in a clean bowl. Wash and pound the garlic and ginger together into a paste.",
          "Add 1 tablespoon of turmeric, 1 tablespoon of garam masala, 1 teaspoon of black pepper, 1 tablespoon of chicken masala, the 2 chicken cubes, the ginger and garlic paste, salt and about 2 tablespoons of oil.",
          "Mix gently, cover with clear foil and refrigerate for 4 to 5 hours. Overnight gives the best result.",
        ],
      },
      {
        title: "Cook",
        steps: [
          "Set out three bowls or plates: beaten eggs in one, flour in another and bread crumbs in the third.",
          "Add 1 teaspoon of black pepper and 1 tablespoon of chicken masala to the flour and mix well.",
          "Pour enough oil into a medium pan for deep frying and heat it.",
          "Dip each piece of chicken in the flour, then the beaten eggs, then the bread crumbs. Make sure it is fully coated in crumbs.",
          "Deep fry the chicken until golden brown.",
        ],
      },
    ],
    tip: "Best served with fries, chips masala or baked potatoes.",
  },
  {
    id: 3,
    title: "Deep Fried Chicken",
    ingredients: [
      "1 full sliced broiler chicken", "1 big lemon", "Turmeric", "Black pepper", "Coriander powder",
      "Chicken masala", "2 medium-sized onions", "Fresh rosemary leaves", "Garlic and ginger",
      "Green chilies", "2 bunches of coriander (dhania)", "Plain yoghurt or plain mala", "Oil", "Salt",
    ],
    stages: [
      {
        title: "Marinate",
        steps: [
          "Clean the chicken and put it in a mixing bowl. Wash and cut the lemon, then squeeze the juice over the chicken.",
          "Add 1 teaspoon of black pepper, 1 tablespoon of turmeric, coriander powder, chicken masala, rosemary leaves and salt. Mix and set aside.",
          "Wash and chop the onions, green chilies, coriander, ginger and garlic, then blend them into a paste.",
          "Add the paste to the chicken and mix well.",
          "Add the plain yoghurt and mix gently but thoroughly.",
          "Marinate for an hour.",
        ],
      },
      {
        title: "Cook",
        steps: [
          "Pour enough oil for deep frying into a frying pan and let it heat up.",
          "Add the chicken pieces one by one and deep fry until cooked through and golden.",
        ],
      },
    ],
    tip: "Best served with fries or baked potatoes.",
  },
  {
    id: 4,
    title: "Chicken and Potatoes",
    ingredients: [
      "Sliced broiler chicken", "10 medium-size potatoes", "Garlic paste", "4 medium lemons",
      "Black pepper", "Rosemary", "Thyme", "Oregano", "Paprika", "Red chili flakes (optional)", "Oil", "Salt",
    ],
    steps: [
      "Peel and clean the potatoes and chop them into medium pieces. Clean the lemons, squeeze the juice and set it aside.",
      "In a clean mixing bowl, combine the chicken, potatoes, salt, black pepper, rosemary, thyme, oregano, paprika, red chili flakes, lemon juice, garlic paste and some oil. Mix and marinate for about 2 hours so the flavours sink in.",
      "Heat oil in a frying pan for deep frying. Deep fry the chicken and potatoes and serve hot.",
    ],
    tip: "If you have an oven, you can bake the chicken and potatoes instead for great results.",
  },
  {
    id: 5,
    title: "Hot and Sweet Chicken",
    ingredients: [
      "1 sliced full chicken", "Ginger and garlic", "2 medium onions", "Red, green and yellow bell peppers (hoho)",
      "Spring onions", "1 bunch of coriander (dhania)", "Green chilies (optional)", "Black pepper",
      "Rosemary and paprika", "Soy sauce", "Hot and sweet sauce", "2 tablespoons of honey", "Salt", "Oil",
    ],
    steps: [
      "Cut and clean the chicken and put it in a mixing bowl. Pound a small amount of ginger and garlic into a paste.",
      "Add the paste, black pepper, rosemary, paprika, soy sauce and some salt to the chicken. Mix gently and marinate for about 1½ hours.",
      "While the chicken marinates, clean the onions, bell peppers, coriander and spring onions. Chop everything small, except the bell peppers, which you cut into strips. Set aside.",
      "Deep fry the marinated chicken and set it aside.",
      "Heat some oil in a pan and cook the onions until soft. Add the bell peppers and green chilies and cook.",
      "Add the hot and sweet sauce, honey, soy sauce and the fried chicken. Stir, add the spring onions, stir and cook for just a minute.",
      "Add the coriander, stir and turn off the heat.",
    ],
    tip: "Best served with rice, fries or anything you want to try it with.",
  },
  {
    id: 6,
    title: "Chicken Wrapped with Bacon",
    ingredients: [
      "400g boneless chicken", "Bacon", "Ginger and garlic paste", "Rosemary leaves", "Turmeric",
      "Black pepper", "Chicken masala", "Chicken cubes", "Oil", "Salt",
    ],
    steps: [
      "Cut the chicken into medium strips and put them in a mixing bowl. Add the turmeric, black pepper, chicken masala, chicken cubes, rosemary leaves, ginger and garlic paste, salt and some oil.",
      "Cover with clear foil and marinate for about an hour.",
      "Heat some oil in a frying pan and shallow fry all the chicken strips.",
      "Wrap each chicken strip in bacon, then shallow fry again until the bacon is cooked.",
    ],
    tip: "Best served for breakfast.",
  },
  {
    id: 7,
    title: "Chicken Avocado Toast Sandwich",
    ingredients: [
      "Farmers Choice chicken patties", "Bacon", "1 large onion", "1 large avocado", "2 medium tomatoes",
      "Margarine (Blue Band)", "8 slices of bread", "Salt", "Oil",
    ],
    steps: [
      "Heat some oil in a frying pan and cook the patties one by one until brown on both sides. Cook the bacon the same way. Set both aside.",
      "Spread margarine on both sides of the bread slices. Toast them in the pan until brown on both sides, then set aside and turn off the heat.",
      "Wash the tomatoes and onion and slice them into rings. Slice the avocado.",
      "On four slices of bread, layer onion, avocado, a cooked patty, bacon and about 3 tomato slices.",
      "Cover with the remaining slices and cut each toast diagonally.",
    ],
    tip: "Best served for breakfast. For the bread, I recommend the large family loaf.",
  },
  {
    id: 8,
    title: "Chicken Pita Bread Sandwich",
    ingredients: [
      "400g boneless chicken", "Turmeric", "Black pepper", "Rosemary leaves", "Ginger and garlic paste",
      "1 large onion", "1 bunch of coriander", "4 medium tomatoes", "Zesta hot and sweet tomato sauce",
      "1 large avocado", "All-purpose flour", "Instant yeast", "Oil", "Salt",
    ],
    stages: [
      {
        title: "Chicken",
        steps: [
          "Cut the chicken into small cubes and put them in a mixing bowl.",
          "Add the ginger and garlic paste, turmeric, black pepper and rosemary leaves. Mix and marinate for about an hour.",
        ],
      },
      {
        title: "Pita bread",
        steps: [
          "In another bowl, combine the all-purpose flour, 2 teaspoons of instant yeast, salt and some warm water. Knead into a dough.",
          "Add some oil, knead again, then cover and rest for 30 minutes.",
          "Divide the dough into about 8 balls and roll each into a round. Cook on both sides and set aside.",
        ],
      },
      {
        title: "Fill and serve",
        steps: [
          "Slice the onion into rings and soak them in warm water. Chop the tomatoes and avocado into cubes and chop the coriander.",
          "Mix the onions, tomatoes and coriander, then gently stir in the hot and sweet sauce.",
          "Shallow fry the marinated chicken in a frying pan.",
          "Cut each pita in half to make pockets. Fill with chicken, the sauce mixture and avocado.",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Baked Stuffed Chicken",
    ingredients: [
      "1 whole chicken", "Tandoori spice", "Chicken masala", "Turmeric", "Black pepper", "Chili powder (optional)",
      "Rosemary leaves", "Coriander leaves", "Ginger and garlic paste", "1 large lemon", "4 large potatoes",
      "Spring onions", "Salt", "Oil",
    ],
    steps: [
      "In a mixing bowl, combine the tandoori spice, chicken masala, lemon juice, chopped coriander leaves, chili powder, black pepper, ginger and garlic paste, salt and oil. Mix into a paste.",
      "Chop the potatoes into medium cubes and chop the spring onions. Put them in a bowl with some oil, black pepper, turmeric and rosemary leaves. Mix and marinate for an hour.",
      "Use a knife to loosen the skin of the chicken so there is a gap between the meat and the skin.",
      "Rub the masala paste over the chicken and under the skin. Marinate for an hour too.",
      "Stuff the chicken with the marinated potatoes.",
      "Bake in an oven preheated to 180°C for 30 to 35 minutes.",
    ],
    tip: "Best served with kachumbari. Instead of potatoes, you can stuff the chicken with red onions, green chilies, tomatoes and spring onions, then deep fry the whole chicken.",
  },
  {
    id: 10,
    title: "Tandoori Deep Fried Chicken",
    ingredients: [
      "Chicken leg pieces", "1 large lemon", "Ginger and garlic paste", "Tandoori spice", "Turmeric",
      "Black pepper", "Rosemary leaves", "Salt", "Oil",
    ],
    steps: [
      "Clean the chicken legs and cut shallow lines across them.",
      "Put them in a clean bowl and add lemon juice, tandoori spice, turmeric, black pepper, ginger and garlic paste, rosemary leaves, salt and oil.",
      "Mix well and marinate for one hour.",
      "Pour enough oil for deep frying into a frying pan.",
      "Deep fry the chicken until cooked through.",
    ],
    tip: "Best served with fries, baked potatoes and kachumbari.",
  },
];

function Chickenmeals() {
  return (
    <RecipeBrowser
      title="Chicken Meals"
      heroClass="chickensection"
      storageKey="chicken"
      recipes={chickenData}
    />
  );
}

export default Chickenmeals;