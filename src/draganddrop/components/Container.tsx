import React from "react";

export interface ContainerProps {
	id: string;
	className: string;
	children: any;
}

const Container = ({ id, className, children }: ContainerProps) => {
	const drop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		const card_id = e.dataTransfer.getData("card_id");
		const card = document.getElementById(card_id);

		card!.style.display = "block";

		const target = e.target as HTMLInputElement;
		target.appendChild(card!);
	};

	const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	return (
		<div id={id} className={className} onDrop={drop} onDragOver={dragOver}>
			{children}
		</div>
	);
};

export default Container;
