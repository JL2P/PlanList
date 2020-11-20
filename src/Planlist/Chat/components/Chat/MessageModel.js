class MessageModel {
  constructor(messageObj) {
    this.messageId = messageObj.id;
    this.type = messageObj.type || "TALK";
    this.username = messageObj.username;
    this.content = messageObj.content;
    this.data = messageObj.data;
  }
}

export default MessageModel;
