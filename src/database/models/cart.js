module.exports = (sequelize,dataTypes) => {
    let alias = "cart";
    let cols = {
        id: {
            type:dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        id_producto: {
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        cantidad: {
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        remito: {
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        
    }
    let config = {
        tableName: "cart",
        timestamps: false
    }
    
    const cart = sequelize.define(alias,cols,config);

    return cart;
}