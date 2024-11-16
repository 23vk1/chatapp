const User = require('../models/UserModel');
const UserRepository = {}

UserRepository.findById = async (id) => {
    return await User.query().findById(id);
}

UserRepository.findByUsername = async (username) => {
    return await User.query().findOne({ username });
}

UserRepository.create = async (userData) => {
    return await User.query().insert(userData)
}

UserRepository.update = async (id, userData) => {
    return await User.query().patchAndFetchById(id, userData);
}

UserRepository.deleteUser = async (id) => {
    return await User.query().patchAndFetchById(id, { deleted_at: new Date() });
}



module.exports = UserRepository;