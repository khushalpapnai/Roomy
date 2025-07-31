package roomy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Health {
    @GetMapping("/api/v1/healthCheck")
    public String check() {
        return "The Service is working and running fine";
    }
}