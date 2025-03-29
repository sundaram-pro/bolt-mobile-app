import { PrismaClient } from '@prisma/client'
import cors from 'cors';
import express from 'express';
import { authMiddleware } from './middleware';

const app = express();
app.use(express.json());
app.use(cors());


app.post("/project", authMiddleware, async (req, res) => {

    const { prompt } = req.body;
    const prismaClient = new PrismaClient()
    const userId = req.userId!;
    const description = prompt.split("\n")[0];
    const project = await prismaClient.project.create({
        data: {
          description: "asd",
          userId: userId.toString()  // Ensure userId is a string
        }
      });
      
    res.json({projectId: project.id});
})

app.get("/projects",authMiddleware, async (req, res) => {
    const prismaClient = new PrismaClient()
    const userId = req.userId!;
    const project = await prismaClient.project.findFirst({
        where: { id: projectId },
    });

    res.json({project});
})

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})
