const db = require('../../../utils/db');
const app = getApp();

Page({
  data: {
    accounts: [],
    showAddModal: false,
    form: { name: '', username: '', password: '' },
  },

  onLoad() {
    if (app.globalData.merchantRole !== 'main') {
      wx.showToast({ title: '仅主账号可访问', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1000);
      return;
    }
    this.loadAccounts();
  },

  onShow() {
    this.loadAccounts();
  },

  loadAccounts() {
    const accounts = db.getSubAccounts().map(a => ({
      ...a,
      createdAt: a.createdAt ? a.createdAt.substring(0, 10) : '—',
    }));
    this.setData({ accounts });
  },

  onBack() {
    wx.navigateBack();
  },

  onAddAccount() {
    this.setData({ showAddModal: true, form: { name: '', username: '', password: '' } });
  },

  onCloseModal() {
    this.setData({ showAddModal: false });
  },

  onFormName(e) { this.setData({ 'form.name': e.detail.value }); },
  onFormUsername(e) { this.setData({ 'form.username': e.detail.value }); },
  onFormPassword(e) { this.setData({ 'form.password': e.detail.value }); },

  onSubmitAdd() {
    const { form } = this.data;
    if (!form.name.trim()) { wx.showToast({ title: '请填写账号名称', icon: 'none' }); return; }
    if (!form.username.trim()) { wx.showToast({ title: '请填写登录账号', icon: 'none' }); return; }
    if (!form.password || form.password.length < 6) { wx.showToast({ title: '密码至少6位', icon: 'none' }); return; }
    const result = db.addSubAccount({ name: form.name.trim(), username: form.username.trim(), password: form.password });
    if (!result.success) {
      wx.showToast({ title: result.msg || '添加失败', icon: 'none' }); return;
    }
    this.setData({ showAddModal: false });
    this.loadAccounts();
    wx.showToast({ title: '子账号已添加', icon: 'success' });
  },

  onToggleFreeze(e) {
    const { id, frozen } = e.currentTarget.dataset;
    const account = this.data.accounts.find(a => a.id === id);
    if (!account) return;
    const isFrozen = !frozen;
    wx.showModal({
      title: isFrozen ? '冻结账号' : '解冻账号',
      content: isFrozen
        ? '冻结后该子账号将无法登录，确认冻结「' + account.name + '」？'
        : '解冻后该子账号可正常登录，确认解冻「' + account.name + '」？',
      confirmText: isFrozen ? '冻结' : '解冻',
      confirmColor: isFrozen ? '#C87941' : '#3A9A3A',
      success: (res) => {
        if (!res.confirm) return;
        db.freezeSubAccount(id, isFrozen);
        this.loadAccounts();
        wx.showToast({ title: isFrozen ? '已冻结' : '已解冻', icon: 'none' });
      },
    });
  },

  onResetPassword(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.showModal({
      title: '重置密码',
      content: '请输入「' + name + '」的新密码（至少6位）',
      editable: true,
      placeholderText: '新密码',
      success: (res) => {
        if (!res.confirm || !res.content) return;
        if (res.content.length < 6) { wx.showToast({ title: '密码至少6位', icon: 'none' }); return; }
        db.updateSubAccount(id, { password: res.content });
        wx.showToast({ title: '密码已重置', icon: 'success' });
      },
    });
  },

  onDelete(e) {
    const { id, name } = e.currentTarget.dataset;
    wx.showModal({
      title: '删除子账号',
      content: '确认删除「' + name + '」？此操作不可恢复。',
      confirmText: '删除',
      confirmColor: '#C87941',
      success: (res) => {
        if (!res.confirm) return;
        db.deleteSubAccount(id);
        this.loadAccounts();
        wx.showToast({ title: '已删除', icon: 'success' });
      },
    });
  },
});
