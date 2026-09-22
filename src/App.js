import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Pages } from "./Pages";
import "./styles/app.scss";

class App extends Component {
	render() {
        return (
            <div id="app">
                <Switch location={this.props.location}>
                    {Pages.map(({ path, params, component, colors }, key) => (
                        <Route exact key={key} path={path + params} component={component} />
                    ))}
                    <Redirect from="*" to="/404" />
                </Switch>
            </div>
        );
	}
}

export default App;
