import { CssBaseline } from "@mui/material";

import { createContext, useState } from "react";
import App from "./App";

export const themeContext = createContext();

export default function ThemedApp() {
    const [hello, setHello] = useState("hello");
    const [jobs, setJobs] = useState([]);
    return (
        <themeContext.Provider value={{ hello , jobs, setJobs , setHello}}>
            <CssBaseline />
            <App />
        </themeContext.Provider>
    );
}
