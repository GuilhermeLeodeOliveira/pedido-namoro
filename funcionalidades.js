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

        if (window.matchMedia("(max-width:1064px)").matches) {

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
        
        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img2.jpg" width="90%" height="35%" alt="">';

        }else{
            img.innerHTML ='<img src="img/img2.jpg" width="45%" height="35%" alt="">';
        }

        txt.innerText = 'Linda, meiga, cheirosa, maravilhosa...';

    }else if(cont==3){

        title.innerText = 'Ela é...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img3.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img3.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'gata, muito inteligente, esforçada, super organizada';
    
    }else if(cont==4){

        title.innerText = 'Já disse linda?';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img4.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img4.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'bela, delicada, encantadora, carinhosa';
    
    }else if(cont==5){

        title.innerText = 'E...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img5.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img5.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'todos os melhores adjetivos já inventados na terra!';
    
    }else if(cont==6){

        title.innerText = 'Mas o melhor de tudo...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img6.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img6.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'é que ela é o meu amor!';

    }else if(cont==7){

        title.innerText = 'Quem diria que...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img7.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img7.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'eu encontraria a melhor pessoa num dos piores lugares do mundo.';

    }else if(cont==8){

        title.innerText = 'E que só depois de 4 anos...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img8.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img8.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'eu começaria a dormir no seu ombro durante nossos poucos minutos de descanso juntos';

    }else if(cont==9){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img9.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img9.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'vi sua premiação na Olimpíada Brasileira de Astronomia';

    }else if(cont==10){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img10.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img10.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'fiquei admirado enquanto você apresentava o seu trabalho de Inicição Científica';

    }else if(cont==11){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img11.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img11.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'nos formamos';

    }else if(cont==12){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img12.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img12.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'sorrimos juntos';

    }else if(cont==13){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img13.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img13.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'estivemos lá um para o outro da jenuinamente';

    }
    
    /*
    else if(cont==4){

        title.innerText = 'Quem diria que...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img4.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img4.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'eu encontraria a melhor pessoa num dos piores lugares do mundo.';
    
    }
*/
    else{
        window.location.reload();
    }

}

