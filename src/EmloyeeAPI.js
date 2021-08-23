const employees = [
  {
    id: '1',
    name: 'Bob',
    role: 'Software Engineer'
  },
  {
    id: '2',
    name: 'Stephanie',
    role: 'CEO'
  },
  {
    id: '3',
    name: 'Steve',
    role: 'CTO'
  },
  {
    id: '4',
    name: 'Jane',
    role: 'Test Engineer'
  }
]

export const getAllEmployees = () => {
  return employees
}

export const getEmployeeById = (id) => {
  return employees.filter(employee => employee.id === id)
}