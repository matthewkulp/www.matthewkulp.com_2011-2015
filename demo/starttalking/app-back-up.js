console.log("'world' y:" + PSD.world.y);
console.log("'left1' y:" + PSD.left1.y);
console.log("'left2' y:" + PSD.left2.y);
console.log("'right' y:" + PSD.right.y);
console.log("'user' y:" + PSD.user.y);

header = new View({x:0, y:40, width:317, height:150});
header.html = "Start Talking"
header.style = {
	"color": "white",
	"font": "30px Helvetica neue",
	"font-weight": "bold",
	"text-align": "center"
};

subtitle = new View({x:0, y:85, width:317, height:40});
subtitle.html = "with those nearby."
subtitle.style = {
	"color": "white",
	"font": "15px Helvetica neue",
	"text-align": "center"
};

userText = new View({x:0, y:215, width:317, height:30});
userText.html = "hello"
userText.style = {
	"color" : "black",
	"font" : "18px helvetica neue",
	"text-align" : "center"
};

leftText = new View({x:58, y:178, width:55, height:30});
leftText.html = "bonjour"
leftText.style = {
	"color" : "black",
	"font" : "13px helvetica neue",
	"text-align" : "left"
};

rightText = new View({x:212, y:178, width:40, height:30});
rightText.html = "hola"
rightText.style = {
	"color" : "black",
	"font" : "13px helvetica neue",
	"text-align" : "right"
};


userText.opacity = 0
leftText.opacity = 0
rightText.opacity = 0

PSD.left1.y = -60
PSD.leftIcon.opacity = 0
PSD.left2.y = -60
PSD.right.y = -60
PSD.rightIcon.opacity = 0
PSD.world.y = 260
PSD.world.opacity = 0
PSD.ok.opacity = 1

PSD.user.y = -60
PSD.userIcon.opacity = 1

world = function () {
	props = {
		properties: {opacity:1, y:198},
		time: 700,
	}
	worldAnimation = PSD.world.animate(props);
	worldAnimation.on("end", people);
};

people = function () {
	
	utils.delay(0, function(){
		PSD.left1.animate({
			properties: {y:223},
			time: 700,
		})
	})
	
	utils.delay(20, function(){
		PSD.left2.animate({
			properties: {y:208},
			time: 700,
		})
	})

	utils.delay(40, function(){
		PSD.right.animate({
			properties: {y:223},
			time: 700,
		})
	})
	
	utils.delay(60, function(){
		peopleAnimation = PSD.user.animate({
			properties: {y:302},
			time: 700,
		})
		peopleAnimation.on("end", function(){
			utils.delay(500,icons);
		});
	})
};


icons = function() {
	animation1 = function () {
		PSD.userIcon.animate({
			properties: {opacity:1},
			time: 500,
		})
		userText.animate({
			properties: {opacity:1},
			time: 500,
		})
	};
	utils.delay(0, animation1);
	
	animation2 = function() {
		PSD.leftIcon.animate({
			properties: {opacity:1},
			time: 500,
		})
		leftText.animate({
			properties: {opacity:1},
			time: 500,
		})
	})
	utils.delay(1500, animation2);

	animation3 = function() {
		iconsAnimation = PSD.rightIcon.animate({
			properties: {opacity:1},
			time: 500,
		})
		rightText.animate({
			properties: {opacity:1},
			time: 500,
		})
	})	
	utils.delay(2250, animation3);
		iconsAnimation.on("end", function(){
			PSD.rightIcon.animate({
				properties: {opacity:0},
				time: 500,
			})
			
			PSD.leftIcon.animate({
				properties: {opacity:0},
				time: 500,
			})
			
			PSD.userIcon.animate({
				properties: {opacity:0},
				time: 500,
			})											
		})
	})
	
};


utils.delay(0, world);



// Pass in a function to this as the first parameter
// animate(thingToAnimate,duration,[delay],[somethingElse],callback)
// logName = function(name,callback){
// 	console.log(name);
// 	callback();
// }
// 
// runSecond = function(){
// 	console.log("Is awesome");
// }
// 
// runFirst("Alonso",runSecond);

// class Person extends EventEmitter
// 
// 	goToSleep: function(){
// 		alonso.emit 'wokeUp'
// 	}
// 		
// 	
// alonso = new Person

// alonso is an object
// alonso.on 'wokeUp', function(dsfs){
// 	alert "OMG IS EARLY"
// }
// 
// alonso.on 'wokeUp', function(sdfsd){
// 	alert "OMG IS too early"
// }
// 
// alonso.on 'wokeUp', function(time){
// 	alert "OMG IS way early, its: " + time
// 	
// }
// 
// alonso.emit 'wokeUp', "7AM"

// doOneThing(200, function(){
// 	doAnotherThing(300, function(){
// 		doAFourthThing(500, function(){
// 			
// 		})
// 	})
// 	
// 	doAThirdThing(455, function(){
// 		
// 	})
// })


// 
// alonso.goToSleep()


