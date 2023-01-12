$("[openai-tool='execute']").on("click", function () {
    const userPrompt = 'Summarize the following text: ' + $("[openai-tool='user-prompt']").val();
    const parameters = getOpenAIParameters();
    const body = JSON.stringify({
        model: "text-davinci-003",
        prompt: userPrompt,
        max_tokens: parameters.max_tokens,
        temperature: parameters.temperature,
        top_p: parameters.top_p,
        frequency_penalty: parameters.frequency_penalty,
        presence_penalty: parameters.presence_penalty,
    });
    if (openAIAPIKey == null) requestOpenAIConfiguration();
    else makeOpenAIRequest(openAIAPIKey, body);
});