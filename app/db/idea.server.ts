import { Entity, Repository, Schema } from "redis-om";
import { redisClient, redisConnect } from "./redis.server";

export interface Idea {
    name: string;
    createAt: Date;
}

export class Idea extends Entity {}

const ideaSchema = new Schema(Idea, {
    name: { type: "string" }
});


async function getRepository(): Promise<Repository<Idea>> {
    await redisConnect();
    const repository = redisClient.fetchRepository(ideaSchema);
  
    await repository.createIndex();
    return repository;
}

export async function createCategory(name: string) : Promise<Idea> {
    const repository = await getRepository();
    return repository.createAndSave({ name, createAt: new Date() });
}

export async function getAllCategoriesByUser(userId: string) {
    const repository = await getRepository();
    
    return repository.search()
            .sortDescending("createAt")
            .all();
}