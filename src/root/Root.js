import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AdoptionList from '../AdoptionWaitingList';
import HomePage from '../HomePage';
import AdoptPage from '../AdoptPage';
import AdoptedPage from '../AdoptedPage';
import QueuedPage from '../QueuedPage';

// since I was passing state using history.push I imported it here then passed it though my router.
const history = createBrowserHistory();

// I remade this into a class component from a functional one to give it a state and be able to pass props. 
class Root extends Component {
      constructor(props) {
        super(props);
        this.state = { peopleList: [], person: '' }
  }
    // this is a callback function that I pass onto the HomePage to then do a setState here. 
    setPerson = (name) => {
    this.setState({
      person: name
    });
  };


  // I use a router and a switch to move the user from path to path. 
  render() {
    return (
      <>
        <header><h1>Petful</h1></header>
        <div className='main'>
          <AdoptionList userName={this.state.person}/>
          <Router history={history}>
          <Switch>
              <Route exact path={'/'} render={() => <HomePage setPerson={this.setPerson}/> }/>
              <Route exact path={'/adopt'} component={AdoptPage}/>
              <Route exact path={'/queued'} render={() => <QueuedPage userName={this.state.person}/>}/>
              <Route exact path={'/adopted'} component={AdoptedPage}/>
          </Switch>
          </Router>
        </div>
      </>
    )
  }
}

export default Root;
