export const ages = [18, 20, 100, 99, 22, 1, 98, 36, 44, 14];

const predicate = (age: number): boolean => {
  return age > 90;
}

const oldAges = [100];

export type CourseType = {
  title: string
  price: number
}

const courses: Array<CourseType> = [
  {
  title: 'Css',
  price: 110
  },
  {
    title: 'JS',
    price: 200
  },
  {
    title: 'React',
    price: 150
  },
]

const cheapPredicat = (course: CourseType) => {
  return course.price < 160
}

const cheapCourses = []