var turtles = [
  {
    name: "Leo",
    color: "blue",
    noise: "Slash"
  },
  {
    name: "Donnie",
    color: "purple",
    noise: "Bonk"
  },
  {
    name: "Raph",
    color: "red",
    noise: "Kachink"
  },
  {
    name: "Mikey",
    color: "orange",
    noise: "Whack"
  }
];

function createTurtles() {
  var that = this;
  var headerEle = document.createElement("H1");
  for (var i = 0; i < turtles.length; i++) {
    //var div1 = document.createElement("div");

    var turtleEle = document.createElement("div");
    turtleEle.style.backgroundColor = "green";
    turtleEle.style.color = "white";
    turtleEle.style.height = "100px";
    turtleEle.style.width = "100px";
    
    ///////////////MOUSEOVER/////////////////
   const turtleColor = turtles[i].color;
    
    turtleEle.addEventListener("mouseover", function(){
     this.style.borderColor = turtleColor;
    this.style.borderStyle = "solid";
    });
    
    //////////////MOUSEOFF/////////////////
    turtleEle.addEventListener("mouseout", function(){
    this.style.borderStyle = "none";
    });
    ///////////////////////////////////////
    
      //////////////CLICK////////////
    const turtleNoise = turtles[i].noise;
    turtleEle.addEventListener("click", function(){
        headerEle.innerHTML = turtleNoise; 
        //headerEle.style.position = "relative";
    });
    ///////////////////////////////////////
    
    var nameEle = document.createElement("p");

    nameEle.append(turtles[i].name);
   
    
    document.body.appendChild(turtleEle);  
    turtleEle.appendChild(nameEle); 
    document.body.appendChild(headerEle);
  } //end for loop
  
} //end function

var tt = new createTurtles();