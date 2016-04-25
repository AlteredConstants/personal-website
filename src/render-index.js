export default function(props) {
	let title = props.head ? props.head.title.toString() : '';
return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	${title}
	<script src="jspm_packages/system.js"></script>
	<script src="config.js"></script>
	<script>
		System.import('main');
	</script>
</head>
<body>
	<section id="app">${props.app}</section>
</body>
</html>`;
};
