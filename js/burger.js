


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.add('is-active1');
        document.querySelector('body').classList.add('lock');
      
        document.querySelector('#burger-cloused').addEventListener('click', function() {
            document.querySelector('#menu').classList.remove('is-active1');
            document.querySelector('body').classList.remove('lock');
        });
        let elements = document.querySelectorAll('.burger__link');
        for (var i = 0; i < elements.length; i++) {
            elements[i].onclick = function(){
                document.querySelector('#menu').classList.remove('is-active1');
                document.querySelector('body').classList.remove('lock');
            };
        };
    });
    // document.querySelector('.burger__link').addEventListener('click', function() {
    //     document.querySelector('#menu').classList.remove('is-active1');
    //     document.querySelector('body').classList.remove('lock');
    // });
    
})

// $(document).ready(function() {
//     $('#burger').click(function (event) {
//         $('#burger').toggleClass('is-active1');
//     });
// });


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
        document.querySelector('#input-box').classList.add('is-active');
        document.querySelector('#input-cloused').addEventListener('click', function() {
            document.querySelector('#input-box').classList.remove('is-active');
    })
        })
        
})