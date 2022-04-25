import React from "react";
import { useEffect, useState } from "react";
import { BookCard } from "./BookCard";

import styled, { css } from "styled-components";

export const Grid = styled.div`
 display:grid;
 grid-template-columns:1fr 1fr;
 width:50%;
 margin:auto;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    
    get()
  }, []);
  let get =async ()=>{
    let res = await fetch("http://localhost:8080/books");
    let data = await res.json()
    setData(data)
  }
  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {
            data.map((e,i)=>{
            
             return (
              <BookCard key={i} props={e}/>
             )
            })
          }
      </Grid>
    </>
  );
};
export default Books;
