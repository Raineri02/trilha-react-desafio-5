export const getPostBySlug = async (id) => {
    try {
        // Fazendo a requisição para buscar o post pelo ID
        const { data } = await api.get(`/posts/${id}`);

        // Retornando o post se encontrado
        if (data) {
            return data;
        }

        // Retornando um objeto vazio caso nenhum post seja encontrado
        return {};
    } catch (error) {
        console.error("Erro ao buscar o post:", error);
        // Lidando com erros e retornando um objeto vazio
        return {};
    }
};
