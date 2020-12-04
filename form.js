class Form 
{

    constructor()
    {
        this.stress = createButton("Stress Quiz");
        this.depression = createButton("Depression Quiz");
        this.anxiety = createButton("Anxiety Quiz"); 
        this.pos = createButton("Yes");
        this.neg = createButton("No.");
    }
    hide()
    {
        this.stress.hide();
        this.anxiety.hide();
        this.depression.hide();
        this.pos.hide();
        this.neg.hide();
    }
    display()
    {
        this.stress.position(660,400); 
        this.depression.position(650,450); 
        this.anxiety.position(655,350);
        
        this.stress.mousePressed(()=>
        {
            this.stress.hide();
            this.pos.position(700,400);
            this.neg.position(700,450);
            gameState = 2;
            visualState = 1;  
            question = question + 1;      
        })

        this.depression.mousePressed(()=>
        {
            this.depression.hide();
            this.stress.hide();
            this.pos.position(700,400);
            this.neg.position(700,450);
            gameState = 3;
            questionD = 1;
        })

        this.anxiety.mousePressed(()=>
        {
            this.depression.hide();
            this.stress.hide();
            this.anxiety.hide();
            this.pos.position(700,400);
            this.neg.position(700,450);
            gameState = 4;
            questionA = 1;
        })


        if(gameState === 2)
        {
            this.pos.mousePressed(()=>
            {
                stress = stress + 1;
                question = question + 1;
            })
    
            this.neg.mousePressed(()=>
            {
                question = question + 1;
            })
        }

        if(gameState === 3)
        {
            this.pos.mousePressed(()=>
            {
                depression = depression + 1;
                questionD = questionD + 1;
            })
    
            this.neg.mousePressed(()=>
            {
                questionD = questionD + 1;
            })
        }

        if(gameState === 4)
        {
            this.pos.mousePressed(()=>
            {
                anxiety = anxiety + 1;
                questionA = questionA + 1;
            })
    
            this.neg.mousePressed(()=>
            {
                questionA = questionA + 1;
            })
        }
    }
}