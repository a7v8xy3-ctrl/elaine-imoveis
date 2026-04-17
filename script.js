fetch('imoveis.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('lista-imoveis');

    data.forEach(imovel => {
      container.innerHTML += `
        <div class="card">
          <img src="${imovel.imagem}">
          <h3>${imovel.titulo}</h3>
          <p>${imovel.descricao}</p>
          <strong>${imovel.preco}</strong>
          <br><br>
          <a class="btn-gold"
             href="https://wa.me/5524992799078?text=Interesse em ${imovel.titulo}">
             Solicitar
          </a>
        </div>
      `;
    });
  });