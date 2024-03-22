import { useLocation } from "react-router-dom"
import { useGlobalContext } from "../components/GlobalContext"
import MapComponent from "../components/MapComponentOld"
import User from "../components/User"



const MapAdd = () =>{
    const location = useLocation()
    const {primary} = useGlobalContext()
    
    const userData :User = location.state

    return (
        <div>
            <MapComponent primaryColor={primary} center={userData.place!} zoom={4.5} scrollable={true}></MapComponent>
        </div>
    )

}
export default MapAdd;