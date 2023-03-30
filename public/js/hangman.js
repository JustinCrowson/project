window.onload = function () {
    var alphas = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
  
    var topics; // Array of topics
    var cata; // Selected catagory
    var hints; // Word getHint
    var selcword; // Selected word
    var gues1; // Geuss
    var guess2 = []; // Stored geusses
    var life; // Lives
    var count; // Count correct geusses
    var space; // Number of spaces in word '-'
    var win = 0;
  
    // Get elements
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var hints = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
    // create alphabet ul
    var buttons = function () {
      myButtons = document.getElementById("buttons");
      letters = document.createElement("ul");
  
      for (var i = 0; i < alphas.length; i++) {
        letters.id = "alphabet";
        list = document.createElement("li");
        list.id = "letter";
        list.innerHTML = alphas[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
        
      }
    };
  
    // Select Catagory
    var selectCat = function () {
      if (cata === topics[0]) {
        catagoryName.innerHTML =
          "The Chosen Category Is Premier League Football Teams";
      } else if (cata === topics[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Films";
      } else if (cata === topics[2]) {
        catagoryName.innerHTML = "The Chosen Category Is Cities";
      }
    };
  
    // Create geusses ul
    result = function () {
      wordHolder = document.getElementById("hold");
      correct = document.createElement("ul");
  
      for (var i = 0; i < selcword.length; i++) {
        correct.setAttribute("id", "my-word");
        gues1 = document.createElement("li");
        gues1.setAttribute("class", "guess");
        if (selcword[i] === "-") {
          gues1.innerHTML = "-";
          space = 1;
        } else {
          gues1.innerHTML = "_";
        }
  
        guess2.push(gues1);
        wordHolder.appendChild(correct);
        correct.appendChild(gues1);
      }
    };
  
    // Show lives
    comments = function () {
      showLives.innerHTML = "You have " + life + " guesses left!";
      if (life < 1) {
        showLives.innerHTML = "You Lose!";
      }
      for (var i = 0; i < guess2.length; i++) {
        if (count + space === guess2.length) {
          showLives.innerHTML = "You Win!";
          win++;
        }
      }
    };
  
    // Animate man
    var animate = function () {
      var drawMe = life;
      drawArray[drawMe]();
    };
  
    // Hangman
    canvas = function () {
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext("2d");
      context.beginPath();
      context.strokeStyle = "#000000";
      context.lineWidth = 2;
    };
  
    head = function () {
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext("2d");
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI * 2, true);
      context.stroke();
    };
  
    draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {
      context.moveTo($pathFromx, $pathFromy);
      context.lineTo($pathTox, $pathToy);
      context.stroke();
    };
  
    frame1 = function () {
      draw(0, 150, 150, 150);
    };
  
    frame2 = function () {
      draw(10, 0, 10, 600);
    };
  
    frame3 = function () {
      draw(0, 5, 70, 5);
    };
  
    frame4 = function () {
      draw(60, 5, 60, 15);
    };
  
    torso = function () {
      draw(60, 36, 60, 70);
    };
  
    rightArm = function () {
      draw(60, 46, 100, 50);
    };
  
    leftArm = function () {
      draw(60, 46, 20, 50);
    };
  
    rightLeg = function () {
      draw(60, 70, 100, 100);
    };
  
    leftLeg = function () {
      draw(60, 70, 20, 100);
    };
  
    drawArray = [
      rightLeg,
      leftLeg,
      rightArm,
      leftArm,
      torso,
      head,
      frame4,
      frame3,
      frame2,
      frame1,
    ];
  
    // OnClick Function
    check = function () {
      list.onclick = function () {
        var geuss = this.innerHTML;
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < selcword.length; i++) {
          if (selcword[i] === geuss) {
            guess2[i].innerHTML = geuss;
            count += 1;
          }
        }
        var j = selcword.indexOf(geuss);
        if (j === -1) {
          life -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      };
    };
  
    // Play
    play = function () {
      topics = [
        [
          "nicolas-cage",
          "national-treasure",
          "ghost-rider",
          "california",
          "cage",
          "outcast",
          "renfield",
        ],
        ["inconceivable", "arsenal" ],
      ];
  
      cata = topics[Math.floor(Math.random() * topics.length)];
      selcword = cata[Math.floor(Math.random() * cata.length)];
      selcword = selcword.replace(/\s/g, "-");
      console.log(selcword);
      buttons();
  
      guess2 = [];
      life = 10;
      count = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    };
  
    play();
  
    // Hint
  
    hint.onclick = function () {
      hints = [
        [
          "The man himself",
          "Movie",
          "Movie",
          "State he's from",
          "Name",
          "Movie",
          "Movie",
        ],
        [
          "Movie",
          "Movie",
          
        ],
        
      ];
  
      var catagoryIndex = topics.indexOf(cata);
      var hintIndex = cata.indexOf(selcword);
      showClue.innerHTML = "Clue: - " + hints[catagoryIndex][hintIndex];
    };
  
    // Reset
  
    document.getElementById("reset").onclick = function () {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    };
  };
  