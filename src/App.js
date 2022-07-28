import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/common/footer";
import Home from "./components/home";
import Welcome from "./components/welcome"
import About from "./components/about";
import Signup from "./components/signup";
import Signin from "./components/signin";
import Logout from "./components/logout";
import BizSignup from "./components/bizSignup";
import CreateCard from "./components/createCard";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import userService from "./services/userService";
import ProtectedRoute from "./components/common/protectedRoute";
import MyCards from "./components/myCards";
import EditCard from "./components/editCard";
import DeleteCard from "./components/deleteCard";


class App extends Component {
  state = {};

  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        <header>
          <Navbar user={user} />
        </header>
        {/*  
        <Home/>
        <About/>
          */}
        <main style={{ minHeight: 900 }}>
          <Switch>
          <ProtectedRoute
              path="/my-cards/delete/:id"
              component={DeleteCard}
              biz={true}
            />
            <ProtectedRoute
              path="/my-cards/edit/:id"
              component={EditCard}
              biz={true}
            />
            <ProtectedRoute path="/my-cards" component={MyCards} biz={true} />
            <ProtectedRoute
              path="/create-card"
              component={CreateCard}
              biz={true}
            />
            <Route path="/biz-signup" component={BizSignup} />
            <Route path="/logout" component={Logout} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
            <ProtectedRoute path="/welcome" exact component={Welcome} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer className="page-footer font-small mdb-color darken-3 pt-4">
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;