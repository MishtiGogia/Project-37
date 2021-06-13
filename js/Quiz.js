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

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){

   question.hide();

    background("blue");

    Contestant.getPlayerInfo();

    if(allContestants !== undefined){
      var display_position = 130;
      for(var con in allContestants){
        if (con === "contestant" + contestant.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(20);
        text("*Note: Contestant who answered correctly are highlighted in green color!", 120, 330);
      }
    }

    for(var con in allContestants){

      var correctAns = "2";
      if(correctAns === allContestants[con].answer)
      fill("green")
      else{
        fill("red")
      }

    }
    
  }

}
