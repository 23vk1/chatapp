// models/Message.js
const { Model } = require('objection');

class Message extends Model {
  static get tableName() {
    return 'messages';
  }

  static get idColumn() {
    return 'id';
  }

//   static get jsonSchema() {
//     return {
//       type: 'object',
//       required: ['conversation_id', 'sender_id', 'content'],
//       properties: {
//         id: { type: 'integer' },
//         conversation_id: { type: 'integer' },
//         sender_id: { type: 'integer' },
//         content: { type: 'string' },
//         created_at: { type: 'string', format: 'date-time' },
//         updated_at: { type: 'string', format: 'date-time' },
//         deleted_at: { type: ['string', 'null'], format: 'date-time' },
//         read_at: { type: ['string', 'null'], format: 'date-time' },
//       },
//     };
//   }

  static get relationMappings() {
    const User = require('./UserModel');
    const Conversation = require('./ConversationModel');

    return {
      sender: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'messages.sender_id',
          to: 'users.id',
        },
      },
      conversation: {
        relation: Model.BelongsToOneRelation,
        modelClass: Conversation,
        join: {
          from: 'messages.conversation_id',
          to: 'conversations.id',
        },
      },
    };
  }
}

module.exports = Message;
