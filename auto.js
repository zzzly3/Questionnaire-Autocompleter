const filled = new Set();
const set_value = (e, v) => {
    e.value = v;
    e.dispatchEvent(new Event('change'));
};
document.querySelectorAll('input').forEach(e => {
    if (!filled.has(e.name)) {
        filled.add(e.name);
        if (e.type !== 'hidden')
            e.click();
        if (e.type === 'text')
            set_value(e, '12345')
    }
});
document.querySelectorAll('textarea').forEach(e => {
    set_value(e, '12345');
});
document.querySelectorAll('select').forEach(e => {
    set_value(e, e.querySelectorAll('option')[1].value);
});