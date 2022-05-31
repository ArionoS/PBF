import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Home from "./home";
import Contact from "./contact";
import Categories from "./category";
import './style.css';
import Banner from './Banner'
import { Button } from '@material-ui/core';



class Main extends Component {
    render() {
        return (

            <Router>
                <Banner />
                <div>

                    <ul className="header">

                        <li class="active" >
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/categories">Market Place</Link>
                        </li>
                        <li>
                            <Link to="/contact">About Us</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                            <PrivateRoute path="/categories">
                                <Categories />
                            </PrivateRoute>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main;

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthenticated ? (
        <p>
            <Button onClick={() => {
                fakeAuth.signout(() => history.push("/"))
            }}
                variant='outlined'>Sign Out</Button>

        </p>
    ) : (
        <p>You are not logged in.</p>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    <div>
                        <AuthButton />
                        {children}
                    </div>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        ></Route>
    );
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <div>
            <h3 >Please Log-In To See Products from {from.pathname}</h3>
<div id="login" class="modal fade" role="dialog">
  <div class="modal-dialog">
  <p></p>
    <div class="modal-content">
      <div class="modal-body">
     
      <p></p>
        <form>
          <input type="text" name="username" class="username form-control" placeholder="Username"/>
          <p></p>
          <input type="password" name="password" class="password form-control" placeholder="password"/>
          <p></p>
          <p></p>
          <Button class="btn login" onClick={login}
                variant='outlined'>Log In</Button>
         
          
        </form>
        
      </div>
      <br></br>
    </div>
    <br></br>
  </div> 
  <br></br>
</div>
<br></br>
        </div>
        
    );
}