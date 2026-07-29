declare const Prism: any;

type CodePage = {
	sourceText: string,
	button: Element,
	view: Element,
}

const codeElements = {
	coderHtml: {
		sourceText: await getFileContent('/code/html/coder.html'),
		button: queryExistingElement('#btn-tab-html'),
		view: queryExistingElement('#coder-html'),
	},
	stilCss: {
		sourceText: await getFileContent('/code/css/stil.css'),
		button: queryExistingElement('#btn-tab-css'),
		view: queryExistingElement('#stil-css'),
	},
	mainTs: {
		sourceText: await getFileContent('/code/ts/coder.ts'),
		button: queryExistingElement('#btn-tab-ts'),
		view: queryExistingElement('#main-ts'),
	}
} satisfies Record<string, CodePage>;
type TabKey = keyof typeof codeElements;

renderSourceCode();

async function getFileContent(path: string): Promise<string> {
	return await fetch(path).then(r => r.text());
}

function queryExistingElement(selector: string): Element {
	const element = document.querySelector(selector);
	if (!element) {
		throw new TypeError(`Could not find element for ${selector}. Element is null!`);
	}
	return element;
}

function renderSourceCode(): void {
	(Object.keys(codeElements) as TabKey[]).forEach(key => {
		codeElements[key].view.textContent = codeElements[key].sourceText;
		Prism.highlightElement(codeElements[key].view);
	});
}