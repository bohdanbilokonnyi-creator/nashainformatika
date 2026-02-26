document.addEventListener("DOMContentLoaded", () => {

let hoverSound = new Audio("assets/sounds/hover.mp3");
hoverSound.volume = 0.3;

document.querySelectorAll(".tile-pro").forEach(tile=>{
  tile.addEventListener("click",e=>{
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    circle.style.left = e.offsetX+"px";
    circle.style.top  = e.offsetY+"px";
    tile.appendChild(circle);
    setTimeout(()=>circle.remove(),600);
  });
});

document.querySelectorAll(".tile-ultra").forEach(tile=>{

  tile.addEventListener("mousemove",e=>{
    const rect = tile.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    tile.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.06)`;
  });

  tile.addEventListener("mouseleave",()=>{
    tile.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });

  tile.addEventListener("click",e=>{
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    circle.style.left = e.offsetX+"px";
    circle.style.top  = e.offsetY+"px";
    tile.appendChild(circle);
    setTimeout(()=>circle.remove(),600);
  });

});

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');

if(track && slides.length && next && prev){

  let index = 0;

  function updateCarousel(){
    track.style.transform = `translateX(-${index * 100}%)`;
    slides.forEach(s => s.classList.remove('active'));
    slides[index].classList.add('active');
  }

  next.addEventListener('click', ()=>{
    index = (index + 1) % slides.length;
    updateCarousel();
  });

  prev.addEventListener('click', ()=>{
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  updateCarousel();
}

const driveID = "1Ot_vhF5KKCYfn9wRl1REM3n6sclsoj9c";

const videoOpen = document.getElementById("videoOpen");
const videoLightbox = document.getElementById("videoLightbox");
const videoClose = document.getElementById("videoClose");
const driveVideo = document.getElementById("driveVideo");

if(videoOpen && videoLightbox && videoClose && driveVideo){

  videoOpen.addEventListener("mouseenter", ()=>{
    hoverSound.currentTime = 0;
    hoverSound.play();
  });

  videoOpen.addEventListener("click", ()=>{
    driveVideo.src = `https://drive.google.com/file/d/${driveID}/preview`;
    videoLightbox.classList.add("active");
  });

  videoClose.addEventListener("click", closeVideo);

  videoLightbox.addEventListener("click", e=>{
    if(e.target === videoLightbox){
      closeVideo();
    }
  });

  function closeVideo(){
    videoLightbox.classList.remove("active");
    driveVideo.src = "";
  }
}

const overlay = document.getElementById("wwOverlay");
const fullscreenFrame = document.getElementById("wwFullscreen");
const expandButtons = document.querySelectorAll(".ww-expand");
const closeBtn = document.querySelector(".ww-close");

if(overlay && fullscreenFrame && closeBtn){

  expandButtons.forEach(btn=>{

    btn.addEventListener("mouseenter", ()=>{
      hoverSound.currentTime = 0;
      hoverSound.play();
    });

    btn.addEventListener("click", ()=>{
      const iframe = btn.closest(".ww-card").querySelector("iframe");
      fullscreenFrame.src = iframe.src;
      overlay.classList.add("active");
    });

  });

  closeBtn.addEventListener("click", closeWW);

  overlay.addEventListener("click", e=>{
    if(e.target === overlay){
      closeWW();
    }
  });

  function closeWW(){
    overlay.classList.remove("active");
    fullscreenFrame.src = "";
  }
}

const tabs = document.querySelectorAll(".tab");

if(tabs.length){

  tabs.forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c=>c.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  document.querySelectorAll(".plan-card").forEach(card=>{
    card.addEventListener("click",()=>{
      const link = card.dataset.link;
      if(link){
        window.open(link,"_blank");
      }
    });
  });

  const lessonsData = {
    "2": [
      "https://docs.google.com/document/d/19nyDi0bP_s232aH_USTWQoFkIiOH6T6s/preview",
"https://docs.google.com/document/d/1E08jG5NgvZv8hy7-6q8Q4zBJ0iUc277a/preview",
"https://docs.google.com/document/d/1TxziVjcWCSPG4kZqrULmzMXfXC1at5dD/preview",
"https://docs.google.com/document/d/1i4QBsRiFSiz-LsG1TGC-KR8-qHh-e6Vl/preview",
"https://docs.google.com/document/d/1hw46v1E3ttaeTIF3-ttziVNnmg7dHseu/preview",
"https://docs.google.com/document/d/1m6eR27VDko0By7gFeI3z1TcGJ_n_oBBd/preview",
"https://docs.google.com/document/d/10wwyNBOnrOXIiSW0arpWgHp6Rql4Gihy/preview",
"https://docs.google.com/document/d/1aAyFgs1zJuWl0SvB3ScIyf-7tpZrXu3K/preview",
"https://docs.google.com/document/d/1WfsPIn_ieCeEkNk4D0RUBKbUOca9MhBZ/preview",
"https://docs.google.com/document/d/14JrknoU1phJ6KbPoNpvmOwP3wwggZNRJ/preview",
"https://docs.google.com/document/d/11wFnjPNFtZSPGz8T9GbEHuUvsha9dF_R/preview",
"https://docs.google.com/document/d/1tzxfs3UQLTjYpVQH_SwYx2W45Vi9H62q/preview",
"https://docs.google.com/document/d/1KYLClHCi9kNh1ParnSxKHwHqWvHwRutl/preview",
"https://docs.google.com/document/d/1Myc6RWEgoX-f0mWH7fmAiTE3oa5hrw3G/preview",
"https://docs.google.com/document/d/1mRXMOki-QURQF2Z4LzExirl66uytnpZj/preview",
"https://docs.google.com/document/d/1LWL_k63daUoaCy2lVjulUXo33spr9e-E/preview",
"https://docs.google.com/document/d/1IdygcbevhKNtcXa8LnVi3AMXtP8p2IYC/preview",
"https://docs.google.com/document/d/1tjUQDudq89Zo8dtWP5pSzJoANNVLLg2B/preview",
"https://docs.google.com/document/d/14rT6WABtBhyqgV6XWlNhYWl7dhwuEjHU/preview",
"https://docs.google.com/document/d/1BqRNybV_GHWxPaD1sKbk5kS0f0TfUFoq/preview",
"https://docs.google.com/document/d/1dhXpliMNj3CmrlgchKDcTLpWC_wKIZJB/preview",
"https://docs.google.com/document/d/172hM94496EnWkbFMkPF9S_qyLJkNngUI/preview",
"https://docs.google.com/document/d/1MNBanp8lRWI__4KANOWkybXtdGAk9vxM/preview",
"https://docs.google.com/document/d/1cxxMnihQegwBLAgaS6PCq7w2HJvtSBO_/preview",
"https://docs.google.com/document/d/1HqjBndsvivCCPPVRxmyiHvZan_jXtRIQ/preview",
"https://docs.google.com/document/d/1gP7cmGMYvcmsIjlZXIqa27PkbVejN0AD/preview",
"https://docs.google.com/document/d/14dlXqbnUnDPkTvEVgEAzh4Hn6yBRu5D_/preview",
"https://docs.google.com/document/d/11Ek7xt2t50mNTC5qMmReu2N2rjjIxJ5d/preview",
"https://docs.google.com/document/d/1AKGJBXsDgNWtqzRwbgre5XFDUSzscxS0/preview",
"https://docs.google.com/document/d/182i4561wq23gwZp5NDZ5nLUWZfHF35QO/preview",
"https://docs.google.com/document/d/1Sr9seEpMtGMd-QdrpiA4L5s4T1ppiMI6/preview",
"https://docs.google.com/document/d/1yCHriK-I7PnwxK8LzkwmHbIlIeHdcRY0/preview",
"https://docs.google.com/document/d/12UaKDkZ6VLgGtkpm6m7AXHbFpwFFQIhy/preview",
"https://docs.google.com/document/d/1bpPp7rhz2__gVUc93NKzIrRUtGvacJ-4/preview",
"https://docs.google.com/document/d/1XfX6nZNzS5g7wYtmMkku7o_XGYh79yRi/preview"
    ],
    "3": [
      "https://docs.google.com/document/d/103AwHdt1tpSWWREoT0ZnsyGDqgYcW7UV/preview",
"https://docs.google.com/document/d/1JCEa4eP3IE4wjq_PLUYhjf2RZnPgW66-/preview",
"https://docs.google.com/document/d/1susUO5YzIrQ_CHQ8hvPMbd1sgLTwZ3a8/preview",
"https://docs.google.com/document/d/14lxPAUMwPDf7dKpsUqXv7_SMuvBZ1wQj/preview",
"https://docs.google.com/document/d/1e6r5jf4K_kFiu_DidHHOm477hpyDf0bV/preview",
"https://docs.google.com/document/d/1VssHiAczrSb20l9qewQ3AyJ28bWGFY2g/preview",
"https://docs.google.com/document/d/1eg-S9LESIRnrAd3UyhPRDGcP_CLjzf6P/preview",
"https://docs.google.com/document/d/1LYGuGe7OguoykXW0Ln1_yEey7zts4-jE/preview",
"https://docs.google.com/document/d/1NY0SXg4ZILpKsrvDkCDES1GbYFt6c8Lt/preview",
"https://docs.google.com/document/d/1GTuiNBoytcdLyxETCYNuSrSIqjGY-EZH/preview",
"https://docs.google.com/document/d/1kYApB0Om1U6nMEVSTIHP4M3kYgZ5ehA5/preview",
"https://docs.google.com/document/d/15VZX4AWz-AbP5TTyJGIRbo5OvmTn5Lj1/preview",
"https://docs.google.com/document/d/1lFAhzYfjOCG-_rP0Abld8sg0Asr_iLaD/preview",
"https://docs.google.com/document/d/1K7knI4PEwDk-rcxNAxL1Il9zrXJXjwJQ/preview",
"https://docs.google.com/document/d/16lF20ZEAV9rpQ0n5kEiIdAtfyr7UP2dS/preview",
"https://docs.google.com/document/d/1V8wMzXOdg0fJx2LRSiKSUomNEhyb36dJ/preview",
"https://docs.google.com/document/d/1fDMoaxHjH_jwj_kxcMnVo1oBdRy9i-O3/preview",
"https://docs.google.com/document/d/1iSYDI1jYmht97II2ps0p0Es-DW7MeMV0/preview",
"https://docs.google.com/document/d/10u9TgeyDOosJSRL_knIi7zPmqKm2uL2r/preview",
"https://docs.google.com/document/d/1sbj-IL0J6KStrH_0GhktQksQvTYQqdxl/preview",
"https://docs.google.com/document/d/1jZ3F4W927VN8YklyiZzTH0m_BjeDXDRg/preview",
"https://docs.google.com/document/d/1T4BKy9SRKJhY3VJDMvqhX6EjI2JSG_Sr/preview",
"https://docs.google.com/document/d/10tzZOEn0-T3ZwLWW2kYEa3X4fDAnV5gA/preview",
"https://docs.google.com/document/d/1ec4dQ8hOE8OHkqItLc2pRFzTOI_rJI4B/preview",
"https://docs.google.com/document/d/18IpYw2h3ZHCHf53hXOujC-MiMnDzI-1l/preview",
"https://docs.google.com/document/d/1f-bS_0l-utoJ21Snk2uLOBX-ColY4Fjp/preview",
"https://docs.google.com/document/d/1DnevXZV4ow2R7z4XhCkdOnMUWJpqDFCM/preview",
"https://docs.google.com/document/d/13KDEsvPHEFxSA-UxmUSYnyrp2YBC5b0f/preview",
"https://docs.google.com/document/d/1CoUkXTUwOHtGRpcjyVPzX_UvVHnIb_Pr/preview",
"https://docs.google.com/document/d/1no3TrJeppJ298JZ_guTOl_lPz9DfBygr/preview",
"https://docs.google.com/document/d/1RugnFoL3P5o_mdiHn1H7yFWIQV0yjx7z/preview",
"https://docs.google.com/document/d/1uXsKAvb1504AB6_t8Rskz0k0Q3HJOu01/preview",
"https://docs.google.com/document/d/1Go7C4-PF1wt2gKyNVK1_luyQfewhNIXF/preview",
"https://docs.google.com/document/d/1u7puAh2MyCeXEAwRiXdLLQCqKZILqfOt/preview",
"https://docs.google.com/document/d/1kR_X03se_xopBWQvUF-q7mtMkJ9OYgEx/preview"
    ],
    "4": [
      "https://docs.google.com/document/d/1LFdYYt1j77BarUrK8DOznHugkZHU5NO0/preview",
"https://docs.google.com/document/d/1M3H1Co3XDKikXaPnDi0auECCRlvq0ZYU/preview",
"https://docs.google.com/document/d/1yEQWP_ESXib2EVlG7Zjir21dQ7emznmG/preview",
"https://docs.google.com/document/d/1VwLLok3ELC4Ry4Xm3qu_-cljI6WmnwGm/preview",
"https://docs.google.com/document/d/1N_Z0lNg-3FiCd-FbuTHapONZl5EN2L6b/preview",
"https://docs.google.com/document/d/1a6OgWGx066N-27bqZasvP1HXPcjQFg76/preview",
"https://docs.google.com/document/d/1mQkSBfjIRaFWjtJ0WbmCb2r8lzboxOrF/preview",
"https://docs.google.com/document/d/1ZNhUWumLFNy50-l8li-puivxbdKcDgsV/preview",
"https://docs.google.com/document/d/1rkUdr75hlFUZt77hXpAqlqCHTyncyQlm/preview",
"https://docs.google.com/document/d/1lk9Cg_vxIWCHUNKrJgfZBRnvJKK-0cuZ/preview",
"https://docs.google.com/document/d/1iWRn_h86gDofrtZFc-jsLZBQsBE-LaV5/preview",
"https://docs.google.com/document/d/18va0KXfXinHZ6cOX4CYKm9R9ct8NE1g9/preview",
"https://docs.google.com/document/d/1iHQugla6VF909C3apF1zVAstdDa1uNZq/preview",
"https://docs.google.com/document/d/1gqz-1WHl8YmlQENCjZk1a9MsINjXXwkM/preview",
"https://docs.google.com/document/d/1LAqw3AIKQWxDUlYKzr11QlDav6lCRX6I/preview",
"https://docs.google.com/document/d/1rp8BymFcWIWif-UYBvTTEKNdFw5ZuBLt/preview",
"https://docs.google.com/document/d/1lQpUoqTIG6hcaystR9CNLNCl_6_TTw_v/preview",
"https://docs.google.com/document/d/1_sfsamGVq1s6qseHWaZSfw2nej4ngiUu/preview",
"https://docs.google.com/document/d/1qtXiT1abPNftE1EqK8JAAbREPtJPG8XC/preview",
"https://docs.google.com/document/d/1Jw7RF2LtBjiLFOq5wkOANr-WrV9N0Myw/preview",
"https://docs.google.com/document/d/1Sqp0FnvGNXHK-CAe-IFptw8WM6Eb0YS4/preview",
"https://docs.google.com/document/d/1BDkdGOBNozpLRjoY3d_m5_4BiIKrciWd/preview",
"https://docs.google.com/document/d/1KdWaNyib3n0ZM7ktfQB5BXpDX7kDJKwk/preview",
"https://docs.google.com/document/d/1Cs81x9Sknyr87-1wVRf3GLcBXiwCLdd8/preview",
"https://docs.google.com/document/d/1F2cILVMbkVk5r-KTuwkZKil3hKXaqZoG/preview",
"https://docs.google.com/document/d/1Sh3FiEEhpIIcBUzQ4MRm0XEV2NIb3kgB/preview",
"https://docs.google.com/document/d/1JVTjm8Fndku675XxKa5PHNE6xruGD62H/preview",
"https://docs.google.com/document/d/1gILCuBXEPQAozwkr9BJV_iOiB6fwCtuP/preview",
"https://docs.google.com/document/d/1KmeXNQAgGJuIqafy77tV1e361OQK9Ln3/preview",
"https://docs.google.com/document/d/1oVL9iPYamA-RDRO5lFl4qPFYZHAfH0Dh/preview",
"https://docs.google.com/document/d/1FBGNEvbKIHNu5UxCPRijxu74FQbMhLr5/preview",
"https://docs.google.com/document/d/1WJ5JU0V6mWTI8_i6Gla0hRDhCMrpnBiA/preview",
"https://docs.google.com/document/d/1xTqIOgC2oBSdbnHGE5Upx80LMyVtn10u/preview",
"https://docs.google.com/document/d/1DlgDeAN_ku5A0du5iBXoDh-8VCt3NcH4/preview",
"https://docs.google.com/document/d/1Qo__6Y-xurVhvS4-K83LAN4U5Nq1ymxQ/preview"
    ],
    "5": [
      "https://docs.google.com/document/d/16Pj0DG7W4wyDZXIO-ptWlf6q1uLXm0lK/preview",
"https://docs.google.com/document/d/1qm6cIvx8RYeKd-eYMwYBjbwoyg_GlfE3/preview",
"https://docs.google.com/document/d/1m7LgaErxOCkS8RPTzUHVaAv13_KQ6ydC/preview",
"https://docs.google.com/document/d/1X7W8L6zFTmdfilKCwTgP7466O-q1Mk_m/preview",
"https://docs.google.com/document/d/1PF9suKW92qR601NWwO0zVRLY5vChpRp_/preview",
"https://docs.google.com/document/d/1jv8lvfIyX58YuOh2yHMlvCKrO3Rrhq8m/preview",
"https://docs.google.com/document/d/1WWXPtq-HkF3Bd9Lq72rZDHut0YXrbuXk/preview",
"https://docs.google.com/document/d/1Zn6-cLlwK3fj0T9gONViZ586RAwRkdnA/preview",
"https://docs.google.com/document/d/12irZM4LuC1j1rWyXRs0NjXofnmUThe9Z/preview",
"https://docs.google.com/document/d/1O4yD3Gug7RQNPnKRJTZqrY2Z-V3OQ9Al/preview",
"https://docs.google.com/document/d/1lpuYXePb3ApXvJGDZKV1RabtcQ40Z2Yh/preview",
"https://docs.google.com/document/d/1LmJYQLpQHOGkFP1QGpOsyEH7g098EMO2/preview",
"https://docs.google.com/document/d/1WWtxLLby9nrqB5FN_pBqvUuQqePCgLcr/preview",
"https://docs.google.com/document/d/1AbYA9SwOnMaRMKvsahhlnhM8IuLqnPL0/preview",
"https://docs.google.com/document/d/19876rb08YtVkCNA6d41KgXpRkWdZVpVZ/preview",
"https://docs.google.com/document/d/14r_KKH_3lIKAk3kiwLphBLiPPymEzYKN/preview",
"https://docs.google.com/document/d/1hHe1rE7nuJ7EBhj1VWI6dHsFPHjncBue/preview",
"https://docs.google.com/document/d/1ZS6MGW9bNEh6aOizJx-SImKyc3R-HtSh/preview",
"https://docs.google.com/document/d/1lMZAW9bYbLl3GxakYB1IIpjw4kKA4vhI/preview",
"https://docs.google.com/document/d/1gC5ctoU5GjORik4EjU3LZLxQ2A8TXb-M/preview",
"https://docs.google.com/document/d/1gU6sj6JUVh-kH0rfoXhq3NKPaznj4w9V/preview",
"https://docs.google.com/document/d/1c_aWgL1QOnjgSIyeUGn7YMSzv_DnYD6K/preview",
"https://docs.google.com/document/d/1LWHXNTYP27FQfhwnrOoWD8Vy2zQMXFzP/preview",
"https://docs.google.com/document/d/13c2LtPSlfvo2RBoAmyJ4GEl1FgxsgmFj/preview",
"https://docs.google.com/document/d/1z8tkNq8DCmVRN3JzymqZJ_h-CV0E2CO0/preview",
"https://docs.google.com/document/d/1m83q2F6HA025rRjQqnLRwBZxdlBFBd3i/preview",
"https://docs.google.com/document/d/13W1tk1IyiSrXq1sVdgK740dON6hJnYzV/preview",
"https://docs.google.com/document/d/1xtw2XBALReyImrWx0vSEC_TxsvVDIIn6/preview",
"https://docs.google.com/document/d/1VrkFRCy30OXa5H64VaDVyrJUt6Z3BFRQ/preview",
"https://docs.google.com/document/d/1w0kgHzuL3pwZCS8E_p2geOlkLOA6KEa0/preview",
"https://docs.google.com/document/d/15_a4npZSOhd9gGkV_QIaHrwQ69-VRMnl/preview",
"https://docs.google.com/document/d/1po57ASsCw4rZHx1iz-AqNqaKQbMR9Bto/preview",
"https://docs.google.com/document/d/1DcSvLz5JftYqBl1BqQQSqrks22MutLGW/preview",
"https://docs.google.com/document/d/1FF2zPVJ6smG5PzrsaLA3aoKxE2iCZ8ZZ/preview",
"https://docs.google.com/document/d/1D5QGG2eAGdkbnCZwFVXrRlFMm9my8XgS/preview"
    ],
    "6": [
      "https://docs.google.com/document/d/143PHtFfvS5jFb1Vyj5zFkAjWVlhST5wR/preview",
"https://docs.google.com/document/d/1lsCeZQRYvWvGa0fU237LlSYq0nYWcQOZ/preview",
"https://docs.google.com/document/d/1B4FC1xN3EZjezf721uatKipAv-ToY7C_/preview",
"https://docs.google.com/document/d/1lf6a_w8-7sAptDaJmAgDVU-HmLrqw66c/preview",
"https://docs.google.com/document/d/1hNk8yv9NnDjW73qqmVXB0j5XEXAcd55a/preview",
"https://docs.google.com/document/d/1RpsjH7Emn6uIPjBxL9Bryu1suqnj2bWn/preview",
"https://docs.google.com/document/d/1RHgEiQrngLJw4qmPGW5G_EmycsPhl8GJ/preview",
"https://docs.google.com/document/d/1_CtVXpLcmtFolX74bYVKiPpNV00yBTOl/preview",
"https://docs.google.com/document/d/1feSyuxyB_lcWUpSWB9mpx6NAKrGvPHo0/preview",
"https://docs.google.com/document/d/13H4YHOmqZn1fXPBvk2GKCysESz5OEKs7/preview",
"https://docs.google.com/document/d/1KwZeCWmhSsBlBF6p4Lxc75h6BD4hJ8gc/preview",
"https://docs.google.com/document/d/1heMA5FHepBT1VypH3m1DJv1_jgeYdJ7v/preview",
"https://docs.google.com/document/d/1wCr6sC472BPBcOFKyUp8lFTRbRUFJqlZ/preview",
"https://docs.google.com/document/d/1bx5ry1191GOEFbe-hhcKkQiUnVI9xui0/preview",
"https://docs.google.com/document/d/1LNjYwPsb-HhPNwaZphReW05SHOHzJZRm/preview",
"https://docs.google.com/document/d/1_2VJkTEDeC1ft99qsryeeaaeKf0dWnsx/preview",
"https://docs.google.com/document/d/1orjUzEJW-yIuQ6nFKrJ3yRiRAT9aopdq/preview",
"https://docs.google.com/document/d/15uazzG8jo2zo6wBLxOiYV3LeqtrqjDGB/preview",
"https://docs.google.com/document/d/1RUBKtZM1viiPo1yBU68nuDiGNPGaSewV/preview",
"https://docs.google.com/document/d/1KlqmptvLesDraDFx9yMwfU5fMPVe4-kY/preview",
"https://docs.google.com/document/d/1qc4bctN90PS63NyytyVKbxLC4_iCUME2/preview",
"https://docs.google.com/document/d/1iY99k10UQ3jh0mEKDjWm3dXxbwFccV5q/preview",
"https://docs.google.com/document/d/1cayzyVnPSDe10LzgcobvezPuCKAA4-lr/preview",
"https://docs.google.com/document/d/1PrJjlLW66MMik2zOVaJhEwc3omEr1jEr/preview",
"https://docs.google.com/document/d/1uuw0MDUol9HIt0tatv7nnX80e9tt3Bu4/preview",
"https://docs.google.com/document/d/1P-HWOoRcmCw30j6wfzX8EOF79n5AMtyK/preview",
"https://docs.google.com/document/d/1-sUsSRYiPxLLceTr846MsvAqz72uRGL9/preview",
"https://docs.google.com/document/d/1yJy6lQpqxOf-oBh--6n3BY-dYN0P4PNF/preview",
"https://docs.google.com/document/d/1bGKvU5zYfdeFBvOmjY2ZfgM5mztVWnpV/preview",
"https://docs.google.com/document/d/1b4RYPdJsbYqAwL76X4P6FE0fazm9vpcw/preview",
"https://docs.google.com/document/d/1HHZq_ARIeBx0N6YdQK0VtmOeT-avjt1O/preview",
"https://docs.google.com/document/d/14Sp5C3CQuzQ894bJwhSkXRIcXW8SiXSt/preview",
"https://docs.google.com/document/d/1-8ctTDDEqsGfFztV8FvTamksKp-_P1Os/preview",
"https://docs.google.com/document/d/1NpeHzepKsIjaxdhAooDVcKPSdy-SPhl5/preview",
"https://docs.google.com/document/d/1sJX-QwS5eDkQ5mlhqmKeF4KeMvRlYvU2/preview"
    ],
    "7N": [
      "https://docs.google.com/document/d/1Erb2j_ftsjEP6peMEkbe3YeJUClqYgB-/preview",
"https://docs.google.com/document/d/10bdvbdJ0XMANnjZtz6_izT_nbUvi_mTI/preview",
"https://docs.google.com/document/d/1vlZGrJmjQ0XZ-YSPkPVmeM9TS4JxR8Ew/preview",
"https://docs.google.com/document/d/1ozfq10yEwnxI06njFT4xQGfdGvXkmsY0/preview",
"https://docs.google.com/document/d/1ZBJM_WenU8nbt5vcarwRSYdPIAt2QQGt/preview",
"https://docs.google.com/document/d/1wZgoepH-SungF0V7ReoWBcTPgq2aG2ty/preview",
"https://docs.google.com/document/d/1FCAClOEUcdEql_cthaCs1AaQtbYXUtOX/preview",
"https://docs.google.com/document/d/1RCRSTAdiQLs1-n1WEUHs9JAG1QxU76To/preview",
"https://docs.google.com/document/d/12L3STk8jm2j1vtwr3bq1P6rExJymfhNe/preview",
"https://docs.google.com/document/d/1HODT_vXW1LwPKNFXYNj0GqGuANj7z2P-/preview",
"https://docs.google.com/document/d/1jR9_Mw3OTmDH7-3PAYnY3m2U3IYEruoA/preview",
"https://docs.google.com/document/d/13L-rT7Zl8sgZp8k8fb7Xj6eo2R9xwTRN/preview",
"https://docs.google.com/document/d/1v8LjeW7KUFQrA2TJwbp4vHljxvaPHKNa/preview",
"https://docs.google.com/document/d/1bWOB0ypGlYlrm5shxWf1pyzbTPou2ES9/preview",
"https://docs.google.com/document/d/1y6wuuRJvybJBYeEzQxXe8YFHo-r5ZXWT/preview",
"https://docs.google.com/document/d/1goVEWWwwHdqxvAGVjcDsY_hJp5TnMbQL/preview",
"https://docs.google.com/document/d/1Fhlv4pI-TDEdorjMBePBCboVzEP-t-t2/preview",
"https://docs.google.com/document/d/1zJyBxtZV9SFGFqEUsCGnY20HH4XSrLR5/preview",
"https://docs.google.com/document/d/1VETCM7UErWNR5YfEMSUYYZuw5Vk37ysB/preview",
"https://docs.google.com/document/d/1PY81nUpObRsxjn2qu5BuALzGYjhB9OM7/preview",
"https://docs.google.com/document/d/1TPc9aBmxwX_iI3oA_u5VLztgnxJOd_Ug/preview",
"https://docs.google.com/document/d/1btJOpNFREfdFv0Jdp9QvdVJY52LyGOyp/preview",
"https://docs.google.com/document/d/10vuR-pCofZlOWDB3wfN38_M5JpO-966Q/preview",
"https://docs.google.com/document/d/1ukkzj59RY3T5HUtePnkt22Gw7MCHgsDS/preview",
"https://docs.google.com/document/d/1nVs757x52lxSftKeF2EGTo8YILxk-GeW/preview",
"https://docs.google.com/document/d/1rySmjiCCjeL83RKcRRxQgEaACB-MURZV/preview",
"https://docs.google.com/document/d/142ghz5UwBuTWck1_kIKI3ocOhAv96txn/preview",
"https://docs.google.com/document/d/1kRI8zian8lf5OfK4-brXoPfgtfMyfAgn/preview",
"https://docs.google.com/document/d/1nI7S8TFeCO97LTBeffbHLWXZagdX-C2L/preview",
"https://docs.google.com/document/d/1f9k6M4d4ErQHCNPlW-KgHJLjQw5hVlji/preview",
"https://docs.google.com/document/d/1cZWBWRUil3PysuzHdjZA0fZwjfudPxPJ/preview",
"https://docs.google.com/document/d/1y8VS49Ri2sGs1bYNVEsMZgk55b2YphfI/preview",
"https://docs.google.com/document/d/1Hl0rCed1oON5IzR6MqZd7T64d2pvCWx1/preview",
"https://docs.google.com/document/d/1ucP2MPOupSO7HYz95S5k1vXVvOcYS4oR/preview",
"https://docs.google.com/document/d/1r1QWZJBgNvXB_PLDSXsHth7Z2rNeJfGp/preview",
"https://docs.google.com/document/d/1W8Q90nYEUCfp5wlxrwevdsx5sgGRUDTg/preview",
"https://docs.google.com/document/d/1AMckt7zTXKsnPCkHZXYv5qZxkLlZXtUF/preview",
"https://docs.google.com/document/d/1l1_KB-DrMioWlIq5ZKF2gzlHByzGG-8L/preview",
"https://docs.google.com/document/d/1-zglYG7j6gwoZf1J9N8Hz-yLLaly4UG5/preview",
"https://docs.google.com/document/d/1gaKf6Fznj6bB5Pm02U4eiBo0u0tdvOhw/preview",
"https://docs.google.com/document/d/1_s80tE1vQRwS6mOgxsk-ORAFJEAf46zC/preview",
"https://docs.google.com/document/d/1B9VRqkW_kzcGyHvNAdqOjZNM_or8RT4A/preview",
"https://docs.google.com/document/d/11_ZI4o3M4QUzTEv4hfsIJPEc1owawRmd/preview",
"https://docs.google.com/document/d/1mJSPlVCiHbsRoM552TPaJDJGwTXrWdVn/preview",
"https://docs.google.com/document/d/1XVBUPpdiLQzgNHtIYiuBekxPDyk6CDPY/preview",
"https://docs.google.com/document/d/11vEn2IyIcGCoXk3poPQ90_znhIgR9e_Q/preview",
"https://docs.google.com/document/d/1NC6oY6DU3a33CZnEfKsHtqR-eawyG3D2/preview",
"https://docs.google.com/document/d/1PY-XA1rRM0FJrv-99VIH3hcDIVjSMQHb/preview",
"https://docs.google.com/document/d/18DHDAJegb0rcl_SkMXHDvA8DDxfd3li3/preview",
"https://docs.google.com/document/d/16CqZTl6wY_V5xfboPuFJumNDOmswHb_R/preview",
"https://docs.google.com/document/d/1LUYdQxA8aUi5HqWULu3jrs8B-6g30g9t/preview",
"https://docs.google.com/document/d/1i9pr-OvggATKycJ6nbmL8YCvE2NOa3pT/preview",
"https://docs.google.com/document/d/1p6iXaVnDwGlhZlzv5DphRZJfoh7ZE3it/preview",
"https://docs.google.com/document/d/1V4ccKCzMEEvyClrezZw9jDVx9_sr6ZC3/preview",
"https://docs.google.com/document/d/1SQFX87dxupAM7Sddc8xcYr--5X93L3Nd/preview",
"https://docs.google.com/document/d/1cg6UgDvqkLlBkHuRt9mK2fmWFJcEMxea/preview",
"https://docs.google.com/document/d/1QEePapkmwLxDdvnHDYM30v0qspGYDH5C/preview",
"https://docs.google.com/document/d/1puQVRtAtfic4BJzr5-O5CZ92E-7EHrZc/preview",
"https://docs.google.com/document/d/1_IHt6nOp23yOkuoqeEAwl_bxsu8BXbAA/preview",
"https://docs.google.com/document/d/1yG-93yeva6E3KLD2nnbeZMDHPlSCSiS2/preview",
"https://docs.google.com/document/d/1dYJliWujPneMH99RnNs0lUjX5fnno8xM/preview",
"https://docs.google.com/document/d/1eZEXlUmG4x8iB_KIld3CYldgFFqNmdXZ/preview",
"https://docs.google.com/document/d/1ghMCd422UOnNtPi7AhFkWinxvvCdsCZI/preview",
"https://docs.google.com/document/d/1fmhauAhuO38vXFS8lguB2RtGG9A4eoD_/preview",
"https://docs.google.com/document/d/1Qk6ZJOPgRrsYYllowg5wrpIsGeo2lVxA/preview",
"https://docs.google.com/document/d/1SEtGEb-KewhM3juzialOha1m4BiWSVHi/preview",
"https://docs.google.com/document/d/10l9p_UHNS8q-sTm4JWCPW0lu_bbsgfJi/preview",
"https://docs.google.com/document/d/1EZ86VjlsKR08W1_LMfhP06C6OdHXz44b/preview",
"https://docs.google.com/document/d/1InJrxymc0kG9BQ9aGFAQI3l9yeXxB2eX/preview",
"https://docs.google.com/document/d/17FhYqviloB7e8eEwbjGtppr-52PxSxdP/preview"
    ],
    "7I": [
      "https://docs.google.com/document/d/1ULgFQLx-hMspn5tNWBY3fH-lNzj73FBN/preview",
"https://docs.google.com/document/d/1H4KI-jXU3SPikZY65hFFv_zIFl4ye2Gk/preview",
"https://docs.google.com/document/d/1P6yfGmhDK630oP7SLvpwBFqNGzEQi35t/preview",
"https://docs.google.com/document/d/1j7wwKI_ZhD7xEeGaMGsi8dzh0y_utsYC/preview",
"https://docs.google.com/document/d/1k5SzVBNiX91xmoswyFuBI_JoRsgLltVx/preview",
"https://docs.google.com/document/d/15-d95kHna3kW6cDGXNrgYQRL0qsWMLcM/preview",
"https://docs.google.com/document/d/1zG5sV9lHAYW1WmWytHWa9vY5oZusE8FF/preview",
"https://docs.google.com/document/d/1XCFWpXjCKp3HD9mYWA71YvCnmG8woTxl/preview",
"https://docs.google.com/document/d/1LtUlDrbLFn7kjH2O8iWxrtaNo_yBn3Fd/preview",
"https://docs.google.com/document/d/1Slkn1zYCyAqB0ugJd69IBIuMpK1caBiA/preview",
"https://docs.google.com/document/d/1QoaIvaPb3Idw747K_Jlz58JSX2_PeVql/preview",
"https://docs.google.com/document/d/1jGDRyJtEyqCkXnYFmdawJ5yP8x9suJ55/preview",
"https://docs.google.com/document/d/1E2t4-WLDh-zOwL6xvJ1gOFBsjS2K7UW1/preview",
"https://docs.google.com/document/d/1jAkGH5jSuHdaVG85IF3aMPHLG74s0_Bs/preview",
"https://docs.google.com/document/d/13IfY3Ex2ghgd_VdzRX7etzgOkkZox8_W/preview",
"https://docs.google.com/document/d/1G_N7L4zfEaa9aTOvOl7x0z1QsVnAhR9l/preview",
"https://docs.google.com/document/d/17hXtQUvRjy9iKsziwITwe2JFiwjwIctW/preview",
"https://docs.google.com/document/d/1pxKMfDMtFNf8MP7tYxQeLhgVbm_9E122/preview",
"https://docs.google.com/document/d/1MhFCTJT8zvEtEnsVM7jW2HdRTNRuvKHS/preview",
"https://docs.google.com/document/d/1vOiPhEFePNld9tqTRrLqs2E4AoRJi72o/preview",
"https://docs.google.com/document/d/1gbtdtBUDW5cao9qx3GN4KHWESfzzFo2k/preview",
"https://docs.google.com/document/d/1EQA_FrjsgdvuJwrjzBA_t4G8bWpfuc-v/preview",
"https://docs.google.com/document/d/1zgJ_rmGUjVDrBfs-0ndJM9WaxGLZpRIO/preview",
"https://docs.google.com/document/d/1SrYcXDtxjCAG0o8RqRcPrPTmtgD0odom/preview",
"https://docs.google.com/document/d/1A5Cy0g8ITxRgj2AIcY2GVXgzdHXIDUAX/preview",
"https://docs.google.com/document/d/1d0NkrB8cy94GN9uge5HEk4Q3uqcbVAPH/preview",
"https://docs.google.com/document/d/1khptXtaNvRjQfdB9XbDtijk_KwOnD9e6/preview",
"https://docs.google.com/document/d/1fIe48YeiUrKkaEMcVuxmvxLwQFDAUh7j/preview",
"https://docs.google.com/document/d/1Kl53GbWeTuqCT20DMrisCaANWMKzCXu-/preview",
"https://docs.google.com/document/d/1icMPKOR1lHlXpceB9lMaYlmaPGdsSlvm/preview",
"https://docs.google.com/document/d/1RQzoTrbd_xakz3V5gJbDu3oKGIkUj0pe/preview",
"https://docs.google.com/document/d/15theEQvEcex-V-pnWwPF30IWeFivoO6E/preview",
"https://docs.google.com/document/d/1yEEmZb-zV30O4LhzqpiTL7eUNWLBN--3/preview",
"https://docs.google.com/document/d/1s_6DRqvqsUmAPdHUwhjPln6s1egV0o_d/preview",
"https://docs.google.com/document/d/1EcRcBfQdj2YfHizJpS0DjelshQb1WsvC/preview"
    ],
    "8N": [
      "https://docs.google.com/document/d/17xHthEsAvCgaygs8bc-gDCq1YFGXngfH/preview",
"https://docs.google.com/document/d/173ruPUFO6o_1hfS-PqetROwlYDER-BVD/preview",
"https://docs.google.com/document/d/1QqPcPZBEf9TgrjIOuNI4JGN3Qu9Q-zjn/preview",
"https://docs.google.com/document/d/1_-FuDQ7eS5C5e6GwzPf3uey9iyi887Wb/preview",
"https://docs.google.com/document/d/1m7z5TATc83sODjqPyrnPIWgqE4tpEUa6/preview",
"https://docs.google.com/document/d/176l-x9sOajIeA_wTDDAUVL44LiaKr8mz/preview",
"https://docs.google.com/document/d/1clj31lQe-HjmEKwX4T2VrNJO3cDt2GiI/preview",
"https://docs.google.com/document/d/10vJUwrOSxQzBVlu5S50E2GNDneUXu9PN/preview",
"https://docs.google.com/document/d/1OeJAOws6w6rx3ka5MZXZl-huI_Z4BZiz/preview",
"https://docs.google.com/document/d/1pZTO-JoD5Ppjb9xfbD3IPeSN8cp3f0pf/preview",
"https://docs.google.com/document/d/1BXM4uR91c-pjieE_FrZ3v0hQ2SsD8IVh/preview",
"https://docs.google.com/document/d/1Eo3jPJql5qNKwqnvFqTQQHlPvFBj_lRV/preview",
"https://docs.google.com/document/d/1RHXHADffdhuPpFR63mu85aDRgVB-5yWr/preview",
"https://docs.google.com/document/d/16t0n6klE-li64ENVOxAvt48RImttqEQv/preview",
"https://docs.google.com/document/d/1qN2OXn951fbqzQ9rkBVULWxzIK6FGXTG/preview",
"https://docs.google.com/document/d/18qv2kQcozIKASL0FllF0i07EDuqcmBTY/preview",
"https://docs.google.com/document/d/1ujRy3LutnvCW_bf4SY-9OtpgtmFVXI8o/preview",
"https://docs.google.com/document/d/1Nu8ZubnhuoKHvdNxbCYPBh1ooSdZqCxS/preview",
"https://docs.google.com/document/d/1nb3uUY3Y_WitM7YoXN7pJgZNLqMHwA3p/preview",
"https://docs.google.com/document/d/1_BhiVw9AsgdPK7EjlEilGsXMih4-zucZ/preview",
"https://docs.google.com/document/d/1Fy9hnNgY-2pt-9ZUDq4yvrjBkRQPz2c1/preview",
"https://docs.google.com/document/d/1kH3PDwCZgOGrX_HufUHtv6UvTN1EPzeZ/preview",
"https://docs.google.com/document/d/1k3ZIyzCxrhJmSzjy1xu78mHeaNQk0ZqA/preview",
"https://docs.google.com/document/d/1A70OrNSN3hZGqzbHfuDJfGp9Et4qpfKR/preview",
"https://docs.google.com/document/d/1g4yUkOYV5rK6eczsoD5Hp1yFtqcRdmsG/preview",
"https://docs.google.com/document/d/1u_7tuq7pR_tLpheZoRNLCAX-BncHttml/preview",
"https://docs.google.com/document/d/1GpZz7Xkrt9bKrc6z1koi7VzBCq-OZTpg/preview",
"https://docs.google.com/document/d/1r8dtcPnKq7gGrrijYDt9u0Vwcj5Bhtm4/preview",
"https://docs.google.com/document/d/1a8o-Bc_JYjemq5KSE-fdBmf7pqvcZKn9/preview",
"https://docs.google.com/document/d/1PfOlRpGdBcVLzWq_--8dURS3bEYLqwjJ/preview",
"https://docs.google.com/document/d/16Li1vmpV5QcwZz8qDXRhRul8vdacmXpX/preview",
"https://docs.google.com/document/d/1qV4Q_NPvlFVlR1BF5DfCHS7rYLBM2-jx/preview",
"https://docs.google.com/document/d/1a4K8or9Ij0fUHUTFIn1kul4462CzSt97/preview",
"https://docs.google.com/document/d/1d9HhrcgOJqJIKIL31Mw5cYmjcjPBjSuy/preview",
"https://docs.google.com/document/d/1hCIJaQS718H3tPGa4R9NeJJWdWc7mik1/preview",
"https://docs.google.com/document/d/1n8dyiAl-66c1GDy6D3w_nEs42H-N6KeO/preview",
"https://docs.google.com/document/d/1cKBWEPHni_B-wjl40K2Trp8Hi2TFP5nD/preview",
"https://docs.google.com/document/d/1ZEjI58Jd3hTlBN4oJKNLOGglcZj9UaFB/preview",
"https://docs.google.com/document/d/14_xEJctY5-Xemju8IENC1EG5s7FTTJ_G/preview",
"https://docs.google.com/document/d/1__g3kcE1_7m-noys7AIVJLYST0hHw1AW/preview",
"https://docs.google.com/document/d/15Qcl9RjzURJUPFMEcNBsKH7PXxJokTgt/preview",
"https://docs.google.com/document/d/1VfH34gh2pEULy9paNNz_YoJ2cW7oz0Cr/preview",
"https://docs.google.com/document/d/1Na8Ok6VoJAjHeNlwjJMZYwGwCMhYhG0m/preview",
"https://docs.google.com/document/d/1W0gdOuqDZ8SlRqu0XD92FW4kySZi-KCU/preview",
"https://docs.google.com/document/d/1U3ehOSfHrHWdfA1g_z8t5myBHWqKfkoX/preview",
"https://docs.google.com/document/d/1M2oasafjWMVC7FR6545zEAcnK4Ati5sC/preview",
"https://docs.google.com/document/d/1Sge7Ns-W3nLHhR86XPRkF9vlEhTRslBw/preview",
"https://docs.google.com/document/d/1VzfSZdM0ihRhYd4kGskYVYk1mp77v9KW/preview",
"https://docs.google.com/document/d/1yNUACEtw_3KSGXR2cMZR9Tx5tdNIXLFL/preview",
"https://docs.google.com/document/d/1liF2QLiH0-Fl2bBYxV7iZbjsC7Hv_Ci1/preview",
"https://docs.google.com/document/d/1u4WoCbZI-8bsOShbvj2zRW_gxbX5Ga-T/preview",
"https://docs.google.com/document/d/1OjicZFxCEYXCRsPvt3bDDGObKNKHiYB-/preview",
"https://docs.google.com/document/d/1KqSoemMDTnMj9ElDkVPtXF-rnVBWiHX0/preview",
"https://docs.google.com/document/d/116cgiRLqjJIxW-aBi6A7_LBhG3WVUrMR/preview",
"https://docs.google.com/document/d/1SPKhF2UxA3r05ByhbhZphphrHocHVu_A/preview",
"https://docs.google.com/document/d/1ku2DbYnYyDXal9XhcTdJ72Me6YpZ8gPV/preview",
"https://docs.google.com/document/d/1SqiC07r8pzq5SAgkvz43jaIxyqusp1N3/preview",
"https://docs.google.com/document/d/1HORPPd-q8tDzViqFHoRe848ZjLgnD086/preview",
"https://docs.google.com/document/d/1op8bSpCuqe7TPDPiWMLWgsfACN0iFSbR/preview",
"https://docs.google.com/document/d/15_Puqe125juHK7koDX8q56EXFOPx7e7e/preview",
"https://docs.google.com/document/d/1yWL3HZ_Uk2hFDL-l2okQCOpYK71NqZkt/preview",
"https://docs.google.com/document/d/12CTHdvWCJV7yW4f8yFiObUITwOFMGaEy/preview",
"https://docs.google.com/document/d/1ZVGrzcTP9PGZ1X-wjkTkwkamkU27sncf/preview",
"https://docs.google.com/document/d/1fj1-ohVw3SVgAgoLm5cLCWAXSl19u3uw/preview",
"https://docs.google.com/document/d/1XPjLgVEa_gboWERez-6dvNrQ6hStOBcd/preview",
"https://docs.google.com/document/d/12wXElVD-oF4arUTtowP8W3rZyWTz9roU/preview",
"https://docs.google.com/document/d/1kWwLQpZYudtygXMAXU8S8_XWg9FaHQa0/preview",
"https://docs.google.com/document/d/1JWgtP4ulp2WJ9tG7EK-BM_QIzoiDGGS7/preview",
"https://docs.google.com/document/d/1izSzcMUSJreMZoE-PFZLl4wOUb-YjLXk/preview",
"https://docs.google.com/document/d/1D3qFHFJpMck036W2uiwUtOrS2xBWsESs/preview"
    ],
    "8I": [
      "https://docs.google.com/document/d/1vhgf3ByZiRrlsV_jnxfHwmoBPe1WErTe/preview",
"https://docs.google.com/document/d/131O6565GlSde1LTEqbz_74Zs27YmisOG/preview",
"https://docs.google.com/document/d/1UYQfs19MIiT8p3pMYi9LB_cmC6mwkJfY/preview",
"https://docs.google.com/document/d/1FZ8uauh70F9pMmpwEjXUVW1sapPBXPnQ/preview",
"https://docs.google.com/document/d/1Y3kZ4d-pwMlMscqtBuOQRzSP6oqhJxJe/preview",
"https://docs.google.com/document/d/1ys4buaBxdWpTnMQiJBxJIXRgnuC_lF4b/preview",
"https://docs.google.com/document/d/1N386PZjKnr7Og2jP3Momd8Fz0XqOY8pr/preview",
"https://docs.google.com/document/d/1iUmTCZexqQgmSB1OhJ4PwPoGtPlVKBSE/preview",
"https://docs.google.com/document/d/1l-wULOEXJpvKE0-NbozyU7xAA4veBvH0/preview",
"https://docs.google.com/document/d/1pL74n-vA3yIjZhEok7enic9rGhOhMrqe/preview",
"https://docs.google.com/document/d/1QMLJoF0pFKfrN6g9XI-WdS6zGmkqWdwm/preview",
"https://docs.google.com/document/d/1_H6E3bD3aQqbBlPFVOnmJvt7gP8iIHnx/preview",
"https://docs.google.com/document/d/1yMrJ5mSbGrL5iw_nNnNIqpJcDE6ReTEF/preview",
"https://docs.google.com/document/d/1ZekNIi86forW6FTSBAdBc3GT0mybgHvi/preview",
"https://docs.google.com/document/d/1EzyxebFRTEArlfyOLBDhaBvLsvB56eaz/preview",
"https://docs.google.com/document/d/1fzJrO0MhqI6txKSwefKo_kmJoi1cl5t_/preview",
"https://docs.google.com/document/d/1hEfwTVJbHYtY3-SgUhHmD9t43wK3I7MJ/preview",
"https://docs.google.com/document/d/1nyHMuwcnRKmWWh3kRnIreMLiulSa1S4C/preview",
"https://docs.google.com/document/d/1Tbaw64dXiZoxoA9pG7FNjbJVMXuoSrKh/preview",
"https://docs.google.com/document/d/1sSyrRu0SiGC_PieqnTc9oUAToSzVYbe2/preview",
"https://docs.google.com/document/d/1ZF0MR6O1yhgFcFK1JcpfdOZoaoEnibkf/preview",
"https://docs.google.com/document/d/1WlAJKevXzfKyiSuO43T8iY95NP83TXrk/preview",
"https://docs.google.com/document/d/1qthzHq4GhqUeUdA3hvlg6wBzbXjwCMsb/preview",
"https://docs.google.com/document/d/1tEWhhQJVUxLf2bjKXny9F7aOGYTaEPad/preview",
"https://docs.google.com/document/d/1XLSupu-WgSNglSIyj7VMOWnw1K1kiQHh/preview",
"https://docs.google.com/document/d/1REOr5LR3tlqoos-1nws9sR1itcYQVLnj/preview",
"https://docs.google.com/document/d/1ZeIrSN47E39DtaN69dSxs3yn46d8rqfr/preview",
"https://docs.google.com/document/d/1Z7T-D_qddwE-xvOF-9JrtIlKSvRb-L8l/preview",
"https://docs.google.com/document/d/1wFi5lJWyLNT3o_VikAmsm0JFcCaV86zv/preview",
"https://docs.google.com/document/d/1vVR4qE59umqNh63UXgOsIDRAct5fR3HV/preview",
"https://docs.google.com/document/d/1tDi9Nfdmxpp2cDgW0lO_UjgK7gvsV7dE/preview",
"https://docs.google.com/document/d/1_iSy07UZuhnvjR0expq3g4S6gyXCJuAg/preview",
"https://docs.google.com/document/d/1dLZqgbq_8AqTwVIU9F9cI6gwzJFAUuT8/preview",
"https://docs.google.com/document/d/11WHvMuU9Dc60AQ3MnvMpG68YUy_Cah1F/preview",
"https://docs.google.com/document/d/1DHKPpO4MPFTaDdxb0tCKhcKCj942Hc_6/preview",
"https://docs.google.com/document/d/1mK_Xs3amU2rfrv1v2MsLVB2DRiyFQpCQ/preview",
"https://docs.google.com/document/d/1vtK--pINBVNFkvmC1AdJrsBkV0dyB-cH/preview",
"https://docs.google.com/document/d/19Y-RypCyraHxymZbPnt0FY8oPQleE5v7/preview",
"https://docs.google.com/document/d/19T7HvPi6eP8UvvVODr201owaEZSfSQV1/preview",
"https://docs.google.com/document/d/1vh-Su2owiX_f2NLsvUO0EIfvkSL1StuC/preview",
"https://docs.google.com/document/d/1vazOOqoG-BfM1xN_hWXOrVL8wXc3WTpm/preview",
"https://docs.google.com/document/d/1zYOs--x0lDrMh07eot48995_PKTww1N3/preview",
"https://docs.google.com/document/d/12AILb553nPhhSkr_nWhTN8rGEGigUXBg/preview",
"https://docs.google.com/document/d/19mAyMrF3-um_IAWh89aU7BXoRPJnlb5y/preview",
"https://docs.google.com/document/d/1Ek87HXnw7BHrsr7-z8NFalJC8-P2Sx8o/preview",
"https://docs.google.com/document/d/1l2RRVts677g9xC8SFbRVxrPF4dgrpIHe/preview",
"https://docs.google.com/document/d/1MjzQwhO4qmAVboUVP6AwyEnH7Hk2Uddq/preview",
"https://docs.google.com/document/d/15KhDUIbRfrJUUCkyJBIbFglLOltXY1lI/preview",
"https://docs.google.com/document/d/1yjB6KHTrSUJgp7BYxggbK_EFtrRnU8L6/preview",
"https://docs.google.com/document/d/14H_wcQSRIRuupJgOzQeA9Anu29lbUyz7/preview",
"https://docs.google.com/document/d/17hY7zuW8lVB3JT02Fm5o7XNUsIQLx1SO/preview",
"https://docs.google.com/document/d/1UoGy-uWi2CaZz1lI9gRjanAp3mTfPvPQ/preview"
    ],
    "9": [
      "https://docs.google.com/document/d/1ykVgFdJfNvyYu2G9HcnSPYNHRKTEj2gg/preview",
"https://docs.google.com/document/d/1GcemKR9A9Vz6HQf4W1nzmBv3fJtCFiMN/preview",
"https://docs.google.com/document/d/14iZTV38LAC3cbIR8ALWkNLSXEoyaG-W1/preview",
"https://docs.google.com/document/d/1gitFfum3W4ew71nSQDIDc02UxCyyGL0-/preview",
"https://docs.google.com/document/d/19L2vdWNJYYXDJigMsRJogauw6zJ3pieZ/preview",
"https://docs.google.com/document/d/10RNYqP9DhFPnkv4PzZ41YVu7H2l-h4vE/preview",
"https://docs.google.com/document/d/1IRus8Z3bjeYXUasLulsTMfZRT12_kKrR/preview",
"https://docs.google.com/document/d/1y44DnqExLCL0Ui4Fv9MWepl8UfzSDfhg/preview",
"https://docs.google.com/document/d/1-aRKHAKBVuoD2bU4khSsaetK7r_Ojtqy/preview",
"https://docs.google.com/document/d/18g4WEDPVtS_vTSLIieFdPfG6jMHlYIhU/preview",
"https://docs.google.com/document/d/1Glx1hFQXzuLBOaQHkcibDacHNU4EMiof/preview",
"https://docs.google.com/document/d/1sQ-Mj1-n1BHTl29dL5xV73JKevC2Vr-v/preview",
"https://docs.google.com/document/d/1ix8rfWwr8J9mtiTVwIpMckRj1mmyHipt/preview",
"https://docs.google.com/document/d/1vQFTcGrTR5FSUpTpFJv9TNiauJ9_yYh8/preview",
"https://docs.google.com/document/d/14HihhU6IMQtmGtEkKF9bQI7UIyu-6CgK/preview",
"https://docs.google.com/document/d/1xyrGQJLDNzL7aYuiUJ9Xsfpb1kERP_tN/preview",
"https://docs.google.com/document/d/1iTRAx58AASUy4TA0WbCZzgp_i_BcGGpe/preview",
"https://docs.google.com/document/d/1ZlqydI-uqPRfJuc3-EmpoYF2X08CIRB0/preview",
"https://docs.google.com/document/d/1YXXJDo87sMwNQBbbfN_RUN_gpccvw8ce/preview",
"https://docs.google.com/document/d/1iuGCyekDAh7RccthiGKZZe2V3F_CoM8B/preview",
"https://docs.google.com/document/d/12kjjuaF2X37cN_-2SWJz7R1go08fcbcF/preview",
"https://docs.google.com/document/d/1yViPqtcN9EYa30TMxKZQxIv6bjSIUyvd/preview",
"https://docs.google.com/document/d/1yK3PFtAA_twFe_HniXZS2rn9xYBIoxgP/preview",
"https://docs.google.com/document/d/1r3HrpXAhrLOETOn_k_8DOCZA4MWHv-nm/preview",
"https://docs.google.com/document/d/1tv6lSdnG34BrHC-1TxXkp-0fP3iD9tTl/preview",
"https://docs.google.com/document/d/19wMuBqY-G_fbVR67rICX-uDVee3mDFHp/preview",
"https://docs.google.com/document/d/1WfmhqZgwtWNRpcJv9Fdu6_QHM_IDLcQt/preview",
"https://docs.google.com/document/d/1eRHUKAUjrYzfaLK4QalDQ_PPS8ilO__g/preview",
"https://docs.google.com/document/d/1NsACc0bm-sooVhwQi_odSSg1VfVIHvhc/preview",
"https://docs.google.com/document/d/1rTzUksunfQ05nYMdopqwVFw3PcLuVR68/preview",
"https://docs.google.com/document/d/1iCXp0M2uqkl5wWRdZAdgTeoBVWWY5kBr/preview",
"https://docs.google.com/document/d/1Wbpv77r2LFU-DeI9BHzYHLv5EKOovSJB/preview",
"https://docs.google.com/document/d/1lksYbbelGDGx-TIgNjIvn2cqNRgIDSfT/preview",
"https://docs.google.com/document/d/1-nBz-XrfMq91UxuRD4uPEwNUSOawfm_u/preview",
"https://docs.google.com/document/d/1NRhQJ14g-XXtqwe_GKLmt5TrjSNLQGj2/preview",
"https://docs.google.com/document/d/1QJxd6gQYVi0p1zg7KOWmjKx48PgBt2yu/preview",
"https://docs.google.com/document/d/1aNWhVWKPJL4DOQ2MdW8AkQRK6rNOtU0A/preview",
"https://docs.google.com/document/d/1HbCF8fwlReEhUPkGe5brjl-pPL-mKpZT/preview",
"https://docs.google.com/document/d/1LgEJ13tG4zU33b2rfd4Syr2yPwP6Bcr0/preview",
"https://docs.google.com/document/d/1wjQXxD9OZgX80FD2bHh4oEP_p5FpAK2R/preview",
"https://docs.google.com/document/d/1tEemMkqrHooE8K5sGurCArC_VIAX-pia/preview",
"https://docs.google.com/document/d/1b33e_tUpBIIBBgP7YTgDu59kwrkeh9gX/preview",
"https://docs.google.com/document/d/1pkJs2_J0KbYjQtt4iXOULWhHABILueMp/preview",
"https://docs.google.com/document/d/1KNURk2KiJWwxHeMZk5oatahL55gDhUg2/preview",
"https://docs.google.com/document/d/19eH4Ff2l4xZ9ycOl_UNhkdkP2liUsSWf/preview",
"https://docs.google.com/document/d/1S0Z6Sga8YMi9sXEKIuxhAJrFdl73qI7y/preview",
"https://docs.google.com/document/d/1E4koZnFtaxlOtPjIMCnjU5Y8g7M0jqhb/preview",
"https://docs.google.com/document/d/19PsYCouqCmCfAWqwwnWvTvntbAOjOGiR/preview",
"https://docs.google.com/document/d/1h_TTeihtd14LK4vuPIoW_k59DnX0eV9P/preview",
"https://docs.google.com/document/d/1-wz5nQKZgaPp0mtdBAcbrYcQsUnTnle_/preview",
"https://docs.google.com/document/d/1kXZVvP4rCunOlv7wzkmwm1tN_2Prgqcw/preview",
"https://docs.google.com/document/d/1anSWzq_NyZEMKZuN13Mav6or-g0TiewA/preview",
"https://docs.google.com/document/d/1ImI9PZ1w9sijlqu1mJ3B6pvDgctAtljb/preview",
"https://docs.google.com/document/d/1VD_9g07c75diqGN5WHYMz1Sam-kjMef8/preview",
"https://docs.google.com/document/d/13AIBT2k3AUMdveYH13SnF60MqMkn0AgM/preview",
"https://docs.google.com/document/d/1UgAQfOzpXZVdkrN-AbkLJs4UyscA9CUd/preview",
"https://docs.google.com/document/d/1d6JA-cjuDgWZS02UwBCGI49ur7HXDeLr/preview",
"https://docs.google.com/document/d/156NKDAoTah61-DLuceIe9gdIBv5z9JsA/preview",
"https://docs.google.com/document/d/1cQFb0vWZ4T_N42tHsqghP2LNr4Ey0dNv/preview",
"https://docs.google.com/document/d/1IQj2uTtmSuvVgmpqUKGdJ7tZgixE5WBj/preview",
"https://docs.google.com/document/d/1lmPWiaJCts756DtkPXs6egHtKgPssFrV/preview",
"https://docs.google.com/document/d/1bjBxnuHYAKDrkwKW2_kX5AgvPYAKPU3y/preview",
"https://docs.google.com/document/d/1XGaPwNQc8PC6bDZBcJYRXp4ATXV-iOIw/preview",
"https://docs.google.com/document/d/1mYCQPn9rzKYdAIFlcbH_oj3u79bB63r3/preview",
"https://docs.google.com/document/d/1KJScXNqnewVIrAWFyqGN1jwcGc-ZMsu6/preview",
"https://docs.google.com/document/d/1tqcNcyjmbmpkEDJMnsyIWBYwJKqBN5Rt/preview",
"https://docs.google.com/document/d/1NK2agEIY7H4A_MJOeGyPI9IWvCCMR_SM/preview",
"https://docs.google.com/document/d/1WeDtf-B3iZMRXLE6ySaQED4CsSINGDYj/preview",
"https://docs.google.com/document/d/1rjGNrE-Na0VY6u3DAEoGtCp4hgXL60jD/preview",
"https://docs.google.com/document/d/1HN4yxOX9DazjLpECq9quFBif4-9WQfU6/preview"
    ],
    "10": [
      "https://docs.google.com/document/d/13FSfPsqXuqgPpT8N2UXjYvpfnv5i9y7T/preview",
"https://docs.google.com/document/d/1iN_EBidKZTL84RiR-MCYvjqQQoiZxYPV/preview",
"https://docs.google.com/document/d/1j83I-wsrD96OZtlDGU0ApOh3XkVfQsrR/preview",
"https://docs.google.com/document/d/1zLSrYSMHmsetku2rGy1bG6u2B3df4kG5/preview",
"https://docs.google.com/document/d/1vTpsPRXm7yjmoO6GvMueQeSvlc5S9C4d/preview",
"https://docs.google.com/document/d/17V4iNSmfxq8oLln6Y7HKZziVwyNRKsaV/preview",
"https://docs.google.com/document/d/1-jnmg4w022AyQgT3wu079jhtyEtW7vnk/preview",
"https://docs.google.com/document/d/1_84Xrgj-lKP0ljx1Q2I7DzPCTZ2ld0lf/preview",
"https://docs.google.com/document/d/1vgWdSXDAVo10RPB1X65-OU0vHmFiBHjq/preview",
"https://docs.google.com/document/d/1bL9aTf6ldsAOLJaOkKZqb9r3SXN2sW5n/preview",
"https://docs.google.com/document/d/1V7I39nsB8HrNP8WJs3wLvxRxnm148Tu_/preview",
"https://docs.google.com/document/d/1tSc71B7k_46d_V398Q_QTOosfBjMKmmA/preview",
"https://docs.google.com/document/d/1TZpxLc-JsM0Hlx2Mdv1mbY5_Tv1gtIsE/preview",
"https://docs.google.com/document/d/1cCvrLoRxH7vk5scmbWpi5X9RHNwY7ECU/preview",
"https://docs.google.com/document/d/1XFMcEpH_-getC6thlQZgpNTGhibGXp5u/preview",
"https://docs.google.com/document/d/1xn9bVWHbbg7I02G7K6LlajjDQXYSXVUw/preview",
"https://docs.google.com/document/d/1BsIeDYOrpea7FmfaNpxJYA9VkfvZkjrW/preview",
"https://docs.google.com/document/d/1FjhEz0w19oUmTkedDIfmPPMnoEdkHEwb/preview",
"https://docs.google.com/document/d/1gZ3ZRLfyC6cWCsmbm1bFQ1i1qweKiS6b/preview",
"https://docs.google.com/document/d/16_zwS_79sFx63rYq7Sg6W_-W5qmlS_TJ/preview",
"https://docs.google.com/document/d/1xhYXFvMA9zoQyZyBlB0HaGdTNXHuYpIa/preview",
"https://docs.google.com/document/d/1YWhVo7yWQH_onRaoipCtAE6zAMLXZkEc/preview",
"https://docs.google.com/document/d/1KzOxRHac_Hb9cRo_wugwLC_7yuSd1Z68/preview",
"https://docs.google.com/document/d/1xzUeemb3hCZk1S7ERhO6oNY6o8ip7oiz/preview",
"https://docs.google.com/document/d/1MVu4GJwPJtKfWGtjiJk5tOdB822T5pzT/preview",
"https://docs.google.com/document/d/1GEUf4GW_tmzshaMRXLAFy9WGMCJ5mLPm/preview",
"https://docs.google.com/document/d/1Yk2f9bI9cTVgkDzeHPWjuUXa8rjmzpjM/preview",
"https://docs.google.com/document/d/1FnEDUhGLUq6_RAwugKt5IQZUZXlV1ZTS/preview",
"https://docs.google.com/document/d/1F2SWIfH6NdYJpih7gPMSdMjsn0nrdJ3X/preview",
"https://docs.google.com/document/d/10dy9ZA8U5hIERi8xsIk0reKbDkmMmV6T/preview",
"https://docs.google.com/document/d/10l0Q2XBKSjqPOiLwjY5W7Cz2k-tJ1IW4/preview",
"https://docs.google.com/document/d/15I0f-2JPyRB-vWvDqDUrNrJJZpTnGb9z/preview",
"https://docs.google.com/document/d/1yTdOCas65kzyEhg57_CNjFhCIAclwMXS/preview",
"https://docs.google.com/document/d/1gH6n5Ci-DmyN0GLBLOCCgxoZoJqZHdkw/preview",
"https://docs.google.com/document/d/1w9aLP9e5NdBQWure-cn-zMrlpppCDbyv/preview",
"https://docs.google.com/document/d/1HdDvsCeYt0O1TUl67wlNW5KzB7O1Gpes/preview",
"https://docs.google.com/document/d/14BwvU11qgC_nyiGdeRGbe_yNoZElL3nC/preview",
"https://docs.google.com/document/d/1ggY2yIc2B8P0fiGQBiXW8KeLQH9tIe72/preview",
"https://docs.google.com/document/d/1JIBKbNkbreg0vLAFyb5zxUct1UsqX5Pv/preview",
"https://docs.google.com/document/d/17h2jh0RwLU2GJiHR-qyF-g4M2NW-IScA/preview",
"https://docs.google.com/document/d/1gbzSCQst9wXIVIxro_OFC85bZDJroo0k/preview",
"https://docs.google.com/document/d/1PYMHkyQRbpkURKhZCMDp2IZb8BginLVf/preview",
"https://docs.google.com/document/d/11CUuFPxRRMQa01uqdnsSldkaY_gpNjCm/preview",
"https://docs.google.com/document/d/1oOV_LuExvdCh7VG6a6TBw3dtutJcLaj3/preview",
"https://docs.google.com/document/d/1yxr-vNGXqq2-mSHdTK4z46HNxfpIUY0e/preview",
"https://docs.google.com/document/d/1g1LCDmp9hSCXwHj8lyAFTSTfvChsw9cH/preview",
"https://docs.google.com/document/d/1p4477KC5A52U-6ApDzcmUyOKAaUzf3c0/preview",
"https://docs.google.com/document/d/1pzQYLZpQJ2shUbGZH28DUlDX0Dh9xqBM/preview",
"https://docs.google.com/document/d/1zQfo6tWLxG1cFsj92Taxyq46D_40ZeFY/preview"
    ],
    "11": [
      "https://docs.google.com/document/d/1CEhMI_0prc0f4gN2XtGpWG5rYfpbh4fH/preview",
"https://docs.google.com/document/d/1rKgiPO-rbqtPW244ujj4_uwiBGhhDRUL/preview",
"https://docs.google.com/document/d/1D7xbAP7SW5KwxPqNnRiLTh1TAXOYrqAj/preview",
"https://docs.google.com/document/d/1iuFqrEK4Oy_lMnEGZSIUwIbfCrhqUpSP/preview",
"https://docs.google.com/document/d/1MzUc6f8k1sIh3OCffUj76sBWOMSd5UWt/preview",
"https://docs.google.com/document/d/16YAYGXt3jduv9O3vTjD1g85YSiwMFiZP/preview",
"https://docs.google.com/document/d/1uor_qn7go2KoUVkx6MxCI0SVha5sJanl/preview",
"https://docs.google.com/document/d/1hEw865fHN7FoNj4drdtFNIfUDaY-ZlF1/preview",
"https://docs.google.com/document/d/12o1ZnrlAdHjnQA_0s_CaUMHqTO6NGYCN/preview",
"https://docs.google.com/document/d/1KIAo4S7XH3bp-w6nhQA-cGSEukSzj9zd/preview",
"https://docs.google.com/document/d/1gTNYJoGGhnAJAJEAN7YzNnTl6RyYFyJj/preview",
"https://docs.google.com/document/d/1-POeUc9XSZiFBKQ-yfzU34kkkOX_9xsS/preview",
"https://docs.google.com/document/d/1tqOry_53LfEw1cfp8G3U_XxosQ21QQIl/preview",
"https://docs.google.com/document/d/1Fb-0eTGqlws_On6evjkELL3GWGTfftK3/preview",
"https://docs.google.com/document/d/1V6hZmjQTLDx5HBZbNejTv_66JLlXmS6A/preview",
"https://docs.google.com/document/d/15Bw4F1qpuxdF4vPRMa7LIvGN5xHD3Jl7/preview",
"https://docs.google.com/document/d/1uPczKnn7TdSn1mWx0YhThjVoGb16lxG3/preview",
"https://docs.google.com/document/d/1eqmJHjY2FvqWmJmZdbWjtL7TOdG1raAX/preview",
"https://docs.google.com/document/d/1MI1EE_XJivTGaQih7A0iBoKYrm_A5SrB/preview",
"https://docs.google.com/document/d/19D7m5J29aZrJ5931xmNoq3ZzwFqmrz7l/preview",
"https://docs.google.com/document/d/1oZRrlKq_BxD3sbZ7WMT19HZRT_yk5nmv/preview",
"https://docs.google.com/document/d/1hOQ7y6KLzufJZxA10iRCpS_APmvp4Rj4/preview",
"https://docs.google.com/document/d/176GepFxiiOHUseOxkd-VyaaT22giFy7E/preview",
"https://docs.google.com/document/d/1zdvsCDu4NJl1jOZYQRsRkTevgFKL1EVc/preview",
"https://docs.google.com/document/d/1INFbRrVI_pFMUUXNGLh1_4Cq_eAgbO-J/preview",
"https://docs.google.com/document/d/1q4_wD-j9moCKgJqGXRchoNCaemhX8m1K/preview",
"https://docs.google.com/document/d/1nNED3HFO0KWQpR3S-iQzYS3C5Ezqi-xv/preview",
"https://docs.google.com/document/d/1YkHnafaeXHIw9Jj3y7G3WwjN_6nHRgNs/preview",
"https://docs.google.com/document/d/1VMZ39F-D_AgP_ZDtgri5ADjlsC-ke5IQ/preview",
"https://docs.google.com/document/d/1z53FsE3OdNJBrDZtDuqIMYZxBnF9xQl-/preview",
"https://docs.google.com/document/d/1iPuyK2-pt7gwbRAbAKdMv9IIv8nkC1Tu/preview",
"https://docs.google.com/document/d/1sCcI_6wR5lyuAsfC83xlAQX8H4atdYBn/preview",
"https://docs.google.com/document/d/1HaGe09bSZ5PfE0AOjA16L1saIN6RNF59/preview",
"https://docs.google.com/document/d/19gPMT_5XMK-AwMjeiiwyolcabDYgfGRr/preview",
"https://docs.google.com/document/d/1yyKm1rmIr80q9Q6HlKerXQRZMwZGEuUh/preview",
"https://docs.google.com/document/d/1cJ8GbsaX6XTGL3_juTqoom8jVM3O0Gho/preview",
"https://docs.google.com/document/d/1yMfWb1vFc3TGDOf3pvgvnINTtCr2D2tF/preview",
"https://docs.google.com/document/d/1B2bqfitJrj2AtFEbAGVX6-ZuDbTCow0o/preview",
"https://docs.google.com/document/d/13Hxmr3PIfn3v_YA3YQqC2FXsihjifk8e/preview",
"https://docs.google.com/document/d/1uOevAakT22fnCagv_URG5z6POM4Qs2Bn/preview",
"https://docs.google.com/document/d/1vD78GqUJzwLOrrlVSr0rMw7fbj-ijHXi/preview",
"https://docs.google.com/document/d/19V6K-Cuo_F48Ka4RUpAO2u44z-ZxqDp6/preview",
"https://docs.google.com/document/d/1NTI260KDE4Avam6Y6RR9qWKyxoYghOLJ/preview",
"https://docs.google.com/document/d/1_e9bQoMcM8ljCRhmKeendUuSm1o2PGw9/preview",
"https://docs.google.com/document/d/1Qp219Q2tjAuyhesQNcMcu70VPbgCCRRp/preview",
"https://docs.google.com/document/d/1EFacerd6eKmDTud1P0kkYZSYW-YzQ4Ks/preview",
"https://docs.google.com/document/d/1-Gbrx-LIrGAoYLHss1hFw4TQx0a6MYlN/preview",
"https://docs.google.com/document/d/1MGivG5atAhTcYVtygDGo5Wv-oRynOVun/preview",
"https://docs.google.com/document/d/1PUIvioiz2HtxbDWW8ZEWvmMkgqP4pmh6/preview",
"https://docs.google.com/document/d/1kif-ZqPeD5xAZ7hYuy7eV5PQkHZqQFZI/preview",
"https://docs.google.com/document/d/1iMeUROfTixHHbx58xXjLLpVrr7ihF0hm/preview",
"https://docs.google.com/document/d/1_NAiqJ2NqLrfmukQf2iIFAWMuRn1tD9O/preview",
"https://docs.google.com/document/d/1vTyukAADd4EMdKHA1gqefEP6MeBpYUOq/preview"
    ]
  };

  const classes = document.querySelectorAll(".class-card");
  const lessonsView = document.getElementById("lessonsView");
  const classesView = document.getElementById("classesView");
  const container = document.getElementById("lessonContainer");
  const searchInput = document.getElementById("lessonSearch");
  const backBtn = document.getElementById("backToClasses");

  let currentLessons = [];

  if(classes.length && lessonsView && classesView && container){

    classes.forEach(card=>{
      card.addEventListener("click",()=>{
        const classId = card.dataset.class;
        const links = lessonsData[classId] || [];

        currentLessons = links.map((link,i)=>({
          title:"Урок №"+(i+1),
          link:link
        }));

        renderLessons(currentLessons);

        classesView.style.display="none";
        lessonsView.style.display="block";
      });
    });

    function renderLessons(list){
      container.innerHTML="";
      list.forEach(lesson=>{
        const div = document.createElement("div");
        div.className="doc-card";
        div.innerHTML=`<div class="doc-icon docx">DOC</div><h3>${lesson.title}</h3>`;
        div.addEventListener("click",()=>{
          window.open(lesson.link,"_blank");
        });
        container.appendChild(div);
      });
    }

    if(searchInput){
      searchInput.addEventListener("input",()=>{
        const value = searchInput.value.toLowerCase();
        const filtered = currentLessons.filter(l=>
          l.title.toLowerCase().includes(value)
        );
        renderLessons(filtered);
      });
    }

    if(backBtn){
      backBtn.addEventListener("click",()=>{
        lessonsView.style.display="none";
        classesView.style.display="grid";
      });
    }
  }

}

});