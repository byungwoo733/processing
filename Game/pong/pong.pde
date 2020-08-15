float pw = 100; // Player Width
float ph = 20; // Player Height

float x,y,vx,vy; // Ball Position
float bs = 20; // Ball Size 

int score = 0; // score
int  life = 3; // life

void setup() {
 size(1280, 720); 
 rectMode(CENTER);
 
 // Ball Speed
 x = width/2;
 y = 0;
 vx = random(-5, 5);
 vy = random(10);
}

void draw(){
 background(0); 
 
 // Ball Speed Add
 x += vx;
 y += vy;
 
 //Ball Keeping in Screen
 if(x<0 || x>width){ vx = -vx; }
 if(y<0){ vy = -vy *1.2; } // -> little by little speed control
 
 // if y > height is the Game Over
 if(y > height) {
   life--;
   if(life == 0){
   textSize(64);
   textAlign(CENTER, CENTER); // Text Center Position 
   text("Game Over", width/2, height/2);
   noLoop(); // Finish by Game Over
   }
   
   x = width/2;
   y = 0;
   vx = random(-5, 5);
   vy = random(10);
   
 }
 
 // Ball Bound
 if(mouseX-pw/2 < x && mouseX+pw/2 > x && y > height-20-ph/2-bs/2 && y<height-20-ph/2){
  vy = -vy; 
  score++;
 }
 
 ellipse(x, y, bs, bs); // Ball Shape
 rect(mouseX, height-20, pw, ph);
 
 textSize(64);
 textAlign(CENTER, CENTER);
 text(score, width/2, 30);
 textSize(32);
 text("Life: " + life, 150, 30);
}
