module.exports = (sequelize,dataTypes) => {
    let alias = "categories";
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
        imagen: {
            type:dataTypes.STRING(45),
            allowNull:false
        }
    }
    let config = {
        tableName: "categories",
        timestamps: false
    }
    
    const category = sequelize.define(alias,cols,config);

    return category;
}