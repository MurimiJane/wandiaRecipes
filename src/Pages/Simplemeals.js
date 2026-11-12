import React from "react";
import "../Recipes.css";
import RecipeBrowser from "../Pages/RecipeBrowser";

const recipesData = [
  {
    id: 1,
    title: "Beef Pilau",
    ingredients: [
      "1 green capsicum (hoho)", "1 large onion", "4 large tomatoes", "Pilau masala",
      "A bunch of coriander (dhania)", "4 cups of rice", "Ginger and garlic", "Tomato paste",
      "400g of beef", "2 beef (stock) cubes", "Oil", "Salt",
    ],
    steps: [
      "Put the beef in a clean saucepan (sufuria) with about a litre of water and boil for about 10 minutes.",
      "Wash the tomatoes, put them in a small saucepan with enough water to cover them and bring to a boil.",
      "While the meat and tomatoes boil, wash and finely chop the coriander, capsicum and onion. Crush a small amount of ginger and garlic together in a pestle and mortar (kinu).",
      "When the tomatoes are ready, move them to a bowl, gently remove the skins and crush the tomatoes into a paste with a spoon. If you have a blender, skip the boiling: just wash the tomatoes and blend them into a paste.",
      "Heat some oil in a medium saucepan, then add the onion and capsicum. Cook for a while, then add 3 to 4 teaspoons of pilau masala, the ginger and garlic paste and the beef cubes. Stir and cook for about 20 seconds.",
      "By now the meat is ready. Drain it, keeping the water, and add the meat to the pot. Stir and cook for about 5 minutes until brown and crispy.",
      "Add the crushed tomatoes, tomato paste and some salt. Stir and simmer for 5 minutes.",
      "Add the rice and stir. For 4 cups of rice, use 8 cups of the beef water you drained, topping up with plain water if it doesn't reach 8.",
      "Stir gently and bring to a boil until the water is almost gone. Add the coriander, cover and simmer on low heat for 10 minutes.",
      "Mix the pilau gently so the coriander is evenly spread.",
    ],
    tip: "Best served with kachumbari.",
  },
  {
    id: 2,
    title: "Fried Vegetable Rice",
    ingredients: [
      "1 green capsicum (hoho)", "1 red capsicum", "1 yellow capsicum", "2 medium carrots",
      "1 cup of pre-boiled peas", "1 large onion", "1 bunch of coriander (dhania)", "Dark soy sauce",
      "4 cups of rice (leftover rice works too)", "Oil", "Salt",
    ],
    steps: [
      "In a clean medium saucepan (sufuria), bring 8 cups of water to a boil with some oil and salt while you wash the rice.",
      "Add the clean rice and cook over medium heat.",
      "While the rice cooks, wash and chop the capsicums, carrots, onion and coriander.",
      "Heat some oil in a clean pan or saucepan and brown the onions. Add the capsicums and carrots and simmer for 5 minutes. Don't overcook them: they should stay crunchy.",
      "Add the pre-boiled peas and some dark soy sauce. Stir and simmer for about 3 minutes.",
      "By now the rice is ready. Gently add it to the vegetables with some salt and the chopped coriander. Mix gently and turn off the heat.",
    ],
    tip: "Best served with beef stew, chicken stew or anything you want to try it with.",
  },
  {
    id: 3,
    title: "Liver Stew",
    ingredients: [
      "400g liver", "1 medium onion", "4 medium tomatoes", "1 green capsicum",
      "A bunch of coriander (dhania)", "Ginger", "Garlic", "Beef cubes", "Tomato paste",
      "Turmeric (optional)", "Black pepper (optional)", "Oil", "Salt",
    ],
    steps: [
      "Peel and wash the vegetables, then cut the onion, capsicum, tomatoes and coriander into cubes, keeping each separate. Crush the garlic and ginger together into a paste.",
      "Heat some oil in a clean medium saucepan (sufuria). Add the onion and capsicum and cook for about 2 minutes. Add 1 teaspoon of turmeric, ½ teaspoon of black pepper and the ginger and garlic paste, and cook for another 2 minutes.",
      "Add the liver and beef cubes and stir. Add some water, cover and simmer for about 5 minutes.",
      "Stir the liver, then add the tomatoes, tomato paste and some salt. Cover so the tomatoes cook, and check after about 3 minutes.",
      "Stir the liver to crush any tomatoes that haven't cooked down. Once all the tomatoes are cooked, add the coriander, stir and turn off the heat. Coriander tastes best when it isn't overcooked.",
    ],
    tip: "Best served with ugali, fries, boiled green bananas, rice, fried rice, fried noodles or roasted potatoes.",
  },
  {
    id: 4,
    title: "Lyonnaise Potatoes",
    ingredients: [
      "12 large potatoes", "1 large green capsicum (hoho)", "3 large onions", "Turmeric spice",
      "Black pepper", "Green chilies (optional)", "3 bunches of coriander (dhania)", "Salt", "Oil",
    ],
    steps: [
      "Peel and wash the potatoes, slice them into circles and rinse them again.",
      "Heat plenty of oil in a big pan, as for fries, and deep fry the potatoes. Drain them in a bowl lined with kitchen tissue to soak up the oil.",
      "Cut the onions into rings and the capsicum into strips. In a clean pan with a little oil, cook them until soft, without overcooking.",
      "Add 1 teaspoon of turmeric, ½ teaspoon of black pepper and the green chilies, and stir.",
      "Add the potatoes, some salt and the chopped coriander. Mix gently so the potatoes don't break. Don't overcook the coriander or it loses its flavour. Once everything is evenly mixed, turn off the heat and serve.",
    ],
    tip: "Best served with eggs, liver, chicken or anything you want to try it with.",
  },
  {
    id: 5,
    title: "Wet Fry Eggs",
    ingredients: [
      "4 eggs", "1 large onion", "3 large tomatoes", "Tomato paste", "1 green capsicum",
      "1 bunch of coriander (dhania)", "Turmeric", "Black pepper (optional)",
      "Green chilies (optional)", "Oil", "Salt",
    ],
    steps: [
      "Fry all 4 eggs in a clean frying pan and set them aside. Wash and chop the onion, tomatoes, capsicum, coriander and green chilies.",
      "Heat some oil in a clean saucepan (sufuria). Add the onion, green chilies and capsicum and cook until soft.",
      "Add 1 teaspoon of turmeric and ½ tablespoon of black pepper, and let it cook.",
      "Add the tomatoes, 1 tablespoon of tomato paste and some salt. Cover and simmer for 5 minutes until the tomatoes have cooked.",
      "While the tomatoes cook, slice the fried eggs into small pieces on a board.",
      "Add the sliced eggs to the pot and stir. Add the chopped coriander and salt to taste, stir and turn off the heat.",
    ],
    tip: "Best served with fries, ugali, rice or anything you want to try it with.",
  },
  {
    id: 6,
    title: "Tamarind (Ukwaju) Sauce",
    ingredients: ["Ukwaju", "Garlic", "Warm water"],
    steps: [
      "Remove the ukwaju from its shell and soak it in warm water for about 10 minutes.",
      "While it soaks, pound 2 to 3 cloves of garlic into a paste.",
      "After 10 minutes, squeeze the juice out of the ukwaju with your hands.",
      "Put the juice in a bowl, add the garlic paste and stir.",
    ],
    tip: "Best served with bhajia and fries.",
  },
  {
    id: 7,
    title: "Wet Fry Beef",
    ingredients: [
      "400g meat", "1 large onion", "4 tomatoes", "1 green capsicum", "1 bunch of coriander (dhania)",
      "Green or red chilies (optional)", "Tomato paste", "Soy sauce (optional)", "Beef cubes",
      "Turmeric", "Garam masala", "Black pepper", "Oil", "Salt",
    ],
    steps: [
      "Cut the meat into medium pieces. Wash and chop the onion, tomatoes, capsicum, chilies and coriander small.",
      "Put the meat in a clean saucepan (sufuria) with enough water to cover it and boil until tender.",
      "Set the meat aside. In the same saucepan, heat some oil and cook the onion, capsicum and chilies until soft.",
      "Add about a teaspoon each of turmeric, garam masala and black pepper. Stir, add the boiled meat and stir until it is coated. Add a little water, cover and simmer for 5 minutes.",
      "Add the chopped tomatoes, tomato paste and some salt. Cover and simmer so the tomatoes cook.",
      "Once the tomatoes are cooked, stir the meat and add a little water, soy sauce, beef cubes and salt to taste. Simmer for another 2 minutes, add the coriander, stir and turn off the heat.",
    ],
    tip: "Best served with ugali, mashed potatoes, fried rice, baked potatoes or fries.",
  },
  {
    id: 8,
    title: "Matumbo (Cow’s Intestines)",
    ingredients: [
      "1kg cow’s intestines (matumbo)", "1 large onion", "3 large tomatoes", "Ginger and garlic paste",
      "1 bunch of coriander (dhania)", "Green chilies (optional)", "Tomato paste", "Turmeric",
      "Beef masala", "Black pepper powder (optional)", "Soy sauce", "Salt", "Oil",
    ],
    steps: [
      "Clean the intestines under running water, cut them into medium pieces and boil until soft.",
      "While they boil, wash and chop the onion, tomatoes, green chilies and coriander.",
      "Drain any remaining water from the intestines and set them aside. In another saucepan, heat some oil and cook the onion and green chilies until soft. Add the turmeric, beef masala, black pepper and ginger and garlic paste.",
      "Add the boiled intestines, stir and fry until brown. Add the tomatoes, tomato paste and some salt, and cover so the tomatoes cook.",
      "Once the tomatoes are cooked, add some soy sauce and stir.",
      "Add a little water and salt to taste and simmer for 5 minutes. Add the coriander, stir and turn off the heat.",
    ],
    tip: "Best served with ugali, rice or any meal you want to try it with.",
  },
  {
    id: 9,
    title: "Cow’s Kidneys (Figo)",
    ingredients: [
      "300g chopped cow’s kidneys", "1 large chopped onion", "1 grated green capsicum (hoho)",
      "3 large chopped tomatoes", "1 large grated carrot", "1 chopped bunch of coriander (dhania)",
      "Ginger and garlic paste", "2 sliced green chilies (optional)", "Tomato paste", "Turmeric",
      "Black pepper", "Salt", "Oil",
    ],
    steps: [
      "Heat some oil in a saucepan (sufuria). Add the chopped onion, grated capsicum and green chilies.",
      "Stir and cook until soft, then add the turmeric and black pepper. Stir, then add the ginger and garlic paste.",
      "Stir, add the kidneys and about ¼ cup of water, then cover and simmer until the water is gone.",
      "Add the tomatoes, carrot, tomato paste and salt. Cover so the tomatoes cook.",
      "Once everything is cooked, stir and add about ½ cup of water and salt to taste. Simmer for 5 minutes.",
      "Add the coriander, stir and turn off the heat.",
    ],
    tip: "Best served with ugali, rice, baked potatoes, fries or boiled green bananas.",
  },
  {
    id: 10,
    title: "Fried Noodles",
    ingredients: [
      "3 packets of noodles", "1 large onion", "3 medium tomatoes", "2 large potatoes", "1 carrot",
      "1 green capsicum (hoho)", "1 bunch of coriander", "1 tablespoon of tomato paste",
      "Black pepper (optional)", "Turmeric", "Salt", "Oil",
    ],
    steps: [
      "Bring some water to a boil in a medium saucepan (sufuria).",
      "While it heats, crush the noodles into small pieces inside their packets with your hands.",
      "Once the water boils, open the packets and add the crushed noodles. Cook for 3 minutes, then drain into a bowl.",
      "Add the powdered sauce from the packets and mix gently. This helps the flavour get in well.",
      "Clean and chop the onion, tomatoes, capsicum and coriander small. Grate the carrot. Peel, wash and cut the potatoes into very small pieces.",
      "In the same saucepan, heat some oil and cook the onion and capsicum until soft. Add turmeric and black pepper, then the tomatoes, tomato paste and salt. Cover and simmer until the tomatoes cook.",
      "Add the grated carrot and stir, then add the potatoes with a very little water. Cover and simmer until the potatoes cook.",
      "Add the cooked noodles and stir. Add the coriander, stir, cover and turn off the heat.",
    ],
    tip: "Best served with liver or minced meat. I highly recommend this way of cooking noodles for kids.",
  },
];

function Simplemeals() {
  return (
    <RecipeBrowser
      title="Simple meals"
      heroClass="Simplemealssec"
      storageKey="simplemeals"
      recipes={recipesData}
    />
  );
}

export default Simplemeals;