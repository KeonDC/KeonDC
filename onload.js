console.log("Stop looking at the console, there is nothing to see here, go away. - Faye")
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
                  document.querySelector(
                    "body").style.visibility = "hidden";
                  document.querySelector(
                    "spinner").style.visibility = "visible";
              } else {
                  document.querySelector(
                    "spinner").style.display = "none";
                  document.querySelector(
                    "body").style.visibility = "visible";
              }
            }