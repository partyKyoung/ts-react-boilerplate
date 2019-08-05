module.exports = {
  env: {
    browser: true
  },
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'react-app', 'airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ], // jsx 문법이 들어가는 파일명은 extensions 배열 안의 확장자로 끝나야 한다.
  },
  "settings": {
    "import/resolver": {
      node: {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      },
      alias: { // webpack에서 import 경로를 간소화 하기 위해 alias 옵션을 사용했는데 eslint에서 인식을 못해서 인식할 수 있도록 해줌.
        map: [
          ['~', './src']
        ],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}