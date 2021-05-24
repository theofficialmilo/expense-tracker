import React, { useState ,useEffect } from 'react'

import _ from "lodash";

import {Card, CardHeader, CardContent, Typography, makeStyles} from '@material-ui/core'
import {ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, Cell} from 'recharts'

import {getMonthString} from '../utils/dataConfig'

import {IExpense} from '../typing/expenseType'

const useStyles = makeStyles(theme=>({
  root: {
    marginBottom:  theme.spacing(2) 
  },
  cardTitle: {
    color: '#f0f0f0'
  },
  cardSubheader: {
    color: '#fff'
  },
  cardContent: {
    minHeight: 300
  }
}))

interface IProps{
  data: Array<IExpense>
}

const OverviewCard:React.FC<IProps> = ({data}: IProps) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);
  const [overviewData, setOverViewData] = useState<any>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeItem = overviewData[selectedIndex];

  console.log(data)

  useEffect(() => {
    const customData = 
      _(data)
        .groupBy('dateMonth')
        .map((objs: any, key: any) => ({
          'dateMonth': key,
          'amount': _.sumBy(objs,'amount')
        }))
        .value()

    setSelectedIndex(customData.length-1)

    customData.map((objs: any, key:any) => {
      objs.dateMonth = getMonthString(objs.dateMonth)
    })

    setOverViewData(customData);
    setIsLoading(false)
  }, [data])

  const handleOnClick = (data:any, index:any) => {
    setSelectedIndex(index)
  }

  return (
    <Card className={classes.root}>
      {!isLoading && 
      <>
      <CardHeader 
        title={<Typography variant='subtitle1' color='secondary'>Expenses</Typography>}
        subheader={<Typography  variant='h3' color='textPrimary'>{`$${activeItem.amount}`}</Typography>}
      />
      <CardContent>
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={325} minHeight={225}>
          <BarChart data={overviewData}  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <YAxis />
            <Tooltip />
            <XAxis dataKey='dateMonth' />
            <Bar dataKey='amount' onClick={handleOnClick}>
              {overviewData.map((expense: IExpense, index: number)=> (
                <Cell cursor="pointer" fill={index === selectedIndex ? '#1989fa' : '#737373'} key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      </>
      }
      
    </Card>
  )
}

export default OverviewCard
