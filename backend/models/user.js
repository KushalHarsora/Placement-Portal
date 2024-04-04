module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define("User",{
        email:{
            type: dataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                notEmpty:true
            }
        },
        password:{
            type:dataTypes.STRING,
            allowNull:false
        },
    });

    return User 
}