import { prisma } from '../../../database/client'
import { User } from '../../../entities/User'
import { IUsersRepositories } from '../IUsersRepositories'

class PrismaUsersRepository implements IUsersRepositories {
  async exists(email: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return !!user
  }

  async create({ name, email, password }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return user
  }
}

export { PrismaUsersRepository }
