import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { MenuItemsP  } from './MenuItems';
import './DropdownP.css'

function DropdownP() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return(
        <>
        <ul onClick={handleClick} className={click ? 'dropdown-menuP clicked' : 'dropdown-menuP'}>
            {MenuItemsP.map((item, index) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                            <div className="navbarImg">{item.image}</div>
                            <h1>{item.title}</h1>
                            <h4>{item.detail}</h4>
                        </Link>
                    </li>
                )
            })}
        </ul>
        </>
    )
}
    
export default DropdownP;