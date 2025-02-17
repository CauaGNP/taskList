import './App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getAllTasks, deleteTask } from './services/tasksAPI';
import { CardButton, CardDescription, CardTitle, CardContainer, CardInput, CardLink } from './components/Cards';


function App() {
  const [tasks, setTaks] = useState( []) ;

  const handleGet = async () => {
    const result = await getAllTasks();
    setTaks(result.task);
  }

  const handleDelete = async (id) => {
    const validation = confirm("Você quer excluir essa tarefa?");

    if(validation){
      await deleteTask(id);

      location.reload();
    }
  }

  useEffect(() => {
    handleGet();
  }, [])

  return (
    <>
        <h1 className='titleHeader'>Lista de Tarefas</h1>
        <Link className="createTaskLink" to="/createTasks/">Criar tarefa</Link>
      {
        tasks.length > 0 && tasks.map(item => (
          <CardContainer key={item.id}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardInput
            value={item.finish}
            checked={item.finish}/>
            <div className='inlineButtons'>
            <CardLink id={item.id}>Editar</CardLink>
            <CardButton onClickFunction={() => { handleDelete(item.id)}}>Excluir</CardButton>
            </div>
          </CardContainer>
        ))
      }
    </>
  )
}

export default App