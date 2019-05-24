const maravilhosas = document.querySelector('.maravilhosas__box')


const botao = document.createElement("button");
botao.textContent = "✖";
botao.setAttribute("data-id", usuario.id)
box.appendChild(botao)

botao.addEventListener("click", () => {
    const thisBox = botao.parentElement;            
    const boxPai = thisBox.parentElement;            

    fetch("https://reqres.in/api/users", {
        method: 'DELETE',
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": botao.getAttribute("data-id")
        })
    })
    .then(() =>{
        cardPai.removeChild(thisCard)
    })
    .catch((erro) =>{
        console.log(erro)
    })
})


fetch(`http://localhost:5001/maravilhosas`)
.then((response) => {
    return response.json()
})
.then((data) => {
        
    data.content.forEach((mulher) => {

        let box = document.createElement('div');
        box.setAttribute('class', 'maravilhosas__perfil');
        maravilhosas.appendChild(box)

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        box.appendChild(link)

        let img = document.createElement('img');
        img.setAttribute('class', 'img-responsive');

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

    const button = document.querySelector('#button');
    button.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const image = document.getElementById("image").value;

    fetch('http://localhost:5001/maravilhosas', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome,
            'metadata': {'image': {
                'url': image,
            },
        }
    })
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("message").textContent = "Sucesso!! :)"
    })
    .catch((erro) => {
        console.log(erro)
    })
    location.reload(true)
})