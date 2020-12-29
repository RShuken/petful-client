import React, { Component } from 'react';

class Adopt extends Component {
  // this creates a state that contains the data from the get request for the pets to be adopted. 
  constructor(props) {
    super(props);
    this.state = {
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
  }

  // when the component mounts do the fetch request to get a cat and a dog at the head of each queue. 
  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`http://localhost:8000/pets`, requestOptions)
      .then((pets) => pets.json())
      .then((pets) => this.setState({ pets }));
  }

  // this function takes in the pet type, either a cat or a dog, and returns a pet card and populates it. Since the dog or cat data is stored in the state inside a cat or dog object. It can be dynamically pulled. 
  createPetCard(pet) {
    return (
      <div className='pet-card'>
        <p>New Best Friend Name: {pet.name}</p>
        <img src={pet.imageURL} alt={pet.description} />
        <p>Breed: {pet.breed}</p>
        <p>Pets gender: {pet.gender}</p>
        <p>Story how we got this pet: {pet.story}</p>
      </div>
    );
  }
  // this function handles the click by doing a delete fetch request that removes the type of selected pet and the person at the head of the queue. 
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
      .then((result) => (window.location.href = '/adopted'))
      .catch((error) => console.log('error', error));
  }

  render() {
    return (
      <div className='pets-container'>
        <h2>Congratulations! It is your turn!</h2>
        <p>
          Pick your new best friend by pressing the 'Adopt' button below. You
          can choose a dog or a cat.
        </p>
        <form
          className='select-dog'
          onSubmit={() => this.handleClickAdopt('dog')}
        >
          <div className='dog-card'>
            {this.createPetCard(this.state.pets.dog)}
          </div>
          <button className='adopt-dog'>Adopt Dog</button>
        </form>
        <form
          className='select-cat'
          onSubmit={() => this.handleClickAdopt('cat')}
        >
          <div className='cat-card'>
            {this.createPetCard(this.state.pets.cat)}
          </div>
          <button className='adopt-cat'>Adopt Cat</button>
        </form>
      </div>
    );
  }
}

export default Adopt;