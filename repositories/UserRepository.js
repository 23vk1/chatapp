const User = require('../models/UserModel');

class UserRepository {
        static async findById(id) {
        return await User.query().findById(id);
    }

        static async findByUsername(username) {
        return await User.query().findOne({ username });
    }

        static async create(userData) {
        return await User.query().insert(userData)
    }

        static async update(id, userData) {
        return await User.query().patchAndFetchById(id, userData);
    }

        static async delete (id) {
        return await User.query().patchAndFetchById(id, { deleted_at: new Date() });
    }
}


module.exports = UserRepository;


