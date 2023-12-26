import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: 'fixed',
    left: '0',
    bottom: '0',
    // top : '100vh',
    width : '100%'
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className="text-center">
        Copyright &copy; Todos List
      </p>
    </footer>
  )
}
