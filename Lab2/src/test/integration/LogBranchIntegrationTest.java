package lab2.integration;

import lab2.common.MathModule;
import lab2.stub.StubModules;
import lab2.system.LogBranch;
import lab2.log.Log2;
import lab2.log.Log3;
import lab2.log.Log5;
import lab2.log.Log10;
import org.junit.jupiter.api.Test;

class LogBranchIntegrationTest {
    class LogBranchWithRealDerivedLogsIntegrationTest {

        @Test
        void shouldCalculateWithRealDerivedLogsAndStubLn() {
            MathModule lnStub = StubModules.lnStub();
            MathModule log2 = new Log2(lnStub);
            MathModule log3 = new Log3(lnStub);
            MathModule logBranch = new LogBranch(lnStub, log2, log3);

            IntegrationTestSupport.assertMatchesOnPoints(
                    logBranch,
                    IntegrationTestSupport.createStubLogBranch(),
                    IntegrationTestSupport.LOG_POINTS
            );
        }
    }

    class LogBranchWithRealLnIntegrationTest {

        @Test
        void shouldCalculateWithFullyRealLogBranch() {
            MathModule logBranch = IntegrationTestSupport.createRealLogBranch();

            IntegrationTestSupport.assertMatchesOnPoints(
                    logBranch,
                    IntegrationTestSupport.createRealLogBranch(),
                    IntegrationTestSupport.LOG_POINTS
            );
        }
    }

    class LogBranchWithStubDependenciesIntegrationTest {

        @Test
        void shouldCalculateWithStubbedLogDependencies() {
            MathModule logBranch = new LogBranch(
                    StubModules.lnStub(),
                    StubModules.log2Stub(),
                    StubModules.log3Stub()
            );

            IntegrationTestSupport.assertMatchesOnPoints(
                    logBranch,
                    IntegrationTestSupport.createStubLogBranch(),
                    IntegrationTestSupport.LOG_POINTS
            );
        }
    }
}
