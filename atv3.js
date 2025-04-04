var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
    return Funcionario;
}());
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cpf, departamento) {
        var _this = _super.call(this, nome, cpf) || this;
        _this.departamento = departamento;
        return _this;
    }
    return Gerente;
}(Funcionario));
var Estagiario = /** @class */ (function (_super) {
    __extends(Estagiario, _super);
    function Estagiario(nome, cpf, curso) {
        var _this = _super.call(this, nome, cpf) || this;
        _this.curso = curso;
        return _this;
    }
    return Estagiario;
}(Funcionario));
var Atendente = /** @class */ (function (_super) {
    __extends(Atendente, _super);
    function Atendente(nome, cpf, loja) {
        var _this = _super.call(this, nome, cpf) || this;
        _this.loja = loja;
        return _this;
    }
    return Atendente;
}(Funcionario));
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("funcionarioForm");
    var perfilSelect = document.getElementById("perfil");
    var campoExtra = document.getElementById("campoExtra");
    var resultado = document.getElementById("resultado");
    perfilSelect.addEventListener("change", function () {
        campoExtra.innerHTML = "";
        var label = "";
        var id = "";
        switch (perfilSelect.value) {
            case "gerente":
                label = "Departamento";
                id = "departamento";
                break;
            case "estagiario":
                label = "Curso";
                id = "curso";
                break;
            case "atendente":
                label = "Loja";
                id = "loja";
                break;
        }
        if (label) {
            campoExtra.innerHTML = "<label for=\"".concat(id, "\">").concat(label, "</label><input type=\"text\" id=\"").concat(id, "\" required>");
        }
    });
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var nome = document.getElementById("nome").value;
        var cpf = document.getElementById("cpf").value;
        var funcionario = null;
        switch (perfilSelect.value) {
            case "gerente":
                var departamento = document.getElementById("departamento").value;
                funcionario = new Gerente(nome, cpf, departamento);
                break;
            case "estagiario":
                var curso = document.getElementById("curso").value;
                funcionario = new Estagiario(nome, cpf, curso);
                break;
            case "atendente":
                var loja = document.getElementById("loja").value;
                funcionario = new Atendente(nome, cpf, loja);
                break;
        }
        if (funcionario) {
            resultado.innerHTML += "<p>".concat(funcionario.nome, " (").concat(funcionario.cpf, ") - ").concat(perfilSelect.options[perfilSelect.selectedIndex].text, "</p>");
        }
    });
});
