package no.dsb.nlfp.admin.domain;

import no.dsb.nlfp.admin.dto.LogRequest;

public class LogMessage {
    private String message;
    private LogLevel logLevel;

    public LogMessage(String message, LogLevel logLevel) {
        this.message = message;
        this.logLevel = logLevel;
    }

    public String getMessage() {
        return message;
    }


    public LogLevel getLogLevel() {
        return logLevel;
    }

    public static LogMessage from(LogRequest logRequest) {
        return new LogMessage(logRequest.getMessage(),
            LogLevel.valueOf(logRequest.getLogLevel()));
    }
}
