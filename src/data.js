import { Mountain, Glasses, NotebookPen, Compass, Wine, Coffee, Flag, BicepsFlexed, Brain, Rocket, Trophy, Lightbulb, TreePine, Building2, House, Handshake, Users, Heart } from 'lucide-react';
export const characters = {
 tito:{image:'/assets/tito-v2.webp',name:'Tito',display:'TiTO',color:'#1B8CE6',phrase:'Curioso, veloz e sempre pronto pra aventura.',traits:['Aventureiro','Curioso','Espontâneo'],scene:0},
 rico:{image:'/assets/rico.webp',name:'Rico',display:'RiCO',color:'#EE2018',phrase:'Estiloso, confiante e cheio de atitude.',traits:['Estiloso','Confiante','Descolado'],scene:1},
 nino:{image:'/assets/nino.webp',name:'Nino',display:'NiNO',color:'#66962A',phrase:'Calmo, divertido e muito criativo.',traits:['Criativo','Calmo','Divertido'],scene:5}
};
const q=(before,word,after,color,options)=>({before,word,after,color,options:options.map(([id,Icon,text])=>({id,Icon,text}))});
export const questions=[
 q('Como você prefere passar o seu','tempo','?','#1B8CE6', [['tito',Mountain,'Explorando lugares novos e vivendo aventuras.'],['rico',Glasses,'Curtindo com amigos e aproveitando a vida.'],['nino',NotebookPen,'Em casa, estudando, criando algo ou relaxando.']]),
 q('Qual é o seu','estilo',' ideal de rolê?','#7B3FBF',[['tito',Compass,'Trilhas, passeios e contato com a natureza.'],['rico',Wine,'Festas, shows e lugares badalados.'],['nino',Coffee,'Cafés, livrarias e lugares tranquilos.']]),
 q('Como você lida com','desafios','?','#1E6B2F',[['tito',Flag,'Encaro como uma nova aventura e vou até o fim.'],['rico',BicepsFlexed,'Com confiança, sempre acredito que consigo.'],['nino',Brain,'Penso com calma, planejo e analiso as opções.']]),
 q('O que mais te','motiva',' no dia a dia?','#0B1F5C',[['tito',Rocket,'Descobrir coisas novas e sair da rotina.'],['rico',Trophy,'Conquistar meus objetivos e me destacar.'],['nino',Lightbulb,'Aprender, criar e evoluir sempre.']]),
 q('Qual ambiente mais combina com','você','?','#C45C0A',[['tito',TreePine,'Ao ar livre, na natureza e longe da rotina.'],['rico',Building2,'Na cidade, com movimento e pessoas ao redor.'],['nino',House,'Em um lugar tranquilo e confortável.']]),
 q('O que você mais','valoriza',' em uma amizade?','#1B4F8C',[['tito',Handshake,'Sinceridade e parceria para qualquer aventura.'],['rico',Users,'Diversão, presença e boas risadas.'],['nino',Heart,'Conversas profundas e apoio em todas as fases.']])
];
