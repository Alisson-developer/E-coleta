"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ItemsController_1 = __importDefault(require("./controllers/ItemsController"));
var PointsController_1 = __importDefault(require("./controllers/PointsController"));
var routes = express_1.Router();
var itemsController = new ItemsController_1.default();
var pointsController = new PointsController_1.default();
routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
exports.default = routes;