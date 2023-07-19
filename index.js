import express from "express"
import dotenv from "dotenv"
import { userRouter } from "./Routers/users.js";
import cors from "cors"
import { isAuthenticated } from "./Authentication/auth.js";
import { studentsRouter } from "./Routers/students.js";

//confgure the environment
dotenv.config();
const PORT = process.env.PORT
//initiating server
const app = express();
//middleware
app.use(express.json());
app.use(cors());

//routers
app.use("/students",isAuthenticated,studentsRouter)
app.use("/users",userRouter )
//starting the server
app.listen(PORT, ()=>console.log("server running in localhost:9090"))