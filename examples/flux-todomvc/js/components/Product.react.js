var React = require('react');
var Product = React.createClass({

    /**
     * @return {object}
     */

    render        : function () {

        return (
            <div>
                <div className="flux-cart">
                    <div className="mini-cart" id="mini_cart">
                        <button type="button" className="close-cart" onClick={this._onRemoveClick}>x
                        </button>
                        <ul>
                            <li>
                                <h1 className="name">Scotch.io Signature Lager</h1>
                                <p>
                                    <span>40oz Bottle</span>
                                    <span> x </span>
                                    <span>1</span>
                                </p>
                                <p className="price">
                                    <span>$</span>
                                    <span>4.99</span></p>
                                <button type="button" className="remove-item" onClick={this._onRemoveClick}>Remove
                                </button>
                            </li>
                        </ul>
                        <span className="total">
                        <span>Total: $</span>
                        <span>4.99</span>
                    </span>
                    </div>
                    <button type="button" className="view-cart" onClick={this._onAddClick}>
                        <span>View Cart (</span>
                        <span>1</span>
                        <span>)</span></button>
                </div>
                <div className="flux-product">
                    <img src="img/scotch-beer.png"/>
                    <div className="flux-product-detail">
                        <h1 className="name">Scotch.io Signature Lager</h1>
                        <p className="description">
                            The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on
                            the
                            nose.
                            If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.</p>
                        <p className="price">
                            <span>Price: $</span>
                            <span>4.99</span></p>
                        <select>
                            <option value="0">40oz Bottle</option>
                            <option value="1">6 Pack</option>
                            <option value="2">30 Pack</option>
                        </select>
                        <button type="button" onClick={this._onAddClick}>Add To Cart
                        </button>
                        <button type="button" className="button-hidden" disabled="disabled">Sold Out</button>
                    </div>
                </div>
            </div>
        );
    },
    _onAddClick   : function () {
        document.getElementById('mini_cart').style.right = '0';
    },
    _onRemoveClick: function () {
        document.getElementById('mini_cart').style.right = '-500px';
    }

});

module.exports = Product;
