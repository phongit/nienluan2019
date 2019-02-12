


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnCall = document.getElementById("btnCall");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}
btnCall.onclick = function () {
    const friendID = $('#txtFriendID').val();
    openStream(stream => {
        playVideo(stream, 'LocalStream');
        const call = peer.call(friendID, stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'FriendStream'));
    });
    // openStream(function (stream) {
    //     playVideo(stream, 'LocalStream')
    //     const p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });

    //     p.on('signal', token => {
    //         $('#txtMySignal').val(JSON.stringify(token));
    //         console.log(JSON.stringify(token));
    //     });

    //     $('#btnConnect').click(() => {
    //         const friendSignal = JSON.parse($('#txtFriendSignal').val());
    //         p.signal(friendSignal);
    //     });

    //     p.on('stream', stream => playVideo(stream, 'FriendStream'));
    // });
}
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    var x = window.outerWidth;
    if (x > 780) {
        document.getElementById("LocalVideo").style.right = ((x - 780) / 2) + "px";
    }
}
const openStream = require('./openStream');
const playVideo = require('./playVideo');
// const Peer = require('simple-peer');
const Peer = require('peerjs');
const uid = require('uid');
const $ = require('jquery');

const config = {host: 'nienluan2019.herokuapp.com', port: 443, secure:true, key: 'peerjs'}
function getPeer(){
    const id = uid(10);
    $('#peer-id').append(id);
    return id;
}
const peer = new Peer(getPeer(), config);

// When the user clicks on <span> (x), close the modal

peer.on('call', (call)=>{
    openStream(stream => {
        playVideo(stream, 'LocalStream');
        call.answer(stream);
        call.on('stream', remoteStream => playVideo(remoteStream, 'FriendStream'));
    }); 
});
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// $('#btnCall').click(()=>{
//     console.log("aaaaaaaaaaaaaaaa");
//     const friendID  = $('#txtFriendID').val();
//     openStream(stream => {
//         playVideo(stream, 'LocalStream');
//         const call = peer.call(friendID, stream);
//         call.on('stream', remoteStream => playVideo(remoteStream, 'FriendStream'));
//     });
// });
