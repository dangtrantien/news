const dataArr = [
  [
    {
      source: { id: null, name: 'Daily Mail' },
      author: 'Eve Buckland',
      title:
        "Alec Baldwin 'verbally berated' female server at gala leaving her 'shocked and upset' - Daily Mail",
      description:
        "Alec Baldwin allegedly 'yelled' at a female server at Thursday night's PEN America Literary Gala in NYC - leaving her 'shocked and upset', reports Page Six .",
      url: 'https://www.dailymail.co.uk/tvshowbiz/article-12104497/Alec-Baldwin-verbally-berated-female-server-gala-leaving-shocked-upset.html',
      urlToImage:
        'https://i.dailymail.co.uk/1s/2023/05/19/22/71199233-0-image-a-18_1684530567874.jpg',
      publishedAt: '2023-05-19T22:16:58Z',
      content:
        "Alec Baldwin allegedly 'yelled' at a female server at Thursday night's PEN America Literary Gala in NYC - leaving her 'shocked and upset', reports Page Six. \r\nThe actor, 65, who made his return to th… [+3526 chars]",
    },
    {
      source: { id: 'the-verge', name: 'The Verge' },
      author: 'Jess Weatherbed',
      title:
        'Disney will remove over 50 shows from Disney Plus and Hulu this month - The Verge',
      description:
        'Disney will remove dozens of titles from Disney Plus and Hulu on May 26th, including Willow and Y: The Last Man, as part of the entertainment giant’s broader cost-cutting measures.',
      url: 'https://www.theverge.com/2023/5/19/23729642/disney-plus-hulu-remove-pull-shows-willow-streaming-bob-iger',
      urlToImage:
        'https://cdn.vox-cdn.com/thumbor/htoBFDQCWEkKRw8dg5QGHaOX_V0=/0x0:3840x1607/1200x628/filters:focal(1532x786:1533x787)/cdn.vox-cdn.com/uploads/chorus_asset/file/24241840/willow_online_trailer2_uhd_r709f_still_220906.088626.jpg',
      publishedAt: '2023-05-19T21:42:24Z',
      content:
        'Disney will remove over 50 shows from Disney Plus and Hulu this month\r\nDisney will remove over 50 shows from Disney Plus and Hulu this month\r\n / Heaps of original content, including Willow, Black Bea… [+4644 chars]',
    },
    {
      source: { id: 'the-washington-post', name: 'The Washington Post' },
      author: 'Sophia Nguyen',
      title:
        'Novelist Hank Green announces he has cancer - The Washington Post',
      description:
        'Green, an entrepreneur and science educator, made the announcement on his popular vlogbrothers YouTube channel, which he runs with his brother, the author John Green.',
      url: 'https://www.washingtonpost.com/books/2023/05/19/hank-green-cancer/',
      urlToImage:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TQGVU4TXOMI6RPNBDDSTUREKCQ.jpg&w=1440',
      publishedAt: '2023-05-19T21:35:00Z',
      content:
        'Comment on this story\r\nComment\r\nHank Green, best-selling author and chief executive of the educational media company Complexly, has announced that he has Hodgkins lymphoma. Green posted a video on Fr… [+1616 chars]',
    },
    {
      source: { id: null, name: 'Daily Mail' },
      author: 'Heidi Parker',
      title:
        'Khloe Kardashian pokes fun at Kim Kardashian with T-shirt featuring regrettable quote - Daily Mail',
      description:
        'The 38-year-old Good American designer was wearing a T-shirt that showed Kim, 42, with her raven hair worn down in two photos shared to Instagram.',
      url: 'https://www.dailymail.co.uk/tvshowbiz/article-12104427/Khloe-Kardashian-pokes-fun-Kim-Kardashian-T-shirt-featuring-regrettable-quote.html',
      urlToImage:
        'https://i.dailymail.co.uk/1s/2023/05/19/22/71199343-0-image-a-123_1684530946362.jpg',
      publishedAt: '2023-05-19T21:27:25Z',
      content:
        'Khloe Kardashian had some fun teasing her older sister Kim Kardashian on Friday.\r\nThe 38-year-old Good American designer was wearing a T-shirt that showed Kim, 42, with her raven hair worn down in tw… [+2564 chars]',
    },
    {
      source: { id: 'usa-today', name: 'USA Today' },
      author: ', USA TODAY',
      title:
        'Is Adidas having a Bud Light moment? Transgender Pride swimsuit touches off controversy - USA TODAY',
      description:
        'A new Adidas gender-inclusive swimsuit has some calling for a boycott as the sports apparel maker becomes latest brand to face right-wing condemnation',
      url: 'https://www.usatoday.com/story/money/2023/05/19/adidas-pride-transgender-swimsuit-controversy/70237256007/',
      urlToImage:
        'https://www.gannett-cdn.com/presto/2023/05/19/USAT/227c0310-6f30-4649-be93-51bf838821c3-AFP_AFP_94N46V.jpg?auto=webp&crop=6719,3780,x0,y448&format=pjpg&width=1200',
      publishedAt: '2023-05-19T20:28:19Z',
      content:
        "A new Adidas women's swimsuit worn by two masculine-presenting models has touched off controversy on social media as the sports apparel maker becomes the latest brand along with Bud Light and Nike to… [+3379 chars]",
    },
  ],
  [
    {
      source: { id: 'the-washington-post', name: 'The Washington Post' },
      author: 'Jada Yuan',
      title:
        "Harrison Ford holds back tears at Cannes premiere of final 'Indiana Jones' - The Washington Post",
      description:
        'Harrison Ford received an honorary Palme d’Or as « Indiana Jones and the Dial of Destiny » premiered at the Cannes Film Festival.',
      url: 'https://www.washingtonpost.com/arts-entertainment/2023/05/19/harrison-ford-indiana-jones-cannes/',
      urlToImage:
        'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M5SLPX62KNKGSODPC7IIYZIMC4_size-normalized.jpg&w=1440',
      publishedAt: '2023-05-19T20:14:00Z',
      content:
        'Comment on this story\r\nComment\r\nCANNES, FRANCE Just the sight of Harrison Ford was all it took to turn a roomful of journalists into weepy, cheering fans. As Fords name was announced at the Friday mo… [+7752 chars]',
    },
    {
      source: { id: null, name: 'Yahoo Entertainment' },
      author: 'Suzy Byrne',
      title:
        "Larry Birkhead says Anna Nicole Smith documentary 'is not exactly high-end journalism' (exclusive) - Yahoo Entertainment",
      description:
        "Larry Birkhead did not participate in Netflix's Anna Nicole Smith documentary. He talks about why he made the decision and his disappointment in the final...",
      url: 'https://www.yahoo.com/entertainment/larry-birkhead-anna-nicole-smith-documentary-not-high-end-journalism-exclusive-201110060.html',
      urlToImage:
        'https://s.yimg.com/ny/api/res/1.2/tNDl1rSPF5jzG_e8EUlp1g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/7a645430-f4ef-11ed-87ef-7343aa173768',
      publishedAt: '2023-05-19T20:11:10Z',
      content:
        'Larry Birkhead tells Yahoo Entertainment that "none of the people that commented on my relationship with Anna Nicole" in the new Netflix documentary "played a role in her life the entire 2.5 years I … [+10242 chars]',
    },
    {
      source: { id: null, name: 'Vulture' },
      author: 'Jordan Crucchiola',
      title: "Every 'Fast and Furious' Movie, Ranked - Vulture",
      description:
        'Which ‘Fast and Furious’ movie is the best? With Fast X now in theaters, we watched every film in the franchise and ranked them all.',
      url: 'http://www.vulture.com/article/fast-and-furious-movies-ranked.html',
      urlToImage:
        'https://pyxis.nymag.com/v1/imgs/29a/900/5f2c2638371f40132c1e4eb8f65887950a-5-18-FF.1x.rsocial.w1200.jpg',
      publishedAt: '2023-05-19T20:00:00Z',
      content:
        'In 2001, it seemed impossible that a $40 million movie about car racing starring the guy from The Skulls would go on to spawn a franchise featuring 11 installments and multiple Academy Award winners.… [+11552 chars]',
    },
    {
      source: { id: null, name: 'The Cut' },
      author: 'Tiana Randall',
      title: '2023 Cannes Film Festival: All the Looks - The Cut',
      description:
        'There’s more than movies to be shown. Here are all of the looks at the 2023 Cannes Film Festival.',
      url: 'http://www.thecut.com/2023/05/cannes-film-festival-dresses-2023.html',
      urlToImage:
        'https://pyxis.nymag.com/v1/imgs/623/7c5/ebf09fdebd6a4af31888a77057c1028ba5-lede-.1x.rsocial.w1200.jpg',
      publishedAt: '2023-05-19T19:40:00Z',
      content:
        'If there is one thing that Cannes is sure to give us, its looks. Remember Princess Dianas iconic light blue strapless chiffon gown and matching silk scarf moment? She wore that at the festival in 198… [+1529 chars]',
    },
    {
      source: { id: null, name: 'GMA' },
      author: 'Angeline Jane Bernabe',
      title:
        "Barbara Corcoran remakes Martha Stewart's Sports Illustrated swimsuit cover - GMA",
      description: '',
      url: 'https://www.goodmorningamerica.com/culture/story/barbara-corcoran-remakes-martha-stewarts-sports-illustrated-swimsuit-99463991',
      urlToImage:
        'https://s.abcnews.com/images/GMA/Corcoran-ht-ml-230519_1684520988694_hpMain_16x9_608.jpg',
      publishedAt: '2023-05-19T19:24:58Z',
      content:
        'Along with Stewart, the 2023 Sports Illustrated Swimsuit issue features a handful of powerful women, including Megan Fox, Kim Petras, Brooks Nader and 14 returning models and eight "rookies" who are … [+339 chars]',
    },
  ],
  [
    {
      source: { id: null, name: 'Variety' },
      author: 'Zack Sharf',
      title:
        'A24’s Nazi Drama ‘Zone of Interest’ Is a Cannes Sensation With 6-Minute Standing Ovation - Variety',
      description:
        'Jonathan Glazer just delivered the first instant sensation of the 2023 Cannes Film Festival. “The Zone of Interest,” only the director’s fourth feature film after “Sexy Beas…',
      url: 'https://variety.com/2023/film/news/the-zone-of-interest-cannes-standing-ovation-nazi-1235618840/',
      urlToImage:
        'https://variety.com/wp-content/uploads/2023/05/GettyImages-1491548319.jpg?w=1000&h=563&crop=1',
      publishedAt: '2023-05-19T19:20:00Z',
      content:
        'Jonathan Glazer just delivered the first instant sensation of the 2023 Cannes Film Festival. “The Zone of Interest,” only the director’s fourth feature film after “Sexy Beast,” “Birth” and “Under the… [+2530 chars]',
    },
    {
      source: { id: null, name: 'GMA' },
      author: 'George Costantino',
      title:
        "Jimmie Allen apologizes to wife for 'affair' amid sexual assault allegations - GMA",
      description: '',
      url: 'https://www.goodmorningamerica.com/culture/story/jimmie-allen-apologizes-estranged-wife-affair-amid-sexual-assault-allegations-99456270',
      urlToImage:
        'https://s.abcnews.com/images/GMA/Jimmie-Allen-alexis-gale-gty-thg-230519_1684501196393_hpMain_16x9_608.jpg',
      publishedAt: '2023-05-19T18:48:23Z',
      content:
        '"I want to publicly apologize to my wife Alexis for humiliating her with my affair," the 37-year-old singer began in the statement, posted to his Instagram on Thursday. "I\'m embarrassed that my choic… [+2907 chars]',
    },
    {
      source: { id: null, name: 'New York Post' },
      author: 'Chuck Arnold',
      title:
        'Donna Summer doc reveals painful accusation disco queen took to her grave - New York Post ',
      description:
        '“It’s something I don’t think she ever got over,” said her husband, Bruce Sudano.',
      url: 'https://nypost.com/2023/05/19/donna-summers-troubled-life-revealed-in-new-hbo-documentary/',
      urlToImage:
        'https://nypost.com/wp-content/uploads/sites/2/2023/05/donna-summer-hpcomp-new.jpg?quality=75&strip=all&w=1024',
      publishedAt: '2023-05-19T18:37:00Z',
      content:
        'Before her anointing as queen of disco debauchery in the late 1970s, Donna Summer was a good, churchgoing girl with a terrible secret. \r\nI was molested by a minister when I was in my teens, the late … [+4700 chars]',
    },
    {
      source: { id: null, name: 'KSL.com' },
      author: 'https://www.facebook.com/kslcom/',
      title: "Review: Is 'Fast X' worth a drive to the theater? - KSL.com",
      description: "What's a summer without a",
      url: 'https://www.ksl.com/article/50648893/review-is-fast-x-worth-a-drive-to-the-theater',
      urlToImage:
        'https://img.ksl.com/slc/2930/293043/29304391.jpg?filter=kslv2/responsive_story_lg',
      publishedAt: '2023-05-19T18:32:01Z',
      content:
        "Estimated read time: 4-5\r\n minutes\r\nMy friends and I started the Dirty Fightin' League, or DFL in high school. The basic idea of the DFL was that you could be attacked at any given moment.\r\nIt could … [+3677 chars]",
    },
    {
      source: { id: null, name: 'Daily Mail' },
      author: 'Eve Buckland',
      title:
        'Liev Schreiber TROLLED by fuming Vanderpump Rules fans after Ariana Madix quip - Daily Mail',
      description:
        'Liev Schreiber felt the wrath of Vanderpump Rules fans this week after he made a barbed comment about star Ariana Madix doing an interview with the New York Times.',
      url: 'https://www.dailymail.co.uk/tvshowbiz/article-12104017/Liev-Schreiber-TROLLED-fuming-Vanderpump-Rules-fans-Ariana-Madix-quip.html',
      urlToImage:
        'https://i.dailymail.co.uk/1s/2023/05/19/19/71193663-0-image-a-40_1684519938854.jpg',
      publishedAt: '2023-05-19T18:01:48Z',
      content:
        'Liev Schreiber felt the wrath of Vanderpump Rules fans this week after he made a barbed comment about star Ariana Madix doing an interview with the New York Times.\r\nThe actor, 55, was left so incense… [+4511 chars]',
    },
  ],
  [
    {
      source: { id: null, name: 'New York Post' },
      author: 'Alexandra Steigrad',
      title:
        "'Backfired tremendously': Disney fans react to closure of 'overpriced' Star Wars hotel - New York Post ",
      description:
        '“It looks like an actual maximum security prison from the exterior. What a waste of money for everyone,” a Disney fan said on a Reddit board about the hotel closure.',
      url: 'https://nypost.com/2023/05/19/disney-fans-react-to-closure-of-overpriced-star-wars-hotel/',
      urlToImage:
        'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011364756.jpg?quality=75&strip=all&w=1024',
      publishedAt: '2023-05-19T17:58:00Z',
      content:
        'Fans reacted to Disney’s decision to shutter its ultra-expensive Star Wars-themed luxury hotel, which boasted rooms that ranged from $6,000 for a two-night stay for a family of four to an eye-popping… [+3250 chars]',
    },
    {
      source: { id: null, name: "Women's Health" },
      author: 'Korin Miller',
      title:
        'Sharon Stone, 65, Rocks Teeny Shorts—And Her Legs Are Next-Level Amazing - Yahoo News',
      description:
        "Sharon Stone wore tiny Spandex shorts—and her legs are next-level amazing. She swears by Pilates and circuit training. Plus: She's a fan of the ThighMaster.",
      url: 'https://www.womenshealthmag.com/fitness/a43942714/sharon-stone-legs-shorts-instagram-photos/',
      urlToImage:
        'https://media.zenfs.com/en/hearst_womens_health_52/55ca1147f9656135d9aae8fce1cd1f17',
      publishedAt: '2023-05-19T17:48:00Z',
      content:
        'Sharon Stone Rocks Shorts, And Her Legs Are KillerAxelle/Bauer-Griffin - Getty Images\r\n"Hearst Magazines and Yahoo may earn commission or revenue on some items through these links."\r\n<ul><li>Sharon S… [+3396 chars]',
    },
    {
      source: { id: null, name: 'HuffPost' },
      author: 'Marco Margaritoff',
      title:
        'Priscilla Presley Denied Burial Spot Next To Elvis In Recent Settlement - HuffPost',
      description:
        '“Although I don’t plan on going anywhere anytime soon, it is my family’s and my wish for me to be laid to rest with my daughter and the love of my life when that time comes.”',
      url: 'https://www.huffpost.com/entry/priscilla-presley-denied-burial-spot-next-to-elvis-in-recent-settlement_n_646798ace4b0ab2b97e7189c',
      urlToImage:
        'https://img.huffingtonpost.com/asset/64679aad2500006e00435049.jpeg?cache=UGWtyBIEYJ&ops=1200_630',
      publishedAt: '2023-05-19T17:41:14Z',
      content:
        'Priscilla Presley, whose daughter Lisa Marie Presley died in January, has suffered another familial blow.\r\nWhile Presley reached a settlement over her daughters will Tuesday with granddaughter Riley … [+2531 chars]',
    },
    {
      source: { id: null, name: 'Yahoo Entertainment' },
      author: 'Scoop Harrison',
      title:
        'Jay-Z and Beyoncé Purchase the Most Expensive Home in California History - Yahoo Entertainment',
      description:
        'The power couple paid $200 million for the Malibu property. Jay-Z and Beyoncé Purchase the Most Expensive Home in California History Scoop Harrison',
      url: 'https://www.yahoo.com/entertainment/jay-z-beyonc-purchase-most-172529755.html',
      urlToImage:
        'https://media.zenfs.com/en/consequence_of_sound_458/3405c90924d6e6f188e21d28102516fc',
      publishedAt: '2023-05-19T17:25:29Z',
      content:
        'The post Jay-Z and Beyoncé Purchase the Most Expensive Home in California History appeared first on Consequence.\r\nOnce Beyoncé concludes her Renaissance World Tour, shell have a brand new home to ret… [+1561 chars]',
    },
    {
      source: { id: null, name: 'New York Post' },
      author: 'Asia Grace',
      title:
        'I got one of those free cars from Oprah — what she really said off-camera in 2010 - New York Post ',
      description:
        '“You get a car! You get a car! You get a car!” — and a nugget of wisdom, too! A fortunate Oprah Winfrey fan who was one of the lucky audience members to be gifted diamond earrings, a luxury h…',
      url: 'https://nypost.com/2023/05/19/i-got-a-free-car-from-oprah-what-she-really-said-off-camera/',
      urlToImage:
        'https://nypost.com/wp-content/uploads/sites/2/2023/05/NYPICHPDPICT000011369847.jpg?quality=75&strip=all&w=1024',
      publishedAt: '2023-05-19T17:04:00Z',
      content:
        '“You get a car! You get a car! You get a car! and a nugget of wisdom, too!\r\nA fortunate Oprah Winfrey fan who was one of the lucky audience members to be gifted diamond earrings, a luxury handbag and… [+4230 chars]',
    },
  ],
];
