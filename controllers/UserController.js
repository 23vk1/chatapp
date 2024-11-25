const UserService = require('../services/UserService');
const Helper = require('../helpers/helper');

const UserController = {}

UserController.register = async (req, res) => {
    try {
        const userData = req.body;
        const user = await UserService.register(userData);
        return Helper.handleResponse({
            message : "user created successfully",
            status : 200,
            res, 
            data : user
        })
    }catch(error){
        return Helper.handleError(req, res, error, message = error.message)
    }
}

UserController.getUserProfile = async (req, res) =>{
    try {
        const userId = req.params.id;
        const user = await UserService.getUserProfile(userId);
        if (!user) {
            return Helper.handleResponse({
                message: 'User not found',
                status: 404,
                res
            });
        }
        return Helper.handleResponse({
            success: true,
            data: user
        }, res);
    } catch (error) {
        return Helper.handleError(req, res, error, message = error.message)
    }
}

UserController.deleteUser = async (req, res) =>{
    try {
        const userId = req.params.id;
        const deleted = await UserService.deleteUser(userId);
        if (!deleted) {
            return Helper.handleResponse({
                message: 'User not found',
                status: 404,
                res
            });
        }
        return Helper.handleResponse({
            success: true,
            message: 'User deleted successfully'
        }, res);
    } catch (error) {
        return Helper.handleError(req, res, error, message = error.message)
    }
}


module.exports = UserController;
