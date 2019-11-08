import React, { Component } from "react";
import Form from './Form';
import Grid from './Grid';
import "./App.css";


export default function App(props) {
  return (
    <div className='app'>
      <div className='left'>
        <h1>Smurfs Village</h1>
        <Form />
      </div>
      <div className='right'>
        <Grid />
      </div>
    </div>
  );
}
