const newPasswordMarkup = () => {
    return
    `<html>
        <body style='margin: 0 auto; width: 604px; text-align: center;'>
            <img src='./src/images/logo.svg' alt='logo' width='222px height='92px' style='margin: 26px auto;'/>
            <h2>Вас вітає Eng for UArmy</h2>
            <p>Ми отримали Ваш запит на відновлення паролю для входу в адміністративну частину сайту. Для того, щоб увійти в обліковий запис, скористайтеся новим паролем.</p>
            <span> Ваш новий пароль: </span>
            <span style='color: #798738;'>{password}</span>
        </body>
    </html>`
};

module.exports = newPasswordMarkup;