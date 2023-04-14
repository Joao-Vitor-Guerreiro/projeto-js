const livrosporCategoria = [
  {
    categoria: "Riqueza",
    livros: [
      {
        titulo: "Os segredos da mente milionária",
        autor: "T. Harv Eker",
      },
      {
        titulo: "O homem mais rico da Babilônia",
        autor: "George S. Clason",
      },
      {
        titulo: "Pai rico, pai pobre",
        autor: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    categoria: "Inteligência Emocional",
    livros: [
      {
        titulo: "Você é Insubstituível",
        autor: "Augusto Cury",
      },
      {
        titulo: "Ansiedade – Como enfrentar o mal do século",
        autor: "Augusto Cury",
      },
      {
        titulo: "Os 7 hábitos das pessoas altamente eficazes",
        autor: "Stephen R. Covey",
      },
    ],
  },
];

function listaCategoria(livrosporCategoria) {

  const contaCategoria = livrosporCategoria.length;

  console.log(`O número de categoria é: ${contaCategoria}`);

  for (let x = 0; x < contaCategoria; x++) {
    const categoriaAtual = livrosporCategoria[x];
    const numLivros = categoriaAtual.livros.length;
    console.log(`A categoria ${categoriaAtual.categoria} tem ${numLivros} livros.`);

  }

}


function buscaLivro(nome) {
  const livrosEncontrados = [];

  livrosporCategoria.forEach(categoria => {
    categoria.livros.forEach(livro => {
      if (livro.autor === nome) {
        livrosEncontrados.push(livro.titulo);
      }
    });
  });

  if (livrosEncontrados.length > 0) {
    console.log(`Livros de ${nome}:`);
    livrosEncontrados.forEach(livro => console.log(livro));
  } else {
    console.log(`Nenhum livro encontrado com nomde de: ${nome}.`);
  }
}

listaCategoria(livrosporCategoria);
buscaLivro("T. Harv Eker");


function mudaBorda() {
  const elemento = document.querySelector('.galeria');
  //elemento.setAttribute('class','fundo galeria');

  //elemento.classList.add("fundo")
  elemento.classList.toggle('fundo');
  console.log(elemento);
  console.log(elemento.classList);
}

function abreFecha() {
  const elemento = document.querySelector('.galeria');

  //elemento.parentNode.classList.add("hide")
  elemento.classList.toggle('hide');

  if (btnGaleria.innerHTML === 'Fechar') {
    // Altera o texto para "Abrir" se o texto atual for "Fechar"
    btnGaleria.innerHTML = 'Abrir';
  } else {
    // Caso contrário, altera o texto para "Fechar"
    btnGaleria.innerHTML = 'Fechar';
  }
};

document.getElementById('btn-click').addEventListener('click', mudaBorda);
document.getElementById("btnGaleria").addEventListener('click', abreFecha);

const btnModal = document.getElementById('btn-modal');
const modal = document.getElementById('modal');

btnModal.addEventListener('click', function () {
  modal.style.display = 'block';
});

document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape') {
    modal.style.display = 'none';
    var btn = document.getElementById('btn-modal');
    btn.classList.add("animacao");
  }
});

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';

    var btn = document.getElementById('btn-modal');
    btn.classList.add("animacao");
  }
});

function animaModal() {
  const elemento = document.querySelector('#btn-click');
  console.log(elemento);
}

const elemento = document.querySelector("#btn-click");
console.log(elemento.id)
document.querySelector('#btn-click').addEventListener('click', animaModal);






