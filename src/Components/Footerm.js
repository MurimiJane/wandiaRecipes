import React ,{useRef, useState, useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function Footerm() {
      //get data from input userName
      const userNameRef = useRef();
      const userMessageRef = useRef();
  
      //setting data to h1
      const [animal, setAnimal] = useState("Chiwawa")
      const [msg, setMsg] = useState("Chiwawa")
      const [result, setResults] = useState([])
  

         
  
      function submit() {
          const theName = userNameRef.current.value;
  
          //show the data here
          setAnimal(theName)
      }
  
  
      function passdata() {
          const theMessage = userMessageRef.current.value;
          //show the data here
          setMsg(theMessage)
      }
  
  return (
    <div>
        <div className="footer">
             <div className="feedback">
                    <h1>Give me your feedback</h1>

                    <input type='text' placeholder="Enter your name" ref={userNameRef} />
                        <Button className="btn btn-secondary" onClick={submit}>View Recipes</Button>
                        
                        <br></br>
                        <br></br>

                        <input type='text' placeholder="Enter your message" ref={userMessageRef} />
                        <Button className="btn btn-primary" onClick={passdata}>Submit msg</Button>
                        
                   
                    <Button className="btn btn-primary">Submit</Button>
                    <h1>{animal}</h1>
                    <h1>{msg}</h1>
               
                </div>

                <div className="contacts">
                    <p>Faith Wandia</p>
                    <p>07233455678</p>
                    <p>faithwandia@gmail.com</p>
                </div>
        </div>
    </div>
  )
}

export default Footerm
