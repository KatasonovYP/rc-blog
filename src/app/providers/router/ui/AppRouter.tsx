import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config';

export const AppRouter: FC = () => {
	return (
		<Suspense fallback={<h1>Loading</h1>}>
			<Routes>
				{Object.values(routeConfig).map(({ path, element }) => (
					<Route
						key={path}
						path={path}
						element={<div className='page-wrapper'>{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	);
};
