const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nome, cargo, sexo, nascimento, civil, logradouro, numero, bairro, cep, cidade, 
            uf, celular, telefone1, telefone2, contato, email, identidade, expedidor, 
            cpf, habilitacao, veiculo } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo = cargo;
        newCandidate.sexo = sexo;
        newCandidate.nascimento = nascimento;
        newCandidate.civil = civil;
        newCandidate.logradouro = logradouro;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cep = cep;
        newCandidate.cidade = cidade;
        newCandidate.uf = uf;
        newCandidate.celular = celular;
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.expedidor = expedidor;
        newCandidate.cpf = cpf;
        newCandidate.habilitacao = habilitacao;
        newCandidate.veiculo = veiculo;
        

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro. Por favor, tente Novamente.');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};
