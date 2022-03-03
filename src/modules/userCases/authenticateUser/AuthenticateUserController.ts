import { Request, Response } from 'express'
import { AuthenticateUserService } from './AuthenticateUserService'

class AuthenticateUserController {
  constructor(private authenticate: AuthenticateUserService) {}

  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authenticateDto = await this.authenticate.execute({
      email,
      password
    })

    return res.json(authenticateDto)
  }
}

export { AuthenticateUserController }
