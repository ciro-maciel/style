// http://stackoverflow.com/questions/3387427/remove-element-by-id
if (Element.prototype.remove === undefined) {
    Element.prototype.remove = function () {
        this.parentElement.removeChild(this);
    }
}

if (NodeList.prototype.forEach === undefined) {
    NodeList.prototype.forEach = Array.prototype.forEach
}



function headerRegister() {

    var header = document.querySelector('header');

    if ((header === null) || (header === undefined)) {
        return;
    }


    var itens = header.querySelectorAll('.website>.container>ul>.hide-mobile'),
        navMobile = header.querySelector('.nav-mobile');

    navMobile.onclick = function () {

        // debugger

        if (!this.classList.contains('active')) {

            this.classList.add('active');


            document.body.style.overflow = 'hidden';


            document.getElementById('button-search-open').style.transition = 'all linear 0.2s !important';
            document.getElementById('button-search-open').style.opacity = 0;


            // debugger

            let hh = window.innerHeight + 99;
            let ww = window.innerWidth;



            // http://stackoverflow.com/questions/4917664/detect-viewport-orientation-if-orientation-is-portrait-display-alert-message-ad
            if (window.matchMedia("(orientation: portrait)").matches) {
                // you're in PORTRAIT mode
            }

            if (window.matchMedia("(orientation: landscape)").matches) {
                // you're in LANDSCAPE mode
            }




            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.backgroundColor = 'white';
            div.style.boxSizing = 'border-box';
            div.style.height = hh + 'px';
            div.style.top = '47px';
            div.style.width = ww + 'px';
            div.style.zIndex = 7;
            div.style.paddingRight = '30px';
            div.style.paddingLeft = '30px';
            div.classList.add('header-mobile');



            var ul = document.createElement('ul');
            ul.classList.add('list');
            ul.classList.add('vertical');
            // ul.style.marginLeft = '40px';
            // ul.style.marginRight = '40px';

            [].forEach.call(itens, function (item) {

                item.classList.remove('hide-mobile');

                item.querySelector('a').style.display = 'block';

                ul.appendChild(item);

            });

            div.appendChild(ul);


            header.appendChild(div);


        } else {

            this.classList.remove('active');

            document.body.style.overflow = 'initial';

            document.getElementById('button-search-open').style.opacity = .6;



            [].forEach.call(document.querySelectorAll('.header-mobile'), function (header) {
                header.remove();
            })


        }

    }


}


function searchRegister() {

    function searchOpen() {

        var div = document.createElement('div');
        div.classList.add('overlay');

        document.body.appendChild(div);

        document.querySelectorAll('header>.search .list.vertical>li').forEach(function (item) {
            item.classList.remove('hide-mobile');
        });

        document.querySelector('header>.search').classList.remove('hide');

    }


    function searchClose() {
        document.querySelector('.overlay').remove();
        document.querySelector('header>.search').classList.add('hide');

        document.querySelectorAll('header>.search .list.vertical>li').forEach(function (item) {
            item.classList.add('hide-mobile');
        });


    }


    function searchInput() {

        var textSearchTerm = document.getElementById('text-search-term');




    }

    if (document.getElementById('button-search-open') && document.getElementById('button-search-close')) {

        document.getElementById('button-search-open').onclick = function () {
            searchOpen();
        };

        document.getElementById('button-search-close').onclick = function () {
            searchClose();
        };
    }

}




window.addEventListener('DOMContentLoaded', function () {

    headerRegister();
    searchRegister();


});