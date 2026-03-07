/**
 * 主入口文件 - 初始化所有模块
 */

const isMobile = window.matchMedia('(pointer: coarse)').matches || 
                 window.matchMedia('(max-width: 768px)').matches ||
                 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const isLowEndDevice = navigator.hardwareConcurrency <= 4 || 
                       navigator.deviceMemory <= 4 ||
                       isMobile;

const isPortrait = window.matchMedia('(orientation: portrait)').matches;

console.log('📱 设备检测:', { isMobile, isLowEndDevice, cores: navigator.hardwareConcurrency, memory: navigator.deviceMemory, isPortrait });

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎬 Portfolio initialized');
    
    if (isMobile) {
        initMobileOptimizations();
        skipLoader();
    } else {
        if (typeof cacheHeroElements === 'function') {
            setTimeout(cacheHeroElements, 100);
        }
    }
    
    if (typeof initVideoLightbox === 'function') {
        initVideoLightbox();
    }
    
    setTimeout(initLazyImages, isMobile ? 50 : 200);
});

window.addEventListener('load', () => {
    console.log('✅ All resources loaded');
    
    if (typeof initCloudImages === 'function') {
        initCloudImages();
    }
});

window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

function skipLoader() {
    const loader = document.getElementById('loader');
    const shutterContainer = document.getElementById('shutterContainer');
    const mainContent = document.getElementById('main-content');
    
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.3s';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
    
    if (shutterContainer) {
        shutterContainer.style.display = 'none';
    }
    
    if (mainContent) {
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';
    }
    
    document.body.classList.remove('hidden');
    document.body.classList.add('mobile-optimized');
}

function initMobileOptimizations() {
    console.log('📱 应用移动端优化');
    
    document.body.classList.add('mobile-optimized');
    
    disableHeavyAnimations();
    optimizeScrollPerformance();
    optimizeTouchInteractions();
    disableBackgroundEffects();
    disableCustomCursor();
    simplifyAnimations();
}

function disableHeavyAnimations() {
    const elementsToDisable = [
        'matrixRain',
        'loaderParticles',
        'particleGrid',
        'cyberRain',
        'mouseGlow'
    ];
    
    elementsToDisable.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'none';
            el.remove();
        }
    });
    
    const classesToDisable = [
        '.hero-blob',
        '.hero-blob-1',
        '.hero-blob-2',
        '.hero-blob-3',
        '.light-beam',
        '.light-beam-1',
        '.light-beam-2',
        '.particle-grid',
        '.cyber-rain',
        '.geo-decoration',
        '.texture-overlay',
        '.bg-layer-far',
        '.bg-layer-middle',
        '.bg-layer-near',
        '.hero-glow-ring'
    ];
    
    classesToDisable.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.display = 'none';
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
        });
    });
}

function disableBackgroundEffects() {
    const style = document.createElement('style');
    style.id = 'mobile-performance-optimizations';
    style.textContent = `
        .mobile-optimized .hero-blob,
        .mobile-optimized .light-beam,
        .mobile-optimized .particle-grid,
        .mobile-optimized .cyber-rain,
        .mobile-optimized .geo-decoration,
        .mobile-optimized .texture-overlay,
        .mobile-optimized .bg-layer-far,
        .mobile-optimized .bg-layer-middle,
        .mobile-optimized .bg-layer-near,
        .mobile-optimized .hero-glow-ring,
        .mobile-optimized .mouse-glow {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            animation: none !important;
        }
        
        .mobile-optimized .glitch-text::before,
        .mobile-optimized .glitch-text::after,
        .mobile-optimized .hero h1 .glitch-layer {
            display: none !important;
        }
        
        .mobile-optimized .loader-grid {
            animation: none !important;
        }
        
        .mobile-optimized .shutter-container,
        .mobile-optimized .shutter-slice {
            display: none !important;
        }
        
        .mobile-optimized .radial-wipe,
        .mobile-optimized .diagonal-sweep,
        .mobile-optimized .glitch-flash {
            display: none !important;
        }
        
        .mobile-optimized * {
            animation-duration: 0.2s !important;
            transition-duration: 0.2s !important;
        }
        
        .mobile-optimized .fade-in {
            opacity: 1 !important;
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
}

function disableCustomCursor() {
    const cursor = document.getElementById('customCursor');
    const cursorDot = document.getElementById('cursorDot');
    const mouseGlow = document.getElementById('mouseGlow');
    
    if (cursor) cursor.style.display = 'none';
    if (cursorDot) cursorDot.style.display = 'none';
    if (mouseGlow) mouseGlow.style.display = 'none';
}

function simplifyAnimations() {
    document.documentElement.style.setProperty('--transition-duration', '0.2s');
    
    const style = document.createElement('style');
    style.textContent = `
        .mobile-optimized .video-item,
        .mobile-optimized .work-card,
        .mobile-optimized .achievement-card {
            box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
        }
    `;
    document.head.appendChild(style);
}

function optimizeScrollPerformance() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    document.body.style.overscrollBehavior = 'none';
    
    document.documentElement.style.scrollBehavior = 'auto';
}

function optimizeTouchInteractions() {
    const clickTargets = document.querySelectorAll('.video-item, .work-card, .nav-link, .social-link, button, .hero-btn');
    clickTargets.forEach(el => {
        el.style.minHeight = '44px';
        el.style.minWidth = '44px';
    });
    
    document.addEventListener('touchstart', (e) => {
        const target = e.target.closest('.video-item, .work-card, button, .nav-link, .hero-btn');
        if (target) {
            target.style.transform = 'scale(0.98)';
            target.style.transition = 'transform 0.1s';
            target.style.opacity = '0.9';
        }
    }, { passive: true });
    
    document.addEventListener('touchend', (e) => {
        const target = e.target.closest('.video-item, .work-card, button, .nav-link, .hero-btn');
        if (target) {
            setTimeout(() => {
                target.style.transform = '';
                target.style.opacity = '';
            }, 100);
        }
    }, { passive: true });
    
    let lastTouchEnd = 0;
    document.addEventListener('touchend', (e) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, { passive: false });
    
    document.addEventListener('touchmove', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });
}

function initLazyImages() {
    if (!('IntersectionObserver' in window)) {
        loadAllImages();
        return;
    }
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                loadImageElement(img);
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: isMobile ? '20px 0px' : '50px 0px',
        threshold: 0.01
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

function loadImageElement(img) {
    const src = img.getAttribute('data-src');
    const category = img.getAttribute('data-category');
    const name = img.getAttribute('data-name');
    
    if (category && name && typeof loadImage === 'function') {
        loadImage(img, category, name, src);
    } else if (src) {
        img.src = src;
    }
    
    img.removeAttribute('data-src');
}

function loadAllImages() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => loadImageElement(img));
}

function initCloudImages() {
    console.log('☁️ 初始化云端图片');
    
    const equipmentImg = document.querySelector('.about-image-img');
    if (equipmentImg && typeof loadImage === 'function') {
        loadImage(equipmentImg, 'equipment', null, equipmentImg.src);
    }
    
    const categoryImages = document.querySelectorAll('.work-card-img');
    categoryImages.forEach(img => {
        const alt = img.getAttribute('alt');
        if (alt && typeof loadImage === 'function') {
            const categoryMap = {
                '说唱音乐': '说唱',
                '演员': '演员',
                '奢侈品': '奢侈品',
                '科普': '科普',
                '历史': '历史',
                '体育': '体育',
                '广告': '广告',
                '百科': '百科'
            };
            const categoryName = categoryMap[alt];
            if (categoryName) {
                loadImage(img, 'categories', categoryName, img.src);
            }
        }
    });
    
    const videoCovers = document.querySelectorAll('.video-item-cover');
    videoCovers.forEach(img => {
        const alt = img.getAttribute('alt');
        const videoItem = img.closest('.video-item');
        const videoPath = videoItem?.getAttribute('data-video');
        
        if (alt && videoPath && typeof loadImage === 'function') {
            const categoryMap = {
                '采访类': '采访类',
                '演员类': '演员类',
                '奢侈品': '奢侈品',
                '科普类': '科普类',
                '历史人物类': '历史人物类',
                '体育类': '体育类'
            };
            
            let category = null;
            for (const [key, value] of Object.entries(categoryMap)) {
                if (videoPath.includes(key)) {
                    category = value;
                    break;
                }
            }
            
            if (category) {
                loadImage(img, category, alt, img.src);
            }
        }
    });
}

window.initCloudImages = initCloudImages;
window.initMobileOptimizations = initMobileOptimizations;
window.isMobile = isMobile;
window.isLowEndDevice = isLowEndDevice;
window.skipLoader = skipLoader;
