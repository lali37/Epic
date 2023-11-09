const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0
})

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

gsap.from(".anime2", {
    y:50,
    stragger: .3,
    opacity:0,
    ease: Expo,
    duration: 1
});

Shery.imageEffect("#imgntext img", {
    style: 3,
    config: {"uFrequencyX":{"value":25.62,"range":[0,100]},"uFrequencyY":{"value":24.79,"range":[0,100]},"uFrequencyZ":{"value":22.31,"range":[0,100]},"geoVertex":{"range":[1,64],"value":52.55},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666729053926924},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

Shery.imageEffect(".imgeff img", {
    style: 5,
    config: {"a":{"value":1.74,"range":[0,30]},"b":{"value":-0.59,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8333333562702578},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
});

gsap.from("#imgntext img", {
    z: "7",
    opacity: 0,
    duration: 2,
    ease: Expo.easenInOut
});

Shery.imageEffect("#bimg", {
    style: 5,
    config: {"a":{"value":1.74,"range":[0,30]},"b":{"value":-0.82,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.4715938783128033},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.27,"range":[1,15]},"durationOut":{"value":0.34,"range":[0.1,5]},"durationIn":{"value":1.27,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.41,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":33}},"discard_threshold":{"value":0.48,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.48,"range":[0,2]},"noise_scale":{"value":8.26,"range":[0,100]}},
    gooey: true
});

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity: 1,
        duration:1,
        ease: Power4
    })
});

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity: 0,
        duration:1,
        ease: Power4
    })
});


