/**
 * Created by gimhose on 2016-09-19.
 */
/**
 * Library 모듈화를 위한 코딩기법 2
 * 글로벌 객체를 파라미터로 전달
 */
var request = require('request');

/**
 * CognitiveAPI를 수행하기 위한 클래스 선언;
 */
(function(global) {
    var root = global;
    var CognitiveAPI;
    var CognitiveTextAnalysisAPIKey = "1bc73967f32545bda373e56477d7085c",
        SentimentAPIURL = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment";


    if(typeof exports !== 'undefined') {
        CognitiveAPI = exports;
    } else {
        CognitiveAPI = root.CognitiveAPI = {};
    }

    CognitiveAPI.requestTextEmotionAPI = function(type, id, text, callback) {
        request({
            url: SentimentAPIURL,
            method: "POST",
            headers: {
                'Ocp-Apim-Subscription-Key': CognitiveTextAnalysisAPIKey,
                'Content-Type': 'application/json'
            },
            json: true,
            body: {
                "documents": [
                    {
                        "language": "en",
                        "id": id,
                        "text": text
                    }
                ]
            }
        }, function (error, response, body){
            callback(body);
        });
    };
}(this));
