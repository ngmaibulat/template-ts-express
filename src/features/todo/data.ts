import { Todo } from "./types.js";
import db from "../../db/db.js";

const tablename = "todo";

export async function add(todo: Todo) {
    const res = await db<Todo>(tablename).insert(todo);
    return res;
}

export async function listAll() {
    const res = await db<Todo>(tablename).select();
    return res;
}

export async function getOne(id: number) {
    const data = await db<Todo>(tablename).select().where("id", "=", id);

    if (!data.length) {
        throw new Error("record not found");
    }

    return data[0];
}

export async function deleteOne(id: number) {
    const data = await db<Todo>(tablename).delete().where("id", "=", id);

    if (data) {
        return {
            status: "success",
            deletedRows: data,
        };
    } else {
        throw new Error("record not found");
    }
}

export async function updateOne(id: number, todo: Todo) {
    const data = await db<Todo>(tablename).update(todo).where("id", "=", id);

    if (data) {
        return {
            status: "success",
            updatedRows: data,
        };
    } else {
        throw new Error("record not found");
    }
}
