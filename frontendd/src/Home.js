// import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import img1 from "./images/home1.jpeg";
import img2 from "./images/home2.jpeg";
import img3 from "./images/home3.jpeg";
import img4 from "./images/Fika.jpeg";
import img5 from "./images/img.jpeg"
function Home() {
  return (
    <div>
      <br></br>
      <Carousel>
        <Carousel.Item>
          <img
            src={img1}
            alt="..."
            style={{ width: "1250px", height: "450px", margin: "50px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img2}
            alt="..."
            style={{ width: "1250px", height: "450px", margin: "50px"}}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={img3}
            alt="..."
            style={{ width: "1250px", height: "450px", margin: "50px" }}
          />
        </Carousel.Item>
      </Carousel>
      
      
      
      <div  style={{ display:"flex", border:"1px solid lightGrey" }}>

        <p style={{ width: "400px", height: "170px", margin:"100px", marginTop:"220px", marginBottom:"50px" }}>
          
        
        A website for your coffee shop increases your visibility, provides a
          platform to establish yourself as a coffee expert, and lets you launch
          experience-enhancing tools like a takeout system, push notifications,
          and loyalty programs. But your main goal is to transform every site
          visitor into a customer.
        </p>

        <img src={img4} alt="..." style={{ width: "400px", height: "400px", margin:"200px",marginTop:"70px", marginBottom:"40px"}} ></img>
      
        </div>


     <div style={{display:"flex", border:"1px solid lightGrey", marginTop:"50px"}}>

     <img src={img5} alt="..." style={{ width: "500px", height: "400px", margin:"50px",marginTop:"40px"}}></img>

     <p style={{ width: "400px", height: "100px", margin:"150px", marginTop:"180px" }}>
     We aim to serve the best quality and most interesting varieties of coffees, teas, espresso drinks and accompaniments at all times to everyone. 
     Service – We strive to treat our customers respectfully as our guests; we intend to offer our guests service that is prompt, efficient, friendly, and relaxed.
        </p>
     </div>


  </div>
  );
}

export default Home;
