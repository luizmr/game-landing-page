import React, { createRef, useState, useEffect } from "react";
import "./App.css";
import image3 from "./img/Imagem3.png";
import imagecard from "./img/Imagemcard.png";
import imagefeather from "./img/SemTítulo-3@2x.png";
import { Link } from "react-scroll";
import {
	FiChevronDown,
	FiChevronLeft,
	FiChevronRight,
	FiChevronUp,
	FiX,
	FiCheck,
} from "react-icons/fi";
import char1 from "./img/Grant@2x.png";
import char2 from "./img/Red@2x.png";
import char3 from "./img/Sybil_2@2x.png";
import { motion } from "framer-motion";

function App() {
	const [data, setData] = useState([
		{
			id: 1,
			text:
				"A Camerata foi apenas os dois no início, e suas fileiras nunca foram destinadas a exceder um número a ser contado em uma mão.",
			image: char1,
		},
		{
			id: 2,
			text:
				"Red, uma jovem cantora, entrou em posse do Transistor. Sendo a poderosa espada falante. O grupo Possessores quer tanto ela quanto o Transistor e está persguindo implacavelmente a sua procura.",
			image: char2,
		},
		{
			id: 3,
			text:
				'Sybil é descrita pelo Transistor como sendo os "olhos e ouvidos" da Camerata.',
			image: char3,
		},
	]);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	useEffect(() => {
		setName("");
		setEmail("");
		setMessage("");
		console.log(window.innerWidth);
	}, []);

	useEffect(() => {
		setData(data);
	}, [window.innerWidth]);

	const next = (e) => {
		setData([data[data.length - 1], data[0], data[data.length - 2]]);
	};

	const prev = (e) => {
		setData([data[data.length - 2], data[data.length - 1], data[0]]);
	};

	return (
		<div className="app">
			<div className="main">
				<div className="main__header">
					<img src={image3} alt="image3" />
					<p>SUPERGIANTGAMES</p>
				</div>
				<div className="main__game">
					<p>TRANSISTOR - RED THE SINGER</p>
					<img
						src={imagecard}
						alt="imagecard"
						className="main__gameImage"
					/>
					<p>
						"Olha, o que quer que você esteja pensando, me faça um
						favor, não solte."
					</p>
					<img
						src={imagefeather}
						alt="imagecard"
						className="main__game-feather1"
					/>
					<img
						src={imagefeather}
						alt="imagecard"
						className="main__game-feather2"
					/>
					<img
						src={imagefeather}
						alt="imagecard"
						className="main__game-feather3"
					/>
				</div>
				<Link
					className="main__game-button"
					to="characters"
					smooth={true}
					duration={1000}
				>
					<span></span>
					<FiChevronDown className="main__game-button-icon" />
				</Link>
			</div>
			<div className="breakpoint"></div>
			<div className="characters" id="characters">
				<div className="characters__grid">
					<FiChevronLeft
						className="characters__grid-left"
						onClick={prev}
					/>
					{data.map((a, i) => {
						return (
							<motion.div
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ repeat: 0, duration: 1 }}
								className={`characters__grid-item slide item-${i}`}
							>
								<div className="characters__grid-image">
									<div className="characters__grid-image-inner">
										<img
											src={a.image}
											alt="char1"
											className={`characters__grid-image-${a.id}`}
										/>
									</div>
								</div>
								<div className="characters__grid-image-text">
									<p>{a.text}</p>
								</div>
							</motion.div>
						);
					})}
					<FiChevronRight
						className="characters__grid-right"
						onClick={next}
					/>
				</div>

				<div className="form">
					<div className="form__bg">
						<div className="form__bg-box">
							<div className="form__bg-inner">
								<p className="form__bg-box-title">FORMULÁRIO</p>
								<p className="form__bg-box-text">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco laboris nisi ut aliquip
									ex ea commodo consequat.
								</p>
								<div className="form__bg-box-inputs">
									<input
										placeholder="Nome"
										type="name"
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
									<input
										placeholder="E-mail"
										type="email"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</div>
								<textarea
									placeholder="Mensagem"
									type="name"
									className="form__bg-box-msg"
									value={message}
									onChange={(e) => {
										setMessage(e.target.value);
									}}
								/>
								<div className="form__bg-box-button">
									<button
										onClick={() => {
											if (
												name === "" ||
												email === "" ||
												message === ""
											) {
												document
													.querySelector(".modal")
													.classList.add("visible");
												document
													.querySelector(
														".modal__fail"
													)
													.classList.add("visible");
												document
													.querySelector(
														".modal__success"
													)
													.classList.remove(
														"visible"
													);
											} else {
												document
													.querySelector(".modal")
													.classList.add("visible");
												document
													.querySelector(
														".modal__fail"
													)
													.classList.remove(
														"visible"
													);
												document
													.querySelector(
														".modal__success"
													)
													.classList.add("visible");
											}
										}}
									>
										<p>Enviar</p>
									</button>
									<span></span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<Link
							className="form__totop"
							to="main__header"
							smooth={true}
							duration={1000}
						>
							<FiChevronUp className="form__totop-icon" />
						</Link>
					</div>
					<div className="modal">
						<div className="modal__inner modal__fail">
							{name === "" && <p>Insira o Nome, por favor! </p>}
							{email === "" && (
								<p>Insira o E-mail, por favor! </p>
							)}
							{message === "" && (
								<p>Insira uma Mensagem, por favor! </p>
							)}
							<button
								onClick={() => {
									document
										.querySelector(".modal")
										.classList.remove("visible");
									document
										.querySelector(".modal__fail")
										.classList.remove("visible");
									document
										.querySelector(".modal__success")
										.classList.remove("visible");
								}}
							>
								<FiX className="modal__x" />
							</button>
						</div>
						<div className="modal__inner modal__success">
							<p>
								Enviado com Sucesso{" "}
								<FiCheck className="modal__check" />
							</p>
							<button
								onClick={() => {
									document
										.querySelector(".modal")
										.classList.remove("visible");
									document
										.querySelector(".modal__fail")
										.classList.remove("visible");
									document
										.querySelector(".modal__success")
										.classList.remove("visible");

									setEmail("");
									setName("");
									setMessage("");
								}}
							>
								<FiX className="modal__x" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
