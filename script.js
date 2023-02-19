let top_block = document.querySelector('.top-block')
menu_btn = document.querySelector('.menu-btn')
mobile_panel = document.querySelector('.mobile-panel')
close_inner = document.querySelector('.close-inner')


function scrollTop() {
    document.addEventListener('scroll', () => {
        if (scrollY > 10) {
            top_block.setAttribute('style', 'height:60px; background-color: #f1eef8cc;')
        } else {
            top_block.setAttribute('style', '')
        }
    })
}
scrollTop()

function top_panel() {
    menu_btn.addEventListener('click', () => {
        mobile_panel.style.cssText = 'top: 0px;'
    })

    close_inner.addEventListener('click', () => {
        mobile_panel.style.cssText = 'top: -340px;'
    })

    document.querySelector('.parent').addEventListener('click', () => {
        mobile_panel.style.cssText = 'top: -340px;'
    })

    document.addEventListener('scroll', () => {
        if (scrollY) {
            mobile_panel.setAttribute('style', 'top: -340px;')
        }
    })
}
top_panel()

function colorClicks() {
    let chenge_colors = document.querySelectorAll('.chenge_colors')
    let chenge_color_cont_colors = document.querySelectorAll('.chenge_color_cont>div')

    chenge_color_cont_colors.forEach(el => {
        el.addEventListener('click', () => {
            let get_color = el.getAttribute('style').match(/\w+$/)

            chenge_colors.forEach((el2, i) => {
                el2.style.cssText = `background-color:${get_color}`
            })
        })
    })
}
colorClicks()


function colors_text_chenge() {
    let time = 1000
    let colors = ['green', 'blue', 'red', 'blueviolet', 'lime']
    let i = 0

    setInterval(() => {
        document.querySelectorAll('.chenge_color').forEach(el => {
            el.style.cssText = `color:${colors[i]};transition:800ms`
        })

        i++

        if (i > colors.length - 1) {
            i = 0
        }
    }, time);
}
colors_text_chenge()

// -------------------------------------------------------------
setInterval(
    function () {
        let date = new Date();
        let hrs = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        min = dates(min);
        sec = dates(sec);

        document.querySelector('.date').innerHTML = hrs + ':' + min + ':' + sec;
        document.querySelector('.day_year').innerHTML = date.toDateString();

    });

function dates(val) {
    if (val < 10) {
        val = '0' + val;
    }
    return val;
}

dates()

// -------------------------------------------------------------

let navigation_items = document.querySelectorAll('.navigation-items')

navigation_items.forEach((el, i) => {
    el.addEventListener('click', () => {
        if (el.textContent.trim() === 'Home') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (el.textContent.trim() === 'Feature') {
            window.scrollTo({
                top: 1100,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (el.textContent.trim() === 'Talent') {
            window.scrollTo({
                top: 2300,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (el.textContent.trim() === 'Expore') {
            window.scrollTo({
                top: 3100,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (el.textContent.trim() === 'Testimonial') {
            window.scrollTo({
                top: 3950,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (el.textContent.trim() === 'Waiting') {
            window.scrollTo({
                top: 5000,
                left: 0,
                behavior: 'smooth'
            });
        }
        if (el.textContent.trim() === 'Foother') {
            window.scrollTo({
                top: 5900,
                left: 0,
                behavior: 'smooth'
            });
            console.log(el.textContent);
        }
    })
});

// tanine
// listeri vra secmeluc scrol lini nerqev
// stexcel jamauyc verevi dzax ankynum js data


