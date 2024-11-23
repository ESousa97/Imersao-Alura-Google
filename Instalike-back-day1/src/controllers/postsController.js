import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // **Chama a função para obter os posts e envia os dados como resposta JSON**
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}
