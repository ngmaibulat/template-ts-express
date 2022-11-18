import db from "../../db/db.js";

// const data = await db.select().from('users')

interface User {
    id: number;
    first_name: string;
    last_name: string;
}

await db<User>("users").insert({
    first_name: "Salavat",
    last_name: "Nigmatullin",
});

const data = await db<User>("users").select();

db.destroy();
console.log(data);
