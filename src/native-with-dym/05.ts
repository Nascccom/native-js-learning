export type ManType = {
  name: string
  age: number
}

const people: Array<ManType> = [
  {name: "Andrey Ivanov", age: 33},
  {name: "Alexandr Petrov", age: 24},
  {name: "Nastya Salimova", age: 24},
  {name: "Dmitry Sidorov", age: 18},
]

const transformator = (man: ManType) => {
  return {
    stack: ['css', 'js', 'react', 'ts', 'html'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1],
  }
}

const devs = [
  {
    stack: ['css', 'js', 'react', 'ts', 'html'],
    firstName: 'Andrey', lastName: 'Ivanov'
  },
  {
    stack: ['css', 'js', 'react', 'ts', 'html'],
    firstName: 'Alexandr', lastName: 'Petrov'
  },
  {
    stack: ['css', 'js', 'react', 'ts', 'html'],
    firstName: 'Nastya', lastName: 'Salimova'
  },
  {
    stack: ['css', 'js', 'react', 'ts', 'html'],
    firstName: 'Dmitry', lastName: 'Sidorov'
  },
];

let d1 = transformator(people[0])
let d2 = transformator(people[1])
let d3 = transformator(people[2])
let d4 = transformator(people[3])

const dev2 = [
  transformator(people[0]),
  transformator(people[1]),
  transformator(people[2]),
  transformator(people[3])
];

const realDevs = people.map(dev => ({
  stack: ['css', 'js', 'react', 'ts', 'html'],
  firstName: dev.name.split(" ")[0],
  lastName: dev.name.split("")[1]
}))

export const greatingMessage = (people: Array<ManType>) => {
 return people.map(dev => `Hi, ${dev.name.split(" ")[0]}! Welcome to Incubator`)
}