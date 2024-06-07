import React, { useEffect, useState } from 'react'
import '../List2/tableInput.css'
import List3Input from './List3Input';
import { useDispatch } from 'react-redux';
import { value2SetSuccess } from '../../Reducer/ValueList2';
import List3Const from './List3Const';
import List3Result from './List3Result';
import { useSelector } from 'react-redux'
import { jamiQiymatlarSuccess, tigizQoldiqSuccess, valuesResultSuccess } from '../../Reducer/List3Values';
import { db } from '../../config/firebase';
import ShorYuvishCalculing from './ShorYuvishCalculing';
import { dataFetching } from '../../Service';

function List3() {
  const {length} = useSelector(state => state.tableLength)
  const [values3, setValues3] = useState(Array(length).fill(Array(6).fill(0)));
  const [valueResult, setValueResult] = useState(Array(length).fill(Array(6).fill(0)));
  const dispatch = useDispatch()
  const { values } = useSelector(state => state.valuesList1)

  useEffect(() => {
    // Update values1 whenever length changes
    setValues3(prevValues => {
      const newArray = Array(length).fill().map((_, i) => prevValues[i] || Array(6).fill(0));
      return newArray;
    });
    setValueResult(prevValues => {
      const newArray = Array(length).fill().map((_, i) => prevValues[i] || Array(6).fill(0));
      return newArray;
    });
  }, [length, db]);

  const handleChange = async (rowIndex, colIndex, event) => {
    const newQiymat = values3.map(row => [...row])
    newQiymat[rowIndex][colIndex] = event.target.value;
    setValues3(newQiymat);
    dispatch(value2SetSuccess(newQiymat))

    const {data} = await dataFetching('qatlamQalinligi', 'getData')
    const qatlamQalinligi = data.data

    try {
      await dataFetching('valuesList2', 'updateData', {id: 0, data: newQiymat}, 0)

      let multipliedArray = [];
      for (let i = 0; i < values3.length; i++) {
        let multipliedRow = [];
        for (let j = 0; j < values3[i].length; j++) {
          multipliedRow.push(newQiymat[i][j] * parseFloat(qatlamQalinligi[i]) * parseFloat(values[i][7]));
        }
        multipliedArray.push(multipliedRow);
      }
      await dataFetching('valuesNatiyjaList3', 'updateData', { id: 0, data: multipliedArray }, 0)
      setValueResult(multipliedArray)
      dispatch(valuesResultSuccess(multipliedArray))
      
    } catch (error) {
        console.log(error);
    }
};

  useEffect(() => {
    const datGet = async () => {
      try {
        const tigizQoldiqData = await dataFetching('zichQoldiq', 'getData')
        const qatlamQalinligiData = await dataFetching('qatlamQalinligi', 'getData')
        const resValues = await dataFetching('valuesNatiyjaList3', 'getData')

        let results = resValues.data.data.slice(0, length)
        let jamiQiymatlarArray = [];
        for (let j = 0; j < results[0].length; j++) {
          let sum = 0;
          for (let i = 0; i < results.length; i++) {
            sum += results[i][j];
          }
          jamiQiymatlarArray.push(sum);
        }
        dispatch(jamiQiymatlarSuccess(jamiQiymatlarArray));
        await dataFetching('jamiQiymatlarList3', 'updateData', {id: 0, data: jamiQiymatlarArray}, 0)
        
        let qqalArray = qatlamQalinligiData.data.data.slice(0, length)
        let tigizQoldiq = tigizQoldiqData.data.data.slice(0, length)
        let cuttedValue = values.slice(0, length)

        const ConstResultPlo = []

        for (let i = 0; i < length; i++){
          ConstResultPlo[i] = parseFloat(tigizQoldiq[i]) * parseFloat(qqalArray[i]) * parseFloat(cuttedValue[i][7]); 
        }
        dispatch(tigizQoldiqSuccess(ConstResultPlo));
      } catch (error) {
        console.log(error);
      }
    }
    datGet()
  }, [ length, values3])

  return (
    <div className='min-h-[100vh] px-10 md:px-20'>
      <div className='flex mt-5 justify-center items-start gap-2'>
        <div>
          Qatlam qiymatlari
          <List3Const />
        </div>
        <div>
          Qiymat kiritish
          <List3Input 
            values3={values3}
            setValues3={setValues3}
            handleChange={handleChange}
            valueResult={valueResult}
            setValueResult={setValueResult}/>
        </div>
        <div>
          Natiyjalar
          <List3Result values3={values3} />
        </div>
      </div>
      <ShorYuvishCalculing/>
    </div>
  )
}

export default List3