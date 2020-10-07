module.exports = (sequelize,dataTypes) => {
    let alias = "products";
    let cols = {
        id: {
            type:dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type:dataTypes.STRING(45),
            allowNull:false
        },
        precio: {
            type:dataTypes.string(45),
            allowNull:false
        },
        descripcion: {
            type:dataTypes.STRING(300),
            allowNull:false
        },
        imagenes: {
            type:dataTypes.STRING(100),
            allowNull:false
        }
    }
    let config = {
        tableName: "products",
        timestamps: true,
        underscored: true
    }

    const product = sequelize.define(alias,cols,config);

    return product;
}