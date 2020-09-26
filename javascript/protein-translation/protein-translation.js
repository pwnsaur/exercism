const translate = (rnaSeq = '') => {
  const proteinMap = {
    Methionine: ['AUG'],
    Phenylalanine: ['UUU', 'UUC'],
    Leucine: ['UUA', 'UUG'],
    Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
    Tyrosine: ['UAU', 'UAC'],
    Cysteine: ['UGU', 'UGC'],
    Tryptophan: ['UGG'],
    STOP: ['UAA', 'UAG ', 'UGA']
  };

  const proteins = [];
  const codons = rnaSeq.match(/.{1,3}/g) || [];

  for (let i = 0; i < codons.length; i++) {
    for (let key in proteinMap) {
      if (key == 'STOP') {
        console.log('STOP');
        break;
      } else {
        console.log(key);
      }
    }
  }

  return proteins;
};

console.log(translate('AUGUUUUUA'));
