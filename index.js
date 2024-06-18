const cartItems = [];
  
      function addToCart(productName, productPrice, productImage) {
        const item = {
          name: productName,
          price: productPrice,
          image: productImage
        };
        cartItems.push(item);
        showNotification(productName + ' has been added to your cart.');
        updateCartUI();
      }
  
      function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `<img src="${item.image}" alt="${item.name}" width="50" height="50"> ${item.name} - Php ${item.price}`;
          cartItemsContainer.appendChild(li);
        });
      }

      function showNotification(message, autoDismiss = true) {
        const notification = document.getElementById('notification');
        notification.innerHTML = message;
        notification.style.display = 'block';
      
        if (autoDismiss) {
          setTimeout(() => {
            hideNotification();
          }, 3000); // Hide after 3 seconds
        }
      }
      
      function hideNotification() {
        const notification = document.getElementById('notification');
        notification.style.display = 'none';
      }
