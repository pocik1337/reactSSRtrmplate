export const indexTemplate = (content) => `
<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Менеджер работы с задачами</title>
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <div id="react-root">${content}</div>
</body>
</html>
`;