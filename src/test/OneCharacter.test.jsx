

test('render backButton', () =>{
    render(<Router><OneCharacter/></Router>);
    const backButton = screen.getByText(/Back/i);
    expect(backButton).toBeInTheDocument();
})