import React from 'react';
import styles from './Main.module.scss';

export const Main = () => {
	return (
		<>
			<main className={styles.main}>
				<div className={styles.secondCard}>
					<div className={styles.mainCardHeader}>
						<h2>Aqui fica a temperatura</h2>
					</div>
					<div className={styles.mainCardBody}>
						<h3>Aqui fica o ícone</h3>
					</div>
				</div>
				<div className={styles.mainCard}>
					<div className={styles.mainCardHeader}>
						<h2>Aqui fica a temperatura</h2>
					</div>
					<div className={styles.mainCardBody}>
						<h3>Aqui fica o ícone</h3>
					</div>
				</div>
				<div className={styles.secondCard}>
					<div className={styles.mainCardHeader}>
						<h2>Aqui fica a temperatura</h2>
					</div>
					<div className={styles.mainCardBody}>
						<h3>Aqui fica o ícone</h3>
					</div>
				</div>
			</main>
		</>
	);
};
