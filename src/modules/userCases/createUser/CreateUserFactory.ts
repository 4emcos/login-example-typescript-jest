// import { UserRespositoryInMemory } from "../../../repositories/User/in-memory/UsersRespositoryInMemory"
import { PrismaUsersRepository } from '../../../repositories/User/prisma/PrismaUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserService } from './CreateUserService'

export const createUserFactory = () => {
  const usersRepository = new PrismaUsersRepository()
  // enable tests on memory
  // const usersRepository = new UserRespositoryInMemory()

  const createUser = new CreateUserService(usersRepository)
  const createUserController = new CreateUserController(createUser)

  return createUserController
}
