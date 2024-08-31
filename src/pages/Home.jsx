import { ArrowDownRight, Plus } from "lucide-react"
import { motion } from "framer-motion"


function Home() {
  return (
    <div className="bg-orange-600 pt-16 overflow-hidden">
        <div className="ml-16 flex">
            <motion.div 
            initial={{opacity : 0}} 
            animate={{opacity : 1}}
            transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}  
            className="w-3/4">
                <h1 className=" text-7xl font-extrabold">STATION<br></br>WAY</h1>
                <p className=" pr-16 mt-8 w-3/4">StationWay transforms railway navigation with real-time, intuitive guidance on your mobile device, ensuring smooth movement, better accessibility, effective crowd management, and enhanced safety.</p>
            </motion.div>
            <motion.div 
                    initial={{ opacity: 0, x : '50vw' }}
                    animate={{ opacity: 1, x : 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} 
                    className="bg-white p-8 rounded-l-xl  w-full"
            >
                <div className="h-full">
                    <div className=" h-40  flex gap-12">
                        <h2 className="text-2xl mr-8 uppercase">better <br></br>Travels</h2>
                        <img src="/train3.jpg" className=" object-cover w-36 rounded-xl"/>
                        <img src="/train2.jpg" className=" object-cover w-36 rounded-xl"/>
                    </div>
                    <div className="flex justify-between">
                       <Plus className=" mt-8 inline-block w-16 h-16"/>
                        <p className="text-2xl mr-0 mt-10 uppercase">Easing passenger Experience</p> 
                    </div>
                    
                </div>
            </motion.div>
        </div>
        

        <motion.div 
                    initial={{ opacity: 0, x : '-50vw' }}
                    animate={{ opacity: 1, x : 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} 
                    className="flex">
            <div className="bg-white pt-8 pl-24 pb-20 rounded-r-xl w-[55%] mt-16">
                    <div className="h-full flex gap-24">
                        <div className="h-40  flex gap-12">
                            <h2 className=" text-2xl mr-12 uppercase">New  <br/>Inovation</h2>
                            <img src="/train.jpg" className=" object-cover w-36 rounded-xl"/>
                            <img src="/train1.jpg" className=" object-cover w-36 rounded-xl"/>
                        </div>
                        <div className="flex flex-col ml-8 justify-between">
                        <Plus className=" inline-block w-16 ml-16 h-16 "/>
                        <p className=" mt-28 text-2xl">Interior Mapping</p>
                        </div>
                        
                    </div>
                </div>
                <ArrowDownRight  className="w-20 animate-bounce h-20 mt-40 ml-72"/>
        </motion.div>
        
        <div>
            <motion.div
            className="relative mt-44"
            initial={{opacity : 0, y : 200}}
            whileInView={{opacity : 1, y : 1}}
            transition={{
                        duration: 1,
                        delay: 0,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} 
            >
                <video
                src="/railVid.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: 'auto' }}
                >
                </video>
                <div className="absolute inset-0 flex items-center justify-center shadow-lg text-orange-500 top-0 left-0 text-9xl w-full h-full bg-black bg-opacity-50">
                    <motion.div 
                    initial={{scale : 2, opacity : 0}}
                    whileInView={{scale : 1, opacity : 1}}
                    transition={{
                        duration: 1.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} 
                    className="">
                        <p className=" font-extrabold uppercase">NOW TRAVEL BETTER</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>

        <section className="text-center mt-28">
            <h2 className="text-7xl font-semibold">FEATURES</h2>
            <div className="flex gap-48 mt-12 items-center justify-center p-12">
                    
                    <motion.div 
                    initial={{opacity : 0, y : 50}}
                    whileInView={{opacity:1, y : 0}}
                    transition={{
                        duration : 1
                    }}
                    className="flex flex-col gap-4 h-1/2 p-4 rounded-lg shadow-lg items-center justify-center">
                        
                            <div
                            className="
                                w-44
                            "
                            >
                                <img src="/indoor-map1.jpg" width={300} className="object-cover h-36 rounded-lg" />
                            </div>
                            <h3 className=" font-medium">Custom Indoor Mapping</h3>
                            <p className="w-64 text-left">
                            Capture and outline indoor layouts in real-time using an intuitive mobile app.<br></br>
Easily draw rooms, corridors, and points of interest directly on the map.</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity : 0, y : 50}}
                    whileInView={{opacity:1, y : 0}}
                    transition={{
                        duration : 1
                    }}
                    className="flex flex-col gap-4 h-1/2 p-4 rounded-lg items-center justify-center shadow-lg overflow-hidden">
                        
                            <div
                            className="
                                w-44
                            "
                            >
                                <img src="/visually-impaired.jpg" width={300} className="object-cover h-36 rounded-lg" />
                            </div>
                            <h3 className=" font-medium">Visually Impaired</h3>
                            <p className="w-64 text-left">
                            Provides voice guidance and haptic feedback for safe and independent navigation.
Includes tactile maps and optimized pathfinding specifically for visually impaired individuals</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity : 0, y : 50}}
                    whileInView={{opacity:1, y : 0}}
                    transition={{
                        duration : 1
                    }}
                    className="flex flex-col gap-4 h-1/2 p-4 rounded-lg items-center shadow-lg justify-center">
                        
                            <div
                            className="
                                w-44
                            "
                            >
                                <img src="/seamless.jpg" width={300} className="object-cover h-36 rounded-lg" />
                            </div>
                            <h3 className=" font-medium">Interactive and Seamless Mapping</h3>
                            <p className="w-64 text-left">
                            Offers smooth transitions and real-time data synchronization.
Enables users to interact with indoor maps, switch between floors, and view detailed information effortlessly.</p>
                    </motion.div>
                  
            </div>
        </section>
        <section className="p-12 flex flex-col gap-28 items-center justify-center w-full">
            <h2 className="text-center mt-16 uppercase font-semibold text-7xl">How it works?</h2>
            <div className="flex flex-col items-center justify-center gap-16">
                    <motion.div 
                    initial={{opacity : 0, y : 50}} 
                    whileInView={{opacity : 1, y :  0}}
                    transition={{
                        duration : 1
                    }}
                    className="text-center flex flex-col gap-4 w-1/2 items-center justify-center">
                        <h2 className=" uppercase text-2xl font-semibold">Map Creation with IoT Coordinates</h2>
                        <p>IoT sensors capture accurate indoor coordinates, allowing you to use the mobile app to outline rooms, corridors, and points of interest. You can also add metadata such as room names and floor levels for detailed and precise mapping.</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity : 0, y : 50}} 
                    whileInView={{opacity : 1, y :  0}}
                    transition={{
                        duration : 1
                    }}
                    className="text-center flex flex-col gap-4 w-1/2 items-center justify-center">
                        <h2 className=" uppercase text-2xl font-semibold">Data Storage and Synchronization</h2>
                        <p>All mapped data is saved in GeoJSON format and automatically synced with cloud storage, ensuring real-time updates and consistent, up-to-date maps across all devices.</p>
                    </motion.div>
                    <motion.div 
                    initial={{opacity : 0, y : 50}} 
                    whileInView={{opacity : 1, y :  0}}
                    transition={{
                        duration : 1
                    }}
                    className="text-center flex flex-col gap-4 w-1/2 items-center justify-center">
                        <h2 className=" uppercase text-2xl font-semibold">Visualization and Accessibility</h2>
                        <p>An interactive web dashboard lets you view and manage maps, switch between different floors, search specific areas, and overlay additional information. The system also offers accessibility features like voice guidance and haptic feedback, making navigation safe and independent for visually impaired users.</p>
                    </motion.div>
            </div>
        </section>
        <section>
        </section>
    </div>
  )
}

export default Home