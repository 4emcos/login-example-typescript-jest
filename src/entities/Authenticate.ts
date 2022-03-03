class Authenticate {
  email: string
  password: string

  private constructor({ email, password }: Authenticate) {
    return Object.assign(this, { email, password })
  }

  static authenticate({ email, password }: Authenticate) {
    return new Authenticate({ email, password })
  }
}

export { Authenticate }
