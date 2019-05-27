const initStateEmployee={
  name:'bank',
  age:25
}
const initStateSalary={
  salary:15000,
  log:[]
}
const Employee = (state = initStateEmployee,action)=>{
  switch (action.type) {
    case 'chgName':
        state={
          ...state,
          name:action.payload
        }
      break;
    case 'chgAge':
    state={
      ...state,
      age:action.payload
    }
      break;
    default:
  }
  return state;
}
const SalaryEmployee = (state = initStateSalary,action)=>{
  switch (action.type) {
    case 'add':
        state={
          ...state,
          salary:state.salary+=action.payload,
          log:[...state.log,action.payload]
        }
      break;
    case 'minus':
        state={
          ...state,
          salary:state.salary-=action.payload,
          log:[...state.log,-action.payload]
        }
      break;
    default:
  }
  return state;
}
