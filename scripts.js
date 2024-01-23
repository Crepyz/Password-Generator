document.addEventListener('DOMContentLoaded', (event) => {
    const generateBtn = document.getElementById('btn');
    const passwordLengthField = document.getElementById('length');
    const passwordGeneratedField = document.getElementById('passwordGenerated');

    generateBtn.addEventListener('click', () => {
        const length = parseInt(passwordLengthField.value, 10);
        if (isNaN(length) || length <= 0) {
            alert('Please enter a valid positive number for the length.');
            return;
        }
        passwordGeneratedField.value = generatePassword(length);
    });

    function generatePassword(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?[];,./\'';
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});
