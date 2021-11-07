const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    sexo: { type: String, unique: false, required: false },
    nascimento: { type: String, unique: false, required: true },
    civil: { type: String, unique: false, required: false },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    telefone1: { type: String, unique: false, required: false },
    telefone2: { type: String, unique: false, required: false },
    contato: { type: String, unique: false, required: false },
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: false, required: true },
    expedidor: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    habilitacao: { type: String, unique: false, required: false },
    veiculo: { type: String, unique: false, required: false }
}, {  
    
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
