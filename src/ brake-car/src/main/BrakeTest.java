package main;

import net.sourceforge.jFuzzyLogic.FIS;
import net.sourceforge.jFuzzyLogic.plot.JFuzzyChart;
import net.sourceforge.jFuzzyLogic.rule.Variable;

public class BrakeTest {

    public static void main(String[] args) {

        FIS fis = FIS.load("src/resource/brake.fcl", true);

        if (fis == null) {
            System.err.println("Can't load file");
            System.exit(1);
        }

        JFuzzyChart.get().chart(fis.getFunctionBlock("break"));

        fis.setVariable("pressao", 60);
        fis.setVariable("velocidade", 80);

        fis.evaluate();

        Variable b = fis.getFunctionBlock("break").getVariable("freio");
        JFuzzyChart.get().chart(b, b.getDefuzzifier(), true);
        System.out.println(b.getValue());

    }

}