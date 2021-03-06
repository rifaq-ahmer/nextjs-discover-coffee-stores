import React from "react";
import styles from "./banner.module.css";

const Banner = (props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Coffee</span>
				<span className={styles.title2}>Connoisseure </span>
			</h1>
			<p className={styles.subtitle}>Discover your local coffee Shopes!</p>
			<button className={styles.button} onClick={props.handleOnClick}>
				{props.buttonText}
			</button>
		</div>
	);
};

export default Banner;
