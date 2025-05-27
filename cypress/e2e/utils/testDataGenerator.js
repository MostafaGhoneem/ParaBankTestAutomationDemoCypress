import { faker } from '@faker-js/faker';
import fs from 'fs';
import path from 'path';

class TestDataGenerator {
    static generateUserData() {
        const userData = {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            phone: faker.phone.number('###-###-####'),
            ssn: faker.string.numeric('9'),
            username: faker.internet.displayName().replace(/[^a-zA-Z0-9]/g, ''),
            password: 'Test@123',
            confirmPassword: 'Test@123'
        };

        // Save the test data to a JSON file
        const filePath = path.join(Cypress.config('fixturesFolder'), 'testData.json');
        cy.writeFile(filePath, userData);

        return userData;
    }

    static getStoredUserData() {
        return cy.fixture('testData.json');
    }
}

export default TestDataGenerator; 