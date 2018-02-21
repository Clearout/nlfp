package no.dsb.nlfp.admin.service;

import no.dsb.nlfp.admin.domain.LogMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * Service class for adding log messages from external sources.
 */
@Service
public class LogService {

    private Logger logger = LoggerFactory.getLogger(getClass());

    public boolean addLogMessage(LogMessage logMessage) {
        switch (logMessage.getLogLevel()) {
            case DEBUG:
                logger.debug(logMessage.getMessage());
                return true;
            case INFO:
                logger.info(logMessage.getMessage());
                return true;
            case WARN:
                logger.warn(logMessage.getMessage());
                return true;
            case ERROR:
                logger.error(logMessage.getMessage());
                return true;
        }
        return false;
    }
}

