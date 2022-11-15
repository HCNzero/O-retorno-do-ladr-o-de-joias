var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b9e06ed0-2270-4748-a734-8c1fff5be1d4","825b0471-3ae1-4128-aab7-ead6bce4951a","40b65b36-21e5-4758-90f8-2fbe452ab71e","966cc670-64f6-405d-bb06-9ccb186a2932","76e0af42-d6e1-4574-8ff4-e1779c1dc9ce","df54b694-1d68-4e6d-b384-60e1f2c7d990","dfd5ac13-146d-409e-8cdb-3e85a2272b2a","887774fe-06eb-44c5-ae84-c7d4b83a1090","87a573a2-2596-4b60-9950-0e93e168ccd3","fa729c19-641f-4929-bff4-0c4117d08293"],"propsByKey":{"b9e06ed0-2270-4748-a734-8c1fff5be1d4":{"name":"shuriken-removebg-preview.png_1","sourceUrl":null,"frameSize":{"x":122,"y":121},"frameCount":1,"looping":true,"frameDelay":12,"version":"towwFy3lfOuK3b4JPOm30Gpgu0.UGUpK","loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":121},"rootRelativePath":"assets/b9e06ed0-2270-4748-a734-8c1fff5be1d4.png"},"825b0471-3ae1-4128-aab7-ead6bce4951a":{"name":"kunai","sourceUrl":null,"frameSize":{"x":420,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"dgrG_E4E13n5vc3x6nxTmokvRudl4JVV","loadedFromSource":true,"saved":true,"sourceSize":{"x":420,"y":100},"rootRelativePath":"assets/825b0471-3ae1-4128-aab7-ead6bce4951a.png"},"40b65b36-21e5-4758-90f8-2fbe452ab71e":{"name":"download-removebg-preview (4).png_1","sourceUrl":null,"frameSize":{"x":221,"y":178},"frameCount":1,"looping":true,"frameDelay":12,"version":"UIOylXONKGkJNSF60VqPg90uUvbKamu_","loadedFromSource":true,"saved":true,"sourceSize":{"x":221,"y":178},"rootRelativePath":"assets/40b65b36-21e5-4758-90f8-2fbe452ab71e.png"},"966cc670-64f6-405d-bb06-9ccb186a2932":{"name":"d3161e7bf2a973f9128f7ddd5feb5021.png_1","sourceUrl":"assets/v3/animations/3Rj3PYJx7aRAG-tmG5Ywj5tgnPjdQUwVgP3JKPXz4TE/966cc670-64f6-405d-bb06-9ccb186a2932.png","frameSize":{"x":38,"y":63},"frameCount":1,"looping":true,"frameDelay":4,"version":"qmywolY9qCce_5EMsAxiu9XaebuL8JX9","loadedFromSource":true,"saved":true,"sourceSize":{"x":38,"y":63},"rootRelativePath":"assets/v3/animations/3Rj3PYJx7aRAG-tmG5Ywj5tgnPjdQUwVgP3JKPXz4TE/966cc670-64f6-405d-bb06-9ccb186a2932.png"},"76e0af42-d6e1-4574-8ff4-e1779c1dc9ce":{"name":"ladrao","sourceUrl":null,"frameSize":{"x":36,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"15Vcptvlma5XfrlUkI_LIScqgwcz0XAn","loadedFromSource":true,"saved":true,"sourceSize":{"x":36,"y":56},"rootRelativePath":"assets/76e0af42-d6e1-4574-8ff4-e1779c1dc9ce.png"},"df54b694-1d68-4e6d-b384-60e1f2c7d990":{"name":"bomba","sourceUrl":null,"frameSize":{"x":190,"y":191},"frameCount":1,"looping":true,"frameDelay":12,"version":"oV2CfVGTlq9Oam6Of5_TeTZOBlGjbTOZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":191},"rootRelativePath":"assets/df54b694-1d68-4e6d-b384-60e1f2c7d990.png"},"dfd5ac13-146d-409e-8cdb-3e85a2272b2a":{"name":"chao","sourceUrl":"assets/v3/animations/3Rj3PYJx7aRAG-tmG5Ywj5tgnPjdQUwVgP3JKPXz4TE/dfd5ac13-146d-409e-8cdb-3e85a2272b2a.png","frameSize":{"x":275,"y":183},"frameCount":1,"looping":true,"frameDelay":4,"version":"OcNiAmBXtyKUN0nLoPQMwMlwra79SXDi","loadedFromSource":true,"saved":true,"sourceSize":{"x":275,"y":183},"rootRelativePath":"assets/v3/animations/3Rj3PYJx7aRAG-tmG5Ywj5tgnPjdQUwVgP3JKPXz4TE/dfd5ac13-146d-409e-8cdb-3e85a2272b2a.png"},"887774fe-06eb-44c5-ae84-c7d4b83a1090":{"name":"camera","sourceUrl":null,"frameSize":{"x":210,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"mGpRydpk3Z_Vej3mCKWx473UCSmHqk9A","loadedFromSource":true,"saved":true,"sourceSize":{"x":210,"y":160},"rootRelativePath":"assets/887774fe-06eb-44c5-ae84-c7d4b83a1090.png"},"87a573a2-2596-4b60-9950-0e93e168ccd3":{"name":"download-removebg-preview (7).png_1","sourceUrl":null,"frameSize":{"x":216,"y":216},"frameCount":1,"looping":true,"frameDelay":12,"version":".XSea2nCBcW16KIhpP6.cI6ybiNRPR3a","loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":216},"rootRelativePath":"assets/87a573a2-2596-4b60-9950-0e93e168ccd3.png"},"fa729c19-641f-4929-bff4-0c4117d08293":{"name":"cameraaaaa","sourceUrl":null,"frameSize":{"x":206,"y":160},"frameCount":1,"looping":true,"frameDelay":12,"version":"vqXQhgzDxiA9dcRirE9ZJs6r_x6trfIg","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":160},"rootRelativePath":"assets/fa729c19-641f-4929-bff4-0c4117d08293.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var chao = createSprite(200, 200, 400, 400);
var diamante = createSprite(200, 30, 20, 20);
var ladrao = createSprite(200, 370, 20, 20);
var laser1 = createSprite(100, 315, 20, 20);
var laser2 = createSprite(300, 280, 20, 20);
var laser3 = createSprite(100, 245, 20, 20);
var laser4 = createSprite(300, 210, 20, 20);
var laser5 = createSprite(100, 175, 20, 20);
var laser6 = createSprite(300, 130, 20, 20);
var laser7 = createSprite(100, 95, 20, 20);
var camera2 = createSprite(390, 335, 20, 20);
var camera3 = createSprite(390, 60, 20, 20);
var camera4 = createSprite(10, 335, 20, 20);
var camera1 = createSprite(10, 60, 20, 20);
camera4.setAnimation("cameraaaaa");
camera1.setAnimation("cameraaaaa");
camera3.setAnimation("camera");
camera2.setAnimation("camera");
chao.setAnimation("chao");
diamante.setAnimation("download-removebg-preview (4).png_1");
ladrao.setAnimation("ladrao");
laser1.setAnimation("shuriken-removebg-preview.png_1");
laser2.setAnimation("bomba");
laser3.setAnimation("shuriken-removebg-preview.png_1");
laser4.setAnimation("bomba");
laser5.setAnimation("shuriken-removebg-preview.png_1");
laser6.setAnimation("bomba");
laser7.setAnimation("shuriken-removebg-preview.png_1");
camera4.scale = 0.3;
camera1.scale = 0.3;
camera2.scale = 0.3;
camera3.scale = 0.3;
chao.scale = 2.2;
diamante.scale = 0.2;
ladrao.scale = 0.8;
laser1.scale = 0.3;
laser2.scale = 0.2;
laser3.scale = 0.3;
laser4.scale = 0.2;
laser5.scale = 0.3;
laser6.scale = 0.2;
laser7.scale = 0.3;
laser1.velocityX = 2;
laser2.velocityX = -3.5;
laser3.velocityX = 4;
laser4.velocityX = -3;
laser5.velocityX = 3;
laser6.velocityX = -2.8;
laser7.velocityX = 2.5;
laser1.rotationSpeed = 3.5;
laser3.rotationSpeed = 3.5;
laser5.rotationSpeed = 3.5;
laser7.rotationSpeed = 3.5;
createEdgeSprites();
function draw() {
  background("lightgray");
  if (keyDown("up")) {
    ladrao.velocityY = -2;
  }
  if (keyDown("down")) {
    ladrao.velocityY = 2;
  }
  if (keyDown("left")) {
    ladrao.velocityX = -2;
  }
  if (keyDown("right")) {
    ladrao.velocityX = 2;
  }
  if (keyWentUp("up")) {
    ladrao.velocityX = 0;
    ladrao.velocityY = 0;
  }
  if (keyWentUp("down")) {
    ladrao.velocityX = 0;
    ladrao.velocityY = 0;
  }
  if (keyWentUp("left")) {
    ladrao.velocityX = 0;
    ladrao.velocityY = 0;
  }
  if (keyWentUp("right")) {
    ladrao.velocityX = 0;
    ladrao.velocityY = 0;
  }
  if (laser1.isTouching(edges)) {
    laser1.x = 20;
  }
  if (laser2.isTouching(edges)) {
    laser2.x = 380;
  }
  if (laser3.isTouching(edges)) {
    laser3.x = 20;
  }
  if (laser4.isTouching(edges)) {
    laser4.x = 380;
  }
  if (laser5.isTouching(edges)) {
    laser5.x = 20;
  }
  if (laser6.isTouching(edges)) {
    laser6.x = 380;
  }
  if (laser7.isTouching(edges)) {
    laser7.x = 20;
  }
  if (ladrao.isTouching(laser1)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/negative_beeps-6008.mp3", false);
  }
  if (ladrao.isTouching(laser2)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/negative_beeps-6008.mp3", false);
  }
  if (ladrao.isTouching(laser3)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/negative_beeps-6008.mp3", false);
  }
  if (ladrao.isTouching(laser4)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/negative_beeps-6008.mp3", false);
  }
  if (ladrao.isTouching(laser5)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/negative_beeps-6008.mp3", false);
  }
  if (ladrao.isTouching(laser6)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/negative_beeps-6008.mp3", false);
  }
  if (ladrao.isTouching(laser7)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/negative_beeps-6008.mp3", false);
  }
  if (ladrao.isTouching(diamante)) {
    ladrao.x = 200;
    ladrao.y = 370;
    playSound("assets/category_achievements/lighthearted_bonus_objective_6.mp3", false);
  }
  ladrao.collide(edges);
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
