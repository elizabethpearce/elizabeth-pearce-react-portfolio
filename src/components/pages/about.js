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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque vitae dui eu cursus.
      Quisque et massa iaculis, finibus est et, facilisis magna. Duis pharetra eros eget mattis ultricies.
      Maecenas suscipit ante a neque ullamcorper egestas. Maecenas porta, mi eu vehicula efficitur, 
      ex justo ullamcorper elit, ut suscipit nunc nisi eget sem. Nullam id augue finibus, 
      blandit metus in, dapibus ipsum. Proin eget sagittis arcu. Orci varius natoque penatibus et magnis 
      dis parturient montes, nascetur ridiculus mus. Aliquam molestie tellus libero, nec pharetra eros tempus sit amet. 
      Maecenas eu arcu scelerisque, aliquam nibh tempus, ultrices diam. Donec at dui 
      consequat justo ultricies volutpat id at sem. Cras vitae faucibus nisl. Sed pellentesque 
      accumsan erat, pellentesque luctus lacus dapibus aliquam. 
      </div>
    </div>
  )
}