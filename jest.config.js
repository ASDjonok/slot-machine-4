export default {
    transform: {
        "^.+\\.?js$": "babel-jest"
    },
    testEnvironment: "node",
    "transformIgnorePatterns": [
        "/libs/dev/(?!.*)"
    ]
};