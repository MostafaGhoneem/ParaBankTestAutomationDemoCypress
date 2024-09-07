class DatePickerModel {
  constructor(dateInputSelector, openDatePickerButtonSelector) {
    this.dateInputSelector = dateInputSelector;
    this.openDatePickerButtonSelector = openDatePickerButtonSelector;
  }

 
  selectDate(date) {
    const [day, month, year] = date.split('/');

 
    cy.get(this.openDatePickerButtonSelector).click();

    cy.get('.MuiPickersCalendarHeader-switchHeader').then(($header) => {
      const currentYear = $header.find('.MuiTypography-root').text().split(' ')[1];

      if (parseInt(currentYear) !== parseInt(year)) {

        if (parseInt(currentYear) > parseInt(year)) {
          cy.get('.MuiPickersCalendarHeader-iconButtonPrevious').click({ multiple: true });
        } else {
          cy.get('.MuiPickersCalendarHeader-iconButtonNext').click({ multiple: true });
        }
      }
    });

    cy.get('.MuiTypography-root').contains(year).parent().then(($header) => {
      const currentMonth = $header.find('.MuiTypography-root').text().split(' ')[0];

      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];

      if (monthNames.indexOf(currentMonth) !== parseInt(month) - 1) {
      
        if (monthNames.indexOf(currentMonth) > parseInt(month) - 1) {
          cy.get('.MuiPickersCalendarHeader-iconButtonPrevious').click({ multiple: true });
        } else {
          cy.get('.MuiPickersCalendarHeader-iconButtonNext').click({ multiple: true });
        }
      }
    });

  
    cy.get(`.MuiPickersDay-root:contains("${parseInt(day)}")`).click();

    cy.get(this.dateInputSelector).should('have.value', date);
  }
}

export default DatePickerModel;
