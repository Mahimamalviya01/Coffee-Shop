import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function GetApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((result) => result.json())
      .then((data1) => setData(data1))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {data.map((item) => (
        <MDBCol key={item.id}>
          <MDBCard>
            <center>
              <MDBCardImage
                src={item.image}
                alt='Product Image'
                style={{ width: "200px", height: "200px" }}
              />
            </center>
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardTitle>{item.price} Rs</MDBCardTitle>
              <MDBCardText>
                {item.description.slice(0, 100)}
              </MDBCardText>
              <Link to={`/product/${item.id}`}>
                <MDBBtn>View Details</MDBBtn>
              </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}
