package lab2.integration;

import lab2.common.MathModule;
import org.junit.jupiter.api.Test;

class SystemintegrationTest {
    class FullSystemIntegrationTest {

        @Test
        void shouldCalculateWithFullyRealSystem() {
            MathModule systemFunction = IntegrationTestSupport.createSystemFunction(
                    IntegrationTestSupport.createRealTrigBranch(),
                    IntegrationTestSupport.createRealLogBranch()
            );

            IntegrationTestSupport.assertSystemMatches(
                    systemFunction,
                    IntegrationTestSupport.createRealTrigBranch(),
                    IntegrationTestSupport.TRIG_BRANCH_SAFE_POINTS,
                    IntegrationTestSupport.createRealLogBranch(),
                    IntegrationTestSupport.LOG_POINTS
            );
        }
    }

    class SystemFunctionWithBranchStubsIntegrationTest {

        @Test
        void shouldCalculateWithStubbedBranches() {
            MathModule trigBranchStub = IntegrationTestSupport.createStubTrigBranch();
            MathModule logBranchStub = IntegrationTestSupport.createStubLogBranch();
            MathModule systemFunction = IntegrationTestSupport.createSystemFunction(trigBranchStub, logBranchStub);

            IntegrationTestSupport.assertSystemMatches(
                    systemFunction,
                    trigBranchStub,
                    IntegrationTestSupport.TRIG_BRANCH_POINTS,
                    logBranchStub,
                    IntegrationTestSupport.LOG_POINTS
            );
        }
    }

    class SystemFunctionWithRealLogBranchIntegrationTest {

        @Test
        void shouldCalculateWithStubTrigBranchAndRealLogBranch() {
            MathModule stubTrigBranch = IntegrationTestSupport.createStubTrigBranch();
            MathModule realLogBranch = IntegrationTestSupport.createRealLogBranch();
            MathModule systemFunction = IntegrationTestSupport.createSystemFunction(stubTrigBranch, realLogBranch);

            IntegrationTestSupport.assertSystemMatches(
                    systemFunction,
                    stubTrigBranch,
                    IntegrationTestSupport.TRIG_BRANCH_POINTS,
                    IntegrationTestSupport.createRealLogBranch(),
                    IntegrationTestSupport.LOG_POINTS
            );
        }
    }


    class SystemFunctionWithRealTrigBranchIntegrationTest {

        @Test
        void shouldCalculateWithRealTrigBranchAndStubLogBranch() {
            MathModule realTrigBranch = IntegrationTestSupport.createRealTrigBranch();
            MathModule stubLogBranch = IntegrationTestSupport.createStubLogBranch();
            MathModule systemFunction = IntegrationTestSupport.createSystemFunction(realTrigBranch, stubLogBranch);

            IntegrationTestSupport.assertSystemMatches(
                    systemFunction,
                    IntegrationTestSupport.createRealTrigBranch(),
                    IntegrationTestSupport.TRIG_BRANCH_SAFE_POINTS,
                    stubLogBranch,
                    IntegrationTestSupport.LOG_POINTS
            );
        }
    }
}
