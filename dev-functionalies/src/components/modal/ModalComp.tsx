import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const ModalComp = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  return (
    <>
    

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalComp
