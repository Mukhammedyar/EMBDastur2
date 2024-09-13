import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { useSelector } from 'react-redux'
import { dataFetching } from '../../Service'

export default function ConstLists() {
    const [listData, setListData] = useState(list1)
    const { length } = useSelector(state => state.tableLength)
    const [values, setValues] = useState(Array(length).fill(Array(2).fill('')))
    const [results, setResults] = useState([])
    const [resultsSum, setResultsSum] = useState([])

    const handleInputChange = async (rowIndex, colIndex, event) => {
        const newArray = values.map(row => [...row]);
        const value = event.target.value === '' ? '' : 
            (parseFloat(event.target.value) < 101 && parseFloat(event.target.value) > -2) ? 
            parseFloat(event.target.value) : parseFloat(event.target.value);
        newArray[rowIndex][colIndex] = value;
        setValues(newArray);
        try {
            await dataFetching('constValuesList1', 'updateData', {id: 0, data: newArray }, 0 )
            
            calculateResult(newArray)
        } catch (error) {
            console.error('Error updating Firestore:', error);
        }
    };

    const calculateResult =async (newArray) => {
        let arr = []
        for (let i = 0; i < length; i++) {
            arr.push(parseFloat(newArray[i][1]) - parseFloat(newArray[i][0]))
        }
        await dataFetching('qatlamQalinligi', 'updateData', {id: 0, data: arr }, 0 )
        setResults(arr)
        
        let sum = 0
        for (let i = 0; i < length; i++) {
            sum += arr[i]
        }
        setResultsSum(sum)
        await dataFetching('qatlamQalinligiJami', 'updateData', {id: 0, data: sum }, 0 )
    }
    
    useEffect(() => {
        const dataGet =async () => {
            try {       
                const { data } = await dataFetching('constValuesList1', 'getData');
                const dataLength = data.data.slice(0, length)
                setValues(dataLength)
                calculateResult(dataLength)
           } catch (error) {
                console.log(error.message);
           }
        }
        dataGet()
    }, [length])
    return (
        <div className='flex-col'>
            <h1>Qatlam qiymatlari</h1>
            <table
                className="const-lists-table">
                <thead className="const-lists-thead">
                    <tr className='bg-gray-200 border-b text-xs thead-border font-normal'>
                        <th
                            rowSpan={2}
                            scope="col"
                            className="border-r thead-border px-1">
                            Kesma N0
                        </th>
                        <th
                            colSpan={2}
                            scope="col"
                            className="border-r thead-border">
                            Genetik qatlam(sm)
                        </th>
                        <th
                            colSpan={2}
                            rowSpan={2}
                            scope="col"
                            className="border-r max-w-[100px] px-1 thead-border">
                            Qatlam qalinligi
                        </th>
                    </tr>
                    <tr className='bg-gray-200'>
                        <th
                            scope="col"
                            className="border-r pl-1 font-medium thead-border">
                            Yuqorgi chegara
                        </th>
                        <th
                            scope="col"
                            className="border-r pr-1 font-medium thead-border">
                            Pastki chegara 
                        </th>
                    </tr>
                </thead>
                <tbody className='text-xs md:text-xs'>
                    {values.map((row , rowIndex)=> (
                    <tr key={rowIndex} className={`bg-white border-b font-normal `}>
                        <th className={`border-r px-1 w-[30px] ${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>{listData[rowIndex].id}</th>
                        {row.map((qiymat, colIndex) => (
                            <td key={colIndex} className={`border-r p-0 ${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                                <input
                                    type="number"
                                    step={1}
                                    value={qiymat}
                                    onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                                    className={`const-lists-input ${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white "}`}/>
                            </td>
                        ))}
                        <td className={`border-r ${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white"}`} colSpan={2}>{results[rowIndex]}</td>
                    </tr> 
                    ))}
                    <tr className='bg-blue-300 font-normal h-[31px]'>
                        <td className='border-r'>Jami</td>
                        <td className='border-r' colSpan={2}></td>
                        <td className='border-'>{resultsSum}</td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
