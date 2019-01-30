// describe('Main', function() { // describe === what class / arq then function for tests
//   describe('Method A', function() {
//     context('Case 1', function() {
//       it.skip('should happen blablabla', function() { // roda o comando / teste
//         // espera que aconteça
//         // entra de dados / metodos sum(2,2)
//         // o que espera retornar (4) => true || (3) => broken test
//         throw new Error('just an error');
//       });
//     });

//     context('Case 2', function() {
//       it('should happen another thing', function() {
//         throw new Error('just an error');
//       });
//     });
//   });
// });

const { expect } = require('chai');

describe('Main', () => {
  let arr;

  // roda uma vez, antes do bloco
  before(() => {
    // inicia uma conexão no banco aqui
    // criar conjunto de dados
  });

  // roda uma vez, depois do bloco
  after(() => {
    // fecha conexão do banco aqui
    // apagar conjunto de dados
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(() => {
    console.log('afterEach');
  });

  // smoke test => testar tipos ou se existe
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });
});
