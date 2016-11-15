/**
 * Created by Hp on 11/14/2016.
 */
var React = require('react');
var Cart = React.createClass({

    /**
     * @return {object}
     */
    render        : function () {
        return (
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
        );
    },
    _onRemoveClick: function () {

    }
});

module.exports = Cart;

