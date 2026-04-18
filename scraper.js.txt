const titulo =
  el.querySelector("h2")?.innerText ||
  el.querySelector("h3")?.innerText ||
  el.innerText.split("\n")[0] ||
  "Imóvel";

const preco =
  el.innerText.match(/R\$[\s\d\.,]+/)?.[0] ||
  "Consulte";

const descricao =
  el.querySelector("p")?.innerText ||
  el.innerText.slice(0, 120);
