/**
 * Created by gimhose on 2016-09-19.
 */
/**
 * Library 모듈화를 위한 코딩기법 2
 * 글로벌 객체를 파라미터로 전달
 */
var request = require('request');
var MsTranslator = require('mstranslator');


/**
 * Bing Translation을 수행하기 위한 클래스 선언;
 */
(function(global) {
    var root = global;
    var BingTranslateAPI;
    if(typeof exports !== 'undefined') {
        BingTranslateAPI = exports;
    } else {
        BingTranslateAPI = root.BingTranslateAPI = {};
    }
    BingTranslateAPI.requestBingTranslate = function(text, callback) {
        console.log("Bing Translation");
        var client = new MsTranslator({
            client_id: "ushawn"
            , client_secret: "9zoooa9y8+3rlz0KBkZ1D8AKoa9F2VZAQMllTACaoco="
        }, true);

        var params = {
            text: text,
            to: 'en'
        };

        client.translate(params, function(err, data) {
            callback(data);
        });
    };


}(this));
