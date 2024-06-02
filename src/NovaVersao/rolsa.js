const cafe1 = {nome : "Espresso Tradicional", imagem: "cafe1.svg", desc:"o tradicional café feito com água quente e grãos moídos", preco:9.90, tags:["tradicional"] }
const cafe2 = {nome : "cafe2", imagem: "cafeImagem", desc:"cafeDesc", preco:9.90, tags:"cafetags" }
const DentroKart = [[cafe1,2],[cafe2,1]]
 


let soma = 0;
    for (let index in DentroKart)
      {
        soma += DentroKart[index][1]*DentroKart[index][0].preco;
        console.log(DentroKart[index][1]);
        console.log(DentroKart[index][0].preco);
      }
console.log(soma);