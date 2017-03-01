var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
     { title: 'Blue', duration: '4:26' },
     { title: 'Green', duration: '3:14' },
     { title: 'Red', duration: '5:01' },
     { title: 'Pink', duration: '3:21'},
     { title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
     { title: 'Hello, Operator?', duration: '1:01' },
     { title: 'Ring, ring, ring', duration: '5:01' },
     { title: 'Fits in your pocket', duration: '3:21'},
     { title: 'Can you hear me now?', duration: '3:14' },
     { title: 'Wrong phone number', duration: '2:15'}
    ]
};

var albumAndre = {
    title: 'Learn to Code',
    artist: 'Andre',
    label: 'BLOC',
    year: '2017',
    albumArtUrl: 'https://avatars0.githubusercontent.com/u/23385321?v=3&s=460',
    songs: [
     { title: 'I know this - This is easy', duration: '5:00' },
     { title: 'Hm, I am stuck!', duration: '58:12' },
     { title: 'I think I got it', duration: '0:15'},
     { title: 'Well, this is even more confusing', duration: '30:55' },
     { title: 'Checkpoint complete :)', duration: '12:15'}
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
    + '  <td class="song-item-number">' + songNumber + '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>';
    return template;
};

var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    albumSongList.innerHTML = '';
    for (var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

window.onload = function() {
    setCurrentAlbum(albumPicasso);
    var cover = document.getElementsByClassName('album-cover-art')[0];
    var albumList = [albumPicasso, albumMarconi, albumAndre];
    var index = 1;
    cover.addEventListener("click", function() {
        setCurrentAlbum(albumList[index]);
        index++;
        if (index === albumList.length) {
            index = 0;
        }
    });
};
