import styles from './Header.module.scss';
import { MapPin, MagnifyingGlass } from '@phosphor-icons/react';

export const Header = () => {
	return (
		<>
			<header className={styles.container}>
				<div>
					<h2>Weather API</h2>
				</div>
				<div className={styles.iconDiv}>
					<MapPin size={32} color="#fafafa" weight="bold" />
					<span className={styles.cityName}>{}</span>
				</div>
				<div className={styles.inputDiv}>
					<MagnifyingGlass size={32} color="#fafafa" weight="bold" />
					<input
						type="text"
						className={styles.input}
						placeholder="Pesquise sua cidade"
					/>
				</div>
			</header>
		</>
	);
};
