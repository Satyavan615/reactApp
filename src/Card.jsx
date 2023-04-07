import React from "react";

function Card(props){
    return(
  <>
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc} alt='myPic' className='pic' />
          <div className='info'>
            <h3 className='tittle'>{props.tittle}</h3>
            <a href= {props.link} target='_blank'>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
  
      </div>
    </>
  
    );
  }

  export default Card