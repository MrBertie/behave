/* DOKUWIKI:include behave.js */

var plugin_behave = (function () {

    // public vars/methods
    var pub = {};

    pub.editor = null;

    pub.init = function () {
        editor = new Behave({
            textarea: document.getElementById('wiki__text'),
            replaceTab: true,
            softTabs: true,
            tabSize: 4,
            autoOpen: true,
            overwrite: true,
            autoStrip: true,
            autoIndent: false,
            fence: false
        });
    };

    // return only public methods/properties
    return pub;
})();


jQuery(function() {
    plugin_behave.init();
});
