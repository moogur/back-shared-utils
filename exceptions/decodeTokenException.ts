export class DecodeTokenException extends Error {
  constructor(public errorMessage?: string) {
    super();
  }
}
