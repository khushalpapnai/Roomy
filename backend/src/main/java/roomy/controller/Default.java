package roomy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Default {
    @GetMapping("/")
    public String init() {
        return "API is Working fine";
    }

}
