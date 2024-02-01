import React from 'react'
import './List.css'
import Listitem from '../ListItem/Listitem'
import ListGroup from 'react-bootstrap/ListGroup';

function List({data}) {
    const type = data[0].type
    return (
      <div>
          {data[0].items.map((item) => (
              <Listitem type={type} res={item} />
          ))}
      </div>
    );
}

export default List