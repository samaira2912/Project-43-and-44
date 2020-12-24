var input, email,bookName;
var checkBox;


function setup(){
    createCanvas(windowWidth,windowHeight);

    input =  createInput("Name");
    input.position(windowWidth/2-400,windowHeight/2);
    email = createInput("Email")
    email.position(windowWidth/2-400,windowHeight/2+70);
    bookName = createInput("Book Name");
    bookName.position(windowWidth/2-400,windowHeight/2+140);
    
    checkBox =  createButton('Confirm');
    checkBox.position(windowWidth/2-400,windowHeight/2+240)
}