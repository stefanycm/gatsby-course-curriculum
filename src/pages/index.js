import React from 'react';
import { Button } from 'react-bootstrap';
import './index.scss';

const IndexPage = () => {
  return (
    <main>
      <h1 className="title">Home</h1>
      <Button variant="primary">Click me</Button>
      <Button variant="danger">Danger</Button>
    </main>
  );
};

export default IndexPage;
