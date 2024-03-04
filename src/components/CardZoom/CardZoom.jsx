import "./CardZoom.css";

export function CardZoom({ image, preTitle, title, description }) {
	const handleBack = (e) => {
		e.preventDefault();
		window.location.href = "/#features";
	};
	return (
		<div class=" mx-40  bg-white border border-gray-200 rounded-lg flex-wrap card">
			<img
				class="object-cover image md:w-1/2 w-full min-w-[350px]"
				src={image}
				alt={`image about ${image}`}
			/>

			<div class="p-5 relative w-1/2 h-auto min-w-[400px]">
				{/* <p class="font-normal text-gray-700">{preTitle}</p> */}

				<h5 class="mb-2 text-2xl font-bold tracking-tight ">
					{title}
				</h5>

				<p class="mb-5  font-normal text-gray-700">{description}</p>
			</div>
			<a
				onClick={handleBack}
				class="absolute top-2 right-2 inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 btn-back">
				Volver
			</a>
		</div>
	);
}
