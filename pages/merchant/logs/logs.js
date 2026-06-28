const db = require('../../../utils/db');
const app = getApp();

const ACTION_META = {
  edit_display_sold: { label: '改已售',     icon: '📊', color: 'orange', fieldLabel: '已售'     },
  edit_real_sold:    { label: '改内部数据', icon: '📈', color: 'dark',   fieldLabel: '内部数据' },
  edit_stock:        { label: '改库存',     icon: '📦', color: 'teal',   fieldLabel: '库存'     },
  order_sold:        { label: '订单销量',   icon: '🛒', color: 'green',  fieldLabel: '订单触发' },
};

const FILTER_OPTIONS = [
  { val: 'all',              label: '全部' },
  { val: 'edit_display_sold', label: '已售'     },
  { val: 'edit_real_sold',    label: '内部数据' },
  { val: 'edit_stock',        label: '库存修改' },
  { val: 'order_sold',        label: '订单触发' },
];

function formatTime(isoStr) {
  if (!isoStr) return '—';
  const d = new Date(isoStr);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function processLog(log) {
  const meta = ACTION_META[log.action] || { label: log.action, icon: '·', color: 'dark', fieldLabel: log.field };
  const isOrder = log.action === 'order_sold';
  let oldStr = '', newStr = '', soldQty = '';
  if (!isOrder) {
    oldStr = String(log.oldValue !== undefined ? log.oldValue : '—');
    newStr = String(log.newValue !== undefined ? log.newValue : '—');
  } else {
    /* order_sold: oldValue/newValue are objects */
    try {
      const oldV = log.oldValue || {};
      const newV = log.newValue || {};
      soldQty = (newV.real_sold || 0) - (oldV.real_sold || 0);
    } catch (e) { soldQty = 1; }
  }
  return {
    ...log,
    actionLabel: meta.label,
    actionIcon: meta.icon,
    actionColor: meta.color,
    fieldLabel: meta.fieldLabel,
    timeStr: formatTime(log.time),
    isOrder,
    oldStr,
    newStr,
    soldQty,
  };
}

Page({
  data: {
    logs: [],
    activeFilter: 'all',
    filterOptions: FILTER_OPTIONS,
  },

  onLoad() {
    if (app.globalData.merchantRole !== 'main') {
      wx.showToast({ title: '仅主账号可查看日志', icon: 'none' });
      setTimeout(() => wx.navigateBack(), 1000);
      return;
    }
    this.loadLogs();
  },

  onShow() {
    this.loadLogs();
  },

  loadLogs() {
    const { activeFilter } = this.data;
    const raw = db.getOperationLogs(activeFilter);
    const logs = raw.map(processLog);
    this.setData({ logs });
  },

  onFilterChange(e) {
    const val = e.currentTarget.dataset.val;
    this.setData({ activeFilter: val }, () => this.loadLogs());
  },

  onClearLogs() {
    if (this.data.logs.length === 0) {
      wx.showToast({ title: '日志已为空', icon: 'none' }); return;
    }
    wx.showModal({
      title: '清空操作日志',
      content: '确认清空全部 ' + this.data.logs.length + ' 条日志？此操作不可恢复。',
      confirmText: '清空',
      confirmColor: '#C87941',
      success: (res) => {
        if (!res.confirm) return;
        db.clearOperationLogs();
        this.loadLogs();
        wx.showToast({ title: '日志已清空', icon: 'success' });
      },
    });
  },

  onBack() {
    wx.navigateBack();
  },
});
