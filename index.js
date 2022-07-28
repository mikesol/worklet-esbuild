const { rando } = require("@nastyox/rando.js");

class WhiteNoiseProcessor extends AudioWorkletProcessor {
	process(inputs, outputs, parameters) {
		const output = outputs[0];
		output.forEach((channel) => {
			for (let i = 0; i < channel.length; i++) {
				channel[i] = rando() * 2 - 1;
			}
		});
		return true;
	}
}

registerProcessor("white-noise-processor", WhiteNoiseProcessor);
