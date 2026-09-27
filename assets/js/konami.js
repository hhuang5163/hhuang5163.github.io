// Konami code easter egg: ↑ ↑ ↓ ↓ ← → ← → B A triggers capsule rain, site-wide.
(function () {
    var SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
                    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    var CAPSULES = ['/assets/images/discover/capsule1.png', '/assets/images/discover/capsule2.png'];
    var pos = 0;
    var raining = false;

    document.addEventListener('keydown', function (e) {
        var key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
        if (key === SEQUENCE[pos]) {
            pos++;
        } else {
            pos = (key === SEQUENCE[0]) ? 1 : 0;
        }
        if (pos === SEQUENCE.length) {
            pos = 0;
            capsuleRain();
        }
    });

    function capsuleRain() {
        if (raining || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        raining = true;

        var style = document.createElement('style');
        style.textContent =
            '@keyframes konami-fall { to { transform: translateY(115vh) rotate(540deg); } }';
        document.head.appendChild(style);

        var container = document.createElement('div');
        container.style.cssText =
            'position:fixed;top:0;right:0;bottom:0;left:0;pointer-events:none;z-index:3000;overflow:hidden;';
        document.body.appendChild(container);

        for (var i = 0; i < 40; i++) {
            var img = document.createElement('img');
            img.src = CAPSULES[i % CAPSULES.length];
            img.alt = '';
            img.style.cssText =
                'position:absolute;top:-12vh;width:' + (28 + Math.random() * 32) + 'px;' +
                'left:' + (Math.random() * 100) + 'vw;' +
                'animation:konami-fall ' + (2 + Math.random() * 2.5) + 's linear ' + (Math.random() * 1.5) + 's forwards;';
            container.appendChild(img);
        }

        setTimeout(function () {
            container.remove();
            style.remove();
            raining = false;
        }, 7000);
    }
})();
