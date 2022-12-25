import Home from "./Home"
import '../App.css';
import myimg from '../Images/wandia.png'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footerm";


function App() {



  return (
    <div className="App">
      <div className="section1blog">
        <Navbar />
        <div className="title">
          <div>
            <h1 className="text-center p-4 mt-3 bg-red-500 text-white">Faith Wandia</h1>
          </div>

          <img src={myimg} className="rounded-lg" />

        </div>


        <div className="container my-4 mx-4 bg-orange-200">
          <p>Loreum Ipsum</p>
        </div>

      </div>
      <div className="section2">
        <div className="prologue">
          <p>"This is a pdf cook book that is dedicated
            to all the people that love cooking and
            finds cooking therapeutic. It's a collection of 34 recipes that I have tried and have worked out pretty
            well. Hope it helps you;
            Get out of your comfort zone when it comes to cooking.
            Learn new ideas of cooking Enjoy different variety of food.
            Cooked in different styles.

            Yours Truly

            Wandia"</p>
        </div>
      </div>
      <div className="secton3 flex justify-center ">


        <h1>  </h1>
      </div>

      <div className="section4">
        <Footer />
      </div>
    </div>




  );

}

export default App;
