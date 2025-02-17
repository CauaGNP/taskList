import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';

import { CreateTasks } from '../pages/createTasks';
import { EditTasks } from '../pages/editTasks';

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={ <App/>} path="/"/>
            </Routes>

            <Routes>
                <Route element={ <CreateTasks/> } path="/createTasks/" />
            </Routes>
            <Routes>
                <Route element={ <EditTasks/> } path="/editTask/:id" />
            </Routes>
        </BrowserRouter>
    )
}