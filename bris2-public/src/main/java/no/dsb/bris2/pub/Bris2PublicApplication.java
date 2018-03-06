package no.dsb.nlfp.pub;

import com.ulisesbocchio.jasyptspringboot.annotation.EncryptablePropertySource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import static springfox.documentation.builders.RequestHandlerSelectors.withClassAnnotation;

@EnableSwagger2
@SpringBootApplication
@EncryptablePropertySource(value = "classpath:application.yml")
public class Bris2PublicApplication extends WebMvcConfigurerAdapter {

    @Bean
    Docket newsApi() {
        return new Docket(DocumentationType.SWAGGER_2)
            .select()
            .apis(withClassAnnotation(RestController.class))
            .build()
            .apiInfo(apiInfo());
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
            .title("DSB BRIS API")
            .description("")
            .version("v1")
            .build();
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
        registry.setOrder(Ordered.HIGHEST_PRECEDENCE);
        super.addViewControllers(registry);
    }

    public static void main(String[] args) {
        SpringApplication.run(Bris2PublicApplication.class, args);
    }
}
