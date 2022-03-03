import { prisma } from '../../../database/client'
import { User } from '../../../entities/User'
import { IAuthenticateRepositories } from '../IAuthenticateRepositories'

class PrismaAuthenticateRepository implements IAuthenticateRepositories {
  async exists(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return user
  }
}

export { PrismaAuthenticateRepository }
