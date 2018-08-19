import * as AssetsPlugin from 'assets-webpack-plugin';
import * as path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import {
  Configuration,
  DefinePlugin,
  Entry,
  Plugin,
  Resolve,
  Rule
} from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const ROOT = path.resolve(__dirname, '../');
const OUTPUT_DESTINATION = path.resolve(ROOT, 'dist');
const IS_PROD = process.env.NODE_ENV === 'production';
const ANALYZE = process.env.ANALYZE === 'true';
export const PUBLIC_PATH = '/assets/';

const entry: Entry = {
  app: ['./src/client/index.tsx']
};

const output = IS_PROD
  ? {
      path: OUTPUT_DESTINATION,
      filename: '[name]__[hash].js',
      chunkFilename: '[name]__[hash].js',
      publicPath: PUBLIC_PATH
    }
  : {
      path: OUTPUT_DESTINATION,
      filename: '[name].js',
      chunkFilename: '[name].js',
      publicPath: PUBLIC_PATH
    };

const tsLoader: Rule = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        babelrc: true
      }
    },
    'ts-loader'
  ]
};

// const styleLoader = {
//   test: /\.s?css$/,
//   use: [
//     'style-loader',
//     {
//       loader: 'css-loader',
//       options: {
//         modules: true,
//         importLoaders: 1,
//         localIdentName: '[local]--[hash:base64:5]'
//       }
//     },
//     'postcss-loader',
//     'sass-loader'
//   ]
// };

const assetLoader = {
  test: /\.(jpg|png|woff|woff2|eot|ttf|otf)$/,
  oneOf: [
    {
      resourceQuery: /inline/,
      use: 'url-loader'
    },
    {
      resourceQuery: /external/,
      loader: 'file-loader'
    },
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
};

const svgLoader = {
  test: /\.svg$/,
  use: ['desvg-loader/react', 'svg-loader']
};

const mode = IS_PROD ? 'production' : 'development';

const plugins: Plugin[] = [
  new AssetsPlugin({ path: ROOT }),
  new DefinePlugin({
    'process.env': {
      TARGET: JSON.stringify('browser')
    }
  })
];

if (ANALYZE) {
  plugins.push(new BundleAnalyzerPlugin());
}

const tsconfig = path.relative(ROOT, 'tsconfig.json');

const resolve: Resolve = {
  extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  plugins: [
    new TsconfigPathsPlugin({
      configFile: tsconfig
    })
  ]
};

const config: Configuration = {
  context: ROOT,
  mode,
  entry,
  output,
  module: {
    rules: [
      tsLoader,
      // styleLoader,
      svgLoader,
      assetLoader
    ]
  },
  plugins,
  resolve
};

export default config;
