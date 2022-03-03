import { User } from '../../../entities/User'
import { IUsersRepositories } from '../IUsersRepositories'
import { v4 as uuid } from 'uuid'

class UserRespositoryInMemory implements IUsersRepositories {
  private users: User[] = []

  async exists(email: string): Promise<boolean> {
    const user = this.users.some(user => user.email === email)

    return !!user
  }

  async create(user: User): Promise<User> {
    Object.assign(user, { id: uuid() })

    this.users.push(user)

    return user
  }
}

export { UserRespositoryInMemory }
