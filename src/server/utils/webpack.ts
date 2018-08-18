export const getWebpackAssets = (): object | null => {
  try {
    const assets = require('../../../webpack-assets.json');
    return assets;
  } catch {
    return null;
  }
};
