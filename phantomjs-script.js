"use strict";
var page = require('webpage').create();
var t;
var system = require('system');

if (system.args.length !== 2) {
    console.log('Usage: phantomjs-script.js <url>');
    phantom.exit(1);
} else {
    var url = system.args[1];
    console.log("SENDING REQUEST TO: " + url);
    page.open(url, function (status) {
        t = Date.now();
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Loading time ' + t + ' msec');

            console.log('Page html content lenght: ' +page.content.length);

            var pageTitle = page.evaluate(function () {
                return document.title;
            })
            
            console.log('Page title is ' + pageTitle);
        }
        phantom.exit();
    });
}

