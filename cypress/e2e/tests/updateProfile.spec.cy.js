import UpdateProfilePage from '../pages/UpdateProfilePage';
import testData from '../../fixtures/profileTestData.json';

describe('Update Profile Tests', () => {
    const updateProfilePage = new UpdateProfilePage();

    beforeEach(() => {
        updateProfilePage.ensureUserExists();
        cy.get('a').contains('Update Contact Info').click();
    });

    it('should update all profile fields successfully', () => {
        
        updateProfilePage.updateProfile(testData.validProfile);
        
        updateProfilePage.verifyProfileUpdate();
        
        updateProfilePage.navigateToUpdateProfile();
        
        updateProfilePage.verifyProfileValues(testData.validProfile);
    });

    it('should update partial profile fields successfully', () => {
        const partialUpdate = {
            firstName: testData.validProfile.firstName,
            lastName: testData.validProfile.lastName
        };
        
        updateProfilePage.updateProfile(partialUpdate)
        .verifyProfileUpdate()
        .navigateToUpdateProfile()
        .verifyProfileValues(partialUpdate);
        
    });

    it('should validate required fields', () => {
        updateProfilePage.submitEmptyForm();
        updateProfilePage.verifyValidationMessages();
    });
}); 