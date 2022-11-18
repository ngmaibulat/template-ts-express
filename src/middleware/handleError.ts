import express from "express";

export function handleErrors(
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) {
    res.status(404).json({ msg: err.message });
}
