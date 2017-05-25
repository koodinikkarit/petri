/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.MattiService.DefaultStateKvmConnection', null, global);
goog.exportSymbol('proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest', null, global);
goog.exportSymbol('proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse', null, global);
goog.exportSymbol('proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.State', null, global);

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
proto.MattiService.DefaultStateKvmConnection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MattiService.DefaultStateKvmConnection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MattiService.DefaultStateKvmConnection.displayName = 'proto.MattiService.DefaultStateKvmConnection';
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
proto.MattiService.DefaultStateKvmConnection.prototype.toObject = function(opt_includeInstance) {
  return proto.MattiService.DefaultStateKvmConnection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MattiService.DefaultStateKvmConnection} msg The msg instance to transform.
 * @return {!Object}
 */
proto.MattiService.DefaultStateKvmConnection.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    conportid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cpuportid: jspb.Message.getFieldWithDefault(msg, 3, 0),
    defaultstateid: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.MattiService.DefaultStateKvmConnection}
 */
proto.MattiService.DefaultStateKvmConnection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MattiService.DefaultStateKvmConnection;
  return proto.MattiService.DefaultStateKvmConnection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MattiService.DefaultStateKvmConnection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MattiService.DefaultStateKvmConnection}
 */
proto.MattiService.DefaultStateKvmConnection.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setConportid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCpuportid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefaultstateid(value);
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
proto.MattiService.DefaultStateKvmConnection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MattiService.DefaultStateKvmConnection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MattiService.DefaultStateKvmConnection} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.MattiService.DefaultStateKvmConnection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getConportid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getCpuportid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDefaultstateid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.MattiService.DefaultStateKvmConnection.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MattiService.DefaultStateKvmConnection.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 conPortId = 2;
 * @return {number}
 */
proto.MattiService.DefaultStateKvmConnection.prototype.getConportid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.MattiService.DefaultStateKvmConnection.prototype.setConportid = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 cpuPortId = 3;
 * @return {number}
 */
proto.MattiService.DefaultStateKvmConnection.prototype.getCpuportid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.MattiService.DefaultStateKvmConnection.prototype.setCpuportid = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 defaultStateId = 4;
 * @return {number}
 */
proto.MattiService.DefaultStateKvmConnection.prototype.getDefaultstateid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.MattiService.DefaultStateKvmConnection.prototype.setDefaultstateid = function(value) {
  jspb.Message.setField(this, 4, value);
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
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.displayName = 'proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest';
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
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultstatekvmconnection: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest;
  return proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDefaultstatekvmconnection(value);
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
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultstatekvmconnection();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 defaultStateKvmConnection = 1;
 * @return {number}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.prototype.getDefaultstatekvmconnection = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.MattiService.RemoveKvmConnectionFromDefaultStateRequest.prototype.setDefaultstatekvmconnection = function(value) {
  jspb.Message.setField(this, 1, value);
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
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.displayName = 'proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse';
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
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getFieldWithDefault(msg, 1, false),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse;
  return proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.State} */ (reader.readEnum());
      msg.setState(value);
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
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.State = {
  DEFAULT_STATE_KVM_CONNECTION_REMOVED: 0,
  DEFAULT_STATE_KVM_CONNECTION_NOT_FOUND: 1
};

/**
 * optional bool success = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.prototype.setSuccess = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional State state = 2;
 * @return {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.State}
 */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.prototype.getState = function() {
  return /** @type {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.State} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.State} value */
proto.MattiService.RemoveKvmConnectionFromDefaultStateResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 2, value);
};


goog.object.extend(exports, proto.MattiService);
