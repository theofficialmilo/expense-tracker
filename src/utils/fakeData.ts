import faker from 'faker'

import {IExpense} from '../typing/expenseType'

export const fakeExpenses: Function = () => {
  let expenseDataList: Array<IExpense> = [];
  for (let i=0; i<25; i++){
    //Generate Date 
    const dateDate = faker.date.between('2021-01-01', new Date().toString())

    //Generate Fake Data
    let expenseData:IExpense = {
      id: faker.git.commitSha(),
      name: faker.commerce.product(),
      type: faker.random.arrayElement(['Food & Drinks', 'Rent', 'Insurance', 'Entertainment', 'Others']),
      date: dateDate,
      dateMonth: dateDate.getMonth(),
      amount: parseFloat(faker.commerce.price())
    }
    //Push to Arry
    expenseDataList.push(expenseData);
  }
  // Return data
  return expenseDataList
}