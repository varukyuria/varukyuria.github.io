var main_window;
var boards = ["http://boards.4chan.org/a/", "http://boards.4chan.org/g/", "http://boards.4chan.org/c/", "http://boards.4chan.org/jp/", "http://boards.4chan.org/v/", "http://boards.4chan.org/vr/", "http://boards.4chan.org/tv/", "http://boards.4chan.org/k/", "http://boards.4chan.org/o/", "http://boards.4chan.org/an/", "http://boards.4chan.org/sci/", "http://boards.4chan.org/his/", "http://boards.4chan.org/i/", "http://boards.4chan.org/toy/", "http://boards.4chan.org/p/", "http://boards.4chan.org/ck/", "http://boards.4chan.org/ic/", "http://boards.4chan.org/lit/", "http://boards.4chan.org/mu/", "http://boards.4chan.org/fa/", "http://boards.4chan.org/gd/", "http://boards.4chan.org/biz/", "http://boards.4chan.org/fit/", "http://boards.4chan.org/s4s/", "http://boards.4chan.org/u/"];
var textarea;
var catalog = 1;

function DOEET(win) {
  win = win || window;
  let result = "";

  function genJson(text, board) {
    board = board || /4chan\.org\/(.*)\//.exec(win.location)[1];
    text = text.replace(/\[Embed\]/gi, "");
    text = text.replace(/https?.*\s/gi, "");
    text = text.trim();

    let msg = {text: text,board: board};
    if (msg.text === "") {
      return;
    }
    return JSON.stringify(msg, null, 2);
  }

  function getRidOf(selector) {
    let sayounara = win.document.querySelectorAll(selector);
    for (let i=0; i<sayounara.length; i++) {
      sayounara[i].parentElement.removeChild(sayounara[i]);
    }
  }

  getRidOf(".abbr");
  getRidOf(".quotelink");

  var posts = win.document.querySelectorAll(".postMessage");
  for (let i=0; i<posts.length; i++) {
    let returned = genJson(posts[i].innerText);
    if (returned) {
      result += returned + ",\n";
    }
  }
  result = result.trim();

  textarea.value += result;
  console.log(result);
}

function init() {
  if (window.location.protocol == "https:") {
    alert("IT DONT WORK ON HTTPS");
    return;
  }
  main_window = window.open(window.location);
  setTimeout(function() {
    main_window.document.body.innerHTML = "";
    textarea = main_window.document.createElement("textarea");
    main_window.document.body.appendChild(textarea);
    
    var interfunc = function() {
      catalog += 1;
      if (catalog > 3) {
        clearInterval(inter);
        textarea.value = textarea.value.trim().replace(/,$/gi, "");  // trim and get rid of last comma
        return;
      }
      for (let i=0; i<boards.length; i++) {
        setTimeout(function() {
          scrape(boards[i]);
        }, 500 + i*1800);
      }
    }
    interfunc();
    var inter = setInterval(interfunc, 500 + (boards.length)*1800 + 800);
  }, 800);
}

function scrape(url) {
  let opendis = url;
  if (catalog != 1) {
    opendis += catalog;
  }
  var tempwin = window.open(opendis);
  setTimeout(function() {
    DOEET(tempwin);
  }, 800);
  
}


init();