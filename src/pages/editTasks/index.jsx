import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

import { getTasksId, editTask } from "../../services/tasksAPI";
import { formSchema } from "./utils";
import "./style.css";


export const EditTasks = () => {
    const { register, handleSubmit, formState, setValue} = useForm({ 
        resolver : zodResolver(formSchema)
    });

    const params = useParams();
    const id = params.id;
    
    const getData = async (data) => {
        console.log(data)
        await editTask(id, data.title, data.description, data.finish);
    }

    const handleGetId = async () => {
        const result = await getTasksId(id);

        setValue("title", result.task.title);
        setValue("description", result.task.description);
        setValue("finish", result.task.finish);
    }

    useEffect(() => {
        handleGetId();
    }, [])

    return(
        <>
            <h1>Editar Tarefa</h1>

            <form onSubmit={handleSubmit(getData)}>
                <div className="inputDivisor">
                    <label htmlFor="title">Titulo</label>
                    <input type="text" 
                    id="title"
                    {...register("title")}/>
                </div>
             <p>{formState.errors?.title?.message}</p>
                <div className="inputDivisor">
                    <label htmlFor="description">Descrição</label>
                    <input type="text" 
                    id="description"
                    {...register("description")}/>
                </div>
                <p>{formState.errors?.description?.message}</p>
                <div className="finishTask">
                    <label htmlFor="finish">Finalizado:</label>
                    <input type="checkbox" 
                    id="finish"
                    {...register("finish")}/>
                </div>
                <button type="submit">Enviar</button>
            </form>

            <Link className="link" to="/">Voltar</Link>
        </>
    )
}