const User = require('./../models/User')

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }
    static getInfo(user){
       return [user.id,user.username,user.name,user.bio]
    }
    static updateUsername(user){
        return user.username = "Alex"
    }
    static getAllUsernames(users){
        return users.map(user => user.username)
    }
}


module.exports = UserService