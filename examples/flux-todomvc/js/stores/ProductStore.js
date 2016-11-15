/**
 * Created by Duc H.A. on 14-Nov-16.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var E_CHANGE_PRODUCT = 'change';

var product = {
    id     : 0,
    name   : "Loading name...",
    desc   : "Loading desc...",
    img    : "img/no_image.jpg",
    price  : 0,
    options: {0: "No option"}
};

var cart = {
    0: {
        id              : 0,
        name            : "No name",
        desc            : "Loading desc...",
        price           : 5.60,
        img             : "img/no_image.jpg",
        options         : {0:"asdas",1:'askudhksa'},
        selected_options: {0: 1}
    }
};

var ProductStore = assign({}, EventEmitter.prototype, {

    set: function (data) {
        product = data;
        this.emitChange();
    },

    get: function () {
        return product;
    },

    getCart: function () {
        return cart;
    },

    pushCart: function (product, option) {
        var id = product.id;
        if (cart.hasOwnProperty(id)) {
            if (!cart[id].selected_options.hasOwnProperty(option)) {
                cart[id].selected_options[option] = product.options[option];
            }
        } else {
            product['selected_options'] = {};
            product['selected_options'][option] = product.options[option];
            cart[id] = product;
        }
        this.emitChange();
    },

    emitChange: function () {
        this.emit(E_CHANGE_PRODUCT);
    },

    /**
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(E_CHANGE_PRODUCT, callback);
    },

    /**
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(E_CHANGE_PRODUCT, callback);
    }
});

// Register callback to handle all updates
AppDispatcher.register(function (action) {
    switch (action.actionType) {
        case AppConstants.PRODUCT_GET:
            ProductStore.set(action.data);
            break;
        case AppConstants.PUSH_CART:
            ProductStore.pushCart(action.product, action.option);
            break;
        default:
    }
});

module.exports = ProductStore;
