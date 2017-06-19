/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.PekkaService.Button', null, global);
goog.exportSymbol('proto.PekkaService.EditButtonRequest', null, global);
goog.exportSymbol('proto.PekkaService.EditButtonResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PekkaService.Button = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PekkaService.Button, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PekkaService.Button.displayName = 'proto.PekkaService.Button';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PekkaService.Button.prototype.toObject = function(opt_includeInstance) {
  return proto.PekkaService.Button.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PekkaService.Button} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PekkaService.Button.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, 0),
    penttiid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    onexecutorid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    offexecutorid: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PekkaService.Button}
 */
proto.PekkaService.Button.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PekkaService.Button;
  return proto.PekkaService.Button.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PekkaService.Button} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PekkaService.Button}
 */
proto.PekkaService.Button.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPenttiid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOnexecutorid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffexecutorid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PekkaService.Button.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PekkaService.Button.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PekkaService.Button} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PekkaService.Button.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getPenttiid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getOnexecutorid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOffexecutorid();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.PekkaService.Button.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PekkaService.Button.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 number = 2;
 * @return {number}
 */
proto.PekkaService.Button.prototype.getNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.PekkaService.Button.prototype.setNumber = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 penttiId = 3;
 * @return {number}
 */
proto.PekkaService.Button.prototype.getPenttiid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.PekkaService.Button.prototype.setPenttiid = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 onExecutorId = 4;
 * @return {number}
 */
proto.PekkaService.Button.prototype.getOnexecutorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.PekkaService.Button.prototype.setOnexecutorid = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 offExecutorId = 5;
 * @return {number}
 */
proto.PekkaService.Button.prototype.getOffexecutorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.PekkaService.Button.prototype.setOffexecutorid = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PekkaService.EditButtonRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PekkaService.EditButtonRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PekkaService.EditButtonRequest.displayName = 'proto.PekkaService.EditButtonRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PekkaService.EditButtonRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.PekkaService.EditButtonRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PekkaService.EditButtonRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PekkaService.EditButtonRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    buttonid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    onexecutorid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    offexecutorid: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PekkaService.EditButtonRequest}
 */
proto.PekkaService.EditButtonRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PekkaService.EditButtonRequest;
  return proto.PekkaService.EditButtonRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PekkaService.EditButtonRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PekkaService.EditButtonRequest}
 */
proto.PekkaService.EditButtonRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setButtonid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOnexecutorid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOffexecutorid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PekkaService.EditButtonRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PekkaService.EditButtonRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PekkaService.EditButtonRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PekkaService.EditButtonRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButtonid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getOnexecutorid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getOffexecutorid();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional uint32 buttonId = 1;
 * @return {number}
 */
proto.PekkaService.EditButtonRequest.prototype.getButtonid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.PekkaService.EditButtonRequest.prototype.setButtonid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 onExecutorId = 4;
 * @return {number}
 */
proto.PekkaService.EditButtonRequest.prototype.getOnexecutorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.PekkaService.EditButtonRequest.prototype.setOnexecutorid = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 offExecutorId = 5;
 * @return {number}
 */
proto.PekkaService.EditButtonRequest.prototype.getOffexecutorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.PekkaService.EditButtonRequest.prototype.setOffexecutorid = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PekkaService.EditButtonResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PekkaService.EditButtonResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.PekkaService.EditButtonResponse.displayName = 'proto.PekkaService.EditButtonResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PekkaService.EditButtonResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.PekkaService.EditButtonResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PekkaService.EditButtonResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.PekkaService.EditButtonResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    button: (f = msg.getButton()) && proto.PekkaService.Button.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PekkaService.EditButtonResponse}
 */
proto.PekkaService.EditButtonResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PekkaService.EditButtonResponse;
  return proto.PekkaService.EditButtonResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PekkaService.EditButtonResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PekkaService.EditButtonResponse}
 */
proto.PekkaService.EditButtonResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PekkaService.Button;
      reader.readMessage(value,proto.PekkaService.Button.deserializeBinaryFromReader);
      msg.setButton(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PekkaService.EditButtonResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PekkaService.EditButtonResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PekkaService.EditButtonResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.PekkaService.EditButtonResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getButton();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PekkaService.Button.serializeBinaryToWriter
    );
  }
};


/**
 * optional Button button = 1;
 * @return {?proto.PekkaService.Button}
 */
proto.PekkaService.EditButtonResponse.prototype.getButton = function() {
  return /** @type{?proto.PekkaService.Button} */ (
    jspb.Message.getWrapperField(this, proto.PekkaService.Button, 1));
};


/** @param {?proto.PekkaService.Button|undefined} value */
proto.PekkaService.EditButtonResponse.prototype.setButton = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.PekkaService.EditButtonResponse.prototype.clearButton = function() {
  this.setButton(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.PekkaService.EditButtonResponse.prototype.hasButton = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.PekkaService);
