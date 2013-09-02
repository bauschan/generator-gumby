require.config({
    paths: {
        gumby: 'libs/gumby.min',
        jquery: 'libs/jquery-1.9.1.min',
        plugins: 'plugins',
        app: 'app'
    }
});

require(['jquery' ,'plugins', 'gumby', 'app'], function (app) {
    'use strict';
    // use app here
});
