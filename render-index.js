export default function(props) {
return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<script src="jspm_packages/system.js"></script>
	<script src="config.js"></script>
	<script>
		System.import('main');
	</script>
	<title>${props.title}</title>
</head>
<body>
	<section id="app">${props.app}</section>
</body>
</html>`;
};
