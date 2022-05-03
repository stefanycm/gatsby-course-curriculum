import React from 'react';
import { Button } from 'react-bootstrap';
import BasicLayout from '../layouts/BasicLayout';
import './index.scss';

const IndexPage = () => {
  return (
    <BasicLayout>
      <h1 className="title">Home</h1>
      <Button variant="primary">Click me</Button>
      <Button variant="danger">Danger</Button>
    </BasicLayout>
  );
};

export default IndexPage;
