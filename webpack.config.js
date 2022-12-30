import path from 'path';
import webpack from 'webpack';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
      },
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'webpack Boilerplate', template: path.resolve(__dirname, './src/template.html'), // template file      
        filename: 'index.html', // output file  
          
    }),
    new CleanWebpackPlugin(),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            // JavaScript      
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // Images      
            {        
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,        
                type: 'asset/resource',      
            },
            // Fonts and SVGs      
            {        
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,        
                type: 'asset/inline',      
            },
            // CSS, PostCSS, and Sass      
            {        
                test: /\.(scss|css)$/,        
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],      
            },
        ],
    },
}