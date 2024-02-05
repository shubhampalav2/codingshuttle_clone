import React from 'react'

const SectionHeader = ({title1,title2,firstp,color,main}) => {
  return (
    <>
          <p className='center' style={{...firstp,...color}}>{title1}</p> 
          <h2 className='center section-head'>{title2} <span style={color}>{main}</span></h2>
    </>
  )
}

export default SectionHeader;
