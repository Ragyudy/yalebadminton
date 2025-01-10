export function importImages(): Record<
  string,
  Record<string, Record<string, string>>
> {
  const images = import.meta.glob("/src/assets/img/gallery/**/**/*.jpg", {
    eager: true,
  });

  const categorizedImages: Record<
    string,
    Record<string, Record<string, string>>
  > = {};

  for (const [path, module] of Object.entries(images)) {
    const relativePath = path
      .replace("/src/assets/img/gallery/", "")
      .replace(".jpg", "");
    const parts = relativePath.split("/");

    const [category, subcategory, ...imageParts] = parts;
    const imageName = imageParts.join("/");

    // Initialize the category and subcategory if not present
    if (!categorizedImages[category]) {
      categorizedImages[category] = {};
    }
    if (!categorizedImages[category][subcategory]) {
      categorizedImages[category][subcategory] = {};
    }

    // Assign the image to the corresponding subcategory
    categorizedImages[category][subcategory][imageName] = (
      module as { default: string }
    ).default;
  }

  return categorizedImages;
}
