const markupEmail = (newPassword) =>
    `<html>
        <head>
            <style>
                @font-face {
                    font-family: 'Furore';
                    src: url('https://eng-for-uarmy.onrender.com/fonts/Furore.woff2') format('truetype');
                    font-weight: 400;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Arial';
                    src: url('https://eng-for-uarmy.onrender.com/fonts/ArialMT.woff2') format('truetype');
                    font-weight: 400;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Arial-Bold';
                    src: url('https://eng-for-uarmy.onrender.com/fonts/Arial-BoldMT.woff2') format('truetype');
                    font-weight: 700;
                    font-style: normal;
                }
                body {
                    font-family: 'Arial', sans-serif;
                }
                h2,
                p {
                    margin: 0;
                    padding: 0;
                }
                img {
                    display: block;
                    max-width: 100%;
                    height: auto;
                }
            </style>
        </head>
        <body style='margin: 0 auto; padding: 24px 40px 56px; text-align: center; background-color: #F2F1F1;'>
            <img src='https://eng-for-uarmy.onrender.com/logo.png'
                alt='logo'
                width='222px
                height='92px'
                style='margin: 0 auto 66px;'/>

            <h2 style='margin-bottom: 40px; font-family: Furore; font-size: 30px; color: #231F20;'>
                Вас вітає Eng for UArmy
            </h2>

            <p style='margin-bottom: 40px;
                font-family: Arial;
                font-size: 18px;
                line-height: 1.5;
                color: #231F20;'>
                Ми отримали Ваш запит на відновлення паролю для входу в адміністративну частину сайту. Для того, щоб увійти в обліковий запис, скористайтеся новим паролем.
            </p>

            <div style='font-size: 22px;
                font-weight: 700;
                line-height: 1.5;
                letter-spacing: -0.408px;'>
                <span style='margin-right: 8px; color: #231F20;'> Ваш новий пароль: </span>
                <span style='color: #798738;'>${newPassword}</span>
            </div>
        </body>
    </html>`;

module.exports = markupEmail;