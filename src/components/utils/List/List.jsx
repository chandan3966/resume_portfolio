import React from 'react'
import './List.css'
import Listitem from '../ListItem/Listitem'
import ListGroup from 'react-bootstrap/ListGroup';

function List({data}) {
    const res = data;
    console.log(res);
    return (
      <div>
          {res.items.map((item) => (
              <Listitem type={res.type} res={item} />
          ))}
      </div>
    );
}

export default List