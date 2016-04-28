import path from 'path';
import os from 'os';

function getFilePathFromUrl(fileUrl) {
	let fileSchemaAndHostRegExp = (os.platform() === 'win32') ? '^file://[^/]*/' : '^file://[^/]*';
	let filePath = fileUrl.replace(new RegExp(fileSchemaAndHostRegExp), '');
	return path.normalize(filePath);
}

export const PROJECT_ROOT_PATH = path.join(path.dirname(getFilePathFromUrl(__moduleName)), '..', '..');

export default function(relativePathFromProjectRoot) {
	return path.join(PROJECT_ROOT_PATH, relativePathFromProjectRoot || '');
}
