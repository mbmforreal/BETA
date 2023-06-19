import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MenuItemsS  } from './MenuItems';
import './Dropdown.css'

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            {MenuItemsS.map((item, index) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            <h1>{item.title}</h1>
                            <h3>{item.detail}</h3>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </> 
    )
}
     
export default Dropdown;