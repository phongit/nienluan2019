var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var btnCall = document.getElementById("btnCall");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};
btn.onclick = function () {
    modal.style.display = "block";
    var x = window.outerWidth;
    if (x > 780) {
        document.getElementById("LocalVideo").style.right = ((x - 780) / 2) + "px"
    }
}

var openStream = require('./openStream');
const playVideo = require('./playVideo');
// var Peer = require('peerjs');
const uid = require('uid');
const $ = require('jquery');

const config = { host: 'stream21011002.herokuapp.com', port: 443, secure:true, key: 'peerjs'};

function getPeer(){
    const id = uid(10);
    $('#txtMySignal').val(id)
    return id;
}

const peer = new Peer(getPeer(), config);

btnCall.onclick = function () {
    const friendID = $('#txtFriendID').val();
    openStream(stream => {
        playVideo(stream, 'LocalStream');
        const call = peer.call(friendID, stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'FriendStream'));
    });
}
peer.on('call', (call)=>{
    openStream(stream => {
        playVideo(stream, 'LocalStream');
        call.answer(stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'FriendStream'));
    }); 
});