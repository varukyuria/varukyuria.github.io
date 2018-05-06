let app = new PIXI.Application({width: 720, height: 480, backgroundColor: 0xf5f5f5});

let gameState = playing;
let objectsToUpdate = [];
let elapsed = 0;
let dialog_indicator;
let keyboard = {};
let talkers = [];
let stage_spots = [
  {x: 150, y: 126, facing: 1, guest: null, zIndex: 0},
  {x: 150, y: 363, facing: 1,  guest: null, zIndex: 1},
  {x: app.screen.width-150, y: 126, facing: -1,  guest: null, zIndex: 2},
  {x: app.screen.width-150, y: 363, facing: -1,  guest: null, zIndex: 3}
];
let gameplay = {};
let currentMsg;

document.body.appendChild(app.view);

PIXI.loader
  .add("assets/fonts/LCD_Solid.ttf")
  .add("assets/sprites/characters/alfons.json")
  .add("assets/sprites/characters/alicia.json")
  .add("assets/sprites/characters/amy.json")
  .add("assets/sprites/characters/annika.json")
  .add("assets/sprites/characters/clarissa.json")
  .add("assets/sprites/characters/cossette.json")
  .add("assets/sprites/characters/edy.json")
  .add("assets/sprites/characters/gloria.json")
  .add("assets/sprites/characters/gusurg.json")
  .add("assets/sprites/characters/imca.json")
  .add("assets/sprites/characters/isara.json")
  .add("assets/sprites/characters/kurt.json")
  .add("assets/sprites/characters/leila.json")
  .add("assets/sprites/characters/riela.json")
  .add("assets/sprites/characters/rosie.json")
  .add("assets/sprites/characters/selvaria.json")
  .add("assets/sprites/characters/susie.json")
  .add("assets/sprites/characters/valerie.json")
  .add("assets/sprites/characters/varrot.json")
  .add("assets/sprites/characters/welkin.json")
  .load(setup);

function setup() {
  
  let background = new PIXI.Sprite.fromImage("assets/sprites/bkg/bkg" + randomIntStr(0,8,3) + ".jpg");
  background.alpha = 0.85;
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.interactive = true;
  background.on("pointerdown", function() {
    currentMsg.clicked();
  });
  app.stage.addChild(background);
  
  
  dialog_indicator = app.stage.addChild(new PIXI.Sprite.fromImage("assets/sprites/misc/dialog_indicator.png"));
  dialog_indicator.scale.set(2.2);
  dialog_indicator.anchor.set(0.5, 0.5);
  app.stage.addChild(dialog_indicator);
  addUpdate(dialog_indicator, () => {
    dialog_indicator.y -= Math.sin(elapsed/10)*0.4;
  });
  dialog_indicator.alpha = 0;
    
  initTalkers();
  
  // enter anywhere from 1 to 4 people
  for (let i=0; i<randomInt(1,4); i++) {
    randomFromArr(talkers).enter();
  }
  
  next();
}

function next() {
  if (Math.random() < 0.6) {
    randomFromArr(activeTalkers()).talk();
  }
  else {
    // enter new character
    if ((activeTalkers().length < 2 || Math.random() < 0.7) && activeTalkers().length < 4) {
      randomFromArr(inactiveTalkers()).enter();
    }
    // someone leave NOW
    else {      
      randomFromArr(activeTalkers()).leave();
    }
    new doForABit(gameplay, function(){}, 45, next)
  }
}

function updateZOrder() {
  app.stage.children.sort(function(a,b) {
    a.zIndex = a.zIndex || -1;
    b.zIndex = b.zIndex || -1;
    return a.zIndex - b.zIndex;
  });
}

function addUpdate(obj, func) {
  if (!isInArr(obj, objectsToUpdate)) {
    objectsToUpdate.push(obj);
  }
  if (!obj.update) {
    obj.update = [];
  }
  if (!isInArr(func, obj.update)) {
    obj.update.push(func);
  }
}

function doForABit(obj, func, duration, callback) {
  this.stopAt = elapsed + duration;
  this.alreadyCalled = false;
  this.func2 =  () => {
    if (elapsed < this.stopAt) {
      func(obj);
    }
    else {
      if (!this.alreadyCalled) {
        if (callback) {
          callback(obj);
        }
      }
      this.alreadyCalled = true;
    }
  };
  addUpdate(obj, this.func2);
}

function initTalkers() {
  // [sidenote] available boards: a g c jp v vr tv k o an sci his i toy p ck ic lit mu fa gd biz fit s4s
  talkers.push(new Talker("Alfons", ["vr", "jp", "k", "sci", "s4s"], "assets/sprites/characters/alfons.json"));
  talkers.push(new Talker("Alicia", ["c", "ck", "s4s"], "assets/sprites/characters/alicia.json"));
  talkers.push(new Talker("Amy", [""], "assets/sprites/characters/amy.json"));
  talkers.push(new Talker("Annika", ["fit"], "assets/sprites/characters/annika.json"));
  talkers.push(new Talker("Clarissa", ["fit", "mu"], "assets/sprites/characters/clarissa.json"));
  talkers.push(new Talker("Cossette", ["gd", "ic", "i"], "assets/sprites/characters/cossette.json"));
  talkers.push(new Talker("Edy", ["jp"], "assets/sprites/characters/edy.json"));
  talkers.push(new Talker("Gloria", [""], "assets/sprites/characters/gloria.json"));
  talkers.push(new Talker("Gusurg", ["jp", "a", "toy"], "assets/sprites/characters/gusurg.json"));
  talkers.push(new Talker("Imca", ["k"], "assets/sprites/characters/imca.json"));
  talkers.push(new Talker("Isara", ["o", "sci"], "assets/sprites/characters/isara.json"));
  talkers.push(new Talker("Kurt", ["biz", "ck"], "assets/sprites/characters/kurt.json"));
  talkers.push(new Talker("Leila", ["fit", "k", "fa"], "assets/sprites/characters/leila.json"));
  talkers.push(new Talker("Riela", ["", "s4s"], "assets/sprites/characters/riela.json"));
  talkers.push(new Talker("Rosie", ["mu"], "assets/sprites/characters/rosie.json"));
  talkers.push(new Talker("Selvaria", ["k"], "assets/sprites/characters/selvaria.json"));
  talkers.push(new Talker("Susie", ["c", "a"], "assets/sprites/characters/susie.json"));
  talkers.push(new Talker("Valerie", ["his", "sci"], "assets/sprites/characters/valerie.json"));
  talkers.push(new Talker("Varrot", ["fit"], "assets/sprites/characters/varrot.json"));
  talkers.push(new Talker("Welkin", ["an", "his"], "assets/sprites/characters/welkin.json"));
}

function Talker(name, fav_boards, sprite_path) {
  this.name = name;
  this.fav_boards = fav_boards;
  this.spr = animatedSpriteFrom(sprite_path);
  this.spr.anchor.set(0.5, 0.5);
  this.alpha_min = 0.7;
  this.spr.alpha = this.alpha_min;
  this.randomFace();
  this.active = false;
  this.talking = false;
  this.talking_y = 0;
  this.talking_y_max = 20;
  this.talking_y_speed = 2;
  this.vy = 0;
  this.stage_spot = null;
  addUpdate(this, () => {
    // wiggle/float on the x axis very gently
    this.spr.x += Math.sin((elapsed/50)+this.spr.y/100)/16;
    
    if (this.talking) {
      if (this.spr.alpha < 1) {
        this.spr.alpha += 0.05;
      }
      if (this.talking_y < this.talking_y_max) {
        this.talking_y += this.talking_y_speed;
        this.spr.y -= this.talking_y_speed;
      }
    }
    else {
      if (this.spr.alpha > this.alpha_min) {
        this.spr.alpha -= 0.05;
      }
      if (this.talking_y > 0) {
        this.talking_y -= this.talking_y_speed;
        this.spr.y += this.talking_y_speed;
      }  
    }
  });
  this.randomFace();
}
Talker.prototype.talk = function() {
  this.randomFace();
  shutEveryone()
  this.talking = true;
  new Message(this, DATACHAN.selectRandom(randomFromArr(this.fav_boards)));
};
Talker.prototype.enter = function() {
  this.active = true;
  this.spr.alpha = 0.3;
  this.randomPos();
  this.spr.x -= this.stage_spot.facing*30;
  this.spr.zIndex = this.stage_spot.zIndex;
  new doForABit(this, function(o) {
    o.spr.alpha += 0.08;
    o.spr.x += 3 * o.stage_spot.facing;
  }, 13);
  app.stage.addChild(this.spr);
  updateZOrder();
};
Talker.prototype.leave = function() {
  this.active = false;
  this.talking = false;
  this.stage_spot.guest = null;
  new doForABit(this, function(o) {
    o.spr.alpha -= 0.04;
    o.spr.x -= 3 * o.stage_spot.facing;
  }, 30, function(o) {
    app.stage.removeChild(o.spr);
  });
};
Talker.prototype.randomPos = function() {
  let freespots = stage_spots.filter(s => !s.guest);
  if (freespots.length > 0) {
    if (this.stage_spot) {
      this.stage_spot.guest = null;
    }
    this.stage_spot = randomFromArr(freespots);
    this.stage_spot.guest = this;
    this.spr.x = this.stage_spot.x + randomInt(-50, 50);
    this.spr.y = this.stage_spot.y + randomInt(-50, 50);
    this.spr.scale.x = this.stage_spot.facing;
  }
};
Talker.prototype.randomFace = function() {
  this.spr.gotoAndStop(randomInt(0, this.spr.totalFrames));
};

function activeTalkers() {
  return talkers.filter(t => t.active);
}
function inactiveTalkers() {
  return talkers.filter(t => !t.active);
}
function shutEveryone() {
  for (let i=0; i<talkers.length; i++) {
    talkers[i].talking = false;
  }
}

function Message(owner, text) {
  let str_max = 340;
  currentMsg = this;
  if (text.length > str_max) {
    text = text.substring(0, str_max) + "[...]";
  }
  this.spr = new PIXI.Sprite.fromImage("assets/sprites/misc/msgbubble.png");
  this.spr.alpha = 0.8;
  this.owner = owner;
  this.spr.position.set(owner.spr.x,owner.spr.y);
  this.shownSoFar = "";
  this.shownSoFarN = 0;
  this.text = text;
  this.state = 0;
  app.stage.addChild(this.spr);
  
  var style = new PIXI.TextStyle({
      fontFamily: 'Arial, sans-serif',
      fontSize: 18,
      fill: '#747474',
//      letterSpacing: 3,
//      stroke: '#dbdbdb',
//      strokeThickness: 0.5,
      dropShadow: true,
//      lineHeight: 34,
      dropShadowColor: '#585858',
      dropShadowBlur: 1,
      dropShadowAngle: Math.PI * 0.5,
      dropShadowDistance: 1.8,
      wordWrap: true,
      wordWrapWidth: 350
  });

  this.textSpr = new PIXI.Text(text, style);
  
  this.spr.width = this.textSpr.width+50;
  this.spr.height = this.textSpr.height+40;
  
  // position msg and text appropiately
  this.x = this.owner.spr.x + this.owner.spr.width/2 - 20;
  if (this.x + this.spr.width > app.screen.width - 20) {
    this.x = app.screen.width - this.spr.width - 20;
  }
  if (this.owner.stage_spot.facing === -1) {
    this.x = this.owner.spr.x - this.owner.spr.width/2 - this.spr.width + 50;
    if (this.x < 10) {
      this.x = 10;
    }
  }
  
  this.y = this.owner.spr.y - 40;
  if (this.y + this.spr.height > app.screen.height - 20) {
    this.y = app.screen.height - this.spr.height - 20;
  }
  
  this.spr.position.set(this.x,this.y);
  this.textSpr.position.set(this.x+30,this.y+25);
  
  this.clicked = () => {
    if (this.state === 0) {
      this.shownSoFar = this.text;
      this.textSpr.text = this.shownSoFar;
      showDialogIndicator(this.spr);
      
    }
    if (this.state === 1) {
      app.stage.removeChild(this.spr);
      app.stage.removeChild(this.textSpr);
      hideDialogIndicator();
      next();
    }
    this.state += 1;
  };
  
  this.textSpr.text = "";
  
  app.stage.addChild(this.textSpr);
  
  addUpdate(this, () => {
    if (elapsed % 2 === 0) {return;}
    if (this.shownSoFar != this.text) {
      this.shownSoFar += this.text[this.shownSoFarN];
      this.textSpr.text = this.shownSoFar;
      this.shownSoFarN += 1;
    }
    else {
      if (this.state === 0) {
        this.state = 1;
        showDialogIndicator(this.spr);
      }
    }
  });
}

function showDialogIndicator(spr) {
  dialog_indicator.alpha = 1;
  app.stage.removeChild(dialog_indicator);
  app.stage.addChild(dialog_indicator);
  dialog_indicator.position.set(spr.x+spr.width-30, spr.y+spr.height-2);
}
function hideDialogIndicator() {
  dialog_indicator.alpha = 0;
  dialog_indicator.x = -200;
}

function animatedSpriteFrom(path) {
  let t = PIXI.loader.resources[path].textures;
  return new PIXI.extras.AnimatedSprite(Object.values(t).sort());
}

function playing(delta) {
  elapsed += 1;
  for (var key in objectsToUpdate) {
    if (objectsToUpdate[key].update) {
      for (let i=0; i<objectsToUpdate[key].update.length; i++) {
        objectsToUpdate[key].update[i]();
      }
    }
  }
}

app.ticker.add(gameState);