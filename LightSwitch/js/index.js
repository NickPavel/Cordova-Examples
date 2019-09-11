var controller;
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        controller = new Controller();
    }

};

app.initialize();
