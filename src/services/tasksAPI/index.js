import axios from "axios";

const api = axios.create();

api.defaults.baseURL = "http://localhost:3001";

const getAllTasks = async () => {
    const result = await api.get("/task");
    return result.data;
}

const getTasksId = async (id) => {
    const result = await api.get(`/task/${id}`);
    return result.data;
}

const postTask = async (title, description) => {
    const result = await api.post("/task", {
        title,
        description,
        finish : false
    });

    return result;
}

const editTask = async (id, title, description, finish) => {
    const result = await api.patch(`/task/${id}`, {
        title,
        description,
        finish
    });
    
    return result;
}

const deleteTask = async (id) => {
    const result = await api.delete(`/task/${id}`);

    return result.data;
}

export { getAllTasks, getTasksId, postTask, editTask, deleteTask };