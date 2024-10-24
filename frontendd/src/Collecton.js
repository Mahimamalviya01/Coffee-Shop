// import React, { useEffect, useState } from 'react';
// import {
//     MDBCard,
//     MDBCardImage,
//     MDBCardBody,
//     MDBCardTitle,
//     MDBCardText,
//     MDBRow,
//     MDBCol,
//     MDBBtn
//   } from 'mdb-react-ui-kit';
// import { useNavigate } from 'react-router-dom';


// export default function Collecton() 
// {
//   const [data, setData] = useState([])

//   const usenavigate=useNavigate()
//   const hanclick=(id)=>{
    
//     usenavigate("/item",{state:id})
//   }

  

//   // useEffect((item)=>{
//   //   fetch("http://localhost:5000/").then((result)=>
//   //     {
//   //     result.json().then((data1)=>{
//   //       setData(data1)
  
//   //   })
//   // })
//   useEffect(()=>
//     {
//       fetch("http://localhost:5000/").then((result)=>
//         {
//         result.json().then((data1)=>
//           {
//           setData(data1)
//         })
//       })
//   },[])

//   return (
   
//     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
//       {
       
//         data.map((item )=>
          
//       <MDBCol>
//       <br></br>
//         <MDBCard>
//           <center>
//           <MDBCardImage
//             src={item.image}
//             alt='...'
//             style={{width:"200px", height:"200px"}}
//           />
//           </center>
//           <MDBCardBody>
//             <MDBCardTitle>{item.id}</MDBCardTitle>
//             <MDBCardTitle>{item.name}</MDBCardTitle>
//             <MDBCardTitle>{item.price}</MDBCardTitle>
//             <MDBCardText>
//              {item.description.slice(0,100)}
//             </MDBCardText>
//             <MDBBtn onClick={()=>hanclick(item.id)}>Buy Now {item.id}</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//         )
//       }
//     </MDBRow>
   

//   );

// }

 


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
import { useNavigate } from 'react-router-dom';

export default function Collection() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleClick = (pid) => {
    const data={name:pid}
    navigate("/item", { state:  data  });
  };

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((result) => result.json())
      .then((data1) => {
        setData(data1);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      {data.map((item) => (
        <MDBCol key={item.id}>
          <br />
          <MDBCard>
            <center>
              <MDBCardImage
                src={item.image}
                alt='...'
                style={{ width: "200px", height: "200px" }}
              />
            </center>
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardTitle>{item.price} Rs</MDBCardTitle>
              <MDBCardText>{item.description.slice(0, 100)}</MDBCardText>
              <MDBBtn onClick={() => handleClick(item.id)}>View Product</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  );
}