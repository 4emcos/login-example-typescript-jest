import { Router } from 'express'
import { ensureAnthenticated } from '../middlewares/ensureAuthenticate'
import { authenticateFactory } from '../modules/userCases/authenticateUser/AuthenticateUserFactory'
import { createUserFactory } from '../modules/userCases/createUser/CreateUserFactory'

const router = Router()

router.post('/login', (req, res) => authenticateFactory().handle(req, res))
router.post('/users', (req, res) => createUserFactory().handle(req, res))

router.get('/courses', ensureAnthenticated, (req, res) => {
  res.send('Hello World')
})

export { router }
