import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('items', column => {
        column.increments('id').primary()
        column.string('image').notNullable()
        column.string('title').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('items')
}

