import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {color, motion} from 'framer-motion'
import { AutoComplete, Button, DatePicker, Form, Input, InputNumber, Select, Switch } from "antd";
import { useGlobalContext } from "../components/GlobalContext";
import { useEffect, useRef, useState } from "react";
import User from '../components/User';
import DateSelect from "../components/DateSelect";
import { text } from "stream/consumers";
import geocode from "../components/Geocoder";

const Position = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    const userData :User = location.state
    const communidades = [
        "Andalucía",
        "Aragón",
        "Asturias",
        "Cantabria",
        "Castilla-La Mancha",
        "Castilla y León",
        "Cataluña",
        "Extremadura",
        "Galicia",
        "Islas Baleares",
        "Islas Canarias",
        "La Rioja",
        "Madrid",
        "Murcia",
        "Navarra",
        "País Vasco",
        "Valencia"
    ]
    
    const [communidad, setCommunidad] = useState<string>('');
    const [options, setOptions] = useState<{ value: string }[]>([]);;
  
    const [postalCode, setPostalCode] = useState<number>(0)
    const [city, setCity] = useState<string>('');
    const [street, setStreet] = useState<string>('');

    const [place, setPlace] = useState<[number, number]>([0,0])
    useEffect(()=>{
        console.log("place")
        if(place[0] == 0 && place[1] == 0){

        }else{
            navigate("/Add/MapAdd", {state:{name: userData.name, color: userData.color, place: place, end: userData.end, social: userData.social}})

        }
    }, [place])


    const handleSearch = (value: string) => {
      const filteredOptions = communidades.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      const formattedOptions : { value: string }[] = []
      filteredOptions.forEach(elem => {formattedOptions.push({value: elem})})
      return formattedOptions
    };
  
    const handleChange = (value: string) => {
      setCommunidad(value);
    };

    const onPostalChange = (value:number | null) => {
        setPostalCode(value!)
    }
  
    const setPosition = async () => {
        geocode(street, postalCode, city, communidad).
        then((center) =>{
            setPlace(center)
            
        }
        ).catch((er)    =>{
            console.log(er)
        }

        )
    }
     return (
 
         <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{y:"100%"}}
        transition={{duration:1}}
        style={{position:'absolute',display:"flex",flexDirection: "column", width:"100%", height: "100%", backgroundColor: userData.color }}>
        
        
        <h1 style={{fontSize:55, marginLeft:10, alignSelf:"center", color:"#f7f7f7"}}>Where are you staying?</h1>
         
        <div style={{display:"flex", flexDirection:"column" ,alignSelf:"center", justifyContent:"space-between", width:230}}>

            <h3 style={{marginBottom:8, color:"#f7f7f7"}}>Region 🇪🇸 </h3>

            <AutoComplete
            options={options}
            value={communidad}
            onSearch={(text) => setOptions(handleSearch(text))}
            onChange={handleChange}
            placeholder="Communidad"
            />
            
            <h3 style={{marginBottom:8, color:"#f7f7f7"}}>Your Home 🏠</h3>
            <div style={{display:"flex" , flexDirection:"row"}}>
            <InputNumber onChange={onPostalChange} placeholder="Postal Code" style={{width:"50%"}} ></InputNumber>
            <Input onChange={e=>setCity(e.target.value)} placeholder="City" style={{width:"50%"}} ></Input>
            

            </div>

            <Input onChange={e=>setStreet(e.target.value)}placeholder="Street and Number"></Input>
            <Button style={{marginTop: 10, width:70, height:50, alignSelf:"center"}} type="default" onClick={
                () =>{  
                    setPosition()
                    .then(() =>{
                    }
                       
                    )
                }
            }>
            </Button>
        
        </div>
        
        <div style={{position:"absolute", display:"flex",flexDirection:"row",bottom:20, marginLeft:30, marginRight:30,marginTop:60, justifyContent:"space-between"}}>
            <Link to={"/"}><ArrowLeftOutlined style={{fontSize:24, color:"black"}}/></Link>
        </div>
        
        </motion.div>
     );

    
}

export default Position;