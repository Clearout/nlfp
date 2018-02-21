package no.dsb.nlfp.pub.controller.v1;

import no.dsb.nlfp.pub.dto.PingResponse;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.actuate.autoconfigure.LocalManagementPort;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.http.HttpStatus.OK;

@ActiveProfiles("local")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class PingIntegrationTest {

    @LocalServerPort
    private int port;

    @LocalManagementPort
    int localManagementPort;

    protected String getRootUri() {
        return "http://localhost:" + port + "/nlfp-public";
    }

    private String pingUrl() {
        return "/api/v1/ping";
    }

    @Test
    public void ping_gives_200() {
        ResponseEntity<PingResponse> response = new TestRestTemplate().getForEntity(getRootUri() + pingUrl(), PingResponse.class);
        assertThat(response.getStatusCode()).isEqualTo(OK);
        assertThat(response.getBody().getHostname()).isNotEmpty();
    }

    @Test
    public void health_is_ok() {
        ResponseEntity<String> response = new TestRestTemplate()
            .getForEntity("http://localhost:{localManagementPort}/sysadmin/health", String.class,
                localManagementPort);
        assertThat(response.getStatusCode()).isEqualTo(OK);
    }

}
