import React from 'react'
import styled from 'styled-components'
import { Link } from  "react-router-dom"

const Navg = styled.div`

*{
  margin: 0rem;
  padding:0rem;
}
#navThird {
  height: 8vh;
  width: 100vw;
  background: #e08;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  /* border:0.125rem solid purple; */
  
}
#navThirdList {
  display: flex;
  width: auto;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  text-decoration: none;
  /* border:0.125rem solid greenyellow; */
  /* padding: 1rem; */
  /* gap: 0.5rem; */
}
#navThirdList > li {
  width: auto;
  font-size: 2.5vh;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  line-height: 1.8vh;
  padding: 1.81vh;
  list-style: none;
  /* height: 100%; */
 
  display: flex;
  justify-content: space-between; 
  /* flex-direction: column; */

  align-items: center;
  /* padding: 0 1.3rem; */
}
/* Up Arrow icon on hover */

#navThirdList > li:hover {
  background-color:#c07;
}
.liIcon {
   color: white;
   padding:0.313rem;
   /* display: none; */
  /* margin:2; */
  /* transform: translateY(0); */
}
/* Hover effects  */
.nav-item:hover .liIcon {
  display: block;
   margin: auto; 
   display: grid;
   padding: auto;
   transition: 600ms;
  /* transform: translateY(0); */
  /* position: relative; */
  /* font-size: 1.4em; */
  /* top: 3.9vh; */
  /* bottom: 0vh; */
  /* place-items: center; */
  
}
#navThirdList > li > a {
  text-decoration: none;
  color: white;
}

.nav-item .fa-bag-shopping {
  color:white;
  margin-right:0.313rem;
}

.cat1 {
  font-weight: bold;
}
/* sub items after hover on any li elements */
.nav-item .sub-items {
  pointer-events: none;
  transform: translateY(0);
  display: flex;
  justify-content: space-evenly;
  padding: 2rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.313rem 0.938rem;
  position: absolute;
  width: 80%;
  margin:auto;
  left: 4vw;
  top: 7vh;
  opacity: 0;
  z-index: 5;
  visibility: hidden;
}
.nav-item .sub-items-fragrance{
  pointer-events: none;
  transform: translateY(0);
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.313rem 0.938rem;
  position: absolute;
  width: 15%;
  margin:auto;
  left: 50vw;
  top: 7vh;
  opacity: 0;
  z-index: 5;
  visibility: hidden;
}

.nav-item .sub-items-mycart{
  pointer-events: none;
  transform: translateY(0);
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0rem 0.313rem 0.938rem;
  position: absolute;
  width: 12%;
  margin:auto;
  left: 80vw;
  top: 7vh;
  opacity: 0;
  z-index: 5;
  visibility: hidden;
}
/* After Hover on element */

.nav-item:hover .sub-items-mycart{
  pointer-events: all;
  transform: translateY(0);
  transition: 600ms;
  opacity: 1;
  visibility: visible;
}

.nav-item:hover .sub-items-fragrance {
  pointer-events: all;
  transform: translateY(0);
  transition: 600ms;
  opacity: 1;
  visibility: visible;
}

.nav-item:hover .sub-items {
  pointer-events: all;
  transform: translateY(0);
  transition: 600ms;
  opacity: 1;
  visibility: visible;
}

/* Sub list of sub items from hover of any perent li */
.nav-item .sub-items .sub-list {
  padding: 1rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}
/* .sub-items > div {
  border: 0.063rem
   solid black;
} */
/* .sub-list:first-child {
  margin-left: 9.2rem;
} */
.sub-list li {
  font-size: 1rem;
  list-style: none;
  margin-bottom: 0.6rem;
}
.sub-list a {
  text-decoration: none;
  color:#668;
  line-height: 1.1rem;
  font-size: 0.9rem;
}
.sub-list a strong {
  font-weight: bold;
  color:black
}
.nav-item:hover .sub-list a:hover {
  color:#e08
  /* text-decoration: underline; */
}
.sub-img {
  display: flex;
  gap: 1.66vw;
  max-height: 50vh;
  max-width: 50vw;
}

.sub-img > img {
  height: 100%;
}

/* .sub-items {
  color: black;
  position: absolute;
  background-color: red;
  margin-top: 1rem;
} */

.iconHover:hover .color {
  color: #000000;
  fill: black;
}`


const Navbar = () => {
  return (
  <Navg>   
       <div id="navThird">
          <ul className="sub-items" id="navThirdList">
            {/* <!-- Items --> */}
            <li className="nav-item">
              <Link to="/makeup">MAKEUP</Link>
              <span className="liIcon"><i className="fa-solid fa-angle-down"></i></span>
              {/* <!-- Sub-Items --> */}
              <div className="sub-items cat1">
                <div className="sub-list">
                  <ul>
                    <li><Link to="/makeup" id="a"><strong>FACE</strong></Link></li>
                    <li><Link to="/cream">BB Cream</Link></li>
                    <li><Link to="/makeup">Blush</Link></li>
                    <li><Link to="/makeup">Bronzer</Link></li>
                    <li><Link to="/cream">CC Cream</Link></li>
                    <li><Link to="/makeup">Contour</Link></li>
                    <li><Link to="/makeup">Concealer</Link></li>
                    <li><Link to="/makeup">Compact & Powder</Link></li>
                    <li><Link to="/makeup">Foundation</Link></li>
                    <li><Link to="/makeup">Highlighters</Link></li>
                    <li><Link to="/makeup">Makeup Kits</Link></li>
                    <li><Link to="/makeup">Makeup Remover</Link></li>
                    <li><Link to="/makeup">Setting Spray </Link></li>
                  </ul>
                  
                  <ul>
                  <li><Link to="/eye" id="a"><strong>EYE</strong></Link></li>
                    <li><Link to="/eye">Contact Lenses</Link></li>
                    <li><Link to="/eye">Eye Kit</Link></li>
                    <li><Link to="/eye">Eyeliner</Link></li>
                    <li><Link to="/eye">Eye Shadow</Link></li>
                    <li><Link to="/eye">Eye Primer</Link></li>
                    <li><Link to="/eye">Eye-Palettes</Link></li>
                    <li><Link to="/eye">Eye Makeup Remover</Link></li>
                    <li><Link to="/eye">Eye Brow Enhancers</Link></li>
                    <li><Link to="/eye">False Eyelashes</Link></li>
                    <li><Link to="/eye">Kajal</Link></li>
                    <li><Link to="/eye">Mascara</Link></li>
                    <li><Link to="/eye">Under Eye Concealer</Link></li>
                  </ul>
                  <ul>       
                  <li><Link to="/lips" id="a"><strong>LIPS</strong></Link></li>
                    <li><Link to="/lips">Lipstick</Link></li>
                    <li><Link to="/lips">Liquid Lipstick</Link></li>
                    <li><Link to="/lips">Lip Liner</Link></li>
                    <li><Link to="/lips">Lip Gloss</Link></li>
                    <li><Link to="/lips">Lip Balm</Link></li>
                    <li><Link to="/lips">Lip Crayon</Link></li>
                    <li><Link to="/lips">Lip Stain</Link></li>
                    <li><Link to="/lips">Lip Plumper</Link></li>
                  </ul>
                            <ul>
                            <li><Link to="/nails" id="a"><strong>NAILS</strong></Link></li>
                    <li><Link to="/nails">Manicure & Pedicure Kits</Link></li>
                    <li><Link to="/nails">Nail Polish</Link></li>
                    <li><Link to="/nails">Nail Care</Link></li>
                    <li><Link to="/nails">Nail Polish Sets</Link></li>
                    <li><Link to="/nails">Nail Art Kits</Link></li>
                    <li><Link to="/nails">Eye-Palettes</Link></li>
                    <li><Link to="/nails">Nail Polish Remover</Link></li>
                 </ul>
                <ul>
                <li><Link to="/brushes" id="a"><strong>TOOLS BRUSHES</strong></Link></li>
                    <li><Link to="/brushes">Blush Brush</Link></li>
                    <li><Link to="/brushes">Eyelash Curlers</Link></li>
                    <li><Link to="/brushes">Eye Brush</Link></li>
                    <li><Link to="/brushes">Face Brush</Link></li>
                    <li><Link to="/brushes">Lip Brush</Link></li>
                    <li><Link to="/brushes">Makeup Pouches</Link></li>
                    <li><Link to="/brushes">Mirrors</Link></li>
                    <li><Link to="/brushes">Sponges & Applicators</Link></li>
                    <li><Link to="/brushes">Sharpeners</Link></li>
                    <li><Link to="/brushes">Tweezers </Link></li>
                 </ul>
                </div>
                </div>
            </li>
            <li className="nav-item">
            <Link to="/skin">SKIN</Link>
              {/* <!-- sub-items --> */}
              <span className="liIcon"><i className="fa-solid fa-angle-down"></i></span>
              <div className="sub-items">
                <div className="sub-list">
                  <ul>

                    <li><Link to="/skin" id="a"><strong>EYE CARE</strong></Link></li>
                    <li><Link to="/skin">Dark Circles</Link></li>
                    <li><Link to="/skin">Eye Contour Care</Link></li>
                    <li><Link to="/skin">Eye Cream</Link></li>
                    <li><Link to="/skin">Eye Masks</Link></li>
                    <li><Link to="/skin">Eye Serums</Link></li>
                    <li><Link to="/skin">Puffiness</Link></li>
                    <li><Link to="/skin">Under Eye Creams</Link></li>
                    <li><Link to="/skin">Under Eye Wrinkles</Link></li>
                  </ul>

                  <ul>
                  <li><Link to="/skin" id="a"><strong>FACE CARE</strong></Link></li>
                    <li><Link to="/skin">Anti- Ageing Creams</Link></li>
                    <li><Link to="/skin">Bleach Creams</Link></li>
                    <li><Link to="/skin">Brightening Cream</Link></li>
                    <li><Link to="/skin">Face Wash</Link></li>
                    <li><Link to="/skin">Facial Wipes</Link></li>
                    <li><Link to="/skin">Face Oil</Link></li>
                    <li><Link to="/skin">Face Cleansers</Link></li>
                    <li><Link to="/skin">Facial Kits</Link></li>
                    <li><Link to="/skin">Face Tools</Link></li>
                    <li><Link to="/skin">Moisturizer</Link></li>
                    <li><Link to="/skin">Mask & Peels</Link></li>
                    <li><Link to="/skin">Serum</Link></li>
                    <li><Link to="/skin">Toner & Astringents</Link></li>
                  </ul>
               
                  <ul>
                  <li><Link to="/skin" id="a"><strong>BODY CARE</strong></Link></li>
                    <li><Link to="/skin">All Cream</Link></li>
                    <li><Link to="/skin">Body Moisturizers</Link></li>
                    <li><Link to="/skin">Brightening Cream</Link></li>
                    <li><Link to="/skin">Body Toners</Link></li>
                    <li><Link to="/skin">Body Sun Care</Link></li>
                    <li><Link to="/skin">Brightening Lotion</Link></li>
                    <li><Link to="/skin">Dark Circles & Wrinkles</Link></li>
                    <li><Link to="/skin">Day Cream</Link></li>
                    <li><Link to="/skin">Foot Cream</Link></li>
                    <li><Link to="/skin">Hair Remover Cream</Link></li>
                    <li><Link to="/skin">Hand Creams</Link></li>
                    <li><Link to="/skin">Hands & Feet</Link></li>
                    <li><Link to="/skin">Kits & Combos</Link></li>
                    <li><Link to="/skin">Night Cream</Link></li>
                    <li><Link to="/skin">Neck Creams</Link></li>
               </ul>

                </div>
                <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
                    alt=""
                  />
                </div>
                 </div>
            </li>
            <li className="nav-item">
              <Link to="/hair">HAIR</Link>
              {/* <!-- sub-items --> */}
              <span className="liIcon"><i className="fa-solid fa-angle-down"></i></span>
              <div className="sub-items">
                <div className="sub-list">
                  <ul>
                    <li><Link to="/hair" id="a"><strong> HAIR CARE</strong></Link></li>
                    <li><Link to="/hair">Color Protection</Link></li>
                    <li><Link to="/hair">Foundation</Link></li>
                    <li><Link to="/hair">Dandruff</Link></li>
                    <li><Link to="/hair">Dry Shampoo</Link></li>
                    <li><Link to="/hair">Gels & Waxes</Link></li>
                    <li><Link to="/hair">Hair Spray</Link></li>
                    <li><Link to="/hair">Hair Color/ Dye</Link></li>
                    <li><Link to="/hair">Hair Creams & Masks </Link></li>
                    <li><Link to="/hair">Hair Styling</Link></li>
                    <li><Link to="/hair">Hairfall & Thinning </Link></li>
                    <li><Link to="/hair">Straighteners</Link></li>
                     </ul>
                  <ul>
                    <li>
                      <Link to="/hair"><strong>HAIR LOSS</strong></Link>
                    </li>
                    <li><Link to="/hair">Conditioner</Link></li>
                    <li><Link to="/hair">Hair Oil</Link></li>
                    <li><Link to="/hair">Hair Serum</Link></li>
                    <li><Link to="/hair">Hair Growth Solutions</Link></li>
                    <li><Link to="/hair">Shampoo</Link></li>
                    </ul>

                 </div>
                 <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
           
            <li className="nav-item">
              <Link to="/body">PERSONAL CARE</Link>
              <span className="liIcon"><i className="fa-solid fa-angle-down"></i></span>
              <div className="sub-items">
                <div className="sub-list">
                  <ul><li><Link to="/body" id="a"><strong>BATH & BODY</strong></Link></li>
                  <li><Link to="/body" id="a">Body Cleansers</Link></li>
                  <li><Link to="/body">Body Massage Oil</Link></li>
                    <li><Link to="/body">Body Wash</Link></li>
                    <li><Link to="/body">Creams</Link></li>
                    <li><Link to="/body">Essential Oils</Link></li>
                    <li><Link to="/body">Foot Cream</Link></li>
                    <li><Link to="/body">Scrubs & Exfoliants</Link></li>
                    <li><Link to="/body">Ubtan & Face Packs</Link></li>
                  </ul>

                  <ul>
                  <li><Link to="/body"><strong>BATHING ACCESSORIES</strong></Link></li>
                    <li><Link to="/body">Bath Brushes</Link></li>
                    <li><Link to="/body">Loofahs</Link></li>
                    <li><Link to="/body">Shower Caps</Link></li>
                    <li><Link to="/body">Sponges</Link></li>
                    <li><Link to="/body">Facial Peelsty</Link></li>
                    </ul>

                  <ul>
                    <li><Link to="/body"><strong>BATH & SHOWER</strong></Link></li>
                    <li><Link to="/body">Body Soaps</Link></li>
                    <li><Link to="/body">Shower Gel</Link></li>
                  </ul>
                </div>
                <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
                    alt=""
                  />
                </div>
               </div>
            </li>
            <li className="nav-item">
              <Link to="/mom&baby">MOM & BABY CARE</Link>
              <span className="liIcon"><i className="fa-solid fa-angle-down"></i></span>
              {/* <!-- sub-items --> */}
                  <div className="sub-items">
                <div className="sub-list">
                  <ul>
                    <li><Link to="/mom&baby" id="a"><strong> BABY CARE</strong></Link></li>
                    <li><Link to="/mom&baby">Diapers</Link></li>
                    <li><Link to="/mom&baby">Lotions & Creams</Link></li>
                    <li><Link to="/mom&baby">Oils</Link></li>
                    <li><Link to="/mom&baby">Powder</Link></li>
                    <li><Link to="/mom&baby">Shampoo</Link></li>
                    <li><Link to="/mom&baby">Soaps</Link></li>
                    <li><Link to="/mom&baby">Sterilizer & Cleaners</Link></li>
                    <li><Link to="/mom&baby">Rash Cream</Link></li>
                    <li><Link to="/mom&baby">Wipes</Link></li>
                   
                  </ul>

                  <ul>
                  <li><Link to="/mom&baby" id="a"><strong>MOM CARE</strong></Link></li>
                    <li><Link to="/mom&baby">Lotions & Creams</Link></li>
                    <li><Link to="/mom&baby">Personal Care</Link></li>
                   </ul>
                </div>
                <div className="sub-img">
                  <img
                    src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
                    alt=""
                  />
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/fragrance">FRAGRANCE</Link>
              {/* <!-- sub-items --> */}
              <div className="sub-items-fragrance">
                <div className="sub-list">
                  <ul>
                    <li><Link to="/fragrance" id="a">Perfumes</Link></li>
                    <li><Link to="/fragrance">Deodorants roll ons</Link></li>
                    <li><Link to="/fragrance">Body Mist/Spray</Link></li>
                    </ul>
                 </div>
               </div>
            </li>
           </ul>
           <ul className="sub-items" id="navThirdList">
            <li className="nav-item">
            <i className="fa-solid fa-bag-shopping"></i>
              <Link to="/cart">MY CART</Link>
              {/* <!-- sub-items --> */}
            </li>
            </ul>
            
        </div>
  </Navg>
  )
}

export default Navbar