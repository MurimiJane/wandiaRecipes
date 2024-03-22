import React, { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import herName from '../Images/icons8-woman-64.png'
import email from '../Images/gmail.svg'
import phone from '../Images/phone.svg'



function Footerm() {
    //get data from input userName
    const userNameRef = useRef();
    const userMessageRef = useRef();

    //setting data to h1
    const [animal, setAnimal] = useState(" ")
    const [msg, setMsg] = useState(" ")
    const [result, setResults] = useState([])

   
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to the output page with the input data
    history.push(`/?data=${animal}`);
  };


    function submit() {
        const theName = userNameRef.current.value;
        const theMessage = userMessageRef.current.value;
        //show the data here
        setAnimal(theName)
         setMsg(theMessage)
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
                    <br></br>
                    <div className="input-tab nametab">
                        <input type="text" id="fullname" required className="input nametab" ref={userNameRef} />
                        <label htmlFor="fullname" className="input-label">Enter your full name</label>
                    </div> 

                    <div className="input-tab ">
                        <input type="text" id="msg" required className="input msgtab" ref={userMessageRef}/>
                        <label htmlFor="msg" className="input-label">Enter Your message</label>
                    </div>

                    <button className="submit" onClick={submit}>Add Name</button>
                    <button className="submit" onClick={handleSubmit} >Submit</button>

                   

                </div>

                <div className="contacts">
                    <div className='name'>
                        <div className='contactsBtn eclipse4 btn'>
                            <img src={herName} className="rounded-lg" />
                        </div>
                        <p>Faith Wandia</p>

                    </div>

                    <div className='phone'>
                        <div className='contactsBtn eclipse4 btn'>
                            <img src={phone} className="rounded-lg" />
                        </div>
                        <p>07233455678</p>

                    </div>

                    <div className='gmail'>
                        <div className='contactsBtn eclipse4 btn'>
                            <img src={email} className="rounded-lg" />
                        </div>
                        <p>faithwandia@gmail.com</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footerm
