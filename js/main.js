let app = new PIXI.Application({width: 720, height: 480, backgroundColor: 0xf5f5f5});

let background;
let objectsToUpdate = [];
let elapsed = 0;
let dialog_indicator;
let sound_button;
let keyboard = {};
let talkers = [];
let music;
let music_queued;
let music_normal_volume = 0.5;
let sound_is_on = true;
let music_paths = ['A Moment of Relief.mp3', 'Chronicles of the Gallian War.mp3', 'Conferral of Honors.mp3', 'Daily Life of the 7th Platoon.mp3', 'Defensive Fight.mp3', 'Everyday Training.mp3', 'Fierce Combat.mp3', 'Final Decisive Battle.mp3', 'Gallant Fight.mp3', 'Hard Fight.mp3', 'No Matter The Distance (Game Opening).mp3', 'No Matter The Distance.mp3', 'Offensive and Defensive Battle.mp3', 'Quiet Chat.mp3', "Randgriz Archduke's Family.mp3", 'Randgriz City.mp3', 'Resistance.mp3', 'Succeeded Wish (Piano).mp3', 'Succeeded Wish (ROJI).mp3', 'Those Who Succeeded.mp3', 'Title Main Theme.mp3', 'Urgent Instructions.mp3', 'Varukyuria Intro.mp3', "Zaka's Theme.mp3"];
let stage_spots = [
  {x: 150, y: 126, facing: 1, guest: null, zIndex: 0},
  {x: 150, y: 363, facing: 1,  guest: null, zIndex: 1},
  {x: app.screen.width-150, y: 126, facing: -1,  guest: null, zIndex: 2},
  {x: app.screen.width-150, y: 363, facing: -1,  guest: null, zIndex: 3}
];
let gameplay = {};
let currentMsg;
let next_ticker;
let bkg_rare_paths = [];
let bkg_rarer_paths = [];
let haltNext = false;

document.body.appendChild(app.view);

// PIXI LOADER
(() => {
PIXI.loader
  .add("assets/sprites/misc/sound_button.json")
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
})();

function setup() {
  playRandomTrack();
  
  sound_button = new ButtonToggle(app.screen.width - 90, app.screen.height -  80, "assets/sprites/misc/sound_button.json", () => {
    if (sound_button.pressed) {
      sound_is_on = false;
      music.volume = 0;
    }
    else {
      music.volume = music_normal_volume;
      sound_is_on = true;
    }
  });
  sound_button.spr.scale.set(3);
  
  genBkgPaths();
  background = new PIXI.Sprite.fromImage(randomBkg());
  background.alpha = 0.75;
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.interactive = true;
  background.on("pointerdown", function() {
    if (currentMsg) {
      currentMsg.clicked();
    }
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
  enterTalkers();

  next_ticker = new PIXI.ticker.Ticker();
  next();
}

function next() {
  if (haltNext) {return;}
  if (Math.random() < 0.52) {
    if (activeTalkers().length>0) {
      randomFromArr(activeTalkers()).talk();
    }
  }
  else {
    // enter new character
    if ((activeTalkers().length < 2 || Math.random() < 0.7) && activeTalkers().length < 4) {
      randomFromArr(inactiveTalkers()).enter();
    }
    // someone leave NOW
    else {
      if (Math.random() < 0.6 || elapsed < 40) {
        randomFromArr(activeTalkers()).leave();
      }
      else {
        changeBkg();
      }
    }
    doUntil(()=>{}, 45, next);
  }
}

function playRandomTrack() {
  if (music) {music.stop();}
  music = PIXI.sound.Sound.from("assets/music/" + randomFromArr(music_paths));
  music.loop = true;
  music.play();
  if (sound_is_on) {
    music.volume = music_normal_volume;
  }
  else {
    music.volume = 0;
  }
}

function changeBkg() {
  haltNext = true;
  // all gradually black
  let tickers = [];
  let rect = new PIXI.Graphics();
  rect.beginFill(0x000000, 1);
  rect.alpha = 0;
  rect.drawRect(0, 0, app.screen.width, app.screen.height);
  rect.endFill();
  rect.zIndex = 99;
  app.stage.addChild(rect);
  updateZIndex();
  
  let ticker = new PIXI.ticker.Ticker();
  let changingMusic = Math.random() < 0.7;
  ticker.add(deltaTime => {
    rect.alpha += 0.028;
    if (rect.alpha >= 0.99) {
      ticker.destroy();
      background.texture = PIXI.Texture.fromImage(randomBkg());
      let actives = activeTalkers();
      for (let i=0; i<actives.length; i++) {
        actives[i].leave();
      }
      if (changingMusic) {
        music.stop();
        playRandomTrack();
      }
      let count = 0;
      ticker = new PIXI.ticker.Ticker();
      ticker.add(() => {
        count++;
        if (count > 60) {
          rect.alpha -= 0.012;
        }
        if (rect.alpha < 0.01) {
          rect.destroy();
          ticker.destroy();
          enterTalkers();
          doUntil(null, 20, ()=> {
            haltNext = false;
            next();
          });
        }
      });
      ticker.start();
    }
  });
  ticker.start();
  
}
function genBkgPaths() {
  if (bkg_rare_paths.length === 0) {
    for (let i=9; i<=55; i++) {
      bkg_rare_paths.push("assets/backgrounds/rare/bkg" + getIntStr(i,3) + ".jpg");
    }
    shuffle(bkg_rare_paths);
  }
  if (bkg_rarer_paths.length === 0) {
    for (let i=0; i<=24; i++) {
      bkg_rarer_paths.push("assets/backgrounds/rarer/bkg" + getIntStr(i,3) + ".jpg");
    }
    shuffle(bkg_rarer_paths);
  }
}
function randomBkg() {
  if (Math.random() < 0.52 || elapsed < 10) {
    return "assets/backgrounds/bkg" + randomIntStr(0,8,3) + ".jpg";
  }
  else {
    genBkgPaths();
    if (Math.random() < 0.65) {
      return bkg_rare_paths.pop();
    }
    return bkg_rarer_paths.pop();
  }
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

function doUntil(func, duration, callback) {
  let count = 0;
  let t = new PIXI.ticker.Ticker();
  t.add((deltaTime) => {
    count++;
    if (!duration || count < duration) {
      if (func) {func(deltaTime);}
    }
    else {
      t.destroy();
      if (callback) {callback();}
    }
  });
  t.start();
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
  shutEveryone();
  this.talking = true;
  new Message(this, DATACHAN.selectRandom(randomFromArr(this.fav_boards)));
};
Talker.prototype.enter = function() {
  this.active = true;
  this.spr.alpha = 0.1;
  this.randomPos();
  this.spr.x -= this.stage_spot.facing*30;
  this.spr.zIndex = this.stage_spot.zIndex;
  
  doUntil((deltaTime)=>{
    this.spr.alpha += 0.045;
    this.spr.x += 3 * this.stage_spot.facing;
  }, 13, () => this.spr.alpha = this.alpha_min);
  app.stage.addChild(this.spr);
  updateZIndex();
};
Talker.prototype.leave = function() {
  this.active = false;
  this.talking = false;
  this.stage_spot.guest = null;
  doUntil((deltaTime) => {
    this.spr.alpha -= 0.04;
    this.spr.x -= 3 * this.stage_spot.facing;
  }, 30, () => {
    app.stage.removeChild(this.spr);
    this.spr.alpha = this.alpha_min;
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
function activeTalkers() {
  return talkers.filter(t => t.active);
}
function inactiveTalkers() {
  return talkers.filter(t => !t.active);
}
function enterTalkers() {
  // enter anywhere from 1 to 4 people
  for (let i=0; i<randomInt(1,4); i++) {
    randomFromArr(talkers).enter();
  }
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
function updateZIndex() {
  app.stage.children.sort(function(a,b) {
    a.zIndex = a.zIndex || -1;
    b.zIndex = b.zIndex || -1;
    return a.zIndex - b.zIndex;
  });
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

function ButtonToggle(x, y, path, action) {
  this.spr = animatedSpriteFrom(path);
  this.spr.zIndex = 90;
  this.spr.position.set(x, y);
  app.stage.addChild(this.spr);
  this.pressed = false;
  this.spr.interactive = true;
  this.spr.buttonMode = true;
  this.spr.on('pointerdown', () => {
    if (this.pressed) {
      this.spr.gotoAndStop(0);
      this.pressed = false;
    }
    else {
      this.spr.gotoAndStop(1);
      this.pressed = true;
    }
    action();
  });
}

app.ticker.add(playing);