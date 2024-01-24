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
		<div class="card" id={id}>
			<img src={imagePath} alt={altText} class="" />

			<div class="p-4 text-start  ">
				<p class="font-normal text-gray-600 ">{preTitle}</p>

				<h5 class=" text-xl font-bold tracking-tight text-gray-900">
					{title}
				</h5>

				<p class=" font-normal text-sm text-pretty text-gray-800 ">{description}</p>
			</div>
		</div>
	);
}
