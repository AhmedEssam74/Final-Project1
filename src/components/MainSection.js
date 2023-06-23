import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainSection = () => {
  return (
    <div className='first-section' >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <Button as={Link} to={'/record'} className="button-6 btn_record" >Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
