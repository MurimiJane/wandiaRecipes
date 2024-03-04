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
            <h1 className="text-center p-4 mt-3  text-white">Faith Wandia</h1>
          </div>

          <img src={myimg} className="faithImg" />

        </div>


        <div className="container my-4 mx-4 bg-orange-200">
          <p>Loreum Ipsum</p>
        </div>

      </div>
      <div className="section2blog">
        <div className="prologue">
          <p>"This is a pdf cook book that is dedicated
            to all the people that love cooking and
            find cooking therapeutic. It's a collection of 34 recipes that I have tried and have worked out pretty
            well. Hope it helps you to get out of your comfort zone when it comes to cooking.
            Learn new ideas of cooking Enjoy different variety of food.
            Cooked in different styles.

            Yours Truly

            Wandia"</p>
        </div>
      </div>
      <div className="section3blog flex justify-center ">

      <div className="Culinary">
      <div className="CulinaryPassion">
      <h3>
      Wandia is a passionate chef with a love for creating memorable culinary experiences.
      </h3>

      </div>

      <div className="CulinaryInspiration">
      <h3>
      My recipes are inspired by a rich tapestry of flavors from different cultures.
      </h3>

      </div>

      <div className="Welcome">
      <h3>
      Join Wandia on a journey through a world of delectable dishes and gastronomical delights.
      </h3>

      </div>
      </div>


        <h1>  </h1>
      </div>

      <div className="section4">
        <Footer />
      </div>
    </div>




  );

}

export default App;
