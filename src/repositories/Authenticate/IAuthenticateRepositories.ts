import { User } from '../../entities/User'

interface IAuthenticateRepositories {
  exists(email: string): Promise<User>
}

export { IAuthenticateRepositories }
