import {greatingMessage, ManType} from "./05";

let people: Array<ManType> = []

beforeEach(() => {
  people = [
    {name: "Andrey Ivanov", age: 33},
    {name: "Alexandr Petrov", age: 24},
    {name: "Nastya Salimova", age: 24},
    {name: "Dmitry Sidorov", age: 18},
  ]

})

test('Should get array of greating message', () => {
  const message = greatingMessage(people)

  expect(message.length).toBe(4)
  expect(message[2]).toBe('Hi, Nastya! Welcome to Incubator')
  expect(message[0]).toBe('Hi, Andrey! Welcome to Incubator')
  expect(message[1]).toBe('Hi, Alexandr! Welcome to Incubator')
  })