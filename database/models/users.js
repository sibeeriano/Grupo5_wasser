module.exports = (sequelize,dataTypes) => {

    let alias = "users"

    let cols = {
        id : {
            type:dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement:true,
            primaryKey:true
        },
        nombre : {
            type:dataTypes.STRING(45),
            allowNull:false
        },
        apellido : {
            type:dataTypes.STRING(45),
            allowNull:false
        },
        email : {
            type:dataTypes.STRING(45),
            allowNull:false
        },
        password : {
            type:dataTypes.STRING(100),
            allowNull:false
        },
        fecha : {
            type:dataTypes.DATEONLY()
        },
        avatar : {
            type:dataTypes.STRING(45)
        }
      
    }

    let config = {
        tableName: "users",
        timestamps: true, //esto es created at and updated at, por eso no estan arriba
        underscored: true //se agregan automaticamente, si no estan presentes se le pone false
    }

    const user = sequelize.define(alias,cols,config);

    return user;
}