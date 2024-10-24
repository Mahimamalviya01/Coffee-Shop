import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Uploads() {
  const [id, setID] = useState();
  const [name, setName] = useState();
  const [description, setDesc] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  function submitForm(e) {
    e.preventDefault();

    const url = "http://localhost:5000/";
    const formData = new FormData();
    formData.append("id", parseInt(id));
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", parseInt(price));
    formData.append("image", image);
    axios.post(url, formData).then((result) => {
      console.log(result.data);
      alert("data save succesfull");
    });
  }
  return (
    <div>
      <center>
        <form>
        <Form>
          <Form.Group>
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product ID"
              onChange={(e) => setID(e.target.value)}
              style={{ width: "300px", textAlign: "center" }}
            />
          </Form.Group>
          <br></br>

          
          <Form.Group>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              onChange={(e) => setName(e.target.value)}
              style={{ width: "300px", textAlign: "center" }}
            />
          </Form.Group>
          <br></br>


          <Form.Group>
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Product Description"
            onChange={(e) => setDesc(e.target.value)}
            style={{ width: "300px", textAlign: "center" }}
          />
        </Form.Group>
          <br></br>


          <Form.Group>
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Product Price"
            onChange={(e) => setPrice(e.target.value)}
            style={{ width: "300px", textAlign: "center" }}
          />
        </Form.Group>
          <br></br>

          <center>
          <Form.Group>
            <Form.Label>Upload Image{" "}</Form.Label>
            <Form.Control
              type="file"
             onChange={(e) => setImage(e.target.files[0])}
              style={{ width: "300px", textAlign: "center" }}
            />
          </Form.Group>
          </center>
          <br></br>

          <Button variant="primary" type="submit" onClick={submitForm}>
          Submit
        </Button>

          
            
           
           
          </Form>
        </form>
      </center>
    </div>
  );
}

export default Uploads;
