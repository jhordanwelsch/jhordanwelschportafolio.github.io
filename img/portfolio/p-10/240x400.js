(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// rainbow
	this.instance = new lib.mc_rainbow();
	this.instance.setTransform(120.1,4,0.378,0.188,0,0,0,317.4,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(570));

	// inscribete
	this.instance_1 = new lib.mc_inscribete();
	this.instance_1.setTransform(120,292.2,0.088,0.088);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(408).to({_off:false},0).to({scaleX:0.38,scaleY:0.38,y:293.3,alpha:1},10).to({scaleX:0.3,scaleY:0.3},3).wait(21).to({scaleX:0.36,scaleY:0.36},6).to({scaleX:0.3,scaleY:0.3},6).wait(21).to({scaleX:0.36,scaleY:0.36},6).to({scaleX:0.3,scaleY:0.3},6).wait(21).to({scaleX:0.36,scaleY:0.36},6).to({scaleX:0.3,scaleY:0.3},6).wait(50));

	// mientras
	this.instance_2 = new lib.mc_mientras();
	this.instance_2.setTransform(188,245.3,1.031,1.031);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(390).to({_off:false},0).to({y:136.6,alpha:1},18).wait(162));

	// otros logos
	this.instance_3 = new lib.mc_otroslogos();
	this.instance_3.setTransform(120,434.4,0.139,0.139);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(379).to({_off:false},0).to({y:373.7,alpha:1},11).wait(180));

	// logo bbva
	this.instance_4 = new lib.mc_logo();
	this.instance_4.setTransform(-61.9,23.2,1.121,1.121,0,0,0,50,4.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(369).to({_off:false},0).to({x:65.2,alpha:1},10).wait(191));

	// tarjetas
	this.instance_5 = new lib.mc_tarjetas();
	this.instance_5.setTransform(-157.4,231.7,0.57,0.57);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(273).to({_off:false},0).to({x:66.8,alpha:1},21).wait(65).to({alpha:0},10).to({_off:true},1).wait(200));

	// contu
	this.instance_6 = new lib.mc_contu();
	this.instance_6.setTransform(359.4,128,0.845,0.845);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(254).to({_off:false},0).to({x:117.6,alpha:1},19).wait(86).to({alpha:0},10).to({_off:true},1).wait(200));

	// yen
	this.instance_7 = new lib.mc_yen();
	this.instance_7.setTransform(352.5,370.8,1.317,1.317);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(154).to({_off:false},0).to({x:115.7},20).wait(70).to({alpha:0},10).to({_off:true},1).wait(315));

	// icon4
	this.instance_8 = new lib.mc_icon4();
	this.instance_8.setTransform(275.2,271.9,0.849,0.849);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(145).to({_off:false},0).to({x:161.8,alpha:1},9).wait(90).to({alpha:0},10).to({_off:true},1).wait(315));

	// icon3
	this.instance_9 = new lib.mc_icon3();
	this.instance_9.setTransform(-46.8,276.1,0.849,0.849);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(136).to({_off:false},0).to({x:69.6,alpha:1},9).wait(99).to({alpha:0},10).to({_off:true},1).wait(315));

	// icon2
	this.instance_10 = new lib.mc_icon2();
	this.instance_10.setTransform(279.2,167.7,0.849,0.849);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(127).to({_off:false},0).to({x:171.9,alpha:1},9).wait(108).to({alpha:0},10).to({_off:true},1).wait(315));

	// icon1
	this.instance_11 = new lib.mc_icon1();
	this.instance_11.setTransform(-44.2,167.9,0.849,0.849);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(118).to({_off:false},0).to({x:69.6,alpha:1},9).wait(117).to({alpha:0},10).to({_off:true},1).wait(315));

	// comprando
	this.instance_12 = new lib.mc_comprando();
	this.instance_12.setTransform(120,-68.8,0.898,0.898);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(109).to({_off:false},0).to({y:56.2,alpha:1},9).wait(126).to({alpha:0},10).to({_off:true},1).wait(315));

	// puntaiz
	this.instance_13 = new lib.mc_puntaizq();
	this.instance_13.setTransform(55.9,213.1,0.681,0.681,31.7,0,0,21.9,12.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(17).to({_off:false},0).to({regY:12,x:68.1,y:237.6,alpha:1},20).to({regX:22,regY:11.9,x:96.8,y:233.5},27).wait(35).to({alpha:0},10).to({_off:true},1).wait(460));

	// puntader
	this.instance_14 = new lib.mc_puntader();
	this.instance_14.setTransform(104.3,372,0.681,0.681,31.7,0,0,-16,-25.3);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(17).to({_off:false},0).to({x:100.4,y:344.8,alpha:1},20).to({regY:-25.4,x:129.1,y:340.5},27).wait(35).to({alpha:0},10).to({_off:true},1).wait(460));

	// nariz
	this.instance_15 = new lib.mc_nariz();
	this.instance_15.setTransform(110,279.7,0.681,0.681,31.7,0,0,-25.4,30.3);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({_off:false},0).to({regY:30.4,x:130,y:276.9,alpha:1},20).wait(3).to({x:158.6,y:272.7},27).wait(35).to({alpha:0},10).to({_off:true},1).wait(460));

	// cola
	this.instance_16 = new lib.mc_cola();
	this.instance_16.setTransform(5.6,307.2,0.681,0.681,31.7,0,0,24.7,-23.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(14).to({_off:false},0).to({regX:24.8,x:44.2,y:301.6,alpha:1},20).wait(3).to({regY:-23.9,x:72.8,y:297.5},27).wait(35).to({alpha:0},10).to({_off:true},1).wait(460));

	// ala der
	this.instance_17 = new lib.mc_alader();
	this.instance_17.setTransform(110.9,313.7,0.681,0.681,31.7,0,0,-28.3,-49.8);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(14).to({_off:false},0).to({regX:-28.4,regY:-49.8,x:108.3,y:295.7,alpha:1},20).wait(3).to({regX:-28.2,x:137,y:291.6},27).wait(35).to({alpha:0},10).to({_off:true},1).wait(460));

	// cuerpo
	this.instance_18 = new lib.mc_cuerpo();
	this.instance_18.setTransform(58.8,288.4,0.681,0.681,31.7);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({_off:false},0).to({x:91.6,y:283.7,alpha:1},20).wait(3).to({x:120.2,y:279.5},27).wait(35).to({alpha:0},10).to({_off:true},1).wait(460));

	// ala izq
	this.instance_19 = new lib.mc_alaizq();
	this.instance_19.setTransform(102.5,263.8,0.681,0.681,31.7,0,0,20.5,22.9);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(14).to({_off:false},0).to({x:105.1,y:281.7,alpha:1},20).wait(3).to({regX:20.4,x:133.6,y:277.5},27).wait(35).to({alpha:0},10).to({_off:true},1).wait(460));

	// date
	this.instance_20 = new lib.mc_date();
	this.instance_20.setTransform(196.4,112.6,1.171,1.171);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:71.6,alpha:1},14).wait(85).to({alpha:0},10).to({_off:true},1).wait(460));

	// fondo1
	this.instance_21 = new lib.img_fondomin();
	this.instance_21.setTransform(0,-425.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).wait(570));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-425.9,300,1050);


// symbols:
(lib.icon1min = function() {
	this.initialize(img.icon1min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,78);


(lib.icon2min = function() {
	this.initialize(img.icon2min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,78);


(lib.icon3min = function() {
	this.initialize(img.icon3min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,78);


(lib.icon4min = function() {
	this.initialize(img.icon4min);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,78);


(lib.img_aladerechamin = function() {
	this.initialize(img.img_aladerechamin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,74);


(lib.img_alaizquierdamin = function() {
	this.initialize(img.img_alaizquierdamin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,55);


(lib.img_colamin = function() {
	this.initialize(img.img_colamin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,62);


(lib.img_cuerpomin = function() {
	this.initialize(img.img_cuerpomin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,141);


(lib.img_fondomin = function() {
	this.initialize(img.img_fondomin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,1050);


(lib.img_narizmin = function() {
	this.initialize(img.img_narizmin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,82);


(lib.img_puntaderechamin = function() {
	this.initialize(img.img_puntaderechamin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,63);


(lib.img_puntaizquierdamin = function() {
	this.initialize(img.img_puntaizquierdamin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,33);


(lib.img_tarjetasmin = function() {
	this.initialize(img.img_tarjetasmin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,202);


(lib.mc_yen = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6206D").s().p("AAAA6QgIgDgIgEIAAgVIAIAAQAFAFAFADQAGAEALAAQAKgBAGgEQAFgDAAgHQAAgGgDgDQgEgEgFgCIgOgDQgKgEgFgEQgHgDgEgGQgDgHAAgKQAAgLAFgIQAGgHAHgEQAJgFAMAAQALAAAIACQAJADAGAEIAAASIgJAAQgEgDgGgCQgGgCgIgBQgJABgFADQgGADAAAIQABAEACADQADADAEACIANAEQAMADAJAEQAHADAEAHQAEAGAAALQAAARgLAKQgMAKgVAAQgNAAgHgDgAhnA4QgLgEgIgHQgIgIgFgLQgEgMAAgOQAAgNAEgMQAFgLAIgIQAIgHALgEQAKgFALAAQAMAAAKAFQAKAEAIAHQAIAIAEALQAFAMAAANQAAAOgFAMQgEALgIAIQgIAHgKAEQgKAFgMAAQgLAAgKgFgAhigkQgGAFgEAJQgEAJAAANQAAAPAEAJQAEAJAGAEQAHAFAJAAQAJAAAHgFQAGgEAEgJQAEgJAAgPQAAgNgEgJQgEgJgGgFQgHgFgJAAQgJAAgHAFgAl8A2QgNgIgGgNQgHgNAAgUQAAgSAHgOQAHgNANgHQANgHAUgBIAMABIALACIALAFIAAAUIgJAAIgGgEIgIgDIgLgBQgQAAgIAJQgIAKAAAVQAAAVAHAKQAHALAOAAIAKAAIAHgCIAAgaIgRAAIAAgPIArAAIAAA1QgJAEgLACQgKADgNAAQgSgBgMgGgAGOA6IgCgEIACgDIADgDIAFADQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAgBAAAAgAF5A6IgBgEIABgDIAFgDIADADQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAFlA6IgBgEIABgDIAFgDIADADQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAgAExA5IgJgEIAAgGIADAAIAIAFQAFACAHAAQAKAAAGgEQAEgEAAgIQABgGgEgDQgFgEgLgBQgKgBgHgFQgGgEAAgKQAAgHAHgFQAGgFALAAIAOACIAIAEIAAAGIgDAAIgHgFIgLgBQgJAAgFADQgEADgBAFQABAGAEADQAFAEAJABQAIABAGACQAFACADAEQACAEAAAHQAAAKgGAGQgHAFgNABQgKgBgFgCgADuA5QgGgCgDgFQgCgEAAgIQAAgHADgEQAEgFAGgDQAHgCAJAAIAKABIAJABIAAgNQAAgGgFgEQgFgEgIABQgIAAgFABQgGACgDAEIgEAAIAAgHIALgEIAPgCQALAAAHAFQAHAFAAAJIAAA1IgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgFIAAgDQgFAFgFACQgGADgJABQgHAAgFgDgAD1AYQgGABgCAEQgDADgBAGQABAIAEAFQAFADAIAAQAJAAAFgDQAGgDAEgFIAAgSIgJgCIgKgBQgGAAgFACgADOA7IAAg2QAAgGgEgDQgDgDgGAAQgJAAgGADQgHAEgFADIAAA4IgHAAIAAg2QAAgGgDgDQgFgDgFAAQgIAAgHADQgGAEgGADIAAA4IgHAAIAAhHIADAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAFIAAAEIAIgGIAKgEIALgCQAGAAAFADQAFADACAHQAFgGAHgDQAIgDAJgBQAFAAAEACQAEACADADQACAEAAAFIAAA4gAirA7IgagvIgPAAIAAAvIgaAAIAAh1IAnAAQAXAAALAJQAMAIAAASQAAAMgFAIQgFAGgJAFIAZAsIAAAHgAjUgEIANAAQAKAAAFgEQAFgFgBgJQABgIgFgFQgFgEgKAAIgNAAgAkfA7IAAh1IAbAAIAAB1gAD/gTIAAgDIAKgPIAIAAIAAADIgOAPg");
	this.shape.setTransform(43.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6206D").s().p("AlnA8IAAgCIALgaIgdhAIAAgCIAHAAIAaA6IAZg6IAGAAIAAACIgoBcgAAsAkQgFgBgCgFQgDgEAAgHIAAg1IAHAAIAAA0QAAAGACADQACADADABIAHABQAIAAAIgDQAHgEAGgEIAAg3IAHAAIAABHIgDAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgCAAgFIAAgCQgGAEgIAEQgIADgIAAQgGAAgEgCgAFQAkIgIgFIAAgGIACAAIAIAFQAFACAIAAQAKAAAFgEQAFgEAAgHQAAgHgEgDQgFgDgLgCQgKgBgGgDQgHgEAAgJQAAgKAHgFQAHgFALAAIANACIAIAEIAAAGIgDAAIgHgEIgLgCQgJAAgFADQgEAEAAAGQAAAGAEAEQAFADAKABQAIABAFABQAFACADAEQADAEAAAGQAAAKgHAGQgGAGgOAAQgJAAgGgCgAELAhQgIgEgEgIQgEgJAAgLQAAgKAEgIQAEgIAIgFQAIgEAKgBQAKABAIAEQAHAFAEAIQAFAIAAAKQAAALgFAJQgEAIgHAEQgIAFgKAAQgKAAgIgFgAEJgVQgHAJAAANQAAAPAHAIQAHAIANAAQAMAAAHgIQAIgIAAgPQAAgNgIgJQgHgIgMAAQgNAAgHAIgAB6AhQgHgEgEgJQgFgIAAgLQAAgKAFgIQAEgJAIgEQAIgEAKgBQAJABAFACQAGACADACIAAAGIgEAAQgCgDgFgCQgEgCgIAAQgIAAgHAEQgGAEgDAHQgDAHAAAIQAAAPAHAIQAHAIANAAQAIAAAFgDQAFgCADgDIADAAIAAAFIgFAEIgIADQgFACgGAAQgLAAgIgFgAkAAhQgIgEgEgIQgEgJAAgLQAAgKAFgIQAEgIAHgFQAHgEAKgBQAJAAAGAEQAHAEAEAHQAEAIAAAMIAAAAIAAABIg3AAQAAAPAHAIQAHAIANAAQAJAAAFgCQAGgCADgDIADAAIAAAFQgEADgGACQgHADgJAAQgLAAgIgFgAjYgCQgBgPgGgGQgGgGgKAAQgLAAgGAHQgHAGgBAOIAwAAIAAAAgADmAlIAAgzQAAgGgCgDQgCgDgDgBQgEgCgEAAQgFAAgFACIgKAFIgJAGIAAA1IgHAAIAAhgIACAAIAEABIABAGIAAAeQAGgFAIgEQAIgDAKgBQAFAAAEACQAFACACAEQADAEAAAIIAAA0gAAIAlIAAg0QAAgIgDgDQgEgDgEAAQgIABgHADQgGADgGAFIAAA2IgHAAIAAg0QAAgIgDgDQgEgDgGAAQgIABgGADQgHADgGAFIAAA2IgHAAIAAhHIAEAAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABIAAAGIAAADIAIgFIAKgFIALgCQAHAAAEADQAFADACAHQAFgFAIgEQAHgDAJgBQADAAAEACQAEACADAEQACAEAAAGIAAA2gAiQAlIAAgzQAAgGgCgDQgCgDgDgBQgDgCgEAAQgGAAgFACIgKAFIgJAGIAAA1IgHAAIAAhHIAEAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIAAAGIAAAEQAHgFAIgEQAIgDAJgBQAGAAAEACQAEACADAEQACAEAAAIIAAA0g");
	this.shape_1.setTransform(-39.6,2.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.4,-6,161.6,14.4);


(lib.mc_tarjetas = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_tarjetasmin();
	this.instance.setTransform(-101.4,-67.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-67.9,390,202);


(lib.mc_rainbow = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8E5F8").s().p("AoQDUIAAmnIQgAAIAAGng");
	this.shape.setTransform(581.8,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8ED1F2").s().p("AoPDUIAAmnIQfAAIAAGng");
	this.shape_1.setTransform(476,21.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5DBEEC").s().p("AoPDUIAAmnIQfAAIAAGng");
	this.shape_2.setTransform(370.2,21.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#399FD8").s().p("AoPDUIAAmnIQfAAIAAGng");
	this.shape_3.setTransform(264.4,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3374B9").s().p("AoQDUIAAmnIQhAAIAAGng");
	this.shape_4.setTransform(158.7,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2C5AA3").s().p("AoPDUIAAmnIQfAAIAAGng");
	this.shape_5.setTransform(52.9,21.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,634.7,42.6);


(lib.mc_puntaizq = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_puntaizquierdamin();
	this.instance.setTransform(-21.9,-11.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.9,-11.9,55,33);


(lib.mc_puntader = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_puntaderechamin();
	this.instance.setTransform(-15.9,-25.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.9,-25.4,44,63);


(lib.mc_otroslogos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#56575A").s().p("AZvGHIAAgdQAAguAQgNQARgOAwAJQAxAKAjAAQAyAAAXgPQAXgPAAgeQAAgdgkgQIhbgfQiIgtAAh+QAAhWA+gtQA5gqBpAAQAqAAArAHQAoAHAYAJIAAAiQAAAtgPANQgQAOgygJIAAABQgjgGgZAAQgsAAgUANQgTAMgBAZQABAXAWAOQASALA9ASQBLAWAlAiQA0AuAABOQAABYg+AxQg8AwhmAAQhzAAhJghgARxFUQhGhMAAiLQAAh/BFhSQBLhYCCAAQCCAABABSQA1BFAABzQAAAcgEAbIlkAAQACBMAfAmQAlAqBPAAQAvAAAsgJIAAAAQAxgJAQAOQAPANAAAuIAAAfQhTAhhjAAQiYAAhNhUgATzgbQgdAcgGA4IDJAAIAAgGQAAgtgWgdQgagigsAAQguAAgcAegAtYFUQhHhMAAiLQAAh/BGhSQBLhYCBAAQCCAABABSQA1BFAABzQAAAggEAXIljAAQABBMAgAmQAkAqBQAAQAvAAArgJIAAAAQAxgJARAOQAPANAAAuIAAAfQhUAhhjAAQiYAAhMhUgArXgbQgdAcgFA4IDJAAIAAgGQgBgtgWgdQgZgigtAAQgtAAgdAegEggIAGeIAAAAIgCAAIAArcIChAAIAAJaIEUAAIgeAtQghAygbARQgfASg1AAgANEGeIAAsgICdAAIAAMggAIqGeIAApBICfAAIAAJBgAE5GeIhCn3IiEH3IiNAAIiEn3IhCH3IiQAAIBgrcICCAAQAmACATAPQARAPALAkIBkGFIBmmFQALgkARgPQATgPAmgCICCAAIBgLcgAzRGeIAAm/IhaAAIAAiBIBaAAIAAg7QgBhbA2gvQA0gsBfAAQA4AAA8ARIAAByIgigHQgVgEgUAAQgsAAgTATQgTATAAAsIAAAmIDJAAIgdAtQghAxgcARQgeATg2AAIgbAAIAAG/gA4bGeIAApBICgAAIAAJBgA4PkMQgbgaAAgmQAAgmAbgaQAbgbApAAQApAAAbAbQAbAaAAAmQAAAmgbAaQgcAcgoAAQgoAAgcgcg");
	this.shape.setTransform(-316.7,-40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2002E").s().p("Ay2LtQkFhNAAhvQAAhuEFhOQEEhOFwAAQFxAAEDBOQEEBOAABuQAABvkEBNQkDBOlxAAQlwAAkEhOgAF+F7QiCgnAAg3QAAg3CCgoQCDgnC4AAQC5AACDAnQCDAoAAA3QAAA3iDAnQiDAni5AAQi4AAiDgngASWC/QgygPAAgVQAAgWAygPQAzgPBHAAQBIAAAxAPQAzAPAAAWQAAAVgzAPQgxAPhIAAQhHAAgzgPgATLqfQgbgaAAgmQAAgmAbgaQAcgbApAAQAoAAAbAbQAbAaAAAmQAAAlgbAbQgbAbgoAAQgpAAgcgbg");
	this.shape_1.setTransform(-382.2,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E11320").s().p("ABoBYQhEgWhOgxQhmg7gagMQhMgjhTgFQg6gEgJgUIGXAAQC1CpDNA/QgfAFgpAAQh7AAhigfg");
	this.shape_2.setTransform(474.1,-2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E11320").s().p("ADxF2QkGgTh9iMQhph2AIi1QAFh6A3hgQAcgxAagXQApC8BcC/QBmDQCLCig");
	this.shape_3.setTransform(440.7,-62.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E11320").s().p("ABAAwIhjAAQgtgrg3g8QCJAKBBAfQA2AYAPAuQgUgIg0AAg");
	this.shape_4.setTransform(478.9,-19.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E11320").s().p("ABiESIAAk4QAAg4gRgaQgRgaglAAQg4AAhFA0IAAFwIiRAAIAAoXIA3AAQA/AAASAyIABACQAughAsgQQAqgPAuAAQBHAAAuArQA3A0AABkIAAFgg");
	this.shape_5.setTransform(267,-39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E11320").s().p("Ai5DnQgygxAAhNQAAhSA7gsQA7gvBsgDIBVgDIAAgIQAAhShfAAQhBAAhFApIgyheQBdg+B3AAQBtAAA1AxQA1AwAABkIAAD0QAABCAMAoIhUAAQgaAAgOgKQgMgJgIgYQhAA3hVAAQhPAAgxgxgAAHAeQg5ACgXAVQgQAPAAAbQAAAfAVASQAVARAlAAQAyABAkgeIAAhog");
	this.shape_6.setTransform(370.5,-38.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E11320").s().p("Ai6DnQgxgxAAhNQAAhSA7gsQA7gvBrgDIBWgDIAAgIQAAgugggVQgYgPgnAAQhCAAhEApIgxheQBcg+B3AAQBsAAA1AxQA2AwAABkIAAD0QAABBAMApIhUAAQgaAAgNgKQgNgJgJgYQg/A3hVAAQhPAAgygxgAAHAeQg5ACgXAVQgQAPAAAbQAAAfAVASQAVARAlAAQAyABAkgeIAAhog");
	this.shape_7.setTransform(210.4,-38.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E11320").s().p("AAAEMQgcAAgUgPQgSgOgMgeIjEncICTAAIB/FaICBlaICSAAIjgIXg");
	this.shape_8.setTransform(133,-38.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E11320").s().p("ADAF1IhIi3Ij6AAIhEC3IiUAAIEhrpIBpAAIErLpgAgYhbIg8CfICdAAIg4idQgOgqgGgbQgFAUgQAvg");
	this.shape_9.setTransform(81.3,-49.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E11320").s().p("AihDFQggglgRgyQgSgxAAg6QAAg5AVg1QAUg0AngnQAmgnA0gVQAzgVA4AAQBVAABHAnIgFB5Qg7gthMAAQhBAAgnAuQgqAugBBGQAAA/AiAtQAmA1BJABQA9gBBCgmIAnBnQghAXgxAPQg5ASg3AAQh7AAhJhTg");
	this.shape_10.setTransform(320.8,-38.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E11320").s().p("Ag6A5QgYgXAAgiQAAggAYgZQAZgXAhAAQAjAAAXAXQAZAYAAAhQAAAhgZAYQgYAYgiAAQgiAAgYgYg");
	this.shape_11.setTransform(172.3,-79.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E11320").s().p("AhHEMIAAoXICPAAIAAIXg");
	this.shape_12.setTransform(172.2,-38.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#21201E").s().p("AA7BYIgBgBQgGgFAAglQgBgUgIgHQgHgHgYAAIhGAAIAABNIgTAAIAAivIBZAAQA9AAAAAxQAAAMgGALQgIAMgOAEQAZAKABAbQAAAlAEAIIADAFgAg6gEIBEAAQAtAAAAgjQAAgfgqAAIhHAAg");
	this.shape_13.setTransform(445.8,78.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#21201E").s().p("AhGBYIAAivICMAAIAAARIh6AAIAAA8IB1AAIAAAPIh1AAIAABCIB7AAIAAARg");
	this.shape_14.setTransform(425.3,78.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#21201E").s().p("AhNBYIAAivIBjAAQAZAAANANQALALAAAVQAAANgHAKQgIALgPAEIAAAAQARADAKAKQAKALAAASQAAAZgTAOQgQALgXAAgAg7BIIBMAAQApAAAAgiQAAghglAAIhQAAgAg7gKIBHAAQApAAAAggQAAgcgiAAIhOAAg");
	this.shape_15.setTransform(404.5,78.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#21201E").s().p("ABXBZIAAiYIAAAAIhPCYIgPAAIhOiZIgBAAIAACZIgSAAIAAixIAbAAIBNCZIBPiZIAaAAIAACxg");
	this.shape_16.setTransform(380.2,78.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#21201E").s().p("AhGBYIAAivICLAAIAAARIh5AAIAAA8IB1AAIAAAPIh1AAIAABCIB7AAIAAARg");
	this.shape_17.setTransform(356.9,78.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#21201E").s().p("ABFBYIgZg2IhYAAIgZA2IgUAAIBSivIAPAAIBRCvgAAkAQIgkhPIgkBPIBIAAg");
	this.shape_18.setTransform(55.6,78);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#21201E").s().p("AMtBDQgbgZAAgqQAAgjAYgaQAcgeAtAAQAjAAAWAQQAXAPAHAdIABAFIgTAAIgCgDQgFgVgSgMQgRgMgbAAQgiAAgVAVQgXAVAAAgQAAAeASAVQAVAYAmAAQAcAAAUgPQATgPAFgaIAAgDIATAAIgBAEQgDAdgXAVQgZAWgnAAQgqAAgbgZgAyFBHQgQgQAAgZIASAAQAAATAMALQAQAPAmAAQAjAAAOgOQAJgJgBgMQAAgTgRgIQgKgEgfgDQglgDgOgFQgagLAAgcQAAgRAMgMQAVgVAtAAQAoAAATATQANAMAAAWIgSAAQAAgOgJgJQgOgNgdAAQgbAAgPAHQgTAJAAARQAAARARAHQAMAFAhADQAkAEANAFQAYALAAAcQABAfggAOQgTAIgZAAQgwAAgVgVgAQGBYIAAivICOAAIAAARIh8AAIAAA8IB3AAIAAAPIh3AAIAABCIB9AAIAAARgALHBYIiBiSIAACSIgSAAIAAivIASAAICBCSIAAiSIASAAIAACvgAHuBYIgag2IhZAAIgZA2IgUAAIBRivIARAAIBSCvgAHMAQIgkhPIglBPIBJAAgAEDBYIAAivIASAAIAACvgABcBYIAAivIASAAIAACeIBuAAIAAARgAhJBYIAAivIASAAIAACeIBsAAIAAARgAiXBYIgZg2IhaAAIgZA2IgUAAIBSivIARAAIBRCvgAi4AQIglhPIglBPIBKAAgAnHBYIgBgBQgFgFgBglQAAgVgIgGQgIgHgYAAIhIAAIAABNIgSAAIAAivIBbAAQA9AAAAAxQAAAMgHALQgHAMgOAEQAYAJABAbQAAAnAEAGIADAGgAo+gEIBHAAQAtAAAAgjQgBgfgqAAIhJAAgAqYBYIgZg2IhZAAIgZA2IgVAAIBSivIARAAIBSCvgAq4AQIgmhPIglBPIBLAAgAuUBYIAAieIhEAAIAAgRICcAAIAAARIhFAAIAACeg");
	this.shape_19.setTransform(193,78.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#21201E").s().p("ABXBYIAAiXIgBAAIhOCXIgPAAIhOiXIgBAAIAACXIgSAAIAAiwIAbAAIBNCZIBPiZIAaAAIAACwg");
	this.shape_20.setTransform(333.4,78.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#21201E").s().p("AATAUIAAgiIAAAAIgSAiIgCAAIgSgiIAAAiIgEAAIAAgnIAGAAIARAhIARghIAHAAIAAAng");
	this.shape_21.setTransform(526.7,71.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#21201E").s().p("AgBAUIAAgjIgPAAIAAgEIAhAAIAAAEIgQAAIAAAjg");
	this.shape_22.setTransform(521.5,71.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#21201E").s().p("AgagnIBfgGQghAdghAUQgiAYglASg");
	this.shape_23.setTransform(508.5,75.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F3F3F4").s().p("AgZAAQgDgpADgpIA0BQIgoBVQgJgpgDgqg");
	this.shape_24.setTransform(503,71.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9F9C9B").s().p("AhKgnQAoANAkATQAnARAiAXIhfAHg");
	this.shape_25.setTransform(507.9,67.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#21201E").s().p("AgCAEQghgYgegeIBeAOIAlBXQglgUgfgbg");
	this.shape_26.setTransform(500.1,92.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F3F3F4").s().p("AhMAYQAigUApgPQAlgPApgLIg7BLg");
	this.shape_27.setTransform(501.3,84.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#9F9C9B").s().p("AgcgFIA5hNQAAAogFAqQgGAqgMApg");
	this.shape_28.setTransform(506.1,89.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F3F3F4").s().p("AgNAAQAOgrATgiIARBdIhJA+QAJgpAOglg");
	this.shape_29.setTransform(482.3,89.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#9F9C9B").s().p("AgjAeIgRhcQAfAcAZAfQAdAhAUAig");
	this.shape_30.setTransform(489.7,88.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F3F3F4").s().p("AhSgWQApgFApACQArABAoAIIhTArg");
	this.shape_31.setTransform(478.3,73);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#21201E").s().p("AgogYIBUgtQgRAmgWAiQgZApgXAag");
	this.shape_32.setTransform(482.2,78.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9F9C9B").s().p("AgFACQgVgmgNgkIBPAzIgDBeQgagjgQgkg");
	this.shape_33.setTransform(474,78.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#9F9C9B").s().p("AghANIAXhcQAPAlAMApQAMApAFAog");
	this.shape_34.setTransform(493.8,62.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#21201E").s().p("AAAATQglgKgrgOIBbgbIBGBBQgogDgpgLg");
	this.shape_35.setTransform(489.2,66.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F3F3F4").s().p("AgDgDQAggiAdgWIgYBcIhbAbQAZgiAdgdg");
	this.shape_36.setTransform(486.8,60.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#21201E").ss(0.3,0,0,4).p("EgkpAAAMBJTAAA");
	this.shape_37.setTransform(280.8,42.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#21201E").s().p("AgHgeIBZAgQgoAMgpAIQgqAIgoAAg");
	this.shape_38.setTransform(486.8,94.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#56575A").s().p("AgOTzMAAAgnlIAcAAMAAAAnlg");
	this.shape_39.setTransform(-34.9,0);

	this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-529,-126.6,1058.2,253.5);


(lib.mc_nariz = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_narizmin();
	this.instance.setTransform(-27.9,-32.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.9,-32.9,76,82);


(lib.mc_mientras = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A60A5").s().p("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");
	this.shape.setTransform(-65,95.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A60A5").s().p("AoBB8IAAjMIAUAAQAFAAADAEQACAEABAMQAJgJAMgGQAMgHASAAQAPAAANAHQAOAIAIAQQAJASAAAcQAAAcgKASQgKASgPAIQgPAHgRAAQgOAAgLgEQgKgDgIgHIAABAgAnQg0QgKAFgIAIIAABNQAHAGAJAEQAIADAMABQALAAAKgFQAJgFAGgLQAGgMABgVQgBgWgFgMQgGgMgIgFQgJgFgKAAQgLAAgLAGgAEEBJQgJgDgGgKQgGgJAAgQIAAhzIAfAAIAABsQAAAPAHAGQAGAFALgBQAMAAAMgEQALgFAKgGIAAh2IAeAAIAACbIgTAAQgFAAgDgDQgCgEgBgKQgMAIgOAFQgPAGgQAAIgCAAQgLAAgJgEgACcBEQgLgKAAgWIAAhfIgTAAIAAgVIATAAIAAgrIAeAAIAAArIAjAAIAAAVIgjAAIAABcQAAAMAGAFQAFAEAMAAIAOAAIAAATIgLADQgGABgIAAQgUAAgLgJgAhBBHQgLgFgGgLQgGgJAAgQQAAgQAHgKQAIgKAOgEQAOgGASAAIASABIAOAEIAAgWQAAgNgGgHQgIgGgQAAQgOAAgKAEQgLAEgIAFIgJAAIAAgXQAKgFAOgEQANgEATAAQAaAAAPALQAQALAAAZIAABuIgMAAQgJAAgEgEQgEgDgBgKQgHAJgLAFQgMAFgPAAQgPAAgLgGgAgwAIQgKAGAAAOQAAAPAIAHQAIAGANAAQAMgBAJgEQAIgGAFgHIAAghIgMgDIgPgBQgQAAgKAHgAlIBHQgLgFgGgLQgGgJAAgQQAAgQAHgKQAIgKAOgEQAOgGASAAIASABIAQAEIAAgWQAAgNgIgHQgIgGgQAAQgOAAgKAEQgLAEgIAFIgJAAIAAgXQAKgFAOgEQANgEATAAQAcAAAPALQAQALAAAZIAABuIgMAAQgJAAgEgEQgEgDgBgKQgJAJgLAFQgMAFgPAAQgPAAgLgGgAk3AIQgKAGAAAOQAAAPAIAHQAIAGANAAQAMgBAJgEQAIgGAHgHIAAghIgOgDIgPgBQgQAAgKAHgAGmBIQgMgEgIgGIAAgXIAKAAQAFAFAKAFQAKAEAPAAQAQAAAJgGQAIgGAAgKQAAgLgHgEQgIgFgSgEQgYgCgNgJQgNgLAAgVQAAgWAPgMQAPgLAbAAQAQAAALACQALAEAIAEIAAAYIgKAAQgGgFgJgDQgIgDgNAAQgPAAgHAFQgIAFAAAKQAAAJAIAFQAIAEASADQARADALAFQAMAFAFAIQAGAIAAAPQAAAXgPANQgPANgfABQgTgBgMgEgAi6BLIAAibIATAAQAGAAACAEQADAEAAANQAIgIALgHQAMgHAOAAIAFAAIAEABIAAAZIgDAAIgEAAQgQAAgMAFQgLAFgIAIIAABwg");
	this.shape_1.setTransform(-65,64.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A60A5").s().p("AJYBpQgNgFgJgEIAAghIAOAAQAFAFAKAEQAJAEAPAAQANAAAGgEQAIgDAAgIQAAgGgGgEQgGgFgQgCQgagCgOgLQgNgMAAgUQAAgYARgNQAQgMAdAAQARAAALADQANADAIAEIAAAgIgMAAQgGgFgJgDQgJgDgMAAQgNABgGADQgFADgBAIQAAAEAHADQAHADAQACQATACAMAGQAMAFAFALQAGAKgBAQQAAAWgPAPQgRANgiAAQgSAAgOgDgAG4BnQgLgGgHgKQgGgKAAgQQgBgRAJgLQAHgLAOgFQAOgGATABIARABIAOACIAAgPQABgIgHgGQgGgFgRgBQgMABgKADQgKADgIAFIgNAAIAAgeQAMgFAOgEQAPgEATgBQAhAAAQANQASAMgBAaIAABrIgSAAQgLAAgEgCQgGgEgCgJQgIAJgMAFQgMADgOAAQgPABgLgGgAHSAqQgIAFAAAMQAAALAGAGQAHAEALAAQAJABAGgEQAHgDAFgGIAAgdQgKgCgMAAQgNAAgIAFgAj+BpQgNgFgJgEIAAghIANAAQAGAFAKAEQAJAEAPAAQAMAAAHgEQAIgDAAgIQAAgGgGgEQgGgFgQgCQgagCgOgLQgNgMAAgUQAAgYARgNQAQgMAdAAQARAAAMADQAMADAIAEIAAAgIgMAAQgGgFgJgDQgJgDgMAAQgNABgGADQgFADgBAIQAAAEAIADQAGADAQACQATACAMAGQAMAFAFALQAGAKgBAQQAAAWgPAPQgRANghAAQgTAAgOgDgAmeBnQgLgGgHgKQgGgKAAgQQgBgRAJgLQAHgLAOgFQAOgGATABIARABIAOACIAAgPQABgIgHgGQgGgFgRgBQgMABgKADQgKADgIAFIgNAAIAAgeQALgFAPgEQAOgEAVgBQAgAAAQANQASAMgBAaIAABrIgSAAQgKAAgGgCQgFgEgCgJQgJAJgLAFQgMADgOAAQgOABgMgGgAmEAqQgIAFAAAMQAAALAGAGQAHAEALAAQAIABAHgEQAHgDAFgGIAAgdQgKgCgMAAQgNAAgIAFgAFaBqIAAjPIAbAAQAHgBAFACQADACABAGIABAPIAAC3gAENBqIAAjPIAbAAQAHgBAEACQADACABAGIACAPIAAC3gAC/BqIAAibIAbAAQAIAAADACQAEADABAGQABAGAAAMIAAB+gABzBqIAAhoQAAgJgFgFQgEgFgKAAQgJABgJACIgPAFIAABzIgsAAIAAhoQAAgJgFgFQgEgFgJAAQgIABgIACIgQAFIAABzIgsAAIAAibIAeAAQAGAAADADQADAEABAKQAKgJAPgFQAMgGAQAAQANAAAKAFQAJAFAGALQAMgKAPgFQAPgGAQAAQALABAJAEQAKADAGAKQAFAKAAAQIAABygAn6BqIAAhoQAAgJgEgFQgEgFgLAAQgJABgJACIgPAFIAABzIgsAAIAAhoQAAgJgEgFQgFgFgJAAQgJABgJACIgQAFIAABzIgsAAIAAibIAeAAQAGAAADADQADAEACAKQAKgJAPgFQAOgGAQAAQAMAAALAFQAJAFAFALQAMgKAPgFQAQgGAQAAQALABAJAEQAKADAFAKQAGAKgBAQIAABygAl6g8IAAgKIAKgfIAtAAIAAAMIgfAdgADEhEQgHgGAAgKQAAgKAHgHQAHgGAKgBQAKABAHAGQAGAHAAAKQAAAKgGAGQgHAHgKgBQgKABgHgHg");
	this.shape_2.setTransform(-65,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A60A5").s().p("AlrBmQgPgEgLgGIAAgfIANAAQAIAGAMADQALAEAOAAQAWAAAKgHQALgIAAgQIAAgKQgIAHgLAEQgLAEgOABQgRAAgPgIQgPgIgJgQQgIgQgBgXQABgeAJgSQAKgRAQgJQAPgIASAAQAPAAALAFQAKAEAIAHQACgGAFgEQAEgDAHAAIAWAAIAACTQgBAdgVAPQgUAPgnAAQgWAAgQgDgAlOhDQgIAEgFAKQgFAJAAASQAAARADAJQAEAJAHAFQAIAEALAAQAIAAAIgDQAIgDAHgFIAAhEQgGgFgHgCQgGgCgJAAQgKAAgIADgAErA0QgNgEgJgFIAAggIAOAAQAFAFAKAEQAKAEAOAAQANAAAHgEQAHgDAAgIQAAgHgGgCQgGgEgQgCQgagCgOgLQgNgMAAgWQAAgYARgNQAQgNAdAAQARAAAMADQAMADAJAFIAAAgIgNAAQgGgFgJgDQgJgDgMAAQgNAAgGAEQgFADAAAHQAAAGAHAEQAGADAQACQATACAMAGQAMAFAFAKQAGAKAAAOQAAAXgQAOQgQAOgiAAQgTAAgOgEgACLAzQgLgGgHgKQgGgLAAgPQAAgPAIgLQAIgLAOgFQAOgGASAAIARABIAPADIAAgPQAAgLgHgFQgGgGgQAAQgMAAgLAEQgKADgIAFIgMAAIAAgfQALgFAOgEQAPgEAUAAQAgAAARAMQARAMAAAbIAABrIgTAAQgKAAgFgDQgGgDgCgJQgIAJgMAEQgLAEgPAAQgOAAgMgFgAClgIQgIAFAAAJQAAAMAHAFQAGAFAMAAQAIAAAHgDQAGgDAGgGIAAgcQgLgBgMAAQgNAAgIAFgAjDAzQgMgGgGgKQgHgLAAgPQAAgPAIgLQAIgLAOgFQAOgGATAAIARABIAOADIAAgPQAAgLgGgFQgHgGgQAAQgMAAgKAEQgKADgIAFIgNAAIAAgfQALgFAPgEQAOgEAUAAQAhAAAQAMQARAMAAAbIAABrIgSAAQgLAAgFgDQgFgDgCgJQgJAJgLAEQgMAEgOAAQgPAAgLgFgAipgIQgIAFAAAJQAAAMAGAFQAHAFALAAQAIAAAHgDQAHgDAFgGIAAgcQgKgBgMAAQgOAAgHAFgAAvA2IAAhmQAAgMgFgEQgEgFgKAAQgKABgJACIgPAFIAABzIgsAAIAAibIAeAAQAGAAADADQADAEACAJQAJgIAPgFQAPgGAQAAQALAAAKAEQAJAEAGAJQAGAKAAARIAAByg");
	this.shape_3.setTransform(-65,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A60A5").s().p("AB+BUQgKgDgHgDIAAgQIAHAAQAFAEAIADQAIACAKAAQAOAAAIgFQAIgGAAgMIAAgLQgFAGgJADQgIAEgKAAQgLAAgJgFQgJgFgGgLQgGgLAAgRQAAgSAHgMQAGgMAKgFQAKgGALABQAKAAAIADQAHADAFAFQABgEADgDQACgDAEAAIAKAAIAABjQgBAMgGAJQgFAIgLAEQgLAEgPAAQgNAAgKgCgACMggQgHADgEAIQgEAIAAANQAAANADAIQADAIAGADQAGADAHAAQAIAAAHgEQAHgDAFgGIAAgwQgFgEgFgDQgGgCgIAAQgHAAgGADgAIaA+QAFgBADgCQADgCAAgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgCIgEgEQgBgCAAgDQAAgFADgDQAEgDAFAAQAFAAAEADQAEAEAAAIQAAANgGAHQgHAHgNABgAHPAzQgIgDgFgDIAAgQIAGAAQAEADAHADQAGADAKAAQALAAAFgEQAGgEAAgHQAAgHgFgDQgFgDgMgCQgQgCgJgGQgIgGAAgOQAAgPAKgIQAKgIARAAQALAAAIACQAHACAFADIAAAQIgGAAQgEgDgGgCQgGgCgIAAQgKAAgFADQgFADAAAHQAAAGAFADQAFADAMACQAMACAHADQAIADADAFQAEAGAAAKQAAAPgKAJQgJAJgVAAQgNAAgIgDgAFpAvQgLgGgHgMQgGgMAAgQQAAgPAGgMQAHgMALgHQALgGAPAAQAOAAALAGQALAHAHAMQAGAMABAPQgBAQgGAMQgHAMgLAGQgLAHgOAAQgPAAgLgHgAFtgaQgHAKgBARQABATAHAJQAIAJAOAAQANAAAIgJQAIgJAAgTQAAgRgIgKQgIgKgNAAQgOAAgIAKgAgMAzQgIgDgFgDIAAgQIAGAAQAEADAHADQAGADAIAAQALAAAFgEQAGgEAAgHQAAgHgFgDQgFgDgMgCQgOgCgJgGQgIgGAAgOQAAgPAKgIQAKgIAPAAQALAAAIACQAHACAFADIAAAQIgGAAQgEgDgGgCQgGgCgIAAQgKAAgDADQgFADAAAHQAAAGAFADQADADAMACQAMACAHADQAIADADAFQAEAGAAAKQAAAPgKAJQgJAJgVAAQgLAAgIgDgAhxAyQgIgDgEgHQgEgHAAgKQAAgLAFgHQAFgFAJgEQAKgDALAAIANABIAKACIAAgOQAAgJgFgFQgFgEgLAAQgJAAgHADQgHACgFAEIgHAAIAAgQQAHgDAJgDQAJgCANAAQATgBAKAIQAKAHAAASIAABIIgIAAQgGAAgDgCQgCgDgBgHQgGAGgHAEQgIADgKAAQgKAAgHgEgAhmAIQgHAEAAAKQAAAJAFAFQAGAEAIAAQAIAAAGgDQAGgEAEgFIAAgWIgJgCIgKAAQgLAAgGAEgAocAvQgLgGgGgMQgGgMAAgQQAAgPAGgMQAHgMAKgHQALgGAOAAQAVgBALANQALAMABAaIAAACIgBADIhGAAQABATAIAIQAIAIAPgBQAKAAAHgCQAHgDAFgEIAGAAIAAAOQgFAEgJAEQgKADgOAAQgQAAgLgHgAnsgHQAAgRgGgHQgGgHgLAAQgLAAgHAHQgHAHgCARIAyAAIAAAAgAEQA1IAAhnIANAAQAEAAABADQACADABAJQAFgHAHgEQAIgFAKAAIADAAIACABIAAARIgCAAIgDAAQgKAAgIADQgIAEgEAEIAABLgADgA1IAAhnIAMAAIAGABQACACAAADIABAKIAABXgAipA1IAAhHQAAgJgEgEQgDgEgIAAQgIABgHADIgNAGIAABOIgUAAIAAhHQAAgJgEgEQgEgEgHAAQgIABgHADQgHACgGAEIAABOIgUAAIAAhnIAMAAQAEAAACADQACACAAAIQAHgGAKgEQAJgEALAAQAJgBAGAEQAHADACAJQAIgHAKgEQAKgEAMAAQAHgBAGADQAFADAEAGQADAGABAKIAABNgAmBA1IAAhHQAAgJgEgEQgEgEgHAAQgJABgIADQgIADgGAEIAABNIgUAAIAAhnIAMAAQAEAAACADQACACAAAIQAIgGAKgEQAKgEAMAAQAHgBAGADQAHACADAHQAEAGAAALIAABMgAhag7IAAgFIAKgVIAVAAIAAAGIgTAUgADihBQgDgDAAgFQAAgFADgEQAEgDAFAAQAFAAADADQAEAEAAAFQAAAFgEADQgDADgFAAQgFAAgEgDg");
	this.shape_4.setTransform(-65,-26.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A60A5").s().p("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");
	this.shape_5.setTransform(-65,-55.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159.7,-64.3,189.3,172.8);


(lib.mc_logo = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#075095").s().p("AhFFHIjXqNIB0AAQAhAAAOAPQAPAPASA3IB6GaICUnvIBnAAIjIKNg");
	this.shape.setTransform(19.2,5,0.148,0.148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#075095").s().p("Aj5FHIAAqNIEbAAQBiAAAiBDQAhBCg0BMIggAwQBQAqAiBDQAgBAgRBDQgQBDg4ArQg9AuhXAAgAhfDwIAvAAQA8AAAkgiQAngkAAhHQAAg7gagkQgZgfgrgLIA1hRQARgYAAgYQAAgegXgWQgWgWgdAAIhUAAg");
	this.shape_1.setTransform(3.7,5,0.148,0.148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#075095").s().p("Aj5FHIAAqNIEcAAQBiAAAhBDQAhBCg0BMIggAwQBRAqAiBDQAfBAgQBDQgQBDg5ArQg8AuhXAAgAheDwIAuAAQA8AAAkgiQAngkAAhHQAAg7gagkQgYgfgrgLIA1hRQAQgZAAgXQAAgegWgWQgXgWgcAAIhUAAg");
	this.shape_2.setTransform(11.9,5,0.148,0.148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#075095").s().p("AB8FHIgriNIjsAAIgrCNIhmAAIDIqNIB7AAQAmAAAOANQAOAMAOAqIDGJKgAA0BaIhZkpIhaEpICzAAg");
	this.shape_3.setTransform(26.8,5,0.148,0.148);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#075095").s().p("Ah1DTQg3gmgXhGQgPgtAAg4QAAhTAkg+QAig8A9gcQApgSAtAAQA0AAAoARQAqASAbAkQASAZAKAgQAPArAAA7IAAAgIlhAAQACAuAMAiQANAmAaAXQASAQAXAIQAfAMApAAQAaAAAdgGQAbgGARgHQAngTAGAAQAVgCAUAgQgdAfg1AUQgxARg7AAQhQAAg4gngACPgqQgCgpgLgfQgNgfgVgUQgOgLgTgIQgZgIgfAAQgrAAgjAXQgiAXgTAsQgLAdgFAfIEbAAIAAAAg");
	this.shape_4.setTransform(75.7,6.1,0.148,0.148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#075095").s().p("AinD7QhbhaAAigIAAgBQAAigBbhaQBQhPB0AAQAaAAASACQAXACAXAFIABAAQAeAJARAIQAlASAdAdQAOAPAMARQgTAVgPAEQgNADgOgIIgPgLIgUgRIgFgDIAAgBIgSgKQgdgOgmgFQgVgDgUAAQhkAAg7BIQg7BHAAB7IAAAFQAAB7A7BIQA7BHBkAAQAUAAAVgDQAmgFAdgOIASgKIAAgBIAZgUQAGgFAJgFQAOgJANADQAPAEATAVQgLAQgPAQQgdAdglASQgRAIgeAJIgBAAQgVAGgZACQgUABgYAAQh0AAhQhPg");
	this.shape_5.setTransform(37.9,4.9,0.148,0.148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#075095").s().p("Ah1DmQgpgWgTgqQgLgcAAgjQAAgqASggQASgdAjgSQAXgLAagHQAmgJAnAAQA+AAAzAMIAAhGQgBgcgIgSQgKgRgQgKQgLgHgOgDQgigHgNAAQgzAAglAQQgiAOgNgBQgXgDgRgjQAkgVAggLQAzgQA8AAQAqAAAiAKQAjAJAWAWQAPAPALAVQAMAdgBAmIAAFgIgYAAQgKAAgGgBQgIgCgHgGIgHgIQgCgEgCgLIgBgQQgXAUgbANQgrAUg2AAQg1AAgngVgAgvAQQgcAGgQAPQgNAKgGAMQgKARAAAYQAAAcAKATQAJATAQAKQAKAGAOAFQASAGAYgBQAwAAAjgTQAdgQAdghIAAhmQg4gNg2AAQgjAAgYAHg");
	this.shape_6.setTransform(94.5,6.1,0.148,0.148);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#075095").s().p("AghFHIAAqNIAcAAQAZAAAHANQAHAKAAAgIAAJWg");
	this.shape_7.setTransform(99.4,5,0.148,0.148);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#075095").s().p("AhFDEIAAlAIg+AAIAAg5IA+AAIAAiDIBEAAIAACDIB8AAIAAA5Ih8AAIAAE7QAAAkANANQAPAOAoAAIBBAAIAAA0IgJACQgbAFgsAAQh5AAAAh1g");
	this.shape_8.setTransform(89,5.2,0.148,0.148);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#075095").s().p("ACCD5IAAljQAAgrgUgTQgTgTgsAAQhOAAhiBKIAAFqIhEAAIAAnsIAgAAQAXABAIAPQAFAMAAAfIAAAFQBfhEBiAAQBCgBAiAjQAiAjAABDIAAFog");
	this.shape_9.setTransform(83.1,6.1,0.148,0.148);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#075095").s().p("ACCD5IAAljQAAgrgTgTQgTgTgsAAQhOAAhjBKIAAFqIhEAAIAAnsIAhAAQAXABAHAPQAFAMAAAfIAAAFQBghEBiAAQBBgBAiAjQAiAjAABDIAAFog");
	this.shape_10.setTransform(68.5,6.1,0.148,0.148);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#075095").s().p("AggD2IAAnrIAaAAQAYAAAJAOQAGAMAAAiIAAGvg");
	this.shape_11.setTransform(63.4,6.1,0.148,0.148);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#075095").s().p("AgdAeQgMgNABgRQAAgQAMgMQAMgNAQAAQAQAAANANQAMAMAAAQQABARgMANQgNAMgRAAQgQAAgNgMg");
	this.shape_12.setTransform(63.4,1.1,0.148,0.148);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#075095").s().p("AhFDEIAAlAIg+AAIAAg5IA+AAIAAiDIBEAAIAACDIB7AAIAAA5Ih7AAIAAE7QAAAkANANQAPAOAoAAIBBAAIAAA0IgJACQgbAFgtAAQh4AAAAh1g");
	this.shape_13.setTransform(59.4,5.2,0.148,0.148);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#075095").s().p("ACCD5IAAljQgBgrgSgTQgUgTgrAAQhPAAhhBKIAAFqIhFAAIAAnsIAgAAQAXABAIAPQAFAMABAfIAAAFQBehEBjAAQBBgBAiAjQAhAjAABDIAAFog");
	this.shape_14.setTransform(53.5,6.1,0.148,0.148);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#075095").s().p("AimC2Qg/hEAAhyQAAhxA/hEQA/hFBnAAQBoAAA/BFQA/BEAABxQAAByg/BEQg/BEhoABQhngBg/hEgAh1iMQgrA0AABYQAABaArA0QArAzBKAAQBLAAArgzQArg0AAhaQAAhYgrg0QgrgzhLAAQhKAAgrAzg");
	this.shape_15.setTransform(45.8,6.1,0.148,0.148);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,9.8);


(lib.mc_inscribete = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1.7,5.1);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7EB732").s().p("Egl9AEyQhjAAhygbQjXgzh/h+QidiaAAj8IAeAAQAADwCUCQQB9B8DZAwQBEAPBFAGIA5ADMBMsAAAQF2AAClkhQA0haAZhuIAPhcIAeACIgQBiQgaBxg1BcQhKCBh1BNQicBkjbAAg");
	this.shape_1.setTransform(0,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8FCF38").s().p("Egl6AEqIhugIQiDgShtguQleiTAAl4MBhtAAAIgPBdQgaBwg1BcQiqEql+AAg");
	this.shape_2.setTransform(0,29.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7EB732").s().p("EgxFAEwQADgpANg5QAZhwA2heQBKiAB1hMQCbhlDbAAMBMsAAAQBfAABvAZQDdAyCDCBQCdCbAAD7IgeAAQAAjviUiRQh9h7jZgxQhtgYhWAAMhMsAAAQl1AAimEhQg0BbgYBtQgNA3gCAlg");
	this.shape_3.setTransform(0,-30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#86C82D").s().p("Egw2AEqQACglANg4QAZhwA1hdQCqkpF+AAMBMsAAAQAsgBBCAJQCDASBuAuQFdCTAAF4g");
	this.shape_4.setTransform(0,-29.8);

	// Capa 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#86C82D").s().p("EgmhAJXQg+AAhcgZQh5gfhjg7QkbipAAk/QAAk5EYioQBXg1BoggIBYgWMBNNgAFIB1AEQCLANB1ApQF0CFAAFvQAAFtkSCtQhVA2hnAcIhVASg");
	this.shape_5.setTransform(0,-0.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-314.2,-61.2,628.5,122.5);


(lib.mc_icon4 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.icon4min();
	this.instance.setTransform(-26.4,-34.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AkxA8IAAhdIAEAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIAAAGIAAAFIAIgGIAJgFQAFgCAGAAQAIAAAGADQAGADAEAIQAEAIAAAMQAAAOgEAIQgFAJgHADQgIADgHABQgIgBgHgCQgFgCgFgEIAAAfgAkZgbIgJAGIgIAIIAAAjQAFAFAFADQAGACAIAAQAGAAAGgCQAFgDAEgHQAEgHAAgMQAAgLgDgGQgEgIgFgCQgEgCgGgBQgGAAgEACgAl0AlQgFgCgCgFQgDgEAAgGIAAg1IAHAAIAAA0QAAAFACADQABADADABIAIABQAIABAIgEQAHgDAGgFIAAg2IAHAAIAABHIgDAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBgCAAgEIAAgDQgGAEgIAEQgIADgIABQgGAAgEgCgAGkAkIgJgFIAAgGIACAAIAIAFQAFACAIAAQAKAAAFgDQAFgFAAgHQAAgGgEgEQgFgDgKgBQgLgCgGgDQgGgEgBgJQAAgJAIgGQAGgEALAAIANACIAIADIAAAGIgCAAIgHgEIgLgCQgJAAgGAEQgEADAAAHQAAAFAEAEQAFADAKABQAIABAFABQAFACADAEQADAEAAAGQAAAKgGAGQgHAGgNAAQgKAAgFgCgAFeAhQgHgEgEgIQgFgIAAgMQAAgJAFgJQAEgIAHgFQAIgEAKAAQAKAAAIAEQAHAFAEAIQAFAJAAAJQAAAMgFAIQgEAIgHAEQgIAFgKAAQgKAAgIgFgAFcgVQgHAJAAANQAAAPAHAIQAIAJAMgBQANABAGgJQAIgIAAgPQAAgNgIgJQgGgHgNgBQgMABgIAHgAEPAiQgGgDgFgIQgDgIAAgNQgBgMAFgJQAFgIAHgEQAHgDAHAAQAJAAAGACQAGADAEAEIAAghIACAAIAEAAIABAGIAABaIgEAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAIgBgGIAAgFQgFAGgGADQgIAEgIAAQgIAAgGgEgAEUgaQgFACgEAIQgDAHAAALQAAAMADAGQADAHAFADQAFADAGgBQAIAAAHgDQAGgFAFgGIAAglQgEgFgGgCQgFgCgJgBQgGAAgGADgADGAkQgFgDgEgEQgDgFABgHQAAgIADgEQAEgFAHAAQAGgCAJgBIAKABIAJACIAAgNQAAgJgFgDQgFgEgIAAQgIABgFABQgGACgDADIgDAAIAAgGIAKgEIAPgCQALAAAHAEQAHAFAAAMIAAAzIgCAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBgBAAAAIgBgGIAAgCQgEAFgHACQgFADgJAAQgHAAgFgCgADMADQgEABgEADQgCAEAAAFQAAAJAEAEQAGAEAHgBQAJAAAFgCQAGgEAEgFIAAgSIgJgBIgKgBQgGAAgGACgACHAhQgHgEgEgIQgFgJABgLQgBgKAFgIQAEgJAIgEQAIgEAKAAQAJAAAFACQAGACADACIAAAHIgDAAQgDgDgEgDQgFgCgIAAQgIABgGADQgHAEgDAHQgDAHAAAIQAAAPAHAIQAHAIANAAQAJAAAFgCQAEgDADgDIADAAIAAAGIgFADIgIAEQgFABgGAAQgLAAgIgFgAATAhQgHgEgEgIQgEgIAAgLQAAgLAEgHQAFgJAHgFQAHgEAJAAQAJAAAHADQAHAEADAHQAFAIAAAMIAAAAIAAACIg3AAQAAAPAGAHQAIAJANgBQAIAAAGgCQAGgCACgDIADAAIAAAFQgDADgHADQgGACgJAAQgLAAgJgFgAA8gCQgBgOgGgHQgGgGgLAAQgKAAgHAHQgGAHgBANIAwAAIAAAAgAjZAhQgHgEgEgIQgFgIAAgLQABgLAEgHQAEgJAHgFQAIgEAJAAQAJAAAHADQAGAEAEAHQAEAIAAAMIAAAAIAAACIg3AAQAAAPAHAHQAHAJANgBQAJAAAGgCQAFgCADgDIADAAIAAAFQgDADgHADQgHACgJAAQgLAAgIgFgAixgCQgBgOgFgHQgHgGgKAAQgKAAgHAHQgGAHgCANIAwAAIAAAAgAnAAkIgMgHIAAgHIADAAQAFAEAFADQAHADAKAAQAIAAAGgCQAFgDAEgEQACgFAAgHQAAgHgDgEQgDgCgGgCIgNgEQgJgCgFgDQgHgEgDgEQgDgFgBgIQABgHADgGQADgGAHgDQAHgDAJAAQAKAAAFACQAHACAEAEIAAAGIgDAAQgEgEgGgCQgEgCgIAAQgJAAgFADQgEACgDAEQgCAEgBAGQABAGACAEQAEADAEACIANAFIAQAFQAHADAEAFQADADAAAJQAAAJgFAGQgDAGgIADQgHADgKAAQgKAAgIgCgABRAmIAAhHIAEAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIABAHIAAAEIAHgGIAIgFQAEgCAFAAIACAAIABABIAAAFIgBAAIgBAAQgGAAgEACIgIAFIgHAHIAAA0gAgPAmIAAg0QAAgJgEgCQgDgEgGAAQgJABgGADQgHADgFAGIAAA2IgHAAIAAg0QAAgJgDgCQgFgEgFAAQgIABgHADQgGADgGAGIAAA2IgHAAIAAhHIADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAGIAAAEIAIgGIAKgEIALgCQAGAAAFADQAFADACAGQAFgFAHgEQAIgDAJAAQAFAAAEACQAEACADADQACAEAAAHIAAA2gAibAmIAAhHIADAAQABAAAAAAQAAAAABAAQAAAAAAAAQABABAAAAIABAHIAAAEIAGgGIAIgFQAFgCAEAAIADAAIABABIAAAFIgBAAIgCAAQgGAAgEACIgIAFIgGAHIAAA0g");
	this.shape.setTransform(11.9,56.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.2,-34.7,92.3,97.6);


(lib.mc_icon3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.icon3min();
	this.instance.setTransform(-38.4,-39.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AkECRIAAhgIADAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABIABAGIAAAFIAGgGIAJgFQAGgCAHgBQAGAAAGAEQAHADAEAIQAEAIABAOQgBAOgFAIQgEAIgHAEQgIADgHAAQgJAAgFgCQgHgCgDgEIAAAfgAjuA4IgJAGIgGAHIAAAmQAEAFAGACQAFADAHAAQAHAAAGgDQAFgDAFgGQADgHAAgNQAAgMgDgHQgEgHgEgCQgFgDgGAAQgFAAgGACgAFtB2QgIgEgFgIQgEgJAAgLQAAgMAEgIQAFgIAIgFQAHgEAKgBQAKABAIAEQAHAFAFAIQAEAIAAAMQAAALgEAJQgFAIgHAEQgIAFgKAAQgKAAgHgFgAFqA+QgGAJAAAPQAAAPAGAIQAIAIAMAAQAMAAAIgIQAHgIAAgPQAAgPgHgJQgIgIgMAAQgMAAgIAIgAFMB7QgJAAgEgEQgEgEAAgJIAAgzIgKAAIAAgGIAKAAIAAgUIAHAAIAAAUIAUAAIAAAGIgUAAIAAAzQAAAGADADQADACAGAAIAJAAIAAAFIgFABIgGAAgACuB2QgHgEgEgIQgEgJAAgLQAAgMAEgIQAFgIAHgFQAHgEAJgBQAJAAAHAEQAHAEADAHQAFAIAAAMIAAACIAAABIg3AAQAAAPAGAIQAIAIANAAQAIAAAGgCQAGgCACgDIADAAIAAAFQgDADgHACQgGADgJAAQgLAAgJgFgADXBRQgBgPgGgGQgGgGgLAAQgKAAgHAHQgGAGgBAOIAwAAIAAAAgAgRB4QgGgCgDgFQgDgEAAgHQAAgIAEgEQADgFAHgCQAGgDAJAAIAIABIAJACIAAgOQABgIgGgDQgEgEgIAAQgHAAgFACQgFACgEADIgDAAIAAgGIAKgFIAOgCQALAAAGAFQAIAFAAALIAAA1IgCAAQgBAAgBAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgBgGIAAgDQgEAFgGADQgFADgIAAQgGAAgFgDgAgLBXQgFACgDADQgCAEgBAFQABAJAEAEQAFAEAHgBQAIAAAFgDQAGgDADgFIAAgSIgJgCIgIgBQgFAAgGACgAguB7QgIAAgFgEQgEgEAAgJIAAgzIgKAAIAAgGIAKAAIAAgUIAHAAIAAAUIAUAAIAAAGIgUAAIAAAzQAAAGADADQADACAGAAIAJAAIAAAFIgFABIgGAAgAiyB4QgFgCgDgFQgDgEAAgHQAAgIAEgEQADgFAHgCQAGgDAJAAIAKABIAJACIAAgOQAAgIgEgDQgGgEgIAAQgHAAgGACQgGACgDADIgDAAIAAgGIALgFIAPgCQALAAAGAFQAIAFgBALIAAA1IgBAAQgBAAgBAAQAAAAgBAAQgBAAAAgBQAAAAgBAAIgBgGIAAgDQgEAFgGADQgGADgJAAQgHAAgFgDgAirBXQgFACgDADQgDAEAAAFQAAAJAFAEQAFAEAIgBQAIAAAGgDQAFgDAEgFIAAgSIgJgCIgJgBQgGAAgGACgAlCB2QgIgEgDgIQgFgJAAgLQAAgMAFgIQAEgIAHgFQAIgEAJgBQAJAAAHAEQAGAEAEAHQAEAIAAAMIAAACIAAABIg3AAQAAAPAHAIQAHAIANAAQAJAAAGgCQAFgCADgDIADAAIAAAFQgEADgGACQgHADgJAAQgLAAgIgFgAkaBRQgBgPgFgGQgHgGgKAAQgKAAgHAHQgHAGgBAOIAwAAIAAAAgAmRB3QgGgDgEgIQgEgIAAgOQAAgOAEgIQAFgIAIgEQAGgEAIAAQAIABAHACQAGACAEAFIAAgiIACAAIAEABIABAGIAABbIgEAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIAAgHIAAgEQgFAFgHAEQgHAEgIAAQgIAAgHgEgAmLA5QgGACgDAHQgEAIAAAMQAAAMADAHQAEAHAFADQAFACAFAAQAJAAAHgEQAGgEAFgHIAAgmQgFgFgFgCQgGgDgIAAQgGAAgGADgAEfB6IAAg1QAAgGgCgDQgCgDgDgBQgEgCgEAAQgFAAgFACIgKAFIgJAGIAAA3IgHAAIAAhJIAEAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABAGIAAAEQAGgFAJgEQAHgDAKgBQAGAAAEACQAEACACAEQADAEAAAIIAAA2gACKB6IAAg2QAAgIgDgDQgEgDgGAAQgJABgGADQgHADgFAFIAAA4IgHAAIAAg2QAAgIgDgDQgFgDgFAAQgIABgHADQgGADgGAFIAAA4IgHAAIAAhJIADAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAGIAAADIAIgFIAKgFIALgCQAGAAAFADQAFADACAHQAFgFAHgEQAIgDAJgBQAFAAAEACQAEACADAEQACAEAAAGIAAA4gAhyB6IAAhJIAEAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAGIAAAFIAHgGIAIgFQAEgCAFAAIADAAIAAAAIAAAGIAAAAIgCAAQgGAAgEACIgIAFIgHAHIAAA1gACZgXIAAhgIAEAAQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABIABAGIAAAFIAHgGIAJgFQAFgCAGgBQAIAAAFAEQAHADAEAIQAEAIAAAOQAAAOgEAIQgFAIgHAEQgHADgIAAQgJAAgFgCQgGgCgEgEIAAAfgACxhwIgJAGIgHAHIAAAmQAEAFAGACQAFADAHAAQAHAAAGgDQAGgDAEgGQADgHAAgNQAAgMgDgHQgEgHgFgCQgEgDgGAAQgFAAgFACgADygyQgIgEgEgIQgEgJgBgLQABgMAEgIQAEgIAIgFQAHgEALgBQAKABAIAEQAHAFAEAIQAFAIAAAMQAAALgFAJQgEAIgHAEQgIAFgKAAQgLAAgHgFgADwhqQgHAJAAAPQAAAPAHAIQAHAIANAAQAMAAAHgIQAHgIABgPQgBgPgHgJQgHgIgMAAQgNAAgHAIgAA/gvIgIgFIAAgGIACAAIAIAFQAGACAHAAQAKAAAFgEQAFgEAAgHQAAgHgEgDQgEgDgLgCQgLgBgGgFQgGgEgBgJQAAgKAHgFQAHgFALAAIANACIAIAEIAAAGIgDAAIgHgEIgLgCQgIAAgGADQgEAEAAAGQAAAGAEAEQAFADAKABQAIABAFADQAFACADAEQADAEAAAGQAAAKgHAGQgGAGgNAAQgKAAgGgCgAgBgwQgGgCgDgFQgDgEAAgHQAAgIAEgEQAEgFAFgCQAGgDAJAAIAKABIAJACIAAgOQAAgIgGgDQgFgEgHAAQgJAAgFACQgEACgDADIgDAAIAAgGIAIgFIAQgCQALAAAHAFQAGAFABALIAAA1IgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgBgGIAAgDQgFAFgGADQgFADgKAAQgHAAgCgDgAADhRQgDACgDADQgCAEgBAFQABAJAEAEQADAEAHgBQAKAAAFgDQAFgDAFgFIAAgSIgJgCIgKgBQgHAAgFACgAhMgxQgGgDgEgIQgEgIAAgOQAAgOAEgIQAFgIAIgEQAGgEAIAAQAIABAHACQAFACAEAFIAAgiIADAAIAEABIABAGIAABbIgEAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBgHIAAgEQgEAFgHAEQgHAEgJAAQgHAAgHgEgAhGhvQgGACgEAHQgDAIAAAMQAAAMADAHQAEAHAFADQAFACAFAAQAJAAAHgEQAGgEAEgHIAAgmQgEgFgFgCQgGgDgIAAQgGAAgGADgAjggyQgHgEgEgIQgFgJAAgLQABgMAEgIQAEgIAHgFQAIgEAJgBQAJAAAHAEQAGAEAEAHQAEAIAAAMIAAACIAAABIg3AAQAAAPAHAIQAHAIANAAQAJAAAGgCQAFgCADgDIADAAIAAAFQgDADgHACQgHADgJAAQgLAAgIgFgAi4hXQgBgPgFgGQgHgGgKAAQgKAAgHAHQgGAGgCAOIAwAAIAAAAgAE0guIAAhJIAEAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAAGIAAAFIAHgGIAIgFQAEgCAFAAIADAAIAAAAIAAAGIAAAAIgCAAQgGAAgEACIgIAFIgHAHIAAA1gAhwguIAAg1QAAgGgCgDQgCgDgCgBQgEgCgEAAQgFAAgFACIgKAFIgJAGIAAA3IgHAAIAAhJIADAAQABAAAAAAQAAAAABABQAAAAAAAAQABAAAAABIABAGIAAAEQAGgFAIgEQAIgDAJgBQAGAAAEACQAEACADAEQADAEgBAIIAAA2gAkFguIAAhJIABAAQABAAABAAQAAAAABABQAAAAABAAQAAAAAAABQACABAAAFIAABBgAk3guIAAhcIgfAAIAAgGIBHAAIAAAGIggAAIAABcgAkFiDIgCgEIACgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAIABADIgBAEQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(0,60.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.6,-39.7,83.3,115.1);


(lib.mc_icon2 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.icon2min();
	this.instance.setTransform(-38.9,-34.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("ACmA6IgLgEIAAgGIADAAQADADAHACIAOACQAHAAAFgCQAGgCADgEQAEgEAAgHIAAgNQgFAGgHAEQgHADgIABQgIgBgGgDQgHgEgEgHQgEgIAAgNQAAgMAFgJQAEgHAIgEQAHgEAHAAQAJAAAGADQAGACAEAFIABgHQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIADAAIAABGQAAAIgFAFQgEAGgHACQgHADgIAAQgKAAgHgCgACsgaQgGACgEAHQgEAHAAALQAAALADAHQAEAHAFADQAFACAGAAQAIAAAHgEQAGgFAFgFIAAgkQgFgFgFgCQgGgDgHgBQgHAAgFAEgAELAjQgFgCgDgFQgDgFAAgGQAAgIAEgFQADgEAHgBQAGgCAJAAIAKAAIAJACIAAgNQAAgIgFgDQgFgFgIABQgIAAgFABQgGADgDADIgDAAIAAgHIAKgEIAQgCQALAAAGAFQAHAFAAALIAAAzIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBgGIAAgDQgEAFgGADQgGADgJAAQgHgBgFgCgAESACQgFACgDADQgDAEAAAFQAAAJAFAEQAFADAHAAQAJAAAGgDQAFgEAEgEIAAgTIgJgBIgJgBQgHAAgFACgABaAhQgIgEgEgIQgEgJAAgLQAAgKAEgIQAEgJAIgEQAIgFAKAAQAKAAAIAFQAHAEAEAJQAFAIAAAKQAAALgFAJQgEAIgHAEQgIAEgKABQgKgBgIgEgABYgVQgHAIAAAOQAAAOAHAJQAHAIANAAQAMAAAHgIQAIgJAAgOQAAgOgIgIQgHgIgMgBQgNABgHAIgAgMAhQgIgEgEgIQgFgJAAgLQAAgKAFgIQAEgJAIgEQAHgFAIAAQALAAAHAFQAIAEAEAJQAEAIAAAKQAAALgEAJQgEAIgIAEQgHAEgLABQgIgBgHgEgAgOgVQgHAIAAAOQAAAOAHAJQAHAIAKAAQANAAAHgIQAHgJAAgOQAAgOgHgIQgHgIgNgBQgKABgHAIgAidAhQgIgEgEgJQgEgIAAgLQAAgLAEgHQAFgJAHgEQAIgFAKAAQAJABAGACQAFACADACIAAAGIgDAAQgDgDgEgCQgFgCgIAAQgIAAgGAEQgGADgEAIQgDAGAAAJQAAAPAHAHQAHAJANAAQAJAAAFgDQAFgCACgEIAEAAIAAAGIgGAEIgIADQgFABgGABQgLgBgHgEgAjlAhQgIgEgEgIQgEgJAAgLQAAgKAFgIQAEgJAHgEQAHgFAKAAQAJAAAGAEQAHADAEAIQAEAIAAALIAAABIAAABIg3AAQAAAPAHAIQAHAIANAAQAJAAAFgDQAGgBADgEIADAAIAAAFQgEADgGADQgHACgJABQgLgBgIgEgAi9gDQgBgOgGgGQgGgHgKAAQgLAAgGAIQgHAGgBANIAwAAIAAAAgADqAlIAAhHIACAAQABAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAGIAAA/gAA0AlIAAhgIADAAIADABQABABAAAFIAABZgAgyAlIAAgzQAAgGgCgDQgCgDgDgCQgDgBgEAAQgGAAgFACIgKAFIgJAGIAAA1IgHAAIAAhHIAEAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAGIAAAEQAHgFAIgEQAIgEAJAAQAGAAAEACQAEABADAFQACAEAAAIIAAA0gAkWAlIAAhaIggAAIAAgGIBHAAIAAAGIggAAIAABagADrgpIAAgCIALgQIAHAAIAAADIgOAPg");
	this.shape.setTransform(-0.3,56.9);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.9,-34.7,78,97.7);


(lib.mc_icon1 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.icon1min();
	this.instance.setTransform(-38.4,-34.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494949").s().p("AAKBAIgCAAIAAgFIAEAAQAFAAACgDQADgDAAgFIAAhUIADAAQAAAAABAAQABAAAAAAQABAAAAAAQAAAAAAABQABABAAAGIAABMQAAAIgDAEQgEAEgIAAIgEAAgACEAmQgGgCgDgDIAAgGIADAAQADADAFACQAGACAHAAQAMAAAEgEQAGgEAAgIQAAgHgFgDQgEgEgMgCQgMgBgGgDQgHgFABgKQgBgKAIgFQAHgFAMAAQAJAAAEACQAGABADADIAAAGIgCAAIgIgFQgEgBgIAAQgKAAgEADQgFAEgBAHQAAAGAFAEQAFADALACIAOACQAFACADAEQADAEABAHQgBALgGAGQgIAGgOAAQgKAAgGgCgAA/AkQgJgFgEgJQgEgJAAgMQAAgKAFgJQAEgJAIgFQAHgFALAAQAJAAAIAEQAGADAFAIQADAJAAAMIAAABIAAABIg6AAQAAAQAHAJQAIAIAOAAQAJAAAHgCQAFgDAEgDIADAAIAAAGQgEADgHADQgHACgLAAQgMAAgHgEgABpgDQAAgPgHgHQgGgHgLAAQgMAAgGAIQgIAHgBAOIAzAAIAAAAgAgsAmQgGgDgDgFQgDgFgBgHQABgIAEgFQAEgFAGgBQAIgCAJAAIAKABIAKABIAAgOQAAgJgFgEQgGgDgIAAQgIAAgHACQgFACgFADIgDAAIAAgHIAMgEQAHgCAJAAQANAAAGAFQAGAFgBAMIAAA3IAAAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQgBgBAAgFIAAgDQgFAFgGADQgGADgKAAQgHAAgFgCgAglACQgGACgDAEQgDADAAAGQAAAJAGAFQAFAEAHAAQAKAAAGgEQAGgDAEgGIAAgTIgJgCIgLgBQgHAAgFACgAhQAoIAAhMIACAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABABQABABAAAGIAABEgAiLAoIglhkIAAgDIAHAAIAjBdIAAAAIAjhdIAGAAIAAADIglBkgAAWgyQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBgBgAhPgyQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape.setTransform(0,56.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.4,-34.9,77,98.3);


(lib.mc_date = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0E75BA").s().p("AhLBZQgMgKAAgWIAAhOIgRAAIAAgcIARAAIAAgnIApAAIAAAnIAeAAIAAAcIgeAAIAABJQAAAKAFAEQAEAEAKAAIALAAIAAAZIgKACIgPACQgWAAgMgKgAArBiQgOAAgKgFQgLgFgGgKQgEgKgBgOQABgQAFgKQAIgKANgFQANgFARAAIAQABQAHAAAGACIAAgMQABgKgHgFQgGgFgOAAQgMAAgKADQgJADgIAFIgLAAIAAgdQAKgFAOgDQANgEATAAQAeAAAQALQAPALAAAZIAABkIgRAAQgJAAgFgDQgFgDgCgIQgIAIgLAEQgKAEgLAAIgDAAgAArAkQgIAFAAAKQAAALAHAFQAGAFAKAAQAIAAAGgDQAGgDAFgFIAAgcQgJgCgMAAQgMAAgHAFgAlLBiQgOAAgLgFQgLgFgGgKQgGgKAAgOQAAgQAIgKQAHgKANgFQANgFASAAIAPABQAHAAAHACIAAgMQAAgKgGgFQgGgFgPAAQgMAAgJADQgKADgHAFIgMAAIAAgdQALgFANgDQAOgEATAAQAeAAAPALQAQALAAAZIAABkIgRAAQgKAAgFgDQgFgDgCgIQgIAIgKAEQgKAEgLAAIgDAAgAlMAkQgHAFAAAKQAAALAGAFQAGAFALAAQAHAAAHgDQAGgDAFgFIAAgcQgKgCgLAAQgNAAgHAFgAjPBeQgMgDgIgFIAAgeIAMAAQAGAEAJAEQAJAEANAAQAMAAAGgDQAHgEAAgHQAAgGgFgEQgGgEgPgBQgYgDgNgKQgMgLgBgTQABgXAPgLQAPgMAcAAQAPAAALADQALACAJAFIAAAdIgMAAQgFgEgJgCQgJgDgLAAQgMAAgFADQgFADAAAHQAAAFAGACQAGADAPACQASACALAFQALAFAFAJQAFAKAAAOQAAAWgPANQgPANgfAAQgSAAgNgEgAHUBgIAAgpIhXAAIAAglIBah0IAoAAIAAB6IAYAAIAAAfIgYAAIAAApgAGdAXIAAABIA3AAIAAhHIgBAAgAFFBgIgvhKIgqBKIgjAAIAAgMIA2hYIg2hRIAAgNIAqAAIArBFIAnhFIAjAAIAAANIgyBUIA4BVIAAAMgAm6BgIAAhgQAAgKgEgEQgEgFgKABQgJAAgJACIgPAEIAABsIgpAAIAAjCIAZAAQAHAAADACQAEABABAGQABAEAAAKIAAAqQALgIANgFQAOgFAPAAQALAAAJADQAIAEAGAJQAFAJAAAQIAABqg");
	this.shape.setTransform(-65.1,61.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E75BA").s().p("AC4B4IgIgBIAAgSIAIAAQAJAAAEgFQAEgFABgKIAAiXIAPAAQAGAAACABQADACACAFIAAAOIAACCQAAAUgJAJQgKAKgSAAIgJgBgAlVB4IAAgIIAUguIg3iAIAAgIIAbAAIAqBlIABAAIAmhlIAZAAIAAAIIhJC2gAEZBHQgLgFgFgKQgGgKAAgOQAAgPAHgKQAIgIAMgEQANgFAQAAIARABIAQADIAAgUQAAgNgIgGQgHgGgPAAQgNABgKADQgKADgHAFIgJAAIAAgVQAJgFAOgEQAMgDASAAQAagBAOALQAOAKAAAYIAABmIgLAAQgIABgEgEQgEgDAAgKQgJAJgKAEQgLAFgPAAQgNAAgKgFgAEoALQgJAGgBAOQABANAIAGQAHAGAMAAQALAAAIgEQAIgFAHgHIAAggIgOgCIgNAAIgDAAQgNAAgJAFgABGBHQgLgFgGgKQgGgKAAgOQABgPAGgKQAIgIAMgEQANgFARAAIARABIAPADIAAgUQAAgNgIgGQgHgGgPAAQgNABgKADQgJADgHAFIgJAAIAAgVQAJgFANgEQAMgDASAAQAbgBAOALQAOAKAAAYIAABmIgMAAQgHABgEgEQgEgDgBgKQgIAJgLAEQgKAFgPAAQgNAAgKgFgABVALQgKAGAAAOQAAANAIAGQAHAGANAAQALAAAIgEQAIgFAGgHIAAggIgNgCIgOAAIgCAAQgOAAgIAFgAgIBKIAAiQIAOAAQAGAAACABQADACABAFIAAAOIAAB6gAhzBKIg1iIIAAgIIAbAAIAqBuIAAAAIAnhuIAZAAIAAAIIg0CIgADNhcQgFgEgBgHQABgHAFgFQAEgFAHAAQAHAAAFAFQAEAFABAHQgBAHgEAEQgFAFgHAAQgHAAgEgFgAgFhcQgFgEAAgHQAAgHAFgFQAEgFAGAAQAHAAAEAFQAFAFABAHQgBAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_1.setTransform(-65.1,93.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E75BA").s().p("Am4BfQgJgDgFgJQgFgJAAgOIAAhsIAcAAIAABlQAAAOAHAFQAFAFALgBQALAAALgEQALgEAIgGIAAhuIAdAAIAACRIgSAAQgFAAgCgDQgDgDgBgLQgLAIgNAFQgOAGgOAAQgMAAgJgEgAoaBaQgKgJAAgUIAAhZIgSAAIAAgUIASAAIAAgnIAdAAIAAAnIAhAAIAAAUIghAAIAABVQAAAMAFAEQAFAEALAAIANAAIAAATIgKABIgNABIgCAAQgSAAgKgIgAHiBeQgMgEgHgFIAAgWIAJAAQAFAFAJAEQAJAEAOAAQAPAAAIgFQAHgGAAgKQABgJgHgFQgGgFgSgCQgWgDgMgKQgMgJAAgTQAAgUAOgLQAOgLAYAAQAQAAAKADQALADAGAEIAAAWIgJAAQgFgEgIgDQgJgDgMAAQgOAAgGAEQgHAFAAAJQAAAJAHACQAHAFARACQARACAKAFQAKAFAGAJQAEAJAAANQAAAWgNAMQgOAMgcAAQgTAAgKgEgAFTBdQgKgFgHgJQgFgKgBgOQABgPAHgKQAHgKANgFQANgFARAAIARABIAOADIAAgRQAAgNgHgGQgHgGgPAAQgNAAgKADQgKAEgHAFIgJAAIAAgVQAKgFAMgEQANgEARAAQAbAAAOAKQAOALAAAYIAABmIgLAAQgIAAgDgDQgEgEgCgKQgHAJgLAFQgLAEgPAAQgNAAgKgFgAFiAiQgJAGgBANQABAOAHAGQAIAGAMAAQALAAAJgFQAHgFAGgHIAAgfIgMgCIgPgBIgCAAQgNAAgJAGgAkgBeQgMgEgHgFIAAgWIAJAAQAFAFAJAEQAKAEANAAQAQAAAHgFQAIgGgBgKQABgJgHgFQgGgFgSgCQgWgDgNgKQgLgJAAgTQAAgUAOgLQAOgLAZAAQAOAAALADQALADAGAEIAAAWIgJAAQgFgEgIgDQgJgDgLAAQgPAAgGAEQgHAFAAAJQAAAJAHACQAHAFARACQARACAKAFQAKAFAGAJQAEAJAAANQAAAWgNAMQgOAMgdAAQgRAAgLgEgAEDBhIAAjCIARAAQAHgBADAEQADAEgBAMIAACvgADBBhIAAjCIAPAAQAJgBACAEQACAEABAMIAACvgAB9BhIAAiRIARAAQAFAAADACQACACABAEIABAOIAAB7gAA9BhIAAhlQgBgMgFgFQgFgFgKAAQgMAAgKAEQgKAEgIAGIAABtIgbAAIAAhlQABgMgGgFQgFgFgJAAQgMAAgKAEQgJAEgJAGIAABtIgdAAIAAiRIASAAQAFAAADAEQADADAAALQAKgIANgGQAOgGAPAAQAMAAAIAFQAKAFAEALQAIgJAPgGQAOgGAPAAQAKAAAIAEQAJADAFAJQAEAIABAPIAABsgACAhFQgEgFAAgGQAAgIAEgEQAFgFAHAAQAHAAAFAFQAEAEABAIQgBAGgEAFQgFAFgHAAQgHAAgFgFg");
	this.shape_2.setTransform(-65.1,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0E75BA").s().p("AAlB7IAAi+IAcAAQAFAAADADQADADABAIQAIgHALgFQALgEAQgBQAOAAANAHQANAIAIAQQAIAPAAAZQAAAbgJARQgJAQgPAIQgPAHgQAAQgMAAgJgDQgJgCgHgGIAAA6gABcgkIgOAFIAABHQAFAEAHACQAGACAIAAQAJAAAIgEQAIgDAEgKQAFgJAAgSQAAgQgFgJQgEgKgHgEQgHgDgJAAQgGAAgIACgAhyBHQgMgKAAgXIAAhOIgRAAIAAgbIARAAIAAgnIApAAIAAAnIAeAAIAAAbIgeAAIAABKQAAAKAFAEQAEAEAKAAIALAAIAAAYIgKADIgPABQgWAAgMgJgAFoA8QgUgUAAgjQAAgWAKgRQALgRARgJQASgJAWgBQARABALADQALADAGAEIAAAeIgQAAQgEgEgHgDQgIgDgKgBQgQAAgKAMQgKAMgBAVQABAYAJAKQAKALAQAAQANAAAIgEQAHgDAFgFIAOAAIAAAcQgHAFgMAEQgMAFgRAAQgkAAgUgUgAleBMQgJgDgGgJQgFgJAAgPIAAhrIAoAAIAABhQABALAFAEQAFAFAKgBQAIAAAIgCIAPgFIAAhtIApAAIAACRIgcAAQgFAAgDgDQgDgDgBgIQgLAHgNAFQgNAEgOAAQgMAAgKgEgAIRBPQgOAAgLgFQgLgFgGgJQgGgKAAgPQAAgPAIgKQAHgKANgEQANgFASAAIAPABQAHABAHACIAAgOQAAgKgGgGQgGgFgPAAQgMAAgJADQgKAEgHAFIgMAAIAAgdQALgFANgEQAOgDATgBQAeAAAPALQAQAMAAAZIAABkIgRAAQgKAAgFgDQgFgDgCgJQgIAJgKAEQgKADgLAAIgDAAgAIQASQgHAEAAALQAAALAGAFQAGAFALAAQAHAAAHgEQAGgDAFgFIAAgcQgKgBgLAAQgNAAgHAFgAEUBOIAAiRIAZAAQAHAAADACQAEACABAGIABARIAAB2gADLBOIAAjCIAZAAQAHAAADABQAEACABAFIABAPIAACrgAghBOIAAiRIAZAAQAHAAABACQAEACABAGIABARIAAB2gAjMBOIAAjCIAZAAQAGAAAEABQADACACAFIABAPIAACrgAm/BOIAAiQIgBAAIgyCQIgaAAIgxiQIgBAAIAACQIgjAAIAAjCIA7AAIAsCAIAAAAIAsiAIA6AAIAADCgAEZhVQgHgGAAgJQAAgJAHgHQAGgGAKAAQAJAAAGAGQAGAHABAJQgBAJgGAGQgGAGgJAAQgKAAgGgGgAgchVQgHgGAAgJQAAgJAHgHQAGgGAKAAQAJAAAEAGQAGAHABAJQgBAJgGAGQgEAGgJAAQgKAAgGgGg");
	this.shape_3.setTransform(-65.1,6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0E75BA").s().p("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");
	this.shape_4.setTransform(-65.1,-25.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135.2,-35.1,140.3,140.4);


(lib.mc_cuerpo = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_cuerpomin();
	this.instance.setTransform(-46.4,-55.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.4,-55.4,120,141);


(lib.mc_contu = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A60A5").s().p("AHVGLQgNgEgIgFIAAggIANAAQAFAFAKAEQAKAEAOAAQANAAAHgEQAHgDAAgIQABgHgHgEQgGgEgQgCQgagCgOgLQgNgMABgWQAAgYAQgNQAQgNAeAAQARAAALADQAMADAJAFIAAAgIgNAAQgFgFgKgDQgIgDgNAAQgNAAgFAEQgGADAAAHQAAAGAHAEQAHADAPACQATACAMAGQAMAFAGAKQAFAKAAAQQAAAXgQAOQgQAOgiAAQgTAAgOgEgAEvF6QgVgVAAgmQAAgZAKgTQAKgSARgKQASgKAVAAQAkAAARATQASAUAAAnIAAAIIAAAFIhmAAQABAQAFAJQAFAJAJADQAJAEAMAAQAOgBAKgDQALgEAHgGIANAAIAAAdQgJAGgOAEQgPAFgYAAQgmAAgUgVgAGCEuQAAgVgIgIQgGgIgOAAQgHAAgGADQgHADgFAIQgEAIgBAPIA6AAIAAAAgAkPF6QgUgVAAgmQAAgZAKgTQAKgSARgKQASgKAVAAQAkAAARATQASAUAAAnIAAAIIAAAFIhmAAQABAQAFAJQAFAJAJADQAJAEAMAAQAOgBAKgDQALgEAHgGIANAAIAAAdQgJAGgOAEQgPAFgXAAQgoAAgUgVgAi7EuQAAgVgIgIQgGgIgOAAQgHAAgGADQgHADgFAIQgEAIgBAPIA6AAIAAAAgADVGNIAAjSIAbAAQAHAAAEACQADACACAFIABAQIAAC5gACHGNIAAidIAbAAQAIAAAEACQADACABAGQACAHgBAMIAACAgAA1GNIAAicIAAAAIg1CcIgbAAIg0icIgBAAIAACcIgmAAIAAjSIA/AAIAvCMIABAAIAtiMIA+AAIAADSgAl1GNIAAiAIgTAAIAAgdIATAAIAAgMQAAgXANgKQANgLAXAAIAQABIAKAEIAAAaIgLAAQgKgBgFADQgGADAAAJIAAALIAfAAIAAAdIgfAAIAACAgAnJGNIAAidIAbAAQAHAAAEACQADACABAGQACAHgBAMIAACAgAplGNIAAjSIAuAAIAACxIBXAAIAAAhgACNDdQgIgHAAgKQAAgJAIgHQAGgHALAAQAKAAAHAHQAGAHAAAJQAAAKgGAHQgHAGgKAAQgLAAgGgGgAnEDdQgHgHAAgKQAAgJAHgHQAHgHAKAAQAKAAAHAHQAHAHgBAJQABAKgHAHQgHAGgKAAQgKAAgHgGgANqBMQgMgLgBgYIAAhUIgSAAIAAgdIASAAIAAgqIAtAAIAAAqIAfAAIAAAdIgfAAIAABPQAAALAEAEQAFAEALAAIAMAAIAAAaIgMADQgHACgJAAIgCAAQgVAAgNgKgACyBMQgMgLAAgYIAAhUIgTAAIAAgdIATAAIAAgqIAsAAIAAAqIAfAAIAAAdIgfAAIAABPQAAALAEAEQAFAEALAAIAMAAIAAAaIgMADQgGACgKAAIgCAAQgVAAgNgKgAlPBJQgWgNgNgXQgMgYAAggQAAgiANgYQANgYAXgNQAXgNAfAAQAOAAAMABIATAFIARAHIAAAkIgSAAQgGgHgLgEQgKgEgQAAQgbAAgOASQgQATABAjQAAAkANATQANASAcAAQASAAAMgGQALgGAJgJIAPAAIAAAjQgMAJgRAFQgQAGgWAAQgfAAgWgNgAPRBQQgMgGgGgKQgHgLAAgPQAAgRAIgLQAIgKAOgEQAOgGATAAIARABIAOADIAAgPQAAgLgGgFQgHgGgQAAQgMAAgKAEQgLADgHAFIgNAAIAAgfQALgFAOgEQAPgEAUAAQAhAAAQAMQARAMAAAbIAABrIgTAAQgKAAgFgDQgFgDgCgJQgJAJgLAEQgMAEgOAAQgPAAgLgFgAPrATQgJAFABALQAAAMAGAFQAGAFAMAAQAIAAAHgDQAHgDAFgGIAAgeQgLgBgMAAQgNAAgHAFgAIRBAQgVgVABgmQgBgXALgTQAKgSARgKQARgKAWAAQAjAAASATQASAUAAAlIgBAIIAAAFIhmAAQABAQAFAJQAGAJAIADQAJAEAMAAQAOgBAKgDQALgEAHgGIAOAAIAAAdQgKAGgOAEQgOAFgYAAQgnAAgUgVgAJkgKQAAgVgHgIQgHgIgNAAQgHAAgHADQgHADgEAIQgFAIgBAPIA6AAIAAAAgAigBMQgSgKgKgRQgLgSAAgaQAAgXALgTQAKgSASgKQATgKAWAAQAXAAASAKQASAKALASQAKATABAXQgBAagKASQgLARgSAKQgSAJgXAAQgWAAgTgJgAiRgfQgJANgBAYQABAZAJAMQAKALAQAAQARAAAKgLQAJgMAAgZQAAgYgJgNQgKgNgRAAQgQAAgKANgARiBTIAAjQIAcAAQAHAAADACQAEACACAFIABAQIAAC3gAMLBTIAAhmQAAgMgFgEQgFgFgJAAQgLABgIACIgRAFIAABzIgsAAIAAibIAeAAQAFAAADADQAEAEACAJQAKgIAQgFQAPgGAQAAQALAAAJAEQAKAEAGAJQAGAKAAARIAABygAG5BTIAAhmQAAgMgFgEQgEgFgLAAQgKABgIACIgRAFIAABzIgsAAIAAibIAeAAQAGAAADADQADAEABAJQAMgIAOgFQAPgGAQAAQAMAAAKAEQAJAEAGAJQAFAKAAARIAABygAEJBTIAAibIAbAAQAIAAADACQAEACAAAGQACAHAAAMIAAB+gABTBTIAAhmQAAgMgFgEQgEgFgLAAQgJABgKACIgQAFIAABzIgqAAIAAibIAcAAQAGAAADADQADAEABAJQALgIAPgFQAPgGARAAQALAAAKAEQAJAEAGAJQAGAKgBARIAABygAn0BTIgRg1IhHAAIgRA1IglAAIAAgMIBFjEIAxAAIBGDEIAAAMgAoQAAIgZhOIAAAAIgZBOIAyAAgArvBTIhFjEIAAgMIAtAAIAyCZIABAAIAziZIAnAAIAAAMIhFDEgAvYBTIAAjQIBIAAQAkAAATAOQATANAAAcQAAATgKALQgLAKgQAEIAAABQAUAEAMALQANAKAAAWQAAAegVAPQgVAQgmAAgAuqAyIAbAAQARAAAIgIQAHgIAAgOQAAgOgHgGQgIgIgRAAIgbAAgAuqgoIAZAAQAOAAAHgGQAIgHAAgNQAAgNgIgGQgHgHgOAAIgZAAgAyNBTIAAjQIBIAAQAkAAATAOQATANAAAcQgBATgJALQgLAKgQAEIAAABQAUAEAMALQANAKAAAWQgBAegUAPQgVAQgmAAgAxfAyIAbAAQAQAAAIgIQAIgIAAgOQAAgOgIgGQgIgIgQAAIgbAAgAxfgoIAYAAQAQAAAHgGQAGgHABgNQgBgNgGgGQgHgHgQAAIgYAAgAEOhbQgHgHAAgKQAAgJAHgHQAHgHAKAAQAKAAAHAHQAGAHABAJQgBAKgGAHQgHAGgKAAQgKAAgHgGgAFBisQgEAAgEgCIAAgQIAIAAQAJAAAEgFQAEgEAAgKIAAiOIAOAAQAGAAACACQADABABAFIAAANIAAB7QAAASgIAJQgJAIgRAAIgJAAgAiljYQgIgEgFgIQgFgIAAgNIAAhmIAbAAIAABgQAAANAFAEQAGAFAJgBQALAAAKgEIASgJIAAhoIAaAAIAACIIgQAAQgFABgCgDQgCgDgBgKQgKAHgMAFQgOAFgNAAQgKAAgJgDgAJ7jaQgJgEgGgKQgGgJABgNQAAgOAGgJQAHgJAMgFQAMgEAPAAIAQABIAOADIAAgSQAAgMgHgGQgHgGgNAAQgMABgKADQgJADgGAFIgJAAIAAgUQAJgFAMgDQAMgEAQAAQAYAAANAKQANAKABAWIAABgIgKAAQgIABgEgEQgDgDgBgJQgHAIgKAFQgLAEgNAAQgMAAgKgFgAKJkRQgIAFgBANQABAMAGAGQAIAGALAAQALgBAHgEQAHgEAGgHIAAgdIgMgCIgNAAIgCAAQgNAAgIAFgAImjdQgJgIAAgTIAAhUIgQAAIAAgTIAQAAIAAglIAaAAIAAAlIAfAAIAAATIgfAAIAABRQABAKAFAEQAEAEAKAAIANAAIAAARIgKACIgMABQgRAAgLgIgAGljeQgPgIgHgPQgHgQAAgVQgBgWAJgQQAIgQANgIQAOgJATAAQAbAAAOAQQAPAQABAiIAAAGIgBADIhbAAQABAYAKALQALAKATAAQANAAAKgEQAJgEAGgFIAJAAIAAATQgIAFgMAEQgMAFgTAAQgUAAgPgJgAHkknQAAgWgJgJQgHgJgOAAQgOAAgKAJQgIAJgDAWIBBAAIAAAAgAB1jaQgJgEgFgKQgGgJAAgNQAAgOAHgJQAHgJAMgFQAMgEAPAAIAQABIANADIAAgSQABgMgIgGQgGgGgOAAQgMABgJADQgJADgHAFIgJAAIAAgUQAKgFALgDQAMgEARAAQAYAAANAKQANAKAAAWIAABgIgKAAQgHABgEgEQgEgDgBgJQgHAIgKAFQgKAEgNAAQgNAAgKgFgACEkRQgIAFgBANQABAMAGAGQAHAGAMAAQAKgBAIgEQAHgEAFgHIAAgdIgLgCIgOAAIgCAAQgMAAgIAFgAAhjdQgJgIAAgTIAAhUIgRAAIAAgTIARAAIAAglIAaAAIAAAlIAeAAIAAATIgeAAIAABRQAAAKAFAEQAEAEAKAAIANAAIAAARIgKACIgLABQgSAAgKgIgAkAjdQgKgIABgTIAAhUIgRAAIAAgTIARAAIAAglIAaAAIAAAlIAfAAIAAATIgfAAIAABRQAAAKAFAEQAEAEALAAIAMAAIAAARIgKACIgLABQgSAAgKgIgApVjeQgPgIgIgPQgJgQAAgVQAAgWAJgQQAIgQAPgIQAOgJATAAQATAAAOAJQAPAIAJAQQAJAQAAAWQAAAVgJAQQgJAPgPAIQgOAJgTAAQgTAAgOgJgApPlAQgLANAAAZQAAAYALAMQAKANARAAQASAAAKgNQAKgMABgYQgBgZgKgNQgKgNgSAAQgRAAgKANgArsjgQgRgLgKgVQgLgUAAgeQABgdAKgVQALgUATgLQASgLAYAAQAOAAAIABQAKACAHAEQAHADAHAEIAAAWIgLAAQgGgGgKgEQgKgFgPAAQgRAAgMAIQgMAIgHAQQgHAPAAAXQAAAkAOASQANASAaAAQARAAALgFQALgGAIgIIAJAAIAAAVQgJAJgPAFQgNAGgUAAQgZAAgSgLgADwjXIAAiIIARAAQAEAAADAEQACADABAMQAHgIAJgGQAJgGANAAIAFAAIADABIAAAWIgDAAIgEAAQgNAAgKAEQgKAFgGAGIAABjgAmCjXIAAheQAAgNgFgEQgFgFgKAAQgMAAgJAFQgKAEgJAFIAABmIgaAAIAAiIIAQAAQAFAAACADQACAEABAKQAKgIANgFQAOgGAPAAQAJAAAIADQAIADAFAJQAEAIABAPIAABkgAFUlzQgEgEAAgGQAAgHAEgEQAFgFAGAAQAHAAAEAFQAFAEAAAHQAAAGgFAEQgEAFgHAAQgGAAgFgFg");
	this.shape.setTransform(2.9,-0.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-113.7,-40.4,233.4,80);


(lib.mc_comprando = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A60A5").s().p("Ak/CPQgRgFgLgGIAAgaIALAAQAJAHANAEQANAEARAAQAZAAANgJQAOgJAAgWIAAgTQgJAKgOAHQgOAGgRABQgTAAgPgJQgQgIgKgTQgJgTgBgeQABgfAKgUQALgVARgJQARgJATAAQASABAMAFQANAFAJAJQABgIAEgEQAEgFAHAAIAQAAIAACqQAAAVgKAOQgKAOgTAHQgSAHgZAAQgXAAgRgEgAkng4QgLAGgHANQgHANgBAYQABAWAFANQAGAOAJAGQAKAFANAAQAOAAALgHQALgFAJgKIAAhTQgIgIgJgDQgKgEgNgBIgCAAQgLAAgKAFgABPBRQgTgLgLgUQgLgUgBgcQABgbALgVQALgUATgLQATgMAYAAQAZAAATAMQATALALAUQALAVAAAbQAAAcgLAUQgLAUgTALQgTALgZAAQgYAAgTgLgABWguQgNARAAAfQAAAgANAQQAOAQAWAAQAXAAAOgQQANgQAAggQAAgfgNgRQgOgQgXgBQgWABgOAQgAD9BXQgOgFgJgGIAAgbIALAAQAGAGAMAFQALAFARAAQASAAAKgGQAJgHAAgMQAAgMgIgFQgIgHgWgCQgbgEgOgKQgPgMAAgYQABgZAQgNQARgNAegBQATABAMADQANAEAIAFIAAAbIgLAAQgGgGgKgDQgKgEgPAAQgRAAgIAFQgIAGAAAMQAAAKAJAGQAIAFAVADQATADANAFQANAGAGAJQAGALAAAQQABAagRAPQgRAPgjAAQgVgBgOgEgAhGBaIAAiwIAWAAQAGAAADAEQADAFABAPQAJgKAMgIQANgHAPgBIAFABIAEABIAAAdIgDAAIgFgBQgQAAgNAGQgNAHgIAHIAACAgAiXBaIAAiwIATAAQAHAAADACQAEACABAGIABARIAACVgAiUhvQgFgHgBgIQABgIAFgGQAGgGAJAAQAIAAAGAGQAGAGAAAIQAAAIgGAHQgGAFgIAAQgJAAgGgFg");
	this.shape.setTransform(0,50.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A60A5").s().p("AI3BtQgTgLgLgUQgLgUAAgdQAAgcALgTQALgUATgMQATgLAZAAQAYAAATALQATAMAMAUQALATAAAcQAAAdgLAUQgMAUgTALQgTALgYAAQgZAAgTgLgAI/gSQgNARgBAeQABAgANAQQANARAXAAQAXAAANgRQANgQABggQgBgegNgRQgNgRgXAAQgXAAgNARgAG8BtQgNgLAAgYIAAhsIgVAAIAAgYIAVAAIAAgwIAjAAIAAAwIAnAAIAAAYIgnAAIAABoQAAAOAGAFQAGAFANAAIAQAAIAAAWIgMADIgQABQgXAAgMgLgAA5BtQgNgLAAgYIAAhsIgVAAIAAgYIAVAAIAAgwIAjAAIAAAwIAnAAIAAAYIgnAAIAABoQAAAOAGAFQAGAFANAAIAQAAIAAAWIgMADIgQABQgXAAgMgLgAlrBvQgQgKgJgTQgJgUgBgfQABggAKgVQALgVARgJQARgJASAAQASAAAMAFQAMAFAIAJIAAhMIATAAQAKgBADAFQADAEAAAPIAADVIgXAAQgFAAgDgFQgDgFAAgOQgJALgPAHQgOAHgSABQgTAAgPgJgAlRgcQgLAGgHAOQgHAMgBAaQABAYAFAOQAFAOAKAGQAJAGANAAQAOAAALgGQAMgGAJgMIAAhYQgHgHgKgEQgKgEgNAAIgCAAQgLAAgKAFgAslBtQgTgLgKgUQgKgVAAgcQABgcAKgTQALgUASgMQASgLAYAAQAjAAAUAVQATAVAAAqIAAAIIAAAEIh4AAQABAgAOANQAOAOAZAAQARgBAMgEQAMgFAIgHIAMAAIAAAYQgKAHgPAGQgQAFgZABQgbAAgTgLgArSANQgBgbgKgMQgLgLgSAAQgSAAgMAMQgMAMgDAaIBVAAIAAAAgALlByQgOgEgIgGIAAgbIALAAQAGAGALAFQAMAFAQAAQATAAAJgHQAJgGAAgNQAAgLgIgGQgIgGgVgDQgbgDgPgMQgOgMAAgWQAAgZARgOQARgNAeAAQASAAANAEQAMADAJAGIAAAaIgLAAQgHgFgKgEQgKgDgOAAQgRAAgIAFQgIAGAAALQgBALAJADQAJAGAUACQAUADANAGQAMAGAHALQAGAKAAARQAAAagRAOQgQAPgjAAQgWAAgOgFgAhjByQgOgEgIgGIAAgbIALAAQAGAGALAFQAMAFAQAAQATAAAJgHQAJgGAAgNQAAgLgIgGQgIgGgVgDQgbgDgPgMQgOgMAAgWQAAgZARgOQARgNAeAAQASAAANAEQAMADAJAGIAAAaIgLAAQgHgFgKgEQgKgDgOAAQgRAAgIAFQgIAGAAALQgBALAJADQAJAGAUACQAUADANAGQAMAGAHALQAEAKAAARQAAAagPAOQgQAPgjAAQgWAAgOgFgAFbB2IAAh6QAAgQgHgGQgHgGgNAAQgPAAgNAGQgNAFgLAHIAACEIgjAAIAAiwIAWAAQAGAAADAEQADAFABANQANgKARgHQASgIAUAAQAMAAALAEQAKAEAGALQAGALAAATIAACCgACYB2IAAiwIATAAQAHAAADACQAEACABAGIABARIAACVgAjBB2IAAiwIAUAAQAGAAAEACQADACABAGIABARIAACVgAocB2IAAh6QAAgQgHgGQgHgGgNAAQgOAAgOAGQgNAFgLAHIAACEIgjAAIAAiwIAWAAQAHAAADAEQADAFAAANQANgKASgHQARgIAUAAQANAAAKAEQAKAEAGALQAHALAAATIAACCgACbhUQgFgGgBgIQABgJAFgFQAGgGAJAAQAIAAAGAGQAGAFAAAJQAAAIgGAGQgGAGgIAAQgJAAgGgGgAi9hUQgGgGAAgIQAAgJAGgFQAGgGAIAAQAJAAAFAGQAGAFABAJQgBAIgGAGQgFAGgJAAQgIAAgGgGg");
	this.shape_1.setTransform(0,16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A60A5").s().p("Ai0CTIAAjnIAhAAQAGAAAEAEQAEADABAKQAKgJANgFQAOgFASgBQASAAAPAJQAQAIAKAUQAKATAAAfQAAAggMAVQgLATgRAKQgSAIgUABQgPgBgLgDQgLgDgIgHIAABGgAhyguQgJACgIAEIAABXQAGAEAIADQAIACAKAAQALAAAJgEQAJgEAGgMQAFgMABgVQgBgTgFgMQgFgMgJgEQgJgFgKAAQgIABgJACgAIrBVQgQgKgJgTQgKgUAAgeQAAggALgWQALgUASgJQARgKATAAQARAAALAEQALAFAIAHIAAhIIAeAAQAIAAAFACQAEABABAHQACAFAAANIAADPIgjAAQgGABgDgEQgEgFgBgLQgJAKgNAGQgNAGgSAAQgUAAgQgKgAJQgsQgKAEgGAMQgFAMgBAUQAAAeAJANQAJAOASgBQALAAAIgDQAJgEAJgIIAAhVQgGgFgIgCQgHgCgKAAQgLAAgJAFgAtPBRQgagPgOgbQgOgbAAgkQAAgmAPgbQAPgcAagOQAbgPAjgBQAQAAAMACQAMADAKADIATAIIAAAoIgTAAQgIgIgMgEQgLgFgSAAQgfAAgRAVQgRAVAAAoQAAApAQAWQAPAUAfAAQAVAAANgHQANgGAKgLIARAAIAAAoQgOAKgTAGQgSAGgaAAQgiAAgZgOgAL9BUQgUgKgMgVQgNgUAAgdQAAgbANgUQAMgWAUgLQAVgLAZAAQAaAAAUALQAVALAMAWQAMAUAAAbQAAAdgMAUQgMAVgVAKQgUALgaAAQgZAAgVgLgANJAvQALgOAAgdQAAgbgLgOQgLgOgTAAQgSAAgLAOQgLAOgBAbQABAdALAOQALANASgBQATABALgNgAqIBUQgVgKgMgVQgMgUAAgdQAAgbAMgUQAMgWAVgLQAUgLAaAAQAZAAAVALQAUALAMAWQANAUAAAbQAAAdgNAUQgMAVgUAKQgVALgZAAQgaAAgUgLgAo9AvQALgOABgdQgBgbgLgOQgLgOgSAAQgTAAgLAOQgLAOAAAbQAAAdALAOQALANATgBQASABALgNgACmBZQgNgHgHgLQgIgMAAgSQAAgTAJgMQAJgKAQgHQAQgGAVAAIATABIARADIAAgRQAAgMgIgGQgHgHgSAAQgOABgLADQgMAEgJAGIgOAAIAAgjQANgGAQgFQAQgEAXAAQAlAAATANQASAOAAAeIAAB6IgUAAQgMAAgGgDQgGgDgDgMQgJAMgNAEQgNAFgQgBQgRAAgNgFgADDAUQgIAGgBAMQABANAHAGQAHAGANABQAJgBAIgEQAIgDAGgHIAAgiQgMgCgOAAQgPAAgJAHgAG7BcIAAh0QAAgNgFgFQgGgFgLAAQgLAAgLADIgSAFIAACDIgyAAIAAiwIAiAAQAGAAAEAEQADAEACALQANgKARgFQARgHASAAQANAAALAEQAKAFAHAKQAHALAAAUIAACBgAATBcIAAiwIAhAAQAHAAADAEQAEAEABAOQAJgKAMgGQANgIAQAAIAGABIAFABIAAAnIgJAAQgSABgNADQgNACgHAFIAAB+gAkLBcIAAh0QAAgNgEgFQgFgFgLAAQgLAAgKADIgRAFIAACDIgyAAIAAh0QAAgNgFgFQgFgFgLAAQgKAAgKADIgSAFIAACDIgxAAIAAiwIAhAAQAHAAADAEQAEADABALQAMgIARgGQAQgHASAAQAOAAALAFQAMAFAFANQAOgLARgFQASgHARAAQANAAALAEQAKAFAGALQAHALAAATIAACBg");
	this.shape_2.setTransform(0,-14.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.2,-29,180.6,94.5);


(lib.mc_cola = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_colamin();
	this.instance.setTransform(-24.4,-23.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.4,-23.9,65,62);


(lib.mc_alaizq = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_alaizquierdamin();
	this.instance.setTransform(-57.4,-22.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-57.4,-22.9,95,55);


(lib.mc_alader = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.img_aladerechamin();
	this.instance.setTransform(-28.4,-49.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-28.4,-49.9,60,74);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

function reloadAd() {
    function A() {
        setTimeout(function() {
            g.style.display = "block"
        }, 22000)
    }
    var g = document.getElementById("reload");
    A(), g.onclick = function() {
        g.style.display = "none", A()
    }
}