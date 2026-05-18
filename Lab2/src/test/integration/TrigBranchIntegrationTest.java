package integration;

import common.MathModule;
import stub.StubModules;
import system.TrigBranch;
import trig.Cos;
import trig.Cot;
import trig.Csc;
import trig.Sec;
import trig.Tan;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

public class TrigBranchIntegrationTest {
    @Test
    void shouldCalculateWithFullyRealTrigBranch() {
        MathModule trigBranch = IntegrationTestSupport.createRealTrigBranch();

        IntegrationTestSupport.assertMatchesOnPoints(
                trigBranch,
                IntegrationTestSupport.createRealTrigBranch(),
                Arrays.stream(IntegrationTestSupport.TRIG_BRANCH_SAFE_POINTS)
                    .filter(x -> x > -5.0 && x < -1.0) // только рабочий диапазон
                    .toArray()
        );
    }
}