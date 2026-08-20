const db = require('../../../utils/db');
const app = getApp();

Page({
  data: { orderId: '', isShipped: false },
  _carrier: '',
  _number: '',

  onLoad(options) {
    if (!app.globalData.isMerchant) { wx.navigateBack(); return; }
    const orderId = options.id || '';
    const order = db.getAllOrders().find(item => item.id === orderId);
    const tracking = order && order.tracking ? order.tracking : {};
    this.setData({ orderId, isShipped: !!(order && order.status === 'shipped') });
    this._carrier = tracking.carrier || '';
    this._number = tracking.number || '';
  },

  onCarrierInput(e) { this._carrier = e.detail.value; },
  onNumberInput(e) { this._number = e.detail.value; },

  onQuickShip() {
    const { orderId } = this.data;
    wx.showModal({
      title: '一键发货',
      content: '确认现在发货吗？物流单号可以稍后补充。',
      confirmText: '确认发货',
      confirmColor: '#C87941',
      success: (res) => {
        if (!res.confirm) return;
        db.updateOrderStatus(orderId, 'shipped', { carrier: '快递', number: '', shippedAt: new Date().toISOString() });
        wx.showToast({ title: '已一键发货', icon: 'success' });
        setTimeout(() => wx.navigateBack(), 1000);
      },
    });
  },

  onSave() {
    const { orderId, isShipped } = this.data;
    const number = (this._number || '').trim();
    const carrier = (this._carrier || '').trim();
    if (!number) {
      wx.showToast({ title: '请填写物流单号，或使用一键发货', icon: 'none' }); return;
    }
    db.updateOrderStatus(orderId, 'shipped', { carrier: carrier || '快递', number, shippedAt: new Date().toISOString() });
    wx.showToast({ title: isShipped ? '物流信息已补充' : '已标记发货', icon: 'success' });
    setTimeout(() => wx.navigateBack(), 1000);
  },
});
