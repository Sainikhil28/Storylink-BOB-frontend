import React from "react";
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
const Single = () => {
    return (
        <div className='single'>
            <div className='content'>
                <img src="https://images.yourstory.com/cs/images/companies/1524040302784233869608451588461189827422506n-1622189627252.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff" alt="" />
                <div className="user">
                    <img src = "https://media.licdn.com/dms/image/C5603AQFFkyutvZk-yA/profile-displayphoto-shrink_800_800/0/1627900033992?e=2147483647&v=beta&t=i70hZHZ-PXcnXqxqwV1WLTUaxsc2oyANCTyojg48gFQ" alt="" />
                 <div className="info">
                    <span>Kirushanth Kumar</span>
                    <p>Co Founder at Businessonbot</p>
                 </div>
                 <div className="edit">
                    <Link to={`/write?edit=2`}>
                    <img src={Edit} alt=""/>
                    </Link>
                    <img src={Delete} alt=""/>
                 </div>
                </div>
                <h1>BusinessOnBot</h1>
                <p>
                BusinessOnBot helps D2C businesses with New User Acquisition tools & complete WhatsApp Shop on WhatsApp. This is done via proprietary attribution based marketing tools and creation of WhatsApp stores with vernacular language support.

Out of about 390 Million+ WhatsApp users in India, nearly 315 Million users are non-tech savvy, vernacular language users. This is the potential size of the Total Addressable market for any D2C brand selling their products in India. This is the market that Business on Bot helps D2C brands reach and leverage for their business growth.

We set up end-to-end WhatsApp marketing channels for brands, from product discovery to purchase, with e-commerce flows that address user acquisition, engagement, referrals and cart recovery, all in vernacular languages. If you are a growth focused D2C brand looking for support with setting up your WhatsApp user acquisition flow, we can help.
                </p>
                </div>
            <Menu />
            </div>
    )
}

export default Single