class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here....");
      this.input2 = createInput("Enter Correct Option No..");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
    hide(){
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
      }
    
      display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);
    
        this.question.html("Question:- How many members in Lok Sabha");
        this.question.position(150, 80);
        this.option1.html("1: 552 " );
        this.option1.position(150, 100);
        this.option2.html("2:480" );
        this.option2.position(150, 120);
        this.option3.html("3: 540 " );
        this.option3.position(150, 140);
        this.option4.html("4: 430" );
        this.option4.position(150, 160);
    
        this.question.html("Question:- Which is the most poisonous fish in world");
        this.question.position(150, 80);
        this.option1.html("1: wholf fish" );
        this.option1.position(150, 100);
        this.option2.html("2:sail fish" );
        this.option2.position(150, 120);
        this.option3.html("3: puffer fish " );
        this.option3.position(150, 140);
        this.option4.html("4: jelly fish" );
        this.option4.position(150, 160);
        
        this.question.html("Question:- Where is Shalimar Garden");
        this.question.position(150, 80);
        this.option1.html("1: Kanya Kumari" );
        this.option1.position(150, 100);
        this.option2.html("2:Jammu&Kashmir" );
        this.option2.position(150, 120);
        this.option3.html("3:Konark " );
        this.option3.position(150, 140);
        this.option4.html("4 Mumbai" );
        this.option4.position(150, 160);
        
        
      
    
        

        this.question.html("Question:- Which insect swims upside down");
        this.question.position(150, 80);
        this.option1.html("1: shrew" );
        this.option1.position(150, 100);
        this.option2.html("2:sloth" );
        this.option2.position(150, 120);
        this.option3.html("3:backswimer " );
        this.option3.position(150, 140);
        this.option4.html("4 salmon" );
        this.option4.position(150, 160);

        this.question.html("Question:- Which animal lays the biggest eggs in the world");
        this.question.position(150, 80);
        this.option1.html("1: nidifugous" );
        this.option1.position(150, 100);
        this.option2.html("2:armadillo" );
        this.option2.position(150, 120);
        this.option3.html("3:paradoxical " );
        this.option3.position(150, 140);
        this.option4.html("4 ostrich" );
        this.option4.position(150, 160);

        this.input1.position(150, 230);
        this.input2.position(350, 230);
        this.input3.position(450, 230);
        this.input4.position(600, 230);
        this.button.position(290, 300);
        
          this.title.hide();
          this.input1.hide();
          this.input2.hide();
          this.input3.hide();
          this.input4.hide();
          this.button.hide();

          contestant.name = this.input1.value();
          contestant.answer = this.input2.value();
          contestant.answer = this.input3.value();
          contestant.answer = this.input4.value();
          contestantCount+=1;
          contestant.index = contestantCount;
          contestant.update();
          contestant.updateCount(contestantCount);
        };
      }
    