/*setTimeout(function(){
$('.images>img:nth-child(1)').css({
    transform:'translateX(-100%)'
})
$('.images>img:nth-child(2)').css({
    transform:'translateX(-100%)'
})
$('.images>img:nth-child(1)').one('transitionend',function(e){
    $(e.currentTarget).addClass('right').css({
        transform:'none'
    })
})
},3000)

setTimeout(function(){
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({
            transform:'none'
        })
    })
},6000)

setTimeout(function(){
    $('.images>img:nth-child(3)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(3)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({
            transform:'none'
        })
    })
    },9000)
setTimeout(function(){
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({
            transform:'none'
        })
    })
},12000)*/


/*let n  
初始化()
setInterval(()=>{
    makeLeave(getImage(n))
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n+=1
},3000)

function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}

function x(n){
    if(n>3){
        n = n%3
        if(n===0){
            n=3
        }
    }
    return n
}
function 初始化(){
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current')
   .siblings().addClass('enter')
}
function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
    return $node
}
function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter($node){
    $node.removeClass('current leave').addClass('enter')
    return $node
}*/
let $buttons =$('#buttonWrapper>button')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()

$slides.css({transform:'translateX(-400px)'})

blindEvents()

$(next).on('click',function(){
    goToSlide(current+1)
})
$(previours).on('click',function(){
    goToSlide(current-1)
})

let timer=setInterval(function(){
    goToSlide(current+1)

},2000)
$('#container').on('mouseenter',function(){
    window.clearInterval(timer)
}).on('mouseleave',function(){
    timer=setInterval(function(){
        goToSlide(current+1)
    },2000)
})


document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer=setInterval(function(){
            goToSlide(current+1)
        },2000)
    }
})


function makeFakeSlides(){
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length-1).clone(true)

    $slides.append($firstCopy)
    $slides.prepend($lastCopy)
}





function blindEvents(){

$('#buttonWrapper').on('click','button',function(e){
    let $button =$(e.currentTarget)
    let index = $button.index()
    goToSlide(index)
})
}

function goToSlide(index){
    if(index>$buttons.length-1){
        index = 0
    }else if(index<0){
        index = $buttons.length -1
    }
    if(current === $buttons.length-1&&index === 0){
        $slides.css({//最后一张到第一张
            transform:`translateX(${-($buttons.length+1)*400}px)`
        })
        .one('transitionend',function(){
            $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index+1)*400}px)`})
            .show()
        })
    }else if( current === 0 && index === $buttons.length-1){
        $slides.css({
            transform:`translateX(0px)`
        })
        .one('transitionend',function(){
            $slides.hide().offset()
            $slides.css({transform:`translateX(${-(index+1)*400}px)`})
            .show()    
        })
    }else{
    $slides.css({
        transform:`translateX(${-(index+1)*400}px)`
    })
}
current = index
}



 /*   $buttons.eq(0).on('click',function(){
        if(current == 2){
    
            $slides.css({
                transform:'translateX(-1600px)'
            })
            .one('transitionend',function(){
                $slides.hide().offset()
                $slides.css({transform:'translateX(-400px)'})
                .show()
            })
        }else{
            $slides.css({
                transform:'translateX(-400px)'
            })
        }
        current = 0
    })
    $buttons.eq(1).on('click',function(){
        $slides.css({
            transform:'translateX(-800px)'
        })
        current = 1
    })
    $buttons.eq(2).on('click',function(){
        if(current == 0){
            $slides.css({
                transform:'translateX(0px)'
            })
            .one('transitionend',function(){
                $slides.hide().offset()
                $slides.css({transform:'translateX(-1200px)'})
                .show()    
            })
        }else{
            $slides.css({
                transform:'translateX(-1200px)'
            })
        }
        current = 2
    })*/



