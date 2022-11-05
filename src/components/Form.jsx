import ErrorIcon from "./ErrorIcon"

export default function Form({ setModal }) {

    function validarSubmit(e) {
        e.preventDefault()

        const informacion = Object.entries(Object.fromEntries(new FormData(e.currentTarget)))
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        const camposIncorrectos = informacion
            .filter(([campo, valor]) => campo === "email" ? !valor.match(regexEmail) : valor === "")
            .map(elemento => elemento[0])

        reiniciarEstilos();

        if (camposIncorrectos.length > 0) {
            datosIncompletos(camposIncorrectos)
            return;
        }

        datosCompletos()

    }

    function reiniciarEstilos() {
        const bordes = document.querySelectorAll(".form__border")
        const imagenes = document.querySelectorAll(".form__icon");
        const mensajes = document.querySelectorAll(".form__warning")


        for (let i = 0; i < bordes.length; i++) {
            bordes[i].style.setProperty("--border-color", "hsl(246, 25%, 77%)")
            imagenes[i].classList.add("form__icon--hidden")
            mensajes[i].style.maxHeight = "0px"
        }


    }

    function datosIncompletos(incompletos) {
        const { firstName, lastName, email, password } = document.querySelector("form")
        const campos = { firstName, lastName, email, password }

        for (let campo of incompletos) {

            const elemento = campos[campo]
            const borde = elemento.nextSibling;
            const imagen = elemento.nextSibling.nextSibling;
            const mensaje = elemento.parentNode.nextSibling

            borde.style.setProperty("--border-color", "hsl(0, 100%, 74%)")
            imagen.classList.remove("form__icon--hidden")
            mensaje.style.maxHeight = `${mensaje.scrollHeight}px`
        }


    }

    function datosCompletos() {
        setModal(true)

        document.querySelector("form").reset()
    }



    return (
        <div className="form">
            <div className="form__advice">
                Try it free 7 days {" "}
                <span className="form__advice--regular">then $20/mo. thereafter</span>
            </div>

            <form action="#" method="#" className="form__box" onSubmit={e => validarSubmit(e)} >
                <label htmlFor="first" className="form__label">
                    <input type="text" name="firstName" className="form__input" spellCheck="false" placeholder="First Name" id="first" autoComplete="nope" />
                    <div className="form__border"></div>

                    <ErrorIcon />

                </label>

                <div className="form__warning">First Name cannot be empty</div>

                <label htmlFor="last" className="form__label">
                    <input type="text" name="lastName" className="form__input" autoComplete="nope" spellCheck="false" placeholder="Last Name" id="last" />

                    <div className="form__border"></div>

                    <ErrorIcon />
                </label>

                <div className="form__warning">Last Name cannot be empty</div>

                <label htmlFor="email" className="form__label">
                    <input type="text" name="email" className="form__input" autoComplete="nope" spellCheck="false" placeholder="Email Address" id="email" />
                    <div className="form__border"></div>

                    <ErrorIcon />
                </label>

                <div className="form__warning">Looks like this is not an email</div>

                <label htmlFor="password" className="form__label">
                    <input type="password" name="password" className="form__input" autoComplete="nope" spellCheck="false" placeholder="Password" id="password" />
                    <div className="form__border"></div>

                    <ErrorIcon />
                </label>

                <div className="form__warning">Password cannot be empty</div>

                <input type="submit" value="Claim your free trial" className="form__input form__input--submit" />

                <span className="form__terms">
                    By clicking the button, you are agreeing to our
                    <a href="#" className="form__terms--red"> Terms and Services</a>
                </span>

            </form>
        </div>
    )
}