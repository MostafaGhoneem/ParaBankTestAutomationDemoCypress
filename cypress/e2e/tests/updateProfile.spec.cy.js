import UpdateProfilePage from '../pages/UpdateProfilePage';
import testData from '../../fixtures/profileTestData.json';

describe('Update Profile Tests', () => {
    const updateProfilePage = new UpdateProfilePage();

    beforeEach(() => {
        updateProfilePage.ensureUserExists();
        cy.get('a').contains('Update Contact Info').click();
    });

    it('should update all profile fields successfully', () => {
        // Update profile with test data
        updateProfilePage.updateProfile(testData.validProfile);
        
        // Verify success message
        updateProfilePage.verifyProfileUpdate();
        
        // Navigate back to update profile page
        updateProfilePage.navigateToUpdateProfile();
        
        // Verify all fields have the updated values
        updateProfilePage.verifyProfileValues(testData.validProfile);
    });

    it('should update partial profile fields successfully', () => {
        const partialUpdate = {
            firstName: testData.validProfile.firstName,
            lastName: testData.validProfile.lastName
        };
        
        // Update only first name and last name
        updateProfilePage.updateProfile(partialUpdate)
        .verifyProfileUpdate()
        .navigateToUpdateProfile()
        .verifyProfileValues(partialUpdate);
        
        // Verify success message
       // updateProfilePage.verifyProfileUpdate();
        
        // Navigate back to update profile page
       // updateProfilePage.navigateToUpdateProfile();
        
        // Verify only updated fields have new values
       // updateProfilePage.verifyProfileValues(partialUpdate);
    });

    it('should validate required fields', () => {
        // Submit form with empty fields and verify validation messages
        updateProfilePage.submitEmptyForm();
        updateProfilePage.verifyValidationMessages();
    });
}); 