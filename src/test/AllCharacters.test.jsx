import { render, screen } from '@testing-library/react';
import AllCharacters from '../components/AllCharacters';
import { MemoryRouter as Router } from 'react-router-dom';


beforeEach(()=>{
    render(
        <Router>
            <AllCharacters/>
        </Router>
    )
})

test('get charachterListImg', async () =>{
    const characterImg = await screen.findByRole('img');
    expect(characterImg).toBeInTheDocument();
})

test('get charachterListImg', async () =>{
    const characterImg = await screen.findByRole('img');
    expect(characterImg).toBeInTheDocument();
})