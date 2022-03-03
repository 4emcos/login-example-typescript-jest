// import { UserRespositoryInMemory } from "../../../repositories/User/in-memory/UsersRespositoryInMemory";
import { PrismaAuthenticateRepository } from '../../../repositories/Authenticate/prisma/PrismaAuthenticateRepository'
import { AuthenticateUserController } from './AuthenticateUserController'
import { AuthenticateUserService } from './AuthenticateUserService'

export const authenticateFactory = () => {
  const authenticateFactory = new PrismaAuthenticateRepository()

  const authenticateUser = new AuthenticateUserService(authenticateFactory)
  const authenticateUserController = new AuthenticateUserController(
    authenticateUser
  )

  return authenticateUserController
}
