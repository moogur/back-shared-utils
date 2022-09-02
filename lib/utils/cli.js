"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveEnvironmentsInFile = exports.setEnvironments = exports.setVariablesOutOfEnvironmentString = exports.exec = void 0;
const node_child_process_1 = __importDefault(require("node:child_process"));
const node_fs_1 = require("node:fs");
const lodash_1 = require("lodash");
function exec(command) {
    try {
        return (0, lodash_1.trim)(node_child_process_1.default.execSync(command).toString());
    }
    catch {
        return;
    }
}
exports.exec = exec;
function setVariablesOutOfEnvironmentString(content) {
    const lines = (0, lodash_1.split)(content, '\n');
    (0, lodash_1.forEach)(lines, (line) => {
        const trimmedLine = (0, lodash_1.trim)(line);
        if (!trimmedLine || trimmedLine[0] === '#')
            return;
        const [key, value] = (0, lodash_1.split)(trimmedLine, '=');
        if (key && value) {
            process.env[key] = value;
        }
    });
}
exports.setVariablesOutOfEnvironmentString = setVariablesOutOfEnvironmentString;
function setEnvironments(filePaths) {
    (0, lodash_1.forEach)(filePaths, (filePath) => {
        try {
            const content = (0, node_fs_1.readFileSync)(filePath, 'utf8');
            setVariablesOutOfEnvironmentString(content);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    });
}
exports.setEnvironments = setEnvironments;
function saveEnvironmentsInFile(filePath, data) {
    try {
        let content = (0, node_fs_1.readFileSync)(filePath, 'utf8');
        (0, lodash_1.forEach)((0, lodash_1.keys)(data), (key) => {
            content = (0, lodash_1.replace)(content, new RegExp(`(?<=${key}=).*(?=\n)`), data[key]?.toString() ?? '');
        });
        (0, node_fs_1.writeFileSync)(filePath, content, { encoding: 'utf8' });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
exports.saveEnvironmentsInFile = saveEnvironmentsInFile;
//# sourceMappingURL=cli.js.map