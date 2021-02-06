x = 0;
var menuEl = document.getElementById("start-menu-wrapper");
function start() {
    if(x == 0){
    menuEl.style.visibility = "visible";
    x = 1;
    } else {
        x = 0;
        closeMenu();
    }
}
function closeMenu() {
    menuEl.style.visibility = 'hidden';
}
setInterval(showTime, 1000); 
function showTime() { 
	let time = new Date(); 
	let hour = time.getHours(); 
	let min = time.getMinutes(); 
	let sec = time.getSeconds(); 
	am_pm = "AM"; 

	if (hour > 12) { 
		hour -= 12; 
		am_pm = "PM"; 
	} 
	if (hour == 0) { 
		hr = 12; 
		am_pm = "AM"; 
	} 

	hour = hour < 10 ? "0" + hour : hour; 
	min = min < 10 ? "0" + min : min; 

	let currentTime = hour + ":"
			+ min + " " + am_pm; 

	document.getElementById("time") 
			.innerHTML = currentTime; 
} 
showTime(); 



function openContext() {
    if(context.style.visibility == "visible"){
        open = 1;
        context.style.visibility = "hidden";
    } else {
    context.style.visibility = "visible";
    }
}


var context = document.getElementById('context');
if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        openContext()
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
        context.style.visibility = "visible";
        window.event.returnValue = false;
    });
  }



  function openTerminalWindow() {
      var terminal = document.getElementById("window-1");
      terminal.style.visibility = "visible";
      closeMenu()
  }
  function closeTerminal() {
      var terminalWindow = document.getElementById("window-1");
      terminalWindow.style.visibility = "hidden";
  }

  function OregonTrail() {
    var window2 = document.getElementById("window-2");
    window2.style.visibility = "visible";
    closeMenu()
}
function closeWindow2() {
    var window_2 = document.getElementById("window-2");
    window_2.style.visibility = "hidden";
}
function MaxWindow() {
    var OregonTrailIframe = document.getElementById("oregonTrailIframe");
    var OregonTrailWindow = document.getElementById("window-2");
    OregonTrailWindow.style.width = "99%";
    OregonTrailWindow.style.height = "89%";
    OregonTrailIframe.style.height = "100%";
    OregonTrailIframe.style.width = "80%";

}




function CloseWindow(self) {
    var self = document.getElementById("window-3")
    self.style.visibility = "hidden";
    setTimeout(() => {
        self.style.visibility = "visible";
    }, 1000)
    
}


function actuallyClose() {
    var window__3 = document.getElementById("window-3");
    window__3.style.visibility = "hidden";
}