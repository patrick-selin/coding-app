"use strict";
// server.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//
// middleware
app.use(express_1.default.json());
//
//routes
app.get("/ping", (_req, res) => {
    console.log("testing pinging...");
    res.send("pong");
});
exports.default = app;
