import "./index.css";
import TaskManager from "./components/task-manager";
import Auth from "./components/auth";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export default function App() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [session, setSession] = useState<any>(null);

    const fetchSession = async () => {
        const currentSession = await supabase.auth.getSession();
        console.log(currentSession);
        setSession(currentSession);
    };

    useEffect(() => {
        fetchSession(); 
    }, []);

    return (
        <div>
            <TaskManager />
            <Auth />
        </div>
    );
}
