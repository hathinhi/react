var React = require('react');
var Product = React.createClass({
    defaultProps: {
        data: {
            id     : 0,
            name   : "",
            desc   : "",
            img    : "img/no_image.jpg",
            price  : 10,
            options: null
        }
    },
    propTypes   : {
        data: React.PropTypes.object.isRequired
    },
    /**
     * @return {object}
     */

    render      : function () {
        var options = this.props.data.options;
        console.log("ccc",options);
        var arr_option = [];
        for (var i in options) {
            arr_option.push(<option value={i} key={i}>{options[i]}</option>);
        }
        console.log("arr",arr_option);
        return (
            <div>
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
                            <span>{this.props.data.price}</span></p>
                        <select>
                            {arr_option}
                        </select>
                        <button type="button" onClick={this._onAddClick}>Add To Cart
                        </button>
                        <button type="button" className="button-hidden" disabled="disabled">Sold Out</button>
                    </div>
                </div>
            </div>
        );
    },
    _onAddClick : function () {
        document.getElementById('mini_cart').style.right = '0';
    },

});

module.exports = Product;
