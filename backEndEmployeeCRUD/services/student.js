let executeQuery = require('../db/connect.js');

module.exports = class StudentServices {
    async postMethod(data) {
        try {
            let result = await executeQuery('insert into student1 values ($1,$2,$3,$4,$5)', [data.id, data.name, data.email, data.subject,data.gender]);
            console.log(result);
            return result.rowCount;
        } catch (error) {
            throw error;
        }
    }

    async searchByName(name){
        try {
            let query = `select * from student1 where name like '${name}%' order by id`;
            console.log(query);
            let result = await executeQuery(query);
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    async getAllDetails() {
        try {
            let result = await executeQuery('select * from student1 order by id');
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    async getDetailsById(id) {
        try {
            let result = await executeQuery('select * from student1 where id = $1', [id]);
            return result;
        } catch (error) {
            throw error;
        }
    }
    
    async updateDetails(data) {
        try {
            if (data.id !== undefined) {
                let result;
                if (data.name !== undefined) {
                    result = await executeQuery('update student1 set name = $1 where id = $2', [data.name, data.id]);
                }
                if (data.email !== undefined) {
                    result = await executeQuery('update student1 set email = $1 where id = $2', [data.email, data.id]);
                }
                if (data.subject !== undefined) {
                    result = await executeQuery('update student1 set subject = $1 where id = $2', [data.subject, data.id]);
                }
                if (data.gender !== undefined) {
                    result = await executeQuery('update student1 set gender = $1 where id = $2', [data.gender, data.id]);
                }
                return result;
            } else{
                throw new Error("please provide id to update");
            }
        } catch (error) {
            console.log("rohit in service");
            throw error;
        }
    }
    
    async deleteDetails(id){
        try {
            if(id!==undefined){
                let result = await executeQuery('delete from student1 where id = $1',[id]);
                console.log(result);
                return result;
            } else{
                throw new Error("provide an id to delete");
            }
        } catch (error) {
            
        }
    }
}