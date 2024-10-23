import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CForm, CFormFloating, CFormInput, CFormLabel, CFormSelect, CNavbar, CRow, CTooltip } from '@coreui/react'
import { DocsExample } from 'src/shared'

const OpenAI = () => {
  
  const [role, setRole] = useState(1)
  const [text, setText] = useState("S")
  

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])


  const sendMessage = async () => {
    console.log('Sending to api ... ', text)
  }


  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Text Generation</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">Test OpenAI.</p>
            
            
          </CCardBody>
        </CCard>

        <CCard className="mb-4">
          <CCardHeader>
            <strong>Role</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-body-secondary small">Test OpenAI.</p>
            
            <CFormFloating>
            <CFormSelect className="mb-3" id="floatingSelect" aria-label="Floating label select example">
              
              <option value="1">user</option>
              <option value="2">system</option>
              <option value="3">assistant</option>
            </CFormSelect>
            <CFormLabel htmlFor="floatingSelect">Selecciona un rol</CFormLabel>
          </CFormFloating>
          </CCardBody>
        </CCard>


      </CCol>
      <CCol xs={12}>

      <DocsExample href="forms/floating-labels">
        

        <CFormFloating>
          <CFormInput
            className="mb-3"
            type="text"
            id="floatingInputValue"
            placeholder="name@example.com"
            onChange={(e) => setText(e.target.value)}
          />
          <CFormLabel htmlFor="floatingInputValue">Introduce el texto</CFormLabel>
          
        </CFormFloating>

        <CButton 
          color="outline-success" className="my-2 my-sm-0" type="submit"
          onClick={e => sendMessage()}
        >
                Send
        </CButton>

      </DocsExample>
      
      </CCol>

    </CRow>
  )
}

export default OpenAI
