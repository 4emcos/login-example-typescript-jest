import { IUsersRepositories } from '../../../repositories/User/IUsersRepositories'

import { hash } from 'bcryptjs'
import { User } from '../../../entities/User'

interface IUserRequest {
  name: string
  email: string
  password: string
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepositories) {}

  async execute({ name, email, password }: IUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(email)

    if (userAlreadyExists) {
      throw new Error('User already exists')
    }

    const hashedPassword = await hash(password, 9)

    const userCreate = User.create({ email, name, password: hashedPassword })
    const user = await this.usersRepository.create(userCreate)

    return user
  }
}

export { CreateUserService }
