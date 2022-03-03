/**
 * @jest-environment ./prisma/prisma-environment-jest
 */
import { app } from '../../../app'
import request from 'supertest'

describe('Create User Service', () => {
  it('Should be able to create a new user', async () => {
    const res = await request(app).post('/users').send({
      name: 'Teste',
      email: 'testIntegration@test.com.br',
      password: '123456'
    })

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('id')
  })

  it('Should not be able to create an existing user', async () => {
    await request(app).post('/users').send({
      name: 'Teste',
      email: 'testIntegration@test.com.br',
      password: '123456'
    })

    const res = await request(app).post('/users').send({
      name: 'Teste',
      email: 'testIntegration@test.com.br',
      password: '123456'
    })

    expect(res.status).toBe(400)
  })
})
