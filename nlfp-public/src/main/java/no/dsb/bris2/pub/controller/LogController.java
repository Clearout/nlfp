package no.dsb.nlfp.pub.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import no.dsb.nlfp.pub.domain.LogMessage;
import no.dsb.nlfp.pub.dto.LogRequest;
import no.dsb.nlfp.pub.service.LogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller for LogHandling from nlfp-ui
 */
@RestController
@RequestMapping("/log")
public class LogController {

    private LogService logService;

    @Autowired
    public LogController(LogService logService) {
        this.logService = logService;
    }

    @ApiOperation(value = "Add log entry")
    @PostMapping
    public ResponseEntity addLogEntry(@ApiParam(value = "JSON request body for log message") @RequestBody LogRequest logRequest) {

        boolean logSaved = logService.addLogMessage(LogMessage.from(logRequest));

        return new ResponseEntity<>(logSaved ? HttpStatus.OK : HttpStatus.BAD_GATEWAY);

    }
}
