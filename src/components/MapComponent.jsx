import { MapContainer, Marker, Polygon, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
// const centerOg = [
//     20.3401410334817, 85.80847207901974]




const center = [30,0]
const mL1 = [
    [       [0,  0],
            [50.5,  0],
            [50.5, 20],
            [31.5, 20],
            [31.5, 25],
            [12, 25],
            [12, 20],
            [0, 20],
            [0, 16]],
        [
            [50.5, 16],
            [50.5, 17.5],
            [49,17.5],
            [49, 16],
        ],
        [
            [4,12],
            [4, 0]
        ],
        [
            [50.5,16],
            [25,16]
        ],
        [
            [20, 16],
            [0, 16]
        ],
        [
            [31.5, 27],
            [31.5, 30]
        ],
        [
            [31.5, 30],
            [52, 30]
        ],
        [
            [12, 27],
            [12, 30],
        ],
        [
            [12,30],
            [-5, 30],
        ],

        [
            [52, 40],
            [-5, 40],
        ],
        [
            [52, 30],
            [52, -10]
        ],
        [
            [52, 40],
            [52, 70]
        ],
        [
            [58, 70],
            [58, -10]
        ],
        [
            [-5, 40],
            [-5, 70]
        ],
        [
            [-5, 30],
            [-5, -5]
        ],
        [
            [-15, 70],
            [-15, -5]
        ],
        [
            // park
            [48,50],
            [0,50],
            [0, 70],
            [48, 70]
        ]
    
    ]

//     const smallPolygon = [
//         [
//             [20.339, 85.807], // Adjusted coordinates
//             [20.341, 85.807],
//             [20.341, 85.809],
//             [20.339, 85.809]
//         ],
//         [
//             [20.341, 85.809], 
//             [20.341, 85.810],
//             [20.340, 85.810],
//             [20.340, 85.809]
//         ],
//         [
//             [20.339, 85.808],
//             [20.339, 85.807]
//         ],
//         [
//             [20.341, 85.809],
//             [20.340, 85.809]
//         ],
//         [
//             [20.340, 85.809],
//             [20.339, 85.809]
//         ]
//     ];

// const multiPolygon = [
//         [
//           [51.51, -0.12],
//           [51.51, -0.13],
//           [51.53, -0.13],
//         ],
//         [
//           [51.51, -0.05],
//           [51.51, -0.07],
//           [51.53, -0.07],
//         ],
//       ]


      const purpleOptions = { color: 'black' }

function MapComponent() {
    const [geoLoc, setGeoLoc] = useState([0, 0]);
    useEffect(() => {
        let intervalId;
        const getCurrentPosition = () => {
            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };

        const successCallback = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const longModified = longitude-83
            console.log(`lat : ${latitude } long : ${longitude}`);
    
            
            
    
            setGeoLoc([latitude , longModified]);
        };
        
 
        const errorCallback = (error) => {
            console.error(`Error Code: ${error.code} - ${error.message}`);
        };


        intervalId = setInterval(getCurrentPosition, 300);
        

        return () => {
            clearInterval(intervalId);
        };
    });

  return (
    <motion.div 
    initial={{opacity : 0, y : 100}}
    animate={{opacity : 1, y : 0}}
    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} 
    className="bg-orange-500 lg:p-11 flex items-center justify-center">
        <MapContainer center={center} zoom={isMobile ? 2 : 3} scrollWheelZoom={false} className="w-9/12 h-screen rounded-lg">
        <TileLayer
            attribution='&copy; <a href=""></a> contributors'
            url="/white" 
        />
            <Polygon pathOptions={purpleOptions} positions={mL1} />
                    <Marker position={geoLoc}>
                        <Popup>
                            {`${geoLoc}`}
                        </Popup>
                    </Marker>
        </MapContainer>
    </motion.div>
    
  )
}

export default MapComponent