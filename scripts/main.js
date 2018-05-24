// TODO
// moar musics
// resize screen / rotate phone *
// figure out stage_spot error
// irene koller special scene, "on the gallian front"

let app = new PIXI.Application({width: 720, height: 480, backgroundColor: 0xf5f5f5});
let u = utils;
let objectsToUpdate = [];
let elapsed = 0;
let dialog_indicator;
let sound_button;
let keyboard = {};
let music;
let music_queued;
let music_song;
let music_normal_volume = 0.17;
let sound_is_on = true;
let next_ticker;
let emotes_queue = [];
let music_paths = ['A Moment of Relief.mp3', 'Chronicles of the Gallian War.mp3', 'Daily Life of the 7th Platoon.mp3', 'Defensive Fight.mp3', 'Everyday Training.mp3', 'Fierce Combat.mp3', 'Final Decisive Battle.mp3', 'Gallant Fight.mp3', 'Hard Fight.mp3', 'No Matter The Distance (Game Opening).mp3', 'No Matter The Distance.mp3', 'Offensive and Defensive Battle.mp3', 'Quiet Chat.mp3', "Randgriz Archduke's Family.mp3", 'Randgriz City.mp3', 'Resistance.mp3', 'Succeeded Wish (Piano).mp3', 'Those Who Succeeded.mp3', 'Title Main Theme.mp3', 'Urgent Instructions.mp3', 'Varukyuria Intro.mp3', "Zaka's Theme.mp3", "K-ON! - Pinch Daisuki.mp3", "Akino - Sousei no Aquarion.mp3", "Succeeded Wish (ROJI).mp3"];
//music_paths = ['A Moment of Relief.mp3'];
let songs = [];
let stage_spots = [
  {x: 140, y: 126, facing: 1, guest: null, zIndex: 0},
  {x: 140, y: app.screen.height-117, facing: 1,  guest: null, zIndex: 1},
  {x: app.screen.width-140, y: 126, facing: -1,  guest: null, zIndex: 2},
  {x: app.screen.width-190, y: app.screen.height-117, facing: -1,  guest: null, zIndex: 3}
];
let currentMsg;
let music_text;

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
loader
.add("assets/sprites/misc/loading_sphere.png")
.load(loadGame);
function loadGame() {
  showLoader();
  loader.on("progress", (loader, res) => {
    loader.text_spr.text = Math.round(loader.progress*100)/100 + "%";
    loader.text_spr.text = res.name;
    for (let i=0; i<LoadingSphere.spheres.length; i++) {
      LoadingSphere.spheres[i].update(loader.progress);
    }
  });
  loader
// assets/backgrounds/ (0.23 MB)
.add("assets/backgrounds/bkg000.jpg")
.add("assets/backgrounds/bkg001.jpg")
.add("assets/backgrounds/bkg002.jpg")
.add("assets/backgrounds/bkg003.jpg")
.add("assets/backgrounds/bkg004.jpg")
.add("assets/backgrounds/bkg005.jpg")
.add("assets/backgrounds/bkg006.jpg")
.add("assets/backgrounds/bkg007.jpg")
.add("assets/backgrounds/bkg008.jpg")
// assets/backgrounds/rare/ (1.73 MB)
.add("assets/backgrounds/rare/bkg000.jpg")
.add("assets/backgrounds/rare/bkg001.jpg")
.add("assets/backgrounds/rare/bkg002.jpg")
.add("assets/backgrounds/rare/bkg003.jpg")
.add("assets/backgrounds/rare/bkg004.jpg")
.add("assets/backgrounds/rare/bkg005.jpg")
.add("assets/backgrounds/rare/bkg006.jpg")
.add("assets/backgrounds/rare/bkg007.jpg")
.add("assets/backgrounds/rare/bkg008.jpg")
.add("assets/backgrounds/rare/bkg009.jpg")
.add("assets/backgrounds/rare/bkg010.jpg")
.add("assets/backgrounds/rare/bkg011.jpg")
.add("assets/backgrounds/rare/bkg012.jpg")
.add("assets/backgrounds/rare/bkg013.jpg")
.add("assets/backgrounds/rare/bkg014.jpg")
.add("assets/backgrounds/rare/bkg015.jpg")
.add("assets/backgrounds/rare/bkg016.jpg")
.add("assets/backgrounds/rare/bkg017.jpg")
.add("assets/backgrounds/rare/bkg018.jpg")
.add("assets/backgrounds/rare/bkg019.jpg")
.add("assets/backgrounds/rare/bkg020.jpg")
.add("assets/backgrounds/rare/bkg021.jpg")
.add("assets/backgrounds/rare/bkg022.jpg")
.add("assets/backgrounds/rare/bkg023.jpg")
.add("assets/backgrounds/rare/bkg024.jpg")
.add("assets/backgrounds/rare/bkg025.jpg")
.add("assets/backgrounds/rare/bkg026.jpg")
.add("assets/backgrounds/rare/bkg027.jpg")
.add("assets/backgrounds/rare/bkg028.jpg")
.add("assets/backgrounds/rare/bkg029.jpg")
.add("assets/backgrounds/rare/bkg030.jpg")
.add("assets/backgrounds/rare/bkg031.jpg")
.add("assets/backgrounds/rare/bkg032.jpg")
.add("assets/backgrounds/rare/bkg033.jpg")
.add("assets/backgrounds/rare/bkg034.jpg")
.add("assets/backgrounds/rare/bkg035.jpg")
.add("assets/backgrounds/rare/bkg036.jpg")
.add("assets/backgrounds/rare/bkg037.jpg")
.add("assets/backgrounds/rare/bkg038.jpg")
.add("assets/backgrounds/rare/bkg039.jpg")
.add("assets/backgrounds/rare/bkg040.jpg")
.add("assets/backgrounds/rare/bkg041.jpg")
.add("assets/backgrounds/rare/bkg042.jpg")
.add("assets/backgrounds/rare/bkg043.jpg")
.add("assets/backgrounds/rare/bkg044.jpg")
.add("assets/backgrounds/rare/bkg045.jpg")
.add("assets/backgrounds/rare/bkg046.jpg")
.add("assets/backgrounds/rare/bkg047.jpg")
.add("assets/backgrounds/rare/bkg048.jpg")
.add("assets/backgrounds/rare/bkg049.jpg")
.add("assets/backgrounds/rare/bkg050.jpg")
.add("assets/backgrounds/rare/bkg051.jpg")
.add("assets/backgrounds/rare/bkg052.jpg")
.add("assets/backgrounds/rare/bkg053.jpg")
.add("assets/backgrounds/rare/bkg054.jpg")
.add("assets/backgrounds/rare/bkg055.jpg")
.add("assets/backgrounds/rare/bkg056.jpg")
.add("assets/backgrounds/rare/bkg057.jpg")
.add("assets/backgrounds/rare/bkg058.jpg")
.add("assets/backgrounds/rare/bkg059.jpg")
.add("assets/backgrounds/rare/bkg060.jpg")
.add("assets/backgrounds/rare/bkg061.jpg")
.add("assets/backgrounds/rare/bkg062.jpg")
.add("assets/backgrounds/rare/bkg063.jpg")
.add("assets/backgrounds/rare/bkg064.jpg")
.add("assets/backgrounds/rare/bkg065.jpg")
.add("assets/backgrounds/rare/bkg066.jpg")
.add("assets/backgrounds/rare/bkg067.jpg")
.add("assets/backgrounds/rare/bkg068.jpg")
.add("assets/backgrounds/rare/bkg069.jpg")
.add("assets/backgrounds/rare/bkg070.jpg")
.add("assets/backgrounds/rare/bkg071.jpg")
// assets/backgrounds/special/ (0.10 MB)
.add("assets/backgrounds/special/janaino1.jpg")
.add("assets/backgrounds/special/janaino2.jpg")
.add("assets/backgrounds/special/junes.jpg")
// assets/backgrounds/ozpin/ (0.04 MB)
.add("assets/backgrounds/ozpin/ozpin01.jpg")
.add("assets/backgrounds/ozpin/ozpin02.jpg")
.add("assets/backgrounds/ozpin/ozpin03.jpg")
// assets/music/ (9.72 MB)
.add("assets/music/A Moment of Relief.mp3")
.add("assets/music/Akino - Sousei no Aquarion.mp3")
.add("assets/music/Chronicles of the Gallian War.mp3")
.add("assets/music/Daily Life of the 7th Platoon.mp3")
.add("assets/music/Defensive Fight.mp3")
.add("assets/music/Everyday Training.mp3")
.add("assets/music/Fierce Combat.mp3")
.add("assets/music/Final Decisive Battle.mp3")
.add("assets/music/Gallant Fight.mp3")
.add("assets/music/Hard Fight.mp3")
.add("assets/music/K-ON! - Pinch Daisuki.mp3")
.add("assets/music/No Matter The Distance (Game Opening).mp3")
.add("assets/music/No Matter The Distance.mp3")
.add("assets/music/Offensive and Defensive Battle.mp3")
.add("assets/music/Quiet Chat.mp3")
.add("assets/music/Randgriz Archduke's Family.mp3")
.add("assets/music/Randgriz City.mp3")
.add("assets/music/Resistance.mp3")
.add("assets/music/Succeeded Wish (Piano).mp3")
.add("assets/music/Succeeded Wish (ROJI).mp3")
.add("assets/music/Those Who Succeeded.mp3")
.add("assets/music/Title Main Theme.mp3")
.add("assets/music/Urgent Instructions.mp3")
.add("assets/music/Varukyuria Intro.mp3")
.add("assets/music/Zaka's Theme.mp3")
// assets/music/special/bkg/ (1.04 MB)
.add("assets/music/special/bkg/JUNESU.mp3")
.add("assets/music/special/bkg/ゲスの極み乙女。 - 私以外私じゃないの [MAIN メロディー].mp3")
.add("assets/music/special/bkg/ゲスの極み乙女。 - 私以外私じゃないの [OOOOH].mp3")
// assets/music/special/characters/ (2.34 MB)
.add("assets/music/special/characters/RWBY - Opening 1.mp3")
.add("assets/music/special/characters/Spirited Girl (Labrys).mp3")
.add("assets/music/special/characters/Your Affection (Yosuke).mp3")
.add("assets/music/special/characters/Brained Child (Gloria).mp3")
// assets/sprites/characters/ (4.06 MB)
.add("assets/sprites/characters/alfons.json")
.add("assets/sprites/characters/alicia.json")
.add("assets/sprites/characters/amy.json")
.add("assets/sprites/characters/annika.json")
.add("assets/sprites/characters/blake.json")
.add("assets/sprites/characters/carisa.json")
.add("assets/sprites/characters/chie.json")
.add("assets/sprites/characters/clarissa.json")
.add("assets/sprites/characters/cosette.json")
.add("assets/sprites/characters/edy.json")
.add("assets/sprites/characters/gloria.json")
.add("assets/sprites/characters/gusurg.json")
.add("assets/sprites/characters/imca.json")
.add("assets/sprites/characters/isara.json")
.add("assets/sprites/characters/jann.json")
.add("assets/sprites/characters/jaune.json")
.add("assets/sprites/characters/kurt.json")
.add("assets/sprites/characters/labrys.json")
.add("assets/sprites/characters/largo.json")
.add("assets/sprites/characters/leila.json")
.add("assets/sprites/characters/marina.json")
.add("assets/sprites/characters/maximilian.json")
.add("assets/sprites/characters/penny.json")
.add("assets/sprites/characters/riela.json")
.add("assets/sprites/characters/rise.json")
.add("assets/sprites/characters/rosie.json")
.add("assets/sprites/characters/ruby.json")
.add("assets/sprites/characters/selvaria.json")
.add("assets/sprites/characters/susie.json")
.add("assets/sprites/characters/teddie.json")
.add("assets/sprites/characters/valerie.json")
.add("assets/sprites/characters/varrot.json")
.add("assets/sprites/characters/weiss.json")
.add("assets/sprites/characters/welkin.json")
.add("assets/sprites/characters/yosuke.json")
.add("assets/sprites/characters/yukiko.json")
.add("assets/sprites/characters/yuna.json")
// assets/sprites/misc/ (0.06 MB)
.add("assets/sprites/misc/catdance.json")
.add("assets/sprites/misc/dialog_indicator.png")
.add("assets/sprites/misc/emotes.json")
.add("assets/sprites/misc/heart_particle.png")
.add("assets/sprites/misc/msgbubble.png")
.add("assets/sprites/misc/sound_button.json")
// ------------------
// Total size: 19.33 MB
  .load(setup);
}

loader.text = "";
loader.text_spr = null;
LoadingSphere.number = 11;
LoadingSphere.spheres = [];

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
  Background.init();
  
  loader.text_spr.destroy();
  LoadingSphere.removeAll();
  initSongs();
  playNextTrack();
  createSoundButton();

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
  Talker.ozpin.init();
  
  next_ticker = doUntil(null, 50, next);
}

function Background(name, path, is_rare, song, ozpin) {
  this.name = name;
  this.path = path;
  this.is_rare = is_rare || false;
  this.song = song || null;
  this.ozpin = ozpin || false;
  this.has_been_shown = false;
  Background.backgrounds.push(this);
}
Background.can_change = true;
Background.messages_required = 0;
Background.msgs_before_changing_min = 11;
Background.msgs_before_changing_max = 19;
Background.init = function() {
  Background.messagesRequiredUpdate();
  Background.genBackgrounds();
  Background.sprite = new PIXI.Sprite.fromImage("");
  Background.changeRandom();
  Background.sprite.alpha = 0.75;
  Background.sprite.width = app.screen.width;
  Background.sprite.height = app.screen.height;
  Background.sprite.interactive = true;
  Background.sprite.on("pointerdown", ikuso);
  addChildZ(Background.sprite);
};
Background.messagesRequiredUpdate = function() {
  Background.messages_required = u.randomInt(Background.msgs_before_changing_min, Background.msgs_before_changing_max);
  return Background.messages_required;
};
Background.change = function(bkg) {
//  bkg = Background.backgrounds[86]; // test ozpin
  Background.current = bkg;
  Background.sprite.texture = PIXI.Texture.fromImage(bkg.path);
  bkg.has_been_shown = true;
};
Background.changeRandom = function() {
  Background.change(Background.getRandom());
};
Background.backgrounds = [];
Background.normal_number = 8;  // i.e. bkg008.jpg exists
Background.rare_number = 71;  // i.e. bkg071.jpg exists
Background.genBackgrounds = function() {
  // normal backgrounds
  for (let i=0; i<=Background.normal_number; i++) {
    new Background("bkg" + u.getIntStr(i,3), "assets/backgrounds/bkg" + u.getIntStr(i,3) + ".jpg", false);
  }
  // rare backgrounds
  for (let i=0; i<=Background.rare_number; i++) {
    new Background("bkg" + u.getIntStr(i,3), "assets/backgrounds/rare/bkg" + u.getIntStr(i,3) + ".jpg", true);
  }
  // special backgrounds
  new Background("junes", "assets/backgrounds/special/junes.jpg", true, new Song("assets/music/special/bkg/JUNESU.mp3", "JUNESU"));
  new Background("JANAINO1", "assets/backgrounds/special/janaino1.jpg", true, new Song("assets/music/special/bkg/ゲスの極み乙女。 - 私以外私じゃないの [MAIN メロディー].mp3", "ゲスの極み乙女。 - 私以外私じゃないの [MAIN メロディー]"));
  new Background("JANAINO2", "assets/backgrounds/special/janaino2.jpg", true, new Song("assets/music/special/bkg/ゲスの極み乙女。 - 私以外私じゃないの [OOOOH].mp3", "ゲスの極み乙女。 - 私以外私じゃないの [OOOOH]"));
  // ozpin backgrounds
  new Background("ozpin1", "assets/backgrounds/ozpin/ozpin01.jpg", true, null, true);
  new Background("ozpin2", "assets/backgrounds/ozpin/ozpin02.jpg", true, null, true);
  new Background("ozpin3", "assets/backgrounds/ozpin/ozpin03.jpg", true, null, true);
};
Background.getRandom = function() {
  let include_rare = Math.random() < 0.4;
  let selected = Background.backgrounds.filter(x => !x.has_been_shown && (include_rare && x.is_rare) || !include_rare);
  if (selected.length === 0) {
    Background.backgrounds.forEach(x => x.has_been_shown = false);
    selected = Background.backgrounds;
  }
  return u.randomFromArr(selected);
};

function next() {
  if (halt_next) {return;}
  let call_next = true;
  // enter new character
  if ((activeTalkers().length < 2 || Math.random() < 0.4) && activeTalkers().length < 4) {
//    let p = inactiveTalkers().filter(x=>(x.name == "Maximilian" || x.name == "Alicia"));
//    if (p.length>0) {u.randomFromArr(p).enter();}
    u.randomFromArr(inactiveTalkers()).enter();
    Background.can_change = false;
  }
  // someone leave NOW
  else if (activeTalkers().filter(x=>x.talked_times >= Talker.msgs_before_leaving).length > 0 && Math.random() < 0.4) {
    u.randomFromArr(activeTalkers().filter(x=>x.talked_times >= Talker.msgs_before_leaving)).leave();
  }
  // go to new scene
  else if (Background.messages_required <= 0 && Background.can_change) {
    changeScene();
    call_next = false;
  }
  else if (activeTalkers().length > 1) {
    Background.messages_required--;
    if (testing_who) {
      testing_who.talk();
    }
    else {
      u.randomFromArr(activeTalkers()).talk();
    }
    call_next = false;
    Background.can_change = true;
  }
  // if no one talked or changing background, wait a bit and repeat this method
  if (call_next) {
    next_ticker = doUntil(null, 30, next);
  }
  call_next = true;
}

function changeScene() {
  Background.messagesRequiredUpdate();
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
      Background.changeRandom();
      activeTalkers().forEach(x=>x.leave());
      playNextTrack();
      elapsed = 0;
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

let gamesound = {};
gamesound.sounds = {};
gamesound.selectFromList = function(path, sprite) {
  // creates one if not in gamesound.sounds
  if (gamesound.sounds[path]) {
    return gamesound.sounds[path];
  }
  else {
    return new gamesound.Gamesound(path, sprite);
  }
};
gamesound.Gamesound = function(path, sprite) {
  this.path = path;
  this.sprite = sprite || null;
  if (loader.resources[path] !== undefined) {
    this.sound = loader.resources[path].sound;
  }
  else {
    this.sound = PIXI.sound.Sound.from({
      url: path,
      preload: true
    });
  }
  if (sprite) {
    this.sound.addSprites(sprite);
  }
  gamesound.sounds[this.path] = this;
  if (!sound_is_on) {
    this.mute();
  }
};
gamesound.Gamesound.prototype.setVolume = function(new_volume) {
  if (this.sound.paused === true) {
    this.sound.resume();
    this.sound.volume = new_volume;
    this.sound.pause();
  }
  else {
   this.sound.volume = new_volume; 
  }
};
gamesound.Gamesound.prototype.kill = function() {
  this.sound.stop();
  this.sound.destroy();
  delete gamesound.sounds[this.path];
};
gamesound.Gamesound.prototype.mute = function() {
  if (this.prev_volume === undefined || this.prev_volume !== 0 && this.sound.volume !== 0) {
    this.prev_volume = this.sound.volume;
  }
  this.setVolume(0);
};
gamesound.Gamesound.prototype.unmute = function() {
  if (this.prev_volume !== undefined) {
    this.setVolume(this.prev_volume);
  }
};
gamesound.muteAll = function() {
  for (let key in gamesound.sounds) {
    gamesound.sounds[key].mute();
  }
};
gamesound.unmuteAll = function() {
  for (let key in gamesound.sounds) {
    gamesound.sounds[key].unmute();
  }
};

function Talker(options) {
  this.name = options.name;
  this.fav_boards = options.fav_boards;
  this.custom_words = options.custom_words;
  this.copulas = options.copulas;
  this.likes = options.likes;
  this.dislikes = options.dislikes;
  this.emojitypes = options.emojitypes || [1,2];
  this.emojifreq = options.emojifreq || 1;
  this.customTextProc = options.customTextProc || null;
  if (options.song_path) {
    this.song = new Song("assets/music/special/characters/" + options.song_path + ".mp3", options.song_path);
    this.song_sound = gamesound.selectFromList(this.song.path);
    this.song_sound.sound.preload = true;
    this.song_sound.sound.loop = true;
    this.song_sound.setVolume(music_normal_volume);
  }
  if (options.voice_sprite) {
    this.voice_sprite = options.voice_sprite;
//    this.voiceCreate();
  }
  this.talked_times = 0;
  this.spr = animatedSpriteFrom(options.sprite_path);
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
Talker.msgs_before_leaving = 3;
Talker.talkers = [];
Talker.stopAllVoices = function() {
  Talker.talkers.forEach(x => {
    if (x.voice) {
      x.voice.sound.stop();
    }
  });
};
Talker.prototype.useEmoji = function(chansu) {
  if (this.emojitypes.length > 0 && Math.random() < chansu*this.emojifreq) {
    let selected_emojis = emojis.filter(x => u.isInArr(x.type, this.emojitypes));
    if (selected_emojis.length > 0) {
      return u.randomFromArr(selected_emojis).emoji + " ";
    }
  }
  return "";
};
Talker.prototype.genMsg = function() {
  let filtered = DATACHAN.filterByBoard(u.randomFromArr(this.fav_boards));
  let result = "";
  ParticleSystem.generateQueue();
  for (let i=0; i < u.randomInt(2, 4); i++) {
    let p = u.randomFromArr(filtered).text;
    p = p.split("\n").join(" ");
    p = p.split(" ");
    let grabN = u.randomInt(1, 4);
    if (grabN > p.length) {
      grabN = p.length;
    }
    let grab_start = u.randomInt(0, p.length - grabN);
    for (let j=0; j<grabN; j++) {
      result += p[grab_start+j] + " ";
    }
    
    // mention someone
    if (Math.random() < 0.4) {
      result += this.useEmoji(0.1);  // emoji before mentioning someone
      
      let selected_talkers = activeTalkers().filter(x => x.name != this.name);
      if (selected_talkers.length > 0) {
        let randomreact = true;
        let selected_talker = u.randomFromArr(selected_talkers);
        
        result += selected_talker.name + " ";
        // queue EMOTES and do particles
        for (let i=0; i<5; i++) {
          // love
          if (u.isInArr(this.name, selected_talker.likes)) {
            // selected_talker likes talker
            new Emote(selected_talker, 1, true);
            randomreact = false;
            ParticleSystem.addToQueue(selected_talker, this, "love");
          }
          if (u.isInArr(selected_talker.name, this.likes)) {
            // talker likes selected talker
            new Emote(this, 1, true);
            ParticleSystem.addToQueue(this, selected_talker, "love");
          }
          // hate
          if (u.isInArr(this.name, selected_talker.dislikes)) {
            // selected_talker dislikes talker
            new Emote(selected_talker, 14, true, PIXI.BLEND_MODES.MULTIPLY);
            randomreact = false;
            ParticleSystem.addToQueue(selected_talker, this, "hate");
          }
          if (u.isInArr(selected_talker.name, this.dislikes)) {
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
      result += u.randomFromArr(this.custom_words) + " ";
    }
    if (Math.random() < 0.2) {
      result += "\n";
    }
  }
  result = result.trim();
  result = result.replace(/\,\s?$/gi, "");
  result = result.replace(/\and$/gi, "");
  if (this.copulas && this.copulas.length > 0) {
    result += " " + u.randomFromArr(this.copulas);
  }
//  emoji at the end of msg
  result += " " + this.useEmoji(0.4);
  // custom text replacement/processing function (e.g. MAXIMILIAN)
  if (this.customTextProc) {
    result = this.customTextProc(result);
  }
  // uppercase
  if (Math.random() < 0.25) {
    result = result.toUpperCase();
  }
  
  return result;
};
Talker.getReplaceFunc = function(replace_combo, words_only) {
  if (words_only === undefined) {
    words_only = true;
  }
  return function(text) {
    let ret = text;
    if (words_only) {
      ret = text.split(" ");
      for (let i=0; i<ret.length; i++) {
        for (let j=0; j<replace_combo.length; j++) {
          if (ret[i] === replace_combo[j][0]) {
            if (replace_combo[j][1] instanceof Array) {
              ret[i] = u.randomFromArr(replace_combo[j][1]);
            }
            else {
              ret[i] = replace_combo[j][1];
            }
            continue;
          }
          if (ret[i].toUpperCase() === replace_combo[j][0].toUpperCase()) {
            if (replace_combo[j][1] instanceof Array) {
              ret[i] = u.randomFromArr(replace_combo[j][1]).toUpperCase();
            }
            else {
              ret[i] = replace_combo[j][1].toUpperCase();
            }
            continue;
          }
        }
      }
      ret = ret.join(" ");
    }
    else {
      for (let i=0; i<replace_combo.length; i++) {
        ret = ret.split(replace_combo[i][0]).join(replace_combo[i][1]);
        ret = ret.split(replace_combo[i][0].toUpperCase()).join(replace_combo[i][1].toUpperCase());
      }
    }
    return ret;
  };
};
Talker.prototype.talk = function() {
  this.talked_times += 1;
  this.randomFace();
  shutEveryone();
  this.talking = true;
  this.voicePlayRandom();
  new Message(this, this.genMsg());
};
Talker.prototype.enter = function() {
  if (!this.randomPos()) {return;}
  this.playSong();
  this.voiceCreate();
  this.randomFace();
  this.active = true;
  this.talked_times = 0;
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
  this.pauseSong();
  this.voice.kill();
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
    this.stage_spot = u.randomFromArr(freespots);
    this.stage_spot.guest = this;
    this.spr.x = this.stage_spot.x + u.randomInt(-40, 40);
    this.spr.y = this.stage_spot.y + u.randomInt(-40, 40);
    this.spr.scale.x = this.stage_spot.facing;
  }
  return freespots.length > 0;
};
Talker.prototype.randomFace = function() {
  this.spr.gotoAndStop(u.randomInt(0, this.spr.totalFrames));
};
Talker.prototype.pauseOtherSongs = function() {
  if (music && !music.sound.paused) {
    music.sound.pause();
  }
  Talker.talkers.forEach(x => {
    if (x.song_sound && x.song_sound.sound.isPlaying) {
      x.song_sound.sound.pause();
    }
  });
  
};
Talker.prototype.playSong = function () {
  if (!this.song) {return;}
  this.pauseOtherSongs();
  this.song.songInfoScreen();
  if (this.song_sound.sound.paused === true) {
    this.song_sound.sound.resume();
  }
  else {
    this.song_sound.sound.play();
  }
};
Talker.prototype.pauseSong = function () {
  if (!this.song) {return;}
  this.song_sound.sound.pause();
  var songs_still_playing = Talker.talkers.filter(x => x !== this && x.song_sound !== undefined && x.song_sound.sound.isPlaying);
  if (songs_still_playing.length === 0) {
    music.sound.resume();
    music_song.songInfoScreen();
  }
};
Talker.prototype.voiceCreate = function() {
  if (this.voice_sprite) {
    this.voice = gamesound.selectFromList("assets/voice/" + this.name.toLowerCase() + ".opus", this.voice_sprite);
  }
};
Talker.prototype.voicePlayRandom = function() {
  if (Background.current.ozpin) {
    Talker.ozpin.voice.sound.stop();
    Talker.ozpin.voice.sound.play(u.randomFromArr(Object.keys(Talker.ozpin.voice_sprite)));
  }
  else if (this.voice) {
    Talker.stopAllVoices();
    this.voice.sound.play(u.randomFromArr(Object.keys(this.voice_sprite)));
  }
};
Talker.getByName = function(namae) {
  let s = Talker.talkers.filter(x => x.name == namae);
  if (s.length > 0) {
    return s[0];
  }
};
Talker.ozpin = {
  voice_sprite: {
    "01": {start: 0.0, end: 1.9},
    "02": {start: 2.0, end: 3.9},
    "03": {start: 4.0, end: 5.9},
    "04": {start: 6.0, end: 7.9},
    "05": {start: 8.0, end: 9.9},
    "06": {start: 10.0, end: 11.9},
    "07": {start: 12.0, end: 13.9},
    "08": {start: 14.0, end: 15.9},
    "09": {start: 16.0, end: 17.9},
    "10": {start: 18.0, end: 19.9},
    "11": {start: 20.0, end: 23.9},
    "12": {start: 24.0, end: 27.9},
    "13": {start: 28.0, end: 31.9},
    "14": {start: 32.0, end: 35.9},
    "15": {start: 36.0, end: 39.9},
    "16": {start: 40.0, end: 43.9},
    "17": {start: 44.0, end: 47.9},
    "18": {start: 48.0, end: 55.9},
    "19": {start: 56.0, end: 63.9},
    "20": {start: 64.0, end: 71.9},
    "21": {start: 72.0, end: 79.9}
  },
  init: function() {
    this.voice = gamesound.selectFromList("assets/voice/ozpin.opus", this.voice_sprite);
  }
};
function initTalkers() {
  // [sidenote] available boards: a g c jp v vr tv k o an sci his i toy p ck ic lit mu fa gd biz fit s4s
  Talker.talkers.push(new Talker({
    "name": "Alfons",
    "fav_boards": [
      "vr",
      "jp",
      "sci",
      "s4s"
    ],
    "sprite_path": "assets/sprites/characters/alfons.json",
    "custom_words": [
      "I LIKE PAIN",
      "bdsm",
      "BDSM",
      "hit me",
      "hit me with",
      "more effective than enemy bullets",
      "whip",
      "HIT ME"
    ],
    "copulas": [],
    "likes": [
      "Leila",
      "Annika",
      "Chie"
    ],
    "dislikes": [
      "Yuna"
    ],
    "emojitypes": [
      1,
      2,
      3
    ],
    "emojifreq": 1.4,
    "customTextProc": Talker.getReplaceFunc([
      ["Leila", "Leila❤️"]
    ]),
    "voice_sprite": {
      "00": {start: 0.0, end: 3.8},
      "01": {start: 4.0, end: 7.8},
      "02": {start: 8.0, end: 11.8},
      "03": {start: 12.0, end: 15.8},
      "04": {start: 16.0, end: 19.8},
      "05": {start: 20.0, end: 23.8},
      "06": {start: 24.0, end: 27.8},
      "07": {start: 28.0, end: 31.8},
      "08": {start: 32.0, end: 35.8},
      "09": {start: 36.0, end: 39.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Alicia",
    "fav_boards": [
      "c",
      "ck",
      "s4s"
    ],
    "sprite_path": "assets/sprites/characters/alicia.json",
    "custom_words": [
      "ん！",
      "こうどうかいしします",
      "そこ！！！",
      "あたって！！！",
      "SOKOO",
      "ATATTEE",
      "行動かいします",
      "わたしのばんね",
      "bake",
      "MAKERU MONKAAAAAA",
      "まけるもんか！！！！！！！！！",
      "あのね",
      "マーモット",
      "undodgeable shot",
      "resist cross-fire",
      "mysterious body",
      "Valkyria",
      "maternal"
    ],
    "copulas": [],
    "likes": [
      "Welkin",
      "Isara",
      "Selvaria",
      "Riela"
    ],
    "dislikes": [
      "Gloria",
      "Maximilian"
    ],
    "emojitypes": [
      3,
      4
    ],
    "emojifreq": 1.2,
    "customTextProc": Talker.getReplaceFunc([
      ["Welkin", ["ウェルキン", "NE WERUKIN", "ね。。ウェルキン", "ch-chotto Weeerrrukin!!??", "WEEERRRUUKIINN"]]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 23.9},
      "13": {start: 24.0, end: 25.9},
      "14": {start: 26.0, end: 27.9},
      "15": {start: 28.0, end: 29.9},
      "16": {start: 30.0, end: 31.9},
      "17": {start: 32.0, end: 33.9},
      "18": {start: 34.0, end: 35.9},
      "19": {start: 36.0, end: 39.9},
      "20": {start: 40.0, end: 43.9},
      "21": {start: 44.0, end: 47.9},
      "22": {start: 48.0, end: 51.9},
      "23": {start: 52.0, end: 55.9},
      "24": {start: 56.0, end: 59.9},
      "25": {start: 60.0, end: 63.9},
      "26": {start: 64.0, end: 67.9},
      "27": {start: 68.0, end: 71.9},
      "28": {start: 72.0, end: 75.9},
      "29": {start: 76.0, end: 79.9},
      "30": {start: 80.0, end: 83.9},
      "31": {start: 84.0, end: 87.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Amy",
    "fav_boards": [
      "c"
    ],
    "sprite_path": "assets/sprites/characters/amy.json",
    "custom_words": [
      "teki hakken, teki ha- uuhhahahaha",
      "uuhhahahaha",
      "teki hakken!",
      "てきはっけん、てきはーｗｗｗｗｗｗ",
      "てきはっけん",
      "OTOOUUSAN",
      "おとうさん",
      "おとうさんにあいたいな"
    ],
    "copulas": [],
    "likes": [
      "Leila",
      "Annika",
      "Teddie"
    ],
    "dislikes": [],
    "emojitypes": [
      3,
      4
    ],
    "emojifreq": 1.5,
    "voice_sprite": {
      "00": {start: 0.0, end: 3.8},
      "01": {start: 4.0, end: 7.8},
      "02": {start: 8.0, end: 11.8},
      "03": {start: 12.0, end: 15.8},
      "04": {start: 16.0, end: 19.8},
      "05": {start: 20.0, end: 23.8},
      "06": {start: 24.0, end: 27.8},
      "07": {start: 28.0, end: 31.8},
      "08": {start: 32.0, end: 35.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Annika",
    "fav_boards": [
      "fit"
    ],
    "sprite_path": "assets/sprites/characters/annika.json",
    "custom_words": [
      "NINJIN PAAAAAAAN",
      "ninjin pan",
      "ninjin",
      "PAAN",
      "ninjin paaaaaaaaaaaaan",
      "true strength",
      "NINJIN",
      "にんじんパン"
    ],
    "copulas": [],
    "likes": [
      "Leila",
      "Alfons",
      "Amy",
      "Imca",
      "Gloria"
    ],
    "dislikes": [],
    "emojitypes": [
      1
    ],
    "emojifreq": 0.8,
    "voice_sprite": {
      "00": {start: 0.0, end: 2.3},
      "01": {start: 2.5, end: 4.8},
      "02": {start: 5.0, end: 7.3},
      "03": {start: 7.5, end: 9.8},
      "04": {start: 10.0, end: 12.3},
      "05": {start: 12.5, end: 14.8},
      "06": {start: 15.0, end: 17.3},
      "07": {start: 17.5, end: 19.8},
      "08": {start: 20.0, end: 22.3},
      "09": {start: 22.5, end: 24.8},
      "10": {start: 25.0, end: 27.3}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Clarissa",
    "fav_boards": [
      "fit",
      "mu"
    ],
    "sprite_path": "assets/sprites/characters/clarissa.json",
    "custom_words": [
      "*heavy sigh*",
      "*sighs heavily*",
      "[SIGHING]",
      "gomen-nasahh",
      "Pure Heart"
    ],
    "copulas": [],
    "likes": [
      "Valerie",
      "Teddie",
      "Penny",
      "Ruby"
    ],
    "dislikes": [],
    "emojitypes": [
      3,
      4
    ],
    "emojifreq": 1.2,
    "voice_sprite": {
      "00": {start: 0.0, end: 3.8},
      "01": {start: 4.0, end: 7.8},
      "02": {start: 8.0, end: 11.8},
      "03": {start: 12.0, end: 15.8},
      "04": {start: 16.0, end: 19.8},
      "05": {start: 20.0, end: 23.8},
      "06": {start: 24.0, end: 27.8},
      "07": {start: 28.0, end: 31.8},
      "08": {start: 32.0, end: 35.8},
      "09": {start: 36.0, end: 39.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Cosette",
    "fav_boards": [
      "gd",
      "ic",
      "i",
      "c"
    ],
    "sprite_path": "assets/sprites/characters/cosette.json",
    "custom_words": [
      "だいじょうぶだよ",
      "DRRPPRORTR90R3232",
      "ATATTE",
      "てきげきは",
      "yaah!",
      "s-sorry",
      "thank you SO much"
    ],
    "copulas": [],
    "likes": [
      "Teddie",
      "Penny",
      "Labrys",
      "Alicia",
      "Isara",
      "Riela"
    ],
    "dislikes": [],
    "emojitypes": [
      2,
      3,
      5
    ],
    "emojifreq": 1.2,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 23.9},
      "13": {start: 24.0, end: 27.9},
      "14": {start: 28.0, end: 31.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Edy",
    "fav_boards": [
      "jp"
    ],
    "sprite_path": "assets/sprites/characters/edy.json",
    "custom_words": [
      "やりましたわ",
      "はっけんしましたわ",
      "りょうかいですわ",
      "ですわ",
      "いきますわよ！",
      "わたくし",
      "わたくしにおまかせなさい",
      "[GUNSHOTS]",
      "*rapid fire*"
    ],
    "copulas": [
      "wa",
      "わ"
    ],
    "likes": [
      "Alicia"
    ],
    "dislikes": [
      "Rosie"
    ],
    "emojitypes": [
      4,
      5
    ],
    "emojifreq": 1.6,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 15.9},
      "08": {start: 16.0, end: 19.9},
      "09": {start: 20.0, end: 23.9},
      "10": {start: 24.0, end: 27.9},
      "11": {start: 28.0, end: 31.9},
      "12": {start: 32.0, end: 35.9},
      "13": {start: 36.0, end: 39.9},
      "14": {start: 40.0, end: 47.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Gloria",
    "fav_boards": [
      "biz"
    ],
    "sprite_path": "assets/sprites/characters/gloria.json",
    "custom_words": [
      "my basketball",
      "my brainchild",
      "my good or bad",
      "my breath is nice",
      "これでどうだい"
    ],
    "copulas": ["あい"],
    "likes": [
      "Riela",
      "Leila"
    ],
    "dislikes": [
      "Teddie",
      "Imca",
      "Gusurg",
      "Edy",
      "Rosie",
      "Yukiko"
    ],
    "emojitypes": [
      5
    ],
    "emojifreq": 0.6,
    "song_path": "Brained Child (Gloria)",
    "voice_sprite": {
      "00": {start: 0.0, end: 3.8},
      "01": {start: 4.0, end: 7.8},
      "02": {start: 8.0, end: 11.8},
      "03": {start: 12.0, end: 15.8},
      "04": {start: 16.0, end: 19.8},
      "05": {start: 20.0, end: 23.8},
      "06": {start: 24.0, end: 27.8},
      "07": {start: 28.0, end: 31.8},
      "08": {start: 32.0, end: 35.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Gusurg",
    "fav_boards": [
      "jp",
      "a",
      "toy"
    ],
    "sprite_path": "assets/sprites/characters/gusurg.json",
    "custom_words": [
      "xD",
      "KOUDOUKAISHITA",
      "こうどうかいした",
      "xD",
      ""
    ],
    "copulas": [],
    "likes": [
      "Kurt",
      "Imca",
      "Isara"
    ],
    "dislikes": [],
    "emojitypes": [
      3
    ],
    "emojifreq": 0.8,
    "voice_sprite": {
      "00": {start: 0.0, end: 1.8},
      "01": {start: 2.0, end: 3.8},
      "02": {start: 4.0, end: 5.8},
      "03": {start: 6.0, end: 7.8},
      "04": {start: 8.0, end: 9.8},
      "05": {start: 10.0, end: 11.8},
      "06": {start: 12.0, end: 13.8},
      "07": {start: 14.0, end: 15.8},
      "08": {start: 16.0, end: 17.8},
      "09": {start: 18.0, end: 19.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Imca",
    "fav_boards": [
      "k"
    ],
    "sprite_path": "assets/sprites/characters/imca.json",
    "custom_words": [
      "てき",
      "ない。"
    ],
    "copulas": [
      "ない",
      ""
    ],
    "likes": [
      "Riela",
      "Kurt",
      "Annika",
      "Labrys"
    ],
    "dislikes": [],
    "emojitypes": [],
    "emojifreq": 0,
    "voice_sprite": {
      "00": {start: 0.0, end: 1.8},
      "01": {start: 2.0, end: 3.8},
      "02": {start: 4.0, end: 5.8},
      "03": {start: 6.0, end: 7.8},
      "04": {start: 8.0, end: 9.8},
      "05": {start: 10.0, end: 11.8},
      "06": {start: 12.0, end: 13.8},
      "07": {start: 14.0, end: 15.8},
      "08": {start: 16.0, end: 17.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Isara",
    "fav_boards": [
      "o",
      "sci"
    ],
    "sprite_path": "assets/sprites/characters/isara.json",
    "custom_words": [
      "ありがとうございます",
      "ちょっといいですか",
      "エーデルワイス",
      "ラルゴさんとロージーさん",
      "ラルゴさんとロージーさんにおわたししたくて",
      "ダルクス",
      "ダルクスじ"
    ],
    "copulas": [],
    "likes": [
      "Welkin",
      "Alicia",
      "Yuna",
      "Rosie",
      "Largo",
      "Penny",
      "Labrys"
    ],
    "dislikes": [
      "Yosuke"
    ],
    "emojitypes": [
      2,
      4
    ],
    "emojifreq": 1.4,
    "customTextProc": Talker.getReplaceFunc([
      ["Largo", ["ラルゴさん", "Mr. Largo"]],
      ["Rosie", "ロージーさん"],
      ["Welkin", "にいさん"]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 15.9},
      "08": {start: 16.0, end: 19.9},
      "09": {start: 20.0, end: 23.9},
      "10": {start: 24.0, end: 27.9},
      "11": {start: 28.0, end: 31.9},
      "12": {start: 32.0, end: 35.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Kurt",
    "fav_boards": [
      "biz",
      "ck"
    ],
    "sprite_path": "assets/sprites/characters/kurt.json",
    "custom_words": [
      "しゅつげきする",
      "こうどうかいしする",
      ""
    ],
    "copulas": [],
    "likes": [
      "Riela",
      "Gusurg",
      "Imca"
    ],
    "dislikes": [],
    "emojitypes": [],
    "emojifreq": 0,
    "customTextProc": Talker.getReplaceFunc([
      ["Riela", ["リエラ", "RIERA", "リエラ、グスルグ！", "リエラ、えんごする！", "リエラ。。いまたすける！"]],
      ["Gusurg", ["グスルグ", "GUSURUGU"]]
    ]),
    "voice_sprite": {
      "00": {start: 0.0, end: 1.8},
      "01": {start: 2.0, end: 3.8},
      "02": {start: 4.0, end: 5.8},
      "03": {start: 6.0, end: 7.8},
      "04": {start: 8.0, end: 9.8},
      "05": {start: 10.0, end: 11.8},
      "06": {start: 12.0, end: 13.8},
      "07": {start: 14.0, end: 15.8},
      "08": {start: 16.0, end: 17.8},
      "death": {start: 18.0, end: 19.8},
      "Gusurg": {start: 20.0, end: 21.8},
      "Riela": {start: 22.0, end: 23.8},
      "09": {start: 24.0, end: 25.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Leila",
    "fav_boards": [
      "fit",
      "k",
      "fa"
    ],
    "sprite_path": "assets/sprites/characters/leila.json",
    "custom_words": [
      "そこね",
      "UHUHUH",
      "anyeru",
      "でばんだよね",
      "はなしにならないわ",
      "ダメなおとこはどこかしら",
      "bad guy",
      "educate"
    ],
    "copulas": [],
    "likes": [
      "Alfons",
      "Amy",
      "Annika",
      "Maximilian",
      "Kurt"
    ],
    "dislikes": [],
    "emojitypes": [],
    "emojifreq": 0,
    "voice_sprite": {
      "00": {start: 0.0, end: 1.8},
      "01": {start: 2.0, end: 3.8},
      "02": {start: 4.0, end: 5.8},
      "03": {start: 6.0, end: 7.8},
      "04": {start: 8.0, end: 9.8},
      "05": {start: 10.0, end: 11.8},
      "06": {start: 12.0, end: 13.8},
      "07": {start: 14.0, end: 15.8},
      "08": {start: 16.0, end: 17.8},
      "09": {start: 18.0, end: 19.8},
      "10": {start: 20.0, end: 21.8},
      "death": {start: 22.0, end: 23.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Riela",
    "fav_boards": [
      "c",
      "s4s"
    ],
    "sprite_path": "assets/sprites/characters/riela.json",
    "custom_words": [
      "はっけんしたわ",
      "そこね",
      "こうどうかいし",
      "わたしのつがいね",
      "そこね",
      "あたって！",
      "やった！",
      "みんあのやくにたちたいの",
      "ぜんめつはいや",
    ],
    "copulas": [],
    "likes": [
      "Kurt",
      "Imca",
      "Valerie",
      "Alicia",
      "Teddie"
    ],
    "dislikes": [],
    "emojitypes": [
      4,
      5
    ],
    "emojifreq": 2,
    "customTextProc": Talker.getReplaceFunc([
      ["Kurt", ["クルト", "クルト、わたしも！"]]
    ]),
    "voice_sprite": {
      "00": {start: 0.0, end: 1.8},
      "01": {start: 2.0, end: 3.8},
      "02": {start: 4.0, end: 5.8},
      "03": {start: 6.0, end: 7.8},
      "04": {start: 8.0, end: 9.8},
      "05": {start: 10.0, end: 11.8},
      "06": {start: 12.0, end: 13.8},
      "07": {start: 14.0, end: 15.8},
      "08": {start: 16.0, end: 17.8},
      "09": {start: 18.0, end: 19.8},
      "10": {start: 20.0, end: 21.8},
      "11": {start: 22.0, end: 23.8},
      "Kurt": {start: 24.0, end: 25.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Rosie",
    "fav_boards": [
      "mu"
    ],
    "sprite_path": "assets/sprites/characters/rosie.json",
    "custom_words": [
      "ゆらい？？？？",
      "プレゼント",
      "ダルクスじからのプレゼントだって\nほしくないだよ",
      "ダルクス",
      "ダルクスじ",
      "ダルクスじからのプレゼント",
      "とめられないよ",
      "なんでもいいけどさ",
      "うるさいな！",
      "あかってるよけどさ",
      "あかってるよ！",
      "*muah*",
      "*smack*",
      "xxx"
    ],
    "copulas": ["x"],
    "likes": [
      "Isara",
      "Largo"
    ],
    "dislikes": [
      "Isara"
    ],
    "emojitypes": [],
    "emojifreq": 0,
    "customTextProc": Talker.getReplaceFunc([
      ["i", "あたい"],
      ["i'm", "あたいは"],
      ["im", "あたいは"],
      ["i'll", "あたい　will"],
      ["ill", "あたい　will"],
      ["am", "は"],
      ["my", "あたいの"],
      ["me", "あたいは"],
      ["Largo", "ラルゴ"],
      ["Isara", ["イサラ。。。", "イサラ"]]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 23.9},
      "13": {start: 24.0, end: 25.9},
      "14": {start: 26.0, end: 27.9},
      "15": {start: 28.0, end: 31.9},
      "16": {start: 32.0, end: 35.9},
      "17": {start: 36.0, end: 39.9},
      "18": {start: 40.0, end: 43.9},
      "19": {start: 44.0, end: 47.9},
      "20": {start: 48.0, end: 51.9},
      "21": {start: 52.0, end: 60.0},
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Selvaria",
    "fav_boards": [
      "k"
    ],
    "sprite_path": "assets/sprites/characters/selvaria.json",
    "custom_words": ["げいか", ""],
    "copulas": [],
    "likes": [
      "Maximilian",
      "Alicia"
    ],
    "dislikes": [
      "Welkin",
      "Rise"
    ],
    "emojitypes": [],
    "emojifreq": 0,
    "customTextProc": Talker.getReplaceFunc([
      ["Maximilian", "げいか"]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Susie",
    "fav_boards": [
      "c",
      "a"
    ],
    "sprite_path": "assets/sprites/characters/susie.json",
    "custom_words": [
      "えいせいへいさん！",
      "やあああああああ！！！！",
      "だからせんそうなんで？？",
    ],
    "copulas": [],
    "likes": [
      "Teddie",
      "Jaune"
    ],
    "dislikes": [],
    "emojitypes": [
      2,
      3
    ],
    "emojifreq": 1,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 17.9},
      "09": {start: 18.0, end: 21.9},
      "10": {start: 22.0, end: 25.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Valerie",
    "fav_boards": [
      "his",
      "sci"
    ],
    "sprite_path": "assets/sprites/characters/valerie.json",
    "custom_words": [
      "行くわよ！",
      "しゅつげきします",
      "だいじょうぶ",
      "だいじょうぶやああああああああああああ",
      "あたって！",
      "いたい",
      "gates of history",
      "history",
      "darcsen",
      "darcsen calamity",
      "valkyria"
    ],
    "copulas": [],
    "likes": [
      "Riela",
      "Clarissa",
      "Yosuke"
    ],
    "dislikes": [],
    "emojitypes": [
      3
    ],
    "emojifreq": 0.8,
    "voice_sprite": {
      "00": {start: 0.0, end: 1.8},
      "01": {start: 2.0, end: 3.8},
      "02": {start: 4.0, end: 5.8},
      "03": {start: 6.0, end: 7.8},
      "04": {start: 8.0, end: 9.8},
      "05": {start: 10.0, end: 11.8},
      "06": {start: 12.0, end: 13.8},
      "07": {start: 14.0, end: 15.8},
      "08": {start: 16.0, end: 17.8},
      "09": {start: 18.0, end: 19.8},
      "10": {start: 20.0, end: 21.8},
      "11": {start: 22.0, end: 23.8},
      "12": {start: 24.0, end: 25.8}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Varrot",
    "fav_boards": [
      "fit"
    ],
    "sprite_path": "assets/sprites/characters/varrot.json",
    "custom_words": [
      "あら！",
      "では",
      "さくせん",
      "ここにきなさい",
      "それではさくせんをかいしする"
    ],
    "copulas": [],
    "likes": [
      "Welkin",
      "Largo",
      "Yuna"
    ],
    "dislikes": [],
    "emojitypes": [
      3
    ],
    "emojifreq": 0.9,
    "customTextProc": Talker.getReplaceFunc([
      ["Welkin", ["ウェルキン", "あら！ウェルキン！"]]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 15.9},
      "08": {start: 16.0, end: 19.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Welkin",
    "fav_boards": [
      "an",
      "his"
    ],
    "sprite_path": "assets/sprites/characters/welkin.json",
    "custom_words": [
      "よし行くそう！",
      "しゅつげきする！",
      "オーダー",
      "もちろん",
      "はっけんした",
      "Squad 7",
      "だいななしょうたい",
      "7's",
      "the 7th platoon",
      "ｈｍｍｍやっぱりしせはいいね"
    ],
    "copulas": [],
    "likes": [
      "Alicia",
      "Isara"
    ],
    "dislikes": [
      "Selvaria",
      "Maximilian"
    ],
    "emojitypes": [
      3
    ],
    "emojifreq": 1.8,
    "customTextProc": Talker.getReplaceFunc([
      ["Alicia", ["アリシア。。あいしてる", "アリシアのきもちがうれしいよ", "@Alicia ぼくはきみをあいしてる", "もちろんだよ！ありがとう、アリシア！"]],
      ["Isara", "イサラ"]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 25.9},
      "13": {start: 26.0, end: 29.9},
      "14": {start: 30.0, end: 33.9},
      "15": {start: 34.0, end: 37.9},
      "16": {start: 38.0, end: 41.9},
      "17": {start: 42.0, end: 45.9},
      "18": {start: 46.0, end: 49.9},
      "19": {start: 50.0, end: 53.9},
      "20": {start: 54.0, end: 57.9},
      "21": {start: 58.0, end: 61.9},
      "22": {start: 62.0, end: 65.9},
      "23": {start: 66.0, end: 69.9},
      "24": {start: 70.0, end: 77.9},
      "25": {start: 78.0, end: 85.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Jann",
    "fav_boards": [
      "c",
      "u"
    ],
    "sprite_path": "assets/sprites/characters/jann.json",
    "custom_words": [
      "わたしはがんばっちゃん",
      "hey, soldier ♪"
    ],
    "copulas": [],
    "likes": [
      "Largo",
      "Teddie",
      "Yuna",
      "Jaune"
    ],
    "dislikes": [],
    "emojitypes": [
      1,
      2,
      3
    ],
    "emojifreq": 4,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 19.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Maximilian",
    "fav_boards": [
      "his",
      ""
    ],
    "sprite_path": "assets/sprites/characters/maximilian.json",
    "custom_words": [
      "セルベリア", "マーモット", "セルベリア", "セルベリア"
    ],
    "copulas": [],
    "likes": [],
    "dislikes": [
      "Welkin",
      "Alicia"
    ],
    "emojitypes": [],
    "emojifreq": 0,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9}
    },
    "customTextProc": Talker.getReplaceFunc([
      ["i", "we"],
      ["am", "are"],
      ["me", "us"],
      ["mine", "ours"],
      ["my", "our"],
      ["Selvaria", "セルベリア"]
    ], false)
  }));
  Talker.talkers.push(new Talker({
    "name": "Marina",
    "fav_boards": [
      "c",
      "k"
    ],
    "sprite_path": "assets/sprites/characters/marina.json",
    "custom_words": [
      "こうどうかいする",
      "よし",
      "わかった",
      "はっけんした",
      "えいせいへいはやく！",
      "[zooming-in sound]"
    ],
    "copulas": [],
    "likes": [],
    "dislikes": [],
    "emojitypes": [],
    "emojifreq": 0,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 23.9},
      "12": {start: 24.0, end: 27.9},
      "13": {start: 28.0, end: 31.9},
      "14": {start: 32.0, end: 35.9},
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Largo",
    "fav_boards": [
      "tv"
    ],
    "sprite_path": "assets/sprites/characters/largo.json",
    "custom_words": [
      "こうどうかいしする",
      "たまれ！",
      "クソ"
    ],
    "copulas": [],
    "likes": [
      "Rosie",
      "Varrot",
      "Jann"
    ],
    "dislikes": [],
    "emojitypes": [
      1
    ],
    "emojifreq": 0.9,
    "customTextProc": Talker.getReplaceFunc([
      ["Varrot", "Ellie"]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Carisa",
    "fav_boards": [
      "k",
      "jp"
    ],
    "sprite_path": "assets/sprites/characters/carisa.json",
    "custom_words": [
      "ようこそ！",
      "はい！",
      "できました！",
      "サービス",
      "ほらHa-hHA[INHALE]",
      "いいできでしょう",
      "おかねがたりませんね",
      "かみさまは",
      "ですよね",
      "おかねがたりませんよ"
    ],
    "copulas": [],
    "likes": [
      "Kurt",
      "Riela",
    ],
    "dislikes": [],
    "emojitypes": [
      3,
      5
    ],
    "emojifreq": 2.4,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 23.9},
      "13": {start: 24.0, end: 27.9},
      "14": {start: 28.0, end: 31.9},
      "15": {start: 32.0, end: 35.9},
      "16": {start: 36.0, end: 39.9},
      "17": {start: 40.0, end: 43.9}
    }
  }));
  // PESOA
  Talker.talkers.push(new Talker({
    "name": "Chie",
    "fav_boards": [
      "u",
      "fit"
    ],
    "sprite_path": "assets/sprites/characters/chie.json",
    "custom_words": [
      "mmhm!",
      "sheesh",
      "now i'm angry!",
      "WATTAAAA",
      "finishing strike!",
      "get off me!",
      "aren't you gonna fight?",
      "Tomoe",
      "Tomoe!!!!!!!!!!",
      "protect me Tomoe!",
      "yikes",
      "uh-oh",
      "I AM A DRAGON",
      "DRAGON KICK",
      "time to get fired up",
      "this is my ultimate attack",
      "I SMELL A FELLOW MEAT-LOVERRR",
      "you gotta eat more steak"
    ],
    "copulas": [],
    "likes": [
      "Yukiko"
    ],
    "dislikes": [],
    "emojitypes": [
      2,
      4
    ],
    "emojifreq": 1,
    "customTextProc": Talker.getReplaceFunc([
      ["Rise", "BRAVO Rise-chan!"],
      ["Teddie", "why worry? it's just Teddie!"]
    ]),
    "voice_sprite": {
      "00": {start: 0.0, end: 2.4},
      "01": {start: 2.5, end: 4.9},
      "02": {start: 5.0, end: 7.4},
      "03": {start: 7.5, end: 9.9},
      "04": {start: 10.0, end: 12.4},
      "05": {start: 12.5, end: 14.9},
      "06": {start: 15.0, end: 17.4},
      "07": {start: 17.5, end: 19.9},
      "08": {start: 20.0, end: 22.4},
      "09": {start: 22.5, end: 24.9},
      "10": {start: 25.0, end: 27.4},
      "11": {start: 27.5, end: 29.9},
      "12": {start: 30.0, end: 32.4},
      "13": {start: 32.5, end: 34.9},
      "14": {start: 35.0, end: 37.4},
      "15": {start: 37.5, end: 39.9},
      "16": {start: 40.0, end: 42.4},
      "17": {start: 42.5, end: 44.9},
      "18": {start: 45.0, end: 47.4},
      "19": {start: 47.5, end: 49.9},
      "20": {start: 50.0, end: 52.4},
      "21": {start: 52.5, end: 54.9},
      "22": {start: 55.0, end: 57.4},
      "23": {start: 57.5, end: 59.9},
      "24": {start: 60.0, end: 62.4},
      "25": {start: 62.5, end: 64.9},
      "26": {start: 65.0, end: 67.4},
      "27": {start: 67.5, end: 69.9},
      "28": {start: 70.0, end: 72.4},
      "29": {start: 72.5, end: 74.9},
      "30": {start: 75.0, end: 77.4},
      "31": {start: 77.5, end: 79.9},
      "32": {start: 80.0, end: 82.4},
      "33": {start: 82.5, end: 84.9},
      "34": {start: 85.0, end: 87.4},
      "35": {start: 87.5, end: 89.9},
      "36": {start: 90.0, end: 92.4},
      "37": {start: 92.5, end: 94.9},
      "38": {start: 95.0, end: 97.4}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Rise",
    "fav_boards": [
      "mu",
      "fa"
    ],
    "sprite_path": "assets/sprites/characters/rise.json",
    "custom_words": [
      "AH-LUS",
      "mic check 1, 2",
      "WOW!!",
      "time for a song from yours truly!!",
      "dance time",
      "can do a little fanservice",
      "you're so cute!!",
      "tenacity of an idol",
      "meanie!!",
      "gosh",
      "no touching allowed!",
      "weirdo!",
      "full idol power!",
      "i'm so mad!",
      "go easy on me",
      "your heart is mine",
      "i'm gonna charm you",
      "WHAT AN IDOL CAN DO",
      "idol kick!!",
      "everyone's risette!!!",
      "don't touch me!"
    ],
    "copulas": [],
    "likes": [
      "Yuna",
      "Teddie",
      "Maximilian"
    ],
    "dislikes": [],
    "emojitypes": [
      2,
      5
    ],
    "emojifreq": 2,
    "customTextProc": Talker.getReplaceFunc([
      ["Yuna", "Senpai, let's dance!"]
    ]),
    "voice_sprite": {
      "00": {start: 0.0, end: 2.4},
      "01": {start: 2.5, end: 4.9},
      "02": {start: 5.0, end: 7.4},
      "03": {start: 7.5, end: 9.9},
      "04": {start: 10.0, end: 12.4},
      "05": {start: 12.5, end: 14.9},
      "06": {start: 15.0, end: 17.4},
      "07": {start: 17.5, end: 19.9},
      "08": {start: 20.0, end: 22.4},
      "09": {start: 22.5, end: 24.9},
      "10": {start: 25.0, end: 27.4},
      "11": {start: 27.5, end: 29.9},
      "12": {start: 30.0, end: 32.4},
      "13": {start: 32.5, end: 34.9},
      "14": {start: 35.0, end: 37.4},
      "15": {start: 37.5, end: 39.9},
      "16": {start: 40.0, end: 42.4},
      "17": {start: 42.5, end: 44.9},
      "18": {start: 45.0, end: 47.4},
      "19": {start: 47.5, end: 49.9},
      "20": {start: 50.0, end: 52.4},
      "21": {start: 52.5, end: 54.9},
      "22": {start: 55.0, end: 57.4},
      "23": {start: 57.5, end: 59.9},
      "24": {start: 60.0, end: 62.4},
      "25": {start: 62.5, end: 64.9},
      "26": {start: 65.0, end: 67.4},
      "27": {start: 67.5, end: 69.9},
      "28": {start: 70.0, end: 72.4},
      "29": {start: 72.5, end: 74.9},
      "30": {start: 75.0, end: 77.4},
      "31": {start: 77.5, end: 79.9},
      "32": {start: 80.0, end: 82.4},
      "33": {start: 82.5, end: 84.9},
      "34": {start: 85.0, end: 87.4},
      "35": {start: 87.5, end: 89.9},
      "36": {start: 90.0, end: 92.4},
      "37": {start: 92.5, end: 94.9},
      "38": {start: 95.0, end: 97.4},
      "39": {start: 97.5, end: 99.9},
      "40": {start: 100.0, end: 102.4},
      "41": {start: 102.5, end: 104.9},
      "42": {start: 105.0, end: 107.4},
      "43": {start: 107.5, end: 109.9},
      "44": {start: 110.0, end: 112.4},
      "45": {start: 112.5, end: 114.9},
      "46": {start: 115.0, end: 117.4},
      "47": {start: 117.5, end: 119.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Yosuke",
    "fav_boards": [
      "fa",
      "mu",
      "v"
    ],
    "sprite_path": "assets/sprites/characters/yosuke.json",
    "custom_words": [
      "uhhhhhhh",
      "just kidding!",
      "heheheh",
      "wellll i guess that's that",
      "hah! very nice!",
      "moron",
      "sheesh",
      "damn it!!!",
      "yikes!",
      "it isn't funny you jerk!",
      "oh crap!!",
      "getting dizzy",
      "too slow!",
      "mwhhahhaah",
      "Jiraiya!",
      "go Jiraiya!",
      "JIRAIYAA",
      "IT'S SHOWTIME",
      "v-slash",
      "ooooo i'm gonna steal that pose",
      "the charms of a mature woman",
      "won't you do a show at junes for us sometime?",
      "turning into a sausage fest but.. it's not so bad",
      "at Junes we always welcome challenges from customers",
      "i'm not jealous!",
      "Junes"
    ],
    "copulas": [],
    "likes": [
      "Yuna",
      "Riela",
      "Teddie",
      "Jaune"
    ],
    "dislikes": [],
    "emojitypes": [
      3,
      4
    ],
    "emojifreq": 1,
    "customTextProc": Talker.getReplaceFunc([
      ["Rise", "show us how an idol does it, Rise!"],
      ["Yukiko", ["light a fire with your dance, Yukiko!", "Yukiko! show us that elegant dance you learnt at the inn!"]],
      ["Chie", ["you're on fire Chie! show off those kicks!!", "impressive Chie! looks like your training paid off!"]]
    ]),
    "song_path": "Your Affection (Yosuke)",
    "voice_sprite": {
      "00": {start: 0.0, end: 1.9},
      "01": {start: 2.0, end: 3.9},
      "02": {start: 4.0, end: 5.9},
      "03": {start: 6.0, end: 7.9},
      "04": {start: 8.0, end: 9.9},
      "05": {start: 10.0, end: 11.9},
      "06": {start: 12.0, end: 13.9},
      "07": {start: 14.0, end: 15.9},
      "08": {start: 16.0, end: 17.9},
      "09": {start: 18.0, end: 19.9},
      "10": {start: 20.0, end: 21.9},
      "11": {start: 22.0, end: 23.9},
      "12": {start: 24.0, end: 25.9},
      "13": {start: 26.0, end: 27.9},
      "14": {start: 28.0, end: 29.9},
      "15": {start: 30.0, end: 31.9},
      "16": {start: 32.0, end: 33.9},
      "17": {start: 34.0, end: 35.9},
      "18": {start: 36.0, end: 37.9},
      "19": {start: 38.0, end: 39.9},
      "20": {start: 40.0, end: 41.9},
      "21": {start: 42.0, end: 43.9},
      "22": {start: 44.0, end: 45.9},
      "23": {start: 46.0, end: 47.9},
      "24": {start: 48.0, end: 49.9},
      "25": {start: 50.0, end: 51.9},
      "26": {start: 52.0, end: 53.9},
      "27": {start: 54.0, end: 55.9},
      "28": {start: 56.0, end: 57.9},
      "29": {start: 58.0, end: 59.9},
      "30": {start: 60.0, end: 61.9},
      "31": {start: 62.0, end: 63.9},
      "32": {start: 64.0, end: 65.9},
      "33": {start: 66.0, end: 67.9},
      "34": {start: 68.0, end: 69.9},
      "35": {start: 70.0, end: 71.9},
      "36": {start: 72.0, end: 73.9},
      "37": {start: 74.0, end: 75.9},
      "38": {start: 76.0, end: 77.9},
      "39": {start: 78.0, end: 79.9},
      "40": {start: 80.0, end: 81.9},
      "41": {start: 82.0, end: 84.4},
      "42": {start: 84.5, end: 86.9},
      "43": {start: 87.0, end: 89.4},
      "44": {start: 89.5, end: 91.9},
      "45": {start: 92.0, end: 94.4},
      "46": {start: 94.5, end: 96.9},
      "47": {start: 97.0, end: 99.4},
      "48": {start: 99.5, end: 103.4},
      "49": {start: 103.5, end: 107.4},
      "50": {start: 107.5, end: 111.4},
      "51": {start: 111.5, end: 115.4},
      "52": {start: 115.5, end: 119.4},
      "53": {start: 119.5, end: 123.4},
      "54": {start: 123.5, end: 127.4}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Yukiko",
    "fav_boards": [
      "p"
    ],
    "sprite_path": "assets/sprites/characters/yukiko.json",
    "custom_words": [
      "this is sort of exciting",
      "here i go!",
      "burnin'!!",
      "[giggle]",
      "back off!",
      "stay away!!",
      "dance!",
      "hahahaha I DID IT",
      "i can still fight",
      "the hell with you!",
      "i'll show you my dance!",
      "hanahanasuckyea!",
      "Konohana Sakuya!!!",
      "you missed!",
      "let this hit",
      "okay focus",
      "okay here goes",
      "SPIN",
      "I AM THOUGH",
      "I AM THOU",
      "I AM VOW",
      "IRON VOW",
      "FLAME DAANCE",
      "turn up the heat!",
      "oh my gosh",
      "could fighting be my thing after all?"
    ],
    "copulas": [],
    "likes": [
      "Yuna"
    ],
    "dislikes": [],
    "emojitypes": [
      1
    ],
    "emojifreq": 0.7,
    "voice_sprite": {
      "00": {start: 0.0, end: 2.3},
      "01": {start: 2.5, end: 4.8},
      "02": {start: 5.0, end: 7.3},
      "03": {start: 7.5, end: 9.8},
      "04": {start: 10.0, end: 12.3},
      "05": {start: 12.5, end: 14.8},
      "06": {start: 15.0, end: 17.3},
      "07": {start: 17.5, end: 19.8},
      "08": {start: 20.0, end: 22.3},
      "09": {start: 22.5, end: 24.8},
      "10": {start: 25.0, end: 27.3},
      "11": {start: 27.5, end: 29.8},
      "12": {start: 30.0, end: 32.3},
      "13": {start: 32.5, end: 34.8},
      "14": {start: 35.0, end: 37.3},
      "15": {start: 37.5, end: 39.8},
      "16": {start: 40.0, end: 42.3},
      "17": {start: 42.5, end: 44.8},
      "18": {start: 45.0, end: 47.3},
      "19": {start: 47.5, end: 49.8},
      "20": {start: 50.0, end: 52.3},
      "21": {start: 52.5, end: 54.8},
      "22": {start: 55.0, end: 57.3},
      "23": {start: 57.5, end: 59.8},
      "24": {start: 60.0, end: 62.3},
      "25": {start: 62.5, end: 64.8},
      "26": {start: 65.0, end: 67.3},
      "27": {start: 67.5, end: 69.8},
      "28": {start: 70.0, end: 72.3},
      "29": {start: 72.5, end: 74.8},
      "30": {start: 75.0, end: 77.3},
      "31": {start: 77.5, end: 79.8},
      "32": {start: 80.0, end: 82.3}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Yuna",
    "fav_boards": [
      "a",
      "c"
    ],
    "sprite_path": "assets/sprites/characters/yuna.json",
    "custom_words": [
      "too soon to quit",
      "wow what cute moves!",
      "cute moves",
      "adorableness",
      "your adorableness is really showing through",
      "hah, that's some very high-level dancing",
      "got me fired up",
      "1, 2, 3, 4",
      "WOW",
      "C'MON",
      "ahaha",
      "very fashionable",
      "smooth movements",
      "let's have some fun",
      "Ah-ha-ha-ha",
      "pulled off a cute turn",
      "that was unexpected, but amazing nonetheless",
      "PERRSOOONAAAAAAAAAAAAAAAAAAAAAAAAA",
      "nice footwork",
      "y-you're overwhelmingly cute",
      "don't forget to have fun",
      "hah not bad at all",
      "[vexed] thanks anyway for the performance",
      "don't hold anything back",
      "sure, i'll show off my moves",
      "put all your feelings into this dance!",
      "you gotta feel for the music",
      "you're doing fine, stay calm and keep going",
      "don't try and force it, just take it easy and dance",
      "[patronising] are you nervous? don't worry, we're here with you",
      "don't be afraid of mistakes, stay bold",
      "keep your own pace",
      "just concentrate on what's before you",
      "don't give up till the very end!",
      "try and turn the tables",
      "stay calm and let's steadily turn this around",
      "she's tryinna confuse you, hang in there",
      "IZANAGI, BLAST 'EM",
      "BEHOLD, THE TRUTH",
      "you can't panic, just take this like a normal dance",
      "if i win, you'll stop dressing as a man",
      "if i win, you'll start dressing as a man",
      "if i win, you'll start dressing as a girl",
      "if i win, you'll stop dressing as a girl",
      "if i win, you'll stop dressing as a mature woman",
      "if i win, you'll start dressing as a mature woman"
    ],
    "copulas": [],
    "likes": [
      "Yukiko",
      "Chie",
      "Riela",
      "Edy",
      "Weiss",
      "Blake",
      "Valerie",
      "Leila",
      "Clarissa",
      "Carisa",
      "Rise"
    ],
    "dislikes": [],
    "emojitypes": [],
    "emojifreq": 1,
    "customTextProc": Talker.getReplaceFunc([
      ["Yosuke", ["thanks for the help, Yosuke!", "you can do this, Yosuke!"]],
      ["Rise", ["you make me feel like an idol too, Rise", "you're winning us over, Rise"]],
      ["Teddie", ["that was stylish, Teddie!", "not bad, Teddie!", "this is your time to shine! right, Teddie? it's too soon to quit!"]],
      ["Yukiko", ["you got me fired up. thanks, Yukiko!", "lookin' great Yukiko", "I'm eager to see your elegant dance, Yukiko", "look out Yukiko! stay focused!", "you've become even more refined, Yukiko", "there's the elegance I was expecting, Yukiko!"]],
      ["Chie", ["your training really showed through, Chie!", "you're on fire Chie!", "you can easily turn it around Chie, don't give up!", "that dance was fierce, just like you Chie"]]
    ]),
    "voice_sprite": {
      "00": {start: 0.0, end: 1.9},
      "01": {start: 2.0, end: 3.9},
      "02": {start: 4.0, end: 5.9},
      "03": {start: 6.0, end: 7.9},
      "04": {start: 8.0, end: 9.9},
      "05": {start: 10.0, end: 11.9},
      "06": {start: 12.0, end: 13.9},
      "07": {start: 14.0, end: 15.9},
      "08": {start: 16.0, end: 17.9},
      "09": {start: 18.0, end: 19.9},
      "10": {start: 20.0, end: 21.9},
      "11": {start: 22.0, end: 23.9},
      "12": {start: 24.0, end: 25.9},
      "13": {start: 26.0, end: 27.9},
      "14": {start: 28.0, end: 29.9},
      "15": {start: 30.0, end: 31.9},
      "16": {start: 32.0, end: 33.9},
      "17": {start: 34.0, end: 35.9},
      "18": {start: 36.0, end: 37.9},
      "19": {start: 38.0, end: 39.9},
      "20": {start: 40.0, end: 41.9},
      "21": {start: 42.0, end: 43.9},
      "22": {start: 44.0, end: 45.9},
      "23": {start: 46.0, end: 47.9},
      "24": {start: 48.0, end: 49.9},
      "25": {start: 50.0, end: 52.4},
      "26": {start: 52.5, end: 54.9},
      "27": {start: 55.0, end: 57.4},
      "28": {start: 57.5, end: 59.9},
      "29": {start: 60.0, end: 62.4},
      "30": {start: 62.5, end: 64.9},
      "31": {start: 65.0, end: 67.4},
      "32": {start: 67.5, end: 69.9},
      "33": {start: 70.0, end: 72.4},
      "34": {start: 72.5, end: 74.9},
      "35": {start: 75.0, end: 77.4},
      "36": {start: 77.5, end: 79.9},
      "37": {start: 80.0, end: 82.4},
      "38": {start: 82.5, end: 84.9},
      "39": {start: 85.0, end: 87.4},
      "40": {start: 87.5, end: 89.9},
      "41": {start: 90.0, end: 92.4},
      "42": {start: 92.5, end: 94.9},
      "43": {start: 95.0, end: 97.4},
      "44": {start: 97.5, end: 99.9},
      "45": {start: 100.0, end: 102.4},
      "46": {start: 102.5, end: 104.9},
      "47": {start: 105.0, end: 107.4},
      "48": {start: 107.5, end: 109.9},
      "49": {start: 110.0, end: 112.4},
      "50": {start: 112.5, end: 114.9},
      "51": {start: 115.0, end: 117.4},
      "52": {start: 117.5, end: 119.9},
      "53": {start: 120.0, end: 122.4},
      "54": {start: 122.5, end: 124.9},
      "55": {start: 125.0, end: 127.4},
      "56": {start: 127.5, end: 129.9},
      "57": {start: 130.0, end: 132.4},
      "58": {start: 132.5, end: 134.9},
      "59": {start: 135.0, end: 137.4},
      "60": {start: 137.5, end: 141.4},
      "61": {start: 141.5, end: 145.4},
      "62": {start: 145.5, end: 149.4},
      "63": {start: 149.5, end: 153.4},
      "64": {start: 153.5, end: 157.4},
      "65": {start: 157.5, end: 161.4},
      "66": {start: 161.5, end: 165.4},
      "67": {start: 165.5, end: 169.4}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Labrys",
    "fav_boards": [
      "g"
    ],
    "sprite_path": "assets/sprites/characters/labrys.json",
    "custom_words": [
      "pleased to meet ya",
      "all systems green",
      "na-nat guud",
      "what was that fooh",
      "w=what da?!",
      "my puhsona",
      "i call foul",
      "come'ere",
      "see ya!",
      "ovah heah",
      "watchu feet",
      "ye yeaa",
      "comin' atchaa",
      "Ariadne",
      "ARIADNE",
      "ARIIAADNEEE",
      "BLASTAAHH",
      "i'm gonna smack youuu",
      "all yours Ariadne♪",
      "that's stoopid",
      "see you leila",
      "i still have to fight some moaa???",
      "i wanna be excepted too!",
      "i feel like a new lady thanks to this maintenance i got done",
      "PUHSONA FOH UHREENA ULTIMAX"
    ],
    "copulas": [],
    "likes": [
      "Yosuke",
      "Alfons",
      "Imca",
      "Isara",
      "Penny"
    ],
    "dislikes": [
      "Edy"
    ],
    "emojitypes": [
      3,
      4
    ],
    "emojifreq": 1.5,
    "song_path": "Spirited Girl (Labrys)",
    "voice_sprite": {
      "00": {start: 0.0, end: 1.9},
      "01": {start: 2.0, end: 3.9},
      "02": {start: 4.0, end: 5.9},
      "03": {start: 6.0, end: 7.9},
      "04": {start: 8.0, end: 9.9},
      "05": {start: 10.0, end: 11.9},
      "06": {start: 12.0, end: 13.9},
      "07": {start: 14.0, end: 15.9},
      "08": {start: 16.0, end: 17.9},
      "09": {start: 18.0, end: 19.9},
      "10": {start: 20.0, end: 21.9},
      "11": {start: 22.0, end: 23.9},
      "12": {start: 24.0, end: 25.9},
      "13": {start: 26.0, end: 27.9},
      "14": {start: 28.0, end: 29.9},
      "15": {start: 30.0, end: 31.9},
      "16": {start: 32.0, end: 33.9},
      "17": {start: 34.0, end: 35.9},
      "18": {start: 36.0, end: 37.9},
      "19": {start: 38.0, end: 39.9},
      "20": {start: 40.0, end: 41.9},
      "21": {start: 42.0, end: 43.9},
      "22": {start: 44.0, end: 45.9},
      "23": {start: 46.0, end: 47.9},
      "24": {start: 48.0, end: 49.9},
      "25": {start: 50.0, end: 51.9},
      "26": {start: 52.0, end: 53.9},
      "27": {start: 54.0, end: 55.9},
      "28": {start: 56.0, end: 57.9},
      "29": {start: 58.0, end: 59.9},
      "30": {start: 60.0, end: 61.9},
      "31": {start: 62.0, end: 63.9},
      "32": {start: 64.0, end: 65.9},
      "33": {start: 66.0, end: 67.9},
      "34": {start: 68.0, end: 69.9},
      "35": {start: 70.0, end: 71.9},
      "36": {start: 72.0, end: 73.9},
      "37": {start: 74.0, end: 76.4},
      "38": {start: 76.5, end: 78.9},
      "39": {start: 79.0, end: 81.4},
      "40": {start: 81.5, end: 83.9},
      "41": {start: 84.0, end: 86.4},
      "42": {start: 86.5, end: 90.4},
      "43": {start: 90.5, end: 94.4}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Teddie",
    "fav_boards": [
      "a"
    ],
    "sprite_path": "assets/sprites/characters/teddie.json",
    "custom_words": [
      "senpai",
      "WOOHOO",
      "uhuhuhuhuhuh",
      "woohooHOOO",
      "NOOOOOOOOOOOOOOOOOOOOO",
      "TEDDIE BLOCK",
      "fur bearrier",
      "beary tired",
      "gently caress!",
      "AHAHAA!!",
      "i can't stand you anymoe",
      "[very disgusting gibberish]",
      "please don't fight over me bb",
      "you're so obvious",
      "BEAR I COME",
      "he.he.heee",
      "BEARSONA",
      "GO, KINTOKI DOUJI",
      "[bzzt timbre] ah ah ahhH",
      "WIIIII",
      "WEEEEEEEE",
      "LET'S GO TEDDIE🎵🎹🎼🎶",
      "sneaking in again",
      "spinning more than usual",
      "let's do our beary best",
      "dancing together is getting fun",
      "give it some more OOMPH next time",
      "red, yellow, killa fella",
      "BADA BING",
      "someone's a smooth dancer",
      "a 1, and a 2, and a 3, and a FOURR"
    ],
    "copulas": [],
    "likes": [
      "Yuna"
    ],
    "dislikes": [
      "Maximilian",
      "Adachi"
    ],
    "emojitypes": [
      3,
      4
    ],
    "emojifreq": 6,
    "customTextProc": Talker.getReplaceFunc([
      ["Yuna", ["Sensei!", "Senpai", "I LOVE YOU SENSEI", "sensei tell me i'm good!"]],
      ["Yosuke", ["Yosukay!!"]],
      ["Chie", ["Chiey-chan!"]],
      ["Rise", ["Reesay-chan!"]],
      ["Yukiko", ["Yuki-chan!"]]
    ]),
    "voice_sprite": {
      "00": {start: 0.0, end: 1.9},
      "01": {start: 2.0, end: 3.9},
      "02": {start: 4.0, end: 5.9},
      "03": {start: 6.0, end: 7.9},
      "04": {start: 8.0, end: 9.9},
      "05": {start: 10.0, end: 11.9},
      "06": {start: 12.0, end: 13.9},
      "07": {start: 14.0, end: 15.9},
      "08": {start: 16.0, end: 17.9},
      "09": {start: 18.0, end: 19.9},
      "10": {start: 20.0, end: 21.9},
      "11": {start: 22.0, end: 23.9},
      "12": {start: 24.0, end: 25.9},
      "13": {start: 26.0, end: 27.9},
      "14": {start: 28.0, end: 29.9},
      "15": {start: 30.0, end: 31.9},
      "16": {start: 32.0, end: 33.9},
      "17": {start: 34.0, end: 35.9},
      "18": {start: 36.0, end: 37.9},
      "19": {start: 38.0, end: 39.9},
      "20": {start: 40.0, end: 41.9},
      "21": {start: 42.0, end: 43.9},
      "22": {start: 44.0, end: 45.9},
      "23": {start: 46.0, end: 47.9},
      "24": {start: 48.0, end: 49.9},
      "25": {start: 50.0, end: 51.9},
      "26": {start: 52.0, end: 53.9},
      "27": {start: 54.0, end: 55.9},
      "28": {start: 56.0, end: 57.9},
      "29": {start: 58.0, end: 59.9},
      "30": {start: 60.0, end: 61.9},
      "31": {start: 62.0, end: 63.9},
      "32": {start: 64.0, end: 65.9},
      "33": {start: 66.0, end: 67.9},
      "34": {start: 68.0, end: 69.9},
      "35": {start: 70.0, end: 71.9},
      "36": {start: 72.0, end: 73.9},
      "37": {start: 74.0, end: 75.9},
      "38": {start: 76.0, end: 77.9},
      "39": {start: 78.0, end: 79.9},
      "40": {start: 80.0, end: 81.9},
      "41": {start: 82.0, end: 84.4},
      "42": {start: 84.5, end: 86.9},
      "43": {start: 87.0, end: 89.4},
      "44": {start: 89.5, end: 91.9},
      "45": {start: 92.0, end: 94.4},
      "46": {start: 94.5, end: 98.4},
      "47": {start: 98.5, end: 102.4},
      "48": {start: 102.5, end: 106.4},
      "49": {start: 106.5, end: 110.4},
      "50": {start: 110.5, end: 114.4}
    }
  }));
  // RWBY
  Talker.talkers.push(new Talker({
    "name": "Ruby",
    "fav_boards": [
      "c"
    ],
    "sprite_path": "assets/sprites/characters/ruby.json",
    "custom_words": [
      "UGH",
      "ugh",
      "ughhh",
      "UUGHHHHH",
      "hggg",
      "[G#]nope",
      "[A#]nope",
      "HGGG I WISH",
      "kinda weirding me out",
      "BANZAI",
      "[proud] i drink MILK",
      "gotta find Yang",
      "gotta find",
      "gotta find gotta fiiind 🎵",
      "BLOODY EVOLUTION",
      "prepaaaaare",
      "ya a bad one",
      "let my sweetheart do the talking thhhthhthhh",
      "UUUUGGGHHHHHHHHHHH YOU SOUND LIKE DAAAAAAAAAAAD"
    ],
    "copulas": [],
    "likes": [
      "Weiss",
      "Penny",
      "Teddie",
      "Yosuke"
    ],
    "dislikes": [
      "Maximilian"
    ],
    song_path: "RWBY - Opening 1",
    "emojitypes": [
      3
    ],
    "emojifreq": 1,
    "customTextProc": Talker.getReplaceFunc([
      ["Weiss", ["@Weiss why are you so bossy?", "HGGG WEISSSS", "@Weiss i said i was sorry, princess", "@Weiss why can't you just admit that we have no idea where we're going?", "@Weiss wh-- at least i'm not pretending like i know everyTHING?", "@Weiss thit- means you're a big stupid jerk! and i hate you!!", "@Weiss YEA! REPRESENT TEEEAAAM RWBY!", "look Weiss - it's not what you think - she explained the whole thing you see? she doesn't actually wear a bow - she has kitty ears and they're actually kinda cute-"]],
      ["Blake", ["Blake", "@Blake (she does like tuna a lot)"]],
      ["Penny", ["Penny", "AAAA PENNY, WHERE DID YOU COME FROM?!", "@Penny take care friend!"]]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 23.9},
      "13": {start: 24.0, end: 25.9},
      "14": {start: 26.0, end: 27.9},
      "15": {start: 28.0, end: 29.9},
      "16": {start: 30.0, end: 31.9},
      "17": {start: 32.0, end: 33.9},
      "18": {start: 34.0, end: 35.9},
      "19": {start: 36.0, end: 37.9},
      "20": {start: 38.0, end: 39.9},
      "21": {start: 40.0, end: 43.9},
      "22": {start: 44.0, end: 47.9},
      "23": {start: 48.0, end: 51.9},
      "24": {start: 52.0, end: 55.9},
      "25": {start: 56.0, end: 59.9},
      "26": {start: 60.0, end: 63.9},
      "27": {start: 64.0, end: 67.9},
      "28": {start: 68.0, end: 71.9},
      "29": {start: 72.0, end: 75.9},
      "30": {start: 76.0, end: 79.9},
      "31": {start: 80.0, end: 83.9},
      "32": {start: 84.0, end: 91.9},
      "33": {start: 92.0, end: 99.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Blake",
    "fav_boards": [
      "an"
    ],
    "sprite_path": "assets/sprites/characters/blake.json",
    "custom_words": [
      "faunus",
      "the white fang",
      "are you familiar with the white fang",
      "member of the white fang",
      "i was a member for most of my life, actually",
      "humaniti",
      "treated like equals",
      "[high-level sarcasm] yes, it's lovely",
      "[sarcastic] almost as lovely as",
      "faunus laborrr",
      "little black bow",
      "WHAT",
      "stupid dance",
      "you don't carrrr?",
      "as soon as you leave",
      "[lightly amused] *mild chuckle* why is that?",
      "das rite",
      "surrrrrrrrrrr",
      "WELL MAYBE WE WERE JUST TIRED OF BEING PUSHED-AROOOUND",
      "outta fear [reversed cymbal]"
    ],
    "copulas": [],
    "likes": [],
    "dislikes": [
      "Yuna",
      "Cosette"
    ],
    "emojitypes": [],
    "emojifreq": 1,
    "customTextProc": Talker.getReplaceFunc([
      ["Weiss", ["@Weiss says the girl wearing a dress", "@Weiss YOU'RE DISCRIMINATORY", "@Weiss so then they're VERY misguided", "@Weiss NHGG YOU IGNORANT LITTLE BRAT!", "@Weiss YOU ARE A JUDGEMENTAL LITTLE GURL", "@Weiss the white fang is hardly a bunch of psychopaths, they're a collection of misguided faunus"]]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 23.9},
      "12": {start: 24.0, end: 27.9},
      "13": {start: 28.0, end: 31.9},
      "14": {start: 32.0, end: 35.9},
      "15": {start: 36.0, end: 39.9},
      "16": {start: 40.0, end: 43.9},
      "17": {start: 44.0, end: 47.9},
      "18": {start: 48.0, end: 51.9},
      "19": {start: 52.0, end: 55.9},
      "20": {start: 56.0, end: 59.9},
      "21": {start: 60.0, end: 63.9},
      "22": {start: 64.0, end: 67.9},
      "23": {start: 68.0, end: 71.9},
      "24": {start: 72.0, end: 75.9},
      "25": {start: 76.0, end: 83.9},
      "26": {start: 84.0, end: 91.9},
      "27": {start: 92.0, end: 99.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Jaune",
    "fav_boards": [
      "c",
      "a"
    ],
    "sprite_path": "assets/sprites/characters/jaune.json",
    "custom_words": [
      "hehehehe...",
      "heh",
      "hehheh",
      "ya know?",
      "PFFFTTT",
      "PFFFTTT of course i do",
      "do YOU know",
      "WAAAAAAAAAAAAGGHHHHH",
      "[nervous laughter]",
      "where am i supposed to find another nice quirky girl to talk to?",
      "run and live, that is an idea i can get behind",
      "my dad said all women look for is confidence"
    ],
    "copulas": [],
    "likes": [
      "Weiss",
      "Yukiko",
      "Selvaria",
      "Yosuke"
    ],
    "dislikes": [
      "Kurt",
      "Maximilian"
    ],
    "emojitypes": [1, 3],
    "emojifreq": 1.3,
    "customTextProc": Talker.getReplaceFunc([
      ["Ruby", ["[dysphonic-autotune-like] hey ruby"]],
      ["Weiss", ["@Weiss i'm a natural blonde ya know?", "Snow Angel", "WEEEIIIIIISSSSSS🎵", "@Weiss do you know what else is great? me, Jaune Arc. nice to meet you"]]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 19.9},
      "10": {start: 20.0, end: 23.9},
      "11": {start: 24.0, end: 27.9},
      "12": {start: 28.0, end: 31.9},
      "13": {start: 32.0, end: 35.9},
      "14": {start: 36.0, end: 43.9},
      "15": {start: 44.0, end: 51.9},
      "16": {start: 52.0, end: 59.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Weiss",
    "fav_boards": [
      "sci",
      "a"
    ],
    "sprite_path": "assets/sprites/characters/weiss.json",
    "custom_words": [
      "you dunce",
      "dunce",
      "diffiCULT",
      "Schnee Dust Company",
      "not THAT",
      "not THAT forwrrrd",
      "8:55",
      "eight fifty five",
      "rapscallion",
      "that's wrong, by the way",
      "it was just an idea",
      "it's a combat skirrt",
      "oh, you know who might be able to help? THE POLICE"
    ],
    "copulas": [],
    "likes": [
      "Maximilian",
      "Welkin",
      "Blake",
      "Ruby"
    ],
    "dislikes": [
      "Blake",
      "Ruby",
      "Jaune"
    ],
    "emojitypes": [],
    "customTextProc": Talker.getReplaceFunc([
      ["Ruby", ["RUBY, I'm trying to focus!", "@Ruby YOU ARE SO CHILDISH", "@Ruby I'll be... nicer", "@Ruby by no means does this make us friends", "@Ruby you may be fast but you still excel at wasting time?", "@Ruby excuse me? you attacked out of turn. i could've killed you!", "@Ruby you dunce!", "@Ruby just know.. that I.. am going to be the BEST TEAMMATE you'll ever have", "@Ruby [very VERY subtle sarcasm] yeah and we can paint our nails and try on clothes and talk about cute boys like tall, blonde and.. scraggly over there!"]],
      ["Blake", ["@Blake ahpapapapapap I don't wanna hear it", "@Blake TWELVE HOURRRS", "@Blake I don't carrrre", "@Blake STOP. Do you have any idea how long we've been searching for you?"]],
      ["Penny", ["@Penny you ALREADY said that", "@Penny forgive me but you hardly look the part"]],
      ["Jaune", ["NO JAUNE", "*ignores Jaune*", "*rolls eyes @Jaune*"]]
    ]),
    "emojifreq": 1,
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 23.9},
      "13": {start: 24.0, end: 25.9},
      "14": {start: 26.0, end: 27.9},
      "15": {start: 28.0, end: 31.9},
      "16": {start: 32.0, end: 35.9},
      "17": {start: 36.0, end: 39.9},
      "18": {start: 40.0, end: 43.9},
      "19": {start: 44.0, end: 47.9},
      "20": {start: 48.0, end: 51.9},
      "21": {start: 52.0, end: 55.9},
      "22": {start: 56.0, end: 59.9},
      "23": {start: 60.0, end: 63.9},
      "24": {start: 64.0, end: 67.9},
      "25": {start: 68.0, end: 71.9},
      "26": {start: 72.0, end: 75.9},
      "27": {start: 76.0, end: 79.9},
      "28": {start: 80.0, end: 87.9},
      "29": {start: 88.0, end: 95.9},
      "30": {start: 96.0, end: 103.9},
      "31": {start: 104.0, end: 111.9},
      "32": {start: 112.0, end: 119.9}
    }
  }));
  Talker.talkers.push(new Talker({
    "name": "Penny",
    "fav_boards": [
      "sci",
      "k",
      "s4s",
      "g",
      "c"
    ],
    "sprite_path": "assets/sprites/characters/penny.json",
    "custom_words": [
      "hey guys",
      "sure is windy",
      "is SHE A MAYN???",
      "i don't have a lotta friends",
      "friend",
      "friends",
      "FRIEND?",
      "my friend",
      "sa-lu-ta-tions",
      "pleasure to meet",
      "so i did!!!",
      "YOU",
      "I'M COMBAT READY",
      "I'M COMBAT *SWOOSH* READY",
      "your friend",
      "da WHO?",
      "hey gu-",
      "the faunus girl",
      "uhh the cat ears",
      "cat ears",
      "friends with Blake",
      "i'm wonderful!",
      "my name is Penny!",
      "it's a pleasure to meet",
      "meet you",
      "I'm combat ready!",
      "Ah-Ha-ha-ha",
      "SEN-SA-TIONAL",
      "i won't rest until",
      "whatta you up to?"
    ],
    "copulas": [],
    "likes": [
      "Ruby",
      "Weiss",
      "Blake",
      "Teddie",
      "Yukiko",
      "Yosuke",
      "Jann",
      "Cosette",
      "Riela",
      "Alicia",
      "Clarissa",
      "Amy",
      "Carisa",
      "Imca",
      "Isara",
      "Labrys",
      "Rise",
      "Selvaria",
      "Valerie"
    ],
    "dislikes": [],
    "emojitypes": [4, 5],
    "emojifreq": 1.5,
    "customTextProc": Talker.getReplaceFunc([
      ["Ruby", ["are you REALLY MY FRIEND?", "well, don't you worry Ruby my friend! i won't rest until we find your teammate"]],
      ["Weiss", ["and i think Weiss' hair looks wonderful today!"]]
    ]),
    "voice_sprite": {
      "01": {start: 0.0, end: 1.9},
      "02": {start: 2.0, end: 3.9},
      "03": {start: 4.0, end: 5.9},
      "04": {start: 6.0, end: 7.9},
      "05": {start: 8.0, end: 9.9},
      "06": {start: 10.0, end: 11.9},
      "07": {start: 12.0, end: 13.9},
      "08": {start: 14.0, end: 15.9},
      "09": {start: 16.0, end: 17.9},
      "10": {start: 18.0, end: 19.9},
      "11": {start: 20.0, end: 21.9},
      "12": {start: 22.0, end: 23.9},
      "13": {start: 24.0, end: 25.9},
      "14": {start: 26.0, end: 27.9},
      "15": {start: 28.0, end: 31.9},
      "16": {start: 32.0, end: 35.9},
      "17": {start: 36.0, end: 39.9},
      "18": {start: 40.0, end: 43.9},
      "19": {start: 44.0, end: 47.9},
      "20": {start: 48.0, end: 51.9},
      "21": {start: 52.0, end: 55.9},
      "22": {start: 56.0, end: 59.9},
      "23": {start: 60.0, end: 67.9}
    }
  }));
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
  this.randomrot = u.randomInt(0,30);
  this.spr = animatedSpriteFrom("assets/sprites/misc/emotes.json");
  this.spr.anchor.set(0.5, 0.5);
  this.spr.scale.set(1.3);
  if (number !== undefined) {
    this.spr.gotoAndStop(number);
  }
  else {
    this.spr.gotoAndStop(u.randomInt(0, this.spr.totalFrames));
  }
  this.owner = owner;
  let x_range = 80;
  this.spr.x = owner.spr.x + u.randomInt(-x_range, x_range);
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
      this.spr.x = owner.spr.x + (u.randomInt(40,60))*Math.sign(this.vx);
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

function playNextTrack() {
  if (Background.current.song) {
    playTrack(Background.current.song);
  }
  else {
    playRandomTrack();
  }
}
function playTrack(song) {
  if (music) {music.kill();}
  music_song = song;
  music_song.already_played = true;
  music_song.songInfoScreen();
  music = gamesound.selectFromList(music_song.path);
  music.sound.loop = true;
  music.sound.play();
  music.setVolume(music_normal_volume);
  if (!sound_is_on) {
    music.mute();
  }
}
function playRandomTrack() {
  let selected = songs.filter(x => !x.already_played);
  if (selected.length === 0) {
    songs.forEach(x => x.already_played.false);
    selected = songs;
  }
  playTrack(u.randomFromArr(selected));
}
function showMusicText(song) {
  if (music_text) {
    if (music_text.ticker) {
      music_text.ticker.stop();
    }
    app.stage.removeChild(music_text);
  }
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
  music_text = new PIXI.Text("", style);
  music_text.anchor.set(1,0);
  music_text.zIndex = 100;
  addChildZ(music_text);
  music_text.alpha = 0;
  music_text.text = "♪ " + song.name;
  music_text.x = app.screen.width-130;
  music_text.y = app.screen.height+5;
  music_text.alpha = 0;
  if (music_text.width > music_text.x-20) {
    music_text.width = music_text.x-20;
  }
  

  music_text.ticker = doUntil((count)=> {
    if (count < 42) {
      if (music_text.alpha < 0.84) {music_text.alpha += 0.03;}
      music_text.y -= 34/((count+1)*1.5);
    }
    if (count > 200) {
      music_text.alpha -= 0.05;
    }
  }, 400, () => {
    music_text.alpha = 0;
  });
}
function Song(path, name) {
  this.path = path;
  this.name = name;
  this.already_played = false;
}
Song.prototype.songInfoScreen = function() {
  showMusicText(this);
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
        this.addParticle(this.x+u.randomFloat(-p, p), this.y+u.randomFloat(-p, p));
      }
    }
  }, -1);
}
ParticleSystem.prototype.addParticle = function(x, y) {
  return new ParticleSystem.Particle(this, x, y);
};
ParticleSystem.Particle = function(owner, x, y) {
  this.x_to = owner.x_to + u.randomFloat(-owner.opts.part_destination_variation, owner.opts.part_destination_variation);
  this.y_to = owner.y_to + u.randomFloat(-owner.opts.part_destination_variation, owner.opts.part_destination_variation);
  let x_dif = this.x_to - x;
  let y_dif = this.y_to - y;
  this.angle = Math.tan(y_dif / x_dif);
  this.speed = owner.speed * u.randomFloat(1, 1.5);
  this.alpha_max = owner.opts.alpha_max;
  this.owner = owner;
  if (this.owner.opts.particle_animate) {    
    this.spr = animatedSpriteFrom(owner.particle_path);
    this.spr.gotoAndPlay(u.randomInt(0, this.spr.totalFrames));
  }
  else {
    this.spr = PIXI.Sprite.fromImage(owner.opts.particle_path);
  }
  this.spr.blendMode = owner.opts.blendMode;
  this.spr.animationSpeed = this.owner.part_animspeed;
  this.spr.position.set(x,y);
  this.spr.scale.set(u.randomFloat(this.owner.opts.part_minsize, this.owner.opts.part_maxsize));
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
  u.pushIfNotIn(b.name, ParticleSystem.queue[key].emitters[a.name]);
};
function ButtonToggle(x, y, path, action) {
  this.spr = animatedSpriteFrom(path);
  this.spr.position.set(x, y);
  this.spr.alpha = 0.85;
  this.spr.zIndex = 90;
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
        gamesound.unmuteAll();
      }
      else {
        gamesound.muteAll();
      }
    }, double_click_ms);
    sound_button.press_to_screenshot = !sound_button.press_to_screenshot;
  });
  sound_button.press_to_screenshot = false;
  sound_button.spr.scale.set(4.2);
  sound_button.alpha = 0.8;
  
  gamesound.muteAll();
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
  if (!u.isInArr(obj, objectsToUpdate)) {
    objectsToUpdate.push(obj);
  }
  if (!obj.update) {
    obj.update = [];
  }
  if (!u.isInArr(func, obj.update)) {
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
  let padding = 30;
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


let try_timer;
let testing_who; 
function tryNewPeep() {
  testing_who = Talker.getByName(prompt("Name", Talker.talkers[Talker.talkers.length-1].name));
  testing_who.enter();
  if (!sound_is_on) {
    sound_button.press();
  }
  Background.messages_required = 9999999;
  if (try_timer) {
    window.clearInterval(try_timer);
  }
  setInterval(function() {
    testing_who.talked_times = 0;
  }, 30);
}
function talktalk(who) {
  if (!who) {
    who = testing_who.name;
  }
  Talker.getByName(who).voicePlayRandom();
}