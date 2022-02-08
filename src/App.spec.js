import {fireEvent, render} from '@testing-library/svelte';

import App from './App.svelte';

describe('App', () => {
  test('message and input have alwayys same values', async () => {
    const {container, getByText} = render(App);
    const input = container.querySelector('input');
    const button = container.querySelector('button');

    // initial state
    expect(getByText('hi'));
    expect(input.value).toBe('hi');
  });});