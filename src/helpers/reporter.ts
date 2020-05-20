import { DisplayProcessor, SpecReporter, StacktraceOption } from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

console.log("jasmine-spec-reporter 1");

class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        console.log("jasmine-spec-reporter 2");
        return `TypeScript ${log}`;
    }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
    new SpecReporter({
        spec: {
            displayStacktrace: StacktraceOption.PRETTY,
        },
        customProcessors: [CustomProcessor],
    })
);
