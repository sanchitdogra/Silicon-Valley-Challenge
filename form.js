class Form 
{

    constructor()
    {
        this.stress = createButton("Stress Quiz");
        this.depression = createButton("Depression Quiz");
        this.anxiety = createButton("Anxiety Quiz"); 
        this.asthama = createButton("Asthama Quiz");
        this.pos = createButton("Yes");
        this.neg = createButton("No.");
    }
    hide()
    {
        this.stress.hide();
        this.anxiety.hide();
        this.depression.hide();
        this.asthama.hide();
        this.pos.hide();
        this.neg.hide();
    }
    display()
    {
        this.stress.position(60,400); 
        this.depression.position(50,450); 
        this.anxiety.position(55,350);
        this.asthama.position(55,500);
        
        this.stress.mousePressed(()=>
        {
            this.stress.hide();
            this.depression.hide();
            this.anxiety.hide();
            this.asthama.hide();
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
            this.anxiety.hide();
            this.asthama.hide();
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
            this.asthama.hide();
            this.pos.position(700,400);
            this.neg.position(700,450);
            gameState = 4;
            questionA = 1;
        })

        this.asthama.mousePressed(()=>
        {
            this.depression.hide();
            this.stress.hide();
            this.anxiety.hide();
            this.asthama.hide();
            this.pos.position(700,400);
            this.neg.position(700,450);
            gameState = 5;
            questionAS = 1;
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

        if(gameState === 5)
        {
            this.pos.mousePressed(()=>
            {
                asthama = asthama + 1;
                questionAS = questionAS + 1;
            })
    
            this.neg.mousePressed(()=>
            {
                questionAS = questionAS + 1;
            })
        }
    }
}