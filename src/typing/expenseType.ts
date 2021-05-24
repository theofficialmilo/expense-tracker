export interface IExpense {
  id: string,
  name:string,
  type: string,
  date:  Date,
  dateMonth? : number | string,
  amount: number
} 