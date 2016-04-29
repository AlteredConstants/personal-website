import path from 'path';
import os from 'os';

function getFilePathFromUrl(fileUrl) {
	const fileSchemaAndHostRegExp = (os.platform() === 'win32') ? '^file://[^/]*/' : '^file://[^/]*';
	const filePath = fileUrl.replace(new RegExp(fileSchemaAndHostRegExp), '');
	return path.normalize(filePath);
}

const moduleDirectoryPath = path.dirname(getFilePathFromUrl(__moduleName));
export const PROJECT_ROOT_PATH = path.join(moduleDirectoryPath, '..', '..');

export default function (relativePathFromProjectRoot) {
	return path.join(PROJECT_ROOT_PATH, relativePathFromProjectRoot || '');
}
