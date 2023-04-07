import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import './index.css';
import Sdata from './Sdata';

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <h1 className='heading'>All Time Top rated Chines Drama</h1>
  {Sdata.map((value)=>{
    return(
      <Card 
  imgsrc={value.imgsrc}
  tittle={value.tittle}
  link={value.link}
 />
    );
  })}

 
  </> ,


);
