import React, { useEffect, useState } from 'react'
import { list1 } from '../../API/tableList'
import { useSelector } from 'react-redux'
import { db } from '../../config/firebase'
import { dataFetching } from '../../Service'

export default function TableConst() {
    const [listData, setListData]=useState(list1)
    const { length } = useSelector(state => state.tableLength)
    const [values, setValues] = useState(Array(length).fill(Array(2).fill('')))
    const [valuesList2, setValuesList2] = useState(Array(length).fill(''))
    const header = [["Kesma N0", "Chuqurlik.sm", "Zich qoldiq"], ["Yuqorgi chegara", "Pastgi chegara"]]

    const handleInputChange = async (index, event) => { 
        const newArray = [...valuesList2]
        event.target.value <= 101 && event.target.value >= -2 ? newArray[index] = event.target.value : event.target.value;
        setValuesList2(newArray);
        try {
            await dataFetching('zichQoldiq', 'updateData', {id: 0, data: newArray}, 0)
        } catch (error) {
            console.error('Error updating Firestore:', error);
        }
    };

    
    useEffect(() => {
        const dataGetting =async () => {
            try {
                const constValues = await dataFetching('constValuesList1', 'getData')
                const tq = await dataFetching('zichQoldiq', 'getData')

                let newDataCutted = constValues.data.data.slice(0, length)
                setValues(newDataCutted)

                let tigizQoldiqCutted = tq.data.data.slice(0, length)
                setValuesList2(tigizQoldiqCutted)
            } catch (error) {
                console.log(error);
            }
        }
        dataGetting()
    }, [db, length])


  return (
    <table
        className="shadow-lg border font-medium bg-white text-center dark:border-neutral-500 rounded-lg">
        <thead className="border border-gray-300 text-xs h-[70px] border-b-gray-300 font-medium dark:border-neutral-500 rounded">
            <tr className='bg-gray-200 border-b border-neutral-400 font-normal'>
                {header[0].map((item, index) => (
                    <th
                        key={index}
                        rowSpan={index == 0 || index == 2 ? 2 : 1}
                        colSpan={index !== 0 ? 2 : 1}
                        scope="col"
                        className={`${index == 2 ? "border-0" : "border-r"} w-[50px] border-neutral-400`}>
                        {item}
                    </th>
                ))}
            </tr>
            <tr className='bg-gray-200'>
              {header[1].map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="border-r px-2 font-medium border-neutral-400">
                  {item}
                </th>
              ))}  
            </tr>
        </thead>
        <tbody className='text-xs'>
            {values.map((item, index) => (
                <tr key={index} className={`border-b font-normal tablerow h-[36.6px] ${index % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                    <th className='border-r px-1 w-[30px]'>{listData[index].id}</th>
                    <td className='border-r p-0'>{values[index][0]}</td>
                    <td className='border-r p-0'>{values[index][1]}</td>
                    <td className='p-0'>
                        <input
                            type="number"
                            step={0.1}
                            value={valuesList2[index]}
                            onChange={(event) => handleInputChange(index, event)}
                            className={`text-xs font-medium px-1 w-[100px] h-[30px] md:w-[95px] focus:outline-0 md:text-sm ${index % 2 == 1 ? "bg-gray-100" : "bg-white"} `}
                        />
                    </td>
                </tr> 
            ))}
        </tbody>
    </table>
  )
}
