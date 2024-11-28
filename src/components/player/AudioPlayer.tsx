"use client";
import Image from "next/image";
import React, { useState } from "react";
import WavesurferPlayer from "@wavesurfer/react";

interface AudioPlayerProps {
	audio: string;
	classNames?: {
		container?: string;
		icon?: string;
		iconContainer?: string;
		wave?: string;
	};
}
export const AudioPlayer = ({ audio, classNames }: AudioPlayerProps) => {
	const [wavesurfer, setWavesurfer] = useState<any>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const onReady = (ws: any) => {
		setWavesurfer(ws);
		setIsPlaying(false);
	};

	const onPlayPause = () => {
		if (wavesurfer) {
			wavesurfer?.playPause();
		}
	};

	return (
		<div
			className={`h-[55px] lg:h-[40px] 2xl:h-[55px] bg-[#F2F2F21A] rounded-[100px] flex items-center pl-1 pr-2 gap-2 lg:gap-2 2xl:gap-3 relative lg:-top-1 ${classNames?.container}`}
		>
			{/* <audio
				ref={audioPlayerRef}
				src={audio} // URL del audio
				onLoadedData={() => handleLoadedData()}
				onCanPlay={() => console.log("El audio puede empezar a reproducirse")}
				onCanPlayThrough={() =>
					console.log("El audio puede reproducirse completamente")
				}
				onError={handleError}
				preload="auto"
				controls
				className="opacity-0 absolute"
			></audio> */}
			<div
				onClick={() => onPlayPause()}
				className={`relative overflow-hidden h-12 lg:h-8 2xl:h-12  w-12 lg:w-8 2xl:w-12  rounded-full bg-[#F2F2F21A] flex items-center justify-center hover:cursor-pointer hover:bg-[#1B1B1B] ${classNames?.iconContainer}`}
			>
				{!isPlaying ? (
					<Image
						src="/assets/icons/play-icon.svg"
						width={16}
						height={16}
						alt="logo"
						className={classNames?.icon}
					></Image>
				) : (
					<Image
						src="/assets/icons/nav-icon.svg"
						width={16}
						height={16}
						alt="logo"
						className={classNames?.icon}
					></Image>
				)}
			</div>
			<div className="overflow-hidden">
				<WavesurferPlayer
					height={45}
					width={160}
					progressColor="#ACFF6A"
					waveColor="#888888"
					cursorWidth={0}
					url={audio}
					barGap={1}
					onReady={onReady}
					onPlay={() => setIsPlaying(true)}
					onPause={() => setIsPlaying(false)}
				/>
			</div>
		</div>
	);
};
