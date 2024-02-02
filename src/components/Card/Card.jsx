import "./Card2.css";

export function Card({
	imagePath,
	altText,
	preTitle,
	title,
	description,
	href,
	id,
}) {
	return (
		<div className="card" id={id}>
			<img
				src={imagePath}
				alt={altText}
				className=" w-full  object-cover object-square"
			/>

			<div className="p-2 pb-none text-start  ">
				{/* <p className="font-normal text-gray-600 ">{preTitle}</p> */}

				<h5 className="  font-bold tracking-tight text-gray-900">
					{title}
				</h5>

				<p className=" font-normal text-xs md:text-sm text-pretty text-gray-800 ">
					{description}
				</p>
			</div>
			<div className="h-auto bottom-1 flex justify-center items-center relative">
				<a
					href={href}
					className="absolute h-full bottom-0 -right-24 bg-[#4daa57] transition rounded-lg px-8 text-md font-semibold text-white flex items-center ">
					{" "}
					Leer más
				</a>
			</div>
		</div>
	);
}
