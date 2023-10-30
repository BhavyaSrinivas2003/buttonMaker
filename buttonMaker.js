function applyButton() {
    let bgColorInputValue = document.getElementById("bgColorInput").value;
    document.getElementById("customButton").style.backgroundColor = bgColorInputValue;
    let fontColorInputValue = document.getElementById("fontColorInput").value;
    document.getElementById("customButton").style.color = fontColorInputValue;
    let fontSizeInputValue = document.getElementById("fontSizeInput").value;
    document.getElementById("customButton").style.fontSize = fontSizeInputValue;
    let fontWeightInputValue = document.getElementById("fontWeightInput").value;
    document.getElementById("customButton").style.fontWeight = fontWeightInputValue;
    let paddingInputValue = document.getElementById("paddingInput").value;
    document.getElementById("customButton").style.padding = paddingInputValue;
    let BorderRadiusInputValue = document.getElementById("borderRadiusInput").value;
    document.getElementById("customButton").style.borderRadius = BorderRadiusInputValue;
}