import React, { useEffect, useState } from 'react'
import List3Head from './list3Head'
import { useDispatch, useSelector } from 'react-redux'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { value2SetSuccess } from '../../Reducer/ValueList2'
import { dataFetching } from '../../Service'

export default function List3Input({ values3,setValues3, handleChange , valueResult, setValueResult}) {
    const { length } = useSelector(state => state.tableLength)
    const {jamiQiymatlar} = useSelector(state => state.valuesList3)
    const dispatch = useDispatch()
    
    useEffect(() => { 
        const getValue2Docs = async () => {
            try {
                const { data } = await dataFetching('valuesList2', 'getData')
                const valuesRes = await dataFetching('valuesNatiyjaList3', 'getData')
                let list3Values = data.data.slice(0, length)
                setValues3(list3Values);
                dispatch(value2SetSuccess(list3Values))
                
                let resultSliced = valuesRes.data.data.slice(0, length)
                setValueResult(resultSliced);
            } catch (error) {
                console.error('Error fetching Firestore values:', error);
            }
        }
        getValue2Docs()
    }, [length])

  return (
    <table
        className="mb-4 shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <List3Head/>
        <tbody>
            {values3.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-b border-neutral-300 text-xs tablerow'>
                {row.map((qiymat, colIndex) => (
                    <td key={colIndex} className='w-[80px] border-r border-neutral-300 px-0 bg-white text-black table-row-item'>
                        <input
                            type={"number"}
                            step={0.1}
                            value={qiymat.toString().slice(0,7)}
                            placeholder={"0"} 
                            onChange={(event) => handleChange(rowIndex, colIndex, event)}
                            className={`
                            ${ +qiymat > 100
                                ? 'border-1 border-red-500 text-red-500'
                                : "border-none focus:ring-0 text-gray-800 "
                            } h-auto max-w-[100px] md:w-[80px] lg:w-[80px] font-medium px-1 mx-0 focus:outline-0`}
                        />
                        <table className='w-full'>
                            <tbody>
                                <tr>
                                    <td className='bg-slate-200 text-blue-800 w-[100px] md:w-[80px] text-start px-1 font-medium'>
                                        {valueResult[rowIndex][colIndex]?.toString()?.slice(0,5)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                ))}
                </tr>
            ))}
                <tr className='border-neutral-300 text-xs h-[33.6px] table-row-last'>
                {jamiQiymatlar.map((qiymat, index) => (
                    <td key={index} className='w-[80px] border-r border-neutral-30 font-medium bg-blue-300 text-start px-1 py-0 text-black '>
                        {qiymat?.toString().slice(0,6)}
                    </td>
                ))}
                </tr>
        </tbody>
    </table>
  )
}
