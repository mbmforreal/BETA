import { Link } from 'react-router-dom';
import './download.css';
import { useState } from'react';

export default function Download() {
    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (item) => {
      setActiveItem(item);
    };
    return(
        <>
            <div className="headImg" />
            <div className="imgInfo">
                <h1>Downloads</h1>
                <h3>Enter what you want help with</h3>
            </div>
            <div className="search">
                <h1>Filter</h1><div className="spaceBtw" />
                <input type="text" className="searchBox" id="searchBox" placeholder='Please eneter your search'/>
                <button className="searchBtns"> &nbsp;Search&nbsp; </button>
            </div>
            <div className="filter">        
                <ul>
                <li className={activeItem === 'Brochure' ? 'active' : ''} onClick={() => handleClick('Brochure')}>
                    <span className='filterBtn'>Brochure</span>
                </li>
                <li className={activeItem === 'Datasheet' ? 'active' : ''} onClick={() => handleClick('Datasheet')}>
                    <span className='filterBtn'>Datasheet</span>
                </li>
                <li className={activeItem === 'Certificates' ? 'active' : ''} onClick={() => handleClick('Certificates')}>
                    <span className='filterBtn'>Certificates</span>
                </li>
                <li className={activeItem === 'Manuals' ? 'active' : ''} onClick={() => handleClick('Manuals')}>
                    <span className='filterBtn'>Manuals</span>
                </li>
                </ul>
            </div>
            <div className="section">
        <h2 className='dHead'>Downloads</h2>
        <div className="table">
          <table>
            <thead>
                <tr>
                <th>File Name</th>
                <th>Document Type</th>
                <th>Download</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>U2-Brouchur</td>
                <td>Brouchur</td>
                <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
              <tr>
                <td>U2-Datasheet</td>
                <td>Datasheet</td>
                <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
            <tr>
              <td>U2-User Manual</td>
              <td>User Manual</td>
              <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
            <tr>
              <td>U2-User Manual</td>
              <td>User Manual</td>
              <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
            <tr>
              <td>U2-User Manual</td>
              <td>User Manual</td>
              <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
            <tr>
              <td>U2-User Manual</td>
              <td>User Manual</td>
              <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
            <tr>
              <td>U2-User Manual</td>
              <td>User Manual</td>
              <td>
                  <Link to="/" className="icon-f"></Link>
                  <Link to="/" className="icon-d"></Link>
                </td>
              </tr>
          </tbody>

          </table>
        </div>
    </div>
        </>
    )
}