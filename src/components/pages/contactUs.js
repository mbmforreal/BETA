import { Link } from 'react-router-dom';
import './contactUs.css';

export default function ContactUs() {
    return(
        <>
            <div className="headImg" />
            <div className="mapArea">
                <div className="adress">
                    <h2><div className="imp">Main</div> Office</h2>
                    <h3>Beta +</h3>
                    <p>Add ：No.15 ShiShan NorthRoad, Dongfu, Haicang District , Xiamen, China 361027</p>
                    <p>Mail:sales@betaplus.com</p>
                    <p>Phone:+86-xxx-xxxxxxx</p>
                    <p>Fax: +86-xxx-xxxxxxxx</p>
                    </div>
                <div className="mapContainer">
                <iframe
                    title='BETA+'
                    src={'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3680.196088591391!2d114.26607371070583!3d22.720951927431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzE1LjQiTiAxMTTCsDE2JzA3LjIiRQ!5e0!3m2!1sen!2s!4v1686724875716!5m2!1sen!2s'}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className="marketsContainer">
            <div className='markets'>
                <h2><div className="imp">European</div>Market</h2>
                <p className="mail">sales@a-beta.net</p>
                <p className="mail">vp@a-beta.net</p>
            </div>
            <div className="markets">
                <h2><div className="imp">US </div> Market</h2>
                <p className="mail">sales@a-beta.net</p>
                <p className="mail">vp@a-beta.net</p>
            </div>
            </div>
            <div className="message">
                <h1>Online Message</h1>
                <div className="form-container">
                <div className="form-row">
                    <input type="text"  className="name" name="name" placeholder="Name" required />
                    <input type="tel"  className="phone" name="phone" placeholder="Phone" required />
                </div>
                <div className="form-row">
                    <input type="email"  className="email" name="email" placeholder="E-Mail" required />
                </div>
                <div className="form-row">
                    <textarea  className="content" name="content" rows="4" required placeholder="Content"></textarea>
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
                </div>

            </div>
        </>
    )
}