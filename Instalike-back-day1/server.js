// Importa o módulo Express, usado para criar e gerenciar o servidor
import express from 'express';

// Cria um array de posts com informações como id, descrição e imagem
// Cada objeto no array representa um post
const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem deslumbrante",
        imagem: "https://source.unsplash.com/random/300x200"
    },
    {
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://place.dog/300/200"
    },
    {
        id: 4,
        descricao: "Citação inspiradora",
        imagem: "https://picsum.photos/300/200"
    },
    {
        id: 5,
        descricao: "Comida deliciosa",
        imagem: "https://loremflickr.com/300/200/food"
    },
    {
        id: 6,
        descricao: "Desenho animado divertido",
        imagem: "https://picsum.photos/g/300/200"
    }
];

// Cria uma instância do Express, que será usada para configurar e gerenciar o servidor
const app = express();

// Configura o servidor para entender e processar requisições com JSON no corpo
app.use(express.json());

// Inicia o servidor na porta 3000
// O callback exibe uma mensagem no console quando o servidor começa a rodar
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000..");
});

// Rota para obter todos os posts
// Método GET para o endpoint "/posts"
app.get("/posts", (req, res) => {
    res.status(200).json(posts); // Responde com o array completo de posts em formato JSON
});

// Função para buscar o índice de um post pelo ID
// Recebe um ID e retorna o índice do post correspondente no array "posts"
function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        // Converte o ID passado para número e compara com o id de cada post
        return post.id === Number(id);
    });
};

// Rota para obter um post específico pelo ID
// ":id" é um parâmetro dinâmico que será extraído da URL
app.get("/posts/:id", (req, res) => {
    // Captura o ID da URL (sempre vem como string) e busca o índice do post
    const index = buscarPostPorID(req.params.id);

    // Retorna o post correspondente ao índice encontrado
    // Nota: Não há tratamento para IDs inválidos aqui
    res.status(200).json(posts[index]);
});
