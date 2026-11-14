document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const weightInput = document.getElementById('weight-input');
    const normOutput = document.getElementById('norm-output');

    const savedTheme = localStorage.getItem('aquamen-theme');
    if (savedTheme === 'light') {
        body.classList.add('light-theme');
        themeToggleBtn.textContent = '🌙';
    } else {
        themeToggleBtn.textContent = '☀️';
    }

weightInput.addEventListener('input', () => {
    const rawValue = weightInput.value.replace(',', '.');
    const weight = parseFloat(rawValue);

    if (!isNaN(weight) && weight > 0 && weight <= 350) {
        const ml = Math.round(weight * 30);
        const liters = (ml / 1000).toFixed(2);
        normOutput.textContent = `${liters} л (${ml} мл)`;
    } else if (weight > 350) {
        normOutput.textContent = 'Введите реальный вес';
    } else {
        normOutput.textContent = 'Ваша норма...';
    }
});

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('aquamen-theme', 'light');
        } else {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('aquamen-theme', 'dark');
        }
    });

    weightInput.addEventListener('input', () => {
        const weight = parseFloat(weightInput.value);

        if (!isNaN(weight) && weight > 0) {
            const liters = (weight * 0.03).toFixed(2);
            normOutput.textContent = `${liters} л в день`;
        } else {
            normOutput.textContent = 'Ваша норма...';
        }
    });
});