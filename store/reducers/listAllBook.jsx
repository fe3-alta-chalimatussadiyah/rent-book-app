const initialState = [
            {
                "id": "25",
                "title": "I Want To Die But I Want To Eat Tteokpokki",
                "isbn": "978-623-7351-03-0",
                "author": "Baek Se Hee",
                "image_url": "http://www.penerbitharu.com/upload/product/thumb-2020-03-19-11-05-13-i-want-to-die-but-i-want-to-eat-tteokpokki.jpg"
            },
            {
                "id": "20",
                "title": "Bumi Manusia",
                "isbn": "9789799731234",
                "author": "Pramoedya Ananta Toer",
                "image_url": "https://www.jtbooks.my/wp-content/uploads/2019/09/96-scaled.jpg"
            },
            {
                "id": "21",
                "title": "Rich Dad Poor Dad",
                "isbn": "9786020333175",
                "author": "Robert Kiyosaki and Sharon Lechter",
                "image_url": "https://media.karousell.com/media/photos/products/2018/07/30/rich_dad_poor_dad_by_robert_kiyosaki_1532921397_3a3704210_progressive"
            },
            {
                "id": "31",
                "title": "A Dance with Dragons (A Song of Ice and Fire, Book 5)",
                "isbn": "9780007455997",
                "author": "George R. R. Martin",
                "image_url": "https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg"
            },
            {
                "id": "12",
                "title": "Mastering Golang",
                "isbn": "1-234-5678-9101112-13",
                "author": "Dr. Who",
                "image_url": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516979843i/38209725.jpg"
            },
            {
                "id": "23",
                "title": "Aku Bukannya Menyerah, Hanya Sedang Lelah",
                "isbn": "978-623-7351-71-9",
                "author": "Geulbaewoo",
                "image_url": "http://www.penerbitharu.com/upload/product/thumb-2021-06-18-14-02-15-aku-bukannya-menyerah-hanya-sedang-lelah.jpg"
            },
            {
                "id": "16",
                "title": "The 100: A Ranking of the Most Influential People in History",
                "isbn": "9780806513508",
                "author": "Michael H. Hart",
                "image_url": "https://bit.ly/3rAbgY7"
            },
            {
                "id": "13",
                "title": "Think and Grow Rich",
                "isbn": "9781640952492",
                "author": "Napoleon Hill",
                "image_url": "https://ebooks.gramedia.com/ebook-covers/47982/image_highres/ID_TGR2019MTH06TGR.jpg"
            },
            {
                "id": "44",
                "title": "Puisi, Buku, dan Kerang Laut Sepenggal Memoar Pablo Neruda",
                "isbn": "978-602-52645-6-6",
                "author": "Pablo Neruda",
                "image_url": "https://mojokstore.com/wp-content/uploads/2018/11/Puisi-Buku-dan-Kerang-Laut.jpeg"
            },
            {
                "id": "14",
                "title": "How to Win Friends & Influence People",
                "isbn": "9781982171452",
                "author": "Dale Carnegie",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/619Gn-+VNQL.jpg"
            },
            {
                "id": "41",
                "title": "Pro Git",
                "isbn": "9781484200766",
                "author": "Scott Chacon and Ben Straub",
                "image_url": "https://cf.shopee.co.id/file/be29cd5226b167e24bb225f5bf24ea41"
            },
            {
                "id": "15",
                "title": "Talk Like Ted",
                "isbn": "9781529068658",
                "author": "Carmine Gallo",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/41i9paOh1gL._SX327_BO1,204,203,200_.jpg"
            },
            {
                "id": "24",
                "title": "Goodbye Fairy",
                "isbn": "978-623-7351-31-3",
                "author": "Yonezawa Honobu",
                "image_url": "http://www.penerbitharu.com/upload/product/thumb-2020-05-06-13-39-20-goodbye-fairy.jpg"
            },
            {
                "id": "29",
                "title": "A Storm of Swords (A Song of Ice and Fire, Book 3)",
                "isbn": "9780553106633",
                "author": "George R. R. Martin",
                "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/AStormOfSwords.jpg/220px-AStormOfSwords.jpg"
            },
            {
                "id": "28",
                "title": "A Clash of Kings (A Song of Ice and Fire, Book 2)",
                "isbn": "9780553579901",
                "author": "George R. R. Martin",
                "image_url": "https://upload.wikimedia.org/wikipedia/en/3/39/AClashOfKings.jpg"
            },
            {
                "id": "40",
                "title": "You Don't Know JS Yet",
                "isbn": "9798602477429",
                "author": "Kyle Simpson",
                "image_url": "https://m.media-amazon.com/images/I/410f-bUBR3L.jpg"
            },
            {
                "id": "22",
                "title": "Aku Ingin Pulang Meski Sudah Dirumah",
                "isbn": "978-623-7351-82-5",
                "author": "Kwon Rabin",
                "image_url": "http://www.penerbitharu.com/upload/product/thumb-2021-10-11-09-17-42-aku-ingin-pulang-meski-sudah-dirumah.jpg"
            },
            {
                "id": "37",
                "title": "Understanding ECMAScript 6",
                "isbn": "9781593277574",
                "author": "Nicholas C. Zakas",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/512T+d+VK6L._SX376_BO1,204,203,200_.jpg"
            },
            {
                "id": "39",
                "title": "Learning JavaScript Design Patterns",
                "isbn": "9781449331818",
                "author": "Addy Osmani",
                "image_url": "https://m.media-amazon.com/images/I/51H-31ivMTL.jpg"
            },
            {
                "id": "32",
                "title": "Self Driving",
                "isbn": "9789794338513",
                "author": "Rhenald Kasali, Ph.D.",
                "image_url": "https://images.tokopedia.net/img/cache/500-square/product-1/2020/5/12/batch-upload/batch-upload_9b72a7ff-00a7-4d47-9af1-4af316e86587.jpg"
            },
            {
                "id": "17",
                "title": "A Mind for Numbers",
                "isbn": "9780399165245",
                "author": "Barbara Oakley",
                "image_url": "https://bit.ly/3sqKzE9"
            },
            {
                "id": "27",
                "title": "A Game of Thrones (A Song of Ice and Fire, Book 1)",
                "isbn": "9780553573404",
                "author": "George R. R. Martin",
                "image_url": "https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg"
            },
            {
                "id": "19",
                "title": "Tenggelamnya Kapal van der Wijck",
                "isbn": "9786022504160",
                "author": "Prof. Dr. Hamka",
                "image_url": "https://i0.wp.com/mysyabab.com/wp-content/uploads/2019/01/TENGGELAMNYA-KAPAL-VAN-DER-WIJCK.jpg?fit=800%2C1227&ssl=1"
            },
            {
                "id": "35",
                "title": "Eloquent JavaScript, Third Edition",
                "isbn": "9781593279509",
                "author": "Marijn Haverbeke",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg"
            },
            {
                "id": "42",
                "title": "Rethinking Productivity in Software Engineering",
                "isbn": "9781484242216",
                "author": "Caitlin Sadowski, Thomas Zimmermann",
                "image_url": "https://andre-meyer.ch/wp-content/uploads/2019/05/cover-800x624.png"
            },
            {
                "id": "45",
                "title": "Jalan pikiran waktu",
                "isbn": "978-602-443-419-9",
                "author": "Abdul Karim",
                "image_url": "https://s4.bukalapak.com/img/4803431633/large/iklan_jalan_pikiran_waktu__2_.jpg"
            },
            {
                "id": "26",
                "title": "Manajemen Leha-leha",
                "isbn": "978-623-7351-49-8",
                "author": "Nishida Masaki",
                "image_url": "http://www.penerbitharu.com/upload/product/thumb-2020-12-02-10-29-15-manajemen-leha-leha.jpg"
            },
            {
                "id": "43",
                "title": "Percy Jackson and The Olympians : The Lightning Thief",
                "isbn": "978-602-385-193-5",
                "author": "Rick Riordan",
                "image_url": "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Lightning_Thief_cover.jpg"
            },
            {
                "id": "34",
                "title": "Bumi Manusia",
                "isbn": "9799731232",
                "author": "Pramoedya Ananta Toer",
                "image_url": " http://assets.kompasiana.com/items/album/2021/03/03/bumi-manusia-pram-603f1e2dd541df385f49eeb5.jpg"
            },
            {
                "id": "18",
                "title": "Go Global",
                "isbn": "978-6020303796",
                "author": "Handi Kurniawan",
                "image_url": "https://bit.ly/3B6uNlY"
            },
            {
                "id": "38",
                "title": "Speaking JavaScript",
                "isbn": "9781449365035",
                "author": "Axel Rauschmayer",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/91sXL7wrjgL.jpg"
            },
            {
                "id": "36",
                "title": "Practical Modern JavaScript",
                "isbn": "9781491943533",
                "author": "Nicolás Bevacqua",
                "image_url": "https://images-na.ssl-images-amazon.com/images/I/813hbklwWBL.jpg"
            },
            {
                "id": "30",
                "title": "A Feast for Crows (A Song of Ice and Fire, Book 4)",
                "isbn": "9780553801507",
                "author": "George R. R. Martin",
                "image_url": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/AFeastForCrows.jpg/220px-AFeastForCrows.jpg"
            },
            {
                "id": "33",
                "title": "Demon Slayer: Kimetsu no Yaiba, Vol. 9",
                "isbn": " 978-1-97-470443-9",
                "author": "Koyoharu Gotouge",
                "image_url": "https://static.wikia.nocookie.net/kimetsu-no-yaiba/images/8/88/Kimetsu_no_Yaiba_V9.png"
            }
];

const listAllBook = (state = initialState, action) => {
  if (action.type == "SET_LIST_BOOK") {
    if (Array.isArray(action.payload)) return action.payload;
  }

  return state;
};

export default listAllBook;