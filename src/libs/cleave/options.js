export default {
  phone: {
    delimiters: ['(', ') ', '-'],
    blocks: [0, 2, 5, 4],
  },
  cnpj: {
    delimiters: ['.', '.', '/', '-'],
    blocks: [2, 3, 3, 4, 2],
  },
  cpf: {
    delimiters: ['.', '.', '-'],
    blocks: [3, 3, 3, 2],
  },
  cep: {
    delimiters: ['-'],
    blocks: [5, 3],
  },
  date: {
    blocks: [2, 2, 4],
    delimiters: ['/', '/'],
  },
  decimal: {
    numeral: true,
    numeralThousandsGroupStyle: 'none',
    numeralDecimalMark: ',',
  },
}