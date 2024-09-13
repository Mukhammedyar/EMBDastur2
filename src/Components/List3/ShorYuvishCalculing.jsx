import React, { useEffect, useState } from 'react'
import { dataFetching } from '../../Service'

export default function ShorYuvishCalculing() {
    let [shorYuvishQiymat, setShorYuvishQiymat] = useState([]) 

    useEffect(() => {
        const shorYuvishCalculing = async () => {
            let shorYuvishArray = []
            const mexnikTarkibData = await dataFetching('mexanikTarkibJami', 'getData')
            const {data} = await dataFetching('shorlanishDarajasi', 'getData')
            const shorlanishDarajasi = data.data

            const mexanikTarkib = mexnikTarkibData.data.data
            
            try {
                const shorYuvish = () => {
                    switch (shorlanishDarajasi) {
                        case "Shorlanmagan": return calculateShorlanmagan(mexanikTarkib);
                        case "Kuchsiz shorlangan": return calculateKuchsizShurlangan(mexanikTarkib);
                        case "O'rtacha shorlangan": return calculateOrtachaShorlangan(mexanikTarkib);
                        case "Kuchli shorlangan": return calculateKuchliShorlangan(mexanikTarkib);
                        case "Juda kuchli shorlangan": return calculateShurxoqlar(mexanikTarkib);
                        default: return ["X0", "Y0", "Y0"];
                    }
                }
                const calculateShorlanmagan = (mexanikTarkibValue) => {
                    switch (mexanikTarkibValue) {
                        case "Qum": return ["X1", "Y1", "Z1"];
                        case "Qumloq": return ["X2", "Y2", "Z2"];
                        case "Yengil qumloq": return ["X3", "Y3", "Z3"];
                        case "Orta qumloq": return ["X4", "Y4", "Z4"];
                        case "Ogir qumloq": return ["X5", "Y5", "Z5"];
                        case "Loy": return ["X6", "Y6", "Z6"];
                        // Qolgan qiymatlar...
                        default: return ["X0", "Y0", "Y0"];
                    }
                }
                const calculateKuchsizShurlangan = (mexanikTarkibValue) => {
                    switch (mexanikTarkibValue) {
                        case "Qum": return ["X7", "Y7", "Z7"];
                        case "Qumloq": return ["X8", "Y8", "Z8"];
                        case "Yengil qumloq": return ["X9", "Y9", "Z9"];
                        case "Orta qumloq": return ["X10", "Y10", "Z10"];
                        case "Ogir qumloq": return ["X11", "Y11", "Z11"];
                        case "Loy": return ["X12", "Y12", "Z12"];
                        // Qolgan qiymatlar...
                        default: return ["X0", "Y0", "Y0"];
                    }
                }
                const calculateOrtachaShorlangan = (mexanikTarkibValue) => {
                    switch (mexanikTarkibValue) {
                        case "Qum": return ["X13", "Y13", "Y13"];
                        case "Qumloq": return ["X14", "Y14", "Y14"];
                        case "Yengil qumloq": return ["X15", "Y15","Y15"];
                        case "Orta qumloq": return ["X16", "Y16", "Z16"];
                        case "Ogir qumloq": return ["X17", "Y17", "Z17"];
                        case "Loy": return ["X18", "Y18", "Z18"];
                        // Qolgan qiymatlar...
                        default: return ["X0", "Y0", "Y0"];
                    }
                }
                const calculateKuchliShorlangan = (mexanikTarkibValue) => {
                    switch (mexanikTarkibValue) {
                        case "Qum": return ["X19", "Y19", "Y19"];
                        case "Qumloq": return ["X20", "Y20", "Y20"];
                        case "Yengil qumloq": return ["X21", "Y21","Y21"];
                        case "Orta qumloq": return ["X22", "Y22", "Z22"];
                        case "Ogir qumloq": return ["X23", "Y23", "Z23"];
                        case "Loy": return ["X24", "Y24", "Z24"];
                        // Qolgan qiymatlar...
                        default: return ["X0", "Y0", "Y0"];
                    }
                }
                const calculateShurxoqlar= (mexanikTarkibValue) => {
                    switch (mexanikTarkibValue) {
                        case "Qum": return ["X25", "Y25", "Y25"];
                        case "Qumloq": return ["X26", "Y26", "Y26"];
                        case "Yengil qumloq": return ["X27", "Y27","Y27"];
                        case "Orta qumloq": return ["X28", "Y28", "Z28"];
                        case "Ogir qumloq": return ["X29", "Y29", "Z29"];
                        case "Loy": return ["X30", "Y30", "Z30"];
                        // Qolgan qiymatlar...
                        default: return ["X0", "Y0", "Y0"];
                    }
                }
                shorYuvishArray = shorYuvish()
                // await setDoc(doc(db, "List3Results", "ShorYuvushQiymatlar"), { data: shorYuvishArray });
                await dataFetching('shorYuvishQiymat', 'updateData', {id: 0, data: shorYuvishArray}, 0);

                const getShoryuvish = await dataFetching('shorYuvishQiymat', 'getData')
                setShorYuvishQiymat(shorYuvishArray);

            } catch (error) {
              console.log(error); 
            }
        }
        shorYuvishCalculing()
    }, [setShorYuvishQiymat])


  return (
    <div className='flex justify-center'>
        <table className='border border-slate-500 bg-white rounded-lg p-2'>
            <tbody className=''>
                <tr className='h-[50px] text-center font-medium'>
                    <td className="border-r p-1 bg-blue-300 text-start border-gray-300 w-[170px]">Shor yuvish meyorlari (ming metr kub)</td>
                    <td className="border-r p-1 text-orange-600 border-slate-300 w-[70px]">{shorYuvishQiymat[0]}</td>
                    <td className="border-r p-1 bg-blue-300 text-start border-gray-300 w-[170px]">Shor yuvish  soni</td>
                    <td className="border-r p-1 text-orange-600 border-slate-300 w-[70px]">{shorYuvishQiymat[1]}</td>
                    <td className="border-r p-1 bg-blue-300 text-start border-gray-300 w-[170px]">Shor yuvish  muddatlari (oylar)</td>
                    <td className="p-1 w-[70px] text-orange-600">{shorYuvishQiymat[2]}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
