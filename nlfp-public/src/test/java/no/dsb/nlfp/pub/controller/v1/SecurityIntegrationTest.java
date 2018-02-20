package no.dsb.nlfp.pub.controller.v1;

import no.dsb.nlfp.pub.dto.PingResponse;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.test.OAuth2ContextConfiguration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.springframework.http.HttpStatus.OK;

@ActiveProfiles("local")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class SecurityIntegrationTest extends OauthBase {

    @Test
    @Ignore("Enable test when OAUTH2 (keycloak) is configured")
    @OAuth2ContextConfiguration(ResourceDetails.class)
    public void ping_gives_200() {
        ResponseEntity<PingResponse> response = restTemplateWithToken.getForEntity(pingUrl(), PingResponse.class);
        assertThat(response.getStatusCode()).isEqualTo(OK);
        assertThat(response.getBody().getHostname()).isNotEmpty();
    }

    @Test
    @Ignore("Enable test when OAUTH2 (keycloak) is configured")
    public void ping_without_oauth_token_gives_unauthorized_access() {
        ResponseEntity<String> entity = new TestRestTemplate().getForEntity(getRootUri() + pingUrl(), String.class);
        assertThat(entity.getStatusCode()).isEqualTo(HttpStatus.UNAUTHORIZED);
        assertThat(entity.getBody()).contains("Full authentication is required to access this resource");
    }

    private String pingUrl() {
        return "/api/v1/ping";
    }

    @Test
    public void health_is_ok() {
        ResponseEntity<String> response = new TestRestTemplate()
            .getForEntity("http://localhost:{localManagementPort}/sysadmin/health", String.class,
                localManagementPort);
        assertThat(response.getStatusCode()).isEqualTo(OK);
    }

}
