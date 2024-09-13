import React, { useEffect, useState } from 'react'
import './list1.css'
import InputHead from './InputHead';
import { useDispatch, useSelector } from 'react-redux';
import { valueSetSuccess } from '../../Reducer/ValuesList1';
import Results from './Result';
import Inputs from './inputs';
import ConstLists from './constantLists';
import Jami from './Jami';
import { tigizQoldiqSuccess } from '../../Reducer/List3Values';
import {db} from '../../config/firebase'
import { dataFetching } from '../../Service';



function List1() {
  const dispatch = useDispatch()
  const { length } = useSelector(state => state.tableLength)
  const [values1, setValues1] = useState(Array(8).fill(Array(8).fill(0)))

  useEffect(() => {
    // Update values1 whenever length changes
    setValues1(prevValues => {
      const newArray = Array(length).fill().map((_, i) => prevValues[i] || Array(8).fill(0));
      return newArray;
    });
  }, [length, db]);


  const handleInputChange = async (rowIndex, colIndex, event) => {
    const newArray = values1.map(row => [...row]);
    event.target.value < 101 && event.target.value > -2 ? newArray[rowIndex][colIndex] = event.target.value : event.target.value; 
    setValues1(newArray);
    dispatch(valueSetSuccess(newArray))
    try {
      await dataFetching('valuesList1', 'updateData', {id: 0, data: newArray}, 0 )
      
      const {data} = await dataFetching('qatlamQalinligi', 'getData')
      const qatlamQalinligi = data.data

      const zichQoldiq = await dataFetching('zichQoldiq', 'getData')
      const tigizQoldiq = zichQoldiq.data.data
      
      const arr = []
      newArray.map((item, index) => {
          arr[index]=parseFloat(qatlamQalinligi[index]) * parseFloat(tigizQoldiq[index]) * parseFloat(item[7])
      })
      dispatch(tigizQoldiqSuccess([...arr]))
      dispatch(valueSetSuccess(newArray))
    } catch (error) {
      console.error('Error updating Firestore:', error);
    }
  };

  return (
    <div className='list1-box'>
        <div className="list1-flex-box">
          <ConstLists/>
          <div>
            Qiymat Kiritish
            <table className='list1-table'>
              <InputHead/>
              <Inputs
                handleInputChange={handleInputChange}
                values1={values1}
                setValues1={setValues1} />
            </table>
          </div>
            <Jami/>
            <Results values1={values1}/>
        </div>
      </div>
  );
}

export default List1

