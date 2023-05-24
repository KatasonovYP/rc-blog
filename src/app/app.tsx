import {FC} from 'react';
import './styles/index.scss';
import {classNames, useTheme} from 'shared/lib';
import {AppRouter} from 'app/providers';
import {Navbar} from "widgets/navbar/navbar";

export const App: FC = () => {
	const {theme} = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar/>
			<AppRouter/>
		</div>
	);
};
