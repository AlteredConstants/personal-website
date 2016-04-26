export default function(props) {
return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	${props.head.title}
	${props.head.link}
	<script src="jspm_packages/system.js"></script>
	<script src="jspm.browser.js"></script>
	<script src="jspm.config.js"></script>
	<script>
		System.import('ac/main');
	</script>
</head>
<body>
	<div id="react-content">${props.app}</div>
</body>
</html>`;
};
