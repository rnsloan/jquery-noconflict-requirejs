requirejs.config({
    // where to look for files, relative to this config file
    baseUrl: "js/lib",

    // shortcut names for various dependencies
    paths: {
        "jqueryInternal": ['//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min','jquery-2.0.2.min'],
        "jqueryNoConflict": 'jquery.no-conflict',
        "app": "../app"

    }
    //shim config does not work with optimizer if loading resources from a url (jQuery)
});

requirejs(["app/main"]);

