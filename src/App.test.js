import { render, screen } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

beforeEach(()=>{
  render(<App/>)
})

test('renders logo', () =>{
  /* render(<App/>); */
  const logo = screen.getByRole('img' , {name: 'Logotipo RickandMorty'});
  expect(logo).toBeInTheDocument();
});

test('renders title', () =>{
  /* render(<App/>); */
  const title = screen.getByText(/lista de personajes/i);
  expect(title).toBeInTheDocument();
});

