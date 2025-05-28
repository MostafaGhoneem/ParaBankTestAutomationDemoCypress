import UpdateProfilePage from '../pages/UpdateProfilePage';
import testData from '../../fixtures/profileTestData.json';

describe('Update Profile Tests', () => {
    const updateProfilePage = new UpdateProfilePage();

    beforeEach(() => {
        updateProfilePage.ensureUserExists();
        updateProfilePage.navigateToUpdateProfile();
    });

    it('should update profile successfully', () => {
        updateProfilePage.updateProfile(testData.validProfile);
        updateProfilePage.verifyProfileUpdate();
    });

    it('should update partial profile fields successfully', () => {
        const partialUpdate = {
            firstName: testData.validProfile.firstName,
            lastName: testData.validProfile.lastName
        };
        
        updateProfilePage.updateProfile(partialUpdate);
        updateProfilePage.verifyProfileUpdate();
    });

    it('should validate required fields', () => {
        updateProfilePage.submitEmptyForm();
        updateProfilePage.verifyValidationMessages();
    });
}); 