package no.dsb.nlfp.admin.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotNull;

@ApiModel("Request containing incoming log message")
public class LogRequest {

    @NotNull
    @ApiModelProperty(notes = "The message to log")
    private String message;

    @NotNull
    @ApiModelProperty(notes = "The log level. E.g. 'info', 'debug', 'error'")
    private String logLevel;

    @ApiModelProperty(notes = "The reference to the error, if it arises from nlfp-server.")
    private String errorReference;

    @ApiModelProperty(notes = "The user performing the action to be logged")
    private String executiveUserName;

    private LogRequest() {
        // Not allowed to construct
    }

    public LogRequest(String message, String errorReference, String logLevel, String executiveUserName) {
        this.message = message;
        this.errorReference = errorReference;
        this.logLevel = logLevel;
        this.executiveUserName = executiveUserName;
    }

    public String getMessage() {
        return message;
    }

    public String getErrorReference() {
        return errorReference;
    }

    public String getLogLevel() {
        return logLevel;
    }

    public String getExecutiveUserName() {
        return executiveUserName;
    }
}
