'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Card, CardBody } from '@material-tailwind/react';
import WorkCard from '../components/workCard';

export function Work() {
	const worksDetails = [
		{
			image: '/work/padhakoo.png',
			title: 'Padhakoo',
			description:
				'Padhakoo is an online learning platform that offers a friendly environment for individuals to learn and practice their skills.',
			link: 'https://padhakoo.in/',
		},
		{
			image: '/work/glazergames.png',
			title: 'Glazer Games',
			description:
				'Glazer Games stands as a pioneering force in the esports and gaming industry, driven by a passion for technology and a steadfast commitment to reshaping the esports landscape in India.',
			link: 'https://www.glazer.games/',
		},
		{
			image: '/work/giftlips.png',
			title: 'GiftLips',
			description:
				'GiftLips takes the traditional greeting card experience to the next level.',
			link: 'https://www.giftlips.com/',
		},
		{
			image: '/work/heyweek.png',
			title: 'Heyweek',
			description:
				'Heyweek, your freelancing toolbox. Simplify your tasks, supercharge your workflow, and thrive in your independent journey',
			link: 'https://www.heyweek.com/',
		},
		{
			image: '/work/yesspark.png',
			title: 'YesSpark',
			description:
				'YesSpark inspire and encourage future entrepreneurs, founders and teams who are passionate about delivering unique solutions to their customers from Spark to Launch.',
			link: 'https://www.yesspark.io/',
		},
		{
			image: '/work/eurobridge.png',
			title: 'Eurobridge',
			description:
				'EuroBridge Shipping Services deliver the right service, at the right level of quality, and for the right price.',
			link: 'https://eurobridge.com.mt/',
		},
		{
			image: '/work/qonetech.png',
			title: 'Q One Tech',
			description:
				'Q One builds on automation and machine learning empowering research operation teams with more control over panel experience, quantitative and qualitative recruitment, surveys, and rewards.',
			link: 'https://qone-tech.com/',
		},
		// {
		//   image: '/work/apfelherz.png',
		//   title: "Apfelherz",
		//   description: "We help you talk to more people by adding smart chatbots to your website or app.",
		//   link: 'https://apfelherz.vercel.app/'
		// },
		{
			image: '/work/joyousbeamcandles.png',
			title: 'Joyous Beam Enterprise',
			description:
				'Joyous Beam Candles mission to bring joy and relaxation to your life through our handmade unique candles in jars.',
			link: 'https://joyousbeamcandles.com/',
		},
	];
	return (
		<section className="py-20 px-8">
			<div className="container mx-auto mb-20 text-center">
				<Typography
					placeholder={''}
					onPointerEnterCapture={''}
					onPointerLeaveCapture={''}
					variant="h1"
					color="blue-gray"
					className="mb-4"
				>
					Our Work
				</Typography>
			</div>

			<div className="grid gap-5 grid-col-1 md:grid-cols-3 place-items-center justify-center ">
				{worksDetails.map(({ title, description, image, link }) => (
					<WorkCard
						key={title}
						title={title}
						image={image}
						link={link}
					>
						{description}
					</WorkCard>
				))}
			</div>
		</section>
	);
}
export default Work;
