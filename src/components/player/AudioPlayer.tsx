"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface AudioPlayerProps {
	classNames?: {
		container?: string;
		icon?: string;
		iconContainer?: string;
		wave?: string;
	};
}
export const AudioPlayer = ({ classNames }: AudioPlayerProps) => {
	const audioPlayerRef = useRef<HTMLAudioElement>(null);
	// const progressBarRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState<number | null>(null);
	/* const [timeProgress, setTimeProgress] = useState<number | null>(null);

	const handleProgressChange = () => {
		if (audioPlayerRef.current) {
			const newTime = Number(duration);
			audioPlayerRef.current.currentTime = newTime;
			setTimeProgress(newTime);
			// if progress bar changes while audio is on pause
		}
	}; */
	console.log(duration);

	useEffect(() => {
		if (isPlaying) {
			audioPlayerRef.current?.play();
		} else {
			audioPlayerRef.current?.pause();
		}

		if (audioPlayerRef.current?.ended) {
			setIsPlaying(false);
		}
	}, [isPlaying, audioPlayerRef]);

	useEffect(() => {
		if (audioPlayerRef.current?.readyState === 4) {
			const seconds = audioPlayerRef.current?.duration;
			setDuration(seconds);
		}
	}, [audioPlayerRef.current?.readyState]);

	/* useEffect(() => {
		console.log(audioPlayerRef.current?.ended)
		if (audioPlayerRef.current?.ended) {
			setIsPlaying(false);
		}
	}, [audioPlayerRef.current]); */

	const handleLoadedData = () => {
		// setIsLoaded(true);
		console.log("Audio cargado y listo para reproducirse");
	};

	const handleError = () => {
		// setError("Error al cargar el audio");
		console.error("Error al cargar el audio:");
	};
	return (
		<div
			className={`h-[55px] lg:h-[40px] 2xl:h-[55px] bg-[#F2F2F21A] rounded-[100px] flex items-center pl-1 pr-4 lg:pr-2 2xl:pr-4 gap-4 lg:gap-2 2xl:gap-4 relative lg:-top-1 ${classNames?.container}`}
		>
			<audio
				ref={audioPlayerRef}
				src="/assets/audio/byfx.mp3" // URL del audio
				onLoadedData={() => handleLoadedData()}
				onCanPlay={() => console.log("El audio puede empezar a reproducirse")}
				onCanPlayThrough={() =>
					console.log("El audio puede reproducirse completamente")
				}
				onError={handleError}
				preload="auto"
				controls
				className="opacity-0 absolute"
			></audio>
			<div
				onClick={() => setIsPlaying((prev) => !prev)}
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
			<div>
				<Image
					src="/assets/icons/wave.svg"
					width={150}
					height={150}
					alt="logo"
					className={classNames?.wave}
				></Image>
				{/* <input
					className="max-w-[80%] bg-gray-300 absolute"
					ref={progressBarRef}
					type="range"
					defaultValue="0"
					onChange={handleProgressChange}
				/> */}
			</div>
		</div>
	);
};
