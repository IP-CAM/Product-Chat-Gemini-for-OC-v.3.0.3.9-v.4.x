
$(document).ready(function() {
    const API_KEY = $("#input-api_key").val();
    if (API_KEY)
    listModels(API_KEY);
})

function listModels(API_KEY) {
    $.ajax({
        url: `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`,
        type: "GET",
        contentType: "application/json",
        success: function(data) {
            // console.log("AI Response:", data);
            let selectModel = $("#module_product_chat_gemini_select_model");

            $("#module_product_chat_gemini_select_model").empty();
            $.each(data.models, function(index, model) {
                if (selectModel.data("model") == model.name) {
                    selectModel.append(`<option value="${model.name}" selected>${model.displayName}</option>`);
                }
                selectModel.append(`<option value="${model.name}">${model.displayName}</option>`);
            });
        },
        error: function(xhr, status, error) {
            console.error("AI Request Error:", error);
        }
    });
}
