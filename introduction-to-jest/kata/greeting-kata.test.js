const { greeting } = require('./greeting-kata')

describe('greeting', () => {
  it('given person name, should greeting person with hello', () => {
    expect(greeting('Chris')).toEqual('Hello, Chris')
  })
  it('given null, should greeting friends', () => {
    expect(greeting(null)).toEqual('Hello, my friend')
  })
  it(`given person name which upper case,
      should greeting person with shouting tone`, () => {
    expect(greeting('CHRIS')).toEqual('HELLO CHRIS!')
  })
  it(`given two names separate with "and"`, () => {
    expect(greeting(['Jill'])).toEqual('Hello, Jill')
  }) 
  it(`given two names separate with "and"`, () => {
    expect(greeting(['Jill','Jane'])).toEqual('Hello, Jill and Jane.')
  }) 
  it(`given more than two names, 
      separate with comma and close with Oxford commd and "and"`, () => {
    expect(greeting(['Amy','Brian','Charlotte'])).toEqual('Hello, Amy, Brian and Charlotte.')
  }) 
  // it(`given mixing normal and upper case separate the response into tow greeting `, () => {
  //   expect(greeting(['Amy','BRIAN','Charlotte'])).toEqual('Hello, Amy and Charlotte. AND HELLO BRIAN!')
  // }) 
})
