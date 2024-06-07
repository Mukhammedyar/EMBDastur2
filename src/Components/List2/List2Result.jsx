import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tipPerSuccess } from '../../Reducer/ValueList2'
import { tipSuccess } from '../../Reducer/List3Values'
import { dataFetching } from '../../Service'

export default function List2Result({values2}) {
    const {length} = useSelector(state => state.tableLength) 
    const listData = Array(length).fill(0)
    const dispatch = useDispatch()
    const [results, setResults] = useState(Array(6).fill(Array(8).fill("")))
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await dataFetching('valuesList2', 'getData')
                data.data.length = length

                let valuesInput = Array(length).fill(Array(6).fill(0))

                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < 6; j++) {
                        valuesInput[i] = data.data[i]
                    }
                }
                
                var typeArray = [] 
                typeArray = valuesInput.map((row, rowIndex) => (
                  row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "Xloridli" : // CO2 va CI ustunlari bolinmasini orqali hisoblash
                  row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "Sulfat-xloridli":
                  row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "Xlorid-sulfatli":
                  row[2] / row[1] > 5 ? "Sulfatli" : "Sulfatli" 
                ))
                await dataFetching('tip', 'updateData', {id: 0, data: typeArray}, 0)
                dispatch(tipSuccess(typeArray))
                
                // Tipning foizini hisoblash
                var typePerArray =Array(8).fill(0)
                typePerArray = valuesInput.map((row, rowIndex) => (
                  row[2] / row[1] > 0 && row[2] / row[1] <= 0.5 ? "1" :
                  row[2] / row[1] > 0.5 && row[2] / row[1] <= 1 ? "2":
                  row[2] / row[1] > 1 && row[2] / row[1] <= 5 ? "3":
                  row[2] / row[1] > 5 ? "4" : 4
                ))
                await dataFetching('tipPercent', 'updateData', {id: 0, data: typePerArray}, 0)
                dispatch(tipPerSuccess(typePerArray))

                setResults([
                    typeArray, 
                    typePerArray
                ]);
            } catch (error) {
                console.log("error with 2-list results page: " + error);
            }
        }
        fetchData()
    }, [values2])

  return (
    <table
        className="shadow-lg border bg-white text-center text-xs font-light dark:border-neutral-500 rounded-lg">
        <thead className="border-b h-[70px] border-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Tip
                </th>
                <th
                    scope="col"
                    rowSpan={2}
                    className="border-r px-2 border-neutral-300">
                    Tip (N%)
                </th>
            </tr>
        </thead>
        <tbody className=''>
        {/* 1-qatar */}
        {listData.map((item,index)=> (
            <tr key={index} className={`${index % 2 == 1 ? "bg-gray-100" : ""} border-b font-medium h-[36.6px]`}>
                <td className='border-r px-2 min-w-[150px]'>{results[0][index]}</td>
                <td className='border-r'>{results[1][index]}</td>
            </tr> 
        ))}
    </tbody>
    </table>
  )
}
