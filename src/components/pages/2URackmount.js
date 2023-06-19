import React from 'react';
import './productpage.css';
import { Link } from 'react-router-dom';
import DetailsThumb from '../DetailsThumb';
import { scrollToSection } from './scrollToSection';

class twoURackmount extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "2U Rack Mount",
        "src": [
            'https://i.ibb.co/RQJnHhm/image.png',
            'https://i.ibb.co/MGKCzSX/47-3.png',
            'https://i.ibb.co/HX1MZcq/product.png',
            'https://i.ibb.co/MGKCzSX/47-3.png'
          ],
        "description": "Small description of the product",
        "content": "Introducing our revolutionary solar product, designed to harness the boundless power of the sun. With cutting-edge technology, it captures sunlight and seamlessly converts it into clean, renewable energy to meet your everyday needs. Say goodbye to soaring energy bills and reduce your carbon footprint as you embrace a sustainable lifestyle. Whether it's for your home or business, our efficient solar solution offers a myriad of benefits.",

      }
    ],
    index: 0
  };
  

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active"; 
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render(){
    const {products, index} = this.state;
    return(
        <>
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                </div>
                <p>{item.description}</p>
                <p>{item.content}</p>

                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className='btn scroll-button' onClick={scrollToSection}>Download→ </button>
              <button className='btn'><Link to='./contactUs' className='Links'>Contact Us→ </Link></button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="function">
        <h1>Features</h1>
        <ul>
          <li>Pure sine wave output with high efficiency</li>
          <li>Outstanding overload capability for all kinds of inductive load.</li>
          <li>Extremely low status consumption power.</li>
          <li>Power control and power assist function to compose the generator hybrid system.</li>
          <li>Powerful charger for a quick charge.</li>
          <li>TBB premium II battery charging algorithm suitable for various battery chemicals including LPE.</li>
          <li>UPS class transfer speed, 0ms.</li>
          <li>Automatic ON when shore power is connected.</li>
          <li>Supports IGN control through an external module (optional).</li>
          <li>Built-in ground relay.</li>
          <li>Silent design with thermal control fan make it suitable for free camper.</li>
          <li>Fully programmable.</li>
          <li>230Vac and 110Vac models are available</li>
          <li>12V: CM2.0L, CM3.0L, CM3.0L-LV</li>
          <li>48V: CM3.6S-LV, CM4.8S-LV</li>
        </ul>
      </div>
      <div className="section" id="scroll-section">
        <h2>Downloads</h2>
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
          </tbody>

          </table>
        </div>
    </div>
    </>
    );
  };
}

export default twoURackmount;
