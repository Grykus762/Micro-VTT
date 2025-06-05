import { useState } from "react"
import { createPortal } from "react-dom"
import CreateCharForm from "./CreateCharForm.jsx"

export default function Nav()
{
    const [showModal, setShowModal] = useState(false)

    function toggleModalForm()
    {
        setShowModal(prevModalState=>!prevModalState)
    }
    return (
        <div id="nav">
            <button onClick={toggleModalForm} id='modal-btn'>Edit Character</button>
            <button>Help</button>
            {showModal && createPortal(<CreateCharForm />, document.body)}
        </div>
    )
}