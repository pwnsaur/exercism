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

export const translate = rna => {
	if (!rna) return [];

	let proteins = [];
	const codons = String(rna).match(/.{1,3}/g);
	for (const codon of codons) {
		for (const protein in proteinMap) {
			if (proteinMap['STOP'].includes(codon)) {
				return proteins;
			}
			if (proteinMap[protein].includes(codon)) {
				proteins.push(protein);
			}
		}
		//check for invalid
		let check = '';
		Object.keys(proteinMap).map(protein => {
			if (proteinMap[protein].includes(codon)) {
				check = protein;
			}
		});
		if (!check) throw new Error('Invalid codon');
	}
	return proteins;
};
