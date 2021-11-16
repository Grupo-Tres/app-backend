const bodyInCategoria = {
  sessaoName: "Pizza Salgada",
  secaoId: "pizzasal",
};

const bodyOutcategoria = {
  status: "ok",
  registro: {
    id: expect.stringMatching(
      /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
    ),
    sessaoName: "Pizza Salgada",
    secaoId: "pizzasal",
    createdAt: expect.stringMatching(
      /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9][0-9][0-9]Z/
    ),
    updatedAt: expect.stringMatching(
      /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9][0-9][0-9]Z/
    ),
  },
};

const bodyInProduto = {
  nome: "Calabresa com Catupiry",
  descricao: "Pizza de calbresa com catupiry",
  foto: "/image/calabresa.jpg",
  estoque: true,
  tamanho: "grande",
  quantidade: 10,
  disponivel: true,
  preco: 40.0,
  categoriaId: "",
};

const bodyOutProduto = {
  status: "ok",
  registro: {
    id: expect.stringMatching(
      /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
    ),
    nome: "Calabresa com Catupiry",
    descricao: "Pizza de calbresa com catupiry",
    foto: "/image/calabresa.jpg",
    estoque: true,
    tamanho: "grande",
    quantidade: 10,
    disponivel: true,
    preco: 40.0,
    categoriaId: "",
    createdAt: expect.stringMatching(
      /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9][0-9][0-9]Z/
    ),
    updatedAt: expect.stringMatching(
      /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T[0-2][0-9]:[0-5][0-9]:[0-5][0-9].[0-9][0-9][0-9]Z/
    ),
  },
};

const bodyOutCardapio = 
  {
    id: expect.stringMatching(
      /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
    ),
    sessaoName: "Pizza Salgada",
    secaoId: "pizzasal",
    produtos: [
      {
        id: expect.stringMatching(
          /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/
        ),
        nome: "Calabresa com Catupiry",
        descricao: "Pizza de calbresa com catupiry",
        foto: "/image/calabresa.jpg",
        estoque: true,
        tamanho: "grande",
        quantidade: 10,
        disponivel: true,
        preco: 40.0
      },
    ],
  };

module.exports = {
  bodyInCategoria,
  bodyOutcategoria,
  bodyInProduto,
  bodyOutProduto,
  bodyOutCardapio
};
