/**
 * Converts a text description into an array of bullet point strings.
 * Splits the text by semicolons to create meaningful bullet points.
 *
 * @param {string} text - The text description to convert
 * @returns {string[]} - Array of bullet point strings
 */
const convertToBulletPoints = (text) => {
	if (!text) return [];

	// Split by semicolons and filter out empty strings
	const sentences = text
		.split(/[;]+/)
		.map((s) => s.trim())
		.filter((s) => s.length > 0);

	return sentences;
};

export default convertToBulletPoints;
