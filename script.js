document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("address-form");
    const cepInput = document.getElementById("cep");
    const logradouroInput = document.getElementById("logradouro");
    const numeroInput = document.getElementById("numero");
    const ufInput = document.getElementById("uf");

    // 1. Máscara automática para o campo CEP
    cepInput.addEventListener("input", (event) => {
        let value = event.target.value.replace(/\D/g, ""); // Remove tudo que não for dígito
        value = value.replace(/^(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen após o 5º dígito
        event.target.value = value.slice(0, 9); // Limita o tamanho total para 9 caracteres (00000-000)
    });

    // 2. Converte o texto do campo UF para maiúsculo
    ufInput.addEventListener("input", (event) => {
        event.target.value = event.target.value.toUpperCase();
    });

    // 3. Validação no envio do formulário
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação do CEP
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepRegex.test(cepInput.value)) {
            alert("Erro: CEP inválido! Use o formato 00000-000.");
            return;
        }

        // Validação do Logradouro
        if (logradouroInput.value.trim().length < 5) {
            alert("Erro: O Logradouro deve conter no mínimo 5 caracteres.");
            return;
        }

        // Validação do Número
        const numeroRegex = /^\d+$/;
        if (!numeroRegex.test(numeroInput.value)) {
            alert("Erro: O campo Número deve conter apenas dígitos numéricos.");
            return;
        }
        
        // Validação da UF
        const ufRegex = /^[A-Z]{2}$/;
        if (!ufRegex.test(ufInput.value)) {
            alert("Erro: UF inválida! Deve conter exatamente 2 letras maiúsculas (ex: RJ, SP).");
            return;
        }

        // Se todas as validações passarem
        alert("Endereço cadastrado com sucesso");
        
        // Opcional: Limpar o formulário após o sucesso
        // form.reset(); 
    });
});