
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import OnboardingPage from "../pages/Onboarding/OnBoardingPage";
import OnBoardingIntroPage from "../pages/Onboarding/OnBoardingIntroPage";
import OnboardingTalentInfoPage from "../pages/Onboarding/OnboardingTalentInfoPage";
import OnBoardingContractDetailsPage from "../pages/Onboarding/OnBoardingContractDetailsPage";
import OnBoardingContractClausesPage from "../pages/Onboarding/OnBoardingContractClausesPage";
import OnBoardingCompensationCalculationPage from "../pages/Onboarding/OnBoardingCompensationCalculationPage";
import OnBoardingEmploymentInvite from '../pages/Onboarding/OnBoardingEmploymentInvite';
import OnboardingCheckListPage from "../pages/Onboarding/OnboardingCheckListPage";
import OnboardingSummaryPage from "../pages/Onboarding/OnboardingSummaryPage";


const contractData= require ('../../fixtures/onboardingPage/onboardingContractData.json')
const contractClausesData= require ('../../fixtures/onboardingPage/onboardingClausesData.json')
const compensationData = require ('../../fixtures/onboardingPage/onboardingCompensationData.json')
const { generateRandomTalentData } = require('../../support/utils/GenerateTalenetRandomData.js');



const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const onboardingPage = new OnboardingPage();
const onBoardingIntro = new OnBoardingIntroPage();
const obBoardingTalentInfoPage = new OnboardingTalentInfoPage();
const onBoardingContractDetailsPage = new OnBoardingContractDetailsPage();
const onboardingContractClausesPage = new OnBoardingContractClausesPage();
const onBoardingCompensationCalculationPage = new OnBoardingCompensationCalculationPage();
const onBoardingEmploymentInvite = new OnBoardingEmploymentInvite();
const onboardingCheckListPage = new OnboardingCheckListPage();
const onboardingSummaryPage = new OnboardingSummaryPage();

describe('Login Tests', () => {
    beforeEach(() => {
        loginPage.visit('/login');
        
      });
     
 

    it('should log in successfully with valid credentials', () => {
       
        cy.fixture('loginPage/loginData').then((data) => {
          const HrManager = data.HrManager;  
          const uniqueEmail = `user_${Date.now()}@example.com`;
          const talentData = generateRandomTalentData();
    
          loginPage.login(HrManager.email, HrManager.password);
          dashboardPage.openOnboardingPage();
          onboardingPage.selectCountryFromTheListBox('Germany');
          onBoardingIntro.workGlobal();
          obBoardingTalentInfoPage.fillTalentDetails(talentData);
          onBoardingContractDetailsPage.fillContractDetails(contractData.contractDetails);
          onboardingContractClausesPage.fillContractClausesForm(contractClausesData);
          onBoardingCompensationCalculationPage.fillCompensationDetails(compensationData);
          onBoardingEmploymentInvite.fillTalentEmail(uniqueEmail);
          onboardingCheckListPage.CheckAllAgreementsAndRequirements();
          onboardingSummaryPage.AgreeAndFinishTheOnboarding();
          dashboardPage.openNotificationSlide();
          dashboardPage.assertAndClickLastNotification(talentData.firstName);
          dashboardPage.assertTheNotificationIsMarkedAsRead();
        });


    

        });
      });
    ;
    