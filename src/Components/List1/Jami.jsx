import React from 'react'
import { useSelector } from 'react-redux'

export default function Jami() {
    const { isLoading, jamiPercent, jamiNatiyja } = useSelector(state => state.valuesList1)
    const {length} = useSelector(state => state.tableLength)
    const arr = Array(length).fill('')
    
  return (
    <div>
        <p>Jami</p>
        <table className='shadow-lg w-[50px] md:w-[70px] border bg-white text-center text-xs md:text-sm font-light dark:border-neutral-500 rounded-lg'>
            <thead className="text-xs md:text-sm border-b h-[82px] border-gray-300 font-medium dark:border-neutral-500 rounded">
                <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
                    <th
                        rowSpan={2}
                        scope="col"
                        className="border-r border-neutral-300">
                        Ja'mi %
                    </th>
                </tr>
            </thead>
            <tbody className='text-xs md:text-sm'> 
            {!isLoading && arr.map((item, index) => (
                <tr key={index} className={`border-b h-[33px] border-neutral-300 font-normal ${index % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                    <td
                    scope="col"
                    className="border-b border-neutral-300">
                    {jamiPercent[index]?.toString()?.slice(0,6)}
                    </td>
                </tr>
            ))}
                <tr className={`border-b bg-blue-300 h-[33px] border-neutral-300 font-normal`}>
                    <td
                    scope="col"
                    className="border-b border-neutral-300">
                    {jamiNatiyja[8]}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
