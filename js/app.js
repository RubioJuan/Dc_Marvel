const personajes = [
    {
        "id": "Spiderman",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://static.tvtropes.org/pmwiki/pub/images/amazing_spider_man_vol_2_50_textless.png",
    "squarePic": "https://media-assets.wired.it/photos/64777453819a9a3fbb232baa/master/pass/Spider-Man.jpg",
        "name": "Spiderman"
    },
    {
        "id": "Iroman",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://i0.wp.com/photos1.blogger.com/blogger/656/2170/1600/Iron%20Man.jpg",
    "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylUgKZplis9Tmr37LZT4WbeCMBBgHE4hPoaw42SL_3r18nYfTKeJTrSaFu38ReaFfoDU&usqp=CAU",
        "name": "Iroman"
    },
    {
        "id": "Capitan America",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://www.akiracomics.com/imagenes/poridentidad?identidad=c1c19372-97ca-4fef-8d35-c9cb19fbcc01&ancho=850&alto=",
    "squarePic": "https://e.rpp-noticias.io/xlarge/2020/06/10/005600_954931.jpg",
        "name": "Capitan America"
    },
    {
        "id": "Thor",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://pm1.aminoapps.com/6857/2a033ee70f8ad81c35510cb13a546a196175597dv2_hq.jpg",
    "squarePic": "https://www.latercera.com/resizer/lnL46pGRKDktOfOU5odCfEKuOpk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/4YMBDPAUPFAXHC6ZU5EW4CGGLI.jpg",
        "name": "Thor"
    },
    {
        "id": "Doctor Strange",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/564x/02/c5/f0/02c5f06bd86d14be48e896a88e02a6b8.jpg",
    "squarePic": "https://www.clarin.com/img/2022/05/05/zrOSKM_Xk_720x0__1.jpg",
        "name": "Doctor Strange"
    }, {
        "id": "Hulk",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-the-hulk-wall-art-tim-hill.jpg",
    "squarePic": "https://hips.hearstapps.com/hmg-prod/images/el-increible-hulk-1554403044.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*",
        "name": "Hulk"
    },
    {
        "id": "Deadpool",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/736x/77/96/50/7796507879438bd7e0e7d978e3198981.jpg",
    "squarePic": "https://cdn.atomix.vg/wp-content/uploads/2023/10/deadpool.jpg",
        "name": "Deadpool"
    },
    {
        "id": "Wolverine",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/736x/62/cd/66/62cd665950ec45d7a522f1e71e294c77.jpg",
    "squarePic": "https://lumiere-a.akamaihd.net/v1/images/the_wolverine_-_feature_71479c84.png?region=193,0,614,614",
        "name": "Wolverine"
    },
    {
        "id": "Loki",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3acc143-332f-43c9-8707-d61106b45a55/dehc4sb-9e2e0504-9f7d-4e8d-80f6-8cf4e6ac4f3f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzYWNjMTQzLTMzMmYtNDNjOS04NzA3LWQ2MTEwNmI0NWE1NVwvZGVoYzRzYi05ZTJlMDUwNC05ZjdkLTRlOGQtODBmNi04Y2Y0ZTZhYzRmM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rf17brC9nEkNZAxCCTUdZ22lX3Fn6xjJBa4EZi_o6OE",
    "squarePic": "https://estaticos.elcolombiano.com/binrepository/580x860/0c168/580d365/none/11101/LTKV/loki-digital-keyart-teaser-v4-lg_37889691_20210608200446.jpg",
        "name": "Loki"
    },
    {
        "id": "Pantera Negra",
        "about": "Mollit officia ad excepteur anim proident incididunt eiusmod mollit consectetur id sit velit. Laborum ut magna officia qui laboris eiusmod do culpa. Culpa dolor officia velit cillum culpa deserunt cupidatat cillum ipsum laborum.",
        "picture": "https://external-preview.redd.it/rZ2htb5Cp3IY04dbfZG-U3ZRmehbz7dpavZbq_4vEFk.jpg?auto=webp&s=a9f91f03477a18221d50722139dabb0058909cf0",
    "squarePic": "https://www.akiracomics.com/imagenes/porreferencia?identidad=50f891c9-b7db-4e05-b9a6-996895a372df&referencia=&ancho=&alto=",
        "name": "Pantera Negra"
    },
    {
        "id": "Rocket Raccoon",
        "about": "Laboris est duis eiusmod adipisicing cillum ut sit ea Lorem non laboris quis Lorem. Est culpa esse aliqua non labore dolor esse labore nulla mollit. Nostrud amet est quis adipisicing dolor. Labore veniam elit veniam non ad ex consequat excepteur eiusmod. Minim cupidatat velit Lorem culpa quis consequat incididunt qui amet incididunt pariatur ex aliquip aliqua. Magna ex elit in aliquip minim eu ut ut fugiat ullamco deserunt adipisicing cillum.",
        "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/dfvnkg7-f7c21dda-4dfd-4c0f-ab8a-7ad4fb54c809.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhYTc5MzU3LTk0NzYtNGMxZC1iOWE4LTZlODgxZjI0NDlkM1wvZGZ2bmtnNy1mN2MyMWRkYS00ZGZkLTRjMGYtYWI4YS03YWQ0ZmI1NGM4MDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KlGN9_DYh1pAC999fkUXdZB1XeDc3irh3GIbWN1UZ0E",
    "squarePic": "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/guardianes-galaxia-roket-sin-piel-miedo/137618718-1-esl-ES/!Rocket-Raccoon-sin-piel-da-aun-mas-mal-rollo.jpg",
        "name": "Rocket Raccoon"
    },
    {
        "id": "Duende Verde",
        "about": "Ipsum tempor sunt Lorem est. Fugiat nisi velit veniam labore et ullamco minim adipisicing do culpa. Cillum voluptate reprehenderit aute consectetur.",
        "picture": "https://pm1.aminoapps.com/6287/a6d14d4645386c4dff6eefb5663bd84cc03311ff_00.jpg",
    "squarePic": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/11/willem-dafoe-como-duende-verde-spider-man-no-way-home-2537203.jpg?tf=1200x",
        "name": "Duende Verde"
    },
    {
        "id": "Doctor Octopus",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://redwoodartgroup.com/wp-content/uploads/2019/09/DrOctopus_MM2018-scaled.jpg",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/335e007c-4af8-4e62-8040-af07c0929c24/dfy8b0l-2a6d7945-7aa4-475a-a893-e6e0ceba0e2f.png/v1/fit/w_375,h_516/doctor_octopus__2021__marvel_puzzle_quest__render_by_egg84_dfy8b0l-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NiIsInBhdGgiOiJcL2ZcLzMzNWUwMDdjLTRhZjgtNGU2Mi04MDQwLWFmMDdjMDkyOWMyNFwvZGZ5OGIwbC0yYTZkNzk0NS03YWE0LTQ3NWEtYTg5My1lNmUwY2ViYTBlMmYucG5nIiwid2lkdGgiOiI8PTc3NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Fkt7C-mXIKtkS4KXDI3yInyajJELRATffzl9PtoWFiQ",
        "name": "Doctor Octopus"
    },
    {
        "id": "Mysterio",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://cdn.marvel.com/content/1x/1_88a91.png",
    "squarePic": "https://www.alexrossart.com/cdn/shop/products/MysterioCOlor_grande.jpg?v=1676644995",
        "name": "Mysterio"
    },
    {
        "id": "Ant-Man",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/474x/da/b9/13/dab913dacebd200f3d1ef48029259740.jpg",
    "squarePic": "https://elcomercio.pe/resizer/_RJiWV7ZJn_-eYzCsP4DUFnyszQ=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WLTQCYI4FVF2TOIMGYXTIVDRSU.jpg",
        "name": "Ant-Man"
    },

]

const personajes1 = [
    {
        "id": "Batman",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/736x/d8/ab/93/d8ab936f4417dc06ac16af7f15e94508.jpg",
    "squarePic": "https://mvsnoticias.com/u/fotografias/m/2022/7/23/f425x230-489583_503565_15.jpg",
        "name": "Batman"
    }, 
    {
        "id": "Superman",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/474x/db/15/ba/db15bac66d1fb1794d53eaa90e5af7db.jpg",
    "squarePic": "https://hips.hearstapps.com/hmg-prod/images/henry-cavill-superman-1536761926.jpg?crop=0.49925925925925924xw:1xh;center,top&resize=640:*",
        "name": "Superman"
    },
    {
        "id": "Arrow",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/736x/8f/87/fa/8f87fae4bcbce280791978801b7796f1.jpg",
    "squarePic": "https://vader.news/__export/1595156863628/sites/gadgets/img/2020/07/19/2a.png_2000922940.png",
        "name": "Arrow"
    },
    {
        "id": "Saint Walker",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://2.bp.blogspot.com/--j_Ycdq4cf4/WWE-42jjd_I/AAAAAAAANrg/U6OOY_qXFFkWgRKiYn1QskYRrI5CIEdHACLcBGAs/s1600/saint-walker.jpg",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5925e7dd-fbd8-4b74-a807-ca9b2f32cf80/df54in0-27c4b24d-a62c-491c-9df8-2fc48bc104c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MjVlN2RkLWZiZDgtNGI3NC1hODA3LWNhOWIyZjMyY2Y4MFwvZGY1NGluMC0yN2M0YjI0ZC1hNjJjLTQ5MWMtOWRmOC0yZmM0OGJjMTA0YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._R_A-XqJ8Obz0aq0kD63202axs9RzHmws6d4qFV5_d8",
        "name": "Saint Walker"
    },
    {
        "id": "Linterna Verde",
        "about": "Ipsum duis incididunt ullamco tempor. Amet incididunt Lorem consequat labore culpa. Pariatur amet veniam reprehenderit sunt laborum excepteur. Labore eu ut ut Lorem labore aliqua quis ex elit nulla in incididunt commodo aliquip. Velit excepteur eiusmod Lorem esse officia. Irure aliquip Lorem fugiat voluptate dolor duis consectetur aliquip pariatur tempor reprehenderit deserunt.",
        "picture": "https://pm1.aminoapps.com/6149/2577219b15f0dd53d06680c5562ce8925524d2e1_00.jpg",
    "squarePic": "https://media.revistagq.com/photos/64073419d8bd3a1a762bdf58/1:1/w_675,h_675,c_limit/por-que-linterna-verde-fracaso.jpg",
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
    "squarePic": "https://www.looper.com/img/gallery/the-untold-truth-of-the-dceus-cyborg/intro-1646948545.jpg",
        "name": "Victor Stone"
    },
    {
        "id": "Acertijo",
        "about": "Deserunt voluptate aliquip ex dolor Lorem exercitation aliqua nisi fugiat aliquip sunt non. Eu cillum enim velit exercitation officia proident exercitation ipsum exercitation Lorem nulla do. Minim sint dolor nostrud ipsum laborum. Velit ea ad ad consectetur nisi Lorem laborum officia esse. Do eu incididunt eiusmod voluptate excepteur consequat ipsum ad. Quis veniam exercitation eiusmod amet non non eu aliquip quis ea. Tempor deserunt nulla adipisicing qui fugiat ipsum labore duis et ea consectetur.",
        "picture": "https://pm1.aminoapps.com/6313/89e05ee3f6b541e1e23f8a9cba5b823d2fad9c8d_00.jpg",
    "squarePic": "https://i.pinimg.com/originals/c8/4c/5a/c84c5af2e49326d2fbb562b29efcbeb7.png",
        "name": "Acertijo"
    },
    {
        "id": "Joker",
        "about": "Esse magna Lorem ipsum incididunt sit. Enim eiusmod proident in adipisicing anim excepteur laborum magna aliqua adipisicing ad qui aliqua. Eiusmod enim ullamco laboris adipisicing tempor sint labore. Exercitation cupidatat incididunt nostrud velit nisi aute eu ex pariatur deserunt mollit. Deserunt nisi enim irure elit. Aute amet amet consequat laborum dolor sint anim Lorem id fugiat commodo cupidatat ad. Ipsum quis enim consectetur occaecat laboris esse.",
        "picture": "https://i.ebayimg.com/images/g/FbEAAOSw9FlfvMZf/s-l1200.webp",
    "squarePic": "https://www.zonanegativa.com/imagenes/2022/11/destacada-deadly.jpg",
        "name": "Joker"
    },
    {
        "id": "Batman que rie",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RLLN5WFEVNDNXP4MHGRE24TJGA.jpg",
    "squarePic": "https://qph.cf2.quoracdn.net/main-qimg-db0d94f4a533687a72812bd2759d7b1d-lq",
        "name": "Batman que rie"
    },
    {
        "id": "Harley quinn",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/736x/78/50/fe/7850fefc6bdf25bf951bab0cba545e79.jpg",
    "squarePic": "https://www.lavoz.com.ar/resizer/yKDFhSPOV8ngqCyJxf3NjfkPJgE=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/G75E3GVL3FBTBDM6IY7WTTLGKY.jpg",
        "name": "Harley quinn"
    }, {
        "id": "Flash",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://i.pinimg.com/originals/2a/33/40/2a33400f5e4b9cd90fc4645c19f28b2e.jpg",
    "squarePic": "https://i.blogs.es/d60e27/the-flash/840_560.jpeg",
        "name": "Flash"
    },
    {
        "id": "Bane",
        "about": "Id aute in dolore dolor in incididunt dolore duis do mollit officia. Ullamco pariatur eiusmod laborum culpa quis non occaecat ad cillum dolore labore aliqua. Elit magna commodo aliquip laborum aliqua duis.",
        "picture": "https://1.bp.blogspot.com/-Y27f2bRpwzs/Xt_7EL6NhhI/AAAAAAAB67k/SCNmSLL4xN0Df7ORX1b9kk8_XDzx0vYcwCLcBGAsYHQ/s1600/bane.jpg",
    "squarePic": "https://nogma.co/wp-content/uploads/2018/12/the-dark-knight-rises-bane.jpg",
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
    divHola.classList.add('personaje');

    const divTitulo1 = document.createElement('div');
    divTitulo1.classList.add('div-titulo1');

    const img = document.createElement('img');
    img.src = personaje.picture;
    img.alt = personaje.name;

    const br = document.createElement('br');

    const button = document.createElement('button');
    button.textContent = 'Ver';
    button.classList.add('ver');

    const divModal = document.createElement('div');
    divModal.classList.add('modalContainer');

    const divModalContent = document.createElement('div');
    divModalContent.classList.add('modal-content');

    const spanClose = document.createElement('span');
    spanClose.classList.add('close');
    spanClose.textContent = 'X';

    const h2 = document.createElement('h2');
    h2.textContent = personaje.name;

    const p = document.createElement('p');
    p.textContent = personaje.about;

    const imgSquare = document.createElement('img');
    imgSquare.src = personaje.squarePic;
    imgSquare.alt = personaje.name;

    divTitulo1.appendChild(img);
    divTitulo1.appendChild(br);
    divTitulo1.appendChild(button);

    divModalContent.appendChild(spanClose);
    divModalContent.appendChild(h2);
    divModalContent.appendChild(p);
    divModalContent.appendChild(imgSquare);

    divModal.appendChild(divModalContent);

    divHola.appendChild(divTitulo1);
    divHola.appendChild(divModal);

    return divHola;
}

function cargarPersonajes(personajes) {
    const contenedor = document.getElementById('contenedor');

    personajes.forEach(personaje => {
        const elemento = crearEstructuraHTML(personaje);
        contenedor.appendChild(elemento);

        // Event listener for the button to show modal
        const button = elemento.querySelector('.ver');
        button.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'block';
        });

        // Event listener for closing modal
        const spanClose = elemento.querySelector('.close');
        spanClose.addEventListener('click', () => {
            const modal = elemento.querySelector('.modalContainer');
            modal.style.display = 'none';
        });

        // Event listener to close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            const modal = elemento.querySelector('.modalContainer');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Call the function to load characters from both arrays
cargarPersonajes(personajes);
cargarPersonajes(personajes1);
