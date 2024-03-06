import { useState } from "react";
import x from "../../icons/x.svg";
import "./Form.css";

export function Form() {
	const [dialog, setDialog] = useState(false);

	const openDialog = () => {
		setDialog(true);
		document.body.style.overflow = "hidden";
		document.getElementById("landing-header").style.display = "none";
	};

	const closeDialog = () => {
		setDialog(false);
		document.body.style.overflow = "auto";
		document.getElementById("landing-header").style.display = "flex";
		window.location.href = "/#contact";
	};

	return (
		<div className="relative form-container  z-10 text-white ">
			<h2 className="text-xl font-bold"> ¿Preparado para comenzar?​ </h2>
			<hr className="hr-contact" />
			<span className="flex pt-2">
				<a
					href="#open-dialog"
					onClick={openDialog} // Usar la función openDialog aquí
					id="open-dialog">
					Ir al formulario
				</a>
			</span>

			{dialog && ( // Mostrar el diálogo solo cuando dialog es true
				<dialog open class="">
					<div className="form-container-dialog">
						<form
							method="POST"
							action="https://formsubmit.co/ezequielstom@gmail.com">
							<input
								type="hidden"
								name="_next"
								value="https://ezestom.github.io/portfolio/"></input>
							<input
								type="hidden"
								name="_captcha"
								value="false"></input>
							<legend>
								<button
									className="flex justify-center my-2 mx-auto"
									href="/#contact"
									onClick={closeDialog}>
									{" "}
									{/* Usar la función closeDialog aquí */}
									<img
										className="bg-black/30 rounded-xl p-1 hover:bg-black/20 transition w-10 o"
										src={x.src}
										alt="x-icon"
										id="close-dialog"
									/>
								</button>
							</legend>
							<legend className="text-2xl font-normal">
								Cuálquier pregunta o comentario es bienvenido.
							</legend>
							<div className="flex flex-col gap-4">
								<label htmlFor="name">Nombre</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="ej: John Doe"
									className="rounded-md "
									required
								/>
								<label htmlFor="email">Correo</label>
								<input
									className="rounded-md "
									type="email"
									name="email"
									id="email"
									placeholder="ej: john_doe@ejemplo.com"
									required
								/>
								<label htmlFor="message">Mensaje</label>
								<textarea
									name="message"
									id="message"
									placeholder="ej: Quiero hacer una producción y me gustaría saber más sobre sus servicios, gracias."
									required></textarea>
								<button
									id="open-dialog"
									className=" transition rounded-xl px-9 text-base leading-4  text-white flex items-center justify-center "
									type="submit">
									Enviar
								</button>
							</div>
						</form>
					</div>
				</dialog>
			)}
		</div>
	);
}
