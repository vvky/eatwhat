$i = 0;
$('#start').click(function () {
    $i++;
    if ($i >= 6) {
        $('#start').hide();
        $('#stop').show();
    }
})
$('#stop').click(function () {
    alert('这么作？吃屎去吧！')
    $(this).hide();
})