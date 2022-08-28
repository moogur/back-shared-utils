export class NoValidUserTokenException extends Error {
  constructor(public errorMessage?: string) {
    super();
  }
}
