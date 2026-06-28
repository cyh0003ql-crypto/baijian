const db = require('../../../utils/db');
const app = getApp();

function normalizeProduct(p) {
  if (!p) return p;
  const cover = (p.images && p.images.length > 0) ? p.images[0] : (p.image || '');
  return {
    ...p,
    image: cover,
    display_sold: p.display_sold !== undefined ? p.display_sold : 0,
    real_sold: p.real_sold !== undefined ? p.real_sold : 0,
  };
}

Page({
  data: {
    activeTab: 0,
    products: [],
    newbieProducts: [],
    isMainAccount: false,
  },

  onLoad(options) {
    if (!app.globalData.isMerchant) {
      wx.navigateBack(); return;
    }
    const isMainAccount = app.globalData.merchantRole === 'main';
    this.setData({ isMainAccount });
    if (options.tab) {
      this.setData({ activeTab: parseInt(options.tab) || 0 });
    }
    this.loadProducts();
    this.loadNewbieProducts();
  },

  onShow() {
    const isMainAccount = app.globalData.merchantRole === 'main';
    this.setData({ isMainAccount });
    this.loadProducts();
    this.loadNewbieProducts();
  },

  onTabSwitch(e) {
    this.setData({ activeTab: parseInt(e.currentTarget.dataset.tab) });
  },

  loadProducts() {
    const rawProducts = db.getProducts();
    const products = rawProducts.map(p => {
      const display_sold = db.getDisplaySoldCount(p.id);
      const real_sold = db.getRealSoldCount(p.id);
      return normalizeProduct({ ...p, display_sold, real_sold });
    });
    this.setData({ products });
  },

  loadNewbieProducts() {
    const newbieProducts = db.getAllNewbieProducts().map(normalizeProduct);
    this.setData({ newbieProducts });
  },

  onAdd() {
    wx.navigateTo({ url: '/pages/merchant/add-product/add-product' });
  },

  onEdit(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/merchant/add-product/add-product?id=' + id });
  },

  onDelete(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.showModal({
      title: '删除商品',
      content: '确认删除「' + name + '」？此操作不可恢复。',
      confirmText: '删除',
      confirmColor: '#C87941',
      success: (res) => {
        if (!res.confirm) return;
        db.deleteProduct(id);
        this.loadProducts();
        wx.showToast({ title: '已删除', icon: 'success' });
      },
    });
  },

  onToggleFeatured(e) {
    const { id } = e.currentTarget.dataset;
    const product = db.getProductById(id);
    if (!product) return;
    db.updateProduct(id, { isFeatured: !product.isFeatured });
    this.loadProducts();
  },

  onUpdateStock(e) {
    const { id } = e.currentTarget.dataset;
    const product = db.getProductById(id);
    if (!product) return;
    wx.showModal({
      title: '修改库存',
      editable: true,
      placeholderText: '当前库存：' + product.stock,
      success: (res) => {
        if (!res.confirm || !res.content) return;
        const stock = parseInt(res.content);
        if (isNaN(stock) || stock < 0) { wx.showToast({ title: '请输入有效数量', icon: 'none' }); return; }
        db.updateStock(id, stock);
        this.loadProducts();
        wx.showToast({ title: '库存已更新', icon: 'success' });
      },
    });
  },

  /* 修改展示销量（主账号和子账号均可） */
  onEditDisplaySold(e) {
    const { id, display } = e.currentTarget.dataset;
    wx.showModal({
      title: '修改已售数量',
      content: '已售数量是用户端看到的数字，修改后用户端同步更新。',
      editable: true,
      placeholderText: '当前展示销量：' + (display || 0),
      success: (res) => {
        if (!res.confirm || res.content === '') return;
        const count = parseInt(res.content);
        if (isNaN(count) || count < 0) { wx.showToast({ title: '请输入有效数字', icon: 'none' }); return; }
        db.setDisplaySoldCount(id, count);
        this.loadProducts();
        wx.showToast({ title: '已售数量已更新', icon: 'success' });
      },
    });
  },

  /* 修改真实销量（仅主账号） */
  onEditRealSold(e) {
    const { id, real } = e.currentTarget.dataset;
    if (app.globalData.merchantRole !== 'main') {
      wx.showToast({ title: '无权限', icon: 'none' }); return;
    }
    wx.showModal({
      title: '修改内部数据',
      content: '内部数据用于内部统计，不对外显示。',
      editable: true,
      placeholderText: '当前真实销量：' + (real || 0),
      success: (res) => {
        if (!res.confirm || res.content === '') return;
        const count = parseInt(res.content);
        if (isNaN(count) || count < 0) { wx.showToast({ title: '请输入有效数字', icon: 'none' }); return; }
        db.setRealSoldCount(id, count);
        this.loadProducts();
        wx.showToast({ title: '内部数据已更新', icon: 'success' });
      },
    });
  },

  onAddNewbie() {
    wx.navigateTo({ url: '/pages/merchant/newbie-form/newbie-form' });
  },

  onEditNewbie(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({ url: '/pages/merchant/newbie-form/newbie-form?id=' + id });
  },

  onToggleNewbieActive(e) {
    const { id } = e.currentTarget.dataset;
    const product = this.data.newbieProducts.find(p => p.id === id);
    if (!product) return;
    db.updateNewbieProduct(id, { isActive: !product.isActive });
    this.loadNewbieProducts();
    wx.showToast({ title: product.isActive ? '已下架' : '已上架', icon: 'none' });
  },

  onDeleteNewbie(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.showModal({
      title: '删除新人商品',
      content: '确认删除「' + name + '」？此操作不可恢复。',
      confirmText: '删除',
      confirmColor: '#C87941',
      success: (res) => {
        if (!res.confirm) return;
        db.deleteNewbieProduct(id);
        this.loadNewbieProducts();
        wx.showToast({ title: '已删除', icon: 'success' });
      },
    });
  },

  onUpdateNewbieStock(e) {
    const { id } = e.currentTarget.dataset;
    const product = this.data.newbieProducts.find(p => p.id === id);
    if (!product) return;
    wx.showModal({
      title: '修改库存',
      editable: true,
      placeholderText: '当前库存：' + product.stock,
      success: (res) => {
        if (!res.confirm || !res.content) return;
        const stock = parseInt(res.content);
        if (isNaN(stock) || stock < 0) { wx.showToast({ title: '请输入有效数量', icon: 'none' }); return; }
        db.updateNewbieProduct(id, { stock });
        this.loadNewbieProducts();
        wx.showToast({ title: '新人商品库存已更新', icon: 'success' });
      },
    });
  },
});
