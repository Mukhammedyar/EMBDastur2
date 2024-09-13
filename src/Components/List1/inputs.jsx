<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
=======
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase';
>>>>>>> be6bfb195b9bfe87427cf1e6f3cfc4a1b9b5ccdb
import { valueSetSuccess } from '../../Reducer/ValuesList1';
import { dataFetching } from '../../Service';



export default function Inputs({handleInputChange, values1, setValues1}) {
  const { jamiNatiyja } = useSelector(state => state.valuesList1)
  const { length } = useSelector(state => state.tableLength)
  const EightArray = Array(8).fill('')
  const dispatch = useDispatch()
  
  useEffect(() => {
    const getValueDocs = async () => {
      try {
        let {data} = await dataFetching('valuesList1', "getData")
        const values = data.data.slice(0, length)
        setValues1(values);
        dispatch(valueSetSuccess([...values]))

      } catch (error) {
        console.error('Error fetching Firestore values:', error);
      }
    };
    getValueDocs();
  }, [length]);

  return (
    <tbody className='text-xs md:text-sm'>
          {values1.map((row, rowIndex) => (
            <tr key={rowIndex} className='border-b'>
              {row.map((qiymat, colIndex) => (
                <td key={colIndex} className={`inputs-td ${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white"}`}>
                  <input
                    type="number"
<<<<<<< HEAD
                    value={qiymat === 0 || qiymat === null ? '' : qiymat}
=======
                    value={qiymat == 0 ? null : qiymat}
>>>>>>> be6bfb195b9bfe87427cf1e6f3cfc4a1b9b5ccdb
                    step={1}
                    onChange={(event) => handleInputChange(rowIndex, colIndex, event)}
                    className={`${rowIndex % 2 == 1 ? "bg-gray-100" : "bg-white"} inputs-input`}
                  />
                </td>
              ))}
            </tr>
          ))}
          <tr className='bg-blue-300 text-start h-[33px]'>
            {EightArray.map((_, index) => (
              <td key={index} className='inputs-last-list'>
                {jamiNatiyja[index]?.toFixed(3)}
              </td>
            ))}
          </tr>
        </tbody>
  )
}
