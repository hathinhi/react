/*
 * Copyright (c) 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoActions
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/TodoConstants');
var ProductUtil = require('../utils/ProductUtils');

var AppActions = {
    create: function (text) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TODO_CREATE,
            text      : text
        });
    },

    getProduct: function (id) {
        ProductUtil.getProduct(id)
            .then((product) => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.PRODUCT_GET,
                    data      : product
                });
            })
            .catch(() => {
                AppDispatcher.dispatch({
                    actionType: AppConstants.PRODUCT_GET_ERROR
                });
            });

        // AppDispatcher.dispatch({
        //     actionType: AppConstants.PRODUCT_GET,
        //     data      : ProductUtil.getProduct(id)
        // });
    }
};

module.exports = AppActions;
