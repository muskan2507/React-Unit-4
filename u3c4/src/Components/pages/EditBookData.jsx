
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;

export const EditBookData = () => {
  const {id}=useParams()
  let navigate=useNavigate()
  const [FormData,setFotmData]=useState({})
  // const [data,setData]=useState([])
  const handleChange=(e)=>{
    // console.log(e)
    let name=e.target.name
    setFotmData({...FormData,
        [name]:e.target.value
    })

  }
  const patch=async(FormData)=> {
    let res = await fetch(`http://localhost:8080/books/${id}`,{
      method:"PATCH",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(FormData)
    })
    let data = await res.json()
    console.log(data)
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    // on successfull request navigate to previous page
    console.log(FormData)
    patch(FormData)
    navigate(-1)
  };

  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          data-testid="update-form-thumbnail"
          name="thumbnailUrl"
          onChange={handleChange}
          placeholder="Enter updated thumbnail url"
        />
        <br/>
        <input
          data-testid="update-form-description"
          onChange={handleChange}
          name="longDescription"
          placeholder="Update long Description"
        />
          <br/>
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
