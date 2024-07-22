import pug from "pug";
import pugTemplate from "./1.pug?raw";

// Function to ensure each element is on a single line
// Function to format HTML with each tag on a new line
function formatHTMLToOneLine(html) {
  // Regular expression to match HTML tags, including self-closing tags and attributes
  const regex = /<[^>]*>/g;
  const formattedHTML = html
    .split("\n")
    .filter((line) => line.trim()) // Remove empty lines
    .join(" ")
    .replace(regex, (match) => `\n${match}\n`)
    .replace(/\n\s*\n/g, "\n") // Remove extra new lines
    .trim();

  return formattedHTML;
}

export const load = async () => {
	let pugHTML = pug.render(pugTemplate, {
		pretty: true,
	});

  let formattedHTML = formatHTMLToOneLine(pugHTML);

	return {
		pugHTML: formattedHTML,
	};
};
