import { Link } from 'react-router-dom'
import './solutions.css'


export default function SolarESSCS() {
    return(
        <>
            <div className="headImgS" />
            <div className="imgInfoS">
                <h1>Integrated Solar + ESS Charging Station</h1>
                <h3>BETA+ Solutions</h3>
            </div>
            <div className="solDetails">
                <h1>Integrated Solar + ESS Charging Station</h1>
                <p>EnergieCel's state-of-the-art ESS Charging Station can draw power from the utility grid during off-peak times and store it in batteries. This stored energy can then be discharged to EV chargers during peak times, resulting in significant cost savings on electricity bills and the potential to generate revenue.</p>
                <p>Moreover, the ESS Charging Station serves as a reliable spare energy pool, ensuring that EV chargers piles continue to function normally even during power outages or grid overloads. This feature eliminates the need for further investments in transmission and distribution facilities, effectively addressing grid capacity insufficiencies.</p>
                <p>Of particular note is the ESS Charging Station's commitment to environmental sustainability. Solar energy is always given priority, reflecting our company's green mission.</p>
            </div>
            <img src="https://www.popsci.com/uploads/2021/01/28/WQKERORDUVB2LNCQTE4S5IVNSE-1536x1152.jpg" alt="" className="imgDetail" />
            <div className="graph">
                <h1>System <div className="blu">Schematic</div></h1>  
                <img src="https://www.tbbpowermobile.com/getFile/profile/upload/2023/01/04/%E8%B5%84%E6%BA%90%204_20230104011119A013.png" alt="" className="graphImg" />
            </div>
            <div className="highlights">
                <div className="features">
                    <img src="https://www.tbbpowermobile.com/getFile/profile/upload/2023/01/03/%E7%89%B9%E7%82%B9%E9%85%8D%E5%9B%BE_20230103085240A004.png" alt="" className="imgFeature" />
                    <div className="listS">
                        <h1>System Feature<div className='blu'> Highlights</div></h1>
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
                </div>
            </div>
            <div className="productListContentS">
                <ul className="productListMainS">
                    <li className='product'>
                        <Link to='/' className="productListImgS">
                            <img src="https://i.ibb.co/HX1MZcq/product.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitleS">2U Rackmount</h3>
                        <p className="productListInfoS">This is a short line to replace with product detail....<br /></p>
                        <a href="./2URackmount" className="productListLinkS">Details→ </a>
                    </li>
                    <li className='product'>
                        <Link to='/' className="productListImgS">
                            <img src="https://i.ibb.co/RQJnHhm/image.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitleS">2U wall-mount</h3>
                        <p className="productListInfoS">This is a short line to replace with product detail....<br /></p>
                        <a href="/" className="productListLinkS">Details→ </a>
                    </li>
                    <li className='product'>
                        <Link to='/' className="productListImgS">
                            <img src="https://i.ibb.co/MGKCzSX/47-3.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitleS">2U vertical</h3>
                        <p className="productListInfoS">This is a short line to replace with product detail....<br /></p>
                        <a href="/" className="productListLinkS">Details→ </a>
                    </li>
                </ul>
            </div>
        </>
    )
}