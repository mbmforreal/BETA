import './aboutUs.css'

export default function AboutUs() {
    return(
        <>
            <div className="headImg" />
            <div className="imgInfo">
                <h1>About Us</h1>
                <h3>Persuit of Perfection</h3>
            </div>
            <div className="companyIntro">
                <h1>Beta+ <div className="imp">Introduction</div></h1>
                <p className='companyData'>Founded in 2007, TBB Power Co., Ltd is headquartered in Xiamen, China with subsidiaries in Europe and North America. The company specializes in the development and manufacturing of independent power system solutions that are applied in recreational vehicles, utility vehicles, commercial vehicles, and other professional vehicles, as well as in boats and marine engineering platforms, covering power generation, conversion, storage, digital distribution, intellectual monitoring, IoT and other professional modules. Our total employees have exceeded 1000, including a highly qualified and experienced R&D team of 200 engineers. Upholding the business philosophy of "Build with Clients", we strive to be at the forefront of power system development and manufacturing and to become a top global brand for independent power systems.</p>
            <img src="https://www.tbbpowermobile.com/_nuxt/img/about_us_company.599859d.png" alt="Informative Image" className="infoImg" />
            </div>
            <div className="headImg" />
            <div className="imgClient">
                <h1>Bulid with Client</h1>
                <h3>BETA+ Power Mobile</h3>
            </div>
            <div className="contactForm">
            <div className="adressAU">
                    <h2>Contact<div className="imp">Us</div></h2>
                    <h3>Beta +</h3>
                    <p>Mail:sales@betaplus.com</p>
                    <p>Phone:+86-xxx-xxxxxxx</p>
                    <p>Fax: +86-xxx-xxxxxxxx</p>
            </div>
            <div className="messageAU">
                <div className="form-container">
                <div className="form-row">
                    <input type="text"  className="nameAU" name="name" placeholder="Name:" required />
                    <input type="tel"  className="phoneAU" name="phone" placeholder="Phone:" required />
                    <input type="email"  className="emailAU" name="email" placeholder="E-Mail:" required />
                </div>
                <div className="form-row">
                    <textarea  className="contentAU" name="content" rows="4" required placeholder="Content:"></textarea>
                </div>
                <div className="form-row">
                    <button type="submit">Submit</button>
                </div>
                </div>

            </div>
            </div>
        </>
    )
}