class User {
  id?: string
  name: string
  email: string
  password: string

  private constructor({ name, email, password }: User) {
    return Object.assign(this, { name, email, password })
  }

  static create({ name, email, password }: User) {
    return new User({ name, email, password })
  }
}

export { User }
