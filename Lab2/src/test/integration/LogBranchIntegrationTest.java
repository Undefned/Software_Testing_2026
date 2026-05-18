package integration;

import common.MathModule;
import stub.StubModules;
import system.LogBranch;
import log.Log2;
import log.Log3;
import org.junit.jupiter.api.Test;

class LogBranchIntegrationTest {

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