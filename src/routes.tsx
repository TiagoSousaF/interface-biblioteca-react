import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { APP_ROUTES } from './appConfig';
import PHome from './pages/PHome/PHome';
import PLogin from './pages/PLogin/PLogin';
import PAluno from './pages/PAlunos/PAlunos';
import PLivro from './pages/PLivros/PLivros';
import PEmprestimo from './pages/PEmprestimo/PEmprestimo';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>}/>
                <Route path={APP_ROUTES.ROUTE_LOGIN} element={<PLogin/>}/>   
                <Route path={APP_ROUTES.ROUTE_ALUNO} element={<PAluno/>}/>
                <Route path={APP_ROUTES.ROUTE_LIVRO} element={<PLivro/>}/>
                <Route path={APP_ROUTES.ROUTE_EMPRESTIMO} element={<PEmprestimo/>}/>
            </Routes>   
        </BrowserRouter>
    );
}

export default AppRoutes;
