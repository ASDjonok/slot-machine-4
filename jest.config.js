export default {
    transform: {
        "^.+\\.?js$": "babel-jest"
    },
    testEnvironment: "jsdom",
    "transformIgnorePatterns": [
        "/libs/dev/(?!.*)"
    ]
};