import React from 'react';
import { useState } from 'react';

const Categories = (props) => {
  const [state, setState]= useState(0)
  const {id, title, category, price, img, desc} = props.info[state]
  return (
    props.info.map((item)=> {
      return (
        <article className='menu-item'>
        <img src={item.img} alt='buttermilk pancakes' className='photo'/>
        <div className='item-info'>
          <header>
            <h4>{item.title}</h4>
            <h4 className='price'>{item.price}</h4>
          </header>
          <p className='item-text'>{item.desc}</p>
        </div>
      </article>  
      )
    })
  )
};

export default Categories;
