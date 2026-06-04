package integration;

import common.MathModule;
import org.junit.jupiter.api.Test;
import stub.StubModules;  // ← ДОБАВИТЬ ЭТОТ ИМПОРТ

import static integration.IntegrationTestSupport.*;

public class SystemIntegrationTest {

    /**
     * ЭТАП 1: Обе ветки — заглушки
     */
    @Test
    void stage1_bothBranchesStub() {
        MathModule trigStub = StubModules.trigBranchStub();
        MathModule logStub = StubModules.logBranchStub();
        MathModule system = createSystemFunction(trigStub, logStub);
        
        assertSystemMatches(system, trigStub, TRIG_BRANCH_SAFE_POINTS, logStub, LOG_POINTS);
    }

    /**
     * ЭТАП 2: Реальная TrigBranch (со всеми реальными зависимостями), LogBranch — заглушка
     */
    @Test
    void stage2_realTrigBranch_stubLogBranch() {
        MathModule realTrigBranch = createRealTrigBranch();
        MathModule stubLogBranch = StubModules.logBranchStub();
        MathModule system = createSystemFunction(realTrigBranch, stubLogBranch);
        
        assertSystemMatches(system, realTrigBranch, TRIG_BRANCH_SAFE_POINTS, stubLogBranch, LOG_POINTS);
    }

    /**
     * ЭТАП 3: Реальная LogBranch, TrigBranch — заглушка
     */
    @Test
    void stage3_stubTrigBranch_realLogBranch() {
        MathModule stubTrigBranch = StubModules.trigBranchStub();
        MathModule realLogBranch = createRealLogBranch();
        MathModule system = createSystemFunction(stubTrigBranch, realLogBranch);
        
        assertSystemMatches(system, stubTrigBranch, TRIG_BRANCH_SAFE_POINTS, realLogBranch, LOG_POINTS);
    }

    /**
     * ЭТАП 4: Полностью реальная система
     */
    @Test
    void stage4_fullyRealSystem() {
        MathModule realTrigBranch = createRealTrigBranch();
        MathModule realLogBranch = createRealLogBranch();
        MathModule system = createSystemFunction(realTrigBranch, realLogBranch);
        
        assertSystemMatches(system, realTrigBranch, TRIG_BRANCH_SAFE_POINTS, realLogBranch, LOG_POINTS);
    }
}