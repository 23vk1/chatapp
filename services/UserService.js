// services/UserService.js
const UserRepository = require('../repositories/UserRepository');

class UserService {
  static async register(userData) {
    // You can add validation and password hashing here
    return await UserRepository.create(userData);
  }

  static async getUserProfile(id) {
    return await UserRepository.findById(id);
  }

  static async deleteUser(id) {
    return await UserRepository.delete(id);
  }
}

module.exports = UserService;
