
import { Button, Image } from 'antd';
import mapboxgl from "mapbox-gl";
import React, { useRef, useEffect } from "react"
import logo from '../assets/Logo.png'

const MapComponent= (props: {primaryColor: string}) => {
    const mapContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoibWFyem9tIiwiYSI6ImNsdHZlaGN1bjFscmEyaW52ZzRjdnI1YTMifQ.XNhjGMcTzR7o8-oMpea7pw";
    
        if (mapContainer.current) {
          const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: [-3.703790, 40.4168 ],
            zoom: 4.5,
            attributionControl: false,
            dragPan: false,
          });
          
          map.scrollZoom.disable();
          map.on('load', () => {
            map.setPaintProperty("water", "fill-color", props.primaryColor)
          })
          

          return () => map.remove();
        }

        
      }, []);

      return (
        <div
          ref={mapContainer}
          style={{display:"flex",flexDirection:"row", position:"absolute", top:0, bottom:0, width:"100%", justifyContent:"center", height:"100%"}}
        >   

        <div style={{display:"flex",flexDirection:"column", position:"absolute", height:"100%"}}>
            
            
            <img width={200} src={logo}/>
            
            <div style={{display:"flex",flexDirection:"column", position:"absolute", bottom:50, width:200}}>
                <Button size='large' shape='round' style={{marginBottom:10,height:50}} type='default'>Add</Button>
                <Button  size= 'large' shape='round' style={{height:50}}type='default'>Find</Button>   
            </div>
            
            
        </div>
            
            
        </div>
      );
    };

    export default MapComponent;