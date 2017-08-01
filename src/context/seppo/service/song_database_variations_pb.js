/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.SeppoService.AddVariationToSongDatabaseRequest', null, global);
goog.exportSymbol('proto.SeppoService.AddVariationToSongDatabaseResponse', null, global);
goog.exportSymbol('proto.SeppoService.RemoveVariationFromSongDatabaseRequest', null, global);
goog.exportSymbol('proto.SeppoService.RemoveVariationFromSongDatabaseResponse', null, global);
goog.exportSymbol('proto.SeppoService.RemoveVariationFromSongDatabaseResponse.State', null, global);
goog.exportSymbol('proto.SeppoService.SongDatabaseVariation', null, global);

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
proto.SeppoService.SongDatabaseVariation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SeppoService.SongDatabaseVariation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SeppoService.SongDatabaseVariation.displayName = 'proto.SeppoService.SongDatabaseVariation';
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
proto.SeppoService.SongDatabaseVariation.prototype.toObject = function(opt_includeInstance) {
  return proto.SeppoService.SongDatabaseVariation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SeppoService.SongDatabaseVariation} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SeppoService.SongDatabaseVariation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    songdatabaseid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    variationid: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.SeppoService.SongDatabaseVariation}
 */
proto.SeppoService.SongDatabaseVariation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SeppoService.SongDatabaseVariation;
  return proto.SeppoService.SongDatabaseVariation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SeppoService.SongDatabaseVariation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SeppoService.SongDatabaseVariation}
 */
proto.SeppoService.SongDatabaseVariation.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setSongdatabaseid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVariationid(value);
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
proto.SeppoService.SongDatabaseVariation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SeppoService.SongDatabaseVariation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SeppoService.SongDatabaseVariation} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SeppoService.SongDatabaseVariation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSongdatabaseid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getVariationid();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional uint32 id = 1;
 * @return {number}
 */
proto.SeppoService.SongDatabaseVariation.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SeppoService.SongDatabaseVariation.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 songDatabaseId = 2;
 * @return {number}
 */
proto.SeppoService.SongDatabaseVariation.prototype.getSongdatabaseid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SeppoService.SongDatabaseVariation.prototype.setSongdatabaseid = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 variationId = 3;
 * @return {number}
 */
proto.SeppoService.SongDatabaseVariation.prototype.getVariationid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.SeppoService.SongDatabaseVariation.prototype.setVariationid = function(value) {
  jspb.Message.setField(this, 3, value);
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
proto.SeppoService.AddVariationToSongDatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SeppoService.AddVariationToSongDatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SeppoService.AddVariationToSongDatabaseRequest.displayName = 'proto.SeppoService.AddVariationToSongDatabaseRequest';
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
proto.SeppoService.AddVariationToSongDatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SeppoService.AddVariationToSongDatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SeppoService.AddVariationToSongDatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SeppoService.AddVariationToSongDatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    songdatabaseid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    variationid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.SeppoService.AddVariationToSongDatabaseRequest}
 */
proto.SeppoService.AddVariationToSongDatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SeppoService.AddVariationToSongDatabaseRequest;
  return proto.SeppoService.AddVariationToSongDatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SeppoService.AddVariationToSongDatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SeppoService.AddVariationToSongDatabaseRequest}
 */
proto.SeppoService.AddVariationToSongDatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSongdatabaseid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVariationid(value);
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
proto.SeppoService.AddVariationToSongDatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SeppoService.AddVariationToSongDatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SeppoService.AddVariationToSongDatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SeppoService.AddVariationToSongDatabaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSongdatabaseid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getVariationid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 songDatabaseId = 1;
 * @return {number}
 */
proto.SeppoService.AddVariationToSongDatabaseRequest.prototype.getSongdatabaseid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SeppoService.AddVariationToSongDatabaseRequest.prototype.setSongdatabaseid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 variationId = 2;
 * @return {number}
 */
proto.SeppoService.AddVariationToSongDatabaseRequest.prototype.getVariationid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SeppoService.AddVariationToSongDatabaseRequest.prototype.setVariationid = function(value) {
  jspb.Message.setField(this, 2, value);
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
proto.SeppoService.AddVariationToSongDatabaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SeppoService.AddVariationToSongDatabaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SeppoService.AddVariationToSongDatabaseResponse.displayName = 'proto.SeppoService.AddVariationToSongDatabaseResponse';
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
proto.SeppoService.AddVariationToSongDatabaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SeppoService.AddVariationToSongDatabaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SeppoService.AddVariationToSongDatabaseResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SeppoService.AddVariationToSongDatabaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    songdatabasevariation: (f = msg.getSongdatabasevariation()) && proto.SeppoService.SongDatabaseVariation.toObject(includeInstance, f)
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
 * @return {!proto.SeppoService.AddVariationToSongDatabaseResponse}
 */
proto.SeppoService.AddVariationToSongDatabaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SeppoService.AddVariationToSongDatabaseResponse;
  return proto.SeppoService.AddVariationToSongDatabaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SeppoService.AddVariationToSongDatabaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SeppoService.AddVariationToSongDatabaseResponse}
 */
proto.SeppoService.AddVariationToSongDatabaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SeppoService.SongDatabaseVariation;
      reader.readMessage(value,proto.SeppoService.SongDatabaseVariation.deserializeBinaryFromReader);
      msg.setSongdatabasevariation(value);
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
proto.SeppoService.AddVariationToSongDatabaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SeppoService.AddVariationToSongDatabaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SeppoService.AddVariationToSongDatabaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SeppoService.AddVariationToSongDatabaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSongdatabasevariation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.SeppoService.SongDatabaseVariation.serializeBinaryToWriter
    );
  }
};


/**
 * optional SongDatabaseVariation songDatabaseVariation = 1;
 * @return {?proto.SeppoService.SongDatabaseVariation}
 */
proto.SeppoService.AddVariationToSongDatabaseResponse.prototype.getSongdatabasevariation = function() {
  return /** @type{?proto.SeppoService.SongDatabaseVariation} */ (
    jspb.Message.getWrapperField(this, proto.SeppoService.SongDatabaseVariation, 1));
};


/** @param {?proto.SeppoService.SongDatabaseVariation|undefined} value */
proto.SeppoService.AddVariationToSongDatabaseResponse.prototype.setSongdatabasevariation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.SeppoService.AddVariationToSongDatabaseResponse.prototype.clearSongdatabasevariation = function() {
  this.setSongdatabasevariation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.SeppoService.AddVariationToSongDatabaseResponse.prototype.hasSongdatabasevariation = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.SeppoService.RemoveVariationFromSongDatabaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SeppoService.RemoveVariationFromSongDatabaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SeppoService.RemoveVariationFromSongDatabaseRequest.displayName = 'proto.SeppoService.RemoveVariationFromSongDatabaseRequest';
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
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SeppoService.RemoveVariationFromSongDatabaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SeppoService.RemoveVariationFromSongDatabaseRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    songdatabaseid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    variationid: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.SeppoService.RemoveVariationFromSongDatabaseRequest}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SeppoService.RemoveVariationFromSongDatabaseRequest;
  return proto.SeppoService.RemoveVariationFromSongDatabaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SeppoService.RemoveVariationFromSongDatabaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SeppoService.RemoveVariationFromSongDatabaseRequest}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSongdatabaseid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVariationid(value);
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
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SeppoService.RemoveVariationFromSongDatabaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SeppoService.RemoveVariationFromSongDatabaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSongdatabaseid();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getVariationid();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 songDatabaseId = 1;
 * @return {number}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.prototype.getSongdatabaseid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.prototype.setSongdatabaseid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 variationId = 2;
 * @return {number}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.prototype.getVariationid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.SeppoService.RemoveVariationFromSongDatabaseRequest.prototype.setVariationid = function(value) {
  jspb.Message.setField(this, 2, value);
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
proto.SeppoService.RemoveVariationFromSongDatabaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SeppoService.RemoveVariationFromSongDatabaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SeppoService.RemoveVariationFromSongDatabaseResponse.displayName = 'proto.SeppoService.RemoveVariationFromSongDatabaseResponse';
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
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SeppoService.RemoveVariationFromSongDatabaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    state: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SeppoService.RemoveVariationFromSongDatabaseResponse;
  return proto.SeppoService.RemoveVariationFromSongDatabaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse.State} */ (reader.readEnum());
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
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SeppoService.RemoveVariationFromSongDatabaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.State = {
  SUCCESS: 0,
  NOT_FOUND: 1
};

/**
 * optional State state = 1;
 * @return {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse.State}
 */
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.prototype.getState = function() {
  return /** @type {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse.State} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {!proto.SeppoService.RemoveVariationFromSongDatabaseResponse.State} value */
proto.SeppoService.RemoveVariationFromSongDatabaseResponse.prototype.setState = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.SeppoService);
