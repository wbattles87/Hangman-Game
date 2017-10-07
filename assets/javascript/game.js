window.onload = function () 
{

	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
	var categories;			// Array of topics
	var chosenCategory;		// Selected catagory
	var getHint;			// Word getHint
	var word;				// Selected word
	var guess;				// Guess
	var guesses = [ ];		// Stored guesses
	var lives;				// Lives
	var counter;			// Count correct guesses
	var space;				// Number of spaces in word '-' this will avoid having to press spacebar

	// Get elements
	var showLives = document.getElementById("mylives");
	var showCatagory = document.getElementById("scatagory");




	// create alphabet ul
	var buttons = function () 
	{
		myButtons = document.getElementById("buttons");
		letters = document.createElement("ul");

		for (var i = 0; i < alphabet.length; i++) 
		{
	  		letters.id = "alphabet";
	  		list = document.createElement("li");
	  		list.id = "letter";
	  		list.innerHTML = alphabet[i];
	  		check();
	  		myButtons.appendChild(letters);
	  		letters.appendChild(list);
		}
	}
    
  
	// Select Catagory
	var selectCat = function () 
	{
		if (chosenCategory === categories[0]) 
		{
	  		catagoryName.innerHTML = "The Chosen Category Is Houston Texan Offensive Players";
		} 
		
		else if (chosenCategory === categories[1]) 
		{
	  		catagoryName.innerHTML = "The Chosen Category Is Houston Texans Defensive and Special Team Players";
		} 
	}

	// Create guesses ul
	result = function () 
	{
		wordHolder = document.getElementById('hold');
		correct = document.createElement('ul');

		for (var i = 0; i < word.length; i++) 
		{
			correct.setAttribute('id', 'my-word');
			guess = document.createElement('li');
			guess.setAttribute('class', 'guess');
			
			if (word[i] === "-") 
			{
	    		guess.innerHTML = "-";
	    		space = 1;
	  		} 

	  		else 
	  		{
	    		guess.innerHTML = "_";
	  		}

	  		guesses.push(guess);
	  		wordHolder.appendChild(correct);
	  		correct.appendChild(guess);
		}
	}
  

	// Show lives
	comments = function () 
	{
		showLives.innerHTML = "You have " + lives + " lives";		
		if (lives < 1) 
		{
	  		showLives.innerHTML = "Game Over";
		}
	
		for (var i = 0; i < guesses.length; i++) 
		{
	  		if (counter + space === guesses.length) 
	  		{
	    		showLives.innerHTML = "You Win!";
	  		}
		}
	}


	// OnClick Function
	check = function () 
	{
		list.onclick = function () 
		{
			var guess = (this.innerHTML);
			this.setAttribute("class", "active");
			this.onclick = null;
	

			for (var i = 0; i < word.length; i++) 
			{
				if (word[i] === guess) 
				{
					guesses[i].innerHTML = guess;
					counter += 1;
				} 
			}


			var j = (word.indexOf(guess));
			if (j === -1) 
			{
				lives -= 1;
				comments();
			} 
		
			else 
			{
				comments();
			}
		}
	}
  
    
	 // Play
	play = function () 
	{
		categories = [
	    	["deshaun-watson", "lamar-miller", "will-fuller", "deandre-hopkins", "bruce-ellington", "ryan-griffin", "jeff-allen", "kendall-lamm", "greg-mancz", "nick-martin"],
	    	["jadeveon-clowney", "jj-watt", "dj-reader", "dylan-cole", "whitney-mercilus", "andre-hal", "kareem-jackson", "johnathan-joseph", "eddie-pleasant", "kaimi-fairbairn", "shane-lechlar"],
		];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		word = word.replace(/\s/g, "-");
		console.log(word);
		buttons();

		guesses = [ ];
		lives = 5;
		counter = 0;
		space = 0;
		result();
		comments();
		selectCat();
	}

	play();


   // Reset

  document.getElementById("reset").onclick = function() 
  {
  	document.getElementById("catagoryName").innerHTML="";
  	document.getElementById("hold").innerHTML="";
  	document.getElementById("mylives").innerHTML="";
  	document.getElementById("buttons").innerHTML="";
    play();
  }
}
