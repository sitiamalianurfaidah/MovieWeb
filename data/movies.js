const movies = [
    {
        id: "sore",
        title: "Sore: Istri dari Masa Depan",
        year: 2025,
        poster: "/sore.jpg",
        director: "Yandy Laurens",
        description:
        "Film ini mengisahkan tentang Jonathan yang dikejutkan oleh kehadiran seorang perempuan asing di rumahnya. Pada pagi hari, Jo terbangun dan terkejut saat menemukan seorang perempuan tak dikenal tertidur di sampingnya, perempuan itu bernama Sore.",
        trailer: "https://youtu.be/HiVzpboRpR0?si=oY5XavEBDPzz6SnZ",
        tags: ["Drama", "Romantis"],
    },
    {
        id: "sakatupo",
        title: "1 Kakak 7 Ponakan",
        year: 2025,
        poster: "/sakatupo.jpg",
        director: "Yandy Laurens",
        description:
        "Film yang dirilis pada Januari 2025 ini merupakan salah satu film terbaik yang disutradarai oleh Yandy Laurens dengan genre drama-keluarga. Kisah mengikuti Moko, seorang arsitek muda yang tengah merintis kariernya. Setelah kehilangan kakak-kakaknya secara tiba-tiba, ia mendadak harus mengemban tanggung jawab sebagai wali bagi para keponakannya.",
        trailer: "https://youtu.be/LkUsJMFngiI?si=LZ5U4rHPWyKVL0sb",
        tags: ["Drama", "Keluarga"],
    },
    {
        id: "jesedef",
        title: "Jatuh Cinta Seperti di Film-Film",
        year: 2023,
        poster: "/jesedef.jpeg",
        director: "Yandy Laurens",
        description:
        "Jatuh Cinta Seperti di Film-Film merupakan film yang disutradarai dan ditulis oleh Yandy Laurens yang bergenre drama-romantis. Cerita berfokus pada Bagus, seorang penulis skenario yang tanpa sengaja bertemu kembali dengan Hana, teman sekaligus cinta masa SMA-nya.",
        trailer: "https://youtu.be/F6jPobzz-ag?si=WtRbFnZArLm1GznN",
        tags: ["Drama", "Romantis", "Komedi"],
    },
    {
        id: "yhdc",
        title: "Yang Hilang Dalam Cinta",
        year: 2022,
        poster: "/yhdc.webp",
        director: "Yandy Laurens",
        description:
        "Yang Hilang Dalam Cinta merupakan series yang ditulis serta disutradarai oleh Yandy Laurens. Series ini memiliki 12 episode yang berkisah tentang Satria, yang harus menyaksikan kenyataan pahit saat cinta pertamanya, Dara, akan menikah dengan pria lain bernama Rendra. Namun segalanya berubah ketika Dara tiba-tiba menghilang secara misterius dan hanya Satria yang masih bisa melihat dan menyentuhnya.",
        trailer: "https://youtu.be/H2PsUxmTeKA?si=-Oezbn5UaGmspCZN",
        tags: ["Drama", "Romantis", "Fantasi"],
    },
    {
        id: "ptsm",
        title: "Perjalanan Terbaik Sepanjang Masa",
        year: 2022,
        poster: "/ptsm.jpg",
        director: "Yandy Laurens",
        description:
        "Rekomendasi series terbaik karya Yandy Laurens yang pertama berjudul Perjalanan Terbaik Sepanjang Masa. Dalam series ini Yandy Laurens menjadi sutradara dan membuat film ini terasa hangat saat ditonton. Kisahnya tentang dinamika sebuah keluarga yang tengah menghadapi berbagai persoalan, seperti anak perempuan yang tertangkap merokok di sekolah, serta ayah yang terlalu sibuk dengan pekerjaannya.",
        trailer: "https://youtu.be/fSz-tYnMFRI?si=mlyiHu5b-IZ4jwwh",
        tags: ["Drama"],
    },
    {
        id: "10m",
        title: "Sepuluh Meter",
        year: 2020,
        poster: "/10m.webp",
        director: "Yandy Laurens",
        description:
        "Film ‘Sepuluh Meter’ garapan Yandy Laurens bercerita tentang hal tersebut, tentang pentingnya menjaga kesehatan mental di tengah masa karantina. Film yang diperankan oleh Ringgo Agus Rahman dan Nirina Zubir ini menceritakan tentang kehidupan Ringgo pada masa karantina.",
        trailer: "https://youtu.be/OWaxFxMfEZg?si=uT_d6RMsFJQq6V-5",
        tags: ["Drama"],
    },
    {
        id: "cemara",
        title: "Keluarga Cemara",
        year: 2018,
        poster: "/cemara.jpeg",
        director: "Yandy Laurens",
        description:
        "Keluarga Cemara merupakan salah satu film yang disutradarai oleh Yandy Laurens yang diadaptasi dari novel dengan judul yang sama karya Arswendo Atmowiloto. Film ini menceritakan tentang perjuangan Abah yang harus kehilangan rumah dan harta bendanya akibat utang iparnya yang menumpuk.",
        trailer: "https://youtu.be/sGaeDzD_3o0?si=Y08OEHio1Z0xX0TN",
        tags: ["Drama", "Keluarga"],
    },
    {
        id: "mcd3e",
        title: "Mengakhiri Cinta Dalam 3 Episode",
        year: 2018,
        poster: "/mcd3e.jpg",
        director: "Yandy Laurens",
        description:
        "Mengakhiri Cinta dalam 3 Episode merupakan salah satu series yang disutradarai Yandy Laurens. Menceritakan kisah Satrio dan Ayu, pasangan yang telah menjalin hubungan cukup lama dan tengah mempersiapkan pernikahan mereka. Namun, rencana itu mendadak berubah ketika Satrio mulai meragukan perasaannya.",
        trailer: "https://youtu.be/yII5Neo61nA?si=OzyATHN5cAs5fkH4",
        tags: ["Drama", "Fantasi"],
    },
    {
        id: "sore-web",
        title: "Sore Web Series",
        year: 2017,
        poster: "/sore-web.webp",
        director: "Yandy Laurens",
        description:
        "Kisahnya berpusat pada Jonathan, seorang pria asal Indonesia yang menetap di Italia. Suatu hari, hidupnya berubah ketika seorang perempuan bernama Sore tiba-tiba muncul dan mengaku sebagai istrinya yang datang dari masa depan.",
        trailer: "https://youtu.be/GlfaHW02seM?si=0He13KiefU2kJABL",
        tags: ["Drama", "Romantis"],
    },
    {
        id: "wanan",
        title: "Wan an",
        year: 2012,
        poster: "/wanan.jpeg",
        director: "Yandy Laurens",
        description:
        "Salah satu film terbaik yang disutradarai Yandy Laurens adalah Wan an. Film pendek yang berdurasi 20 menit ini berhasil mendapatkan penghargaan Piala Citra di Festival Film Indonesia pada tahun 2012. Cerita dalam film ini mengangkat kisah Tji dan Ing, pasangan suami istri lansia keturunan Tionghoa yang saling mencintai dan memahami secara emosional.",
        trailer: "https://youtu.be/qxZ-Ci1m8sE?si=-uhwDkivGy5XWWPQ",
        tags: ["Drama", "Keluarga"],
    },
];

export default movies;
