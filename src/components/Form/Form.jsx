import { useState } from "react";
import x from "../../icons/x.svg";
import "./Form.css";

export function Form() {
	const [dialog, setDialog] = useState(false);

	const openDialog = () => {
		setDialog(true);
		// hacer funcion para bloquear scroll
		// document.body.style.overflow = "hidden";
	};

	const closeDialog = () => {
		setDialog(false);
		// hacer funcion para desbloquear scroll
		// document.body.style.overflow = "auto";
	};

	return (
		<div className="relative form-container  z-10 text-white">
			<h2 className="text-2xl font-bold">
				{" "}
				Estás preparado para comenzar?{" "}
			</h2>
			<hr className="hr-contact" />
			<p>Sumate a la lista de espera</p>
			<span className="flex pt-2">
				<a
					href="#open-dialog"
					onClick={openDialog} // Usar la función openDialog aquí
					id="open-dialog"
					class="p-2 rounded  flex items-center justify-start  px-6 py-2 backdrop-blur-md bg-white/20 hover:bg-white hover:text-black text-center transition-all duration-300 ease-in-out  ">
					Ponté en contacto
					<svg
						className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
						aria-hidden="true"
						fill="none"
						viewBox="0 0 14 10">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"></path>
					</svg>
				</a>
			</span>

			{dialog && ( // Mostrar el diálogo solo cuando dialog es true
				<dialog open>
					<div className="form-container-dialog">
						<form
							method="POST"
							action="https://formsubmit.co/ezequielstom@gmail.com">
							<input
								type="hidden"
								name="_next"
								value="https://yourdomain.co/thanks.html"></input>
							<input
								type="hidden"
								name="_captcha"
								value="false"></input>
							<legend>
								<a
									className="flex justify-center my-2"
									href="/#contact"
									onClick={closeDialog}>
									{" "}
									{/* Usar la función closeDialog aquí */}
									<img
										className="bg-black/10 rounded-xl p-1 hover:bg-black/20 transition "
										src={x.src}
										alt="x-icon"
										id="close-dialog"
									/>
								</a>
							</legend>
							<legend className="text-3xl font-semibold">
								Get in touch and join the waitlist
							</legend>
							<div className="flex flex-col gap-4">
								<label htmlFor="name">Name:</label>
								<input
									type="text"
									name="name"
									id="name"
									placeholder="John Doe"
									className="rounded-md "
									required
								/>
								<label htmlFor="email">Email</label>
								<input
									className="rounded-md "
									type="email"
									name="email"
									id="email"
									placeholder="john_doe@example.com"
									required
								/>
								<label htmlFor="message">Message</label>
								<textarea
									name="message"
									id="message"
									placeholder="I would like to join the waitlist"
									required></textarea>
								<button
									className="w-full bg-white/20 rounded-md py-1 hover:bg-white/30"
									type="submit">
									Send
								</button>
							</div>
						</form>
					</div>
				</dialog>
			)}
		</div>
	);
}
