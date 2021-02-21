"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.registrationHandler = exports.authHandler = exports.registrationApp = exports.authApp = exports.app = void 0;
var express = __importStar(require("express"));
var aws_serverless_express_1 = __importDefault(require("aws-serverless-express"));
exports.app = express.default();
exports.app.use(express.json());
exports.authApp = express.default();
exports.app.use(express.json());
exports.registrationApp = express.default();
exports.app.use(express.json());
exports.app.use('/v1', function (req, res) {
    console.log(req);
    res.status(200);
    res.send('Hello from the API');
});
exports.authApp.use('/', function (req, res) {
    console.log(req);
    res.status(200);
    res.send('Hello from the authentication API');
});
exports.registrationApp.use('/', function (req, res) {
    console.log(req);
    res.status(200);
    res.send('Hello from the registration API');
});
var authServer = aws_serverless_express_1.default.createServer(exports.authApp, undefined);
var authHandler = function (event, context) { return aws_serverless_express_1.default.proxy(authServer, event, context); };
exports.authHandler = authHandler;
var registrationServer = aws_serverless_express_1.default.createServer(exports.registrationApp, undefined);
var registrationHandler = function (event, context) { return aws_serverless_express_1.default.proxy(registrationServer, event, context); };
exports.registrationHandler = registrationHandler;
var server = aws_serverless_express_1.default.createServer(exports.app, undefined);
var handler = function (event, context) { return aws_serverless_express_1.default.proxy(server, event, context); };
exports.handler = handler;
