$(function(){
	$('#fullpage').fullpage({
		navigation:true,
		scrollingSpeed:700,
		easing:'easeInOutQuart',
		onLeave:function(index,nextIndex,direction){
			$('.section:nth-child(1)').removeClass('animat');
			if(direction==='down'){
				$('.section:nth-child('+index+')').addClass('anitop')
			}else{
				$('.section:nth-child('+nextIndex+')').removeClass('anitop')
			}
		},
		anchors:['fo1','fo2','fo3','fo4','fo5','fo6','fo7'],
		navigationTooltips:['PERSONALWEB','自我介绍','技能介绍','展示作品','休闲游戏','联系方式'],
	})
   
   $('.btn-triger').click(function () {
      $(this).closest('.float-btn-group').toggleClass('open');
  });

$('#dowebok1').waterbubble({
    animation: true,
     txt: 'HTML5',
     radius: 50,
     waterColor: 'rgba(25, 139, 201, 1)',
     textColor: 'rgba(06, 85, 128, 0.8)',
     data: 0.92,
  });
  $('#dowebok2').waterbubble({
    animation: true,
     txt: 'JS',
     radius: 50,
     waterColor: 'rgba(39, 174, 97, 1)',
     textColor: 'rgba(14, 71, 39, 0.8)',
     data: 0.8,
  });
  $('#dowebok3').waterbubble({
    animation: true,
     txt: 'CSS3',
     radius: 50,
     waterColor: 'rgba(245, 215, 110, 1)',
     textColor: 'rgba(211, 84, 0, 0.8)',
     data: 0.85,
  });
  $('#dowebok4').waterbubble({
    animation: true,
     txt: 'jQuery',
     radius: 50,
     waterColor: 'rgba(245, 215, 110, 1)',
     textColor: 'rgba(211, 84, 0, 0.8)',
     data: 0.8,
  });
  $('#dowebok5').waterbubble({
    animation: true,
     txt: 'Angular',
     radius: 50,
    waterColor: 'rgba(39, 174, 97, 1)',
     textColor: 'rgba(14, 71, 39, 0.8)',
     data: 0.7,
  });
  $('#dowebok6').waterbubble({
    animation: true,
     txt: 'PS',
     radius: 50,
     waterColor: 'rgba(25, 139, 201, 1)',
     textColor: 'rgba(06, 85, 128, 0.8)',
     data: 0.8,
  });
  $('#dowebok7').waterbubble({
    animation: true,
     txt: 'AI',
     radius: 50,
     waterColor: 'rgba(25, 139, 201, 1)',
     textColor: 'rgba(06, 85, 128, 0.8)',
     data: 0.6,
  });
  $('#dowebok8').waterbubble({
    animation: true,
     txt: '移动端',
     radius: 50,
     waterColor: 'rgba(39, 174, 97, 1)',
     textColor: 'rgba(14, 71, 39, 0.8)',
     data: 0.7,
  });
  $('#dowebok9').waterbubble({
    animation: true,
     txt: '手机端',
     radius: 50,
     waterColor: 'rgba(245, 215, 110, 1)',
     textColor: 'rgba(211, 84, 0, 0.8)',
     data: 0.7,
  });
})


var cc = function(){
	function flashTextarea(){
  console.log('fl')
  $('.ta').css({'outline':'1px solid rgba(255,255,0,0.7)'})
  setTimeout(function(){
    $('.ta').css({'outline':'1px solid rgba(255,255,0,0)'})
  },50)
}

$(function(){

  hljs.configure({languages:['js']})
  hljs.highlightBlock($('#code')[0])

  $('#usage').click(function(){
    this.focus()
    this.select()
  })


  $('.textarea').focus()
    .typetype("各位HR好，我叫孙跃伟,是一名前端工程师，接触计算机10年了,从刚开始的问题少年慢慢变成一个前端攻城狮，从事这个行业一年多越来越喜欢这份工作.", {
      callback: function() {
        $('body').addClass('reveal')
      }
    }).delay(1500)
    .typetype("\n\n我能熟练使用H5+C3布局，掌握jQ,angular,ajax,移动端，响应式布局等前端技术。")
    .fadeTo(400,0.9).delay(1000).queue(function(){$('#secondhalf').fadeIn(1000);$('textarea').dequeue()}).delay(4000).fadeTo(400,1.0).delay(1000)
    .typetype("\n\nYou can make it fast... ",{
      keypress:flashTextarea,
      t:60,
      e:0
    })
    .typetype("or slow and error-prone.", {
      t:200,
      e:0.2, // the default error rate is 0.04
      callback: function(){
        $("#usage").addClass('show')
      }
    })
    .backspace(48)
    .typetype("Try it out!")

})
}
setInterval(cc,3000)