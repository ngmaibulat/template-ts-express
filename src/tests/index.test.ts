import { jest, describe, expect, test } from "@jest/globals";
import request from "supertest";
import creatApp from "../app/app.js";
import db from "../db/db.js";
// import { index } from "../controllers/todo.js";

const app = creatApp();
const req = request(app);

afterAll(async () => {
    await db.destroy();
});

test("post /todo", async () => {
    // const response = await request(app).get("/todo");
    const response = await req.post("/todo").send({
        name: "write unit tests",
        done: false,
    });

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(response.redirect).toBe(false);
});

test("get /todo/1", async () => {
    // const response = await request(app).get("/todo");
    const response = await req.get("/todo/1");

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(response.redirect).toBe(false);
    expect(Array.isArray(response.body)).toBe(false);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("done");
});

test("get /todo", async () => {
    // const response = await request(app).get("/todo");
    const response = await req.get("/todo");

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(response.redirect).toBe(false);
    expect(Array.isArray(response.body)).toBe(true);

    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
    expect(response.body[0]).toHaveProperty("done");
});

test("put /todo/1", async () => {
    // const response = await request(app).get("/todo");
    const response = await req.put("/todo/1").send({
        name: "Write unit tests by using jest",
        done: true,
    });

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(response.redirect).toBe(false);
});

test("delete /todo/1", async () => {
    const response = await req.delete("/todo/1");

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(200);
    expect(response.ok).toBe(true);
    expect(response.redirect).toBe(false);
});

test("get /todo/99999", async () => {
    const response = await req.get("/todo/99999");

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(404);
    expect(response.ok).toBe(false);
    expect(response.redirect).toBe(false);
});

test("put /todo/99999", async () => {
    // const response = await request(app).get("/todo");
    const response = await req.put("/todo/99999").send({
        name: "Write unit tests by using jest",
        done: true,
    });

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(404);
    expect(response.ok).toBe(false);
    expect(response.redirect).toBe(false);
});

test("delete /todo/99999", async () => {
    const response = await req.delete("/todo/99999");

    expect(response.type).toBe("application/json");
    expect(response.charset).toBe("utf-8");
    expect(response.status).toBe(404);
    expect(response.ok).toBe(false);
    expect(response.redirect).toBe(false);
});

// describe("Test Handlers", function () {
//     test("responds to /", () => {
//         const req = {};

//         const res = {
//             text: "",
//             send: function (input) {
//                 this.text = input;
//             },
//         };
//         index(req, res);

//         expect(res.text).toEqual("hello world!");
//     });

//     test("responds to /hello/:name", () => {
//         const req = { params: { name: "Bob" } };

//         const res = {
//             text: "",
//             send: function (input) {
//                 this.text = input;
//             },
//         };
//         hello(req, res);

//         expect(res.text).toEqual("hello Bob!");
//     });
// });
