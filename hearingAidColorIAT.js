
define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/iat8.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

    return iatExtension({
        category1: {
            name: 'Bright Hearing Aids',
            title: {
                media: {word: 'Bright Hearing Aids'},
                css: {color:'#31b404', 'font-size':'2em'},
                height: 4
            },
            stimulusMedia: [
                {image: 'bright1.jpg'},
                {image: 'bright2.jpg'},
                {image: 'bright3.jpg'},
                {image: 'bright4.jpg'}
            ],
            stimulusCss: {color:'#31b404', 'font-size':'1.8em'}
        },
        category2: {
            name: 'Neutral Hearing Aids',
            title: {
                media: {word: 'Neutral Hearing Aids'},
                css: {color:'#21610B', 'font-size':'2em'},
                height: 4
            },
            stimulusMedia: [
                {image: 'neutral1.jpg'},
                {image: 'neutral2.jpg'},
                {image: 'neutral3.jpg'},
                {image: 'neutral4.jpg'}
            ],
            stimulusCss: {color:'#21610B', 'font-size':'1.8em'}
        },
        attribute1: {
            name: 'Positive',
            title: {
                media: {word: 'Positive'},
                css: {color:'#0000FF', 'font-size':'2em'},
                height: 4
            },
            stimulusMedia: [
                {word: 'Stylish'},
                {word: 'Attractive'},
                {word: 'Innovative'},
                {word: 'Modern'},
                {word: 'Appealing'}
            ],
            stimulusCss: {color:'#0000FF', 'font-size':'1.8em'}
        },
        attribute2: {
            name: 'Negative',
            title: {
                media: {word: 'Negative'},
                css: {color:'#FF0000', 'font-size':'2em'},
                height: 4
            },
            stimulusMedia: [
                {word: 'Stigmatizing'},
                {word: 'Awkward'},
                {word: 'Boring'},
                {word: 'Unattractive'},
                {word: 'Medical'}
            ],
            stimulusCss: {color:'#FF0000', 'font-size':'1.8em'}
        },
        base_url: {
            image: 'https://yourdomain.com/images/'
        },
        isTouch: false,
        remindError: true,
        showDebriefing: true,
        fullblockDebrief: true,
        debriefingText: 'Thank you for participating. Your responses have been recorded.',
        onFinish: function(scoreObj){
            Qualtrics.SurveyEngine.setEmbeddedData("d_score", scoreObj.d);
        }
    });
});
