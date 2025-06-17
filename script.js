// --- Fungsi untuk Animasi Reveal on Scroll ---
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150; // Jarak dari bawah layar sebelum elemen muncul

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Panggil sekali saat load untuk elemen yang sudah terlihat di viewport awal
reveal();

// --- Fungsi untuk Auto-update Copyright Year di Footer ---
document.getElementById("year").textContent = new Date().getFullYear();


// --- Konfigurasi untuk tsParticles (Efek Background) ---
window.addEventListener('load', () => {
    tsParticles.load({
        id: "tsparticles",
        options: {
            background: {
                color: {
                    value: "#121212" // Harus sama dengan --bg-color di CSS Anda
                },
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "grab", // Efek saat mouse hover
                    },
                    onClick: {
                        enable: true,
                        mode: "push", // Efek saat mouse klik
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity: 1,
                        },
                    },
                    push: {
                        quantity: 4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff", // Warna partikel
                },
                links: {
                    color: "#ffffff", // Warna garis penghubung antar partikel
                    distance: 150,
                    enable: true,
                    opacity: 0.2, // Transparansi garis
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: "out",
                    random: false,
                    speed: 1, // Kecepatan gerak partikel
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80, // Jumlah partikel di layar
                },
                opacity: {
                    value: 0.3, // Transparansi partikel
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 }, // Ukuran partikel akan random antara 1px dan 3px
                },
            },
            detectRetina: true,
        }
    });
});