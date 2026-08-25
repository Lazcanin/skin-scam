/**
 * Skin Scam — Prototype Navigation & Interactions
 */

// ── Navegación entre pantallas ──
function navigateTo(screenId) {
    var screens = document.querySelectorAll('.screen');
    screens.forEach(function(s) {
        s.classList.remove('active');
    });

    var target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
        // Scroll al top del contenido
        var scroll = target.querySelector('.screen-scroll');
        if (scroll) scroll.scrollTop = 0;
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // ── Filter chips (Community) ──
    document.querySelectorAll('.filter-chips .chip').forEach(function(chip) {
        chip.addEventListener('click', function() {
            document.querySelectorAll('.filter-chips .chip').forEach(function(c) {
                c.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // ── AM/PM Toggle (Routine) ──
    document.querySelectorAll('.toggle-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.toggle-tab').forEach(function(t) {
                t.classList.remove('active');
            });
            this.classList.add('active');

            // Cambiar subtítulo
            var sub = document.querySelector('.routine-subtitle');
            if (sub) {
                sub.textContent = this.dataset.tab === 'am'
                    ? 'Rutina Matutina • 4 pasos'
                    : 'Rutina Nocturna • 3 pasos';
            }
        });
    });

    // ── Animación de entrada del scanner sheet ──
    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
            if (m.target.id === 'screen-scanner' && m.target.classList.contains('active')) {
                var sheet = m.target.querySelector('.scanner-sheet');
                if (sheet) {
                    sheet.style.transform = 'translateY(100%)';
                    setTimeout(function() {
                        sheet.style.transform = 'translateY(0)';
                    }, 400);
                }
                // Activar línea de escaneo
                var line = m.target.querySelector('.scanning-line');
                if (line) {
                    line.classList.remove('animate');
                    void line.offsetWidth; // trigger reflow
                    line.classList.add('animate');
                }
            }
        });
    });

    document.querySelectorAll('.screen').forEach(function(screen) {
        observer.observe(screen, { attributes: true, attributeFilter: ['class'] });
    });

    // ── Simular drag visual en routine cards ──
    document.querySelectorAll('.step-card').forEach(function(card) {
        var handle = card.querySelector('.drag-handle');
        if (!handle) return;

        handle.addEventListener('mousedown', function() {
            card.classList.add('dragging');
        });
        document.addEventListener('mouseup', function() {
            document.querySelectorAll('.step-card.dragging').forEach(function(c) {
                c.classList.remove('dragging');
            });
        });
    });

    // ── Like toggle en reviews ──
    document.querySelectorAll('.review-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var heart = this.querySelector('.bi-heart');
            if (heart) {
                heart.classList.remove('bi-heart');
                heart.classList.add('bi-heart-fill');
                heart.style.color = '#E8909A';
            }
        });
    });
});

// ── Quiz: selección de opción ──
function selectQuizOption(el) {
    document.querySelectorAll('.quiz-option').forEach(function(o) {
        o.classList.remove('selected');
    });
    el.classList.add('selected');
}

// ── Product Detail: tabs ──
function switchDetailTab(tabBtn, contentId) {
    document.querySelectorAll('.detail-tab').forEach(function(t) {
        t.classList.remove('active');
    });
    document.querySelectorAll('.detail-tab-content').forEach(function(c) {
        c.classList.remove('active');
    });
    tabBtn.classList.add('active');
    var content = document.getElementById(contentId);
    if (content) content.classList.add('active');
}

// ── Notifications: tabs ──
function switchNotifTab(tabBtn) {
    document.querySelectorAll('.notif-tab').forEach(function(t) {
        t.classList.remove('active');
    });
    tabBtn.classList.add('active');
}

// ── Write Review: star rating ──
function setStars(n) {
    document.querySelectorAll('.wr-star').forEach(function(star, i) {
        if (i < n) {
            star.classList.add('active');
            star.querySelector('i').classList.remove('bi-star');
            star.querySelector('i').classList.add('bi-star-fill');
        } else {
            star.classList.remove('active');
            star.querySelector('i').classList.remove('bi-star-fill');
            star.querySelector('i').classList.add('bi-star');
        }
    });
}

// ── Write Review: time option (single select) ──
function selectTimeOption(el) {
    el.closest('.wr-time-options').querySelectorAll('.chip').forEach(function(c) {
        c.classList.remove('active');
    });
    el.classList.add('active');
}

// ── Write Review: repurchase (single select) ──
function selectRepurchase(el) {
    document.querySelectorAll('.repurchase-btn').forEach(function(b) {
        b.classList.remove('active');
    });
    el.classList.add('active');
}
