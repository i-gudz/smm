$(document).ready(function () {
    $('.bg').click(function () {
        $(this).toggleClass('click');
    });
});

$('.cool-input__input').on('input', function () {
    let $this = $(this);
    if ($this.val() == '') {
        $this.removeClass('cool-input__input_filled');
    } else {
        $this.addClass('cool-input__input_filled');
    }
});

let modal = document.getElementById('myModal');
        let btn = document.getElementsByClassName("show_popup");
        let span = document.getElementsByClassName("close");
        let next = document.getElementById('open_next_pop');
        let modals = document.getElementsByClassName('modal');

        function buttonClick(event) {
            let id = this.getAttribute('data-modal');
            let modal = document.getElementById(id);
            modal.style.display = 'flex';
        }
        for (let i = 0; i < btn.length; i++) {
            btn[i].onclick = buttonClick;
        }

        function spanClick() {
            let id = this.getAttribute('data-modal');
            let modal = document.getElementById(id);
            modal.style.display = 'none';
        }

        for (let i = 0; i < span.length; i++) {
            span[i].onclick = spanClick;
        }

        window.onclick = function (event) {
            let isModal = (' ' + event.target.className + ' ').indexOf(' modal ') > -1;
            if (isModal) {
                event.target.style.display = "none";
            }
        }