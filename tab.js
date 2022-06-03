let num = document.querySelectorAll('.tab-button').length

function 탭열기(숫자) {
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(숫자).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(숫자).addClass('show');
}

// for (let i = 0; i < num; i++) {
//   $('.tab-button').eq(i).on('click', function () {
//     탭열기(i)
//   })
// }


$('.list').click(function(e) {

  탭열기(Number(e.target.dataset.id))

})
