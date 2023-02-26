// import React, { useState, useEffect } from 'react'
export default function Image(props) {
  return (
    <div className="image">
      {props.highDef ? <h3>High Resolution</h3> : <h3>Normal Resolution</h3>}
      <img src={props.source} alt={props.altText}/>
    </div>
  )
}