/*

# Adding Galleries

## Step 1: Load imgur gallery submissions

- https://imgur.com/user/innovati/submitted

## Step 2: Click on desired gallery

## Step 3: Shrink browser zoom to fit all gallery images on screen

## Step 4: Run code in JS console to extract image URLs

[...document.querySelectorAll('.post-image-placeholder')]
  .map(img => img.src)
  .map(src => src.replace(/g.jpg$/m, '.jpg'))

or

[...document.querySelectorAll('.js-post-image-thumb')]
  .map(img => img.src)

or

[...document.querySelectorAll('.post-grid-image')]
  .map(img => `https:${img.dataset.href}`)

## Step 5: Add new gallery object to array below

  {
    title: ``,
    url: ``,
    date: {day: 0, month: 0, year: 2018},
    description: ``,
    keywords: ``,
    images: [],
  },

## Alternate Step 4 & 5: Paste template into JS console and copy object

`
  {
    title: \`${document.querySelector('h1.post-title').innerHTML}\`,
    url: \`${location.href}\`,
    date: {day: ${
      new Date(
        document.querySelector('.post-title-meta > span:last-of-type')
          .title
      ).getDate()
    }, month: ${
      new Date(
        document.querySelector('.post-title-meta > span:last-of-type')
          .title
      ).getMonth() + 1
    }, year: ${
      new Date(
        document.querySelector('.post-title-meta > span:last-of-type')
          .title
      ).getFullYear()
    }},
    description: \`\`,
    keywords: \`\`,
    images: [${
      [...document.querySelectorAll('.post-image-placeholder')]
        .map(img => img && img.src)
        .map(src => src && `"${src.replace(/g.jpg$/m, '.jpg')}"`)
        .join(', ')
    }]
  },
`

*/

module.exports = [

  {
    title: `Trippin on silvervine and catnip`,
    url: `https://imgur.com/gallery/JWRuN3U`,
    date: {day: 25, month: 8, year: 2018},
    description: `The cats were getting low on catnip, so I picked up some new catnip and got a variety that was blended with silvervine. If you were ever wondering if bengals like catnip and silvervine, scroll down for your answer…`,
    keywords: `george tripping catnip silvervine high kittenweed`,
    images: ["https://i.imgur.com/SGkHTIgr.jpg", "https://i.imgur.com/YYj478hr.jpg", "https://i.imgur.com/egipF4ar.jpg"]
  },
  {
    title: `Office Bros`,
    url: `https://imgur.com/gallery/zscZWkB`,
    date: {day: 17, month: 8, year: 2018},
    description: `Some photos from a couple of different days recently when I've walked into the offiuce to catch George and Gus snuggled up to one another on the bed.`,
    keywords: `george gus office snuggle`,
    images: ["https://i.imgur.com/eHwX7Xtr.jpg", "https://i.imgur.com/ruDAYQWr.jpg", "https://i.imgur.com/If8aUd6r.jpg", "https://i.imgur.com/FXB7TI9r.jpg", "https://i.imgur.com/MvL5jqAr.jpg", "https://i.imgur.com/E4ScpqSr.jpg", "https://i.imgur.com/dWydSi6r.jpg"]
  },
  {
    title: `George's Outdoor Adventure`,
    url: `https://imgur.com/gallery/qyaUoEh`,
    date: {day: 5, month: 8, year: 2018},
    description: `George had been longingly looking into the hallway, and watching Cat TV so I decided he should come outside with me to the backyard on a little adventure. I put him in a harness, and put a leash on him, and also carried him outside in a carrier. He was very loud and scared at first, but once he had surveyed the landscape long enough he came out an snuggled up to me, as well as sniffed around like a little puppy. It might be a while before I take him out of the house again, but the times when I do are always so rewarding :3`,
    keywords: `george outdoor picnic adventure backyard wild nature`,
    images: ["https://i.imgur.com/l2iZ1Clr.jpg", "https://i.imgur.com/HEquU7Ur.jpg", "https://i.imgur.com/BODCcNCr.jpg"]
  },
  {
    title: `You can change a bed but you can't change cats`,
    url: `https://imgur.com/gallery/4UcZXOg`,
    date: {day: 29, month: 7, year: 2018},
    description: `George, Gus, and Jaz wouldn't stay off the bed while we changed it and washed the sheets. Now the mattress pad is covered in hair too! 🤦‍♂️`,
    keywords: `George Gus Jaz Office Bed Old Habits`,
    images: ["https://i.imgur.com/fbxrLel.jpg", "https://i.imgur.com/NlEj708.jpg", "https://i.imgur.com/RQT48PF.jpg", "https://i.imgur.com/ZnaMvZ4.jpg", "https://i.imgur.com/SGHWLId.jpg", "https://i.imgur.com/Pko6HIV.jpg", "https://i.imgur.com/D8TQaDN.jpg", "https://i.imgur.com/YJ0X4RE.jpg"]
  },
  {
    title: `Jasmine is Queen of the Bath Mat`,
    url: `https://imgur.com/gallery/oG98MSJ`,
    date: {day: 7, month: 7, year: 2018},
    description: `This caturday George and Gus spent a while on the office bed grooming each other while Jasmine sat in the bathroom on the bath mat like a queen on her throne.`,
    keywords: `Jasmine George Gus Bath Mat Queen`,
    images: ["https://i.imgur.com/DszmFdL.jpg", "https://i.imgur.com/iQCSviQ.jpg", "https://i.imgur.com/K4CDpdh.jpg", "https://i.imgur.com/lCkkNPW.jpg", "https://i.imgur.com/sTZChYM.jpg"]
  },
  {
    title: `Napping on the Office Bed`,
    url: `https://imgur.com/a/HZHuXmv`,
    date: {day: 3, month: 7, year: 2018},
    description: `George and Gus napping on the bed in the office, intertwining their lil stompers as they sleep.`,
    keywords: `george gus nap office bed`,
    images: ["https://i.imgur.com/MsvxhsA.jpg", "https://i.imgur.com/JCfCkOF.jpg"]
  },
  {
    title: `Three on a Tree`,
    url: `https://imgur.com/gallery/mysp8yi`,
    date: {day: 15, month: 6, year: 2018},
    description: `The whole cat family sitting on the cat tree: George the bengal, Gus the siamese, and a slightly hesitant Jaz the tuxedo who I may have placed there slightly against her will…`,
    keywords: `cat tree George Gus Jaz family`,
    images: ["https://i.imgur.com/GdfXgD0.jpg", "https://i.imgur.com/5tVDiWs.jpg", "https://i.imgur.com/4uuYV3m.jpg", "https://i.imgur.com/CiezfBR.jpg", "https://i.imgur.com/7wA3ShE.jpg", "https://i.imgur.com/Aw3bZp2.jpg", "https://i.imgur.com/B6YdsUm.jpg"]
  },
  {
    title: `Tiny Siamese Jellybeans`,
    url: `https://imgur.com/gallery/IJTMhh2`,
    date: {day: 13, month: 6, year: 2018},
    description: `I caught Gus asleep on the bed with three of his four stompers together. Here are some pictures of his cute sleeping face, his fur, and those little pink jellybeans. 🤗`,
    keywords: `Gus cat feet jellybean toes siamese`,
    images: ["https://i.imgur.com/8xGYRBF.jpg", "https://i.imgur.com/hHUjClU.jpg", "https://i.imgur.com/KG39ZCA.jpg", "https://i.imgur.com/hsbL0Ce.jpg", "https://i.imgur.com/pSJqVgz.jpg"],
  },
  {
    title: `Grooming Time`,
    url: `https://imgur.com/gallery/QCPQ0IF`,
    date: {day: 10, month: 6, year: 2018},
    description: `Today George woke up from his nap with a squeak, then came limping into the office where Gus had been siting on the bed. I picked George up and placed him next to Gus and then the most adorable cat grooming party happened 🐱👅🐯`,
    keywords: `groom grooming brothers Gus siamese`,
    images: ['https://i.imgur.com/IL5TAml.jpg', 'https://i.imgur.com/jiw3f04.jpg', 'https://i.imgur.com/M2hSuKE.jpg', 'https://i.imgur.com/gEbz3ps.jpg', 'https://i.imgur.com/q44lBd0.jpg', 'https://i.imgur.com/ssHGZYB.jpg', 'https://i.imgur.com/gYWq37z.jpg'],
  },
  {
    title: `Ghost Hunting`,
    url: `https://imgur.com/gallery/CNYT6Fm`,
    date: {day: 31, month: 5, year: 2018},
    description: `Catsitting George's half-sister Ghost. She has the same dad as George (Squilliam) but her mom is Tigra, and George was born to Wolverina`,
    keywords: `Ghost hunting silver leopard sister Tigra baby sibling`,
    images:  ['https://i.imgur.com/oQZLnkJ.jpg', 'https://i.imgur.com/TWCMsIg.jpg', 'https://i.imgur.com/xWeA1gf.jpg', 'https://i.imgur.com/EgwsKpP.jpg', 'https://i.imgur.com/aw7zYUs.jpg', 'https://i.imgur.com/WOBpIyh.jpg', 'https://i.imgur.com/gZbSGTi.jpg', 'https://i.imgur.com/ruXKgoK.jpg', 'https://i.imgur.com/XzjtoEo.jpg'],
  },
  {
    title: 'Ceiling Inspection',
    url: 'https://imgur.com/gallery/00caKVk',
    date: {day: 22, month: 5, year: 2018},
    description: `George enjoys hopping up on top of closet doors. Here he is just a few inches from the ceiling!`,
    keywords: 'George ceiling closet door climb jump vertical office',
    images: ['https://i.imgur.com/UmdNdVv.jpg', 'https://i.imgur.com/VUDkEbn.jpg', 'https://i.imgur.com/PzckfhP.jpg']
  },
  {
    title: `George zonked out on the bed`,
    url: `https://imgur.com/gallery/JjpQ3dz`,
    date: {day: 2, month: 5, year: 2018},
    description: `I walked in the room today to see George totally zonked out having his cat nap and sleeping on the bed. I couldn't resist taking some pictures to share`,
    keywords: `George asleep sleeping sleepy napping nap naptime bed jellybeans`,
    images: ['https://i.imgur.com/jjjHLYV.jpg', 'https://i.imgur.com/l3N34S9.jpg', 'https://i.imgur.com/H8wVdVw.jpg', 'https://i.imgur.com/JkjwsuF.jpg', 'https://i.imgur.com/Bur6nPN.jpg', 'https://i.imgur.com/dT9dhQE.jpg']
  },
  {
    title: `George being a pillow this morning`,
    url: `https://imgur.com/gallery/QbkIn`,
    date: {day: 4, month: 4, year: 2018},
    description: `I woke up to an extra pillow this morning, George had his chubby little butt next to my pillow and tricked me into snuggling him :3`,
    keywords: `George sneaky kitty fur pillow disguise camoflage hiding sleep`,
    images: ['https://i.imgur.com/PspcYJY.jpg', 'https://i.imgur.com/9eGWU61.jpg', 'https://i.imgur.com/Ew9kabf.jpg', 'https://i.imgur.com/kGQeYHZ.jpg']
  },
  {
    title: `George napping on the chair`,
    url: `https://imgur.com/gallery/FCpJN`,
    date: {day: 22, month: 3, year: 2018},
    description: `More pictures of George sleeping on my chair, he didn't stop being cute after the first batch :3`,
    keywords: `George napping nap asleep sleeping sleepy kitty chair office`,
    images: ['https://i.imgur.com/kXjGmJy.jpg', 'https://i.imgur.com/ARWU4Jw.jpg', 'https://i.imgur.com/mh3o4DY.jpg', 'https://i.imgur.com/e928pJ4.jpg', 'https://i.imgur.com/XDWkcby.jpg', 'https://i.imgur.com/SCALNOK.jpg'],
  },
  {
    title: `George sleeping on my chair`,
    url: `https://imgur.com/gallery/df5zM`,
    date: {day: 22, month: 3, year: 2018},
    description: `Lately in the afternoons George has been falling asleep in my chair. It's his way of saying: “Stop working dad, it's snuggletime!”`,
    keywords: `George sleeping sleepy kitty napping naptime afternoon nap chair office Jasmine Jaz jellybeans`,
    images: ['https://i.imgur.com/EqgfmHN.jpg', 'https://i.imgur.com/pGfm3Cv.jpg', 'https://i.imgur.com/vuAb7GX.jpg', 'https://i.imgur.com/NtMGY2s.jpg', 'https://i.imgur.com/y8rraEb.jpg', 'https://i.imgur.com/JJtC0Ls.jpg', 'https://i.imgur.com/KG1urV6.jpg', 'https://i.imgur.com/XSVZo4j.jpg'],
  },
  {
    title: `I woke up like this`,
    url: `https://imgur.com/gallery/185lr`,
    date: {day: 18, month: 3, year: 2018},
    description: `Waking up the first day after coming home from a week-long trip… and I think the cats missed me :D`,
    keywords: `separation anxiety snuggly children bed bedroom Gus George catdad`,
    images: ['https://i.imgur.com/UQ0CL4l.jpg'],
  },
  {
    title: `George`,
    url: `https://imgur.com/gallery/I9awI`,
    date: {day: 4, month: 1, year: 2018},
    description: `ITS GEORGE!`,
    keywords: `my baby George catdad`,
    images: ['https://i.imgur.com/SuOZshE.jpg'],
  },
  {
    title: `I woke up and found them like this`,
    url: `https://imgur.com/gallery/CS6Ka`,
    date: {day: 27, month: 11, year: 2017},
    description: `George the bengal and his brother Gus the siamese snuggling on the couch sharing the heating pad.`,
    keywords: `Gus siamese couch snuggles heating pad`,
    images: ['https://i.imgur.com/1PrXyG1.jpg', 'https://i.imgur.com/ko1LAqm.jpg', 'https://i.imgur.com/teWyTXJ.jpg', 'https://i.imgur.com/vQqgxhF.jpg', 'https://i.imgur.com/SkxJ3h2.jpg'],
  },
  {
    title: `George and Gus snuggling on the bed`,
    url: `https://imgur.com/gallery/VpqIc`,
    date: {day: 17, month: 11, year: 2017},
    description: `Gus's face in the bottom photo is a little overprotective of his baby cat brother`,
    keywords: `my son overprotective kitty sweet bedroom bed`,
    images: ['https://i.imgur.com/9FWByl3.jpg', 'https://i.imgur.com/0A14DrQ.jpg', 'https://i.imgur.com/IceBKgk.jpg'],
  },
  {
    title: `George's first birthday :3`,
    url: `https://imgur.com/gallery/KFUQT`,
    date: {day: 30, month: 10, year: 2017},
    description: `George wearing a birthday hat because he's a birthday cat! I can't believe how much this baby leopard has grown in the first 12 months :3`,
    keywords: `George first birthday party hat 1 one year old`,
    images: ['https://i.imgur.com/XiwDcWv.jpg', 'https://i.imgur.com/pgnWs6p.jpg', 'https://i.imgur.com/uTgYkPI.jpg', 'https://i.imgur.com/QQj6fI8.jpg', 'https://i.imgur.com/bKbglqY.jpg', 'https://i.imgur.com/RD9WV5D.jpg', 'https://i.imgur.com/IdvlWSf.jpg'],
  },
  {
    title: `Snuggletime with George and Gus`,
    url: `https://imgur.com/gallery/zwQdL`,
    date: {day: 11, month: 10, year: 2017},
    description: `Just some cat brothers passed out snuggling each other on the couch. What little angels 😇😇`,
    keywords: `two angels sleeping couch blanket`,
    images: ['https://i.imgur.com/BdlwU3t.jpg', 'https://i.imgur.com/xmJMzGI.jpg', 'https://i.imgur.com/YXZFUsq.jpg', 'https://i.imgur.com/jwoC0fy.jpg', 'https://i.imgur.com/aagyck1.jpg', 'https://i.imgur.com/1vSvmt0.jpg', 'https://i.imgur.com/Y8RQWHz.jpg'],
  },
  {
    title: `Jaz and George watching CatTV`,
    url: `https://imgur.com/gallery/pc4Au`,
    date: {day: 28, month: 9, year: 2017},
    description: `Jaz the tuxedo cat and her little brother George the bengal watching cars and people going by in the parking lot. Some days they sit here for hours…`,
    keywords: `catTV people watching parking lot entertainment`,
    images: ['https://i.imgur.com/y9FI4UY.jpg', 'https://i.imgur.com/4Ty1yls.jpg', 'https://i.imgur.com/q3IJ8YH.jpg'],
  },
  {
    title: `Its Gus's adopt-a-versary!`,
    url: `https://imgur.com/gallery/PKjLk`,
    date: {day: 22, month: 9, year: 2017},
    description: `It's the anniversary of the day we brought sweet little Gus the siamese cat home from the animal shelter in Buffalo, New York. Before coming to stay with his cat mom he lived a hard life on the streets. We're pretty sure he was part of a cat gang.`,
    keywords: `Gus adopt adoption rescue Buffalo`,
    images: ['https://i.imgur.com/9YUl1rp.jpg', 'https://i.imgur.com/jchi6SU.jpg', 'https://i.imgur.com/m24Kg1g.jpg'],
  },
  {
    title: `George hopped in the tub!`,
    url: `https://imgur.com/gallery/mFYbH`,
    date: {day: 17, month: 8, year: 2017},
    description: `George isn't just unafraid of the water, sometimes he's actively curious about it! Tonight he hopped right in the tub with us and was standing in 3-4 inches of water. The funniest thing: every time he took a step he would pull his paw straight up out of 4 inches of water, shake the water off, then place it right back into the water as he took his next step 🤣`,
    keywords: `water tub wade unafraid swim bathroom`,
    images: ['https://i.imgur.com/MNypJqo.jpg', 'https://i.imgur.com/IqYidgP.jpg', 'https://i.imgur.com/s7SoZrP.jpg'],
  },
  {
    title: `Cat trap`,
    url: `https://imgur.com/gallery/udfwk`,
    date: {day: 31, month: 7, year: 2017},
    description: `This box is a “cat trap”: wherever we put it down, you're guaranteed to find a cat inside it just a few moments later…`,
    keywords: `cat trap prison jail cell`,
    images: ['https://i.imgur.com/33Tii8o.jpg'],
  },
  {
    title: `Sleepy deskmate`,
    url: `https://imgur.com/gallery/lIxvg`,
    date: {day: 21, month: 6, year: 2017},
    description: `I've got an extra cute helper beside me at my office desk today :D`,
    keywords: `sleepy desk helper office buddy coworker mate`,
    images: ['https://i.imgur.com/LZ4Vcss.jpg'],
  },
  {
    title: `My little cat helpers`,
    url: `https://imgur.com/gallery/rT0D4`,
    date: {day: 14, month: 6, year: 2017},
    description: `Today I walked into the bedroom to find George the bengal and Gus the siamese in the middle of a top-secret cats-only meeting inside the cat tree. Why didn't I get an invite to this :P`,
    keywords: `important business meeting cat tree`,
    images: ['https://i.imgur.com/KY4WQqU.jpg', 'https://i.imgur.com/j1DFG1f.jpg', 'https://i.imgur.com/yb7I9QP.jpg', 'https://i.imgur.com/Ivdl0Yw.jpg', 'https://i.imgur.com/awAP6IQ.jpg', 'https://i.imgur.com/CidHODV.jpg', 'https://i.imgur.com/W9PoIcJ.jpg', 'https://i.imgur.com/alU67mX.jpg'],
  },
  {
    title: `Gus using George like a pillow`,
    url: `https://imgur.com/gallery/ufJPG`,
    date: {day: 31, month: 5, year: 2017},
    description: `Gus the siamese using George the bengal like a pillow and itty bitty kitty don't care 😂`,
    keywords: `Gus George pillow`,
    images: ['https://i.imgur.com/WHh3rxar.jpg', 'https://i.imgur.com/Zrwpugbr.jpg'],
  },
  {
    title: `George and Gus snuggling`,
    url: `https://imgur.com/gallery/NLeaP`,
    date: {day: 21, month: 5, year: 2017},
    description: `It's hard to get any work done in the office with these two adorable babies stretched out on my desk while I'm trying to focus!`,
    keywords: `stretch spots spotted coat pelt fur sleeping desk`,
    images: ['https://i.imgur.com/KIrOmAPr.jpg', 'https://i.imgur.com/N6IDKgvr.jpg', 'https://i.imgur.com/oesc61mr.jpg', 'https://i.imgur.com/vPxx50Ir.jpg'],
  },
  {
    title: `George's furball removal`,
    url: `https://imgur.com/gallery/uuEmg`,
    date: {day: 18, month: 4, year: 2017},
    description: `George went to get his two little “furballs” removed today - no future bengal babies for this beautiful boy. Here are some pictures from after the procedure when he had to wear his 'Cone-of-Shame' for a week.`,
    keywords: `fixed neuter neutering neutered spayed cone-of-shame`,
    images: ['https://i.imgur.com/RVvGsAEr.jpg', 'https://i.imgur.com/DHo5VPSr.jpg', 'https://i.imgur.com/9hxKWSKr.jpg', 'https://i.imgur.com/VvQXXSNr.jpg', 'https://i.imgur.com/LzUmA9Ur.jpg'],
  },
  {
    title: `George sleeping in a pillow`,
    url: `https://imgur.com/gallery/SgzHJ`,
    date: {day: 13, month: 4, year: 2017},
    description: `Today george cooed like a pigeon, then crawled inside of a pillow case started thrashing around. Then once he was satisfied he flopped over and fell asleep with his head poking out.`,
    keywords: `sleeping inside pillow pillowcase sheets bedding blankets cozy`,
    images: ['https://i.imgur.com/RxX0x1Kr.jpg', 'https://i.imgur.com/c5PQmOor.jpg', 'https://i.imgur.com/RFzDbqwr.jpg'],
  },
  {
    title: `George in a pillowcase`,
    url: `https://imgur.com/gallery/PLKQ5`,
    date: {day: 13, month: 4, year: 2017},
    description: `George hiding in the softest, squishest secret hiding spot he's found yet!`,
    keywords: `peekaboo hiding pillowcase pillow case sheets linen`,
    images: ['https://i.imgur.com/yBEPrzVr.jpg', 'https://i.imgur.com/lxyu2E2r.jpg', 'https://i.imgur.com/eoFyrzCr.jpg', 'https://i.imgur.com/gTCMqHPr.jpg'],
  },
  {
    title: `George and Gus`,
    url: `https://imgur.com/gallery/4zwWJ`,
    date: {day: 11, month: 4, year: 2017},
    description: `A size comparison of George the bengal and his big brother Gus. George is about 6 months old in these photos, and Gus is about 6 years old.`,
    keywords: `size comparison itty bitty giant tiny monster leopard panther bengal vs siamese cat`,
    images: ['https://i.imgur.com/e0r4GwYr.jpg', 'https://i.imgur.com/t2pVLzBr.jpg', 'https://i.imgur.com/CUufTE6r.jpg', 'https://i.imgur.com/5YJXno4r.jpg', 'https://i.imgur.com/5NLAftXr.jpg', 'https://i.imgur.com/XJcfayKr.jpg'],
  },
  {
    title: `George napping`,
    url: `https://imgur.com/gallery/xehMr`,
    date: {day: 8, month: 3, year: 2017},
    description: `George napping with his cat-dad on the bed. This was one of the first times he snuggled up to one of us like this, what a precious moment!`,
    keywords: `napping baby kitten snuggle its happening`,
    images: ['https://i.imgur.com/BRUOzAkr.jpg', 'https://i.imgur.com/xZKDjpDr.jpg', 'https://i.imgur.com/zWfrRS7r.jpg'],
  },
  {
    title: `George the bengal!`,
    url: `https://imgur.com/gallery/upIRS`,
    date: {day: 13, month: 2, year: 2017},
    description: `George the bengal kitten sleeping with his stuffed crocodile on the bed. What a sweetie! He doesn't even look real, sometimes he just looks like a cartoon tiger.`,
    keywords: `tiger cub sleeping kitten Ali Gator aligator crocodile plushie`,
    images: ['https://i.imgur.com/OdkW9vjr.jpg', 'https://i.imgur.com/BIaw8vbr.jpg', 'https://i.imgur.com/1sng5IDr.jpg', 'https://i.imgur.com/mvVaosLr.jpg', 'https://i.imgur.com/Opbbj6Or.jpg', 'https://i.imgur.com/CMYhRKxr.jpg', 'https://i.imgur.com/BpBzwxEr.jpg', 'https://i.imgur.com/K0NsnH5r.jpg', 'https://i.imgur.com/VaOR35or.jpg', 'https://i.imgur.com/vDOBJUyr.jpg'],
  },
  {
    title: `George and Ali the Gator`,
    url: `https://imgur.com/gallery/PB0gv`,
    date: {day: 11, month: 2, year: 2017},
    description: `George and his new friend Ali the Gator, a stuffed crocodile he can play with. I think he misses his brothers and sisters, so giving him something his size he can snuggle with might help.`,
    keywords: `ali gator aligator crocodile plushie toy surrogate sibling`,
    images: ['https://i.imgur.com/3c0Cvx1.jpg', 'https://i.imgur.com/8qJXO6Zr.jpg'],
  },
  {
    title: `George playing with the faucet!`,
    url: `https://imgur.com/gallery/Fr4kL`,
    date: {day: 9, month: 2, year: 2017},
    description: `George the bengal pawing at the water coming out of the faucet. Some cats are afraid of water…NOT GEORGE! He loves to play with the water, sometimes he lays down right in the sink with the faucet running over him 😂`,
    keywords: `paw faucet water sink bath shower splash curious stream drops droplets bathroom`,
    images: ['https://i.imgur.com/W0ElFqWr.jpg', 'https://i.imgur.com/HEi1MuYr.jpg', 'https://i.imgur.com/861AGyXr.jpg'],
  },
  {
    title: `Gus && George`,
    url: `https://imgur.com/gallery/zRWqG`,
    date: {day: 5, month: 2, year: 2017},
    description: `Gus the siamese and George the bengal having brotherly hangouts. George adores Gus so much.`,
    keywords: `gus bff best friends catfriends brothers forever`,
    images: ['https://i.imgur.com/tFD9uZGr.jpg', 'https://i.imgur.com/EdWwGiDr.jpg', 'https://i.imgur.com/xWcpnCwr.jpg', 'https://i.imgur.com/vnYHHBYr.jpg'],
  },
  {
    title: `George napping on the cat tree`,
    url: `https://imgur.com/gallery/rAzpg`,
    date: {day: 24, month: 1, year: 2017},
    description: `George the bengal in one of his favorite places: sleeping at the tippy top platform of the cat tree. This is over my head, about 6-7 feet off the floor.`,
    keywords: `cat tree platform perch elevated hammock lookout`,
    images: ['https://i.imgur.com/xnnxXU5r.jpg', 'https://i.imgur.com/rk2GQtkr.jpg', 'https://i.imgur.com/DyfxJwqr.jpg', 'https://i.imgur.com/s063vVGr.jpg', 'https://i.imgur.com/4r0AmUDr.jpg', 'https://i.imgur.com/ez7k8x3r.jpg', 'https://i.imgur.com/TaAAp0gr.jpg', 'https://i.imgur.com/iiQLaBvr.jpg', 'https://i.imgur.com/Ip0RypMr.jpg'],
  },
  {
    title: `George the bengal`,
    url: `https://imgur.com/gallery/20B0x`,
    date: {day: 16, month: 1, year: 2017},
    description: `Just some cute pictures of my adorable baby cat George in the office and bedroom.`,
    keywords: `baby george office bed`,
    images: ['https://i.imgur.com/gj4JaSur.jpg', 'https://i.imgur.com/4u0eXGIr.jpg', 'https://i.imgur.com/ZKAbUUJr.jpg', 'https://i.imgur.com/5tvcQYCr.jpg', 'https://i.imgur.com/voc21AEr.jpg'],
  },
  {
    title: `Baby George`,
    url: `https://imgur.com/gallery/Hs7Pb`,
    date: {day: 11, month: 1, year: 2017},
    description: `Baby george and his cute little fuzzy face. You can really see his white eyeliner here and the 'M' pattern on his forehead!`,
    keywords: `baby george fuzzy white eyeliner`,
    images: ['https://i.imgur.com/RQmPEIjr.jpg'],
  },
  {
    title: `Our Cat Family: Jaz the Tuxedo, Gus the Siamese, & George the Bengal`,
    url: `https://imgur.com/gallery/yx8N4`,
    date: {day: 10, month: 1, year: 2017},
    description: `Our cat family, made of Jaz the tuxedo, Gus the siamese and George the bengal :D Our house has never been happier!`,
    keywords: `Jasmine Augustus George cat family siblings`,
    images: ['https://i.imgur.com/YbiI2amr.jpg', 'https://i.imgur.com/H2bWGQgr.jpg', 'https://i.imgur.com/soBnxDEr.jpg', 'https://i.imgur.com/cXREAM9r.jpg', 'https://i.imgur.com/0HgWZaHr.jpg', 'https://i.imgur.com/L9BAzz3r.jpg', 'https://i.imgur.com/8lmyMO2r.jpg'],
  },
  {
    title: `George snuzzling Gus`,
    url: `https://imgur.com/gallery/3Ha09`,
    date: {day: 8, month: 1, year: 2017},
    description: `Gus snuzzling his baby brother George, they get along just fine. We weren't sure how they would get along at first, but Gus is treating George just like a mommy cat would :3`,
    keywords: `gus snuggle snuzzle snoozle brother`,
    images: ['https://i.imgur.com/xB6CxxEr.jpg', 'https://i.imgur.com/28gmWq1r.jpg', 'https://i.imgur.com/qwm1YKir.jpg', 'https://i.imgur.com/zE8VkIbr.jpg', 'https://i.imgur.com/2L9KPi3r.jpg', 'https://i.imgur.com/kJzYK54r.jpg', 'https://i.imgur.com/HwcuS0Sr.jpg', 'https://i.imgur.com/s3KdTk6r.jpg'],
  },
  {
    title: `Gus and George`,
    url: `https://imgur.com/gallery/wMi7h`,
    date: {day: 8, month: 1, year: 2017},
    description: `Photos of George the bengal meeting his new big brother Gus the siamese`,
    keywords: `Gus siamese big brother kitten adopted`,
    images: ['https://i.imgur.com/9ZpA23r.jpg', 'https://i.imgur.com/NSydJum.jpg', 'https://i.imgur.com/0Zu8gkX.jpg', 'https://i.imgur.com/0RvSBhK.jpg', 'https://i.imgur.com/Iinh9jN.jpg', 'https://i.imgur.com/6bHWQOo.jpg', 'https://i.imgur.com/PfEkQNz.jpg', 'https://i.imgur.com/ilRlYjH.jpg', 'https://i.imgur.com/lXTjx1o.jpg', 'https://i.imgur.com/gzYYzrm.jpg', 'https://i.imgur.com/T6Ubmq2.jpg', 'https://i.imgur.com/yIgl87t.jpg', 'https://i.imgur.com/uNXfKo0.jpg', 'https://i.imgur.com/WkVKuQc.jpg', 'https://i.imgur.com/UdLwJaz.jpg', 'https://i.imgur.com/fwkDJfz.jpg', 'https://i.imgur.com/fSXMq9E.jpg', 'https://i.imgur.com/MqHrZ6p.jpg', 'https://i.imgur.com/IpsfdcK.jpg', 'https://i.imgur.com/iDwD1en.jpg', 'https://i.imgur.com/pXOmOi7.jpg', 'https://i.imgur.com/AZLDg5P.jpg', 'https://i.imgur.com/V6ZNpc6.jpg', 'https://i.imgur.com/14RCfCp.jpg', 'https://i.imgur.com/qutIvWg.jpg', 'https://i.imgur.com/DUnNTqY.jpg', 'https://i.imgur.com/xbItWGh.jpg', 'https://i.imgur.com/iqPjcVW.jpg', 'https://i.imgur.com/z2RHT67.jpg', 'https://i.imgur.com/0ROvM0o.jpg', 'https://i.imgur.com/hKaV33c.jpg', 'https://i.imgur.com/6fgdBdp.jpg', 'https://i.imgur.com/B8O4UdN.jpg', 'https://i.imgur.com/CxKCq5l.jpg', 'https://i.imgur.com/3UNAETa.jpg', 'https://i.imgur.com/4KFn6V5.jpg', 'https://i.imgur.com/JL07AjL.jpg', 'https://i.imgur.com/BGEwgng.jpg', 'https://i.imgur.com/pkOGlxT.jpg', 'https://i.imgur.com/bz57FxF.jpg', 'https://i.imgur.com/N3rtyga.jpg', 'https://i.imgur.com/A8oErFq.jpg', 'https://i.imgur.com/GyF2A1M.jpg', 'https://i.imgur.com/t0dWzG3.jpg', 'https://i.imgur.com/uEPit3E.jpg', 'https://i.imgur.com/uSBkGZE.jpg', 'https://i.imgur.com/pQ9y4gA.jpg'],
  },
  {
    title: `George the bengal cat`,
    url: `https://imgur.com/gallery/HMssT`,
    date: {day: 31, month: 12, year: 2016},
    description: `Pictures of our new kitten Georgeduring his first week at home with us. He's so adorable.`,
    keywords: `kitten baby adopt adopted new forever home`,
    images: ['https://i.imgur.com/B2Qqudx.jpg', 'https://i.imgur.com/zpXCHBY.jpg', 'https://i.imgur.com/spr4rXf.jpg', 'https://i.imgur.com/y3mKJqV.jpg', 'https://i.imgur.com/KWwLm2Y.jpg', 'https://i.imgur.com/uSx3bxF.jpg', 'https://i.imgur.com/U1ZykV7.jpg', 'https://i.imgur.com/UKEWkUi.jpg', 'https://i.imgur.com/HMlqKMv.jpg', 'https://i.imgur.com/7yoPDGx.jpg', 'https://i.imgur.com/TgSgWES.jpg', 'https://i.imgur.com/wj7yZrr.jpg', 'https://i.imgur.com/Pqa1hHw.jpg', 'https://i.imgur.com/sRfNJAA.jpg', 'https://i.imgur.com/AOf6mJu.jpg', 'https://i.imgur.com/wJamRo1.jpg', 'https://i.imgur.com/EfBlXOA.jpg'],
  },
  {
    title: `George's second day`,
    url: `https://imgur.com/gallery/14KAF`,
    date: {day: 30, month: 12, year: 2016},
    description: `Pictures of George's second day at home with us. I can't get enough of his fluffy little face.`,
    keywords: `new baby kitten tiny kitty adopt adopted pet home`,
    images: ['https://i.imgur.com/87Z41Gl.jpg', 'https://i.imgur.com/ODz2Cdt.jpg', 'https://i.imgur.com/3MadNzE.jpg', 'https://i.imgur.com/UjzVlje.jpg', 'https://i.imgur.com/8UnjMlq.jpg', 'https://i.imgur.com/4frz0dW.jpg', 'https://i.imgur.com/m4nm6mv.jpg', 'https://i.imgur.com/rx9lRsF.jpg', 'https://i.imgur.com/kI1QxmT.jpg', 'https://i.imgur.com/uBC44KA.jpg', 'https://i.imgur.com/qr09IwP.jpg', 'https://i.imgur.com/XA3oDd0.jpg', 'https://i.imgur.com/RwCNSlA.jpg', 'https://i.imgur.com/yEHJ1hj.jpg', 'https://i.imgur.com/1YpBdPJ.jpg', 'https://i.imgur.com/925fE0H.jpg', 'https://i.imgur.com/VJbvJNg.jpg', 'https://i.imgur.com/qjVbDDn.jpg', 'https://i.imgur.com/l2mDhcF.jpg', 'https://i.imgur.com/DbyDgpi.jpg', 'https://i.imgur.com/egJUo4a.jpg', 'https://i.imgur.com/2gdzB8c.jpg', 'https://i.imgur.com/zbgqmeG.jpg', 'https://i.imgur.com/hv0ZauX.jpg', 'https://i.imgur.com/hFkBM8A.jpg', 'https://i.imgur.com/KdnbZ2h.jpg', 'https://i.imgur.com/l691Gpj.jpg', 'https://i.imgur.com/Spb4CIw.jpg', 'https://i.imgur.com/QofhXHn.jpg', 'https://i.imgur.com/gVjJqZU.jpg', 'https://i.imgur.com/7ysNpu7.jpg', 'https://i.imgur.com/tGpvHjZ.jpg', 'https://i.imgur.com/VfNMHY5.jpg', 'https://i.imgur.com/vWc6mPo.jpg', 'https://i.imgur.com/39XoubI.jpg', 'https://i.imgur.com/0Jd2EOJ.jpg', 'https://i.imgur.com/CI4BKpD.jpg', 'https://i.imgur.com/o68ONwW.jpg', 'https://i.imgur.com/3w5ZxEU.jpg', 'https://i.imgur.com/A54Ebn4.jpg', 'https://i.imgur.com/tv8rYKd.jpg', 'https://i.imgur.com/cuxO0Xp.jpg', 'https://i.imgur.com/WjINyfh.jpg', 'https://i.imgur.com/B0FQKvy.jpg', 'https://i.imgur.com/fradQK8.jpg', 'https://i.imgur.com/WdIAkWP.jpg', 'https://i.imgur.com/vmHle2w.jpg', 'https://i.imgur.com/BA5ECOc.jpg', 'https://i.imgur.com/dKLRZCL.jpg', 'https://i.imgur.com/PTgXvPZ.jpg'],
  },
  {
    title: `George's first nap at home`,
    url: `https://imgur.com/gallery/JCU2m`,
    date: {day: 29, month: 12, year: 2016},
    description: `George's very first day at home. I can't wait to share pictures of this little guy growing up.`,
    keywords: `George first home nap adopted adoption day new baby`,
    images: ['https://i.imgur.com/TFCHIpv.jpg', 'https://i.imgur.com/yMrWSBX.jpg', 'https://i.imgur.com/WvXuNLU.jpg', 'https://i.imgur.com/ohYRpqL.jpg', 'https://i.imgur.com/5Lbiagf.jpg', 'https://i.imgur.com/hOBuiOO.jpg', 'https://i.imgur.com/OwgW249.jpg', 'https://i.imgur.com/4xKCg9X.jpg', 'https://i.imgur.com/RUed38H.jpg', 'https://i.imgur.com/M62hdJj.jpg', 'https://i.imgur.com/aZDGnQl.jpg', 'https://i.imgur.com/QFmedEn.jpg', 'https://i.imgur.com/EJqPJLl.jpg', 'https://i.imgur.com/4eV7X0a.jpg', 'https://i.imgur.com/S841EWu.jpg', 'https://i.imgur.com/P7mUGk4.jpg', 'https://i.imgur.com/6dmiZS7.jpg', 'https://i.imgur.com/CZ7K6Xg.jpg', 'https://i.imgur.com/NaDytKH.jpg', 'https://i.imgur.com/G5Y7Fvi.jpg', 'https://i.imgur.com/nU9srMJ.jpg', 'https://i.imgur.com/Zj0q77Q.jpg', 'https://i.imgur.com/cHMP0nO.jpg', 'https://i.imgur.com/RZOWsyQ.jpg', 'https://i.imgur.com/6CRZ1ff.jpg', 'https://i.imgur.com/HAnAw3H.jpg', 'https://i.imgur.com/PL4AMg5.jpg', 'https://i.imgur.com/FHjBkGl.jpg', 'https://i.imgur.com/JNM0cAd.jpg', 'https://i.imgur.com/url6e0g.jpg', 'https://i.imgur.com/Bl93EiZ.jpg', 'https://i.imgur.com/a1IcWMo.jpg', 'https://i.imgur.com/6GBqfhh.jpg'],
  }

]