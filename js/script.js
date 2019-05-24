
fetch(`https://theblackwomanhistory.firebaseio.com/.json`)
.then((response) => {
    return response.json()
})
.then((data) => {
    
    const maravilhosas = document.querySelector('.maravilhosas__box')
    
    data.content.forEach((mulher) => {

        let box = document.createElement('div');
        box.setAttribute('class', 'maravilhosas__perfil');
        maravilhosas.appendChild(box)

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        box.appendChild(link)

        let img = document.createElement('img');
        img.setAttribute('class', 'img-responsive');

         /* 
        QUARTO - TERNARIO
        mulher.metadata && mulher.metadata.image ? img.setAttribute('src', mulher.metadata.image.url) : img.setAttribute(/img/img-mulher.png)
        */
      /*   TERCEIRO
        if(mulher.metadata == undefined  mulher.metadata.image == "") {
            img.setAttribute('src', './img/img-mulher.png')
        }else {
            img.setAttribute('src', mulher.metadata.image.url)
        } */
     
         
   /*      SEGUNDO
        if(mulher.metadata && mulher.metadata.image){
            img.setAttribute('src', mulher.metadata.image.url)
        } else {
            img.setAttribute('src', './img/img-mulher.png')
        } */
        
        //  PRIMEIRO
        if (mulher.metadata) {
            if (mulher.metadata.image) {
                if (mulher.metadata.image.url) {
                    img.setAttribute('src', mulher.metadata.image.url);
                }
            } else {
                img.setAttribute('src', './img/img-mulher.png');
            }
        } else {
            img.setAttribute('src', './img/img-mulher.png');
        }
        
        link.appendChild(img);
        
        let name = document.createElement('p');
        name.innerHTML = mulher.title
        box.appendChild(name)




        
    });
})
.catch(function(erro){
    console.log('ERRO!')
})