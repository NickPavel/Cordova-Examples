var Controller = function() {
    var controller = {
        self: null,
        initialize: function() {
            self = this;
            this.bindEvents();
            self.showLightOffView();
        },
        
        bindEvents: function() {
			document.getElementById("button").addEventListener("click", this.onButtonClick)
        },
        
        onButtonClick: function() {
			var text = document.getElementById("button").innerHTML;
            if (text === "Turn on the light") {
                self.showLightOnView();
            } else {
                self.showLightOffView();
            }
        },
        
        showLightOffView: function() {
			var bulb = document.getElementById("bulb");
			bulb.src = "img/pic_bulboff.gif";
			var button = document.getElementById("button");
			button.innerHTML = "Turn on the light";
		},
		
        showLightOnView: function() {
			var bulb = document.getElementById("bulb");
			bulb.src = "img/pic_bulbon.gif";
			var button = document.getElementById("button");
			button.innerHTML = "Turn off the light";
		}

    }
    controller.initialize();
    return controller;
}
