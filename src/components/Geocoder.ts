import axios, { AxiosResponse } from "axios";


interface Response {
	type: string;
	query: [string];
	features: [any];
	attribution: string;
}

const geocode = async(street:string, postalCode : number, city: string, communidad: string) : Promise<[number,number]> => {
    const accessToken = 'pk.eyJ1IjoibWFyem9tIiwiYSI6ImNsdHZlaGN1bjFscmEyaW52ZzRjdnI1YTMifQ.XNhjGMcTzR7o8-oMpea7pw';
    const parameters = 'limit=1&country=ES&types=place,address&access_token=' + accessToken
    const search_text = encodeURI(street + " " + " "+ postalCode.toString() + " "+  city + " " + communidad)
    const apiUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+search_text+'.json?' + parameters
    
    try {
     const response :AxiosResponse = await axios.get(apiUrl)
     const responseData : Response = response.data
     const center : [ number, number] = responseData.features[0].center
     
     return(center)
    }
    catch(error){
        console.log(error)
        return [0,0]
    }

    
    
}
export default geocode;