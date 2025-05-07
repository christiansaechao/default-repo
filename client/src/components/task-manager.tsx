import { useEffect, useState } from "react";
import { supabase } from '../../utils/supabase';

interface NewTaskProps {
    title: string;
    description: string;
}

interface Task {
    id: number;
    title: string; 
    description: string; 
    craeted_at: string;
}

const TaskManager = () => {
    const [newTask, setNewTask] = useState<NewTaskProps>({
        title: "",
        description: "",
    });

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newDescription, setNewDescription] = useState<string>("");

    const fetchTasks = async () => {
        const  { error, data } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: true });

        if (error) {
            console.error("error reading task: ", error.message);
            return;
        }

        setTasks(data);
    };

    const deleteTasks = async (id: number) => {
        const  { error } = await supabase
        .from("tasks")
        .delete()
        .eq("id", id);

        if (error) {
            console.error("error deleting task: ", error.message);
            return;
        }
    }

    const updateTasks = async (id: number) => {
        const  { error } = await supabase
        .from("tasks")
        .update({ description: newDescription })
        .eq("id", id);

        if (error) {
            console.error("error deleting task: ", error.message);
            return;
        }
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const { error } = await supabase.from("tasks").insert(newTask).single();

        if (error) {
            console.error("error adding task: ", error.message);
            return;
        }

        setNewTask({ title: "", description: "" });
    };

    useEffect(() => {
        fetchTasks();
    }, [])

    console.log(tasks);

    return (
        <div style={{ width: "600px", margin: "0 auto", padding: "1rem" }}>
            <h2>Task Manager CRUD</h2>

            {/* Form to add a new task */}
            <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
                <input
                type="text"
                placeholder="Task Title"
                style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                />
                <textarea
                placeholder="Task Description"
                style={{ width: "100%", marginBottom: "0.5rem", padding: "0.5rem" }}
                onChange={(e) =>  setNewTask({ ...newTask, description: e.target.value })}
                />
                <button type="submit" style={{ padding: "0.5rem 1rem" }}>
                Add Task
                </button>
            </form>

            {/* List of Tasks */}
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {tasks.map((task, key) => 
                <li style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '1rem', marginBottom: '0.5rem' }} key={key}>
                    <div>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <div>
                            <textarea placeholder="Update Description" onChange={(e) => setNewDescription(e.target.value)} />
                            <button style={{ padding: "0.5rem 1rem", marginRight: "0.5rem"}} onClick={() => updateTasks(task.id)}>Edit</button>
                            <button style={{ padding: "0.5rem 1rem", marginRight: "0.5rem"}} onClick={() => deleteTasks(task.id)}>Delete</button>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    );
}

export default TaskManager;