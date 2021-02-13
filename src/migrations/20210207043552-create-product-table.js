module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        field: 'id',
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name',
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'price',
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantity',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated_at',
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('products'),
};
