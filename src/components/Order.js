import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
const containerVariants = {
  hidden:{
    x: '100vw',
    opacity: 0
  },
  visible:{
    opacity: 1,
    x:0,
    transition:{type:"spring", stiffness:120, when:"beforeChildren", mass:0.4, damping:8, staggerChildren:0.4}
  },
  exit:{
    x:"-100vw",
    transition:{ease:"easeInOut"}
  }
}

const childVariants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
  }
}
const Order = ({ pizza, setShowModal }) => {

  useEffect(() => {
    setTimeout(()=>{
      setShowModal(true)
    },5000)
    // return () => {
    //   setShowModal(false)
    // }
  },[])
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;