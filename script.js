
  const quotes =  [ "Never Back Down.",
   "Believe in yourself", "You can Do it.", "Don't Give Up.", "Get Stronger." , "Trust the process.", "You're stronger than you think..", 
   "Pain is Temporary.", "Don't Underestimate yourself.", "Never Give Up.", "Don't Quit it's for the weak.", "Short Progress is Still Progress.", "Don't Dream About Success, Work for it." 
   ,"Don’t let yesterday take up too much of today." , "You learn more from failure than from success", "Failure Builds Character", "Either you run the day or the day runs you." ,
    "One man with courage makes a majority", "A man who has committed a mistake and doesn’t correct it is committing another mistake", "Don’t let someone else’s opinion of you become your reality." ,
     "If you can dream it, you can do it. ", "Set your goals high, and don’t stop till you get there.", "Live out of your imagination, not your history.", "Stay Strong" , "Nothing Can Stop Me" , "I will be the STRONGEST",
    "I'm gonna be the best", "Being Weak is" , "Focus on your strengths, not your weaknesses." , "All our dreams can come true, if we have the courage to pursue them." , "Nothing is Impossible" , "The only thing we have to fear is fear itself."
  ];
  const quotetext = document.getElementById("demo");

  function newquote () {

      const randomIndex = Math.floor(Math.random() * quotes.length);
      quotetext.textContent = quotes[randomIndex];
      bombs();
  }   

  function bombs() {
    const bomb = document.getElementById("bomb");
    

    bomb.style.display = "block";
  
    setTimeout(() => {
      bomb.style.display = "none";
    }, 1000);
  }
  
  
