package no.dsb.nlfp.admin.service;

import no.dsb.nlfp.admin.dto.ConfigDto;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;

@Service
public class ConfigService {

    private Environment environment;

    public ConfigService(Environment environment) {
        this.environment = environment;
    }

    public ConfigDto getAppConfig() {
        return ConfigDto.builder()
            .environment(environment.getProperty("environment"))
            .authUrl(environment.getRequiredProperty("keycloak.url"))
            .authClientId(environment.getRequiredProperty("keycloak.clientId"))
            .authRealm(environment.getRequiredProperty("keycloak.realm"))
            .build();
    }

}
