let x = 200;
let y = 100;
let starY = 0;
let starX =520;
let velocity = 0.6;
let acceleration = 0.1;
let starMoving = true;
let gameWorking = false;
let prismaRainbowX = 150;
let prismaRainbowY = 85;
let particles = [];
let currentScreen = "start";

function setup(){
createCanvas(600, 600);
angleMode(DEGREES);  }

function keyPressed() {
  velocity = velocity - 2.5;}

// background
function scenery() {
  push();
  createCanvas(610, 600);
  background(77, 178, 250);
  fill(19, 105, 19);
  noStroke();
  rect(x - 200, y + 365, 700, 150);
  function grassRound(x, y) {
    fill(40, 133, 40);
    stroke(11, 69, 11);
    strokeWeight(1);
    arc(x - 100, y + 370, 30, 60, -80, 0);
    arc(x - 105, y + 370, 20, 40, -80, 0);
    arc(x - 87, y + 370, 15, 50, -85, 0);}

  grassRound(x, y);
  grassRound(x + 100, y + 40);
  grassRound(x - 60, y + 70);
  grassRound(x + 200, y + 100);
  grassRound(x + 300, y + 30);
  grassRound(x + 400, y + 70);
  grassRound(x + 540, y + 90);
  function grassLine(x, y) {
    stroke(40, 133, 40);
    strokeWeight(3);
    line(x - 80, y + 450, x - 100, y + 445);
    line(x - 80, y + 450, x - 105, y + 430);
    line(x - 80, y + 450, x - 100, y + 420);
    line(x - 80, y + 450, x - 90, y + 410);
    line(x - 80, y + 450, x - 80, y + 410);
    line(x - 80, y + 450, x - 70, y + 420);
    line(x - 80, y + 450, x - 60, y + 430);
    line(x - 80, y + 450, x - 60, y + 440);}

  grassLine(x + 10, y + 20);
  grassLine(x + 170, y - 50);
  grassLine(x + 270, y + 10);
  grassLine(x + 440, y - 40);
  pop();}

// star- your character
function star(x, y) {
  push();
  stroke(240, 202, 14);
  strokeWeight(1);
  triangle(x - 10, y, x, y - 30, x + 10, y);
  triangle(x - 40, y + 5, x - 10, y, x - 15, y + 20);
  triangle(x + 40, y + 5, x + 10, y, x + 15, y + 20);
  triangle(x - 25, y + 50, x - 15, y + 20, x, y + 30);
  triangle(x + 25, y + 50, x + 15, y + 20, x, y + 30);
  noStroke();
  ellipse(x, y + 13.5, 33);
  pop();
  fill(240, 202, 14);
  stroke(240, 202, 14);
  strokeWeight(1);
  triangle(x - 5, y + 15, x, y - 30, x + 5, y + 15);
  triangle(x - 40, y + 5, x, y + 8, x, y + 18);
  triangle(x + 40, y + 5, x, y + 8, x, y + 18);
  triangle(x - 25, y + 50, x - 2, y + 10, x + 10, y + 10);
  triangle(x + 25, y + 50, x + 2, y + 10, x - 10, y + 10);}

//prisma-rainbow

function prismaRainbow(x, y) {
  noStroke();
  fill(24, 69, 79);
  triangle(x - 120, y - 10, x - 80, y - 80, x - 30, y - 10);
  fill(194, 242, 252);
  triangle(x - 85, y - 12, x - 79, y - 75, x - 35, y - 12);
  quad(0, y - 20, x - 90, y - 50, x - 100, y - 45, 0, y);

  //the color red of the rainbow
  fill(255, 0, 0);
  quad(x - 65, y - 35, x + 50, y + 350, x + 40, y + 400, x - 65, y - 35);

  //the color orange of the rainbow
  fill(245, 108, 29);
  quad(x - 65, y - 35, x + 54, y + 320, x + 55, y + 380, x - 65, y - 35);

  //the color yellow of the rainbow
  fill(255, 241, 46);
  quad(x - 65, y - 35, x + 57, y +330, x + 55, y + 275, x - 65, y - 35);

  //the color green of the rainbow
  fill(70, 166, 55);
  quad(x - 65, y - 35, x + 60, y + 285, x + 80, y + 285, x - 65, y - 35);

  //the color blue of the rainbow
  fill(12, 90, 235);
  quad(x - 65, y - 35, x + 83, y + 295, x + 110, y + 300, x - 65, y - 35);

  //the color indigo of the rainbow
  fill(67, 29, 181);
  quad(x - 65, y - 35, x + 107, y + 295, x + 104, y + 250, x - 65, y - 35);

  //the color violet of the rainbow
  fill(108, 22, 184);
  quad(x - 65, y - 35, x + 100, y + 250, x + 107, y + 235, x - 65, y - 35);

  //the ending rainbow
  noFill();
  stroke(255, 0, 0);
  strokeWeight(15);
  arc(x + 235, y + 370, 400, 400, -180, 0);
  stroke(245, 108, 29);
  arc(x + 235, y + 370, 370, 370, -180, 0);
  stroke(255, 241, 46);
  arc(x + 235, y + 370, 340, 340, -180, 0);
  stroke(70, 166, 55);
  arc(x + 235, y + 370, 310, 310, -180, 0);
  stroke(12, 90, 235);
  arc(x + 235, y + 370, 280, 280, -180, 0);
  stroke(67, 29, 181);
  arc(x + 235, y + 370, 250, 250, -180, 0);
  stroke(108, 22, 184);
  arc(x + 235, y + 370, 220, 220, -180, 0);

  //the clouds on the rainbow
  fill(255, 255, 255);
  noStroke();
  ellipse(x + 40, y + 380, 60, 40);
  ellipse(x + 80, y + 380, 60, 40);
  ellipse(x + 120, y + 380, 60, 40);
  ellipse(x + 80, y + 360, 60, 40);
  ellipse(x + 350, y + 380, 60, 40);
  ellipse(x + 390, y + 380, 60, 40);
  ellipse(x + 420, y + 380, 60, 40);
  ellipse(x + 390, y + 360, 60, 40);}

function draw() {  
  if (currentScreen === "start"){
    startScreen(x, y);
if (mouseIsPressed === true){
  currentScreen = "play";}}

if(currentScreen === "play"){
entireGame(x, y);
}

else if(currentScreen === "lose"){
  if (mouseIsPressed === true){
    currentScreen = "play";
    gameWorking = true;
    reset();
    loopStar();}}

else if(currentScreen === "win"){
  if (mouseIsPressed === true){
    currentScreen = "play";
    gameWorking = true;
    reset();
    loopStar();}}

if (keyIsPressed) {
for (let i = 0; i < 0.5; i++) {
let particle = createParticle(starX, starY);
particles.push(particle);}}

// //making the star move
if (starMoving) {
if(gameWorking){
clear();
entireGame(x, y);}

else{
  scenery();
  startScreen(x,y);
  acceleration= 0;
  velocity = 0;}

if (mouseIsPressed){
  gameWorking = true;
  acceleration = 0.1;}

if (starY > 1130 && velocity>=3) {
currentScreen = "lose" ;
starMoving = false;
clear();
scenery();
loseScreen(x, y);}

if (starY > 1130 && velocity<=3){
currentScreen = "win";  
starMoving = false;
clear();
scenery();
winScreen(x, y);}}}

//particles behind the star

function createParticle(x, y) {
const v = 0.2 + Math.random();
const a = Math.PI + Math.random() * Math.PI;
const maxLife = 100 + Math.floor(Math.random() * 100);
return { x: x, y: y, velocity: v, angle: a, life: 0, maxLife: maxLife };}

function drawParticle(particle) {
push();
translate(particle.x, particle.y);
scale(0.3);
star(x, y);
pop();}

function updateParticle(particle) {
particle.x = particle.x + Math.cos(particle.angle) * particle.velocity;
particle.y = particle.y + Math.sin(particle.angle) * particle.velocity;
particle.velocity = particle.velocity * 1;
particle.life = particle.life + 1;

if (particle.life > particle.maxLife) {
const particleIndex = particles.indexOf(particle);
particles.splice(particleIndex, 1);}}
// The particle code inspired from the class


// the starting screen
function startScreen(x, y){
  fill(236, 185, 250);
  stroke(0, 0, 0);
  strokeWeight(3);
  rect(x-90, y, 400, 300, 40);
  fill(0, 0, 0);
  noStroke();
  textSize(40);
  text('Hello! ૮ ˶ᵔ ᵕ ᵔ˶ ა', x-20, y+50 );
  textSize(20);
  text('Please help the star', x+20, y+100);
  text('It has to land safely on the cloud', x-25, y+120);
  text('Without getting too high speed', x-15, y+140);
  fill(139, 50, 168);
  rect(x+30, y+200, 170, 40, 35);
  fill(0, 0, 0);
  stroke(222, 184, 245);
  text('˚ʚ♡ɞ˚Start˚ʚ♡ɞ˚', x+40, y+225);}

// the losing screen
function loseScreen(x, y){
  fill(236, 185, 250);
  stroke(0, 0, 0);
  strokeWeight(3);
  rect(x-90, y, 400, 350, 40);
  fill(0, 0, 0);
  noStroke();
  textSize(30);
  text('Nooo! Pleeeease!!!', x-20, y+50 );
  text('I am a staaaaaar!!!!!!', x-30, y+80 );
  textSize(20);
  text('／＞     フ', x+90, y+120);
  text('| 　_　_|', x+90, y+140);
  text('／` ミ＿xノ', x+70, y+160);
  text('/　　　     |', x+60, y+180);
  text('/　  ヽ　     ﾉ', x+45, y+200);
  text('│　    |　|　|', x+40, y+220);
  text('／￣ |　    |　|　|', x+5, y+240);
  text('| (￣ ヽ＿ヽ_)__) ', x+10, y+260);
  text('＼二つ', x+10, y+280);
  fill(139, 50, 168);
  rect(x, y+290, 220, 40, 35);
  fill(0, 0, 0);
  stroke(222, 184, 245);
  textSize(20);
  text('Play Again ( ꩜ ᯅ ꩜;)⁭⁭', x+15, y+315); 
  reset();}

// the winning screen
function winScreen(x, y){
  fill(236, 185, 250);
  stroke(0, 0, 0);
  strokeWeight(3);
  rect(x-90, y, 400, 300, 40);
  fill(0, 0, 0);
  noStroke();
  textSize(40);
  text('You Slayed!', x, y+50 );
  textSize(20);
  text(' ( __ /)', x+80, y+80 );
  text(' (UwU)', x+80, y+100 );
  text('＿ノ ヽ ノ＼＿ ', x+50, y+120);
  text(' /　`/ ⌒Ｙ⌒ Ｙ　 ]',x+30, y+140);
  text(' ( 　(三ヽ人　 /　 　|',x+10, y+160);
  text('|　ﾉ⌒＼ ￣￣ヽ　 ノ',x+10 , y+180);
  text('ヽ＿＿＿＞､＿＿／', x+10, y+200);
  text(' ｜( 王 ﾉ〈 ', x+55, y+220);
  fill(139, 50, 168);
  rect(x+20, y+240, 190, 40, 35);
  fill(0, 0, 0);
  stroke(222, 184, 245);
  text('Play Again ٩(ˊᗜˋ*)و ', x+30, y+265); 
  reset();}

function loopStar(){
starY = 0;
starX= 520;
velocity = 0.6;
acceleration = 0.1;
starMoving = true;
gameWorking = true;
starY = starY + velocity;
velocity = velocity + acceleration;}

function entireGame(x, y){
  scenery();
  prismaRainbow(prismaRainbowX, prismaRainbowY);
  scale(0.4);
  star(580, starY);


  // making the star move
  if (starMoving) {
    starY = starY + velocity;
    velocity = velocity + acceleration;
    
    if (keyIsPressed) {
      if(keyCode == 32){
    velocity = velocity - 0.2;}
  else if(keyCode == DOWN_ARROW){
    velocity = velocity + 0.2;
  }}

// particles
    if (keyIsPressed) {
      for (let i = 0; i < 0.5; i++) {
      let particle = createParticle(starX, starY);
      particles.push(particle);}}

      if(gameWorking){
        for (let particle of particles) {
          drawParticle(particle);
          updateParticle(particle);} 
        }}}

function reset(){
  gameWorking = true;
  starY = 0;
  starX= 580;
  velocity = 0.6;
  acceleration = 0.1;}