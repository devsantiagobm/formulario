import { useState } from 'react'
import Text from './components/Text'
import Form from './components/Form'
import Modal from './components/Modal'

function App() {
    const [modal, setModal] = useState(false);


    return (
        <div className="app">
            <Text/>
            <Form setModal={setModal}/>
            <Modal modal={modal} setModal={setModal}/>
        </div>
    )
}

export default App
