import React, { useRef, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import '../firebaseConfig';
import { db } from '../firebaseConfig';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, addDoc, collection, query, where, getDocs } from "firebase/firestore";

function Dashboard() {
    
    //modal ....
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //get recipe input 
    const nameRef = useRef();
    const ingredientsRef = useRef();
    const methodRef = useRef();
    const categoryRef= useRef();


    function addRecipe() {

        const Rname = nameRef.current.value;
        const ingredients = ingredientsRef.current.value;
        const method = methodRef.current.value;
        const category = categoryRef.current.value;

        addDoc(collection(db, "Recipes"), {

            RecipeName: Rname,
            Ingredients: ingredients,
            method: method,
            Category:category


        }).then(() => {
            toast.success("Recipe added")
            console.log("Recipe added")
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        })
            ;
        // ...
        console.log(Rname);
    }
   
   
    return (
        <div className='Dashboard'>

            <Button className="btn btn-primary" onClick={handleShow}>
                Add Recipe
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Recipe</Modal.Title>
                    <ToastContainer />
                </Modal.Header>

                <Modal.Body>
                    <input type="text" ref={nameRef} placeholder='Enter recipe name' /><br></br><br></br>
                    <input type="text" ref={ingredientsRef} placeholder='Enter recipe ingredients' /><br></br><br></br>
                    <input type="text" ref={methodRef} placeholder='Enter cooking method' /><br></br><br></br>
                    <select name="" ref={categoryRef} className="form-control" placeholder='Select Recipe Category'>
                        <option value="ChickenMeals">Chicken Meals</option>
                        <option value="Salads">Salads</option>
                        <option value="Coffee">"Coffee</option>
                        <option value ="SimpleMeals">SimpleMeals</option>
                    </select>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addRecipe}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Dashboard