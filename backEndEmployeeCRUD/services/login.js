const executeQuery = require('../db/connect');

module.exports = class LoginService{
    
    async register(username,password){
        try {
            let result = await executeQuery('insert into login values($1,$2)',[username,password]);
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    async checkUsername(username){
        try {
            let result = await executeQuery('select * from login where username=$1',[username]);
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    async login(username,password){
        try {
            let result = await executeQuery('select * from login where username=$1 and password = $2',[username, password]);
            return result;
        } catch (error) {
            throw error;
        }
    }
}