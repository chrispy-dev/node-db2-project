exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.text('vin')
        .unique()
        .notNullable();
    table.text('make')
        .notNullable();
    table.text('model')
        .notNullable();
    table.integer('mileage')
        .notNullable();
    table.text('transmission_type');
    table.text('status_of_title');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
