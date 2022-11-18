import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("todo", function (table) {
        table.increments("id");
        table.timestamps(true, true);
        // table.integer('user_id').references('id').inTable('user');
        table.string("name");
        table.boolean("done");
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("todo");
}
