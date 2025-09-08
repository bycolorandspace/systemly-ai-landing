export const scrollToSection = (sectionId: string) => {
  // Remove # if present
  const targetId = sectionId.replace("#", "");
  const element = document.getElementById(targetId);

  if (element) {
    // Calculate offset for your fixed header (adjust this value)
    const headerOffset = 100; // Your header + some padding
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
