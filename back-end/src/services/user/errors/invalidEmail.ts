export class InvalidEmail extends Error {
  constructor() {
    super('Email inválido');
    this.name = "InvalidEmail";
  }
}
