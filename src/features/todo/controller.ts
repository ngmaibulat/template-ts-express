import { Request, Response, NextFunction } from "express";
import { listAll, add, getOne, deleteOne, updateOne } from "./data.js";

export function index(req: Request, res: Response) {
    res.header("Content-Type", "application/json");
    listAll()
        .then((data) => JSON.stringify(data, null, 2) + "\n")
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ msg: "app error" }));
}

export function handlePost(req: Request, res: Response) {
    res.header("Content-Type", "application/json");
    add(req.body)
        .then((data) => JSON.stringify(data, null, 2) + "\n")
        .then((data) => res.send(data))
        .catch((err) => res.status(500).send({ msg: "insert error" }));
}

export function handlePut(req: Request, res: Response) {
    res.header("Content-Type", "application/json");
    const id = parseInt(req.params.id);
    updateOne(id, req.body)
        .then((data) => JSON.stringify(data, null, 2) + "\n")
        .then((data) => res.send(data))
        .catch((err) => res.status(404).send({ msg: "not found" }));
}

export function handleGetOne(req: Request, res: Response) {
    res.header("Content-Type", "application/json");
    const id = parseInt(req.params.id);
    getOne(id)
        .then((data) => JSON.stringify(data, null, 2) + "\n")
        .then((data) => res.send(data))
        .catch((err) => res.status(404).send({ msg: "not found" }));
}

export function handleDeleteOne(req: Request, res: Response) {
    res.header("Content-Type", "application/json");
    const id = parseInt(req.params.id);
    deleteOne(id)
        .then((data) => JSON.stringify(data, null, 2) + "\n")
        .then((data) => res.send(data))
        .catch((err) => res.status(404).send({ msg: "not found" }));
}
