import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({...form, logradouro: address.data.logradouro})
  };

  const createCandidate = async (candidate) => {
    
      const user = await axios.post('https://localhost:3000/register', form);
      if (user.status === 200) {
        console.log('Enviado.');
      }
      console.log ('Erro.') ;
    };

  const [form, setForm] = useState({
    nome: '',
    cargo: '',
    sexo: '',
    nascimento: '',
    civil: '',
    logradouro: '',
    numero:'',
    bairro: '',
    cep: '',
    cidade: '',
    uf: '',
    celular: '',
    telefone1: '',
    telefone2: '',
    contato: '',
    email: '',
    identidade: '',
    expedidor: '',
    cpf: '',
    habilitacao: '',
    veiculo: '',
    
  });


  useEffect(()=>{
    console.log(form)
  }, [form]);


  const [cpfError, setCpfError] = useState(false);

  
  return ( 
  
    <section>
    <header>
    <h2 className="topTitle">Formulário de Cadastro</h2>
    <h4 className="topTitle">Preencha o formulário de cadastro da JobsNET e candidate-se às vagas de emprego desejadas.</h4>
    </header>
    <h4 className="topTitle">Dados Pessoais</h4>
    <form>
    <div>
    <label>Nome Completo:<span>*</span></label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, nome: e.target.value });
     }} value={form.nome} required></input>
    </div>

    <div>
    <label>Cargo Pretendido:<span>*</span></label>
    <input class="inputForm" onChange={(e) => {
     setForm({ ...form, cargo: e.target.value });
    }} value={form.cargo} required></input>
    </div>
   
    <div>
    <label>Sexo:</label>
    <select className="inputForm" onChange={(e) => {
     setForm({ ...form, sexo: e.target.value });
    }} value={form.sexo}><option value="" disabled="disabled">Selecionar</option>
    <option value="Feminino">Feminino</option>
    <option value="Masculino">Masculino</option>
    <option value="Outro">Outro</option>
    <option value="Prefiro Não Informar">Prefiro Não Informar</option></select>
    </div>

    <div>
     <label>Data de Nascimento:<span>*</span></label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, nascimento: e.target.value });
    }} value={form.nascimento} placeholder="DD/MM/AAAA" required></input>
    </div>

    <div>
    <label>Estado Civil:</label>
    <select className="inputForm" onChange={(e) => {
     setForm({ ...form, civil: e.target.value });
    }} value={form.civil}><option value="" disabled="disabled">Selecionar</option>
    <option value="Solteiro(a)">Solteiro(a)</option>
    <option value="Casado(a)">Casado(a)</option>
    <option value="União Estável">União Estável</option>
    <option value="Viúvo(a)">Viúvo(a)</option></select>
    </div>
    
    <div>
    <label>Logradouro:<span>*</span></label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, logradouro: e.target.value });
    }} value={form.logradouro} required></input>
    </div>

    <div>  
    <label>Número:<span>*</span></label>
     <input className="inputForm" onChange={(e) => {
     setForm({ ...form, numero: e.target.value });
    }} value={form.numero} required></input>
    </div>

    <div>
    <label>Bairro:<span>*</span></label>
     <input className="inputForm" onChange={(e) => {
     setForm({ ...form, bairro: e.target.value });
    }} value={form.bairro} required></input>
    </div>

    <div>
    <label>Cep:<span>*</span></label>
    <input className="inputForm" onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep} placeholder="00000-000" required></input>
    </div>

    <div>
    <label>Cidade:<span>*</span></label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, cidade: e.target.value });
    }} value={form.cidade} required></input>
    </div>

    <div>
    <label>Estado:</label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, uf: e.target.value });
    }} value={form.uf} placeholder="UF"></input>
    </div>
    
    <div> 
     <label>Celular:<span>*</span></label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, celular: e.target.value });
    }} value={form.celular} placeholder="(00)00000-0000" required></input>
    </div>

    <div>
    <label>Telefone 1:</label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, telefone1: e.target.value });
    }} value={form.telefone1} placeholder="(00)0000-0000"></input>
    </div>

    <div>
    <label>Telefone 2:</label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, telefone2: e.target.value });
    }} value={form.telefone2} placeholder="(00)0000-0000"></input>
    </div>
    
    <div>
    <label>Contato:</label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, contato: e.target.value });
     }} value={form.contato}></input>
    </div>

    <div>
    <label>E-mail:<span>*</span></label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, email: e.target.value });
    }} value={form.email} required placeholder="nome@email.com"></input>
    </div>
    
    <h4 className="topTitle">Documentos</h4>
        
    <div>
    <label>Identidade:</label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, identidade: e.target.value });
     }} value={form.identidade}></input>
    </div>

    <div>
    <label>Órgão Expedidor:</label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, expedidor: e.target.value });
    }} value={form.expedidor} placeholder="UF"></input>
    </div>

    <div> 
    <label>CPF:<span>*</span></label>
    <input className="inputForm" onChange={(e) => {
     setForm({ ...form, cpf: e.target.value });
    }} value={form.cpf} placeholder="000.000.000-00" required></input>
    </div>

    <div>
    <label>Tipo de Habilitação:</label>
    <select className="inputForm" onChange={(e) => {
     setForm({ ...form, habilitacao: e.target.value });
    }} value={form.habilitacao}><option value="" disabled="disabled">Selecionar</option>
    <option value="Não possuo">Não possuo</option>
    <option value="Tipo A">Tipo A</option>
    <option value="Tipo AB">Tipo AB</option>
    <option value="Tipo B">Tipo B</option>
    <option value="Tipo C">Tipo C</option>
    <option value="Tipo D">Tipo D</option>
    <option value="Tipo E">Tipo E</option></select>
    </div>

    <div>
   <label>Possui Carro?</label>
    <select className="inputForm" onChange={(e) => {
     setForm({ ...form, veiculo: e.target.value });
    }} value={form.veiculo}><option value="" disabled="disabled">Selecionar</option>
    <option value="Sim">Sim</option>
    <option value="Não">Não</option>
    <option value="Prefiro Não Informar">Prefiro Não Informar</option></select>
    </div>

    <div>
   <button onClick={() => createCandidate()}>Enviar</button>
   
    </div>
    </form>
  <footer className="topTitle">JobsNet 2021 - Todos os direitos reservados.</footer>
  </section>

  );
  };


  export default App;
