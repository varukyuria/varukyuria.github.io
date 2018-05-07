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
let music_song;
let music_normal_volume = 0.5;
let sound_is_on = true;
let emotes_queue = [];
let music_paths = ['A Moment of Relief.mp3', 'Chronicles of the Gallian War.mp3', 'Conferral of Honors.mp3', 'Daily Life of the 7th Platoon.mp3', 'Defensive Fight.mp3', 'Everyday Training.mp3', 'Fierce Combat.mp3', 'Final Decisive Battle.mp3', 'Gallant Fight.mp3', 'Hard Fight.mp3', 'No Matter The Distance (Game Opening).mp3', 'No Matter The Distance.mp3', 'Offensive and Defensive Battle.mp3', 'Quiet Chat.mp3', "Randgriz Archduke's Family.mp3", 'Randgriz City.mp3', 'Resistance.mp3', 'Succeeded Wish (Piano).mp3', 'Succeeded Wish (ROJI).mp3', 'Those Who Succeeded.mp3', 'Title Main Theme.mp3', 'Urgent Instructions.mp3', 'Varukyuria Intro.mp3', "Zaka's Theme.mp3"];
let songs = [];
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
let bkg_rare_number = 87;
let haltNext = false;

document.body.appendChild(app.view);

// PIXI LOADER
(() => {
PIXI.loader
  .add("assets/sprites/misc/sound_button.json")
  .add("assets/sprites/misc/emotes.json")
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

function ikuso () {
  if (currentMsg) {
    currentMsg.clicked();
  }
}
function setup() {
//  document.body.onclick = ikuso;
  initSongs();
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
  sound_button.alpha = 0.8;
  sound_button.press();
  
  genBkgPaths();
  background = new PIXI.Sprite.fromImage(randomBkg());
  background.alpha = 0.75;
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.interactive = true;
  background.on("pointerdown", ikuso);
  app.stage.addChild(background);
  
  
  dialog_indicator = app.stage.addChild(new PIXI.Sprite.fromImage("assets/sprites/misc/dialog_indicator.png"));
  dialog_indicator.scale.set(2.2);
  dialog_indicator.anchor.set(0.5, 0.5);
  app.stage.addChild(dialog_indicator);
  addUpdate(dialog_indicator, () => {
    dialog_indicator.y -= Math.sin(elapsed/10)*0.4;
  });
  dialog_indicator.alpha = 0;
  dialog_indicator.zIndex = 89;
    
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
  let notPlayed = songs.filter(x => !x.alreadyPlayed);
  if (notPlayed.length === 0) {
    for (let i=0; i<songs.length; i++) {
      songs[i].alreadyPlayed = false;
    }
    music_song = randomFromArr(songs);
  }
  else {
    music_song = randomFromArr(notPlayed);
  }
  music_song.alreadyPlayed = true;
  music_song.songInfoScreen();
  music = PIXI.sound.Sound.from(music_song.path);
  music.loop = true;
  music.play();
  if (sound_is_on) {
    music.volume = music_normal_volume;
  }
  else {
    music.volume = 0;
  }
}

function Song(path, name) {
  this.path = path;
  this.name = name;
  this.alreadyPlayed = false;
}
function initSongs() {
  for (let i=0; i<music_paths.length; i++) {
    songs.push(new Song("assets/music/" + music_paths[i], music_paths[i].split(".")[0]));
  }
}
Song.prototype.songInfoScreen = function() {
  let style = new PIXI.TextStyle({
    fontFamily: 'Georgia, serif',
    fontSize: 28,
    fontStyle: 'italic',
//    fontWeight: 'bold',
//    fill: ['#ffffff', '#9fc4ff'], // gradient
    fill: '#e4effd', // gradient
    stroke: '#4e4e4e',
    letterSpacing: 1,
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 0,
    dropShadowAngle: Math.PI * 0.5,
    dropShadowDistance: 1,
  });

  let musictext = new PIXI.Text("♪ " + this.name, style);
  musictext.anchor.set(1,0);
  musictext.x = app.screen.width-120;
  musictext.y = app.screen.height;
  musictext.zIndex = 100;
  musictext.alpha = 0;
  app.stage.addChild(musictext);
  updateZIndex();
  
  doUntil((count)=> {
    if (count < 42) {
      if (musictext.alpha < 0.84) {musictext.alpha += 0.03;}
      musictext.y -= 34/((count+1)*1.5);
    }
    if (count > 200) {
      musictext.alpha -= 0.05;
    }
  }, 400, () => {
    musictext.destroy();
  });
};

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
  ticker.add(() => {
    rect.alpha += 0.028;
    if (rect.alpha >= 0.99) {
      ticker.destroy();
      background.texture = PIXI.Texture.fromImage(randomBkg());
      let actives = activeTalkers();
      for (let i=0; i<actives.length; i++) {
        actives[i].leave();
      }
      elapsed = 0;
      music.stop();
      playRandomTrack();
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
    for (let i=0; i<=bkg_rare_number; i++) {
      bkg_rare_paths.push("assets/backgrounds/rare/bkg" + getIntStr(i,3) + ".jpg");
    }
    shuffle(bkg_rare_paths);
  }
}
function randomBkg() {
  if (Math.random() < 0.52 || elapsed < 10) {
    return "assets/backgrounds/bkg" + randomIntStr(0,8,3) + ".jpg";
  }
  else {
    genBkgPaths();
    return bkg_rare_paths.pop();
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
  if (duration === 0) {
    if (callback) {callback();}
  }
  let count = 0;
  let t = new PIXI.ticker.Ticker();
  t.add((deltaTime) => {
    count++;
    if (!duration || duration === -1 || count < duration) {
      if (func) {func(count);}
    }
    else {
      t.destroy();
      if (callback) {callback();}
    }
  });
  t.start();
  return t;
}

function Talker(name, fav_boards, sprite_path, custom_words, copulas, likes, dislikes) {
  this.name = name;
  this.fav_boards = fav_boards;
  this.custom_words = custom_words;
  this.copulas = copulas;
  this.likes = likes;
  this.dislikes = dislikes;
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
Talker.prototype.genMsg = function() {
  let filtered = DATACHAN.filterByBoard(randomFromArr(this.fav_boards));
  let result = "";
  for (let i=0; i < randomInt(2, 4); i++) {
    let p = randomFromArr(filtered).text;
    p = p.split("\n").join(" ");
    p = p.split(" ");
    let grabN = randomInt(1, 4);
    if (grabN > p.length) {
      grabN = p.length;
    }
    let grab_start = randomInt(0, p.length - grabN);
    for (let j=0; j<grabN; j++) {
      result += p[grab_start+j] + " ";
    }
    if (Math.random() < 0.4) {
      let selected_talkers = activeTalkers().filter(x => x.name != this.name);
      if (selected_talkers.length > 0) {
        let selected_talker = randomFromArr(selected_talkers);
        
        result += selected_talker.name + " ";
        // queue EMOTES
        if (isInArr(this.name, selected_talker.likes) && isInArr(selected_talker.name, this.likes)) {
          for (let i=0; i<5; i++) {
            new Emote(selected_talker, 1, true);
            new Emote(this, 1, true);
          }
        }
        else {
          new Emote(selected_talker);
        }
        // -- queue EMOTES
      }
    }
    if (Math.random() < 0.6 && this.custom_words && this.custom_words.length > 0) {
      result += randomFromArr(this.custom_words) + " ";
    }
    if (Math.random() < 0.2) {
      result += "\n";
    }
  }
  result = result.trim();
  result = result.replace(/\,\s?$/gi, "");
  result = result.replace(/\and$/gi, "");
  if (this.copulas && this.copulas.length > 0) {
    result += " " + randomFromArr(this.copulas);
  }
  if (Math.random() < 0.25) {
    result = result.toUpperCase();
  }
  return result;
};
Talker.prototype.talk = function() {
  this.randomFace();
  shutEveryone();
  this.talking = true;
//  new Message(this, DATACHAN.selectRandom(randomFromArr(this.fav_boards)));
  new Message(this, this.genMsg());
};
Talker.prototype.enter = function() {
  if (!this.randomPos()) {return;}
  this.active = true;
  this.spr.alpha = 0.1;
  this.spr.x -= this.stage_spot.facing*30;
  this.spr.zIndex = this.stage_spot.zIndex;
  
  doUntil(()=>{
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
  doUntil(() => {
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
  return freespots.length > 0;
};
Talker.prototype.randomFace = function() {
  this.spr.gotoAndStop(randomInt(0, this.spr.totalFrames));
};
function initTalkers() {
  // [sidenote] available boards: a g c jp v vr tv k o an sci his i toy p ck ic lit mu fa gd biz fit s4s
  talkers.push(new Talker(
    "Alfons", ["vr", "jp", "k", "sci", "s4s"], "assets/sprites/characters/alfons.json",
    [], [], ["Leila"], []
  ));
  talkers.push(new Talker("Alicia", ["c", "ck", "s4s"], "assets/sprites/characters/alicia.json",
    ["NE WERUKIN", "ね。。ウェルキン", "SOKKOO", "ATTATTEE", "行動かいします"], [], ["Welkin", "Isara"], []
  ));
  talkers.push(new Talker("Amy", [""], "assets/sprites/characters/amy.json",
    [], [], [], []
  ));
  talkers.push(new Talker("Annika", ["fit"], "assets/sprites/characters/annika.json",
    [], [], [], []
  ));
  talkers.push(new Talker("Clarissa", ["fit", "mu"], "assets/sprites/characters/clarissa.json",
    [], [], [], []
  ));
  talkers.push(new Talker("Cossette", ["gd", "ic", "i"], "assets/sprites/characters/cossette.json",
    [], [], [], []
  ));
  talkers.push(new Talker("Edy", ["jp"], "assets/sprites/characters/edy.json",
    ["やりましたわ", "はっけんしたわ"], ["wa", "わ"], ["Alicia"], []
  ));
  talkers.push(new Talker("Gloria", [""], "assets/sprites/characters/gloria.json",
    [], [], [], []
  ));
  talkers.push(new Talker("Gusurg", ["jp", "a", "toy"], "assets/sprites/characters/gusurg.json",
    [], [], ["Kurt"], []
  ));
  talkers.push(new Talker("Imca", ["k"], "assets/sprites/characters/imca.json",
    ["はっけん", "ない。"], [], ["Riela"], []
  ));
  talkers.push(new Talker("Isara", ["o", "sci"], "assets/sprites/characters/isara.json",
    [], [], ["Welkin"], []
  ));
  talkers.push(new Talker("Kurt", ["biz", "ck"], "assets/sprites/characters/kurt.json",
    [], [], ["Riela", "Gusurg"], []
  ));
  talkers.push(new Talker("Leila", ["fit", "k", "fa"], "assets/sprites/characters/leila.json",
    [], [], [], ["Alfons"]
  ));
  talkers.push(new Talker("Riela", ["", "s4s"], "assets/sprites/characters/riela.json",
    ["そこね", "クルト、わたしも！"], [], ["Kurt", "Imca"], []
  ));
  talkers.push(new Talker("Rosie", ["mu"], "assets/sprites/characters/rosie.json",
    [], [], ["Isara"], ["Isara"]
  ));
  talkers.push(new Talker("Selvaria", ["k"], "assets/sprites/characters/selvaria.json",
    [], [], [], ["Welkin"]
  ));
  talkers.push(new Talker("Susie", ["c", "a"], "assets/sprites/characters/susie.json",
    [], [], [], []
  ));
  talkers.push(new Talker("Valerie", ["his", "sci"], "assets/sprites/characters/valerie.json",
    [], [], [], []
  ));
  talkers.push(new Talker("Varrot", ["fit"], "assets/sprites/characters/varrot.json",
    ["あら！", "では"], [], ["Welkin"], []
  ));
  talkers.push(new Talker("Welkin", ["an", "his"], "assets/sprites/characters/welkin.json",
    ["よし行くそう！", "すげきする！", "はっけんした"], [], ["Alicia", "Isara"], ["Selvaria"]
  ));
}
function activeTalkers() {
  return talkers.filter(t => t.active);
}
function inactiveTalkers() {
  return talkers.filter(t => !t.active);
}
function enterTalkers() {
  for (let i=0; i<randomInt(1,4); i++) {
//    randomFromArr(talkers.filter(x => x.name == "Alicia" || x.name == "Welkin")).enter();
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
  this.spr.zIndex = 80;
  app.stage.addChild(this.spr);
  
  
  var style = new PIXI.TextStyle({
      fontFamily: 'Arial, sans-serif',
      fontSize: 22,
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
  this.textSpr.position.set(this.x+30,this.y+20);
  
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
      Emote.removeAll();
      next();
    }
    this.state += 1;
  };
  
  this.textSpr.text = "";
  
  this.textSpr.zIndex = 81;
  app.stage.addChild(this.textSpr);
  updateZIndex();
  
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
  // play queued emotes
  Emote.playAll();
  // --
  dialog_indicator.alpha = 1;
  dialog_indicator.position.set(spr.x+spr.width-30, spr.y+spr.height-2);
}
function hideDialogIndicator() {
  dialog_indicator.alpha = 0;
  dialog_indicator.x = -200;
}

function Emote(owner, number, strong) {
  this.randomrot = randomInt(0,30);
  this.spr = animatedSpriteFrom("assets/sprites/misc/emotes.json");
  this.spr.anchor.set(0.5, 0.5);
  this.spr.scale.set(1.3);
  if (number !== undefined) {
    this.spr.gotoAndStop(number);
  }
  else {
    this.spr.gotoAndStop(randomInt(0, this.spr.totalFrames));
  }
  this.owner = owner;
  let x_range = 80;
  this.spr.x = owner.spr.x + randomInt(-x_range, x_range);
  this.spr.y = owner.spr.y - 30;
  if (strong) {
    this.spr.blendMode = PIXI.BLEND_MODES.ADD;
  }
  Emote.queue.push(this);
  
  this.play = (delay) => {
    delay = delay || 0;
    doUntil(null, delay, () => {
      this.spr.zIndex = 79;
      app.stage.addChild(this.spr);
      updateZIndex();

      this.vx = (Math.random()-Math.random())*0.3;
      this.vx += 0.4*Math.sign(this.vx);
      this.spr.x = owner.spr.x + (randomInt(40,60))*Math.sign(this.vx);
      this.vy = -0.6 + Math.random()*-0.4;
      this.spr.alpha = 0.85;
      this.ticker = doUntil((count) => {
        if (strong) {
          this.spr.scale.set(Math.abs(0.3+Math.sin(count/5)*1.2));
        }
        this.spr.y -= Math.sin((this.randomrot+elapsed)/20)*0.12;
        if (this.vy < 0.01) {this.vy += 0.02;}
        else {this.vy = 0;}
        if (Math.abs(this.vx) > 0.01) {this.vx -= 0.007 * Math.sign(this.vx);}
        this.spr.x += this.vx;
        this.spr.y += this.vy;
        this.spr.rotation = Math.sin((this.randomrot+elapsed)/35)*0.1;
//        if (count > 350) {
//          this.spr.alpha -= 0.02;
//        }
      }, -1);
    });
  };
  this.remove = () => {
    doUntil((count) => {
      this.vy += 0.04;
      this.spr.x += this.vx;
      this.spr.y += this.vy;
//      this.spr.rotation += this.vx/50;
      if (count > 2) {
        this.spr.alpha -= 0.05;
      }
    }, 120, () => {
      if (this.ticker) {
        this.ticker.destroy();
      }
      app.stage.removeChild(this.spr);
//        this.spr.destroy();
    });
  };
}
Emote.queue = [];
Emote.wait_per_play = 15;
Emote.playAll = function() {
  let c = 0;
  for (let i=0; i<Emote.queue.length; i++) {
    Emote.queue[i].play(i*Emote.wait_per_play);
  }
//  while (Emote.queue.length > 0) {
//    Emote.queue.pop().play(c*Emote.wait_per_play);
//    c += 1;
//  }
};
Emote.removeAll = function() {
  while (Emote.queue.length > 0) {
    Emote.queue.pop().remove();
  }
};
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
  this.press = () => {
    if (this.pressed) {
      this.spr.gotoAndStop(0);
      this.pressed = false;
    }
    else {
      this.spr.gotoAndStop(1);
      this.pressed = true;
    }
    action();
  };
  this.spr.on('pointerdown', this.press);
}

app.ticker.add(playing);