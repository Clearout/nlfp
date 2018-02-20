package no.dsb.nlfp.pub.controller.v1;

import org.junit.Rule;
import org.junit.runner.RunWith;
import org.springframework.boot.actuate.autoconfigure.LocalManagementPort;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.test.OAuth2ContextSetup;
import org.springframework.security.oauth2.client.test.RestTemplateHolder;
import org.springframework.security.oauth2.client.token.grant.client.ClientCredentialsResourceDetails;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.web.client.RestOperations;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@ActiveProfiles("local")
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public abstract class OauthBase implements RestTemplateHolder {

    @Rule
    public OAuth2ContextSetup context = OAuth2ContextSetup.standard(this);

    @LocalServerPort
    private int port;

    @LocalManagementPort
    int localManagementPort;

    /**
     * Is injected by {@link #context} through {@link #setRestTemplate(RestOperations)}.
     */
    RestOperations restTemplateWithToken;

    @Override
    public RestOperations getRestTemplate() {
        // Denne trengs bare om man vil av OAuth2ContextSetup skal resette til gammel verdi etter testen:
        return null;
    }

    protected String getRootUri() {
        return "http://localhost:" + port + "/nlfp-public";
    }

    @Override
    public void setRestTemplate(RestOperations restTemplate) {
        OAuth2RestTemplate oAuth2RestTemplate = (OAuth2RestTemplate) restTemplate;
        this.restTemplateWithToken = new RestTemplateBuilder()
            .errorHandler(new OauthResponseErrorHandler(oAuth2RestTemplate.getResource()))
            .rootUri(getRootUri())
            .configure(oAuth2RestTemplate);

    }

    static class ResourceDetails extends ClientCredentialsResourceDetails {
        public ResourceDetails(Object parentContext) {
            OauthBase it = (OauthBase) parentContext;
            setAccessTokenUri(it.getRootUri() + "/oauth/token");
            setClientId("client-id");
            setClientSecret("client-secret");
        }
    }
}
