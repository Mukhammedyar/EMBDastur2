import React, { useEffect } from 'react'
import './tableInput.css'
import List2Head from './List2Head';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useSelector } from 'react-redux';
import { dataFetching } from '../../Service';

export default function TableInput({ handleChange, jadvalQiymatlari, setJadvalQiymatlari, natijaValues , setNatiyjaValues}) {
    const { length } = useSelector(state => state.tableLength)
    const arr  = Array(length).fill(Array(6).fill(0))

    useEffect(() => { 
        const getValue2Docs = async () => {
            try {
                const {data} = await dataFetching("valuesList2", 'getData')
                const resValuesList2 = await dataFetching("valuesNatiyjaList2", 'getData')

                let valuesList2 = data.data.slice(0, length)
                let newResult = resValuesList2.data.data.slice(0, length) 
                setJadvalQiymatlari(valuesList2);
                setNatiyjaValues(newResult)
            } catch (error) {
                console.error('Error fetching Firestore values:', error);
            }
        }
        getValue2Docs()
    }, [db, length])

  return (
    <table
        className="mb-4 shadow-lg border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg">
        <List2Head/>
        <tbody className=''>
            {jadvalQiymatlari.map((row, rowIndex) => (
                <tr key={rowIndex} className='border-b border-neutral-300 text-xs tablerow'>
                {row.map((qiymat, colIndex) => (
                    <td key={colIndex} className='w-[80px] border-r border-neutral-300 px-0 bg-white text-black tablerow'>
                        <input
                            type={"number"}
                            step={0.1}
                            value={qiymat == 0 ? null : qiymat}
                            placeholder={"0"} 
                            onChange={(event) => handleChange(rowIndex, colIndex, event)}
                            className={`
                            ${ +qiymat > 100
                                ? 'border-1 border-red-500 text-red-500'
                                : "border-none focus:ring-0 text-gray-800 "
                            } max-w-[100px] md:w-[80px] lg:w-[80px] font-medium px-1 mx-0 focus:outline-0`}
                        />
                        <table className='w-full'>
                            <tbody>
                                <tr>
                                    <td className='bg-slate-200 text-blue-800 w-[100px] md:w-[80px] text-start px-2 font-medium'>
                                       {natijaValues[rowIndex][colIndex]?.toFixed(2)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}


