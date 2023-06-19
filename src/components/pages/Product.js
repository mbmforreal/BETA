import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'

export default function Product() {
  return (
    <>
    <div className='whole'>
        <img src="https://wallpaperaccess.com/full/4205666.jpg" alt="Product Poster" />
        <h1 className='productHeadline'>Our Latest</h1>  <br /> 
        <h1 className='productHeadline productHeadlineBig'>Inovations</h1>
        <h1 className='heading'>2U 51100 Series (Residential) </h1>
        <div className="productList">
            <div className="productListContent">
                <ul className="productListMain">
                    <li className='product'>
                        <Link to='/' className="productListImg">
                            <img src="https://i.ibb.co/HX1MZcq/product.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitle">2U Rackmount</h3>
                        <p className="productListInfo">This is a short line to replace with product detail....<br /></p>
                        <a href="./2URackmount" className="productListLink">Details→ </a>
                    </li>
                    <li className='product'>
                        <Link to='/' className="productListImg">
                            <img src="https://i.ibb.co/RQJnHhm/image.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitle">2U wall-mount</h3>
                        <p className="productListInfo">This is a short line to replace with product detail....<br /></p>
                        <a href="/" className="productListLink">Details→ </a>
                    </li>
                    <li className='product'>
                        <Link to='/' className="productListImg">
                            <img src="https://i.ibb.co/MGKCzSX/47-3.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitle">2U vertical</h3>
                        <p className="productListInfo">This is a short line to replace with product detail....<br /></p>
                        <a href="/" className="productListLink">Details→ </a>
                    </li>
                    <li className='product'>
                        <Link to='/' className="productListImg">
                            <img src="https://i.ibb.co/DRVx358/DSC00408.png" alt="Product Name" />
                        </Link>
                        <h3 className="productListTitle">ENP51200 </h3>
                        <p className="productListInfo">This is a short line to replace with product detail....<br /></p>
                        <a href="/" className="productListLink">Details→ </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
     </>
  )
}
