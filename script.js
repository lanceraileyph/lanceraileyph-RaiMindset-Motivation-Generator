
  const quotes =  [ "Never Back Down.", "Believe in yourself", "You can Do it.", "Don't Give Up.", "Get Stronger." , "Trust the process.", "You're stronger than you think..",  "Pain is Temporary.", "Don't Underestimate yourself.", "Never Give Up.", "Don't Quit it's for the weak.", "Short Progress is Still Progress.", "Don't Dream About Success, Work for it."  ,"Don’t let yesterday take up too much of today." , "You learn more from failure than from success", "Failure Builds Character", "Either you run the day or the day runs you." ,    "One man with courage makes a majority",  "Don’t let someone else’s opinion of you become your reality." ,"Nothing is impossible.","Success usually comes to those who are too busy to be looking for it.","Don’t be afraid to give up the good to go for the great.","Today is never too late to be brand new","if you never bleed you’re never gonna grow","The secret of getting ahead is getting started.", "If you can dream it, you can do it. ", "Set your goals high, and don’t stop till you get there.",      "Live out of your imagination, not your history.", "Stay Strong" , "Nothing Can Stop Me" , "I will be the STRONGEST","I'm gonna be the best", "With the new day comes new strength and new thoughts." , "Focus on your strengths, not your weaknesses." ,"What you do today can improve all your tomorrows." ,"No one can make you feel inferior without your consent.", "All our dreams can come true, if we have the courage to pursue them." ,  "Nothing is Impossible" , "The only thing we have to fear is fear itself.", "You don’t have to see the whole staircase, just take the first step.","It’s hard to beat a person who never gives up", "Don’t be pushed by your problems; be led by your dreams.", "If you’re going through hell, keep going", "Better to do something imperfectly than to do nothing flawlessly." ,"Nothing will work unless you do.","Focus on being productive instead of busy.", "The beginning is the most important part of the work.", "Set your goals high, and don’t stop till you get there.","Dream as if you’ll live forever, live as if you’ll die today.","Taking it easy won’t take you anywhere"
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

  function timegreet(){
      const greetdate = new Date();
let greethour = greetdate.getHours();
if (greethour >= 4 && greethour < 12) {
    document.getElementById("Greet").textContent = "Good Morning!";
} else if (greethour >= 12 && greethour < 17) {
    document.getElementById("Greet").textContent = "Good Afternoon!";
} else {
    document.getElementById("Greet").textContent = "Good Evening!";
}
  }
     setInterval(timegreet, 5000);
  
  
