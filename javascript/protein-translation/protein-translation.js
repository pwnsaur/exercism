const proteinMap = {
	Methionine: 'AUG',
	Phenylalanine: ['UUC', 'UUU'],
	Leucine: ['UUG', 'UUA'],
	Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
	Tyrosine: ['UAU', 'UAC'],
	Cysteine: ['UGU', 'UGC'],
	Tryptophan: 'UGG',
	STOP: ['UAA', 'UAG', 'UGA'],
};

const translate = rna => {
	if (!Array(rna).length) return;

	let proteins = [];
	const codons = String(rna).match(/.{1,3}/g);
	console.log(codons);
	for (const codon of codons) {
		for (const protein in proteinMap) {
			if (proteinMap['STOP'].includes(codon)) {
				return proteins;
			}
			if (proteinMap[protein].includes(codon)) {
				proteins.push(protein);
			}
		}
	}

	return proteins;
};

console.log(translate(['AUGUUUUCUUAAAUG']));
