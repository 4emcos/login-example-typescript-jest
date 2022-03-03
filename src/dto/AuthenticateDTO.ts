import { User } from '../entities/User'

export interface AuthenticateDTO {
  user: User
  token: string
}
