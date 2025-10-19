import React from 'react'


const Card = (props) => {
  return (
    <div >
        <div className="card">
          <img src= {props.img} alt={props.user} />
        <h2> {props.user}</h2>
        <p>{props.desc}</p>
        <button>view profile</button>
        </div>
    </div>
  )
}

export default Card
