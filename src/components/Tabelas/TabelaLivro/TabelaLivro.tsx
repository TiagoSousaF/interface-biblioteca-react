import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import LivroRequests from "../../../fetch/LivroRequests";
import { Button } from "primereact/button";
import { } from "react-number-format";

function TabelaLivro() {

    const [livros, setLivros] = useState([]);

    const paginatorLeft = <Button type="button" icon="pipi refresh" text />
    const paginatorRight = <Button type="button" icon="pipi refresh" text />

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const ListaDeLivros = await LivroRequests.listarLivros();
                setLivros(ListaDeLivros);
            } catch (error) {
                console.error(`Erro ao buscar livros: ${error}`);
            }
        };
        fetchLivros();
    }, [livros]);

    return (
        <>
            <DataTable value={livros} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth:'50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="titulo" header="Título" style={{ width: '25%' }}></Column>
                <Column field="autor" header="Autor" style={{ width: '25%' }}></Column>
                <Column field="editora" header="Editora" style={{ width: '25%' }}></Column>
                <Column field="isbn" header="ISBN" style={{ width: '25%' }}></Column>
                <Column field="valorAquisicao" header="Valor Aquisição" style={{ width: '25%' }}></Column>
            </DataTable>
        </>
    );
}

export default TabelaLivro;