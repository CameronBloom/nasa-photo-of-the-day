// import React, { useState, useEffect } from 'react'

import Image from "./Image"

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.photoInfo.title}</h1>
      <h2>{props.photoInfo.date}</h2>
      <div className="image-container">
        <Image source={props.photoInfo.url} altText={props.photoInfo.title} highDef={false} />
        <Image source={props.photoInfo.hdurl} altText={props.photoInfo.title} highDef={true} />
      </div>
      <p>{props.photoInfo.explanation}</p>
    </div>
  )
}