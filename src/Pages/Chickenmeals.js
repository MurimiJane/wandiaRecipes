import React, { useState, useEffect } from 'react'
import '../Recipes.css';
import NavBar from '../Components/Navbar';
import { toast, ToastContainer } from 'react-toastify'
import { getFirestore } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css';
import Carousel from 'react-bootstrap/Carousel';
import '../firebaseConfig';
import { db } from '../firebaseConfig';
import { doc, addDoc, collection, query, where, getDocs } from "firebase/firestore";

function Chickenmeals() {

    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setingredients] = useState("");
    const [method, setMethod] = useState("");

    useEffect(() => {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        const q = query(collection(db, 'recipe'), where("Category", "==", "ChickenMeals"));

        getDocs(q).then((QuerySnapshot) => {
            QuerySnapshot.forEach((doc) => {

                const recipeName = doc.data.RecipeName;
                const Ingredients = doc.data.Ingredients;
                const Method = doc.data.method;

                //setLoggedInUser(userEmail);
                setRecipeName(recipeName);
                setingredients(Ingredients);
                setMethod(Method);
            })
        })



    }, [])

    return (

        <div className='chicken'>

            <div className='chickensection'>
                <NavBar />
                <h1>Chicken Meals</h1>
            </div>

            <div className='chickenintro'>
                <h1>Chicken Meals</h1>
                <div className='container'>
                    <p>{recipeName}</p>
                </div>


                <p>{ingredients}</p>
                <p>{method}</p>



            </div>
        </div>



    )
}

export default Chickenmeals