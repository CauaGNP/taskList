import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { postTask } from '../../services/tasksAPI/index';
import './style.css';
import { formSchema } from './utils';

export const CreateTasks = () => {
    const { register, handleSubmit, formState} = useForm({ 
        resolver : zodResolver(formSchema)
    });

    const getData = async (data) => {
        console.log(data);

        await postTask(data.title, data.description)
    }

    return(
        <>
            <h1>Criar tarefa</h1>
            <form onSubmit={handleSubmit(getData)}>
                <div>
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" 
                    id="title" 
                    onChange={ e => setTitle(e.target.value)} 
                    {...register("title")}/>
                    <p>{formState.errors?.title?.message}</p>
                </div>
                <div>
                    <label htmlFor="description">Descrição:</label>
                    <input type="text" 
                    id="description" 
                    onChange={ e => setDescription(e.target.value)}
                    {...register("description")}/>
                    <p>{formState.errors?.description?.message}</p>
                </div>
                <button type="submit">Enviar</button>
            </form>

            <Link className="link" to="/">Voltar</Link>
        </>
    )
}