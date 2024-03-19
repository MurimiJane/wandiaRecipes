import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Recipes.css';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footerm';

const chickenData = [
    {
        id: 1,
        title: "Wet Fry Chicken (Marinated)",
        ingredients: [
            "Sliced full chicken",
            "2 large onions",
            "4 tomatoes",
            "1 green capsicum (hoho)",
            "2 bunches of coriander (dhania)",
            "Ginger and garlic",
            "Rosemary spice",
            "Turmeric",
            "Chicken masala",
            "Black pepper",
            "Tomato paste",
            "Chicken cubes",
            "Soy sauce",
            "Oil",
            "Salt"
        ],
        instructions: (
            <div>
                <p>Marinating process:</p>
                <ul>
                    <li>Wash and chop one onion, and one bunch of coriander. Chop them into very small sizes.</li>
                    <li>Cut a small piece of ginger and garlic, wash them and pound them together into a paste.</li>
                    <li>Take a clean bowl, put your chicken, add your chopped onions, chopped coriander, ginger and garlic paste, one teaspoon of turmeric, one tablespoon of chicken masala, one teaspoon of black pepper, two chicken cubes, rosemary leaves, salt, and some small amount of oil.</li>
                    <li>Mix it all up then cover the bowl with a clear foil and put it in the fridge for 4 to 5 hours. For your chicken to marinate well, it is advised to marinate it overnight.</li>
                    <li>You can add other spices of your choice, no limitations.</li>
                </ul>
                <p>Cooking Process:</p>
                <ul>
                    <li>Wash and chop the other onion, bunch of coriander, green capsicum, and your tomatoes. Chop all in small sizes.</li>
                    <li>Cut another small piece of ginger and like four cloves of garlic, wash and pound them together to form a paste.</li>
                    <li>Take a clean saucepan (sufuria), add some very little amount of oil, let it heat up, add your chopped onions and green capsicum. Let them cook till soft then add your ginger and garlic paste.</li>
                    <li>Add your spices that are turmeric, chicken masala, black pepper, and one chicken cube. Stir and then add your marinated chicken. Stir, cover your saucepan, and let it simmer for 5 to 8 minutes.</li>
                    <li>After the minutes are done, add the chopped tomatoes, tomato paste, some salt, and another chicken cube. Cover and let it simmer to allow the tomatoes to cook. Tip: for your tomatoes to cook faster, add some salt, the cooking rate will increase.</li>
                    <li>Once all your tomatoes have cooked, stir your chicken, add some little amount of water, some soy sauce, stir, cover and let it simmer for 5 minutes.</li>
                    <li>Add your chopped coriander, stir, cover and turn off your heat.</li>
                    <li>Chicken is ready to serve. Best served with ugali, fries, baked potatoes, fried rice, and other meals you want to try it out with.</li>
                </ul>
            </div>
        )
    },
    {
        id: 2,
        title: "Chicken Nuggets",
        ingredients: [
            "500g Boneless Chicken",
            "5 Eggs",
            "Flour",
            "Bread Crumbs",
            "Black Pepper",
            "Turmeric",
            "Garam Masala",
            "Garlic and Ginger",
            "Chicken Masala",
            "2 Chicken cubes",
            "Oil",
            "Salt"
        ],
        instructions: (
            <div>
                <p>Marinating process:</p>
                <ul>
                    <li>Take your boneless chicken and cut it into big chunks, put them in a clean bowl. Wash and pound the garlic and ginger together to form a paste.</li>
                    <li>Add one tablespoon of turmeric, one tablespoon of garam masala, one teaspoon of black pepper, one tablespoon of chicken masala, the two chicken cubes, the ginger and garlic paste, salt, and some oil like two tablespoons.</li>
                    <li>Mix all that up gently and cover it with a clear foil, then keep it in the fridge for around 4 to 5 hours for the chicken to marinate. For the chicken to marinate best, put it overnight in the fridge.</li>
                </ul>
                <p>Cooking process:</p>
                <ul>
                    <li>Take three bowls or plates, one put the eggs and beat them, the other two put the flour and the bread crumbs.</li>
                    <li>In the plate or bowl with the flour, add one teaspoon of black pepper and one tablespoon of chicken masala. Mix well the flour to ensure even mixture with spices.</li>
                    <li>Take a medium-size pan, add some oil, a good amount of it which you can deep fry the chicken.</li>
                    <li>Take out your chicken and one by one deep in the flour, then the beaten eggs, then the bread crumbs; ensure the chicken is fully covered with the bread crumbs for a perfect end product.</li>
                    <li>Once you have done all that to all the chicken, deep fry your chicken till golden brown.</li>
                    <li>Your chicken nuggets are ready. Best served with fries, chips masala, and baked potatoes.</li>
                </ul>
            </div>
        )
    },
    {
        id: 3,
        title: "Deep Fried Chicken",
        ingredients: [
            "1 Full Sliced Broiler chicken",
            "1 big lemon",
            "Turmeric",
            "Black pepper",
            "Coriander powder",
            "Chicken masala",
            "2 medium-sized onions",
            "Fresh Rosemary leaves",
            "Garlic and Ginger",
            "Green Chilies",
            "2 Bunches of Coriander (dhania)",
            "Plain Yoghurt or plain Mala",
            "Oil",
            "Salt"
        ],
        instructions: (
            <div>
                <p>Marinating Method:</p>
                <ul>
                    <li>Clean your chicken put it in your mixing bowl, wash your lemon cut it and drain the juice, add the juice to your chicken.</li>
                    <li>Add one teaspoon of black pepper, one tablespoon of turmeric, coriander powder, chicken masala, rosemary leaves, and salt. Mix it all up then put it aside.</li>
                    <li>Wash and chop your onions, green chilies, coriander, ginger, and garlic. Put them all in a blender and make a paste.</li>
                    <li>Add the paste into your chicken and mix well.</li>
                    <li>Add your plain yoghurt to your chicken too and mix gently but well.</li>
                    <li>Marinate your chicken for an hour.</li>
                </ul>
                <p>After an hour:</p>
                <ul>
                    <li>Put some good enough oil to deep fry the chicken in a frying pan.</li>
                    <li>Let the oil heat up and one by one put your chicken and deep fry.</li>
                    <li>Once you

                        have deep-fried all your chicken, best served with fries, baked potatoes.</li>
                </ul>
            </div>
        )
    },
    {
        id: 4,
        title: "Chicken and Potatoes",
        ingredients: [
            "Sliced broiler chicken",
            "10 medium size Potatoes",
            "Garlic paste",
            "4 medium Lemons",
            "Black Pepper",
            "Rosemary",
            "Thyme",
            "Oregano",
            "Paprika",
            "Red chili Flakes (optional)",
            "Oil",
            "Salt"
        ],
        instructions: (
            <div>
                <p>Method:</p>
                <ul>
                    <li>First peel your potatoes, clean them, and chop them into medium sizes. Clean your lemons and squeeze the lemon juice and put it aside.</li>
                    <li>Take a clean mixing bowl, put your chicken, add your potatoes, some salt, black pepper, rosemary, thyme, oregano, paprika, red chili flakes, lemon juice, garlic paste, and some oil. Mix them up and let it marinate for like 2 hours for the flavors to sink in.</li>
                    <li>After marinating is done, take a frying pan, add some oil for deep frying. Deep fry your chicken and potatoes and serve them while hot. One can bake if you have an oven and you will get some perfect results too.</li>
                </ul>
            </div>
        )
    },
    {
        id: 5,
        title: "Hot and Sweet Chicken",
        ingredients: [
            "1 sliced full chicken",
            "Ginger and garlic",
            "2 medium size onions",
            "Red, green and yellow bells (hoho)",
            "Spring onions",
            "1 bunch of Coriander (dhania)",
            "Green chilies (optional)",
            "Rosemary and paprika",
            "Soy sauce",
            "Hot and sweet sauce",
            "2 tablespoon of honey",
            "Salt",
            "Oil"
        ],
        instructions: (
            <div>
                <p>Method:</p>
                <ul>
                    <li>Cut and clean your chicken and put it into your mixing bowl, pound a small amount of ginger and garlic to form a paste.</li>
                    <li>Into the mixing bowl, add the garlic and ginger paste, black pepper, rosemary, paprika, soy sauce, and some salt. Mix all that well and gentle. Marinate for around 1 1/2 hours.</li>
                    <li>As your chicken is marinating, clean your onions, the bells, coriander, and the spring onions. Chop all into small size apart from the bells, chop them into strip shapes. Set all aside.</li>
                    <li>After the marinating time is over, deep fry the chicken and set it aside.</li>
                    <li>Take a pan, add some oil, add your onions, let them cook till soft, add the bells, green chilies, and let them cook.</li>
                    <li>Add your hot and sweet sauce, honey, soy sauce, the fried chicken, stir, add your spring onions, stir, let it cook for just a minute, add your coriander, stir, and turn off your heat.</li>
                    <li>Ready to serve. Best served with rice, fries, or anything you want to try it out with.</li>
                </ul>
            </div>
        )
    },
    {
        id: 6,
        title: "Chicken wrapped with Bacon",
        ingredients: [
            "400g boneless chicken",
            "Bacon",
            "Ginger and garlic paste",
            "Rosemary leaves",
            "Turmeric",
            "Black pepper",
            "Chicken masala",
            "Chicken cubes",
            "Oil",
            "Salt"
        ],
        instructions: (
            <div>
                <p>Method:</p>
                <ul>
                    <li>Cut your chicken into medium-size strips, put them in a mixing bowl, add the turmeric, black pepper, chicken masala, chicken cubes, rosemary leaves, ginger and garlic paste, salt, and some oil.</li>
                    <li>Cover your chicken with a clear foil and marinate for about one hour.</li>
                    <li>Once your chicken has marinated, take a frying pan, add some oil and shallow fry all the chicken strips.</li>
                    <li>Take your bacons and wrap up your chicken strip one by one and then shallow fry to let the bacon cook.</li>
                    <li>Best served for Breakfast.</li>
                </ul>
            </div>
        )
    },
    {
        id: 7,
        title: "Chicken Avocado Toast Sandwich",
        ingredients: [
            "Farmers Choice Chicken Patty",
            "Bacon",
            "1 large onion",
            "1 large avocado",
            "2 medium tomatoes",
            "Margarine/blue band",
            "8 Slices of bread",
            "Salt",
            "Oil"
        ],
        instructions: (
            <div>
                <p>Method:</p>
                <ul>
                    <li>Take your frying pan add some oil, let it heat up then one by one add your patties. Cook them till brown on both sides. Do the same to the bacon. Set them aside.</li>
                    <li>Take your bread and in each side apply your margarine. Place them on your frying pan, allow them to cook on both sides till brown. Set them aside and turn the heat off.</li>
                    <li>Wash and slice your tomatoes and onions in ring shape while the avocado in slices.</li>
                    <li>Take your four slices of bread and in each slice add a layer of onions, avocado, then cooked patty and bacon then like three slices of tomatoes.</li>
                    <li>Take the other remaining slices, cover them, slice the toast diagonally. Best served for Breakfast. NB: For bread I recommend you use the large family bread.</li>
                </ul>
            </div>
        )
    },
    {
        id: 8,
        title: "Chicken Pita bread Sandwich",
        ingredients: [
            "400g boneless chicken",
            "Turmeric",
            "Black pepper",
            "Rosemary leaves",
            "Ginger and garlic paste",
            "1 large onion",
            "1 bunch of coriander",
            "4 medium size tomatoes",
            "Zesta Hot and sweet tomato sauce",
            "1 large Avocado",
            "All-purpose flour",
            "Instant Yeast",
            "Oil",
            "Salt"
        ],
        instructions: (
            <div>
                <p>Method:</p>
                <ul>
                    <li>Cut your chicken into small size in cube-like shape. Place them into a mixing bowl.</li>
                    <li>In the bowl add the ginger and garlic paste, turmeric, black pepper, and rosemary leaves. Mix them all together and let your chicken marinate for around an hour.</li>
                    <li>Take another mixing bowl add your all-purpose flour, two teaspoons of instant yeast, salt, and some warm water knead to make a dough.</li>
                    <li>Add some oil to the dough knead then cover and let it rest for 30 minutes.</li>
                    <li>Wash and chop your onion into ring shapes soak them in warm water. Chop your tomatoes and avocado into cube shape. Chop also your coriander.</li>
                    <li>Mix your chopped onions, tomatoes, and coriander then add the hot and sweet sauce gently mix them up.</li>
                    <li>Take your dough and make like 8 balls, then roll the balls into a round shape, cook them on both sides, set them aside.</li>
                    <li>Take a frying pan shallow fry your chicken.</li>
                    <li>Take your cooked dough cut it into half to make pockets.</li>
                    <li>Into the pockets add your chicken, your sauce mixture and chopped avocado.</li>
                    <li>Chicken Pita bread sandwich is ready to be served.</li>
                </ul>
            </div>
        )
    },
    {
        id: 9,
        title: "Baked Stuffed Chicken",
        ingredients: [
            "1 whole chicken",
            "Tandoori spice",
            "Chicken masala",
            "Turmeric",
            "Black pepper",
            "Chili powder (optional)",
            "Rosemary leaves",
            "Coriander leaves",
            "Ginger and garlic paste",
            "1 large lemon",
            "4 large potatoes",
            "Spring onions",
            "Salt and Oil"
        ],
        instructions: (
            <div>
                <p>Method:</p>
                <ul>
                    <li>Take a mixing bowl add tandoori spice, chicken masala, lemon juice, chopped coriander leaves, chili powder, black pepper, ginger and garlic paste, salt, and oil. Mix them all up to form a paste.</li>
                    <li>Chop your potatoes into medium size cubes and chop your spring onions, put them into a bowl add some oil black pepper, turmeric, and rosemary leaves. Mix them up and let it marinate for an hour.</li>
                    <li>Take your chicken and using a knife cut under the skin so that between the meat and skin there is some space.</li>
                    <li>Take your masala paste apply it on your chicken and under the skin and let your chicken marinate for an hour too.</li>
                    <li>After an hour stuff your chicken with the marinated potatoes.</li>
                    <li>Bake your chicken on a 180 degrees preheated oven for 30-35 minutes.</li>
                    <li>Best served with sauce kachumbari. Instead of stuffing the chicken with potatoes, you can stuff with red onions, green chilies, tomatoes, and spring onions and deep fry the whole chicken.</li>
                </ul>
            </div>
        )
    },
    {
        id: 10,
        title: "Tandoori Deep Fried Chicken",
        ingredients: [
            "Chicken leg pieces",
            "1 large lemon",
            "Ginger and garlic paste",
            "Tandoori spice",
            "Turmeric",
            "Black pepper",
            "Rosemary leaves",
            "Salt",
            "Oil"
        ],
        instructions: (
            <div>
                <p>Method:</p>
                <ul>
                    <li>Take your chicken legs pieces clean them and cut the chicken across making small lines on the legs.</li>
                    <li>Put them in a clean bowl add some lemon juice, tandoori spice, turmeric, black pepper, ginger and garlic paste, rosemary leaves, salt, and oil.</li>
                    <li>Mix them well and marinate for one hour.</li>
                    <li>After an hour put some oil in your frying pan, enough oil for deep frying.</li>
                    <li>Deep fry your chicken.</li>
                    <li>Best served with fries, baked potatoes, and the sauce kachumbari.</li>
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

function Chickenmeals() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='chicken'>

            <div className='chickensection'>
                <NavBar />
                <h1>Chicken Meals</h1>
            </div>

            <div className='section2'>
                <div className='Slider'>
                    <Slider {...settings}>
                        {chickenData.map((recipe) => (
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

export default Chickenmeals