/**
 * Estudo do Array
 * @author Gabriel Lima
 */

function sortear (){
   let nipes = ["♥","♦","♣","♠"]
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
    
    let nipeSorteado = nipes [Math.floor(Math.random() * 4)]
    let faceSorteado = faces [Math.floor(Math.random() * 13)]
    //console.log(faceSorteado)
    //console.log(nipeSorteado)
    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }
    let cc = document.getElementById('centroCarta')
    if (faceSorteado === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`
    } else if (faceSorteado === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`
    } else if (faceSorteado === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`
    } else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }


    document.getElementById('supEsq').innerHTML = `<div>${faceSorteado}</div> <div>${nipeSorteado}</div>`
      

     document.getElementById('supEsq').style.color = cor
     
     document.getElementById('infDir').style.color = cor
     document.getElementById('centroCarta').style.color = cor
     document.getElementById('infDir').innerHTML = `<div>${faceSorteado}</div> <div>${nipeSorteado}</div>`
     
    
}