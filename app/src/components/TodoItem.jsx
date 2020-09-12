import React from 'react';

function TodoItem(props) {
    console.log(props);
  return (
    <React.Fragment>
        {/* <div className="contract-card">
            <h3>Nama: {props.nama}</h3>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p><br/>
        </div> */}

        {/* dengan menggunakan object */}
        {/* <div className="contract-card">
            <h3>Nama: {props.contact.nama}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p><br/>
        </div> */}

        <input type="checkbox" name="" id="" checked={props.complete}/>
        <span>{props.taskName}</span>
        <br/>
    </React.Fragment>
  );
}

export default TodoItem;
