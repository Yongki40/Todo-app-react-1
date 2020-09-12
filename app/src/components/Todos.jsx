import React from 'react';
import TodoItem from './TodoItem';

function Todos() {
  return (
    <React.Fragment>
      {/* <TodoItem
        nama= "Mr.Whiskerson"
        phone= "0101010"
        email= "white@gmail.com"
      ></TodoItem>
      <TodoItem
        nama= "Mr.Kitty"
        phone= "0102"
        email= "pus@gmail.com"
      ></TodoItem>
      <TodoItem
        nama= "Mr.Susi"
        phone= "010103"
        email= "budi@gmail.com"
      ></TodoItem> */}
      
      {/* dengan menggunakan object tambahan */}
      {/* <TodoItem
        contact={{ 
          nama: "Mr.Whiskerson",
          phone: "0101010",
          email: "white@gmail.com"
         }}
      ></TodoItem>
      <TodoItem
        contact={{ 
          nama: "Mr.Kitty",
          phone: "0102",
          email: "pus@gmail.com"
         }}
        
      ></TodoItem>
      <TodoItem
        contact={{ 
          nama: "Mr.Susi",
          phone: "010103",
          email: "budi@gmail.com"
         }}
      ></TodoItem> */}

      <TodoItem
        taskName= "Breakfast"
      ></TodoItem>
      <TodoItem
        taskName= "Lunch"
      ></TodoItem>
      <TodoItem
        taskName= "Shower"
      ></TodoItem>
    </React.Fragment>
  );
}

export default Todos;
