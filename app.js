const hexCodesInput = document.getElementById("hex-codes");
const colorGrid = document.getElementById("color-grid");
const visualiseBtn = document.getElementById("visualise-btn");

visualiseBtn.addEventListener("click", () => {
  let hexInput = hexCodesInput.value.replace(
    /^[^A-Za-z0-9#]+|[^A-Za-z0-9]+$/g,
    ""
  );
  const hexCodes = hexInput
    .split(/[\n,:]+/)
    .map((code) => code.trim())
    .filter(Boolean);

  colorGrid.innerHTML = "";

  hexCodes.forEach((hexCode) => {
    const colorElement = document.createElement("div");
    colorElement.classList.add(
      "relative",
      "w-40",
      "h-40",
      "min-w-fit",
      "min-h-fit",
      "rounded-md",
      "overflow-hidden",
      "transition",
      "duration-200",
      "transform",
      "hover:scale-110",
      "hover:shadow-md",
      "flex",
      "items-center",
      "justify-center"
    );
    colorElement.style.backgroundColor = hexCode;

    const overlayElement = document.createElement("div");
    overlayElement.classList.add(
      "text-base",
      "text-white",
      "mix-blend-difference",
      "absolute",
      "inset-0",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "text-xl",
      "font-bold",
      "text-center",
      "bg-black",
      "bg-opacity-50",
      "opacity-0",
      "hover:opacity-100",
      "transition",
      "duration-200",
      "ease-in-out"
    );
    overlayElement.classList.add("opacity-0", "hover:opacity-100");
    overlayElement.textContent = `${hexCode}`;

    colorElement.appendChild(overlayElement);
    colorGrid.appendChild(colorElement);
  });
});

function rgbFromHex(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}
