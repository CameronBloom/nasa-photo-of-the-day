// import React, { useState, useEffect } from 'react'

import Image from "./Image"
import styled from "styled-components"

const CardBody = styled.div`
  padding: 2rem;
`
const CardHeading = styled.h1`
  color: blue;
`

const CardImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export default function Card(props) {
  return (
    <CardBody>
      <CardHeading>{props.photoInfo.title}</CardHeading>
      <h2>{props.photoInfo.date}</h2>
      <CardImageContainer>
        <Image source={props.photoInfo.url} altText={props.photoInfo.title} highDef={false} />
        <Image source={props.photoInfo.hdurl} altText={props.photoInfo.title} highDef={true} />
      </CardImageContainer>
      <p>{props.photoInfo.explanation}</p>
    </CardBody>
    // <div className="card">

    // </div>
  )
}