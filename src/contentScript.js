const displayBar = document.createElement('div');
displayBar.innerHTML = `
<section id="open_bar" class="w-[400px] max-h-screen">
<div class="absolute flex gap-4 py-4 px-5 justify-center items-center container ml-[50px] bottom-10 w-full h-[50px] rounded-full bg-[#141414] max-w-[400px] p-3">
        <div class="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
          <img src="https://res.cloudinary.com/abiolafasanya/image/upload/v1696059301/pause_kn1q0u.svg" alt="pause" class="w-[16px] h-[16px]" />
        </div>
        <div class="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
          <img src="https://res.cloudinary.com/abiolafasanya/image/upload/v1696059300/stop_eiqvni.svg" alt="" class="w-[20px] h-[20px]" />
        </div>
        <div class="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
          <img src="https://res.cloudinary.com/abiolafasanya/image/upload/v1696059299/video_bgajdt.svg" alt=" class="w-[18px] h-[18px]" />
        </div>
        <div class="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white">
          <img src="https://res.cloudinary.com/abiolafasanya/image/upload/v1696059302/audio_fmh6js.svg" alt="" class="w-[18px] h-[18px]" />
        </div>
        <div class="flex items-center justify-center rounded-full p-2 h-10 w-10 cursor-pointer bg-white/30">
          <img src="https://res.cloudinary.com/abiolafasanya/image/upload/v1696059301/delete_nnglbr.svg" alt=" class="w-[18px] h-[18px]" />
        </div>
    </div>
</section>
`

document.body.appendChild(displayBar)
console.log('hello');
