function readingProgress() {
    var winHeight = window.innerHeight,
        body = document.body,
        html = document.documentElement,
        docHeight = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        ),
        progressBar = document.querySelector('.progress'),
        max = docHeight - winHeight;

    document.addEventListener('scroll', function() {
        var value =
            window.pageYOffset !== undefined
                ? window.pageYOffset
                : (document.documentElement ||
                      document.body.parentNode ||
                      document.body
                  ).scrollTop;
        progressBar.setAttribute('style', 'width: ' + value / max * 100 + '%');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    readingProgress();
});
