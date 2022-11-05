import notFound from "../assets/not-found.svg"
import close from "../assets/close.svg"

export default function Modal({ modal, setModal }){

    function ocultarModal(){
        document.querySelector(".modal").classList.add('modal--hidden')
        setTimeout(() => setModal(false), 500);
    }

    return (
        <div className={`modal ${ modal && "modal--active"}`}>
            <div className="modal__box">
                <picture className="modal__picture">
                    <img src={notFound} alt="sad icon"/>
                </picture>
                <p className="modal__title">Ooops!</p>
                <p className="modal__message">It seems that there is no database</p>

                <picture className="modal__close" onClick={ ocultarModal }>
                    <img src={close} alt="close icon" />
                </picture>
            </div>
        </div>
    )
}