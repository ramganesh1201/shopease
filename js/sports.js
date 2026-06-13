// Complete Sports/Mobile JS - Extracted from inline scripts
// Supports both sports.html and mobile.html

// ================= PRODUCT DATA =================
const sportsProducts = [
  {id:101,title:"SG English Willow Cricket Bat Kashmir",brand:"SG",category:"Sports",price:12999,originalPrice:17999,image:"https://images.unsplash.com/photo/1600814389394-4cbc8d2ddbef?w=400&fit=crop",rating:4.8,reviewCount:456},
  {id:102,title:"Adidas Cricket Helmet Pro",brand:"Adidas",category:"Sports",price:3999,originalPrice:5499,image:"https://images.pexels.com/photos/3430417/pexels-photo-3430417.jpeg?w=400",rating:4.6,reviewCount:289},
  {id:103,title:"SS Ton Elite Cricket Bat",brand:"SS",category:"Sports",price:8999,originalPrice:11999,image:"https://images.unsplash.com/photo/209671/pexels-photo-209671.jpeg?w=400",rating:4.7,reviewCount:378},
  {id:104,title:"Kookaburra Cricket Shoes",brand:"Kookaburra",category:"Sports",price:5999,originalPrice:7999,image:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=400",rating:4.5,reviewCount:234},
  {id:105,title:"MRF Genius Cricket Bat",brand:"MRF",category:"Sports",price:14999,originalPrice:19999,image:"https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?w=400",rating:4.9,reviewCount:512},
  {id:106,title:"Puma Cricket Gloves",brand:"Puma",category:"Sports",price:1499,originalPrice:1999,image:"https://images.unsplash.com/photo/236973/pexels-photo-236973.jpeg?w=400",rating:4.4,reviewCount:167},
  {id:107,title:"New Balance Cricket Pads",brand:"New Balance",category:"Sports",price:3499,originalPrice:4999,image:"https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?w=400",rating:4.6,reviewCount:198},
  {id:108,title:"CEAT Cricket Ball Match",brand:"CEAT",category:"Sports",price:799,originalPrice:1099,image:"https://images.pexels.com/photos/5595725/pexels-photo-5595725.jpeg?w=400",rating:4.7,reviewCount:345},
  {id:109,title:"BDM Cricket Kit Bag",brand:"BDM",category:"Sports",price:2499,originalPrice:3299,image:"https://images.unsplash.com/photo-1574249279827-40f42d6e9425?w=400",rating:4.5,reviewCount:156},
  {id:110,title:"Cosco Cricket Net Practice",brand:"Cosco",category:"Sports",price:2999,originalPrice:3999,image:"https://images.pexels.com/photos/247376/pexels-photo-247376.jpg?w=400",rating:4.3,reviewCount:123},
  {id:111,title:"Lifelong Adjustable Dumbbell 20kg Set",brand:"Lifelong",category:"Sports",price:5999,originalPrice:7999,image:"https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?w=400",rating:4.5,reviewCount:389},
  {id:112,title:"PowerMax Treadmill 5HP",brand:"PowerMax",category:"Sports",price:34999,originalPrice:44999,image:"https://images.unsplash.com/photo-1558618047-3c8c76bbb17e?w=400",rating:4.4,reviewCount:267},
  {id:113,title:"Linos Anti-Slip Yoga Mat",brand:"Linos",category:"Sports",price:1299,originalPrice:1799,image:"https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?w=400",rating:4.8,reviewCount:456},
  {id:114,title:"Gym Bench Adjustable Multi",brand:"Durafit",category:"Sports",price:8999,originalPrice:11999,image:"https://images.unsplash.com/photo-1574249279827-40f42d6e9425?w=400",rating:4.6,reviewCount:312},
  {id:115,title:"Weightlifting Gloves Pro Grip",brand:"RDX",category:"Sports",price:999,originalPrice:1499,image:"https://images.pexels.com/photos/236973/pexels-photo-236973.jpeg?w=400",rating:4.7,reviewCount:289},
  {id:116,title:"Skipping Rope Speed Pro",brand:"AmazonBasics",category:"Sports",price:499,originalPrice:799,image:"https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?w=400",rating:4.5,reviewCount:234},
  {id:117,title:"Pull Up Bar Doorway",brand:"Cockatoo",category:"Sports",price:1999,originalPrice:2799,image:"https://images.pexels.com/photos/247376/pexels-photo-247376.jpg?w=400",rating:4.3,reviewCount:178},
  {id:118,title:"Resistance Bands Set",brand:"FEGSY",category:"Sports",price:899,originalPrice:1299,image:"https://images.unsplash.com/photo-1577720117076-02e1484406f9?w=400",rating:4.6,reviewCount:345},
  {id:119,title:"Yonex Carbonex Badminton Racket",brand:"Yonex",category:"Sports",price:3499,originalPrice:4999,image:"https://images.unsplash.com/photo-1572497925045-5c6367045c91?w=400",rating:4.8,reviewCount:423},
  {id:120,title:"Wilson Pro Tennis Racquet",brand:"Wilson",category:"Sports",price:8999,originalPrice:11999,image:"https://images.pexels.com/photos/39323/tennis-ball-sport-racket-39323.jpeg?w=400",rating:4.7,reviewCount:356},
  {id:121,title:"Head Graphene Squash Racket",brand:"Head",category:"Sports",price:4999,originalPrice:6999,image:"https://images.unsplash.com/photo-1577720117076-02e1484406f9?w=400",rating:4.5,reviewCount:198},
  {id:122,title:"Victor Thruster Badminton",brand:"Victor",category:"Sports",price:5999,originalPrice:7999,image:"https://images.pexels.com/photos/39323/pexels-photo-39323.jpeg?w=400",rating:4.6,reviewCount:267},
  {id:123,title:"Babolat Pure Drive Tennis",brand:"Babolat",category:"Sports",price:11999,originalPrice:15999,image:"https://images.unsplash.com/photo-1511895380584-3df63ed67355?w=400",rating:4.9,reviewCount:489},
  {id:124,title:"Li-Ning Turbo Charging Racket",brand:"Li-Ning",category:"Sports",price:4299,originalPrice:5799,image:"https://images.unsplash.com/photo-1572497925045-5c6367045c91?w=400",rating:4.7,reviewCount:312},
  {id:125,title:"Nike Air Zoom Pegasus Running Shoes",brand:"Nike",category:"Sports",price:7999,originalPrice:10999,image:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=400",rating:4.8,reviewCount:567},
  {id:126,title:"Adidas Ultraboost Running",brand:"Adidas",category:"Sports",price:12999,originalPrice:16999,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",rating:4.7,reviewCount:434},
  {id:127,title:"Puma RS-X Sports Running",brand:"Puma",category:"Sports",price:6999,originalPrice:9499,image:"https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?w=400",rating:4.6,reviewCount:289},
  {id:128,title:"Reebok Nano Fitness Shoes",brand:"Reebok",category:"Sports",price:5999,originalPrice:7999,image:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?w=400",rating:4.5,reviewCount:234},
  {id:129,title:"Under Armour Sports T-Shirt Dry Fit",brand:"Under Armour",category:"Sports",price:1999,originalPrice:2799,image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",rating:4.6,reviewCount:345},
  {id:130,title:"Decathlon Sports Track Pants",brand:"Quechua",category:"Sports",price:1499,originalPrice:2199,image:"https://images.pexels.com/photos/39323/pexels-photo-39323.jpeg?w=400",rating:4.4,reviewCount:178},
  {id:131,title:"Adidas UCL Official Football",brand:"Adidas",category:"Sports",price:2999,originalPrice:3999,image:"https://images.pexels.com/photos/5595725/pexels-photo-5595725.jpeg?w=400",rating:4.8,reviewCount:456},
  {id:132,title:"Spalding NBA Basketball",brand:"Spalding",category:"Sports",price:1999,originalPrice:2799,image:"https://images.pexels.com/photos/7198187/pexels-photo-7198187.jpeg?w=400",rating:4.7,reviewCount:389},
  {id:133,title:"Mikasa Volleyball Pro",brand:"Mikasa",category:"Sports",price:1799,originalPrice:2499,image:"https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",rating:4.6,reviewCount:267},
  {id:134,title:"Cosco TT Racket Pair",brand:"Cosco",category:"Sports",price:1299,originalPrice:1799,image:"https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?w=400",rating:4.5,reviewCount:234},
  {id:135,title:"Nivia Football Goal Keeper Gloves",brand:"Nivia",category:"Sports",price:999,originalPrice:1499,image:"https://images.pexels.com/photos/5595725/pexels-photo-5595725.jpeg?w=400",rating:4.4,reviewCount:156},
  {id:136,title:"Write Brigade Hockey Stick",brand:"Write Brigade",category:"Sports",price:3499,originalPrice:4999,image:"https://images.unsplash.com/photo-1600814389394-4cbc8d2ddbef?w=400",rating:4.6,reviewCount:198}
];

const mobileProducts = [
  {id:1,title:"iPhone 14 Pro",brand:"Apple",ram:"6GB",price:109999,originalPrice:129999,rating:4.9,reviewCount:2341,image:"https://pngimg.com/uploads/iphone_14/iphone_14_PNG20.png"},
  {id:2,title:"Samsung S23 Ultra",brand:"Samsung",ram:"8GB",price:87999,originalPrice:119999,rating:4.8,reviewCount:1876,image:"https://www.pngall.com/wp-content/uploads/13/Galaxy-S23-Ultra-PNG-Clipart.webp"},
  {id:3,title:"OnePlus 11 5G",brand:"OnePlus",ram:"16GB",price:59999,originalPrice:69999,rating:4.7,reviewCount:1234,image:"https://image01.oneplus.net/ebp/202301/11/1-M00-42-E5-CkvTlmO-dPWANpKzAAJoBrhAYus595.png"},
  {id:4,title:"Google Pixel 8 Pro",brand:"Google",ram:"12GB",price:94999,originalPrice:109999,rating:4.8,reviewCount:987,image:"https://fonezone.com/cdn/shop/files/Untitled_5_b01da78f-24ae-43dc-b394-16f5a0efcbb9.png"},
  {id:5,title:"iPhone 13 Mini",brand:"Apple",ram:"6GB",price:59999,originalPrice:69999,rating:4.5,reviewCount:3421,image:"https://pngimg.com/d/iphone_13_PNG9.png"},
  {id:6,title:"Samsung A54",brand:"Samsung",ram:"8GB",price:24999,originalPrice:34999,rating:4.2,reviewCount:2134,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFaCo4eXbHDAqVFFpAgctUpK6vnbeck3Ed1w&s"},
  {id:7,title:"OnePlus Nord 3",brand:"OnePlus",ram:"8GB",price:27999,originalPrice:34999,rating:4.3,reviewCount:1543,image:"https://oasis.opstatics.com/content/dam/oasis/page/2023/global/product/vitamin/vitamin-spec-green.png"},
  {id:8,title:"Google Pixel 7a",brand:"Google",ram:"8GB",price:34999,originalPrice:43999,rating:4.4,reviewCount:876,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61FjwJCam-SxmhUQqmkg56ez-oVVLJFgYLQ&s"}
];

// ================= INIT =================
document.addEventListener('DOMContentLoaded', function() {
  const isMobilePage = window.location.pathname.includes('mobile.html');
  const products = isMobilePage ? mobileProducts : sportsProducts;
  
  filteredProducts = [...products];
  initializeFilters(products);
  updateCartBadge();
  document.getElementById('totalProducts').textContent = products.length;
  renderProducts();
});

// ================= CART FUNCTIONS =================
function getCart() { return JSON.parse(localStorage.getItem('shopease_cart')) || []; }
function saveCart(cart) { localStorage.setItem('shopease_cart', JSON.stringify(cart)); updateCartBadge(); }
function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id);
  if (existing) { existing.qty += 1; } 
  else { cart.push({ ...product, qty: 1, image: product.image || product.img }); }
  saveCart(cart);
}
function updateCartBadge() {
  const cart = getCart();
  const badge = document.getElementById('cartBadge');
  if (badge) badge.textContent = cart.reduce((sum, item) => sum + (item.qty || 0), 0);
}

// ================= FILTER INIT =================
function initializeFilters(products) {
  const brands = [...new Set(products.map(p => p.brand))].sort();
  const brandContainer = document.getElementById('brandFilters');
  if (brandContainer) {
    brandContainer.innerHTML = brands.map(brand => {
      const count = products.filter(p => p.brand === brand).length;
      return `<label class="filter-option">
        <input type="checkbox" value="${brand}" onchange="applyFilters()">
        <span>${brand}</span><span class="count">${count}</span>
      </label>`;
    }).join('');
  }
}

// ================= FILTER APPLY =================
function applyFilters() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  
  const brandFilters = document.getElementById('brandFilters');
  const categoryFilters = document.getElementById('categoryFilters');
  const priceFilters = document.getElementById('priceFilters');
  
  const selectedBrands = brandFilters ? [...brandFilters.querySelectorAll('input:checked')].map(i => i.value) : [];
  const selectedCategories = categoryFilters ? [...categoryFilters.querySelectorAll('input:checked')].map(i => i.value) : [];
  const selectedPrices = priceFilters ? [...priceFilters.querySelectorAll('input:checked')].map(i => i.value) : [];

  const isMobilePage = window.location.pathname.includes('mobile.html');
  const allProducts = isMobilePage ? mobileProducts : sportsProducts;
  
  filteredProducts = allProducts.filter(product => {
    if (searchTerm && !product.title.toLowerCase().includes(searchTerm) && !product.brand.toLowerCase().includes(searchTerm)) return false;
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (selectedCategories.length > 0) {
      const subCat = getSubCategory(product);
      if (!selectedCategories.includes(subCat)) return false;
    }
    if (selectedPrices.length > 0) {
      const price = product.price;
      const validPrice = selectedPrices.some(range => {
        if (range === '0-1000' || range === '0-30000') return price < (range.includes('1000') ? 1000 : 30000);
        if (range === '1000-5000' || range === '30000-70000') return price >= parseInt(range.split('-')[0]) && price < parseInt(range.split('-')[1]);
        if (range === '5000-10000' || range === '70000+') return price >= parseInt(range.split('-')[0]);
        return false;
      });
      if (!validPrice) return false;
    }
    return true;
  });

  currentPage = 1;
  sortProducts();
  renderProducts();
}

// ================= SUBCATEGORY =================
function getSubCategory(product) {
  const title = product.title.toLowerCase();
  if (title.includes('cricket')) return 'Cricket';
  if (title.includes('dumbbell') || title.includes('treadmill') || title.includes('yoga') || title.includes('bench') || title.includes('gloves') || title.includes('skipping')) return 'Fitness';
  if (title.includes('racket') || title.includes('tennis') || title.includes('badminton')) return 'Racquets';
  if (title.includes('running') || title.includes('pegasus') || title.includes('ultraboost')) return 'Running';
  if (title.includes('football') || title.includes('basketball') || title.includes('volleyball')) return 'Team Sports';
  return 'Apparel';
}

// ================= SORT =================
function sortProducts() {
  const sortDropdown = document.getElementById('sortDropdown');
  if (!sortDropdown) return;
  
  const sortValue = sortDropdown.value;
  switch(sortValue) {
    case 'price-low': filteredProducts.sort((a,b) => a.price - b.price); break;
    case 'price-high': filteredProducts.sort((a,b) => b.price - a.price); break;
    case 'rating': filteredProducts.sort((a,b) => b.rating - a.rating); break;
    default: filteredProducts.sort((a,b) => b.reviewCount - a.reviewCount);
  }
  renderProducts();
}

// ================= RENDER PRODUCTS =================
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;
  const pageProducts = filteredProducts.slice(start, end);
  
  const showingStartEl = document.getElementById('showingStart');
  const showingEndEl = document.getElementById('showingEnd');
  const totalResultsEl = document.getElementById('totalResults');
  
  if (showingStartEl) showingStartEl.textContent = filteredProducts.length > 0 ? start + 1 : 0;
  if (showingEndEl) showingEndEl.textContent = Math.min(end, filteredProducts.length);
  if (totalResultsEl) totalResultsEl.textContent = filteredProducts.length;
  
  if (pageProducts.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;"><i class="fas fa-search" style="font-size:60px;color:#ddd;margin-bottom:20px;"></i><h3>No products found</h3><p>Try adjusting your filters</p></div>';
    renderPagination();
    return;
  }
  
  grid.innerHTML = pageProducts.map(product => {
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    return `
      <div class="product-card">
        <div class="product-image">
          <img src="${product.image || product.img}" alt="${product.title}">
          <button class="wishlist-btn" onclick="toggleWishlist(${product.id})"><i class="far fa-heart"></i></button>
          ${discount >= 20 ? `<span class="badge">${discount}% OFF</span>` : ''}
        </div>
        <div class="product-info">
          <div class="product-brand">${product.brand}</div>
          <h3 class="product-title">${product.title}</h3>
          <div class="product-pricing">
            <span class="current-price">₹${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : ''}
            ${discount >= 20 ? `<span class="discount">${discount}% off</span>` : ''}
          </div>
          <div class="product-rating">
            <span class="rating-stars">${getStars(product.rating || 0)}</span>
            <span class="rating-count">${(product.reviewCount || 0)}</span>
          </div>
          ${product.ram ? `<div class="extra-info">RAM: ${product.ram}</div>` : ''}
          <button class="add-to-cart-btn" onclick="addToCartFromList(${product.id})">
            <i class="fas fa-shopping-cart"></i> Add to Cart
          </button>
        </div>
      </div>`;
  }).join('');
  
  renderPagination();
}

function getStars(rating) {
  const fullStars = Math.floor(rating);
  let stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  return stars;
}

// ================= PAGINATION =================
function renderPagination() {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;
  
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (totalPages <= 1) { pagination.innerHTML = ''; return; }
  
  let html = `<button class="page-btn" onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}><i class="fas fa-chevron-left"></i></button>`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}><i class="fas fa-chevron-right"></i></button>`;
  pagination.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderProducts();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

// ================= UTILS =================
function toggleWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem('shopease_wishlist') || '[]');
  const index = wishlist.findIndex(item => item.id === id);
  if (index > -1) wishlist.splice(index, 1); else wishlist.push({id});
  localStorage.setItem('shopease_wishlist', JSON.stringify(wishlist));
  const btn = event.target.closest('.wishlist-btn');
  btn.querySelector('i').classList.toggle('far');
  btn.querySelector('i').classList.toggle('fas');
}

function addToCartFromList(id) {
  const products = window.location.pathname.includes('mobile.html') ? mobileProducts : sportsProducts;
  const product = products.find(p => p.id === id);
  if (product) addToCart(product);
  const btn = event.target.closest('.add-to-cart-btn');
  btn.classList.add('added');
  btn.innerHTML = '<i class="fas fa-check"></i> Added';
  setTimeout(() => {
    btn.classList.remove('added');
    btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Add to Cart';
  }, 1500);
}

function clearAllFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById('searchInput').value = '';
  filteredProducts = window.location.pathname.includes('mobile.html') ? [...mobileProducts] : [...sportsProducts];
  currentPage = 1;
  renderProducts();
}

// Search listener
document.getElementById('searchInput')?.addEventListener('input', applyFilters);
