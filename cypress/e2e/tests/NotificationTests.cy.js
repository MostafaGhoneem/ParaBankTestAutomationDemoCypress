
import LoginPage from "../pages/LoginPage.js";
import DashboardPage from "../pages/DashboardPage.js";
import OnboardingPage from "../pages/Onboarding/OnBoardingPage.js";
import OnBoardingIntroPage from "../pages/Onboarding/OnBoardingIntroPage.js";
import OnboardingTalentInfoPage from "../pages/Onboarding/OnboardingTalentInfoPage.js";
import OnBoardingContractDetailsPage from "../pages/Onboarding/OnBoardingContractDetailsPage.js";
import OnBoardingContractClausesPage from "../pages/Onboarding/OnBoardingContractClausesPage.js";
import OnBoardingCompensationCalculationPage from "../pages/Onboarding/OnBoardingCompensationCalculationPage.js";
import OnBoardingEmploymentInvite from '../pages/Onboarding/OnBoardingEmploymentInvite.js';
import OnboardingCheckListPage from "../pages/Onboarding/OnboardingCheckListPage.js";
import OnboardingSummaryPage from "../pages/Onboarding/OnboardingSummaryPage.js";


const contractData= require ('../../fixtures/onboardingPage/onboardingContractData.json')
const contractClausesData= require ('../../fixtures/onboardingPage/onboardingClausesData.json')
const compensationData = require ('../../fixtures/onboardingPage/onboardingCompensationData.json')
const { generateRandomTalentData } = require('../../support/utils/GenerateTalenetRandomData.js')
const onboardingData = require ('../../fixtures/onboardingPage/onboarding-data.json')



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
          cy.allure().startStep('User Logins');
          loginPage.login(HrManager.email, HrManager.password);
          dashboardPage.openOnboardingPage();
          onboardingPage.selectCountryFromTheListBox(onboardingData.country);
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
          cy.allure().endStep();
        });


    

        });
      });
    ;
    