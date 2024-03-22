import { Select } from "antd";
import React, { useRef, useEffect, useState, Dispatch, SetStateAction } from "react"

const DateSelect= (props:{setDate: Dispatch<SetStateAction<Date>>}) => {
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    useEffect(() => {
       setDateState()
    }, [day]);
    useEffect(() => {
        setDateState()
     }, [month]);
     useEffect(() => {
        setDateState()
     }, [year]);
    
    const days = []
     const months =[]
     const years =[]
 
    for(let i=1; i<=31; i++){
         days.push({value:i, label:<span>{i}</span>})
    }
    for(let i=1; i<=12; i++){
     months.push({value:i, label:<span>{i}</span>})
     } 
     for(let i=2024; i<=2030; i++){
         years.push({value:i, label:<span>{i}</span>})
     }   
 

     const setDateState = () =>{
        if (day != 0 && month != 0 && year != 0){
            const projectEndDate = new Date(year, month-1, day)
            props.setDate(projectEndDate)
           
        }
    }

    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{marginBottom:8, color:"#f7f7f7"}}>End of Project 📅</h3>
            <div  style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
                <Select  onChange={value=>{ setDay(value);}} options={days} placeholder={"Day"}></Select>
                <Select onChange={value=>{ setMonth(value);}} options={months} placeholder={"Month"}></Select>
                <Select onChange={value=>{ setYear(value);}} options={years} placeholder={"Year"}></Select>
            </div>
        </div>
    )


}
   



export default DateSelect;