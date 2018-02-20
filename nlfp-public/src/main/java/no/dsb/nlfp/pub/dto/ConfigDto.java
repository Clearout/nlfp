package no.dsb.nlfp.pub.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.auto.value.AutoValue;

@AutoValue
public abstract class ConfigDto {
    @JsonProperty
    public abstract String environment();

    @JsonProperty
    public abstract String authRealm();

    @JsonProperty
    public abstract String authClientId();

    @JsonProperty
    public abstract String authUrl();

    public static Builder builder() {
        return new AutoValue_ConfigDto.Builder();
    }

    @AutoValue.Builder
    public abstract static class Builder {
        public abstract Builder environment(String environment);

        public abstract Builder authRealm(String authRealm);

        public abstract Builder authClientId(String authClientId);

        public abstract Builder authUrl(String authUrl);

        public abstract ConfigDto build();
    }
}
