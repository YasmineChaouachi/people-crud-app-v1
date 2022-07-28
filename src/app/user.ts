export class User {
  constructor(
    private firstname?: String | null,
    private lastname?: String | null,
    private email?: String | null,
    private phone?: String | null,
    private password?: String | null
  ) {}
}
