class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
   start(){
      
        contestant = new Contestant();
        
          contestant.getCount();
        
        question = new Question()
        question.display();
      
    }
  
    play(){
      question.hide();
      background("Yellow");
      fill(0);
      textSize(30);
      text("Result of the Quiz",340, 50);
      text("----------------------------",320, 65);
      Contestant.getPlayerInfo();
     
      if(  ){
        debugger;
        var display_Answers = 230;
        fill("Blue");
        textSize(20);
        
        text("",130,230);
      
        for(if(answer==="constestant ans")){
          debugger;
          var correctAns = "2";
          if (correctAns === allContestants[plr].answer)
            fill("Green")
          else
            fill("red");
  
          display_Answers+=30;
          textSize(20);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers)
        }
      } 
    }
  }