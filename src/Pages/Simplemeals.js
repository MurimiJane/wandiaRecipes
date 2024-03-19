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
        <p>Take a clean saucepan (sufuria), put the beef
          add like a litre of water and bring the meat to
          a boil like for ten minutes</p>
        <p> Wash the tomatoes and put them in a small
          sauce pan (sufuria) add water until it cover
          the tomatoes and bring to a boil.</p>
        <p>As the meat and the tomatoes are boiling
          start preparing the other ingredients that is
          the coriander, garlic, ginger, capsicum and
          the onion. Clean them and chop them finely,
          for the ginger and garlic you can crush the
          together in pestle and mortar (kinu). Note the
          ginger and garlic you use a small amount of
          both.</p>
        <p> By now the tomatoes are ready remove them
          from the sufuria and place them into a bowl.
          Gently remove the tomato skin and throw
          take a spoon and slowly crush the boiled tomatoes to form a paste. Note this method
          is done only if you don’t have a blender if you
          have a blender you can just wash the
          tomatoes and blend and form the tomato
          paste.</p>
        <p> Take a medium size saucepan (sufuria), add
          oil let it heat up a little bit then add the onion
          and the capsicum. Let them cook for a while
          then add your Pilau masala around three to
          four teaspoon then add your crushed ginger
          and garlic paste and the beef cubes then stir
          let it cook for around 20 seconds.</p>
        <p> By now the meat is ready drain the water in
          the meat and put it aside. Add the meat in
          your sufuria and stir let it cook for about five
          minutes till all crispy and brown.</p>
        <p> Add the crushed tomatoes, the tomato paste
          and some salt then stir all the ingredients and
          bring to a simmer for 5 minutes</p>
        <p> Stir your ingredients then add your rice since
          it was four cups of rice you add 8 cups of the
          water you drained from the beef , if it does
          not reach 8 you can add normal water to top
          up</p>
        <p> Stir gently and bring it to a boil till all the
          water is about to end then add your
          coriander at that time cover and let it to
          simmer under low heat for 10 minutes. After
          that mix your Pilau gentle to ensure the
          parsley is all rounded</p>
        <p> Pilau is ready to serve. Best served with Sauce
          kachumbari</p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Fried Vegetable Rice",
    ingredients: ["1 Green capsicum (hoho)", "1 Red capsicum", "1 Yellow capsicum", "2 medium size carrots", "One cup of pre boiled peas", "1 large onion", "1 bunch of coriander (dhania)", "Dark Soy Sauce", "4 cups of rice / leftover rice can work too", "Oil", "Salt"],
    instructions: "1. Take a clean medium size saucepan (sufuria), put eight cups of clean water, some oil, and salt. Let the water boil as you wash the rice. 2. Once the water has boiled, put your clean rice and let your rice boil under medium heat. 3. As the rice is boiling, wash and chop your capsicums, carrots, onion, and coriander. 4. Take a clean pan or can use a saucepan (sufuria), add some oil, let it heat up then add some onions. Let the onions brown, then add the capsicums and carrots, simmer for 5 minutes. Note: don’t overcook, we want them crunchy. 5. After 5 minutes, add the pre-boiled peas and some dark soy sauce, stir and let it simmer for around three minutes. 6. By now, the rice is already ready. Gently add the rice to your cooked mixture, add some salt and chopped coriander, mix all up gently and turn off the heat. 7. Fried vegetable rice is ready. Best served with beef stew, chicken stew, or anything you want to try it out with."
  },
  {
    id: 3,
    title: "Liver Stew",
    ingredients: ["400g liver", "1 Medium size onion", "4 medium size tomatoes", "1 green capsicum", "A bunch of coriander (dhania)", "Ginger", "Garlic", "Beef cubes", "Tomato paste", "Turmeric (optional)", "Black pepper (optional)", "Oil", "Salt"],
    instructions: "1. Peel and wash all the vegetables and cut into cubes separately - onion, capsicum, tomatoes, and coriander. Crush garlic and ginger together to form a paste. 2. Take a clean medium-size saucepan (sufuria), add some oil, and let it heat up a little. Then add the onion and capsicum, let them cook for around two minutes, then add one teaspoon of turmeric, half teaspoon of black pepper, and the ginger and garlic paste. Let it cook for another two minutes. 3. Add the liver and beef cubes, then stir. Add some water, cover your saucepan and let it simmer for around 5 minutes. 4. After five minutes, stir your liver and add the tomatoes, tomato paste, and some salt. Cover your saucepan to allow the tomatoes to cook. Check it after around three minutes. 5. Stir the liver to crush the tomatoes that have not yet cooked. After all the tomatoes have cooked, add your parsley and stir. Note: coriander (dhania) is best in food when it is not overcooked. Therefore, when you add your coriander, just stir and turn off your heat. 6. Best served with ugali, fries, boiled green bananas, rice, fried rice, fried noodles, and roasted potatoes. Though no limitations, you can try with anything you want."
  },
  {
    id: 4,
    title: "Lyonnaise Potatoes",
    ingredients: ["12 large potatoes", "1 large green capsicum (hoho)", "3 large onions", "Turmeric spice", "Black pepper", "Green chilies (optional)", "3 bunches of coriander (dhania)", "Salt", "Oil"],
    instructions: "1. Peel your potatoes and wash them. Once clean, slice them into circle shapes and clean them again. 2. Take a big pan, add some oil like when you are making fries, and deep fry the potatoes. Once the potatoes are done, put them in a bowl which initially you had put some kitchen tissue to drain the oil from the potatoes. 3. Once your potatoes are done, start cutting your onions into ring shapes. For the capsicum, cut it into strip shapes. Then take a clean pan, add some small amount of oil, add the onions and the capsicum, and let them cook till soft. Please don’t overcook. 4. When soft, add one teaspoon of turmeric, half teaspoon of black pepper, green chilies, and stir. 5. Add your potatoes, some salt, and chopped coriander (dhania), then mix them all up gently to avoid the potatoes from breaking. Remember don’t overcook the coriander to avoid losing its flavor. Once all have mixed up evenly, turn off your heat and serve. 6. Best served with eggs, liver, chicken, or anything you want to try it out with. No limitations."
  },
  {
    id: 5,
    title: "Wet Fry Eggs",
    ingredients: ["Four eggs",
      "1 large onion",
      "3 large tomatoes",
      "Tomato paste",
      "1 green capsicum",
      "1 bunch of coriander (dhania)",
      "Turmeric",
      "Black pepper (optional)",
      "Green chilies (optional)",
      "Oil",
      "Salt"],
    instructions: (<div>
      <p>Take a clean frying pan and fry all the four eggs and put them aside.Wash and chop your onions, tomatoes, green capsicum, coriander and the green chilies.</p>
      <p> Take a clean saucepan(sufuria) add some oil let it heat up for a while then add the onions, green chilies and the capsicum. </p>
      <p>Let them cook till soft then add a teaspoon of turmeric and a half table spoon of black pepper.</p>
      <p>Let it cook</p>
      <p>Add your tomatoes and one tablespoon of tomato paste, salt. Cover and simmer for 5 minutes till all the tomatoes have cooked.</p>
      <p>While your tomatoes are cooking take the fried eggs and slice them on a board into small sizes.</p>
      <p>By now the tomatoes are ready add your sliced eggs and stir. Then add your chopped coriander and some salt to taste, stir then turn of your heat.</p>
      <p>Best served with fries, ugali, rice or anything you want to try with no limitations </p>
    </div>
    )
  },

  {
    id: 7,
    title: "Tamarind (UKWAJU) Sauce",
    ingredients: ["Ukwaju",
      "Garlic",
      "Warm water"
    ],
    instructions: (<div>
      <p>Remove the Ukwaju from the shell and soak in warm water for around 10 minutes</p>
      <p>While the Ukwaju is soaking up, take two three cloves of garlic and pound it to a paste.</p>
      <p>After the ten minutes take the Ukwaju using your hands squeeze out the juice.</p>
      <p>After you have squeezed all the tamarind juice out put the juice into a bowl, add the garlic paste and stir.</p>
      <p>Tamarind sauce is ready to serve. Best served with bhajia and fries</p>
    </div>
    )
  },
  {
    id: 8,
    title: "Wet Fry Beef",
    ingredients: ["400g 0f meat",
      "1 large onion",
      "4 tomatoes",
      "1 green capsicum",
      "1 bunch of coriander (dhania)",
      "Green or red chilies (optional)",
      "Tomato paste",
      "Soy sauce (optional)",
      "Beef cubes",
      "Turmeric",
      "Garam masala",
      "Black pepper",
      "Oil",
      "Salt"
    ],
    instructions: (<div>
      <p>Take your meat and cut it into medium size. Wash and chop your onions, tomatoes, green capsicum, green chilies and coriander into small sizes</p>
      <p>Take a clean sauce pan (sufuria) add your meat and some water. The water should cover the meat. Let the meat boil till tender</p>
      <p>Once the meat is boiled put it aside. The sauce pan you used to boil the meat add some oil let it heat up then add your onions, capsicum and the chilies. Let them cook till soft</p>
      <p>Add the spices that is turmeric, garam masala and black pepper all in small amount like a teaspoon size. Stir and then add your boiled meat stir till the meat is all mixed up with the spices and onions, add some small amount of water cover and let it simmer for
        five minutes.</p>
      <p>Add your chopped tomatoes, tomato paste and some salt. Cover and let it simmer to allow the tomatoes to cook.</p>
      <p>Once all the tomatoes have cooked stir your meat add some little amount of water, soy sauce, beef cubes and salt to taste allow it to simmer for another 2 minutes, add the chopped coriander stir and turn off your
        heat</p>
      <p>Wet fry beef is ready to serve. Best served with ugali, mashed potatoes, fried rice, baked potatoes and fries</p>
    </div>
    )
  },
  {
    id: 9,
    title: "Matumbo (Cow’s Intestines",
    ingredients: ["1kg Cow’s intestines (Matumbo)",
      "1 large onion",
      "3 large tomatoes",
      "Ginger and garlic paste",
      "1 bunch of coriander (dhania)",
      "Green chilies (optional)",
      "Tomato paste",
      "Turmeric",
      "Beef masala",
      "Black pepper powder (optional)",
      "Soy sauce, salt and oil"
    ],
    instructions: (<div>
      <p>Clean your intestines with running water,cut it into medium size and bring it to a boil. Boil until soft</p>
      <p>As the intestines are boiling wash and chop your onion, tomatoes, green chilies and coriander.</p>
      <p>Once your intestines are soft you can drain the water remaining and set them aside. Take another saucepan and add some oil let it heat up and add your onion and green chilies cook till soft, add your turmeric, beef
        masala, black pepper and ginger and garlic paste. </p>
      <p>Add pre boiled intestines, stir and let it fry a bit till brown. Add your tomatoes, tomato paste and some salt cover to allow the tomatoes are cooked</p>
      <p>Once your tomatoes are all cooked add some soy sauce and stir</p>
      <p>Add a little amount of water and salt to taste. Let it simmer for 5 minutes add your chopped coriander stir and turn off the heat.</p>
      <p>Best served with ugali, rice or any meal you want to try out with</p>
    </div>
    )
  },
  {
    id: 10,
    title: "Cow’s Kidneys (Figo)",
    ingredients: ["300g of chopped cow’s kidneys",
      "1 large chopped onion",
      "1 grated green capsicum (hoho)",
      "3 large chopped tomatoes",
      "1 large grated carrot",
      "1 chopped bunch of coriander (dhania)",
      "Ginger and garlic paste",
      "2 sliced green chilies (optional)",
      "Tomato paste",
      "Turmeric",
      "Black pepper",
      "Salt and Oil"
    ],
    instructions: (<div>
      <p>Take a sauce pan (Sufuria) add some oil let it heat up then add your chopped onion, grated capsicum and green chilies. </p>
      <p>Stir and let them cook till soft then add your turmeric and black pepper. Stir and then add your ginger and garlic paste.
      </p>
      <p>Stir and add your kidneys and some water a quarter a cup then cover to simmer till the
        water ends. </p>
      <p>Add your tomatoes, carrot, tomato paste and salt cover to allow your tomatoes cook.</p>
      <p>Once all are cooked well stir add some water like half a cup add salt to taste let it simmer for 5 minutes</p>
      <p> Add your coriander stir and turn off your
        heat</p>
      <p>Best served with ugali, rice, baked potatoes, fries and boiled green bananas.</p>
    </div>
    )
  },
  {
    id: 11,
    title: "Fried Noodles",
    ingredients: [
      "3 packets of noodles",
      "1 large onion",
      "3 medium size tomatoes",
      "2 large potatoes",
      "1 Carrot",
      "1 Green capsicum (hoho)",
      "1 bunch of coriander",
      "1 tablespoon Tomato paste",
      "Black pepper (optional)",
      "Turmeric",
      "Salt",
      "Oil"
    ],
    instructions: (
      <div>
        <p>Method:</p>
        <ul>
          <li>Take a medium-sized saucepan (sufuria) add some water and bring to a boil.</li>
          <li>As your water is boiling crush your noodles as they are in the paper into small sizes this can be done using your hands.</li>
          <li>Once your water is boiled open your noodles and add your crushed noodles into the water. Let them cook for 3 minutes then drain the water and add your noodles into a bowl.</li>
          <li>Into your noodles add the powdered sauce which is always in the packet and mix the noodles gently. I prefer doing this as the flavor of the sauce gets in really well.</li>
          <li>Clean and chop your onions, tomatoes, capsicum and coriander into small sizes and set them aside. Take your carrot and grate it take your potatoes peel, wash and cut them into very small sizes.</li>
          <li>Take the saucepan you had boiled your noodles, add some oil let it heat up then add your onions and capsicum let them cook till soft add some turmeric, black pepper stir then add your tomatoes, your tomato paste and some salt. Cover and let it simmer until all the tomatoes are all cooked.</li>
          <li>Once they are cooked add your grated carrots stir then add your potatoes add some water very little cover and let it simmer to all your potatoes cook.</li>
          <li>Once your potatoes have cooked add your cooked crushed noodles and stir. Add your coriander stir cover and turn off your heat.</li>
          <li>Best served with liver, minced meat. I highly recommend this style of cooking noodles when making them for kids.</li>
        </ul>
      </div>
    )
  }

];


function RecipeCard({ title, ingredients, instructions }) {
  return (
    <div className='slider'>
      <div className="recipe-card">
        <h2>{title}</h2>
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
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

