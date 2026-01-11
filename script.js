// Database of toolmarks
const toolmarks = [
  {
    src: "images/screwdriver/screwdriver_01.jpg",
    name: "Flat Screwdriver",
    class: "Impressed",
    individual: "Linear striations, narrow depth",
    visibleFeatures: "Width 5mm, tip marks visible"
  },
  {
    src: "images/hammer/hammer_01.jpg",
    name: "Claw Hammer",
    class: "Impressed",
    individual: "Curved edges, dented surface",
    visibleFeatures: "Depth varies, curved patterns"
  },
  // Add all 50 images similarly
];

// Preview unknown image
const unknownInput = document.getElementById('unknownImage');
const unknownPreview = document.getElementById('unknownPreview');

unknownInput.addEventListener('change', () => {
  const file = unknownInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => unknownPreview.src = e.target.result;
    reader.readAsDataURL(file);
  }
});

// Compare with database
const compareBtn = document.getElementById('compareBtn');
const matchedImage = document.getElementById('matchedImage');
const resultName = document.getElementById('resultName');
const resultClass = document.getElementById('resultClass');
const resultIndividual = document.getElementById('resultIndividual');
const resultVisible = document.getElementById('resultVisible');

compareBtn.addEventListener('click', () => {
  // For demo: pick first match by class
  const unknownClass = "Impressed"; // optionally get from user
  const match = toolmarks.find(t => t.class === unknownClass);

  if (match) {
    matchedImage.src = match.src;
    resultName.innerText = "Tool: " + match.name;
    resultClass.innerText = "Class: " + match.class;
    resultIndividual.innerText = "Individual Features: " + match.individual;
    resultVisible.innerText = "Visible Features: " + match.visibleFeatures;
  } else {
    alert("No match found in database.");
  }
});
