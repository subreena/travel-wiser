import React, { useState } from 'react';
import './ClothesSection.css';
import cross from '../images/cross.png'
import plus from '../images/plus.png'
import minus from '../images/minus.png'
const clothes = [
    {
        id: 1,
        item: 'Socks'
    },
      {
        id: 2,
        item: 'Underwear'
    },
      {
        id: 3,
        item: 'Undershirts/bras'
    },  {
        id: 4,
        item: 'T-shirts'
    },  {
        id: 5,
        item: 'Pants'
    },
]
const ClothesSection = () => {
    const [clothing] = useState(clothes)
   
    return (
       <>
       
       {
           clothing.map(cloth => <p key={cloth.id} className="item">
               <span>
               <span>
               <img src={cross} alt="" />
               </span>
             <span className="ml-1 cloth-list">{cloth.item}</span>
               </span>
           <span>
           <span className="minus">
           <img src={minus} alt=""/>
           </span>
           <span id="text"> </span>
            <span className="plus">
            <img src={plus} alt=""/>
            </span>
           </span>
           </p>)
       }
      
       </>
    );
};

export default ClothesSection;