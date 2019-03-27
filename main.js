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


let n  
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
}