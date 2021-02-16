module.exports = {
  "jest": {
    "moduleDirectories": [
      "node_modules",
      "src"
    ],
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "roots": [
      "src"
    ],
    "testRegex": ".spec.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "testEnvironment": "node",
    "moduleNameMapper": {
      "src/(.*)": "<rootDir>/src/$1"
    }
  }
}