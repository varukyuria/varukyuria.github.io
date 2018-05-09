// TODO
// add sounds - persona dancin , chronicles 3, chronicles 1
// moar musics
// labrys theme when labrys
// sousei no aquarion
// resize screen / rotate phone *
// figure out stage_spot error
// transparencily fadeout sprites bottoms
// irene koller special scene, "on the gallian front"

let app = new PIXI.Application({width: 720, height: 540, backgroundColor: 0xf5f5f5});

let background;
let objectsToUpdate = [];
let elapsed = 0;
let dialog_indicator;
let sound_button;
let keyboard = {};
let music;
let music_queued;
let music_song;
let music_normal_volume = 0.5;
let sound_is_on = true;
let next_ticker;
let emotes_queue = [];
let music_paths = ['A Moment of Relief.mp3', 'Chronicles of the Gallian War.mp3', 'Daily Life of the 7th Platoon.mp3', 'Defensive Fight.mp3', 'Everyday Training.mp3', 'Fierce Combat.mp3', 'Final Decisive Battle.mp3', 'Gallant Fight.mp3', 'Hard Fight.mp3', 'No Matter The Distance (Game Opening).mp3', 'No Matter The Distance.mp3', 'Offensive and Defensive Battle.mp3', 'Quiet Chat.mp3', "Randgriz Archduke's Family.mp3", 'Randgriz City.mp3', 'Resistance.mp3', 'Succeeded Wish (Piano).mp3', 'Succeeded Wish (ROJI).mp3', 'Those Who Succeeded.mp3', 'Title Main Theme.mp3', 'Urgent Instructions.mp3', 'Varukyuria Intro.mp3', "Zaka's Theme.mp3", "K-ON! - Pinch Daisuki.mp3"];
let songs = [];
let stage_spots = [
  {x: 140, y: 126, facing: 1, guest: null, zIndex: 0},
  {x: 140, y: 363, facing: 1,  guest: null, zIndex: 1},
  {x: app.screen.width-140, y: 126, facing: -1,  guest: null, zIndex: 2},
  {x: app.screen.width-190, y: app.screen.height-117, facing: -1,  guest: null, zIndex: 3}
];
let gameplay = {};
let currentMsg;
let bkg_rare_paths = [];
let bkg_rare_number = 87;
let halt_next = false;
let emojis = [
  {
    "emoji": "😠",
    "type": 1,
    "name": "angry"
  },
  {
    "emoji": "😀",
    "type": 1,
    "name": "smiling"
  },
  {
    "emoji": "😨",
    "type": 1,
    "name": "shocked trooper"
  },
  {
    "emoji": "😕",
    "type": 1,
    "name": "preoccupied"
  },
  {
    "emoji": "😐",
    "type": 1,
    "name": "neutral"
  },
  {
    "emoji": "😋",
    "type": 1,
    "name": "tongue"
  },
  {
    "emoji": "🙄",
    "type": 1,
    "name": "eyeroll"
  },
  {
    "emoji": "🙂",
    "type": 1,
    "name": "smile3"
  },
  {
    "emoji": "🤔",
    "type": 2,
    "name": "thonk"
  },
  {
    "emoji": "😂",
    "type": 2,
    "name": "joy"
  },
  {
    "emoji": "😊",
    "type": 2,
    "name": "smiling2"
  },
  {
    "emoji": "😥",
    "type": 2,
    "name": "sad sad tear"
  },
  {
    "emoji": "😎",
    "type": 2,
    "name": "glasses"
  },
  {
    "emoji": "😛",
    "type": 2,
    "name": "tongue2"
  },
  {
    "emoji": "😒",
    "type": 2,
    "name": "unamused"
  },
  {
    "emoji": "😘",
    "type": 2,
    "name": "kiss"
  },
  {
    "emoji": "😖",
    "type": 2,
    "name": "ultra worried"
  },
  {
    "emoji": "😩",
    "type": 2,
    "name": "worry worry"
  },
  {
    "emoji": "😍",
    "type": 2,
    "name": "inlove"
  },
  {
    "emoji": "😳",
    "type": 2,
    "name": "blushing"
  },
  {
    "emoji": "😡",
    "type": 2,
    "name": "angery"
  },
  {
    "emoji": "😉",
    "type": 2,
    "name": "wink"
  },
  {
    "emoji": "😏",
    "type": 2,
    "name": "smug"
  },
  {
    "emoji": ":(",
    "type": 3,
    "name": ""
  },
  {
    "emoji": "xD",
    "type": 3,
    "name": ""
  },
  {
    "emoji": ":)",
    "type": 3,
    "name": ""
  },
  {
    "emoji": ":P",
    "type": 3,
    "name": ""
  },
  {
    "emoji": ":$",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":-(",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":<",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":>",
    "type": 4,
    "name": ""
  },
  {
    "emoji": "c:",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":-)",
    "type": 4,
    "name": ""
  },
  {
    "emoji": "\\o/",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":c",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":3",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":-3",
    "type": 4,
    "name": ""
  },
  {
    "emoji": "n_n",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":x",
    "type": 4,
    "name": ""
  },
  {
    "emoji": "v_v",
    "type": 4,
    "name": ""
  },
  {
    "emoji": "^_^",
    "type": 4,
    "name": ""
  },
  {
    "emoji": ":-P",
    "type": 4,
    "name": ""
  },
  {
    "emoji": "o3o",
    "type": 5,
    "name": ""
  },
  {
    "emoji": ";_;",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(☆ω☆)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(´• ω •`)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "╰(▔∀▔)╯",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(✯◡✯)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(⌒‿⌒)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(´｡• ᵕ •｡`)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "( ‾́ ◡ ‾́ )",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "౦０o ｡ (‾́。‾́ )y~~",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(◕‿◕)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(￣▽￣)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "o( ❛ᴗ❛ )o",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "｀;:゛;｀;･(°ε° )",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(─‿‿─)♡ ♡( ◡‿◡ )",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "( ˘⌣˘)♡(˘⌣˘ )",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(❤ω❤)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "☆⌒ヽ(*'､^*)chu",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "( ◡‿◡ *)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(⁄ ⁄>⁄ ▽ ⁄<⁄ ⁄)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(；￣Д￣)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(￣︿￣)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(ᗒᗣᗕ)՞",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(눈_눈)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(・`ω´・)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "↑_(ΦwΦ)Ψ",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "Σ(▼□▼メ)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(T_T)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "o(〒﹏〒)o",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "( ; ω ; )",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(｡T ω T｡)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(｡•́︿•̀｡)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(｡╯︵╰｡)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(☆_@)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "[ ± _ ± ]",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "┐(￣∀￣)┌",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "┐(‘～` )┌",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(・_・;)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(¬‿¬ )",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "w(°ｏ°)w",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(⊃｡•́‿•̀｡)⊃",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(つ . •́ _ʖ •̀ .)つ",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(つ✧ω✧)つ",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(づ◡﹏◡)づ",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "┬┴┬┴┤(･_├┬┴┬┴",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "ε=ε=ε=ε=┌(;￣▽￣)┘",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "C= C= C=┌(;・ω・)┘",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(^◔ᴥ◔^)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(^˵◕ω◕˵^)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "ʕ •ᴥ• ʔ",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "ʕ •̀ ω •́ ʔ",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "ʕ ᵔᴥᵔ ʔ",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "／(=･ x ･=)＼",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(◉Θ◉)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "/╲/\\╭༼ ººل͟ºº ༽╮/\\╱\\",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(⊃｡•́‿•̀｡)⊃━✿✿✿",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "ヾ(⌐■_■)ノ♪",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(｢• ω •)｢",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "( ͡ಠ - ಠ)",
    "type": 5,
    "name": ""
  },
  {
    "emoji": "(´･ᴗ･ ` )",
    "type": 5,
    "name": ""
  }
];

document.body.appendChild(app.view);


// PIXI LOADER
let loader = new PIXI.loaders.Loader();
(() => {
loader
// backgrounds
.add("assets/backgrounds/bkg000.jpg")
.add("assets/backgrounds/bkg001.jpg")
.add("assets/backgrounds/bkg002.jpg")
.add("assets/backgrounds/bkg003.jpg")
.add("assets/backgrounds/bkg004.jpg")
.add("assets/backgrounds/bkg005.jpg")
.add("assets/backgrounds/bkg006.jpg")
.add("assets/backgrounds/bkg007.jpg")
.add("assets/backgrounds/bkg008.jpg")
// misc
.add("assets/sprites/misc/sound_button.json")
.add("assets/sprites/misc/emotes.json")
.add("assets/sprites/misc/particle1.json")
.add("assets/sprites/misc/catdance.json")
  .add("assets/sprites/misc/heart_particle.png")
// people
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
.add("assets/sprites/characters/jann.json")
.add("assets/sprites/characters/maximilian.json")
.add("assets/sprites/characters/marina.json")
.add("assets/sprites/characters/largo.json")
// PERSONA
.add("assets/sprites/characters/persona/chie.json")
.add("assets/sprites/characters/persona/rise.json")
.add("assets/sprites/characters/persona/adachi.json")
.add("assets/sprites/characters/persona/yosuke.json")
.add("assets/sprites/characters/persona/yukiko.json")
.add("assets/sprites/characters/persona/yuna.json")
.add("assets/sprites/characters/persona/labrys.json")
.add("assets/sprites/characters/persona/teddie.json")
.load(setup);
})();

loader.text = "";
loader.text_spr = null;
LoadingSphere.number = 11;
LoadingSphere.spheres = [];
showLoader();
function showLoader() {
  let style = new PIXI.TextStyle({
    fontFamily: 'Arial, sans-serif',
    fontSize: 55,
//    fontStyle: 'italic',
//    fontWeight: 'bold',
//    fill: ['#7c7c7c', '#9fc4ff'], // gradient
    fill: '#ffffff', // gradient
    stroke: '#626262',
    letterSpacing: 1,
    strokeThickness: 5,
//    dropShadow: true,
    dropShadowColor: '#767676',
    dropShadowBlur: 0,
    dropShadowAngle: Math.PI * 0.5,
    dropShadowDistance: 1,
  });

  loader.text_spr = new PIXI.Text(loader.text_spr, style);
  loader.text_spr.anchor.set(0.5,0.5);
  loader.text_spr.x = app.screen.width/2;
  loader.text_spr.y = app.screen.height/2;
  loader.text_spr.zIndex = 200;
  loader.text_spr.alpha = 1;
//  addChildZ(loader.text_spr);
  
  for (let i=0; i<LoadingSphere.number; i++) {
    LoadingSphere.spheres.push(new LoadingSphere(app.screen.width - 15 - 25 - i*((app.screen.width-15)/LoadingSphere.number), app.screen.height/2+50, 90/(i+1)));
  }
}
loader.on("progress", (loader, res) => {
  loader.text_spr.text = Math.round(loader.progress*100)/100 + "%";
  for (let i=0; i<LoadingSphere.spheres.length; i++) {
    LoadingSphere.spheres[i].update(loader.progress);
  }
});
function LoadingSphere(x,y,visibleAt) {
  this.spr = new PIXI.Sprite.fromImage("assets/sprites/misc/loading_sphere.png");
  this.spr.position.set(x,y);
  this.spr.anchor.set(0.5, 0.5);
  this.visibleAt = visibleAt;
  this.spr.visible = false;
  addChildZ(this.spr);
  this.spr.zIndex = 120;
  this.update = (progress) => {
    if (progress > this.visibleAt) {
      this.spr.visible = true;
    }
  };
}
LoadingSphere.removeAll = function() {
  for (let i=0; i<LoadingSphere.spheres.length; i++) {
    LoadingSphere.spheres[i].spr.destroy();
  }
};


function ikuso () {
  if (currentMsg) {
    currentMsg.clicked();
  }
}
function setup() {
  
  loader.text_spr.destroy();
  LoadingSphere.removeAll();
  initSongs();
  playRandomTrack();
  
  createSoundButton();
  
  genBkgPaths();
  background = new PIXI.Sprite.fromImage(randomBkg());
  background.alpha = 0.75;
  background.width = app.screen.width;
  background.height = app.screen.height;
  background.interactive = true;
  background.on("pointerdown", ikuso);
  addChildZ(background);
  
  dialog_indicator = new PIXI.Sprite.fromImage("assets/sprites/misc/dialog_indicator.png");
  addChildZ(dialog_indicator);
  dialog_indicator.scale.set(2.2);
  dialog_indicator.anchor.set(0.5, 0.5);
  addChildZ(dialog_indicator);
  addUpdate(dialog_indicator, () => {
    dialog_indicator.y -= Math.sin(elapsed/10)*0.4;
  });
  dialog_indicator.alpha = 0;
  dialog_indicator.zIndex = 89;
  
  initTalkers();
  
  next_ticker = doUntil(null, 50, next);

}
let can_change_bkg = true;
function next() {
  if (halt_next) {return;}
  let call_next = true;
  // enter new character
  if ((activeTalkers().length < 2 || Math.random() < 0.2) && activeTalkers().length < 4) {
//    let p = inactiveTalkers().filter(x=>(x.name == "Maximilian" || x.name == "Alicia"));
//    if (p.length>0) {randomFromArr(p).enter();}
    randomFromArr(inactiveTalkers()).enter();
    can_change_bkg = false;
  }
  // someone leave NOW
  else if (activeTalkers().filter(x=>x.talked_once).length > 0 && Math.random() < 0.25) {
    randomFromArr(activeTalkers().filter(x=>x.talked_once)).leave();
  }
  // go to new scene
  else if (elapsed > 200 && can_change_bkg && Math.random() < 0.25) {
    changeBkg();
    call_next = false;
    skip_remaining = true;
  }
  else if (activeTalkers().length > 1) {
    randomFromArr(activeTalkers()).talk();
    call_next = false;
    can_change_bkg = true;
  }
  // if no one talked or changing background, wait a bit and repeat this method
  if (call_next) {
    next_ticker = doUntil(null, 30, next);
  }
  call_next = true;
}
function resetNext() {
  
}

function changeBkg() {
  halt_next = true;
  // all gradually black
  let tickers = [];
  let rect = new PIXI.Graphics();
  rect.beginFill(0x000000, 1);
  rect.alpha = 0;
  rect.drawRect(0, 0, app.screen.width, app.screen.height);
  rect.endFill();
  rect.zIndex = 99;
  addChildZ(rect);
  
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
          doUntil(null, 20, ()=> {
            halt_next = false;
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

function Talker(name, fav_boards, sprite_path, custom_words, copulas, likes, dislikes, emojitypes, emojifreq) {
  this.name = name;
  this.fav_boards = fav_boards;
  this.custom_words = custom_words;
  this.copulas = copulas;
  this.likes = likes;
  this.dislikes = dislikes;
  this.emojitypes = emojitypes || [1,2];
  this.emojifreq = emojifreq || 1;
  this.talked_once = false;
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
Talker.talkers = [];
Talker.prototype.useEmoji = function(chansu) {
  if (this.emojitypes.length > 0 && Math.random() < chansu*this.emojifreq) {
    let selected_emojis = emojis.filter(x => isInArr(x.type, this.emojitypes));
    if (selected_emojis.length > 0) {
      return randomFromArr(selected_emojis).emoji + " ";
    }
  }
  return "";
};
Talker.prototype.genMsg = function() {
  let filtered = DATACHAN.filterByBoard(randomFromArr(this.fav_boards));
  let result = "";
  ParticleSystem.generateQueue();
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
    
    // mention someone
    if (Math.random() < 0.4) {
      result += this.useEmoji(0.1);  // emoji before mentioning someone
      
      let selected_talkers = activeTalkers().filter(x => x.name != this.name);
      if (selected_talkers.length > 0) {
        let randomreact = true;
        let selected_talker = randomFromArr(selected_talkers);
        
        result += selected_talker.name + " ";
        // queue EMOTES and do particles
        for (let i=0; i<5; i++) {
          // love
          if (isInArr(this.name, selected_talker.likes)) {
            // selected_talker likes talker
            new Emote(selected_talker, 1, true);
            randomreact = false;
            ParticleSystem.addToQueue(selected_talker, this, "love");
          }
          if (isInArr(selected_talker.name, this.likes)) {
            // talker likes selected talker
            new Emote(this, 1, true);
            ParticleSystem.addToQueue(this, selected_talker, "love");
          }
          // hate
          if (isInArr(this.name, selected_talker.dislikes)) {
            // selected_talker dislikes talker
            new Emote(selected_talker, 14, true, PIXI.BLEND_MODES.MULTIPLY);
            randomreact = false;
            ParticleSystem.addToQueue(selected_talker, this, "hate");
          }
          if (isInArr(selected_talker.name, this.dislikes)) {
            // talker dislikes selected talker
            new Emote(this, 14, true, PIXI.BLEND_MODES.MULTIPLY);
            ParticleSystem.addToQueue(this, selected_talker, "hate");
          }
        }
        if (randomreact) {
          new Emote(selected_talker);
        }
        // <--- queue EMOTES
      }
    result += this.useEmoji(0.15);  // emoji after mentioning someone
    }
    //  <---- mention someone
  
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
//  emoji at the end of msg
  result += " " + this.useEmoji(0.4);
  // uppercase
  if (Math.random() < 0.25) {
    result = result.toUpperCase();
  }
  return result;
};
Talker.prototype.talk = function() {
  this.talked_once = true;
  this.randomFace();
  shutEveryone();
  this.talking = true;
  new Message(this, this.genMsg());
};
Talker.prototype.enter = function() {
  if (!this.randomPos()) {return;}
  this.randomFace();
  this.active = true;
  this.talked_once = false;
  this.spr.alpha = 0.1;
  this.spr.x -= this.stage_spot.facing*30;
  this.spr.zIndex = this.stage_spot.zIndex;
  
  doUntil(()=>{
    this.spr.alpha += 0.045;
    this.spr.x += 3 * this.stage_spot.facing;
  }, 13, () => this.spr.alpha = this.alpha_min);
  addChildZ(this.spr);
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
//    if (this.stage_spot) {
//      this.stage_spot.guest = null;
//    }
    this.stage_spot = randomFromArr(freespots);
    this.stage_spot.guest = this;
    this.spr.x = this.stage_spot.x + randomInt(-40, 40);
    this.spr.y = this.stage_spot.y + randomInt(-40, 40);
    this.spr.scale.x = this.stage_spot.facing;
  }
  return freespots.length > 0;
};
Talker.prototype.randomFace = function() {
  this.spr.gotoAndStop(randomInt(0, this.spr.totalFrames));
};
Talker.getByName = function(namae) {
  let s = Talker.talkers.filter(x => x.name == namae);
  if (s.length > 0) {
    return s[0];
  }
};
function initTalkers() {
  // [sidenote] available boards: a g c jp v vr tv k o an sci his i toy p ck ic lit mu fa gd biz fit s4s
  Talker.talkers.push(new Talker(
    "Alfons", ["vr", "jp", "sci", "s4s"], "assets/sprites/characters/alfons.json",
    [], [], ["Leila", "Annika"], [], [1, 2, 3], 1.4
  ));
  Talker.talkers.push(new Talker("Alicia", ["c", "ck", "s4s"], "assets/sprites/characters/alicia.json",
    ["ん！", "こうどうかいしします", "NE WERUKIN", "ね。。ウェルキン", "そこ！！！", "あたって！！！", "SOKOO", "ATATTEE", "行動かいします", "わたしのばんね"], [], ["Welkin", "Isara", "Selvaria"], ["Clarissa", "Gloria", "Maximilian"], [3, 4], 1.2
  ));
  Talker.talkers.push(new Talker("Amy", [""], "assets/sprites/characters/amy.json",
    [], [], ["Leila", "Annika"], [], [3, 4], 1.5
  ));
  Talker.talkers.push(new Talker("Annika", ["fit"], "assets/sprites/characters/annika.json",
    [], [], ["Leila", "Alfons", "Amy", "Imca"], [], [1], 0.8
  ));
  Talker.talkers.push(new Talker("Clarissa", ["fit", "mu"], "assets/sprites/characters/clarissa.json",
    [], [], ["Valerie"], [], [3, 4], 1.2
  ));
  Talker.talkers.push(new Talker("Cossette", ["gd", "ic", "i"], "assets/sprites/characters/cossette.json",
    [], [], [], [], [2, 3, 5], 1.2
  ));
  Talker.talkers.push(new Talker("Edy", ["jp"], "assets/sprites/characters/edy.json",
    ["やりましたわ", "はっけんしたわ"], ["wa", "わ"], ["Alicia"], ["Rosie"], [4, 5], 1.6
  ));
  Talker.talkers.push(new Talker("Gloria", [""], "assets/sprites/characters/gloria.json",
    [], [], [], [], [5], 0.6
  ));
  Talker.talkers.push(new Talker("Gusurg", ["jp", "a", "toy"], "assets/sprites/characters/gusurg.json",
    ["xD", "", ""], [], ["Kurt"], [], [3], 0.8
  ));
  Talker.talkers.push(new Talker("Imca", ["k"], "assets/sprites/characters/imca.json",
    ["てき", "ない。"], [], ["Riela", "Kurt", "Annika", "Labrys"], [], [], 0
  ));
  Talker.talkers.push(new Talker("Isara", ["o", "sci"], "assets/sprites/characters/isara.json",
    [], [], ["Welkin", "Alicia", "Yuna"], ["Yosuke"], [2, 4], 1.4
  ));
  Talker.talkers.push(new Talker("Kurt", ["biz", "ck"], "assets/sprites/characters/kurt.json",
    ["リエラ。。いま助ける！", "しゅつげきする", "こうどうかいしする"], [], ["Riela", "Gusurg", "Imca"], []
  ));
  Talker.talkers.push(new Talker("Leila", ["fit", "k", "fa"], "assets/sprites/characters/leila.json",
    [], [], ["Alfons", "Amy", "Annika"], [], [], 0
  ));
  Talker.talkers.push(new Talker("Riela", ["c", "s4s"], "assets/sprites/characters/riela.json",
    ["はっけんしたわ", "そこね", "クルト、わたしも！", "こうどうかいし", "わたしのつがいね", "そこね", "あたって！", "やった！"], [], ["Kurt", "Imca", "Valerie", "Alicia"], [], [4,5], 2
  ));
  Talker.talkers.push(new Talker("Rosie", ["mu"], "assets/sprites/characters/rosie.json",
    [], [], ["Isara", "Largo"], ["Isara"], [], 0
  ));
  Talker.talkers.push(new Talker("Selvaria", ["k"], "assets/sprites/characters/selvaria.json",
    [], [], ["Maximilian", "Alicia"], ["Welkin"], [], 0
  ));
  Talker.talkers.push(new Talker("Susie", ["c", "a"], "assets/sprites/characters/susie.json",
    [], [], [], [], [2,3], 1
  ));
  Talker.talkers.push(new Talker("Valerie", ["his", "sci"], "assets/sprites/characters/valerie.json",
    ["行くわよ！"], [], ["Riela", "Clarissa"], [], [3], 0.8
  ));
  Talker.talkers.push(new Talker("Varrot", ["fit"], "assets/sprites/characters/varrot.json",
    ["あら！", "では"], [], ["Welkin", "Largo"], [], [3], 0.9
  ));
  Talker.talkers.push(new Talker("Welkin", ["an", "his"], "assets/sprites/characters/welkin.json",
    ["よし行くそう！", "しゅつげきする！", "はっけんした"], [], ["Alicia", "Isara"], ["Selvaria", "Maximilian"], [3], 1.8
  ));
  Talker.talkers.push(new Talker("Jann", ["c", "u"], "assets/sprites/characters/jann.json",
    ["わたしはがんばっちゃん", "hey, soldier ♪"], [], ["Largo"], [], [1,2,3], 4
  ));
  Talker.talkers.push(new Talker("Maximilian", ["his", ""], "assets/sprites/characters/maximilian.json",
    ["セルベリア"], [], [], ["Welkin", "Alicia"], [], 0
  ));
  Talker.talkers.push(new Talker("Marina", ["c", "k"], "assets/sprites/characters/marina.json",
    [], [], [], [], [], 0
  ));
  Talker.talkers.push(new Talker("Largo", ["tv"], "assets/sprites/characters/largo.json",
    [], [], ["Rosie", "Varrot"], [], [1], 0.9
  ));
  // PESOA
  Talker.talkers.push(new Talker("Chie", ["u", "fit"], "assets/sprites/characters/persona/chie.json",
    [], [], ["Yukiko"], [], [2,4], 1
  ));
  Talker.talkers.push(new Talker("Rise", ["mu", "fa"], "assets/sprites/characters/persona/rise.json",
    [], [], [], [], [2,5], 2
  ));
  Talker.talkers.push(new Talker("Adachi", ["biz", "toy"], "assets/sprites/characters/persona/adachi.json",
    [], [], [], ["Yuna"], [1], 0.6
  ));
  Talker.talkers.push(new Talker("Yosuke", ["fa", "mu", "v"], "assets/sprites/characters/persona/yosuke.json",
    [], [], ["Yuna"], [], [3, 4], 1
  ));
  Talker.talkers.push(new Talker("Yukiko", ["p"], "assets/sprites/characters/persona/yukiko.json",
    [], [], ["Yuna"], [], [1], 0.7
  ));
  Talker.talkers.push(new Talker("Yuna", ["a", "c"], "assets/sprites/characters/persona/yuna.json",
    [], [], ["Yukiko", "Chie", "Riela", "Edy"], ["Adachi"], [5], 0.5
  ));
  Talker.talkers.push(new Talker("Labrys", ["g"], "assets/sprites/characters/persona/labrys.json",
    [], [], ["Yosuke", "Alfons", "Imca"], ["Edy"], [3,4], 1.5
  ));
  Talker.talkers.push(new Talker("Teddie", ["a"], "assets/sprites/characters/persona/teddie.json",
    [], [], [], [], [3,4], 6
  ));
}
function activeTalkers() {
  return Talker.talkers.filter(t => t.active);
}
function inactiveTalkers() {
  return Talker.talkers.filter(t => !t.active);
}
function shutEveryone() {
  for (let i=0; i<Talker.talkers.length; i++) {
    Talker.talkers[i].talking = false;
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
  addChildZ(this.spr);
  
  
  var style = new PIXI.TextStyle({
      fontFamily: 'Arial, sans-serif',
      fontSize: 26,
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
    if (this.x < 20) {
      this.x = 20;
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
      ParticleSystem.removeAll();
      next();
    }
    this.state += 1;
  };
  
  this.textSpr.text = "";
  
  this.textSpr.zIndex = 81;
  addChildZ(this.textSpr);
  
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
  // play queued emotes and particle systems
  Emote.playAll();
  ParticleSystem.procQueue();
  // --
  dialog_indicator.alpha = 1;
  dialog_indicator.position.set(spr.x+spr.width-30, spr.y+spr.height-2);
}
function hideDialogIndicator() {
  dialog_indicator.alpha = 0;
  dialog_indicator.x = -200;
}

function Emote(owner, number, strong, blendmode) {
  blendmode = blendmode || PIXI.BLEND_MODES.ADD;
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
    this.spr.blendMode = blendmode;
  }
  Emote.queue.push(this);
  
  this.play = (delay) => {
    delay = delay || 0;
    doUntil(null, delay, () => {
      this.spr.zIndex = 79;
      addChildZ(this.spr);

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
      }, -1);
    });
  };
  this.remove = () => {
    doUntil((count) => {
      this.vy += 0.04;
      this.spr.x += this.vx;
      this.spr.y += this.vy;
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
};
Emote.removeAll = function() {
  while (Emote.queue.length > 0) {
    Emote.queue.pop().remove();
  }
};

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
Song.prototype.songInfoScreen = function() {
  let style = new PIXI.TextStyle({
    fontFamily: 'Georgia, serif',
    fontSize: 28,
    fontStyle: 'italic',
    fill: '#e4effd',
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
  musictext.x = app.screen.width-130;
  musictext.y = app.screen.height+5;
  musictext.zIndex = 100;
  musictext.alpha = 0;
  if (musictext.width > musictext.x-20) {
    musictext.width = musictext.x-20;
  }
  addChildZ(musictext);
  
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
function initSongs() {
  for (let i=0; i<music_paths.length; i++) {
    songs.push(new Song("assets/music/" + music_paths[i], music_paths[i].split(".")[0]));
  }
}

function animatedSpriteFrom(path) {
  let t = loader.resources[path].textures;
  return new PIXI.extras.AnimatedSprite(Object.values(t).sort());
}
function addChildZ(spr) {
  // add child and update z index
  app.stage.addChild(spr);
  updateZIndex();
}
function updateZIndex() {
  app.stage.children.sort(function(a,b) {
    a.zIndex = a.zIndex || -1;
    b.zIndex = b.zIndex || -1;
    return a.zIndex - b.zIndex;
  });
}

function ParticleSystem(opts) {
  ParticleSystem.systems.push(this);
  this.opts = opts;
  this.x = opts.x;
  this.y = opts.y;
  this.x_to = opts.x_to;
  this.y_to = opts.y_to;
  this.particle_path = opts.particle_path;
  this.speed = opts.speed;
  this.rate = opts.rate;
  this.part_animspeed = opts.part_animspeed;
  this.part_minsize = opts.part_minsize;
  this.interval = opts.interval;
  this.container = new PIXI.Container();
  this.container.zIndex = 50;
  this.lifetime = opts.lifetime;
  addChildZ(this.container);
  this.ticker = doUntil((count) => {
    if (count % this.interval === 0) {
      for (let i=0; i<this.rate; i++) {
        let p = opts.pos_variation(count);
        this.addParticle(this.x+randomFloat(-p, p), this.y+randomFloat(-p, p));
      }
    }
  }, -1);
}
ParticleSystem.prototype.addParticle = function(x, y) {
  return new ParticleSystem.Particle(this, x, y);
};
ParticleSystem.Particle = function(owner, x, y) {
  this.x_to = owner.x_to + randomFloat(-owner.opts.part_destination_variation, owner.opts.part_destination_variation);
  this.y_to = owner.y_to + randomFloat(-owner.opts.part_destination_variation, owner.opts.part_destination_variation);
  let x_dif = this.x_to - x;
  let y_dif = this.y_to - y;
  this.angle = Math.tan(y_dif / x_dif);
  this.speed = owner.speed * randomFloat(1, 1.5);
  this.alpha_max = owner.opts.alpha_max;
  this.owner = owner;
  if (this.owner.opts.particle_animate) {    
    this.spr = animatedSpriteFrom(owner.particle_path);
    this.spr.gotoAndPlay(randomInt(0, this.spr.totalFrames));
  }
  else {
    this.spr = PIXI.Sprite.fromImage(owner.opts.particle_path);
  }
  this.spr.blendMode = owner.opts.blendMode;
  this.spr.animationSpeed = this.owner.part_animspeed;
  this.spr.position.set(x,y);
  this.spr.scale.set(randomFloat(this.owner.opts.part_minsize, this.owner.opts.part_maxsize));
  this.spr.anchor.set(0.5, 0.5);
  this.spr.alpha = 0;
  this.owner.container.addChild(this.spr);
  if (!owner.lifetime) {
    this.lifetime = Math.sqrt(x_dif*x_dif + y_dif*y_dif)/this.speed;
  }
  else {
    this.lifetime = owner.lifetime;
  }
  doUntil((count) => {
    this.spr.x += x_dif/this.lifetime;
    this.spr.y += y_dif/this.lifetime;
    let path_part1 = this.lifetime / 8;
    if (count < path_part1) {
      this.spr.alpha += this.alpha_max/path_part1;
    }
    let path_part2 = this.lifetime / 1.6;
    if (count > path_part2 || this.owner.isDead) {
      this.spr.alpha -= this.alpha_max/path_part2;
    }
    if (this.owner.opts.part_rotate) {
      this.spr.rotation = this.owner.opts.part_rotate(this, count);
    }
  }, this.lifetime, ()=>{
    this.owner.container.removeChild(this.spr);
    this.spr.destroy();
  });
};
ParticleSystem.systems = [];
ParticleSystem.prototype.remove = function () {
  this.ticker.stop();
//  this.ticker.destroy();
  this.isDead = true;
  doUntil(null, 80, () => {
    app.stage.removeChild(this.container);
  });
};
ParticleSystem.removeAll = function() {
  for (let i=0; i<ParticleSystem.systems.length; i++) {
    ParticleSystem.systems[i].remove();
  }
};
ParticleSystem.love = function(a, b) {
  return new ParticleSystem({
    x: a.spr.x,
    y: a.spr.y,
    x_to: b.spr.x,
    y_to: b.spr.y,
    speed: 7,
    rate: 1,
    interval: 6,
    alpha_max: 0.6,
    blendMode: PIXI.BLEND_MODES.ADD,
    part_animspeed: 0.1,
    part_minsize: 0.5,
    part_maxsize: 0.7,
    part_rotate: (p, c) => p.angle/10 + p.spr.rotation + Math.sin(c/10)/10,
    part_destination_variation: 80,
    lifetime: null,
    particle_animate: false,
    particle_path: "assets/sprites/misc/heart_particle.png",
    pos_variation: (c) => Math.sin(c/20)*90,
  });
};
ParticleSystem.hate = function(a, b) {
  return new ParticleSystem({
    x: a.spr.x,
    y: a.spr.y,
    x_to: b.spr.x,
    y_to: b.spr.y,
    speed: 3.5,
    rate: 1,
    interval: 10,
    alpha_max: 0.6,
    blendMode: PIXI.BLEND_MODES.NORMAL,
    part_animspeed: 0.1,
    part_minsize: 1.8,
    part_maxsize: 1.8,
    part_rotate: null,
    part_destination_variation: 40,
    lifetime: null,
    particle_animate: true,
    particle_path: "assets/sprites/misc/catdance.json",
    pos_variation: (c) => Math.sin(c/20)*80,
  });
};
ParticleSystem.procQueue = function() {
  let queue = ParticleSystem.queue;
  for (let q in queue) {
    for (let e in queue[q].emitters) {
      for (let i=0; i<queue[q].emitters[e].length; i++) {
        let a = Talker.getByName(e);
        let b = Talker.getByName(queue[q].emitters[e][i]);
        queue[q].func(a, b);
      }
    }
  }
};
ParticleSystem.queue = {};
ParticleSystem.generateQueue = function() {
  ParticleSystem.queue = {
    love: {func: ParticleSystem.love, emitters: {}},
    hate: {func: ParticleSystem.hate, emitters: {}}
  };
  for (let key in ParticleSystem.queue) {
    for (let i=0; i<Talker.talkers.length; i++) {
      ParticleSystem.queue[key].emitters[Talker.talkers[i].name] = [];
    }
  }
};
ParticleSystem.addToQueue = function(a, b, key) {
  pushIfNotIn(b.name, ParticleSystem.queue[key].emitters[a.name]);
};
function ButtonToggle(x, y, path, action) {
  this.spr = animatedSpriteFrom(path);
  this.spr.zIndex = 90;
  this.spr.position.set(x, y);
  addChildZ(this.spr);
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
function createSoundButton() {
  sound_button = new ButtonToggle(app.screen.width - 108, app.screen.height -  86, "assets/sprites/misc/sound_button.json", () => {
    let double_click_ms = 260;
    if (sound_button.pressed) {
      sound_is_on = false;
    }
    else {
      sound_is_on = true;
    }
    
    // press again quickly to download a screencap
    if (sound_button.press_to_screenshot) {
      takeScreenshot();
    }
    if (sound_button.timer) {
      clearTimeout(sound_button.timer);
    }
    sound_button.timer = setTimeout(()=>{
      sound_button.press_to_screenshot = false;
      if (sound_is_on) {
        music.volume = music_normal_volume;
      }
      else {
        music.volume = 0;
      }
    }, double_click_ms);
    sound_button.press_to_screenshot = !sound_button.press_to_screenshot;
  });
  sound_button.press_to_screenshot = false;
  sound_button.spr.scale.set(4.2);
  sound_button.alpha = 0.8;
  
  // no sound by default
  music.volume = 0;
  sound_button.press();
}
function takeScreenshot() {
  let temp_element = document.createElement("a");
  sound_button.spr.visible = false;
  app.renderer.render(app.stage);
  temp_element.href = app.view.toDataURL("image/jpeg");
  sound_button.spr.visible = true;
  temp_element.download = "varukyuria_snap";
  temp_element.click();
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

app.ticker.add(playing);

function updateCanvasSize() {
  let padding = 35;
  let a = window.innerWidth;
  let b = window.innerHeight;
  let h_factor = 1;
  let w_factor = app.view.width/app.view.height * b/a;
  if (b > a) {
    h_factor = app.view.height/app.view.width * a/b;
    w_factor = 1;
  }
  app.view.style.position = "relative";
  app.view.style.width = (screen.width-padding)*w_factor + "px";
  app.view.style.height = (screen.height-padding)*h_factor + "px";
  app.view.style.width = (window.innerWidth-padding)*w_factor + "px";
  app.view.style.height = (window.innerHeight-padding)*h_factor + "px";
  app.view.style.top = 10 + "px";
  app.render();
}
window.addEventListener("resize", updateCanvasSize, false);
updateCanvasSize();

