/**
 *
 * @type {import("@lobehub/i18n-cli").Config}
 */
module.exports = {
  markdown: {
    entry: ['example/docs'],
    entryLocale: 'zh-CN',
    entryExtension: '.zh-CN.md',
    outputLocales: ['en-US'],
  },
  modelName: 'gpt-3.5-turbo-1106',
};
