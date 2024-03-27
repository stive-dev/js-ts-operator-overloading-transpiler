import path from 'node:path'

export default (env, argv) => {
  return {
    mode: 'production',
    watch: false,
    target: 'node',
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src')
      }
    },
    entry: {
      app: path.resolve(process.cwd(), 'app.ts')
    },
    output: {
      filename: 'transpiler.cjs'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-typescript']
              }
            }
          ]
        }
      ]
    }
  }
}
