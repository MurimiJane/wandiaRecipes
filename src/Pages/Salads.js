import React from "react";
import "../Recipes.css";
import RecipeBrowser from "../Pages/RecipeBrowser";

const saladsData = [
  {
    id: 1,
    title: "Kachumbari",
    ingredients: [
      "4 large onions",
      "4 large tomatoes",
      "1 bunch of coriander (dhania)",
      "1 large carrot (optional)",
      "1 teaspoon of salt",
      "Some hot water",
      "Zesta hot and sweet sauce",
    ],
    steps: [
      "Wash and chop the onions into cubes and put them in a clean bowl. Add 1 teaspoon of salt and some hot water, then soak for 2 to 5 minutes. This removes the bitter taste of raw onions.",
      "While the onions soak, wash and chop the tomatoes into cubes and put them in a clean bowl.",
      "Peel, wash and grate the carrot, then add it to the tomatoes.",
      "Drain the onions completely, then add them to the tomatoes and carrot.",
      "Wash the coriander (dhania), chop it small and add it to the bowl.",
      "Add the Zesta hot and sweet sauce and mix everything with a spoon.",
    ],
    tip: "Best served with pilau, fried rice, fries and baked potatoes, but it goes with any meal. If you're not a chili person, use Zesta tomato sauce instead.",
  },
  {
    id: 2,
    title: "Coleslaw",
    // The old ingredient list was a copy of Kachumbari's. This one is rebuilt from the
    // method, so please add quantities and double-check it.
    ingredients: ["Cabbage", "Carrots", "Pineapple", "Mayonnaise", "2 to 3 tablespoons of sugar"],
    steps: [
      "Wash the cabbage, chop it small and put it in a large bowl.",
      "Peel, wash and grate the carrots, then add them to the cabbage.",
      "Peel the pineapple, chop it into cubes and add it to the bowl.",
      "Add the mayonnaise and 2 to 3 tablespoons of sugar.",
      "Mix everything together. Your coleslaw is ready.",
    ],
    tip: "Best served with rice, fries or pilau.",
  },
  {
    id: 3,
    title: "Cabbage Salad",
    ingredients: [
      "1 small cabbage",
      "2 medium onions",
      "1 large carrot",
      "1 large lemon",
      "1 tablespoon of sugar",
      "1 tablespoon of salad oil",
    ],
    steps: [
      "Wash the cabbage, chop it small and put it in a clean, large bowl.",
      "Peel the onions, chop them small and add them to the cabbage.",
      "Peel, wash and grate the carrot, then add it to the cabbage and onions.",
      "Add the sugar and 1 tablespoon of salad oil.",
      "Wash the lemon, cut it in half and squeeze the juice over the salad. Mix well with a spoon.",
    ],
    tip: "Best served with fries, roasted potatoes or baked potatoes. Try it with other dishes too.",
  },
];

function Salads() {
  return (
    <RecipeBrowser
      title="Salads"
      heroClass="saladsection"
      storageKey="salads"
      recipes={saladsData}
    />
  );
}

export default Salads;