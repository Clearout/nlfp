package no.dsb.nlfp.admin.controller.v1;

import org.springframework.http.HttpStatus;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.http.OAuth2ErrorHandler;
import org.springframework.security.oauth2.client.resource.OAuth2ProtectedResourceDetails;
import org.springframework.web.client.ResponseErrorHandler;

import java.io.IOException;

/**
 * We have to extend {@link OAuth2ErrorHandler} to avoid being wrapped. See
 * {@link OAuth2RestTemplate#setErrorHandler(ResponseErrorHandler)}
 */
public class OauthResponseErrorHandler extends OAuth2ErrorHandler {

    OauthResponseErrorHandler(OAuth2ProtectedResourceDetails resource) {
        super(resource);
    }

    @Override
    public boolean hasError(ClientHttpResponse clientHttpResponse) throws IOException {
        HttpStatus.Series series = clientHttpResponse.getStatusCode().series();
        return (HttpStatus.Series.CLIENT_ERROR.equals(series)) || HttpStatus.Series.SERVER_ERROR.equals(series);
    }

    @Override
    public void handleError(ClientHttpResponse clientHttpResponse) throws IOException {
        // Nothing to do.
    }
}
