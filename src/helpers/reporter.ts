import { DisplayProcessor, SpecReporter, StacktraceOption } from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

class CustomProcessor extends DisplayProcessor {
    public displayJasmineStarted(info: SuiteInfo, log: string): string {
        return `TypeScript ${log}`;
    }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
    new SpecReporter({
        suite: {
            displayNumber: false,
        },
        summary: {
            displayDuration: true,
        },
        spec: {
            displayDuration: false,
            displayPending: true,
            displayErrorMessages: true,
            displayStacktrace: StacktraceOption.PRETTY,
            displaySuccessful: true,
            displayFailed: true,
        },
        customProcessors: [CustomProcessor],
    })
);
