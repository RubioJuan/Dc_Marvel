const personajes = [
    {
        "id": "Spiderman",
        "about": "Peter Parker es un adolescente como otro cualquiera. Vive con su tía May y su tío Ben, va al instituto y le encantan las clases de ciencias. Sin embargo, todo cambia el día que, durante una excursión del insituto a un laboratorio, ¡Peter es mordido por una araña radioactiva y se convierte en Spider-Man!",
        "picture": "https://static.tvtropes.org/pmwiki/pub/images/amazing_spider_man_vol_2_50_textless.png",
    "squarePic": "https://media-assets.wired.it/photos/64777453819a9a3fbb232baa/master/pass/Spider-Man.jpg",
        "name": "Spiderman"
    },
    {
        "id": "Iron-man",
        "about": "Anthony Edward,más conocido como Tony Stark es un multimillonario magnate empresarial y filántropo estadounidense, playboy e ingenioso científico, que sufrió una grave lesión en el pecho durante un secuestro en el Medio Oriente.",
        "picture": "https://i0.wp.com/photos1.blogger.com/blogger/656/2170/1600/Iron%20Man.jpg",
    "squarePic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTylUgKZplis9Tmr37LZT4WbeCMBBgHE4hPoaw42SL_3r18nYfTKeJTrSaFu38ReaFfoDU&usqp=CAU",
        "name": "Iron-man"
    },
    {
        "id": "Capitan America",
        "about": "Steve Rogers nació durante la Depresión y creció, convirtiéndose en un joven débil en una familia pobre. Su padre murió cuando él era un niño; su madre, durante la adolescencia de Steve. Horrorizado ante un noticiario que mostraba a los nazis en Europa, Rogers intentó alistarse en el ejército.",
        "picture": "https://www.akiracomics.com/imagenes/poridentidad?identidad=c1c19372-97ca-4fef-8d35-c9cb19fbcc01&ancho=850&alto=",
    "squarePic": "https://e.rpp-noticias.io/xlarge/2020/06/10/005600_954931.jpg",
        "name": "Capitan America"
    },
    {
        "id": "Thor",
        "about": "Thor es el hijo de Odín, señor de los dioses de Asgard, y de Jord, que también es conocida como Gea, la más anciana diosa de la Tierra. Odín quería ser padre de un hijo cuyo poder derivase de la Tierra y de Asgard, así que se apareó con Jord. Odín creó una cueva en Noruega donde Jord dio a luz a Thor.",
        "picture": "https://pm1.aminoapps.com/6857/2a033ee70f8ad81c35510cb13a546a196175597dv2_hq.jpg",
    "squarePic": "https://www.latercera.com/resizer/lnL46pGRKDktOfOU5odCfEKuOpk=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/4YMBDPAUPFAXHC6ZU5EW4CGGLI.jpg",
        "name": "Thor"
    },
    {
        "id": "Doctor Strange",
        "about": "Alias Doctor Strange, fue el Hechicero Supremo de la Tierra-616. Strange fue una vez un brillante pero arrogante neurocirujano, hasta que un accidente de coche le dejó lisiadas las manos. Cuando la medicina moderna le falló, se embarcó en un viaje a Kamar-Taj en el Tíbet, donde fue entrenado por el Ancestral.",
        "picture": "https://i.pinimg.com/564x/02/c5/f0/02c5f06bd86d14be48e896a88e02a6b8.jpg",
    "squarePic": "https://www.clarin.com/img/2022/05/05/zrOSKM_Xk_720x0__1.jpg",
        "name": "Doctor Strange"
    }, {
        "id": "Hulk",
        "about": "Después de una exposición accidental a los rayos gamma durante la detonación de una bomba experimental, Banner se transforma físicamente en Hulk cuando está sometido a estrés emocional, a su voluntad o en contra de ella, lo que a menudo lleva a destrozos y conflictos que complican la vida civil de Banner.",
        "picture": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-the-hulk-wall-art-tim-hill.jpg",
    "squarePic": "https://hips.hearstapps.com/hmg-prod/images/el-increible-hulk-1554403044.jpg?crop=1xw:0.8888888888888888xh;center,top&resize=1200:*",
        "name": "Hulk"
    },
    {
        "id": "Deadpool",
        "about": "Apareció por primera vez en New Mutants (vol. 1) #98 (1991). Como un mercenario mentalmente inestable y desfigurado, Deadpool apareció originalmente como un villano en el cómic New Mutants, y más tarde en ediciones de X-Force.",
        "picture": "https://i.pinimg.com/736x/77/96/50/7796507879438bd7e0e7d978e3198981.jpg",
    "squarePic": "https://cdn.atomix.vg/wp-content/uploads/2023/10/deadpool.jpg",
        "name": "Deadpool"
    },
    {
        "id": "Wolverine",
        "about": "Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano. Wolverine ha sido representado de diversas formas como miembro de los X-Men, Alpha Flight, Fuerza-X y Los Vengadores.",
        "picture": "https://i.pinimg.com/736x/62/cd/66/62cd665950ec45d7a522f1e71e294c77.jpg",
    "squarePic": "https://lumiere-a.akamaihd.net/v1/images/the_wolverine_-_feature_71479c84.png?region=193,0,614,614",
        "name": "Wolverine"
    },
    {
        "id": "Loki",
        "about": "Es hijo de los gigantes Farbauti y Laufey y tiene dos hermanos, Helblindi y Býleistr, de los que poco se sabe. En las eddas es descrito como el «origen de todo fraude» y se mezcló con los dioses libremente, llegando a ser considerado por Odín como su hermano de sangre hasta el asesinato de Balder.",
        "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3acc143-332f-43c9-8707-d61106b45a55/dehc4sb-9e2e0504-9f7d-4e8d-80f6-8cf4e6ac4f3f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IzYWNjMTQzLTMzMmYtNDNjOS04NzA3LWQ2MTEwNmI0NWE1NVwvZGVoYzRzYi05ZTJlMDUwNC05ZjdkLTRlOGQtODBmNi04Y2Y0ZTZhYzRmM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rf17brC9nEkNZAxCCTUdZ22lX3Fn6xjJBa4EZi_o6OE",
    "squarePic": "https://estaticos.elcolombiano.com/binrepository/580x860/0c168/580d365/none/11101/LTKV/loki-digital-keyart-teaser-v4-lg_37889691_20210608200446.jpg",
        "name": "Loki"
    },
    {
        "id": "Pantera Negra",
        "about": "Efectivamente, el hombre que viste y calza el poder de la pantera es T'Challa, hijo de T'Chakay rey por derecho de la imaginaria Wakanda, un país que vive ajeno al resto del mundo como modo de autodefensa. La causa es el Vibranium, un metal único capaz de absorber todo tipo de vibraciones.",
        "picture": "https://external-preview.redd.it/rZ2htb5Cp3IY04dbfZG-U3ZRmehbz7dpavZbq_4vEFk.jpg?auto=webp&s=a9f91f03477a18221d50722139dabb0058909cf0",
    "squarePic": "https://www.akiracomics.com/imagenes/porreferencia?identidad=50f891c9-b7db-4e05-b9a6-996895a372df&referencia=&ancho=&alto=",
        "name": "Pantera Negra"
    },
    {
        "id": "Rocket Raccoon",
        "about": "Rocket es representado como un mercenario de mal genio y experto en armas que, junto con su compañero Groot, se une a los Guardianes de la Galaxia en su batalla contra Ronan el Acusador​ y más tarde luchar contra una facción rebelde de Devastadores y el celestial Ego.",
        "picture": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aaa79357-9476-4c1d-b9a8-6e881f2449d3/dfvnkg7-f7c21dda-4dfd-4c0f-ab8a-7ad4fb54c809.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhYTc5MzU3LTk0NzYtNGMxZC1iOWE4LTZlODgxZjI0NDlkM1wvZGZ2bmtnNy1mN2MyMWRkYS00ZGZkLTRjMGYtYWI4YS03YWQ0ZmI1NGM4MDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KlGN9_DYh1pAC999fkUXdZB1XeDc3irh3GIbWN1UZ0E",
    "squarePic": "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/guardianes-galaxia-roket-sin-piel-miedo/137618718-1-esl-ES/!Rocket-Raccoon-sin-piel-da-aun-mas-mal-rollo.jpg",
        "name": "Rocket Raccoon"
    },
    {
        "id": "Duende Verde",
        "about": "Es un supervillano ficticio de Marvel Comics y el principal antagonista de la primera película de Spider-Man. Es el fundador y director general de Industrias Oscorp y el padre de Harry Osborn.",
        "picture": "https://pm1.aminoapps.com/6287/a6d14d4645386c4dff6eefb5663bd84cc03311ff_00.jpg",
    "squarePic": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/11/willem-dafoe-como-duende-verde-spider-man-no-way-home-2537203.jpg?tf=1200x",
        "name": "Duende Verde"
    },
    {
        "id": "Doctor Octopus",
        "about": "Es un personaje del universo Marvel, donde es uno de los grandes enemigos de Spider-Man (el Hombre Araña). Fue creado por Stan Lee y Steve Ditko y apareció por primera vez en la serie Amazing Spider-Man N°3, en julio de 1963. En América Latina ha sido conocido más por Doctor Pulpo.",
        "picture": "https://redwoodartgroup.com/wp-content/uploads/2019/09/DrOctopus_MM2018-scaled.jpg",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/335e007c-4af8-4e62-8040-af07c0929c24/dfy8b0l-2a6d7945-7aa4-475a-a893-e6e0ceba0e2f.png/v1/fit/w_375,h_516/doctor_octopus__2021__marvel_puzzle_quest__render_by_egg84_dfy8b0l-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NiIsInBhdGgiOiJcL2ZcLzMzNWUwMDdjLTRhZjgtNGU2Mi04MDQwLWFmMDdjMDkyOWMyNFwvZGZ5OGIwbC0yYTZkNzk0NS03YWE0LTQ3NWEtYTg5My1lNmUwY2ViYTBlMmYucG5nIiwid2lkdGgiOiI8PTc3NSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Fkt7C-mXIKtkS4KXDI3yInyajJELRATffzl9PtoWFiQ",
        "name": "Doctor Octopus"
    },
    {
        "id": "Mysterio",
        "about": "Es un mago y especialista en efectos especiales que trabaja para un importante estudio de Hollywood con el sueño de hacerse un nombre en la industria del cine. Sin embargo, llegó a ver su carrera en efectos especiales como un trabajo sin futuro. Sus intentos de convertirse en actor fueron mal recibidos, pero se dio cuenta de que su experiencia en ilusiones podría convertirlo en un supervillano eficaz. ",
        "picture": "https://cdn.marvel.com/content/1x/1_88a91.png",
    "squarePic": "https://www.alexrossart.com/cdn/shop/products/MysterioCOlor_grande.jpg?v=1676644995",
        "name": "Mysterio"
    },
    {
        "id": "Ant-Man",
        "about": "El Hombre Hormiga original fue el doctor Henry 'Hank' Pym, experto en biofísica y miembro del Centro de Operaciones de Seguridad que decidió convertirse en un superhéroe después de la muerte de su primera esposa, Maria Trovaya, quien había sido disidente política en su natal Hungría.",
        "picture": "https://i.pinimg.com/474x/da/b9/13/dab913dacebd200f3d1ef48029259740.jpg",
    "squarePic": "https://elcomercio.pe/resizer/_RJiWV7ZJn_-eYzCsP4DUFnyszQ=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WLTQCYI4FVF2TOIMGYXTIVDRSU.jpg",
        "name": "Ant-Man"
    },

]

const personajes1 = [
    {
        "id": "Batman",
        "about": "Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo. Presenció el asesinato de sus padres cuando era niño lo marcó profundamente y lo llevó a entrenarse en la perfección física e intelectual para ponerse un disfraz de murciélago con el fin de combatir el crimen.",
        "picture": "https://i.pinimg.com/736x/d8/ab/93/d8ab936f4417dc06ac16af7f15e94508.jpg",
    "squarePic": "https://mvsnoticias.com/u/fotografias/m/2022/7/23/f425x230-489583_503565_15.jpg",
        "name": "Batman"
    }, 
    {
        "id": "Superman",
        "about": "Nació en el planeta Krypton y recibió el nombre de Kal-El al nacer. Cuando era bebé, sus padres, el científico Jor-El y su esposa Lara Lor-Van, lo enviaron a la Tierra en una pequeña nave espacial momentos antes de que Krypton fuera destruido en un cataclismo natural.",
        "picture": "https://i.pinimg.com/474x/db/15/ba/db15bac66d1fb1794d53eaa90e5af7db.jpg",
    "squarePic": "https://hips.hearstapps.com/hmg-prod/images/henry-cavill-superman-1536761926.jpg?crop=0.49925925925925924xw:1xh;center,top&resize=640:*",
        "name": "Superman"
    },
    {
        "id": "Arrow",
        "about": "Es un superhéroe justiciero que lucha contra el crimen con las artes marciales, tiro con arco y tecnología. En su identidad secreta es Oliver Queen, que vive en Cuidad Estrella como un rico playboy multimillonario y empresario convertido en político liberal franco.",
        "picture": "https://i.pinimg.com/736x/8f/87/fa/8f87fae4bcbce280791978801b7796f1.jpg",
    "squarePic": "https://vader.news/__export/1595156863628/sites/gadgets/img/2020/07/19/2a.png_2000922940.png",
        "name": "Arrow"
    },
    {
        "id": "Saint Walker",
        "about": "Era un sacerdote en su planeta natal de Astonia (con una esposa y dos hijos), que estaba condenado, ya que su antiguo sol se estaba muriendo. Saint Walker logra calmar a su gente desesperada y darles esperanza ante la extinción, lo que provoca que un anillo de Blue Lantern lo elija como miembro del Blue Lantern Corps, afirmando que tiene la capacidad de infundir una gran esperanza.",
        "picture": "https://2.bp.blogspot.com/--j_Ycdq4cf4/WWE-42jjd_I/AAAAAAAANrg/U6OOY_qXFFkWgRKiYn1QskYRrI5CIEdHACLcBGAs/s1600/saint-walker.jpg",
    "squarePic": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5925e7dd-fbd8-4b74-a807-ca9b2f32cf80/df54in0-27c4b24d-a62c-491c-9df8-2fc48bc104c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5MjVlN2RkLWZiZDgtNGI3NC1hODA3LWNhOWIyZjMyY2Y4MFwvZGY1NGluMC0yN2M0YjI0ZC1hNjJjLTQ5MWMtOWRmOC0yZmM0OGJjMTA0YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._R_A-XqJ8Obz0aq0kD63202axs9RzHmws6d4qFV5_d8",
        "name": "Saint Walker"
    },
    {
        "id": "Linterna Verde",
        "about": "Cuando el agonizante Abin Sur aterrizó en la Tierra y ordenó a su anillo que buscara un sucesor apropiado como Linterna Verde del sector 2814, el piloto de pruebas Hal Jordan, cumplió con los requisitos de ser tanto honesto como libre del miedo, siendo elegido como el nuevo linterna verde del sector.",
        "picture": "https://pm1.aminoapps.com/6149/2577219b15f0dd53d06680c5562ce8925524d2e1_00.jpg",
    "squarePic": "https://media.revistagq.com/photos/64073419d8bd3a1a762bdf58/1:1/w_675,h_675,c_limit/por-que-linterna-verde-fracaso.jpg",
        "name": "Linterna Verde"
    },
    {
        "id": "Black Manta",
        "about": "En la versión de su origen más reconocida, Black Manta era un niño que fue secuestrado por piratas cuando jugaba cerca del océano. Durante su cautiverio, sus captores se toparon con Aquaman pero no fue rescatado por el héroe, lo que lo dejó con un profundo resentimiento.",
        "picture": "https://i.pinimg.com/originals/ff/a1/c8/ffa1c8514637f7886d6d2ed0f8fe58eb.jpg",
    "squarePic": "https://www.zonanegativa.com/imagenes/2021/09/BLACK-DES.jpg",
        "name": "Black Manta"
    },
    {
        "id": "Roy Harper",
        "about": "Es un cantautor británico de música folk y folk rock nacido en Mánchester, el 12 de junio de 1941. Poeta y artista multifacético, Harper ha sido un intérprete atípico en el contexto del folk británico, su carrera se ha extendido desde mediados de los años 1960 hasta hoy.",
        "picture": "https://i.redd.it/uy1lm1c8ch7b1.jpg",
    "squarePic": "https://upload.wikimedia.org/wikipedia/en/d/d6/Roy_Harper_%28Speedy_-_Arsenal_-_Red_Arrow%29%2C_DC_Comics_character.jpg",
        "name": "Roy Harper"
    },
    {
        "id": "Victor Stone",
        "about": "Victor Stone nació el 29 de junio de 1994 por Silas Stone y Elinore Stone. Durante su tiempo en la Universidad de Ciudad Gótica, Stone aprendió mucho sobre computadoras, y a menudo ayudaba a sus amigos a mejorar sus notas. Stone también se convirtió en el capitán del equipo de fútbol de su equipo.",
        "picture": "https://dccontinuityproject.weebly.com/uploads/5/4/5/1/54516433/979895588_orig.jpg",
    "squarePic": "https://www.looper.com/img/gallery/the-untold-truth-of-the-dceus-cyborg/intro-1646948545.jpg",
        "name": "Victor Stone"
    },
    {
        "id": "Acertijo",
        "about": "Edward Nashton, conocido públicamente como El Acertijo, es un enigmático asesino en serie y terrorista que busca atrapar a la élite de Gotham y desenmascarar públicamente a los más oscuros de la ciudad con una serie de verdades de rompecabezas y dispositivos tortuosos.",
        "picture": "https://pm1.aminoapps.com/6313/89e05ee3f6b541e1e23f8a9cba5b823d2fad9c8d_00.jpg",
    "squarePic": "https://i.pinimg.com/originals/c8/4c/5a/c84c5af2e49326d2fbb562b29efcbeb7.png",
        "name": "Acertijo"
    },
    {
        "id": "Joker",
        "about": "Se le asocia con una personalidad psicópata con un humor sádico y retorcido, lo que le ha llevado a ser catalogado como la antítesis de Batman",
        "picture": "https://i.ebayimg.com/images/g/FbEAAOSw9FlfvMZf/s-l1200.webp",
    "squarePic": "https://www.zonanegativa.com/imagenes/2022/11/destacada-deadly.jpg",
        "name": "Joker"
    },
    {
        "id": "Batman que rie",
        "about": "El Batman que ríe es Bruce Wayne proveniente de la Tierra -22 del Multiverso Oscuro, es un psicópata asesino que sirve a las órdenes de Barbatos . Convertido en el nuevo Joker de su mundo tras ser infectado por su toxina al matarlo, él vive con el propósito de conquistar y propagar el caos para prolongar su diversión.",
        "picture": "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RLLN5WFEVNDNXP4MHGRE24TJGA.jpg",
    "squarePic": "https://qph.cf2.quoracdn.net/main-qimg-db0d94f4a533687a72812bd2759d7b1d-lq",
        "name": "Batman que rie"
    },
    {
        "id": "Harley quinn",
        "about": "La doctora Harleen Frances Quinzel era una psiquiatra del asilo Arkham cuando se enamoró del Joker, le ayudó a escapar y se convirtió en la villana Harley Quinn. Fue creada por Paul Dini y Bruce Timm para Batman: La Serie Animada, y su popularidad fue tal que pronto pasaría a formar parte regular del Universo DC.",
        "picture": "https://i.pinimg.com/736x/78/50/fe/7850fefc6bdf25bf951bab0cba545e79.jpg",
    "squarePic": "https://www.lavoz.com.ar/resizer/yKDFhSPOV8ngqCyJxf3NjfkPJgE=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/G75E3GVL3FBTBDM6IY7WTTLGKY.jpg",
        "name": "Harley quinn"
    }, {
        "id": "Flash",
        "about": "Jay Garrick era un estudiante universitario en 1938 que accidentalmente inhaló vapores de agua pesada después de tomar un descanso para fumar dentro de su laboratorio donde había estado trabajando. ​ Como resultado, descubrió que podía correr a una velocidad sobrehumana y que tenía reflejos igualmente rápidos.",
        "picture": "https://i.pinimg.com/originals/2a/33/40/2a33400f5e4b9cd90fc4645c19f28b2e.jpg",
    "squarePic": "https://i.blogs.es/d60e27/the-flash/840_560.jpeg",
        "name": "Flash"
    },
    {
        "id": "Bane",
        "about": " El personaje suele ser representado como un adversario del superhéroe Batman y pertenece al colectivo de enemigos que conforman su galería central de villanos. Al poseer una mezcla de fuerza bruta e inteligencia excepcional, a Bane a menudo se le atribuye ser el único villano que ha roto al murciélago tanto física como mentalmente. ",
        "picture": "https://1.bp.blogspot.com/-Y27f2bRpwzs/Xt_7EL6NhhI/AAAAAAAB67k/SCNmSLL4xN0Df7ORX1b9kk8_XDzx0vYcwCLcBGAsYHQ/s1600/bane.jpg",
    "squarePic": "https://nogma.co/wp-content/uploads/2018/12/the-dark-knight-rises-bane.jpg",
        "name": "Bane"
    },
    {
        "id": "Mujer Maravilla",
        "about": "Wonder Woman, el primer personaje femenino empoderado de los cómics, nació en 1941, en medio del movimiento por el sufragio y otros derechos de las mujeres. William Moulton Marston, creador de Wonder Woman, fue un visionario y psicólogo que se inspiró en sus dos parejas para diseñar al personaje.",
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
