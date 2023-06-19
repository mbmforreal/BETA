import '../../App.css';
import './Pages.css'
import ImageSlider from '../imageSlider'
import CounterUp from '../CounterUp'
import Profile from '../profile';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Timeline from '../timeline';

function Home() {
    const images = [
        'https://www.publish-industry.net/wp-content/uploads/digitalisierung-verandert-b2b-kauf-entscheidungsprozesse-2-1920x850.png',
        'https://gg-loop.com/wp-content/uploads/2015/08/1920x850-ph.jpg',
        'https://influenceemobility.com/wordpress-cms/wp-content/uploads/2023/04/Targeted-communications-the-importance-of-audience-centricity-in-specialist-PR-1920x850.jpg'
    ];
    const [activeOption, setActiveOption] = useState('option1');

    const handleOptionClick = (option) => {
      setActiveOption(option);
    };  
    return (  
        <>
            <div>
            <ImageSlider images={images} />
            </div>
            <CounterUp />
            <Profile />
            <div className="bg"></div>
            <Timeline />
            <div className="productSeries">
                <div className="headPS">
                <h1>Product <span className='imp'>Series</span></h1>
                <p>Wide Range of Slim Series of Energy Storage Systems. </p>
                </div>
                <div  className="itemsPS">
                <Link to="/"  className="itemPS">
                    <img src="https://i.ibb.co/HX1MZcq/product.png" alt="Product" className="imgPS" />
                    <h3>Residential Series</h3>
                    <p>→</p>
                </Link>
                <Link to="/" className="itemPS">
                    <img src="https://i.ibb.co/RQJnHhm/image.png" alt="Product" className="imgPS" />
                    <h3>C&I Series</h3>
                    <p>→</p>
                </Link>
                <Link to="/" className="itemPS">
                    <img src="https://i.ibb.co/HX1MZcq/product.png" alt="Product" className="imgPS" />
                    <h3>Portable Series</h3>
                    <p>→</p>
                </Link>
                <Link to="/" className="itemPS">
                    <img src="https://i.ibb.co/MGKCzSX/47-3.png" alt="Product" className="imgPS" />
                    <h3>Components</h3>
                    <p>→</p>
                </Link>
                </div>
            </div>
            <div className="homeSol">
                <div className="container">
                    <div className="options">
                        <div
                        className={`option ${activeOption === 'option1' ? 'active' : ''}`}
                        onClick={() => handleOptionClick('option1')}
                        >
                            Integrated Solar + ESS Charging Station
                        </div>
                        <div
                        className={`option ${activeOption === 'option2' ? 'active' : ''}`}
                        onClick={() => handleOptionClick('option2')}
                        >
                            Power Shortage Areas Off-grid Micro-grid
                        </div>
                        <div
                        className={`option ${activeOption === 'option3' ? 'active' : ''}`}
                        onClick={() => handleOptionClick('option3')}
                        >
                        Solar and Wind Power Absorption
                        </div>
                    </div>
                    <div className="content">
                        {activeOption === 'option1' && (
                        <div className="slide">
                            <div className="text">
                            <h1>Product 1, Product 2, Product 3</h1>
                            <h2>Integrated Solar + ESS Charging Station</h2>
                            <p>Beta's state-of-the-art ESS Charging Station can draw power from the utility grid during off-peak times and store it in batteries. This stored energy can then be discharged to EV chargers during peak times, resulting in significant cost savings on electricity bills and the potential to generate revenue.</p>
                            <button>Check→</button>
                            </div>
                            <div className="image">
                            <img src={require('../../resources/img/isecs.jpg')} alt="Image 1" />
                            </div>
                        </div>
                        )}
                        {activeOption === 'option2' && (
                        <div className="slide">
                            <div className="text">
                            <h1>Product 1, Product 2, Product 3</h1>
                            <h2>Power Shortage Areas Off-grid Micro-grid</h2>
                            <p>Beta+'s Off-grid Microgrid is a revolutionary solution for remote areas without access to electricity. By utilizing distributed power generation units and energy storage systems, it can easily provide reliable power without the need for large-scale construction or significant capital investment. Additionally, the Microgrid is highly flexible and can be easily relocated as needed, offering a cost-effective and eco-friendly energy supply that is both easy to operate and maintain.</p>
                            <button>Check→</button>
                            </div>
                            <div className="image">
                            <img src={require('../../resources/img/psaom.png')} alt="Image 2" />
                            </div>
                        </div>
                        )}
                        {activeOption === 'option3' && (
                        <div className="slide">
                            <div className="text">
                            <h1>Product 1, Product 2, Product 3</h1>
                            <h2>Solar and Wind Power Absorption</h2>
                            <p>In response to the demand for peak regulation on the power supply side and on-demand management on the user side, Beta+ designed a new integrated solution of ESS to relieve the peak regulation pressure of the utility grid and enhance the local absorption capacity of new energy generation.</p>
                            <button>Check→  </button>
                            </div>
                            <div className="image">
                            <img src={require('../../resources/img/isecs.jpg')} alt="Image 3" />
                            </div>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                <div className="coperativePartners">
                    <div className="CPHeader">
                        <h1>Cooperative Partners</h1>
                    </div>
                    <div className="CPBody">
                        <div className="CPLine">
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/a4/1c1163f40480416691a751a3945ade.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="GoodWe" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/55/53203bd0f867fce03282099bc84fc7.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="SunGrow" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/ab/c478fab7d465a0cf4dad05a31b4081.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="Deye" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/b8/e97017323163fcaf0599b8b2aa125c.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="GrowWatt" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/90/4c7f919c18cb938a158d70b86e3709.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="Victron Energey" />
                        </div>
                        </div>
                        <div className="CPLine">
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/4d/a41221233799bc771627ec4f6a84dd.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="GanFeng Lithem" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/06/612a0e507f1741ece0f1a006457351.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="Gorion HighTech" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/dd/5ef8064bbbe004f2e1ef7a71388f18.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="CATL" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/b7/42901e11b5a49f5df0caf90536220c.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="EVE" />
                        </div>
                        <div className="partner">
                            <img src="https://bsg-i.nbxc.com/company/96/64a858d91677d14f4ce372f9b74183.jpg@95Q.webp?x-oss-process=image/resize,w_272" alt="BYD" />
                        </div>
                        </div>  
                    </div>
                </div>
                <div className="LPDownload">
                    <h1>Download</h1>
                    <h3>Sufficient Productline to meet RV needs</h3>
                    <div className='LPSerach'>
                        <input type="text" className='LPSearchBar' placeholder='Please enter your search'/>
                        <button className='LPButton'>Search</button>
                    </div>
                    <div className="downloadShortCut">
                        <Link to="/" className="shtcut">
                            <div className="brochure" />
                            <p>Brochure</p>
                        </Link>
                        <Link to="/" className="shtcut">
                        <div className="datasheet" />
                            <p>DataSheet</p>
                        </Link>
                        <Link to="/" className="shtcut">
                        <div className="manual" />
                            <p>Manuals</p>
                        </Link>
                        <Link to="/" className="shtcut">
                        <div className="certificate" />
                            <p>Certificates</p>
                        </Link>
                    </div>
                </div>
        </>
    )
}
export default Home;






