

import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from "mdb-react-ui-kit";

export default function Item() {
  const location=useLocation()
  const carddata=location.state;
  console.log(carddata.name)
 // const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/"+carddata.name) // Added backticks for template literal
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); // Set the product data directly
      })
      .catch((error) => console.error("Error fetching product:", error));
  },[]);

  if (!product) return <p>Loading...</p>;

  return (
    <MDBCard style={{ width: "80%", margin: "auto" ,marginTop: "50px"}}>
      <center>
        <MDBCardImage
          src={product.image}
          alt="Product Image"
          style={{ width: "400px", height: "400px" }}
        />
      </center>
      <MDBCardBody>
        <MDBCardTitle>{product.name}</MDBCardTitle>
        <MDBCardTitle>{product.price} Rs</MDBCardTitle>
        <MDBCardText>{product.description}</MDBCardText>
        <MDBBtn>Buy Now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}

// function Item()
// {
//     return(
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     )
// }
// export default Item