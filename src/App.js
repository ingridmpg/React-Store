// TUTORIAL FROM https://www.youtube.com/watch?v=wPQ1-33teR4&list=PLWKjhJtqVAbkArDMazoARtNz1aMwNWmvC&index=3

import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<ProductList />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<Default />} />
                </Routes>
                <Modal />
            </React.Fragment>
        );
    }
}

export default App;

// Stoped min 42:09
// Stoped min 1:00:16
// Stoped min 1:48:48
// Stoped min 2:28:32
// Stoped min 3:24:25
// Stoped min 3:48:59
// Stoped min 4:16:51
// Stoped min 4:37:18
// Stoped min 4:57:07
// Time 5:47 => deploy aplication - do later
// Time 5:52 => paypall button - continue here next time
