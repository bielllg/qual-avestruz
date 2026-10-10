import QRCode from 'qrcode';
import {characters} from './data';
import {ids} from './scoring';
function loadImage(src){return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src})}
function drawCover(ctx,img,width,height){const scale=Math.max(width/img.width,height/img.height),cropWidth=width/scale,cropHeight=height/scale;ctx.drawImage(img,(img.width-cropWidth)/2,(img.height-cropHeight)/2,cropWidth,cropHeight,0,0,width,height)}
function centeredLines(ctx,text,x,y,maxWidth,lineHeight){let line='';for(const word of text.split(' ')){const next=`${line}${word} `;if(ctx.measureText(next).width>maxWidth&&line){ctx.fillText(line.trim(),x,y);line=`${word} `;y+=lineHeight}else line=next}ctx.fillText(line.trim(),x,y);return y}
export async function makeCard(result,siteUrl){
 await document.fonts.ready;
 const c=characters[result.winner];
 const qrData=await QRCode.toDataURL(siteUrl,{errorCorrectionLevel:'M',width:220,margin:2,color:{dark:'#1A1A2EFF',light:'#FFFFFFFF'}});
 const [bird,scene,qr]=await Promise.all([loadImage(c.image || `/assets/${result.winner}.png`),loadImage(`/assets/cenario-hd-${c.scene}.webp`),loadImage(qrData)]);
 const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1920;const ctx=canvas.getContext('2d');
 ctx.fillStyle=c.color;ctx.fillRect(0,0,1080,1920);ctx.globalAlpha=.65;drawCover(ctx,scene,1080,1120);ctx.globalAlpha=1;
 const shade=ctx.createLinearGradient(0,0,0,1100);shade.addColorStop(0,`${c.color}88`);shade.addColorStop(.55,`${c.color}22`);shade.addColorStop(1,`${c.color}DD`);ctx.fillStyle=shade;ctx.fillRect(0,0,1080,1120);
 const birdRatio=bird.width/bird.height, birdHeight=870,birdWidth=birdHeight*birdRatio;ctx.drawImage(bird,(1080-birdWidth)/2,130,birdWidth,birdHeight);
 ctx.textAlign='center';ctx.fillStyle='#FFC21A';for(const [x,y,size] of [[130,230,70],[930,680,45],[150,790,35]]){ctx.font=`${size}px "Lilita One"`;ctx.fillText('✦',x,y)}
 ctx.save();ctx.translate(885,215);ctx.rotate(.12);ctx.fillStyle='#FFF6E5';ctx.beginPath();ctx.arc(0,0,122,0,Math.PI*2);ctx.fill();ctx.fillStyle='#1A1A2E';ctx.font='80px "Lilita One"';ctx.fillText(`${result.percentages[result.winner]}%`,0,15);ctx.font='800 25px Nunito';ctx.fillText('do seu jeitinho',0,58);ctx.restore();
 // Selo compacto no canto: o QR fica 10% menor e longe do personagem.
 ctx.textAlign='center';ctx.fillStyle='#FFF9EC';ctx.beginPath();ctx.roundRect(12,48,294,40,20);ctx.fill();
 ctx.fillStyle='#1A1A2E';ctx.font='900 22px Nunito';ctx.fillText('QUAL AVESTRUZ É VOCÊ?',159,75);
 ctx.drawImage(qr,49,98,220,220);
 ctx.fillStyle='#FFF9EC';ctx.beginPath();ctx.roundRect(49,326,220,38,19);ctx.fill();
 ctx.fillStyle='#1A1A2E';ctx.font='900 19px Nunito';ctx.fillText('Aponte a câmera',159,352);
 ctx.fillStyle='#FFF6E5';ctx.beginPath();ctx.moveTo(0,1110);for(let x=0;x<=1080;x+=30)ctx.lineTo(x,x%60===0?1077:1100);ctx.lineTo(1080,1920);ctx.lineTo(0,1920);ctx.closePath();ctx.fill();
 ctx.fillStyle='#1A1A2E';ctx.font='800 35px Nunito';ctx.fillText('Você tem o jeito do',540,1180);ctx.fillStyle=c.color;ctx.font='170px "Lilita One"';ctx.fillText(c.display,540,1350);
 ctx.fillStyle='#1A1A2E';ctx.font='800 35px Nunito';centeredLines(ctx,c.phrase,540,1410,870,43);
 ctx.font='800 24px Nunito';c.traits.forEach((trait,i)=>{const x=80+i*310;ctx.fillStyle=`${c.color}1A`;ctx.beginPath();ctx.roundRect(x,1493,290,58,29);ctx.fill();ctx.fillStyle='#1A1A2E';ctx.fillText(trait,x+145,1530)});
 ctx.textAlign='left';ctx.font='36px "Lilita One"';ctx.fillText('Uma mistura só sua.',80,1610);
 ids.forEach((id,i)=>{const y=1650+i*65;ctx.fillStyle='#1A1A2E';ctx.font='900 27px Nunito';ctx.textAlign='left';ctx.fillText(characters[id].name,80,y+23);ctx.fillStyle='#e8e0d3';ctx.beginPath();ctx.roundRect(230,y+3,640,16,8);ctx.fill();if(result.percentages[id]>0){ctx.fillStyle=characters[id].color;ctx.beginPath();ctx.roundRect(230,y+3,640*result.percentages[id]/100,16,8);ctx.fill()}ctx.fillStyle='#1A1A2E';ctx.textAlign='right';ctx.fillText(`${result.percentages[id]}%`,1000,y+23)});
 ctx.textAlign='center';ctx.fillStyle='#6a6470';ctx.font='800 24px Nunito';ctx.fillText('Qual avestruz é você?',540,1870);
 return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Falha ao gerar cartão')),'image/png'));
}
