const blogList = [
    {   
        id: 1,
        imgUrl: '/src/assets/images/blog/01.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'نقد و بررسی گوشی‌های هوشمند جدید.',
        desc: 'بررسی کامل گوشی‌های هوشمند جدید و مقایسه آنها با مدل‌های قدیمی تر.',
        commentCount: '3',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'محمد رضا',
            },
            {
                iconName: 'icofont-calendar',
                text: '۱۵ اردیبهشت ۱۴۰۳',
            },
        ],
    },
    {
        id: 2,
        imgUrl: '/src/assets/images/blog/02.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'راهنمای خرید لوازم خانگی.',
        desc: 'نکات مهم در خرید لوازم خانگی و معرفی بهترین برندها.',
        commentCount: '5',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'سارا احمدی',
            },
            {
                iconName: 'icofont-calendar',
                text: '۲۰ اردیبهشت ۱۴۰۳',
            },
        ],
    },
    {
        id: 3,
        imgUrl: '/src/assets/images/blog/03.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'مقایسه لپ‌تاپ‌های مخصوص بازی.',
        desc: 'بررسی و مقایسه لپ‌تاپ‌های جدید مناسب برای بازی‌های سنگین.',
        commentCount: '8',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'علی اکبر',
            },
            {
                iconName: 'icofont-calendar',
                text: '۲۵ اردیبهشت ۱۴۰۳',
            },
        ],
    },
    {
        id: 4,
        imgUrl: '/src/assets/images/blog/04.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'راهنمای خرید تلویزیون‌های 4K.',
        desc: 'معرفی و بررسی بهترین تلویزیون‌های 4K موجود در بازار.',
        commentCount: '2',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'زهرا حسینی',
            },
            {
                iconName: 'icofont-calendar',
                text: '۳۰ اردیبهشت ۱۴۰۳',
            },
        ],
    },
    {
        id: 5,
        imgUrl: '/src/assets/images/blog/05.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'بهترین دوربین‌های عکاسی حرفه‌ای.',
        desc: 'معرفی و بررسی بهترین دوربین‌های عکاسی حرفه‌ای برای عکاسان.',
        commentCount: '4',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'مهدی نوری',
            },
            {
                iconName: 'icofont-calendar',
                text: '۵ خرداد ۱۴۰۳',
            },
        ],
    },
    {
        id: 6,
        imgUrl: '/src/assets/images/blog/06.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'نکات مهم در خرید لپ‌تاپ دانشجویی.',
        desc: 'بررسی و معرفی بهترین لپ‌تاپ‌ها برای دانشجویان با بودجه محدود.',
        commentCount: '6',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'ندا شریفی',
            },
            {
                iconName: 'icofont-calendar',
                text: '۱۰ خرداد ۱۴۰۳',
            },
        ],
    },
    {
        id: 7,
        imgUrl: '/src/assets/images/blog/07.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'معرفی جدیدترین لوازم جانبی موبایل.',
        desc: 'بررسی جدیدترین و کاربردی‌ترین لوازم جانبی برای گوشی‌های هوشمند.',
        commentCount: '1',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'پریسا صالحی',
            },
            {
                iconName: 'icofont-calendar',
                text: '۱۵ خرداد ۱۴۰۳',
            },
        ],
    },
    {
        id: 8,
        imgUrl: '/src/assets/images/blog/08.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'بررسی ساعت‌های هوشمند جدید.',
        desc: 'مقایسه و بررسی ویژگی‌های جدیدترین ساعت‌های هوشمند موجود در بازار.',
        commentCount: '7',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'رضا مرادی',
            },
            {
                iconName: 'icofont-calendar',
                text: '۲۰ خرداد ۱۴۰۳',
            },
        ],
    },
    {
        id: 9,
        imgUrl: '/src/assets/images/blog/09.jpg',
        imgAlt: 'تصویر بلاگ',
        title: 'راهنمای خرید کنسول‌های بازی.',
        desc: 'معرفی و مقایسه بهترین کنسول‌های بازی برای گیمرها.',
        commentCount: '10',
        btnText: 'ادامه مطلب',
        metaList: [
            {
                iconName: 'icofont-ui-user',
                text: 'کیوان جعفری',
            },
            {
                iconName: 'icofont-calendar',
                text: '۲۵ خرداد ۱۴۰۳',
            },
        ],
    },
]

export default blogList
