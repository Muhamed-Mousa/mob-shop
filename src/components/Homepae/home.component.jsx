import React from 'react'
import { useState } from 'react';

import Caro from '../carousel/carousel.component'
import {Container , Row , Col } from 'react-bootstrap'
import {Collection} from './home.styles'

const Home = () => {
  const [sections, setSections] = useState([
    {
      title: "vivo v19",
      body: "Dual selfie lens, Dual Perfection",
      imageUrl: "./images/11.jpg",
      color: "white",
      id: 1,
    },
    {
      title: "vivo v19",
      body: "It's time to shoot",
      imageUrl: "./images/22.jpg",
      color: "black",

      id: 2,
    },
    {
      title: "vivo Y Series",
      body: "powered by Youth",
      imageUrl: "./images/33.jpg",
      color: "black",

      id: 3,
    },
    {
      title: "vivo x PUBG",
      body: "Redefine Your Game",
      imageUrl: "./images/44.jpg",
      color: "white",

      id: 4,
    },
  ]);
    return (
      <div className="Home">
        <Caro />
        <Collection>
          <Container fluid>
            <Row>
              {sections.map((section) => (
                <div className="home-page">
                  <div
                    className="background-image"
                    key={section.id}
                    style={{ backgroundImage: `url(${section.imageUrl})` }}
                  >
                    <div className="content" style={{color:`({section.color})`}} >
                      <h1 className="title">{section.title}</h1>
                      <span className="subtitle">{section.body}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Row>
          </Container>
        </Collection>
      </div>
    );
  }
  export default Home

