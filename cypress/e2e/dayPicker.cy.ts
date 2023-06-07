describe('rendering DayPicker', () => {
  it('should show only date selector', () => {
    cy.visit(
      'http://localhost:6006/?path=/story/components-daypicker--default'
    );
  });
});
