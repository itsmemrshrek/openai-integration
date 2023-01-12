let openAIAPIKey = null; //OpenAI API key, initially set to null
let openAIMaxTokens = 64; //Maximum number of tokens (words or word pieces) to generate
let openAITemperature = 0; //temperature parameter of the OpenAI API, which controls the randomness of the generated text. 0 corresponds to the least random.
let openAITopP = 1.0; //top_p parameter of the OpenAI API, which controls the proportion of the mass of the distribution that the API considers when generating text. 1 corresponds to consider all the mass.
let openAIFrequencyPenalty = 0.0; //frequency_penalty parameter of the OpenAI API, which reduces the likelihood of tokens that appear often in the input. 0 corresponds to no penalty.
let openAIPresencePenalty = 0.0; //presence_penalty parameter of the OpenAI API, which reduces the likelihood of tokens that are present in the input. 0 corresponds to no penalty.

// Attempt to get the parameters from local storage
if (openAIAPIKey = localStorage.getItem("openai-api-key"));
if (openAIMaxTokens = localStorage.getItem("openai-api-max-tokens"));
if (openAITemperature = localStorage.getItem("openai-api-temperature"));
if (openAITopP = localStorage.getItem("openai-api-max-top-p"));
if (openAIFrequencyPenalty = localStorage.getItem("openai-api-frequency-penalty"));
if (openAIPresencePenalty = localStorage.getItem("openai-api-presence-penalty"));

// Returns an object with the OpenAI parameter fields
function getOpenAIParameters() {
    return {
        "max_tokens": openAIMaxTokens,
        "temperature": openAITemperature,
        "top_p": openAITopP,
        "frequency_penalty": openAIFrequencyPenalty,
        "presence_penalty": openAIPresencePenalty
    };
}

// Requests user to update the OpenAI configuration
function requestOpenAIConfiguration() {
    $("[openai-configuration]").css("display", $("[openai-configuration]").attr("openai-configuration"));
}

function initializeOpenAIConfiguration() {
    $("[openai-property='api-key']").val(openAIAPIKey);
    $("[openai-property='max-tokens']").val(openAIMaxTokens);
    $("[openai-property='temperature']").val(openAITemperature);
    $("[openai-property='top-p']").val(openAITopP);
    $("[openai-property='frequency-penalty']").val(openAIFrequencyPenalty);
    $("[openai-property='presence-penalty']").val(openAIPresencePenalty);
}

function setOpenAIConfiguration() {
    openAIAPIKey = localStorage.getItem("openai-api-key") = $("[openai-property='api-key']").val();
    openAIMaxTokens = localStorage.getItem("openai-api-max-tokens") = $("[openai-property='max-tokens']").val();
    openAITemperature = localStorage.getItem("openai-api-temperature") = $("[openai-property='temperature']").val();
    openAITopP = localStorage.getItem("openai-api-max-top-p") = $("[openai-property='top-p']").val();
    openAIFrequencyPenalty = localStorage.getItem("openai-api-frequency-penalty") = $("[openai-property='frequency-penalty']").val();
    openAIPresencePenalty = localStorage.getItem("openai-api-presence-penalty") = $("[openai-property='presence-penalty']").val();
}

// Sends a post request to the OpenAI API with the provided body and the API key
function makeOpenAIRequest(openAIAPIKey, body) {
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + openAIAPIKey
        },
        body: body
    })
        .then(response => response.text()) // parse the response as text
        .then(result => function () {
            console.log(result); // logs the result to the console
        })
        .catch(error => console.log('error', error)); // logs an error message to the console if something goes wrong
}

jQuery(window).load(function () {
    initializeOpenAIConfiguration();
    if (openAIAPIKey == null) requestOpenAIConfiguration(); // requests for OpenAI configuration if openAIAPIKey is not set
});

$("[openai-tool='configure']").on("click", function () {
    requestOpenAIConfiguration();
});