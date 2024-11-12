// models/userModel

const { Model, ConstraintViolationError } = require('objection');

class User extends Model{
    static get tableName(){
        return 'users'
    }
    static get idColumn(){
        return 'id'
    }
    // static get jsonSchema(){
    //     return{
    //         type : 'object',
    //         required : ['username', 'email', 'password_hash'],
    //         properties:{
    //             id: {type : 'integer'},
    //             username: {type : 'string', minLength:3, maxLength:255},
    //             email : {type: 'string', minLength:3, maxLength:255},
    //             password_hash : {type : 'string', minLength: 3, maxLength: 255},
    //             created_at:{type: 'string', formate:'date-time'},
    //             updated_at:{type: 'string', formate:'date-time'},
    //             deleted_at:{type:['string', 'null'], formate:'date-time'},
    //         }
    //     }
    // }

    static get relationMappings(){
        const Conversation = require('./ConversationModel');
        const Message = require('./MessageModel');

        return{
            conversations1: {
                relation : Model.HasManyRelation,
                modelClass : Conversation,
                join : {
                    from : 'users.id',
                    to : 'conversations.user1_id'
                }
            },
            conversations2: {
                relation : Model.HasManyRelation,
                modelClass : Conversation,
                join : {
                    from : 'users.id',
                    to : 'conversations.user2_id'
                }
            },
            messages :{
                relation : Model.HasManyRelation,
                modelClass : Message,
                join :{
                    from : 'users.id',
                    to : 'messages.sender_id'
                }
            }
        }
    }
}

module.exports = User;