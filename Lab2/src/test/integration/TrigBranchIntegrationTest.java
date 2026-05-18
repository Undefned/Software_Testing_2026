package lab2.integration;

import lab2.common.MathModule;
import lab2.stub.StubModules;
import lab2.system.TrigBranch;
import lab2.trig.Cos;
import lab2.trig.Csc;
import org.junit.jupiter.api.Test;

public class TrigBranchIntegrationTest {

    class TrigBranchSecondLayerIntegrationTest {

        @Test
        void shouldCalculateWithRealCscAndCosAndStubOthers() {
            MathModule sinStub = StubModules.sinStub();
            MathModule realCos = new Cos(sinStub);
            MathModule realCsc = new Csc(sinStub);

            MathModule trigBranch = new TrigBranch(
                    sinStub,
                    realCos,
                    StubModules.tanStub(),
                    StubModules.cotStub(),
                    StubModules.secStub(),
                    realCsc
            );

            IntegrationTestSupport.assertMatchesOnPoints(
                    trigBranch,
                    IntegrationTestSupport.createRealTrigBranch(),
                    IntegrationTestSupport.TRIG_BRANCH_SAFE_POINTS
            );
        }
    }


    class TrigBranchThirdLayerIntegrationTest {

        @Test
        void shouldCalculateWithRealSecTanCotCosAndStubSin() {
            MathModule sinStub = StubModules.sinStub();
            MathModule realCos = new Cos(sinStub);
            MathModule realTan = new Tan(sinStub, realCos);
            MathModule realCot = new Cot(realCos, sinStub);
            MathModule realSec = new Sec(realCos);

            MathModule trigBranch = new TrigBranch(
                    sinStub,
                    realCos,
                    realTan,
                    realCot,
                    realSec,
                    StubModules.cscStub()
            );

            IntegrationTestSupport.assertMatchesOnPoints(
                    trigBranch,
                    IntegrationTestSupport.createRealTrigBranch(),
                    IntegrationTestSupport.TRIG_BRANCH_SAFE_POINTS
            );
        }
    }


    class TrigBranchWithRealSinIntegrationTest {

        @Test
        void shouldCalculateWithFullyRealTrigBranch() {
            MathModule trigBranch = IntegrationTestSupport.createRealTrigBranch();

            IntegrationTestSupport.assertMatchesOnPoints(
                    trigBranch,
                    IntegrationTestSupport.createRealTrigBranch(),
                    IntegrationTestSupport.TRIG_BRANCH_SAFE_POINTS
            );
        }
    }

    class TrigBranchWithStubDependenciesIntegrationTest {

        @Test
        void shouldCalculateWithStubbedTrigDependencies() {
            MathModule trigBranch = new TrigBranch(
                    StubModules.sinStub(),
                    StubModules.cosStub(),
                    StubModules.tanStub(),
                    StubModules.cotStub(),
                    StubModules.secStub(),
                    StubModules.cscStub()
            );

            IntegrationTestSupport.assertMatchesOnPoints(
                    trigBranch,
                    IntegrationTestSupport.createStubTrigBranch(),
                    IntegrationTestSupport.TRIG_BRANCH_SAFE_POINTS
            );
        }
    }

}
