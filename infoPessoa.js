const pessoa = {
  nome: '',
  idade: '',
  solteiro: '',
  hobbies: [''],
};

pessoa.nome = 'Ana';
pessoa.idade = 22;
pessoa.solteiro = false;
pessoa.hobbies = ['Ler', 'Assistir', 'Vôlei'];

//console.log(pessoa);

pessoa.endereco = {
  rua: '',
  cidade: '',
  estado: '',
};

pessoa.endereco.rua = 'Rua das naçõoes';
pessoa.endereco.cidade = 'João Pessoa';
pessoa.endereco.estado = 'Paraíba';

function mostrarInfoPessoa(pessoa) {
  console.log('Informações da pessoa:');
  console.log(`Nome: ${pessoa.nome} | (${typeof pessoa.nome})`);
  console.log(`Idade: ${pessoa.idade} | (${typeof pessoa.idade})`);
  console.log(`Solteiro: ${pessoa.solteiro} | (${typeof pessoa.solteiro})`);
  console.log(`Hobbies: ${pessoa.hobbies} | (${typeof pessoa.hobbies})`);
  console.log(
    `Endereço: ${pessoa.endereco.estado}, ${pessoa.endereco.cidade}, ${pessoa.endereco.rua}`
  );
}

mostrarInfoPessoa(pessoa);
