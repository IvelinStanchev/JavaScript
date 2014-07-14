(function () {
    require.config({
        paths: {
            'jquery': 'scripts/libs/jquery-1.11.1.min',
            'handlebars': 'scripts/libs/handlebars-v1.3.0'
        }
    });

    require(['test'], function (test) {
        test.run();
    })
}());