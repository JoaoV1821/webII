package com.example.hello_api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  
@RequestMapping("/api")  
public class HomeController {

    @GetMapping  
    public String home() {
        return "Olá, Mundo!";
    }

    @GetMapping("/somar/{num1}/{num2}")

    public String somar(@PathVariable String num1, @PathVariable String num2) {

        Integer soma = Integer.parseInt(num2) + Integer.parseInt(num1);
        
        return String.format("O resulta da soma entre %s e %s é %d", num1, num2, soma);
       
    }
    
    @GetMapping("/bemvindo/{nome}")
    public String bemVindo(@PathVariable String nome) {
        return "Bem-vindo, " + nome + "!";
    }
}