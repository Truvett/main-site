import React from 'react';

import {
	Typography,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Button,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

interface workCardProps {
	link?: string;
	image: string;
	title: string;
	children: React.ReactNode;
}

export function WorkCard({ title, children, image, link }: workCardProps) {
	return (
		<Card
			className="mt-6 w-full h-96"
			placeholder={''}
			onPointerEnterCapture={''}
			onPointerLeaveCapture={''}
		>
			<CardHeader
				placeholder={''}
				onPointerEnterCapture={''}
				onPointerLeaveCapture={''}
				color="blue-gray"
				className="relative h-auto object-fit object-center "
			>
				<Image
					width={3000}
					height={3000}
					src={image}
					alt="card-image"
					className="object-container object-center w-full"
				/>
			</CardHeader>
			<CardBody className=''
				placeholder={''}
				onPointerEnterCapture={''}
				onPointerLeaveCapture={''}
			>
				<Typography
					placeholder={''}
					onPointerEnterCapture={''}
					onPointerLeaveCapture={''}
					variant="h5"
					color="blue-gray"
					className="mb-2"
				>
					{title}
				</Typography>
				<Typography
					placeholder={''}
					onPointerEnterCapture={''}
					onPointerLeaveCapture={''}
				>
					{children}
				</Typography>
			</CardBody>
			<CardFooter
				placeholder={''}
				onPointerEnterCapture={''}
				onPointerLeaveCapture={''}
				className="pt-0"
			>
				{link ? (
					<Link href={link} target='_blank'>
						<Button
							placeholder={''}
							onPointerEnterCapture={''}
							onPointerLeaveCapture={''}
						>
							Visit
						</Button>
					</Link>
				) : null}
			</CardFooter>
		</Card>
	);
}

export default WorkCard;
