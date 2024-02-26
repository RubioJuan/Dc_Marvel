const personajes = [
    {
        "id": "Spiderman",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
    "squarePic": "https://static.wikia.nocookie.net/ficcion-sin-limites/images/6/6b/Spidey.png/revision/latest/scale-to-width-down/375?cb=20210226124716&path-prefix=es",
        "name": "Spiderman"
    },
    {
        "id": "Iroman",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://www.mundodeportivo.com/alfabeta/hero/2023/12/iron-man-endgame-ucm.jpg?width=1200&aspect_ratio=16:9",
    "squarePic": "https://static.wikia.nocookie.net/disney/images/9/96/Iron-Man-AOU-Render.png/revision/latest/scale-to-width-down/1200?cb=20180410032118&path-prefix=es",
        "name": "Iroman"
    },
    {
        "id": "Capitan America",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://www.mundodeportivo.com/alfabeta/hero/2023/07/capitan-america-uno-de-los-superheroes-mas-iconicos-del-mundo-por-su-escudo.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    "squarePic": "https://static.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png/revision/latest?cb=20180420015558&path-prefix=es",
        "name": "Capitan America"
    },
    {
        "id": "Thor",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://www.akiracomics.com/imagenes/poridentidad?identidad=743556e5-39ed-4b42-9762-3596c8ec15cf&ancho=850&alto=",
    "squarePic": "https://static.wikia.nocookie.net/personajes-de-ficcion-database/images/c/cb/Classic_Thor.png/revision/latest/scale-to-width-down/519?cb=20201003125917&path-prefix=es",
        "name": "Thor"
    },
    {
        "id": "Doctor Strange",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://revistahush.com/wp-content/uploads/2023/04/Doctor-Stange-7.webp",
    "squarePic": "https://cdn.kinocheck.com/i/3e1r3zcsy8.jpg",
        "name": "Doctor Strange"
    }, {
        "id": "Hulk",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-the-hulk-wall-art-tim-hill.jpg",
    "squarePic": "https://static.wikia.nocookie.net/vsbattles/images/a/a8/Hulk_png_render_from_aou_by_joaohbd-d8knjyv.png/revision/latest/scale-to-width-down/420?cb=20161009033221",
        "name": "Hulk"
    },
    {
        "id": "Deadpool",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://www.eltiempo.com/files/article_main_1200/uploads/2017/07/12/5966363401170.jpeg",
    "squarePic": "hhttps://static.wikia.nocookie.net/ficcion-sin-limites/images/8/88/DP.png/revision/latest/scale-to-width-down/370?cb=20210217170751&path-prefix=es",
        "name": "Deadpool"
    },
    {
        "id": "Wolverine",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://media.gq.com/photos/58b9fda8803bdb766dd69ef7/16:9/w_1280,c_limit/wolverine.jpg",
    "squarePic": "https://static.wikia.nocookie.net/featteca/images/8/82/Wolverine_PNG1.png/revision/latest/scale-to-width-down/477?cb=20220219192157&path-prefix=es",
        "name": "Wolverine"
    },
    {
        "id": "Loki",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://www.denofgeek.com/wp-content/uploads/2021/06/loki-marvel-comics-ebay.jpg?fit=1200%2C675",
    "squarePic": "https://static.wikia.nocookie.net/marveldatabase/images/a/a2/Loki_Laufeyson_%28Earth-616%29_from_Thor_Vol_3_12_0001.jpg/revision/latest?cb=20201011071529",
        "name": "Loki"
    },
    {
        "id": "Pantera Negra",
        "about": "Mollit officia ad excepteur anim proident incididunt eiusmod mollit consectetur id sit velit. Laborum ut magna officia qui laboris eiusmod do culpa. Culpa dolor officia velit cillum culpa deserunt cupidatat cillum ipsum laborum.",
        "picture": "hhttps://static.wikia.nocookie.net/marvel/images/8/83/Original_Sin_Vol_1_2_Variante_de_Dell%27Otto_Sin_Texto.jpg/revision/latest?cb=20150627194318&path-prefix=es",
    "squarePic": "https://i.pinimg.com/1200x/fa/4b/98/fa4b9861c9bd99c754d3487b3b4637ce.jpg",
        "name": "Pantera Negra"
    },
    {
        "id": "Rocket Raccoon",
        "about": "Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.",
        "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/dfvnkg7-f7c21dda-4dfd-4c0f-ab8a-7ad4fb54c809.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhYTc5MzU3LTk0NzYtNGMxZC1iOWE4LTZlODgxZjI0NDlkM1wvZGZ2bmtnNy1mN2MyMWRkYS00ZGZkLTRjMGYtYWI4YS03YWQ0ZmI1NGM4MDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KlGN9_DYh1pAC999fkUXdZB1XeDc3irh3GIbWN1UZ0E",
    "squarePic": "https://www.geekmi.news/__export/1682885713364/sites/debate/img/2023/04/30/axadir_un_txtulo_x23x.jpg_1902800913.jpg",
        "name": "Rocket Raccoon"
    },
    {
        "id": "Duende Verde",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://esports.as.com/2022/01/13/fortnite/Duende-Verde_1537656246_894316_1440x810.jpg",
    "squarePic": "https://e7.pngegg.com/pngimages/837/430/png-clipart-spider-man-green-goblin-supervillain-iron-man-green-goblin-superhero-villain-thumbnail.png",
        "name": "Duende Verde"
    },
    {
        "id": "Doctor Octopus",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://static.wikia.nocookie.net/ficcion-sin-limites/images/e/e9/DocOckSpiderman2.jpg/revision/latest/scale-to-width-down/1200?cb=20190108194205&path-prefix=es",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/335e007c-4af8-4e62-8040-af07c0929c24/dfy8b0l-2a6d7945-7aa4-475a-a893-e6e0ceba0e2f.png/v1/fit/w_375,h_516/doctor_octopus__2021__marvel_puzzle_quest__render_by_egg84_dfy8b0l-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NiIsInBhdGgiOiJcL2ZcLzMzNWUwMDdjLTRhZjgtNGU2Mi04MDQwLWFmMDdjMDkyOWMyNFwvZGZ5OGIwbC0yYTZkNzk0NS03YWE0LTQ3NWEtYTg5My1lNmUwY2ViYTBlMmYucG5nIiwid2lkdGgiOiI8PTc3NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Fkt7C-mXIKtkS4KXDI3yInyajJELRATffzl9PtoWFiQ",
        "name": "Doctor Octopus"
    },
    {
        "id": "Mysterio",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "8Earth-199999%29_from_Spider-Man_Far_from_Home_promotional_art_001.jpg/revision/latest?cb=20190714205418&path-prefix=es",
    "squarePic": "https://i.pinimg.com/736x/43/26/1f/43261f9552e0edee27e1783f58ce30e8.jpg",
        "name": "Mysterio"
    },
    {
        "id": "Ant-Man",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/originals/94/3c/e7/943ce76a717a773a0ee4537d1c96a636.png",
    "squarePic": "https://static.wikia.nocookie.net/marveldatabase/images/7/7c/Astonishing_Ant-Man_Vol_1_10_Mighty_Men_of_Marvel_Cancelled_Variant_Textless.jpg/revision/latest?cb=20160319233924",
        "name": "Ant-Man"
    },







    {
        "id": "Batman",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://www.mundodeportivo.com/alfabeta/hero/2024/02/batman-bruce-wayne-dc.jpg?width=768&aspect_ratio=16:9&format=nowebp",
    "squarePic": "https://i.pinimg.com/736x/57/f1/3e/57f13ec1b6e2d5712d03fec842e08356.jpg",
        "name": "Batman"
    }, 
    {
        "id": "Superman",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://media.glamour.mx/photos/639a9161ae6d5769b13abe3f/1:1/w_1713,h_1713,c_limit/henry_cavill_deja_superman.jpg",
    "squarePic": "https://static.wikia.nocookie.net/superman/images/4/4d/Superman_Moderno.png/revision/latest/thumbnail/width/360/height/360?cb=20150126220714&path-prefix=es",
        "name": "Superman"
    },
    {
        "id": "Arrow",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://4.bp.blogspot.com/-G-gNCQJHA5g/UlyjK-qxF6I/AAAAAAAAEBs/uXnBmtcFsWk/s400/315px-Green_Arrow_Oliver_Queen-4.jpg",
    "squarePic": "https://static.wikia.nocookie.net/doblaje/images/3/30/4315129-green%2Barrow.jpg/revision/latest?cb=20160531182627&path-prefix=es",
        "name": "Arrow"
    },
    {
        "id": "Saint Walker",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://2.bp.blogspot.com/--j_Ycdq4cf4/WWE-42jjd_I/AAAAAAAANrg/U6OOY_qXFFkWgRKiYn1QskYRrI5CIEdHACLcBGAs/s1600/saint-walker.jpg",
    "squarePic": "https://www.giantbomb.com/a/uploads/scale_medium/16/164924/2455923-walker.png",
        "name": "Saint Walker"
    },
    {
        "id": "Linterna Verde",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://media.revistagq.com/photos/64073419d8bd3a1a762bdf58/1:1/w_675,h_675,c_limit/por-que-linterna-verde-fracaso.jpg",
    "squarePic": "https://static.wikia.nocookie.net/batman/images/8/88/Linterna-verde.jpg/revision/latest?cb=20170921191634&path-prefix=es",
        "name": "Linterna Verde"
    },
    {
        "id": "Black Manta",
        "about": "Mollit officia ad excepteur anim proident incididunt eiusmod mollit consectetur id sit velit. Laborum ut magna officia qui laboris eiusmod do culpa. Culpa dolor officia velit cillum culpa deserunt cupidatat cillum ipsum laborum.",
        "picture": "https://static.wikia.nocookie.net/dccu/images/1/1f/Black_Manta_Profile.jpg/revision/latest?cb=20231016151135",
    "squarePic": "https://www.zonanegativa.com/imagenes/2021/09/BLACK-DES.jpg",
        "name": "Black Manta"
    },
    {
        "id": "Roy Harper",
        "about": "Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.",
        "picture": "https://static.wikia.nocookie.net/actiontalesfanfict/images/2/22/Arsenal_RoyHarper.jpg/revision/latest?cb=20140902091612&path-prefix=es",
    "squarePic": "https://upload.wikimedia.org/wikipedia/en/d/d6/Roy_Harper_%28Speedy_-_Arsenal_-_Red_Arrow%29%2C_DC_Comics_character.jpg",
        "name": "Roy Harper"
    },
    {
        "id": "Victor Stone",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://static.wikia.nocookie.net/dcextendeduniverse/images/2/2a/Victor_Stone.png/revision/latest?cb=20240104055756&path-prefix=es",
    "squarePic": "https://images7.alphacoders.com/115/1150055.jpg",
        "name": "Victor Stone"
    },
    {
        "id": "Acertijo",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://lh3.googleusercontent.com/proxy/M1rg7BzSeBW9pUFMJU0o-aue0nGRlxghTQY2HNp7eeTnunoFPZ-nKvweaNuhHfGSPk3-2_yH6O4jVuwSyJtc9GtyXbQzkk2MoJafOs1jkonW0bkixC8SawbeE1YLrUwwG_r8OQqo0qr0MqVRU8SCkhKPMs0xiEp8-RsqPGAt_x2sx5DVar2C2Vm-wjbMcZPp6ziM4PadV65ERah01xjVXXgpxjfaO1nRRcU4",
    "squarePic": "https://i.pinimg.com/originals/c8/4c/5a/c84c5af2e49326d2fbb562b29efcbeb7.png",
        "name": "Acertijo"
    },
    {
        "id": "Joker",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://cde.laprensa.e3.pe/ima/0/0/2/3/0/230618.jpg",
    "squarePic": "https://www.zonanegativa.com/imagenes/2022/11/destacada-deadly.jpg",
        "name": "Joker"
    },
    {
        "id": "Batman que rie",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://static.wikia.nocookie.net/batman/images/8/8d/El_Batman_que_r%C3%ADe_%28Dark_Nights_Metal%29.jpg/revision/latest?cb=20210202024210&path-prefix=es",
    "squarePic": "https://qph.cf2.quoracdn.net/main-qimg-db0d94f4a533687a72812bd2759d7b1d-lq",
        "name": "Batman que rie"
    },
    {
        "id": "Harley quinn",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://e7.pngegg.com/pngimages/44/9/png-clipart-harley-quinn-joker-batman-supervillain-dc-comics-harley-quinn-comics-heroes.png",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77768f52-334f-4ce8-a583-4704f0d5e15f/dgfa05e-ed9efcfe-4b0e-4cef-a89e-26ff13f0f563.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NzY4ZjUyLTMzNGYtNGNlOC1hNTgzLTQ3MDRmMGQ1ZTE1ZlwvZGdmYTA1ZS1lZDllZmNmZS00YjBlLTRjZWYtYTg5ZS0yNmZmMTNmMGY1NjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5SIIa3nirrwcY7uKkoP6zPtWUT7VNUz_PM6fC4oeUEs",
        "name": "Harley quinn"
    }, {
        "id": "Flash",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.blogs.es/c883f0/the-flash-hbo-max-mexico/650_1200.jpeg",
    "squarePic": "https://i.pinimg.com/originals/2a/33/40/2a33400f5e4b9cd90fc4645c19f28b2e.jpg",
        "name": "Flash"
    },
    {
        "id": "Bane",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://larepublica.cronosmedia.glr.pe/migration/images/VUQC7EVEIJHEVM7F4YHPULJGIA.jpg",
    "squarePic": "https://static.wikia.nocookie.net/dcandmarvelheroes/images/c/ca/317px-Batman_The_Dark_Knight_Vol_2_6_Textless.jpg/revision/latest?cb=20120306220313&path-prefix=es",
        "name": "Bane"
    },
    {
        "id": "Mujer Maravilla",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://static01.nyt.com/images/2017/06/02/arts/02WONDER/02WONDER-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "squarePic": "https://www.eltiempo.com/files/image_640_428/uploads/2017/05/27/592a2cb922681.jpeg",
        "name": "Mujer Maravilla"
    }
]