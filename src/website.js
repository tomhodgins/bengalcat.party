const fs = require('fs')
const glob = require('glob')
const jsts = require('../lib/jsts.js')

let site = {
  title: `BengalCat.Party`,
  description: `Pictures of George Franklin, the adventurous bengal cat`,
  keywords: `bengal cat kitten bengals feline bengal tabby cute adorable animal pictures photo gallery`
}

let galleries = [
  {
    title: `George zonked out on the bed`,
    url: `https://imgur.com/gallery/JjpQ3dz`,
    date: {day: 2, month: 5, year: 2018},
    description: `I walked in the room today to see George totally zonked out having his cat nap and sleeping on the bed. I couldn't resist taking some pictures to share`,
    keywords: `asleep sleeping sleepy napping nap`,
    images: ["https://i.imgur.com/jjjHLYV.jpg", "https://i.imgur.com/l3N34S9.jpg", "https://i.imgur.com/H8wVdVw.jpg", "https://i.imgur.com/JkjwsuF.jpg", "https://i.imgur.com/Bur6nPN.jpg", "https://i.imgur.com/dT9dhQE.jpg"]
  },
  {
    title: `George being a pillow this morning`,
    url: `https://imgur.com/gallery/QbkIn`,
    date: {day: 4, month: 4, year: 2018},
    description: `I woke up to an extra pillow this morning, George had his chubby little butt next to my pillow and tricked me into snuggling him :3`,
    keywords: `sneaky kitty pillow disguise hiding`,
    images: ["https://i.imgur.com/PspcYJY.jpg", "https://i.imgur.com/9eGWU61.jpg", "https://i.imgur.com/Ew9kabf.jpg", "https://i.imgur.com/kGQeYHZ.jpg"]
  },
  {
    title: `George napping on the chair`,
    url: `https://imgur.com/gallery/FCpJN`,
    date: {day: 22, month: 3, year: 2018},
    description: `More pictures of George sleeping on my chair, he didn't stop being cute after the first batch :3`,
    keywords: `napping nap asleep sleeping sleepy kitty chair office`,
    images: ["https://i.imgur.com/kXjGmJy.jpg", "https://i.imgur.com/ARWU4Jw.jpg", "https://i.imgur.com/mh3o4DY.jpg", "https://i.imgur.com/e928pJ4.jpg", "https://i.imgur.com/XDWkcby.jpg", "https://i.imgur.com/SCALNOK.jpg"],
  },
  {
    title: `George sleeping on my chair`,
    url: `https://imgur.com/gallery/df5zM`,
    date: {day: 22, month: 3, year: 2018},
    description: `Lately in the afternoons George has been falling asleep in my chair. It's his way of saying: “Stop working dad, let's snuggle!”`,
    keywords: `sleeping sleepy kitty napping naptime afternoon nap`,
    images: ["https://i.imgur.com/EqgfmHN.jpg", "https://i.imgur.com/pGfm3Cv.jpg", "https://i.imgur.com/vuAb7GX.jpg", "https://i.imgur.com/NtMGY2s.jpg", "https://i.imgur.com/y8rraEb.jpg", "https://i.imgur.com/JJtC0Ls.jpg", "https://i.imgur.com/KG1urV6.jpg", "https://i.imgur.com/XSVZo4j.jpg"],
  },
  {
    title: `I woke up like this`,
    url: `https://imgur.com/gallery/185lr`,
    date: {day: 18, month: 3, year: 2018},
    description: `The first day waking up after coming home from a week-long trip and I think the cats missed me :D`,
    keywords: `separation anxiety snuggly children`,
    images: ["https://i.imgur.com/UQ0CL4l.jpg"],
  },
  {
    title: `George`,
    url: `https://imgur.com/gallery/I9awI`,
    date: {day: 4, month: 1, year: 2018},
    description: `ITS GEORGE!`,
    keywords: `my baby george`,
    images: ["https://i.imgur.com/SuOZshE.jpg"],
  },
  {
    title: `I woke up and found them like this`,
    url: `https://imgur.com/gallery/CS6Ka`,
    date: {day: 27, month: 11, year: 2017},
    description: `George the bengal and his brother Gus the siamese snuggling on the couch`,
    keywords: `Gus siamese couch snuggles`,
    images: ["https://i.imgur.com/1PrXyG1.jpg", "https://i.imgur.com/ko1LAqm.jpg", "https://i.imgur.com/teWyTXJ.jpg", "https://i.imgur.com/vQqgxhF.jpg", "https://i.imgur.com/SkxJ3h2.jpg"],
  },
  {
    title: `George and Gus snuggling`,
    url: `https://imgur.com/gallery/VpqIc`,
    date: {day: 17, month: 11, year: 2017},
    description: `Gus's face in the bottom photo is a little overprotective of his baby cat brother`,
    keywords: `my son overprotective kitty sweet`,
    images: ["https://i.imgur.com/9FWByl3.jpg", "https://i.imgur.com/0A14DrQ.jpg", "https://i.imgur.com/IceBKgk.jpg"],
  },
  {
    title: `George's first birthday :3`,
    url: `https://imgur.com/gallery/KFUQT`,
    date: {day: 30, month: 10, year: 2017},
    description: `George wearing a birthday hat because he's a birthday cat!`,
    keywords: `first birthday hat party`,
    images: ["https://i.imgur.com/XiwDcWv.jpg", "https://i.imgur.com/pgnWs6p.jpg", "https://i.imgur.com/uTgYkPI.jpg", "https://i.imgur.com/QQj6fI8.jpg", "https://i.imgur.com/bKbglqY.jpg", "https://i.imgur.com/RD9WV5D.jpg", "https://i.imgur.com/IdvlWSf.jpg"],
  },
  {
    title: `Snuggletime with George and Gus`,
    url: `https://imgur.com/gallery/zwQdL`,
    date: {day: 11, month: 10, year: 2017},
    description: `Just some cat bros passed out on each other on the couch. What little angels…`,
    keywords: `two angels sleeping`,
    images: ["https://i.imgur.com/BdlwU3t.jpg", "https://i.imgur.com/xmJMzGI.jpg", "https://i.imgur.com/YXZFUsq.jpg", "https://i.imgur.com/jwoC0fy.jpg", "https://i.imgur.com/aagyck1.jpg", "https://i.imgur.com/1vSvmt0.jpg", "https://i.imgur.com/Y8RQWHz.jpg"],
  },
  {
    title: `Jaz and George watching CatTV`,
    url: `https://imgur.com/gallery/pc4Au`,
    date: {day: 28, month: 9, year: 2017},
    description: `Jaz the tuxedo cat and George the bengal watching cars and people going by in the parking lot`,
    keywords: `catTV people watching parking lot`,
    images: ["https://i.imgur.com/y9FI4UY.jpg", "https://i.imgur.com/4Ty1yls.jpg", "https://i.imgur.com/q3IJ8YH.jpg"],
  },
  {
    title: `Its Gus's adopt-a-versary!`,
    url: `https://imgur.com/gallery/PKjLk`,
    date: {day: 22, month: 9, year: 2017},
    description: `It's the anniversary of the day we brought sweet little Gus the siamese cat home from the animal shelter in Buffalo New York. Before coming to stay with his cat mom he lived a hard life on the streets. We're pretty sure he was part of a cat gang.`,
    keywords: `Gus adopt adoption rescue`,
    images: ["https://i.imgur.com/9YUl1rp.jpg", "https://i.imgur.com/jchi6SU.jpg", "https://i.imgur.com/m24Kg1g.jpg"],
  },
  {
    title: `George hopped in the tub!`,
    url: `https://imgur.com/gallery/mFYbH`,
    date: {day: 17, month: 8, year: 2017},
    description: `George isn't just unafraid of the water, sometimes he's actuvely curious! Tonight he hopped right in the tub with us and was standing in 3-4 inches of water.`,
    keywords: `water tub unafraid`,
    images: ["https://i.imgur.com/MNypJqo.jpg", "https://i.imgur.com/IqYidgP.jpg", "https://i.imgur.com/s7SoZrP.jpg"],
  },
  {
    title: `Cat trap`,
    url: `https://imgur.com/gallery/udfwk`,
    date: {day: 31, month: 7, year: 2017},
    description: `This box is a cat trap, wherever we put it down you're guaranteed to find a cat in a few moments…`,
    keywords: `trap prison jail cell`,
    images: ["https://i.imgur.com/33Tii8o.jpg"],
  },
  {
    title: `Sleepy deskmate`,
    url: `https://imgur.com/gallery/lIxvg`,
    date: {day: 21, month: 6, year: 2017},
    description: `I've got an extra cute helper at my office desk today :D`,
    keywords: `sleepy desk helper office buddy coworker mate`,
    images: ["https://i.imgur.com/LZ4Vcss.jpg"],
  },
  {
    title: `My little cat helpers`,
    url: `https://imgur.com/gallery/rT0D4`,
    date: {day: 14, month: 6, year: 2017},
    description: `Today I walked into the bedroom to find George the bengal and Gus the siamese hanging out in one little box inside the cat tree. I'm not sure if they were having a top-secret meeting or not, but I didn't get an invite to this :P`,
    keywords: `important business meeting`,
    images: ["https://i.imgur.com/KY4WQqU.jpg", "https://i.imgur.com/j1DFG1f.jpg", "https://i.imgur.com/yb7I9QP.jpg", "https://i.imgur.com/Ivdl0Yw.jpg", "https://i.imgur.com/awAP6IQ.jpg", "https://i.imgur.com/CidHODV.jpg", "https://i.imgur.com/W9PoIcJ.jpg", "https://i.imgur.com/alU67mX.jpg"],
  },
  {
    title: `Gus using George like a pillow`,
    url: `https://imgur.com/gallery/ufJPG`,
    date: {day: 31, month: 5, year: 2017},
    description: `Gus the siamese using George the bengal like a pillow and kitty don't even care 😂`,
    keywords: `Gus pillow`,
    images: ["https://i.imgur.com/WHh3rxar.jpg", "https://i.imgur.com/Zrwpugbr.jpg"],
  },
  {
    title: `George and Gus snuggling`,
    url: `https://imgur.com/gallery/NLeaP`,
    date: {day: 21, month: 5, year: 2017},
    description: `It's hard to get any work done with these two adorable babies spooning on my desk when I'm trying to focus!`,
    keywords: `stretch spots spotted coat pelt fur`,
    images: ["https://i.imgur.com/KIrOmAPr.jpg", "https://i.imgur.com/N6IDKgvr.jpg", "https://i.imgur.com/oesc61mr.jpg", "https://i.imgur.com/vPxx50Ir.jpg"],
  },
  {
    title: `George's furball removal`,
    url: `https://imgur.com/gallery/uuEmg`,
    date: {day: 18, month: 4, year: 2017},
    description: `George went to get his two little furballs removed today - no future bengal babies for this beautiful boy`,
    keywords: `fixed neuter neutering neutered spayed`,
    images: ["https://i.imgur.com/RVvGsAEr.jpg", "https://i.imgur.com/DHo5VPSr.jpg", "https://i.imgur.com/9hxKWSKr.jpg", "https://i.imgur.com/VvQXXSNr.jpg", "https://i.imgur.com/LzUmA9Ur.jpg"],
  },
  {
    title: `George sleeping in a pillow`,
    url: `https://imgur.com/gallery/SgzHJ`,
    date: {day: 13, month: 4, year: 2017},
    description: `Today george cooed like a pigeon, then crawled inside of a pillow case started thrashing around. Then once he was satisfied he flopped over and fell asleep with his head poking out.`,
    keywords: `sleeping inside pillow pillowcase sheets bedding blankets cozy`,
    images: ["https://i.imgur.com/RxX0x1Kr.jpg", "https://i.imgur.com/c5PQmOor.jpg", "https://i.imgur.com/RFzDbqwr.jpg"],
  },
  {
    title: `George in a pillowcase`,
    url: `https://imgur.com/gallery/PLKQ5`,
    date: {day: 13, month: 4, year: 2017},
    description: `George hiding in a pillowcase`,
    keywords: `peekaboo hiding pillowcasepillow case`,
    images: ["https://i.imgur.com/yBEPrzVr.jpg", "https://i.imgur.com/lxyu2E2r.jpg", "https://i.imgur.com/eoFyrzCr.jpg", "https://i.imgur.com/gTCMqHPr.jpg"],
  },
  {
    title: `George and Gus`,
    url: `https://imgur.com/gallery/4zwWJ`,
    date: {day: 11, month: 4, year: 2017},
    description: `Size comparison of George the bengal and his big brother Gus. George is about 6 months old and Gus is about 6 years old.`,
    keywords: `size comparison itty bitty giant tiny monster leopard panther`,
    images: ["https://i.imgur.com/e0r4GwYr.jpg", "https://i.imgur.com/t2pVLzBr.jpg", "https://i.imgur.com/CUufTE6r.jpg", "https://i.imgur.com/5YJXno4r.jpg", "https://i.imgur.com/5NLAftXr.jpg", "https://i.imgur.com/XJcfayKr.jpg"],
  },
  {
    title: `George napping`,
    url: `https://imgur.com/gallery/xehMr`,
    date: {day: 8, month: 3, year: 2017},
    description: `George having a nap`,
    keywords: `napping baby kitten`,
    images: ["https://i.imgur.com/BRUOzAkr.jpg", "https://i.imgur.com/xZKDjpDr.jpg", "https://i.imgur.com/zWfrRS7r.jpg"],
  },
  {
    title: `George the bengal!`,
    url: `https://imgur.com/gallery/upIRS`,
    date: {day: 13, month: 2, year: 2017},
    description: `George the bengal kitten sleeping with his stuffed crocodile on the bed. What a sweetie! He doesn't even look real, sometimes he just looks like a cartoon tiger.`,
    keywords: `tiger cub sleeping kitten crocodile plushie`,
    images: ["https://i.imgur.com/OdkW9vjr.jpg", "https://i.imgur.com/BIaw8vbr.jpg", "https://i.imgur.com/1sng5IDr.jpg", "https://i.imgur.com/mvVaosLr.jpg", "https://i.imgur.com/Opbbj6Or.jpg", "https://i.imgur.com/CMYhRKxr.jpg", "https://i.imgur.com/BpBzwxEr.jpg", "https://i.imgur.com/K0NsnH5r.jpg", "https://i.imgur.com/VaOR35or.jpg", "https://i.imgur.com/vDOBJUyr.jpg"],
  },
  {
    title: `George and Ali the Gator`,
    url: `https://imgur.com/gallery/PB0gv`,
    date: {day: 11, month: 2, year: 2017},
    description: `George and his new friend Ali the Gator, a stuffed crocodile he can play with. I think he misses his brothers and sisters, so giving him something his size he can snuggle with might help.`,
    keywords: `ali gator crocodile plushie toy`,
    images: ["https://i.imgur.com/3c0Cvx1.jpg", "https://i.imgur.com/8qJXO6Zr.jpg"],
  },
  {
    title: `George playing with the faucet!`,
    url: `https://imgur.com/gallery/Fr4kL`,
    date: {day: 9, month: 2, year: 2017},
    description: `George the bengal pawing at the water coming out of the faucet. He loves to play with the water.`,
    keywords: `paw faucet water sink splash curious stream drops droplets`,
    images: ["https://i.imgur.com/W0ElFqWr.jpg", "https://i.imgur.com/HEi1MuYr.jpg", "https://i.imgur.com/861AGyXr.jpg"],
  },
  {
    title: `Gus && George`,
    url: `https://imgur.com/gallery/zRWqG`,
    date: {day: 5, month: 2, year: 2017},
    description: `Gus the siamese and George the bengal`,
    keywords: `gus bff best friends catfriends forever`,
    images: ["https://i.imgur.com/tFD9uZGr.jpg", "https://i.imgur.com/EdWwGiDr.jpg", "https://i.imgur.com/xWcpnCwr.jpg", "https://i.imgur.com/vnYHHBYr.jpg"],
  },
  {
    title: `George napping on the cat tree`,
    url: `https://imgur.com/gallery/rAzpg`,
    date: {day: 24, month: 1, year: 2017},
    description: `George the bengal sleeping at the tippy top platform of the cat tree. This is over my head, about 6-7 feet off the floor`,
    keywords: `cat tree platform elevated hammock lookout`,
    images: ["https://i.imgur.com/xnnxXU5r.jpg", "https://i.imgur.com/rk2GQtkr.jpg", "https://i.imgur.com/DyfxJwqr.jpg", "https://i.imgur.com/s063vVGr.jpg", "https://i.imgur.com/4r0AmUDr.jpg", "https://i.imgur.com/ez7k8x3r.jpg", "https://i.imgur.com/TaAAp0gr.jpg", "https://i.imgur.com/iiQLaBvr.jpg", "https://i.imgur.com/Ip0RypMr.jpg"],
  },
  {
    title: `George the bengal`,
    url: `https://imgur.com/gallery/20B0x`,
    date: {day: 16, month: 1, year: 2017},
    description: `Just some cute pictures of my adorable baby cat George`,
    keywords: `baby george`,
    images: ["https://i.imgur.com/gj4JaSur.jpg", "https://i.imgur.com/4u0eXGIr.jpg", "https://i.imgur.com/ZKAbUUJr.jpg", "https://i.imgur.com/5tvcQYCr.jpg", "https://i.imgur.com/voc21AEr.jpg"],
  },
  {
    title: `Baby George`,
    url: `https://imgur.com/gallery/Hs7Pb`,
    date: {day: 11, month: 1, year: 2017},
    description: `Baby george and his cute little face`,
    keywords: `baby george`,
    images: ["https://i.imgur.com/RQmPEIjr.jpg"],
  },
  {
    title: `Our Cat Family: Jaz the Tuxedo, Gus the Siamese, & George the Bengal`,
    url: `https://imgur.com/gallery/yx8N4`,
    date: {day: 10, month: 1, year: 2017},
    description: `Our cat family, made of Jaz the tuxedo, Gus the siamese and George the bengal :D Our house has never been happier!`,
    keywords: `Jasmine Augustus George family`,
    images: ["https://i.imgur.com/YbiI2amr.jpg", "https://i.imgur.com/H2bWGQgr.jpg", "https://i.imgur.com/soBnxDEr.jpg", "https://i.imgur.com/cXREAM9r.jpg", "https://i.imgur.com/0HgWZaHr.jpg", "https://i.imgur.com/L9BAzz3r.jpg", "https://i.imgur.com/8lmyMO2r.jpg"],
  },
  {
    title: `George snuzzling Gus`,
    url: `https://imgur.com/gallery/3Ha09`,
    date: {day: 8, month: 1, year: 2017},
    description: `Gus snuzzling his baby brother George`,
    keywords: `gus snuggle snuzzle snoozle`,
    images: ["https://i.imgur.com/xB6CxxEr.jpg", "https://i.imgur.com/28gmWq1r.jpg", "https://i.imgur.com/qwm1YKir.jpg", "https://i.imgur.com/zE8VkIbr.jpg", "https://i.imgur.com/2L9KPi3r.jpg", "https://i.imgur.com/kJzYK54r.jpg", "https://i.imgur.com/HwcuS0Sr.jpg", "https://i.imgur.com/s3KdTk6r.jpg"],
  },
  {
    title: `Gus and George`,
    url: `https://imgur.com/gallery/wMi7h`,
    date: {day: 8, month: 1, year: 2017},
    description: `A big photo dump of cute George the bengal and Gus the siamese photos.`,
    keywords: `Gus siamese`,
    images: ["https://i.imgur.com/9ZpA23r.jpg", "https://i.imgur.com/NSydJum.jpg", "https://i.imgur.com/0Zu8gkX.jpg", "https://i.imgur.com/0RvSBhK.jpg", "https://i.imgur.com/Iinh9jN.jpg", "https://i.imgur.com/6bHWQOo.jpg", "https://i.imgur.com/PfEkQNz.jpg", "https://i.imgur.com/ilRlYjH.jpg", "https://i.imgur.com/lXTjx1o.jpg", "https://i.imgur.com/gzYYzrm.jpg", "https://i.imgur.com/T6Ubmq2.jpg", "https://i.imgur.com/yIgl87t.jpg", "https://i.imgur.com/uNXfKo0.jpg", "https://i.imgur.com/WkVKuQc.jpg", "https://i.imgur.com/UdLwJaz.jpg", "https://i.imgur.com/fwkDJfz.jpg", "https://i.imgur.com/fSXMq9E.jpg", "https://i.imgur.com/MqHrZ6p.jpg", "https://i.imgur.com/IpsfdcK.jpg", "https://i.imgur.com/iDwD1en.jpg", "https://i.imgur.com/pXOmOi7.jpg", "https://i.imgur.com/AZLDg5P.jpg", "https://i.imgur.com/V6ZNpc6.jpg", "https://i.imgur.com/14RCfCp.jpg", "https://i.imgur.com/qutIvWg.jpg", "https://i.imgur.com/DUnNTqY.jpg", "https://i.imgur.com/xbItWGh.jpg", "https://i.imgur.com/iqPjcVW.jpg", "https://i.imgur.com/z2RHT67.jpg", "https://i.imgur.com/0ROvM0o.jpg", "https://i.imgur.com/hKaV33c.jpg", "https://i.imgur.com/6fgdBdp.jpg", "https://i.imgur.com/B8O4UdN.jpg", "https://i.imgur.com/CxKCq5l.jpg", "https://i.imgur.com/3UNAETa.jpg", "https://i.imgur.com/4KFn6V5.jpg", "https://i.imgur.com/JL07AjL.jpg", "https://i.imgur.com/BGEwgng.jpg", "https://i.imgur.com/pkOGlxT.jpg", "https://i.imgur.com/bz57FxF.jpg", "https://i.imgur.com/N3rtyga.jpg", "https://i.imgur.com/A8oErFq.jpg", "https://i.imgur.com/GyF2A1M.jpg", "https://i.imgur.com/t0dWzG3.jpg", "https://i.imgur.com/uEPit3E.jpg", "https://i.imgur.com/uSBkGZE.jpg", "https://i.imgur.com/pQ9y4gA.jpg"],
  },
  {
    title: `George the bengal cat`,
    url: `https://imgur.com/gallery/HMssT`,
    date: {day: 31, month: 12, year: 2016},
    description: `Pictures of our new kitten George. He's so adorable.`,
    keywords: `kitten baby`,
    images: ["https://i.imgur.com/B2Qqudx.jpg", "https://i.imgur.com/zpXCHBY.jpg", "https://i.imgur.com/spr4rXf.jpg", "https://i.imgur.com/y3mKJqV.jpg", "https://i.imgur.com/KWwLm2Y.jpg", "https://i.imgur.com/uSx3bxF.jpg", "https://i.imgur.com/U1ZykV7.jpg", "https://i.imgur.com/UKEWkUi.jpg", "https://i.imgur.com/HMlqKMv.jpg", "https://i.imgur.com/7yoPDGx.jpg", "https://i.imgur.com/TgSgWES.jpg", "https://i.imgur.com/wj7yZrr.jpg", "https://i.imgur.com/Pqa1hHw.jpg", "https://i.imgur.com/sRfNJAA.jpg", "https://i.imgur.com/AOf6mJu.jpg", "https://i.imgur.com/wJamRo1.jpg", "https://i.imgur.com/EfBlXOA.jpg"],
  },
  {
    title: `George's second day`,
    url: `https://imgur.com/gallery/14KAF`,
    date: {day: 30, month: 12, year: 2016},
    description: `Pictures of George's second day at home with us. I can't get enough of his fluffy little face.`,
    keywords: `new baby kitten adopted home`,
    images: ["https://i.imgur.com/87Z41Gl.jpg", "https://i.imgur.com/ODz2Cdt.jpg", "https://i.imgur.com/3MadNzE.jpg", "https://i.imgur.com/UjzVlje.jpg", "https://i.imgur.com/8UnjMlq.jpg", "https://i.imgur.com/4frz0dW.jpg", "https://i.imgur.com/m4nm6mv.jpg", "https://i.imgur.com/rx9lRsF.jpg", "https://i.imgur.com/kI1QxmT.jpg", "https://i.imgur.com/uBC44KA.jpg", "https://i.imgur.com/qr09IwP.jpg", "https://i.imgur.com/XA3oDd0.jpg", "https://i.imgur.com/RwCNSlA.jpg", "https://i.imgur.com/yEHJ1hj.jpg", "https://i.imgur.com/1YpBdPJ.jpg", "https://i.imgur.com/925fE0H.jpg", "https://i.imgur.com/VJbvJNg.jpg", "https://i.imgur.com/qjVbDDn.jpg", "https://i.imgur.com/l2mDhcF.jpg", "https://i.imgur.com/DbyDgpi.jpg", "https://i.imgur.com/egJUo4a.jpg", "https://i.imgur.com/2gdzB8c.jpg", "https://i.imgur.com/zbgqmeG.jpg", "https://i.imgur.com/hv0ZauX.jpg", "https://i.imgur.com/hFkBM8A.jpg", "https://i.imgur.com/KdnbZ2h.jpg", "https://i.imgur.com/l691Gpj.jpg", "https://i.imgur.com/Spb4CIw.jpg", "https://i.imgur.com/QofhXHn.jpg", "https://i.imgur.com/gVjJqZU.jpg", "https://i.imgur.com/7ysNpu7.jpg", "https://i.imgur.com/tGpvHjZ.jpg", "https://i.imgur.com/VfNMHY5.jpg", "https://i.imgur.com/vWc6mPo.jpg", "https://i.imgur.com/39XoubI.jpg", "https://i.imgur.com/0Jd2EOJ.jpg", "https://i.imgur.com/CI4BKpD.jpg", "https://i.imgur.com/o68ONwW.jpg", "https://i.imgur.com/3w5ZxEU.jpg", "https://i.imgur.com/A54Ebn4.jpg", "https://i.imgur.com/tv8rYKd.jpg", "https://i.imgur.com/cuxO0Xp.jpg", "https://i.imgur.com/WjINyfh.jpg", "https://i.imgur.com/B0FQKvy.jpg", "https://i.imgur.com/fradQK8.jpg", "https://i.imgur.com/WdIAkWP.jpg", "https://i.imgur.com/vmHle2w.jpg", "https://i.imgur.com/BA5ECOc.jpg", "https://i.imgur.com/dKLRZCL.jpg", "https://i.imgur.com/PTgXvPZ.jpg"],
  },
  {
    title: `George's first nap at home`,
    url: `https://imgur.com/gallery/JCU2m`,
    date: {day: 0, month: 12, year: 2016},
    description: `George's very first day at home. I can't wait to share pictures of this little guy growing up.`,
    keywords: `George first home nap adopted adoption day new`,
    images: ["https://i.imgur.com/TFCHIpv.jpg", "https://i.imgur.com/yMrWSBX.jpg", "https://i.imgur.com/WvXuNLU.jpg", "https://i.imgur.com/ohYRpqL.jpg", "https://i.imgur.com/5Lbiagf.jpg", "https://i.imgur.com/hOBuiOO.jpg", "https://i.imgur.com/OwgW249.jpg", "https://i.imgur.com/4xKCg9X.jpg", "https://i.imgur.com/RUed38H.jpg", "https://i.imgur.com/M62hdJj.jpg", "https://i.imgur.com/aZDGnQl.jpg", "https://i.imgur.com/QFmedEn.jpg", "https://i.imgur.com/EJqPJLl.jpg", "https://i.imgur.com/4eV7X0a.jpg", "https://i.imgur.com/S841EWu.jpg", "https://i.imgur.com/P7mUGk4.jpg", "https://i.imgur.com/6dmiZS7.jpg", "https://i.imgur.com/CZ7K6Xg.jpg", "https://i.imgur.com/NaDytKH.jpg", "https://i.imgur.com/G5Y7Fvi.jpg", "https://i.imgur.com/nU9srMJ.jpg", "https://i.imgur.com/Zj0q77Q.jpg", "https://i.imgur.com/cHMP0nO.jpg", "https://i.imgur.com/RZOWsyQ.jpg", "https://i.imgur.com/6CRZ1ff.jpg", "https://i.imgur.com/HAnAw3H.jpg", "https://i.imgur.com/PL4AMg5.jpg", "https://i.imgur.com/FHjBkGl.jpg", "https://i.imgur.com/JNM0cAd.jpg", "https://i.imgur.com/url6e0g.jpg", "https://i.imgur.com/Bl93EiZ.jpg", "https://i.imgur.com/a1IcWMo.jpg", "https://i.imgur.com/6GBqfhh.jpg"],
  },

  /*

  {
    title: ``,
    url: ``,
    date: {day: 0, month: 0, year: 20??},
    description: ``,
    keywords: ``,
    images: [],
  },

  // Find gallery array by running this on the JS console

  // [...document.querySelectorAll('.js-post-image-thumb')].map(item => item.src)

  // or

  // [...document.querySelectorAll('.post-image-placeholder')].map(item => item.src)

  // or

  // [...document.querySelectorAll('.post-grid-image')].map(item => `https:${item.dataset.href}`)

  */
]

function slug(string) {

  return string.toLowerCase().replace(/\W/g, '-')

}

function shuffle(array=[]) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1))

    const temp = array[i]

    array[i] = array[j]

    array[j] = temp

  }

  return array

}

const month = [0, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

// compile css
jsts.compile('style.css.tl', '../style.css', {})

// compile index.html
jsts.compile('index.html.tl', '../index.html', {site, galleries, slug})

// compile gallery pages
galleries.forEach(gallery =>

  jsts.compile('gallery.html.tl',`../${slug(gallery.title)}.html`, {site, gallery, month, shuffle}))

// Output sitemap.txt
fs.writeFileSync('../sitemap.txt',

  glob.sync('../*.html')
    .map(path => path.replace(/^..\//, ''))
    .join('\n')

)