var save_timer
var save_last
var save_period = 5000

function throttle (fn, threshhold, scope) {    
    threshhold || (threshhold = 250)
  
    return function () {
        var context = scope || this

        var now = +new Date
        var args = arguments
    
        if (save_last && now < save_last + threshhold) {            
            clearTimeout(save_timer)
      
            save_timer = setTimeout(function () {
                save_last = now
                fn.apply(context, args)
            }, threshhold)
        } else {            
            save_last = now
            fn.apply(context, args)
        }
    }
}

hljs.initHighlightingOnLoad()

var marking = false
var ticking = false
var previewing = false

function update_scroll () {
    if (marking || previewing) {
        marking = false
    } else {
        var window_scroll_y = window.scrollY
        var window_inner_height = window.innerHeight

        if (window_scroll_y < window_inner_height) {
            input.style['margin-top'] = '0px'   
        } else {
            var content_height = content.scrollHeight
            var input_height = input.scrollHeight

            var difference = content_height - input_height

            if (content_height < window_scroll_y) {
                input.style['margin-top'] = difference + 'px'
            } else {
                if (difference > 0) {
                    var offset = difference * ((window_scroll_y - window_inner_height) / (content_height - window_inner_height))

                    if (offset > 0) {
                        input.style['margin-top'] = offset + 'px'
                    }
                }
            }
        }
    }

    ticking = false
}

function on_scroll () {
    if (!ticking) {
        requestAnimationFrame(update_scroll)
    }

    ticking = true
}

function toggle_preview () {
    if (previewing) {
        unpreview()
    } else {
        preview()
    }
}

function preview () {
    input.parentElement.style['display'] = 'none'
    content.className = 'content'
    content.parentElement.parentElement.className = 'solid wrapper'

    previewing = true
}

function unpreview () {
    input.parentElement.style['display'] = 'block'
    content.className = 'content edit'
    content.parentElement.parentElement.className = 'full wrapper'

    previewing = false

    on_scroll()
}

window.addEventListener('scroll', on_scroll, false);

marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value
    }
})

var content = document.getElementById('content')
var input = document.getElementById('input')
var title = document.getElementById('title')

title.spellcheck = false
title.focus()
title.blur()

autosize(input)

var preview_button = document.getElementById('preview')

preview_button.onclick = function (e) {
    e.preventDefault()

    toggle_preview()

    return false
}

var mark = function() {
    marking = true

    content.innerHTML = marked(input.value)
    
    save()
}

var save_button = document.getElementById('save')

function save () {
    var foo = throttle(function () {
        save_button.className = 'button saving'
        save_button.innerHTML = 'SAVING...'
        
        setTimeout(function () {
            save_button.className = 'button saved'
            save_button.textContent = 'SAVED  ✔'
        }, Math.random() * 2000)
    }, save_period)
    
    foo()
}

mark()

input.oninput = mark