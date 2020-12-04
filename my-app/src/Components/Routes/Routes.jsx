import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ViewJob, Home } from '../Pages';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/"
                render = {() => <Home theme={this.props.theme}/>} />
                <Route exact path = "/:jobid"
                render = {(props) => <ViewJob {...props}/>}/>
            </Switch>
        );
    }
}

export default Routes;