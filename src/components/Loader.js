import React from 'react'
import { motion, useCycle } from 'framer-motion'
const loaderVariants = {
    animationOne:{
        x:[-20,20],
        y:[0,-30],
        transition:{
            x:{
                repeatType:"reverse",
                repeat:Infinity,
                duration:0.5
            },
            y:{
                repeatType:"reverse",
                repeat:Infinity,
                duration:0.25,
                ease:"easeOut"
            }
        }
    },
    animationTwo:{
        x:0,
        y:[-20,20],
        transition:{
            y:{
                repeatType:"reverse",
                repeat:Infinity,
                duration:0.5
            }
        }
    }
}
const Loader = () => {
    const [animation, cycleAnimation] = useCycle("animationOne","animationTwo")
  return (
    <>
        <motion.div className='loader'
            variants={loaderVariants}
            animate={animation}
        ></motion.div>
        <div style={{cursor:"pointer"}} onClick={() => {
            cycleAnimation()
        }}>Change Animation</div>
    </>
  )
}

export default Loader