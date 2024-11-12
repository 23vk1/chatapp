// models/Conversation.js
const { Model } = require('objection');

class Conversation extends Model {
  static get tableName() {
    return 'conversations';
  }

  static get idColumn() {
    return 'id';
  }

//   static get jsonSchema() {
//     return {
//       type: 'object',
//       required: ['user1_id', 'user2_id'],
//       properties: {
//         id: { type: 'integer' },
//         user1_id: { type: 'integer' },
//         user2_id: { type: 'integer' },
//         created_at: { type: 'string', format: 'date-time' },
//         updated_at: { type: 'string', format: 'date-time' },
//         deleted_at: { type: ['string', 'null'], format: 'date-time' },
//       },
//     };
//   }

  static get relationMappings() {
    const User = require('./UserModel');
    const Message = require('./MessageModel');

    return {
      user1: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'conversations.user1_id',
          to: 'users.id',
        },
      },
      user2: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'conversations.user2_id',
          to: 'users.id',
        },
      },
      messages: {
        relation: Model.HasManyRelation,
        modelClass: Message,
        join: {
          from: 'conversations.id',
          to: 'messages.conversation_id',
        },
      },
    };
  }
}

module.exports = Conversation;
