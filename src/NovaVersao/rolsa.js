
 


let cafe1 = {};
let cafe2= {};
let cafe3= {};
let cafe4 = {};
const compras = [];

let props = cafe2;
let count = 4;
  let indCompras =0;
  let isInCompras = false;
  for (let index in compras)
  {
    if (compras[index].includes(props)){
      isInCompras = true;
      indCompras=index;
    }
  }
  if (!isInCompras)
  {
  let list = [props,count];
    compras.push(list);
  }
  else{
    compras[indCompras][1] = count;
  }


  console.log(compras);