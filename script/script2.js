const maravilhosas = document.querySelector('.maravilhosas__box')
(mulheres-maravilhosas-cadastro)

// POST METHOD
const form = new Form();
let name = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));

// GET METHOD:

fetch(`http://localhost:5001/maravilhosas`)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);

    data.content.forEach(mulher => {
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