import React, { Component } from 'react';

class Adopt extends Component {
  state = {
    personName: 'Place Holder Bob',
    pets: {
      dog: {
        name: '',
        age: '',
        imgURL: '',
        description: '',
        breed: '',
        gender: '',
        story: '',
      },
      cat: {
        name: '',
        age: '',
        imgURL: '',
        description: '',
        breed: '',
        gender: '',
        story: '',
      },
    },
  };

  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`http://localhost:8000/pets`, requestOptions)
      .then((pets) => pets.json())
      .then((pets) => this.setState({ pets }));
  }

  adoptionPage(pet) {
    return (
      <div className='pet-card'>
        <p>Name: {pet.name}</p>
        <img src={pet.imageURL} alt={pet.description} />
        <p>Breed: {pet.breed}</p>
        <p>Gender: {pet.gender}</p>
        <p>Story: {pet.story}</p>
      </div>
    );
  }

  handleClickAdopt(type) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({ type: type });

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:8000/pets', requestOptions)
      .then((response) => response.text())
      .then((result) => (window.location.href = '/adopted'))
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <div className='pets-container'>
        <h2>Congratulations! It is your turn!</h2>
        <p>Pick your new best friend by pressing the 'Adopt' button below. You can choose a dog or a cat.</p>
        <form
          className='select-dog'
          onSubmit={() => this.handleClickAdopt('dog')}
        >
          <div className='dog-card'>{this.adoptionPage(this.state.pets.dog)}</div>
          <button className='adopt-dog'>Adopt Dog</button>
        </form>
        <form
          className='select-cat'
          onSubmit={() => this.handleClickAdopt('cat')}
        >
          <div className='cat-card'>{this.adoptionPage(this.state.pets.cat)}</div>
          <button className='adopt-cat'>Adopt Cat</button>
        </form>
      </div>
    );
  }
}

export default Adopt;