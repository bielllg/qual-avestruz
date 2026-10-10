import test from 'node:test';
import assert from 'node:assert/strict';
import {calculateResult, ids} from './scoring.js';
test('Todas as 729 combinações somam 100 e elegem um líder', () => {
 for(let n=0;n<729;n++){let v=n;const a=Array.from({length:6},()=>{const id=ids[v%3];v=Math.floor(v/3);return id});const r=calculateResult(a);assert.equal(Object.values(r.percentages).reduce((x,y)=>x+y),100);assert.equal(r.counts[r.winner],Math.max(...Object.values(r.counts)));}
});
test('Empate usa a resposta mais recente entre líderes',()=>assert.equal(calculateResult(['tito','rico','nino','tito','rico','nino']).winner,'nino'));
test('Respostas incompletas são rejeitadas',()=>assert.throws(()=>calculateResult(['tito'])));
