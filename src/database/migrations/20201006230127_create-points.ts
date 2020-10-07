import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('points', column =>{
        column.increments('id').primary()
        column.string('image').notNullable()
        column.string('name').notNullable()
        column.string('email').notNullable()
        column.string('whatsapp').notNullable()
        column.decimal('latitude').notNullable()
        column.decimal('longitude').notNullable()
        column.string('city').notNullable()
        column.string('uf', 2).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('points')
}

