import {NavBar} from './NavBar'
import {Carrito} from './Carrito'
import './Menu.css'
import { Link } from 'react-router-dom'


export const Header = (props) => {
  return (
    
    <div className='heaader'>
      <img className='imglogo' src="./img/pngwing.com.png"/>
     <Link to="/"> <h1>CoderCaps</h1></Link>
      
      
      <NavBar/>
      <Carrito numerito={props.numerito}/>
    </div>
    
  )
}


