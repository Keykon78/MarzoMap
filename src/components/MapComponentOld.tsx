
import { Button, Image } from 'antd';
import mapboxgl, { Marker } from "mapbox-gl";
import React, { useRef, useEffect } from "react"


const MapComponent= (props: {primaryColor: string, scrollable:Boolean, center:[number, number], zoom:number}) => {
    const mapContainer = useRef<HTMLDivElement>(null);

    const center = props.center
    const zoom = props.zoom



    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoibWFyem9tIiwiYSI6ImNsdHZlaGN1bjFscmEyaW52ZzRjdnI1YTMifQ.XNhjGMcTzR7o8-oMpea7pw";
        const end = {
          center: center,
          zoom: 17,
          duration: 5000
      }
        if (mapContainer.current) {
          console.log(center)

          const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/light-v11",
            center: center,
            zoom: zoom,
            attributionControl: false,
         
            
          });
          

          
          if (!props.scrollable){
            map.scrollZoom.disable();
            map.dragPan.disable();
          }

          
          map.on('load', () => {
            map.setPaintProperty("water", "fill-color", props.primaryColor)
          })

          const marker = new Marker()
          .setLngLat(center)
          .addTo(map)
          

          return () => map.remove();
        }

        
      }, []);

      return (
        <div
          ref={mapContainer}
          style={{display:"flex",flexDirection:"row", position:"absolute", top:0, bottom:0, width:"100%", justifyContent:"center", height:"100%"}}
        >   
            
            
        </div>
      );
    };

    export default MapComponent;