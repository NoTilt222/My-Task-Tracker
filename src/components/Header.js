import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className= 'header'>
    <h1>{title}</h1>
    <Button color={showAdd ? 'red' : 'blue'} text={showAdd ? 'Close' : 'Add'}
    onClick= {onAdd}/>
    </header>
  )
}

Header.defaultProps = {
  title: 'My Task Tracker',
}

Header.propTypes = {
  title:PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle = {
//   color: 'blue', 
//   backgroundColor: 'black'
// }
export default Header