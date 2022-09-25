"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvironmentsFromFiles = exports.getObjectEnvironments = exports.saveEnvironmentsInFile = exports.setEnvironments = exports.setVariablesOutOfEnvironmentString = exports.exec = void 0;
const tslib_1 = require("tslib");
const node_child_process_1 = tslib_1.__importDefault(require("node:child_process"));
const node_fs_1 = require("node:fs");
const lodash_1 = require("lodash");
function exec(command) {
    try {
        return (0, lodash_1.trim)(node_child_process_1.default.execSync(command).toString());
    }
    catch (_a) {
        return '';
    }
}
exports.exec = exec;
function getKeyAndValue(line) {
    const trimmedLine = (0, lodash_1.trim)(line);
    if (!trimmedLine || trimmedLine[0] === '#')
        return [];
    return (0, lodash_1.split)(trimmedLine, '=');
}
function setVariablesOutOfEnvironmentString(content) {
    const lines = (0, lodash_1.split)(content, '\n');
    (0, lodash_1.forEach)(lines, (line) => {
        const [key, value] = getKeyAndValue(line);
        if (!key || !value)
            return;
        process.env[key] = value;
    });
}
exports.setVariablesOutOfEnvironmentString = setVariablesOutOfEnvironmentString;
function setEnvironments(...filePaths) {
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
            var _a, _b;
            content = (0, lodash_1.replace)(content, new RegExp(`(?<=${key}=).*(?=\n)`), (_b = (_a = data[key]) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '');
        });
        (0, node_fs_1.writeFileSync)(filePath, content, { encoding: 'utf8' });
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
exports.saveEnvironmentsInFile = saveEnvironmentsInFile;
function getObjectEnvironments(content) {
    return (0, lodash_1.reduce)((0, lodash_1.split)(content, '\n'), (accumulator, line) => {
        const [key, value] = getKeyAndValue(line);
        if (key && value)
            accumulator[key] = value;
        return accumulator;
    }, {});
}
exports.getObjectEnvironments = getObjectEnvironments;
function getEnvironmentsFromFiles(...filePaths) {
    return (0, lodash_1.reduce)(filePaths, (accumulator, filePath) => {
        try {
            const content = (0, node_fs_1.readFileSync)(filePath, 'utf8');
            (0, lodash_1.assign)(accumulator, getObjectEnvironments(content));
        }
        catch (error) {
            console.log(error);
        }
        finally {
            return accumulator;
        }
    }, {});
}
exports.getEnvironmentsFromFiles = getEnvironmentsFromFiles;
//# sourceMappingURL=cli.js.map