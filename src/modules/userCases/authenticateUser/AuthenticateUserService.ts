import { IAuthenticateRepositories } from '../../../repositories/Authenticate/IAuthenticateRepositories'
import { AuthenticateDTO } from '../../../dto/AuthenticateDTO'
import { Authenticate } from '../../../entities/Authenticate'
import { sign } from 'jsonwebtoken'
import { compare } from 'bcryptjs'

class AuthenticateUserService {
  constructor(private authenticateRepository: IAuthenticateRepositories) {}

  async execute({ email, password }: Authenticate): Promise<AuthenticateDTO> {
    const userAlreadyExists = await this.authenticateRepository.exists(email)

    if (!userAlreadyExists) {
      throw new Error('User or password incorrect')
    }

    const isPasswordValid = await compare(password, userAlreadyExists.password)

    if (!isPasswordValid) {
      throw new Error('User or password incorrect')
    }

    const token = sign({}, process.env.APP_SECRET_KEY, {
      subject: userAlreadyExists.id,
      expiresIn: '1d'
    })

    return {
      user: userAlreadyExists,
      token
    }
  }
}

export { AuthenticateUserService }
