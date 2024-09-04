class DatePickerModel {
    constructor(dateInputSelector, datePickerOpenButtonSelector) {
      this.dateInputSelector = dateInputSelector; // Selector for the date input field
      this.datePickerOpenButtonSelector = datePickerOpenButtonSelector; // Selector for the button that opens the date picker
    }
  
    selectDate(date) {
      // Convert date to required format if necessary
      const [day, month, year] = date.split('/'); // Assuming date is in 'DD/MM/YYYY' format
  
      // Click the button to open the date picker
      cy.get(this.datePickerOpenButtonSelector).click();
  
      // Select the year
      cy.get('.MuiPickersYearSelection-container').contains(year).click();
  
      // Select the month (optional, depending on the date picker implementation)
      cy.get('.MuiPickersCalendar-transitionContainer')
        .contains(new Date(`${month}/01/${year}`).toLocaleString('default', { month: 'long' }))
        .click();
  
      // Select the day
      cy.get('.MuiPickersDay-root').contains(day).click();
  
      // Confirm the date selection (if needed)
      cy.get('.MuiButtonBase-root').contains('OK').click(); // This will depend on your specific date picker implementation
    }
  }
  
  export default DatePickerModel;
  