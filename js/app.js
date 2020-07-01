let amiiboData = [
    { number: 0, color: '#E60013', name: 'Mario™', image: 'src/image/lineUP/zzzz.png', series: 'Super Smash Bros', date: '11/21/2014', presented: 'Nintendo', content: "Mario™ never hesitates to leap into action when there’s trouble in the Mushroom Kingdom. Known for saving the world (and Princess Peach™) countless times from Bowser™, Mario is a true super star. He's got amazing jumping skills and makes use of a wide range of transformations. Mario has also powered up into countless roles: referee, doctor, sportsman, dancer, kart racer, and many more." },
    { number: 1, color: '#b1c85b', name: 'Yoshi™', image: 'src/image/lineUP/aaac.png', series: 'Super Smash Bros', date: '11/21/2014', presented: 'Nintendo', content: "Yoshis come in all sorts of colors, but Mario's close buddy debuted in green. Kind-hearted, naturally protective of others, and perpetually hungry, Yoshi™ is always up for adventure…especially if there are snacks involved. Yoshis can flutter their legs to jump incredibly high. They also have extremely long tongues that they use to snare fruit and even enemies—anything they swallow gets turned into throwable eggs." },
    { number: 2, color: '#e67a1f', name: 'Pikachu', image: 'src/image/lineUP/aaak.png', series: 'Super Smash Bros', date: '11/21/2014', presented: 'Nintendo', content: "Pikachu has charmed fans and given a jolt to opponents for nearly 20 years—whether in the Pokémon™ TV series, the Pokémon Trading Card Game, or Pokémon video games, Pikachu has always been there as a stalwart companion for any Pokémon Trainer willing to take on the challenge of becoming the very best." },
    { number: 3, color: '#ff9946', name: 'Charizard', image: 'src/image/lineUP/aabn.png', series: 'Super Smash Bros', date: '05/29/2015', presented: 'Nintendo', content: "Charizard is the iconic Fire- and Flying-type Pokémon. Its scorching fiery breath can melt anything in its path. Charizard is known to fly around the sky in search of powerful opponents. However, it never turns its fire on opponents weaker than itself." },
    { number: 4, color: '#6d3b1f', name: 'Donkey Kong', image: 'src/image/lineUP/aaad.png', series: 'Super Smash Bros', date: '11/20/2014', presented: 'Nintendo', content: "This king of the jungle is superstrong, a little scatterbrained, and absolutely nuts about bananas. His adventures usually start with people stealing his hoard of them. As his physique suggests, this Kong is a powerhouse, but he's got speed to match too! His famous red necktie is adorned with his initials, DK." },
    { number: 5, color: '#9ecd4b', name: 'Bowser Jr.', image: 'src/image/lineUP/aaax.png', series: 'Super Smash Bros', date: '09/11/2015', presented: 'Nintendo', content: "Bowser's beloved, spoiled son sports a bandana with a large mouth drawn on it, likely an effort to appear more menacing. Like his father, Bowser Jr. longs to take Mario down, and he always seems to have new tricks up his sleeve. He often fights from inside his heavily armed Junior Clown Car." },
    { number: 6, color: '#778369', name: 'Link', image: 'src/image/lineUP/zzzw.png', series: 'Super Smash Bros', date: '11/20/2014', presented: 'Nintendo', content: "Link™ is the main character in The Legend of Zelda™ games. A young boy living in Hyrule, Link is often given the task of rescuing Princess Zelda™ and Hyrule from the Gerudo thief Ganondorf. Humble to the end, Link is known not merely as a hero but as a symbol of courage, strength and wisdom as well." },
    { number: 7, color: '#214835', name: 'Bowser', image: 'src/image/lineUP/abaf.png', series: 'Super Smash Bros', date: '02/27/2015', presented: 'Nintendo', content: "Bowser™ is the king of the Koopas and Mario's eternal rival. He breathes fire, hurls hammers, and uses all sorts of weapons in hopes of taking out Mario™. As his size suggests, he's immensely powerful. His plans aren’t always the best, and sometimes he even finds himself on Mario’s side." },
    { number: 8, color: '#fbc51f', name: 'Pac Man', image: 'src/image/lineUP/zzzx.png', series: 'Super Smash Bros', date: '05/29/2015', presented: 'Nintendo', content: "PAC-MAN™ is a cultural icon whose popularity has crossed the globe for more than 30 years. The yellow, circular hero first starred in the game PAC-MAN, which is recognized as the “Most Successful Coin-Operated Arcade Game” by Guinness World Records. His journey through the maze of gaming infamy is far from over! Waka Waka!" },
    { number: 9, color: '#9b68a9', name: 'Inkling', image: 'src/image/lineUP/zzzy.png', series: 'Super Smash Bros', date: '12/07/2018', presented: 'Nintendo', content: "Inklings hail from the city of Inkopolis in the Splatoon™ series. They crave team-based competition and love to customize their gear before participating in the hottest sport in town, Turf War! Their hobbies include making messes, rocking the latest fashions, dancing, and spoiling the nefarious plans of their evil octopus archrivals, the Octarians! For realsies!" },
]

$(document).ready(function () {
    let viewHeight = window.innerHeight;
    let viewWidth = window.innerWidth;
    let marioOriginalHeight = $('.mario').offset().top;
    let boxMoveOrNot = 1;
    Velocity($('.compat'), { marginTop: -300 }, 0);

    function allSize() {
        let box = $('.box').height();
        $('.box').width(box * 0.676);
        $('.moveBox').width(box * 3);

        let boxWidth = $('.box').width() / 2;
        if (boxMoveOrNot == 1 && viewWidth > 650) {
            Velocity($('.box'), { translateX: boxWidth }, 0);
        }
        viewHeight = window.innerHeight;

        Velocity.hook($('.mario'), "translateY", '0');
        marioOriginalHeight = $('.mario').offset().top;
        Velocity($('.mario'), { translateX: '-50%' }, 0);
        $('.mario').width('75%')

        let initMarioMove = marioOriginalHeight - $('.marioAnimate').offset().top + $('.box').height() * 1.35;
        // console.log("$('.mario').height()"+$('.mario').height());
        // console.log("marioOriginalHeight"+marioOriginalHeight);
        Velocity($('.mario'), { translateY: -initMarioMove }, 0);
    }

    allSize();
    $(window).resize(() => { allSize() });
    //RWD調整

    //box slide animation
    let amiiboBoard = 10;
    let boxPositionNow = 0;

    function moveLeft(n) {
        boxPositionNow = boxPositionNow + 1 * n;
        if (boxPositionNow < 0) { boxPositionNow = amiiboBoard - 1 }
        let boxPositionCount = boxPositionNow % amiiboBoard;
        let boxPosition = $('.box').width() * boxPositionCount * -1;
        Velocity($('.moveBox'), { left: boxPosition }, { duration: 300 });
    }
    let ac = [1, 0, 2];
    let xa = [0, 1, amiiboBoard - 1];
    console.log('ac' + ac);
    console.log('xa' + xa);
    function characterChange(n, pm) {//n:amiibo number,'keep'-----> pm: 1,-1,'jump'

        // if(pm==1){boxPositionNow++};
        // if(pm==-1){boxPositionNow--};
        if (n != 'keep') { boxPositionNow = n };
        if (boxPositionNow < 0) { boxPositionNow = amiiboBoard - 1 };
        let state = boxPositionNow % amiiboBoard;
        ac[0] = (state + 1) % 3;
        ac[1] = state % 3;
        ac[2] = (state + 2) % 3;

        function acFunction(p) {
            if (ac[p] == 1) {
                xa[p] = state;
                $('.amiC' + p).css('background-image', 'url(' + amiiboData[xa[p]].image + ')');
                Velocity($('.amiC' + p), { bottom: '9%' }, { duration: 300, easing: 'spring' });
                Velocity($('.mario'), { opacity: 0 }, 0);
            };
            if (ac[p] == 2) {
                if (state - 1 < 0) { xa[p] = state - 1 + amiiboBoard } else { xa[p] = state - 1 }
                $('.amiC' + p).css('background-image', 'url(' + amiiboData[xa[p]].image + ')');
                Velocity($('.amiC' + p), { bottom: '-100%' }, { duration: 0 });
            };
            if (ac[p] == 0) {
                if (state + 1 == amiiboBoard) { xa[p] = state + 1 - amiiboBoard } else { xa[p] = state + 1 }
                $('.amiC' + p).css('background-image', 'url(' + amiiboData[xa[p]].image + ')');
                Velocity($('.amiC' + p), { bottom: '-100%' }, { duration: 0 });
            };
        }
        acFunction(0);
        acFunction(1);
        acFunction(2);
        console.log('ac' + ac);
        console.log('xa' + xa);
        console.log(boxPositionNow);
    }
    function textChange() {
        let state = boxPositionNow % amiiboBoard;
        $('.marioTextInside h1').html(amiiboData[state].name);
        $('.amiiboDetail1 span').html(amiiboData[state].series);
        $('.amiiboDetail2 span').html(amiiboData[state].date);
        $('.amiiboDetail3 span').html(amiiboData[state].presented);
        $('.amiiboIntroText').html(amiiboData[state].content);
        Velocity($('.amiiboBoxArea'), { backgroundColor: amiiboData[state].color }, { duration: 300 });
        Velocity($('.compatBackGround svg path'), { fill: amiiboData[state].color }, { duration: 300 });
    }

    function compatMove(n) {
        let compatWidth = $('.compatGamesInside').width();
        let compatLeft = parseInt($('.compatGamesMove').css('left'), 10) * -1;
        let compatMoveWidth = $('.compatGamesMove').width();
        let compatGameWidthAndMargin = $('.compatGamesMove img').width() + compatWidth * 0.1;
        let move = 0;
        if (compatLeft <= 0 && n == -1) {
            move = 0;
            Velocity($('.compatGamesMove'), { left: 50 }, 300);
            Velocity($('.compatGamesMove'), { left: 0 }, 300);
        } else if (compatLeft > compatMoveWidth - compatGameWidthAndMargin && n == 1) {
            Velocity($('.compatGamesMove'), { left: compatLeft * -1 - 50 }, 300);
            Velocity($('.compatGamesMove'), { left: compatLeft * -1 }, 300);
        } else {
            move = compatLeft + compatGameWidthAndMargin * 3 * n;
            Velocity($('.compatGamesMove'), { left: move * -1 }, 500);
        }
    }

    const boxLeft = document.getElementsByClassName("listLeftArrow");
    boxLeft[0].addEventListener("click", () => {
        moveLeft(-1);
        characterChange('keep', -1);
        textChange();
    });

    const boxRight = document.getElementsByClassName("listRightArrow");
    boxRight[0].addEventListener("click", () => {
        moveLeft(1);
        characterChange('keep', 1);
        textChange();
    });

    const gameLeft = document.getElementsByClassName("compatLeftArrow");
    gameLeft[0].addEventListener("click", () => {
        compatMove(-1);
    });

    const gameRight = document.getElementsByClassName("compatRightArrow");
    gameRight[0].addEventListener("click", () => {
        compatMove(1);
    });

    const compatOpen = document.getElementsByClassName("amiiboCompat");
    compatOpen[0].addEventListener("click", () => {
        Velocity($('.compat'), { marginTop: 0, opacity: 1 }, 500);
    });
    //scroll animation
    window.addEventListener('scroll', () => { scrollEvent() })

    function scrollEvent() {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        let marioDistanceTop = $('.mario').offset().top - scrollTop;
        let boxDistanceTop = $('.box').offset().top - scrollTop;
        let marioCenterTop = (viewHeight - $('.mario').height()) / 2;
        let boxCenterTop = (viewHeight - $('.box').height()) / 2;
        console.log('scrollTop:' + scrollTop)
        if (boxDistanceTop < boxCenterTop) {
            Velocity($('.mario'), { translateY: 0 }, 0);
            Velocity($('.mario'), { width: '51%' }, 0);
            if (boxMoveOrNot == 1) {
                Velocity($('.box'), { translateX: 0 }, { duration: 300, queue: false });
                Velocity($('.amiiboBoxArea'), { backgroundColor: '#E60013' }, { duration: 300, queue: false });
                Velocity($('.mario'), { opacity:0}, { duration: 0, queue: false });
                Velocity($('.amiC0'), { opacity:1,bottom:'9%'}, { duration: 0, queue: false });
                $('.amiiboBoxArea').css('box-shadow', '0px 0px 7px rgba(0, 0, 0, 0.7)')
                $('.amiiboBoxArea').css('background-image', 'none')
                boxMoveOrNot = 0;
            }
        } else if (marioDistanceTop < marioCenterTop) {
            let initMarioMove = marioOriginalHeight - $('.marioAnimate').offset().top + $('.box').height() * 1.35;
            let marioMoving = scrollTop - marioOriginalHeight + marioCenterTop;
            let movePersent = 1 + marioMoving / initMarioMove;
            let marioWidthMoving = 75 - 24 * movePersent + '%';
            Velocity($('.mario'), { width: marioWidthMoving }, { duration: 0, queue: false });
            Velocity($('.mario'), { translateY: marioMoving }, { duration: 0, queue: false });
        }
        if (scrollTop > $('.getItem').offset().top) {
            Velocity($('.ac1'), { opacity: 1, translateY: -10 }, { duration: 500 });
            Velocity($('.ac2'), { opacity: 1, translateY: -10 }, { duration: 500, delay: 500 });
        }
        if (scrollTop > $('.addCharacter').offset().top) {
            Velocity($('.lu1'), { opacity: 1, translateY: -10 }, { duration: 500 });
            Velocity($('.lu2'), { opacity: 1, translateY: -10 }, { duration: 500, delay: 500 });
            Velocity($('.lu3'), { opacity: 1, translateY: -10 }, { duration: 500, delay: 700 });
        }
        if (scrollTop > $('.marioAnimate').offset().top) {
            let amiiboLineMoving;
            setTimeout(()=>{
                amiiboLineMoving = ($('.amiiboLineMove').width() - $('.amiiboLine').width()) * -1;
                Velocity($('.amiiboLineMove'), { left: amiiboLineMoving }, { duration: 80000, easing: 'linear' });
            },250);
            
        }
    }

    function plusLineImg(n) {
        console.log('amiibodata' + amiiboData[n].image)
        $('.amiiboLineMove').append('<img class=lineImage' + n + ' src=' + amiiboData[n].image + '>')
    }
    for (q = 0; q < 4; q++) {
        for (i = 0; i < amiiboBoard; i++) {
            plusLineImg(i);
        }
    }

    function toggleMobileMenu() {
        let listDisplay = $('.mobileList').css('display');
        if (listDisplay == 'none') {
            $('.icon_x5F_cross').css('opacity', '1');
            $('.icon_x5F_hambur').css('opacity', '0');
            $('.mobileList').css('display', 'flex');
            Velocity($('.mobileList li'),{lineHeight:'4em'},120)
        } else {
            $('.icon_x5F_cross').css('opacity', '0');
            $('.icon_x5F_hambur').css('opacity', '1');
            $('.mobileList').css('display', 'none');
            Velocity($('.mobileList li'),{lineHeight:'1em'},120)
        }
    }

    const toggleBurger = document.getElementsByClassName("burger");
    toggleBurger[0].addEventListener("click", () => {
        toggleMobileMenu()
    });
});

