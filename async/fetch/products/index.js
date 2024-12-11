// Fetch all products
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
  const productList = document.getElementById('product-list');
  data.products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    
    // Create product item content
    productItem.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <a href="product-details.html?id=${product.id}" class="button">View Details</a>
    `;
    
    productList.appendChild(productItem);
  });
})
.catch(err => console.error(err));