
const UserRepository = require('../repositories/UserRepository');
const UserService = {}

UserService.register = async (userDate) =>{
  return await UserRepository.create(userDate);
}

UserService.getUserProfile = async (id) =>{
  return await UserRepository.findById(id);
}

UserService.deleteUser = async (id) =>{
  return await UserRepository.deleteUser(id);
}



module.exports = UserService;