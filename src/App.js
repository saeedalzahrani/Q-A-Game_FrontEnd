import "./App.scss";
import "./footer/Footer.scss";
import Fade from "./slideShow/slideShow";
import About from "./header/About";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Support from "./header/Support";
import { Route } from "react-router-dom";
import React, { Component } from "react";
import SignUp from "./auth/components/SignUp";
import SignIn from "./auth/components/SignIn";
import SignOut from "./auth/components/SignOut";
import ChangePassword from "./auth/components/ChangePassword";
import AlertDismissible from "./auth/components/AlertDismissible";
import AuthenticatedRoute from "./auth/components/AuthenticatedRoute";
import Question from "./Questions";
import Game from "./game/Game"
import leaderboard from './game/leaderboard'
class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: []
    };
  }

  setUser = user => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };

  render() {
    const { alerts, user } = this.state;

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible
            key={index}
            variant={alert.type}
            message={alert.message}
          />
        ))}
        <main className="container">
        <Route
           exact path="/"
            render={() => <SignUp alert={this.alert} setUser={this.setUser} />}
          />
          <Route
            path="/sign-up"
            render={() => <SignUp alert={this.alert} setUser={this.setUser} />}
          />
          <Route
            path="/sign-in"
            render={() => <SignIn alert={this.alert} setUser={this.setUser} />}
          />
          <AuthenticatedRoute

            user={user}
            path="/sign-out"
            render={() => (
              <SignOut
                alert={this.alert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />

          <AuthenticatedRoute
            user={user}
            path="/change-password"
            render={() => <ChangePassword alert={this.alert} user={user} />}
          />
          <AuthenticatedRoute 
          user={user}
          exact path="/game" component={Game}
          render={() => <Game alert={this.alert} user={user} />}
          />
              
              <Fade />
          
          <Route exact path="/about" component={About} />
          
          <Route exact path="/support" component={Support} />
          <Route exact path="/questions" component={Question} />
          <Route exact path="/leaderboard" component={leaderboard} />

        </main>
        <div>
              <div> 
        
          {/* <iframe width="0" height="0" frameborder="0"
          src="https://www.youtube.com/embed/Li9Vi_-Nufk?autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=Li9Vi_-Nufk"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" /> */}
        </div> 
        <Footer />
         {/* <button class="loud-link-hover" data-src='sc.mp3' type="button" name="button">Hover over me</button>  */}


          <Footer />
         
        </div>
      </React.Fragment>
    );
  }
}

export default App;