// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
  "lovedan": {
    "api": "https://lovedan.net/api.php/provide/vod",
    "name": "TV-艾旦资源"
  },
  "bfzy": {
    "api": "https://bfzyapi.com/api.php/provide/vod",
    "name": "TV-暴风资源"
  },
  "ffzy": {
    "api": "http://ffzy5.tv/api.php/provide/vod",
    "name": "TV-非凡影视"
  },
  "maotaizy": {
    "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
    "name": "TV-茅台资源"
  },
  "jisu": {
    "api": "https://jszyapi.com/api.php/provide/vod",
    "name": "TV-极速资源"
  },
  "wolongzyw": {
    "api": "https://collect.wolongzyw.com/api.php/provide/vod",
    "name": "TV-卧龙资源"
  },
  "wujinapi_com": {
    "api": "https://api.wujinapi.com/api.php/provide/vod",
    "name": "TV-无尽资源"
  },
  "rycjapi": {
    "api": "https://cj.rycjapi.com/api.php/provide/vod",
    "name": "TV-如意资源"
  },
  "tyyszy": {
    "api": "https://tyyszy.com/api.php/provide/vod",
    "name": "TV-天涯资源"
  },
  "ikun": {
    "api": "https://ikunzyapi.com/api.php/provide/vod",
    "name": "TV-iKun资源"
  },
  "lziapi.com": {
    "api": "https://cj.lziapi.com/api.php/provide/vod",
    "name": "TV-量子资源"
  },
  "zuidazy": {
    "api": "http://zuidazy.me/api.php/provide/vod",
    "name": "TV-最大点播"
  },
  "zuidapi": {
    "api": "https://api.zuidapi.com/api.php/provide/vod",
    "name": "TV-最大资源"
  },
  "dyttzyapi": {
    "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
    "name": "TV-电影天堂资源"
  },
  "ckzy": {
    "api": "https://ckzy.me/api.php/provide/vod",
    "name": "TV-CK资源"
  },
  "ukuapi": {
    "api": "https://api.ukuapi.com/api.php/provide/vod",
    "name": "TV-U酷资源"
  },
  "sdzyapi": {
    "api": "http://sdzyapi.com/api.php/provide/vod/from/sdm3u8",
    "name": "TV-闪电资源"
  },
  "apibdzy": {
    "api": "http://api.apibdzy.com/api.php/provide/vod",
    "name": "TV-百度资源"
  },
  "taopianapi": {
    "api": "https://taopianapi.com/cjapi/mc/vod/json.html",
    "name": "TV-淘片资源网"
  },
  "maoyanapi": {
    "api": "https://api.maoyanapi.top/api.php/provide/vod",
    "name": "TV-猫眼资源"
  },
  "guangsuapi": {
    "api": "https://api.guangsuapi.com/api.php/provide/vod",
    "name": "TV-光速资源"
  },
  "xiaomaomi": {
    "api": "https://zy.xmm.hk/api.php/provide/vod",
    "name": "TV-小猫咪资源"
  },
  "xinlangapi": {
    "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
    "name": "TV-新浪点播"
  },
  "yayazy": {
    "api": "https://cj.yayazy.net/api.php/provide/vod",
    "name": "TV-丫丫点播"
  },
  "wwzy": {
    "api": "https://wwzy.tv/api.php/provide/vod",
    "name": "TV-旺旺短剧"
  },
  "yparse": {
    "api": "https://api.yparse.com/api/json",
    "name": "TV-步步高资源"
  },
  "niuniuzy": {
    "api": "https://api.niuniuzy.me/api.php/provide/vod",
    "name": "TV-牛牛点播"
  },
  "1080zyku_json": {
    "api": "https://api.1080zyku.com/inc/apijson.php/",
    "name": "TV-神马云"
  },
  "dbzy": {
    "api": "https://dbzy.tv/api.php/provide/vod",
    "name": "TV-豆瓣资源"
  },
  "jinyingzy": {
    "api": "https://jinyingzy.com/api.php/provide/vod",
    "name": "TV-金鹰点播"
  },
  "ffzyapi": {
    "api": "https://cj.ffzyapi.com/api.php/provide/vod",
    "name": "TV-非凡资源"
  },
  "hongniuzy3": {
    "api": "https://www.hongniuzy3.com/api.php/provide/vod",
    "name": "TV-红牛资源"
  },
  "suoniapi.com": {
    "api": "https://suoniapi.com/api.php/provide/vod",
    "name": "TV-索尼资源"
  },
  "apiyhzy.com": {
    "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
    "name": "TV-樱花资源"
  },
  "p2100.net": {
    "api": "https://p2100.net/api.php/provide/vod",
    "name": "TV-飘零资源"
  },
  "subocaiji.com": {
    "api": "https://subocaiji.com/api.php/provide/vod",
    "name": "TV-速播资源"
  },
  "www.hongniuzy2.com": {
    "api": "https://www.hongniuzy2.com/api.php/provide/vod",
    "name": "TV-红牛资源"
  },
  "hhzyapi.com": {
    "api": "https://hhzyapi.com/api.php/provide/vod",
    "name": "TV-火狐资源"
  },
  "www.huyaapi.com": {
    "api": "https://www.huyaapi.com/api.php/provide/vod",
    "name": "TV-虎牙资源"
  },
  "yzzy_api": {
    "api": "https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod",
    "name": "TV-优质资源库"
  },
  "mdzy": {
    "api": "https://www.mdzyapi.com/api.php/provide/vod",
    "name": "TV-魔都资源"
  },
  "mozhuazy": {
    "api": "https://mozhuazy.com/api.php/provide/vod",
    "name": "TV-魔爪资源"
  },
  "360zy": {
    "api": "https://360zy.com/api.php/seaxml/vod",
    "name": "TV-360资源"
  },
  "hsckzy888": {
    "api": "https://hsckzy888.com/api.php/provide/vod",
    "name": "AV-黄色资源啊啊"
  },
  "bwzyz": {
    "api": "https://api.bwzyz.com/api.php/provide/vod",
    "name": "AV-百万资源"
  },
  "souavzy": {
    "api": "https://api.souavzy.vip/api.php/provide/vod",
    "name": "AV-souav资源"
  },
  "aosikazy": {
    "api": "https://aosikazy.com/api.php/provide/vod",
    "name": "AV-奥斯卡资源"
  },
  "xrbsp": {
    "api": "https://www.xrbsp.com/api/json.php",
    "name": "AV-淫水机资源"
  },
  "apiyutu": {
    "api": "https://apiyutu.com/api.php/provide/vod",
    "name": "AV-玉兔资源"
  },
  "kxgav": {
    "api": "https://www.kxgav.com/api/json.php",
    "name": "AV-白嫖资源"
  },
  "msnii": {
    "api": "https://www.msnii.com/api/json.php",
    "name": "AV-美少女资源"
  },
  "apilsbzy1": {
    "api": "https://apilsbzy1.com/api.php/provide/vod",
    "name": "AV-老色逼资源"
  },
  "sexnguon": {
    "api": "https://api.sexnguon.com/api.php/provide/vod",
    "name": "AV-色嗨国"
  },
  "xiaojizy": {
    "api": "https://api.xiaojizy.live/provide/vod",
    "name": "AV-小鸡资源"
  },
  "gdlsp": {
    "api": "https://www.gdlsp.com/api/json.php",
    "name": "AV-香奶儿资源"
  },
  "shayuapi": {
    "api": "https://shayuapi.com/api.php/provide/vod",
    "name": "AV-鲨鱼资源"
  },
  "pgxdy": {
    "api": "https://www.pgxdy.com/api/json.php",
    "name": "AV-黄AV资源"
  },
  "xxibaozyw": {
    "api": "https://www.xxibaozyw.com/api.php/provide/vod",
    "name": "AV-X细胞资源"
  },
  "fqzy": {
    "api": "https://fqzy.me/api.php/provide/vod",
    "name": "AV-番茄资源"
  },
  "jkun": {
    "api": "https://jkunzyapi.com/api.php/provide/vod",
    "name": "AV-jkun资源"
  },
  "bwzy": {
    "api": "https://api.bwzym3u8.com/api.php/provide/vod",
    "name": "AV-百万资源"
  },
  "r155": {
    "api": "https://155api.com/api.php/provide/vod",
    "name": "AV-155资源"
  },
  "lsb": {
    "api": "https://apilsbzy1.com/api.php/provide/vod",
    "name": "AV-lsb资源"
  },
  "huangcang": {
    "api": "https://hsckzy.vip/api.php/provide/vod",
    "name": "AV-黄色仓库"
  },
  "yutu": {
    "api": "https://yutuzy10.com/api.php/provide/vod",
    "name": "AV-玉兔资源"
  },
  "xingba": {
    "api": "https://xingba111.com/api.php/provide/vod",
    "name": "AV-杏吧资源"
  },
  "siwazyw": {
    "api": "https://siwazyw.tv/api.php/provide/vod",
    "name": "AV-丝袜资源"
  },
  "naixxzy": {
    "api": "https://naixxzy.com/api.php/provide/vod",
    "name": "AV-奶香资源"
  },
  "apilj": {
    "api": "https://apilj.com/api.php/provide/vod",
    "name": "AV-辣椒资源"
  },
  "fhapi9": {
    "api": "http://fhapi9.com/api.php/provide/vod",
    "name": "AV-番号资源"
  },
  "lbapiby": {
    "api": "http://lbapiby.com/api.php/provide/vod",
    "name": "AV-AIvin资源"
  },
  "chujia": {
    "api": "http://chujia.cc/api.php/provide/vod",
    "name": "AV-精东资源"
  },
  "lbapi9": {
    "api": "https://lbapi9.com/api.php/provide/vod",
    "name": "AV-乐播资源"
  },
  "91md": {
    "api": "https://91md.me/api.php/provide/vod",
    "name": "AV-91麻豆"
  },
  "jingpinx": {
    "api": "https://www.jingpinx.com/api.php/provide/vod",
    "name": "AV-精品资源"
  },
  "slapibf": {
    "api": "http://slapibf.com/api.php/provide/vod",
    "name": "AV-森林资源"
  },
  "dadiapi": {
    "api": "https://dadiapi.com/api.php/provide/vod",
    "name": "AV-大地资源网络"
  },
  "ddapi": {
    "api": "https://api.ddapi.cc/api.php/provide/vod",
    "name": "AV-滴滴资源"
  },
  "vnzyz": {
    "api": "https://vnzyz.com/api.php/provide/vod",
    "name": "AV-越南资源"
  },
  "avre06": {
    "api": "https://www.avre06.com/api.php/provide/vod",
    "name": "AV-黄瓜资源"
  },
  "jkunzy": {
    "api": "https://jkunzyapi.com/api.php/provide/vod/",
    "name": "AV-鸡坤资源"
  },
  "xxavs": {
    "api": "https://xxavs.com/api.php/provide/vod/",
    "name": "AV-湿乐园资源"
  },
  "fqzy4": {
    "api": "http://fqzy4.me/api.php/provide/vod/at/xml",
    "name": "AV-番茄资源"
  },
  "bhziyuan": {
    "api": "https://bhziyuan.com/api.php/provide/vod/at/xml",
    "name": "AV-百花资源"
  }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
