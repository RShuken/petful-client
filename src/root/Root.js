import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PeopleList from '../PeopleList/componentVersion';
import HomePage from '../HomePage';
import AdoptPage from '../AdoptPage';
import AdoptedPage from '../AdoptedPage';
import QueuedPage from '../QueuedPage';

const history = createBrowserHistory();

class Root extends Component {
      constructor(props) {
        super(props);
        this.state = { peopleList: [], person: '' }
  }
  
    setPerson = (name) => {
    this.setState({
      person: name
    });
  };

  render() {
    return (
      <div>
      <h1>Petful</h1>
        <PeopleList userName={this.state.person}/>
      <Router history={history}>
        <Switch>
            <Route exact path={'/'} render={() => <HomePage setPerson={this.setPerson}/> }/>
            <Route exact path={'/adopt'} component={AdoptPage}/>
            <Route exact path={'/queued'} render={() => <QueuedPage userName={this.state.person}/>}/>
            <Route exact path={'/adopted'} component={AdoptedPage}/>
        </Switch>
      </Router>
      </div>
    )
  }
}

export default Root;
