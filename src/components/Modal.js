import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const Modal = ({showModal, setShowModal}) => {
  return (
    <AnimatePresence mode='wait'>
        {showModal && (
            <motion.div className="backdrop"
                variants={backdrop}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div className="modal"
                    variants={modal}
                >
                <p>Want to make another pizza?</p>
                <Link to="/">
                    <button onClick={()=>{setShowModal(false)}}>Start Again</button>
                </Link>
                </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal