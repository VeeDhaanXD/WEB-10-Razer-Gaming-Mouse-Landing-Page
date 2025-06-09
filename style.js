gsap.from("#ok" , {
    x : -100,
    duration: 0.5,
    opacity :0,
    rotate : 120,
}) 

gsap.from(".nav" ,{
    x:-100,
    delay: 0.5
})

gsap.from(".main" ,{
    y: -1000,
    delay :1,
    opacity : 0,

})

gsap.from(".top-input" , {
    y: -1000,
    delay :1.5,
    opacity : 0,
})

gsap.from(".img-1", {
    x : 0,
    opacity : 0,
    delay : 2.5,
})

gsap.from(".img-2", {
    x : 0,
    opacity : 0,
    delay : 2.75,
})
gsap.from(".img-3", {
    x : 0,
    opacity : 0,
    delay : 3,
})

gsap.from(".gradient-box", {
    x : 100,
    opacity : 0,
    delay : 3.3,
})
