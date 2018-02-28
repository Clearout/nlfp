package no.dsb.nlfp.pub.controller.v1;

import io.swagger.annotations.ApiOperation;
import no.dsb.nlfp.pub.dto.PingResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.InetAddress;
import java.net.UnknownHostException;

@RestController
@RequestMapping("/api/v1")
public class PingController {

    private final String version;
    private final String hostname;

    @Autowired
    public PingController(@Value("${info.version}") String version) throws UnknownHostException {
        this.version = version;
        this.hostname = InetAddress.getLocalHost().getHostName();
    }

    @ApiOperation(value = "Ping the service to test the connection.", response = PingResponse.class)
    @GetMapping("/ping")
    public ResponseEntity<PingResponse> ping() {
        PingResponse response = new PingResponse();
        response.setHostname(hostname);
        response.setVersion(version);

        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.add("Content-Type", MediaType.APPLICATION_JSON_VALUE);

        return new ResponseEntity<>(response, responseHeaders, HttpStatus.OK);
    }
}
