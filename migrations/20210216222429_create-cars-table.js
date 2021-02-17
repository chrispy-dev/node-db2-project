exports.up = function(knex) {
    return knex.schema.createTable('cars', (table) => {
        table.increments();
        
        table.text('vin', 64)
            .unique()
            .notNullable();
        table.text('make')
            .notNullable();
        table.text('model')
            .notNullable();
        table.text('mileage')
            .notNullable();
        table.text('transmission');
        table.text('status');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
