function openDrawer(dateStr){
    const r = byDate[dateStr];
    if(!r) return;
    const pay = (typeof PAYMENTS !== 'undefined' && PAYMENTS[dateStr]) ? PAYMENTS[dateStr] : {cash:[], bank:[], cashTotalReported:null, bankTotalReported:null};
    const drawer = document.getElementById('drawer');
    const t = translations[currentLang];
    drawer.innerHTML = `
    <div class="drawer-head">
        <div>
            <div class="drawer-title">${t.drawerTitle}</div>
            <div class="drawer-date">${r.date} – ${r.dow}</div>
        </div>
    </div>
    <table class="detail-table">
    <thead><tr><th colspan="2">${t.revenues}</th></tr></thead>
    <tbody>
        <tr><td>${t.cashSales}</td><td class="v">${fmt(r.cashSales)}</td></tr>
        <tr><td>${t.cardSales}</td><td class="v">${fmt(r.cardSales)}</td></tr>
        <tr><td>${t.bankTransfer}</td><td class="v">${fmt(r.bankTransfer)}</td></tr>
        <tr><td>${t.creditSales}</td><td class="v">${fmt(r.creditSales)}</td></tr>
        <tr style="color: #22c55e; font-weight: bold; font-size: 1.3em;"><td>${t.totalSales}</td><td class="v">${fmt(r.totalSales)}</td></tr>
    </tbody>
    </table>
    <table class="detail-table">
    <thead><tr><th colspan="2">${t.cashFlow}</th></tr></thead>
    <tbody>
        <tr><td>${t.openBalance}</td><td class="v">${fmt(r.openBalance)}</td></tr>
        <tr><td>${t.collections}</td><td class="v">${fmt(r.collections)}</td></tr>
        <tr><td>${t.supplierCash}</td><td class="v">${fmt(r.supplierCash)}</td></tr>
        <tr><td>${t.cashPurchases}</td><td class="v">${fmt(r.cashPurchases)}</td></tr>
        <tr><td>${t.cashExpenses}</td><td class="v">${fmt(r.cashExpenses)}</td></tr>
        <tr style="color: #22c55e; font-weight: bold; font-size: 1.3em;"><td>${t.closeBalance}</td><td class="v">${fmt(r.closeBalance)}</td></tr>
    </tbody>
    </table>
    ${paymentsTableHtml(t.supplierCash, pay.cash, pay.cashTotalReported)}
    ${paymentsTableHtml(t.supplierBank || (currentLang === 'en' ? 'Supplier Bank Transfers' : 'سداد موردين بنكياً (تحويل)'), pay.bank, pay.bankTotalReported)}
    `;
    document.getElementById('drawerBackdrop').classList.add('open');
}
