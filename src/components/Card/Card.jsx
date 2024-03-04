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
			{/* <img
				src={imagePath}
				alt={altText}
				className=" w-full  object-cover object-square"
			/> */}

			<div className="p-2 pb-none text-start m-4 ">
				<p className="font-normal text-white ">{preTitle}</p>
				<h5 className="  font-bold tracking-tight text-white">
					{title}
				</h5>

				<p className=" font-normal text-xs md:text-sm text-pretty text-white  ">
					{description}
				</p>
			</div>
			<div className="h-auto bottom-1 flex justify-center items-center relative">
				<a
					href={href}
					id="open-dialog"
					className="absolute h-full my-8  bottom-0 
					-right-24 bg-[#09f] transition rounded-xl px-9 text-base leading-4  text-white flex items-center ">
					{" "}
					Más Info
				</a>
			</div>
		</div>
	);
}
