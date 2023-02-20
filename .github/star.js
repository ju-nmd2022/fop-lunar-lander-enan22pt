let x=200;
let y=100;
angleMode(DEGREES);
// background
push();
background(77, 178, 250);
fill(19, 105, 19);
noStroke();
rect(x-200, y+365, 700, 150);
function grassRound(x, y){
fill(40, 133, 40);
stroke(11, 69, 11);
arc(x-100, y+370, 30, 60, -80, 0);
arc(x-105, y+370, 20, 40, -80, 0);
arc(x-87, y+370, 15, 50, -85, 0);}
grassRound(x, y);
grassRound(x+100, y+40);
grassRound(x-60, y+70);
grassRound(x+200, y+100);
grassRound(x+300, y+30);
grassRound(x+400, y+70);
grassRound(x+540, y +90);
function grassLine(x, y){
stroke(40, 133, 40);
strokeWeight(3);
line(x-80 , y+450, x-100, y+445);
line(x-80 , y+450, x-105, y+430);
line(x-80 , y+450, x-100, y+420);
line(x-80 , y+450, x-90, y+410);
line(x-80 , y+450, x-80, y+410);
line(x-80 , y+450, x-70, y+420);
line(x-80 , y+450, x-60, y+430);
line(x-80 , y+450, x-60, y+440);}
grassLine(x+10, y+20);
grassLine(x+170, y-50);
grassLine(x+270, y+10);
grassLine(x+440, y-40);
pop();


// star- your character 
function star(x, y) {
push();
stroke(240, 202, 14);
strokeWeight(3);
triangle(x-10, y, x, y-30, x+10, y);
triangle(x-40, y+5, x-10, y, x-15, y+20);
triangle(x+40, y+5, x+10, y, x+15, y+20);
triangle(x-25, y+50, x-15, y+20, x, y+30);
triangle(x+25, y+50, x+15, y+20, x, y+30);
noStroke();
ellipse(x, y+13.5, 33);
pop();
fill(240, 202, 14);
stroke(240, 202, 14);
triangle(x-5, y+15, x, y-30, x+5, y+15);
triangle(x-40, y+5, x, y+8, x, y+18);
triangle(x+40, y+5, x, y+8, x, y+18);
triangle(x-25, y+50, x-2, y+10, x+10, y+10);
triangle(x+25, y+50, x+2, y+10, x-10, y+10);}

//prisma-rainbow
push();
function prismaRainbow(x, y){
noStroke();
fill(24, 69, 79);
triangle(x-120, y-10, x-80, y-80, x-30, y-10);
fill(194, 242, 252);
triangle(x-80, y-15, x-80, y-70, x-40, y-15);
quad(0, y-20, x-90, y-50, x-100, y-45, 0, y);
fill(255, 0, 0);
quad(x-65, y-35, x+50, y+50, x+70, y+150, x-65, y-35);
quad(x+70, y+150, x+220, y+15, x+240, y-70, x+50, y+50);
quad(x+220, y+15, x+370, y+270, x+440, y+200, x+240, y-70);
quad(x+370, y+270, x+600, y+270, x+570, y+200, x+440, y+200);
quad(x+600, y+270, x+850, y+100, x+740, y+100, x+570, y+200);
fill(245, 108, 29);
quad(x-65, y-35, x+54, y+65, x+55, y+80, x-65, y-35);
quad(x+55, y+80, x+233, y-40, x+237, y-55, x+50, y+65);
quad(x+230, y-45, x+420, y+220, x+430, y+210, x+237, y-55);
quad(x+420, y+220, x+580, y+220, x+575, y+210, x+430, y+210);
quad(x+580, y+220, x+850, y+55, x+740, y+110, x+575, y+210);

noFill();
stroke(255, 0, 0);
strokeWeight(15);
arc(x+995, y+100, 500, 500, -180, 0);
stroke(245, 108, 29);
arc(x+995, y+100, 470, 470, -180, 0);
stroke(255, 241, 46);
arc(x+995, y+100, 440, 440, -180, 0);
stroke(70, 166, 55);
arc(x+995, y+100, 410, 410, -180, 0);
stroke(12, 90, 235);
arc(x+995, y+100, 380, 380, -180, 0);
stroke(67, 29, 181);
arc(x+995, y+100, 350, 350, -180, 0);
stroke(108, 22, 184);
arc(x+995, y+100, 320, 320, -180, 0);
}

translate(0, 0);
scale(1);
prismaRainbow(x, y);
pop();
push();
translate (100, 50);
scale(0.5);
star(x-200, y);
pop();