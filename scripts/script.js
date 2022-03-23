let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let nome = document.querySelector("input[name='nome']");
    let ano = document.querySelector("input[name='ano']");
    let valor = document.querySelector("input[name='valor']");
    let contato = document.querySelector("input[name='contato']");
    let imagem = document.querySelector("input[name='imagem']");
    let descricao = document.querySelector("textarea[name='descricao']");
   
    let novaDiv = ` 
    <div class="card gap" >
        <img src="${imagem.value}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${nome.value}</h5>
            <h5 class="card-title">${ano.value}</h5>
            <h6 class="card-title">${valor.value}</h6>
            <p class="card-text">${descricao.value}</p>
            <h5 class="card-title">${contato.value}</h5>
            <a href="#" class="btn btn-primary">Ver Mais</a>
        </div>
    </div>`;

    let cards_geral = document.getElementById('cards-geral');
    cards_geral.innerHTML += novaDiv;
    cards_geral.appendChild(novaDiv);
    
})



