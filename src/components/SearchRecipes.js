import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';

class SearchRecipes extends Component {
  constructor() {
    super();
    this.state = {
      ingredients: '',
      dish: ''
    }
    this.search = this.search.bind(this);
  }

  search() {
    let { ingredients, dish } = this.state;
    const url = `http://www.recipepuppy.com/api/?${ingredients}&q=${dish}`;
    axios.get(url)
    .then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div>
        <Form inline>
          <FormGroup>
            <ControlLabel>Ingredients</ControlLabel>
            {''}
            <FormControl 
            type='text' 
            placeholder='garlic, chicken'
            onChange={event => this.setState({ ingredients: event.target.value })}/>
          </FormGroup>
          {''}
          <FormGroup>
          <ControlLabel>Dish</ControlLabel>
          {''}
          <FormControl 
          type='text' 
          placeholder='Adobo'
          onChange={event => this.setState({ dish: event.target.value })}/>
          </FormGroup>
          {''}
          <Button onClick={this.search}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SearchRecipes;