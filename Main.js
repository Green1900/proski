import { Link } from "react-router-dom"
import Greetings from "../components/Greeting";

function Main() {


  function playMusic() {
  const music = new Audio('a69ab5f09f8ded454c37af58befefd36.mp3');
  music.loop = true;
  music.play();
}

    return (
        <div className="Zam">
         <div className="Dog">
           <Greetings name="Пользователь"/>
           <Link to="/challenge">
            <button id="grand">Начать квест</button>
           </Link>
           <br/>
           <br/>
           <br/>
           <br/>
           <audio controls src="a69ab5f09f8ded454c37af58befefd36.mp3" />
        </div>
      </div>
    )
}

export default Main;