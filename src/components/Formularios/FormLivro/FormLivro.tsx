import { useState } from 'react';
import estilo from './FormLivro.module.css';
import LivroRequests from '../../../fetch/LivroRequests';

function FormLivro() {
    const [formData, setFormData] = useState({
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: 0,
        isbn: '',
        quantTotal: 0,
        quantDisponivel: 0,
        valorAquisicao: 0,
        statusLivroEmprestado: ''
    });

    const handleChange = (nome: string, valor: string) => {
        setFormData({ ...formData, [nome]: valor });
    };

    const handleSubmit = async (formData: {titulo: string; autor: string; editora: string; anoPublicacao: number; isbn:string; quantTotal: number; quantDisponivel: number; valorAquisicao: number; }) => {
        const resposta = await LivroRequests.enviaFormularioLivro(JSON.stringify(formData));
        if (resposta) {
            alert('Livro cadastrado com sucesso.');
        } else {
            alert('Erro ao cadastrar livro.');
        }
    };

    return (
        <section className={estilo['sec-form-livro']}>
            <h1>Cadastro de Livro</h1>
            <form action="post" onSubmit={(e) => { e.preventDefault(); handleSubmit(formData); }}
                className={estilo['form-livro']}
            >
                <label htmlFor="">
                    Título
                    <input
                        type="text"
                        name="titulo"
                        required
                        onChange={(e) => handleChange('titulo', e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Autor
                    <input
                        type="text"
                        name="autor"
                        required
                        onChange={(e) => handleChange('autor', e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Editora
                    <input
                        type="text"
                        name="editora"
                        required
                        onChange={(e) => handleChange('editora', e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Ano de Publicação
                    <input
                        type="text"
                        name="anoPublicacao"
                        minLength={4}
                        maxLength={4}
                        onChange={(e) => handleChange('anoPublicacao', e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    ISBN
                    <input
                        type="text"
                        name="isbn"
                        maxLength={20}
                        onChange={(e) => handleChange('isbn', e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Quantidade Total
                    <input
                        type="number"
                        name="quantTotal"
                        required
                        onChange={(e) => handleChange('quantTotal', e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Quantidade Disponível
                    <input
                        type="number"
                        name="quantDisponivel"
                        required
                        onChange={(e) => handleChange('quantDisponivel', e.target.value)}
                    />
                </label>

                <label htmlFor="">
                    Valor de Aquisição
                    <input
                        type="number"
                        name="valorAquisicao"
                        onChange={(e) => handleChange('valorAquisicao', e.target.value)}
                    />
                </label>

                <input type="submit" value="ENVIAR" />
            </form>
        </section>
    );
}

export default FormLivro;
