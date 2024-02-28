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
        "picture": "https://www.geekmi.news/__export/1698454800382/sites/debate/img/2023/10/24/disexo_sin_txtulo_x45x.jpg_423682103.jpg",
    "squarePic": "https://static.wikia.nocookie.net/disney/images/9/96/Iron-Man-AOU-Render.png/revision/latest/scale-to-width-down/1200?cb=20180410032118&path-prefix=es",
        "name": "Iroman"
    },
    {
        "id": "Capitan America",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://pm1.aminoapps.com/6072/a6accc9fef58647c3aa6607a712b5e6bfefa07d4_hq.jpg",
    "squarePic": "https://static.wikia.nocookie.net/disney/images/f/fa/Captain-America-AOU-Render.png/revision/latest?cb=20180420015558&path-prefix=es",
        "name": "Capitan America"
    },
    {
        "id": "Thor",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/736x/ac/96/91/ac96918f842e8ef6595ae192adf76fce.jpg",
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
        "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/424b4e7e-df3c-4d76-a996-927cced18d13/devksi3-dd8abcd4-d3c0-48d7-a5ec-f9146bbbda13.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQyNGI0ZTdlLWRmM2MtNGQ3Ni1hOTk2LTkyN2NjZWQxOGQxM1wvZGV2a3NpMy1kZDhhYmNkNC1kM2MwLTQ4ZDctYTVlYy1mOTE0NmJiYmRhMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X7mYEDhmVNVvGd3JhEITOgzwfmUnfILIFfWDWmfvrkg",
    "squarePic": "hhttps://static.wikia.nocookie.net/ficcion-sin-limites/images/8/88/DP.png/revision/latest/scale-to-width-down/370?cb=20210217170751&path-prefix=es",
        "name": "Deadpool"
    },
    {
        "id": "Wolverine",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2017/11/wolverine-principal.jpg",
    "squarePic": "https://static.wikia.nocookie.net/featteca/images/8/82/Wolverine_PNG1.png/revision/latest/scale-to-width-down/477?cb=20220219192157&path-prefix=es",
        "name": "Wolverine"
    },
    {
        "id": "Loki",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3acc143-332f-43c9-8707-d61106b45a55/dehc4sb-9e2e0504-9f7d-4e8d-80f6-8cf4e6ac4f3f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzYWNjMTQzLTMzMmYtNDNjOS04NzA3LWQ2MTEwNmI0NWE1NVwvZGVoYzRzYi05ZTJlMDUwNC05ZjdkLTRlOGQtODBmNi04Y2Y0ZTZhYzRmM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rf17brC9nEkNZAxCCTUdZ22lX3Fn6xjJBa4EZi_o6OE",
    "squarePic": "https://static.wikia.nocookie.net/marveldatabase/images/a/a2/Loki_Laufeyson_%28Earth-616%29_from_Thor_Vol_3_12_0001.jpg/revision/latest?cb=20201011071529",
        "name": "Loki"
    },
    {
        "id": "Pantera Negra",
        "about": "Mollit officia ad excepteur anim proident incididunt eiusmod mollit consectetur id sit velit. Laborum ut magna officia qui laboris eiusmod do culpa. Culpa dolor officia velit cillum culpa deserunt cupidatat cillum ipsum laborum.",
        "picture": "https://www.smashmexico.com.mx/wp-content/uploads/sites/2/2018/01/12073615/marvel-datos-black-panther-traje.jpg",
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
        "picture": "https://pm1.aminoapps.com/6287/a6d14d4645386c4dff6eefb5663bd84cc03311ff_00.jpg",
    "squarePic": "https://e7.pngegg.com/pngimages/837/430/png-clipart-spider-man-green-goblin-supervillain-iron-man-green-goblin-superhero-villain-thumbnail.png",
        "name": "Duende Verde"
    },
    {
        "id": "Doctor Octopus",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://e1.pxfuel.com/desktop-wallpaper/657/476/desktop-wallpaper-dr-otto-octavius-doctor-octopus-marvel-comics.jpg",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/335e007c-4af8-4e62-8040-af07c0929c24/dfy8b0l-2a6d7945-7aa4-475a-a893-e6e0ceba0e2f.png/v1/fit/w_375,h_516/doctor_octopus__2021__marvel_puzzle_quest__render_by_egg84_dfy8b0l-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NiIsInBhdGgiOiJcL2ZcLzMzNWUwMDdjLTRhZjgtNGU2Mi04MDQwLWFmMDdjMDkyOWMyNFwvZGZ5OGIwbC0yYTZkNzk0NS03YWE0LTQ3NWEtYTg5My1lNmUwY2ViYTBlMmYucG5nIiwid2lkdGgiOiI8PTc3NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Fkt7C-mXIKtkS4KXDI3yInyajJELRATffzl9PtoWFiQ",
        "name": "Doctor Octopus"
    },
    {
        "id": "Mysterio",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://cdn.marvel.com/content/1x/1_88a91.png",
    "squarePic": "https://i.pinimg.com/736x/43/26/1f/43261f9552e0edee27e1783f58ce30e8.jpg",
        "name": "Mysterio"
    },
    {
        "id": "Ant-Man",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/474x/da/b9/13/dab913dacebd200f3d1ef48029259740.jpg",
    "squarePic": "https://static.wikia.nocookie.net/marveldatabase/images/7/7c/Astonishing_Ant-Man_Vol_1_10_Mighty_Men_of_Marvel_Cancelled_Variant_Textless.jpg/revision/latest?cb=20160319233924",
        "name": "Ant-Man"
    },

]

const personajes1 = [
    {
        "id": "Batman",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://www.geekmi.news/__export/1604437633818/sites/debate/img/2020/11/03/batman.jpg_423682103.jpg",
    "squarePic": "https://i.pinimg.com/736x/57/f1/3e/57f13ec1b6e2d5712d03fec842e08356.jpg",
        "name": "Batman"
    }, 
    {
        "id": "Superman",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/474x/db/15/ba/db15bac66d1fb1794d53eaa90e5af7db.jpg",
    "squarePic": "https://static.wikia.nocookie.net/superman/images/4/4d/Superman_Moderno.png/revision/latest/thumbnail/width/360/height/360?cb=20150126220714&path-prefix=es",
        "name": "Superman"
    },
    {
        "id": "Arrow",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/736x/8f/87/fa/8f87fae4bcbce280791978801b7796f1.jpg",
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
        "picture": "https://pm1.aminoapps.com/6149/2577219b15f0dd53d06680c5562ce8925524d2e1_00.jpg",
    "squarePic": "https://static.wikia.nocookie.net/batman/images/8/88/Linterna-verde.jpg/revision/latest?cb=20170921191634&path-prefix=es",
        "name": "Linterna Verde"
    },
    {
        "id": "Black Manta",
        "about": "Mollit officia ad excepteur anim proident incididunt eiusmod mollit consectetur id sit velit. Laborum ut magna officia qui laboris eiusmod do culpa. Culpa dolor officia velit cillum culpa deserunt cupidatat cillum ipsum laborum.",
        "picture": "https://i.pinimg.com/originals/ff/a1/c8/ffa1c8514637f7886d6d2ed0f8fe58eb.jpg",
    "squarePic": "https://www.zonanegativa.com/imagenes/2021/09/BLACK-DES.jpg",
        "name": "Black Manta"
    },
    {
        "id": "Roy Harper",
        "about": "Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.",
        "picture": "https://i.redd.it/uy1lm1c8ch7b1.jpg",
    "squarePic": "https://upload.wikimedia.org/wikipedia/en/d/d6/Roy_Harper_%28Speedy_-_Arsenal_-_Red_Arrow%29%2C_DC_Comics_character.jpg",
        "name": "Roy Harper"
    },
    {
        "id": "Victor Stone",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://dccontinuityproject.weebly.com/uploads/5/4/5/1/54516433/979895588_orig.jpg",
    "squarePic": "https://images7.alphacoders.com/115/1150055.jpg",
        "name": "Victor Stone"
    },
    {
        "id": "Acertijo",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://www.looper.com/img/gallery/a-familiar-face-is-being-eyed-to-play-riddler-in-the-batman/intro-1565023656.jpg",
    "squarePic": "https://i.pinimg.com/originals/c8/4c/5a/c84c5af2e49326d2fbb562b29efcbeb7.png",
        "name": "Acertijo"
    },
    {
        "id": "Joker",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://media.gq.com.mx/photos/5f467227ef6115112e88bcf9/1:1/w_1514,h_1514,c_limit/multimedia.normal.8f06f5c72b963335.6261746d616e2d74687265652d6a6f6b6572732d323033323430315f6e6f726d616c2e6a7067.jpg",
    "squarePic": "https://www.zonanegativa.com/imagenes/2022/11/destacada-deadly.jpg",
        "name": "Joker"
    },
    {
        "id": "Batman que rie",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/564x/1a/79/21/1a7921cfa0a36daf4aed607ac05c82f0.jpg",
    "squarePic": "https://qph.cf2.quoracdn.net/main-qimg-db0d94f4a533687a72812bd2759d7b1d-lq",
        "name": "Batman que rie"
    },
    {
        "id": "Harley quinn",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://sm.ign.com/t/ign_es/feature/h/how-dcs-ha/how-dcs-harleen-reinvents-harley-quinns-tragic-origin-story_d4kq.1280.jpg",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77768f52-334f-4ce8-a583-4704f0d5e15f/dgfa05e-ed9efcfe-4b0e-4cef-a89e-26ff13f0f563.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NzY4ZjUyLTMzNGYtNGNlOC1hNTgzLTQ3MDRmMGQ1ZTE1ZlwvZGdmYTA1ZS1lZDllZmNmZS00YjBlLTRjZWYtYTg5ZS0yNmZmMTNmMGY1NjMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5SIIa3nirrwcY7uKkoP6zPtWUT7VNUz_PM6fC4oeUEs",
        "name": "Harley quinn"
    }, {
        "id": "Flash",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/originals/2a/33/40/2a33400f5e4b9cd90fc4645c19f28b2e.jpg",
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
        "picture": "https://elcomercio.pe/resizer/a5kviPbJuSbdbzwk92d1ZL_NTYU=/400x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/AAOCDQB5QFBGFGOQE6STYLGOZE.jpg",
    "squarePic": "https://www.eltiempo.com/files/image_640_428/uploads/2017/05/27/592a2cb922681.jpeg",
        "name": "Mujer Maravilla"
    }
]

function crearEstructuraHTML(personaje) {
    const divHola = document.createElement('div');
    divHola.className = 'hola';

    const divTitulo1 = document.createElement('div');
    divTitulo1.className = 'titulo1';

    const img = document.createElement('img');
    img.src = personaje.picture;
    img.id = personaje.id;

    const br = document.createElement('br');

    const button = document.createElement('button');
    button.id = 'extra';
    button.className = 'ver';
    button.textContent = 'Obtener';

    const divModal = document.createElement('div');
    divModal.id = 'myModal';
    divModal.className = 'modalContainer';

    const divModalContent = document.createElement('div');
    divModalContent.className = 'modal-content';

    const spanClose = document.createElement('span');
    spanClose.className = 'close';
    spanClose.textContent = 'X';

    const h2 = document.createElement('h2');
    h2.textContent = personaje.name;

    const p = document.createElement('p');
    p.textContent = personaje.about;

    // Adjuntar elementos al árbol DOM
    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);

    divModal.appendChild(divModalContent);

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);
    divTitulo1.appendChild(divModal);

    divHola.appendChild(divTitulo1);

    return divHola;
}

// Obtener el contenedor donde se agregarán los elementos
const contenedor = document.getElementById('contenedor');

// Crear y agregar cada estructura HTML al contenedor
personajes.forEach(personaje => {
    const estructuraHTML = crearEstructuraHTML(personaje);
    contenedor.appendChild(estructuraHTML);
});