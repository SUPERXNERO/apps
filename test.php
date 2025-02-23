<?php
    date_default_timezone_set('Asia/Riyadh'); // تحديد المنطقة الزمنية
    $current_time = date('H:i:s'); // الحصول على الوقت الحالي
?><!DOCTYPE html><html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>صفحة PHP بسيطة</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
    </style>
</head>
<body>
    <h1>مرحبًا بك في موقعي البسيط!</h1>
    <p>الوقت الحالي: <?php echo $current_time; ?></p>
</body>
</html>