import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('points_items', column => {
        column.increments('id').primary()
        column.integer('point_id').notNullable()
        column.foreign('point_id').references('id').inTable('points').onDelete('CASCADE').onUpdate('CASCADE')

        column.integer('item_id').notNullable()
        column.foreign('item_id').references('id').inTable('items').onDelete('CASCADE').onUpdate('CASCADE')
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('points_items')
}

