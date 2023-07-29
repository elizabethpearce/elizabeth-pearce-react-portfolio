import React from 'react';
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div className='content-page-wrapper'>
      <div
      className='left-column' 
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      />
      <div className='right-column'>
      Most of my education and experience has been working with people, primarily in customer service and healthcare. I love this kind of work as people are my passion in life.<br />
      My drive in web development is people centered because no matter where you are or what you're doing, there are human beings involved. I am detail oriented, love the challenges  <br/>
      of problem solving, and innovation. I am both artist and writer and find something magical about using the written word to create something visually beautiful, interactive, and functional. <br/>
      To me, development is creating living art and I strive to give my excellence in whatever I do. <br/><br/>
      Outside of work and broadening my skill set, I spend time with my two kids, who've taught me much about patience, compassion, kindness, and the meaning of true love. <br/>
      I get outdoors as much as possible where I love to hike, swim, explore, camp, and take photos. When I'm indoors, I like to curl up with a good book, write, or research new things.
      </div>
    </div>
  )
}