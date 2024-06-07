import { theadDataList1 } from '../../Helpers'

export default function InputHead() {

  return (
    <thead className="input-head-thead">
            <tr className='bg-gray-200 border-b thead-border font-normal'>
                {theadDataList1[0].map((item, i) =>(
                    <th
                    key={i}
                    colSpan={i == 0 ? 3 : i == 1 ? 3 : 1}
                    rowSpan={i == 3 && 2}
                    scope="col"
                    className={`border-r ${i == 0 ? "width-qum" : i== 1 ? "width-chang" : ""} ${i == 0 ? "" : "px-2"} thead-border`}>
                        {item}
                    </th>
                ))}
            </tr>
            <tr className='bg-gray-200'>
                {theadDataList1[1].map(item => (
                    <th
                    key={item}
                    scope="col"
                    className="border-r font-medium thead-border">
                        {item}
                    </th>
                ))}
            </tr>
        </thead>
  )
}
