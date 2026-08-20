/* 本地模拟数据库 - 使用本地图片 */

const PRODUCTS = [
  {
    id: 'p001', name: '平衡之间 Balance', price: 880, originalPrice: 1080, stock: 12,
    real_sold: 47, display_sold: 47,
    category: 'sculpture', categoryName: '艺术雕塑',
    image: '/images/products/p001.png',
    images: ['/images/products/p001.png', '/images/products/p002.png', '/images/products/p003.png'],
    description: '作品以极简的几何语言，探索平衡与空间的关系。天然石材的质感赋予其时间的沉淀与力量。每件作品皆为工匠手工打磨，独一无二。',
    designer: 'Studio ASA', material: '天然大理石', size: '16cm×8cm×18cm', weight: '1.2kg',
    tags: ['正品保证', '7天无理由'], isNew: true, isFeatured: true,
  },
  {
    id: 'p002', name: '栖息之鸟', price: 680, originalPrice: 680, stock: 8,
    real_sold: 123, display_sold: 123,
    category: 'sculpture', categoryName: '艺术雕塑',
    image: '/images/products/p002.png', images: ['/images/products/p002.png', '/images/products/p001.png'],
    description: '一只停歇的鸟，凝固了生命中最宁静的瞬间。哑光釉面工艺，触感温润如玉，是家居空间中一抹灵动的生命气息。',
    designer: 'Studio Wabi', material: '陶瓷', size: '12cm×5cm×14cm', weight: '0.6kg',
    tags: ['正品保证', '7天无理由'], isNew: false, isFeatured: true,
  },
  {
    id: 'p003', name: '静物之美', price: 520, originalPrice: 520, stock: 15,
    real_sold: 89, display_sold: 89,
    category: 'decor', categoryName: '桌面装饰',
    image: '/images/products/p003.png', images: ['/images/products/p003.png'],
    description: '以东方美学为灵感，将自然形态凝练为极简造型。置于书桌或窗台，随光线变化呈现不同的光影层次。',
    designer: 'Wabi Studio', material: '天然石粉', size: '10cm×10cm×15cm', weight: '0.8kg',
    tags: ['正品保证', '7天无理由'], isNew: true, isFeatured: true,
  },
  {
    id: 'p004', name: '几何之美系列·方', price: 780, originalPrice: 980, stock: 6,
    real_sold: 34, display_sold: 34,
    category: 'sculpture', categoryName: '艺术雕塑',
    image: '/images/products/p004.png', images: ['/images/products/p004.png'],
    description: '几何形态的纯粹探索，方与圆的对话。汉白玉石材手工雕刻，每一条线都是匠人心意的传达。',
    designer: 'Form Studio', material: '汉白玉', size: '14cm×14cm×20cm', weight: '2.1kg',
    tags: ['正品保证', '7天无理由'], isNew: false, isFeatured: false,
  },
  {
    id: 'p005', name: '自然语录·石语', price: 420, originalPrice: 420, stock: 20,
    real_sold: 56, display_sold: 56,
    category: 'nature', categoryName: '自然物语',
    image: '/images/products/p005.png', images: ['/images/products/p005.png'],
    description: '来自山间的天然石块，经过轻微打磨保留原始肌理。无规则的形态恰是自然最完美的艺术表达。',
    designer: '自然精选', material: '天然鹅卵石', size: '约8-12cm', weight: '约0.5kg',
    tags: ['天然原石', '独一无二'], isNew: false, isFeatured: false,
  },
  {
    id: 'p006', name: '光影随行系列·弧', price: 960, originalPrice: 1280, stock: 4,
    real_sold: 12, display_sold: 12,
    category: 'sculpture', categoryName: '艺术雕塑',
    image: '/images/products/p006.png', images: ['/images/products/p006.png'],
    description: '以流动的弧线捕捉光影的轨迹，哑光白与珍珠光泽交织，是空间中最柔软的存在。',
    designer: 'Arc Design', material: '树脂复合材料', size: '20cm×6cm×24cm', weight: '1.4kg',
    tags: ['正品保证', '7天无理由'], isNew: true, isFeatured: false,
  },
  {
    id: 'p007', name: '宁静时刻·花器', price: 320, originalPrice: 320, stock: 30,
    real_sold: 201, display_sold: 201,
    category: 'vase', categoryName: '花器花瓶',
    image: '/images/products/p007.png', images: ['/images/products/p007.png'],
    description: '简洁的圆柱形态，细腻的哑光釉面，为鲜花或枯枝提供最克制的容器。小而精，是生活美学的日常实践。',
    designer: 'Quiet Kiln', material: '陶瓷', size: '直径8cm×高15cm', weight: '0.4kg',
    tags: ['正品保证', '7天无理由'], isNew: false, isFeatured: false,
  },
  {
    id: 'p008', name: '香氛蜡烛·晨雾', price: 198, originalPrice: 198, stock: 50,
    real_sold: 167, display_sold: 167,
    category: 'candle', categoryName: '香氛蜡烛',
    image: '/images/products/p008.png', images: ['/images/products/p008.png'],
    description: '晨雾香调：白茶、雪松、淡麝香。天然大豆蜡，燃烧时长约50小时，让家的气息像清晨的光一样柔和。',
    designer: 'Morning Studio', material: '天然大豆蜡', size: '直径7cm×高9cm', weight: '260g',
    tags: ['天然材料', '持久留香'], isNew: false, isFeatured: true,
  },
  {
    id: 'p009', name: '牛皮纸礼品袋·原色', price: 12, originalPrice: 12, stock: 200,
    real_sold: 38, display_sold: 38,
    category: 'gift', categoryName: '礼品袋',
    image: '/images/products/p005.png', images: ['/images/products/p005.png'],
    description: '优质牛皮纸材质，天然原色，质感温润。手提绳采用棉麻编织，结实耐用。适合装盛各类手作礼物，简约而有温度。',
    designer: 'Petit Aura', material: '优质牛皮纸', size: '20cm×10cm×25cm', weight: '60g',
    tags: ['环保材质', '可定制印字'], isNew: true, isFeatured: false,
  },
  {
    id: 'p010', name: '精致礼品盒·烟灰', price: 28, originalPrice: 38, stock: 80,
    real_sold: 25, display_sold: 25,
    category: 'gift', categoryName: '礼品袋',
    image: '/images/products/p006.png', images: ['/images/products/p006.png'],
    description: '哑光烟灰色礼品盒，磁吸开合，内衬柔软绒布。极简设计感，无需额外包装，打开即是惊喜。适合艺术雕塑、首饰等精致礼品。',
    designer: 'Petit Aura', material: '硬纸板 + 绒布内衬', size: '25cm×15cm×12cm', weight: '180g',
    tags: ['磁吸设计', '精致内衬', '可复用'], isNew: true, isFeatured: true,
  },
  {
    id: 'p011', name: '丝带手提礼包套装', price: 18, originalPrice: 25, stock: 150,
    real_sold: 72, display_sold: 72,
    category: 'gift', categoryName: '礼品袋',
    image: '/images/products/p007.png', images: ['/images/products/p007.png'],
    description: '包含礼品袋一枚、缎带一条、手写感谢卡一张。米白配玫金丝带，温柔高级，送礼时少一份包装烦恼，多一份用心。',
    designer: 'Petit Aura', material: '棉布礼品袋 + 缎面丝带', size: '袋：18cm×8cm×22cm', weight: '90g',
    tags: ['含感谢卡', '即送即用'], isNew: false, isFeatured: false,
  },
];

const CATEGORIES = [
  { id: 'all',       name: '全部',     icon: '🏠' },
  { id: 'sculpture', name: '艺术雕塑', icon: '🗿' },
  { id: 'decor',     name: '桌面装饰', icon: '🪴' },
  { id: 'nature',    name: '自然物语', icon: '🌿' },
  { id: 'vase',      name: '花器花瓶', icon: '🏺' },
  { id: 'candle',    name: '香氛蜡烛', icon: '🕯️' },
  { id: 'perler',    name: '拼豆',     icon: '🎨' },
  { id: 'gift',      name: '礼品袋',   icon: '🎁' },
];

const BANNERS = [
  { id: 'b001', image: '/images/products/p001.png', mainTitle: '空间艺术\n心灵栖居', subtitle: '极简美学 · 温暖生活', btn: '探索系列', bg: 'linear-gradient(135deg,#EDE5D8,#E0D4C0)', link: 'category' },
  { id: 'b002', image: '/images/products/p002.png', mainTitle: '平衡之间\nBalance',  subtitle: '天然大理石 · 手工打磨', btn: '立即选购', bg: 'linear-gradient(135deg,#E8E0D0,#DDD3C0)', link: 'detail' },
  { id: 'b003', image: '/images/products/p008.png', mainTitle: '礼物优选\n精选礼盒', subtitle: '精致包装 · 传递心意',   btn: '查看礼盒', bg: 'linear-gradient(135deg,#EDE5D8,#E5D8C8)', link: 'category' },
];

/* 主账号配置（代码级别，不可被子账号修改） */
const MAIN_ACCOUNTS = [
  { id: 'main_001', username: 'admin', password: 'admin123', name: 'Petit Aura 主账号', role: 'main', parentId: null },
];

const NEWBIE_PRODUCTS = [
  { id: 'nb001', name: '拼豆小熊挂件', price: 9.9, originalPrice: 29.9, image: '/images/products/p005.png', desc: '新人限定 · 萌趣拼豆工艺', stock: 99, isActive: true },
  { id: 'nb002', name: '拼豆爱心卡片', price: 19.9, originalPrice: 49.9, image: '/images/products/p007.png', desc: '手工拼接 · 传递心意', stock: 88, isActive: true },
  { id: 'nb003', name: '小桌灯', price: 29.9, originalPrice: 79.9, image: '/images/products/p008.png', desc: '手工制作 · 温暖治愈', stock: 50, isActive: true },
  { id: 'nb004', name: '香氛蜡烛·迷你', price: 9.9, originalPrice: 39.9, image: '/images/products/p008.png', desc: '天然大豆蜡 · 新人专属', stock: 120, isActive: true },
];

const GRASS_POSTS = [
  {
    id: 'g001', username: '@小星星', avatar: '⭐',
    title: '拼豆明珠扣，做成功了！',
    content: '研究了三天终于做出来了！用的是5mm拼豆，图案自己设计，颜色配比调整了好几次。做好之后送给闺蜜超级开心～成品效果比想象中好很多，大家也来试试吧！',
    image: '/images/products/p005.png', tags: ['拼豆', '手作', '明珠扣', '送礼'],
    linkedProductId: 'p005', isActive: true, createdAt: '2024-03-15T10:00:00.000Z',
  },
  {
    id: 'g002', username: '@甜甜圈', avatar: '🍩',
    title: '3D打印摆件，桌面颜值直线上升！',
    content: '收到3D打印摆件真的太好看了，放在桌面上显得特别高级。白色哑光质感很有设计感，拍照也很上镜。强烈推荐给想提升桌面颜值的小伙伴！',
    image: '/images/products/p001.png', tags: ['3D打印', '摆件', '桌面装饰', '设计感'],
    linkedProductId: 'p001', isActive: true, createdAt: '2024-03-12T14:00:00.000Z',
  },
  {
    id: 'g003', username: '@阿布同学', avatar: '🐼',
    title: '创意笔筒，定制专属版本！',
    content: '用Petit Aura的定制服务做了一个专属笔筒，把自己喜欢的图案印在上面，材质很结实，放了很多笔都没问题。定制过程也很简单，客服超耐心！',
    image: '/images/products/p003.png', tags: ['定制', '笔筒', '3D打印', '个性化'],
    linkedProductId: 'p003', isActive: true, createdAt: '2024-03-10T09:00:00.000Z',
  },
];

/* ── 内部读取函数 ── */

function _getProducts() {
  const stored = wx.getStorageSync('products');
  const base = (stored && stored.length) ? stored : PRODUCTS;
  return base;
}

function _getBanners() {
  const stored = wx.getStorageSync('banners');
  return (stored && stored.length) ? stored : BANNERS;
}

function _getNewbieProducts() {
  const stored = wx.getStorageSync('newbieProducts');
  return (stored && stored.length) ? stored : NEWBIE_PRODUCTS;
}

function _getGrassPosts() {
  const stored = wx.getStorageSync('grassPosts');
  return (stored && stored.length) ? stored : GRASS_POSTS;
}

/* 获取展示销量（用于用户端和子账号） */
function _getDisplaySoldMap() {
  return wx.getStorageSync('displaySoldCounts') || {};
}

/* 获取真实销量（仅主账号可见） */
function _getRealSoldMap() {
  return wx.getStorageSync('realSoldCounts') || {};
}

/* ── 子账号管理 ── */
function _getSubAccounts() {
  return wx.getStorageSync('subAccounts') || [];
}

/* ── 操作人信息（从 globalData 取当前登录商家） ── */
function _getOperatorInfo() {
  try {
    const a = getApp();
    const u = a.globalData.userInfo;
    if (u) {
      return {
        operatorId:   u.merchantId || u.id || 'unknown',
        operatorName: u.name || '未知操作者',
        operatorRole: u.merchantRole || 'unknown',
      };
    }
  } catch (e) {}
  return { operatorId: 'unknown', operatorName: '系统', operatorRole: 'unknown' };
}

module.exports = {
  /* ── 商品查询 ── */
  getProducts(categoryId) {
    const products = _getProducts();
    if (!categoryId || categoryId === 'all') return products;
    return products.filter(p => p.category === categoryId);
  },

  getProductById(id) {
    return _getProducts().find(p => p.id === id) || null;
  },

  getGiftProducts() {
    const defaultGift = PRODUCTS.filter(p => p.category === 'gift');
    const stored = wx.getStorageSync('products') || [];
    const storedGift = stored.filter(p => p.category === 'gift');
    const merged = [...defaultGift];
    storedGift.forEach(sp => {
      const idx = merged.findIndex(p => p.id === sp.id);
      if (idx >= 0) merged[idx] = sp;
      else merged.push(sp);
    });
    return merged;
  },

  getAllProductsForPicker() {
    const defaults = PRODUCTS;
    const stored = wx.getStorageSync('products') || [];
    if (stored.length === 0) return defaults;
    const merged = [...defaults];
    stored.forEach(sp => {
      const idx = merged.findIndex(p => p.id === sp.id);
      if (idx >= 0) merged[idx] = sp;
      else merged.push(sp);
    });
    return merged;
  },

  getCategories() { return CATEGORIES; },
  getBanners() { return _getBanners(); },
  saveBanners(banners) { wx.setStorageSync('banners', banners); },
  resetBanners() { wx.removeStorageSync('banners'); return BANNERS; },
  getFeaturedProducts() { return _getProducts().filter(p => p.isFeatured); },
  getNewProducts() { return _getProducts().filter(p => p.isNew); },

  searchProducts(keyword) {
    const kw = keyword.trim().toLowerCase();
    return _getProducts().filter(p =>
      p.name.toLowerCase().includes(kw) ||
      p.description.toLowerCase().includes(kw) ||
      p.categoryName.toLowerCase().includes(kw)
    );
  },

  /* ── 商品管理 ── */
  saveProducts(products) { wx.setStorageSync('products', products); },

  addProduct(product) {
    const products = [..._getProducts()];
    const newProduct = { ...product, id: 'p' + Date.now(), isFeatured: false, isNew: true, real_sold: 0, display_sold: 0 };
    products.unshift(newProduct);
    wx.setStorageSync('products', products);
    return newProduct;
  },

  updateProduct(id, updates) {
    const products = _getProducts().map(p => p.id === id ? { ...p, ...updates } : p);
    wx.setStorageSync('products', products);
  },

  deleteProduct(id) {
    const products = _getProducts().filter(p => p.id !== id);
    wx.setStorageSync('products', products);
  },

  /* ── 展示销量（display_sold） - 用户端显示，可由主账号/子账号修改 ── */
  getDisplaySoldCount(productId) {
    const map = _getDisplaySoldMap();
    if (map[productId] !== undefined) return map[productId];
    const p = PRODUCTS.find(p => p.id === productId);
    return p ? (p.display_sold || 0) : 0;
  },

  setDisplaySoldCount(productId, count) {
    const product = this.getProductById(productId);
    const productName = product ? product.name : productId;
    const oldValue = this.getDisplaySoldCount(productId);
    const newCount = Math.max(0, parseInt(count) || 0);
    const map = _getDisplaySoldMap();
    map[productId] = newCount;
    wx.setStorageSync('displaySoldCounts', map);
    const products = _getProducts().map(p =>
      p.id === productId ? { ...p, display_sold: newCount } : p
    );
    wx.setStorageSync('products', products);
    this.logOperation('edit_display_sold', productId, productName, 'display_sold', oldValue, newCount);
  },

  /* ── 真实销量（real_sold） - 仅主账号可见/修改 ── */
  getRealSoldCount(productId) {
    const map = _getRealSoldMap();
    if (map[productId] !== undefined) return map[productId];
    const p = PRODUCTS.find(p => p.id === productId);
    return p ? (p.real_sold || 0) : 0;
  },

  setRealSoldCount(productId, count) {
    const product = this.getProductById(productId);
    const productName = product ? product.name : productId;
    const oldValue = this.getRealSoldCount(productId);
    const newCount = Math.max(0, parseInt(count) || 0);
    const map = _getRealSoldMap();
    map[productId] = newCount;
    wx.setStorageSync('realSoldCounts', map);
    const products = _getProducts().map(p =>
      p.id === productId ? { ...p, real_sold: newCount } : p
    );
    wx.setStorageSync('products', products);
    this.logOperation('edit_real_sold', productId, productName, 'real_sold', oldValue, newCount);
  },

  /* ── 下单时同时增加 real_sold 和 display_sold，减少库存 ── */
  getSoldCount(productId) {
    return this.getDisplaySoldCount(productId);
  },

  incSoldCount(productId, qty) {
    qty = qty || 1;
    const product = this.getProductById(productId);
    const productName = product ? product.name : productId;
    const oldDisp = this.getDisplaySoldCount(productId);
    const oldReal = this.getRealSoldCount(productId);
    const oldStock = product ? (product.stock || 0) : 0;
    /* 增加展示销量 */
    const dispMap = _getDisplaySoldMap();
    dispMap[productId] = oldDisp + qty;
    wx.setStorageSync('displaySoldCounts', dispMap);
    /* 增加真实销量 */
    const realMap = _getRealSoldMap();
    realMap[productId] = oldReal + qty;
    wx.setStorageSync('realSoldCounts', realMap);
    /* 减少库存 */
    this.decStock(productId, qty);
    /* 同步到 products 记录 */
    const products = _getProducts().map(p =>
      p.id === productId
        ? { ...p, display_sold: dispMap[productId], real_sold: realMap[productId] }
        : p
    );
    wx.setStorageSync('products', products);
    /* 记录操作日志（订单触发） */
    this.logOperation('order_sold', productId, productName, 'real_sold+display_sold+stock',
      { real_sold: oldReal, display_sold: oldDisp, stock: oldStock },
      { real_sold: realMap[productId], display_sold: dispMap[productId], stock: Math.max(0, oldStock - qty) },
    );
  },

  decStock(productId, qty) {
    const products = _getProducts().map(p => {
      if (p.id === productId) {
        return { ...p, stock: Math.max(0, (p.stock || 0) - qty) };
      }
      return p;
    });
    wx.setStorageSync('products', products);
  },

  setSoldCount(productId, count) {
    this.setDisplaySoldCount(productId, count);
  },

  /* ── 带日志的库存修改（商家手动改库存时调用） ── */
  updateStock(productId, newStock) {
    const product = this.getProductById(productId);
    if (!product) return;
    const oldStock = product.stock || 0;
    this.updateProduct(productId, { stock: newStock });
    this.logOperation('edit_stock', productId, product.name, 'stock', oldStock, newStock);
  },

  /* ── 操作日志 ── */
  logOperation(action, productId, productName, field, oldValue, newValue) {
    try {
      const op = _getOperatorInfo();
      const MAX_LOGS = 500;
      const logs = wx.getStorageSync('operationLogs') || [];
      logs.unshift({
        id: 'log_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
        time: new Date().toISOString(),
        operatorId:   op.operatorId,
        operatorName: op.operatorName,
        operatorRole: op.operatorRole,
        action,
        productId,
        productName,
        field,
        oldValue,
        newValue,
      });
      if (logs.length > MAX_LOGS) logs.length = MAX_LOGS;
      wx.setStorageSync('operationLogs', logs);
    } catch (e) {}
  },

  getOperationLogs(filterAction) {
    const logs = wx.getStorageSync('operationLogs') || [];
    if (!filterAction || filterAction === 'all') return logs;
    return logs.filter(l => l.action === filterAction);
  },

  clearOperationLogs() {
    wx.removeStorageSync('operationLogs');
  },

  /* ── 订单 ── */
  getAllOrders() { return wx.getStorageSync('orders') || []; },

  updateOrderStatus(orderId, status, tracking) {
    const orders = wx.getStorageSync('orders') || [];
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx >= 0) {
      orders[idx].status = status;
      if (status === 'shipped') {
        orders[idx].shippedAt = new Date().toISOString();
        if (tracking) orders[idx].tracking = tracking;
      }
      wx.setStorageSync('orders', orders);
    }
  },

  /* ── 账号体系 ── */
  verifyMerchant(username, password) {
    /* 先查主账号 */
    const main = MAIN_ACCOUNTS.find(a => a.username === username && a.password === password);
    if (main) return { ...main };
    /* 再查子账号 */
    const subs = _getSubAccounts();
    const sub = subs.find(a => a.username === username && a.password === password && !a.isFrozen);
    return sub ? { ...sub } : null;
  },

  /* 子账号管理（主账号专用） */
  getSubAccounts() { return _getSubAccounts(); },

  addSubAccount(account) {
    const subs = _getSubAccounts();
    const existing = subs.find(a => a.username === account.username);
    if (existing) return { success: false, msg: '账号名已存在' };
    const newSub = {
      id: 'sub_' + Date.now(),
      username: account.username,
      password: account.password,
      name: account.name || account.username,
      role: 'sub',
      parentId: 'main_001',
      isFrozen: false,
      createdAt: new Date().toISOString(),
    };
    subs.push(newSub);
    wx.setStorageSync('subAccounts', subs);
    return { success: true, account: newSub };
  },

  updateSubAccount(id, updates) {
    const subs = _getSubAccounts().map(a => a.id === id ? { ...a, ...updates } : a);
    wx.setStorageSync('subAccounts', subs);
  },

  deleteSubAccount(id) {
    const subs = _getSubAccounts().filter(a => a.id !== id);
    wx.setStorageSync('subAccounts', subs);
  },

  freezeSubAccount(id, freeze) {
    const subs = _getSubAccounts().map(a => a.id === id ? { ...a, isFrozen: freeze } : a);
    wx.setStorageSync('subAccounts', subs);
  },

  /* ── 新人专享 ── */
  getNewbieProducts() { return _getNewbieProducts().filter(p => p.isActive); },
  getAllNewbieProducts() { return _getNewbieProducts(); },
  saveNewbieProducts(list) { wx.setStorageSync('newbieProducts', list); },

  addNewbieProduct(product) {
    const list = [..._getNewbieProducts()];
    const item = { ...product, id: 'nb' + Date.now(), isActive: true };
    list.push(item);
    wx.setStorageSync('newbieProducts', list);
    return item;
  },

  updateNewbieProduct(id, updates) {
    const list = _getNewbieProducts().map(p => p.id === id ? { ...p, ...updates } : p);
    wx.setStorageSync('newbieProducts', list);
  },

  deleteNewbieProduct(id) {
    const list = _getNewbieProducts().filter(p => p.id !== id);
    wx.setStorageSync('newbieProducts', list);
  },

  resetNewbieProducts() {
    wx.removeStorageSync('newbieProducts');
    return NEWBIE_PRODUCTS;
  },

  /* ── 商品评论 ── */
  getProductReviews(productId) {
    const all = wx.getStorageSync('productReviews') || {};
    return all[productId] || [];
  },

  addReview(productId, review) {
    const all = wx.getStorageSync('productReviews') || {};
    if (!all[productId]) all[productId] = [];
    const newReview = { ...review, id: 'rev' + Date.now(), createdAt: new Date().toISOString(), isHighlight: false };
    all[productId].unshift(newReview);
    wx.setStorageSync('productReviews', all);
    return newReview;
  },

  updateProductReviews(productId, reviews) {
    const all = wx.getStorageSync('productReviews') || {};
    all[productId] = reviews;
    wx.setStorageSync('productReviews', all);
  },

  deleteReview(productId, reviewId) {
    const all = wx.getStorageSync('productReviews') || {};
    if (!all[productId]) return;
    all[productId] = all[productId].filter(r => r.id !== reviewId);
    wx.setStorageSync('productReviews', all);
  },

  getAllReviews() { return wx.getStorageSync('productReviews') || {}; },

  addMerchantReview(productId, review) {
    const all = wx.getStorageSync('productReviews') || {};
    if (!all[productId]) all[productId] = [];
    const newReview = { ...review, id: 'rev' + Date.now(), createdAt: new Date().toISOString(), isMerchantAdded: true, isHighlight: true };
    all[productId].unshift(newReview);
    wx.setStorageSync('productReviews', all);
    return newReview;
  },

  /* ── 大家都在做 ── */
  getGrassPosts() { return _getGrassPosts().filter(p => p.isActive); },
  getAllGrassPosts() { return _getGrassPosts(); },

  addGrassPost(post) {
    const list = [..._getGrassPosts()];
    const item = { ...post, id: 'g' + Date.now(), isActive: true, createdAt: new Date().toISOString() };
    list.unshift(item);
    wx.setStorageSync('grassPosts', list);
    return item;
  },

  updateGrassPost(id, updates) {
    const list = _getGrassPosts().map(p => p.id === id ? { ...p, ...updates } : p);
    wx.setStorageSync('grassPosts', list);
  },

  deleteGrassPost(id) {
    const list = _getGrassPosts().filter(p => p.id !== id);
    wx.setStorageSync('grassPosts', list);
  },

  /* ── 运费设置 ── */
  getShippingSettings() {
    const defaults = { baseFee: 15, freeThreshold: 200 };
    return wx.getStorageSync('shippingSettings') || defaults;
  },

  saveShippingSettings(settings) { wx.setStorageSync('shippingSettings', settings); },

  /* ── 品类管理 ── */
  getAllCategories() {
    const custom = wx.getStorageSync('customCategories') || [];
    return [...CATEGORIES, ...custom];
  },

  addCustomCategory(cat) {
    const cats = wx.getStorageSync('customCategories') || [];
    cats.push(cat);
    wx.setStorageSync('customCategories', cats);
  },

  getCustomCategories() { return wx.getStorageSync('customCategories') || []; },

  /* ── 种草点赞 ── */
  getGrassLikeCount(postId) {
    const likes = wx.getStorageSync('grassLikes') || {};
    return likes[postId] || 0;
  },

  setGrassLikeCount(postId, count) {
    const likes = wx.getStorageSync('grassLikes') || {};
    likes[postId] = Math.max(0, parseInt(count) || 0);
    wx.setStorageSync('grassLikes', likes);
  },

  toggleGrassLike(postId) {
    const liked = wx.getStorageSync('userLikedGrass') || [];
    const likes = wx.getStorageSync('grassLikes') || {};
    const idx = liked.indexOf(postId);
    if (idx >= 0) {
      liked.splice(idx, 1);
      likes[postId] = Math.max(0, (likes[postId] || 0) - 1);
    } else {
      liked.push(postId);
      likes[postId] = (likes[postId] || 0) + 1;
    }
    wx.setStorageSync('userLikedGrass', liked);
    wx.setStorageSync('grassLikes', likes);
    return idx < 0;
  },

  isGrassLiked(postId) {
    const liked = wx.getStorageSync('userLikedGrass') || [];
    return liked.includes(postId);
  },
};
