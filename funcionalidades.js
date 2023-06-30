let cont=0;

let img = document.getElementById("img");

let txt = document.getElementById("txt");

txt.style.fontSize='larger';

let title = document.getElementById("title");

let newText;

function right(){

    cont++;

    carregarPag();

    /*
    let btnRight = document.getElementById("btn-right");
    btnRight.style.position="absolute";
    let x = Math.floor(Math.random() * 300);
    let y = Math.floor(Math.random() * 300);
    btnRight.style.left = x+"px";
    btnRight.style.top = y+"px";

        let btnRight = document.getElementById("btn-right");
    
        btnRight.style.position="static";


    */


}

function left(){
    cont--;
    carregarPag();
}

function carregarPag(){

    if(cont==1){
        
        title.innerText = 'Vamos falar de amor...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:800px)").matches) {

            img.innerHTML ='<img src="img/img1.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img1.jpg" width="45%" height="35%" alt="">';

        }

//        img.innerHTML ='<img src="img/img1.jpg" width="45%" height="35%" alt="">';

        txt.innerText = 'Essa aqui é o meu';

    }else if(cont==2){

        title.innerText = 'Ela é...';

        img.innerHTML ='';

        txt.innerText = '';
        
        if (window.matchMedia("(max-width:800px)").matches) {
            
            img.innerHTML ='<img src="img/img2.jpg" width="90%" height="35%" alt="">';

        }else{
            img.innerHTML ='<img src="img/img2.jpg" width="45%" height="35%" alt="">';
        }

        txt.innerText = 'Linda, meiga, cheirosa, maravilhosa...';

    }else if(cont==3){

        title.innerText = 'Ela é...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:800px)").matches) {
            
            img.innerHTML ='<img src="img/img3.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img3.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'gata, super inteligente e todos os adjetivos bons já inventados na terra!';
    
    }else if(cont==4){

        title.innerText = 'Quem diria que...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:800px)").matches) {
            
            img.innerHTML ='<img src="img/ifsp.jpg" width="100%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/ifsp.jpg" width="50%" height="50%" alt="">';
        
        }

        txt.innerText = 'eu encontraria a melhor pessoa num dos piores lugares do mundo.';
    
    }
    
    else{
        window.location.reload();
    }

}

