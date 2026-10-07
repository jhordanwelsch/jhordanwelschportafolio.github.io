(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// rainbow
	this.instance = new lib.mc_rainbow();
	this.instance.setTransform(150.1,5.9,0.473,0.277,0,0,0,317.4,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(680));

	// entératemás
	this.instance_1 = new lib.mc_descubreaqui();
	this.instance_1.setTransform(150,443.7,0.927,0.927);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(601).to({_off:false},0).to({alpha:1},9).wait(24).to({scaleX:1.03,scaleY:1.03},3).to({scaleX:0.93,scaleY:0.93},3).wait(19).to({scaleX:1.03,scaleY:1.03},3).to({scaleX:0.93,scaleY:0.93},3).wait(15));

	// jeep
	this.instance_2 = new lib.mc_jeepcompass();
	this.instance_2.setTransform(218.1,369.1,0.774,0.774);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(597).to({_off:false},0).to({y:363.5,alpha:1},4).wait(79));

	// cd
	this.instance_3 = new lib.mc_cd();
	this.instance_3.setTransform(76.9,367.5,0.774,0.774);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(597).to({_off:false},0).to({y:363.5,alpha:1},4).wait(79));

	// todo
	this.instance_4 = new lib.mc_todo();
	this.instance_4.setTransform(77.2,290.4,0.3,0.3,0,0,0,0.7,-2.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(588).to({_off:false},0).to({x:94.2,alpha:1},9).wait(83));

	// carro
	this.instance_5 = new lib.mc_auto();
	this.instance_5.setTransform(233,306.2,0.493,0.493);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(588).to({_off:false},0).to({x:220,alpha:1},9).wait(83));

	// texto4
	this.instance_6 = new lib.mc_texto4();
	this.instance_6.setTransform(150,171,1.21,1.21);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(579).to({_off:false},0).to({y:161,alpha:1},9).wait(92));

	// rimac
	this.instance_7 = new lib.mc_rimac();
	this.instance_7.setTransform(150,468.1,0.609,0.609);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(494).to({_off:false},0).to({y:459.8,alpha:1},10).wait(65).to({alpha:0},10).to({_off:true},1).wait(100));

	// texto3
	this.instance_8 = new lib.mc_texto3();
	this.instance_8.setTransform(150,378.7,1.057,1.057);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(484).to({_off:false},0).to({y:361.6,alpha:1},10).wait(75).to({alpha:0},10).to({_off:true},1).wait(100));

	// auto
	this.instance_9 = new lib.mc_auto();
	this.instance_9.setTransform(254.7,146.2,0.105,0.105,0,0,0,102.5,-81.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(475).to({_off:false},0).to({regX:102.6,regY:-81.6,scaleX:0.94,scaleY:0.94,x:246.5,y:146.3,alpha:1},9).wait(85).to({alpha:0},10).to({_off:true},1).wait(100));

	// nota2
	this.instance_10 = new lib.mc_nota2();
	this.instance_10.setTransform(265.1,322.1,0.121,0.121,120,0,0,0.1,1.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(401).to({_off:false},0).to({regX:0,regY:2.1,scaleX:0.4,scaleY:0.4,rotation:0,x:268.5,y:315.3,alpha:1},6).wait(68).to({alpha:0},9).to({_off:true},1).wait(195));

	// nota1
	this.instance_11 = new lib.mc_nota1();
	this.instance_11.setTransform(235.6,360.4,0.13,0.13,-44.9,0,0,-4,4.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(395).to({_off:false},0).to({regX:-3.5,regY:4,scaleX:0.46,scaleY:0.46,rotation:0,x:243.4,y:345.7,alpha:1},6).wait(74).to({alpha:0},9).to({_off:true},1).wait(195));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_377 = new cjs.Graphics().p("AqpHCQhMjlAIgvQAMg9BolHQBqlOANgHQAHgFA+gSQBFgUBMgTQDUg2BKACQBwADJ8A2QAGASAEApQAKBQgGBtIgODaQgHBlADBNIAEB9QADBbgBBDQgEDDgpAlQgoAjp4AwQk6AYk0ARQgohqgmhzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(377).to({graphics:mask_graphics_377,x:93.4,y:395.2}).wait(303));

	// caja
	this.instance_12 = new lib.mc_caja();
	this.instance_12.setTransform(97.6,393.5,0.43,0.43);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(377).to({_off:false},0).to({x:111.9,alpha:1},8).wait(90).to({alpha:0},9).to({_off:true},1).wait(195));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_385 = new cjs.Graphics().p("AowIKQABgeAEgcIAGgJQACgYAAgYIAAi8QAAhggHhcQgJhzAPhvQANhUAGhfIACgKIAFgFIAAgCIgBgVQAEgugDgvIABgRIQ6AAIAAQUg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(385).to({graphics:mask_1_graphics_385,x:219.2,y:392.7}).wait(100).to({graphics:null,x:0,y:0}).wait(195));

	// disco
	this.instance_13 = new lib.mc_disco();
	this.instance_13.setTransform(112.1,394.1,0.43,0.43);
	this.instance_13._off = true;

	this.instance_13.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(385).to({_off:false},0).to({x:188.1},10).wait(80).to({alpha:0},9).to({_off:true},1).wait(195));

	// delaradio
	this.instance_14 = new lib.mc_delaradio();
	this.instance_14.setTransform(150,283.7);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(369).to({_off:false},0).to({y:269.8,alpha:1},8).to({_off:true},108).wait(195));

	// cancionesromanticas
	this.instance_15 = new lib.mc_canciones();
	this.instance_15.setTransform(163.9,239.3);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(363).to({_off:false},0).to({x:150,alpha:1},8).to({_off:true},114).wait(195));

	// conlasmejores
	this.instance_16 = new lib.mc_conlasmejores();
	this.instance_16.setTransform(135.1,208.9);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(357).to({_off:false},0).to({x:150,alpha:1},8).to({_off:true},120).wait(195));

	// tellevas
	this.instance_17 = new lib.mc_texto2();
	this.instance_17.setTransform(169.6,226.9,1.203,1.203);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(353).to({_off:false},0).to({x:150,alpha:1},8).wait(114).to({alpha:0},9).to({_off:true},1).wait(195));

	// beso francés
	this.instance_18 = new lib.mc_besofrances();
	this.instance_18.setTransform(189.7,397.8);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(278).to({_off:false},0).to({x:177.2,alpha:1},7).wait(62).to({alpha:0},6).to({_off:true},1).wait(326));

	// beso3
	this.instance_19 = new lib.mc_beso();
	this.instance_19.setTransform(78.3,400.8,0.33,0.33);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(278).to({_off:false},0).to({x:89.4,alpha:1},7).wait(62).to({alpha:0},6).to({_off:true},1).wait(326));

	// besito
	this.instance_20 = new lib.mc_besito();
	this.instance_20.setTransform(180.3,338.8);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(271).to({_off:false},0).to({x:167.7,alpha:1},7).wait(69).to({alpha:0},6).to({_off:true},1).wait(326));

	// beso2
	this.instance_21 = new lib.mc_beso();
	this.instance_21.setTransform(80.9,342.3,0.33,0.33);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(271).to({_off:false},0).to({x:90,alpha:1},7).wait(69).to({alpha:0},6).to({_off:true},1).wait(326));

	// piquito
	this.instance_22 = new lib.mc_piquito();
	this.instance_22.setTransform(189.7,282);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(264).to({_off:false},0).to({x:173.8,alpha:1},7).wait(76).to({alpha:0},6).to({_off:true},1).wait(326));

	// beso1
	this.instance_23 = new lib.mc_beso();
	this.instance_23.setTransform(78.3,285.8,0.33,0.33);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(264).to({_off:false},0).to({x:89.4,alpha:1},7).wait(76).to({alpha:0},6).to({_off:true},1).wait(326));

	// y eligiendo
	this.instance_24 = new lib.mc_yeligiendo();
	this.instance_24.setTransform(150,206.9);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(254).to({_off:false},0).to({y:199.3,alpha:1},10).wait(83).to({alpha:0},6).to({_off:true},1).wait(326));

	// mensuales
	this.instance_25 = new lib.mc_mensuales();
	this.instance_25.setTransform(155.1,406,1,1,0,0,0,74.3,16.4);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(167).to({_off:false},0).to({y:401.4,alpha:1},8).wait(73).to({alpha:0},6).to({_off:true},1).wait(425));

	// 25
	this.instance_26 = new lib.mc_25();
	this.instance_26.setTransform(181.9,343.3,4.794,4.794,0,0,0,16,16.4);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(159).to({_off:false},0).to({x:157.2,alpha:1},8).wait(23).to({scaleX:5.55,scaleY:5.55},3).to({scaleX:4.79,scaleY:4.79},3).wait(19).to({scaleX:5.55,scaleY:5.55},3).to({scaleX:4.79,scaleY:4.79},3).wait(27).to({alpha:0},6).to({_off:true},1).wait(425));

	// us
	this.instance_27 = new lib.mc_us();
	this.instance_27.setTransform(59.6,315.4,1,1,0,0,0,20.9,14.3);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(151).to({_off:false},0).to({x:67,alpha:1},8).wait(89).to({alpha:0},6).to({_off:true},1).wait(425));

	// desde
	this.instance_28 = new lib.mc_desde();
	this.instance_28.setTransform(65.2,283);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(143).to({_off:false},0).to({x:75.2,alpha:1},8).wait(97).to({alpha:0},6).to({_off:true},1).wait(425));

	// texto1
	this.instance_29 = new lib.mc_texto1();
	this.instance_29.setTransform(148.6,241.5,1.06,1.06);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(133).to({_off:false},0).to({y:232.5,alpha:1},10).wait(105).to({alpha:0},6).to({_off:true},1).wait(425));

	// foot
	this.instance_30 = new lib.mc_foot2();
	this.instance_30.setTransform(389.2,558.7,1,1,0,0,0,80.2,24);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(118).to({_off:false},0).to({x:-33.2},8).wait(554));

	// logo
	this.instance_31 = new lib.mc_logo();
	this.instance_31.setTransform(-90.6,36.9,1.752,1.752,0,0,0,50,4.9);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(110).to({_off:false},0).to({x:104.3},8).wait(562));

	// fondo2
	this.instance_32 = new lib.mc_fondosolido();
	this.instance_32.setTransform(150,300);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(100).to({_off:false},0).to({alpha:1},10).wait(570));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_40 = new cjs.Graphics().p("AmxBmIAAjLINjAAIAADLg");
	var mask_2_graphics_41 = new cjs.Graphics().p("AmxCTIAAklINjAAIAAElg");
	var mask_2_graphics_42 = new cjs.Graphics().p("AmxDBIAAmBINjAAIAAGBg");
	var mask_2_graphics_43 = new cjs.Graphics().p("AmxDuIAAnbINjAAIAAHbg");
	var mask_2_graphics_44 = new cjs.Graphics().p("AmxEbIAAo1INjAAIAAI1g");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_2_graphics_40,x:144.6,y:522.2}).wait(1).to({graphics:mask_2_graphics_41,x:144.6,y:526.7}).wait(1).to({graphics:mask_2_graphics_42,x:144.6,y:531.2}).wait(1).to({graphics:mask_2_graphics_43,x:144.6,y:535.7}).wait(1).to({graphics:mask_2_graphics_44,x:144.6,y:540.3}).wait(66).to({graphics:null,x:0,y:0}).wait(570));

	// rayitas
	this.instance_33 = new lib.mc_rayitas();
	this.instance_33.setTransform(150,550.3,0.295,0.295);
	this.instance_33._off = true;

	this.instance_33.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(40).to({_off:false},0).to({_off:true},70).wait(570));

	// boca
	this.instance_34 = new lib.mc_boca();
	this.instance_34.setTransform(149.9,511.2,0.043,0.043);
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(28).to({_off:false},0).to({scaleX:0.38,scaleY:0.38},10).to({scaleX:0.3,scaleY:0.3},2).to({_off:true},70).wait(570));

	// carro derecha
	this.instance_35 = new lib.mc_carroderecha();
	this.instance_35.setTransform(342.6,527.4,0.295,0.295);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(28).to({_off:false},0).to({x:218.8},10).to({_off:true},72).wait(570));

	// carro izquierda
	this.instance_36 = new lib.mc_carroizquierda();
	this.instance_36.setTransform(-39.1,524.6,0.295,0.295);
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(28).to({_off:false},0).to({x:78.8},10).to({_off:true},72).wait(570));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_18 = new cjs.Graphics().p("Ai5KgIAA0/IFzAAIAAU/g");
	var mask_3_graphics_19 = new cjs.Graphics().p("Ak/KgIAA0/IJ/AAIAAU/g");
	var mask_3_graphics_20 = new cjs.Graphics().p("AnEKgIAA0/IOJAAIAAU/g");
	var mask_3_graphics_21 = new cjs.Graphics().p("ApKKgIAA0/ISVAAIAAU/g");
	var mask_3_graphics_22 = new cjs.Graphics().p("ArPKgIAA0/IWfAAIAAU/g");
	var mask_3_graphics_23 = new cjs.Graphics().p("AtUKgIAA0/IapAAIAAU/g");
	var mask_3_graphics_24 = new cjs.Graphics().p("AvaKgIAA0/Ie1AAIAAU/g");
	var mask_3_graphics_25 = new cjs.Graphics().p("AxfKgIAA0/MAi/AAAIAAU/g");
	var mask_3_graphics_26 = new cjs.Graphics().p("AzkKgIAA0/MAnJAAAIAAU/g");
	var mask_3_graphics_27 = new cjs.Graphics().p("A1qKgIAA0/MArVAAAIAAU/g");
	var mask_3_graphics_28 = new cjs.Graphics().p("A3vKgIAA0/MAvfAAAIAAU/g");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_3_graphics_18,x:0.8,y:468.1}).wait(1).to({graphics:mask_3_graphics_19,x:14.1,y:468.1}).wait(1).to({graphics:mask_3_graphics_20,x:27.4,y:468.1}).wait(1).to({graphics:mask_3_graphics_21,x:40.8,y:468.1}).wait(1).to({graphics:mask_3_graphics_22,x:54.1,y:468.1}).wait(1).to({graphics:mask_3_graphics_23,x:67.4,y:468.1}).wait(1).to({graphics:mask_3_graphics_24,x:80.8,y:468.1}).wait(1).to({graphics:mask_3_graphics_25,x:94.1,y:468.1}).wait(1).to({graphics:mask_3_graphics_26,x:107.5,y:468.1}).wait(1).to({graphics:mask_3_graphics_27,x:120.8,y:468.1}).wait(1).to({graphics:mask_3_graphics_28,x:134.1,y:468.1}).wait(82).to({graphics:null,x:0,y:0}).wait(570));

	// besitos
	this.instance_37 = new lib.mc_besitos();
	this.instance_37.setTransform(149.6,465.4,0.295,0.295);
	this.instance_37._off = true;

	this.instance_37.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(18).to({_off:false},0).to({_off:true},92).wait(570));

	// seguros vehiculares
	this.instance_38 = new lib.mc_segurosvehiculares("synched",0);
	this.instance_38.setTransform(150.4,422.6,0.294,0.294);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(8).to({startPosition:0,_off:false},0).to({y:416.6,alpha:1},10).to({_off:true},92).wait(570));

	// fondo
	this.instance_39 = new lib._300x600fondo();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[]},119).to({state:[]},1).wait(560));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


// symbols:
(lib._300x600caja = function() {
	this.initialize(img._300x600caja);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,265);


(lib._300x600carro = function() {
	this.initialize(img._300x600carro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,194);


(lib._300x600cd = function() {
	this.initialize(img._300x600cd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,25);


(lib._300x600disco = function() {
	this.initialize(img._300x600disco);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,265);


(lib._300x600fondo = function() {
	this.initialize(img._300x600fondo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib._300x600foot = function() {
	this.initialize(img._300x600foot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,527,83);


(lib._300x600jeepcompass = function() {
	this.initialize(img._300x600jeepcompass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,38);


(lib.mc_yeligiendo = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324E8B").s().p("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");
	this.shape.setTransform(0,2.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-93.2,-24.7,186.6,54.3);


(lib.mc_us = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("ACFBsIAAgZQgPAAgMgEQgLgEgJgHIAAgWIAKAAQAFAHAJAFQAKAFANABIAAg+QgPgCgKgGQgKgGgGgJQgFgJAAgOQAAgVANgMQANgNAWgCIAAgPIAQAAIAAAPQANABAJADQAKAEAIAFIAAAVIgKAAQgGgGgHgEQgHgEgKgBIAAA5QARAFALAGQALAFAFAIQAFAJAAAPQAAAYgNAMQgNANgYACIAAAZgACWBAQANgCAHgIQAHgHAAgMQAAgIgEgGQgDgFgGgDIgOgGgABzhAQgGAHABAKQAAALAGAGQAGAGANAEIAAg0QgNABgHAHgAgUBQQgMgEgKgHIAAgWIAJAAQAGAHALAEQAKAFAPAAQARAAAJgHQAJgHAAgOQAAgLgFgGQgFgFgJgDIgUgGQgOgEgKgFQgKgGgFgKQgFgJAAgOQAAgXAPgNQAPgMAXAAQAQAAALADQAMADAIAFIAAAWIgKAAQgGgGgJgDQgJgDgMgBQgPABgIAGQgIAHAAAMQAAAJAEAFQAFAGAHADIARAFQASAFALAGQAMAGAGAIQAFAJAAAQQAAAZgPAOQgQANgdAAQgQAAgNgEgAioBNQgPgIgIgOQgIgPAAgWIAAhtIAbAAIAABuQAAARAFAJQAFAKAKAEQAJADANAAQALAAAJgEQAJgDAEgKQAFgKAAgQIAAhuIAZAAIAABtQAAAhgQAQQgRARggAAQgVAAgPgHg");
	this.shape.setTransform(21.4,16.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,5.8,40.2,21.7);


(lib.mc_todo = function() {
	this.initialize();

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5nQ6Qi4ooAVhwQAciSD7sVQD/sjAegSQARgLCWgsQCkgwC4gvQH/iBCxAFQEPAJX4CAQAPAtAMBhQAXDCgQEFQgMDSgWE5QgOD0AGC7IAKEtQAHDcgDCfQgKHXhiBXQhgBW3wBzQr1A5rlApQhgj+hbkVg");
	mask.setTransform(-170.4,52.1);

	// caja
	this.instance = new lib._300x600caja();
	this.instance.setTransform(-260.4,-82.1);

	this.instance.mask = mask;

	// Capa 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aq7U/QjUgrjFgtQAKiBAGiqQAOlUgMjMQgRk3ALnDQAPooA3kMQAzj5GjABQDRAADIAyIToUmQknFpk2FtQprLbhPALQgJABgPAAQhqAAl3hMg");
	mask_1.setTransform(113.6,54.9);

	// disco
	this.instance_1 = new lib._300x600disco();
	this.instance_1.setTransform(-68.2,-65.7,0.884,0.884);

	this.instance_1.mask = mask_1;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-260.4,-82.1,438.8,265);


(lib.mc_texto4 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("AnQBfIAAgVQgNgBgJgDQgKgDgJgFIAAgbIALAAQAFAFAHAFQAHAEALACIAAgtQgOgEgJgEQgKgFgFgJQgFgIAAgNQABgNAFgJQAGgKAKgFQAKgFANgCIAAgNIAUAAIAAANQAKABAIADQAJACAHAEIAAAZIgLAAIgKgIQgGgDgHgBIAAApQAPAEAKAGQAKAFAFAHQAEAJAAANQAAAUgMAMQgMAMgXACIAAAWgAm9AyQAKgCAEgFQAEgFAAgHQAAgIgFgFQgEgEgJgCgAnbg0QgEAFAAAHQAAAHAEAEQAEAEAJADIAAgkQgIACgFAEgAjPBHQgKgDgIgFIAAgYIANAAQAEAEAHADQAHADALAAQAJAAAHgDQAGgDAEgFQAEgGAAgJQAAgNgGgGQgHgEgJAAQgKAAgGABQgGAEgDADIgUAAIAAhYIBdAAIAAAbIhEAAIAAAkIAAAAQAEgDAHgCQAHgCAKAAQAOAAALAFQAKAFAHAKQAGAJAAARQAAAQgIAMQgIAMgOAGQgOAGgTAAQgPAAgKgDgApaBHQgMgEgJgFIAAgaIALAAQAFAFAJAEQAJAEANABQAPAAAGgFQAHgFAAgJQAAgIgEgEQgFgFgHgCIgRgFQgOgEgJgEQgJgFgFgJQgEgJAAgNQAAgPAHgKQAHgKAMgFQAMgFAQAAQANAAALADQALADAIAEIAAAZIgLAAQgGgEgIgDQgHgDgKAAQgMAAgHAEQgHAEAAAKQAAAGAEAEQADADAGADIAQAFQAQAEALAFQAKAGAFAHQAFAJAAAOQAAAXgOAMQgPAMgcAAQgRAAgLgDgArsA6QgQgQAAgeIAAhcIAiAAIAABdQAAAOAEAIQADAIAHADQAHADAKAAQAKAAAGgDQAHgDADgIQADgIAAgOIAAhdIAdAAIAABcQAAAUgGAOQgGAOgNAHQgNAHgWAAQgfAAgQgQgAJyBGQgIgEgFgIQgFgIAAgLQAAgMAGgIQAGgIAKgEQAKgEAOAAIAMAAIALACIAAgJQAAgIgFgEQgFgEgLAAQgJAAgIADQgHACgGAEIgJAAIAAgWQAIgEALgDQAKgDAPAAQAYAAAMAJQAMAIAAAUIAABOIgNAAQgIAAgEgCQgEgCgBgHQgGAHgJADQgIADgLAAQgLAAgIgEgAKFAZQgGAEAAAIQAAAIAFAEQAFAEAIAAQAGAAAFgCIAJgGIAAgWQgIgCgIAAQgKAAgGAEgAH0BHQgHgDgFgHQgEgHAAgLIAAhUIAgAAIAABMQAAAJAEADQAFADAHAAQAHAAAGgCIAMgEIAAhVIAgAAIAABxIgWAAQgEAAgCgCQgDgCgBgGQgIAFgKAEQgLADgKAAQgKAAgIgDgAGKBHQgKgDgGgEIAAgYIAKAAQAEAEAHADQAHADAKAAQAKAAAFgDQAFgCAAgGQAAgFgEgDQgEgDgMgBQgTgCgKgIQgKgIAAgPQAAgSAMgJQAMgJAWgBQAMABAJACQAIACAHADIAAAYIgKAAQgEgDgGgDQgHgCgJAAQgJAAgFADQgEACABAFQgBAFAFACQAFACAMAAQAOACAIAEQAJAEAEAHQAEAIAAALQAAARgLAKQgMAKgZABQgOgBgKgCgACQA6QgPgPAAgcQAAgRAHgNQAIgOAMgHQANgHAQAAQAaAAANAOQANAOAAAbIAAAGIAAAEIhLAAQABALAEAHQADAGAHADQAGACAJAAQAKAAAIgDQAHgCAGgEIAKAAIAAAVQgHAEgLADQgKAEgSAAQgcAAgPgQgAC5gXQgFAAgFACQgFADgDAGQgDAGgCAIIAsAAQgBgNgFgGQgFgGgJAAIgBAAgALdBIIAAiYIAUAAIAIABQADACABAEQABAEgBAHIAACGgAFHBIIAAhLQAAgIgDgDQgDgDgIAAQgHAAgHABIgMAEIAABUIggAAIAAhxIAWAAQAEAAACACQADADABAHQAIgGALgEQALgEALAAQAJAAAHADQAHACAEAHQAEAHABANIAABTgABQBIIAAhLQAAgIgDgDQgEgDgHAAQgHAAgGABIgLAEIAABUIggAAIAAhLQAAgIgEgDQgDgDgFAAQgHAAgGABIgLAEIAABUIghAAIAAhxIAWAAQAEAAADACQACADABAHQAIgGAKgEQAJgEALAAQAKAAAHADQAHADAEAJQAJgHALgEQALgEAMAAQAIAAAHADQAHADAEAHQAEAHAAAMIAABTgAlZBIIAAgbIArgpIAQgPQAGgIADgGQADgGAAgGQAAgJgGgFQgGgFgKAAQgLAAgIAEQgJADgFAFIgLAAIAAgXIAMgHQAHgDAJgCQAIgDAKAAQAZAAAPALQAOALAAAWQAAALgFAJQgEAKgJAIQgIAJgMAKIgdAaIBEAAIAAAbg");
	this.shape.setTransform(-36.3,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#324E8B").s().p("AKCFnQgLgDgHgEIAAgJIAFAAQAFAEAKADQAKADANAAQALAAAIgDQAJgDAFgGQAFgHAAgLIAAgTQgHAJgLAGQgKAFgOAAQgLAAgLgFQgKgFgHgNQgGgMAAgVQAAgVAHgNQAIgNALgGQALgGAMAAQANAAAKAEQAJAEAGAHQABgGABgDQABgEAFAAIADAAIAABxQABANgHAIQgGAIgLAFQgLAEgOAAQgPAAgLgDgAKKDeQgJAEgGALQgGALAAAUQAAASAFALQAGAKAIAFQAHAEAKAAQANAAAKgHQAKgGAHgKIAAg7QgGgIgJgEQgJgEgMAAQgKAAgJAEgAHgFpIAAgEIARgoIgthnIAAgDIAKAAIApBdIAnhdIAKAAIAAADIg+CTgARCFEQgCgDAAgDQAAgEACgCQACgDAEAAQADAAADADQADACAAAEQAAADgDADQgDACgDAAQgEAAgCgCgAPbFCQgJgDgEgIQgFgHAAgLQAAgLAGgIQAGgHAKgEQAKgDAOAAIAPAAIAPADIAAgVQAAgNgIgFQgIgGgMAAQgNAAgJADQgIADgGAEIgFAAIAAgJQAHgEAKgDQALgDAOAAQARAAALAIQAKAHAAASIAABTIgDAAQgFAAgCgCQgBgCAAgHIAAgEQgHAHgJAFQgJAEgOAAQgLAAgIgEgAPmEOQgJADgEAFQgFAFAAAJQABAOAHAGQAIAGAMAAQANAAAIgGQAKgFAGgIIAAgcIgOgDIgPgBQgLAAgHADgAL1FCQgJgDgEgIQgFgHAAgLQAAgLAGgIQAGgHAKgEQALgDANAAIAQAAIAOADIAAgVQAAgNgIgFQgIgGgMAAQgNAAgIADQgKADgFAEIgEAAIAAgJQAGgEALgDQAJgDAOAAQASAAAKAIQAKAHABASIAABTIgDAAQgFAAgBgCQgCgCAAgHIAAgEQgHAHgJAFQgJAEgOAAQgLAAgIgEgAL/EOQgHADgFAFQgFAFAAAJQABAOAHAGQAHAGAMAAQAOAAAJgGQAIgFAHgIIAAgcIgOgDIgQgBQgJAAgJADgAOpFFIAAhUQAAgJgDgFQgDgFgFgCQgGgCgGABQgJAAgHACIgQAHIgOAKIAABXIgLAAIAAhyIAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQACACAAAHIAAAHQAJgIAOgGQAMgFAPgBQAJAAAGADQAGADAFAGQAEAHAAAMIAABVgARDEmIgBh7IAMAAIgBB7gAtVBXQgLgDgHgEIAAgJIAEAAQAGAEAKADQAKADANAAQAKAAAJgDQAJgDAFgGQAFgHABgLIAAgTQgIAJgKAGQgLAFgOAAQgLAAgKgFQgLgFgGgNQgHgMAAgTQAAgVAHgNQAIgNALgGQALgGANAAQANAAAJAEQAJAEAHAHQgBgGACgDQACgEAEAAIADAAIAABvQAAANgGAIQgHAIgLAFQgKAEgOAAQgPAAgLgDgAtMgwQgJAEgHALQgFALgBAUQABAQAEALQAFAKAIAFQAJAEAIAAQAOAAAKgHQAKgGAIgKIAAg5QgIgIgIgEQgIgEgMAAQgLAAgIAEgACGA0QgHgDgFgHQgEgGAAgLIAAhUIALAAIAABSQABAJACAFQADAFAFACQAFACAGAAQANgBALgFQANgFAJgIIAAhWIALAAIAABwIgFAAQgEAAgBgCQgBgCAAgIIAAgFQgJAIgNAFQgNAFgNABQgIAAgHgDgArdA0QgGgDgFgHQgDgGgBgLIAAhUIAMAAIAABSQgBAJADAFQADAFAFACQAFACAGAAQANgBAMgFQAMgFAJgIIAAhWIALAAIAABwIgFAAQgEAAgBgCQgBgCAAgIIAAgFQgKAIgMAFQgNAFgNABQgJAAgHgDgAPcAvQgLgHgHgNQgGgNAAgQQAAgSAHgNQAGgNAMgHQALgIAPAAQAOAAAKAGQALAGAGALQAFAMABATIAAADIAAACIhXAAQAAAWALANQALAMAVAAQAOAAAJgEQAJgDAEgFIAFAAIAAAIQgGAFgKAEQgKAEgPAAQgSAAgMgHgAPcgqQgLALgCAVIBMAAQgBgXgKgKQgJgJgQAAQgRAAgKAKgANhAxQgKgGgHgMQgHgNAAgTQAAgWAIgNQAHgNALgGQAMgGAMAAQANAAAJAEQAJAEAHAHIAAg1IADAAQAFAAABACQACACAAAHIAACNIgFAAQgEAAgBgCQgBgDAAgIIAAgHQgHAJgLAGQgKAGgOAAQgMAAgKgFgANqgwQgJAFgHALQgFALAAAUQAAAQAFALQAFALAIAEQAIAFAJAAQAOgBAJgGQALgGAHgLIAAg6QgHgIgJgEQgIgEgNAAQgJAAgJAEgAL4AzQgIgEgFgEIAAgJIAEAAQAEAEAIAEQAIADANABQAPAAAIgHQAIgGgBgMQABgKgHgFQgHgFgRgBQgRgCgKgHQgJgHAAgOQAAgPAKgIQALgIARAAQANAAAIADQAIADAFADIAAAJIgFAAQgEgEgHgCQgHgDgLAAQgOAAgGAFQgIAFAAALQAAAJAHAFQAHAFAQADQAMACAJADQAHADAFAFQAFAGAAAKQAAAQgLAJQgKAJgVAAQgPAAgJgDgAKSAvQgLgHgGgNQgGgNgBgQQAAgSAHgNQAGgNAMgHQALgIAPAAQAPAAAKAGQAKAGAHALQAFAMAAATIAAADIAAACIhWAAQAAAWALANQAKAMAWAAQANAAAKgEQAIgDAEgFIAGAAIAAAIQgHAFgKAEQgKAEgPAAQgSAAgMgHgAKSgqQgKALgCAVIBLAAQgBgXgJgKQgJgJgRAAQgQAAgLAKgAIXAxQgKgGgHgMQgGgNAAgTQAAgWAIgNQAGgNAMgGQALgGAMAAQAOAAAJAEQAJAEAGAHIAAg1IAEAAQAFAAABACQACACAAAHIAACNIgGAAQgEAAAAgCQgCgDAAgIIAAgHQgGAJgMAGQgKAGgNAAQgMAAgLgFgAIggwQgJAFgGALQgGALAAAUQAAAQAGALQAEALAJAEQAIAFAJAAQANgBAKgGQAKgGAHgLIAAg6QgGgIgJgEQgIgEgNAAQgKAAgJAEgAEkAyQgIgDgFgIQgFgHAAgLQAAgLAGgIQAGgFAKgEQALgDANAAIAPAAIAPADIAAgVQAAgNgIgFQgHgGgNAAQgNAAgJADQgIADgGAEIgFAAIAAgJQAIgEAKgDQAKgDAOAAQARAAALAIQAKAHAAASIAABRIgDAAQgFAAgBgCQgCgCAAgHIAAgEQgHAHgJAFQgJAEgOAAQgLAAgIgEgAEuAAQgHABgFAFQgFAFAAAJQAAAOAIAGQAHAGANAAQANAAAIgGQAKgFAGgIIAAgbIgOgCIgQgBQgJAAgJADgAAeAvQgMgHgGgNQgHgNAAgQQABgTAGgNQAHgNAMgHQAMgHAQAAQAOABAJADQAJADAEAEIAAAJIgFAAQgEgEgHgDQgIgEgMAAQgNAAgJAGQgJAGgGALQgGALABAQQAAAVALANQALANAUAAQANAAAJgEQAHgEAEgFIAGAAIAAAIQgEAEgFADQgFADgIACQgHACgKAAQgRAAgMgHgAj2AvQgMgHgGgNQgGgNAAgQQAAgSAGgNQAHgNALgHQAMgIAOAAQAPAAAKAGQALAGAGALQAGAMgBATIAAADIAAACIhWAAQAAAWALANQALAMAWAAQANAAAJgEQAIgDAFgFIAFAAIAAAIQgGAFgKAEQgKAEgPAAQgSAAgMgHgAj2gqQgKALgDAVIBLAAQAAgXgKgKQgJgJgRAAQgPAAgLAKgAocAvQgMgHgGgNQgHgNAAgQQAAgSAHgNQAGgNAMgHQAMgIAQAAQAQAAAMAIQAMAHAHANQAGANABASQgBAQgGANQgHANgMAHQgMAHgQAAQgQAAgMgHgAofgnQgLANAAAYQAAAWALANQAMAMATABQAUgBALgMQALgNAAgWQAAgYgLgNQgLgNgUAAQgTAAgMANgAvFAvQgMgHgGgNQgGgNAAgQQAAgSAGgNQAHgNALgHQAMgIAOAAQAPAAAKAGQALAGAGALQAGAMAAATIAAADIAAACIhXAAQAAAWALANQALAMAWAAQANAAAJgEQAIgDAFgFIAFAAIAAAIQgGAFgKAEQgKAEgPAAQgSAAgMgHgAvFgqQgKALgDAVIBLAAQAAgXgKgKQgJgJgRAAQgPAAgLAKgAw9AyQgLgEgIgGIAAgLIAGAAQAGAHAJAEQALAEAQABQAMAAAJgEQAIgDAFgHQAFgIABgLQAAgLgGgFQgFgGgJgDQgJgEgMgCQgNgEgKgFQgKgFgFgHQgEgIgBgNQABgLAEgJQAGgIALgFQAJgGAQAAQAOAAAKAEQAKADAHAFIAAAKIgFAAQgHgFgIgEQgIgDgNAAQgMAAgJAEQgHADgEAHQgEAGABAJQgBAKAFAGQAEAGAJADIASAGQAPAEALAFQALAFAFAIQAGAHAAAMQAAAPgHAJQgGAKgMAEQgLAFgPAAQgRAAgMgEgAGIA1IAAhwIAFAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAABQACACAAAIIAAAHIAKgKQAGgEAGgDQAIgDAIAAIADAAIABABIAAAIIgBAAIgDAAQgIAAgIADQgGADgGAFIgKALIAABSgADxA1IAAiYIADAAQAFAAACACQABACAAAHIAACNgAgbA1IAAhwIADAAQAFgBABADQABACABAIIAABkgAhFA1IAAhSQAAgJgDgFQgEgFgEgCQgGgCgHABQgIAAgIACIgPAHIgPAKIAABVIgLAAIAAiYIAEAAQAFAAABACQACACgBAHIAAAvQAKgIANgGQANgFAPgBQAIAAAGADQAHADAFAGQADAHAAAMIAABTgAlSA1Ig2iTIAAgFIAKAAIAzCKIAAAAIAyiKIAKAAIAAAFIg3CTgApyA1IAAhwIAGAAQAAAAABAAQABAAAAAAQABAAAAABQABAAAAABQABACAAAIIAAAHIAKgKQAGgEAHgDQAHgDAIAAIAEAAIABABIAAAIIgBAAIgDAAQgJAAgHADQgGADgHAFIgKALIAABSgAgbhPQgDgCAAgEQAAgDADgCQACgCADAAQADAAADACQABACAAADQAAAEgBACQgDACgDAAQgDAAgCgCgAndi+IABh6IAJAAIACB6gAFtjQQgHgDgEgHQgEgGAAgLIAAhWIALAAIAABUQAAAJACAFQADAFAFACQAFACAGAAQANgBAMgFQAMgFAJgIIAAhYIAMAAIAAByIgGAAQgDAAgBgCQgCgCAAgIIAAgFQgJAIgMAFQgNAFgNABQgJAAgHgDgAEmjUQgGgGAAgOIAAhRIgQAAIAAgIIAQAAIAAggIALAAIAAAgIAeAAIAAAIIgeAAIAABQQAAAKAEAEQAFAEAKAAIAOAAIAAAIIgIABIgJAAQgOAAgHgGgACIjVQgLgHgHgNQgGgNAAgSQAAgSAGgNQAHgNAMgHQALgIAPAAQAOAAALAGQAKAGAGALQAFAMAAATIAAADIAAACIhWAAQAAAYALANQALAMAVAAQAOAAAJgEQAIgDAFgFIAFAAIAAAIQgGAFgKAEQgKAEgQAAQgRAAgMgHgACIkwQgKALgDAVIBMAAQgBgXgJgKQgKgJgQAAQgQAAgLAKgABBjUQgGgGAAgOIAAhRIgPAAIAAgIIAPAAIAAggIALAAIAAAgIAeAAIAAAIIgeAAIAABQQAAAKAEAEQAFAEALAAIANAAIAAAIIgIABIgJAAQgNAAgIgGgAgpjSQgJgDgEgIQgFgHAAgLQAAgLAGgIQAGgHAKgEQALgDANAAIAOAAIAOADIAAgVQAAgNgIgFQgHgGgLAAQgNAAgJADQgJADgFAEIgEAAIAAgJQAGgEALgDQAKgDANAAQAQAAALAIQAJAHABASIAABTIgDAAQgFAAgBgCQgCgCAAgHIAAgEQgHAHgIAFQgIAEgOAAQgLAAgIgEgAgfkGQgHADgFAFQgFAFAAAJQAAAOAIAGQAHAGAMAAQAOAAAHgGQAIgFAHgIIAAgcIgOgDIgOgBQgKAAgIADgAj+jVQgLgHgHgNQgFgNAAgSQAAgSAGgNQAGgNAMgHQAMgIAOAAQAOAAALAGQAKAGAGALQAGAMAAATIAAADIAAACIhXAAQAAAYALANQAMAMAVAAQAOAAAIgEQAJgDAFgFIAEAAIAAAIQgGAFgJAEQgLAEgPAAQgSAAgMgHgAj+kwQgKALgDAVIBMAAQgBgXgJgKQgKgJgQAAQgQAAgLAKgAh8jPIgshuIAAgEIAJAAIAoBjIAAAAIAohjIAJAAIAAAEIgsBugAk4jPIAAiaIAEAAQAEAAACACQABACAAAHIAACPgAmsjPIAAiaIAMAAIAACRIBQAAIAAAJgAndlLQgDgCAAgEQAAgDADgDQACgCADAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgCgDgAjnlNIAAgDIARgZIAKAAIAAAFIgUAXg");
	this.shape_1.setTransform(2.1,0.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.9,-35.4,225.5,72.5);


(lib.mc_texto3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("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");
	this.shape.setTransform(0,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#324E8B").s().p("AGOBeIAAiUIAFAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQACACAAAIIAAAJIAKgLQAHgFAIgDQAIgDAKAAQALAAAKAFQAKAFAHAMQAGANAAAUQAAAWgHANQgIANgLAFQgLAGgMAAQgOAAgJgEQgJgEgGgGIAAAxgAGygrQgIAEgGAFIgLALIAAA6QAGAHAJAEQAJAEAMAAQAKAAAJgEQAJgEAGgLQAGgLAAgTQAAgSgFgKQgGgLgHgEQgIgEgJAAQgJAAgHADgAinBeIAAiUIAFAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQACACAAAIIAAAJIAKgLQAHgFAIgDQAIgDAKAAQALAAAKAFQAKAFAHAMQAGANAAAUQAAAWgHANQgIANgLAFQgLAGgMAAQgOAAgJgEQgJgEgGgGIAAAxgAiDgrQgIAEgGAFIgLALIAAA6QAGAHAJAEQAJAEAMAAQAKAAAJgEQAJgEAGgLQAGgLAAgTQAAgSgFgKQgGgLgHgEQgIgEgJAAQgJAAgHADgAkHBGQAFgBACgCQADgCAAgDQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgCgCIgDgDQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBQAAgDACgCQACgCAEAAQADAAADACQADADAAAGQAAAMgGAFQgFAFgJABgAORA1QgLgHgHgNQgGgNAAgSQAAgQAHgOQAGgNAMgHQALgHAPAAQAOAAALAFQAKAGAGAMQAGAMAAATIAAABIAAACIhXAAQAAAYALAMQALANAWAAQANgBAJgDQAJgEAEgEIAFAAIAAAIQgGAFgKAEQgKADgPABQgSAAgMgHgAORgkQgKAKgDAVIBMAAQgBgWgJgKQgKgKgQAAQgQAAgLALgAMWA2QgKgFgHgNQgGgMAAgWQAAgUAHgNQAHgNAMgGQALgFAMAAQANAAAKAEQAJADAGAHIAAg0IAEAAQAEgBACADQABACAAAGIAACOIgFAAQgEAAgBgDQgBgCAAgIIAAgHQgHAJgLAGQgKAFgOABQgMAAgKgGgAMfgqQgJAEgGALQgGALAAASQAAATAFALQAFAKAIAFQAIAEAJAAQAOAAAKgHQAKgGAHgKIAAg7QgHgHgIgEQgJgEgMgBQgKAAgJAFgAJ6A4QgJgDgFgEIAAgJIAEAAQAEAEAIADQAIAEANAAQAPAAAIgGQAIgHAAgMQAAgJgHgGQgHgFgRgCQgRgDgJgFQgKgHAAgOQAAgPALgHQAKgIASAAQAMAAAIADQAIACAFADIAAAJIgFAAQgEgDgHgDQgGgCgLgBQgOAAgHAGQgIAFAAAKQAAAKAHAFQAHAFAQACQAMACAJACQAIADAEAGQAFAGAAALQAAAPgLAJQgKAKgVAAQgPgBgIgDgAIQA4QgIgEgFgHQgFgIAAgKQAAgMAGgHQAGgIAKgBQALgEANAAIAQABIAOADIAAgVQAAgNgIgGQgHgGgNABQgNAAgIADQgJACgGAFIgEAAIAAgJQAHgEAKgDQAKgDAOAAQARAAALAHQAKAIAAARIAABSIgDAAQgFAAgBgCQgCgDAAgGIAAgFQgHAIgJAEQgJAFgOAAQgLAAgIgEgAIbADQgIADgFAFQgFAGAAAJQABANAHAGQAIAGAMAAQANAAAJgFQAJgFAGgIIAAgcIgOgDIgPgBQgKAAgIACgAEIA0QgMgHgGgNQgGgNAAgSQAAgQAHgNQAGgNANgHQAMgHAQAAQAOAAAIADQAJAEAFAEIAAAJIgGAAQgEgEgHgEQgHgDgMAAQgNAAgKAGQgJAFgGALQgFALAAAOQAAAYALANQALANAVAAQANAAAIgFQAIgEAEgEIAFAAIAAAIQgDADgGADQgFADgHACQgIADgKAAQgRAAgMgIgACTA2QgGgHAAgNIAAhPIgQAAIAAgJIAQAAIAAggIALAAIAAAgIAeAAIAAAJIgeAAIAABOQAAAKAEAEQAFAEAKAAIAOAAIAAAHIgIABIgJABQgOAAgHgGgAglA4QgIgEgFgHQgFgIAAgKQAAgMAGgHQAGgIAKgBQALgEANAAIAOABIAOADIAAgVQAAgNgIgGQgHgGgLABQgNAAgIADQgJACgGAFIgEAAIAAgJQAHgEAKgDQAKgDAOAAQAPAAALAHQAKAIAAARIAABSIgDAAQgFAAgBgCQgCgDAAgGIAAgFQgHAIgJAEQgHAFgOAAQgLAAgIgEgAgaADQgIADgFAFQgFAGAAAJQABANAHAGQAIAGAMAAQANAAAHgFQAJgFAGgIIAAgcIgOgDIgNgBQgKAAgIACgAlUA4QgJgDgFgEIAAgJIAEAAQAEAEAIADQAIAEANAAQAPAAAIgGQAIgHAAgMQAAgJgHgGQgHgFgRgCQgRgDgJgFQgKgHAAgOQAAgPALgHQAKgIASAAQAMAAAIADQAIACAFADIAAAJIgFAAQgEgDgHgDQgGgCgLgBQgOAAgHAGQgIAFAAAKQAAAKAHAFQAHAFAQACQAMACAJACQAIADAEAGQAFAGAAALQAAAPgLAJQgKAKgVAAQgPgBgIgDgAm+A4QgIgEgFgHQgFgIAAgKQAAgMAGgHQAGgIAKgBQALgEANAAIAQABIAOADIAAgVQAAgNgIgGQgHgGgNABQgNAAgIADQgJACgGAFIgEAAIAAgJQAHgEAKgDQAKgDAOAAQARAAALAHQAKAIAAARIAABSIgDAAQgFAAgBgCQgCgDAAgGIAAgFQgHAIgJAEQgJAFgOAAQgLAAgIgEgAmzADQgIADgFAFQgFAGAAAJQABANAHAGQAIAGAMAAQANAAAJgFQAJgFAGgIIAAgcIgOgDIgPgBQgKAAgIACgArkA1QgLgHgHgNQgGgNAAgSQAAgQAHgOQAGgNAMgHQALgHAPAAQAOAAALAFQAKAGAGAMQAGAMAAATIAAABIAAACIhXAAQAAAYALAMQALANAWAAQANgBAJgDQAJgEAEgEIAFAAIAAAIQgGAFgKAEQgKADgPABQgSAAgMgHgArkgkQgKAKgDAVIBMAAQgBgWgJgKQgKgKgQAAQgQAAgLALgAtfA2QgKgFgHgNQgGgMAAgWQAAgUAHgNQAHgNAMgGQALgFAMAAQANAAAKAEQAJADAGAHIAAg0IAEAAQAEgBACADQABACAAAGIAACOIgFAAQgEAAgBgDQgBgCAAgIIAAgHQgHAJgLAGQgKAFgOABQgMAAgKgGgAtWgqQgJAEgGALQgGALAAASQAAATAFALQAFAKAIAFQAIAEAJAAQAOAAAKgHQAKgGAHgKIAAg7QgHgHgIgEQgJgEgMgBQgKAAgJAFgAPyA7IAAiYIAEAAQAEgBACADQABACAAAGIAACOgAFiA7IAAhxIAEAAQAEAAACACQABACAAAIIAABlgADNA7IAAhxIADAAQAFAAABACQACACAAAIIAABlgAA9A7IAAhxIAFAAQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQABADAAAIIAAAHIAKgKQAGgFAHgDQAHgDAIAAIADABIACAAIAAAJIgCAAIgDAAQgIAAgHADQgHADgGAFIgKAKIAABTgAnwA7IAAhTQAAgNgFgEQgGgFgKAAQgMAAgKAGQgLAFgIAIIAABWIgLAAIAAhTQgBgNgFgEQgGgFgKAAQgMAAgKAGQgLAFgIAIIAABWIgLAAIAAhxIAFAAQABAAAAAAQABAAABABQAAAAABAAQAAABAAAAQACACAAAIIAAAGIAMgJIAPgHQAJgDAJAAQAKAAAHAEQAIAFADAKQAIgIAMgFQAMgGAOAAQAIAAAGADQAHACADAHQAEAGAAAKIAABWgAuNA7IgRgwIhDAAIgRAwIgKAAIAAgFIA3iTIANAAIA2CTIAAAFgAvdABIA8AAIgehRIAAAAgAmjhBIAAgEIAQgYIALAAIAAAEIgUAYgAFihKQgCgCAAgDQAAgDACgCQADgCADAAQADAAACACQACACAAADQAAADgCACQgCACgDABQgDgBgDgCgADNhKQgCgCAAgDQAAgDACgCQACgCADAAQADAAADACQACACAAADQAAADgCACQgDACgDABQgDgBgCgCg");
	this.shape_1.setTransform(-0.4,-25.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-34.6,256,62.4);


(lib.mc_texto2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("AHdBFQgRgJgIgSQgKgRAAgZQAAgXAKgRQAJgTASgJQARgKAWAAQAKAAAIACQAJABAGACIAMAGIAAAZIgMAAQgFgEgIgDQgIgEgLAAQgUAAgLAOQgLANAAAaQAAAaALAOQAJAOAUgBQAOABAIgFQAJgEAGgGIALAAIAAAYQgJAIgMADQgMAEgQAAQgXAAgQgJgAqyBHQgKgHAAgTIAAg9IgNAAIAAgVIANAAIAAgfIAgAAIAAAfIAYAAIAAAVIgYAAIAAA6QABAIADADQADADAJAAIAJAAIAAATIgJADIgMAAQgQAAgKgHgACjBMQgIgEgEgGQgEgIAAgLIAAhUIAgAAIAABMQAAAJAEADQAFAEAHgBQAGAAAGgCIANgDIAAhWIAfAAIAAByIgVAAQgEAAgDgCQgCgDgBgGQgIAGgKADQgLADgLAAQgJAAgIgCgAAPBLQgKgDgFgDIAAgZIAIAAQAFAFAHACQAHADAKAAQAKAAAFgDQAFgCAAgGQAAgFgEgDQgFgDgMgBQgSgCgLgIQgHgIgBgPQABgRAKgKQAMgJAVAAQANAAAJACQAIACAHAEIAAAXIgKAAQgEgDgHgCQgHgCgJgBQgIAAgFADQgEACAAAGQAAAEAFAAQAFADAMACQANABAJAEQAJAEAEAIQAEAHAAAMQAAAQgLALQgMAKgZAAQgPgBgJgCgAhlBKQgIgEgFgIQgFgIAAgLQAAgMAGgIQAGgIAKgEQALgEANAAIAMAAIAMACIAAgJQgBgHgFgEQgEgFgMAAQgJAAgIADQgHACgGAEIgJAAIAAgWQAJgEAKgDQAKgDAQAAQAXAAAMAJQAMAIAAAVIAABOIgNAAQgHgBgFgCQgEgCgBgHQgGAHgJADQgIADgLAAQgKAAgJgEgAhSAdQgFAEgBAJQABAHAEAEQAFAFAIAAQAGAAAGgDIAJgGIAAgWQgJgBgIgBQgKABgGADgAlXA+QgPgPAAgcQABgTAGgLQAIgOAMgGQANgIARAAQAZAAANAOQANAOAAAbIAAAGIAAAEIhLAAQABAMAEAGQADAGAHADQAHACAIAAQAKAAAIgDQAHgCAGgEIAKAAIAAAVQgGAEgMAEQgKADgRAAQgdAAgPgQgAkZAGQgBgNgFgFQgFgHgJAAQgGAAgFACQgFADgDAGQgDAGgCAIIAsAAIAAAAgAprA+QgOgPAAgcQAAgTAHgLQAIgOAMgGQANgIAQAAQAZAAAOAOQANAOAAAbIAAAGIAAAEIhMAAQACAMADAGQAEAGAGADQAHACAJAAQAKAAAIgDQAHgCAFgEIAKAAIAAAVQgGAEgLAEQgLADgRAAQgcAAgQgQgAotAGQgBgNgEgFQgGgHgJAAQgGAAgEACQgFADgEAGQgCAGgCAIIArAAIAAAAgAJIBNIAAiYIAxAAQAngBAVATQAVATAAAmQAAAmgVAUQgVASgnABgAJrA0IAOAAQAXAAAMgMQALgNAAgbQAAgRgFgMQgFgMgKgFQgKgFgQAAIgOAAgAFdBNIAAhNQABgGgEgEQgDgDgHAAQgIAAgHACIgLADIAABVIghAAIAAhyIAWAAQAEAAACACQADADABAHQAIgFALgFQALgEALAAQAJAAAHADQAHADAEAGQAFAIAAAMIAABUgAjIBNIgqhpIAAgJIAfAAIAdBOIAbhOIAbAAIAAAJIgoBpgAmYBNIAAiYIATAAIAJABQACABABAEQABAEAAAIIAACGgAnRBNIAAiYIAUAAIAIABQADABAAAEQACAEgBAIIAACGg");
	this.shape.setTransform(-0.1,-40.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-48.6,142.9,15.8);


(lib.mc_texto1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("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");
	this.shape.setTransform(0.6,-19.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-117.8,-61.4,237.1,83.3);


(lib.mc_segurosvehiculares = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ADrmAIgdASQgggJgPgRQgYgFgXANQgpAYgOAyQgPAxAAAyQAAAzAJAqQALAuAJAvQAKAtAIAwQATBpghBrQgWBJg7A6QgcAbgnAMQgnAMgogMQgrgMgVgUQgVgTAEgPQAJgfAaAIQAPAEASAPQAUAPAQAEQAQAFAYgOQAYgOAUgbQAog2AMgwQAPgwgCg9QgBg/gMg2IgWhvQgeiJAchdQAXhbBPgiQAqgRAtANQAXAHASASQATATADAVg");
	this.shape.setTransform(356.7,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiYHCQgrgMgVgUQgVgTAEgPQAJgfAaAIQAPAEASAPQAUAPAQAEQAQAFAYgOQAYgOAUgbQAog2AMgwQAPgwgCg9QgBg/gMg2IgWhvQgeiJAchdQAXhbBPgiQAqgRAtANQAXAHASASQATATADAVIgdASQgggJgPgRQgYgFgXANQgpAYgOAyQgPAxAAAyQAAAzAJAqQALAuAJAvQAKAtAIAwQATBpghBrQgWBJg7A6QgcAbgnAMQgTAGgUAAQgUAAgUgGg");
	this.shape_1.setTransform(356.7,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ACwmlQARAQgEARQgKAjg6gQIgygOIgpDFQgGAXgPAsQgOAygEAOIASABQAbABAOADQAOAEAJANQAIAMgDAPQgEALgMAIQgMAJgOgEIgfgKQgQgEgJAGIhfFqIBEAOQBDASgJAfIgBAEQgKAOgXADQgVADgQgDQgIgBgggIIglgKQgsgLgHgUQgCgKADgNICuqnQAFgSACgrQABgrAFgUIAAgEQAegaAMgHIBiAPQAUAGAQAPg");
	this.shape_2.setTransform(322.9,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8HIQgIgBgggIIglgKQgsgLgHgVQgCgKADgLICuqoQAFgSACgrQABgqAFgVIAAgDQAegbAMgHIBiAQQAUAFAQAPQARAQgEASQgKAig6gPIgygPIgpDEQgGAYgPAsQgOAygEAPIASAAQAbABAOADQAOAEAJANQAIANgDANQgEAMgMAJQgMAHgOgDIgfgKQgQgEgJAGIhfFpIBEAPQBDASgJAfIgBAEQgKAOgXADIgUABQgJAAgIgBg");
	this.shape_3.setTransform(322.9,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ACrliQAOA3gOA6QgNA4gxBEIgrA6QgTBVANCXIAYD7IgBADQgKAogLAEQgMAEgJgCQgXgFgNglIABgEQAUhwgVjmQgJh0gBgnIhpHPQgFASgIAIQgIAIgSgEQgQgDgHgMQgHgLADgOIC/tMQADgOAIgEQAHgEAbAGQAbAGAZASQAYARAPAZQAOAbAGAagABLmdIg+DvQgJApgCANQAYgMAdgXIArhiQADgGAEgLQAGgdgDgrQgFg7gcgMg");
	this.shape_4.setTransform(282.6,6.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AApHdQgXgFgNglIABgEQAUhwgVjmQgJh0gBgnIhpHPQgFASgIAIQgIAIgSgEQgQgDgHgMQgHgLADgOIC/tMQADgOAIgEQAHgEAbAGQAbAGAZASQAYARAPAZQAOAbAGAaQAOA3gOA6QgNA4gxBEIgrA6QgTBVANCXIAYD7IgBADQgKAogLAEQgIADgGAAIgHgBgAANiuQgJApgCANQAYgMAdgXIArhiIAHgRQAGgdgDgrQgFg7gcgMg");
	this.shape_5.setTransform(282.6,6.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ADXmyQgHAkgODFQgOC+gLA2QgLA1gOCEQgNCBgOBAQgIAogogJQglgHAGgfIAfiaQgPgQgsgRQgsgRgggJQgSAUgPAlIgfBMQgQAmgTAVQgvgJgCgYQAUgTBOjRQBFi4A3iJQAyh2AshLQAuhNAbAGQAcAFAMAOgACHkfQgZAQhKC5QhHC1gOA3QAxAXAhAHQAjAHAPgBIANiDQAMh6AIhQQAKhjAEgSQAEgVABgCg");
	this.shape_6.setTransform(239.2,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABFHEQglgHAGgfIAfiaQgPgQgsgRQgsgRgggJQgSAUgPAlIgfBMQgQAmgTAVQgvgJgCgYQATgTBPjRQBFi4A3iJQAyh2AshLQAuhNAbAGQAbAFANAOQgIAkgNDFQgOC+gMA2QgKA1gOCEQgOCBgNBAQgHAhgcAAIgNgCgAAkhWQhHC1gOA3QAxAXAgAHQAkAHAPgBIANiDIAUjKQAKhjAEgSIAFgXQgZAQhKC5g");
	this.shape_7.setTransform(239.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ABcmtIg+HZQgJBbgiDdIgFAfIBbAPQAYAWgDAQQgDAQgLAIQgKAJgKgCQgIgBgNgHQgKABgOgCIgkgIQgPAMgTgDQgSgDgMgNQgKgOACgPIAQgzQAXiaAcj9QAdkdATh9QACgLALgFQAKgGAPADQANACALAMQALAMgDAOg");
	this.shape_8.setTransform(198.3,-10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA8HXQgIgBgNgHQgKABgOgCIgkgIQgPAMgTgDQgSgDgMgNQgKgOACgPIAQgzQAXiaAcj9QAdkdATh9QACgLALgFQAKgGAPADQANACALAMQALAMgDAOIg+HZQgJBbgiDdIgFAfIBbAPQAYAWgDAQQgDAQgLAIQgIAHgJAAIgDAAg");
	this.shape_9.setTransform(198.3,-10.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AB2mdQADgPAQgHQASgHARADIAcAgIgDAUIgUBIQgNBagSDUQgRDMgKBEQgJBCgHAcQgFAXgLAbQgMAagOAPQgjAlg6gIQhLgJglhGQgohKgIhhQgKh0AFhUQAIiDANh4IAXi7QgIgLABgPQACgPAMgKQANgJAPABQAwAGgLBVIgmGhQAGARgBAxQgBA0gDAXQgDAdAEAmQADAkALAuQAKApAXAgQAWAfAXADQAYADAKgJQANgJAHgUQALggAFghIAgjqQAFgmAChKQADhLAFgng");
	this.shape_10.setTransform(163.9,-15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggHZQhLgJglhGQgohKgIhhQgKh0AFhUQAIiDANh4IAXi7QgIgLABgPQACgPAMgKQANgJAPABQAwAGgLBVIgmGhQAGARgBAxQgBA0gDAXQgDAdAEAmQADAkALAuQAKApAXAgQAWAfAXADQAYADAKgJQANgJAHgUQALggAFghIAgjqQAFgmAChKQADhLAFgnIAakcQADgPAQgHQASgHARADIAcAgIgDAUIgUBIQgNBagSDUQgRDMgKBEQgJBCgHAcQgFAXgLAbQgMAagOAPQgdAfgsAAIgUgCg");
	this.shape_11.setTransform(163.9,-15.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ABFmQQhKgGgfApQgdAmgIBhIgDBTIgSBUIgDAdQgLCJACAuQAEA1ADAeQAEAkAIAaQAIAaANAYQAZAvAxAFQAVACAhgSQAhgTARACQARACAQAUQgGA8hJATQgkAJgmgEQgpgDgbgTQgbgTgSgbQgRgcgLgpQgKgngHgqQgEgvgBguQAAheAHhfIANiQQAFhGAMgpQgCgSABgUQAFhKBAgnQBBgnBWAIQAfADAdATQAcAUgCAaQgBANgMAGQgMAGgZgDQgagCgIgQIAAABIgSgCg");
	this.shape_12.setTransform(113.9,-20.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIHVQgpgDgbgTQgbgTgSgbQgRgcgLgpQgKgngHgqQgEgvgBguQAAheAHhfIANiQQAFhGAMgpQgCgSABgUQAFhKBAgnQBBgnBWAIQAfADAdATQAcAUgCAaQgBANgMAGQgMAGgZgDQgagCgIgQIAAABIgSgCIAAgDQhKgGgfApQgdAmgIBhIgDBTIgSBUIgDAdQgLCJACAuIAHBTQAEAkAIAaQAIAaANAYQAZAvAxAFQAVACAhgSQAhgTARACQARACAQAUQgGA8hJATQgaAGgcAAIgUgBg");
	this.shape_13.setTransform(113.9,-20.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AAnlwQgHBwABDyQACDfgICCIgDAuQANAAANAAQAzADgDAqIgBAIIggATIhRgDQhqgGACgjQABgdAmABIAZAEQASABACgcQAGhigCi2QgBi9AFhZIAJh8QACgqgCgZQgTAEgMAAQgegCABgdQABgOAUgKQAWgKAdgDQA3gGAZACQAbABALALQALALgBAMQgBAOgJAJQgJAJgOgBIgXgCQgNgBgGAFQgGAFgBAOg");
	this.shape_14.setTransform(73.3,-24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQHGQhqgGACgkQABgdAmACIAZAEQASABACgcQAGhigCi3QgBi8AFhZIAJh7QACgqgCgaQgTAFgMgBQgegCABgdQABgOAUgKQAWgKAdgDQA3gGAZACQAbACALAKQALALgBANQgBANgJAJQgJAJgOgBIgXgBQgNgBgGAEQgGAFgBAOQgHBwABDzQACDegICCIgDAuIAaAAQAzADgDAqIgBAIIggASg");
	this.shape_15.setTransform(73.3,-24.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ABFnQQAyABAJAqQADATgDBUQgDBXACEDQACEFgGCJQAAAQgLAOQgLANgQgBQgfAAACgpQAIjigFjIQgkgGgZAAQgdgBgZAHQgCBAAHCMQAHCFgCBJQAAALgIALQgGAJgNAAQghAAgMjQQgQkiAHmGQAAgVAXAAQAOABAMAGQAOAGAGAHQgFAngCA0QADB9AAB8IgCAtQAAASACAOIB6gGg");
	this.shape_16.setTransform(36.8,-25.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABVHUQgfAAACgpQAIjigFjIQgkgGgZAAQgdgBgZAHQgCBAAHCMQAHCFgCBJQAAALgIALQgGAJgNAAQghAAgMjQQgQkiAHmGQAAgVAXAAQAOABAMAGQAOAGAGAHQgFAngCA0QADB9AAB8IgCAtQAAASACAOIB6gGIAJmsQAyABAJAqQADATgDBUQgDBXACEDQACEFgGCJQAAAQgLAOQgKAMgOAAIgDAAg");
	this.shape_17.setTransform(36.8,-25.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AgimBIAKDIQABAQgEA2QgDAuAAAWIATgEQAYgGAPAAQAQAAAKAKQAMAKAAANQAAAOgKAKQgJALgPAAIgggBQgQAAgIAJIABF1QA5gDAKAAQBHAAgBAgIAAAEQgJAQgUAJQgTAJgRABIhNABQgtAAgLgRQgFgKAAgMIgFq9QAAgWgKgnQgIgngBgXIAAgEQAUggAMgLIBggLQAUAAAUALQAVALAAASQgBAkg7AAg");
	this.shape_18.setTransform(0,-26.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhUG8QgFgJAAgNIgFq9QAAgVgKgoQgIgngBgXIAAgEQAUggAMgLIBggLQAUAAAUALQAVALAAASQgBAkg7AAIgygBIAKDIQABAQgEA2QgDAvAAAVIATgEQAYgHAPABQAQAAAKAKQAMAKAAANQAAAOgKAKQgJALgPAAIgggBQgQAAgIAJIABF1IBDgEQBHAAgBAhIAAAEQgJAQgUAJQgTAIgRACIhNABQgtAAgLgRg");
	this.shape_19.setTransform(0,-26.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ACTipIguGpQgFAqgLBFQgQBqgMABQgRABgMgNQgchlhMluQhFlDgdhrQAHgYAdgCQASgBAjB+QAkCEAxD1QApDUAAABQAKhpAOhyQAnk5gEiqQATgYAcgBIAcANQgDAZgIBcQgLBygGA8g");
	this.shape_20.setTransform(-42.4,-25.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAbHOQgbhlhNluQhElDgdhrQAHgYAdgCQASgBAjB+QAlCEAwD1IApDVQAKhpAOhyQAnk5gFiqQAUgYAcgBIAcANQgDAZgJBcIgRCuIguGpQgEAqgLBFQgQBqgMABIgCAAQgQAAgMgMg");
	this.shape_21.setTransform(-42.4,-25.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AAbnVQAXAKAKATIgUAcQghACgRgKQgYAEgRAUQgdAlAEA0QAEAyASAwQASAuAYAlIAxBQQAhAwASAgQA3BbAHBwQAGBOgjBKQgQAjghAaQggAZgoADQgrAEgagLQgbgLgBgOQgDghAcgCQANgCAYAIQAYAHANgCQARAAARgXQASgVAIghQAShCgEgwQgEg0gXg3QgYg7gbgtIg/hfQhMh0gIhiQgJhfA8g7QAhgfAugEQAXgBAXAKg");
	this.shape_22.setTransform(-103.1,-21.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhFHXQgbgLgBgOQgDghAcgCQANgCAYAIQAYAHANgCQARAAARgXQASgVAIghQAShCgEgwQgEg0gXg3QgYg7gbgtIg/hfQhMh0gIhiQgJhfA8g7QAhgfAugEQAXgBAXAKQAXAKAKATIgUAcQghACgRgKQgYAEgRAUQgdAlAEA0QAEAyASAwQASAuAYAlIAxBQQAhAwASAgQA3BbAHBwQAGBOgjBKQgQAjghAaQggAZgoADIgVABQgdAAgTgIg");
	this.shape_23.setTransform(-103.1,-21.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ABXl5QASAcAOAyIAWBSQAHAaAJBBQALBKAFA0IAHBDIAFCfQgEAhAEAoQAEAkgKAoQgKAlgZAfQgZAgghADQgiAEgegTQgcgTgWghQgXgigTgtQgVgzgNgpQgMgqgMg1QgShLgFgtIgai6QgCgUgEgqQgCgZAAgkQAAghAEgYQADgaAIgYQAIgaAMgQQAcgnAqgEQApgFAgAKQAdALAXAcQAZAeARAZgAgRmTQgVgOgTACQgUADgKANQgLANgGAZQgGAUgEAeQgDAdABAgIAGB6IAJBaQAKBOAYBcQAZBdAUA3QAVA6AaAnQAcAmAbgDQAZgDAMgvQAMgvAAhEQgCiBgEgpIgIhGQgGgwgDgPQgGgqgHglQgMg2gHgcQgKgqgPgkQgNgigRgeQgQgdgUgPg");
	this.shape_24.setTransform(-147.1,-17.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAWHPQgcgTgWghQgXgigTgtQgVgzgNgpQgMgqgMg1QgShLgFgtIgai6IgGg+QgCgZAAgkQAAghAEgYQADgaAIgYQAIgaAMgQQAcgnAqgEQApgFAgAKQAdALAXAcQAZAeARAZQASAcAOAyIAWBSQAHAaAJBBQALBKAFA0IAHBDIAFCfQgEAhAEAoQAEAkgKAoQgKAlgZAfQgZAgghADIgMABQgbAAgZgQgAg5mfQgUADgKANQgLANgGAZQgGAUgEAeQgDAdABAgIAGB6IAJBaQAKBOAYBcQAZBdAUA3QAVA6AaAnQAcAmAbgDQAZgDAMgvQAMgvAAhEQgCiBgEgpIgIhGIgJg/QgGgqgHglIgThSQgKgqgPgkQgNgigRgeQgQgdgUgPQgSgMgRAAIgFAAg");
	this.shape_25.setTransform(-147.1,-17.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AgKmCQAeAtAIA7QAIA7gUBQQAAABgKAjIgGAhQALBTBDCLIBAB9QAJASApBTIABADQAFAogJAIQgJAIgKACQgWADgagdIgBgFQgXhxhkjMQgxhggUgsIBHHVQACATgDAKQgGALgQACQgRADgLgIQgKgJgCgNIiCtYQgDgOAGgHQAGgHAbgEQAagEAeAIQAdAHAXASQAWASARAYgAgpkJQAAgIgBgLQgEgdgTgnQgag1gfgBIAeD1QAHArADAMQASgWASgfg");
	this.shape_26.setTransform(-184.7,-11.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzHFQgKgJgCgNIiCtYQgDgOAGgHQAGgHAbgEQAagEAeAIQAdAHAXASQAWASARAYQAeAtAIA7QAIA7gUBQIgKAkIgGAhQALBTBDCLIBAB9IAyBlIABADQAFAogJAIQgJAIgKACQgWADgagdIgBgFQgXhxhkjMQgxhggUgsIBHHVQACATgDAKQgGALgQACIgJABQgLAAgIgGgAhcihQAHArADAMQASgWASgfIAFhqQAAgIgBgLQgEgdgTgnQgag1gfgBg");
	this.shape_27.setTransform(-184.7,-11.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("ABxleQARBjAuDGQAsC8AOBPQAMBEACAbQACAbgDAZQgCAcgKAUQgVAtg8ALQhKAOg5g3Qg7g7glhZQgvhwgThNQggh2gah/Igji6QgMgIgDgOQgDgPAJgNQAJgNAPgDQAvgJARBUIBbGZQALAOAOAvQANArAGAeQAGAaANAlQARAlAWAkQAXAlAfAXQAfAXAXgEQAXgEAJgNQAJgMABgVQACgfgHgkIgojpQgHgjgVhKQgWhKgGgkIg+kYQgDgOAPgMQAOgMARgDIAlAXIADATg");
	this.shape_28.setTransform(-232.9,-5.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAXGoQg7g7glhZQgvhwgThNQggh2gah/Igji6QgMgIgDgOQgDgPAJgNQAJgNAPgDQAvgJARBUIBbGZQALAOAOAvQANArAGAeQAGAaANAlQARAlAWAkQAXAlAfAXQAfAXAXgEQAXgEAJgNQAJgMABgVQACgfgHgkIgojpQgHgjgVhKQgWhKgGgkIg+kYQgDgOAPgMQAOgMARgDIAlAXIADATIADBLQARBjAuDGQAsC8AOBPQAMBEACAbQACAbgDAZQgCAcgKAUQgVAtg8ALQgPADgOAAQg4AAgugsg");
	this.shape_29.setTransform(-232.9,-5.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AhumeQgwAMgQA7QgQBCAFA2IAIBXQADAjAIAmQAIAvAQA/IARBJQAaBuAWAwQAVAsATAbQARAZAUAQQA5AZAngDQA1gMAZg6QgYhogZgaIgvAPQgqAKgHgiQgHgdBOgaQAOgFAUgEQASgFASAQQAQAPAHAgQAIAhAaBBQAcBGAEAVQAJAsgeAGQgeAGgPgWIAAgBQgMAJgMAKQgfAbglAIQgZAGgdgEQg6gJgpgrQgtgvgVguQgUgpgNggQgMgegKgiQgOgugQhBIgWhVQgbhxgEg0QgFgxABgkQACgjAFgZQAFgbALgbQALgcASgUQAngsA7gNQA7gNAIAiQADAMgJAKQgIAKgOADg");
	this.shape_30.setTransform(-278,4.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAvHbQg6gJgpgrQgtgvgVguQgUgpgNggQgMgegKgiQgOgugQhBIgWhVQgbhxgEg0QgFgxABgkQACgjAFgZQAFgbALgbQALgcASgUQAngsA7gNQA7gNAIAiQADAMgJAKQgIAKgOADIgnACQgwAMgQA7QgQBCAFA2IAIBXQADAjAIAmQAIAvAQA/IARBJQAaBuAWAwQAVAsATAbQARAZAUAQQA5AZAngDQA1gMAZg6QgYhogZgaIgvAPQgqAKgHgiQgHgdBOgaQAOgFAUgEQASgFASAQQAQAPAHAgQAIAhAaBBQAcBGAEAVQAJAsgeAGQgeAGgPgWIAAgBIgYATQgfAbglAIQgOAEgQAAQgLAAgNgCg");
	this.shape_31.setTransform(-278,4.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("AghmtQAJAjg7APIgyANIA9C+QAGAYAJAtQAHAoAHAaIARgIQAWgNAOgEQAPgEANAHQAOAHAEANQADAQgGALQgGANgPADIgfAGQgRAFgEALIBdFoIBCgVQBFgRAIAfIABAEQgFASgRANQgRAOgQAFQgHADggAJIglAJQgsAMgQgOQgHgHgDgNIi1qkQgGgVgTgkQgUgmgFgUIgBgEQANglAIgMIBdgkQAUgFAWAGQAWAFAFARg");
	this.shape_32.setTransform(-321.6,15.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAaHAQgHgHgDgNIi1qkQgGgVgTgkQgUgmgFgUIgBgEQANglAIgMIBdgkQAUgFAWAGQAWAFAFARQAJAjg7APIgyANIA9C+QAGAYAJAtQAHAoAHAaIARgIQAWgNAOgEQAPgEANAHQAOAHAEANQADAQgGALQgGANgPADIgfAGQgRAFgEALIBdFoIBCgVQBFgRAIAfIABAEQgFASgRANQgRAOgQAFIgnAMIglAJQgUAGgOAAQgRAAgJgIg");
	this.shape_33.setTransform(-321.6,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(2.9,1,1).p("Ai2mhQAagmAtgNQAXgGAaAFQAZAFAOAQIgPAfQgfAKgWgGQgXAJgMAXQgWArAPAxQAPAxAbAqQAbAqAfAfIBBBEQAgAgAjAkQBIBNAfBtQAWBKgVBRQgIAlgbAgQgbAfgoAMQgqAMgdgFQgcgEgDgPQgJgfAZgIQANgEAYACQAYACARgEQAQgFANgZQANgaACggQAEhEgOgvQgOgxgigyQghgxgpgqIhQhQQhjhigchfQgchaAwhGg");
	this.shape_34.setTransform(-358.7,26);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAeHXQgcgEgDgPQgJgfAZgIQANgEAYACQAYACARgEQAQgFANgZQANgaACggQAEhEgOgvQgOgxgigyQghgxgpgqIhQhQQhjhigchfQgchaAwhGQAagmAtgNQAXgGAaAFQAZAFAOAQIgPAfQgfAKgWgGQgXAJgMAXQgWArAPAxQAPAxAbAqQAbAqAfAfIBBBEQAgAgAjAkQBIBNAfBtQAWBKgVBRQgIAlgbAgQgbAfgoAMQgeAJgXAAQgKAAgIgCg");
	this.shape_35.setTransform(-358.7,26);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-380.1,-73.3,760.5,146.7);


(lib.mc_rimac = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAbIgBgBIAEgJIABgBQAHAIALAAQAEAAAEgDQAEgDgBgEQABgGgIgEIgDgBQgOgEAAgLQADgUAVAAQAJAAALAEIABACIgEAIIgBABQgFgHgKABQgLAAAAAJQgBAFAJAFIAGACQAKADAAALQAAAJgHAFQgHAHgLAAQgMAAgKgGg");
	this.shape.setTransform(57.6,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAHQAAgMAIgMQAKgPAQAAQAaAAgBAZIgCALQgJAdgXAAQgZAAAAgagAgQAKQAAAOAMgBQANABAGgYIACgJQAAgOgMAAQgRAAgEAhg");
	this.shape_1.setTransform(51,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAgIAAAAIAIgeQAEgLADgTIABgBIALgCIABABIgDALIADgFQAGgHAHAAIAGABIAAABIgFAMIgBABIgFgCQgFAAgEAEQgEAFgDARIgGAXIgBABg");
	this.shape_2.setTransform(45.2,28.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAdQgGgFAAgJQAAgGAEgKIADgMIAEgRIABAAIAMgBIABABIgIAbIgDAPQgBAKALAAQAHAAAHgHIAMgtIABAAIAMgBIAAABIgPA8IgBABIgMAAIgBAAIACgGQgHAHgLAAQgHAAgFgDg");
	this.shape_3.setTransform(38.7,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdArIgHgFIAAgBIAFgIIABAAQAIAJALAAQANAAAGgUIABgHQgJAGgHAAQgJAAgGgGQgHgGABgKQAAgLAGgKQAIgNANgEQAFgCAQgBIARAAIAAABIgOA2QgGAXgGAGQgIAJgOAAQgKAAgIgEgAgHgbQgIAJAAAMQAAAOANAAIAEgBQAFgCAFgDIAKgnIgDAAQgTAAgHAKg");
	this.shape_4.setTransform(30.6,29.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJAgQgUgEABgWQAAgNAJgMQAKgNAOAAQAMAAAGAFQAGAGAAAMIgBAKIgBAAIgqAAIgBAFQAAAQAQABQAKAAALgIIABABIgEALIgBABQgIAFgKAAgAgIgQQgDAEgCAGIAeAAIABgGQAAgLgNAAQgHAAgGAHg");
	this.shape_5.setTransform(23.5,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaApQgDgBgDgDIgBgBIADgKIABgBQACADAEACQAGAFAJAAQAIgBAEgEQAGgEABgHQAAgEgFgGIgHgGIgEgCIgIgEQgIgFABgKQABgLAHgHQAIgIAOAAQAPAAAIAHIABAAIgEALIgBAAQgGgIgMAAQgJAAgDAEQgFAFAAAFQgBAGAEACIAIAHIAEABQAQAJgBAMQAAALgIAIQgIAJgPAAQgKAAgJgEg");
	this.shape_6.setTransform(16.3,27.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhSBKQgfgZAFgtQAGguAqgdQArgeBEAAQAeAAAcAGIgJAoQgXgGghAAQgpgBgZATQgbATgDAdQgDAYASAQQASARAeAAQAgAAAggIIgKArQgfAFgXAAQg9AAgggcg");
	this.shape_7.setTransform(54.3,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABDBnIgKgoIhfAAIgaAoIg2AAICBi9QALgPAPgBQAYgCAIAbIAyC0gAAwAeIgShGIguBGIBAAAg");
	this.shape_8.setTransform(27,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAlBiIguhKIgcAAIgSBKIg2AAIAwjDIBoAAQAlAAASASQAOAQgCAWQgGAtg+AQIA2BOgAgdgIIAlAAQAUAAANgIQANgIACgOQABgOgIgHQgIgIgQAAIgnAAg");
	this.shape_9.setTransform(-55.2,6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyBiIAxjDIA0AAIgwDDg");
	this.shape_10.setTransform(-34.5,6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACPB1IAAiRIhtCRIgxAAIgtiSIhJCSIg8AAIBrjVQAHgLAFgEQAIgFAKAAQATAAAHAVIAsCgIB7ijQANgSARAAQAMAAAGAHQAIAHAAAOIABDNg");
	this.shape_11.setTransform(-8.2,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E82326").s().p("Ar7GHQglAAgbgbQgagaAAgmIAApXQAAglAagbQAbgbAlAAIX2AAQAmAAAaAbQAbAbAAAlIAAJXQAAAmgbAaQgaAbgmAAg");
	this.shape_12.setTransform(0,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E82326").s().p("AgiAnQgNgOAAgZQAAgWAPgPQAOgPAUAAQAuAAAAAzIAAAHIhCAAQACAPAGAGQAHAGAKAAQAQAAAMgJIAJAAIAAATQgQAKgYAAQgYAAgOgOgAgRgJIAlAAQgBgZgRAAQgRAAgCAZg");
	this.shape_13.setTransform(75.1,-41.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E82326").s().p("AglA4QgMgOAAgYQAAgaAOgPQAMgNATAAQAOAAALAJIAAgqIARAAQAHAAADAEQACACAAAKIAAB5IgUAAQgIAAgBgMQgLAOgRAAQgTgBgLgNgAgTAQQAAASAFAIQAFAHAJAAQAKAAALgJIAAgxQgIgEgLgBQgVABAAAdg");
	this.shape_14.setTransform(63.6,-43.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E82326").s().p("AgkAnQgQgPAAgYQAAgWAQgPQAPgPAVAAQAXAAAOAPQAPAPAAAWQAAAYgPAPQgOAOgXAAQgVAAgPgOgAgWAAQAAAgAWAAQAYAAAAggQgBgOgGgJQgHgIgKAAQgWAAAAAfg");
	this.shape_15.setTransform(48.4,-41.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E82326").s().p("AgkA4QgNgOAAgYQAAgaAOgPQAMgNASAAQAQAAAJAJIAAgqIASAAQAHAAACAEQACACABAKIAAB5IgVAAQgGAAgCgMQgMAOgQAAQgTgBgKgNgAgTAQQAAASAEAIQAGAHAJAAQALAAAJgJIAAgxQgHgEgLgBQgVABAAAdg");
	this.shape_16.setTransform(36.5,-43.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E82326").s().p("AgNBFIAAiJIAQAAQAHAAACADQACADAAAKIAAB5g");
	this.shape_17.setTransform(28.3,-43.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E82326").s().p("AgiAtQgKgIAAgPQAAgQALgHQAMgIASAAQALAAAIACIAAgJQAAgPgRAAQgQAAgLAIIgIAAIAAgUQATgJASAAQAsAAAAAiIAABGIgMAAQgHAAgEgCQgDgDgBgGQgLAMgRAAQgQAAgIgIgAgQAUQAAAPAQAAQAHAAAJgIIAAgUIgPgBQgRAAAAAOg");
	this.shape_18.setTransform(20.2,-41.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E82326").s().p("AgxBEIAAiGIAUAAQAIAAABAKQANgLARAAQARAAAKALQANAOAAAZQAAAagOAOQgMAMgUAAQgOAAgKgIIAAApgAgUgoIAAAxQAHAGAMAAQAVAAAAgdQAAgfgUAAQgIAAgMAFg");
	this.shape_19.setTransform(9.5,-40.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E82326").s().p("AgmAsIAAgWIAJAAQAKAKAQgBQAPABAAgKQABgFgEgDQgEgCgJgBQgRgCgJgHQgIgGgBgPQAAgPAMgJQAKgJASABQASAAAOAGIAAAWIgIAAQgJgIgPABQgOAAAAAJQAAAIARABQAUADAHAHQAJAFgBAQQABAigqgBQgUABgQgJg");
	this.shape_20.setTransform(-1,-41.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E82326").s().p("AgiAnQgNgOAAgZQAAgWAOgPQAOgPAUAAQAvAAAAAzIAAAHIhCAAQABAPAHAGQAHAGAKAAQAQAAAMgJIAJAAIAAATQgQAKgYAAQgYAAgOgOgAgRgJIAkAAQAAgZgSAAQgPAAgDAZg");
	this.shape_21.setTransform(-10.9,-41.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E82326").s().p("AgeA0IAAhmIAUAAQAHAAABANQAKgOARAAIAHABIAAAXIgGAAQgRgBgKAHIAABJg");
	this.shape_22.setTransform(-19.6,-41.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E82326").s().p("AgNBFIAAiJIAQAAQAHAAACADQACADAAAKIAAB5g");
	this.shape_23.setTransform(-30.2,-43.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E82326").s().p("AgiAnQgNgOAAgZQAAgWAOgPQAOgPAUAAQAvAAAAAzIAAAHIhCAAQABAPAIAGQAGAGALAAQAQAAALgJIAJAAIAAATQgRAKgYAAQgXAAgOgOgAgRgJIAlAAQgBgZgSAAQgPAAgDAZg");
	this.shape_24.setTransform(-38.1,-41.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E82326").s().p("AASA0IAAhDQgBgNgMAAQgJAAgMAFIAABLIgdAAIAAhmIATAAQAHAAACALQARgMASAAQAcAAAAAdIAABKg");
	this.shape_25.setTransform(-53,-41.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E82326").s().p("AgkAnQgQgPAAgYQAAgWAQgPQAPgPAVAAQAWAAAPAPQAPAPABAWQgBAYgPAPQgPAOgWAAQgVAAgPgOgAgQgXQgGAJgBAOQAAAgAXAAQAXAAAAggQAAgfgXAAQgJAAgHAIg");
	this.shape_26.setTransform(-64.6,-41.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E82326").s().p("AgkA0QgSgTAAghQAAgfAUgTQASgTAdAAQAWAAASAJIAAAXIgLAAQgLgKgRAAQgkAAAAAvQAAAwAiAAQATAAAOgOIAKAAIAAAXQgSANgbAAQgcAAgSgSg");
	this.shape_27.setTransform(-76.4,-43.5);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.4,-50.6,170.9,101.5);


(lib.mc_rayitas = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABDDkQh5jHgshLQhxjDAbACQAOgUCECLQB1B7BqCIQALAOgNAXQgLAUgYATQgjAbgWAAQgQAAgIgOg");
	this.shape.setTransform(80,-20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AApDgQgbgBgHgVQgRg6hgj4QgrhxAXgGQAMgCByCmQA6BSBDBlQARAXgNAZQgLAWgbAQQgYAOgXAAIgDAAg");
	this.shape_1.setTransform(50.1,-16.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiTDXQgYgTgLgUQgNgXALgOQBqiIB1h7QCDiLAOAUQAbgChwDDQgvBPh2DDQgIAOgQAAQgWAAgjgbg");
	this.shape_2.setTransform(-79.9,-20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWEgQAJjLAejIQAgjeAZAKQAZgLAeEzQAcElgHAgQgEAPgcAKQgaAJggABIgEAAQhQAAACgpg");
	this.shape_3.setTransform(-14.6,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWGQQgggLgFgRQgTg9hLlcQhRmAAYAMQAZgNB3EWQBpD6BXD+QAJAZgZAOQgWAMgoAAQgmgBgggKg");
	this.shape_4.setTransform(25.6,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhhGbQgdgDgggXQghgXgPgeQgQgiASgbQBsjFBhiqQDDlUAOAdQAXAGhpEYQiaGagfBjQgIAXgaAAIgGAAg");
	this.shape_5.setTransform(-56.7,2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.9,-44.9,198.1,90.1);


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


(lib.mc_piquito = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("AhtB7IAAg9QgHAGgKAEQgLAEgMAAQgRAAgNgHQgOgIgIgPQgIgQgBgYQABgaAJgRQAJgSAOgHQAPgIARAAQAOABAKAEQAJAEAIAHQACgGAEgEQAEgDAGAAIAUAAIAAC+gAiXgjQgIAEgEAJQgFAKAAAOQAAARADAKQADAKAHAEQAHAFALAAQAHgBAIgCQAHgDAGgFIAAhDQgFgEgGgCQgGgCgJAAQgJAAgHADgADaBHQgMgKAAgXIAAhOIgRAAIAAgbIARAAIAAgnIApAAIAAAnIAeAAIAAAbIgeAAIAABKQAAAKAFAEQAEAEAKAAIALAAIAAAYIgKADIgPABQgWAAgMgJgAFIBHQgRgJgKgRQgKgQgBgYQABgWAKgRQAKgRARgJQARgJAVgBQAUABARAJQARAJAKARQAKARABAWQgBAYgKAQQgKARgRAJQgRAJgUAAQgVAAgRgJgAFVgdQgJAMAAAWQAAAYAJALQAJALAQAAQAPAAAJgLQAJgLAAgYQAAgWgJgMQgJgLgPAAQgQAAgJALgAgPBMQgKgDgFgJQgGgJAAgPIAAhrIAnAAIAABhQAAALAFAEQAGAFAKgBQAHAAAJgCIAOgFIAAhtIApAAIAACRIgbAAQgFAAgDgDQgEgDgBgIQgKAHgNAFQgOAEgNAAQgLAAgJgEgACABOIAAiRIAZAAQAHAAADACQAEACABAGIABARIAAB2gAkTBOIAAiRIAaAAQAHAAADACQADACABAGIABARIAAB2gAm4BOIAAjCIBBAAQAmAAAUAPQAUAPAAAgQAAAggVAPQgUAOgmAAIgUAAIAABHgAmMgUIAUAAQAUgBAHgIQAIgJAAgPQAAgLgDgHQgDgHgIgDQgHgEgOAAIgUAAgACFhVQgHgGAAgJQAAgJAHgHQAGgGAKAAQAJAAAGAGQAGAHABAJQgBAJgGAGQgGAGgJAAQgKAAgGgGgAkOhVQgGgGAAgJQAAgJAGgHQAHgGAJAAQAKAAAGAGQAGAHAAAJQAAAJgGAGQgGAGgKAAQgJAAgHgGg");
	this.shape.setTransform(0.5,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-43.5,-10.3,88.3,24.8);


(lib.mc_nota2 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5).p("AhRAnIhYg0QgcgQgNgKQgXgRgKgUQgPgcALgeQAGgSASgWIANgSQATgcAmgxQAqg5ASgTQAQgRAXAAQAdAAAQAZQAnAgAtAoQASARABAYQAAAPgHANIAAADQgFAUgpAwQgVAYgOAOIAAAAAAAgxQBHAsAuAhQAIAHAIAHQACABACACQAEADAEAEQAvAoAZAmQAbAnAGAnQABAEAAAEIAAABQACALgBALQgBAggPAbAC+FaQgFADgGACIgSAHQgFACgFABQgHABgHABQgBAAgBAAQgFAAgEAAIgLAAAAKELQgBgFgBgGQgCgaAJgZQAQgrAqgRQgLgKgOgLAAmB1QgKgIgLgHQgHgFgLgIAgZBJQgIgFgIgFIgQgKAAAgxQgKgHgMgHIANgKQAHgEAIgKAAKELQAEAUAKASQAdAwA1AJIAJABAC+FaQAMgIALgLQAOgOAJgP");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.9,1,1).p("AAFgBQgFABgEAC");
	this.shape_1.setTransform(18.5,34.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABdBtIgDgHIAAgBIgGgIQgDgEAHgEIAcgWQAHgIAJABQAGACAEAGQADAFgEAGQgEAHgIAFIgcAVIgBABIgFABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAgAAeBRQAAgFgCgDQgGgGgBgCQgCgDAFgEIAEgCIAngdQAMgKAKAAQAJABADAGQADAFgGAIQgGAIgMAGIgfAXIgIAFQgGADgDAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAgAgUAsQgBgFgCgEIgHgIQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQABgCAFgCIAggYQAKgKAJABQAIABAEAGQACAFgFAGQgFAHgKAGIgbAVIgFAEQgGADgDAAIgBgBgAhSgNQAAgFgCgDQgGgGgBgCQgCgEAJgFIAngdQAMgKAKAAQAJABADAGQADAFgGAIQgGAIgLAGIgnAcQgGADgDAAIgDgBgAiEgtQAAgGgCgDIgHgIQgCgEAJgFIAngcQALgLALABQAIAAAEAGQADAFgGAIQgGAIgMAGIgnAcQgGAEgDAAIgCgBg");
	this.shape_2.setTransform(-5.1,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0096BA").s().p("AgoE0QgagbgGgtQgEgnAhguQARgWASgPQgbBBAiApQAaAiAvgDQAhgDAjglQAQgRALgRIACgDIgBALIgBgIIABAIIAAABIgBAMQgEAggLAlQgIAQgOANQgLALgNAIIAAAAIgTAHQgaAIgdACIgKgBQgzgIgcgwQgLgTgEgUQAEAUALATQAcAwAzAIIAKABIgXAAQgZAAgYgYgABqE7IAAAAgACCEoQAOgNAIgQQgIAfgmARQANgIALgLgACoC5IAAAAgAhwhNQgsgUgJgPQgLgUAhgfQAegcAjhJQASgkAMggQA6BNgBAMQgBAJgfAxQghAvgSASIgBACIgBAAQgFAKgBAaIAAACIgXgOIANgJQAGgFAKgKQgKAKgGAFIgNAJIAXAOQgBAIgJAAQgHAAgNgFgAhShQIAAAAg");
	this.shape_3.setTransform(8.4,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#84CFEF").s().p("ABzFqQAegCAZgHIATgHIgKAFIgSAHIgKADIgOACIgCAAIgJAAgAD6DlIABgMQACALgBALQgBAggPAbQAKglAEgggABQD6QghgoAahBQgLgKgOgLIABgBIAcgVQAIgFAEgHQAEgGgDgFQgEgGgGgCQgJgBgHAIIgcAWQgHAEADAEIAGAIIAAABIgVgPIgSgNIAdgXQAMgGAGgIQAGgIgDgFQgDgGgJgBQgKAAgMAKIglAdIgDACIgQgKIgQgKIAdgVQAKgGAFgHQAFgIgCgFQgEgGgIAAQgJAAgKAIIgiAaQgFACgBACIhYgzQgcgQgNgKQgXgRgKgUQgPgcALgeQAGgSASgWIANgSIA5hNQAqg5ASgTQAQgRAXAAQAdAAAQAZQAnAgAtAoQASARABAYQAAAPgHANIAAADQgFAUgpAwQgVAYgOAOIACgCQARgSAhgwQAigwAAgJQACgMg9hNQgLAfgSAlQghBJgfAcQghAeALAVQAJAPAsATQAcANABgPQBHAsAuAhIAQANIAEAEIAIAHQAvAoAZAmQAbAnAGAnQgKARgRAQQgjAmghADIgIAAQgpAAgagggAhhg0IgnAdQgJAFACAEQABACAGAGQACADAAADQACADAKgDIAngcQALgGAGgIQAGgIgDgFQgDgGgJgBIgBAAQgKAAgLAKgAiThUIgnAcQgJAFACAEIAHAIQACADAAAGQACADAJgGIAngcQAMgGAGgIQAGgIgDgFQgEgGgIAAIgBAAQgKAAgLAKgAAIEAQgCgaAJgZQAQgrAqgRQgRAPgRAWQgiAtAFAoIgCgLgABJCRIAAAAg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.2,-36.3,50.6,72.8);


(lib.mc_nota1 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3.5).p("Ah7kMQgUAGgNADQgNADgFACAh4kNIADAAQA5gXBAgQQAmgKBSgRIALgBQATAAAPANQAQANADAUIA7FAQADAQADAOQAFAfAAATQAAAEAAAFQAAAAAAABAEBCGQgBAIgBAHIgNAiQgBABAAABQgCADgCADQgIALgKAIIgJAGAC9DhIgLADQgEABgDAAIgOABQgRAAgPgFQgKgEgJgFQAAAAAAAAQgCgCgBAAQgZgQgMgcQAAgBgBAAQAAgBAAAAQgEgJgBgJQgDgMABgLIABgKQAAgCAAgBQAFgcAUgWQAUgWAigFIgFgbACAgPIgGgfAB1hJIgDgNAAWhpIgHABQgxALgXAEAg+hKQABACABADQAKAnAMA1QABAFABAFQACAJADAKIAEAUQABAEABAEQAIAnAFAdQAAAEABAEQACANABALQABAKAAAIQACAogSAjQgTAlgeALQgYAKgIACQgMADgKABQgQABgNgFQgPgCgNgFQAAAAAAAAQgQgHgMgMIgBAAQgGgHgLgQQAAgBgBAAQgFgIgFgJQgBAAAAgBQgBgCgBgBQgNgXgBgZQgBgZANgXQAOgaAYgRQAjgYApAIIgCgIAi8iBQgDgLgCgKAjGivQgCgHgBgGAjNjXQABgOAKgMQAGgHALgEIAAAAQABgBACgBABthwIgCgMQgSAFgtAJIgWAFAEBCGQABgHAAgHADIDdQgFACgGACADIDdQAFgDAFgCAh7kMQABAAACgBAg+hKQgCgHgBgGQADgBAFgBAirg6QABACABADIAEASAixhUQgCgJgCgJAifgJIAIAhAiRAyIAGAX");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.9,1,1).p("ACuC7QgEADgFACQgGADgGACAjbEqQAAAAgBAAAigkoQACgBACAAAgOiGIgFACAAWBrQAAACAAACADdBrQgBAHgBAGAAXB6QgBgGAAgFAAWBrQgBgEAAgFAhihmQABACAAADAgwB4QAAADAAAD");
	this.shape_1.setTransform(3.6,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhzCkIgBgJIgDgJQgBgEAEgBIACgBIAAAAIAagKQAFgDAEAAIAEACQAFAEABAHQABAGgEAEIgCACQgEADgFABIgZALIAAAAIgBAAIgCAAQgBAAgBAAQgBAAAAgBQgBAAAAgBQAAAAAAgBgAiEB1QAAgFgBgEIgDgJQgBgFAHgBIABAAIADgCIAZgJQAHgEAGACIADABQAFAEABAHQABAFgFAFIgBABQgFAEgHABIgYAJIgCABIgDABIgEABQAAAAgBAAQgBgBAAAAQgBAAAAgBQAAAAAAgBgACXBLIgBgJIgCgKQgBgEAFgBIABAAIAVgKQAHgFAFAFQAEAEACAHQABAFgEAFQgEAFgGABIgVAJIgBAAIgCAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAAAgAiUA5IAAgKIgDgJQgBgFAIgBIACgBIACgBIAdgKQAGgDAFAAQAEAAADACQAGADACAHQABAGgGAFIgFADQgFACgGACIgcAKIgDAAIgCABIgFABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAgACBAVIAAgJIgDgKQgBgDAIgBIAJgEIAZgIQAKgFAHAEQAGADACAHQABAFgGAEQgGAFgKACIgYAIIgJADIgFABQgBAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAAAgAigAHIABgHIgEgKQgBgEAJgCIACgBIABAAIAlgMIAFgCQAJgDAHADQAHADACAHQABAGgIAFQgFAEgIACIgFABIgkAKIgBABIgDAAIgFABQgEAAgBgCgAB4gRQABgFgBgEIgDgKQgBgEAIgBIAFgCIAFgCIAMgEIAMgEQAKgGAIAEQAGAEABAHQABAFgGAGQgGAFgJABIgYAJIgKADIgEABQgEAAgBgDgAilgmQACgFgBgEIgEgJQgBgEAGgCIABAAIAEgBIAogMIAGgCQAOgGAKAEQAIADABAHQABAEgGAFIgCACQgJAGgMACIgGACIgoAMIgEAAIgDAAQgEAAgBgCgAiohSQgEgBgBgCQACgFgBgEIgEgJQAAgBAAAAQAAgBABgBQAAAAAAgBQABAAABAAIACgBIAGgCIAogMIAKgDQAQgGAKADQAJAEABAHQABAFgJAGQgKAGgNACIgLADIgnAMIgGABIgCAAgAi8h6QACgFgBgEIgEgJQgBgFAMgCIAAAAIAEgBIAugOQAQgGAKADQAGACACAEIACAEQABAGgJAGQgJAFgOADIgBAAIgvAOIgCAAIgBABIgHAAQgEAAgBgCg");
	this.shape_2.setTransform(-2.4,-6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0096BA").s().p("AizE6IgHgEQAMAFAPACIABAAIABAAIADABQAIADAKAAIAAAAIABAAIAGgBIgBABIgOABQgRAAgSgIgAiIFBQgKAAgIgDIgDgBIgBAAIgBAAQgPgCgMgFIgBAAQgYgOgWgdIAAgBIgLgRIAAAAQgOgdAGgpIAFgPQgEAVACARQAJBCBdgFQBegGAQhhQAFgegDgkIgFgeIALAYQAKAaAEAYIAAABIACAHIABASIgDgZIADAZQABAXgGAdQgHAigKATQgIAPgiARQgeAPgXAEIgGABIgBAAIAAAAgAiBFAIAAAAgAi6E2IgBAAIABAAgAjsEHIgIgOIALARIgDgDgAj0D5IAAAAgAB5DQQgJgDgJgFIgBgBQgMgKgMgSQgTgbgEgVIgBgEQAAgOAOgbQAOgcAHgGQAZgUAEAQQAFAPgPAVQgNASAFAXQAEAVARAOQAQAMAfgFQAdgEAPgOQAMgKAOgsIALgrIADAWIADAkIAAABIgBAPIgBABQgCANgJATQgMAbgOAPIgBAAIgIAGIgKAFQgKAEgNACIgVABQgQAAgQgDgADPDHIgJAFIgBAAIAKgFgADPDHIAAAAgAhrByQgEgGgMgJIgMgJIgCgHIACAHIgCgHIAAAAIAZgKQAGgBADgDIAGAdQACAOgEAFIgDABQgCAAgDgEgAD+B2IAAAAgAD/BnIAAACIAAABIgBAMIABgPgAD/BngAiXAiIADAAIAFAXIgFgXIAXgJQAIgBAFgFIAFAZQgFgBgFAEIgZAKIgBAAIgBAAgAilgYIADgBIAIAhIgDABIgIghgAiaAIIgIghIAcgKQAGgBAEgDIAHAlQgFgCgHAEIgZAIgAiwhKIACgBIAkgLIAFgCIAEAXQgFAAgFAEIgeAKIgEgSIgBgGIABAGIAEASIgCAAIgFgXgAhihvQgNgWgCgLQAGgEAAgFQAegBBFgLQBTgNAPgLQASgNAIAMQAIAMgFAkIgBAJIgMAEIgFACIgEgGIhOALIAWgEQAsgJATgGIACAMIgCgMQgTAGgsAJIgWAEIgCAAIhMAMIgCAFIgIABIAEANIAAABIgGAUQgPgUgMgVgAhBhbIAAAAgAhFhoIAIgBIgEAOIgEgNgAi5h2IAEARIAAABIgEgSgAi5h2IAAgBIADgBIApgMIADARIgFADIgmALIgEgRgAg9hpgAi5h2IAAAAgAjCimIAFgBIAngMIAEAUIgpANIgDAAIgEgUgAjJjNIAvgOIABAOIgpAMIgFABIgCgNgAjNjpQgBgWAagOIABgBIABAAIAJgEQASgHATgCIAEgBIABAAIggAJIgTAFIATgFIAggJQBAgJA/gQIAsgMQiABBgmANIgCAAQgDgDgFgCQgLgEgPAHIgvANIAAgBg");
	this.shape_3.setTransform(0.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#84CFEF").s().p("AhIE9QAigRAHgOQALgTAHgiQAGgdgBgYIABASQACAogSAjQgTAlgeALIggAMQgMADgKABQAXgFAfgPgAjTEzIgBAAQgGgHgLgQQAWAcAYAOQgQgGgMgNgAj2DaQgCgRAEgUIgEAPQgGAoANAdIgCgDQgNgXgBgZQgBgZANgXQAOgaAYgRQAjgYApAIIALAIQANAKADAFQAFAHAEgEQAEgEgCgPIgGgdIACgCQAEgEgBgGQgBgHgFgEIgEgCIgFgYIABgBQAFgFgBgFQgBgHgFgEIgDgBIgHgjIAFgDQAGgFgBgGQgCgHgGgDQgDgCgEAAIgFgXQAIgCAFgEQAIgFgBgGQgCgHgHgDQgHgDgJADIgDgSIAGgBQAMgCAJgGIACgCQACAKANAXQAMAUAOAVIAGgVIACAFIAWBcIACAKIAFATIAEAUIACAIQAIAnAFAdIABAGQgFgYgKgZIgKgZIAEAeQAEAkgFAeQgQBiheAFIgOABQhRAAgIg+gAB9DhQAaAEAbgDQAMgCAKgDIgLAEIgLADIgHABIgOABQgRAAgPgFgADIDdIABAAIgMAEIALgEgABnDWQgZgQgMgcIgBgBIAAgBQgEgJgBgJIgCgLQAFAVASAbQAMATANAKIgDgCgADcDRQANgOANgbQAIgTADgOIgCAOIgNAiIgBACIgEAGQgIALgKAIIABgBgAB9CoQgSgNgEgWQgEgWANgTQAOgVgEgPQgFgPgYATQgIAGgOAcQgOAcABAOIAAgJIABgKIAAgDQAFgcAUgWQAUgWAigFIgFgbIAVgJQAGgBAEgDQAEgFgBgFQgCgHgEgEQgFgFgHAFIgVAJIgGgfIAYgIQAKgCAGgFQAGgFgBgGQgCgHgGgDQgHgEgKAFIgZAIIgDgNIAYgIQAJgBAGgFQAGgGgBgFQgBgHgGgEQgIgEgKAGIgMAEIACgJQAFgkgJgNQgIgMgSANQgPAMhSANQhGAKgeACQgBgHgIgDQgKgEgOAGIgGACIgDgUIALgDQANgCAKgGQAJgGgBgFQgBgHgJgEQgKgDgQAGIgKADIgBgNIABAAQAOgDAJgFQAJgGgBgGIgCgEIACgBQAngMCAhBIgtALQg/AQg/AJIADgBIADAAQA5gXBAgQQAmgKBSgRIALgBQATAAAPANQAQANADAUIA7FAIAGAeQAFAfAAATIAAAJIgDgkIgCgXIgMArQgOAtgMAKQgPANgcAFIgRABQgTAAgLgJgAg4heIBNgLIgGABIhIAPgAjBiWIACAAIAEAVIgBAAIgFgVgAjJi8IABAAIACgBIACANIgCABIgDgNgAjCjxQAGgHALgEIAAAAQgaANACAWIAAABIgEABQABgOAKgMgAh8kMIAEgBIgDABIgBAAg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.8,-33.7,51.7,67.7);


(lib.mc_mensuales = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("AGIBJQgSgTAAggQAAgWAJgOQAIgQAPgIQAPgJAUAAQAeAAAPARQAQARAAAfIAAAHIgBAFIhYAAQABANAEAIQAFAHAIADQAHAEALAAQALAAAJgEQAJgDAHgFIAMAAIAAAZQgIAFgNAEQgNAEgUABQgigBgRgSgAHQAHQAAgQgGgIQgGgGgLAAQgHAAgGACQgFADgEAHQgEAHgCALIAzAAIAAAAgAAoBYQgJgDgFgIQgGgJAAgNIAAhkIAmAAIAABaQAAALAFADQAFAEAKAAQAHAAAHgCIAOgEIAAhmIAmAAIAACGIgaAAQgEABgDgDQgDgDgBgHQgKAGgMAEQgMAFgNAAQgLAAgJgEgAl7BJQgSgTAAggQAAgWAJgOQAIgQAPgIQAPgJAUAAQAeAAAPARQAQARAAAfIAAAHIgBAFIhYAAQABANAEAIQAFAHAIADQAHAEALAAQALAAAJgEQAJgDAHgFIAMAAIAAAZQgIAFgNAEQgNAEgUABQgigBgRgSgAkzAHQAAgQgGgIQgGgGgLAAQgHAAgGACQgFADgEAHQgEAHgCALIAzAAIAAAAgAIZBXQgMgDgIgEIAAgcIAMAAQAFAEAJADQAIAEAMAAQALAAAGgDQAGgDAAgHQABgFgFgEQgGgEgOgBQgWgDgMgJQgLgKgBgRQABgWAOgLQAOgKAagBQAOABAKACQAKACAIAFIAAAbIgLAAQgFgDgIgDQgIgCgKgBQgLAAgFAEQgFACAAAHQAAAEAGACQAGADAOABQAQADAKAEQAKAFAFAIQAFAJAAAOQAAAUgOAMQgOAMgdAAQgRAAgLgEgAC8BWQgKgEgGgJQgFgJgBgOQABgPAHgJQAHgJAMgFQAMgFAQAAIAPABIAMADIAAgMQAAgJgFgFQgGgEgOgBQgLAAgIADQgJADgHAFIgLAAIAAgbQAKgEAMgEQANgDARAAQAcAAAPAKQAOAKAAAYIAABcIgQAAQgJAAgEgCQgFgDgCgIQgHAIgKADQgKAEgMAAQgNAAgKgFgADSAhQgGAFgBAKQABAKAFAEQAGAFAKAAQAHAAAGgDQAFgDAFgEIAAgaQgJgCgKAAQgMAAgHAEgAhUBXQgMgDgIgEIAAgcIAMAAQAFAEAJADQAIAEAMAAQALAAAGgDQAGgDAAgHQABgFgFgEQgGgEgOgBQgWgDgMgJQgLgKgBgRQABgWAOgLQAOgKAagBQAOABAKACQAKACAIAFIAAAbIgLAAQgFgDgIgDQgIgCgKgBQgLAAgFAEQgFACAAAHQAAAEAGACQAGADAOABQAQADAKAEQAKAFAFAIQAEAJAAAOQAAAUgNAMQgOAMgdAAQgRAAgLgEgAE7BZIAAi0IAXAAQAGABADABQADABACAFIABAOIAACegAijBZIAAhZQAAgJgEgEQgEgEgJAAQgIAAgIACIgOAEIAABkIgmAAIAAiGIAZAAQAFAAADADQADADABAJQAKgIANgEQANgFAOAAQAKAAAIADQAIADAFAJQAFAIAAAPIAABigAnHBZIAAhZQAAgJgEgEQgDgEgJAAQgIABgIACIgNAEIAABjIgmAAIAAhZQAAgJgEgEQgDgEgJAAQgIABgHACIgOADIAABkIgmAAIAAiGIAaAAQAFAAACADQADADABAIQAKgGAMgFQANgFANAAQALAAAJADQAIAFAFAJQAKgIAOgEQANgFANAAQAKAAAIADQAIAEAFAIQAFAJAAAOIAABig");
	this.shape.setTransform(74.6,17.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12.4,7.9,124.5,18.4);


(lib.mc_logo = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#36578C").s().p("AhFFHIjXqNIB0AAQAhAAAOAPQAPAPASA3IB6GaICUnvIBnAAIjIKNg");
	this.shape.setTransform(19.2,5,0.148,0.148);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#36578C").s().p("Aj5FHIAAqNIEbAAQBiAAAiBDQAhBCg0BMIggAwQBQAqAiBDQAgBAgRBDQgQBDg4ArQg9AuhXAAgAhfDwIAvAAQA8AAAkgiQAngkAAhHQAAg7gagkQgZgfgrgLIA1hRQARgYAAgYQAAgegXgWQgWgWgdAAIhUAAg");
	this.shape_1.setTransform(3.7,5,0.148,0.148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#36578C").s().p("Aj5FHIAAqNIEcAAQBiAAAhBDQAhBCg0BMIggAwQBRAqAiBDQAfBAgQBDQgQBDg5ArQg8AuhXAAgAheDwIAuAAQA8AAAkgiQAngkAAhHQAAg7gagkQgYgfgrgLIA1hRQAQgZAAgXQAAgegWgWQgXgWgcAAIhUAAg");
	this.shape_2.setTransform(11.9,5,0.148,0.148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#36578C").s().p("AASAwIgGgVIgiAAIgGAVIgPAAIAehfIAQAAQAGAAACACQACABACAHIAdBVgAAHANIgLgqIgNAqIAYAAg");
	this.shape_3.setTransform(26.8,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#36578C").s().p("Ah1DTQg3gmgXhGQgPgtAAg4QAAhTAkg+QAig8A9gcQApgSAtAAQA0AAAoARQAqASAbAkQASAZAKAgQAPArAAA7IAAAgIlhAAQACAuAMAiQANAmAaAXQASAQAXAIQAfAMApAAQAaAAAdgGQAbgGARgHQAngTAGAAQAVgCAUAgQgdAfg1AUQgxARg7AAQhQAAg4gngACPgqQgCgpgLgfQgNgfgVgUQgOgLgTgIQgZgIgfAAQgrAAgjAXQgiAXgTAsQgLAdgFAfIEbAAIAAAAg");
	this.shape_4.setTransform(75.7,6.1,0.148,0.148);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#36578C").s().p("AinD7QhbhaAAigIAAgBQAAigBbhaQBQhPB0AAQAaAAASACQAXACAXAFIABAAQAeAJARAIQAlASAdAdQAOAPAMARQgTAVgPAEQgNADgOgIIgPgLIgUgRIgFgDIAAgBIgSgKQgdgOgmgFQgVgDgUAAQhkAAg7BIQg7BHAAB7IAAAFQAAB7A7BIQA7BHBkAAQAUAAAVgDQAmgFAdgOIASgKIAAgBIAZgUQAGgFAJgFQAOgJANADQAPAEATAVQgLAQgPAQQgdAdglASQgRAIgeAJIgBAAQgVAGgZACQgUABgYAAQh0AAhQhPg");
	this.shape_5.setTransform(37.9,4.9,0.148,0.148);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#36578C").s().p("Ah1DmQgpgWgTgqQgLgcAAgjQAAgqASggQASgdAjgSQAXgLAagHQAmgJAnAAQA+AAAzAMIAAhGQgBgcgIgSQgKgRgQgKQgLgHgOgDQgigHgNAAQgzAAglAQQgiAOgNgBQgXgDgRgjQAkgVAggLQAzgQA8AAQAqAAAiAKQAjAJAWAWQAPAPALAVQAMAdgBAmIAAFgIgYAAQgKAAgGgBQgIgCgHgGIgHgIQgCgEgCgLIgBgQQgXAUgbANQgrAUg2AAQg1AAgngVgAgvAQQgcAGgQAPQgNAKgGAMQgKARAAAYQAAAcAKATQAJATAQAKQAKAGAOAFQASAGAYgBQAwAAAjgTQAdgQAdghIAAhmQg4gNg2AAQgjAAgYAHg");
	this.shape_6.setTransform(94.5,6.1,0.148,0.148);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#36578C").s().p("AghFHIAAqNIAcAAQAZAAAHANQAHAKAAAgIAAJWg");
	this.shape_7.setTransform(99.4,5,0.148,0.148);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#36578C").s().p("AhFDEIAAlAIg+AAIAAg5IA+AAIAAiDIBEAAIAACDIB8AAIAAA5Ih8AAIAAE7QAAAkANANQAPAOAoAAIBBAAIAAA0IgJACQgbAFgsAAQh5AAAAh1g");
	this.shape_8.setTransform(89,5.2,0.148,0.148);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#36578C").s().p("ACCD5IAAljQAAgrgUgTQgTgTgsAAQhOAAhiBKIAAFqIhEAAIAAnsIAgAAQAXABAIAPQAFAMAAAfIAAAFQBfhEBiAAQBCgBAiAjQAiAjAABDIAAFog");
	this.shape_9.setTransform(83.1,6.1,0.148,0.148);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#36578C").s().p("ACCD5IAAljQAAgrgTgTQgTgTgsAAQhOAAhjBKIAAFqIhEAAIAAnsIAhAAQAXABAHAPQAFAMAAAfIAAAFQBghEBiAAQBBgBAiAjQAiAjAABDIAAFog");
	this.shape_10.setTransform(68.5,6.1,0.148,0.148);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#36578C").s().p("AggD2IAAnrIAaAAQAYAAAJAOQAGAMAAAiIAAGvg");
	this.shape_11.setTransform(63.4,6.1,0.148,0.148);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#36578C").s().p("AgdAeQgMgNABgRQAAgQAMgMQAMgNAQAAQAQAAANANQAMAMAAAQQABARgMANQgNAMgRAAQgQAAgNgMg");
	this.shape_12.setTransform(63.4,1.1,0.148,0.148);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#36578C").s().p("AhFDEIAAlAIg+AAIAAg5IA+AAIAAiDIBEAAIAACDIB7AAIAAA5Ih7AAIAAE7QAAAkANANQAPAOAoAAIBBAAIAAA0IgJACQgbAFgtAAQh4AAAAh1g");
	this.shape_13.setTransform(59.4,5.2,0.148,0.148);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#36578C").s().p("ACCD5IAAljQgBgrgSgTQgUgTgrAAQhPAAhhBKIAAFqIhFAAIAAnsIAgAAQAXABAIAPQAFAMABAfIAAAFQBehEBjAAQBBgBAiAjQAhAjAABDIAAFog");
	this.shape_14.setTransform(53.5,6.1,0.148,0.148);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#36578C").s().p("AimC2Qg/hEAAhyQAAhxA/hEQA/hFBnAAQBoAAA/BFQA/BEAABxQAAByg/BEQg/BEhoABQhngBg/hEgAh1iMQgrA0AABYQAABaArA0QArAzBKAAQBLAAArgzQArg0AAhaQAAhYgrg0QgrgzhLAAQhKAAgrAzg");
	this.shape_15.setTransform(45.8,6.1,0.148,0.148);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,9.8);


(lib.mc_jeepcompass = function() {
	this.initialize();

	// Capa 3
	this.instance = new lib._300x600jeepcompass();
	this.instance.setTransform(-62.5,-12.4,0.655,0.655);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.5,-12.4,125.1,24.9);


(lib.mc_foot2 = function() {
	this.initialize();

	// Capa 2
	this.instance = new lib._300x600foot();
	this.instance.setTransform(-2.1,2.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,2.9,527,83);


(lib.mc_fondosolido = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.9,-299.9,300,600);


(lib.mc_disco = function() {
	this.initialize();

	// Capa 2
	this.instance = new lib._300x600disco();
	this.instance.setTransform(-125.9,-122.1,0.917,0.917);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-125.9,-122.1,256,243.1);


(lib.mc_desde = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324E8B").s().p("ADPBGQgLgHgHgNQgGgNAAgSQAAgSAHgLQAGgNAMgHQALgIAPAAQAOAAAKAGQALAGAGALQAFAMABARIAAADIAAACIhXAAQAAAYALANQALAMAVAAQAOAAAJgEQAIgDAFgFIAFAAIAAAIQgGAFgKAEQgKAEgQAAQgRAAgMgHgAEOALQgBgVgJgKQgKgJgQAAQgRAAgKAKQgLALgCATIBMAAIAAAAgABUBIQgLgGgGgMQgHgNAAgVQAAgUAIgNQAHgNALgGQALgGANAAQANAAAJAEQAJAEAHAHIAAg1IAEAAQAEAAABACQACACAAAHIAACNIgFAAQgEAAgBgCQgBgDAAgIIAAgHQgHAJgLAGQgLAGgNAAQgMAAgKgFgABcgZQgJAFgGALQgFAJAAAUQAAASAFALQAFALAIAEQAIAFAJAAQAOgBAJgGQAKgGAIgLIAAg6QgHgIgJgEQgIgEgNAAQgKAAgJAEgAgTBKQgIgEgFgEIAAgJIAEAAQAEAEAIAEQAIADAKABQAQAAAIgHQAIgGgBgMQABgKgHgFQgHgFgSgDQgOgCgKgHQgJgHAAgMQAAgPAKgIQALgIAPAAQANAAAIADQAIADAFADIAAAJIgFAAQgEgEgHgCQgHgDgLAAQgLAAgIAFQgHAFAAALQAAAIAHAEQAHAFAOADQAMACAJADQAHADAFAHQAFAGAAAKQAAAQgLAJQgKAJgWAAQgMAAgJgDgAh5BGQgLgHgHgNQgFgNgBgSQAAgSAHgLQAGgNAMgHQALgIAPAAQAPAAAKAGQAKAGAHALQAFAMAAARIAAADIAAACIhWAAQAAAYALANQAKAMAWAAQANAAAJgEQAJgDAEgFIAFAAIAAAIQgFAFgLAEQgKAEgPAAQgRAAgNgHgAg6ALQAAgVgKgKQgJgJgRAAQgQAAgLAKQgKALgCATIBLAAIAAAAgAkYBMIAAiYIApAAQAaAAARAIQASAIAIARQAJARAAAaQAAAagJARQgIARgSAIQgRAIgaAAgAkMBDIAdAAQAWAAAPgHQAOgHAIgPQAHgPAAgXQAAgXgHgPQgIgPgOgGQgPgHgWAAIgdAAg");
	this.shape.setTransform(0.6,-1.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.4,-9,56.2,15.5);


(lib.mc_descubreaqui = function() {
	this.initialize();

	// Capa 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(1.3,3.2);

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A1D2").s().p("AwtDNQghAAgWgYQgXgXAAghIAAj5QAAghAXgXQAWgYAhAAMAhcAAAQAgAAAXAYQAWAYAAAgIAAD5QAAAigWAWQgXAYggAAg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-114.8,-20.5,229.8,41.1);


(lib.mc_delaradio = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324E8B").s().p("Ai8BWQgKgEgGgJQgFgJAAgMQAAgOAGgJQAIgIAMgFQAMgEAQAAIATABIARADIAAgWQgBgQgJgGQgJgHgPAAQgPAAgKAEQgLADgGAFIgFAAIAAgLQAIgEAMgEQALgDARAAQAUAAANAIQAMAJAAAVIAABhIgDAAQgFAAgCgDQgCgCAAgIIAAgGQgJAJgLAGQgKAFgRAAQgNAAgJgFgAiwAYQgKADgEAHQgGAGAAALQAAAQAJAHQAJAHAOAAQAQAAALgGQAKgGAIgKIAAghIgRgDQgJgCgJAAQgNAAgJADgAoXBWQgJgEgGgJQgGgJAAgMQAAgOAHgJQAHgIAMgFQANgEAPAAIATABIARADIAAgWQAAgQgKgGQgJgHgPAAQgOAAgKAEQgLADgGAFIgGAAIAAgLQAIgEAMgEQAMgDAQAAQAVAAAMAIQANAJAAAVIAABhIgEAAQgFAAgCgDQgCgCAAgIIAAgGQgJAJgKAGQgLAFgQAAQgNAAgKgFgAoKAYQgKADgFAHQgGAGABALQAAAQAJAHQAIAHAOAAQAQAAALgGQAKgGAIgKIAAghIgRgDQgIgCgKAAQgMAAgJADgAOgBYQgCgDAAgEQAAgEACgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgEAAgDgDgACPBSQgOgIgHgPQgIgQAAgVQAAgVAIgOQAHgPAOgJQAOgIAUAAQASAAAOAIQAPAJAIAPQAHAOABAVQgBAVgHAQQgIAPgPAIQgOAJgSAAQgUAAgOgJgACMgTQgNAPAAAaQAAAcANAPQANAPAYABQAXgBANgPQANgPAAgcQAAgagNgPQgNgQgXAAQgYAAgNAQgAg1BUQgMgGgHgPQgIgPAAgZQAAgYAJgPQAIgQANgHQANgGAPAAQAQAAAIAEQALAFAIAIIAAg+IAFAAQAFgBACADQACACAAAIIAACoIgIAAQgDAAgBgDQgCgDAAgJIAAgJQgIALgNAHQgKAHgQAAQgOAAgNgHgAgrgeQgKAFgHANQgHAMAAAXQABAWAFANQAHAMAJAGQAJAFAKAAQARgBAKgHQAMgIAIgMIAAhGQgIgIgKgFQgIgFgPAAQgMAAgLAFgAsEBSQgOgIgHgPQgIgPAAgWQABgVAHgOQAIgPANgJQAOgIARAAQARAAANAGQAMAHAHAOQAHAOAAAUIAAAEIAAACIhnAAQAAAdAOAPQANAOAZAAQAQAAAKgEQALgEAFgGIAFAAIAAAKQgGAGgNAEQgLAFgSAAQgVAAgOgJgAq6ANQgBgZgLgMQgMgMgTABQgTAAgNAMQgLANgEAXIBaAAIAAAAgAuVBUQgNgGgHgPQgIgPAAgZQAAgYAJgPQAIgQANgHQAOgGAOAAQAQAAAKAEQALAFAIAIIAAg+IAFAAQAFgBACADQACACAAAIIAACoIgIAAQgDAAgCgDQgBgDAAgJIAAgJQgIALgNAHQgMAHgQAAQgOAAgMgHgAuMgeQgKAFgHANQgHAMAAAXQABAWAFANQAHAMAJAGQAJAFALAAQAQgBAMgHQALgIAJgMIAAhGQgIgIgKgFQgKgFgPAAQgLAAgMAFgAN6BaIgUg5IhPAAIgUA5IgMAAIAAgGIBBiuIAPAAIBACuIAAAGgANiAVIgjhgIgBAAIgjBgIBHAAgAKrBaIhBivIAAgFIAMAAIA8CjIAAAAIA7ijIAMAAIAAAFIhACvgAHlBaIAAi0IAzAAQAQAAANAEQANAEAHAKQAJAKgBARQAAAMgEAIQgEAIgIAFQgGAFgKADQAMACAJADQAJAFAGAJQAFAKAAAPQABARgJALQgHALgOAGQgOAFgTAAgAHyBOIAqAAQAOAAALgEQALgEAGgIQAGgJAAgOQAAgVgOgJQgOgJgXAAIgnAAgAHygJIAlAAQAMAAAKgEQAKgDAHgIQAFgIAAgNQAAgNgFgHQgHgIgKgDQgKgDgLAAIgmAAgAFNBaIAAi0IA0AAQAQAAANAEQANAEAHAKQAJAKgBARQABAMgFAIQgEAIgIAFQgHAFgIADQAKACAKADQAJAFAGAJQAGAKgBAPQABARgJALQgHALgOAGQgPAFgSAAgAFbBOIApAAQAPAAAKgEQALgEAHgIQAGgJAAgOQAAgVgOgJQgNgJgYAAIgnAAgAFbgJIAlAAQAMAAAKgEQALgDAFgIQAGgIABgNQgBgNgGgHQgFgIgLgDQgKgDgLAAIgmAAgABJBaIAAiGIAEAAQAGAAABADQACACAAAJIAAB4gAjxBaIgthTIgIAAIgIAAIgiAAIAABTIgOAAIAAi0IAwAAQATAAAOAEQAOAFAIALQAIALAAASQAAAUgJALQgJAKgPAEIArBQIAAAGgAlQgCIAiAAQAPAAALgDQALgEAGgIQAGgIAAgPQgBgPgGgIQgFgJgMgDQgLgEgOAAIgiAAgApTBaIAAi0IAEAAQAFgBACADQACACgBAIIAACogABJhDQgCgDAAgDQAAgEACgDQADgCAEAAQADAAADACQACADABAEQgBADgCADQgDACgDAAQgEAAgDgCg");
	this.shape.setTransform(0,0.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-94.6,-8.7,189.3,18.4);


(lib.mc_conlasmejores = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324E8B").s().p("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");
	this.shape.setTransform(0,1.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.2,-9.7,168.6,22.5);


(lib.mc_cd = function() {
	this.initialize();

	// Capa 3
	this.instance = new lib._300x600cd();
	this.instance.setTransform(-18.4,-12.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.4,-12.4,37,25);


(lib.mc_carroizquierda = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiaEKQhbg2gohhIgQg3IgDgSQgSh9BNhmQBNhmB/gSQBDgKBCAVQBAAUAyAtQAcArARAWIAZAaQAWAuAIAxIAAABIADA2QgFBvhKBSQhLBUhwAQQgXAEgUAAQhRAAhJgrg");
	this.shape.setTransform(132.1,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A2ANNQhGgZgXg+IgCgGIgtlFIAEgIQALgVgBguQgBgoAWgrQARghAXgXQAIg2BBg7QBlhbDahKQEPheBBgsIAMgPQB2iQC4iMQFskUGAgvQEUggECgBQCTgBC6AMQBoAGAVgDIATgDQAkgFAWAVQAMALAZAwQAYAuAJAFIgBABIgiAxQhFBgh3AIQglACgngHQgTgDgQgFIgDgBQglgIgLAWQgJARAMARQAIALAiAfIAyAvQASASA4ArQBjBLAxAxQBWBUAZBJQASA4AgBAQhggphnAOQiVAThbB5QhbB6AVCVIADATIAHAcQAEARAEAKQmtBIwMCpQACgMABgRIACgcQAAgdgEgZQgViVh5hcQh5hbiVAVQiWAVhbB5QhbB6AVCVQAFAiALAhIAXA1Ig0AJQgiAJgwAHQgtAGgmAAQg6AAgrgOgAEVqwQivAaiXAzQh3AoivCKQiiCAg3BSQgWAhATARQAJAJAOACIS+iyIgpl9QjjAPiBASg");
	this.shape_1.setTransform(-7.9,-5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiEEWQhTgngvhOQgFgIgJgSIgMgbQgMghgEggQgSh9BNhmQBNhnB/gRQB8gSBnBNQBmBMASB/QADAZgBAcIgCAdQgDAVgDAIQgVBchFBBQhHBChgAOQgXADgUAAQhFAAg/gfg");
	this.shape_2.setTransform(-84.8,60.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-162.9,-91.2,326.1,182.7);


(lib.mc_carroderecha = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8FtQiGgXhYhoQhWhngBiGQBUg+BGhvQAphCAxhtQBcghBdAQQCXAZBaB9QBZB9gZCVIgHAfQgkCLh4BPQhdA9hrAAQgdAAghgFg");
	this.shape.setTransform(-129,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AUsKLIhPgMQAIidhjh8Qhjh8iegaQicgaiHBVQiFBUgsCWI2ejuQAIidhjh5Qhkh8idgaQhVgOhTAVIABgCQAagzA8hNQA3hGBIhOIJvBAIEXkAQAggdAqAGIbGEGQAcAEASAWQARAWgCAcIgyKqIA8AKQAfAFAQAbQAQAbgMAdIghBaQgTAyguAaQgjAUgnAAQgMAAgNgCgAMyg+IHiBJIAbkyQAAgGgDgEQgEgFgGgBInAg/gAClikIGvBDIBmhLIAjjdIoJhJgAl5oaIiSCNIBRANIgUB6IGQA+IBVhwIAbixImUg5IgEAAQgLAAgIAIg");
	this.shape_1.setTransform(13.5,-10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AIACFIwOifQgWgDgNgSQgOgSADgWQADgWASgOQASgNAWADIQOCgQAWADANASQAOASgDAWQgDAWgSAOQgOAKgRAAIgJgBg");
	this.shape_2.setTransform(62,-74.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AI5CVIyDi/QgWgDgNgTQgNgRADgWQAEgWASgNQATgNAWADISDC/QAWADANASQANATgEAWQgDAWgTANQgOAKgQAAIgKgBg");
	this.shape_3.setTransform(-15.9,36.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8FtQiLgXhYhtQhXhtAFiIQABgcADgTQAZiXB9haQB9hZCWAZQCXAZBZB9QBZB9gZCVQgCAOgFARQgjCLh4BPQhdA9hrAAQgdAAghgFg");
	this.shape_4.setTransform(96.5,51.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-166.1,-88.2,332.4,176.5);


(lib.mc_canciones = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#324E8B").s().p("APUBWQgJgEgFgJQgHgJAAgMQAAgOAIgJQAGgIANgFQAMgEAQAAIASABIARADIAAgWQAAgQgJgGQgJgHgPAAQgOAAgLAEQgKADgHAFIgGAAIAAgLQAJgEALgEQAMgDAQAAQAWAAAMAIQAMAJABAVIAABhIgEAAQgGAAgCgDQgCgCAAgIIAAgGQgIAJgLAGQgLAFgQAAQgNAAgKgFgAPhAYQgJADgGAHQgFAGAAALQAAAQAJAHQAJAHAOAAQAQAAAKgGQALgGAHgKIAAghIgQgDQgJgCgKAAQgMAAgJADgAHGBWQgKgEgGgJQgFgJAAgMQAAgOAGgJQAIgIAMgFQAMgEAQAAIATABIARADIAAgWQgBgQgJgGQgJgHgPAAQgPAAgKAEQgLADgGAFIgFAAIAAgLQAIgEAMgEQALgDARAAQAUAAANAIQAMAJAAAVIAABhIgDAAQgFAAgCgDQgCgCAAgIIAAgGQgJAJgLAGQgKAFgRAAQgMAAgKgFgAHSAYQgKADgEAHQgGAGAAALQAAAQAJAHQAJAHAOAAQAQAAALgGQAKgGAIgKIAAghIgRgDQgJgCgJAAQgNAAgJADgAwLBWQgJgEgFgJQgHgJAAgMQAAgOAIgJQAHgIAMgFQAMgEAQAAIASABIARADIAAgWQAAgQgJgGQgJgHgPAAQgOAAgLAEQgKADgHAFIgGAAIAAgLQAJgEALgEQAMgDAQAAQAWAAAMAIQAMAJAAAVIAABhIgDAAQgGAAgCgDQgCgCAAgIIAAgGQgIAJgKAGQgMAFgPAAQgNAAgLgFgAv+AYQgJADgGAHQgFAGAAALQAAAQAJAHQAJAHAOAAQAQAAAKgGQALgGAHgKIAAghIgQgDQgIgCgLAAQgMAAgJADgARRBXQgLgEgFgFIAAgLIAFAAQAFAFAKAEQAIAEAPABQATAAAJgIQAJgHAAgOQAAgMgHgGQgJgGgUgDQgUgDgLgIQgLgJAAgOQAAgSAMgJQAMgJAVAAQAOAAAKADQAKADAFAEIAAALIgFAAQgFgFgIgDQgIgDgNAAQgQAAgJAGQgIAGAAANQgBAKAJAFQAHAGAUADQAOACAKAEQAKAEAFAHQAFAIAAAMQAAASgMALQgMALgZAAQgRAAgLgEgANfBSQgOgIgHgPQgHgQgBgVQABgWAHgNQAJgQAOgIQAOgIATAAQARAAAKAEQAKAEAFAFIAAAKIgGAAQgFgFgIgEQgIgEgPAAQgPAAgMAHQgLAHgGANQgHALABATQAAAcANAPQANAPAYAAQAPAAAKgFQAJgFAFgFIAGAAIAAAKIgKAHQgGAEgJACQgJADgMAAQgUAAgOgJgALWBUQgIgIAAgQIAAheIgSAAIAAgKIASAAIAAglIANAAIAAAlIAkAAIAAAKIgkAAIAABdQAAAMAFAFQAHAEALAAIAQAAIAAAJIgJABIgLABQgQAAgIgHgABgBSQgOgIgHgPQgIgQAAgVQAAgVAIgOQAHgPAOgJQAOgIAUAAQATAAAOAIQAOAJAHAPQAJAOAAAVQAAAVgJAQQgHAPgOAIQgOAJgTAAQgUAAgOgJgABdgTQgNAPAAAaQAAAcANAPQANAPAYABQAXgBANgPQANgPAAgcQAAgagNgPQgNgQgXAAQgYAAgNAQgAiqBXQgKgEgFgFIAAgLIAFAAQAFAFAJAEQAJAEAPABQASAAAKgIQAIgHABgOQAAgMgIgGQgIgGgUgDQgVgDgLgIQgLgJAAgOQAAgSAMgJQANgJAVAAQAOAAAKADQAJADAFAEIAAALIgEAAQgGgFgIgDQgHgDgNAAQgRAAgJAGQgIAGAAANQAAAKAIAFQAIAGATADQAOACALAEQAKAEAEAHQAGAIgBAMQABASgMALQgNALgYAAQgSAAgLgEgAkiBSQgNgIgIgPQgHgPAAgWQAAgVAIgOQAHgPANgJQAOgIASAAQAQAAANAGQAMAHAHAOQAHAOABAUIgBAEIAAACIhmAAQAAAdANAPQANAOAZAAQAQAAALgEQAKgEAGgGIAFAAIAAAKQgHAGgMAEQgLAFgTAAQgUAAgPgJgAjYANQgBgZgLgMQgLgMgTABQgUAAgMAMQgMANgDAXIBZAAIAAAAgApABSQgOgIgIgPQgIgQAAgVQAAgVAIgOQAIgPAOgJQAOgIATAAQATAAAOAIQAOAJAIAPQAIAOAAAVQAAAVgIAQQgIAPgOAIQgOAJgTAAQgTAAgOgJgApDgTQgOAPAAAaQAAAcAOAPQANAPAXABQAXgBANgPQAOgPAAgcQAAgagOgPQgNgQgXAAQgXAAgNAQgArxBSQgOgIgIgPQgHgQgBgVQABgWAIgNQAIgQAPgIQAOgIASAAQASAAAJAEQAKAEAGAFIAAAKIgHAAQgEgFgJgEQgIgEgPAAQgPAAgLAHQgMAHgFANQgHALAAATQAAAcANAPQAOAPAXAAQAQAAAJgFQAKgFAFgFIAFAAIAAAKIgKAHQgGAEgIACQgJADgMAAQgUAAgOgJgAyABSQgOgIgHgPQgHgQgBgVQAAgWAIgNQAJgQAOgIQAOgIATAAQARAAAKAEQAKAEAGAFIAAAKIgHAAQgFgFgIgEQgIgEgPAAQgPAAgMAHQgLAHgGANQgHALABATQAAAcANAPQANAPAYAAQAQAAAJgFQAKgFAEgFIAGAAIAAAKIgKAHQgGAEgJACQgJADgMAAQgTAAgPgJgAMaBaIAAiGIADAAQAGAAACADQACACgBAJIAAB4gAKbBaIAAhiQgBgKgDgGQgEgGgGgCQgGgCgHAAQgKAAgLADQgJADgJAFIgRAMIAABlIgMAAIAAiGIAGAAQAEAAABADQACACgBAJIAAAIQAMgKAPgGQAQgHARAAQAKAAAIADQAHADAFAIQAFAIAAAOIAABjgAGKBaIAAhjQABgOgHgGQgHgGgLABQgPAAgMAGQgMAHgLAJIAABmIgMAAIAAhjQgBgOgGgGQgHgGgLABQgPAAgMAGQgMAHgLAJIAABmIgNAAIAAiGIAHAAQAEAAABADQACACgBAJIAAAHIAPgLQAIgFAKgDQAKgDALAAQALAAAKAFQAIAFAEAMQAKgJAOgHQANgGARAAQAJAAAIADQAHADAFAIQAEAHABAMIAABmgAgCBaIAAiGIAEAAQAEAAABADQACACgBAKIAAAJIANgMQAGgGAIgDQAIgEAKAAIAFABIABAAIAAALIgBAAIgFgBQgJABgJADQgHAEgHAGQgHAFgGAHIAABigAllBaIAAhiQgBgKgDgGQgEgGgGgCQgGgCgHAAQgKAAgLADQgJADgJAFIgRAMIAABlIgMAAIAAiGIAGAAQAEAAABADQACACgBAJIAAAIQAMgKAPgGQAQgHARAAQAKAAAIADQAHADAFAIQAFAIAAAOIAABjgAqHBaIAAiGIAFAAQAFAAACADQABACAAAJIAAB4gAs2BaIAAhiQAAgKgDgGQgEgGgGgCQgGgCgIAAQgJAAgKADQgKADgJAFIgQAMIAABlIgNAAIAAiGIAGAAQAEAAACADQABACAAAJIAAAIQAMgKAPgGQAOgHATAAQAJAAAIADQAIADAFAIQAEAIAAAOIAABjgAHlg5IAAgEIAUgdIANAAIAAAFIgZAcgAMahDQgCgDgBgDQABgEACgDQACgCAEAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAQgEAAgCgCgAqHhDQgBgDgBgDQABgEABgDQADgCAEAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAQgEAAgDgCg");
	this.shape.setTransform(0,-0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.2,-9.7,236.5,18.4);


(lib.mc_caja = function() {
	this.initialize();

	// Capa 3
	this.instance = new lib._300x600caja();
	this.instance.setTransform(-139.4,-132.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-139.4,-132.4,279,265);


(lib.mc_boca = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AF3GRQhAgJhygSQhFgLgbgCQgqgFgtAAQgpAAhaAFIhVAGQjaARhigOQiigXhfhuQgYgegdgxQg7higgheQgXhFhEhLQgxg2hQhBQBBANBEAAQBBAABAgLQBIgIBegeQC8g9CAgJQBBgEAbAIIBjAaQBrAmAqBAIARAZIADAEIAEAGQARAZAHAJQAPANAXACQAlADAVgbIAPgUQAuhDA1giIAAAAQAmgWArgHQAygHA/AOQCZAjDUAEQDeADCcgiQikCvg5BwIgZA2QhYC9hQBYQh8CFinAAQgdAAgfgEgAKeCcQgKALgYAOQguAbhEAQQgRAEh8AQQg0AHgGAfQgEAXAVAIQAXAJAzgFQA6gFBFgdQBMgfAwgrQA4gyAAgbQAAgJgGAAQgLAAgiAhg");
	this.shape.setTransform(-2,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ay0FUIgOgLQg4gsgMgMIgDgDQgGgIADgFQADgHAIgCIAXgDQCVgIBUh3IAigxQB4irBYhKQCZh+DTgPIBCADQBOAMA9AqQBVA6BYgUQAugLBEgvIAVgOQBWg2BPgLQCTgVCTBqQA4AoB3BmQCrCSBZAzQCVBXCAgYQAPgCAEADIAIAGQAFAGgGAKQgOAQgUASQgvAsg7A9QjdA1jGgcQjGgci2hvQhzhGhXgDQhWgEg/A+QgVAYgZgGQgNgDgLgKQg6guhBADQglACg4AXIgJAEQlcCRjdAxIgnAHIgPACIAAAAQg4AJg3AAQhbAAhVgYgAGIiVQBiANBqA1QA7AeBgA2QA4AcAEgHQAEgIg0gtIhxhnQhjhahVglQhKgghWACQhNACg8AvQg5AtAPAjQANAeAmAAQASgBA2gMQAcgGAtAAQAeAAAnACgAr4hYIgKAIIghAiIgCAGQgCAIAEAEQAHAHAKgFIAegUQAPgLAFgLQAEgKgJgJQgEgDgFAAQgEAAgGACgAncjjQhIADhVA5QgqAdgcAcIBAghQBNghBFAEQBEAFAXgLQANgFABgPQADgehJAAIgSABg");
	this.shape_1.setTransform(0,-35.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-129.4,-72,259,144.2);


(lib.mc_besofrances = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("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");
	this.shape.setTransform(0.5,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.4,-23.2,95.9,46.9);


(lib.mc_beso = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("AD2EHIh1gRQgugIgRgBQgbgEgeAAQgaAAg7AEIg4AEQiPALhAgJQhqgQg/hHQgQgUgTghQgnhAgUg8QgQgugsgxQgggkg1gqQArAIAtAAQAqAAAqgHQAwgFA9gUQB7goBVgGQAagBATACIAPACQAdAEAkANQBGAZAcAqIALAQIABADIADAEIAQAWQAJAJAPABQAYACAOgSIAKgNQAegsAkgWIgBAAQA1gfBLARQBkAWCLADQCSACBmgXQhsB1glBIIgRAjQg4B8g2A5QhRBXhuAAQgTAAgUgCgAG4BmIgXARQgeASgsAKQgLADhSAKQgiAEgEAVQgCAPAOAGQAOAFAhgDQAngDAtgTQAygVAfgcQAlghAAgRQAAgGgEAAQgHAAgWAVg");
	this.shape.setTransform(-1.3,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#48A2E2").s().p("AsWDfIgJgHQglgdgIgIIgCgCQgDgFABgDQADgFAFgBIAPgCQBhgFA3hOIAXghQBPhvA6gxQBkhTCKgJQASgCAZADQA0AIAoAcQA4AmA5gNQAegHAtgfIANgJQA5gkAzgHQBhgOBhBGQAkAaBPBDQBvBfA7AiQBiA5BUgQQALgBABACIAFADQAEAEgEAHQgJAKgNANQgkAhgiAjQiQAjiCgSQiDgTh3hIQhLgug5gDQg6gCgpApQgNAQgQgEQgJgCgHgHQgmgegrACQgYABglAPIgGADQjkBfiRAgIgaAFIgJABIAAAAQglAGgkAAQg8AAg4gQgADehiIAjABQBAAJBGAiQBIApAeAOQBLAmhEg7IhKhDQhBg7g3gYQgxgVg4ABQgzACgoAeQglAdAKAYQAJATAZAAQALAAAkgJQARgDAgAAIAJAAgAnyg5IgHAFIgWAWQgEAIAEAFQAFAEAGgEIAUgNQAKgHADgHQADgHgGgFQgCgDgDAAQgDAAgEACgAk4iUQgvACg4AlQgcATgSASQARgLAZgKQAzgWAtADQAsADAPgHQAJgEABgJQACgUgvAAIgNABg");
	this.shape_1.setTransform(0,-23.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.9,-47.2,170,94.6);


(lib.mc_besitos = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj0MNIhIgdQhcgwAJhOIACgOIARggQAXgdAaALQAqATBQAiQAlAJAjgUQAogWAdgtQA9hcAShNQAUhNgLhRQgKhSgbhRQgchLgehZQhHjRAuirQAdhtBChHQB9iKCQAnQA3AOArArQAxAygMAvQgLApgiAOQgfAOgrgMQgggJgagUQg5gGg5B0QgOAdgLAqQgKAnAFBDQAGBEAVA5QAWA9AZBKQAcBPASA9QAzCmgyC4QgkCQhzBsQg6A5hVAXQgoALgtAAQggAAgggFg");
	this.shape.setTransform(294.8,20.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhOM+QgkAAgigGQipgeg+iqQg3iWAGiMQAHjKAZiLIANhBIgDAAIANhJQBAlpBOiSQBGiBA0gbQA2gcAwAJQCmAdBpBdQBoBcAnCYQAsCrgpDnIgrEOQg2E0hxCbQhwCcilAAgAgpo/QgkA/gSBmIgVCHIgyDPQg5E9AUD7QAkCDArAiQAiADAggSQAngVAbguQAfgxAbg5QAZg5AThBQAih1APhSQAPhVANitQANiuAQhfIAHgnQAKhGgshBQgrhBhUgOQgMgCgLAAQgzAAgdAzg");
	this.shape_1.setTransform(204.6,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIMgIhGgyIALjCIALhLQgHg1AKnSQAKmzAHiFQhpgNg1gXQhKgfAFg3QAEgqAzgSQAlgOAkADIF0A3IArADQBAAGAcAeQAWAYgDAmQgEAvguAWQgmATgtgEIhigVQgSDWAGGkQAHG1gUDdQgDArgvAbQggATgmAAg");
	this.shape_2.setTransform(103.6,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AEACZQgLgCgSgKQgogFgngLIipg7IjBgsIhQgWQgSgBgJgNQgMgQAGgbIAEgNQAIgjAEgMQAHgUAKgHQAKgJAPAAQAMAAAKAFIDfAuIDHBEQAwANApADIANACQAPABAKADQAVAGAFAVQAEARgFAUIgOA1QgFAegUANQgJAGgMAAg");
	this.shape_3.setTransform(378.2,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkVCnQgTgHgJgaIgFgOQgLgfgDgOQgEgUADgNQAEgNAMgHQAKgGAMgCIDUhPIDMg1QAtgNAngVIALgGQAOgGALgDQAUgGARAQQAMAMAHAUIAQA0QADAEACANQAEATgGAOQgHAQgRAFQgRAEgPAAQghARgpAMIiwArIi4BDIhQAYQgKAEgIAAQgHAAgGgCg");
	this.shape_4.setTransform(-378.4,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1MNQgYgGgMgPQgOgQgCggQgBgUADgRIgPotIAVn/QACh4gLhrQgFgwABgpQABgoAdgUQAVgOAXAAIBKABQAhgEAXAVQAZAVAAAsQAAArgHAfQAIBXgBBuIgVG1IAHHmIgDDNQABANgCAOQgDAYgNAPQgQATgdAAIgoAAQgjAAgSgDg");
	this.shape_5.setTransform(5,-24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7M3QhOgEgqgjQgggagIgqIgDgOIAvhEICEALQAmgDAZgeQAggiANgzQAchrgEhPQgGhPgjhJQgmhOgxhBQhBhRgqg4QiGiwgKixQgHhwAohZQBNiqCWgJQA3gEA2AbQA+AfADAyQACAdgOAWQgXAkg8AEQghACgdgLQg4ANgRB/QgEAgACAsQADApAaA9QAaA9AlAxIBXBxQAzBDAmAzQBkCPALC9QAKCThLCNQgmBJhKAvQg9AphMAMIABALg");
	this.shape_6.setTransform(-86.6,-17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglMhQgjAAgggQQgugYgJgtIgIg9IhFl9IhHqaIgoi7QgPhsApg4QAhgsA+gIQBMgLCIAMQBEAFAmAQQA2AVAFAqQAJBHhjAtIgIAEIgKgCQhogOg/gBIAKA8IAgFGIABAFIBHgNQBJgKAqAOQAgAKAQAXQAMAQACAUQAGApgiAgQgdAdgwAHQgjAFgvACIgfAEQAPBCAJBHIAqGfIAOBdICsgcQA+gIAjANQAvARAGAvQAIA4g1AgQgoAYg0AHIjmAfIgSABIgDAAg");
	this.shape_7.setTransform(-174.4,-2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXN8QgSAAgPgDQgggHgSgUQgNgPgEgTIhqorIjbuVQgeiKAxg3QAbgdAsgKQDOgsCOBWQCNBYAmCvQAYBvgsCDQghBkg7BIQChA9BdByQBrCFAiCjQAUBZghBrQghBlgoBCQgqBDhOA5QhOA4hoAXIgLACQgrAKggAAgAhKAJQBKEeBSGBQBegrAshOQA0hbgWhjQgWhrgohNQgmhLghgiQgigiglgVQgpgVgVgCgAjpq+IgBAMQABAQAEAVQASBUAqCnQAeB3ATBVQAdgcASg0QAahOALhDQAJg1AHgdIgQhJQgMg2g+gqQgtgggvAAQgRAAgOAEg");
	this.shape_8.setTransform(-282.9,13.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-411.2,-102.9,822.5,205.9);


(lib.mc_besito = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("ACeBcQgMgKAAgWIAAhOIgRAAIAAgcIARAAIAAgnIApAAIAAAnIAeAAIAAAcIgeAAIAABJQAAAKAFAEQAEAEAKAAIALAAIAAAZIgKACIgPACQgWAAgMgKgAEMBcQgRgIgKgRQgKgRgBgXQABgYAKgPQAKgSARgJQARgJAVAAQAUAAARAJQARAJAKASQAKAPABAYQgBAXgKARQgKARgRAIQgRAJgUAAQgVAAgRgJgAEZgHQgJAKAAAYQAAAXAJALQAJALAQAAQAPAAAJgLQAJgLAAgXQAAgYgJgKQgJgMgPAAQgQAAgJAMgAjIBRQgTgTgBgjQABgYAJgPQAJgSAQgJQAQgJAVAAQAhAAAQASQARASAAAiIAAAIIAAAFIhgAAQABAOAFAJQAFAIAIADQAJAEALgBQANAAAJgDQAKgEAHgFIANAAIAAAbQgJAFgOAFQgNAEgWAAQgkAAgTgUgAh6AKQgBgRgGgIQgHgIgMABQgHAAgGADQgGACgEAIQgEAIgCALIA3AAIAAAAgAgsBhQgMgDgJgFIAAgeIANAAQAFAEAJAEQAJAEANAAQAMAAAFgDQAGgEAAgHQABgGgGgEQgDgEgQgBQgYgDgMgKQgNgLAAgTQAAgXAQgLQAPgMAbAAQAOAAALADQALACAIAFIAAAdIgMAAQgFgEgJgCQgIgDgJAAQgMAAgGADQgFADAAAHQAAAEAHADQAGADAPACQAPACALAFQALAFAFAJQAFAKAAAOQABAWgPANQgPANgeAAQgSAAgMgEgABEBjIAAiRIAZAAQAHAAADACQAEACABAGIABARIAAB2gAl8BjIAAjCIBDAAQAjAAARANQARAMAAAbQAAARgJAKQgJAKgQADIAAABQATACALALQAMALAAAUQAAAcgTAOQgTAPgkAAgAlRBEIAZAAQAQAAAIgHQAHgIAAgNQAAgNgIgIQgHgHgQAAIgZAAgAlRgQIAXAAQAOAAAHgGQAGgGAAgMQAAgMgGgGQgHgGgOAAIgXAAgABJg/QgHgHAAgJQAAgJAHgGQAGgGAKgBQAJABAGAGQAGAGABAJQgBAJgGAHQgGAGgJAAQgKAAgGgGg");
	this.shape.setTransform(0.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-10.3,76.3,20.5);


(lib.mc_auto = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib._300x600carro();
	this.instance.setTransform(-149.9,-96.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-149.9,-96.9,300,194);


(lib.mc_25 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48A2E2").s().p("AAcBWQgMgDgJgGIAAggIARAAQAFAEAHAEQAIADALAAQAOAAAIgHQAIgGAAgNQAAgMgGgGQgGgGgKABQgKAAgFADIgJAHIgbAAIAAhnIBvAAIAAAkIhOAAIAAAkIABAAQAFgEAIgDQAHgCAMgBQAQAAAMAHQAMAFAHAMQAIALAAASQAAAUgKANQgJANgRAHQgQAHgXABQgSgBgMgDgAiEBXIAAglIAxgtQAPgMAGgJQAHgKAAgIQAAgJgGgFQgFgEgLAAQgLgBgIAEQgIADgFAFIgSAAIAAggQAKgGAOgFQAOgEASAAQAeAAARAMQARANAAAaQAAAMgFAKQgFALgJAIQgKALgNALIgcAZIBGAAIAAAkg");
	this.shape.setTransform(15.9,16.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,7.5,26.7,18);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;

function reloadAd() {
    function A() {
        setTimeout(function() {
            g.style.display = "block"
        }, 27000)
    }
    var g = document.getElementById("reload");
    A(), g.onclick = function() {
        g.style.display = "none", A()
    }
}