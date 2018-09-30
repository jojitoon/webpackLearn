
module.exports = {
    "verbose": true,
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/**/*.{js,jsx}"
        ],
        "testMatch": [
        "<rootDir>/src/**/__tests__/**/*.js?(x)",
        "<rootDir>/src/**/?(*.)(spec|test).js?(x)"
        ],
        "testEnvironment": "node",
        "testURL": "http://localhost",
        "transform": {
        "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/cssTransform.js",
        "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/fileTransform.js"
        },
        "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
        "/index.js/"
        ],
        "moduleNameMapper": {
        "^react-native$": "react-native-web"
        },
        "moduleFileExtensions": [
            "web.js",
            "js",
            "json",
            "web.jsx",
            "jsx",
            "node"
            ]
};