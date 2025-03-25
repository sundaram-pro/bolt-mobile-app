import { prismaClient } from '@prisma/client';
import cors from 'cors';
import express from 'express';
import { authMiddleware } from './middleware';

const app = express();
app.use(express.json());
app.use(cors());


app.post("/project", authMiddleware, async (req, res) => {

    const { prompt } = req.body;
    const userId = req.userId!;
    const description = prompt.split("\n")[0];
    const project = await prismaClient.project.create({
        data: {
            description
        }
    });
    res.json({projectId: project.id});
})

app.get("/projects",authMiddleware, async (req, res) => {
    const userId = req.userId!;
    const project = await prismaClient.project.findFirst({
        where: { id: projectId },
    });

    res.json({project});
})


