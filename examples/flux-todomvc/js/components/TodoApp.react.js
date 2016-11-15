/**
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the TodoStore and passes the new data to its children.
 */
var AppActions = require('../actions/AppActions');
var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var ProductStore = require('../stores/ProductStore');
var Product = require('./Product.react');
var Cart = require('./Cart.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

/**
 * Retrieve the current TODO data from the TodoStore
 */
function getStateFromStores() {
    return {
        product: ProductStore.get(),
        cart   : ProductStore.getCart()
    };
}

var TodoApp = React.createClass({

    getInitialState: function () {
        return getStateFromStores();
    },

    componentDidMount: function () {
        ProductStore.addChangeListener(this._onChange);
        AppActions.getProduct(0);
    },

    componentWillUnmount: function () {
        ProductStore.removeChangeListener(this._onChange);
    },


    /**
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function () {
        this.setState(getStateFromStores());
    },


    /**
     * @return {object}
     */
    render: function () {
        return (
            <div className="flux-cart-container">
                <Cart cart={this.state.cart}/>
                <Product data={this.state.product}/>
            </div>
        );
    },
});

module.exports = TodoApp;
