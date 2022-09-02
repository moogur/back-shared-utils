export class ActionWithFileException extends Error {
  constructor(public errorMessage?: string) {
    super();
  }
}
