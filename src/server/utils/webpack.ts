export const getWebpackAssets = (): object | null => {
  try {
    return require('../../../webpack-assets.json');
  } catch {
    return null;
  }
};
