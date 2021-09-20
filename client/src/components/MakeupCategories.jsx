import { Link } from "react-router-dom";
import primer from "../images/primer.png"
import foundation from "../images/foundation.png"
import concealer from "../images/concealer.png"
import powder from "../images/powder.png"
import bronzer from "../images/bronzer.png"
import blush from "../images/blush.png"
import eyeshadow from "../images/eyeshadow.png"
import eyeliner from "../images/eyeliner.png"
import mascara from "../images/mascara.png"
import lipstick from "../images/lipstick.png"


export default function MakeupCategories() {

  return (
    <div className="icons">
      <div>
      <Link to="/makeup/Primer"><img src={primer} alt="primer"/></Link>
        <p>Primer</p>
      </div>

      <div>
      <Link to="/makeup/Foundation"><img src={foundation} alt="foundation"/></Link>
        <p>Foundation</p>
      </div>

      <div>
      <Link to="/makeup/Concealer"><img src={concealer} alt="concealer"/></Link>
        <p>Concealer</p>
      </div>

      <div>
      <Link to="/makeup/Powder"><img src={powder} alt="powder"/></Link>
        <p>Powder</p>
      </div>

      <div>
      <Link to="/makeup/Bronzer"><img src={bronzer} alt="bronzer"/></Link>
        <p>Bronzer</p>
      </div>

      <div>
      <Link to="/makeup/Blush"><img src={blush} alt="blush"/></Link>
        <p>Blush</p>
      </div>

      <div>
      <Link to="/makeup/Eyeshadow"><img src={eyeshadow} alt="eyeshadow"/></Link>
        <p>Eyeshadow</p>
      </div>

      <div>
      <Link to="/makeup/Eyeliner"><img src={eyeliner} alt="eyeliner"/></Link>
        <p>Eyeliner</p>
      </div>

      <div>
      <Link to="/makeup/Mascara"><img src={mascara} alt="mascara"/></Link>
        <p>Mascara</p>
      </div>

      <div>
      <Link to="/makeup/Lipstick"><img src={lipstick} alt="Lipstick"/></Link>
        <p>Lipstick</p>
      </div>

      
      

      

      
     
     
    </div>
  )
}
