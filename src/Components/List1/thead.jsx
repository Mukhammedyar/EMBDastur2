import React from 'react'

function Thead() {
  return (
    <thead className="border-b border-gray-300 font-medium dark:border-neutral-500 rounded">
        <tr className='bg-gray-200 border-b border-neutral-300 font-normal'>
            <th
                rowSpan={2}
                scope="col"
                className="border-r px-3 py-4 border-neutral-300 ">
                Кесмa N0
            </th>
            <th
                colSpan={2}
                scope="col"
                className="border-r px-2 py-4 border-neutral-300">
                Генетик қатлам.см
            </th>
            <th
                colSpan={2}
                rowSpan={2}
                scope="col"
                className="border-r px-2 py-4 border-neutral-300">
                Қатлам қалыңлығы
            </th>
            <th
                scope="col"
                rowSpan={2}
                className="border-r px-2 py-4 border-neutral-300">
                Физик қум
            </th>
            <th
                scope="col"
                rowSpan={2}
                className="border-r px-2 py-4 border-neutral-300">
                Физик лой
            </th>
            <th
                scope="col"
                rowSpan={2}
                className="border-r px-2 py-4 border-neutral-300">
                Механик таркиб
            </th>
        </tr>
        <tr className='bg-gray-200'>
            <th
                scope="col"
                className="border-r px-2 py-4 font-medium border-neutral-300">
                Жоқарғы шегара 
            </th>
            <th
                scope="col"
                className="border-r px-2 py-4 font-medium border-neutral-300">
                Төменги шегара 
            </th>
        </tr>
    </thead>
  )
}

export default Thead