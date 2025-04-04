interface IPessoa {
    nome: string;
    cpf: string;
}

abstract class Funcionario implements IPessoa {
    nome: string;
    cpf: string;

    constructor(nome: string, cpf: string) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Gerente extends Funcionario {
    departamento: string;

    constructor(nome: string, cpf: string, departamento: string) {
        super(nome, cpf);
        this.departamento = departamento;
    }
}

class Estagiario extends Funcionario {
    curso: string;

    constructor(nome: string, cpf: string, curso: string) {
        super(nome, cpf);
        this.curso = curso;
    }
}

class Atendente extends Funcionario {
    loja: string;

    constructor(nome: string, cpf: string, loja: string) {
        super(nome, cpf);
        this.loja = loja;
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("funcionarioForm") as HTMLFormElement;
    const perfilSelect = document.getElementById("perfil") as HTMLSelectElement;
    const campoExtra = document.getElementById("campoExtra") as HTMLDivElement;
    const resultado = document.getElementById("resultado") as HTMLDivElement;

    perfilSelect.addEventListener("change", () => {
        campoExtra.innerHTML = "";
        let label = "";
        let id = "";
        
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
            campoExtra.innerHTML = `<label for="${id}">${label}</label><input type="text" id="${id}" required>`;
        }
    });

    form.addEventListener("submit", (event) => {
        
        event.preventDefault();

        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const cpf = (document.getElementById("cpf") as HTMLInputElement).value;
        let funcionario: Funcionario | null = null;

        switch (perfilSelect.value) {
            case "gerente":
                const departamento = (document.getElementById("departamento") as HTMLInputElement).value;
                funcionario = new Gerente(nome, cpf, departamento);
                break;
            case "estagiario":
                const curso = (document.getElementById("curso") as HTMLInputElement).value;
                funcionario = new Estagiario(nome, cpf, curso);
                break;
            case "atendente":
                const loja = (document.getElementById("loja") as HTMLInputElement).value;
                funcionario = new Atendente(nome, cpf, loja);
                break;
        }

        if (funcionario) {
            resultado.innerHTML += `<p>${funcionario.nome} (${funcionario.cpf}) - ${perfilSelect.options[perfilSelect.selectedIndex].text}</p>`;
        }
    });
});
