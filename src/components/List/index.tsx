import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { v4 as idV4 } from 'uuid';

type ListProps = {
  items: [];
};

export default function List({ items }: ListProps) {
  return (
    <div>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={idV4()}>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
