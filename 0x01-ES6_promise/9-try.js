export default function guardrail(mathFunction) {
	const queue = [];
	try {
		const result = mathFunction();
		queue.push(result);
	}
	catch (error) {
		queue.push(`Erro: ${error.message}`);
	}

}
