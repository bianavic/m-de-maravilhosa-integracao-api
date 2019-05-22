const maravilhosas = document.querySelector('.maravilhosas__box');


fetch(`https://theblackwomanhistory.firebaseio.com/.json
`)
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data.content);

    data.content.forEach(mulheres => {
        let box = document.createElement('div');
        box.setAttribute('class', 'maravilhosas__perfil');
        box.setAttribute('box-id', data.id);
        maravilhosas.appendChild(box);

        let name = document.createElement('p');
        name.innerHTML = mulheres.title
        box.appendChild(name);

    

});

})
.catch(function(error){
    console.log('ERRORR')
})