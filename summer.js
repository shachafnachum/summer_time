(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"summer_atlas_", frames: [[0,0,1920,1080]]},
		{name:"summer_atlas_2", frames: [[0,0,1102,1461]]},
		{name:"summer_atlas_3", frames: [[0,0,1160,1113],[0,1115,1154,824],[1156,1115,596,842],[1162,0,596,842]]},
		{name:"summer_atlas_4", frames: [[598,0,411,388],[598,778,68,123],[0,844,502,195],[598,390,409,386],[0,0,596,842]]}
];


// symbols:



(lib.after120days = function() {
	this.initialize(img.after120days);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2550,3300);


(lib.beachbackround = function() {
	this.initialize(img.beachbackround);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.CachedTexturedBitmap_10 = function() {
	this.initialize(ss["summer_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_12 = function() {
	this.initialize(ss["summer_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_13 = function() {
	this.initialize(ss["summer_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_15 = function() {
	this.initialize(ss["summer_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_16 = function() {
	this.initialize(ss["summer_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_17 = function() {
	this.initialize(ss["summer_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_18 = function() {
	this.initialize(ss["summer_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.kid2 = function() {
	this.initialize(img.kid2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.kid3 = function() {
	this.initialize(img.kid3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.kid3pngcopy = function() {
	this.initialize(img.kid3pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.kid3pngcopy3 = function() {
	this.initialize(img.kid3pngcopy3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.kid4 = function() {
	this.initialize(img.kid4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.moon = function() {
	this.initialize(img.moon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3508,4961);


(lib.pineapple = function() {
	this.initialize(ss["summer_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4961,3508);


(lib.window01 = function() {
	this.initialize(ss["summer_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.window11012 = function() {
	this.initialize(ss["summer_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ילדהבגשם1 = function() {
	this.initialize(ss["summer_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ילדהבים1 = function() {
	this.initialize(img.ילדהבים1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3508,4961);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedTexturedBitmap_18();
	this.instance.parent = this;
	this.instance.setTransform(-275.35,-365.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275.3,-365.2,551,730.5);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("start", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(-42.4,-24.8,4.1773,3.5613);

	this.instance = new lib.CachedTexturedBitmap_17();
	this.instance.parent = this;
	this.instance.setTransform(-102.1,-96.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-96.6,741.3000000000001,469.4);


(lib.Symbol_7_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kid4();
	this.instance.parent = this;
	this.instance.setTransform(161,0,0.1391,0.1391);

	this.instance_1 = new lib.kid3pngcopy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_7_Layer_1, null, null);


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kid2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.1469,0.1684);

	this.instance_1 = new lib.kid3pngcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(773,1417,0.2361,0.2361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_6_Layer_1, null, null);


(lib.Symbol_5_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.kid3();
	this.instance.parent = this;
	this.instance.setTransform(374.35,0,0.151,0.151,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_5_Layer_1, null, null);


(lib.Symbol_4_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ילדהבים1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0548,0.0548);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_4_Layer_1, null, null);


(lib.Symbol_3_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.0403,0.0403);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_3_Layer_1, null, null);


(lib.Symbol_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.moon();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.028,0.028);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_1_Layer_1, null, null);


(lib.Scene_1_windowsummer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// windowsummer
	this.instance = new lib.sun();
	this.instance.parent = this;
	this.instance.setTransform(86,18,0.045,0.045);

	this.instance_1 = new lib.window11012();
	this.instance_1.parent = this;
	this.instance_1.setTransform(4,-190,0.9167,0.9167);

	this.instance_2 = new lib.sun();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57,11,0.0627,0.0627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},360).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_window = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// window
	this.instance = new lib.window01();
	this.instance.parent = this;
	this.instance.setTransform(9,-135,0.9038,0.9038);

	this.instance_1 = new lib.CachedTexturedBitmap_13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(156.9,196.6,0.5,0.5);

	this.instance_2 = new lib.CachedTexturedBitmap_15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(38.5,179.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},119).to({state:[{t:this.instance_2},{t:this.instance}]},86).to({state:[{t:this.instance_2},{t:this.instance}]},106).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_rain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// rain
	this.instance = new lib.ילדהבגשם1();
	this.instance.parent = this;
	this.instance.setTransform(56,-84,0.641,0.641);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},118).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.CachedTexturedBitmap_16();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,-3.7,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(118));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.pineapple();
	this.instance.parent = this;
	this.instance.setTransform(-161,-15,0.4343,0.4343);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(312).to({_off:false},0).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_after120days = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// after120days
	this.instance = new lib.after120days();
	this.instance.parent = this;
	this.instance.setTransform(91,-25,0.1451,0.1451);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(312).to({_off:false},0).wait(48));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_7_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(1240,1761,1,1,0,0,0,1240,1761);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,2480,3522), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(679.3,1122.7,1,1,0,0,0,679.3,1122.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,1358.6,2245.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_5_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(187.2,264.8,1,1,0,0,0,187.2,264.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,374.4,529.6), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_4_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(-9.5,-15.1,1,1,0,0,0,-9.5,-15.1);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,192.4,272), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_3_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(99.9,70.6,1,1,0,0,0,99.9,70.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,199.7,141.2), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(49.2,69.5,1,1,0,0,0,49.2,69.5);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,98.4,139.2), null);


(lib.Scene_1_walktobeach1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// walktobeach1
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,137.9,1,1,0,0,0,-9.5,-15.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(408).to({_off:false},0).wait(1).to({regX:96.2,regY:136,x:63,y:289},0).wait(1).to({x:68.8},0).wait(1).to({x:74.6},0).wait(1).to({x:80.4},0).wait(1).to({x:86.15},0).wait(1).to({x:91.95},0).wait(1).to({x:97.7},0).wait(1).to({x:103.5},0).wait(1).to({x:109.3},0).wait(1).to({x:115.05},0).wait(1).to({x:120.85},0).wait(1).to({x:126.65},0).wait(1).to({x:132.45},0).wait(1).to({x:138.2},0).wait(1).to({x:144},0).wait(1).to({x:149.8},0).wait(1).to({x:155.6},0).wait(1).to({x:161.4},0).wait(1).to({x:167.15},0).wait(1).to({x:172.95},0).wait(1).to({x:178.75},0).wait(1).to({x:184.55},0).wait(1).to({x:190.3},0).wait(1).to({x:196.1},0).wait(1).to({x:201.9},0).wait(1).to({x:207.7},0).wait(1).to({x:213.5},0).wait(1).to({x:219.25},0).wait(1).to({x:225.05},0).wait(1).to({x:230.85},0).wait(1).to({x:236.65},0).wait(1).to({x:242.4},0).wait(1).to({x:248.2},0).wait(1).to({x:254},0).wait(1).to({x:259.8},0).wait(1).to({x:265.6},0).wait(1).to({x:271.35},0).wait(1).to({x:277.15},0).wait(1).to({x:282.95},0).wait(1).to({x:288.75},0).wait(1).to({x:294.5},0).wait(1).to({x:300.3},0).wait(1).to({x:306.1},0).wait(1).to({x:311.9},0).wait(1).to({x:317.7},0).wait(1).to({x:323.45},0).wait(1).to({x:329.25},0).wait(1).to({x:335.05},0).wait(1).to({x:340.85},0).wait(1).to({x:346.6},0).wait(1).to({x:352.4},0).wait(1).to({x:358.2},0).wait(1).to({x:364},0).wait(1).to({x:369.8},0).wait(1).to({x:375.55},0).wait(1).to({x:381.35},0).wait(1).to({x:387.15},0).wait(1).to({x:392.95},0).wait(1).to({x:398.7},0).wait(1).to({x:404.5},0).wait(1).to({x:410.3},0).wait(1).to({x:416.1},0).wait(1).to({x:421.9},0).wait(1).to({x:427.65},0).wait(1).to({x:433.45},0).wait(1).to({x:439.25},0).wait(1).to({x:445.05},0).wait(1).to({x:450.8},0).wait(1).to({x:456.6},0).wait(1).to({x:462.4},0).wait(1).to({x:468.2},0).wait(1).to({x:474},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_walk2beach2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// walk2beach2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,137.9,1,1,0,0,0,-9.5,-15.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(481).to({_off:false},0).wait(1).to({regX:96.2,regY:136,x:63.2,y:289},0).wait(1).to({x:69.15},0).wait(1).to({x:75.1},0).wait(1).to({x:81.05},0).wait(1).to({x:87},0).wait(1).to({x:92.95},0).wait(1).to({x:98.85},0).wait(1).to({x:104.8},0).wait(1).to({x:110.75},0).wait(1).to({x:116.7},0).wait(1).to({x:122.65},0).wait(1).to({x:128.65},0).wait(1).to({x:134.6},0).wait(1).to({x:140.55},0).wait(1).to({x:146.5},0).wait(1).to({x:152.45},0).wait(1).to({x:158.4},0).wait(1).to({x:164.35},0).wait(1).to({x:170.3},0).wait(1).to({x:176.25},0).wait(1).to({x:182.2},0).wait(1).to({x:188.15},0).wait(1).to({x:194.1},0).wait(1).to({x:200.1},0).wait(1).to({x:206.05},0).wait(1).to({x:212},0).wait(1).to({x:217.95},0).wait(1).to({x:223.9},0).wait(1).to({x:229.85},0).wait(1).to({x:235.8},0).wait(1).to({x:241.75},0).wait(1).to({x:247.7},0).wait(1).to({x:253.65},0).wait(1).to({x:259.6},0).wait(1).to({x:265.6},0).wait(1).to({x:271.5},0).wait(1).to({x:277.5},0).wait(1).to({x:283.45},0).wait(1).to({x:289.4},0).wait(1).to({x:295.35},0).wait(1).to({x:301.3},0).wait(1).to({x:307.25},0).wait(1).to({x:313.2},0).wait(1).to({x:319.15},0).wait(1).to({x:325.1},0).wait(1).to({x:331.05},0).wait(1).to({x:337},0).wait(1).to({x:343},0).wait(1).to({x:348.95},0).wait(1).to({x:354.9},0).wait(1).to({x:360.85},0).wait(1).to({x:366.8},0).wait(1).to({x:372.75},0).wait(1).to({x:378.7},0).wait(1).to({x:384.65},0).wait(1).to({x:390.6},0).wait(1).to({x:396.55},0).wait(1).to({x:402.5},0).wait(1).to({x:408.45},0).wait(1).to({x:414.45},0).wait(1).to({x:420.4},0).wait(1).to({x:426.35},0).wait(1).to({x:432.3},0).wait(1).to({x:438.25},0).wait(1).to({x:444.2},0).wait(1).to({x:450.15},0).wait(1).to({x:456.1},0).wait(1).to({x:462.05},0).wait(1).to({x:468},0).wait(1).to({x:474},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun2
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(193.9,310.6,1,1,0,0,0,99.9,70.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(265).to({_off:false},0).wait(1).to({regX:99.8,x:193.8,y:305.6},0).wait(1).to({y:300.65},0).wait(1).to({y:295.65},0).wait(1).to({y:290.7},0).wait(1).to({y:285.75},0).wait(1).to({y:280.75},0).wait(1).to({y:275.8},0).wait(1).to({y:270.85},0).wait(1).to({y:265.85},0).wait(1).to({y:260.9},0).wait(1).to({y:255.9},0).wait(1).to({y:250.95},0).wait(1).to({y:246},0).wait(1).to({y:241},0).wait(1).to({y:236.05},0).wait(1).to({y:231.1},0).wait(1).to({y:226.1},0).wait(1).to({y:221.15},0).wait(1).to({y:216.15},0).wait(1).to({y:211.2},0).wait(1).to({y:206.25},0).wait(1).to({y:201.25},0).wait(1).to({y:196.3},0).wait(1).to({y:191.35},0).wait(1).to({y:186.35},0).wait(1).to({y:181.4},0).wait(1).to({y:176.45},0).wait(1).to({y:171.45},0).wait(1).to({y:166.5},0).wait(1).to({y:161.5},0).wait(1).to({y:156.55},0).wait(1).to({y:151.6},0).wait(1).to({y:146.6},0).wait(1).to({y:141.65},0).wait(1).to({y:136.7},0).wait(1).to({y:131.7},0).wait(1).to({y:126.75},0).wait(1).to({y:121.75},0).wait(1).to({y:116.8},0).wait(1).to({y:111.85},0).wait(1).to({y:106.85},0).wait(1).to({y:101.9},0).wait(1).to({y:96.95},0).wait(1).to({y:91.95},0).wait(1).to({y:87},0).wait(1).to({y:82.05},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sun1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(193.9,310.6,1,1,0,0,0,99.9,70.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).wait(1).to({regX:99.8,x:193.8,y:305.8},0).wait(1).to({y:301.05},0).wait(1).to({y:296.3},0).wait(1).to({y:291.55},0).wait(1).to({y:286.75},0).wait(1).to({y:282},0).wait(1).to({y:277.25},0).wait(1).to({y:272.5},0).wait(1).to({y:267.7},0).wait(1).to({y:262.95},0).wait(1).to({y:258.2},0).wait(1).to({y:253.45},0).wait(1).to({y:248.7},0).wait(1).to({y:243.9},0).wait(1).to({y:239.15},0).wait(1).to({y:234.4},0).wait(1).to({y:229.65},0).wait(1).to({y:224.85},0).wait(1).to({y:220.1},0).wait(1).to({y:215.35},0).wait(1).to({y:210.6},0).wait(1).to({y:205.8},0).wait(1).to({y:201.05},0).wait(1).to({y:196.3},0).wait(1).to({y:191.55},0).wait(1).to({y:186.8},0).wait(1).to({y:182},0).wait(1).to({y:177.25},0).wait(1).to({y:172.5},0).wait(1).to({y:167.75},0).wait(1).to({y:162.95},0).wait(1).to({y:158.2},0).wait(1).to({y:153.45},0).wait(1).to({y:148.7},0).wait(1).to({y:143.9},0).wait(1).to({y:139.15},0).wait(1).to({y:134.4},0).wait(1).to({y:129.65},0).wait(1).to({y:124.9},0).wait(1).to({y:120.1},0).wait(1).to({y:115.35},0).wait(1).to({y:110.6},0).wait(1).to({y:105.85},0).wait(1).to({y:101.05},0).wait(1).to({y:96.3},0).wait(1).to({y:91.55},0).wait(1).to({y:86.8},0).wait(1).to({y:82.05},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_moon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// moon2
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(334.2,102.3,1,1,0,0,0,49.2,69.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(216).to({_off:false},0).wait(1).to({regY:69.6,x:334.3,y:108.5},0).wait(1).to({x:334.4,y:114.6},0).wait(1).to({x:334.5,y:120.65},0).wait(1).to({x:334.6,y:126.6},0).wait(1).to({x:334.7,y:132.5},0).wait(1).to({x:334.8,y:138.35},0).wait(1).to({x:334.9,y:144.15},0).wait(1).to({x:335,y:149.9},0).wait(1).to({x:335.05,y:155.55},0).wait(1).to({x:335.15,y:161.15},0).wait(1).to({x:335.25,y:166.7},0).wait(1).to({x:335.35,y:172.2},0).wait(1).to({x:335.45,y:177.65},0).wait(1).to({x:335.55,y:183},0).wait(1).to({x:335.65,y:188.35},0).wait(1).to({x:335.7,y:193.6},0).wait(1).to({x:335.8,y:198.8},0).wait(1).to({x:335.9,y:203.95},0).wait(1).to({x:336,y:209},0).wait(1).to({x:336.05,y:214},0).wait(1).to({x:336.15,y:219},0).wait(1).to({x:336.25,y:223.9},0).wait(1).to({x:336.3,y:228.7},0).wait(1).to({x:336.4,y:233.5},0).wait(1).to({x:336.45,y:238.2},0).wait(1).to({x:336.55,y:242.9},0).wait(1).to({x:336.6,y:247.5},0).wait(1).to({x:336.7,y:252.05},0).wait(1).to({x:336.8,y:256.5},0).wait(1).to({x:336.85,y:260.95},0).wait(1).to({x:336.95,y:265.3},0).wait(1).to({x:337,y:269.6},0).wait(1).to({x:337.05,y:273.85},0).wait(1).to({x:337.15,y:278.05},0).wait(1).to({x:337.2,y:282.15},0).wait(1).to({x:337.3,y:286.25},0).wait(1).to({x:337.35,y:290.25},0).wait(1).to({x:337.4,y:294.2},0).wait(1).to({x:337.5,y:298.1},0).wait(1).to({x:337.55,y:301.9},0).wait(1).to({x:337.6,y:305.7},0).wait(1).to({x:337.65,y:309.4},0).wait(1).to({x:337.75,y:313.05},0).wait(1).to({x:337.8,y:316.65},0).wait(1).to({x:337.85,y:320.2},0).wait(1).to({x:337.9,y:323.65},0).wait(1).to({x:337.95,y:327.05},0).wait(1).to({x:338.05,y:330.45},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_moon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// moon1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(334.2,102.3,1,1,0,0,0,49.2,69.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(1).to({regY:69.6,x:334.3,y:108.65},0).wait(1).to({x:334.4,y:114.85},0).wait(1).to({x:334.5,y:121},0).wait(1).to({x:334.6,y:127.1},0).wait(1).to({x:334.7,y:133.15},0).wait(1).to({x:334.8,y:139.1},0).wait(1).to({x:334.9,y:145},0).wait(1).to({x:335,y:150.85},0).wait(1).to({x:335.1,y:156.65},0).wait(1).to({x:335.2,y:162.35},0).wait(1).to({x:335.3,y:168},0).wait(1).to({x:335.4,y:173.6},0).wait(1).to({x:335.45,y:179.15},0).wait(1).to({x:335.55,y:184.6},0).wait(1).to({x:335.65,y:190},0).wait(1).to({x:335.75,y:195.35},0).wait(1).to({x:335.85,y:200.65},0).wait(1).to({x:335.9,y:205.9},0).wait(1).to({x:336,y:211.05},0).wait(1).to({x:336.1,y:216.15},0).wait(1).to({x:336.2,y:221.2},0).wait(1).to({x:336.25,y:226.15},0).wait(1).to({x:336.35,y:231.05},0).wait(1).to({x:336.45,y:235.9},0).wait(1).to({x:336.5,y:240.7},0).wait(1).to({x:336.6,y:245.45},0).wait(1).to({x:336.65,y:250.1},0).wait(1).to({x:336.75,y:254.7},0).wait(1).to({x:336.8,y:259.25},0).wait(1).to({x:336.9,y:263.75},0).wait(1).to({x:336.95,y:268.15},0).wait(1).to({x:337.05,y:272.5},0).wait(1).to({x:337.1,y:276.8},0).wait(1).to({x:337.2,y:281.05},0).wait(1).to({x:337.25,y:285.2},0).wait(1).to({x:337.35,y:289.3},0).wait(1).to({x:337.4,y:293.35},0).wait(1).to({x:337.45,y:297.35},0).wait(1).to({x:337.55,y:301.25},0).wait(1).to({x:337.6,y:305.15},0).wait(1).to({x:337.65,y:308.95},0).wait(1).to({x:337.75,y:312.65},0).wait(1).to({x:337.8,y:316.35},0).wait(1).to({x:337.85,y:319.95},0).wait(1).to({x:337.9,y:323.5},0).wait(1).to({x:337.95,y:327},0).wait(1).to({x:338.05,y:330.45},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_15
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(-140.3,185.75,0.7938,0.7938,0,0,0,-9.5,-13.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(552).to({_off:false},0).wait(1).to({regX:96.2,regY:136,x:-55.4,y:304.5},0).wait(1).to({x:-54.45},0).wait(1).to({x:-53.5},0).wait(1).to({x:-52.55},0).wait(1).to({x:-51.6},0).wait(1).to({x:-50.65},0).wait(1).to({x:-49.7},0).wait(1).to({x:-48.75},0).wait(1).to({x:-47.8},0).wait(1).to({x:-46.85},0).wait(1).to({x:-45.9},0).wait(1).to({x:-44.95},0).wait(1).to({x:-44},0).wait(1).to({x:-43.05},0).wait(1).to({x:-42.1},0).wait(1).to({x:-41.1},0).wait(1).to({x:-40.15},0).wait(1).to({x:-39.2},0).wait(1).to({x:-38.25},0).wait(1).to({x:-37.3},0).wait(1).to({x:-36.35},0).wait(1).to({x:-35.4},0).wait(1).to({x:-34.45},0).wait(1).to({x:-33.5},0).wait(1).to({x:-32.55},0).wait(1).to({x:-31.6},0).wait(1).to({x:-30.65},0).wait(1).to({x:-29.7},0).wait(1).to({x:-28.75},0).wait(1).to({x:-27.8},0).wait(1).to({x:-26.85},0).wait(1).to({x:-25.85},0).wait(1).to({x:-24.9},0).wait(1).to({x:-23.95},0).wait(1).to({x:-23},0).wait(1).to({x:-22.05},0).wait(1).to({x:-21.1},0).wait(1).to({x:-20.15},0).wait(1).to({x:-19.2},0).wait(1).to({x:-18.25},0).wait(1).to({x:-17.3},0).wait(1).to({x:-16.35},0).wait(1).to({x:-15.4},0).wait(1).to({x:-14.45},0).wait(1).to({x:-13.5},0).wait(1).to({x:-12.55},0).wait(1).to({x:-11.55},0).wait(1).to({x:-9.95},0).wait(1).to({x:-8.35},0).wait(1).to({x:-6.75},0).wait(1).to({x:-5.15},0).wait(1).to({x:-3.55},0).wait(1).to({x:-1.95},0).wait(1).to({x:-0.35},0).wait(1).to({x:1.25},0).wait(1).to({x:2.85},0).wait(1).to({x:4.45},0).wait(1).to({x:6.05},0).wait(1).to({x:7.65},0).wait(1).to({x:9.25},0).wait(1).to({x:10.85},0).wait(1).to({x:12.45},0).wait(1).to({x:14.05},0).wait(1).to({x:15.65},0).wait(1).to({x:17.25},0).wait(1).to({x:18.85},0).wait(1).to({x:20.45},0).wait(1).to({x:22.05},0).wait(1).to({x:23.65},0).wait(1).to({x:25.25},0).wait(1).to({x:26.15},0).wait(1).to({x:27.1},0).wait(1).to({x:28.05},0).wait(1).to({x:29},0).wait(1).to({x:29.95},0).wait(1).to({x:30.9},0).wait(1).to({x:31.85},0).wait(1).to({x:32.8},0).wait(1).to({x:33.75},0).wait(1).to({x:34.7},0).wait(1).to({x:35.65},0).wait(1).to({x:36.6},0).wait(1).to({x:37.55},0).wait(1).to({x:38.5},0).wait(1).to({x:39.45},0).wait(1).to({x:40.35},0).wait(1).to({x:41.3},0).wait(1).to({x:42.25},0).wait(1).to({x:43.2},0).wait(1).to({x:44.15},0).wait(1).to({x:45.1},0).wait(1).to({x:46.05},0).wait(1).to({x:47},0).wait(1).to({x:47.95},0).wait(1).to({x:48.9},0).wait(1).to({x:49.85},0).wait(1).to({x:50.8},0).wait(1).to({x:51.75},0).wait(1).to({x:52.7},0).wait(1).to({x:53.65},0).wait(1).to({x:55.15},0).wait(1).to({x:56.7},0).wait(1).to({x:58.25},0).wait(1).to({x:59.75},0).wait(1).to({x:61.3},0).wait(1).to({x:62.85},0).wait(1).to({x:64.35},0).wait(1).to({x:65.9},0).wait(1).to({x:67.45},0).wait(1).to({x:68.95},0).wait(1).to({x:70.5},0).wait(1).to({x:72.05},0).wait(1).to({x:73.55},0).wait(1).to({x:75.1},0).wait(1).to({x:76.6},0).wait(1).to({x:78.1},0).wait(1).to({x:79.65},0).wait(1).to({x:81.2},0).wait(1).to({x:82.7},0).wait(1).to({x:84.25},0).wait(1).to({x:85.8},0).wait(1).to({x:87.3},0).wait(1).to({x:88.85},0).wait(1).to({x:90.4},0).wait(1).to({x:91.5},0).wait(1).to({x:92.65},0).wait(1).to({x:93.8},0).wait(1).to({x:94.9},0).wait(1).to({x:96.05},0).wait(1).to({x:97.2},0).wait(1).to({x:98.35},0).wait(1).to({x:99.45},0).wait(1).to({x:100.6},0).wait(1).to({x:101.75},0).wait(1).to({x:102.9},0).wait(1).to({x:104},0).wait(1).to({x:105.15},0).wait(1).to({x:106.3},0).wait(1).to({x:107.45},0).wait(1).to({x:108.55},0).wait(1).to({x:109.7},0).wait(1).to({x:110.85},0).wait(1).to({x:112},0).wait(1).to({x:112.85},0).wait(1).to({x:113.75},0).wait(1).to({x:114.65},0).wait(1).to({x:115.55},0).wait(1).to({x:116.45},0).wait(1).to({x:117.35},0).wait(1).to({x:118.2},0).wait(1).to({x:119.1},0).wait(1).to({x:120},0).wait(1).to({x:120.9},0).wait(1).to({x:121.8},0).wait(1).to({x:122.7},0).wait(1).to({x:123.6},0).wait(1).to({x:124.45},0).wait(1).to({x:125.35},0).wait(1).to({x:126.25},0).wait(1).to({x:127.15},0).wait(1).to({x:128.05},0).wait(1).to({x:128.95},0).wait(1).to({x:129.8},0).wait(1).to({x:130.7},0).wait(1).to({x:131.6},0).wait(1).to({x:132.5},0).wait(1).to({x:133.4},0).wait(1).to({x:134.3},0).wait(1).to({x:135.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_kid3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kid3
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(1240,1747,1,1,0,0,0,1240,1761);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(552).to({_off:false},0).wait(1).to({x:1240.15},0).wait(1).to({x:1240.3},0).wait(1).to({x:1240.45},0).wait(1).to({x:1240.6},0).wait(1).to({x:1240.75},0).wait(1).to({x:1240.9},0).wait(1).to({x:1241.05},0).wait(1).to({x:1241.2},0).wait(1).to({x:1241.35},0).wait(1).to({x:1241.5},0).wait(1).to({x:1241.65},0).wait(1).to({x:1241.8},0).wait(1).to({x:1241.95},0).wait(1).to({x:1242.1},0).wait(1).to({x:1242.25},0).wait(1).to({x:1242.45},0).wait(1).to({x:1242.6},0).wait(1).to({x:1242.75},0).wait(1).to({x:1242.9},0).wait(1).to({x:1243.05},0).wait(1).to({x:1243.2},0).wait(1).to({x:1243.35},0).wait(1).to({x:1243.5},0).wait(1).to({x:1243.65},0).wait(1).to({x:1243.8},0).wait(1).to({x:1243.95},0).wait(1).to({x:1244.1},0).wait(1).to({x:1244.25},0).wait(1).to({x:1244.4},0).wait(1).to({x:1244.55},0).wait(1).to({x:1244.7},0).wait(1).to({x:1244.9},0).wait(1).to({x:1245.05},0).wait(1).to({x:1245.2},0).wait(1).to({x:1245.35},0).wait(1).to({x:1245.5},0).wait(1).to({x:1245.65},0).wait(1).to({x:1245.8},0).wait(1).to({x:1245.95},0).wait(1).to({x:1246.1},0).wait(1).to({x:1246.25},0).wait(1).to({x:1246.4},0).wait(1).to({x:1246.55},0).wait(1).to({x:1246.7},0).wait(1).to({x:1246.85},0).wait(1).to({x:1247},0).wait(1).to({x:1247.2},0).wait(1).to({y:1747.65},0).wait(1).to({y:1748.25},0).wait(1).to({y:1748.85},0).wait(1).to({y:1749.45},0).wait(1).to({y:1750.05},0).wait(1).to({y:1750.7},0).wait(1).to({y:1751.3},0).wait(1).to({y:1751.9},0).wait(1).to({y:1752.5},0).wait(1).to({y:1753.1},0).wait(1).to({y:1753.7},0).wait(1).to({y:1754.35},0).wait(1).to({y:1754.95},0).wait(1).to({y:1755.55},0).wait(1).to({y:1756.15},0).wait(1).to({y:1756.75},0).wait(1).to({y:1757.35},0).wait(1).to({y:1758},0).wait(1).to({y:1758.6},0).wait(1).to({y:1759.2},0).wait(1).to({y:1759.8},0).wait(1).to({y:1760.4},0).wait(1).to({y:1761},0).wait(1).to({x:1247.8},0).wait(1).to({x:1248.45},0).wait(1).to({x:1249.1},0).wait(1).to({x:1249.75},0).wait(1).to({x:1250.4},0).wait(1).to({x:1251},0).wait(1).to({x:1251.65},0).wait(1).to({x:1252.3},0).wait(1).to({x:1252.95},0).wait(1).to({x:1253.6},0).wait(1).to({x:1254.2},0).wait(1).to({x:1254.85},0).wait(1).to({x:1255.5},0).wait(1).to({x:1256.15},0).wait(1).to({x:1256.8},0).wait(1).to({x:1257.4},0).wait(1).to({x:1258.05},0).wait(1).to({x:1258.7},0).wait(1).to({x:1259.35},0).wait(1).to({x:1260},0).wait(1).to({x:1260.6},0).wait(1).to({x:1261.25},0).wait(1).to({x:1261.9},0).wait(1).to({x:1262.55},0).wait(1).to({x:1263.2},0).wait(1).to({x:1263.8},0).wait(1).to({x:1264.45},0).wait(1).to({x:1265.1},0).wait(1).to({x:1265.75},0).wait(1).to({x:1266.4},0).wait(1).to({x:1267.15},0).wait(1).to({x:1267.9},0).wait(1).to({x:1268.7},0).wait(1).to({x:1269.45},0).wait(1).to({x:1270.2},0).wait(1).to({x:1271},0).wait(1).to({x:1271.75},0).wait(1).to({x:1272.5},0).wait(1).to({x:1273.3},0).wait(1).to({x:1274.05},0).wait(1).to({x:1274.8},0).wait(1).to({x:1275.6},0).wait(1).to({x:1276.35},0).wait(1).to({x:1277.1},0).wait(1).to({x:1277.9},0).wait(1).to({x:1278.65},0).wait(1).to({x:1279.4},0).wait(1).to({x:1280.2},0).wait(1).to({x:1280.95},0).wait(1).to({x:1281.7},0).wait(1).to({x:1282.5},0).wait(1).to({x:1283.25},0).wait(1).to({x:1284},0).wait(1).to({x:1284.8},0).wait(1).to({y:1760},0).wait(1).to({y:1759},0).wait(1).to({y:1758},0).wait(1).to({y:1757},0).wait(1).to({y:1755.95},0).wait(1).to({y:1754.95},0).wait(1).to({y:1753.95},0).wait(1).to({y:1752.95},0).wait(1).to({y:1751.95},0).wait(1).to({y:1750.9},0).wait(1).to({y:1749.9},0).wait(1).to({y:1748.9},0).wait(1).to({y:1747.9},0).wait(1).to({y:1746.9},0).wait(1).to({y:1745.85},0).wait(1).to({y:1744.85},0).wait(1).to({y:1743.85},0).wait(1).to({y:1742.85},0).wait(1).to({y:1741.8},0).wait(1).to({x:1285.1,y:1741.05},0).wait(1).to({x:1285.45,y:1740.3},0).wait(1).to({x:1285.8,y:1739.55},0).wait(1).to({x:1286.15,y:1738.75},0).wait(1).to({x:1286.45,y:1738},0).wait(1).to({x:1286.8,y:1737.25},0).wait(1).to({x:1287.15,y:1736.5},0).wait(1).to({x:1287.5,y:1735.7},0).wait(1).to({x:1287.8,y:1734.95},0).wait(1).to({x:1288.15,y:1734.2},0).wait(1).to({x:1288.5,y:1733.45},0).wait(1).to({x:1288.85,y:1732.65},0).wait(1).to({x:1289.2,y:1731.9},0).wait(1).to({x:1289.5,y:1731.15},0).wait(1).to({x:1289.85,y:1730.35},0).wait(1).to({x:1290.2,y:1729.6},0).wait(1).to({x:1290.55,y:1728.85},0).wait(1).to({x:1290.85,y:1728.1},0).wait(1).to({x:1291.2,y:1727.3},0).wait(1).to({x:1291.55,y:1726.55},0).wait(1).to({x:1291.9,y:1725.8},0).wait(1).to({x:1292.2,y:1725.05},0).wait(1).to({x:1292.55,y:1724.25},0).wait(1).to({x:1292.9,y:1723.5},0).wait(1).to({x:1293.25,y:1722.75},0).wait(1).to({x:1293.6,y:1721.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_kid2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kid2
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(853.3,1045.7,1,1,0,0,0,679.3,1122.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(552).to({_off:false},0).wait(1).to({x:853.05},0).wait(1).to({x:852.8},0).wait(1).to({x:852.55},0).wait(1).to({x:852.3},0).wait(1).to({x:852.1},0).wait(1).to({x:851.85},0).wait(1).to({x:851.6},0).wait(1).to({x:851.35},0).wait(1).to({x:851.15},0).wait(1).to({x:850.9},0).wait(1).to({x:850.65},0).wait(1).to({x:850.4},0).wait(1).to({x:850.2},0).wait(1).to({x:849.95},0).wait(1).to({x:849.7},0).wait(1).to({x:849.45},0).wait(1).to({x:849.2},0).wait(1).to({x:849},0).wait(1).to({x:848.75},0).wait(1).to({x:848.5},0).wait(1).to({x:848.25},0).wait(1).to({x:848.05},0).wait(1).to({x:847.8},0).wait(1).to({x:847.55},0).wait(1).to({x:847.3},0).wait(1).to({x:847.1},0).wait(1).to({x:846.85},0).wait(1).to({x:846.6},0).wait(1).to({x:846.35},0).wait(1).to({x:846.15},0).wait(1).to({x:845.9},0).wait(1).to({x:845.65},0).wait(1).to({x:845.4},0).wait(1).to({x:845.15},0).wait(1).to({x:844.95},0).wait(1).to({x:844.7},0).wait(1).to({x:844.45},0).wait(1).to({x:844.2},0).wait(1).to({x:844},0).wait(1).to({x:843.75},0).wait(1).to({x:843.5},0).wait(1).to({x:843.25},0).wait(1).to({x:843.05},0).wait(1).to({x:842.8},0).wait(1).to({x:842.55},0).wait(1).to({x:842.3},0).wait(1).to({x:842.1},0).wait(1).to({y:1046.85},0).wait(1).to({y:1048},0).wait(1).to({y:1049.1},0).wait(1).to({y:1050.25},0).wait(1).to({y:1051.4},0).wait(1).to({y:1052.5},0).wait(1).to({y:1053.65},0).wait(1).to({y:1054.8},0).wait(1).to({y:1055.9},0).wait(1).to({y:1057.05},0).wait(1).to({y:1058.2},0).wait(1).to({y:1059.3},0).wait(1).to({y:1060.45},0).wait(1).to({y:1061.6},0).wait(1).to({y:1062.7},0).wait(1).to({y:1063.85},0).wait(1).to({y:1065},0).wait(1).to({y:1066.1},0).wait(1).to({y:1067.25},0).wait(1).to({y:1068.4},0).wait(1).to({y:1069.5},0).wait(1).to({y:1070.65},0).wait(1).to({y:1071.8},0).wait(1).to({y:1072.9},0).wait(1).to({x:840.9},0).wait(1).to({x:839.75},0).wait(1).to({x:838.55},0).wait(1).to({x:837.4},0).wait(1).to({x:836.2},0).wait(1).to({x:835.05},0).wait(1).to({x:833.9},0).wait(1).to({x:832.7},0).wait(1).to({x:831.55},0).wait(1).to({x:830.35},0).wait(1).to({x:829.2},0).wait(1).to({x:828},0).wait(1).to({x:826.85},0).wait(1).to({x:825.7},0).wait(1).to({x:824.5},0).wait(1).to({x:823.35},0).wait(1).to({x:822.15},0).wait(1).to({x:821},0).wait(1).to({x:819.8},0).wait(1).to({x:818.65},0).wait(1).to({x:817.5},0).wait(1).to({x:816.3},0).wait(1).to({x:815.15},0).wait(1).to({x:813.95},0).wait(1).to({x:812.8},0).wait(1).to({x:811.6},0).wait(1).to({x:810.45},0).wait(1).to({x:809.3},0).wait(1).to({y:1071.95},0).wait(1).to({y:1071},0).wait(1).to({y:1070.05},0).wait(1).to({y:1069.1},0).wait(1).to({y:1068.1},0).wait(1).to({y:1067.15},0).wait(1).to({y:1066.2},0).wait(1).to({y:1065.25},0).wait(1).to({y:1064.3},0).wait(1).to({y:1063.3},0).wait(1).to({y:1062.35},0).wait(1).to({y:1061.4},0).wait(1).to({y:1060.45},0).wait(1).to({y:1059.5},0).wait(1).to({y:1058.5},0).wait(1).to({y:1057.55},0).wait(1).to({y:1056.6},0).wait(1).to({y:1055.65},0).wait(1).to({y:1054.7},0).wait(1).to({y:1053.7},0).wait(1).to({y:1052.75},0).wait(1).to({y:1051.8},0).wait(1).to({y:1050.85},0).wait(1).to({y:1049.9},0).wait(1).to({y:1048.9},0).wait(1).to({x:808.05},0).wait(1).to({x:806.85},0).wait(1).to({x:805.6},0).wait(1).to({x:804.4},0).wait(1).to({x:803.15},0).wait(1).to({x:801.95},0).wait(1).to({x:800.75},0).wait(1).to({x:799.5},0).wait(1).to({x:798.3},0).wait(1).to({x:797.05},0).wait(1).to({x:795.85},0).wait(1).to({x:794.6},0).wait(1).to({x:793.4},0).wait(1).to({x:792.2},0).wait(1).to({x:790.95},0).wait(1).to({x:789.75},0).wait(1).to({x:788.5},0).wait(1).to({x:787.3},0).wait(1).to({x:786.1},0).wait(1).to({y:1047.95},0).wait(1).to({y:1047},0).wait(1).to({y:1046.05},0).wait(1).to({y:1045.1},0).wait(1).to({y:1044.1},0).wait(1).to({y:1043.15},0).wait(1).to({y:1042.2},0).wait(1).to({y:1041.25},0).wait(1).to({y:1040.3},0).wait(1).to({y:1039.3},0).wait(1).to({y:1038.35},0).wait(1).to({y:1037.4},0).wait(1).to({y:1036.45},0).wait(1).to({y:1035.5},0).wait(1).to({y:1034.5},0).wait(1).to({y:1033.55},0).wait(1).to({y:1032.6},0).wait(1).to({y:1031.65},0).wait(1).to({y:1030.7},0).wait(1).to({y:1029.7},0).wait(1).to({x:790.75},0).wait(1).to({x:795.4},0).wait(1).to({x:800.1},0).wait(1).to({x:804.75},0).wait(1).to({x:809.4},0).wait(1).to({x:814.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_kid1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// kid1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(309.2,195.8,1,1,0,0,0,187.2,264.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(552).to({_off:false},0).wait(3).to({y:196},0).wait(1).to({y:196.25},0).wait(1).to({y:196.5},0).wait(1).to({y:196.75},0).wait(1).to({y:197},0).wait(1).to({y:197.25},0).wait(1).to({y:197.5},0).wait(1).to({y:197.75},0).wait(1).to({y:197.95},0).wait(1).to({y:198.2},0).wait(1).to({y:198.45},0).wait(1).to({y:198.7},0).wait(1).to({y:198.95},0).wait(1).to({y:199.2},0).wait(1).to({y:199.45},0).wait(1).to({y:199.7},0).wait(1).to({y:199.9},0).wait(1).to({y:200.15},0).wait(1).to({y:200.4},0).wait(1).to({y:200.65},0).wait(1).to({y:200.9},0).wait(1).to({y:201.15},0).wait(1).to({y:201.4},0).wait(1).to({y:201.6},0).wait(1).to({y:201.85},0).wait(1).to({y:202.1},0).wait(1).to({y:202.35},0).wait(1).to({y:202.6},0).wait(1).to({y:202.85},0).wait(1).to({y:203.1},0).wait(1).to({y:203.35},0).wait(1).to({y:203.55},0).wait(1).to({y:203.8},0).wait(1).to({y:204.05},0).wait(1).to({y:204.3},0).wait(1).to({y:204.55},0).wait(1).to({y:204.8},0).wait(1).to({y:205.05},0).wait(1).to({y:205.3},0).wait(1).to({y:205.5},0).wait(1).to({y:205.75},0).wait(1).to({y:206},0).wait(1).to({y:206.25},0).wait(1).to({y:206.5},0).wait(1).to({y:206.75},0).wait(1).to({y:207},0).wait(1).to({x:308.85},0).wait(1).to({x:308.55},0).wait(1).to({x:308.2},0).wait(1).to({x:307.9},0).wait(1).to({x:307.6},0).wait(1).to({x:307.25},0).wait(1).to({x:306.95},0).wait(1).to({x:306.6},0).wait(1).to({x:306.3},0).wait(1).to({x:306},0).wait(1).to({x:305.65},0).wait(1).to({x:305.35},0).wait(1).to({x:305},0).wait(1).to({x:304.7},0).wait(1).to({x:304.4},0).wait(1).to({x:304.05},0).wait(1).to({x:303.75},0).wait(1).to({x:303.4},0).wait(1).to({x:303.1},0).wait(1).to({x:302.8},0).wait(1).to({x:302.45},0).wait(1).to({x:302.15},0).wait(1).to({x:301.8},0).wait(1).to({x:301.5},0).wait(1).to({x:301.2},0).wait(1).to({x:300.4},0).wait(1).to({x:299.65},0).wait(1).to({x:298.9},0).wait(1).to({x:298.15},0).wait(1).to({x:297.35},0).wait(1).to({x:296.6},0).wait(1).to({x:295.85},0).wait(1).to({x:295.1},0).wait(1).to({x:294.3},0).wait(1).to({x:293.55},0).wait(1).to({x:292.8},0).wait(1).to({x:292.05},0).wait(1).to({x:291.25},0).wait(1).to({x:290.5},0).wait(1).to({x:289.75},0).wait(1).to({x:289},0).wait(1).to({x:288.2},0).wait(1).to({x:287.45},0).wait(1).to({x:286.7},0).wait(1).to({x:285.95},0).wait(1).to({x:285.2},0).wait(1).to({y:206.75},0).wait(1).to({y:206.55},0).wait(1).to({y:206.3},0).wait(1).to({y:206.1},0).wait(1).to({y:205.85},0).wait(1).to({y:205.65},0).wait(1).to({y:205.45},0).wait(1).to({y:205.2},0).wait(1).to({y:205},0).wait(1).to({y:204.75},0).wait(1).to({y:204.55},0).wait(1).to({y:204.3},0).wait(1).to({y:204.1},0).wait(1).to({y:203.85},0).wait(1).to({y:203.65},0).wait(1).to({y:203.45},0).wait(1).to({y:203.2},0).wait(1).to({y:203},0).wait(1).to({y:202.75},0).wait(1).to({y:202.55},0).wait(1).to({y:202.3},0).wait(1).to({y:202.1},0).wait(1).to({y:201.85},0).wait(1).to({y:201.65},0).wait(1).to({y:201.45},0).wait(1).to({y:201.2},0).wait(1).to({y:201},0).wait(1).to({y:200.75},0).wait(1).to({y:200.55},0).wait(1).to({y:200.3},0).wait(1).to({y:200.1},0).wait(1).to({y:199.85},0).wait(1).to({y:199.65},0).wait(1).to({y:199.45},0).wait(1).to({y:199.2},0).wait(1).to({y:199},0).wait(1).to({x:285.8},0).wait(1).to({x:286.45},0).wait(1).to({x:287.05},0).wait(1).to({x:287.7},0).wait(1).to({x:288.3},0).wait(1).to({x:288.95},0).wait(1).to({x:289.55},0).wait(1).to({x:290.2},0).wait(1).to({x:290.8},0).wait(1).to({x:291.45},0).wait(1).to({x:292.05},0).wait(1).to({x:292.7},0).wait(1).to({x:293.3},0).wait(1).to({x:293.95},0).wait(1).to({x:294.55},0).wait(1).to({x:295.2},0).wait(1).to({x:295.8},0).wait(1).to({x:296.45},0).wait(1).to({x:297.05},0).wait(1).to({x:297.7},0).wait(1).to({x:298.3},0).wait(1).to({x:298.95},0).wait(1).to({x:299.6},0).wait(1).to({x:300.75},0).wait(1).to({x:301.9},0).wait(1).to({x:303.05},0).wait(1).to({x:304.2},0).wait(1).to({x:305.35},0).wait(1).to({x:306.5},0).wait(1).to({x:307.6},0).wait(1).to({x:308.8},0).wait(1).to({x:309.95},0).wait(1).to({x:311.1},0).wait(1).to({x:312.25},0).wait(1).to({x:313.4},0).wait(1).to({x:314.55},0).wait(1).to({x:315.65},0).wait(1).to({x:316.85},0).wait(1).to({x:318},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn
	this.playbtn = new lib.Symbol9();
	this.playbtn.name = "playbtn";
	this.playbtn.parent = this;
	this.playbtn.setTransform(271.8,225.8);
	new cjs.ButtonHelper(this.playbtn, 0, 1, 1);

	this.instance = new lib.CachedTexturedBitmap_10();
	this.instance.parent = this;
	this.instance.setTransform(169.2,128.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.playbtn}]}).to({state:[]},1).wait(722));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bluebackround = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bluebackround
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(458.3,70.3,1.5261,1.5261,0,0,0,99.8,70.5);

	this.instance_1 = new lib.CachedTexturedBitmap_12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27.6,-156.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},408).to({state:[{t:this.instance_1}]},144).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_beach_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// beach_
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(495.85,52.45,0.8124,0.8124,0,0,0,99.9,70.5);

	this.instance_1 = new lib.beachbackround();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-11,-39,0.2377,0.1485);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},552).to({state:[{t:this.instance_1},{t:this.instance}]},169).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.rain_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275.35,365.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:537.25},23).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.rain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_23 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.rain_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(275.5,365.3,1,1,0,0,0,275.5,365.3);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,551,902.6);


(lib.Scene_1_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl
	this.instance = new lib.rain();
	this.instance.parent = this;
	this.instance.setTransform(261.4,39.7,1,1,0,0,0,275.4,365.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},118).wait(50));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.summer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.playbtn = this.btn.playbtn;
		var self = this;
		self.stop();
		
		self.playbtn.addEventListener("click",playFuc);
		
		function playFuc()  {
		self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.playbtn = undefined;
	}
	this.frame_722 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(721).call(this.frame_722).wait(1));

	// btn_obj_
	this.btn = new lib.Scene_1_btn();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(540,363.7,1,1,0,0,0,540,363.7);
	this.btn.depth = 0;
	this.btn.isAttachedToCamera = 0
	this.btn.isAttachedToMask = 0
	this.btn.layerDepth = 0
	this.btn.layerIndex = 0
	this.btn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(723));

	// Layer_15_obj_
	this.Layer_15 = new lib.Scene_1_Layer_15();
	this.Layer_15.name = "Layer_15";
	this.Layer_15.parent = this;
	this.Layer_15.depth = 0;
	this.Layer_15.isAttachedToCamera = 0
	this.Layer_15.isAttachedToMask = 0
	this.Layer_15.layerDepth = 0
	this.Layer_15.layerIndex = 1
	this.Layer_15.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_15).wait(553).to({regX:39.4,regY:304.5,x:39.4,y:304.5},0).wait(168).to({_off:true},1).wait(1));

	// kid3_obj_
	this.kid3 = new lib.Scene_1_kid3();
	this.kid3.name = "kid3";
	this.kid3.parent = this;
	this.kid3.depth = 0;
	this.kid3.isAttachedToCamera = 0
	this.kid3.isAttachedToMask = 0
	this.kid3.layerDepth = 0
	this.kid3.layerIndex = 2
	this.kid3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.kid3).wait(553).to({regX:1266.8,regY:1741.5,x:1266.8,y:1741.5},0).wait(168).to({_off:true},1).wait(1));

	// kid2_obj_
	this.kid2 = new lib.Scene_1_kid2();
	this.kid2.name = "kid2";
	this.kid2.parent = this;
	this.kid2.depth = 0;
	this.kid2.isAttachedToCamera = 0
	this.kid2.isAttachedToMask = 0
	this.kid2.layerDepth = 0
	this.kid2.layerIndex = 3
	this.kid2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.kid2).wait(553).to({regX:819.7,regY:1051.3,x:819.7,y:1051.3},0).wait(168).to({_off:true},1).wait(1));

	// kid1_obj_
	this.kid1 = new lib.Scene_1_kid1();
	this.kid1.name = "kid1";
	this.kid1.parent = this;
	this.kid1.depth = 0;
	this.kid1.isAttachedToCamera = 0
	this.kid1.isAttachedToMask = 0
	this.kid1.layerDepth = 0
	this.kid1.layerIndex = 4
	this.kid1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.kid1).wait(553).to({regX:301.6,regY:201.4,x:301.6,y:201.4},0).wait(2).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:301.6,regY:201.4,x:301.6,y:201.4},0).wait(166).to({regX:0,regY:0,x:0,y:0},0).wait(1));

	// beach__obj_
	this.beach_ = new lib.Scene_1_beach_();
	this.beach_.name = "beach_";
	this.beach_.parent = this;
	this.beach_.depth = 0;
	this.beach_.isAttachedToCamera = 0
	this.beach_.isAttachedToMask = 0
	this.beach_.layerDepth = 0
	this.beach_.layerIndex = 5
	this.beach_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.beach_).wait(721).to({_off:true},1).wait(1));

	// walk2beach2_obj_
	this.walk2beach2 = new lib.Scene_1_walk2beach2();
	this.walk2beach2.name = "walk2beach2";
	this.walk2beach2.parent = this;
	this.walk2beach2.depth = 0;
	this.walk2beach2.isAttachedToCamera = 0
	this.walk2beach2.isAttachedToMask = 0
	this.walk2beach2.layerDepth = 0
	this.walk2beach2.layerIndex = 6
	this.walk2beach2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.walk2beach2).wait(482).to({regX:265.6,regY:289,x:265.6,y:289},0).wait(70).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},2).wait(169));

	// walktobeach1_obj_
	this.walktobeach1 = new lib.Scene_1_walktobeach1();
	this.walktobeach1.name = "walktobeach1";
	this.walktobeach1.parent = this;
	this.walktobeach1.depth = 0;
	this.walktobeach1.isAttachedToCamera = 0
	this.walktobeach1.isAttachedToMask = 0
	this.walktobeach1.layerDepth = 0
	this.walktobeach1.layerIndex = 7
	this.walktobeach1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.walktobeach1).wait(409).to({regX:265.6,regY:289,x:265.6,y:289},0).wait(71).to({_off:true},1).wait(242));

	// bluebackround_obj_
	this.bluebackround = new lib.Scene_1_bluebackround();
	this.bluebackround.name = "bluebackround";
	this.bluebackround.parent = this;
	this.bluebackround.depth = 0;
	this.bluebackround.isAttachedToCamera = 0
	this.bluebackround.isAttachedToMask = 0
	this.bluebackround.layerDepth = 0
	this.bluebackround.layerIndex = 8
	this.bluebackround.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bluebackround).wait(552).to({_off:true},1).wait(170));

	// windowsummer_obj_
	this.windowsummer = new lib.Scene_1_windowsummer();
	this.windowsummer.name = "windowsummer";
	this.windowsummer.parent = this;
	this.windowsummer.depth = 0;
	this.windowsummer.isAttachedToCamera = 0
	this.windowsummer.isAttachedToMask = 0
	this.windowsummer.layerDepth = 0
	this.windowsummer.layerIndex = 9
	this.windowsummer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.windowsummer).wait(360).to({_off:true},48).wait(315));

	// after120days_obj_
	this.after120days = new lib.Scene_1_after120days();
	this.after120days.name = "after120days";
	this.after120days.parent = this;
	this.after120days.depth = 0;
	this.after120days.isAttachedToCamera = 0
	this.after120days.isAttachedToMask = 0
	this.after120days.layerDepth = 0
	this.after120days.layerIndex = 10
	this.after120days.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.after120days).wait(312).to({_off:true},48).wait(363));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 11
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(312).to({_off:true},48).wait(363));

	// sun2_obj_
	this.sun2 = new lib.Scene_1_sun2();
	this.sun2.name = "sun2";
	this.sun2.parent = this;
	this.sun2.depth = 0;
	this.sun2.isAttachedToCamera = 0
	this.sun2.isAttachedToMask = 0
	this.sun2.layerDepth = 0
	this.sun2.layerIndex = 12
	this.sun2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun2).wait(266).to({regX:193.8,regY:196.3,x:193.8,y:196.3},0).wait(45).to({_off:true},1).wait(411));

	// sun1_obj_
	this.sun1 = new lib.Scene_1_sun1();
	this.sun1.name = "sun1";
	this.sun1.parent = this;
	this.sun1.depth = 0;
	this.sun1.isAttachedToCamera = 0
	this.sun1.isAttachedToMask = 0
	this.sun1.layerDepth = 0
	this.sun1.layerIndex = 13
	this.sun1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun1).wait(168).to({regX:193.8,regY:196.3,x:193.8,y:196.3},0).wait(47).to({_off:true},1).wait(507));

	// moon2_obj_
	this.moon2 = new lib.Scene_1_moon2();
	this.moon2.name = "moon2";
	this.moon2.parent = this;
	this.moon2.depth = 0;
	this.moon2.isAttachedToCamera = 0
	this.moon2.isAttachedToMask = 0
	this.moon2.layerDepth = 0
	this.moon2.layerIndex = 14
	this.moon2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.moon2).wait(217).to({regX:336.1,regY:216.4,x:336.1,y:216.4},0).wait(47).to({_off:true},1).wait(458));

	// moon1_obj_
	this.moon1 = new lib.Scene_1_moon1();
	this.moon1.name = "moon1";
	this.moon1.parent = this;
	this.moon1.depth = 0;
	this.moon1.isAttachedToCamera = 0
	this.moon1.isAttachedToMask = 0
	this.moon1.layerDepth = 0
	this.moon1.layerIndex = 15
	this.moon1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.moon1).wait(120).to({regX:336.1,regY:216.4,x:336.1,y:216.4},0).wait(46).to({_off:true},1).wait(556));

	// window_obj_
	this.window = new lib.Scene_1_window();
	this.window.name = "window";
	this.window.parent = this;
	this.window.depth = 0;
	this.window.isAttachedToCamera = 0
	this.window.isAttachedToMask = 0
	this.window.layerDepth = 0
	this.window.layerIndex = 16
	this.window.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.window).wait(311).to({_off:true},1).wait(411));

	// rain_obj_
	this.rain = new lib.Scene_1_rain();
	this.rain.name = "rain";
	this.rain.parent = this;
	this.rain.depth = 0;
	this.rain.isAttachedToCamera = 0
	this.rain.isAttachedToMask = 0
	this.rain.layerDepth = 0
	this.rain.layerIndex = 17
	this.rain.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.rain).wait(119).to({_off:true},50).wait(554));

	// girl_obj_
	this.girl = new lib.Scene_1_girl();
	this.girl.name = "girl";
	this.girl.parent = this;
	this.girl.depth = 0;
	this.girl.isAttachedToCamera = 0
	this.girl.isAttachedToMask = 0
	this.girl.layerDepth = 0
	this.girl.layerIndex = 18
	this.girl.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(119).to({_off:true},50).wait(554));

	// Layer_9_obj_
	this.Layer_9 = new lib.Scene_1_Layer_9();
	this.Layer_9.name = "Layer_9";
	this.Layer_9.parent = this;
	this.Layer_9.depth = 0;
	this.Layer_9.isAttachedToCamera = 0
	this.Layer_9.isAttachedToMask = 0
	this.Layer_9.layerDepth = 0
	this.Layer_9.layerIndex = 19
	this.Layer_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(1).to({_off:true},118).wait(604));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-125.5,2533.6,3647.5);
// library properties:
lib.properties = {
	id: '3BC39C08E54DDB4292DC0B7FAD459395',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/after120days.png", id:"after120days"},
		{src:"images/beachbackround.png", id:"beachbackround"},
		{src:"images/kid2.png", id:"kid2"},
		{src:"images/kid3.png", id:"kid3"},
		{src:"images/kid3pngcopy.png", id:"kid3pngcopy"},
		{src:"images/kid3pngcopy3.png", id:"kid3pngcopy3"},
		{src:"images/kid4.png", id:"kid4"},
		{src:"images/moon.png", id:"moon"},
		{src:"images/sun.png", id:"sun"},
		{src:"images/ילדהבים1.png", id:"ילדהבים1"},
		{src:"images/summer_atlas_.png", id:"summer_atlas_"},
		{src:"images/summer_atlas_2.png", id:"summer_atlas_2"},
		{src:"images/summer_atlas_3.png", id:"summer_atlas_3"},
		{src:"images/summer_atlas_4.png", id:"summer_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3BC39C08E54DDB4292DC0B7FAD459395'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;