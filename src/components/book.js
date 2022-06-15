import React from 'react';

const Book = (props) =>{
   return(
    <div>
      <h2 onClick={props.delete} > Book Name is {props.bookName}</h2>
      <h2>Writer Name is {props.writer}</h2>
      <input  onChange={props.input} type='text' value={props.bookName} />
    </div>
   )
}
export default Book