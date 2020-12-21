"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
app.use(express_1.default.static(path_1.default.join(path_1.default.resolve('../'), 'client/dist')));
app.get('/api/hello', function (_, res) {
    res.json('Hello, world...');
});
app.get('*', function (_, res) {
    res.sendFile(path_1.default.join(path_1.default.resolve('../') + '/client/build/index.html'));
});
var PORT = 3000;
app.listen(process.env.PORT || PORT, function () {
    console.log("\u26A1\uFE0F [server]: Server is running at https://localhost:" + PORT);
});
