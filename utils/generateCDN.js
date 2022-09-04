// jsDelivr
// https://www.jsdelivr.com/
// https://github.com/jsdelivr/jsdelivr
/**
 * @param {string} url: a url of the specified file in GitHub repository
 * @param {boolean} min: minified version file
 * @returns a url
 * @format https://cdn.jsdelivr.net/gh/userName/repositoryName@version/filePath
 * @example https://cdn.jsdelivr.net/gh/userName/repositoryName@version/filePath
 */
function generateJSDelivr(url, min = false) {
    if (min) {
        const path = new URL(url).pathname.split('/');
        path.splice(3, 2);
        return 'https://cdn.jsdelivr.net/gh' + path.join('/').replace(/(\.[^.]+)$/, '.min$1');
    }
    else {
        const path = new URL(url).pathname.split('/');
        path.splice(3, 2);
        return 'https://cdn.jsdelivr.net/gh' + path.join('/');
    }
}

console.log(generateJSDelivr('https://github.com/321paranoiawhy/ExquisiteUI/blob/master/components/Button/button.js'));

// // https://cdn.jsdelivr.net/gh/321paranoiawhy/ExquisiteUI/components/Progress-Bar/progress-bar.js
// console.log(generateJSDelivr('https://github.com/321paranoiawhy/ExquisiteUI/blob/master/components/Progress-Bar/progress-bar.js'));

// // https://cdn.jsdelivr.net/gh/321paranoiawhy/ExquisiteUI/components/Progress-Bar/progress-bar.min.js
// console.log(generateJSDelivr('https://github.com/321paranoiawhy/ExquisiteUI/blob/master/components/Progress-Bar/progress-bar.js', true));


// unpkg
// https://unpkg.com/
// https://github.com/mjackson/unpkg
/**
 * @param {string} packageName
 * @param {string} packageVersion
 * @param {string} filePath
 * @returns a url which shows all the files in the package
 *          so you can choose files you need
 * @format: https://unpkg.com/packageName@packageVersion/filePath
 * @example generateUNPKG('log-so-easy'); // https://unpkg.com/log-so-easy@latest/
 * @example generateUNPKG('vue3-prism'); // https://unpkg.com/vue3-prism@latest/
 * @example generateUNPKG(''react', '@^16''); // https://unpkg.com/react@^16/
 */
function generateUNPKG(packageName, packageVersion, filePath) {
    packageVersion = packageVersion || '@latest';
    filePath = filePath || '/';
    return `https://unpkg.com/${packageName}${packageVersion}${filePath}`;
}

function fullScriptElement(url, min = false) {
    return `<script type="module" src=${generateJSDelivr(url, min)}></script>`;
}

console.log(fullScriptElement('https://github.com/321paranoiawhy/ExquisiteUI/blob/master/components/Tabs/tabs.js'));