function toggleCategory(categoryId) {
    const categories = document.querySelectorAll('.category');
    const currentCategory = document.querySelector(`[onclick="toggleCategory('${categoryId}')"]`);

    
    categories.forEach(category => {
        category.classList.remove('expanded');
    });
    currentCategory.classList.add('expanded');
}