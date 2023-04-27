// function soma(n1, n2) {
//     return n1 + n2;
// }

// console.log(soma(15, 23));

// let tmp = "";

// function mudaCor() {

//     let r = 0;
//     let g = 0;
//     let b = 0;

//     //Math
//     r = Math.ceil(Math.random() * 255);
//     g = Math.ceil(Math.random() * 255);
//     b = Math.ceil(Math.random() * 255);

//     const elementos = [...document.getElementsByClassName("cabecalho")];

//     elementos.forEach((el)=>{
//         el.style.backgroundColor = `rgb(${r},${g},${b})`;
//     })

//     tmp = setTimeout(mudaCor, 50);

// }

// mudaCor()

function changeBanner() {
    
    let nr1 = Math.ceil(Math.random()*3);
    let nr2 = Math.ceil(Math.random()*3);
    //Randomiza um numero entre 1 e 3 para escolher as imagens

    let caminhoImg1 = `./img/banner-lateral-${nr1}.png`;
    let caminhoImg2 = `./img/banner-lateral-${nr2}.png`;
    //Troca a imagem dos banners
   
    const b1 = document.querySelector(".banner-1 img");
    const b2 = document.querySelector(".banner-2 img");
    b1.src = caminhoImg1;
    b2.src = caminhoImg2;

    setTimeout(mudaBanner1 , 1000);
    //Troca a imagem a cada 1 segundo
}

changeBanner();

//Math.ceil arredonda pra cima