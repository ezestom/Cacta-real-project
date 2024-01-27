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
			<div className="card-container">
				<img src={imagePath} alt={altText} className="" />

				<div className="p-2 text-start  ">
					<p className="font-normal text-gray-600 ">{preTitle}</p>

					<h5 className=" text-xl font-bold tracking-tight text-gray-900">
						{title}
					</h5>

					<p className=" font-normal text-sm text-pretty text-gray-800 ">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
}
