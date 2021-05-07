import React from "react";

export interface CardProps {
	id: string;
	className: string;
	draggable: boolean;
	children: any;
}

const Card = ({ id, className, draggable, children }: CardProps) => {
	const dragStart = (e: React.DragEvent<HTMLDivElement>) => {
		const target = e.target as Element;
		e.dataTransfer.setData("card_id", target.id);

		setTimeout(() => {
			const target = e.target as HTMLInputElement;
			target.style.display = "none";
		}, 0);
	};
	const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};
	return (
		<div
			id={id}
			className={className}
			draggable={draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}
		>
			{children}
		</div>
	);
};

export default Card;
