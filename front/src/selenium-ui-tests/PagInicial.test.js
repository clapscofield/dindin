//Modulos de dependencia
 var assert = require("assert").strict;
 var webdriver = require("selenium-webdriver");
 require("geckodriver");
 var chrome = require('selenium-webdriver/chrome');

 
 // Servidor da aplicacao
 const serverUri = "http://localhost:3000/";

/**
  * Config for Chrome browser
  * @type {webdriver}
  */
  var browser = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

  browser.get(serverUri);

 /**
  * TESTES DA INTERFACE DA PAG INICIAL
 */
 describe("Página Inicial", function() {
     /**
      * Testa abrir a aplicacao e verificar botao de cadastro
      */
     it("Verificar se botão de cadastro foi carregado", function() {
        return new Promise((resolve, reject) => {
            browser
                .findElement({ id: "cadastro" })
                .then(elem => resolve())
                .catch(err => reject(err));
        });
     });
 
     /**
      * Testa abrir a aplicacao e verificar botao de login
      */
     it("Verificar se botão de login foi carregado", function() {
         return new Promise((resolve, reject) => {
             browser
                 .findElement({ id: "minhacarteira" })
                 .then(elem => resolve())
                 .catch(err => reject(err));
         });
     });
      /**
      * Testa abrir a aplicacao e imagem da interface
      */
    it("Verificar se imagem esta visivel", function() {
            return new Promise((resolve, reject) => {
                browser
                    .findElement({ id: "imagemLayout" })
                    .then(elem => resolve())
                    .catch(err => reject(err));
            });
    });
 
     /**
      * Final dos casos de teste
      * Finaliza o browser.
      */
     after(function() {
         browser.quit();
     });
});