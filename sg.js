var w = window;
var sp = new URLSearchParams(w.location.search);
var o = { u: 'd', d: 'u', l: 'r', r: 'l' };
var k = Object.keys(o);
customElements.define(
    's-g',
    class SG extends HTMLElement {
        constructor() {
            super();
            this.r = this.attachShadow({ mode: 'open' });
            this.s();
            w.addEventListener('keydown', e => {
                let ss = e.key.substr(5, 1).toLowerCase();
                if (k.includes(ss) && o[ss] != this.dr) this.dr = ss;
            });
            setInterval(this.uh.bind(this), sp.get('s') || 200);
        }

        s() {
            this.d = sp.get('d') || 10;
            this.dm = this.d - 1;
            this.r.innerHTML = `
<style>:host{display: flex;width: 800px;height: 800px;flex-wrap: wrap;}s-c{flex-basis:${
                100 / this.d
            }%;border:1px solid #000;box-sizing:border-box;}s-c[o] {background:#000;}s-c[f]{background:red;}</style>
${`<s-c></s-c>`.repeat(this.d ** 2)}`;
            this.cs = this.r.querySelectorAll('s-c');
            this.hd = { x: 5, y: 6, el: this.cs[6 * 10 + 5] };
            this.tl = [];
            this.dr = 'u';
            this.l = 2;
            this.sf();
        }

        uh() {
            let [dr, hd, tl] = [this.dr, this.hd, this.tl];
            if (dr == 'u') hd.y--;
            if (dr == 'd') hd.y++;
            if (dr == 'l') hd.x--;
            if (dr == 'r') hd.x++;
            if (hd.y > this.dm) hd.y = 0;
            if (hd.y < 0) hd.y = this.dm;
            if (hd.x > this.dm) hd.x = 0;
            if (hd.x < 0) hd.x = this.dm;
            hd.el = this.cs[hd.y * this.d + hd.x];
            if (hd.el.hasAttribute('o')) {
                this.s();
                return;
            }
            hd.el.setAttribute('o', '');
            tl.push(hd.el);
            if (tl.length > this.l) tl.shift().removeAttribute('o');
            if (hd.el === this.f) this.ef();
        }

        sf() {
            let f = Array.from(this.cs).filter(a => !a.hasAttribute('o'));
            this.f = f[Math.floor(Math.random() * f.length)];
            this.f.setAttribute('f', '');
        }

        ef() {
            this.l++;
            this.f.removeAttribute('f');
            this.sf();
        }
    },
);
