import Image from 'next/image';

function Sponsors() {
	const sponsors = [
		{ url: '/assets/layouts/cake_blue.svg', name: 'INTERVIEW-CAKE Logo' },
		{ url: '/assets/layouts/xyz-logo-color.svg', name: 'XYZ Logo' },
		{ url: '/assets/layouts/Axure_RP_icon.svg', name: 'Axure Logo' },
		{ url: '/assets/layouts/cake_blue.svg', name: 'INTERVIEW-CAKE Logo' },
		{ url: '/assets/layouts/xyz-logo-color.svg', name: 'XYZ Logo' },
		{ url: '/assets/layouts/Axure_RP_icon.svg', name: 'Axure Logo' },
		{ url: '/assets/layouts/cake_blue.svg', name: 'INTERVIEW-CAKE Logo' },
		{ url: '/assets/layouts/xyz-logo-color.svg', name: 'XYZ Logo' },
		{ url: '/assets/layouts/Axure_RP_icon.svg', name: 'Axure Logo' },
	];

	return (
		<div className='w-full flex flex-col gap-6 items-center mt-20 overflow-hidden'>
			<div className='flex justify-center items-center w-full'>
				<h1 className='text-4xl font-syne font-extrabold'>SPONSORS</h1>
			</div>
			<section className='w-full'>
				<div className='relative flex overflow-x-hidden mt-6 bg-white/20'>
					<div className='flex py-5 animate-marquee whitespace-nowrap'>
						{sponsors.map((sponsor, index) => (
							<Image
								key={index}
								className='mx-4'
								src={sponsor.url}
								alt={sponsor.name}
								width={200}
								height={200}
							/>
						))}
					</div>
					<div className='lg:flex absolute top-0 py-5 animate-marquee2 whitespace-nowrap ml-28 hidden'>
						{sponsors.map((sponsor, index) => (
							<Image
								key={index}
								className='mx-4'
								src={sponsor.url}
								alt={sponsor.name}
								width={200}
								height={200}
							/>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Sponsors;
