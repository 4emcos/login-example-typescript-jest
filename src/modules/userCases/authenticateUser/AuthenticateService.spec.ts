/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '../../../app'
import request from 'supertest'

describe('Authenticate User Service', () => {
  beforeAll(async () => {
    await request(app).post('/users').send({
      name: 'Teste',
      email: 'testIntegration@test.com.br',
      password: '123456'
    })
  })

  it('Should be able to authenticate', async () => {
    const res = await request(app).post('/login').send({
      name: 'Teste',
      email: 'testIntegration@test.com.br',
      password: '123456'
    })
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('token')
  })

  it('Should  not be able to authenticate with wrong pass', async () => {
    const res = await request(app).post('/login').send({
      name: 'Teste',
      email: 'testIntegration@test.com.br',
      password: '1234567'
    })
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('message')
  })
})
