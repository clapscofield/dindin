//Modulos de dependencia
var assert = require("assert").strict;
var webdriver = require("selenium-webdriver");
require("geckodriver");
var chrome = require('selenium-webdriver/chrome');


// Servidor da aplicacao
const serverUri = "http://localhost:3000/cadastro-usuario";

/**
 * Config for Chrome browser
 * @type {webdriver}
 */
 var browser = new webdriver.Builder()
 .forBrowser('chrome')
 .build();

 browser.get(serverUri);

describe("Página de Cadastro", function() {
    /**
     * Testa abrir a aplicacao e verificar formulario de cadastro
     */
    it("Verificar se formulario de cadastro foi carregado", function() {
       return new Promise((resolve, reject) => {
           browser
               .findElement({ id: "formularioCadastro" })
               .then(elem => resolve())
               .catch(err => reject(err));
       });
    });

    /**
     * Testa abrir a aplicacao e verificar botao de login
     */
    it("Verificar se o botao esta desativado", function() {
        return new Promise((resolve, reject) => {
            browser.findElement({ id: "botaoCadastro" })
                .isEnabled()
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