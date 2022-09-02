export class NoValidServiceTokenException extends Error {
  constructor(public errorMessage?: string) {
    super();
  }
}
