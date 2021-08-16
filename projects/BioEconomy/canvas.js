var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 650;


// logo
var img = document.getElementById("logo");
ctx.drawImage(img, 410, 252);


//big circle
ctx.beginPath();
ctx.arc(504, 346, 107.5, 0, Math.PI * 2, false);
ctx.lineWidth = 5;
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

// =======================pink circles
//dots on big circle
ctx.beginPath();
ctx.arc(503, 236, 4, 0, Math.PI * 2, false);
ctx.fillStyle = "#C01E5C";
ctx.fill();

// colored lines
ctx.moveTo(503, 236);
ctx.lineTo(503, 182);
ctx.strokeStyle = "#C01E5C";
ctx.stroke();

//colored circles
ctx.beginPath();
ctx.arc(503, 140, 36.5, 0, Math.PI * 2, false);
ctx.fillStyle = "#C01E5C";
ctx.fill();

//border circles
ctx.beginPath();
ctx.arc(503, 140, 41, 0, Math.PI * 2, false);
ctx.lineWidth = 3.4;
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//lines
//top-line
ctx.moveTo(503, 97);
ctx.lineTo(503, 81);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//right-line
ctx.beginPath();
ctx.moveTo(568, 155);
ctx.lineTo(544, 145);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//left-line
ctx.beginPath();
ctx.moveTo(439, 155);
ctx.lineTo(464, 145);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//inner text
ctx.font = "normal 10pt Arial";
ctx.fillStyle = '#fff';
ctx.fillText('Policy &', 479, 130);

ctx.font = 'normal 10pt Arial';
ctx.fillStyle = '#fff';
ctx.fillText('Regulation', 473, 143);

ctx.font = 'normal 10pt Arial';
ctx.fillStyle = '#fff';
ctx.fillText('15', 495, 158);


// =======================brown circles
//dots on big circle
ctx.beginPath();
ctx.arc(606, 310, 4, 0, Math.PI * 2, false);
ctx.lineWidth = 5;
ctx.fillStyle = "#715046";
ctx.fill();

// colored lines
ctx.moveTo(606, 310);
ctx.lineTo(700, 289);
ctx.strokeStyle = "#715046";
ctx.stroke();

//colored circles
ctx.beginPath();
ctx.arc(739, 278, 36.5, 0, Math.PI * 2, false);
ctx.fillStyle = "#715046";
ctx.fill();

//border circles
ctx.beginPath();
ctx.arc(739, 278, 41, 0, Math.PI * 2, false);
ctx.lineWidth = 3.4;
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//lines

ctx.moveTo(765, 225); //to color
ctx.lineTo(758, 240); //from grey 159
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(680, 247);
ctx.lineTo(702, 258);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(797, 287);
ctx.lineTo(778, 287);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(738, 335);
ctx.lineTo(736, 318);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//inner text
ctx.font = "normal 10pt Arial";
ctx.fillStyle = '#fff';
ctx.fillText('Funding', 716, 278);

ctx.font = 'normal 10pt Arial';
ctx.fillStyle = '#fff';
ctx.fillText('19', 730, 292);


// =======================blue circles
//dots on big circle
ctx.beginPath();
ctx.arc(589.5, 411, 4, 0, Math.PI * 2, false);
ctx.lineWidth = 5;
ctx.fillStyle = "#15499D";
ctx.fill();

// colored lines
ctx.moveTo(589.5, 411);
ctx.lineTo(668.6, 487);
ctx.strokeStyle = "#15499D";
ctx.stroke();

//colored circles
ctx.beginPath();
ctx.arc(703, 511, 38.5, 0, Math.PI * 2, false);
ctx.fillStyle = "#15499D";
ctx.fill();

//border circles
ctx.beginPath();
ctx.arc(703, 511, 43, 0, Math.PI * 2, false);
ctx.lineWidth = 3.4;
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//lines
ctx.moveTo(732, 453);
ctx.lineTo(722, 473);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(763, 509);
ctx.lineTo(746, 513);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(748, 560);
ctx.lineTo(728, 544);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(702, 573);
ctx.lineTo(702, 553);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(653, 536);
ctx.lineTo(666, 529);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//inner text
ctx.font = "normal 8.8pt Arial";
ctx.fillStyle = '#fff';
ctx.fillText('Production &', 670, 501);

ctx.font = "normal 8.8pt Arial";
ctx.fillStyle = '#7';
ctx.fillText('Manufacturing', 666, 518);


ctx.font = 'normal 9pt Arial';
ctx.fillStyle = '#fff';
ctx.fillText('21', 696, 533);

// =======================yellow circles
//dots on big circle
ctx.beginPath();
ctx.arc(424, 417, 4, 0, Math.PI * 2, false);
ctx.lineWidth = 5;
ctx.fillStyle = "#FAD701";
ctx.fill();

// colored lines
ctx.moveTo(357, 492);
ctx.lineTo(424, 417);
ctx.strokeStyle = "#FAD701";
ctx.stroke();

//colored circles
ctx.beginPath();
ctx.arc(330, 525, 38.5, 0, Math.PI * 2, false);
ctx.fillStyle = "#FAD701";
ctx.fill();

//border circles
ctx.beginPath();
ctx.arc(330, 525, 43, 0, Math.PI * 2, false);
ctx.lineWidth = 3.4;
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//lines

ctx.moveTo(296, 470); //to color
ctx.lineTo(310, 488); //from grey 159
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(265, 545);
ctx.lineTo(288, 528);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(388, 569);
ctx.lineTo(366, 549);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(392, 514);
ctx.lineTo(372, 522);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(653, 536);
ctx.lineTo(666, 529);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//inner text
ctx.font = "normal 10pt Arial";
ctx.fillStyle = '#fff';
ctx.fillText('Specialised', 296, 522);

ctx.font = "normal 10pt Arial";
ctx.fillStyle = '#fff';
ctx.fillText('Services', 304, 537);


ctx.font = 'normal 10pt Arial';
ctx.fillStyle = '#fff';
ctx.fillText('19', 320, 552);

// =======================red circles
//dots on big circle
ctx.beginPath();
ctx.arc(401, 314, 4, 0, Math.PI * 2, false);
ctx.lineWidth = 5;
ctx.fillStyle = "#C43C27";
ctx.fill();

// colored lines
ctx.moveTo(255, 255);
ctx.lineTo(401, 314);
ctx.strokeStyle = "#C43C27";
ctx.stroke();

//colored circles
ctx.beginPath();
ctx.arc(215, 242, 38.5, 0, Math.PI * 2, false);
ctx.fillStyle = "#C43C27";
ctx.fill();

//border circles
ctx.beginPath();
ctx.arc(215, 242, 43, 0, Math.PI * 2, false);
ctx.lineWidth = 3.4;
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//lines

ctx.moveTo(262, 201); //to color
ctx.lineTo(248, 213); //from grey 159
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(188, 185);
ctx.lineTo(200, 202);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();


ctx.beginPath();
ctx.moveTo(150, 265);
ctx.lineTo(175, 253);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(231, 306);
ctx.lineTo(230, 283);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(653, 536);
ctx.lineTo(666, 529);
ctx.strokeStyle = "#D4D4D4";
ctx.stroke();

//inner text
ctx.font = "normal 9.2pt Arial";
ctx.fillStyle = '#fff';
ctx.fillText('Research &', 183, 236);

ctx.font = "normal 9.2pt Arial";
ctx.fillStyle = '#fff';
ctx.fillText('Development', 179, 250);


ctx.font = 'normal 10pt Arial';
ctx.fillStyle = '#fff';
ctx.fillText('21', 206, 267);