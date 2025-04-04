import { useEffect, useState } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from "primereact/button";
import EmprestimoRequests from "../../../fetch/EmprestimoRequests";

function TabelaEmprestimo() {

    const [emprestimos, setEmprestimos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pipi refresh" text />
    const paginatorRight = <Button type="button" icon="pipi refresh" text />

    useEffect(() => {
        const fetchEmprestimos = async () => {
            try {
                const ListaDeEmprestimos = await EmprestimoRequests.listarEmprestimos();
                setEmprestimos(ListaDeEmprestimos);
            } catch (error) {
                console.error(`Erro ao buscar emprestimos: ${error}`);
            }
        };
        fetchEmprestimos();
    }, [emprestimos]);

    return (
        <>
            <DataTable value={emprestimos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth:'50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="aluno.nome" header="Nome do Aluno" style={{ width: '25%' }}></Column>
                <Column field="livro.titulo" header="Nome do Livro" style={{ width: '25%' }}></Column>
                <Column field="dataEmprestimo" header="Data do Empréstimo" style={{ width: '25%' }}></Column>
                <Column field="dataDevolucao" header="Data de Devolução" style={{ width: '25%' }}></Column>
                <Column field="statusEmprestimo" header="Status do Empréstimo" style={{ width: '25%' }}></Column>
            </DataTable>
        </>
    );
}

export default TabelaEmprestimo;