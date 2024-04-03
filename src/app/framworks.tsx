'use client';

import React from 'react';
import Image from 'next/image';
import { Typography, Card, CardBody } from '@material-tailwind/react';

export function Framworks() {
	return (
		<section className="py-10 lg:py-28 px-8">
			<div className="container mx-auto  md:mb-20 md:text-center">
				<Typography
					placeholder={''}
					onPointerEnterCapture={''}
					onPointerLeaveCapture={''}
					variant="h1"
					color="blue-gray"
					className="mb-4"
				>
					Tech Stack we use
				</Typography>
			</div>

			<div className="flex flex-wrap md:grid md:grid-cols-4 lg:grid-cols-8 gap-5 place-items-center justify-center ">
				<Image
					width={300}
					height={300}
					src="/techstack/typescript.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/javascript.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/react.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/nextjs.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/nodejs.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/expressjs.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/mongodb.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/sql.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/python.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/django.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/Vuejs.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/svelte.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/redux.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/aws.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/docker.png"
					alt="team work"
					className="h-20 w-fit"
				/>
				<Image
					width={300}
					height={300}
					src="/techstack/Graphql.png"
					alt="team work"
					className="h-20 w-fit"
				/>
			</div>
		</section>
	);
}
export default Framworks;
