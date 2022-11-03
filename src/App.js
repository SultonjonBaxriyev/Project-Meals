import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [info, setInfo] = useState(items)
  return(
    <>
      <section className='menu section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          <button className='filter-btn' type='button'>all</button>
          <button className='filter-btn' type='button'>breakfast</button>
          <button className='filter-btn' type='button'>lunch</button>
          <button className='filter-btn' type='button'>shakes</button>
        </div>
        <div className='section-center'>
            <Categories info={items}/>
          </div>
      </section>
    </>
  )
}

export default App;
