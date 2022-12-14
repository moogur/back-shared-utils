export declare function exec(command: string): string;
export declare function setVariablesOutOfEnvironmentString(content: string): void;
export declare function setEnvironments(...filePaths: string[]): void;
export declare function saveEnvironmentsInFile(filePath: string, data: Record<string, string | number | boolean>): void;
export declare function getObjectEnvironments(content: string): Record<string, string>;
export declare function getEnvironmentsFromFiles(...filePaths: string[]): Record<string, string>;
