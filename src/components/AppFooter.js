import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://classtools.io" target="_blank" rel="noopener noreferrer">
          Discover - Classtools
        </a>
        <span className="ms-1">&copy; 2024 Nuvoia llc.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="#" target="_blank" rel="noopener noreferrer">
          eurega
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
