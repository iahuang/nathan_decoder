var slider = document.getElementById("chk")
var info = document.getElementById("info")
var inp = document.getElementById("in")
var out = document.getElementById("out")

var key = `
A=i
a=was

B=me
b=had

C=you
c=did

D=he
d=said

E=she
e=got

F=they
f=made

G=it
g=went

H=we
h=knew

I=time
i=took

J=a person
j= saw

K=a year
k=came

L=a dog
l=thought

M=a day
m=looked

N=a thing
n=wanted

O=man
o=gave

P=the world
p=used

Q=life
q=found

R=a hand
r=told

S=a cat
s=asked

T=a child
t=worked

U=father
u=seemed

V=a woman
v=felt

W=mother
w=tried

X=the work
x=left

Y=the week
y=called

Z=the case
z=cried
`

var bindings = {}
var bindings_enc = {}
var lines = key.split("\n")
for (var i=0;i<lines.length;i++) {
    line = lines[i]
    if (line != "") {
        kv = line.split("=")
        bindings[kv[0]] = kv[1]

        bindings_enc[kv[1].split(" ")[kv[1].split(" ").length-1]] = kv[0]
    }
}
console.log(bindings)

function decode(s) {
    var chars = s.split('')
    var outs = []
    for (var i=0;i<chars.length;i++) {
        var c = chars[i]
        if (i%2==0) {
            c = c.toUpperCase()
        }
        if (c in bindings) {
            outs.push(bindings[c])
        }
    }
    return outs.join(" ")
}

function encode(s) {
    var words = s.toLowerCase().split(' ')
    var outs = []
    for (var i=0;i<words.length;i++) {
        var w = words[i]
        if (w in bindings_enc) {
            outs.push(bindings_enc[w])
        }
    }
    return outs.join("")
}

function tick () {
    if (slider.checked) {
        info.className="info2"
        info.innerText = "Encoding"
        out.value = encode(inp.value)
    } else {
        info.className="info1"
        info.innerText = "Decoding"
        out.value = decode(inp.value)
    }

}
setInterval(tick,10)
