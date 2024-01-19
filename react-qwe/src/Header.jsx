import React from 'react'

const Header = ({huy}) => {

  if (huy) {
    return <h1 style={{color: 'red'}}>qpqpqp</h1>
  } else {
    return <h1 style={{color: 'green'}}>qwe</h1>
  }

}

export default Header