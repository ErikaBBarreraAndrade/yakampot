if (localStorage.getItem('screenModeNightTokenState') == 'option-language-eng') {
  $(".language-en").removeClass("collapse");
  $(".language-es").addClass("collapse");
  $(".option-language-esp").removeClass("active");
  $(".option-language-eng").addClass("active");
}
if (localStorage.getItem('screenModeNightTokenState') == 'option-language-esp') {
  $(".language-en").addClass("collapse");
  $(".language-es").removeClass("collapse");
  $(".option-language-eng").removeClass("active");
  $(".option-language-esp").addClass("active");
}
$(".option-language-eng").click(function (){
  localStorage.setItem('screenModeNightTokenState', 'option-language-eng');
  $(".language-en").removeClass("collapse");
  $(".language-es").addClass("collapse");
  $(".option-language-esp").removeClass("active");
  $(".option-language-eng").addClass("active");
});
$(".option-language-esp").click(function (){
  localStorage.setItem('screenModeNightTokenState', 'option-language-esp');
  $(".language-en").addClass("collapse");
  $(".language-es").removeClass("collapse");
  $(".option-language-eng").removeClass("active");
  $(".option-language-esp").addClass("active");
});
