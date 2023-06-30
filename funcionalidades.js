let cont=0;

let img = document.getElementById("img");

let txt = document.getElementById("txt");

txt.style.fontSize='x-large';

let title = document.getElementById("title");

let newText;

let i=0;

let divImage = document.getElementById("divImage");

let btnRight = document.getElementById("btn-right");

let btnLeft = document.getElementById('btn-left');

let buttons = document.getElementById('buttons');

if(cont==0){

    btnLeft.style.display='none';

    divImage.style.height = '50%';

    buttons.style.height = '0';

    buttons.style.display = 'flex';
    buttons.style.alignItems = 'center';
    buttons.style.content = 'center';

    btnRight.style.marginLeft='auto';
    btnRight.style.marginRight='auto';

    btnRight.innerText='Lets GO!!';

}

function right(){
    
    btnLeft.style.display='inline';
    buttons.style.display = 'block';

    divImage.style.height = '90%';

    btnRight.innerText='Próximo';

    buttons.style.height = '10%';
    buttons.style.textAlign = 'center';
    buttons.style.width = '100%';
    
    if(cont==23){
        carregarPag();    
    }else{
        cont++;
        carregarPag();
    }
    
}

function left(){
    if(cont<23){
        cont--;
        carregarPag();
    }else{
        aceitou();
    }
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

        txt.innerText = 'eu começaria a dormir no seu ombro durante nossos poucos minutos de descanso';

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

        txt.innerText = 'fiquei admirado enquanto você apresentava o seu trabalho de Iniciação Científica';

    }else if(cont==11){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img11.jpeg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img11.jpeg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'nos formamos juntos';

    }else if(cont==12){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img12.jpeg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img12.jpeg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'tivemos vários rolês';

    }else if(cont==13){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img13.jpeg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img13.jpeg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'nos tornamos universitários';

    }else if(cont==14){

        title.innerText = 'Em menos de um ano...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img14.gif" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img14.gif" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'aconteceu tanta coisa que as vezes nem parece';

    }else if(cont==15){

        title.innerText = 'Mas que bom...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img15.jpeg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img15.jpeg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'me fez sentir que eu quero vivenciar muito mais ao seu lado';

    }else if(cont==16){

        title.innerText = 'Você é...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img16.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img16.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'a dama do meu vagabundo';

    }else if(cont==17){

        title.innerText = 'Você é...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img17.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img17.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'a minha Evangeline';

    }else if(cont==18){

        title.innerText = 'Você é...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img18.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img18.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'a minha Bela';

    }else if(cont==19){

        title.innerText = 'Você é...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img19.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img19.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'a minha Hinata';

    }else if(cont==20){

        title.innerText = 'Com você eu...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img20.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img20.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'vivo um mundo ideal';

    }else if(cont==21){

        title.innerText = 'Com você eu...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img21.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img21.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'vejo enfim luz brilhar';

    }else if(cont==22){

        title.innerText = 'Com você eu...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img22.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img22.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'sinto o amor chegar';

    }else if(cont==23){

        i++;

        if(i==5){
            alert("Tá de brincadeira :|");
        }

        title.innerText = 'Por isso eu finalmente pergunto...';

        img.innerHTML ='';

        txt.innerText = '';

        if (window.matchMedia("(max-width:1064px)").matches) {
            
            img.innerHTML ='<img src="img/img23.jpg" width="90%" height="35%" alt="">';

        }else{

            img.innerHTML ='<img src="img/img23.jpg" width="45%" height="50%" alt="">';
        
        }

        txt.innerText = 'Quer namorar comigo?';

        
        btnRight.innerText='Não';

       
        btnLeft.innerText = 'Sim';
        if(i!=1){
            btnRight.style.position="absolute";
            let x = Math.floor(Math.random() * 300);
            let y = Math.floor(Math.random() * 300);
            btnRight.style.left = x+"px";
            btnRight.style.top = y+"px";
        }


       // let btnRight = document.getElementById("btn-right");
        
        //btnRight.style.position="static";

    }
    
    else{
        window.location.reload();
    }

}

function aceitou(){
    
    title.innerText = 'EU TE AMO!!';

    img.innerHTML ='';
  
    btnRight.style.position="static";

    txt.innerText = '';

    if (window.matchMedia("(max-width:1064px)").matches) {
            
        img.innerHTML ='<img src="img/aceitou.gif" width="90%" height="35%" alt="">';

    }else{

        img.innerHTML ='<img src="img/aceitou.gif" width="85%" height="50%" alt="">';
    
    }

    txt.innerText = 'WE ARE THE CHAMPIONS!';

    btnLeft.style.display='none';
       
    btnRight.style.display='none';

    txt.style.fontSize='xx-large';

}