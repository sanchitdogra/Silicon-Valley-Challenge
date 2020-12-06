var gameState = 1;
var visualState = 0;
var stress = 0;
var question = 0;
var questionD = 0;
var questionA = 0;
var questionAS = 0;
var depression = 0;
var asthama = 0;
var anxiety = 0;
var form;

function preload()
{

}
function setup() 
{
  createCanvas(displayWidth-20, displayHeight-150);
  form = new Form();
}

function draw() 
{
  background("black");

  if(gameState === 1 && visualState === 0)
  {
    push();
    fill("white")
    textSize(40);
    text("A self help test may help you identify the signs", 300,120);
    text("You know whats normal for you if you find yourself experiencing behaviour that ", 50,160);
    text("seems off this might be sign you need to seek help", 250, 210);
    text("Take this self help test to identify your problem", 250,260);
    pop();
  }

  console.log(questionD);

  if(question === 1)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you feel that your life is out of control and that you have too many things on your plate?", 200,300);
    pop(); 
  }

  if(questionD === 1)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you feel down, sad or upset frequently?", 200,300);
    pop(); 
  }

  if(questionA === 1)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you feel fatigue easily?", 200,300);
    pop(); 
  }

  if(questionAS === 1)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you cough frequently, especially at night?", 200,300);
    pop(); 
  }

  if(question === 2)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you worry excessively and feel overwhelmed with responsibilities?", 200,300);
    pop(); 
  }

  if(questionD === 2)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you have difficulty in concentrating, making decisions or recalling?", 200,300);
    pop(); 
  }

  if(questionA === 2)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you have difficulty concentrating or recalling?", 200,300);
    pop(); 
  }

  if(questionAS === 2)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you loose breath easily?", 200,300);
    pop(); 
  }

  if(question === 3)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you struggle to focus on tasks or stay motivated?", 200,300);
    pop(); 
  }

  if(questionD === 3)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you experience pain, aches, cramps or gastro intestinal problems without any clear cause?", 200,300);
    pop(); 
  }

  if(questionA === 3)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you feel muscle tension?", 200,300);
    pop(); 
  }

  if(questionAS === 3)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you wheez or cough after exercising?", 200,300);
    pop(); 
  }

  if(question === 4)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you have little appetite or find that you are overeating?", 200,300);
    pop(); 
  }

  if(questionD === 4)
  {
    push();
    fill("white");
    textSize(30);
    text("Have you observed recent changes in appetite or weight?", 200,300);
    pop(); 
  }

  if(questionA === 4)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you feel a racing heart frequently?", 200,300);
    pop(); 
  }

  if(questionAS === 4)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you feel tired, get easily upset?", 200,300);
    pop(); 
  }

  if(question === 5)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you find yourself getting upset rather easily?", 200,300);
    pop(); 
  }

  if(questionD === 5)
  {
    push();
    fill("white");
    textSize(30);
    text("Do have difficulty in sleeping or waking early?", 200,300);
    pop(); 
  }

  if(questionA === 5)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you keep grinding your teeth?", 200,300);
    pop(); 
  }

  if(questionAS === 5)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you experience decrease or changes in lung function?", 200,300);
    pop(); 
  }

  if(question === 6)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you find it hard to calm yourself down after something upsets you?", 200,300);
    pop(); 
  }

  if(questionD === 6)
  {
    push();
    fill("white");
    textSize(30);
    text("Have you lost interest or no longer find pleasure in activities or hobbies?", 200,300);
    pop(); 
  }

  if(questionA === 6)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you have sleep difficulties including problems falling asleep and restlesness, unsatisfying sleep?", 100,300);
    pop(); 
  }

  if(questionAS === 6)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you experience signs of a cold or allergies (sneezing, runny nose, cough, nasal congestion, sore throat, ", 40,200);
    text("and headache?",680,280);
    pop(); 
  }

  if(question === 7)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you experience fatigue and/or struggle to fall or stay asleep?", 200,300);
    pop(); 
  }

  if(questionD === 7)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you have persistant feelings of sadness, anxiety or emptiness?", 200,300);
    pop(); 
  }

  if(questionA === 7)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you get irritated easily?", 100,300);
    pop(); 
  }

  if(questionAS === 7)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you have trouble sleeping due to your nose?", 100,300);
    pop(); 
  }

  if(question === 8)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you experience frequent headaches?", 200,300);
    pop(); 
  }

  if(questionD === 8)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you get feelings of worthlessness or helplessness?", 200,300);
    pop(); 
  }

  if(questionA === 8)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you have difficulty controlling worry or fear?", 100,300);
    pop(); 
  }

  if(questionAS === 8)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you expirience severe wheezing when in or out?", 100,300);
    pop(); 
  }

  if(question === 9)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you see unexpected and sudden loss or gain in your weight?", 200,300);
    pop(); 
  }

  if(questionD === 9)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you get irritated or angry easily?", 200,300);
    pop(); 
  }

  if(questionA === 9)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you get panicked easily?", 100,300);
    pop(); 
  }

  if(questionAS === 9)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you expirience chest pain or pressure?", 100,300);
    pop(); 
  }

  if(question === 10)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you fear that you don't have control of your life?", 200,300);
    pop(); 
  }

  if(questionD === 10)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you think of death or suicide?", 200,300);
    pop(); 
  }

  if(questionA === 10)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you keep racing through your thoughts constantly?", 100,300);
    pop(); 
  }

  if(questionAS === 10)
  {
    push();
    fill("white");
    textSize(30);
    text("Do you difficulty in talking?", 100,300);
    pop(); 
  }

  if(question === 11 && stress>0 && stress<3 || stress === 3 && question === 11 || stress === 0 && question === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You dont have stress but if you feel that are not satisfied with the results you can surely consult a professional.", 25,300);
    pop();
  }

  if(questionD === 11 && depression>0 && depression<3 || depression === 3 && questionD === 11 || depression === 0 && questionD === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You dont have depression but if you feel that are not satisfied with the results you can surely consult a professional.", 5,300);
    pop();
  }

  if(questionA === 11 && anxiety>0 && anxiety<3 || anxiety === 3 && questionA === 11 || anxiety === 0 && questionA === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You dont have anxiety but if you feel that are not satisfied with the results you can surely consult a professional.", 5,300);
    pop();
  }

  if(questionAS === 11 && asthama>0 && asthama<3 || asthama === 3 && questionAS === 11 || asthama === 0 && questionAS === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You dont have any signs asthama but if you feel that are not satisfied with the results you can surely consult", 30,300);
    text("a professional", 600, 350);
    pop();
  }

  if(question === 11 && stress > 3 && stress < 5 || stress === 5 && question === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have mild stress.", 200,300);
    pop();
  }

  if(questionD === 11 && depression > 3 && depression < 5 || depression === 5 && questionD === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have mild depression.", 200,300);
    pop();
  }

  if(questionA === 11 && anxiety > 3 && anxiety < 5 || anxiety === 5 && questionA === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have mild anxiety.", 200,300);
    pop();
  }

  if(questionAS === 11 && asthama > 3 && asthama < 5 || asthama === 5 && questionAS === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have don't have asthama.", 200,300);
    pop();
  }

  if(question === 11 && stress > 5 && stress < 8 || stress ===8 && question === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have stress not too much but also not too less I advice you to see a professional.", 200,300);
    pop();
  }

  if(questionD === 11 && depression > 5 && depression < 8 || depression ===8 && questionD === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have depression not too much but also not too less I advice you to see a professional.", 200,300);
    pop();
  }

  if(questionA === 11 && anxiety > 5 && anxiety < 8 || anxiety ===8 && questionA=== 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have anxiety not too much but also not too less I advice you to see a professional.", 200,300);
    pop();
  }

  if(questionAS === 11 && asthama > 5 && asthama < 8 || asthama ===8 && questionAS=== 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have asthama but it is nothing serious, but if the symtoms change you should see a professional.", 110,300);
    pop();
  }

  if(question === 11 && stress > 8 && stress < 10 || stress === 10 && question === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have very high stress and I advice you to consult a professional straight away.", 200,300);
    pop();
  }

  if(questionD === 11 && depression > 8 && depression < 10 || depression === 10 && questionD === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have very high depression and I advice you to consult a professional straight away.", 200,300);
    pop();
  }

  if(questionA === 11 && anxiety > 8 && anxiety < 10 || anxiety === 10 && questionA === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have very high anxiety and I advice you to consult a professional straight away.", 200,300);
    pop();
  }

  if(questionAS === 11 && asthama > 8 && asthama < 10 || asthama === 10 && questionAS === 11)
  {
    form.hide();
    push();
    textSize(30);
    fill("white");
    text("You have severe asthama and it get serious when exercising please consult a professional if you haven't done", 30,300);
    text("it yet.",750,350);
    pop();
  }

  form.display();

  drawSprites();
}



