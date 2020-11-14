import React, { useContext } from "react"
import { LoadingContext } from "../../context/LoadingContext"
import { motion } from "framer-motion"

const FetchLoader = () => {
  const { fetchLoading } = useContext(LoadingContext)
  return fetchLoading ? (
    <>
      <motion.div
        class="progress"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div class="indeterminate"></div>
      </motion.div>
    </>
  ) : null
}

export default FetchLoader
