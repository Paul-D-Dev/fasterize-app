import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import TopBarComponent from './top-bar.component';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TopBarComponent title='test'></TopBarComponent>, div);
})  

it('renders correct title', () => {
    const { getByTestId } = render(<TopBarComponent title='Ici'/>);
    const titleEl = getByTestId('topBar-title');
    expect(titleEl.textContent).toBe('Ici');
})

it('renders document title capitalize', () => {
    render(<TopBarComponent title='fasterize debugger'/>);
    const documentTitle = document.title;
    expect(documentTitle).toBe('Fasterize Debugger');
})