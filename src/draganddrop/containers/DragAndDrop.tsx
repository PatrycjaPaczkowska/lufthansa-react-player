import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import styles from "./DragAndDrop.module.css";

const DragAndDrop = () => {
	return (
		<div className={styles.container}>
			<Container id="board-1" className={styles.board}>
				<Card id="card-1" className={styles.card} draggable={true}>
					<p>Only me one</p>
				</Card>
				<Card id="card-3" className={styles.card} draggable={true}>
					<p>Only me three</p>
				</Card>
			</Container>
			<Container id="board-2" className={styles.board}>
				<Card id="card-2" className={styles.card} draggable={true}>
					<p>Only me two</p>
				</Card>
			</Container>
		</div>
	);
};

export default DragAndDrop;
