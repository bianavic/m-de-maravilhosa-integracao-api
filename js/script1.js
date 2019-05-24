//GET
const maravilhosas = document.querySelector('.maravilhosas__box')

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

            //DELETE 

            let btdel = document.createElement("button");
            btdel.textContent = "deletar";
            btdel.setAttribute("class", "btn_roxo")
            btdel.setAttribute("data-id", mulher.id)
            link.appendChild(btdel)

            btdel.addEventListener("click", () => {
                console.log("deletou");

                const cardtodo = btdel.parentElement;
                const card = cardtodo.parentElement;

                fetch(`http://localhost:5001/maravilhosas/${mulher.id}`, {
                    method: 'DELETE',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "id": button.getAttribute("data-id")
                    })
                })
                    .then((response) => {
                        card.removeChild(cardtodo)
                    })
            })

        })

    })
    .catch(function (erro) {
        console.log(erro);
    })

// POST

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
            'metadata': {
                'image': {
                    'url': image,
                }
            }
        })
    })
})
