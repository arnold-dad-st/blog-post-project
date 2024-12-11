// Get product id from URL params
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch single product details
fetch(`https://dummyjson.com/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    const productDetails = document.getElementById('product-details');
    
    productDetails.innerHTML = `
      <div class="product-details">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p><strong>Price:</strong> $${product.price}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Description:</strong> ${product.description}</p>
        <p><strong>Rating:</strong> ${product.rating}</p>
        <p><strong>Stock:</strong> ${product.stock}</p>
        <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
        <h4>Reviews:</h4>
        <ul>
          ${product.reviews.map(review => `
            <li>
              <p><strong>${review.reviewerName}</strong>: ${review.comment}</p>
              <p><strong>Rating:</strong> ${review.rating}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  })
  .catch(err => console.error(err));