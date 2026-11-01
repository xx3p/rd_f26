// ===== script.js の新しい全内容 =====

// --- 楽曲データベース ---
// Category = A は、学祭のテーマに沿った楽曲。
// Category = B は、自由曲。
const allMusicData = [
    // しゅうへい
    { title: 'おもいでフィルム', file: 'src/audio/2026/おもいでフィルム.mp3', artist: 'しゅうへい', category: 'A', volume: 1.0, jacket: 'src/images/jacket2026/しゅうへい_おもいでフィルム.PNG', lyricsFile: 'src/lyrics/おもいでフィルム.txt' },
    { title: '爆食', file: 'src/audio/2026/爆食.mp3', artist: 'しゅうへい', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/しゅうへい_爆食.PNG', lyricsFile: 'src/lyrics/爆食.txt' }, 

    // ねむ
    { title: '逆桜', file: 'src/audio/2026/ユメミシロ_sakasakura.wav', artist: 'ユメミシロ', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/ユメミシロ_sakasakura.png' },

    // 439K
    { title: '439K Trinitas', file: 'src/audio/2026/439K_Trinitas.mp3', artist: '439K', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/439K_Trinitas.png' },

    // あっしー
    { title: 'リミナル feat.音街ウナ', file: 'src/audio/2026/リミナル feat.音街ウナ.mp3', artist: 'midoro', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/あっしー_リミナル.png', lyricsFile: 'src/lyrics/リミナル.txt' },

    // 西谷
    { title: '暮れなずめ黄昏', file: 'src/audio/2026/GLOSSUM.mp3', artist: 'たにし', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/GLOSSUM.jpeg' },

    // まにょん
    { title: 'スターライトエモーション', file: 'src/audio/2026/ユメミシロ & まにょん - スターライトエモーション.wav', artist: 'ユメミシロ & まにょん', category: 'A', volume: 1.0, jacket: 'src/images/jacket2026/ユメミシロ & まにょん - スターライトエモーション.png' },

    // IGC2のしゅうへい
    { title: 'JumpHero', file: 'src/audio/2026/JumpHero.mp3', artist: 'LegendaryGuitarHero', category: 'A', volume: 1.0, jacket: 'src/images/jacket2026/LegendaryGuitarHero_JumpHero.PNG' }, 
    { title: 'SeasideJourney', file: 'src/audio/2026/SeasideJourney.mp3', artist: 'LegendaryGuitarHero', category: 'A', volume: 1.0, jacket: 'src/images/jacket2026/LegendaryGuitarHero_SeasideJourney.PNG' }, 

    { title: "Demon's HeartBeat", file: "src/audio/2026/Demon's HeartBeat.mp3", artist: 'DIE-MAOU', category: 'B', volume: 1.0, jacket: "src/images/jacket2026/DIE-MAOU_Demon's HeartBeat.PNG" }, 
    { title: "I'm On 1 HP", file: "src/audio/2026/I'm On 1 HP.mp3", artist: 'DIE-MAOU', category: 'B', volume: 1.0, jacket: "src/images/jacket2026/DIE-MAOU_I'm On 1 HP.PNG" }, 

    { title: 'Inflict Infinity Damage!!!', file: 'src/audio/2026/Inflict Infinity Damage!!!.mp3', artist: '8×million bit', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/8×million bit_Inflict Infinity Damage!!!.PNG' }, 
    { title: 'Lovely Invader<3', file: 'src/audio/2026/Lovely Invader.mp3', artist: '8×million bit', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/8×million bit_Lovely Invader_3.PNG' }, 

    { title: 'Set My Sites on YOU', file: 'src/audio/2026/Set My Sites on YOU.mp3', artist: 'ACID Love', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/ACID Love_Set My Sites On YOU.PNG' }, 
    { title: 'Addicted To Your Poison', file: 'src/audio/2026/Addicted To Your Poison.mp3', artist: 'ACID Love', category: 'B', volume: 1.0, jacket: 'src/images/jacket2026/ACID Love_Addicted To Your Poison.PNG' },
    // 歌詞を表示したい曲は、次のように追加してください
    // { title: '曲名', file: 'src/audio/曲.mp3', artist: 'アーティスト', category: 'B', volume: 1.0, jacket: 'src/images/...png', lyricsFile: 'src/lyrics/～.txt' },
];

// --- ★★★ 新規追加：プロフィールデータベース ★★★ ---
const allProfileData = [
    {
        name: '439K',
        img: 'src/images/439K.jpg',
        desc: 'オーケストラやサウンドトラックが好きです',
        sns: [
            { type: 'youtube', url: 'https://www.youtube.com/@439K_DTM', width: 60 },
            { type: 'soundcloud', url: 'https://soundcloud.com/439k', width: 55 }
        ]
    },
    {
        name: '昊',
        img: 'src/images/昊.png',
        desc: 'ゲーム制作のためにいろいろものを作っています<br>IGC²でゲームの展示、INIAD Artworksで絵の展示をしています<br>学部2年',
        sns: [
            { type: 'youtube', url: 'https://www.youtube.com/@miz_oasis', width: 60 },
            { type: 'x', url: 'https://x.com/miz_oasis', width: 35 }
        ]
    },
    {
        name: 'あっしー',
        img: 'src/images/あっしー.png',
        desc: 'midoroって名前で曲を投稿しています',
        sns: [
            { type: 'niconico', url: 'https://www.nicovideo.jp/user/83059937/video?redirected=1', width: 75 }
        ]
    },
    {
        name: 'しゅうへい',
        img: 'src/images/しゅうへい.jpeg',
        desc: 'INIAD9期生(1年生)<br>ボカロだけでなくインスト曲もよく作ります！',
        sns: []
    },
    {
        name: '灘',
        img: 'src/images/Raison_icon.png',
        desc: '',
        sns: []
    },
    {
        name: 'よつや',
        img: 'src/images/Raison_icon.png', // デフォルトアイコン
        desc: 'INIAD4年生。<br>今年が最後の赤羽台祭です。',
        sns: []
    },
    {
        name: 'SynaPse',
        img: 'src/images/Raison_icon.png',
        desc: '',
        sns: []
    },
    {
        name: '界潜',
        img: 'src/images/界潜.png',
        desc: '曲を作っています。',
        sns: []
    },
    {
        name: 'セキセイ',
        img: 'src/images/セキセイ.png',
        desc: '曲や動画を作ったり歌ったりデザインを作ったりしてます',
        sns: [
            { type: 'youtube', url: 'https://www.youtube.com/@sekisei2424', width: 60 },
            { type: 'x', url: 'https://x.com/sekisei2424', width: 35 }
        ]
    }
];
// SNSアイコンのパス定義
const snsIconPaths = {
    youtube: 'src/logo/youtube.png',
    soundcloud: 'src/logo/soundcloud.png',
    instagram: 'src/logo/instagram.png',
    web: 'src/logo/web.png',
    x: 'src/logo/x.png',
    niconico: 'src/logo/niconico.png'
};

// --- 初期設定 (変更) ---
let audio = new Audio();
let isRepeating = false;
let currentPlaylist = []; // ★ ランダム再生用のプレイリスト
let currentTrackIndex = 0;
let isThemeShufflePlaying = false; // ★ ランダム再生中フラグ

const playButton = document.getElementById('play-button');
const repeatButton = document.getElementById('repeat-button');
const seekBar = document.getElementById('seek-bar');
const currentTimeElement = document.querySelector('.current-time');
const totalTimeElement = document.querySelector('.total-time');
const footerSongTitleElement = document.querySelector('.footer-song-title');
const songArtistElement = document.querySelector('.song-artist');

// 初期状態のフッター
footerSongTitleElement.textContent = '未選択';
songArtistElement.textContent = '楽曲を選択してください';

// --- シャッフル関数 (Fisher-Yates) ---
function shuffleArray(array) {
    let newArray = [...array]; // 元の配列をコピー
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function isMobilePlaybackRestricted() {
    return window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
}

async function safePlayAudio() {
    try {
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.then === 'function') {
            await playPromise;
        }
        playButton.querySelector('img').src = 'src/bar/pause.png';
        return true;
    } catch (error) {
        console.warn('Audio playback was blocked by the browser:', error);
        playButton.querySelector('img').src = 'src/bar/play.png';
        return false;
    }
}

function prepareSongPlayback(songData, isRandom = false, autoPlay = true) {
    activateSong(songData, isRandom);

    if (autoPlay && !isMobilePlaybackRestricted()) {
        safePlayAudio();
    }
}

function formatLyrics(lyrics) {
    if (!lyrics) return '';

    const lyricLines = Array.isArray(lyrics) ? lyrics : [lyrics];
    return lyricLines
        .map((line) => `<p>${escapeHtml(line).replace(/\n/g, '<br>')}</p>`)
        .join('');
}

function attachLyricsToggle(itemElement, music) {
    const lyricsToggle = itemElement.querySelector('.lyrics-toggle');
    const lyricsPanel = itemElement.querySelector('.lyrics-panel');

    if (!lyricsToggle || !lyricsPanel) return;

    if (lyricsToggle.dataset.bound === 'true') {
        return;
    }

    lyricsToggle.onclick = null;
    lyricsToggle.onpointerdown = null;
    lyricsToggle.onmouseup = null;
    lyricsToggle.dataset.bound = 'true';
    lyricsToggle.dataset.open = 'false';
    lyricsToggle.dataset.loading = 'false';
    lyricsPanel.dataset.open = 'false';
    lyricsPanel.hidden = true;

    const renderLyrics = (text) => {
        const lines = (text || '').split(/\r?\n/).filter(line => line.trim() !== '');
        lyricsPanel.innerHTML = lines.length > 0
            ? lines.map(line => `<p>${escapeHtml(line)}</p>`).join('')
            : '<p>歌詞を読み込めませんでした。</p>';
    };

    const setLyricsState = (open) => {
        lyricsPanel.hidden = !open;
        lyricsPanel.dataset.open = String(open);
        lyricsToggle.dataset.open = String(open);
        lyricsToggle.setAttribute('aria-expanded', String(open));
        lyricsToggle.textContent = open ? '歌詞を閉じる' : 'この曲の歌詞';
    };

    const loadLyrics = async () => {
        if (!music.lyricsFile || lyricsPanel.dataset.loaded === 'true') {
            return;
        }

        const url = new URL(music.lyricsFile, window.location.href).toString();
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) {
            throw new Error(`lyrics file not found: ${url}`);
        }

        const text = await response.text();
        renderLyrics(text);
        lyricsPanel.dataset.loaded = 'true';
    };

    lyricsToggle.addEventListener('click', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (lyricsToggle.dataset.loading === 'true') {
            return;
        }

        const nextOpenState = lyricsToggle.dataset.open !== 'true';
        lyricsToggle.dataset.loading = 'true';

        try {
            if (music.lyricsFile) {
                await loadLyrics();
            }
        } catch (error) {
            console.error('[lyrics error]', music.title, error);
            lyricsPanel.innerHTML = '<p>歌詞を読み込めませんでした。</p>';
        } finally {
            setLyricsState(nextOpenState);
            lyricsToggle.dataset.loading = 'false';
        }
    });
}

// --- ★ 楽曲アイテムのHTML(DOM)を生成する関数 (変更) ---
function createMusicItem(music) {
    const jacketStyle = music.jacket
        ? `style="background-image: url('${music.jacket.replace(/'/g, "\\'")
        .replace(/"/g, '\\"')}');"`
        : ''; 

    const placeholderHTML = !music.jacket
        ? '<span class="jacket-placeholder"></span>'
        : '';

    const lyricLines = Array.isArray(music.lyrics) ? music.lyrics : (typeof music.lyrics === 'string' ? [music.lyrics] : []);
    const hasLyrics = Boolean(music.lyricsFile || lyricLines.length > 0);
    const lyricContent = hasLyrics ? `
        <button class="lyrics-toggle" type="button" aria-expanded="false">この曲の歌詞</button>
        <div class="lyrics-panel" hidden>
            ${music.lyricsFile ? '' : formatLyrics(lyricLines)}
        </div>
    ` : '';

    const itemHTML = `
        <div class="music-item" data-artist="${escapeHtml(music.artist)}" data-category="${escapeHtml(music.category)}">
            <div class="jacket-container" ${jacketStyle}>
                ${placeholderHTML}
            </div>
            <p class="song-title">${escapeHtml(music.title)}</p>
            <p class="song-artist-credit">by ${escapeHtml(music.artist)}</p>
            <button class="music-button">再生</button>
            ${lyricContent}
            <audio controls hidden="true" data-volume="${music.volume || 1.0}">
                <source src="${escapeHtml(music.file)}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = itemHTML.trim();
    const item = template.content.firstChild;

    if (hasLyrics) {
        attachLyricsToggle(item, music);
    }

    return item;
}

// --- ★★★ 新規追加：プロフィールアイテムのHTML(DOM)を生成する関数 ★★★ ---
function createProfileItem(profile) {
    const snsLinks = profile.sns.map(link => `
        <a href="${link.url}" target="_new" rel="noopener noreferrer">
            <img src="${snsIconPaths[link.type]}" alt="${link.type}" width="${link.width}">
        </a>
    `).join('');

    const itemHTML = `
        <div class="profile-item-new">
            <div class="profile-new">
                <img src="${profile.img}" alt="${profile.name} Profile Image">
                <div class="profile-details-new">
                    <h1>${profile.name}</h1>
                    <p>${profile.desc}</p>
                </div>
            </div>
            <div class="sns-new">
                ${snsLinks}
            </div>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = itemHTML.trim();
    return template.content.firstChild;
}


// --- ページ読み込み時の処理 (変更) ---
document.addEventListener('DOMContentLoaded', () => {
    // === 1. 楽曲リストの生成 ===
    const musicContainer = document.querySelector('#music-segment .music-list-theme');
    // 楽曲リストはシャッフルして表示
    const shuffledMusic = shuffleArray(allMusicData);
    shuffledMusic.forEach(music => {
        musicContainer.appendChild(createMusicItem(music));
    });

    // === 2. プロフィールリストの生成 ===
    const profileContainer = document.querySelector('#profile-segment .profile-list-new');
    // プロフィールリストもシャッフルして表示
    if (profileContainer) {
        const shuffledProfiles = shuffleArray(allProfileData);
        shuffledProfiles.forEach(profile => {
            profileContainer.appendChild(createProfileItem(profile));
        });
    }

    // === 3. イベントリスナーの設定 ===
    initializeMusicButtons(); // 個別再生ボタン
    initializeRandomPlayButtons(); // ★ ランダム再生ボタン
    initializeHeaders(); // ★ 開閉ヘッダー

});

// --- ★ 再生ロジックを共通関数化 (修正) ---
function activateSong(songData, isRandom = false) {
    // 他のボタンの状態をリセット
    document.querySelectorAll('.music-button').forEach(btn => {
        btn.textContent = btn.classList.contains('random-play-button') ? 'ランダム再生' : '再生';
        btn.classList.remove('playing');
        btn.style.background = ''; // CSSのスタイルに戻す
    });

    let targetItemButton = null; // ★ プログレスバーを表示する対象のボタン

    // 1. 実際に再生する曲のボタンを探す
    document.querySelectorAll('#music-segment .music-item').forEach(item => {
        const title = item.querySelector('.song-title').textContent;
        const artist = item.dataset.artist;
        if (title === songData.title && artist === songData.artist) {
            targetItemButton = item.querySelector('.music-button');
        }
    });

    if (isRandom) {
        // ★ ランダム再生の場合
        // 1. ランダム再生ボタンの見た目を「再生中」にする
        const randomPlayButton = document.getElementById('main-random-play');
        if (randomPlayButton) {
            randomPlayButton.textContent = '再生中（他の楽曲を再生）';
            randomPlayButton.classList.add('playing'); 
        }
    }

    if (targetItemButton) {
        // ★ 対象の曲のボタン（個別ボタン）の見た目を更新
        targetItemButton.textContent = '再生中';
        targetItemButton.classList.add('playing'); 
        targetItemButton.style.background = '#4a69bd';
    }
    
    // オーディオファイルを新しいものに変更
    audio.src = songData.file;
    audio.load();

    // フッターの曲タイトルとアーティストを更新
    footerSongTitleElement.textContent = songData.title;
    songArtistElement.textContent = songData.artist;

    // 曲の音量を設定
    audio.addEventListener('loadeddata', () => {
        const songVolume = parseFloat(songData.volume) || 1.0;
        audio.volume = songVolume;
    }, { once: true });

    // 再生時間やシークバーの初期化
    audio.addEventListener('loadedmetadata', () => {
        totalTimeElement.textContent = formatTime(audio.duration);
        seekBar.max = Math.floor(audio.duration);
    }, { once: true });

    playButton.querySelector('img').src = 'src/bar/pause.png';
}


// --- 再生ボタンのイベントリスナーを設定する関数 (修正) ---
function initializeMusicButtons() {
    document.querySelectorAll('#music-segment .music-item').forEach(item => {
        const lyricsToggle = item.querySelector('.lyrics-toggle');
        const lyricsPanel = item.querySelector('.lyrics-panel');

        if (lyricsToggle && lyricsPanel) {
            lyricsToggle.addEventListener('click', () => {
                const isHidden = lyricsPanel.hasAttribute('hidden');
                lyricsPanel.hidden = !isHidden;
                lyricsToggle.setAttribute('aria-expanded', String(isHidden));
                lyricsToggle.textContent = isHidden ? '歌詞を閉じる' : 'この曲の歌詞';
            });
        }

        const button = item.querySelector('.music-button');
        
        button.addEventListener('click', function () {
            // 再生中の曲を押した場合の処理
            if (button.classList.contains('playing')) {
                if (!audio.paused) {
                    audio.pause();
                    button.textContent = '一時停止中';
                    playButton.querySelector('img').src = 'src/bar/play.png';
                    
                    // ★ ランダム再生ボタンが再生中だった場合、それも連動
                    const randomPlayButton = document.getElementById('main-random-play');
                    if (randomPlayButton && randomPlayButton.classList.contains('playing')) {
                        randomPlayButton.textContent = '一時停止中（他の楽曲を再生）';
                    }
                } else {
                    safePlayAudio();
                    button.textContent = '再生中';
                    playButton.querySelector('img').src = 'src/bar/pause.png';
                    
                    // ★ ランダム再生ボタンが再生中だった場合、それも連動
                    const randomPlayButton = document.getElementById('main-random-play');
                    if (randomPlayButton && randomPlayButton.classList.contains('playing')) {
                        randomPlayButton.textContent = '再生中';
                    }
                }
                return;
            }

            // ★ ランダム再生中だった場合は解除
            isThemeShufflePlaying = false;
            currentPlaylist = [];
            // ★ ランダム再生ボタンの .playing も解除
            const randomPlayButton = document.getElementById('main-random-play');
            if (randomPlayButton) {
                randomPlayButton.classList.remove('playing');
                randomPlayButton.textContent = 'ランダム再生';
            }

            // 曲データを取得して再生
            const songTitle = item.querySelector('.song-title').textContent;
            const songData = allMusicData.find(m => 
                m.title === songTitle && 
                m.artist === item.dataset.artist
            );
            
            if (songData) {
                prepareSongPlayback(songData, false, true);
            }
        });
    });
}

// --- ★ ランダム再生ボタンのロジック (修正) ---
function initializeRandomPlayButtons() {
    const randomPlayButton = document.getElementById('main-random-play');
    if (!randomPlayButton) return;

    randomPlayButton.addEventListener('click', function() {
        startThemePlay(allMusicData, this);
    });
}

// ★ ランダム再生の開始・制御 (修正)
// ★★★ 修正点 ★★★
// ボタンを押すたびに曲が切り替わる（スキップする）ように変更
function startThemePlay(musicList, buttonElement) {
    
    if (isThemeShufflePlaying) {
        // ★ 既にランダム再生モードの場合 (再生中/一時停止中問わず)
        // ★ ボタンを押すたびに次の曲へ (スキップ機能)
        currentTrackIndex++;
        if (currentTrackIndex >= currentPlaylist.length) {
            currentTrackIndex = 0; // リストの最後に達したら最初に戻る
        }
    } else {
        // ★ 新規のランダム再生
        isThemeShufflePlaying = true;
        currentPlaylist = shuffleArray(musicList); // リストをシャッフル
        currentTrackIndex = 0;
    }
    
    // ★ 選択された曲を再生
    const songData = currentPlaylist[currentTrackIndex];
    prepareSongPlayback(songData, true, true);
}

// --- ★ 開閉ヘッダーのロジック (変更) ---
function initializeHeaders() {
    document.querySelectorAll('.theme-header').forEach(header => {
        header.addEventListener('click', () => {
            // 900px未満（モバイル）の時のみ動作
            if (window.innerWidth < 900) {
                header.closest('.theme-segment').classList.toggle('minimized');
            }
        });
    });

    // リサイズ時にPC表示になったら強制的に開く
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 900) {
            document.querySelectorAll('.theme-segment.minimized').forEach(segment => {
                segment.classList.remove('minimized');
            });
        }
    });
}


// --- プレーヤーの制御 (変更) ---

// 再生バーの時間更新処理 (修正)
audio.addEventListener('timeupdate', () => {
    seekBar.value = Math.floor(audio.currentTime);
    currentTimeElement.textContent = formatTime(audio.currentTime);

    // ★★★ 修正点 ★★★
    // .playing クラスを持つボタンのうち、個別アイテムのボタン（＝プログレスバー対象）を探す
    const playingItemButton = document.querySelector('.music-item .music-button.playing');

    if (playingItemButton) {
        // ★ 個別再生ボタン（ランダム再生で再生中の曲も含む）の時だけプログレスバーを表示
        const progress = (audio.currentTime / audio.duration) * 100;
        playingItemButton.style.background = `linear-gradient(to right, #4a69bd ${progress}%, #cccccc ${progress}%)`;
    }
});

// 曲が終了したときの処理 (修正)
audio.addEventListener('ended', () => {
    if (isRepeating) {
        // 1. リピートモード
        audio.currentTime = 0;
        if (!isMobilePlaybackRestricted()) {
            safePlayAudio();
        }
    } else if (isThemeShufflePlaying) {
        // 2. ランダム再生中
        currentTrackIndex++;
        if (currentTrackIndex >= currentPlaylist.length) {
            currentTrackIndex = 0; // リストの最後に達したら最初に戻る
        }
        const nextSongData = currentPlaylist[currentTrackIndex];
        activateSong(nextSongData, true); // isRandom = true

        // モバイルでは、ユーザー操作外の自動再生はブロックされやすいため次曲の再生を待機する
        if (!isMobilePlaybackRestricted()) {
            safePlayAudio();
        } else {
            audio.pause();
            playButton.querySelector('img').src = 'src/bar/play.png';
        }

    } else {
        // 3. 通常再生終了
        playButton.querySelector('img').src = 'src/bar/play.png';
        // ★ リセット対象を .playing クラスを持つ全てのボタンに変更
        document.querySelectorAll('.music-button.playing').forEach(playingButton => {
            if (playingButton) {
                playingButton.textContent = playingButton.classList.contains('random-play-button') ? 'ランダム再生' : '再生';
                playingButton.style.background = ''; // CSSのスタイルに戻す
                playingButton.classList.remove('playing');
            }
        });
    }
});

// シークバーを操作したときの処理
seekBar.addEventListener('input', () => {
    audio.currentTime = seekBar.value;
});

// 再生ボタンの制御 (修正)
playButton.addEventListener('click', async () => {
    if (audio.src === "") return; // まだ曲が選択されていない場合は何もしない

    if (audio.paused) {
        const resumed = await safePlayAudio();
        if (!resumed) {
            return;
        }
    } else {
        audio.pause();
        playButton.querySelector('img').src = 'src/bar/play.png';
    }

    // ★ 再生/一時停止に応じてボタンのテキストも変更 (両方のボタンを更新)
    const playingButtons = document.querySelectorAll('.music-button.playing'); // .playing を持つボタン全て
    playingButtons.forEach(playingButton => {
        if (playingButton) {
            if (playingButton.classList.contains('random-play-button')) {
                playingButton.textContent = audio.paused ? '一時停止中' : '再生中';
            } else {
                playingButton.textContent = audio.paused ? '一時停止中' : '再生中';
            }
        }
    });
});

// リピートボタンの制御
repeatButton.addEventListener('click', () => {
    isRepeating = !isRepeating;
    repeatButton.querySelector('img').src = isRepeating ? 'src/bar/1repeat-on.png' : 'src/bar/1repeat.png';
});

// キーボードショートカット
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault(); 
        playButton.click(); 
    }
    if (event.code === 'KeyR') {
        repeatButton.click();
    }
});

// 時間フォーマット関数
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
