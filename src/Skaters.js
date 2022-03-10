import React, { useState, useEffect } from 'react'
import axios from 'axios'

const getSkaters = async (setSkaters) => {
  const url = 'https://thps.now.sh/api/skaters'

  const cachedSkaters = JSON.parse(localStorage.getItem(url)) || null

  if (cachedSkaters) {
    setSkaters(cachedSkaters)
    console.log('using cached skaters')
  }

  const { data } = await axios.get(url)
  localStorage.setItem(url, JSON.stringify(data))
  setSkaters(data)
  console.log('using API skaters')
}

const renderSkater = ({ name, stance }) => (
  <div key={name}>
    <p>{name} - {stance}</p>
  </div>
)

const Skaters = () => {
  const [skaters, setSkaters] = useState([])

  useEffect(() => {
    getSkaters(setSkaters)
  }, [])

  return skaters.length > 0 ? skaters.map(renderSkater) : <p>Loading...</p>
}

export default Skaters;