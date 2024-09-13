import React, { useEffect, useState } from 'react'
import './tableInput.css'
import TableConst from './tableConstList2'
import TableInput from './TableInput'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase'
import { doc, setDoc } from 'firebase/firestore'
import { calculateTypes, calculatevaluesResult } from '../../Functions/FetchDataList2'
import List2Result from './List2Result'
import { dataFetching } from '../../Service'


function List2() {
  const { length } = useSelector(state => state.tableLength)
  const [values2, setValues2] = useState(Array(length).fill(Array(6).fill(0)));
  const [natijaValues, setNatiyjaValues] = useState(Array(length).fill(Array(6).fill(0)))
  const dispatch = useDispatch()
  const factors = [0.061, 0.0355, 0.048, 0.02004, 0.0121, 0.023]; // bo'linuvchi sonlar

  useEffect(() => {
    // Update values1 whenever length changes
    setValues2(prevValues => {
      const newArray = Array(length).fill().map((_, i) => prevValues[i] || Array().fill(0));
      return newArray;
    });
  }, [length, db]);

  const handleChange2 = async (rowIndex, colIndex, event) => {
    const newQiymat = [...values2]
    newQiymat[rowIndex][colIndex] = event.target.value
    setValues2(newQiymat);
    try {
      await dataFetching('valuesList2', 'updateData', { id: 0, data: newQiymat }, 0)

      calculatevaluesResult(values2,factors,setNatiyjaValues,dispatch) //values input astndagi natiyjelerdi esaplaydi
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    calculateTypes(values2,setNatiyjaValues,dispatch,factors) //values input astndagi natiyjelerdi aladi ham esaplaydi
  }, [length])


  return (
    <div className='px-10 my-5 flex flex-col items-start min-h-[100vh]'>
      <div className='flex flex-wrap md:flex-nowrap justify-center items-start gap-1'>
        <div>
          <p className="text-xl pb-2">Qatlam qiymatlari</p>
          <TableConst />
        </div>
        <div className=''>
          <p className="text-xl pb-2">Qiymat kiritish</p>
          <TableInput 
            handleChange={handleChange2}
            jadvalQiymatlari={values2}
            setJadvalQiymatlari={setValues2}
            natijaValues={natijaValues}
            setNatiyjaValues={setNatiyjaValues}
          />
        </div>
        <div>
          <p className="text-xl pb-2">Natiyalar</p>
          <List2Result values2={ values2 } /> 
        </div>
      </div>
    </div>
  )
}

export default List2
