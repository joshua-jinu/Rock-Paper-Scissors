describe('Rock Paper Scissors Game', function() {
 
  it('should update and display the selected logo when rock, paper, or scissors is clicked', function() {
    // Simulate click on rock logo
    rockLogo.click();
    expect(selectedLogo.src).toContain('rock-hand.png?raw=true');
    expect(selectedLogo.style.display).toBe('block');

    // Simulate click on paper logo
    paperLogo.click();
    expect(selectedLogo.src).toContain('paper-hand.png?raw=true');
    expect(selectedLogo.style.display).toBe('block');

    // Simulate click on scissors logo
    scissorsLogo.click();
    expect(selectedLogo.src).toContain('scissors-hand.png?raw=true');
    expect(selectedLogo.style.display).toBe('block');
  });

  it('should update and display the computer logo when rock, paper, or scissors is clicked', function() {
    // Simulate click on rock logo
    rockLogo.click();
    expect(computerChoices).toContain(computerLogo.src);
    expect(computerLogo.style.display).toBe('block');

    // Simulate click on paper logo
    paperLogo.click();
    expect(computerChoices).toContain(computerLogo.src);
    expect(computerLogo.style.display).toBe('block');

    // Simulate click on scissors logo
    scissorsLogo.click();
    expect(computerChoices).toContain(computerLogo.src);
    expect(computerLogo.style.display).toBe('block');
  });


});