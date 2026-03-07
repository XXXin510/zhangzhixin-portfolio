/**
 * 图片 URL 配置文件
 * 所有图片使用 123pan 云端直链，解决国内访问慢的问题
 * 
 * 使用方法：
 * 1. 将所有图片上传到 123pan
 * 2. 获取每张图片的直链 URL
 * 3. 替换下面的占位符 URL
 */

const IMAGE_URLS = {
    // ========== 设备图 ==========
    equipment: {
        src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/%E7%94%B5%E5%BD%B1%E7%BA%A7%E5%89%AA%E8%BE%91%E8%AE%BE%E5%A4%87%E5%B9%B3%E9%93%BA%E5%9B%BE.png',
        alt: '专业剪辑设备'
    },

    // ========== 分类图标 ==========
    categories: {
        '说唱': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E8%AF%B4%E5%94%B1.png',
            alt: '说唱音乐'
        },
        '演员': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E6%BC%94%E5%91%98.png',
            alt: '演员'
        },
        '奢侈品': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E5%A5%A2%E4%BE%88%E5%93%81.png',
            alt: '奢侈品'
        },
        '科普': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E7%A7%91%E5%AD%A6%E6%95%99%E8%82%B2.png',
            alt: '科普'
        },
        '历史': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E5%8E%86%E5%8F%B2.png',
            alt: '历史'
        },
        '体育': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E4%BD%93%E8%82%B2.png',
            alt: '体育'
        },
        '广告': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E5%B9%BF%E5%91%8A.png',
            alt: '广告'
        },
        '百科': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/assets/8%E8%B5%9B%E9%81%93/%E7%99%BE%E7%A7%91.png',
            alt: '百科'
        }
    },

    // ========== 采访类视频封面 ==========
    '采访类': {
        'GAI': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E9%87%87%E8%AE%BF%E7%B1%BB/gai.webp',
            alt: 'GAI'
        },
        'KKECHO': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E9%87%87%E8%AE%BF%E7%B1%BB/kkecho.jpg',
            alt: 'KKECHO'
        },
        'KnowKnow': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E9%87%87%E8%AE%BF%E7%B1%BB/knowknow.webp',
            alt: 'KnowKnow'
        },
        '嘿人李逵': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E9%87%87%E8%AE%BF%E7%B1%BB/%E5%98%BF%E4%BA%BA%E6%9D%8E%E9%80%B5.jpeg',
            alt: '嘿人李逵'
        },
        '杨和苏': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E9%87%87%E8%AE%BF%E7%B1%BB/%E6%9D%A8%E5%92%8C%E8%8B%8F.jpg',
            alt: '杨和苏'
        },
        '邓典果': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E9%87%87%E8%AE%BF%E7%B1%BB/%E9%82%93%E5%85%B8%E6%9E%9C.jpg',
            alt: '邓典果'
        }
    },

    // ========== 演员类视频封面 ==========
    '演员类': {
        '吴晓亮': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E6%BC%94%E5%91%98%E7%B1%BB/%E5%90%B4%E6%99%93%E4%BA%AE.jpg',
            alt: '吴晓亮'
        },
        '孙阳': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E6%BC%94%E5%91%98%E7%B1%BB/%E5%AD%99%E9%98%B3.jpg',
            alt: '孙阳'
        },
        '王千源': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E6%BC%94%E5%91%98%E7%B1%BB/%E7%8E%8B%E5%8D%83%E6%BA%90.jpeg',
            alt: '王千源'
        },
        '章宇': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E6%BC%94%E5%91%98%E7%B1%BB/%E7%AB%A0%E5%AE%87.jpg',
            alt: '章宇'
        },
        '蒋奇明': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E6%BC%94%E5%91%98%E7%B1%BB/%E8%92%8B%E5%A5%87%E6%98%8E.jpg',
            alt: '蒋奇明'
        },
        '阿如那': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E6%BC%94%E5%91%98%E7%B1%BB/%E9%98%BF%E5%A6%82%E9%82%A3.jpg',
            alt: '阿如那'
        }
    },

    // ========== 奢侈品类视频封面 ==========
    '奢侈品': {
        '古驰': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%A5%A2%E4%BE%88%E5%93%81/%E5%8F%A4%E9%A9%B0.jpg',
            alt: '古驰'
        },
        '巴黎世家': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%A5%A2%E4%BE%88%E5%93%81/%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6.jpg',
            alt: '巴黎世家'
        },
        '爱马仕': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%A5%A2%E4%BE%88%E5%93%81/%E7%88%B1%E9%A9%AC%E4%BB%95.jpg',
            alt: '爱马仕'
        },
        '百达翡丽': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%A5%A2%E4%BE%88%E5%93%81/%E7%99%BE%E8%BE%BE%E7%BF%A1%E4%B8%BD.jpg',
            alt: '百达翡丽'
        },
        '范思哲': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%A5%A2%E4%BE%88%E5%93%81/%E8%8C%83%E6%80%9D%E5%93%B2.jpg',
            alt: '范思哲'
        },
        '路易威登': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%A5%A2%E4%BE%88%E5%93%81/%E8%B7%AF%E6%98%93%E5%A8%81%E7%99%BB.webp',
            alt: '路易威登'
        }
    },

    // ========== 科普类视频封面 ==========
    '科普类': {
        '卢旺达卡加梅': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E7%A7%91%E6%99%AE%E7%B1%BB/%E5%8D%A2%E6%97%BA%E8%BE%BE%E5%8D%A1%E5%8A%A0%E6%A2%85.webp',
            alt: '卢旺达卡加梅'
        },
        '印度坑外企': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E7%A7%91%E6%99%AE%E7%B1%BB/%E5%8D%B0%E5%BA%A6%E5%9D%91%E5%A4%96%E4%BC%81.jpeg',
            alt: '印度坑外企'
        },
        '新加坡': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E7%A7%91%E6%99%AE%E7%B1%BB/%E6%96%B0%E5%8A%A0%E5%9D%A1.jpg',
            alt: '新加坡'
        },
        '日本是一个怎样的国家': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E7%A7%91%E6%99%AE%E7%B1%BB/%E6%97%A5%E6%9C%AC%E6%98%AF%E4%B8%80%E4%B8%AA%E6%80%8E%E6%A0%B7%E7%9A%84%E5%9B%BD%E5%AE%B6.webp',
            alt: '日本是一个怎样的国家'
        },
        '津巴布韦': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E7%A7%91%E6%99%AE%E7%B1%BB/%E6%B4%A5%E5%B7%B4%E5%B8%83%E9%9F%A6.jpg',
            alt: '津巴布韦'
        },
        '海地': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E7%A7%91%E6%99%AE%E7%B1%BB/%E6%B5%B7%E5%9C%B0.jpg',
            alt: '海地'
        }
    },

    // ========== 历史人物类视频封面 ==========
    '历史人物类': {
        '冯氏': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%8E%86%E5%8F%B2%E4%BA%BA%E7%89%A9%E7%B1%BB/%E5%86%AF%E6%B0%8F%E5%B0%81%E9%9D%A22.png',
            alt: '冯氏'
        },
        '慎夫人': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%8E%86%E5%8F%B2%E4%BA%BA%E7%89%A9%E7%B1%BB/%E6%85%8E%E5%A4%AB%E4%BA%BA%E7%AB%96%E7%89%88%E5%B0%81%E9%9D%A2.png',
            alt: '慎夫人'
        },
        '窦太后': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%8E%86%E5%8F%B2%E4%BA%BA%E7%89%A9%E7%B1%BB/%E7%AA%A6%E5%A4%AA%E5%90%8E%E7%AB%96%E6%9D%BF%E5%B0%81%E9%9D%A2.png',
            alt: '窦太后'
        },
        '薄姬': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E5%8E%86%E5%8F%B2%E4%BA%BA%E7%89%A9%E7%B1%BB/%E8%96%84%E5%A7%AC%E7%AB%96%E7%89%88%E5%B0%81%E9%9D%A2.png',
            alt: '薄姬'
        }
    },

    // ========== 体育类视频封面 ==========
    '体育类': {
        '伊尔卡伊·京多安': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E4%BD%93%E8%82%B2%E7%B1%BB/%E4%BC%8A%E5%B0%94%E5%8D%A1%E4%BC%8A%C2%B7%E4%BA%AC%E5%A4%9A%E5%AE%89%20%E5%B0%81%E9%9D%A2.png',
            alt: '伊尔卡伊·京多安'
        },
        '王子露': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E4%BD%93%E8%82%B2%E7%B1%BB/%E7%8E%8B%E5%AD%90%E9%9C%B2%20%E5%B0%81%E9%9D%A2.png',
            alt: '王子露'
        },
        '罗杰·费德勒': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E4%BD%93%E8%82%B2%E7%B1%BB/%E7%BD%97%E6%9D%B0%C2%B7%E8%B4%B9%E5%BE%B7%E5%8B%92%20%E5%B0%81%E9%9D%A2.png',
            alt: '罗杰·费德勒'
        },
        '谢思埸': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E4%BD%93%E8%82%B2%E7%B1%BB/%E8%B0%A2%E6%80%9D%E5%9F%B8%20%E5%B0%81%E9%9D%A2.png',
            alt: '谢思埸'
        },
        '马克-安德烈·特尔施特根': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E4%BD%93%E8%82%B2%E7%B1%BB/%E9%A9%AC%E5%85%8B-%E5%AE%89%E5%BE%B7%E7%83%88%C2%B7%E7%89%B9%E5%B0%94%E6%96%BD%E7%89%B9%E6%A0%B9%20%E5%B0%81%E9%9D%A2.png',
            alt: '马克-安德烈·特尔施特根'
        },
        '马尔科·阿瑙托维奇': {
            src: 'https://1815610515.v.123pan.cn/1815610515/%E4%BD%9C%E5%93%81%E9%9B%86%E7%AE%80%E5%8E%86/%E4%BD%9C%E5%93%81/%E4%BD%93%E8%82%B2%E7%B1%BB/%E9%A9%AC%E5%B0%94%E7%A7%91%C2%B7%E9%98%BF%E7%91%99%E6%89%98%E7%BB%B4%E5%A5%87%20%E5%B0%81%E9%9D%A2.png',
            alt: '马尔科·阿瑙托维奇'
        }
    }
};

/**
 * 获取图片 URL
 * @param {string} category - 分类名称
 * @param {string} name - 图片名称
 * @returns {string|null} 图片 URL
 */
function getImageUrl(category, name) {
    if (!category || !name) return null;
    
    // 特殊处理设备图
    if (category === 'equipment') {
        return IMAGE_URLS.equipment?.src || null;
    }
    
    // 分类图标
    if (category === 'categories') {
        return IMAGE_URLS.categories?.[name]?.src || null;
    }
    
    // 视频封面
    return IMAGE_URLS[category]?.[name]?.src || null;
}

/**
 * 获取图片完整信息
 * @param {string} category - 分类名称
 * @param {string} name - 图片名称
 * @returns {object|null} 图片信息对象
 */
function getImageInfo(category, name) {
    if (!category || !name) return null;
    
    if (category === 'equipment') {
        return IMAGE_URLS.equipment;
    }
    
    if (category === 'categories') {
        return IMAGE_URLS.categories?.[name];
    }
    
    return IMAGE_URLS[category]?.[name] || null;
}

/**
 * 动态加载图片
 * @param {HTMLImageElement} imgElement - 图片元素
 * @param {string} category - 分类
 * @param {string} name - 名称
 * @param {string} fallbackSrc - 备用本地路径
 */
function loadImage(imgElement, category, name, fallbackSrc) {
    const url = getImageUrl(category, name);
    const info = getImageInfo(category, name);
    
    if (url) {
        const tempImg = new Image();
        tempImg.onload = function() {
            imgElement.src = url;
            if (info?.alt) {
                imgElement.alt = info.alt;
            }
        };
        tempImg.onerror = function() {
            console.warn('云端图片加载失败，使用本地:', name, fallbackSrc);
            if (fallbackSrc) {
                imgElement.src = fallbackSrc;
            }
            showImagePlaceholder(imgElement);
        };
        tempImg.src = url;
    } else if (fallbackSrc) {
        imgElement.src = fallbackSrc;
        imgElement.onerror = function() {
            showImagePlaceholder(this);
        };
    }
}

/**
 * 显示图片占位符
 */
function showImagePlaceholder(imgElement) {
    const placeholder = document.createElement('div');
    placeholder.className = 'img-placeholder';
    placeholder.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>图片加载失败</span>
    `;
    placeholder.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        height: 100%;
        min-height: 150px;
        background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
        color: #666;
        font-size: 12px;
    `;
    imgElement.style.display = 'none';
    imgElement.parentNode.insertBefore(placeholder, imgElement);
}

// 导出到全局
window.IMAGE_URLS = IMAGE_URLS;
window.getImageUrl = getImageUrl;
window.getImageInfo = getImageInfo;
window.loadImage = loadImage;

console.log('✅ 图片配置加载完成');
