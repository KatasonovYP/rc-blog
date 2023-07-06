import { App } from 'app/app';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers';
import { StoreProvider } from './app/providers/store';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

const container = document.querySelector('#root');
const root = createRoot(container as HTMLElement);
root.render(
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
);
