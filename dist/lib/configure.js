"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}var Transports=function(){function Transports(){_classCallCheck(this,Transports);this._repository={}}_createClass(Transports,[{key:"register",value:function register(name,factory){this._repository[name]=factory}},{key:"isRegistered",value:function isRegistered(name){return this._repository[name]?true:false}},{key:"get",value:function get(name){if(this._repository[name]!==undefined){return this._repository[name]}else{throw"no such transport: "+name}}},{key:"list",value:function list(){var items=[];for(var name in this._repository){items.push(name)}return items}}]);return Transports}();var _transports=new Transports;// register default transports
var websocket=require("./transport/websocket.js");_transports.register("websocket",websocket.Factory);var transports=exports.transports=_transports;