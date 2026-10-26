/**
 * GEISO ENTERPRISE - Main JavaScript Application
 * Designed and Developed by CCYI GLOBAL ENTERPRISE
 */

(function () {
  'use strict';

  // Application State
  const AppState = {
    cart: JSON.parse(localStorage.getItem('geiso_cart_items') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('geiso_wishlist') || '[]'),
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    appliedCoupon: null,
    currentHeroSlide: 0,
    heroTimer: null
  };

  // Helper Functions
  const formatCurrency = (amount) => {
    return `${STORE_CONFIG.currency}${Number(amount).toFixed(2)}`;
  };

  const saveCart = () => {
    localStorage.setItem('geiso_cart_items', JSON.stringify(AppState.cart));
    updateCartUI();
  };

  const saveWishlist = () => {
    localStorage.setItem('geiso_wishlist', JSON.stringify(AppState.wishlist));
    updateWishlistUI();
  };

  // Toast Notification System
  const showToast = (message, type = 'primary', icon = 'bi-check-circle-fill') => {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="bi ${icon}"></i><span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // =========================================================================
  // Hero Slider
  // =========================================================================
  const initHeroSlider = () => {
    const titleEl = document.getElementById('heroTitle');
    const subEl = document.getElementById('heroSubtitle');
    const descEl = document.getElementById('heroDesc');
    const badgeEl = document.getElementById('heroBadge');
    const imgEl = document.getElementById('heroImage');
    const dotsContainer = document.getElementById('heroDots');
    const pillTitle = document.getElementById('pillProductTitle');
    const pillBadge = document.getElementById('pillProductBadge');

    if (!titleEl || !HERO_SLIDES.length) return;

    // Render Dots
    dotsContainer.innerHTML = HERO_SLIDES.map((_, idx) => `
      <div class="hero-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}"></div>
    `).join('');

    const showSlide = (idx) => {
      AppState.currentHeroSlide = (idx + HERO_SLIDES.length) % HERO_SLIDES.length;
      const slide = HERO_SLIDES[AppState.currentHeroSlide];

      // Fade transition effect
      imgEl.style.opacity = '0';
      imgEl.style.transform = 'scale(0.92)';

      setTimeout(() => {
        titleEl.innerHTML = slide.title;
        subEl.textContent = slide.subtitle;
        descEl.textContent = slide.description;
        badgeEl.innerHTML = `<i class="bi bi-patch-check-fill"></i> ${slide.badge}`;
        imgEl.src = slide.image;
        imgEl.alt = slide.title;
        if (pillTitle) pillTitle.textContent = slide.subtitle;
        if (pillBadge) pillBadge.textContent = slide.badge;

        imgEl.style.opacity = '1';
        imgEl.style.transform = 'scale(1)';
      }, 200);

      // Update dots
      document.querySelectorAll('.hero-dot').forEach((dot, dIdx) => {
        dot.classList.toggle('active', dIdx === AppState.currentHeroSlide);
      });
    };

    // Dot click listeners
    dotsContainer.addEventListener('click', (e) => {
      if (e.target.classList.contains('hero-dot')) {
        clearInterval(AppState.heroTimer);
        showSlide(parseInt(e.target.getAttribute('data-slide'), 10));
        startHeroAutoplay();
      }
    });

    const startHeroAutoplay = () => {
      AppState.heroTimer = setInterval(() => {
        showSlide(AppState.currentHeroSlide + 1);
      }, 5500);
    };

    startHeroAutoplay();
  };

  // =========================================================================
  // Lookbook Runway Ribbon Marquee
  // =========================================================================
  const initLookbookMarquee = () => {
    const marqueeTrack = document.getElementById('marqueeTrack');
    if (!marqueeTrack || !GALLERY_IMAGES || !GALLERY_IMAGES.length) return;

    // Take images and duplicate for seamless loop
    const items = GALLERY_IMAGES.slice(0, 18);
    const renderItems = [...items, ...items];

    marqueeTrack.innerHTML = renderItems.map((img) => `
      <div class="marquee-item" onclick="openLookbookImage('${img.src}', '${img.alt || 'Exquisite Geiso Attire'}')">
        <img src="${img.src}" alt="${img.alt || 'Geiso Attire'}" loading="lazy" />
        <span class="marquee-caption">${img.alt || 'Authentic African Couture'}</span>
      </div>
    `).join('');
  };

  window.openLookbookImage = (src, caption) => {
    openQuickViewModal({
      id: 9999,
      title: caption || "Bespoke Geiso Runway Piece",
      category: "Bespoke Couture",
      price: 95.00,
      image: src,
      description: "A signature handcrafted masterwork tailored by Geiso Enterprise. Available for bespoke sizing and custom order consultations.",
      rating: 5.0,
      reviewsCount: 16
    });
  };

  // =========================================================================
  // Category Tabs & Product Catalog
  // =========================================================================
  const initCategoryTabs = () => {
    const tabsContainer = document.getElementById('categoryTabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = CATEGORIES.map(cat => `
      <button class="tab-btn ${cat.id === AppState.activeCategory ? 'active' : ''}" data-category="${cat.id}">
        <i class="bi ${cat.icon}"></i> ${cat.name}
      </button>
    `).join('');

    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.tab-btn');
      if (!btn) return;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  };

  const getFilteredProducts = () => {
    let prods = [...PRODUCTS_DATA];

    // Filter by Category
    if (AppState.activeCategory !== 'all') {
      prods = prods.filter(p => p.category === AppState.activeCategory);
    }

    // Filter by Search
    if (AppState.searchQuery.trim()) {
      const q = AppState.searchQuery.toLowerCase().trim();
      prods = prods.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    // Sort
    if (AppState.sortBy === 'price-low') {
      prods.sort((a, b) => a.price - b.price);
    } else if (AppState.sortBy === 'price-high') {
      prods.sort((a, b) => b.price - a.price);
    } else if (AppState.sortBy === 'rating') {
      prods.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
    } else {
      prods.sort((a, b) => a.id - b.id);
    }

    return prods;
  };

  const renderProducts = () => {
    const grid = document.getElementById('productGrid');
    const counter = document.getElementById('resultCounter');
    if (!grid) return;

    const filtered = getFilteredProducts();

    if (counter) {
      counter.textContent = `Showing ${filtered.length} item${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <div style="font-size: 3rem; color: var(--primary); margin-bottom: 12px;"><i class="bi bi-search"></i></div>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; color: var(--dark);">No Matching Collections Found</h3>
          <p style="color: var(--muted-text); margin-top: 6px;">Try adjusting your keywords or browse all categories.</p>
          <button class="btn-primary" style="margin-top: 20px;" onclick="resetCatalogFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(prod => {
      const isWishlisted = AppState.wishlist.includes(prod.id);
      return `
        <div class="product-card" data-id="${prod.id}">
          <div class="product-image-container" onclick="openProductQuickView(${prod.id})">
            ${prod.badge ? `<span class="product-badge ${prod.badge.includes('Sale') ? 'gold' : ''}">${prod.badge}</span>` : ''}
            <div class="product-quick-actions" onclick="event.stopPropagation()">
              <button class="quick-action-btn ${isWishlisted ? 'wishlist-active' : ''}" title="Add to Wishlist" onclick="toggleWishlist(${prod.id})">
                <i class="bi ${isWishlisted ? 'bi-heart-fill' : 'bi-heart'}"></i>
              </button>
              <button class="quick-action-btn" title="Quick View" onclick="openProductQuickView(${prod.id})">
                <i class="bi bi-eye"></i>
              </button>
            </div>
            <img src="${prod.image}" alt="${prod.title}" loading="lazy" onerror="this.src='https://geisoenterprise.co.uk/wp-content/uploads/2024/07/FAVICON-150x106.png'" />
          </div>

          <div class="product-body">
            <span class="product-category-meta">${prod.category}</span>
            <h4 class="product-title" onclick="openProductQuickView(${prod.id})" title="${prod.title}">${prod.title}</h4>
            
            <div class="product-rating">
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <span class="reviews-count">(${prod.reviewsCount || 12})</span>
            </div>

            <div class="product-footer">
              <div class="price-wrap">
                <span class="product-price">${formatCurrency(prod.price)}</span>
                ${prod.originalPrice ? `<span class="product-original-price">${formatCurrency(prod.originalPrice)}</span>` : ''}
              </div>
              <button class="btn-add-cart" onclick="addToCart(${prod.id})">
                <i class="bi bi-bag-plus"></i> Add
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  };

  window.resetCatalogFilters = () => {
    AppState.activeCategory = 'all';
    AppState.searchQuery = '';
    AppState.sortBy = 'featured';
    const searchInput = document.getElementById('catalogSearch');
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('.tab-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === 'all');
    });
    renderProducts();
  };

  const initCatalogSearchAndSort = () => {
    const searchInput = document.getElementById('catalogSearch');
    const clearBtn = document.getElementById('searchClear');
    const sortSelect = document.getElementById('catalogSort');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        AppState.searchQuery = e.target.value;
        if (clearBtn) {
          clearBtn.classList.toggle('visible', Boolean(e.target.value));
        }
        renderProducts();
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        AppState.searchQuery = '';
        clearBtn.classList.remove('visible');
        renderProducts();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        AppState.sortBy = e.target.value;
        renderProducts();
      });
    }
  };

  // =========================================================================
  // Wishlist Logic
  // =========================================================================
  window.toggleWishlist = (prodId) => {
    const idx = AppState.wishlist.indexOf(prodId);
    if (idx > -1) {
      AppState.wishlist.splice(idx, 1);
      showToast('Item removed from wishlist', 'primary', 'bi-heart');
    } else {
      AppState.wishlist.push(prodId);
      showToast('Item saved to wishlist!', 'gold', 'bi-heart-fill');
    }
    saveWishlist();
    renderProducts();
  };

  const updateWishlistUI = () => {
    const badge = document.getElementById('wishlistCountBadge');
    if (badge) {
      badge.textContent = AppState.wishlist.length;
    }
  };

  // =========================================================================
  // Shopping Cart Drawer Engine
  // =========================================================================
  window.addToCart = (prodId, qty = 1) => {
    const product = PRODUCTS_DATA.find(p => p.id === prodId);
    if (!product) return;

    const existing = AppState.cart.find(item => item.id === prodId);
    if (existing) {
      existing.qty += qty;
    } else {
      AppState.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        category: product.category,
        qty: qty
      });
    }

    saveCart();
    showToast(`Added "${product.title.slice(0, 24)}..." to cart!`, 'success', 'bi-bag-check-fill');
    openCartDrawer();
  };

  window.updateCartQty = (prodId, delta) => {
    const item = AppState.cart.find(i => i.id === prodId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      AppState.cart = AppState.cart.filter(i => i.id !== prodId);
    }
    saveCart();
  };

  window.removeFromCart = (prodId) => {
    AppState.cart = AppState.cart.filter(i => i.id !== prodId);
    saveCart();
    showToast('Item removed from shopping cart', 'primary', 'bi-trash3');
  };

  const calculateCartTotals = () => {
    const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const discount = AppState.appliedCoupon ? (subtotal * STORE_CONFIG.promoDiscount) : 0;
    const isFreeShipping = subtotal >= STORE_CONFIG.freeShippingThreshold || subtotal === 0;
    const shipping = isFreeShipping ? 0 : 5.99;
    const total = Math.max(0, subtotal - discount + shipping);

    return { subtotal, discount, shipping, total, isFreeShipping };
  };

  const updateCartUI = () => {
    const totalCount = AppState.cart.reduce((sum, i) => sum + i.qty, 0);
    const headerCount = document.getElementById('headerCartCount');
    const headerTotal = document.getElementById('headerCartTotal');
    const drawerCount = document.getElementById('drawerCartCount');
    const itemsContainer = document.getElementById('cartDrawerItems');
    const summarySubtotal = document.getElementById('cartSubtotal');
    const summaryDiscount = document.getElementById('cartDiscount');
    const summaryDiscountRow = document.getElementById('cartDiscountRow');
    const summaryShipping = document.getElementById('cartShipping');
    const summaryTotal = document.getElementById('cartGrandTotal');
    const meterText = document.getElementById('shippingMeterText');
    const meterBar = document.getElementById('shippingMeterBar');

    if (headerCount) headerCount.textContent = totalCount;
    if (drawerCount) drawerCount.textContent = totalCount;

    const { subtotal, discount, shipping, total, isFreeShipping } = calculateCartTotals();

    if (headerTotal) {
      headerTotal.textContent = formatCurrency(subtotal);
    }

    // Shipping Meter
    if (meterText && meterBar) {
      if (subtotal >= STORE_CONFIG.freeShippingThreshold) {
        meterText.innerHTML = `\uD83C\uDF89 <strong>Congratulations!</strong> You have unlocked FREE Express UK Shipping!`;
        meterBar.style.width = '100%';
      } else {
        const remaining = STORE_CONFIG.freeShippingThreshold - subtotal;
        const pct = Math.min(100, Math.round((subtotal / STORE_CONFIG.freeShippingThreshold) * 100));
        meterText.innerHTML = `Add <strong>${formatCurrency(remaining)}</strong> more for <strong>FREE Express Shipping</strong>!`;
        meterBar.style.width = `${pct}%`;
      }
    }

    // Drawer Items List
    if (!itemsContainer) return;

    if (AppState.cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon"><i class="bi bi-bag-x"></i></div>
          <h4>Your Shopping Bag is Empty</h4>
          <p>Explore our exquisite handcrafted African attire and braided wigs to fill it up!</p>
          <button class="btn-primary" onclick="closeCartDrawer(); window.location.href='#collections';">
            Explore Collections
          </button>
        </div>
      `;
      if (document.getElementById('cartFooterActions')) {
        document.getElementById('cartFooterActions').style.display = 'none';
      }
      return;
    }

    if (document.getElementById('cartFooterActions')) {
      document.getElementById('cartFooterActions').style.display = 'block';
    }

    itemsContainer.innerHTML = AppState.cart.map(item => `
      <div class="cart-item-card">
        <div class="cart-item-thumb">
          <img src="${item.image}" alt="${item.title}" />
        </div>
        <div class="cart-item-info">
          <h5>${item.title}</h5>
          <div class="cart-item-price">${formatCurrency(item.price)} each</div>
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
            <span class="qty-input">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
        </div>
        <div style="text-align: right;">
          <div style="font-weight: 700; color: var(--primary); margin-bottom: 8px;">
            ${formatCurrency(item.price * item.qty)}
          </div>
          <button class="remove-item-btn" title="Remove Item" onclick="removeFromCart(${item.id})">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Summary lines
    if (summarySubtotal) summarySubtotal.textContent = formatCurrency(subtotal);
    if (summaryDiscountRow && summaryDiscount) {
      if (discount > 0) {
        summaryDiscountRow.style.display = 'flex';
        summaryDiscount.textContent = `-${formatCurrency(discount)}`;
      } else {
        summaryDiscountRow.style.display = 'none';
      }
    }
    if (summaryShipping) {
      summaryShipping.textContent = isFreeShipping ? 'FREE' : formatCurrency(shipping);
    }
    if (summaryTotal) summaryTotal.textContent = formatCurrency(total);
  };

  window.openCartDrawer = () => {
    document.getElementById('cartDrawer')?.classList.add('active');
    document.getElementById('cartBackdrop')?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeCartDrawer = () => {
    document.getElementById('cartDrawer')?.classList.remove('active');
    document.getElementById('cartBackdrop')?.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.applyCouponCode = () => {
    const input = document.getElementById('couponInput');
    if (!input) return;
    const code = input.value.trim().toUpperCase();

    if (code === STORE_CONFIG.promoCode) {
      AppState.appliedCoupon = code;
      showToast(`Coupon "${code}" applied! 15% discount granted.`, 'gold', 'bi-tag-fill');
      saveCart();
    } else {
      showToast('Invalid voucher code. Try "GEISO15"', 'primary', 'bi-exclamation-triangle');
    }
  };

  window.copyPromoCode = () => {
    navigator.clipboard.writeText(STORE_CONFIG.promoCode);
    showToast(`Promo code "${STORE_CONFIG.promoCode}" copied to clipboard!`, 'gold', 'bi-clipboard-check');
  };

  // =========================================================================
  // Quick View Modal
  // =========================================================================
  window.openProductQuickView = (prodId) => {
    const product = PRODUCTS_DATA.find(p => p.id === prodId);
    if (!product) return;
    openQuickViewModal(product);
  };

  const openQuickViewModal = (product) => {
    const overlay = document.getElementById('quickViewOverlay');
    if (!overlay) return;

    overlay.innerHTML = `
      <div class="modal-card">
        <button class="modal-close-btn" onclick="closeQuickViewModal()"><i class="bi bi-x-lg"></i></button>
        <div class="modal-grid">
          <div class="modal-media-col">
            <img src="${product.image}" alt="${product.title}" />
          </div>
          <div class="modal-info-col">
            <span class="modal-category-badge">${product.category}</span>
            <h3 class="modal-product-title">${product.title}</h3>
            
            <div class="product-rating" style="margin-bottom: 12px;">
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <span class="reviews-count">5.0 Star Rating (${product.reviewsCount || 14} verified reviews)</span>
            </div>

            <div class="modal-product-price">${formatCurrency(product.price)}</div>
            <p class="modal-product-desc">${product.description}</p>

            <ul class="modal-features-list">
              <li><i class="bi bi-check-circle-fill"></i> 100% Handcrafted & Tailored to Specification</li>
              <li><i class="bi bi-check-circle-fill"></i> Premium Grade Materials with Superior Finish</li>
              <li><i class="bi bi-check-circle-fill"></i> Available for Worldwide Shipping & UK Express Delivery</li>
            </ul>

            <div class="modal-action-row">
              <button class="btn-primary" style="flex: 1;" onclick="addToCart(${product.id}); closeQuickViewModal();">
                <i class="bi bi-bag-plus"></i> Add to Shopping Bag
              </button>
              <button class="btn-secondary" style="color: var(--dark); border-color: var(--border-light);" onclick="orderViaWhatsAppDirect('${product.title}', ${product.price})">
                <i class="bi bi-whatsapp"></i> WhatsApp Order
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeQuickViewModal = () => {
    const overlay = document.getElementById('quickViewOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.orderViaWhatsAppDirect = (title, price) => {
    const msg = encodeURIComponent(`Hello Geiso Enterprise! I would like to order: "${title}" (${STORE_CONFIG.currency}${price}). Please assist with sizing and delivery.`);
    window.open(`https://wa.me/447404123456?text=${msg}`, '_blank');
  };

  // =========================================================================
  // Checkout Modal Simulation
  // =========================================================================
  window.openCheckoutModal = () => {
    if (AppState.cart.length === 0) {
      showToast('Your shopping cart is empty.', 'primary', 'bi-bag');
      return;
    }
    closeCartDrawer();

    const overlay = document.getElementById('checkoutOverlay');
    if (!overlay) return;

    const { subtotal, discount, shipping, total } = calculateCartTotals();

    overlay.innerHTML = `
      <div class="modal-card checkout-modal-card">
        <button class="modal-close-btn" onclick="closeCheckoutModal()"><i class="bi bi-x-lg"></i></button>
        <div class="checkout-header">
          <span class="section-badge">Secure Order</span>
          <h3>Order Checkout</h3>
          <p style="font-size: 0.9rem; color: var(--muted-text);">Complete your details below to dispatch your order.</p>
        </div>

        <form id="checkoutForm" onsubmit="handleCheckoutSubmit(event)">
          <div class="checkout-form-grid">
            <div class="form-group">
              <label>Full Name *</label>
              <input type="text" class="form-control" required placeholder="Jane Doe" id="custName" />
            </div>
            <div class="form-group">
              <label>Phone / WhatsApp *</label>
              <input type="tel" class="form-control" required placeholder="+44 7123 456789" id="custPhone" />
            </div>
            <div class="form-group full-col">
              <label>Email Address *</label>
              <input type="email" class="form-control" required placeholder="jane@example.com" id="custEmail" />
            </div>
            <div class="form-group full-col">
              <label>Delivery Address *</label>
              <textarea class="form-control" rows="2" required placeholder="Street address, City, Postcode, Country" id="custAddress"></textarea>
            </div>
            <div class="form-group full-col">
              <label>Order Notes / Bespoke Sizing (Optional)</label>
              <textarea class="form-control" rows="2" placeholder="Custom measurements, head circumference for wigs, etc." id="custNotes"></textarea>
            </div>
          </div>

          <div style="background: var(--light-bg); padding: 16px; border-radius: var(--radius-sm); margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.88rem;">
              <span>Items Subtotal:</span>
              <span>${formatCurrency(subtotal)}</span>
            </div>
            ${discount > 0 ? `
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.88rem; color: var(--primary);">
              <span>Promo Discount (15%):</span>
              <span>-${formatCurrency(discount)}</span>
            </div>` : ''}
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 0.88rem;">
              <span>Delivery:</span>
              <span>${shipping === 0 ? 'FREE' : formatCurrency(shipping)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.15rem; color: var(--dark); border-top: 1px dashed var(--border-light); padding-top: 8px;">
              <span>Total Payable:</span>
              <span style="color: var(--primary);">${formatCurrency(total)}</span>
            </div>
          </div>

          <button type="submit" class="btn-checkout">
            <i class="bi bi-shield-lock-fill"></i> Place Order Now (${formatCurrency(total)})
          </button>
        </form>
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeCheckoutModal = () => {
    const overlay = document.getElementById('checkoutOverlay');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  window.handleCheckoutSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('custName')?.value || 'Valued Customer';
    const orderNum = Math.floor(100000 + Math.random() * 900000);

    const overlay = document.getElementById('checkoutOverlay');
    overlay.innerHTML = `
      <div class="modal-card checkout-modal-card" style="text-align: center; padding: 50px 30px;">
        <button class="modal-close-btn" onclick="closeCheckoutModal()"><i class="bi bi-x-lg"></i></button>
        <div style="width: 72px; height: 72px; border-radius: 50%; background: #d1fae5; color: var(--success); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 20px;">
          <i class="bi bi-check-lg"></i>
        </div>
        <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--dark); margin-bottom: 8px;">Order Placed Successfully!</h3>
        <p style="color: var(--body-text); margin-bottom: 16px;">Thank you, <strong>${name}</strong>! Your order reference is <strong style="color: var(--primary);">#GEISO-${orderNum}</strong>.</p>
        <p style="font-size: 0.9rem; color: var(--muted-text); margin-bottom: 28px;">A confirmation has been logged. Our styling specialists will reach out via WhatsApp/email with your dispatch timeline.</p>
        <button class="btn-primary" onclick="closeCheckoutModal()">Back to Geiso Enterprise</button>
      </div>
    `;

    // Clear cart
    AppState.cart = [];
    AppState.appliedCoupon = null;
    saveCart();
    showToast(`Order #GEISO-${orderNum} confirmed!`, 'success', 'bi-bag-check-fill');
  };

  window.checkoutViaWhatsApp = () => {
    if (AppState.cart.length === 0) {
      showToast('Your cart is empty', 'primary');
      return;
    }

    const { subtotal, discount, shipping, total } = calculateCartTotals();
    let text = `Hello Geiso Enterprise! I would like to place an order:%0A%0A`;
    AppState.cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.title} (Qty: ${item.qty}) - ${STORE_CONFIG.currency}${(item.price * item.qty).toFixed(2)}%0A`;
    });
    if (discount > 0) text += `%0ADiscount applied: -${STORE_CONFIG.currency}${discount.toFixed(2)}%0A`;
    text += `%0AShipping: ${shipping === 0 ? 'FREE' : STORE_CONFIG.currency + shipping.toFixed(2)}%0ATotal: ${STORE_CONFIG.currency}${total.toFixed(2)}%0A%0APlease provide delivery instructions.`;

    window.open(`https://wa.me/447404123456?text=${text}`, '_blank');
  };

  // =========================================================================
  // Testimonials Rendering
  // =========================================================================
  const renderTestimonials = () => {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid || !TESTIMONIALS || !TESTIMONIALS.length) return;

    grid.innerHTML = TESTIMONIALS.map(t => `
      <div class="testimonial-card">
        <i class="bi bi-quote quote-icon"></i>
        <div class="stars" style="margin-bottom: 12px;">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-user">
          <div class="user-avatar-initial">${t.name.charAt(0)}</div>
          <div class="user-details">
            <h5>${t.name}</h5>
            <span class="user-location">${t.location}</span> \u2022 
            <span class="verified-buyer-badge"><i class="bi bi-patch-check-fill"></i> Verified Customer</span>
          </div>
        </div>
      </div>
    `).join('');
  };

  // =========================================================================
  // Mobile Nav Drawer & Dropdowns
  // =========================================================================
  const initMobileNav = () => {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileBackdrop');
    const closeBtn = document.getElementById('closeMobileNav');

    if (!toggleBtn || !drawer) return;

    const openDrawer = () => {
      drawer.classList.add('active');
      backdrop?.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeDrawer = () => {
      drawer.classList.remove('active');
      backdrop?.classList.remove('active');
      document.body.style.overflow = '';
    };

    toggleBtn.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    backdrop?.addEventListener('click', closeDrawer);

    // Close on link click
    drawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });
  };

  // =========================================================================
  // Newsletter Form
  // =========================================================================
  const initNewsletter = () => {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('newsletterEmail');
      if (!input || !input.value) return;

      showToast(`Welcome to Geiso VIP Club! Check ${input.value} for your 15% voucher.`, 'gold', 'bi-envelope-check-fill');
      input.value = '';
    });
  };

  // =========================================================================
  // Initialization on DOMContentLoaded
  // =========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    initHeroSlider();
    initLookbookMarquee();
    initCategoryTabs();
    initCatalogSearchAndSort();
    renderProducts();
    updateCartUI();
    updateWishlistUI();
    renderTestimonials();
    initMobileNav();
    initNewsletter();

    // Close overlays with Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeQuickViewModal();
        closeCheckoutModal();
      }
    });

    // Close backdrops on click
    document.getElementById('cartBackdrop')?.addEventListener('click', closeCartDrawer);
    document.getElementById('quickViewOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'quickViewOverlay') closeQuickViewModal();
    });
    document.getElementById('checkoutOverlay')?.addEventListener('click', (e) => {
      if (e.target.id === 'checkoutOverlay') closeCheckoutModal();
    });
  });

})();
