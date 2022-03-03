import { User } from '../../entities/User'

interface IUsersRepositories {
  create(user: User): Promise<User>
  exists(email: string): Promise<boolean>
}

export { IUsersRepositories }
