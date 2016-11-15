/**
 * This file is provided by Facebook for testing and evaluation purposes
 * only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var products = {
    0: {
        id     : 0,
        name   : "Scotch.io Signature Lager Boom",
        desc   : "The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.",
        price  : 4.56,
        img    : "img/scotch-beer.png",
        options: {
            0: "42oz Bottle",
            1: "6 Pack",
            2: "25 Pack"
        }
    },
    1: {
        id     : 1,
        name   : "Scotch.io Signature Lager K",
        desc   : "The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.",
        price  : 4.56,
        img    : "img/scotch-beer.png",
        options: {
            0: "40oz Bottle",
            1: "6 Pack",
            2: "25 Pack"
        }
    },
    2: {
        id     : 2,
        name   : "Scotch.io Signature Lager K",
        desc   : "The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.",
        price  : 3,
        img    : "img/scotch-beer.png",
        options: {
            0: "40oz Bottle",
            1: "6 Pack",
            2: "25 Pack"
        }
    },
    3: {
        id     : 3,
        name   : "Scotch.io Signature Lager K",
        desc   : "The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.",
        price  : 4.56,
        img    : "img/scotch-beer.png",
        options: {
            0: "40oz Bottle",
            1: "6 Pack",
            2: "25 Pack"
        }
    },
    4: {
        id     : 4,
        name   : "Scotch.io Signature Lager K",
        desc   : "The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.",
        price  : 4.56,
        img    : "img/scotch-beer.png",
        options: {
            0: "40oz Bottle",
            1: "6 Pack",
            2: "25 Pack"
        }
    },
    5: {
        id     : 5,
        name   : "Scotch.io Signature Lager K",
        desc   : "The finest lager money can buy. Hints of keyboard aerosol, with a whiff of iKlear wipes on the nose. If you pass out while drinking this beverage, Chris Sevilleja personally tucks you in.",
        price  : 4.56,
        img    : "img/scotch-beer.png",
        options: {
            0: "40oz Bottle",
            1: "6 Pack",
            2: "25 Pack"
        }
    },
};

module.exports = {

    convertRawMessage: function (rawMessage, currentThreadID) {
        return {
            id        : rawMessage.id,
            threadID  : rawMessage.threadID,
            authorName: rawMessage.authorName,
            date      : new Date(rawMessage.timestamp),
            text      : rawMessage.text,
            isRead    : rawMessage.threadID === currentThreadID
        };
    },

    getCreatedMessageData: function (text, currentThreadID) {
        var timestamp = Date.now();
        return {
            id        : 'm_' + timestamp,
            threadID  : currentThreadID,
            authorName: 'Bill', // hard coded for the example
            date      : new Date(timestamp),
            text      : text,
            isRead    : true
        };
    },

    getProduct: function (id) {
        if (!products.hasOwnProperty(id)) id = 1;

        var product = products[id];
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(product);
            }, 500);
        });

        // return products[id];
    }
};
