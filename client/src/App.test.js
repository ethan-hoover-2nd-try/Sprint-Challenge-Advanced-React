import React from 'react';
import {render, getByTestId, cleanup} from '@testing-library/react';
import App from './App';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';


afterEach(cleanup);

test('renders app without crashing', () =>{
  render(<App />)
});

test('renders navbar without crashing', () =>{
  render(<NavBar />)
});

test('renders playercard without crashing', () =>{
  render(<PlayerCard />)
});

test('test contains player list', () =>{
  {getByTestId}('player-list');
});
