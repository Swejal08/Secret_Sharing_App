export class Secret {
  public readonly id: string;

  public readonly body: string;

  public readonly password: string;

  public readonly expiresIn: object;

  public readonly expiresAt: string;

  public readonly is_protected: boolean;

  constructor(props: Partial<Secret>) {
    Object.assign(this, props);
  }
}
