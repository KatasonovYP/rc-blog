import 'app/styles/index.scss';

export const StyleDecorator = (Story: () => any) => {
    return (
        <div className="app">
            <Story />
        </div>
    );
};
