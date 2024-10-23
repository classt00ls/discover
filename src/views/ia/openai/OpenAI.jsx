import React, { useState, useEffect } from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CCollapse, CForm, CFormFloating, CFormInput, CFormLabel, CFormSelect, CFormTextarea, CNavbar, CRow, CTooltip } from '@coreui/react'
import { DocsExample } from 'src/shared'
import { sendMessageToApi } from '../../../api/openai'

const OpenAI = () => {

  const [textSystem, setTextSystem] = useState("")
  const [textUser, setTextUser] = useState("")
  const [response, setResponse] = useState("")
  

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])


  const sendMessage = async () => {
    
    const response = await sendMessageToApi(textUser, textSystem);
    setResponse(response.data.content);
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
            onChange={(e) => setTextSystem(e.target.value)}
          />
          <CFormLabel htmlFor="floatingInputValue">Introduce el texto del rol system</CFormLabel>
          
        </CFormFloating>

        <CFormFloating>
          <CFormInput
            className="mb-3"
            type="text"
            id="floatingInputValue"
            placeholder="name@example.com"
            onChange={(e) => setTextUser(e.target.value)}
          />
          <CFormLabel htmlFor="floatingInputValue">Introduce el texto del rol user</CFormLabel>
          
        </CFormFloating>

        <CButton 
          color="outline-success" className="my-2 my-sm-0" type="submit"
          onClick={e => sendMessage()}
        >
                Send
        </CButton>

      </DocsExample>

      <CFormFloating>
                <CFormTextarea
                  className="mb-3"
                  type="text"
                  id="floatingTextarea"
                  placeholder="Leave a comment here"
                  value={response}
                ></CFormTextarea>
                <CFormLabel htmlFor="floatingTextarea">Respuesta</CFormLabel>
              </CFormFloating>

      
      </CCol>

    </CRow>
  )
}

export default OpenAI
