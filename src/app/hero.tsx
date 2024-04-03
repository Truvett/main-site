'use client';

import Image from 'next/image';
import { Button, Typography } from '@material-tailwind/react';

function Hero() {
	return (
		<div className="relative min-h-screen w-full">
			<header className="grid !min-h-[49rem] bg-gray-900 px-8">
				<div className="container mx-auto  md:mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
					<div className="col-span-1">
						<Typography
							placeholder={''}
							onPointerEnterCapture={''}
							onPointerLeaveCapture={''}
							variant="h1"
							color="white"
							className="mb-4"
						>
							Web Design & Development
						</Typography>
						<Typography
							placeholder={''}
							onPointerEnterCapture={''}
							onPointerLeaveCapture={''}
							variant="lead"
							className="mb-7 !text-white md:pr-16 xl:pr-28"
						>
							We design, develop, redesign, support, and maintain
							websites for customers and enterprises.
						</Typography>

						<div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
							<Button
								placeholder={''}
								onPointerEnterCapture={''}
								onPointerLeaveCapture={''}
								size="lg"
								color="white"
								className="flex justify-center items-center gap-3 uppercase"
							>
								Our Work
							</Button>
							<Button
								placeholder={''}
								onPointerEnterCapture={''}
								onPointerLeaveCapture={''}
								size="lg"
								color="white"
								className="flex justify-center items-center gap-3 uppercase"
							>
								Contact us
							</Button>
						</div>
					</div>
					<Image
						width={1000}
						height={1000}
						src="/Images/hero.png"
						alt="team work"
						className="col-span-1 my-20 w-fit max-h-[30rem] md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] h-full object-fill object-center lg:translate-y-0 hidden md:block"
					/>
				</div>
			</header>
			<div className="md:mx-8 lg:mx-16 md:mt-24 lg:-mt-24 rounded-xl bg-white p-5 md:p-14 md:shadow-md">
				<div>
					<Typography
						variant="h3"
						color="blue-gray"
						className="mb-3"
						placeholder={''}
						onPointerEnterCapture={''}
						onPointerLeaveCapture={''}
					>
						About Us
					</Typography>
					<Typography
						placeholder={''}
						onPointerEnterCapture={''}
						onPointerLeaveCapture={''}
						variant="paragraph"
						className="font-normal !text-gray-500 lg:w-5/12"
					>
						Truvett Web Design & Development Company is all about
						creating awesome websites and apps that match what you
						need. Our team loves being creative and making sure your
						online presence stands out. Whether you&apos;re a big
						business or just starting out, we&apos;re here to make
						sure your website or app is top-notch and easy for
						everyone to use. Let&apos;s work together to bring your
						ideas to life online!
					</Typography>
				</div>
			</div>
		</div>
	);
}
export default Hero;
