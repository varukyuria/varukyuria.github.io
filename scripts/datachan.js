let DATACHAN = {};

DATACHAN.filterByBoard = function(b) {
  return DATACHAN.posts.filter(function(data) {
    return data.board == b || !b;
  });
};

DATACHAN.selectRandom = function(b) {
  let selected = DATACHAN.filterByBoard(b);
  return selected[randomInt(0, selected.length-1)].text;
};

DATACHAN.posts = [
{
  "text": "Underwhelming",
  "board": "a"
},
{
  "text": ">Hiro x 02\n>Goro x Ichigo\n>Zoro x Miku\n>Mitsu x Koko \n\nNow that all the couples have been officially formed who is your favorite couple? I choose Mitsu x Koko",
  "board": "a"
},
{
  "text": "You missed all the fun already my dude.",
  "board": "a"
},
{
  "text": ">Goro X Ichigo\nThey aren't a couple yet and neither are ZoroMiku but they are safe from shakeups unlike Ichigoro. Dyke will screw everything up for Ichigo and Goro I guarantee you.\nAlso MitsuKoko is the best.",
  "board": "a"
},
{
  "text": "Which is exactly how he will achieve Fitoshi and then Fitoshi Blanco. Zorome knows this and is afraid of Futoshi's potential power level, so he's trying to stop him from throwing up the yellow blood cells which are suppressing his Ki flows. Zorome is trying to get Hiro to Hiro El Diablo Azul before Futoshi get's to Fitoshi Blanco otherwise Futoshi will be too strong and papa will send Klaxxaurus Rex de NEGRO with La Hermana wich Fitoshi Blanco isn't strong enough to beat on his own.",
  "board": "a"
},
{
  "text": "Hiro told everyone about kissing except mitsuru so maybe",
  "board": "a"
},
{
  "text": "Yes.. this will make hiro and him bros again and he will follow in his footsteps again but it will be following him in love",
  "board": "a"
},
{
  "text": "I can't believe Suzuka is fucking dead!",
  "board": "a"
},
{
  "text": ">The jockey for Suzuka, Yutaka Take said in a interview once that usually it would not be unlikely for a horse to fall down after breaking its leg while running, but Suzuka did not because he did not want Take to get hurt. Suzuka was known for being a gentle and friendly horse. He also seemed to know what the jockey riding him wanted and would follow orders well.\n\nI am not Crying, I am not cryin... I'M CRYING!!!",
  "board": "a"
},
{
  "text": ">licensing issues\n>Majority of the horse names used have been dead for a while",
  "board": "a"
},
{
  "text": "Feminism",
  "board": "a"
},
{
  "text": "LMAO",
  "board": "a"
},
{
  "text": "Have you guys seen the new Naruto teather?",
  "board": "a"
},
{
  "text": "The OP is Shippuden i think. Most especifically the final.",
  "board": "a"
},
{
  "text": "Huh. Okay",
  "board": "a"
},
{
  "text": "Why?",
  "board": "a"
},
{
  "text": ">both look like homosexuals",
  "board": "a"
},
{
  "text": "Literally 56 episodes of absolute garbage. Many months ago i was told this anime is going to get better. Why was i lied to?",
  "board": "a"
},
{
  "text": ">ETERNAL GOAT SEALED AWAY BECAUSE OF HER STRENGTH TIER\n1. Iona (Rumi)\n\n>TOP TIER\n2. Ruuko\n3. Iona (Kuro)\n4. Carnival\n4.5 Satomi\n5. Layla\n\nPOWER GAP\n\n>PLAYOFFS TIER\n6. Futase\n7. Kiyoi",
  "board": "a"
},
{
  "text": "Mayu died.",
  "board": "a"
},
{
  "text": "Then who are these voices from?",
  "board": "a"
},
{
  "text": ">tfw tama got upgraded too",
  "board": "a"
},
{
  "text": "sheeit",
  "board": "a"
},
{
  "text": "The White Room itself maybe. Dona and Carnival heard the voices of the room when they visited it for a bit so it's possible Tama's connection to it is making her hear voices in the real world.",
  "board": "a"
},
{
  "text": "How does it feel to witness the birth of a Type-moon level japanese franchise ?",
  "board": "a"
},
{
  "text": ">AskedSCP-105out. Was rejected.",
  "board": "a"
},
{
  "text": "C U T E",
  "board": "a"
},
{
  "text": ">observers have noted that SCP-085 has begun to show signs of clinical depression\nSCP can protect the world, but it couldn't protect her smile.",
  "board": "a"
},
{
  "text": "((You))\n\nI wasn't talking quality, although Fate is, comparatively, better than SCP in all respects. Stop having shit taste in creepy content.",
  "board": "a"
},
{
  "text": "This fat fucker became anorexic because he didn't get his bread and then his waifu was stolen by a superior stamen. His character traits are being a fatass and a bitch. Literally the shittiest character in the show, worse than self insert main protag Hiro. Does anybody wish for his happiness?",
  "board": "a"
},
{
  "text": "He has provided no evidence of his claim in the first place.\nI don't have to prove shit, egghead.",
  "board": "a"
},
{
  "text": "Idiot, the one who provides evidence is the one that brings about someone's wrong.",
  "board": "a"
},
{
  "text": "I just hate him because he's worthless",
  "board": "a"
},
{
  "text": "No, the one who makes a claim has to bring evidence that their claim is correct.\nHow old are you?",
  "board": "a"
},
{
  "text": "It's the opposite, idiot. Or do you go around proving everything you affirm all the time? No, it happens when someone calls on your shit. Grab a book every once in a while.",
  "board": "a"
},
{
  "text": ">You will never have a cute Fennec Fox gf\n\nHow does that make you feel, /a/?",
  "board": "a"
},
{
  "text": "They scream like banshees, for fun. Google fennec screams. It's like killing babies.",
  "board": "a"
},
{
  "text": ">Netflix\nNOT ANIME.",
  "board": "a"
},
{
  "text": "Also spastic as fuck. \nIs Fenneko the oddball of her species?",
  "board": "a"
},
{
  "text": "No. In the same way I consider Washimi to be waifu of the year because she reminds me of bookfu Dagny Taggart while being unable to fap to her because not furfag.",
  "board": "a"
},
{
  "text": "Well? Do you press the button? If you do, who will you choose and how will you take them down?",
  "board": "a"
},
{
  "text": "Which one, /a/?",
  "board": "a"
},
{
  "text": "FINDS",
  "board": "a"
},
{
  "text": "one piece is utterly broken and gives you omnipotence for free",
  "board": "a"
},
{
  "text": "Can I have this same premise but I have to fuck them into submission instead of kill them?",
  "board": "a"
},
{
  "text": ">you said it yourself, he attracts them for no reason.\nWhich is a power...",
  "board": "a"
},
{
  "text": "This anime made me feel feelings",
  "board": "a"
},
{
  "text": "Eamonn lost big time when he fucked over Iris.\nI'd make Iris happy, I know I would.",
  "board": "a"
},
{
  "text": ">trying this hard\nKill yourself you mentally ill spammer.",
  "board": "a"
},
{
  "text": ">How about not starting it to begin with\nI would love to control other people's actions, but I can't. The best way to deal with it is just to ignore it and hopefully it will die down. Most of the people that post those things just post it to derail the discussion anyway. Ignoring it renders their attempts ineffective.",
  "board": "a"
},
{
  "text": "Kill yourself spammer.",
  "board": "a"
},
{
  "text": "Is Eamonn gay? That's the only way I could see him rejecting Iris.",
  "board": "a"
},
{
  "text": "Who can stop this madman?",
  "board": "a"
},
{
  "text": "the anon is lvl 0 reader who needs to be the guy to consume the media but can't",
  "board": "a"
},
{
  "text": "I haven't read the manga, but as far as I know the anime moves events around some and has a somewhat more solemn tone, plus they end a little differently. Anime is pretty good though.",
  "board": "a"
},
{
  "text": ">guy who clearly has never been in a relationship \n\nIt barely last 6 months with most females. By year 4 you are well set in your ways.",
  "board": "a"
},
{
  "text": "Well you are repeating her words about 3 years long love feels but mind you she talks about her business, aka divorce rates, not love. That shit is gone way faster.",
  "board": "a"
},
{
  "text": "I got my GF to call me onii-chan in bed",
  "board": "a"
},
{
  "text": "Not that I care about stuff like that or anything, b-baka!",
  "board": "a"
},
{
  "text": "Is Taiga the greatest tsundere of the 21st century? She is the best modern representation of the true appeal of tsundere girls, who else even comes close?",
  "board": "a"
},
{
  "text": ">Taiga\nmore like palmtop tiger lol",
  "board": "a"
},
{
  "text": "I-It's not like I'm posting in this thread because I like or anything, OP. Baka.",
  "board": "a"
},
{
  "text": "Iori, who has the same VA and is older than both Taiga and Shana.",
  "board": "a"
},
{
  "text": "The anime is ten years old in October",
  "board": "a"
},
{
  "text": "How would you bully Akko, /a/?",
  "board": "a"
},
{
  "text": "They only do it to assert dominance!",
  "board": "a"
},
{
  "text": "The show was pretty good until season 2.",
  "board": "a"
},
{
  "text": "Sucy would probably dominate Akko until she gives in .",
  "board": "a"
},
{
  "text": "Those two dorks assert dominance over eachother.",
  "board": "a"
},
{
  "text": "I'd bully Milkgirl",
  "board": "a"
},
{
  "text": "Is the movie better?",
  "board": "a"
},
{
  "text": "The movie is only as enjoyable as it is because you know the context of the series.",
  "board": "a"
},
{
  "text": "The repetition is literally part of the message you fucknig neo-anime watcher",
  "board": "a"
},
{
  "text": "The movie has better visuals but it basically strips away everything good about the series.\n\nAlso this",
  "board": "a"
},
{
  "text": "Because Ikuhara",
  "board": "a"
},
{
  "text": "Maybe it's because there is no lyrics of the OST in my release",
  "board": "a"
},
{
  "text": "I'm from Mexico and was watching TV and it looks like Ranma will air once again on public TV\n\n\nAlso Sword Art Online and Astroboy will return as well\n\nLet's have a Ranma thread to celebrate",
  "board": "a"
},
{
  "text": ">you will never have this cute cat nor Luna",
  "board": "a"
},
{
  "text": "Nah. \"Cleaner\" version have a nasty reddish tone because of fucking Toei and his negligency with its DVDBoxes.\n\nActually they were airing mostly \"new\" animu: Yuri!!! On Ice, All Out, SS Omega S2, One Piece East Blue and soon OPM and Black Clover. Past year they aired Zero no Tsukaima and 2 subbed animu donated by the Japan Foundation. SAO and Cap. Tsubasa are most likely to be aired because ETC is aiming mostly for recent animu and dorama. Besides, chilean audience is mildly pissed with recent dubs and Toei's decisions of replacing the old masters with funimation cropped shit for DBZ and other animu. Other issue is ETC being technically, a monopoly in anime broadcasting here. Without competence, there is less chances to get animu at cheaper prices. Local regulations don't help it and make things harder (the chilean National Television Council has banned the anime from the national air tv because of its content, local school system has children from 8AM to 5PM, killing potential audience in home, new regulations about unhealthy food has banned sponsoring of Junk food and other things high on sugar and saturated fat like Cheetos, Frost Flakes and similars and that affected the net income of almost every local, cable and national tv stations... only a small bunch of small regional tv stations in Constitucion, Temuco, and Iquique air anime, although illegal, TV is on crisis and some big channels are on the verge of closing or externalizing their production). At least we aren't in a dead situation like Argentina where no anime is available on air tv.",
  "board": "a"
},
{
  "text": "Shampoo makes for an outrageously adorable kitty.",
  "board": "a"
},
{
  "text": "Fuck off to ANMTVLA, UMR-10. At least we aren't dead like argies or uruguayans. They have zero anime on air.",
  "board": "a"
},
{
  "text": "Reddish tone? No idea dude, it looks pretty fine to me\n\n\nFuck ANMTVLA, they block people because sudacas can't handle banter",
  "board": "a"
},{
  "text": "Post your questions here\n\nRead \n\n>search\n\nredirect new friends making their own threads with",
  "board": "g"
},
{
  "text": "Ok, so I need to dual boot Ubuntu and Windows, the system is UEFI and GPT\n\nSSD\nwin 120gb\n/ 120gb ext4\nHDD\ndata fat32\n\nIs this okay or am I missing anything?",
  "board": "g"
},
{
  "text": "you're fine mate.",
  "board": "g"
},
{
  "text": "Ok, because I read about stuff like /boot and EFI partitions and it got a little bit confusing.",
  "board": "g"
},
{
  "text": "Unless you are encrypting, just keep everything in the same partition.\nThe ubuntu installed will give you an option, that says \"Install ubuntu alongside windows\". click that one and just tell it how much space you want to give to windows/linux (its a fucking slide bar, so you dont need to do or know shit, just how much space you want to give them).",
  "board": "g"
},
{
  "text": "I have 8GB of RAM in the form of 1x4GB and 2x2GB. \n\nMy computer recognizes 8GB of RAM but only lets me use 6GB. When I boot I get a warning message saying \"memory configuration warning\" and it tells me \"incorrect memory order\" and recommends switching the DDR3_3 into the DDR3_4, which I did to no avail. I've tried switching all the RAMs around but still can't get more than 6GB RAM in the end.\n\nAgain it recognizes 8GB, but only lets me use 6. I use Windows 7 Home Premium 64 bit (16GB cap) so it's not that. Anyone know what's the dealio?",
  "board": "g"
},
{
  "text": "Well, what's the verdict?",
  "board": "g"
},
{
  "text": "But that the technology employed by Monero maybe more difficult to reverse engineer? I'm not super sure.",
  "board": "g"
},
{
  "text": "Would not be on brigade letterhead, but battalion. Also, I suspect CPT is actually meant to be CPB, the forger just fucked it up. The phone number checks out as Fort Gordon (Army Signal = Cyber). \n\nThe laptop to the left has a Hazardous Attitude spreadsheet, common term in aviation (including UAV's). Office 2013 is common in the Army (2016 is available, though), IT frequently add's Firefox for things IE cannot handle. Roxio Creator, though, suggests a non-NIPR (non official issue) laptop, personally owned.",
  "board": "g"
},
{
  "text": "What's wrong with that though? It's not like it's a secret they're doing this \nWell, it would be hard evidence for something which is otherwise up to common sense, which might make a difference for some cases, like maybe it could drive a news cycle about it if confirmed real. But in the grand scheme of things it's wouldn't be a revelation of something in any way unexpected or notable",
  "board": "g"
},
{
  "text": "Sorry, not really familiar with the organization of army units. CPTs are real things, and as I said earlier the EDIPI on the digital signature does check out as the CW4.\n\nIt is weird to see Roxio on what is assumed to be a NIPR station, but it wouldn't surprise me if it's needed somehow for that model of laptop.",
  "board": "g"
},
{
  "text": "What exactly is going to happen?",
  "board": "g"
},
{
  "text": ">Download quite a few 320kbps albums over the years\n>One day decide to spectrum analyze a few at random\n>Over half are upscaled 128kbps\n\nFUCK",
  "board": "g"
},
{
  "text": "Yeah looks like you're right, on the left is in FLAC, and on the right is the song you posted here in FLAC. \n\n\nBoth spectrums look good, so perhaps my theory about widespread youtube samples isn't right. But that would mean both deezer and Google are doing a shit-tier job of reencoding their music.\n\nI would really expect better from a fucking audio service that sells you music, I guess everyone should upgrade their hard drives and download flacs. I think education about audio would go a long way in avoiding things like this. I don't think I've ever stumbled across a video on youtube or a blog explaining audio format technicalities without me seeking them out, I''m guessing most people don't even know factors like bitrate even exist, much less do they know about audio upscales and shit reencodes",
  "board": "g"
},
{
  "text": "When you're on private trackers you are forced to learn about this stuff or else you catch a ban. That's how I ended up learning everything. That and trading unreleased music with people who would check every file. Sometimes mp3s that look like transcodes really aren't, they were just done with a shitty encoder. I've seen things like that come directly from artists. I've also seen things with highs that cut off that look like transcodes have their highs boosted in the mastering stage.\n\nThis one is using samples lifted from youtube. The artists admitted it themselves, quite proudly.\n\nmembership.",
  "board": "g"
},
{
  "text": "Eh, it's not that big a deal IMO if artists use lossy crap as source material. I mean if industrial music was made today they would be doing that shit deliberately.",
  "board": "g"
},
{
  "text": "Lossless 44.1khz 16 bit will result in a bit rate of 1.4Mbps (44100 x 16 x 2 channels).\nmp3 somehow survives with 320kbps. So yea it's throwing a fuck ton out of the window. But it's not doing it arbitrarily, it's kind of like jpg, theres some scientific basis. Like you said, most of the time you can't notice what's above 16khz without a reference. Really depends on your autism level.",
  "board": "g"
},
{
  "text": ">\nGood shit anon. That page kind of suggests that 16 khz soft cutoffs are common even in well-encoded mp3s, does anyone know why? Maybe the encoders just put extra priority on 16 and below frequencies and so that shelf appears.",
  "board": "g"
},
{
  "text": "I just installed a new version of lineage on my smartphone and I want to install only necessary apps that I'll use daily.\nSo far I have:\n>clover dev \n>SwiftKey keyboard\n>kernel adiutor\n>nova launcher\n>Brave\n>SD Maid pro\n>adaway \n>FX file explorer (highly recommend)\n>QuickPic gallery",
  "board": "g"
},
{
  "text": ">yet another botnet\nDo i fucking care pleb? It does its job perfectly.",
  "board": "g"
},
{
  "text": "This thread convinced me to uninstall SD Maid.\nAny other popular apps that phone home I should get rid off? Cant root",
  "board": "g"
},
{
  "text": "Any file explorer that supports the smb protocol? Want to just access my NAS while taking a shit",
  "board": "g"
},
{
  "text": "i need something that can resize a particular image or images and save it to a subfolder or any other folder",
  "board": "g"
},
{
  "text": ">\n>>cache is slow",
  "board": "g"
},
{
  "text": ">go on random open sores githubs \n>file a fake bug report \n>Photoshop or edit the code it to make it look real \n>post it every week, sometimes with a different account sayings it's still there \n>devs are \"frantically searching for a fix\"\n>do this on literally dozens of projects \nAnyone else here do something similar? It just makes me laugh, sometimes I'll even get on Skype with the devs and act like it's happening",
  "board": "g"
},
{
  "text": "OP's knowledge of how open source software works is so limited, he thought people would actually believe his retarded story",
  "board": "g"
},
{
  "text": "So it was you...\n\nmotherfucker",
  "board": "g"
},
{
  "text": "He obviously also believes that devs give a fuck about their old code. Usual reply is \"fix it yourself\".",
  "board": "g"
},
{
  "text": "Gottem, haha !!",
  "board": "g"
},
{
  "text": "nice photoshopped brainlet wojak btw",
  "board": "g"
},
{
  "text": ">no new stable for 5 months\nIs it dead?",
  "board": "g"
},
{
  "text": "mpv --show-profile=gpu-hq\nProfile gpu-hq:\n scale=spline36\n cscale=spline36\n dscale=mitchell\n dither-depth=auto\n correct-downscaling=yes\n sigmoid-upscaling=yes\n deband=yes",
  "board": "g"
},
{
  "text": "> If your Xorg-server is older than ABI version 23, or your kernel is older than version 4.5, or your nvidia driver is not up to date, then you will inevitably get tearing due to the lack of PRIME buffer synchronisation.\n\n>If your Xorg-server is older than ABI version 23\nBy this do they mean X.Org Video Driver or X.Org Server Extension?\n\n[114759.147] (II) Module ABI versions:\n[114759.147] X.Org ANSI C Emulation: 0.4\n[114759.147] X.Org Video Driver: 23.0\n[114759.147] X.Org XInput driver : 24.1\n[114759.147] X.Org Server Extension : 10.0",
  "board": "g"
},
{
  "text": "so MPC was just randomly giving me fucktons of unexplainable problems - would get frameskippin when my monitor was in 144hz mode, sometimes when switching between frequencies opening files would just give me a black window, and then out of god damn nowhere files were just taking forever to open.\nI got mpv and I'm just using the vanilla config am I good to go? I liked the look of older anime when upscaled with madvr",
  "board": "g"
},
{
  "text": "No stick with MPC",
  "board": "g"
},
{
  "text": "I just downloaded Kali Linux. What else am I going to need if I plan to hack the planet?\n\nI plan to use my powers for good and not evil btw",
  "board": "g"
},
{
  "text": "Google \"zerg rush\" to unleash a virus to destroy the Internet.",
  "board": "g"
},
{
  "text": "Actual skills that take hundreds of hours of boredom and frustration",
  "board": "g"
},
{
  "text": "A driver for your internets",
  "board": "g"
},
{
  "text": ">What else am I going to need if I plan to hack the planet?\nHacking is a tool, a means to an end.\n\nYou need a goal.",
  "board": "g"
},
{
  "text": "My goal is to hack the planet for good. Read the thread before posting please. K thanks",
  "board": "g"
},
{
  "text": "/mkg/ - Never Ever Edition\n\n>Buyer's template:\n>Where to Buy:\n>FAQs:\n>Use the buyer's template\n>Group Buys\n>Keyboard wiki",
  "board": "g"
},
{
  "text": "Ducky One 2",
  "board": "g"
},
{
  "text": "no idea about the switches, mine used gateron, but it's a very nice keyboard overall.",
  "board": "g"
},
{
  "text": "I'm not mad at you, nor am I forcing you. I just think spending more for nothing is wasteful, like spending 400$ on a jacket. If you still think you NEED it, fine then buy. I'm just saying there are better things you could do with your money.",
  "board": "g"
},
{
  "text": "Aesthetics, the feeling of quality. Sure, they do the same thing, but one does it with more satisfaction. Its also nice to customize and try out different types rather than buying a $20 microsoft keyboard and using it until it breaks. Its not just a utility, its an accessory. Rich people do it with cars, girls do it with clothes and shoes. i don't really know how you're having trouble understanding.",
  "board": "g"
},
{
  "text": "This is /dpt/, the best subreddit of /g/\n\nIn this thread:\nr/programming\nr/compsci\nr/ReverseEngineering\nr/softwaredevelopment\n\n/!\\ ** Read this before asking questions ** /!\\ \n\n\n\nWhat are you working on?",
  "board": "g"
},
{
  "text": "Looks like std::cin's `>>` isn't overloaded for std::optional<T> yet. C++17 btfo",
  "board": "g"
},
{
  "text": "undecidable",
  "board": "g"
},
{
  "text": ">yet\ndo it yourself",
  "board": "g"
},
{
  "text": "Does anyone have the pastebin w the custom css to block all of Hiroshimoots tracking and ad bullshit? Phone was just bricked and I had it saved there",
  "board": "g"
},
{
  "text": "Project Euler #15 was tricky, I had to research algorithms to try and struggled for a bit. But the implementation isn't complicated at the end. \nAnyone else finished it? \n\nlet paths=function(dimension){\n    let arr=new Array(dimension);\n      for(i=0;i<=dimension;i++){\n        arr[i]=new Array(dimension+1);  \n    }\n      for(j=0;j<=dimension;j++){\n        arr[0][j]=1;\n          arr[j][0]=1;\n    }\n      for(a=1;a<=dimension;a++){\n        for(b=1;b<=dimension;b++){\n            arr[a][b]=arr[a-1][b]+arr[a][b-1];",
  "board": "g"
},
{
  "text": "What music do you listen to while writing your jQuery code, /wdg/?\n\nPrevious thread: \n\n>Free beginner resources to get started\nGet a good understanding of HTML, CSS and JavaScript.\n\n>Further resources",
  "board": "g"
},
{
  "text": ">r.split\n\n???",
  "board": "g"
},
{
  "text": ">since it's having a big sale on most courses.\nReally does it..\nUdemy is infamous for always being \"in sale\"\nIt's some gray-area scummy shit.\nYou might even open the site in 2 different browsers or private browsing mode and get different discount percentages.\n\nAnyway don't sweat it. It's going to be on sale next week and the week after.",
  "board": "g"
},
{
  "text": "What would be the absolute bare minimum I need to be able to land remote web dev jobs?\n\nWhat needs to be in my portfolio?",
  "board": "g"
},
{
  "text": "How long would it realistically take to become a webdev if I spent time in courses and studying on my own for about 5 hours a day everyday?",
  "board": "g"
},
{
  "text": "all depends on how fast you can pick it up/ if its your thing?",
  "board": "g"
},
{
  "text": "this board is schizophrenic in regards to its ability to reason about programming. One one end this board recommends people use Lisp, while at the same time claiming that C is the best language because its faster or something. Explain this contradiction",
  "board": "g"
},
{
  "text": "Yeah, it's like \"multiple people in one board\"\n\n*goes to psych, personas need to leave, JavaScript&PHP&Python wave bye to them*",
  "board": "g"
},
{
  "text": "What if you need to insert at the beginning and the end? Also, yes they are fast to INSERT in the middle, just not to search. Often, we will have pointers into those items in the middle. Also, dynamic arrays aren't safe to point into, while lists are.",
  "board": "g"
},
{
  "text": "M-More",
  "board": "g"
},
{
  "text": "I don't even understand.",
  "board": "g"
},
{
  "text": "The blockchain is a linked list btw.",
  "board": "g"
},
{
  "text": "Hello /g/, I am in desperate need of some survey participants for my college final project. The survey is about computer hardware and its really easy, shouldnt take more than 10 minutes.\n\nI need 50 participants for my data to be valid and my professor to accept my report. \n\nYou dont need to be an expert in pc hardware to provide useful information!\n\nAt the end of the survey there is an area to enter your steam or reddit username. This is to enter in a giveaway for $10 steam gift card. Feel free to skip this question if you are not interested in the giveaway.\n\nThe survey can be found here - \nThank you for your time!",
  "board": "g"
},
{
  "text": "Fuck off pajeet",
  "board": "g"
},
{
  "text": "Go to reddit pajeet",
  "board": "g"
},
{
  "text": ">data mining 4channers\nPathetic",
  "board": "g"
},
{
  "text": "I filled it out. Up to you to decide if I was honest and didn't just add noise.",
  "board": "g"
},
{
  "text": "old: \nWelcome to /fglt/ - Friendly GNU/Linux Thread.\n\nUsers of all levels are welcome to ask questions about GNU/Linux and share their experiences.\n\n*** Please be civil, notice the \"Friendly\" in every Friendly GNU/Linux Thread ***\n\nBefore asking for help, please check our list of resources.\n\nIf you would like to try out GNU/Linux you can do one of the following:\n0) Install a GNU/Linux distribution of your choice in a Virtual Machine.\n1) Use a live image and to boot directly into the GNU/Linux distribution without installing anything.\n2) Dual boot the GNU/Linux distribution of your choice along with Windows or macOS.\n3) Go balls deep and replace everything with GNU/Linux.",
  "board": "g"
},
{
  "text": "Ok, so I made this\nSSD\nwin 120gb\n/ 120gb ext4\nHDD\ndata fat32\n\nIs this okay or am I missing anything?",
  "board": "g"
},
{
  "text": "Linux noob here, so I was trying and checking out the latest ubuntu release and decided to move some files over the local network from my laptop to my pc.\nUnfortunately the power went out for some reason, hasn't happened in years,but now the files disappeared from both my laptop and the pc.\n\nNow my question is, is there a way to find a log for the files that were lost during moving or to analize the traffic and see what was lost?",
  "board": "g"
},
{
  "text": "well amazon is getting government contracts with aws no?\nthey know enough already",
  "board": "g"
},
{
  "text": "Btw, if they disappeared from both computers, where did the files go?\nThey should be somewhere unless overwritten right?",
  "board": "g"
},
{
  "text": "it seems unlikely that a reading operation would destroy files like that",
  "board": "g"
},
{
  "text": "I'm looking for a switch box like pic related, but for converting rca connections to hdmi. I seem to be having trouble finding one. \n\nI've got a bunch of older game consoles that I'd like to hook up to my LG c7 tv. The tv has a single rca connection, but it doesn't seem to work very well. \n\nAre there any better ways to do what hook up my old consoles to the tv?",
  "board": "g"
},
{
  "text": "I'm not sure I've seen any with this many ports, but there definitely are RCA -> HDMI boxes on Aliexpress and such. Maybe if you combined a multiple RCA input switching box with one of these, you could have all the ports you want?",
  "board": "g"
},
{
  "text": "PS: At some point, I personally went with mainly using PC emulators. There's a limit to how many consoles I can put under my TV plus the various video filters and so on that emulators have are just more comfortable.",
  "board": "g"
},
{
  "text": "Yeah, that's actually what I was going to try if I couldn't find what I wad looking for. \n\n\nI've considered that, but i just love the nostalgia of playing on the actual console like I did as a kid!",
  "board": "g"
},
{
  "text": "Just compare it vs DOS:\n\n>Designed for personal computers\n>Simple, easy directory tree\n>Handul of configuration files (autoexec.bat, himem.sys, config.sys)\n>No complicated user configurations and permissions\n>Literally one directory (DOS)\n>Add windows: literally 2 directories, Dos, and Windows\n>Run Windows by calling win.com from autoexec.bat\n>Using only dos, just load the mouse driver and mscdex and sound drivers and you're fine\n>Everyone in DOS world was happy with EDIT.EXE, no arguments\n>God said let there be 256 colors\n>You are the only user and you can run any command you want\n>Modern windows continues the simple directory tree and uses the same DOS interface for command line",
  "board": "g"
},
{
  "text": "Honestly everything is going to shit in the OS market right now. \n\nYou have dragonfly/openBSD, and maybe I dunno, fucking haiku? \n\nThat's it. Everything else is either slowly getting fucked over or already there.\n\nIt's time for a new OS.",
  "board": "g"
},{
  "text": "Azunyan Thread: Hug Edition\n\n>Previous thread:\n>>3051970\n>Previouser threads:\n\n>Discord server:\n\n>Useful links:\n",
  "board": "c"
},
{
  "text": "Thread for Kimono japanese festival dress girls (or wathever that's called)",
  "board": "c"
},
{
  "text": "Previous thread",
  "board": "c"
},
{
  "text": "Let's revive this Sunday by praising our loving girl! Previous thread",
  "board": "c"
},
{
  "text": "Last of my minidump",
  "board": "c"
},
{
  "text": "very quiet, very purple\n\nprevious",
  "board": "c"
},
{
  "text": "new thread for all things poofy",
  "board": "c"
},
{
  "text": "Gimme sum nerdy girls reading",
  "board": "c"
},
{
  "text": "No reading thread is complete without the reading princess",
  "board": "c"
},
{
  "text": ">bookworm thread\n>no bookworm\ntime to rectify the situation",
  "board": "c"
},
{
  "text": "The last thread was absolutely great, and I didn't get the chance to properly thank the translator of the nice doujin that was posted.\nSo I'm thanking you now.\n\nAnyway, this is a great show so let's have another thread.",
  "board": "c"
},
{
  "text": "Doremi's diet is to not eat her steak.",
  "board": "c"
},
{
  "text": "6 new movies announced",
  "board": "c"
},
{
  "text": "Work at it, Dorothy!",
  "board": "c"
},
{
  "text": ">tanktop\n>late 20th century\nNO",
  "board": "c"
},
{
  "text": "this is how we roll, no?",
  "board": "c"
},
{
  "text": "Hello /c/! This thread is for the posting of cute girls with any relation to sports! That's always cute.\nAlso the 4chan wide AI soccer tournament is coming up and this is a poll to decide this seasons players! More info in it. ",
  "board": "c"
},
{
  "text": "Alright, our match against /t/ is about to begin!",
  "board": "c"
},
{
  "text": "hestia, ika-chan, pls",
  "board": "c"
},
{
  "text": "Well it's not a win but a draw is still good, that meme goal from /t/ was super rare but hey, I'm happy that we didn't draw!",
  "board": "c"
},
{
  "text": ">we didn't draw!",
  "board": "c"
},
{
  "text": "Let's have a loli bread here since /a/ is a joke right now.",
  "board": "c"
},
{
  "text": "Can i dump mini Sagiri in here? Cause i feel like dumping mini Sagiri in here.",
  "board": "c"
},
{
  "text": "dump that mini Sagiri here",
  "board": "c"
},
{
  "text": "yays!\n\nActually i think i might start a Sagiri thread.\n\nJust maybe.",
  "board": "c"
},
{
  "text": "Do it",
  "board": "c"
},
{
  "text": "Part 1:\n>>3091310\n\nAs with before, bonus points to AU versions!",
  "board": "c"
},
{
  "text": "Would you kiss a psychopath?",
  "board": "c"
},
{
  "text": "If you can't kill Kyon just kill his sister",
  "board": "c"
},
{
  "text": "How come no one ever talks about everyone's favorite potato Chi-chan?",
  "board": "c"
},
{
  "text": "Why though",
  "board": "c"
},
{
  "text": "I to want to know why people would pull their puds to these pure spuds",
  "board": "c"
},
{
  "text": "Thread number 9 for our beautiful Fate-chan.\n\nPrevious thread: >>3063617",
  "board": "c"
},{
  "text": "I hope I'm not doing things wrong, like with the form of the thread? \nRecently, I've been re reading Legend of the Golden Witch, but with voices and the PS3 sprites instead. So far I'm pleased with the voices quality, Battler is very entertaining despite looking like a retard. Pretty much like Maria, in fact. Some scenes happened to play out with different tones in my mind though. It's fortunate that I already know how this episode and the whole novel play out, because otherwise I would have dropped the novel. If you want to truly appreciate the voice acting, you have to bear through the slowness of the text. And if you want to read at your own speed, then you'd have to skip and it would completely ruin the point of having those in the first place. Pretty much a deal killer for me, considering how boring Legend is at the beginning... \nAnyway, this episode is pretty heavy in terms of foreshadowing, it's incredible. A plethora of little details are thrown here and there in unexpected ways, such as that moment when Maria is glad to be called associable when she learns that Kanon is often called that too. Why would she want to be like him, of all people? Or that moment when Genji only talks to Shannon in the corridor, when technically Kanon was still there talking with her just seconds ago. He couldn't have disappeared in such a short time... Or even when the narration describes Battler with words such as \"big\" and \"strong\" when Kanon was reminiscing how he helped him with the fertilizer bags. This may be my personal interpretation on this one I admit but it's very interesting",
  "board": "jp"
},
{
  "text": "Higurashi\nOriginal sprites > Anime designs > Steam designs >>>>> PS2 sprites\n\nUmineko \nOriginal sprites >= PS3 sprites > Anime sprites >>>>> Steam sprites except from surprises like Dlanor",
  "board": "jp"
},
{
  "text": "Higurashi \nPS3 sprite redesigns > Original sprites >> PS2 sprites >> Steam sprites >>>>> Anime designs\n\nUmineko \nOriginal sprites = PS3 sprites >>>>> Anime designs >>>>>>>>>>>>>>>> Steam sprites",
  "board": "jp"
},
{
  "text": "Played the original first, but I like voices partially I guess.\nLike Rosa/Maria/Jessica have pretty good voiceacting in my opinion but kinzo is just annoying. Beato and Battler are also pretty good. Guess it depends on what your first experience of the game was but I think I prefer the original without voices even though I like the alchemist version anyhow.",
  "board": "jp"
},
{
  "text": "uuuuuu-",
  "board": "jp"
},
{
  "text": "*puts finger on cps speed dial*",
  "board": "jp"
},
{
  "text": "• Her HSiFS title is \"The Fairy that Approaches Godhood\"\n• Says she feels strong enough to become a god\n• In HSiFS stage 3, Reimu thinks she has \"missed something\" about one of her previous foes. She then think of something, but immediately dismisses it for being too ridiculous\n• When Cirno mentions her, Okina openly wonders if she is actually a god\n• In VFiS, she demonstrates a very weird and powerful ability, putting out Clownpiece's torch for what is stated to be the first time in history\n• CP then senses an uncanny potential inside her\n\nWhat the fuck IS with this \"fairy\"?",
  "board": "jp"
},
{
  "text": "That might actually be what Hirasaka is implying. Misty Lake is apparently the Lake of Death, Clownpiece thinks of ice as the world of death, Cirno is an ice fairy living at Misty Lake. Jumped all over the whole EX Eternity thing too. He probably wants the fairies to have some coolness to them, he powercreeped Sunny a bit too.",
  "board": "jp"
},
{
  "text": ">Hirasaka\nHow do you know it's him and not ZUN that writes these things",
  "board": "jp"
},
{
  "text": "I don't, I just name him because it's prominent in his manga, and Hirasaka is shorter than \"Hirasaka's manga\". Hirasaka hasn't changed anyone's eye color or given them wings, so I have no reason to assume he's taking any significant liberties.",
  "board": "jp"
},
{
  "text": ">he powercreeped Sunny a bit too.\nHow so? Sunny uses her powers like that a lot. She was able to warp Yukari's lasers around herself too. Even just normally hiding herself and her friends by bending light around them is pretty \"strong\" itself. One of the first things she did was altering how whole areas looked by shifting features around. Just looking around the tree is basically nothing.",
  "board": "jp"
},
{
  "text": "The ability itself is pretty strong and versatile yeah, but has Sunny used it in a remote vision-like fashion before Hirasaka? New applications for existing powers, even if completely logical, are a form of minor powercreep (in the form of user competence). \n\nIf she does then I'm completely mistaken in this case, I only knew about her overtly altering visibility and the light danmaku thing.",
  "board": "jp"
},
{
  "text": "Kasen > Okina >Yuk*ri",
  "board": "jp"
},
{
  "text": "wow",
  "board": "jp"
},
{
  "text": "I was cropping the followup of this picture to be safe to post, and somehow didn't even notice or consider the giant dick in her mouth until the very end. What's this say about me?",
  "board": "jp"
},
{
  "text": "That's one thicc sage. How does a hermit get fat?",
  "board": "jp"
},
{
  "text": "too much cum",
  "board": "jp"
},
{
  "text": "You'll remember to play her full game when it comes out in two(2) years, right?",
  "board": "jp"
},
{
  "text": "So, what do I need to do if I want to get those addons from the shop in Lord Usa Comp? Do I have to start a new game in 0.411? Is it even possible to fix your save file, or would I still have to restart if I wanted to use that shop later in a new version?",
  "board": "jp"
},
{
  "text": "I wish Mokou and Wriggle had actual Touhou characters for Navis. It was really jarring to get just standard MegaMan Navis in a game full of cool Touhou characters and Navis.",
  "board": "jp"
},
{
  "text": "Wirgle Navi is literally MegaMan X3's gravity beetle",
  "board": "jp"
},
{
  "text": "NANI?!",
  "board": "jp"
},
{
  "text": "i'm well aware, that doesn't really address my point",
  "board": "jp"
},
{
  "text": "Tech-heresy edition.\n\nPrevious: \nITT: We discuss onaholes, dolls, and every thing else we stick our junk into because using just your hand is for peasants.\n\nThe guide: \nIt was cleaned up and updated.\n\nPlease read the guide, use the archive, don't shitpost. Follow global and local rules. Don't reply, report and ignore instead.\n\nLength, girth, budget and geographical location are extremely important in determining your next best course of action!\n\nPlease refrain from creating new threads till page 10.",
  "board": "jp"
},
{
  "text": "Looks like normal rip to me.\n\n\n\nMy dick is too sensitive for that I feel, going in for a second would overstimulate my dick and make it difficult to stay any hard for a second row. Even if I do it the 2nd orgasm also feels pointless and I regret thinking I should just have saved that cum for the next day.",
  "board": "jp"
},
{
  "text": "That's a dirty hole.",
  "board": "jp"
},
{
  "text": "New fancy design but no english version yet.\n\nAnd Tomax holes are in stock again!",
  "board": "jp"
},
{
  "text": "I hate it that you guys memed me into buying a Tomax hole. I bought the Venus Real for 85 (eighty-five) bucks and the stimulation is frustratingly low. At least it's really easy to clean, but for that kinda price I could've bought something better.",
  "board": "jp"
},
{
  "text": "Since we going tech here, what do anons think about vibrating onaholes? \n\nWhether it's cheap stuff like pic related or hi tech like the Tenga Flip Zero EV",
  "board": "jp"
},
{
  "text": "Official ZUN drawing of Joon.",
  "board": "jp"
},
{
  "text": "Now I want to see Youmu in Yuuka's outfit.",
  "board": "jp"
},
{
  "text": "Not just ZUN, that seems to be a very widespread thing among artists.",
  "board": "jp"
},
{
  "text": "What kind of tasteless pleb would intentionally go for Reimu over Joon?",
  "board": "jp"
},
{
  "text": "I sometimes have to see things like these just to remember that ZUN is actually pretty good at art.",
  "board": "jp"
},
{
  "text": "This'd be better as an image.\nAnd on a faster board, like anon said.",
  "board": "jp"
},
{
  "text": "Adolescence is liking mommy Shinki.\nAdulthood is realizing auntie Sariel is better.",
  "board": "jp"
},
{
  "text": "Sacchan feet~",
  "board": "jp"
},
{
  "text": "Cold feet~",
  "board": "jp"
},
{
  "text": "Konngara gets to massage those feet and lick those armpits everyday.",
  "board": "jp"
},
{
  "text": "The Konngara warms the cold Sariel.",
  "board": "jp"
},
{
  "text": "She's not cold, just a bit hard to approach.",
  "board": "jp"
},
{
  "text": "Previous Thread: >>18723464\n\nGuess someone has to make it. What's your least favorite game? Favorite? Who do you think is the easiest boss in the series, and who is the hardest?",
  "board": "jp"
},
{
  "text": "wtf komachi you were supposed to rape me\n\n\neosd in terms of usefulness\nmof if you want to bomb through everything\nTD is the easiest, but it requires some 2hu skill.",
  "board": "jp"
},
{
  "text": ">TD is the easiest\nNot even close",
  "board": "jp"
},
{
  "text": "given normal difficulty, none of the bosses are threating. especially stage 5, which is a joke compared to other 2hus.\n\nthe true difficulty lies in fact there are fuck all resources to collect, and you need a lot of life pieces for a single life (8-15, and even if you hit trances at the right time you get +4 max). as the result, every miss is really lethal for the run.",
  "board": "jp"
},
{
  "text": ">as the result, every miss is really lethal for the run.\nAnd you still call it the easiest\n\nHave you ever played PCB or LLS, my man",
  "board": "jp"
},
{
  "text": "Just a quick question, but is there a MEGA somewhere with all of the touhou games so I don't have to download them one by one?",
  "board": "jp"
},
{
  "text": "Keep it to one thread, everyone.",
  "board": "jp"
},
{
  "text": "Shush",
  "board": "jp"
},
{
  "text": "SUPER-lewd thoughts of you are running through Yukari's head 24/7! Literally all she can think about is cute sex with Anon!",
  "board": "jp"
},
{
  "text": ">cute sex\nYou mean hip-shattering life-draining sex",
  "board": "jp"
},
{
  "text": "i want Yukari to worship me with her dick",
  "board": "jp"
},
{
  "text": "Yes",
  "board": "jp"
},
{
  "text": "Is there any online ressource for authentic contemporary uniforms.",
  "board": "jp"
},
{
  "text": "Bump",
  "board": "jp"
},
{
  "text": "Visual Novel translation status\n\n\n>Aiyoku No Eustia - 41.07% Translated, 29.62% edited\nAmagami - \"Script translation done. 611/2308 original edition scenario scripts edited (26.5%)\"\nClover Day's - 100% translated, editing + TLC still to go\nChaos;Head Noah - Fan translation ongoing\nDaitoshokan - 100% translated and edited, images, engine work and QC remain\nDragon Knight 4 - Being translated\nFate/Extra CCC - 17% translated\nGakuen Heaven 2 - Demo released\nHaraChuchu - Kukuri + Mei routes patch released\n>Haruka ni Aogi, Uruwashi no - 2% (1647/68206) translated\n>Hatsukoi 1/1 Append Discs - Kyou and Maya scenerios released\nHeart no Kuni no Alice - 99% translated, 4th partial patch released",
  "board": "jp"
},
{
  "text": "Isn't the fan TL pretty decent?",
  "board": "jp"
},
{
  "text": "Despite problems (reviews thus far are mixed, with 15 of the 36 reviews to date being negative with those negative reviews being in a variety of languages, but mainly English and Korean), Princess Maker 5 has thus far peaked at 184 concurrent users, well above the 71 concurrent users Princess Maker 1 and 79 concurrent users Princess maker 3 reached, though behind the 245 peak of Princess Maker 2. It did so with a higher base price than any of the prior releases, $30 for this compared to $20 for 2 and 3 and $10 for 1. Based on the timing of its daily peaks, it looks to be doing better in Asia, although it has maintained numbers above 70 concurrent users at times which would favor the West. Either way, with its concurrent users peaks thus far it looks to be off to a rather strong start, and the series has historically had relatively strong legs with all three prior entries selling long after their initial release. Sales estimate through the end of Steam Spy of prior entries look to be roughly \n\nPrincess Maker - 12k\nPrincess Maker 2 - 30k\nPrincess Maker 3 - 8k\n\nWhile Princess Maker 5 does have achievements, the global achievement method begins to break down by 500 owners (since the achievement charts only have 3 significant digits, and above 500 you begin to have gaps of 0.1), which Princess Maker 5 seems to have quickly eclipsed within hours, thus it doesn't do anything here.",
  "board": "jp"
},
{
  "text": "Fureraba has thus far peaked at 61 concurrent users at Steam which is a rather strong showing for a recent moege, especially one as the first release by a new company. The daily peaks thus far have been at times which favor European and North American customers over Asian customers, although it picked up a quick burst of Chinese reviews at launch as well. That said, it may end up peaking higher than 61, as its current peak has only come within the last couple hours. It had been delayed on Steam because of delays with Valve approving it, but I have to wonder if the generally positive reception it got while being a purely R18 release helped it get a better launch than it otherwise would have once it finally made it to Steam. Of course though, even if it is doing relatively well compared to other recent releases by other companies, how well it did for NekoNyan would depend on their expectations and expenses which are of course unknowable, and there is little indication about exactly how well it sold on any of the non-Steam platforms. \n\nWith having no Kickstarter and likely having a meaningful fraction of its sales being on off Steam R18 platforms, MG titles are probably the best to compare to as launch strength, which are as follows (excluding peaks during bundles). It is worth remembering though, that concurrent users at launch only represents the strength of a title at launch, rather than how it will sell down the road. \n\nEden - 302 (During the Summer 2015 sale, day 1 peak of 130)\nHigurashi ch 1 - 268 (During the Summer 2015 sale, day 2 peak of 255)\nOzmafia - 246 (day 3 peak)\nKindred Spirits - 228 (day 3 peak)\nUmineko: Golden Fantasia - 187 (day 1 peak)\nGo Go Nippon - 181 (during a sale, launch peak not available)\nRemembering How We Met - 174 (day 2 peak)\nFashioning Little Miss Lonesome - 109 (day 3 peak)\nHigurashi ch 2 - 88 (day 1 peak)\nUmineko - 75 (day 2 peak)\nPrincess Evangile - 66 (day 4 peak)",
  "board": "jp"
},
{
  "text": "I liked sales autism when it was one picture, not fucking paragraphs.",
  "board": "jp"
},
{
  "text": "everyone's waiting for PM4, I think it'd hit 50k easy because of the relatively vanilla artstyle that'll attract new people who are just looking for a cute animu game.",
  "board": "jp"
},
{
  "text": "How does /jp/ view Reimu in the Grand scheme of things?",
  "board": "jp"
},
{
  "text": "Reimu never did anything wrong, Youkai are subhuman and should be killed on sight. All killings are justified.",
  "board": "jp"
},
{
  "text": "This. If we all modeled our behavior after Reimu the world would be paradise already.",
  "board": "jp"
},
{
  "text": "that Reimu...\na chu chu\na fuu fuu",
  "board": "jp"
},
{
  "text": "/jp/ Would you sire a child with Satori Komeiji and ensure the Survival of the Satori from extinction?",
  "board": "jp"
},
{
  "text": "She doesn't have friends, how can she have children",
  "board": "jp"
},
{
  "text": "Is not, she's just not a very people person.",
  "board": "jp"
},
{
  "text": "A sign of Autism.",
  "board": "jp"
},
{
  "text": "Stop it!",
  "board": "jp"
},
{
  "text": "No",
  "board": "jp"
},
{
  "text": "Me, Sumire Uesaka",
  "board": "jp"
},
{
  "text": "If you start counting inviduals, then you most likely lose to Chin-momi Ahaan, ie. the biggest Komatsu Mikako fan there is.",
  "board": "jp"
},
{
  "text": "This is the probably the current holy trinity of bukkakes plus Ayaneru.",
  "board": "jp"
},
{
  "text": "rie kugimiya.",
  "board": "jp"
},
{
  "text": "She's almost forty, the years are really getting to her.",
  "board": "jp"
},
{
  "text": ">Seiyuus that you DON'T want to see in AV\n\nDamn she is ugly.",
  "board": "jp"
},
{
  "text": "Let's have a nice thread about the music of Touhou Project.\n\nWhat do you like about ZUN's music?\nDoes he use any specific composition techniques that you like?\nWhat are your favorite themes?",
  "board": "jp"
},
{
  "text": "Man, I forgot how great Seihou's soundtrack is.\nProbably has my all time favorite Yuukarin theme.",
  "board": "jp"
},
{
  "text": "seihou 2 all the way.\n\njust had the sudden urge to listen to this couple of days ago",
  "board": "jp"
},
{
  "text": "DiPP Eternal Shrine Maiden is the darkest Zun track in my opinion",
  "board": "jp"
},
{
  "text": "my favorite ZUN piece:",
  "board": "jp"
},
{
  "text": "good taste",
  "board": "jp"
},{
  "text": "What’s your favorite JRPG and WRPG\n\n>Persona 5\n>Deus Ex",
  "board": "v"
},
{
  "text": ">SMT 3 Nocturne \n>Fallout New Vegas",
  "board": "v"
},
{
  "text": "Final Fantasy IX and Dragon Age Origins",
  "board": "v"
},
{
  "text": "YOU HAVE TO CHOOSE A SIDE IDORT",
  "board": "v"
},
{
  "text": "> Dark Souls (If that doesn't count, Baten Kaitos)\n> New Vegas\n\n\nHey man, I hope you have a good day.",
  "board": "v"
},
{
  "text": ">Final fantasy XII or Disgaea 5\n>Mass Effect 2",
  "board": "v"
},
{
  "text": "Persona 4",
  "board": "v"
},
{
  "text": "I dont get it",
  "board": "v"
},
{
  "text": "jjba for arcade and dreamcast",
  "board": "v"
},
{
  "text": "fpbp",
  "board": "v"
},
{
  "text": "The Vento Aureo PS2 game",
  "board": "v"
},
{
  "text": "I want to marry Pyra!",
  "board": "v"
},
{
  "text": "I love Reisen!",
  "board": "v"
},
{
  "text": "Pic related.\n\n“You know, Ellie, we really are the last of us.”",
  "board": "v"
},
{
  "text": "These guys are both full of shit, I'm the real D to the Aniel Lenz.",
  "board": "v"
},
{
  "text": "This place truly is a 4chan.....",
  "board": "v"
},
{
  "text": "i'm the real one because i only said my first name which is daniel whereas the other one the faker said my last name and spelt it wrong",
  "board": "v"
},
{
  "text": "\"Father, It looks like....I've been Dishonored 2\"",
  "board": "v"
},
{
  "text": ">\"...this part of the map is UNCHARTED. DRAKE'S FORTUNE should be buried somewhere around here.\"",
  "board": "v"
},
{
  "text": "What's your favorite vidya glitch?\n\n\nWalking underwater in Sunshine is satisfying to me for some reaso",
  "board": "v"
},
{
  "text": "I remember trying to do that in sunshine a long time ago it was super hard to do for me and frustraiting but when i got it it was cooL!v",
  "board": "v"
},
{
  "text": "A personal favorite",
  "board": "v"
},
{
  "text": "Sonic Adventure had fun ones.",
  "board": "v"
},
{
  "text": ">old hero converts to Judaism",
  "board": "v"
},
{
  "text": "A near exact clone of 3 but faster and less punishing when it comes to hitting walls and shit along with some very minor differences that only matter if you're a turboautist grinding for good times",
  "board": "v"
},
{
  "text": "By adding it to my library when it was free. Only newcomers have to cough up the dough",
  "board": "v"
},
{
  "text": "I've been playing a lot of Wipeout 3 lately, everything about the game is perfect.\nNot that that has anything to do with this thread, it's just the closest thing to a wipeout thread.",
  "board": "v"
},
{
  "text": "lol no I doubt youve even played BNG for more than an hour if you believe that",
  "board": "v"
},
{
  "text": "Wait I thought we were going to lose it when it left early access or if we delete it from our HDD?",
  "board": "v"
},
{
  "text": "How do you keep gamers satisfied, /v/?",
  "board": "v"
},
{
  "text": "I'm so excited :D!!!",
  "board": "v"
},
{
  "text": "god of war sounds about as deep as sesame street",
  "board": "v"
},
{
  "text": "Crazy how backwards it is. Despite calls for inclusion and diversity, really all it means is dividing people, no crossover allowed because appropriation, there is diversity in groups that are 100% made up of a single ethnicity so long as it isn't white, skin color is the only thing that matters, diversity of thought is not a goal, etc.",
  "board": "v"
},
{
  "text": "I didn't ask you a question.\n\nIf you wanted to argue with me, then \"nuh uh\" is not an argument.",
  "board": "v"
},
{
  "text": "I know the right dicks, I've met at least a dozen of them. \nNone of them want what I can offer. I wouldn't have this problem if I was female and had the expected assets. I could even fuck a rich one, push out a blackmail baby and get a free ride for the rest of my life if I was.",
  "board": "v"
},
{
  "text": "They did the wheelchair FPS in Wolfenstein II like I mentioned in my post. It was awful. The level was specifically designed so you could roll places, the tiniest obstacle was enough to bar your progress and getting around was just a pain in general. Want to go up stairs? Okay, time to engage in this 10 minute long minigame where you have to collapse your chair, and then pull yourself and the chair up the stairs while you time button presses!",
  "board": "v"
},
{
  "text": "What's the best mech and why is it the Shadow Hawk?\nreposting because earlier thread died",
  "board": "v"
},
{
  "text": "I'm pretty sure that's incorrect and they did it for \"diversity.\" This is Weisman's company. They created Battletech in the first place, and their game studio made MechCommander and MechWarrior games.",
  "board": "v"
},
{
  "text": ">not loading catapult with 2 LRM 20s\n\nYou're doing it wrong",
  "board": "v"
},
{
  "text": "Partial Wing System - \nCivil War (3039 I think) Weapons Tech. More closely to what MWO is enjoying. \nBetter Mission Payouts - economy.",
  "board": "v"
},
{
  "text": "It's Weisman's company, which is why they know that pretty much every detail of the major factions' history is completely fleshed out and nerds are gonna sperg if they change anything. I guess nerds are clearly sperging about this decision too, but probably fewer.\n\n\nYou have to remember that those mechs are only that iconic in the Mechwarrior games. This is based on the tabletop game, where the era before any of those mechs showed up is one of the most popular eras to play.",
  "board": "v"
},
{
  "text": "Dhs are non purchaseable. EXCHANGERS are a 1 slot mod that gives -20% weapon heatgen at ++ level. They are purchaseable. But as i said are rarity 5. And even if you set dhs buyable to 'true' you then have to add themto shops, and their base rarity is 25. A fucking atlas isonly rarity 6 iirc.",
  "board": "v"
},
{
  "text": "What was the undisputed WORST year for video games ever?",
  "board": "v"
},
{
  "text": "dark souls was 2011 bro\n2012 actually didnt have a single good game",
  "board": "v"
},
{
  "text": "Shit, my bad. 2012 was when it came to PC.",
  "board": "v"
},
{
  "text": ">F Zero GX\n>Kirby Air Ride\n>MKDD\n>Boktai\n>Wario World\n>M&L Superstar Saga\n>Baten Kaitos\nShit nevermind 2003 was great",
  "board": "v"
},
{
  "text": "2016\nDOOM was the saving grace for a lot of people but as someone who didn't get much out of that game at all, 2016 was barren as fuck\nFuri was fucking great though",
  "board": "v"
},
{
  "text": "two thousand and sixteen",
  "board": "v"
},
{
  "text": "What is your favorite computer game?",
  "board": "v"
},
{
  "text": "The Polito form is dead, insect. Are you afraid?",
  "board": "v"
},
{
  "text": "mew2sheriff playing edition\nold",
  "board": "v"
},
{
  "text": ">WHY DOESN'T FOX WIN THIS MATCHUP IT'S BULLSHIT\nt. Leffen\nHe needs to stop being a bitch",
  "board": "v"
},
{
  "text": ">IT WAS THE MATCHUP\nCan we just start calling him John instead of Leffen?",
  "board": "v"
},
{
  "text": "Did he come out of nowhere on the scene? I've never seen this dude before, maybe i've been gone too long",
  "board": "v"
},
{
  "text": "yeah true facts he's so creative",
  "board": "v"
},
{
  "text": "Our boy Gozalo Barrios is gonna pull off some WWE shit and walk in the last minute and challange the champ and win the title.\nScreencap this.",
  "board": "v"
},
{
  "text": "For a game that actually has fun gameplay the dialogue makes it insufferable beyond belief",
  "board": "v"
},
{
  "text": "Fuck that bot nigger and his eye jizz beam",
  "board": "v"
},
{
  "text": "He's annoying because it's a video game so it constantly repeats his lines over and over, the lines themselves are not really annoying though",
  "board": "v"
},
{
  "text": ">actually has fun gameplay",
  "board": "v"
},
{
  "text": ">That one sidequest at the very end of the game where that Goliath has a plan to escape Pandora is one of the few jokes in the game that was actually funny\n\nTell me. I forget",
  "board": "v"
},
{
  "text": "Where do I get PS3 ISOs or whatever file name they have?",
  "board": "v"
},
{
  "text": "torrents",
  "board": "v"
},
{
  "text": "Yes.",
  "board": "v"
},
{
  "text": "is it true you cant call people fags and niggers on xbox live anymore?",
  "board": "v"
},
{
  "text": "You can't say it anywhere in America",
  "board": "v"
},{
  "text": "Can we talk about the best Tales game? \n>best characters\n>best settings\n>best combat \nHell, the dub isn't even that bad outside of a few stunted deliveries.",
  "board": "vr"
},
{
  "text": "Wow... Well at least someone liked it. After enjoying Tales of Destiny so much I found it an incrdible let down and despised the characters.",
  "board": "vr"
},
{
  "text": "All I can remember is \"YOU BET!!!\".",
  "board": "vr"
},
{
  "text": "it was shockingly short for a tales game",
  "board": "vr"
},
{
  "text": ">REEEEEEEEEEEID\n\n\nReally? I recall it taking about 30 hours or so. Then again, I'm a dunce and explored/fought too much.",
  "board": "vr"
},
{
  "text": "ITT weapons/items/units etc that break a game",
  "board": "vr"
},
{
  "text": "Literally makes the game 100x easier, and all you have to do is enter a cave right in the starting screen.",
  "board": "vr"
},
{
  "text": "Carsomyr as a close follow-up.",
  "board": "vr"
},
{
  "text": "counter materia",
  "board": "vr"
},
{
  "text": "Who wants to see the five secrets of level 2 in Bubsy 3D?",
  "board": "vr"
},
{
  "text": "This are hard time for /vr/, aren't they?",
  "board": "vr"
},
{
  "text": "Also, shoutwiki has been good for a while.",
  "board": "vr"
},
{
  "text": "But what if the second bag breaks?!",
  "board": "vr"
},
{
  "text": "What if my fist fucking breaks your nose, huh?",
  "board": "vr"
},
{
  "text": "Anon please I only want what's best for you.",
  "board": "vr"
},
{
  "text": "PREVIOUS (At image bump limit)\n>>4685762\n\nWelcome to the Retro Game Gauntlet, gentlemen.\n\nStart at NES, and work through in the following order:\nNES \nSNES \nGB/GBC OR Sega Game Gear \nMegadrive/Genesis \nTurbografx16 \nDOS \nNeoGeo \nGBA OR Sega Master System \nCommodore 64 OR Commodore Amiga",
  "board": "vr"
},
{
  "text": "Playing along, but not going to adhere to a 3 day schedule, because I'm lucky to get a couple of hours in a few days a week.\n\nRolled P.O.W. for the NES. I forgot how frustrating this game was in my youth.",
  "board": "vr"
},
{
  "text": "This isn't going so well anymore. I'm at rank 6, but the top 5 boxers are a substantial cut above everyone else. I'm getting pulverized by Rockin' Jo Barlow and Jack Iron Orr. They're both pretty similar: they have phenomenal speed and strength, and \"good\" everything else. They always open up the first and second rounds with ridiculously fast and devastating flurries. I have the advantage after they tire themselves out and slow down, but I'm always in terrible condition by then and end up kissing the mat every time I get tapped in round 3, eventually resulting in a loss by TKO before I can finish them off.",
  "board": "vr"
},
{
  "text": "There we go. I improved my stats a bit until I could hit hard and fast enough to keep Jack on the defensive. After that, I didn't have too many problems until the championship match. McGuigan is really tough, but also somewhat predictable: he is extremely active and dangerous at his favored distance, but goes on the defensive if you can get in close. He also very strongly favors head shots over body blows, and most of his combinations follow a set pattern. After I started defending myself pretty well, I ended up slowly winning through attrition. Bjorn had better stamina and endurance than McGuigan, and was able to stay in slightly better condition as the fight wore on, until I got a knock-out in round 8.\n\nNext up is Razor Freestyle Scooter, which sounds like some sort of awful shovelware.",
  "board": "vr"
},
{
  "text": "P.O.W. is down.\n\nNext up Liberty or Death. Koei Strategy.. This ought to be a good time...",
  "board": "vr"
},
{
  "text": "I'll try my best",
  "board": "vr"
},
{
  "text": "Draw your sword, Ramza.",
  "board": "vr"
},
{
  "text": "Not my fault she specialized in a job that has Auto Dead",
  "board": "vr"
},
{
  "text": "Hamlet would be a better comparison than War & Peace. And Shakespeare, WotL is not. WotL is stylistic ostentation.",
  "board": "vr"
},
{
  "text": "I'm not talking about style, I'm talking about brainlets whining that it's huffing its own farts. FFT's original script (besides the iconic lines like \"animals have no gods\") is an utter fucking trainwreck of garbage. \n\nDo you guys seriously think \"Fire Bracelet\" is a dragon attack, or that the ice/flame gun mistranslation is acceptable? Or this gem of a screenshot, that actually might confuse a first-timer? FFT's original translation was done internally by amateurs, and it shows",
  "board": "vr"
},
{
  "text": ">I'm not talking about style, I'm talking about brainlets whining that it's huffing its own farts\nDumbass, if you're responding to people complaining that WotL ia huffing its own farts, you are talking about style.\n\nYes, there are a lot of mistakes in the original translation. They're embarrassing but also easily noted. Every single one you list, I recognized as a mistranslation and was not confused. Meanwhile, the language in the retranslation intrudes and changes the tone and feel of every single line of dialog in the entire script.\n\nSo no, retard, nobody seriously thinks those translations are \"acceptable,\" a binary term of binary thinker like yourself. They will, however, tolerate those mistakes to have the rest of the functional dialog be simple and free of pretentious elaboration.",
  "board": "vr"
},
{
  "text": ">huffing its own farts, you are talking about style.\nDo you think there's only one type of fart-huffing retard? Particularistic matters like \"this is Shakespearean\" or \"this is Old English\" don't matter. You're simply too much of a child to understand how much the retranslation fixed things. \n\nI can't believe someone is seriously touting a script translated by barely literate japs as \"better\" because half the time it's more \"accurate\" and the other half the time it's incoherent garbage due to their high school tier level of English (being generous). All because you're a brainlet who can't follow actual eloquent English. For shame.",
  "board": "vr"
},
{
  "text": "What are some gorgeous looking old games?\nI googled and couldn't find any listicles\nI was watching a short documentary about the evolution of video game graphics and saw this game (Super mario world 2 yoshi's island) and will play it just cause it looks nice\n\nDidn't think they could look so colourful and enticing even back then",
  "board": "vr"
},
{
  "text": "Trip World on Game Boy\n\n\nI'm on my phone too",
  "board": "vr"
},
{
  "text": "Mr. Gimmick on NES",
  "board": "vr"
},
{
  "text": "Little Samson on NES",
  "board": "vr"
},
{
  "text": "Shantae on GBC",
  "board": "vr"
},
{
  "text": "That game has insane spritework",
  "board": "vr"
},
{
  "text": "I have a strange memory from back when I was a wee lad, around age 8.\nIn this memory, I was playing the original Super Mario Bros.\nI climbed a vine and reached a cloud area. Right when the cloud area appeared on screen, I saw a flurry from Super Mario Bros 2 up there.\nHe was running back and forth like they always do.\nI remember just staring at the screen dumbfounded.\nThe original Mario doesn't have these enemies.\nThey probably hadn't even been invented for Doki Doki Panic yet.\nThat's all I can remember. I don't remember if I jumped on him or ran past him or what.\nObviously this couldn't have really happened, but I still have the memory for some reason.\nIt's weird because I don't have any other obvious false memories.\nShare your strange gaming memories.",
  "board": "vr"
},
{
  "text": "You didn't imagine that anon, that happens on occasion. I've heard it before, and here's a clip of some rando on youtube hearing it for the first time: \nI'm not sure why it happens but it always made me nervous to be outside in that level as a little kid.",
  "board": "vr"
},
{
  "text": "My memories of this game and boss when I rented it once are impressive. I called it the \"insect queen\", and it was massive. It shot some danmaku shit that covered the entire screen, the protag could shoot a stream of fire, and the battle was very tough and with effects flying everywhere. The cave was also impossibly hard to navigate. Stuff really is more impressive to little children than they really are.\nIt doesn't help that the cave is made of skulls and that horrified me. Who the fuck thought it was a good idea to make the third stage in a children's game a cave made of bone and skulls?\n\nI used to think that Sigma's shots in his last form in MMX1 were also ridiculously hard to dodge and covered the whole screen, so that isn't an isolated thing.",
  "board": "vr"
},
{
  "text": "Bowser's Laugh and Boo's Laugh are the same sfx, it's just a pitch modifier applied to them (low pitch for bowser, high pitch for boo). Apparently in very rare occasions this modifier doesn't trigger and you hear the unmodified laugh, which sounds rather creepy and surreal.\n\nThat's my only logical explanation",
  "board": "vr"
},
{
  "text": "Yes I already saw that explanation in the comments of a youtube video but your power level is still very impressive.",
  "board": "vr"
},
{
  "text": ">ctrl+f\n>mandela effect\n>0 results\nTerrible",
  "board": "vr"
},
{
  "text": "In Adventure Island and Wonder Boy, what are those big statues in the ice levels supposed to depict?\nI can see some features, but I'm not sure what they actually are.",
  "board": "vr"
},
{
  "text": "They're just generic Idols",
  "board": "vr"
},
{
  "text": "Wonder Boy version",
  "board": "vr"
},
{
  "text": ">plain white egg contains curse thingy\n\n\nrotten egg clearly marked\n\nAdventure Island is such bullshit",
  "board": "vr"
},
{
  "text": "Git gud",
  "board": "vr"
},
{
  "text": ">everyone says the game is great\n>the main character's sprite is shit\nI can't get into a game that the character looks like they walk with a stick up their ass. The Belmonts are a great counter example though, their sprites make the games feel faster.",
  "board": "vr"
},
{
  "text": "Steve Ditko would be proud.",
  "board": "vr"
},
{
  "text": "is he crying lasers?",
  "board": "vr"
},
{
  "text": "best itt",
  "board": "vr"
},
{
  "text": "Would you prefer a game with realistic walking and shitty gameplay?",
  "board": "vr"
},
{
  "text": "This is available for free on the Mac App Store. Apparently someone at Bungie sent a fan a copy of the original source code, and that person then ported the game, rather faithfully (if not a bit buggy), to modern macOS.\n\nI played it for a little bit and got kinda interested. It's clearly an early FPS in the vein of Wolfenstein 3D, but it also has adventure / dungeon-crawling elements, like a detailed inventory with weighted, equippable items, an ability to examine items on the ground, and a resting feature to regain lost health.\n\nGameplay is pretty slow; there's literally no run button, so you just walk everywhere. The only enemy I've encountered so far is this pretty goofy alien mouth-thing with legs and a tail that projectile-spits green goo and emits a high-pitched monkey-like yelp when injured. And because player movement is so slow, it's easy to get hit by the goo in the narrow spaces you're exploring. I've already died twice on the second floor. Also, the game has absolutely no music or ambient sounds, which is kinda shitty.\n\nSo, has anyone else played through Pathways? Should I keep going?",
  "board": "vr"
},
{
  "text": "I like the monster looks\n\nI'll borrow a mac sometime to play it",
  "board": "vr"
},
{
  "text": "It wouldn't be terribly difficult to emulate the classic Mac OS version instead.",
  "board": "vr"
},
{
  "text": "never figured that mac emus existed. Guess I'll look into that sometime. Thanks.",
  "board": "vr"
},
{
  "text": "You got it dude. I think Pathways requires a color Mac so Mini vMac won't work (but is fantastic for monochrome Mac software), but Basilisk II ought to do the trick.",
  "board": "vr"
},
{
  "text": "heres a link to basilisk II 2",
  "board": "vr"
},
{
  "text": "Post the most valuable game you own",
  "board": "vr"
},
{
  "text": "I'll be dead, so I don't really care. Maybe I should have them buried with me.",
  "board": "vr"
},
{
  "text": "Not him, but I'll probably will my more unique items to a gaming museum. The retail games, I don't know, probably to a friend who I think would care about them.",
  "board": "vr"
},
{
  "text": ">buckle up, edge\n\nRemember to wear this mask while driving!",
  "board": "vr"
},
{
  "text": "I'm going to have an underground tomb constructed underground, with a throne. I will have the flesh boiled from my bones, my skeleton perfectly polished, with gems placed in my empty eye sockets. I will be placed in a fine robe, staff in hand, and placed upon the throne. My collection of games and consoles will sit in sealed containers in one side, and my /tg/ related hobby figures and armies will be on the other side.\n\nThere will be a few traps placed at the entrance. Anyone brave enough to venture forth and survive this tomb is free to claim my stuff. I'll rest easy knowing it found its way to good hands.",
  "board": "vr"
},
{
  "text": "Calgarian here. I own several games I'm sure no one else has in well over 100km",
  "board": "vr"
},
{
  "text": ">At that point, you pretty much have to be American or someone who watches Star Trek to know who William Shatner is.\nJust because nitpickers gonna nitpick: you can also be someone who is old enough to have heard of him, like my parents who are in their sixties. My friends, on the other hand, have never heard of Shatner.",
  "board": "vr"
},
{
  "text": ">media in Japan today is the same as media in Japan 20 years ago",
  "board": "vr"
},
{
  "text": "See",
  "board": "vr"
},
{
  "text": ">Diego Maradona and Lionel Messi.\nI have literally never heard these names before",
  "board": "vr"
},
{
  "text": "I have been living in Japan since well before that show premiered in the USA and I have never seen it on tv or heard a single Japanese person mention it even once",
  "board": "vr"
},
{
  "text": "Give me a list of hidden gems or game you think should be played on the SNES. They don't have to be expensive, just a good, fun experience.",
  "board": "vr"
},
{
  "text": "Its a prequel story wise, but I liked it.",
  "board": "vr"
},
{
  "text": "Gunple Gunman's Proof has an English translation. I wouldn't recommend buying a physical copy because of the price. It has a simple, Earthbound like art style and it plays like A Link to the Past but you're a kid in the wild west.",
  "board": "vr"
},
{
  "text": "I got spikemcfang for Christmas as a kid, it was actually pretty damn fun even if the box art is horrible",
  "board": "vr"
},
{
  "text": "This game is meme material, but nobody picks up on it.",
  "board": "vr"
},
{
  "text": "I know most people hate it, but I actually love Drakkhen. It was one of the only RPGs I had for the SNES when I was kid. I loved the fact that your party would fight random battles automatically. You can get into battles even while standing still, so what I would do is power the system on and then switch inputs to watch TV while my party leveled up all on their own. I'd just check back every so often to make sure they hadn't all died. \nI never knew there was a sequel to it though.",
  "board": "vr"
},
{
  "text": "What was your favorite one?",
  "board": "vr"
},
{
  "text": "anyone played the racing game",
  "board": "vr"
},
{
  "text": "We have plenty of interesting threads but very few anons posting.\n\nI'm currently playing the Game Gear Power Rangers games, and they're pretty decent.\n\nLet's talk about tokusatsu games in general.",
  "board": "vr"
},
{
  "text": "Look up the Compati Hero series.",
  "board": "vr"
},
{
  "text": "MMPR for SNES was pretty damn good, although way too easy and simplistic.\nJust did everything right outside that part",
  "board": "vr"
},
{
  "text": "MMPR SNES and MMPR the movie SNES are both good",
  "board": "vr"
},
{
  "text": "I've been getting into retro VN's. Can someone tell me how to play this game (YU NO)? I can't get any of the PC versions to run for shit...",
  "board": "vr"
},
{
  "text": "Do not bother, a porn game with too much text",
  "board": "vr"
},
{
  "text": "The Saturn version isn't even porn.",
  "board": "vr"
},
{
  "text": "A great game even without the porn.",
  "board": "vr"
},
{
  "text": "Is there a good tutorial how to configure DxWnd for Windows 10?",
  "board": "vr"
},
{
  "text": "I miss the art style",
  "board": "vr"
},{
  "text": ">Bill Cosby: It's okay. Take your time. Then what happened? \n>Little Girl: He... he said he would kill me if I ever said anything. \n>Bill Cosby: Do you remember what he looked like? \n>Little Girl: Yeah. He had a scar on his arm. And he had a big, stupid doo-doo head! \n\nWhat did they mean by this?",
  "board": "tv"
},
{
  "text": "damn\n\nnice catch OP",
  "board": "tv"
},
{
  "text": "She dies in Episode IX after failing to bring Kylo Ren back to the light which inevitably is the final straw that does bring him back due to concealed romantic feelings for her. What would your reaction be?",
  "board": "tv"
},
{
  "text": "She failed to be an interesting character.",
  "board": "tv"
},
{
  "text": ">Empirical rule",
  "board": "tv"
},
{
  "text": "he said they plan to abandon the trilogy format, the trilogy thing is his own speculation, he made that clear.\n\nYour the only one full of shit here.(and no im not him)",
  "board": "tv"
},
{
  "text": "No, he's definitely full of shit. Even Hamill said that when Carrie died, they had to go back to square one with the script they were already developing, so them recasting her isn't happening either since they wouldn't rework the script if she was just going to be recast anyway.",
  "board": "tv"
},
{
  "text": "Or some Matrix pod thing.",
  "board": "tv"
},
{
  "text": "Dab On tha Haterz Edition.\n\n>strike first\n>strike hard\n>no mercy\n\nEp. 1 (free): Ep. 2 (free): \nEps. 3-10 can be viewed with a YouTube Red subscription/purchase* or by other cost-free means which will almost certainly be shared in the thread if you're outside the YTR service area or are a cheapskate.\n\n>fear does not exist in this dojo\n>pain does not exist in this dojo\n>defeat does not exist in this dojo",
  "board": "tv"
},
{
  "text": "This feels fake. It's really weird.",
  "board": "tv"
},
{
  "text": "/ourguy/",
  "board": "tv"
},
{
  "text": ">stole Johnny's son\nEAT SHIT JOHNNY.",
  "board": "tv"
},
{
  "text": "that seemed like a random customer",
  "board": "tv"
},
{
  "text": ">didn't bother to crop the image\nLOW ENERGY",
  "board": "tv"
},
{
  "text": "What historical figures deserve their own miniseries?\n\nPic related",
  "board": "tv"
},
{
  "text": "I'd kill for a massive TV show that covered both Punic Wars, shit was like the Three Kingdoms x100",
  "board": "tv"
},
{
  "text": "Unironically did nothing wrong",
  "board": "tv"
},
{
  "text": "Anything about Byzantium period, or even the HRE. Both are amazingly ignored in Anglophone media.",
  "board": "tv"
},
{
  "text": ">Charles himself was severely disabled, both physically and mentally, described as \"short, lame, epileptic, senile and completely bald before 35, always on the verge of death but repeatedly baffling Christendom by continuing to live.\n>. . . In his case, the so-called Habsburg lip was so pronounced he spoke and ate with difficulty his entire life. He did not learn to talk until the age of four, walk until eight, was treated as an infant until he was ten and did not attend school.\n\nThis would be like I, Claudius, if Claudius came to the throne and continued being a retard.",
  "board": "tv"
},
{
  "text": ">dude i am insane lol\nWere the writers trying to make him deep or something?",
  "board": "tv"
},
{
  "text": "You’re retarded, my man.",
  "board": "tv"
},
{
  "text": "The \"some men just want to watch the world burn\" really helped his character. \n\nNot that his character was bad but that bit of exposition helped put him in perspective",
  "board": "tv"
},
{
  "text": "\"people\" like this are honestly hilarious for trying to talk about how \"wannabe deep and edgy\" nolans joker was while it seemingly, actually, genuinely, literally flew over their head, blatantly, regardless of how much the movie shoved it into your face that he was not genuinely insane but used it as a front for multiple purposes. The entire fucking \"dog chasing cars\" scene is probably the most obvious example of this where its made LITERALLY CRYSTAL CLEAR to the audience that the joker tries to make others believe that he is out of control and unpredictable when in reality he is the actual schemer out of them all",
  "board": "tv"
},
{
  "text": "Wasn't there also something about mass surveillance in the dark knight? I also remember that being very obvious but now that you mention the whole neocon thing. I think I realize that the movie made mass surveillance a \"necessary evil.\" They have Lucian Fox say it's bad and whatever but I realize now that the movie specifically make it a good thing to deter the \"terrorist.\"\nWow bravo, Nolan. He really is a fucking neocon ain't he?",
  "board": "tv"
},
{
  "text": "GG was mostly contained to /v/ and was spread to /pol/. Where even there they were chased away. Also, nobody cared for it seemed petty to care about videogames as an adult. Its hilarious that its still alive at the other site though.\n\n\nNope i was here, I didn't watch it live but saw it a couple of days later. It was too long but i didn't get the effect other than increased posting in /b/",
  "board": "tv"
},
{
  "text": "Why didn't Tony say anything to Peter and let him go just like that?",
  "board": "tv"
},
{
  "text": "Don’t be a fucking pussy",
  "board": "tv"
},
{
  "text": "Why does every scene of this movie look like shit, like they used some hazy color distortion filter on it?",
  "board": "tv"
},
{
  "text": "I'm pretty sure the gravity of the situation hadn't set in yet",
  "board": "tv"
},
{
  "text": "Because it's a camrip.",
  "board": "tv"
},
{
  "text": ">Nothing Personal Kid",
  "board": "tv"
},
{
  "text": "What the fuck? This guy basically wanted White genocide. Why was there so much praise for the character?",
  "board": "tv"
},
{
  "text": "The praise was from people who also want white genocide. \n\nI saw this movie today and it is identical to every other cape shot movie except it’s set in some African utopia.",
  "board": "tv"
},
{
  "text": "He was right.",
  "board": "tv"
},
{
  "text": "And that's a good thing.",
  "board": "tv"
},
{
  "text": ">At one point he was earmarked to be the Caped Crusader in the DCEU – something he’s recently said to be grateful for not happening. \n\nFucking seriously though? I used to like Brolin but does anyone else see this as a dick move on his part? There's no fucking way he could've known back then that one franchise would've been bigger than the other.",
  "board": "tv"
},
{
  "text": "It's a loss for everyone really. Average movie goer doesn't know Marvel and DC, he just sees superheroes. Competition is not a bad thing.",
  "board": "tv"
},
{
  "text": ">we got this covered",
  "board": "tv"
},
{
  "text": "Actually the average movie goer DOES know the difference\n\nWhy else do you think the MCU has been so successful and DCEU such a disaster?",
  "board": "tv"
},
{
  "text": "Word of mouth.\n>hey did you see that new superhero movie? yeah it was pretty bad\nAnd voila DC fails",
  "board": "tv"
},
{
  "text": "How is this a dick move? He disagreed creatively so he didn't get the part for Batman, something that he was clearly bummed about at the time. The fact that the DCEU ended up being such a clusterfuck and he found a much more suited and fulfilling role out of Marvel's biggest bad guy is just a happy coincidence that he's probably thankful for.",
  "board": "tv"
},
{
  "text": "Why did she pissed herself?",
  "board": "tv"
},
{
  "text": "based",
  "board": "tv"
},
{
  "text": "That's very very mean anon. Mckenna wouldn't like that.",
  "board": "tv"
},
{
  "text": ">At least dozens of people were involved in the request, design, approval, and production of a dress that size with a huge slit up the side.",
  "board": "tv"
},
{
  "text": ">Some of us have daughters\n\nyour g/f's kids don't count",
  "board": "tv"
},
{
  "text": "It's an innocent dress. You have to have a pretty dirty mind to think of anything beyond that.",
  "board": "tv"
},
{
  "text": "Doctor Strange has the ability to go back in time and kill Baby Thanos. think about it.",
  "board": "tv"
},
{
  "text": "We really need to stop making characters who can control time.\n98217009\nWew. I'm not (you)ing you.",
  "board": "tv"
},
{
  "text": "doesnt need to kill him\n\njust go back in time and raise baby thanos, make him become a good boy instead of a psycho.\n\n\nfucking shit marvel you failed again",
  "board": "tv"
},
{
  "text": "He gave the green Chaos Emerald away because when he looked into the future he saw that Stark would've been among the 50% who'd survive, so he didn't see the point in having Stark sacrifice himself for it, so he just handed it over.",
  "board": "tv"
},
{
  "text": "If Strange can peer into the future, why didn't he see Thanos coming?\nMore importantly, why didn't he see Drumpf getting elected and do something about it?",
  "board": "tv"
},
{
  "text": "Who cares?",
  "board": "tv"
},
{
  "text": "Best husbando edition.\n\nHickey-fags not invited. \n\nIrving can stay.",
  "board": "tv"
},
{
  "text": "Why is he so fucking hot",
  "board": "tv"
},
{
  "text": "Have a list\n\n\nWhat is this from?",
  "board": "tv"
},
{
  "text": "It's sad watching this general getting filled with faggots more and more. Why do you degenerate homos have to ruin everything?",
  "board": "tv"
},
{
  "text": "sounds like someone's salty",
  "board": "tv"
},
{
  "text": "What would you like to talk about? I'm always open to discussion about the show and it's lore",
  "board": "tv"
},
{
  "text": "Yeah, poor jocks, fucking that beauty in the ass and mouth for hours until they were totally satisfied. Poor, poor jocks!!",
  "board": "tv"
},
{
  "text": "I'd let him fuck me for a million",
  "board": "tv"
},
{
  "text": ">The goody goody Nickelodeon actress who had her own show on Nick and is not named Victoria Justice and is now trying to make it in movies or mainstream television was certainly not acting goody goody this week at a frat party. She even brought her own coke to go with the frat provided Molly. Miranda Cosgrove \"iCarly\"\n\nEntylawyer outed cokehead Miranda years ago. Something happened.",
  "board": "tv"
},
{
  "text": "iCarly, iCarly\n\nI don't care if you look like Michael Jackson\n\nAs long as you givin' me action\n\nAnd Freddie gon film the reaction",
  "board": "tv"
},
{
  "text": "BASED",
  "board": "tv"
},
{
  "text": ">main guy UNJUSTS himself\n>turns beta BASEDboy into alpha Chad\n>mocks over-sensitive millenials\n>SJW character gets BTFO\n>”the weak should fear the strong”\n>good guys becomes bad guys and win\n\n10/10 would watch again",
  "board": "tv"
},
{
  "text": ">has infinity stones\n>gets kicked in them",
  "board": "tv"
},
{
  "text": "These threads are the only good thing to come out of Infinity War, based.",
  "board": "tv"
},
{
  "text": ">whip pan to Hawkeye on drums",
  "board": "tv"
},
{
  "text": "rookie mistake. 4chan humor doesn't into irl humor for some reason. dunno why. \n\nwe've all been there tho",
  "board": "tv"
},
{
  "text": "Infinity.",
  "board": "tv"
},
{
  "text": "got me at bowling pins getting knocked down",
  "board": "tv"
},{
  "text": "Jericho 941 for home defense ? Anyone got one ? Opinions?",
  "board": "k"
},
{
  "text": ">no gun\nDegenerate",
  "board": "k"
},
{
  "text": "Flandre's still alive but I think they just lurk now mostly. Wife and kid and all that",
  "board": "k"
},
{
  "text": "I shoot approx 10k rds per year. How much is \"enough\" by your elite mall ninja standards?",
  "board": "k"
},
{
  "text": ">saying the rail is disgusting means I'm noguns\nBrainlet detected",
  "board": "k"
},
{
  "text": "I find the slide is sometimes hard to grip. But aesthetically it's a very nice gun.",
  "board": "k"
},
{
  "text": "anyone from the discord is not allowed\n\nWe are hosting a meet with 50+ attendies already confimred, any fake fags will be booted\n\nLocation is private land, we'll have machine gun shoots, and hundreds of milsurp and modern firearms alike, including transferable machine guns and post sample machine guns on form 2s provided by one of our local SOTs\n\nI hope you can join",
  "board": "k"
},
{
  "text": "Id like to have pegboard, but theres a window there.\n\nYou can use the press for all kinds of stuff, once I got it I use it all the time.",
  "board": "k"
},
{
  "text": ">stakes with my ebt\nsteaks*\n>EBT REEEEEEEEEEEEEEEE",
  "board": "k"
},
{
  "text": "being a black man at a 4chan meet up is suffering, its not worth it",
  "board": "k"
},
{
  "text": "you guys won't shoot me? and can i bring a tent/hammock?\ni don't have too many guns, but i live on the georgia border in north florida so it might be only 3 or 4 hours from me. i would love to go and talk about guns and gun related accessories.",
  "board": "k"
},
{
  "text": "it's only suffering, because you lack perspective.\nthese events are what you make of it, not what they make of you.\nwhen in Rome, do as the Romans do.",
  "board": "k"
},
{
  "text": "/k/ related anime/manga? The only one I've really watched/read was Akira, so looking for other military/crime/sci-fi related movies/series/books.\n\nAlso do not know what source this webm is",
  "board": "k"
},
{
  "text": "Girls last tour\nYURUCAMP",
  "board": "k"
},
{
  "text": "can never go wrong with Cowboy Bebop",
  "board": "k"
},
{
  "text": "patlabor movies were boring and bad",
  "board": "k"
},
{
  "text": "I wish they’d made the whole show. I mean they kinda already did considering it’s the show they make in season 2 of Shirobako",
  "board": "k"
},
{
  "text": "I assume you think Heat is boring and bad too.",
  "board": "k"
},
{
  "text": "Is Sig still the high tier of 9mm handguns or have things changed? \n\nt. Haven't been in the market since 2012",
  "board": "k"
},
{
  "text": ">you must have faggot hands\nMaybe. Even so, it's a literal rectangle with a narrow strip of sandpaper on the front and backstraps. It's skinny, but to the detriment of the capacity, and there's nothing to fill your palm because of the completely flat sides.\n\n>>garbage mag release\n>this is subjective.\nWhether you like a paddle or button mag release is subjective, but I don't think anyone can defend the P2000's tiny stiff nub compared to the drastically better paddle release on a P30 or PPQ.\n\nAnyone can love a gun despite its quirks and imperfections, but to call a P2000 the best pistol ever made, then go on to praise it for being a \"block of pig iron\" and \"manly\" is really a stretch. Snappy can be fun, but it's definitely not a selling point in a 9mm.",
  "board": "k"
},
{
  "text": "They’re now drop safe with the new safety system. I’m getting at some point",
  "board": "k"
},
{
  "text": "Certainly at the top of the DA/SA guns.",
  "board": "k"
},
{
  "text": "The lowest tier .45 is above the highest tier 9mm.\nMy wife's a doctor.",
  "board": "k"
},
{
  "text": ">my dad works at nintendo",
  "board": "k"
},
{
  "text": "Does it matter where these notches line up on a Silencerco Saker? I took it apart to clean and when i screwed it back on they were almost lined up, when before they were offset almost perfectly.",
  "board": "k"
},
{
  "text": "enjoy your new paperweight",
  "board": "k"
},
{
  "text": "try unthreading it, while keeping the two pieces pressed together keep unthreading it. whenit \"clicks\" thread it again, to engage teh other threads. most threaded things have 2 sets of threads 180 apart so its easier to engage and lowers the likelyhood of cross threading. the other set of threads are what it was on before.",
  "board": "k"
},
{
  "text": "New here? Want a firearm license? Read this: \nPrevious thread : \n\nLets start with a question from OP\nWhere the fuck can I find a decent lever action in .357 for less than 900$?",
  "board": "k"
},
{
  "text": "At what point does a block of aluminum become a prohibited device?",
  "board": "k"
},
{
  "text": "I should have bought one of these desu I will regret it forever since they're about to be kill.",
  "board": "k"
},
{
  "text": "Could someone e/k/splain this to me: Go on eBay, search for 1/2x28 or 5/8x24 muzzle brake and pic related starts popping up among the search results of shorter, more \"typical\" muzzle brakes/compensators/concussion reducers etc.\n\nIs this a joke? If not, how would one even get these types of longer muzzle brakes to their fullest potential? Would you have to cut your own threads to put a protective tube over it? I wouldn't want those delicate looking fins being exposed all the time and getting bent.",
  "board": "k"
},
{
  "text": "My apologies, I meant to reply to them and clicked your post number by mistake.",
  "board": "k"
},
{
  "text": "Theirs was ready to accept metal sleeves and turn it to a full on silencer though",
  "board": "k"
},
{
  "text": ">So yeah,\nFucking get the fuck out and go the fuck back to r/guns.",
  "board": "k"
},
{
  "text": ">tfw my bud is in film school\n>has free access to an ultra high speed camera\n>really want one of these and to film the bullet flying through the maze\n>afraid to buy one",
  "board": "k"
},
{
  "text": ">at school\n>go to machine shop area of school\n>ask Chad to make one for you\n>???\n>profit!",
  "board": "k"
},
{
  "text": "What do you use, /k/? I like Hoppe's 9",
  "board": "k"
},
{
  "text": "whatevers in the mud jug",
  "board": "k"
},
{
  "text": "Jesus Fuck. How many wipes you waste on one gun?",
  "board": "k"
},
{
  "text": "Have you been using honey mustard to clean your guns?",
  "board": "k"
},
{
  "text": "Montana X-treme bore solvent on cotton patches\nbore guides, tipton rods, nylon brushes and aluminum jags\nminimal mobil 1 oil and grease on certain parts",
  "board": "k"
},
{
  "text": "Will I get judged if I go to the range with this on my gun?",
  "board": "k"
},
{
  "text": "No dipshit.",
  "board": "k"
},
{
  "text": "So is everyone else at the range.",
  "board": "k"
},
{
  "text": "With that sticker? Probably.\nDon't like it? Take the sticker off.\nDon't care? Leave it on. People will basically shake their heads but that's about it.\n\nAlso Simonov frowns at it. Not as badly as Bubba with his Tapco and bullpup kits, but still frowns.",
  "board": "k"
},
{
  "text": "You can show up with a rifle exactly like mine with maybe a different color sling and I'll still judge you just as harshly with your fruity colored sling. \nIt doesn't matter really. A Fudd is going to try to give you unsolicited advice no matter what and act really smug and patronizing if you don't explicitly agree. So fuck it bring a nerf gun to the range for all it matters.",
  "board": "k"
},
{
  "text": "You are judged for every single action you take that someone else witnesses. Will anyone be willing to share their judgment of that with you? Probably not.",
  "board": "k"
},
{
  "text": ">unrealistic scenario inspired by action movies and blog posts about SHTF\n\nHow would you and your overweight, poorly trained militia buddies handle it /k/?",
  "board": "k"
},
{
  "text": "Fpbp. Sage",
  "board": "k"
},
{
  "text": ">triggered",
  "board": "k"
},
{
  "text": "What sort of SHTF do you mean? Since you mentioned militia, I’m assuming mass confiscation. Overweight, undertrained /k/ommandos will be slaughtered in direct confrontation. The only chance we have is asymmetrical warfare.\nThe issue with this is that the media, and the government are going to paint you as a terrorist, not the freedom fighter you have wet dreams about being.\n\nGuns are basically useless for the majority of this scenario. Chairman Mao wrote that the first step to any guerilla movement is to secure the support of the people. This provides your recruitment base, a place to hide or sleep if you and your home are compromised, hiding places for your weapons, among other things.\nAs a guerrilla you are in it for the long haul. It will likely be a long time before you have a network good enough to support your operations.\n\nFrom there, unarmed recon, thievery, and sabotage will be your best options. You dont have to kill, just make it an absolute nightmare for the enemy to be there. You attract attention by killing in your fledgling state, and you will be hunted down and crushed.\n\nGraduate little by little until you are big enough to strike, and even then you’ll only be able to strike at softer targets like the police. Rather than the Natguard or whoever they send.",
  "board": "k"
},
{
  "text": ">not making it into a gun pun",
  "board": "k"
},
{
  "text": ">>overweight, poorly trained militia buddies\nJust a bunch of drunken fags living in the past.\n\nNow, show me your war face",
  "board": "k"
},
{
  "text": "Old Thread\n\n\nThe Archive got us good edition\n\nCome one and all to shoot the shit about the classic rifles of yesteryear and the modern ones that, despite looking tacticool as hell, are still battle rifles.",
  "board": "k"
},
{
  "text": "I suspected you had an m14. \nI'm not well versed on the ins and outs of accessories for them so I can't really help you on that, I have a g3(PTR) and fal(kit build).",
  "board": "k"
},
{
  "text": "Trijicon actually makes a mount specific to the M14, but it's obscenely expensive.\n\n\nBasically allows you to take the picatinny adapter off your ACOG and mount it on that thing like you would on an M16 carry handle, there's several holes as well so you can move it forward/back.\n\nIt's like $700 for a mount though. Stupid money.",
  "board": "k"
},
{
  "text": "Rhodie chest rig came in",
  "board": "k"
},
{
  "text": "Is that one of the fireforce ones? \nI was considering the green one, as I have od green gear already.",
  "board": "k"
},
{
  "text": "Also can you double stack the mags or is it just one mag per pouch?\nI know you are using a g3 so it'll be a little different for the FAL mags but they are pretty close in size.",
  "board": "k"
},
{
  "text": "I had a dream last night where I was sitting on my porch and suddenly I saw a bright flash and a massive plume of fire rising up from Chicago in the distance. I went inside to watch the news. Over the course of the next 12 hours the US launched it's arsenal at Russia and Russia responded in kind. \nIn the end I kind of just sat around and drank. Didn't even try to protect myself or really feel scared. Just sad. Then my dog woke me up because the construction workers outside scared him. \nQuestion is what would you do?",
  "board": "k"
},
{
  "text": ">just double checked\n>actually 15 miles from the center of Maynard",
  "board": "k"
},
{
  "text": "Opp am I dead 15 miles from a Russian groundburst?",
  "board": "k"
},
{
  "text": "I know that, but the way most, even Opp, have made things sound, a full GTNW is not bad at all and that has me concerned.",
  "board": "k"
},
{
  "text": "RIP spider-bun",
  "board": "k"
},
{
  "text": "Whats the yield?",
  "board": "k"
},
{
  "text": "is it possible to sharpen a stainless steel sword into a home-defense claymore?\n\nif so how?",
  "board": "k"
},
{
  "text": "Don't\nStainless steel is too brittle for longsword blades, you can get hair poppin sharp but as soon as you try to cut water bottles and archery targets in your driveway it'll fucking shatter, that is if the blade will even stay in the handle that long.",
  "board": "k"
},
{
  "text": "You don't want stainless in a katana either\nI'll translate into weeaboo for you\nGrorious nippon brade musta be carbon steeru.",
  "board": "k"
},
{
  "text": "Are you retarded? You position yourself on the draw bridge over your moat, obviously. Plenty of space to swing it.",
  "board": "k"
},
{
  "text": ">groin to shoulder\nWhat, on the upswing? Sounds like a pretty advanced technique to me.",
  "board": "k"
},
{
  "text": "Don't ever insult the Gaels by calling that trash a claymore.",
  "board": "k"
},
{
  "text": "Does anyone have any experience with JRA m14's? I'm looking into getting an m1a/m14 and was drawn to initial rave reviews, forged receiver, and a price point about equal with an SAI standard. But I've also seen some more alarming reports going from poorly fitted oprods and trigger housings to lousy customer service, plus the warranty is only good for a year from date of purchase anyway. With all of that being said I'd like to try and weed out isolated incidences as well as 60 year old retiree fanboying",
  "board": "k"
},
{
  "text": "Seriously its such a simple rifle. Gas cylinder just screws on as its meant to be removable for high level maintenance/cleaning and the bolt removal is part of standard field strip. The only remaining part other than the barreled action is the muzzle device which is held on by a castle nut and set screw, and the oprod guide which is usually friction fit with a roll pin to secure it. But ive seen people do anything from knurl it on to JB weld and had 0 issues. \n\nFucking up an M14 is fucking hard. Which is why SAI is able to make them.",
  "board": "k"
},
{
  "text": "Got a problem with my SA M1A, first issue ever\n\nSeems the magazine won't strip rounds to chamber, they're too low and the mag is tilted too low of an angle when its locked in, all it does is force the point of the round into the lower lip of the chamber.\n\nAny help?",
  "board": "k"
},
{
  "text": "Are the feed lips bent? I havent had this happen with my M14 yet but it did happen with my mini. Check feed lips and try a different mag. Make sure mags locking in properly",
  "board": "k"
},
{
  "text": "Also are you rocking the mag in correctly like an AK or are you jamming it in straight where it isnt seated/locked in properly. This would also cause the front end to sit too low.",
  "board": "k"
},
{
  "text": "I saw a few posts by him yeah. I didn't know he had a YouTube channel though so I'll look that up. My biggest issue with Fulton is their price. $1500ish is already on the expensive side for me and while I have no doubt it's a well built firearm I can't rationalize spending about $2700 on it. What makes it worth another $1200?",
  "board": "k"
},
{
  "text": "Discuss",
  "board": "k"
},
{
  "text": "Don't be jealous pasty huwhite boi.",
  "board": "k"
},
{
  "text": "What business did they have doing that? It's not taking place in America\n>i'm on a watchlist now",
  "board": "k"
},
{
  "text": "The world is American business. We're the world police.",
  "board": "k"
},
{
  "text": "Why tho, can't free citizens offer humanitarian aid to oppressed farmers?",
  "board": "k"
},
{
  "text": "Pretty much this.\n\ncan't let you plantation niggers run off and hurt actual people!\n\nWell... the boat was pretty much a 250k ship and the intention was sinking refugee boats. Being that anon actually had the money and was getting ready to buy the boat.",
  "board": "k"
},{
  "text": "What do you guys think of my new Eight Six? I love it!",
  "board": "o"
},
{
  "text": ">pops hood\n>sohc 4ac\n>it's an 85 \n\npic related",
  "board": "o"
},
{
  "text": "Levin>Trueno",
  "board": "o"
},
{
  "text": "I'm seeing more and more chink tires on cars now. Is anyone else worried about it?\n\nalso how do they get away with ripping off the good year, continental, etc fonts?",
  "board": "o"
},
{
  "text": ">craftsman name \n\ncraftsman thats not USA or Japanese made is not worth buying \n\nI only buy snapon and harbor freight tools",
  "board": "o"
},
{
  "text": ">I only buy snapon and harbor freight tools\nI remember when it was possible to see a Snap-on truck parked at various shops and dealerships. But after Harbor Freight moved in, there's no more Snap-on. HF had one of its earlier stores in this area too so the younger mechanics have grown up with HF before they started working, and probably didn't toss the HF tools but kept on using them after they got employed. I've taken a peek at the service area of the chebby dealer and there's some pittsburgh tool carts in there at more than one station. Professionally trained Chevrolet dealership mechanics have moved on to using Harbor Freight.\n\nAmerica should revamp its expensive industries and go Harbor Freight. It can be the supplier of tools and parts for the airlines and medical industries. Ahhhhh, my brain surgeon was trained at Harbor Freight University and graduated Magnetic Tool cum Laude!",
  "board": "o"
},
{
  "text": "Good luck the day you have to emergency brake.",
  "board": "o"
},
{
  "text": ">what differenciates chinkshit to branded tires\nThey feel more plastic when you touch them and have less grip.",
  "board": "o"
},
{
  "text": "I wish there was a HF but with decent American made tools. Like even if they manufactured them well in the US, they could sell them at a much more reasonable cost if they didn’t feel the need to sponsor NASCAR teams and get middle manned by distributors and retailers so many times that the tools cost 10x more than they’re worth.\n\nIf the US made stuff could be sold at 1.5x the cost of Chinese stuff (this should be reasonable considering you don’t have to pay the shipping costs and possibly tariffs), I would gladly spend $20 on a set of US made chisels instead of $14 at HF. But instead somehow I can go down the road and get 2 sets in different sizes at HF for <$30, and some similar chunks of steel from Proto are nearly $200.\n\nThey need to at least come close to competing.",
  "board": "o"
},
{
  "text": "What do you think about gassers?\nDo you like the way the look?",
  "board": "o"
},
{
  "text": "Equally as raw looking, in a good way",
  "board": "o"
},
{
  "text": "Fucking love gassers. I'd love to daily one. \n\nHonestly I don't get whats not to like about them (other than shit handling)\n>Big ass engine\n>Light front +traction on back = wheelie machine.\nI get that they're crude and there are better machines out there, but who doesn't love the idea of simple power?",
  "board": "o"
},
{
  "text": "How hard would it be to daily? Whats your commute?",
  "board": "o"
},
{
  "text": "Yep. Gassers, super stock, funny cars. A lot of it.",
  "board": "o"
},
{
  "text": "The cars Welder Up build are atrocious.",
  "board": "o"
},
{
  "text": "Questions that don't deserve their own thread thread.\nIs there a problem with using only water in the cooling system for the first start after a head gasket job? Also does it really matter if you don't vacuum fill it?",
  "board": "o"
},
{
  "text": "if you’re fine with having a dud out of the box and maybe replacement in 6 months time then you’re still 50 bucks ahead\nits cheap enough that shit is fine\n\n\nthe mileage is ridiculous, not worth it",
  "board": "o"
},
{
  "text": "If nothing else runs off the same belt, then sure.",
  "board": "o"
},
{
  "text": "about a year ago i finally had to buy new tires for my corolla, a 2012\nI splurged and bought some offbrand michellin tires for my corolla (Tiger Paw Touring?) instead of the normal cheap shit that i would haven normally and probably should havebought, they were only like 15$ more per tire so i decided to go with them, i probably paid like 62$ per tire. the cheap ones were rated for 30,000 miles\n\nthe ones i bought were 70,000 miles, i don't drive the car much at all, it was a hand me down and combined, the car just hit 38,000 miles and averaging a total of like 5,250 a year\n\n\nDo i need to worry about the rubber getting old or anything like that? Did i fuck up? \ni don't find it realistic to say i won't have to worry about tires until it hits 100k.\ni feel like i fucked up, the grip and water siping is fucking great though so i think it could have been worth it",
  "board": "o"
},
{
  "text": "Is RWD really that worth it?\n\nI have a choice between the Civic EP3 and MR2 W20. I would enjoy the remote locking, safety and trunk space of the Civic but everyone on here shits on FWD. I haven't had the chance to hoon a rwd car so I'm not sure how much I would value it.",
  "board": "o"
},
{
  "text": "so i was looking for mtf for my civic and oreillys website gave me 10w-30 motor oil and says it works as mtf \nall the sources on google tell me they are very different oils \nwho was in the wrong here \nis this a really dumb question \nand i know about the genuine honda mtf but its expensive",
  "board": "o"
},
{
  "text": "Reliability/Longevity Tier list\n\nThis list is based on analyzing the mileage of used cars in Europe.\n\n1st tier\n>Mercedes-Benz\n\n2nd tier\n>Toyota\n>Lexus\n>Volvo\n\n3rd tier\n>Honda\n>Volkswagen",
  "board": "o"
},
{
  "text": "> a list of diesel and hybrid engines and displacement figures by manufacturers.\n\nPlease tell me you got this from somewhere, that you did not do the research by yourself.",
  "board": "o"
},
{
  "text": "Thats not a good method to define reliability because people buy Mercedes and BMWs as a confortable cars for highway, usually for long commutes. While Toyotas and Hondas are mostly small cars used in the cities.",
  "board": "o"
},
{
  "text": "You understood that? All i can tell from the list is that they make the most diesel and hybrid offerings of any brand sold in Europe.\n\nSays nothing about reliability. In that case why is Mazda above those other companies?",
  "board": "o"
},
{
  "text": ">1st tier\n>Mercedes-Benz\n\nLol just been fixing black death on friend's C220 CDI today.",
  "board": "o"
},
{
  "text": ">Shit tier\n>Fiat\n>Alfa Romeo\n\nEver heard of 1.9JTD?\n\n5th tier\n>Opel\nI did 180000 miles in 3 years in Vauxhall Insignia with 2.0 CDTI. Literally 0 issues.",
  "board": "o"
},
{
  "text": "When the Momo you order comes in fake. Fatal thoughts of suicide.",
  "board": "o"
},
{
  "text": "Or maybe save your money and buy something that isn't soulless and beige. Or go ahead and add a shiny shifter knob to it. Because not only are you broke, you're too impatient to save up for something better.",
  "board": "o"
},
{
  "text": ">soulless beige corolla\ni prefer the term period correct",
  "board": "o"
},
{
  "text": "this but unironically",
  "board": "o"
},
{
  "text": "I bought fake iridium sparkplugs once. I made those fuckers take it back and pay for shipping.",
  "board": "o"
},
{
  "text": ">fake iridium sparkplugs\nthose are a thing?",
  "board": "o"
},
{
  "text": ">hurr durr lease a car it's much cheaper monthly\nAt the end of your agreement you end up worse off. Why are people falling for it?",
  "board": "o"
},
{
  "text": "People suck with money",
  "board": "o"
},
{
  "text": ">10.9% APR\n\ngood lord",
  "board": "o"
},
{
  "text": "your weird british calculator is factoring in a purchase at the end of the lease\nthe advantage to leasing is being able to have a lower monthly payment and then turning in the car at the end of the lease instead of (presumably) selling the car privately\nthe idea being the amount you pay into the lease is less than the amount you would have lost in depreciation\n\nthis obviously makes the most sense when you want a new high depreciation car every few years and are willing to pay the premium for always having a nice new car\nthere are also tax implications(in the US at least) for those that are willing to play with loopholes\n\nin your example you would only be paying 280.40*47 and then you have the option of the final 6059.85 to purchase the car outright or turn the car in\nthese terms combined with that fucking insane 10.9% interest makes whatever shitbox this is a fucking joke\n\ntake a look at the difference between leasing a loaded land rover and buying one\nthat's what leasing is for",
  "board": "o"
},
{
  "text": "Why are americans so shit at making \"daily\" average cars? I know its expected for the nips to dominate this section of the auto industry, but american dailys and econoboxes are so undeniably shit. I stepped inside a new honda, and i was just blown away at all you can get for such a low price. and toyota is not much far behind. i also recently got into a new sub 2k mileage f150 and i already saw the cheap plastic door applique all fucking scratched up.",
  "board": "o"
},
{
  "text": "you can thank millenials for that.",
  "board": "o"
},
{
  "text": "This does not fall on millenials. Millenials get blamed for a bunch of shit they never had anything to do with while, at the same time, being THE most fucked over generation in decades.\nSo why aren't there any coupes anymore? Millenials do not have money to buy cars, so they can't be blamed.\nWho's been hoarding all the money and refuses to buy coupes that aren't retro garbage?\nBoomers",
  "board": "o"
},
{
  "text": ">Boomers near singlehandedly keeping new car market afloat\n>Buy nothing but silver and beige crossovers with as much luxury features that their pensions will allow\n>Totally fine with buying off the lot to the point that ordering a car from the factory is nearly impossible\n\nGod I hate them so goddamned much.",
  "board": "o"
},
{
  "text": "This\n\nI'm 30. It still is unusual and noteworthy to me if someone my age drives a new-ish car that's more expensive than a Fiesta or Accent",
  "board": "o"
},
{
  "text": "im 28 and drive a 2015 Kia and my car is much newer than what most people my age drive. i know people who are still driving the same cars they got at the end of high school almost 10 years later.",
  "board": "o"
},
{
  "text": "I'm excited",
  "board": "o"
},
{
  "text": "i'd rather just spend the money on 1UZ swapping a gt86",
  "board": "o"
},
{
  "text": "bmw still offers a manual m4 with 450hp and a manual M6 with 600hp so that is bullshit",
  "board": "o"
},
{
  "text": "porsche\nmercedes\nbmw\naudi",
  "board": "o"
},
{
  "text": ">Camaro is only fast because of its 650hp powerplant\nbut the naturally aspirated 450 HP one destroys everything BMW could offer under 100k",
  "board": "o"
},
{
  "text": "I think the Genesis Coupe had a manual with 300+ hp so they definitely have one, dunno if it’s any good though.",
  "board": "o"
},
{
  "text": ">This is now a thing edition\nAsk detailing questions here. \n\n>Where do I start? \n\nGet in here faggot, it's time to take care of your shitbox.",
  "board": "o"
},
{
  "text": "I see. I'm gonna watch that video. Thanks for the info my man. I've just been putting off taking care of my Ranger.",
  "board": "o"
},
{
  "text": "If it hurts your your hand from the same distance, it's too close. Otherwise it won't hurt it.",
  "board": "o"
},
{
  "text": "what do yous guyses think of chris fixes car cleaning method?\n\n\nis this a good thing to do and is there anything i can add onto this to make it even better?",
  "board": "o"
},
{
  "text": "This is good, but he doesn't cover as thoroughly as Larry does in the main video I added on the pastebin. You can always remove steps out of the one from AmmoNYC",
  "board": "o"
},
{
  "text": "Remove steps based on how clean your car already is*",
  "board": "o"
},
{
  "text": ">spending $3k on a clapped out 15 owner civic with 300k miles when you can buy mercury and buick gawdmusheens for less than half that with sub 100k miles and extremely cheap parts\nwhy do people do this?",
  "board": "o"
},
{
  "text": ">bought beat up accord\n>realize I'll have to spend more than what I paid for the car itself just to get the dents bumped and repainted\n\nCan't believe I fell for the meme. I think I'm just gonna ride this piece of shit for awhile and save up for a clean grandmabile.",
  "board": "o"
},
{
  "text": "pic was $1800 with 50k miles, a dented rear fender and a cracked/dented bumper I pulled out with a large socket",
  "board": "o"
},
{
  "text": ">car is cheap because it has flaw\n>wtf this flaw is expensive to fix\n>>caring about the aesthetic of your clapped out shitbox\nDo you even think?",
  "board": "o"
},
{
  "text": ">bought insanely clean low mileage accord \n>wrecked it into the back of a Tundra oops\n>replaced the hood and fender with mismatched parts\n>car is three different colors\n>don't give a fuck bc im not a faggot",
  "board": "o"
},
{
  "text": ">not taking pride in your possessions",
  "board": "o"
},
{
  "text": ">he doesn't own a miata because he is afraid that people might call him gay",
  "board": "o"
},
{
  "text": "this\n>took miata on the track recently\n>super hot outside\n>miatas (or at least mine) have tendency to oversteer when pushed, both during braking and while trying to take corner too hard\n>as i said, hot outside\n>overpressurized, hot tyres on rear were giving up quickly\n>throwing my ass through corners like a proper chad\n>all of that while also maintaining high speed\npushing miata to the limit is amazing challenge that lets you learn a lot (for example, i've just learned about tyre pressures, gonna try tinkering with it on my next track visit). if the other guy thinks that \"anyone can push miata to the limits\", he clearly don't know shit about pushing cars to the limit",
  "board": "o"
},
{
  "text": "I also have an ND. I feel the same. I actually fit in it too.",
  "board": "o"
},
{
  "text": "I can see myself going from NB to Fiat 124",
  "board": "o"
},
{
  "text": ">If you guys ever have the money for it get an ND its basically a direct upgrade to an NA shits great\n\nyou're paying $25k+ for it though, not really worth it if you already have a miata",
  "board": "o"
},
{
  "text": ">buying a car new and not slightly used.\nk\n>2016 vs 1991\nk",
  "board": "o"
},
{
  "text": "Post any and all landcruisers",
  "board": "o"
},
{
  "text": "Why shouldn't I spend at least $15k on a J70?",
  "board": "o"
},
{
  "text": ">wanted to replace old worn hubcaps on my 97 lx450, purely for aesthetic reasons\n>Lexus wanted 70 bucks a pop for them at the time\n\nScrew that noise",
  "board": "o"
},
{
  "text": "At one point my dad had a 77 fj40, 86 fj60, and a 97 fj80. I still don't know how he convinced my mom he needed all three lel",
  "board": "o"
},
{
  "text": "Just as long as you know that's a Prado, aka a lighter-duty version of the 70 series. Still good tho.",
  "board": "o"
},
{
  "text": "Why didn't the gt86 come as a lift back sort of a trunk like celicas? it looks like it has the shape to suit it and it would've added some great functionality for daily use\n\ncome to think of it.....why doesn't there seem to be any liftback coupes anymore?",
  "board": "o"
},
{
  "text": "Chassis stiffness.",
  "board": "o"
},
{
  "text": "I have always thought they should have done that with the 86. I daily drive a Celica for 5 years and it was amazing how much space you had with the rear seats down. I would sacrifice some rigidity it the 86 for a much more practical car.",
  "board": "o"
},
{
  "text": "BMW has the 4 series Gran Coupe and the 3 series GT (the latter of which looks like a turtle). \n\nVW came out with the Arteon.\n\nBuick has the new Regal Sportback.\n\nIt looks like this will become a common format. There were rumors that Honda was going to do it with the new Accord - the coupe body style fits it well.",
  "board": "o"
},
{
  "text": "Hatch/liftback designs wont perform as well in a rollover test versus the coupe with trunk design\nYou can reinforce the liftback but then you kill pretty much all of your rear visibility and have huge blindspots",
  "board": "o"
},
{
  "text": "Why make a liftback when you can make...",
  "board": "o"
},
{
  "text": ">loses lemans this year\n>president fired for touching children\n>can't afford to build anymore cars\n>gets raped by ZR1 at VIR\n\npffffffthahahahahaha",
  "board": "o"
},
{
  "text": ">GM still loses at Le Mans",
  "board": "o"
},
{
  "text": "This",
  "board": "o"
},
{
  "text": "He went straight into the wall",
  "board": "o"
},
{
  "text": "I'm wondering if anyone here knows why those cars changed since the first year.",
  "board": "o"
},
{
  "text": "I'm so confused. How did this happen? There's one right in front of him going what looks to be the same speed.",
  "board": "o"
},{
  "text": "I'll keep this short, just because I just need someone to tell me or at least explain what may be going on. Yes, as it reads my dogs are creeping me out and it's because of their strange howling they do out of no where in the early mornings. It's very random at times on the day it happens but it really puts me and my father in shock every time because they don't stop until they feel like they are done. Yes it's sounds strange, I bet many of you are thinking.. \"Why don't we scare them to stop doing it? or Why don't we grab them?\" right?.. We'll they don't seem to recognize us when we get near them and they don't listen and keep howling.. The pit bull I have even tried to attack me as if she didn't recognize me. What is happening??? Can anyone enlighten me? Also my father believes it's the spirit of the old man who died in my house who's scaring them. I for one don't believe in that much since I sleep in the room where the old man died.I'm going to upload a video once I catch them in the act again but it really creeps me out..",
  "board": "an"
},
{
  "text": "do you have your heat or A.C set ti rise temp in the morning? it may recently be making a noise in range to freak out the dogs. is your neighbor doing construction? are they intact and is there any possibility a intact female near-bye gets let out to piss in the morning. if the intact dog, they are in a trance basically trying to communicate with female, nothing else matters to them.",
  "board": "an"
},
{
  "text": "it is the time of the year for things to nest in your attic, in the early morning it is possible they hear and smell a strange animal entering [the walls or attic or crawlspace] from the night or leaving for the morning. this is probably distressful to a territorial dog that basically senses something in the house it cannot get to. then in their view your ass freaks when they get goin every morning re-enforcing their freaking out.",
  "board": "an"
},
{
  "text": "ya gotta remember your basically blind as a human as far as senses go.",
  "board": "an"
},
{
  "text": "Found the actual newfag",
  "board": "an"
},
{
  "text": ">The pit bull I have even tried to attack me\nSounds like everything is working as intended.",
  "board": "an"
},
{
  "text": "Compliment my cat, her name is chloe and she is cute as hell",
  "board": "an"
},
{
  "text": "Dunno why don't you git gud and buy a better camera just for her.",
  "board": "an"
},
{
  "text": "Very cute and nice colors but weird pawns.",
  "board": "an"
},
{
  "text": "here's my Aurora",
  "board": "an"
},
{
  "text": "qt",
  "board": "an"
},
{
  "text": "she is beautiful\ni love calicos",
  "board": "an"
},
{
  "text": "Cats hate Cucumbers edition:\n\nCopypasta:\n\nJoin the cat conversation at #mammal\n\nFood & Nutrition\n>>\nOutside Enrichment\n>>",
  "board": "an"
},
{
  "text": "I miss my cat.",
  "board": "an"
},
{
  "text": "I really don't get this \"all cats are angels and you're a sack of shit if yours isn't\" attitude. \nI've researched for months and tried all I can, you gotta understand my situation here. Just give some advice please",
  "board": "an"
},
{
  "text": "Cats arent really angels\nMore like mirrors\nThey're a reflection of their owners attitude and temperament",
  "board": "an"
},
{
  "text": "then she should be stoner-tier sedated considering how calm I am around her 24/7",
  "board": "an"
},
{
  "text": ">tfw first day letting the new cat alone with the other two and they haven't killed each other yet",
  "board": "an"
},
{
  "text": ">mediterranean field crickets are so loud i put them outdoors not to have to use earplugs to fall asleep\n>i still hear them\nreee",
  "board": "an"
},
{
  "text": "Why are there crickets in your flat? Just get a door.",
  "board": "an"
},
{
  "text": "Some people raise crickets as feeders for their other pets anon",
  "board": "an"
},
{
  "text": ">not using silent and nutritionally superior roaches as feeders",
  "board": "an"
},
{
  "text": "This, they're also far less disgusting and dirty.",
  "board": "an"
},
{
  "text": "kek",
  "board": "an"
},
{
  "text": "I don't know what to do with this little feral.\n\nHe/she showed up on our doorstep, probably only 8-10 months. Not socialized at all, very skittish. For the moment Ive been putting out food and water and there's a little upside down cardboard box he's been crashing in, and it's great. Doesnt quite seem old enough to be sexually mature as I havent heard it caterwauling. It felt safe here though and would spend hours hanging out in its little box.\n\nThere's another cat that started coming around, which HAS been caterwauling. It's a little fucked bengal looking for a bitch. Yesterday, when the little black kitty was just hanging out in its box, the bengal came around, made a fuckton of noise, and attacked it before I could come around, and the kitty hasn't been back since.\n\nDo you think it will come back, or does it not feel safe here anymore? What do I do about this bengal? Do I throw water on it to make it fuck off? Do you think this skittish but well demeanored black kitten is socializable? Im thinking it should come back as long as I give it food. I know I want to trap it and bring it to get checked out and shots and etc but the bengal I want to trap and get neutered even if it IS owned because its a fucking neighborhood nuisance (the other night woke me up at like 4 AM with MAAAWWW MRAAAAWW MAAAAWWWWW, fuck that shit)",
  "board": "an"
},
{
  "text": "He wants to be your friend OP\n\n\n\nKys",
  "board": "an"
},
{
  "text": "no u\n\nsupporting ferals in any capacity is animal cruelty. PETA actually got this one right.",
  "board": "an"
},
{
  "text": "Either take it in and neuter/sterilize it or don't feed it. Nothing good will come of it if you do.",
  "board": "an"
},
{
  "text": "It's just a cat that needs food and shelter.",
  "board": "an"
},
{
  "text": "I think you should try to make it comfortable if it comes back. Feral cats can become pets if you're friendly enough to them, and let them know that you're not aggressive. If you can, trap the cat and take it to the vet just to be sure that it's physically in good shape.",
  "board": "an"
},
{
  "text": ">hey anon, that's a nice driveway\n>mind if i just wiggle through?\nITT: Plants Without Manners",
  "board": "an"
},
{
  "text": "I hate this shit \nIt took over my favorite creek to play in and then took over the whole neighborhood",
  "board": "an"
},
{
  "text": "I see you have a nice fresh lawn. \nDon't mind if do. \n\nI've dug it up. \nTurned the lawn. \nScreamed at it. \nUsed pesticides. \n\nNow half my acre lot is creeping charlie\nI'm about to resolve and seed with Texas blue grass as it isn't terribly awful to look at and heard it chokes out everything. I'm not growing anything but already developed shrubs and fruit trees and bushes.",
  "board": "an"
},
{
  "text": "you need a vigorous grass variety, with regular feeding and cutting low as possible.\nvery few weeds can outcompete a healthy lawn in my experience.",
  "board": "an"
},
{
  "text": "Forest? What forest?",
  "board": "an"
},
{
  "text": "never have i seen an uglier plant",
  "board": "an"
},
{
  "text": "Do you agree with this /an/? Are the dogs we know and love today a mangled monstrosity of humans constant intervening to destory nature?\n\n\nAlso, Pure Breeds and far superior to that of Mutts prove me wrong protip: you can't",
  "board": "an"
},
{
  "text": ">Pure Breeds and far superior to that of Mutts prove me wrong protip: you can't\nThe picture you just posted proves you wrong.\n\nAlso, just some muts are vastly superyor to some purebreeds. I'm talking about village dogs that descend from the very first domesticated dogs, without any traceable prurebreed ancestry. Mutts thar are the result from two purebreeds are even as bad as show purebreds.",
  "board": "an"
},
{
  "text": "If a purebreed can survive in the wild as weel as these feral mutts it passes the survival test.",
  "board": "an"
},
{
  "text": "Assuming you're talking about the skull of a bull terrier, I don't recall reading about health problems associated with it's head shape like pugs and bulldogs do. The health problems they do have seem entirely unrelated and usual for plenty of purebred breeds. \n\nBeen awhile since I read up on them though and I'm excluding the 'mini' versions.",
  "board": "an"
},
{
  "text": "Found indoors in Iowa. Only one.",
  "board": "an"
},
{
  "text": "pseudoscorpion",
  "board": "an"
},
{
  "text": "Thank you senpai",
  "board": "an"
},
{
  "text": "dont listen to him, thats a zergling, smaller kinda zerg",
  "board": "an"
},
{
  "text": "thought to be lost to the ages, he returns from the depths of his chamber...",
  "board": "an"
},
{
  "text": "Since this is only one of two threads about rats and the other one is specifically about lesbian rats : Any advice/experience on old rats getting handicapped? my senior++ little furry companion has - as it happens at his age - problems with his back legs, which reduces his mobility (not that he did not find some ways aound it in some occasions), so i'd like to know some more in order to accomodate him furthermore. Should i give him steroids already even though he is pretty healthy except for that and a benign tumor just starting to grow.",
  "board": "an"
},
{
  "text": "Obese dumbo rats are the fucking cutest shit in the world nigga",
  "board": "an"
},
{
  "text": "Dios mio......",
  "board": "an"
},
{
  "text": "very big",
  "board": "an"
},
{
  "text": "el rato....\nes fato...............",
  "board": "an"
},
{
  "text": "Wonderfoal Horse General\n\nPeep Edition",
  "board": "an"
},
{
  "text": "How do I go faster?",
  "board": "an"
},
{
  "text": "fresh horse bread",
  "board": "an"
},
{
  "text": "Jesus Christ...inserting a nasogastric tube, step one is checking its in the stomach and not the lungs...blowing into the tube confirms proper stomach placement by the smell of the air coming back out ie: digesting food smells",
  "board": "an"
},
{
  "text": "Why? This thread hasn't even reached post/imagine limit yet",
  "board": "an"
},
{
  "text": "horses cannot barf so they get colic, so unless you want to spend 2000 every-time your horse gets constipated... you desensitize it to having a hose shoved up its ass to administer a enema.",
  "board": "an"
},
{
  "text": "A question for the ages\n\n",
  "board": "an"
},
{
  "text": ">touched random animal carcasses as a child\nThere’s something extremely wrong with you.",
  "board": "an"
},
{
  "text": "This is console war tier.\nFuck off.\n\nthis, though my cat plays fetch too.",
  "board": "an"
},
{
  "text": ">All this talk about \"toxo\"\n>Meanwhile dogs are responsible for most of the zoonosis transmission towards humans.\n>Also responsible for 99% of human rabies cases.",
  "board": "an"
},
{
  "text": ">rabies deaths in the usa per year: 1 or 2\n>toxo deaths in the usa per year: 750\nhmmmmmmmmmmmmmmmmmmmmm",
  "board": "an"
},
{
  "text": "i'm allergic to dogs so im with team cats",
  "board": "an"
},
{
  "text": "Hi everyone. I came home from a short vacation and noticed my furbaby had something wrong with her left eye. It almost looks like a red cloud in the clear portion of eye. She isn’t tearing up and doesn’t seem bothered by it, she’s acting normally it seems so far. Does anyone know what may be wrong with her? I don’t see any superficial trauma. Is this something that may likely clear up on its own or is this something I should be worrying about enough to take her to the vet? Any help would be much appreciated, I would’ve never have gone on vacation knowing this would’ve happened.",
  "board": "an"
},
{
  "text": "say it with me: \n\nc a t s a r e v e r m i n\na\nt\ns\n\na\nr\ne\n\nv\ne",
  "board": "an"
},
{
  "text": "No, it’s a term used by retards who think their pets are their literal children instead of animals.",
  "board": "an"
},
{
  "text": "Dont ever get tired of parroting the same phrases\nOr your dream to grow feathers won't come true\nFly away bitch",
  "board": "an"
},
{
  "text": "are you a child? or esl?",
  "board": "an"
},
{
  "text": "I think its the toxo speaking",
  "board": "an"
},
{
  "text": "Do animals enjoy smelling flowers like humans?",
  "board": "an"
},
{
  "text": "Mostly depends if theres an evolutionary purpose to enjoy some smells over others, so yeah most animals would",
  "board": "an"
},
{
  "text": "to think, really smelly flowers would help carnivores to hide as they approach.",
  "board": "an"
},
{
  "text": "Does my cat enjoy smelling my farts?\nshe hardly tries to escape when I hold her head",
  "board": "an"
},
{
  "text": "Please don't do that to her",
  "board": "an"
},
{
  "text": "Shut up gaywad",
  "board": "an"
},
{
  "text": ">Pitbulls are VIOLENT, SAVAGE dogs\n\nHonestly, how uneducated do you have to be to believe this? It's the owner, not the breed.\n\nPic related is my Pitbull, so savage! so dangerous! He plays great with my baby too.",
  "board": "an"
},
{
  "text": ">he broke in to get his sounds stem back\nOh man what a bad guy",
  "board": "an"
},
{
  "text": "a couple of uppercuts to the throat will do",
  "board": "an"
},
{
  "text": "..ngerous animals and should be banned.",
  "board": "an"
},
{
  "text": "The violence is ingrained in their tainted blood.",
  "board": "an"
},
{
  "text": "Bee boy",
  "board": "an"
},{
  "text": "If a person moves at a specific velocity along the surface of earth in a specific direction facing the sun, is it possible for the person to see the sun as stationary with respect to the person?\n\nIf possible, please give details.",
  "board": "sci"
},
{
  "text": "Aye, I could do that",
  "board": "sci"
},
{
  "text": "How did you calculate that?",
  "board": "sci"
},
{
  "text": ">Sure, if you can keep up a speed of 460 meters per second.\n\n\n1: Go to the North or South pole. (In summer, please.)\n2: Face sun.\n3: Turn slowly, about half the speed of the hour hand on a watch.\n4: ?????\n5: PROFIT!",
  "board": "sci"
},
{
  "text": "Get the time of sunlight at your latitude during this time of the year in hours, call it T.\nEarth perimeter at your latitude in km, call it P.\n((24/T) * P)/T will give the speed at which you have to move to avoid sunset.\n\nAs the anon above said, in the poles it's easier. Half of the year is day, half is night.",
  "board": "sci"
},
{
  "text": "You would hit the great ice wall.",
  "board": "sci"
},
{
  "text": "Is there any proof that depression isn't just a (((scam)))? I'm having trouble believing that it is real ...",
  "board": "sci"
},
{
  "text": ">84\nthat dumbass meant to type (512, 64, 8, 1)\nthat’s a phenomenally fat finger lol",
  "board": "sci"
},
{
  "text": "divide by 8 ya brainlet",
  "board": "sci"
},
{
  "text": "BASED",
  "board": "sci"
},
{
  "text": ">84/8\n\nYou're probably right. Thanks",
  "board": "sci"
},
{
  "text": "I’m going with this,I believe I suffer from depression but I hide it and never tell anyone",
  "board": "sci"
},
{
  "text": "Wow really makes you think",
  "board": "sci"
},
{
  "text": "OH NO NO NOOOOOOOOOOOOOOOOOOOO",
  "board": "sci"
},
{
  "text": "This was very impressive. Great job Cornell! From not have five African American applicants, to admitting five! And look at all the women!",
  "board": "sci"
},
{
  "text": "Prove that minorities are getting favored under this process. Maybe whites are.",
  "board": "sci"
},
{
  "text": "The OP example you odd moron.\n\n",
  "board": "sci"
},
{
  "text": "Academia is a fucking joke \n\nfull of cucks and basedboys these days.",
  "board": "sci"
},
{
  "text": "(((Bind))) (((El)))",
  "board": "sci"
},
{
  "text": ">Prove that minorities are getting favored under this process.\nWhy? I didn't make that claim.\n>Maybe whites are.\nWould that make it okay?",
  "board": "sci"
},
{
  "text": "Last thread hit the bump limit, let's get this shit started.",
  "board": "sci"
},
{
  "text": ">go to two month long codemonkey bootcamp\n>make over $100k a year\n>study extremely challenging engineering subject for four years\n>$65k a year\nThis is some real bullshit right here.",
  "board": "sci"
},
{
  "text": "no, it shows how much more intelligent EEfags are, by wasting more time of their life, working harder, in order to gain less money\n\nif you're truly intelligent, you waste the academic opportunities you have at a young age and do something hard just for the sake of it and ignore the fact that jobs are for money",
  "board": "sci"
},
{
  "text": ">EE\n>my electromagnetism exam is in 3 weeks\n>don't really understand what the fuck is going on",
  "board": "sci"
},
{
  "text": "what dont you understand",
  "board": "sci"
},
{
  "text": "Equals repel, opposites attract",
  "board": "sci"
},
{
  "text": "talk maths\n\n\nprev",
  "board": "sci"
},
{
  "text": "Hmm, you can start by showing that if there exists an interval contained in [0,1] were the function is strictly positivez then then the integral must be non 0. From that, you can take the theorem that a function is rieman integrable, then the Jordan measure of their discontinuous points must be 0. And the points where it's strictly positive must be discontinuous I believe or there can't be a set of positive measure of continuous points or the integral would be positive.",
  "board": "sci"
},
{
  "text": "That was more or less my idea. What I couldn't figure out is how to get around the case where the set A is dense in [0,1] (e.g. Thomae's function). It doesn't seem possible to get an arbitrarily small cover of A in general.",
  "board": "sci"
},
{
  "text": "Can someone give me an intuitive explanation of when it's the case that\n\n\n\nWhere is the Lebesgue measure.",
  "board": "sci"
},
{
  "text": "You can define outer and inner measure by approximating the set with those n-intervals, and then taking the infimum or supremum, respectively, of the sums of geometric measures, you know, the usual way. To have a reasonable notion of measure, you would then like to have its outer and inner measure coincide. Therefore, .",
  "board": "sci"
},
{
  "text": "Oopsie, , not . Silly me~<3",
  "board": "sci"
},
{
  "text": "So I was reading up on Venus and came across this proposed NASA rover for it:\n\n\nIt says it is planned to be powered by a mechanical analog computer in order to survive the Venetian climate. Now I'm not very intelligent, but how the fuck could you accomplish anything of note with a mechanical computer? Aren't mechanical computers huge and only capable of performing extremely simple tasks (bombardier sights, simple calculators, etc.)? How would they be able to perform any kind of serious experiments with only a mechanical computer running the probe?",
  "board": "sci"
},
{
  "text": "Speedy didn't work very well in the heat.",
  "board": "sci"
},
{
  "text": "im more concerned about the Protomolecule. God knows whats going on down there",
  "board": "sci"
},
{
  "text": ">It's a concept for a Venus mission. It's not actually a planned mission.\nThis. I highly doubt they would ever actually use a mechanical computer for a mission like this because it would be many orders of magnitude slower and could not handle simple computations, much less complex shit like sensor processing and autonomy. In reality they will stick some rad-hardened components on it, which are still slower than commercial, but not insanely slower like mechanical would be.\n>So the computer is mainly just there to reverse the direction, turn, then go back to moving a straight line.\nIf they just pipe the data back to earth and send commands from there, it would not require as much computation, but then you have to deal with propogation delays which would limit capabilities. They will want to make the rover autonomous and that requires a lot of computational capability, even for just driving around and navigating the terrain.\n\nThe Curiosity rover used redundant RAD750 CPUs, which are still very slow by today's standards. There are better radhard processors out now or in the works, including more modern CPUs, FPGAs, DSPs, even probably some GPUs eventually.",
  "board": "sci"
},
{
  "text": "This is ridiculous ,the Soviet’s got a lander on the surface long enough to take pictures and this was in the 70s ,surely we have the technology to do a better job ?",
  "board": "sci"
},
{
  "text": ">>rad-hardened\nthat's cute. Rad hardened computers cannot function at these temperatures. At 450° C silicon is no longer a semiconductor. And besides, the computer is not doing much. Pic related is all it's supposed to do. This is intended to be done with some differential gears.\n\nThe temperature at which silicon stops semiconducting hasn't changed.",
  "board": "sci"
},
{
  "text": "last thread is about to die",
  "board": "sci"
},
{
  "text": "please",
  "board": "sci"
},
{
  "text": "What have you tried?",
  "board": "sci"
},
{
  "text": "not sure how to start. i think I would require the marginal distributions for both the mean and variance. then i would use some combination of the factorization criterion and the fact that its an exponential family distribution to obtain the sufficient and complete statistic.",
  "board": "sci"
},
{
  "text": "i guess i would need the joint distribution given the mean and the variance?",
  "board": "sci"
},
{
  "text": "How precise is an Electroencephalography? Could you use it to reliable control something complicated with your mind through it? How hard would it be to set such a thing up yourself?\nI have enough programming skills, I'm just talking about the physics behind it, like calibration and stuff, how precise can the thing get? Can you build one by yourself? Or do you need to buy one to get any kind of precise measurements?\n\nI want to connect a USB stick and learn to save and retrieve memories on there with my brain, I could write simplified drivers to make the interfacing easier, but I need a connection to my brain. No surgery though.",
  "board": "sci"
},
{
  "text": "I'm surprised no one has considered/invented this. \n\nWhy aren't there any CAD softwares/plugins which, in a similar fashion to a video game or Google Doc, would allow multiple users to join a lobby/server, and then work on the same project together simultaneously.\n\nNot only would this be so much easier than Aerospacefag 1 sending a CAD file to Aerospacefag 2 and so on and so forth to work on the same project, but it would also make learning CAD itself easier, since humans are natural good at working and adjusting to group environments.\n\nMaybe I'm retarded, but can an Anon explain to me why we don't have Autodesk Inventor LAN parties?",
  "board": "sci"
},
{
  "text": "It already exists",
  "board": "sci"
},
{
  "text": "Post your face when you are working real hard and make a cool thing and then someone rolls back to an early extrude and then adds a chamfer and all your work suddenly disappears for no reason.",
  "board": "sci"
},
{
  "text": "i think this would be pretty entertaining from a engineering management standpoint",
  "board": "sci"
},
{
  "text": "bump",
  "board": "sci"
},
{
  "text": "Use one of the million VCS programmers use you special snowflakes",
  "board": "sci"
},
{
  "text": "Okay /sci/ I need some help. Finishing up my first year at graduate school and I need to choose a lab. I conducted four rotations, three of which are candidates to me. What are some questions you would like to ask the PIs before making a commitment? I talked to them before one on one before, but I'm thinking of asking some follow up questions. \n\nHaven't given it much thought as I am studying for my candidacy exam. So any input would be appreciated. \n\nHere's the Wiggers Diagram for you physiology fags.",
  "board": "sci"
},
{
  "text": ">DO U LIEK MUDKIPS?",
  "board": "sci"
},
{
  "text": "The start of my theory on the beginning of everything",
  "board": "sci"
},
{
  "text": "Then keep on discussing others findings because clearly as evidenced by the level of engagement I've received, you're all incapable of producing your own innovative thoughts. I'll come back to disprove your beliefs. Just thought you'd be able to contribute.",
  "board": "sci"
},
{
  "text": "You still have failed to answer concrete questions about your own definitions and concepts.",
  "board": "sci"
},
{
  "text": ">I'll come back to disprove your beliefs.\n\nJesus fuck, don't come back at all. You're obviously absolutely retarded and didn't understand anything of what we tried to relay to you ITT. Please go share your findings with reddit next time, they might be more welcoming.",
  "board": "sci"
},
{
  "text": "That is still nonsense, you are still just using jargon, what the fuck does \"traced back to the origin\" mean?",
  "board": "sci"
},
{
  "text": "Love",
  "board": "sci"
},
{
  "text": "Why didn't Euclid ever prove that rect.BCEC = rect. ACDC?",
  "board": "sci"
},
{
  "text": "Oh, then I don't know.",
  "board": "sci"
},
{
  "text": ">Not realizing III. 36 clearly implies the statement in the OP.",
  "board": "sci"
},
{
  "text": "Where can I find the book?",
  "board": "sci"
},
{
  "text": "this is obviously not true, because rect BCEC could be near zero, and rect ACDC could be fairly big\nuntrue statements are difficult to prove, so thats why euclid didn't prove it",
  "board": "sci"
},
{
  "text": "Not true. If CE is near zero then C is close to the circle and therefore so is CD",
  "board": "sci"
},
{
  "text": "Do you think drugs should be legal or illegal and why?\n\nI think all drugs should be legal. Accessible medical grade of known purity and perfectly weighted amounts in sterile seals, taxed, with proper basic school education about safer use complete with age recommendations. I believe everything that's in the interests of a law abiding citizen is stomped on when gubmint can put you in prison for exporing various states of consciousness, sometimes with anti-inflammatory health benefits as is shown in cannabis and psilocybin use, among other substances.",
  "board": "sci"
},
{
  "text": "They should be legal because the most profound experience of my life was riding around the desert during sunset time on half a tab of acid. I cried literal tears of joy at the beauty of the world and cried for humanity and our plight. I'm not a more compassionate and thoughtful person as a result of this experience and it was an important point in my life\n\nLSD being illegal is a crime against humanity as far as I'm concerned, I mean this unironically.\n\nAnd no, I'm not a \"dude weed lmao\" druggy, I haven't taken any drugs for years and have a good STEM career. I just remember those times fondly is all and they expanded my view of reality tremendously. Nobody can just discount these experiences people like me have had off-hand.",
  "board": "sci"
},
{
  "text": ">I'm not a more compassionate and thoughtful person as a result\nI'm now*, mistype",
  "board": "sci"
},
{
  "text": "Furthermore, regardless of the affects of drugs, making them illegal just doesn't provide any benefits to society. It just creates a black market where criminals provide supply to meet demand, and over-fills prisons. Drug illegality should be re-assessed and psychedelics in particular need to be made legal. This includes weed",
  "board": "sci"
},
{
  "text": "Morphine should be available in case of heroin as it's less potent, giving users more room for error.\n\n\n\nThis obviously doesn't work. There is no reason drugs should be prohibited from sale. Also comparing LSD to floating tanks only gets you so far in having your opinions anything but completely dismissed.",
  "board": "sci"
},
{
  "text": "I used to think that drugs were cool and were opportunity to explore our sense and shit\nOn my last trip on lsd i realized that this was bullshit and that i was juste stupidly high and my brain was not working properly\nSo i quitted this shit, only weed now.",
  "board": "sci"
},
{
  "text": "What does our sun orbit around?",
  "board": "sci"
},
{
  "text": "A sun made of ice.",
  "board": "sci"
},
{
  "text": "your mom",
  "board": "sci"
},
{
  "text": "not even close - it gets close to the center if Jupiter is on the opposite side from Saturn/Uranus, but when they're on the same side, the barycenter is way outside the sun's surface",
  "board": "sci"
},
{
  "text": "nothing\n\nour solar system is a cell, and the oort cloud is the outer membrane",
  "board": "sci"
},
{
  "text": "The sun doesnt \"orbit\" anything. Everything orbits the sun retard. Fucking brainlets on sci fuck me",
  "board": "sci"
},
{
  "text": "/sci/, what do guys say about the concept of free will and of time being cyclical?\n\nalso, what do you think of Jordan Peterson's views on free will?",
  "board": "sci"
},
{
  "text": "free will is a spectrum",
  "board": "sci"
},
{
  "text": "would you agree that one should live his life as if time were cyclical?",
  "board": "sci"
},
{
  "text": "time is a flat circle, flat meaning no curvature, meaning its radius is infinity and therefore a flat circle is a straight line extending infinitely in both directions.",
  "board": "sci"
},
{
  "text": "I like him sooo much, he's my idol! Do you like him too, OP? He's so smart, look at his look and his hair, he also wears a suit. That's TOO cool.",
  "board": "sci"
},{
  "text": "It's time for the final showdown, /his/!",
  "board": "his"
},
{
  "text": "The bloodthirsty one shows his face",
  "board": "his"
},
{
  "text": "But isn't this the purpose of /his/?",
  "board": "his"
},
{
  "text": ">History & Humanities\nNah",
  "board": "his"
},
{
  "text": "Kill yourself faggot",
  "board": "his"
},
{
  "text": "Plz update",
  "board": "his"
},
{
  "text": ">\"Shall we expect some transatlantic military giant to step the ocean and crush us at a blow? Never! All the armies of Europe, Asia, and Africa combined, with all the treasure of the earth (our own excepted) in their military chest, with a Bonaparte for a commander, could not by force take a drink from the Ohio or make a track on the Blue Ridge in a trial of a thousand years. At what point then is the approach of danger to be expected? I answer. If it ever reach us it must spring up amongst us; it cannot come from abroad. If destruction be our lot we must ourselves be its author and finisher. As a nation of freemen we must live through all time or die by suicide.\"\n\nWhat did Lincoln mean by this? Was he talking about immigration laws?",
  "board": "his"
},
{
  "text": ">its democratic when my side win\nAll the republic not a democracy correlate with some guy unable to win the popular vote.",
  "board": "his"
},
{
  "text": "Well, from a more pragmatic standpoint, it's utterly retarded to stand aside and let a huge chunk of your country up and decide that it can leave because it wants to. If we take that to its logical conclusion, any little bumfuck county could declare itself a sovereign state if it felt like it and the U.S. would eventually balkanize into hundreds of irrelevant little fiefdoms.",
  "board": "his"
},
{
  "text": "So? The popular vote doesn't mean anything when the state is extremely big and the people aren't interconnected. \n\nThis insular culture NECESSITATES a formation of an Aristocracy.",
  "board": "his"
},
{
  "text": "The US did for all intents and purposes.",
  "board": "his"
},
{
  "text": "They should be able to concede. Concede defeat. Learn to spell you redneck dixie.",
  "board": "his"
},
{
  "text": "Not to be edgy or anything, but why is killing small children or babies worse than killing an adult? obviously that is a horrible question to ask and I feel extremely uncomfortable with this question but the point still stands.",
  "board": "his"
},
{
  "text": "You are programmed to mindlessly help babies so Human DNA can continue on, if you break that programming it means you are mentally defective.",
  "board": "his"
},
{
  "text": "kek",
  "board": "his"
},
{
  "text": "All life is equal.",
  "board": "his"
},
{
  "text": ">implying\nI'm better than all of you faggots.",
  "board": "his"
},
{
  "text": "There are plenty of good reasons to kill an adult human. They may be trying to kill you, or at war with you, or have committed murder.\n\nThere are very few good reasons to kill a baby or a child.\n\nThat and groups of humans that didn't look after their children went extinct and didn't pass on their genes, so there's a genetic tendency to protect children.",
  "board": "his"
},
{
  "text": "\"While we won the war, we still have the negro problem that desperately needs to be attended to. Personally I would exile them to Liberia but the congress will vote in favor of giving equality to these negroes.\"\n\n\nWow I didn't know Lincoln was a racist.",
  "board": "his"
},
{
  "text": "The actual quote in Lincoln's final address was...\n\n>It is also unsatisfactory to some that the elective franchise is not given to the colored man. I would myself prefer that it were now conferred on the very intelligent, and on those who serve our cause as soldiers.\n\nThe idea of (limited) black suffrage reportedly drove John Wilkes Booth (who was in attendance) into an autistic meltdown which culminated in Lincoln's assassination.\n\nThere had never been any sort of mainstream movement to forcibly exile Africans to Liberia (morality aside, this would have been virtually impossible with the economic and political realities of the time). What /pol/tards are presumably referring to is the American Colonization Society, which was a completely voluntary movement for ex-slaves to immigrate to Liberia. At the start of the war, Lincoln favored encouraging ex-slaves to take part, but changed his mind and dropped public support for this after receiving a tepid response from black leaders he consulted.\n\nLincoln's views would certainly be considered racist today, yes, but /pol/ and the like spread a lot of inaccurate information about the man and his views.",
  "board": "his"
},
{
  "text": "What does getting some random phone IP accomplish for you?",
  "board": "his"
},
{
  "text": "k",
  "board": "his"
},
{
  "text": "Next thread here",
  "board": "his"
},
{
  "text": "God i wish that was you",
  "board": "his"
},
{
  "text": "ban yourself faggot",
  "board": "his"
},
{
  "text": "Why do abrahamic religions have such an uninspired pantheon and mythology compared to Egyptian or Greek cultures?",
  "board": "his"
},
{
  "text": "this",
  "board": "his"
},
{
  "text": "Jews\nUnironically",
  "board": "his"
},
{
  "text": ">why other thing?\n>why not more same thing?\n>why not everything same?",
  "board": "his"
},
{
  "text": ">reading comprehension",
  "board": "his"
},
{
  "text": ">Why do abrahamic religions have such an uninspired pantheon and mythology compared to Egyptian or Greek cultures?\n\nBecause it was written by terrorists to \"justify\" terrorism - not by priestly types to encourage piety.",
  "board": "his"
},
{
  "text": "Tell me a story about the ottoman harem /his/",
  "board": "his"
},
{
  "text": "Turns out it was a bath attendant and not Usama himself, but there's a ton of anecdotes and I get them mixed up often.\n>\"I heard a similar case from a bath attendant called Salim from Ma'arra, who worked in one of my fathers bathhouses. This is his tale:\n>I earned my living in Ma'arra by opening a bathhouse. One day a Frankish knight came in. They do not follow our custom of wearing a cloth around their waist while they are at the baths, and this fellow put his hand, snatched off my loin-cloth and threw it away. He saw at once that I had just recently shaved my pubic hair.\n>'Salim!' he exclaimed! I came toward him and he pointed to that part of me.\n>'Salim! You shall certainly do the same for me!' and he lay down flat on his back. His \"hair\" was as long as his beard. I shaved him, and when he had felt the place with his hand and found it agreeably smooth, he said: 'Salim, you must certainly do the same for my Dama'. In their language Dama means lady, or wife. He sent his valet to fetch his wife, and when they arrived and the valet brought her in, she lay down on her back and he said to me:\n>'Do to her what you did to me.' So I shaved her pubic hair, while her husband stood. Then he thanked me and paid me for my services.",
  "board": "his"
},
{
  "text": "So why did the black plague hit the Islamic world just as bad as Europe if not worse?",
  "board": "his"
},
{
  "text": "Turns out, taking a bath isn't actually an effective cure for a plague. You get bit by an infected flea and you're infected.",
  "board": "his"
},
{
  "text": ">hinders us from achieving greater things.\n\nlike having more sex",
  "board": "his"
},
{
  "text": "This. Human libido is literally cancer that will turn you into an ape. Ever since I'm on antipsychotics my libido has been basically dead and my mind is clearer than ever, when I was younger I was obsessed with fucking all the time.",
  "board": "his"
},
{
  "text": "No",
  "board": "his"
},
{
  "text": "does /his/ really think half-naked illiterate indians are capable of this?\n\n>tfw the Incans told Pizarro they had NOT built Machu Picchu, but ancient people, red reads with white skin did",
  "board": "his"
},
{
  "text": ">tfw mediterranean peoples brought civilization to europe meanwhile nordics stayed as paleolithic hominids for several additional millenia\n>some faggots are assblasted this simple fact",
  "board": "his"
},
{
  "text": "Lol, this bullshit is just board masturbation. No one genuinely interested in history cares about those generic concepts. People are just trolling.\n\nOn topic, even in the Iron Age there are significant differences within \"northern Europe\". You can't compare the comparatively very advanced La Tene with the Balto-Slavic forest cultures in the northeast.",
  "board": "his"
},
{
  "text": "Didn't medoids just steal all those concepts from the Near East lmao",
  "board": "his"
},
{
  "text": "They are mud FORTS, OK? In Hungary we have city whose name translates to \"mud fort\".",
  "board": "his"
},
{
  "text": "Making things neat is not reddit spacing.\n\nYou probably prefer things to be jumbled up like ancient Latin.",
  "board": "his"
},
{
  "text": "How can I learn more about germanic paganism?\n\nButthurt christcucks please stay out",
  "board": "his"
},
{
  "text": ">Even King Arthur was based on a French legend\n...anon",
  "board": "his"
},
{
  "text": "just go on YouTube and look up Survive the Jive\n\nHe'll get u started. Varg is completely unreliable I've found. He does have some insight. \n\nAlso studying the Celts, who were the last true Europeans until the Semitic Romans took Europe for good.",
  "board": "his"
},
{
  "text": "He literally got that from a LOTR dvd special feature",
  "board": "his"
},
{
  "text": ">passing a mutilated horse penis around the table\n\nKeep that regeneracy out of Europe pls",
  "board": "his"
},
{
  "text": "Socrates; How would you answer, if you were asked whether the wise or the unwise are more likely to give correct names? \n\nHermogenes: I should say the wise, of course. \n\nSocrates: And are the men or the women of a city, taken as a class, the wiser? \n\nHermogenes: I should say, the men.",
  "board": "his"
},
{
  "text": "butthurt leftist detected",
  "board": "his"
},
{
  "text": "not enough?",
  "board": "his"
},
{
  "text": ">Yay! We got the dumb meathead vote locked down!\nYou've also got the buttfrustrated permavirgin vote locked down, too, and both of those are minority outliers by the huge ratio of normies who lean left in the under 50 crowd",
  "board": "his"
},
{
  "text": ">who in their caveman past had no problem controlling women\n>the virtue of egalitarian social policies \n>the virtue of egalitarian social policies \n>virtue\n>egalitarian\nWho could be behind this unbiased article?",
  "board": "his"
},
{
  "text": "Socrates: Then your father is a dog.",
  "board": "his"
},
{
  "text": "Was it a failure, /his/?",
  "board": "his"
},
{
  "text": "That wasn't socialism.",
  "board": "his"
},
{
  "text": ">not removing work",
  "board": "his"
},
{
  "text": "How does socialism motivate workers?",
  "board": "his"
},
{
  "text": "*rewards the worker in your path*",
  "board": "his"
},
{
  "text": "She looks well fed.",
  "board": "his"
},
{
  "text": "Was he a jew?",
  "board": "his"
},
{
  "text": "Yes and he had one ball and liked to be shit on check em",
  "board": "his"
},
{
  "text": "Also gay and asexual.",
  "board": "his"
},
{
  "text": "based",
  "board": "his"
},
{
  "text": "Why didnt other stimulants like qhat and coca leaf get as popular in the west as coffee and tea?",
  "board": "his"
},
{
  "text": "Pope Francis is making it a thing in Rome actually.\n\nt. Italian.",
  "board": "his"
},
{
  "text": "For qat it would probably relative to the reason why coffee and tea became more popular in the world even in middle eastern countries which I have no idea what it would be considering coffee is believed to be either of Arab or African origin and tea Asian. \nThere weren't enough migrants to the West from qat producing countries to make it popular before western police and security agencies decided to make it a target of their persecution.",
  "board": "his"
},
{
  "text": "When is he going to promote coke like his nigga Leo before him",
  "board": "his"
},
{
  "text": "Soon",
  "board": "his"
},
{
  "text": "I could go for some cocaine now, sweet glorious cocaine..",
  "board": "his"
},
{
  "text": "ITT: Villains who had better intentions than the hero",
  "board": "his"
},
{
  "text": "inb4 hitler",
  "board": "his"
},
{
  "text": "Just imagine, Huerta could have installed and stable goverment if he had just won...",
  "board": "his"
},{
  "text": "Draw the simbsons",
  "board": "i"
},
{
  "text": "no",
  "board": "i"
},
{
  "text": "Why doesn't my table work with the drawing tool? \nI have a huion h610 and I had to draw this with the mouse. Now my hand hurts. I hope you are happy",
  "board": "i"
},
{
  "text": "scanner",
  "board": "i"
},
{
  "text": "POAST OC'S\nLast thread hit the bump limit: >>530775",
  "board": "i"
},
{
  "text": "I still need to improve drawing cat ears.",
  "board": "i"
},
{
  "text": "Made this one last year or so and haven't done anything else with it, gonna redraw it right now and come up with a personality for her\n\nbtw her name is Kayla",
  "board": "i"
},
{
  "text": "wrong place",
  "board": "i"
},
{
  "text": "this is pretty nice, but what's that next to her eyes, on her hair?",
  "board": "i"
},
{
  "text": "Open ms paint or whatever!\n\nDraw a cartoon worm or real one.\n\nDraw your worm!!",
  "board": "i"
},
{
  "text": "sexy worm",
  "board": "i"
},
{
  "text": "zoomed in too much",
  "board": "i"
},
{
  "text": "OMG i found a worm in my toilet!!!",
  "board": "i"
},
{
  "text": "Gonna do an art dump on ya son\nwhatever",
  "board": "i"
},
{
  "text": "Alright requesting that girl being grabbed by from behind",
  "board": "i"
},
{
  "text": "Yo, this art dump is cool as shit, surprised I haven't checked this out sooner, looking forward to seeing more from you",
  "board": "i"
},
{
  "text": "'ere\n\nthumbs up emoji fren",
  "board": "i"
},
{
  "text": "Very cute ty",
  "board": "i"
},
{
  "text": "Lilas hugging any character you drew",
  "board": "i"
},
{
  "text": "ITT we post bionicl",
  "board": "i"
},
{
  "text": "Thanks for the nostalgia rush, anons",
  "board": "i"
},
{
  "text": "is anyone else having trouble uploading images?",
  "board": "i"
},
{
  "text": "Sure is quiet around here",
  "board": "i"
},
{
  "text": "How the fuck do you get this good.",
  "board": "i"
},
{
  "text": "post what happens next\ndubs get priority\nnew image everyday before 12 am, EST.",
  "board": "i"
},
{
  "text": "Reunion time!",
  "board": "i"
},
{
  "text": "She brought the \"eye\"\nA jewel required to return\nthe eye and the mimic back to\ntheir human form.\nThe human girl ties back her hair.",
  "board": "i"
},
{
  "text": ">That outfit\nAggie a cute!\n\nSeconding",
  "board": "i"
},
{
  "text": "can i know how to paint this straight in one go like kim jung gi/ direct painting/ alla prima method with limited palette and limited layers?\n\ni am v confused abt how the objects reflection and refraction works to look so, transclucent and realistic etc.\n\npl0x help tx my drawing is avg but i think i know enough anatomy and figure so it's up to the PBR rendering in 2d i dont understance",
  "board": "i"
},
{
  "text": "tis the img btw",
  "board": "i"
},
{
  "text": "My oc Tyris, she became the Pokemon Master recently winning a lot of pokemon leagues, she only has one pokemon, her Zoroark.\n\nThey love each other a lot, she discovered what is the secret to be the best pokemon trainer, love, she spent a week with Zoroark at Day care and married him after that, she discovered he broke his limit after the weak together after noticing how Zoroark improved it became their main method of training.\n\nAfter one year of training at day care they were ready to show their love to the world, Tyris won leagues and challanged the best pokemon trainers of the world, winning every match agains't her rivals only using her Zoroark, finally she could challange the Pokemon Master, she was very confident of her victory and let he use every legendary he had, Zoroark showing his love with Tyris defeated almost every legendary Pokemon Master had, Tyris convinced the master she would fight at Zoroark's place, she throw away her clothes and showed everone she could breed with a pokemon even if they weren't at Day care, she called herself something more than a pokemon trainer , a true master.\n\nThe Pokemon Master still had Arceus and Giratina, Tyris showing her love with Zoroark defeated Arceus and Giratina easily, she discovered she broke her limit as human like Zoroark with their secret one year trainning at day care, even two legendaries were'nt enough to defeat her, The Pokemon Master decided to fight against Tyris himself, but he lacked love, he never bred like Tyris, she easily defeated the Pokemon Master and got his tittle... and virginity, it was her special move.",
  "board": "i"
},
{
  "text": ">Sandals with stocking\nAbsolutely barbaric!",
  "board": "i"
},
{
  "text": "i have no idea how bad a case of autism you have that you still think this is funny but please for the love of every deity of any religion find a better fucking hobby than spamming these fuckass oc threads daily.",
  "board": "i"
},
{
  "text": "Cute",
  "board": "i"
},
{
  "text": "F",
  "board": "i"
},
{
  "text": "Draw your OC as trollface.",
  "board": "i"
},
{
  "text": "You guys are just mean. Fuck you >>#541317",
  "board": "i"
},
{
  "text": "depression.",
  "board": "i"
},
{
  "text": "I wanna draw some lewds, any other artist feel free to jump in too.I dont really see any existing thread for the requests atm so I made one.",
  "board": "i"
},
{
  "text": "wait someone actually?\nwhat the actual vinesauce\n\ncan you make it look more realistic",
  "board": "i"
},
{
  "text": "Done, at least for now. Maybe I'll color it.\n\nAlso I'm considering creating a Deviant Art Page to Dump these.",
  "board": "i"
},
{
  "text": "I'm not sure you can post straight up porn on Deviant Art",
  "board": "i"
},
{
  "text": "oh damn this came out pretty swell. Thanks for doing my request and if you do color it I'll look forward to it as well!",
  "board": "i"
},
{
  "text": "They're very bad at enforcing their policy, and a lot of graphic stuff slips through the cracks. You are right though, it's usually safer to censor before you upload to DA.",
  "board": "i"
},
{
  "text": "ITT we draw birds",
  "board": "i"
},
{
  "text": "i do but i also wanted an excuse to do this",
  "board": "i"
},
{
  "text": "N I C E. shes perfect",
  "board": "i"
},
{
  "text": "This is Klaus, the Daring Duck. Day in and day out he braves the turbulent waters of The Rhine to do battle with ISIS pirates. He lives for the thrill of righteous bloodshed, and he likes to whistle a jaunty tune",
  "board": "i"
},
{
  "text": "The happy go lucky big sis.\nalso she is Brocon (Brother Complex)",
  "board": "i"
},
{
  "text": "Put it in the fuckin oc thread",
  "board": "i"
},
{
  "text": "You didn't make this you cunt",
  "board": "i"
},
{
  "text": "Absolutely no lewds can be shared here. It is physically impossible, so don't even try.\n\n>post art\n>post requests\n>no fetish autism",
  "board": "i"
},
{
  "text": "oh yeah, true. I'll do that too, tho thrones of britania just came out today so it'll likely be a bit",
  "board": "i"
},
{
  "text": "Very cute! Thank you.",
  "board": "i"
},
{
  "text": "Requesting a drawing of Josef Pilsudski.",
  "board": "i"
},
{
  "text": "Don’t lewd my husband pls",
  "board": "i"
},
{
  "text": "Draw a cat with folded ears and him wearing a flannel shirt that lesbians often are seen wearing.",
  "board": "i"
},
{
  "text": ">Orange cat\n>Not Garfield\n\nC'mon now.",
  "board": "i"
},
{
  "text": "Orange cat with yoyo and yellow shirt*",
  "board": "i"
},
{
  "text": "serious meme replies only",
  "board": "i"
},{
  "text": "Toy imitates art",
  "board": "toy"
},
{
  "text": "Ilya Repin is the best.",
  "board": "toy"
},
{
  "text": "are those floor pieces legos? how small are the guys",
  "board": "toy"
},
{
  "text": "think they're all Call of duty mega bloks/ mega construx pieces my dude",
  "board": "toy"
},
{
  "text": "Everything in the picture, figures, weapons, flags, horses, etc is call of duty by mega bloks (now mega construx).\n\nThe figures are about 2\" tall. Just a bit taller than a lego minifigure.",
  "board": "toy"
},
{
  "text": "Share this on /k/, they will fucking love it.",
  "board": "toy"
},
{
  "text": "Boba Fett, KH2 Riku, Kisame",
  "board": "toy"
},
{
  "text": "I want empire Leia. The hoth jacket was her best look.",
  "board": "toy"
},
{
  "text": ">three figures that are going to happen regardless",
  "board": "toy"
},
{
  "text": "She looked so comfy.",
  "board": "toy"
},
{
  "text": "The only designs I liked were Catwoma and Harley Quinn. My dick was doing the thinking.\n\nThe movie was okay, some semi cool bars but the English dub plot is completely re written from the Japanese one for some stupid reason. Now I need to watch the Japanese version. I should of done that in the first place, but I didn't know the torrent I got was English. Oh well. \n\n>TL;DR It looks pretty but everything else is meh. Catwoman and Quinn are hot.",
  "board": "toy"
},
{
  "text": "What does /toy/ think of this latest trend of chunky 5 inch figures? I like some of them because the scale and action features remind me of 90s toys.",
  "board": "toy"
},
{
  "text": "What the fuck are talking about the official one looks like more like the mvc design that what ever this is do you think it's the first hulked out vemon figure",
  "board": "toy"
},
{
  "text": "Because the reality is that the average person would rather have a Funko Pop that looks cute and casual rather than an action figure that still carries the stereotype of \"Look, I'm a manchild\"",
  "board": "toy"
},
{
  "text": "I'd be all for them if they had legs squeezin' waggly arm and torso features. If you squeezed Venom's legs and he would chuck those arms around as fast as you could make 'em it would be great.",
  "board": "toy"
},
{
  "text": "Are you okay? Did you hit your head on the way in?",
  "board": "toy"
},
{
  "text": "Yes and I think I got a SHITTING concussion.",
  "board": "toy"
},
{
  "text": "What are some good Super sized figures? I know Hulk is an easy one and Broly is another but are there any others that are massive compared to normal figures?",
  "board": "toy"
},
{
  "text": "For you.",
  "board": "toy"
},
{
  "text": "NECA's Stitches is a big boy",
  "board": "toy"
},
{
  "text": "I wanted Fort Max so bad...but I barely have room for Metroplex...ohwell...\n\nAnyway, back when McFarlane didn't suck at toys, he put out a big Violator figure and some other pretty oversized monsters.",
  "board": "toy"
},
{
  "text": "The new super colossal jurassic world T-rex is gigantic",
  "board": "toy"
},
{
  "text": ">rewatching rurouni kenshin soramimi compilations for old time's sake\n>remember we will never get rurouni kenshin figures now\nIt's not fair, bros.",
  "board": "toy"
},
{
  "text": ">>6931774\nThey just recently rereleased the Big O SoC.",
  "board": "toy"
},
{
  "text": "Easy to figure out, still a retarded claim. Just pretty evident shitposting tactics to look out for in the future.",
  "board": "toy"
},
{
  "text": "Sounds like a strawman you made up.",
  "board": "toy"
},
{
  "text": "Throwing \"faggot\" haphazardly into your speech isn't impressing anyone and just makes you look 12.",
  "board": "toy"
},
{
  "text": "Atheism has reached levels of Poe's Law previously unsuspected but who else hasn't really.",
  "board": "toy"
},
{
  "text": "Post the plushes you own, the plushes you want, etc.!",
  "board": "toy"
},
{
  "text": "ive posted in this thread a few times every time I got a new one...but here is a group pic of every single plushie I own",
  "board": "toy"
},
{
  "text": "Cute.",
  "board": "toy"
},
{
  "text": "This is going to sound so doofy, but your pictures always have such a nice...aesthetic, I guess?",
  "board": "toy"
},
{
  "text": "Please tell me where the axolotl is from",
  "board": "toy"
},
{
  "text": "It's from hola salamanders, and I got it a couple years ago from amiami, and for the longest time they weren't in-stock anywhere. But I just checked and it looks like they're up on TOM now \n\nThat's kind of what I'm going for. I'm slowly trying to make my whole room pastel",
  "board": "toy"
},
{
  "text": "Anything from variant versions to entire figures/lines. I'll go first.",
  "board": "toy"
},
{
  "text": "The chaos line has some cool paints, I just found them on ebay.",
  "board": "toy"
},
{
  "text": "Rich Evans just said this thing looked like him. other big examples of this kinda thing?",
  "board": "toy"
},
{
  "text": "You're wrong and you should feel bad.",
  "board": "toy"
},
{
  "text": "If you're retarded I guess",
  "board": "toy"
},
{
  "text": "You sound salty.",
  "board": "toy"
},
{
  "text": "It's like you're mostly right but you still make me hate you.",
  "board": "toy"
},
{
  "text": ">thus allowing you to see the figure at every angle in natural lighting\nThis is patently false unless your local toy store allows you to open their product before buying it",
  "board": "toy"
},
{
  "text": "Alright, this deathstroke figure caught my eye recently, but I've never owned/handled any Mezco one:12th figure before and wanted to know how well they hold up to regular posing",
  "board": "toy"
},
{
  "text": "Whatever you say, amigo. \n\n\n>I don't think it matters that you're butthurt that the faceb...\nThe point was to mention that they don't like these characters. \n\n>pffffft, a change is a change. What was Batman 70 yea\nOther than no guns -> guns, Batman was pretty much the same back then, you should've mentioned the silver age if you wanted to bring it home. And Azrael isn't Batman you know?\n\n>Personally, i hate all of Mezco's Batman except for their Miller Batman\nAh, there you go. \n\nI can't stand Wolverine because it's case of so close yet so far.",
  "board": "toy"
},
{
  "text": ">Agreed, I have a strict no-movies-figures for capeshit\n\nLet's give this guy a round of applause everybody. Standing ovation. \n\nNow can you go?",
  "board": "toy"
},
{
  "text": "Looks like he made a suit out of panty-hoes",
  "board": "toy"
},
{
  "text": ">Now can you go?\nBut why? You are replying to me, not me to you, just stop reading my posts. Why are you so salty?\n\nAnd no, I'm not going, cope as you've been coping so far.",
  "board": "toy"
},
{
  "text": "Not with that attitude.",
  "board": "toy"
},
{
  "text": "A thread for Barbie dolls, Disney dolls, and any dolls that aren't BJD.\n\nold thread >>6866322",
  "board": "toy"
},
{
  "text": "Someone's customized Bradley dolls. Never would have thought about customizing them before.",
  "board": "toy"
},
{
  "text": "Hell of a reach anon.\nIn fact, 'Barbie didn't affect my body image' is super common to here when discussing things with doll people (usually when they're about to make a point like \"...and Lammily/myIdolls/ (latest other monstrosity) is missing the point about what DOES affect girl's self worth.\"\n\nAnon just said that one thing (dolls) didn't affect them, how did you read that as \"not being affected whatsoever by any type of outward influence.\"",
  "board": "toy"
},
{
  "text": ">toy board\n>talking about body image\nFuck off.",
  "board": "toy"
},
{
  "text": "It's the way they said it. Golly, am I weird? Jeepers, am I the only one who sees barbie as just a toy with no impact on people or the world whatsoever?",
  "board": "toy"
},
{
  "text": "Relevant SNL sketch, Barbie Instagram: \nNot as good as the My Little Stepchild, but still.",
  "board": "toy"
},
{
  "text": ">kills your toy industry",
  "board": "toy"
},
{
  "text": "Youre a fucking idiot, book of life had a great art style unlike cocos same fave ugly style and pudgey faced MC",
  "board": "toy"
},
{
  "text": "As well as gimmicky visuals, a fucking awful ass-pull ridden story, an absolutey retarded pre-school level framing device, voice acting that sounds like nobody cares, and offensively terrible numbers featuring fucking Mumford and Sons instead of proper Mexican music.\n\nHoly shit, anon. Get better taste.",
  "board": "toy"
},
{
  "text": ">gimmicky visuals\nLiterally better then the same face ugly disney house style, go fuck yourself",
  "board": "toy"
},
{
  "text": "You have one criticism towards an objectively better film in every other respect. If facial features blinds you to an otherwise beautiful film, you have a special kind of autism.",
  "board": "toy"
},
{
  "text": "It isnt a better film retard, the story was contrived and cliche, where as book of life was funny and original. Again, go fuck yourself, disney shills like you make me want to vomit",
  "board": "toy"
},
{
  "text": "Anyone remember any weird toys that came and went? I just remembered these toys called iZ they used to give these little fuckers out as McDonald's toys in 2006.",
  "board": "toy"
},
{
  "text": "Wow I was just a few extra letters off haha thanks",
  "board": "toy"
},
{
  "text": ">the future of CCBS.jpeg",
  "board": "toy"
},
{
  "text": "No Robo Wheels?",
  "board": "toy"
},
{
  "text": "Oh shit, I had this exact same character. In my head, he was a flying Predator.\n\n\nI still have mine somewhere. I remember I used to get some at this one store while away on summer vacation. One night the store owner showed off his special golden character to me, and when my parents asked half-jokingly how much is that one, he told them oh, this one's not for sale. They fucking went off on the poor bastard",
  "board": "toy"
},
{
  "text": "Shit, I had those. They were cool.",
  "board": "toy"
},
{
  "text": "So apparently he got fed up with scalpers selling his sig, so he's doing it himself for nothing. What do you nerds think about actors selling their own merch?\n\n\nApparently he also had chogokin megazords for cheap.",
  "board": "toy"
},
{
  "text": "Doesn't he own several successful martial arts studios?",
  "board": "toy"
},
{
  "text": ">Paying for someone signature because they pretended to be someone else once",
  "board": "toy"
},
{
  "text": "Oh I get it.\n\nBecause the guy in your image does it too.",
  "board": "toy"
},
{
  "text": "Austin please... no one loves interacting with the fans more than JDF.",
  "board": "toy"
},
{
  "text": ">calls out scalpers\n>scalps himself",
  "board": "toy"
},
{
  "text": "CHAPEL IS LIVE\ngod bless B2Five\n\n$75, June.",
  "board": "toy"
},
{
  "text": "Yes!",
  "board": "toy"
},
{
  "text": "I'm surprised that any of this stuff is coming out in 1/18th. Especially that Laurel considering the mold is going on 3 years of zero use.\n\nIn any case, I'm excited because the pilot appears to have new weapon molds. No more bayonet sub-machinegun!",
  "board": "toy"
},
{
  "text": "Does anyone know anything about that “Joy Toy” mech line that seems like they’re roughly in the same scale as B2Five?",
  "board": "toy"
},
{
  "text": "The Titanfall knockoffs? I think it's just cheap China garbage, but I mean if you can pick one up for a decent price from AliExpress or something I'd say go for it. Careful of the carcinogens tho.",
  "board": "toy"
},
{
  "text": "The actual mini figs are total garbage, come with several accessories that they cant even use or hold.",
  "board": "toy"
},
{
  "text": "You know how it be, so it do Edtion",
  "board": "toy"
},
{
  "text": "This is fucking beautiful.",
  "board": "toy"
},
{
  "text": "Jigen, guns, whiskey.",
  "board": "toy"
},
{
  "text": "Oh yeah I see it, it's king kong twerking on godzilla's face",
  "board": "toy"
},
{
  "text": "Very nice",
  "board": "toy"
},
{
  "text": "taiga masuku",
  "board": "toy"
},{
  "text": "New insta thread\nPost yours (with URL), rate and get rated",
  "board": "p"
},
{
  "text": "Your descriptions are fucking terrible",
  "board": "p"
},
{
  "text": ">single word\n>full stop\nI see many faggots do this on instagram",
  "board": "p"
},
{
  "text": "Rustled.",
  "board": "p"
},
{
  "text": "This is trippy.",
  "board": "p"
},
{
  "text": "Last thread: \nRead the sticky first!\n\nPost anything gear related, cameras, lenses, filters, bags, tripods, other accessories (clothing, fancy straps, Leica) etc...\nPost your question here, instead of starting a new thread about which lens to buy or what are the best beginner cameras.\n\nAnd don't forget, be polite!",
  "board": "p"
},
{
  "text": ">\"It has a worse sensor and performance though?\"\n>t. Sonygger\nI blame dxo for this shit. A bunch of scores no one understands which mean nothing in the real world. You couldn't pick a print made with one sensor from another, given the same format, if your life depended on it.\n\nBuy into the system that most closely matches what you want long term.",
  "board": "p"
},
{
  "text": ">given the same format\nI'd say the format doesn't matter that much either. I know a woman (local forum) who submitted a print of her photo in the early digital days (*istD to top it off) and everyone said it was made on medium format.\nThe photo, light, subject, composition, vision counts massively more than format and gear.",
  "board": "p"
},
{
  "text": "fredmiranda, if anywhere. \n\nbut wait 'till the xt3 comes out this fall, be smart, prices will drop",
  "board": "p"
},
{
  "text": "nikon d600 for $700 on gumtree, cop or not? comes with a 50/1.8 g lens",
  "board": "p"
},
{
  "text": "Your magic answer is tripod. Fix your cam to one, put your cam into S mode and fool around with exposures past one sec, and you'll see wizardry.",
  "board": "p"
},
{
  "text": "Spring is here! Post some flowers and leaves and bugs and shits that go along.",
  "board": "p"
},
{
  "text": "Literally still snowing here up until a week ago.",
  "board": "p"
},
{
  "text": "More birbs",
  "board": "p"
},
{
  "text": "super comfy",
  "board": "p"
},
{
  "text": "Is this good?",
  "board": "p"
},
{
  "text": "u missed focus",
  "board": "p"
},
{
  "text": "I feel bad for laughing so hard",
  "board": "p"
},
{
  "text": "This is actually better than YLYL threads.",
  "board": "p"
},
{
  "text": "What's your favorite picture you've ever seen posted on /p/? I'm not talking pro stuff. I'm talking shots from actual board users.",
  "board": "p"
},
{
  "text": ">makes an argument that arguing on the internet is something to be looked down upon\n>on the internet\nclassic",
  "board": "p"
},
{
  "text": "What's the advantage of film over digital in 2018?",
  "board": "p"
},
{
  "text": ">what are styles?",
  "board": "p"
},
{
  "text": "Then you are doing something wrong",
  "board": "p"
},
{
  "text": "there ARE monochrom digital cameras. what's wrong with you?",
  "board": "p"
},
{
  "text": "ITT: People coming up with 127 ways to say \"absolutely nothing\"",
  "board": "p"
},
{
  "text": "lol this is dog shit",
  "board": "p"
},
{
  "text": "Photos from a Job Fair for people on the Autism Spectrum.",
  "board": "p"
},
{
  "text": "I can't that rally was on 11/05/17 and had some of my best photos in it, anons love showing off their mask and flag",
  "board": "p"
},
{
  "text": "360 fov Noctilux.",
  "board": "p"
},
{
  "text": "I would prefer if you posted better photos.",
  "board": "p"
},
{
  "text": "It is hard to get good looking indoor shots, I posted the best photos I had.",
  "board": "p"
},
{
  "text": "Nope. Carl Zeiss 50mm prime lens.",
  "board": "p"
},
{
  "text": ">be me\n>25 yo hobbyist\n>shooting with 350D/Rebel XT for the last 10 years\n>Drives me crazy\n>want to upgrade\n>5DMk1's and 7D's available for similar prices\n>can't decide which one to get\n>mostly shoot portraits\n>also shoot film with Elan 7NE\n>Don't care about video \n\nBefore you ask - /gear/ is retarded and unhelpful",
  "board": "p"
},
{
  "text": "They're exactly the same",
  "board": "p"
},
{
  "text": ">The 5d has better ISO performance of the two, but obviously 5d mark ii is the best.\n\nThe 5D image is smaller. If you view at same scale it's closer. The 7D is sharper but the 5D has cleaner patches.\n\nBut there are so many disadvantages with the 5D...go a 5D2 at least if you must have FF.",
  "board": "p"
},
{
  "text": "If you want to shoot field sports, 7D.\nFor anything else, 5D and a set of USM primes.",
  "board": "p"
},
{
  "text": "No no. Look at the number on the inch scale, they almost disappear on the 7d because it's so noisy. I would not call that sharper.",
  "board": "p"
},
{
  "text": "Anybody know how these images are made? Is it a 100% crop at a certain number of feet away or is it made so that card fills the image? It shows a lot of detail loss at IS 3200 on the 5DII, but I owned that camera and detail was very usable even at ISO 3200.",
  "board": "p"
},
{
  "text": "Why is digital such souless shit?",
  "board": "p"
},
{
  "text": "I started shooting film a couple of months ago.\nI wanted to learn photography and a friend recommended I try shooting film with an old Japanese camera so that I have to manually control exposure, aperture, focus, etc. and learn how these aspects impact the final image.\n\nAlso, you can get surprisingly good results using regular-ass 35mm B&W film.\n\nor at least better then the normal shit you see on instagram.",
  "board": "p"
},
{
  "text": "As a guitarist, i would like to say don’t compare real guitarist with douchebags who try to pick up chicks. I spent years honing my skills learning about major, minor, harmonic minors, and melodic minor scales. Diatonic chord progressions and Nondiatonic. Learning modal theory and different techniques such as slap, finger picking, and sweep arpeggios. Music is just hard in general once curiosity is peaked.\n\nI’m just a little butthurt",
  "board": "p"
},
{
  "text": "No, it's not a keeper. It was my first roll of HP5+ on a camera I'd never used before so I burned through the roll in two days to see if it has any light leaks or problems. \n\nGet your head out of your ass, please.",
  "board": "p"
},
{
  "text": "So then why did you take the effort to scan it and then post it here?",
  "board": "p"
},
{
  "text": "I didn't scan it. I'm new to film so I posted that roll to a lab to be developed and scanned. Turned out the lab is pretty bad and the scanner they used is filthy so most of the scans have dust, hair and blotches all over them. I talked about the issues I had in /fgt/ but you probably don't go there.\n\nIf anything it taught me the value of doing your own development and scanning since none of these labs care about your negatives as much as you will. I'm now planning to develop and scan at home in future.",
  "board": "p"
},
{
  "text": "I'm new to this thread and wanted to share some of my picutres with you to get some feedback, even if some of the /p/s might say, that pictures taken with a drone aren't photography.",
  "board": "p"
},
{
  "text": "Autumn and spring drones with 4K camera.",
  "board": "p"
},
{
  "text": "Actually impressed, what drone is that? Like which DJI? Is the budget P3 any decent?",
  "board": "p"
},
{
  "text": "They look kinda rough when you zoom in",
  "board": "p"
},
{
  "text": "Thank you. It's a DJI Mavic Pro.\nI am not 100% sure, but as I know the camera of the Phantom 3 is quite similar to this one.",
  "board": "p"
},
{
  "text": "Do you think it's because I did some edits afterwards or because of the imagefile itself?",
  "board": "p"
},
{
  "text": "What photography book(s) can I find the girl from the movie Laura (1979) directed by photographer David hamilton?\n\nI searched and found some in \"Les Ombres de l'été - La classe de danse\" aka \"Shadows of a Summer (1979)\" but its an expensive portfolio with only 12 photographs. Maybe the same or more of her pictures are in a later book but its hard to find any previews!",
  "board": "p"
},
{
  "text": "Speaking of controversial stuff I've received pic related today.\n\nAm I on a list?",
  "board": "p"
},
{
  "text": "I have no interest in Jock Sturges, unlike what a previous anon claimed implying I was samefagging. Infact, I wouldnt buy anyone elses photography books other than Hamilton's. I'm just a huge fan of his work and made the thread asking if anyone knew what book featured Dawn Dunlop. \n\nI'm the same with ballet, I only like one ballerina and I only wanted to go see her. I don't care to see other ballerinas because they all look ugly compared to her. Evgenia Obraztsova I speak of. I wish there were more portraits of her so I could hang them on my wall.\n\nI find the people in Jock's work to be non angelic. They do not inspire me therefore I do not want to look at them.",
  "board": "p"
},
{
  "text": "And is that a paperback? Sad if so.",
  "board": "p"
},
{
  "text": ">I find the people in Jock's work to be non angelic.\nWell I get the idea, I prefer Jock's approach: it's raw, honest.\n\n\nCouldn't find anything else where I live sadly.",
  "board": "p"
},
{
  "text": "Is associating your name with the photographing of naked little girls acceptable today?",
  "board": "p"
},
{
  "text": "Sup guys, hope you dont mind me, literally killing film as we speak lmao",
  "board": "p"
},
{
  "text": "It was over with discontinuation of portra nc version",
  "board": "p"
},
{
  "text": "tfw I only have 50 rolls of NC left",
  "board": "p"
},
{
  "text": ">implying the new portra isn't better",
  "board": "p"
},
{
  "text": "no",
  "board": "p"
},
{
  "text": "Why can't some OEM Chinese company make analog film? I mean it's all just silver halide crystals right?",
  "board": "p"
},
{
  "text": "I'm trying to get rid of a ghosting effect on my lens. Which brand makes the best filters for that?\n\n\n\n",
  "board": "p"
},
{
  "text": "I have a camera with a fixed lens.",
  "board": "p"
},
{
  "text": "So you want to *add* a filter to *reduce* flaring?\nOh boi.",
  "board": "p"
},
{
  "text": "Is it not possible? ._.",
  "board": "p"
},
{
  "text": "Filters only *add* flare, and the better the filter, the less flare it adds. The good ones add almost none.\n\nYou can add a hood to reduce flare caused by light sources just outside your frame. But if you're shooting straight into strong light sources, only the lens (number of groups and elements, coating quality) affects flaring.",
  "board": "p"
},
{
  "text": "also sensor filter design",
  "board": "p"
},
{
  "text": "Hello /p\ni usually use a film nikon. It work great but i can't take it with me for a the next week \nI am about to make a big travel without my camera.\n\nI found the diana mini from Lomography.\nI would like to know if someone have try this camera ?\n\nit's very small, use 35mm film and can take square photo or half 24x36 picture.\nI know it's a toy, but I am interested in your experience feedback =)",
  "board": "p"
},
{
  "text": "no worries, hope you find something",
  "board": "p"
},
{
  "text": "hehe ^^\nthanks to you, i think it will be a great travel ^^",
  "board": "p"
},
{
  "text": "You can get the Russian Lomos for about $50 on ebay. The Soviet era ones have this undescribable pleasant smell to the leather.",
  "board": "p"
},
{
  "text": ">Russian Lomos\nwitch model ?",
  "board": "p"
},
{
  "text": "I have one. It's an ok camera. I don't really think it does square format or half frame that well though.",
  "board": "p"
},
{
  "text": "Who Sony Alpha here? I've been shooting with an A7 and am looking for something kind of wide that might be better for capturing people placed in a scene like a concert or an event. I feel like my nifty fifty is falling short for capturing groups like bands on stage etc. I know this is kinda specific but anyone who can point me the right way?",
  "board": "p"
},
{
  "text": ">borderline",
  "board": "p"
},
{
  "text": "Just ignore the crop babbies anon.\n\nThey think 50mm is telephoto too.",
  "board": "p"
},
{
  "text": "43mm is a true normal, so no, 35mm is not a wide angle lens.",
  "board": "p"
},
{
  "text": "Wanna wide or ultra wide?",
  "board": "p"
},
{
  "text": "That samyang 35mm is perfectly fine, wide enough lens for my street snapshots.\n\nIf you're indoor though, you might want to consider the F1,4 one. It costs about twice as much, but is still very budget friendly.",
  "board": "p"
},{
  "text": ">mmm i just loooove coffee\n>*breaks out the instant nescafe*\n>don't talk to me until i've had my coffee!\n>*dumps in half a bottle of hazelnut coffee-mate*\n>can't start the day without my coffee, y'know how it is!\n>*proceeds to sip disgusting tan colored soybean oil and water emulsion*",
  "board": "ck"
},
{
  "text": "As someone who has both, I only use the dripper for my daily coffee. I only use the French press when I invite a thot over and want to impress her.",
  "board": "ck"
},
{
  "text": ">Not having said thot over and teaching her how to do a pour over\n>not holding her hand and guiding it as you pour the water\n>not gently brushing her neck and taking the opportunity to slowly grind behind her\n\nYou sir are a pleb.",
  "board": "ck"
},
{
  "text": "He’s probably talking about boiling the water. He probably fills the entire kettle up so naturally it takes longer. I just weigh my needed amount of water plus 100g. Easy peasy.\n\nOr just buy a fellow ekg with crypto gainz",
  "board": "ck"
},
{
  "text": ">this entire post\nholy shit, i'm fucking dying. it doesn't work that way in real life, kiddo. showing a thot how to make coffee isn't going to get her wet. literally lmaoing@your little made up scenario. i bet you fantasize about this happening when you're laying in your bed, staring at the ceiling fan. thanks for the laugh.",
  "board": "ck"
},
{
  "text": ">inviting thots over\n>not throwing scalding coffee at their face\nyou are a retard",
  "board": "ck"
},
{
  "text": "There are literally 4 mcdonald threads in the front page right now and it's been like that all day...not even counting the tacobell and other fast food threads\n\nDo your fucking job mods",
  "board": "ck"
},
{
  "text": ">my board\nKill yourself redditurd",
  "board": "ck"
},
{
  "text": ">There are like 5 threads bitching about the state of /ck/\nHow many recipe threads have you made in the last week? Because the alcoholics and S I P S marketing team are doing a hell of a lot more for this board than you right now",
  "board": "ck"
},
{
  "text": ">How many recipe threads have you made in the last week\n\n\n14 in past 6 weeks",
  "board": "ck"
},
{
  "text": "This.\nMisery loves company. They belong together.",
  "board": "ck"
},
{
  "text": ">People are complaining about how bad it is\n>Therefor we're allowed to shit it up\n>Also, it's not fast enough to our liking\n>So us shitting it up is a good thing\nThis is your brain on alcohol.",
  "board": "ck"
},
{
  "text": "Whats /ck/s go to chili? I like these fuckers.",
  "board": "ck"
},
{
  "text": "In b4 wh_te people come in here with their Hatch shit",
  "board": "ck"
},
{
  "text": "Fuck off, Hatch chilis are great. A little spicy for me, but still a classic.",
  "board": "ck"
},
{
  "text": "it's chiltepin not \"chile tepin\". They are great though.",
  "board": "ck"
},
{
  "text": "arbol are the most based chile",
  "board": "ck"
},
{
  "text": "I like them because a good amount will turn red after a few days (its impossible to find non dried red chilis in most of the us) and if left out they will dry instead of going bad.",
  "board": "ck"
},
{
  "text": "old thread \n\nWE",
  "board": "ck"
},
{
  "text": "Damn man that's pretty gnarly. Glad they at least got you home safely.",
  "board": "ck"
},
{
  "text": "you must have known it was too much for that time of day though, i mean is it the first time you've blacked out?",
  "board": "ck"
},
{
  "text": ">realizing there's 810 cals in my 375ml of vodka\n\nThat was a good way to justify not drinking tonight. I won't lie. Had the craving bad. But I'm sure I'll be a weak willed faggot and turn back on it soon enough. Least I'm limiting myself to once or twice a week rather than six fucking times a week.",
  "board": "ck"
},
{
  "text": "Yeah. I know I would have done the same thing and paid out of my own pocket, but they really liked me. I was up for a hefty promotion. Oh well.\n\n\nAs I said, it wasn't more than my usual amount, but I guess my body had other ideas.",
  "board": "ck"
},
{
  "text": "Global ban but I usually shitpost on /tv/",
  "board": "ck"
},
{
  "text": ">any pastry",
  "board": "ck"
},
{
  "text": "pho",
  "board": "ck"
},
{
  "text": "Seconding this lads.",
  "board": "ck"
},
{
  "text": "I mean... it's not literally impossible. But I know what you mean. The doubt only adds to the flavour.",
  "board": "ck"
},
{
  "text": ">getting this angry about cheese",
  "board": "ck"
},
{
  "text": "sushi",
  "board": "ck"
},
{
  "text": "Post a hot sauce and other anons will rate how spicy it is, if they enjoyed it or not, and (if they did enjoy it) what it goes good with.\n\nStarting with Franks",
  "board": "ck"
},
{
  "text": "Anyone here do the blazin wing challenge?",
  "board": "ck"
},
{
  "text": "Shark would be better if it had the consistency of cock sauce.",
  "board": "ck"
},
{
  "text": "i agree what a FAG",
  "board": "ck"
},
{
  "text": "stop lying you queer you meant to do that hahah",
  "board": "ck"
},
{
  "text": "Just picked some of this up, it's pretty damn good and a solid level of spice without being obnoxious",
  "board": "ck"
},
{
  "text": "So first time posting on this board... maybe. I might have once before when I was drunk. First time making a thread anyway.\nSo I live in America and I am french. I'm 33 and lived here for the majority of my life(no it's not my mother's basement). My family moved here during ww2 to escape the nazis. my parents are around 60 years old now.\nOn to the ck part. My mother died some years ago and now my wife is dying of cancer. I know wine is the obvious choice but I don't want to be that kind of obvious and I know this isn't food but I thought this would be the best board to ask. What are some good drinks that I could have my wife that barely speak the same language as me drink? I want to give her and have some good strong liquor or a good strong cocktail with my wife that i can barely communicate with that will remind her of me when we were younger. I want to heartedly drink with my ever-so-sweet wife, who was always quick with the bonjour, passes and I want it to be something she will respect. Any suggestions?",
  "board": "ck"
},
{
  "text": "He also said his parents moved here during WWII and are 60 and dead, and thats the part that gets you?",
  "board": "ck"
},
{
  "text": ">my family lived in America for 80 years\n>I was born and raised in America\n>I'm french\n\nThe rest of your post sucks cock too but this is just baffling.",
  "board": "ck"
},
{
  "text": "we’ve always upheld french customs. It’s that simple",
  "board": "ck"
},
{
  "text": "Yeah bro most families do. That's what makes us Americans. Now stop shitting on your homeland and have some pride about yourself.\n\nAs for your original post, it doesn't make sense. You're 33 and your wife is dying of cancer? That's so uncommon it's unbelievable. Next, you ask us to tell you a drink to serve that she will remember from her childhood. Bro you grew up with her, not us; how are we supposed to know?",
  "board": "ck"
},
{
  "text": "Whatever",
  "board": "ck"
},
{
  "text": "Rate my burg",
  "board": "ck"
},
{
  "text": "Looks like they might be dry.",
  "board": "ck"
},
{
  "text": "Powerful desk meal\n\nhonestly though. if you eat this alone in your room at you computer who the fuck cares. Looks cooked well.\n\nWhats the seasoning i see rosemary?",
  "board": "ck"
},
{
  "text": ">i'll only have a double cheeseburger, i'm cutting",
  "board": "ck"
},
{
  "text": "> It's look very good for me, even if it's not the right configuration for a burger.\ngood burg",
  "board": "ck"
},
{
  "text": "good thing it comes with a vomit bucket, but it seems you already filled it upon looking at the burger\n2/10 insufficient vomit bucket",
  "board": "ck"
},
{
  "text": "I know you'll cu/ck/s aren't foolish enough to EVER cook a piece of chicken without brining it first, right?",
  "board": "ck"
},
{
  "text": ">you'll\nfucking americans",
  "board": "ck"
},
{
  "text": ">I prefer fresh over brined because I don’t like the change in texture.\nThis.\nBrined chicken remindes me of butterball or some kind of preseasoned pork roast which is overflavored and just a bit too moist and not enough sticky bone-in juices. It browns poorly as well, and that isn't a problem on a large roast but on an individual breast, it sure is! \nFor food service, go ahead and get consistent results with your brine, but for dinner at home, nah, I don't want it. If I'm doing a long marinade on chicken, I might be making some kind of yogurt chicken, but I'm baking it in the yogurt.",
  "board": "ck"
},
{
  "text": "Im marinating it in yogurth boy",
  "board": "ck"
},
{
  "text": "What about dry brining? None of those are a problem if you dry brine.",
  "board": "ck"
},
{
  "text": "i think you mean\nfucking phone posters",
  "board": "ck"
},
{
  "text": "Guniea pigs are fucking delicious. Is it illegal to buy them from a pet store and eat them in the USA? Just got back from a Cinco de Mayo in Peru and these fuckers are actually the most succulent, juicy meat I've ever tasted.",
  "board": "ck"
},
{
  "text": "They’ll probably get you on animal abuse",
  "board": "ck"
},
{
  "text": "I doubt the pet store guinea pigs taste good, as they're feeding them the absolute cheapest food possible.",
  "board": "ck"
},
{
  "text": "It's not illegal to eat your rabbit, why would it be illegal to eat your guinea pig?",
  "board": "ck"
},
{
  "text": "how would anyone know if you ate it though. you could just say it died.",
  "board": "ck"
},
{
  "text": ">they're costly\nYou can get rescue guinea pigs at the shelter.",
  "board": "ck"
},
{
  "text": "Has cooking made you more social?\nI had this stupid idea when I started cooking a couple years ago that I would learn to make delicious food and then I would have friends and cook for them instead of blowing money in junk food and everyone would think I'm really cool but I just cook for myself, even if my food is really good it doesn't matter because nobody tries it",
  "board": "ck"
},
{
  "text": "Lol, no. It made me happier to be alone",
  "board": "ck"
},
{
  "text": "All of 4chan is /r9k/, just with different flavors.",
  "board": "ck"
},
{
  "text": "Check meetup.com and see if there any groups that focus on doing potlucks.",
  "board": "ck"
},
{
  "text": "This, learning how easy it is to cook just made me resent lazy people who blow their money on fast food even more.",
  "board": "ck"
},
{
  "text": "Hosted food themed parties\n\n1. fondue party. Oil, Cheese adn Chocolate - by far the most successful\n\n2. Deep fried party. Pretty creative combinations were tried. Lots of fun, everyone smelled really bad the next day.\n\n3. D&D where one person has to cook and it rotates. awesome",
  "board": "ck"
},
{
  "text": ">go to a restaurant\n>order a dish\n>waiter doesn't tell me \"excellent choice, sir\"",
  "board": "ck"
},
{
  "text": ">go to restaurant for lunch hungry as fuck\n>order a huge seafood plate\n>qt server notices I've finished eating\nFuck, I don't even want to admit this anonymously but here goes\n>tells me, \"Good job, man! You finished the whole thing!\"\n>I was 19 years old at the time\n>mfw",
  "board": "ck"
},
{
  "text": "Lol being this devistated over nothing. See you at 30 if you don't neck yourself.\nGood job anon, admitting you have a problem is the first step.",
  "board": "ck"
},
{
  "text": ">Guy sees you and 360's away\n0/10 can't do math",
  "board": "ck"
},
{
  "text": "t. Alabama nigger",
  "board": "ck"
},
{
  "text": "hey bait boy! stick to flicking that little bean of yours. The master baiters will handle things from here on out.",
  "board": "ck"
},
{
  "text": "Do Americans really put fucking vinegar on their fries?",
  "board": "ck"
},
{
  "text": "Yes and it tastes great. The only exemption is sweet potato fries because they go with honey mustard.",
  "board": "ck"
},
{
  "text": "salt and vinegar is the 4th most popular flavor of chip\nWhy wouldn't that flavor combination be present elsewhere?\n",
  "board": "ck"
},
{
  "text": "Yes, but not all the time. And malt vinegar is a whole lot different than straight vinegar.",
  "board": "ck"
},
{
  "text": "OP is a little faggot kid from reddit\nbrits are the ones who are known to do this",
  "board": "ck"
},
{
  "text": "That sounds more like a britbong thing",
  "board": "ck"
},
{
  "text": "Donald Gorske broke his world record by officially eating 30,000 McDonald's Big Mac's Friday in Fond Du Lac.\n\nGorske was surrounded by family, friends and Big Mac lovers as they watched him take a bite of Big Mac number 30,000. Gorske has been eating Big Macs at least two Big Mac's a day since he took his first bite in 1972. He saves the wrappers, receipts, and bags for proof.\n\n\"When I had a Big Mac that was the best food I ever had. I knew I was going to be eating them every day,\" Don Gorske said.\n\nIn Big Mac attire, his proud brother Daniel Gorske came to support him. But, 40 years ago, he was a little skeptical.\n\n\"I didn't understand the magnitude of what that would become. It's been a neat journey to see him,\" Daniel Gorske said.\n\nDon Gorske has been featured in the Guinness World Records and the film Super Size Me. After Friday's record-breaking Big Mac, Gorske said he's already looking forward to the next milestone and doesn't plan to stop anytime soon.\n\n\"The wife jokes it will be over when I have to put it in a blender it's over,\" Gorske said. \"I don't think it would even be over then.\"\n\n",
  "board": "ck"
},
{
  "text": "If he was truly /ourguy/ he'd be eating McChickens, the best fast food sandwich.",
  "board": "ck"
},
{
  "text": "Maybe if he were a lady. Hard to imagine a dude buying a chicken sandwich",
  "board": "ck"
},
{
  "text": ">man obliterates the \"fast food makes you fat\" meme",
  "board": "ck"
},
{
  "text": "Most amerilols could eat pizza every single day",
  "board": "ck"
},
{
  "text": "He doesn't have the fries, or coke, etc. to my knowledge.",
  "board": "ck"
},
{
  "text": "Are you growing anything this year, /ck/?",
  "board": "ck"
},
{
  "text": "I thought you meant eloctroncity",
  "board": "ck"
},
{
  "text": "Nice! Thanks for the info and good luck.",
  "board": "ck"
},
{
  "text": "Sure no problem.\n\nThank you and good luck as well!",
  "board": "ck"
},
{
  "text": "These are poisonous.",
  "board": "ck"
},
{
  "text": "Ah. That sucks.",
  "board": "ck"
},{
  "text": "Rule:\n>Every reply to this thread needs to have a piece of your work attached wether is it WIP or a finished piece\n\nHave fun you fucking elitists.",
  "board": "ic"
},
{
  "text": "I don't like the font on the sign but this is cool",
  "board": "ic"
},
{
  "text": "fug",
  "board": "ic"
},
{
  "text": "Oh, I think I see what's up with the fingers. Maybe this would look more natural? Obviously just a quick edit, but that helps readability on the hand I think",
  "board": "ic"
},
{
  "text": "Right arm also needs widened.",
  "board": "ic"
},
{
  "text": "How will you ever make it if you don't draw anime in this time and age?",
  "board": "ic"
},
{
  "text": "no",
  "board": "ic"
},
{
  "text": "That's a shame, I like your stuff.",
  "board": "ic"
},
{
  "text": "If you don't like what you draw than you won't make it anyway. \nI like the japanese style character designs for the simple fact that they are made to be as cute, feminine, and appealing as possible. In contrast western character design makes women look like men and men look like they have been injecting testosterone since birth.\nIn short you are looking at two different forms of idealization one of which happens to be massively appealing",
  "board": "ic"
},
{
  "text": "That's a very interesting perspective.",
  "board": "ic"
},
{
  "text": "You should study a bit of art history, you will find all kinds of things like this..it is really interesting. For example look at the difference between Mannerism and Baroque art",
  "board": "ic"
},
{
  "text": "multiple posts encouraged. For me it's Disney style females or legoman fundamentals.",
  "board": "ic"
},
{
  "text": "how do you use this website? like what time do you do and how do you start a line of action drawing?",
  "board": "ic"
},
{
  "text": "where did you get this from? cant find anything by reverse image searching",
  "board": "ic"
},
{
  "text": "I like cute girls in elaborate dresses, is there a problem with that?",
  "board": "ic"
},
{
  "text": "I hope you make it, anon.",
  "board": "ic"
},
{
  "text": "The fucking definition of over rendered.",
  "board": "ic"
},
{
  "text": "are animators the chads of art?\n\n>the chad animator:\n>never draws anything stiff. his art is always fluid and full of life\n>everything he draws is appealing\n>can effortlessly finish hundreds of sketches without breaking a sweat\n>never over-renders because his sketches are so good that they can stand on their own\n\n>the virgin illustrator:\n>constantly struggling to not draw lifeless, stiff Frankenstein shit\n>doesn't understand why most of his stuff is unappealing\n>takes weeks to start anything because he's scared of a blank canvas\n>spends weeks polishing his turds and over-rendering everything. it still looks unappealing and lifeless",
  "board": "ic"
},
{
  "text": "I thought that title belonged to sculptors",
  "board": "ic"
},
{
  "text": "I can’t find the single-question thread or animation thread so I’ll ask this here.\nI want to learn the fundamentals necessary to make quality animation and I’m able to take classes at the community college over the summer. Should I take:\n>life-drawing 1\n>drawing and composition 2(I took 1 already)\nOr\n>pencilling for comic and sequential art\nPic is my work, I can show more but this is the best I’ve done.",
  "board": "ic"
},
{
  "text": "where do i fall into these categories",
  "board": "ic"
},
{
  "text": "Learn traditional methods. It helps a lot. Take life drawing, and drawing & comp 2. You need to draw form before you can take form and make a story out of it. You know what I'm saying?",
  "board": "ic"
},
{
  "text": "None, this is symbolic trash. Try again. Take a class like the other anon.",
  "board": "ic"
},
{
  "text": "Old Thread: >>367155\n\nImmortalize your girl in your portfolio, and at:\n\nPost-free dice rolling tool:\n\nBook Mobile: ",
  "board": "ic"
},
{
  "text": "Do it!",
  "board": "ic"
},
{
  "text": "roll",
  "board": "ic"
},
{
  "text": "huh?",
  "board": "ic"
},
{
  "text": "I make joke",
  "board": "ic"
},
{
  "text": "lol and a roll",
  "board": "ic"
},
{
  "text": "wtf loomis lied to me",
  "board": "ic"
},
{
  "text": "Blog?",
  "board": "ic"
},
{
  "text": "eat your vegetables, loomis-chan",
  "board": "ic"
},
{
  "text": "Blog?",
  "board": "ic"
},
{
  "text": "Lmao this",
  "board": "ic"
},
{
  "text": "Anyone who wants to get better at painting should seriously watch this series\n\n\nProbably the best and most to-the-point tutorials about painting fundamentals I have ever watched",
  "board": "ic"
},
{
  "text": ">it's a video series by some formally trained artist talking about meme concepts and easy to spot facts of lighting with a dash of their preferred version of color theory.",
  "board": "ic"
},
{
  "text": "I can't stand his videos and work.\nHe clearly can paint well but he chooses to draw these mangled unappealing calarts characters with wonky perspective.",
  "board": "ic"
},
{
  "text": "Remember to keep drawing and submit everyday! \n\nLast thread \n\nSite\n>\nRules\n>Submit your artwork everyday (or your prefered frequency)\n>The deadline for submissions is 23:59:59 GMT each day\n>You should spend at least 30 minutes on each update\n>Miss a day and you'll be alright, just keep going\n>Have fun\n\n>New thread is made whenever it is needed",
  "board": "ic"
},
{
  "text": "Doing all these boxes and cylinders is great and all, but what's a way to test if they are actually helping higher tiers of drawing? It kind of does feel mindless after a certain point because I'm not sure what there is to apply this too. It doesn't get more complex than being off a bit from being a perfect cube or cylinder. There's lineweight and readability/cleanliness, but that's kind of like polishing a rock to look shiny when it's still a rock.",
  "board": "ic"
},
{
  "text": "do a head rotation",
  "board": "ic"
},
{
  "text": "But we didn't learn how to draw heads yet.",
  "board": "ic"
},
{
  "text": "That's a weirdly detailed mouth. I mean it's nowhere near bad at all, just out of place.",
  "board": "ic"
},
{
  "text": "just loomis or proko it my dude\n\nif its too much for you then do a house or something cubeish shaped i dunno",
  "board": "ic"
},
{
  "text": "You how do I draw ANATOMY? I got Michael Hampton's book and it doesn't make any fucking sense lol. There's no \"how to\" or whatever so I'm left in the dark just like I am if I were just looking at a figure in real life.\n\nIs this it? Is the secret really just \"keep looking at shit and try to draw it until you find a system that works for you\"? If not, then please direct me to a good, CLEAR system that will yield results if I practice over time.",
  "board": "ic"
},
{
  "text": "Below the shoulder: humerus, radius, ulna, and hand bones.",
  "board": "ic"
},
{
  "text": "I don't get the gesture thing. Everything else seems self explainable",
  "board": "ic"
},
{
  "text": "You idiot you're supposed to endorse Riven. He is a meme.",
  "board": "ic"
},
{
  "text": "I thought you were being an ass, but holy shit this book is easy. Compared to Bridgman, SICP, Starting Strength, even my middle school math textbooks, this is so digestible I think there's something wrong with OP.",
  "board": "ic"
},
{
  "text": ">I don't get the gesture thing.\nCapturing and understanding the direction of the figure's movement helps you to make the figure seem more lively. By exaggerating the pinch/stretch mechanic and keeping the figure off balance, you can create a sense of energy.\n\nBasicall you're breaking down the figure into its most basic and important components. A good gesture can set a mood or convey an action in very few lines. It's communication of an idea.",
  "board": "ic"
},
{
  "text": "a drawing i made of me and my so called dad",
  "board": "ic"
},
{
  "text": "They don't even look good. They just look like two balloons. \nI get that people want to make characters that look attractive but boobs like the ones on the right just look better and like they'd feel softer and more squeezable. The circle boobs on the left look like they'd feel like basketballs.",
  "board": "ic"
},
{
  "text": "idealized against the repulsive flabby reality.",
  "board": "ic"
},
{
  "text": "Yes. They're beautiful.",
  "board": "ic"
},
{
  "text": "Rebis' great.",
  "board": "ic"
},
{
  "text": "Don't shitpost with Raita's art faggot",
  "board": "ic"
},
{
  "text": "I like it.",
  "board": "ic"
},
{
  "text": "Porn thread for people who like drawing porn.\nHide degeneracy you don't wish to view, etc, etc.\nPost finished works and W.I.P's here for critique.\nAny questions in regards to reference materials will be answered.\nDon't know where to start? Check the updated sticky- ",
  "board": "ic"
},
{
  "text": ">>3415593\nthats a really nice penis, please dont make it all veiny and gross, keep it aesthetic",
  "board": "ic"
},
{
  "text": ">>3415678\n\nwait these are from the same artist?\nyour toony style drawings look pretty decent and cute compared to the more \"realistic\" chick laying down.\nWork on some anatomy bro.. \nIt's obvious you skipped the your loomis and fundies and all that.",
  "board": "ic"
},
{
  "text": "Nah. I'll do what i want.",
  "board": "ic"
},
{
  "text": "Line control is all about mileage. In this case #justdraw is actually the only legit advice I can give you. The more you draw, the more confident your lines will become.\nAlso ctrl+z obviously.",
  "board": "ic"
},
{
  "text": "screen does the exact opposite of multiply. it lightens things like multiply darkens them. i usually just eyeball it, experiment with colors and stick to one which seems to look right. \nyou can follow me tumblr: ngmi-art.tumblr.com or ngmi.deviantart.com ...yes ngmi is unironically my artist name\n\n\nWHAT?! a sketchbook full with dicks lying on the coffee table, you say?",
  "board": "ic"
},
{
  "text": "After looking at gelbooru for months I want to start drawing anime, but I don't know anything about drawing. So how can I learn to draw things like chairs and walls and then anime characters?",
  "board": "ic"
},
{
  "text": "I love how this is the general response to that image, of fucking course it's exaggerated.",
  "board": "ic"
},
{
  "text": "can you even properly look down sights on your rifle with a mask like that on",
  "board": "ic"
},
{
  "text": "to draw the image on the left, you just need to grind anime until you get a sense of the conventions, and then.... drumroll please..... trace poses from other artists! yes! there you have it folks, how to be a run of the mill weeb artist. join the dogpile today!",
  "board": "ic"
},
{
  "text": "Post your work",
  "board": "ic"
},
{
  "text": "This image would work a whole lot better if the left one was replaced with something else.",
  "board": "ic"
},
{
  "text": "This person has a history of tracing other people's work and claiming it as her own. I suspect that this piece has been copied as well. Does anyone recognize the original source? Thanks.",
  "board": "ic"
},
{
  "text": "no one cares",
  "board": "ic"
},
{
  "text": "What's /ic/'s opinion on abstract art?",
  "board": "ic"
},
{
  "text": "remember to sage and hide",
  "board": "ic"
},
{
  "text": ">I need to use words to justify why this peice of art has merit",
  "board": "ic"
},
{
  "text": "Literally what are you people even talking about who the fuck is nambo?",
  "board": "ic"
},
{
  "text": "Not him, but why do you assume that you’d gain something from looking at ANY art in the first place? I have nothing against realism, but there’s already 1000+ years of it in (western) arts. The fact that any sort of abstraction triggers you to this extent is proof of it’s importance.",
  "board": "ic"
},
{
  "text": "I'm going to say something really gay right now but hear me out.\nPeople complaining about abstract art not being art and the people who claim that those who don't get it are plebs actually justify the medium as art.",
  "board": "ic"
},{
  "text": ">age\n>location\n>current book youre reading",
  "board": "lit"
},
{
  "text": "I'm from Macedonia btw",
  "board": "lit"
},
{
  "text": "27\nNorn Iron\nThe Long Earth",
  "board": "lit"
},
{
  "text": "26\nEast Anglia\nTertullian complete works",
  "board": "lit"
},
{
  "text": ">22\n>Knoxville, TN\n>Hopscotch",
  "board": "lit"
},
{
  "text": ">23\n>dc\n>uncle tom's cabin",
  "board": "lit"
},
{
  "text": ">He wanted to write a sequel to his magnum opus, The Brothers Karamazov\n>He had the storyline and the beginnings of the first book written already\n>He planned a total of 3 full epics in total\n>We will literally never see ANY of his planned work after the ending of TBK\n\nWhy fucking live?",
  "board": "lit"
},
{
  "text": "Someone like Dostoyevsky is for me intellectual counterfeit money when compared to a good sci-fi book.",
  "board": "lit"
},
{
  "text": "This is the tragic beauty of art and literature, we only get what survived. Better this than nothing.",
  "board": "lit"
},
{
  "text": "After trying to read Crime and Punishment when I was about 14 years old I never touched one of his books again?\nWhy is he so loved?",
  "board": "lit"
},
{
  "text": "> read Crime and Punishment\n> When I was about 14 years old\n\nPlease neck yourself",
  "board": "lit"
},
{
  "text": "lol grow up kid",
  "board": "lit"
},
{
  "text": ">ywn understand words as those that created them did\nHas alphabetisation and the ubiquitousness of writing permanently ruined my mind, locked me in to a certain way of thinking?\nI cannot but think of words in terms of letters, and yet for most of these words' histories, they weren't thought about in that way by most people.\nI was talking to somebody about how plurals work in German, where in some words a vowel gains an umlaut, and so \"Hand\" becomes \"Hände\", \"Kuh\" becomes \"Kühe\" (whereas in \"Hund\", it doesn't, and it becomes \"Hunde\"). But I realized that not only my explanation, but my entire way of thinking about the words revolved around letters. How would a common, illiterate 19th century mother explain that to her child? How would she be thinking about it?\n\nIt seems I've been completely shut out from one approach to words and language, and not a marginal one, but the one of most of our ancestors.",
  "board": "lit"
},
{
  "text": ">druids repeating sounds is the same as a standardized alphabet and textual conventions",
  "board": "lit"
},
{
  "text": "If I was illiterate I wouldn't be able to read this moronic thread, and that would be a pretty good thing.",
  "board": "lit"
},
{
  "text": "Do you mean if you *were* illiterate?\nGood post.",
  "board": "lit"
},
{
  "text": ">However, you should not flinch if — nay,when— you hear someone say“If I was... I would...”as a Class C conditional in casual speech. This sometimes happens even in educated speakers and writers, so you should not make anything of it. Some writers prefer not to do that, but unless the person complaining is your English teacher, you shouldn’t let it get to you. (Yes, this is ungrammatical for some people. For others, it is not.)",
  "board": "lit"
},
{
  "text": ">googled it for 11 minutes\nWelcome back",
  "board": "lit"
},
{
  "text": "ITT: post a dream you've had lately that's been troubling you and other anons will apply everyone's favorite pseudoscience to it to see what you're repressing (probably that you want to fuck your mother)",
  "board": "lit"
},
{
  "text": ">a girl (can only see her hair, body and mouth)\npartial objects\n\n>but then ppl start chasing after us\nthe big other\n\n>we end up somehow teleporting to a open field of land but soon as I rest because im tired\nimpotence in the face of sexual gratification\n\n>she walks away and im screaming come back. but she doesn't hear me.\nobject petit a\n\nyou're either struggling to confront your feelings towards a girl you like because you're worried about the condemnation of others, or your father was incredibly strict and possessive over your mother, leading to your dangerous perception of women as being fickle, distrustful and in need of control or domination.",
  "board": "lit"
},
{
  "text": "I had a crazy dream, my gf and I were out by the chickens, the pen was surrounded by velocoraptors. The chickens were watching anime and she was upset with me that the chickens would watch that.\nIt started to get cold, I found out that the ice age was here and we needed to get to southern France to survive. \nI had visions of Europe slowly freezing over, young men in burlap rolling barrels of food into their houses. Entire harbor towns filled with people. I went to see one of my classmates, He brought me to a where my math teacher was on a hill overlooking MT Silverstar and my campus. The owners of the house saw us as they backed out of their driveway. Their dogs came to us, they were more human than dog, humans in underwear with small characteristic of certain breeds. A pit bull with large human feet, a slim excited poodle woman, and a large imposing grey great dane of a man.\nI went outside and watched the sky over the mountain changing with every blink to a new deep imposing color, blood red, then the color of the ocean at dusk, then a psychedelic yellow.\nThen the ice winds came over the mountains and the dream was over.",
  "board": "lit"
},
{
  "text": "I work at a golf course and outside there is this garden patio area with rows of hedges and a fountain in the middle. The dream I had was there at night, pitch black out and all, except I held a knife in my hand and was crouching through the hedges, like I was on the prowl. As I get closer to the fountain I peek my head around the last hedge and see a lamb drinking from the fountain. Then the landscape shifts to midday and it becomes the golf course, where I see people teeing off.",
  "board": "lit"
},
{
  "text": "Dream that implanted itself in my head some year ago, go fish if you will:\n\nI'm in bed and get woken by a knock on my front door, it's nothing, I go back to bed and before I can take my shirt and sweatpants off, my crush from high-school who drew a love heart with my name on it in my geography folder once opens my window from the outside in tennis gear and guides me almost silently off the verge into an Eden with lots of red roses where we pontificate with our eyes under a copy of the Trevi Fountain, I open my eyes to speak and my hands and then arms go through a trellis door, I feel a kiss on my skin which is entirely foreign and alien to what is ultimately virginal.",
  "board": "lit"
},
{
  "text": "I have almost the same dream except in mine I'm a day from the deadline and have done no work and I'm being told to fuck off to the woods already by the new-st-paul.",
  "board": "lit"
},
{
  "text": "dropping this shit cuz i have no idea what the fuck is going on \n> tfw haven't studied kant, heidegger, etc. \n\ni hate my life",
  "board": "lit"
},
{
  "text": "Yes. Do you?",
  "board": "lit"
},
{
  "text": "his death is /lit/ af regardless",
  "board": "lit"
},
{
  "text": "Yes I do, and it's obvious to me that the philosophy doctorates that graded my papers knew the material well enough to know whether I grasped the concept at hand and reflected that assessment in my grade.",
  "board": "lit"
},
{
  "text": "Phenomenology brackets givenness as an immanently transcendentalizing function: even within the epoche self-experience, there is an intentionality, and with intentionality an therness constituted by its adumbration in/by consciousness. Husserl does a great job of systematizing some really Eastern sounding concepts",
  "board": "lit"
},
{
  "text": "My point is that there's no reason to rest contented because you received a good grade. It's nice to know others think you're on the right track, though.",
  "board": "lit"
},
{
  "text": "Care to explain your \"guy\" /lit/?\n",
  "board": "lit"
},
{
  "text": "everyone worried about DFW's legacy relax, we've known for 20 years that JD Salinger was a pervert who mistreated his girlfriends and general freak and it hasn't ruined his legacy",
  "board": "lit"
},
{
  "text": "That was before the age of hegemonic feminism. Women are practically trained to hate Catcher in the Rye, so I'm soon it will be phased out of popular consciousness soon enough.",
  "board": "lit"
},
{
  "text": "lets archive that\n",
  "board": "lit"
},
{
  "text": "when will the race baiting end",
  "board": "lit"
},
{
  "text": "maybe in the next 50 years, but his literary legacy hangs more on F+Z and the short stories anyway",
  "board": "lit"
},
{
  "text": ">try to read history/philosophy/economics books\n>get bored and read a novel instead\n\nHow do I stop this from happening?",
  "board": "lit"
},
{
  "text": "l really like the pretty pictures in my head, it makes me feel like I'm there or the character is my friend or his companions are my friends\nlonesome dove was incredibly picturesque, the small cattle ranch, the wrangling below the border, the retired mexican bandit cook, the beans, the two pigs, the wild horse, the well digging, the beautiful sunrise, the casual bible reading, the whore who plays cards, the plains, the bickering, the jesting, the retired rangers, the humble housing, the relaxing on the porch, the lone armadillo, the mesquite thickets, the shade from the hot sun, the cowboys going on the trail, the woman who plays the only piano in town, the church, the barn with the roof missing, everything was so calming.",
  "board": "lit"
},
{
  "text": "whole board implicitly understands phil is the highest, then poetry, then social commentary, then high literature and then nothing else\n\nfascinating how that works, its the same on /sci/:\n\npure maths\ntheoretical phys\napplied maths\nCS\nbiophysics\nChemistry\nEng\nSoft Dev\nBio\neverything else",
  "board": "lit"
},
{
  "text": ">or you're reading stuff that doesn't interest you\n\nI really don't care about these things but I want to be smart and not be a brainlet so I try to force myself through those books anyway.",
  "board": "lit"
},
{
  "text": ">try to read any book\n>get bored and shitpost instead",
  "board": "lit"
},
{
  "text": ">try starting research on Russia since 1991 for book idea \n>end up watching videos on youtube about girls disliking short men instead",
  "board": "lit"
},
{
  "text": ">tfw you can't discuss your favourite book on /lit/ because it's never been translated to English",
  "board": "lit"
},
{
  "text": "Do a translation of it then. You might make a few dollars and it sounds like the kind of bullshit this board would like.",
  "board": "lit"
},
{
  "text": "Have you ever tried translating something my friend?",
  "board": "lit"
},
{
  "text": "What language? I'm curious.",
  "board": "lit"
},
{
  "text": "just copy paste into google translate and then edit it",
  "board": "lit"
},
{
  "text": "Tried and succeeded.",
  "board": "lit"
},
{
  "text": "Can you refute this? It seems like a sophism to me, but it's a bit recursive and a brainlet like me can't unravel it.\n\nNote that this particular formulation ar",
  "board": "lit"
},
{
  "text": "Whoops, thinking of Tolkien. Of course Lewis never became a Catholic. I don't recall the rest of this argument from him, so I made an assumption (though I could argue there is space between \"intelligent design\" and \"deism\" as well).",
  "board": "lit"
},
{
  "text": "Even if that is accurate, it doesn't mean God exists. Seems like an unsatisfying conclusion.",
  "board": "lit"
},
{
  "text": "he's right, either 1. god doesn't exist and we can't no nuthin, or 2. God exists and we Can Know Something",
  "board": "lit"
},
{
  "text": "It's not supposed to be a proof for the existence of God; it's a thought experiment about the epistemological status of truth in a wholly naturalistic universe.",
  "board": "lit"
},
{
  "text": ">If so, why can't I trust my own thinking to be true?\nwhy should you trust your own thinking to believe this argument has any validity?\nthe argument is self-refuting, checkmate crustians!",
  "board": "lit"
},
{
  "text": "what if sisyphus was an orange",
  "board": "lit"
},
{
  "text": "big if true",
  "board": "lit"
},
{
  "text": ">sissy\n>fuss\n¯\\_(ツ)_/¯",
  "board": "lit"
},
{
  "text": "He has been reduced to an endless, pointless struggle as a punishment for thinking he was cleverer than Zeus. \nNothing at all to do with challenges faced. His crime was hubris, his punishment is to have endless struggle without the possibility of achievement.",
  "board": "lit"
},
{
  "text": "I've seen this image before, but not at a scale to have read the text\nanyone know what I'm talking about? I think it was someone's avatar on an old vbulletin-esque foru,",
  "board": "lit"
},
{
  "text": ">pick up book\n>german author\ninto the trash it goes",
  "board": "lit"
},
{
  "text": "Smart.",
  "board": "lit"
},
{
  "text": "Can they even write fiction?",
  "board": "lit"
},
{
  "text": "No, their autism doesn't allow them to.",
  "board": "lit"
},
{
  "text": "Post your novel ideas. It's not like they're going anywhere.",
  "board": "lit"
},
{
  "text": "a bit predictable",
  "board": "lit"
},
{
  "text": "A writer finds himself tossed into a chaotic world of schoolboys by a diabolical professor who wishes to reduce him to childishness.",
  "board": "lit"
},
{
  "text": "The story of 3 people, 2 men and a woman, who live in an anarcho-mutualist future, their struggles and lives and just what life is like for them. Also females have been engineered to be amazons and men were optimized to be small to be superior at firearm combat.",
  "board": "lit"
},
{
  "text": "Scientists send a nigga back in time to kill racist crackas, but when he does the scientists who sent him back disappear in the future, then the killa nigga disappears in the past, and the whole universe implodes because everything was racist from the beginning and god done fucked up, nigga",
  "board": "lit"
},
{
  "text": "Sounds lit.\n\nSounds exciting. \n\nmeh\n\nlit\n\n\n\nNice\n\nSounds /comfy/",
  "board": "lit"
},
{
  "text": "Who here majored in English and what is your job now? \nI'm halfway to my English degree because it's what I enjoy and what interests me most, but I'm not so sure about what I want to do for a living with it. \nWho here is working with an English degree? How is your quality of life?",
  "board": "lit"
},
{
  "text": "Majored in english-- now working as a copywriter for a tech company. Pretty comfy job and make 52k (as a contractor). Took ~5 years after undergrad to get a decent writing job. Looking to get a master's degree in healthcare and working as a medic on the side.",
  "board": "lit"
},
{
  "text": "I read yet-to-be-released books and provide feedback. Sometimes for local literary competitions, sometimes for bigger publishers. I read a lot of trash, but once in a while I read a good one and I get sad because I know only 2 dozen people will ever read it.",
  "board": "lit"
},
{
  "text": "Vietnam, clearly",
  "board": "lit"
},
{
  "text": ">Wanted to be a Creative Writing major but my parents said they would disown if I did it.\n\nYour parents are very intelligent and admirable people",
  "board": "lit"
},
{
  "text": "ana de armas",
  "board": "lit"
},
{
  "text": "Well this was just abysmal. Why in the world does this book enjoy the reputation it does? 448 pages of all summary and no scene. Limp prose, sketches rather than characters, fantastical elements incorporated that service no discernible themes or aesthetics. This shit is just atrocious, and the fact that GGM is credited as the father of magical realism when he does it so poorly is both a slap in the face to Bruno Schulz and a depressing indication of why the form has failed to produce worthwhile fiction. I blame every single bloodless/unjustifiably lauded multigenerational sprawling ethnic novel on this piece of trash. \n\nTLDR; One Hundred Years of Solitude is bad",
  "board": "lit"
},
{
  "text": "Name some that don’t involve ants or trees",
  "board": "lit"
},
{
  "text": "The father of magical realism is Juan Rulfo. Comala > Macondo. Fight me.",
  "board": "lit"
},
{
  "text": "I happen to like this book\n\nHuh",
  "board": "lit"
},
{
  "text": "I thought certain aspects were cool, just the scope of time presented from when seeing ice was mind bottling through the banana republic (which had my favorite surreal moments) up until the destruction of the town. Yeah its a bit Coelho in a way in the \"it was all foretold\" regard, but it is essentially a cautionary tale of what happens when you don't stay true to la familia. Like when the one arcadio stops fucking his wife and his animals stop fucking too following his example,its all about karma. So compare this story being told to mason & dixon by pinecone. While I enjoy and respect that novel, and its plausible that protestants locked away in the winter would tell convoluted stories to each other to pass time, there had to be someone groaning \"get on with it\" on the 50th tangent. Imagine 100 years as a story being verbally told.. A myth passed down verbally finally being transcribed, much like the aenied or Odyssey. I think it is a deeply entry to medium level book, something that may lure casuals in (despite the imposing length for mommies) and open the doors for something better. P.s. the 2nd time I read this book was while in jail, I was thrilled to see it on the piles of jerkoff books and airport thrillers. It stood out like a ribeye on a pile of celery.",
  "board": "lit"
},
{
  "text": "I like the bit where the colonel tries to commit suicide.",
  "board": "lit"
},
{
  "text": "Just bought this. What am I in for?",
  "board": "lit"
},
{
  "text": "Just bought this. What am i in for?",
  "board": "lit"
},
{
  "text": "Just tell me what the book is about.",
  "board": "lit"
},
{
  "text": "An early enthusiast for the Melville Revival, British author E. M. Forster, remarked in 1927: \"Moby-Dick is full of meanings: its meaning is a different problem.\"[19] Yet he saw as \"the essential\" in the book \"its prophetic song\", which flows \"like an undercurrent\" beneath the surface action and morality.[20]\n\nBiographer Laurie Robertson-Lorant sees epistemology as the book's theme. Ishmael's taxonomy of whales merely demonstrates \"the limitations of scientific knowledge and the impossibility of achieving certainty\". She also contrasts Ishmael and Ahab's attitudes toward life, with Ishmael's open-minded and meditative, \"polypositional stance\" as antithetical to Ahab's monomania, adhering to dogmatic rigidity.[21]\n\nMelville biographer Delbanco cites race as an example of this search for truth beneath surface differences. All races are represented among the crew members of the Pequod. Although Ishmael initially is afraid of Queequeg as a tattooed cannibal, he soon decides, \"Better sleep with a sober cannibal than a drunken Christian.\"[22] While it may be rare for a mid-19th century American book to feature black characters in a nonslavery context, slavery is frequently mentioned. The theme of race is primarily carried by Pip, the diminutive black cabin boy.[23] When Pip has almost drowned, Ahab, genuinely touched by Pip's suffering, questions him gently, Pip \"can only parrot the language of an advertisement for the return of a fugitive slave: 'Pip! Reward for Pip!'\".[24]\n\nEditors Bryant and Springer suggest perception is a central theme, the difficulty of seeing and understanding, which makes deep reality hard to discover and truth hard to pin down. Ahab explains that, like all things, the evil whale wears a disguise: \"All visible objects, man, are but pasteboard masks\" — and Ahab is determined to \"strike through the mask! How can the prisoner reach outside, except by thrusting through the wall? To me, the white whale is that wall\" (Ch. 36, \"The Quarter-Deck\"). This theme pervades the novel, perhaps never so emphatically as in \"The Doubloon\" (Ch. 99), where each crewmember perceives the coin in a way shaped by his own personality. Later, the American edition has Ahab \"discover no sign\" (Ch. 133) of the whale when he is staring into the deep. In fact, Moby Dick is then swimming up at him. In the British edition, Melville changed the word \"discover\" to \"perceive\", and with good reason, for \"discovery\" means finding what is already there, but \"perceiving\", or better still, perception, is \"a matter of shaping what exists by the way in which we see it\".[25] The point is not that Ahab would discover the whale as an object, but that he would perceive it as a symbol of his making.[25]\n\nYet Melville does not offer easy solutions. Ishmael and Queequeg's sensual friendship initiates a kind of racial harmony that is shattered when the crew's dancing erupts into racial conflict in \"Midnight, Forecastle\" (Ch. 40).[13] Fifty chapters later...",
  "board": "lit"
},
{
  "text": "This is pretty long. Give me the gist.",
  "board": "lit"
},
{
  "text": "bump",
  "board": "lit"
},{
  "text": "Thoughts on Yeezus?",
  "board": "mu"
},
{
  "text": "Literally the most influential album of the late 2000s",
  "board": "mu"
},
{
  "text": "This, it's literally just MAYA and Mista Thug Isolation if they were shit and they got combined.\n\nThis too",
  "board": "mu"
},
{
  "text": "Great as a full experience, terrible if you break each song apart individually, it has it's own tone and almost any experimental album it's compared to it sounds nothing like, doesnt mean its the most original thing either though, I am a God and Black Skinhead are the worst tracks",
  "board": "mu"
},
{
  "text": "not a bad album, but listening to it makes me want to listen to other kanye or experimental hip hop albums",
  "board": "mu"
},
{
  "text": "Noob",
  "board": "mu"
},
{
  "text": "Post your favorite song",
  "board": "mu"
},
{
  "text": ">every song of it blocked in my country\n>full album available in my country\nwhat",
  "board": "mu"
},
{
  "text": "anything that sounds like this/ has the records dark atmosphere? thanks in advance",
  "board": "mu"
},
{
  "text": "maybe marianne's cover album \"rich kid blues\". it wasn't intended to be dark, but it was recorded right when her voice started to change. this describes it really well\n>“The record itself is very strange and ghostly. It’s the voice of somebody incredibly high, probably on the edge of death. They always sound like that. Johnny Thunders sounds like that. Anybody who heard that record would have said, ‘Well that’s that. We’ll never hear from her again’.” \nand yes in some songs it sounds like she's literally about to pass out and/or die",
  "board": "mu"
},
{
  "text": "ah, i dont use twitter so i wouldnt know",
  "board": "mu"
},
{
  "text": "i know, i can hear his talons when he scurries around in my attic at night waiting for me to succumb to sleep deprivation",
  "board": "mu"
},
{
  "text": "thats all me and my devices",
  "board": "mu"
},
{
  "text": "Just found out that my daughter auditioned for \"Blacked.com\" while she was away for school this semester.. Music for this feeling?",
  "board": "mu"
},
{
  "text": "I'm pretty sure that's the opposite of what anon pointed out.",
  "board": "mu"
},
{
  "text": "He's from /pol/and, I'd be surprised if he knew more than a hundred words that weren't just variations of \"cuck\" and \"basedboy\"",
  "board": "mu"
},
{
  "text": "Kanye West - On Sight",
  "board": "mu"
},
{
  "text": ">my daughter\n>posts on /mu/\nk",
  "board": "mu"
},
{
  "text": "Death in June - Burial",
  "board": "mu"
},
{
  "text": "ITT: we support, follow, share, and give constructive criticism to eachother on various websites for music sharing such as Bandcamp, Soundcloud, Youtube, and more.\n\nPost a link to your site(s) and other anons follow/share/give feedback.\n\nPeople who post links and shill themselves after 5-10 posts without participating in any feedback/discussion are unwelcome and should be ignored.",
  "board": "mu"
},
{
  "text": ">sad tunez\n\nrec",
  "board": "mu"
},
{
  "text": "Knoxville, TN. Looking for other musicians in the area",
  "board": "mu"
},
{
  "text": ">metal/noise rock\n>fake drums\n>guitar raking sounds\n>closed hi hat trap beat sounding looking ass\n\nrecs:\n\ncomfy\n\nI like your picture, and your beats\n\nDungeon as fuck\n\nI'm gay for Sonic the Hedgehog sounds",
  "board": "mu"
},
{
  "text": "brand new track w/ the homie Thiago!! old school vibe... flows...\n\n\nalso, i'd really love some feedback on this WIP... hoping to release it on the 15th... is the first verse working? too abrupt of a start to it?\n\n\n\n\n\nrecs / feedback in sc",
  "board": "mu"
},
{
  "text": "I really fucking love it. This slight distortion gives the synths character and the videos really establish aesthetic as well. 8/10\n\nBeats are mad good bro. Dark and phonky\n7.8/10\n\nThis is beautiful. crying/10\n\nI expected way more honestly. Why would you give yourself such titles like Jazz Funk/Fusion/Psych Rock when half of these songs are just you noodling on your guitar?? 3/10\n\nLuv. 8.5/10\n\nMy shills:\n>Emo",
  "board": "mu"
},
{
  "text": "is he really a genius?",
  "board": "mu"
},
{
  "text": "no",
  "board": "mu"
},
{
  "text": "he's a hard working individual who laid down most of the foundation for trap and who turned his life around after jail cant get mad at it\n\ngenius, probably not",
  "board": "mu"
},
{
  "text": "So since Kanye can't use his mother's surgeon, what should his album cover be?",
  "board": "mu"
},
{
  "text": "They sound like stoned idiots",
  "board": "mu"
},
{
  "text": "based",
  "board": "mu"
},
{
  "text": "i like it.",
  "board": "mu"
},
{
  "text": "It's Wes Lang you fucking retards",
  "board": "mu"
},
{
  "text": "Holy shit, this has to be his best album, I cant explain why it works exactly since its so \nkaleidoscopic and a bit all over the place, but it feels like thats why it works, it tells more than one story, and it seems to let us look into Ye's mind in a way that we havent before, not just based on the content but also the way it is presented.",
  "board": "mu"
},
{
  "text": "what is this powerpoint shit",
  "board": "mu"
},
{
  "text": "absolute pleb",
  "board": "mu"
},
{
  "text": "instant classic... your taste is garbage.",
  "board": "mu"
},
{
  "text": "I CAN'T STOP LISTENING TO KANYE'S MUSIC",
  "board": "mu"
},
{
  "text": "stop huffing memes",
  "board": "mu"
},
{
  "text": ">favorite album\n>how many girls you kissed",
  "board": "mu"
},
{
  "text": "ITT: disturbing albums",
  "board": "mu"
},
{
  "text": "wait why\n\nis it just blocked?",
  "board": "mu"
},
{
  "text": "i am really concerned from where that album art came from, i really hope it's not a snap shot of a CP as well.",
  "board": "mu"
},
{
  "text": ":^)",
  "board": "mu"
},
{
  "text": "idk how to open a port there",
  "board": "mu"
},
{
  "text": "insane how nobody has mentioned this",
  "board": "mu"
},
{
  "text": "Sharethread\n\nETIQUETTE\n- Include correct format (artist / band, title of release, year of release, cover art, the file type (v0, 320 mp3, FLAC, etc), short description, YouTube sample, link)\n- Send thanks if you have downloaded something to let them know they did a good thing\n- Avoid sharing / requesting things that are already on the archive\n- Soulseek / rutracker are your friends, too - just don't argue in this thread about it\n\nREQUESTS\n>I have a request! Did I...\n- Check the archive for a live link before requesting?\n- Share something first?\n- Google \"blogspot + artist name + album name\"\n\nARCHIVE",
  "board": "mu"
},
{
  "text": "Thanks!\n\n\nThis is crazy, really cool though. It's like a punk version of Guerilla Toss",
  "board": "mu"
},
{
  "text": "legendary",
  "board": "mu"
},
{
  "text": "1979 - Richard Lloyd - Alchemy @FLAC\n>pop rock, power pop\nthe guitarist from Television who also worked with Matthew Sweet\n",
  "board": "mu"
},
{
  "text": "shit forgot the cover",
  "board": "mu"
},
{
  "text": "cool, thanks",
  "board": "mu"
},
{
  "text": "each dub gets to name the 7 tracks off of my new album\n\nits called \"Lawn Hoover cutting machine\"",
  "board": "mu"
},
{
  "text": "Swans - The Sound",
  "board": "mu"
},
{
  "text": "vivaldi's closet of mystery",
  "board": "mu"
},
{
  "text": "lesbian penis",
  "board": "mu"
},
{
  "text": "Michael Gira Presents: Me Chanting Ominously and Playing the Same Two Chords for 30 Minutes Straight While Also Banging a Drum Really Hard",
  "board": "mu"
},
{
  "text": "I Fucking Hate Myself And I Want To Die By Suicide By Hanging My Neck Of My Mother's Bra While Singing Lulabys To My Sister",
  "board": "mu"
},
{
  "text": "trips or better decides the best album of the 80s",
  "board": "mu"
},
{
  "text": "digits have decided",
  "board": "mu"
},
{
  "text": "Some great reward is better",
  "board": "mu"
},
{
  "text": "why do people like this",
  "board": "mu"
},
{
  "text": "I just don’t get it. Ariel comes across as very passionless and apathetic and I don’t find it very engaging",
  "board": "mu"
},
{
  "text": "Anybody who says this clearly knows nothing about him: Ariel genuinely loves all types of pop music.",
  "board": "mu"
},
{
  "text": "Who?",
  "board": "mu"
},
{
  "text": "his demeanor is low key but he does really care about the music he is making you can't make chamber pop ironically for two decades straight, or maybe you can, but he certainly isn't being ironic. There is lots of humor but there is also sadness in the music eg the doldrums.",
  "board": "mu"
},
{
  "text": "If it was 1975, he'd be a household name. He'd be David Bowie famous.",
  "board": "mu"
},{
  "text": "I just started looking at the design featured on the Oreo cookie and it's beautiful.\n>the Lorraine cross\n>the ring of flowers surrounding the brand name\n>outer ring of notches encapsulating the design\netc.",
  "board": "gd"
},
{
  "text": "What can I say I'm a fat fuck",
  "board": "gd"
},
{
  "text": "That typography is sad. Looks like an old medication label. I love the flowers though.",
  "board": "gd"
},
{
  "text": ">Looks like an old medication label. \nIt's literally a design from 1909",
  "board": "gd"
},
{
  "text": "Or-RoW!",
  "board": "gd"
},
{
  "text": "ask questions and give answers here\n\nold thread: >>321395",
  "board": "gd"
},
{
  "text": "nvm got it",
  "board": "gd"
},
{
  "text": "Sorry for my kid's vocabulary i wasn't born english ahah, this image is an exemple i didn't mean to ask the question like a miracle or something. It was real question about how do i assemble 2 images (the example of pasting my head) and make them look like in the same action/scene.",
  "board": "gd"
},
{
  "text": "maybe post the answer in case someone else runs into the same issue?",
  "board": "gd"
},
{
  "text": "There is layers upon layers that each need breaking down and explaining, no easy answer here mate, maybe cut out the bits you like and blend them into your pic, yes paste them",
  "board": "gd"
},
{
  "text": ">wants to blend shit over\n>ask how to make bg\nyou don't even know what it is that you need to do\nfollow this anon\n\n>cut out the bits you like and blend them into your pic, yes paste them\nand then work on blending them",
  "board": "gd"
},
{
  "text": "How do i get into fonts?",
  "board": "gd"
},
{
  "text": "Why would I trust this gay ass infographic when the creator couldn't choose a font combination to save his fucking life",
  "board": "gd"
},
{
  "text": "Where can I get Neuzeit Grotesk for free?",
  "board": "gd"
},
{
  "text": "The better question is why do you need to",
  "board": "gd"
},
{
  "text": "9brAJX32",
  "board": "gd"
},
{
  "text": "Thank you so much. Any other awesome fonts you have?",
  "board": "gd"
},
{
  "text": "hello guys \nopinions",
  "board": "gd"
},
{
  "text": "do not explain\nbeen using this guide\n\nand I do not know if I'm giving it a good use",
  "board": "gd"
},
{
  "text": "who cares\nwhen you produce dog crap who cares how you got there",
  "board": "gd"
},
{
  "text": "Well you gotta learn some color grading cause some of those doesnt feels like proper 3d object",
  "board": "gd"
},
{
  "text": "Also please move to /crit/",
  "board": "gd"
},
{
  "text": "What program do people use to make isometric stuff like that?",
  "board": "gd"
},
{
  "text": "Started messing around with Illustrator for first time. I wan to achieve a doted line with perspective effect as if it was comming from further to front screen. I thought i can do it by turning perspective cube but there is no effect there for this..width of line stays aways the same. Pic related.",
  "board": "gd"
},
{
  "text": "Yes, if you do the method I linked in\n\nThen you can just ungroup the dots and change the color like with anything else.",
  "board": "gd"
},
{
  "text": "The last dot looks off.",
  "board": "gd"
},
{
  "text": "how so?",
  "board": "gd"
},
{
  "text": "It's not inclined/in perspective",
  "board": "gd"
},
{
  "text": "I guess it is in this example but that should be irrelevant. I just did it to show a method of how to achieve the effect asked for. If you are unhappy with the results then you can just remove the dot in your project and use the rest of the line. Or go in and fix it manually to suit your needs.\n\nI honestly don't know why you felt the need to dig this old thread up again just to say that...",
  "board": "gd"
},
{
  "text": "My girlfriend asked me if there was a way to do this and I wanted to ask you guys if you have a clue of what am I supposed to do to achieve the \"technique\" that's on image.\n\nI only have photoshop but I'm open to get new software.",
  "board": "gd"
},
{
  "text": "Trace over the contours of the face on a new layer with a white brush and then move the layer which contains the trace.",
  "board": "gd"
},
{
  "text": "please use the relevant thread next time",
  "board": "gd"
},
{
  "text": "If you had of read the question you'd realize you was dealing with a moron and not bothered wasting your time",
  "board": "gd"
},
{
  "text": "fuck you\n>If you had of read the question you'd realize\n>you was dealing with a moron\n>not bothered wasting your time\nengrish plis\n\nI'm trying to educate a newfag into our board's etiquette.\nYou are complaining as if this was /angermanagement/ and not even saging this shit thread.",
  "board": "gd"
},
{
  "text": "I'm not sure if you guys can help with this or not but can anyone recommend some Android icon packs/dark themes?",
  "board": "gd"
},
{
  "text": "I'm currently working on a piece in Illustrator and I'm a complete novice. I have this logo mark from Adobe Stock with multiple shapes making up the mark. This has left some transparent space in-between each shape. How would you guys go about filling in these spaces to make this mark solid?",
  "board": "gd"
},
{
  "text": "object expand + pathfinder/combine",
  "board": "gd"
},
{
  "text": "Good illustrator alternative for Linux?",
  "board": "gd"
},
{
  "text": "Windows VM",
  "board": "gd"
},
{
  "text": ">open source\n>good content creation software\npick one",
  "board": "gd"
},
{
  "text": "rebranding thread",
  "board": "gd"
},
{
  "text": "Holy fuck, when will the boring goddamn sans-serification just fucking stop.\nEvery logo looks the same with that 'its totally minimalism' shit.",
  "board": "gd"
},
{
  "text": "It will stop when smartphones and other miniature screens go away, so pray for some micro implant visual overlay embedded in your retina/brain that usurps smartphones or sit tight with designing around those kind of screen limitations. No body wants instricate when it's primary delivery system is a 2\"x3\" window",
  "board": "gd"
},
{
  "text": "They changed the decorations on his tunic to LC LC LC\n\nA+",
  "board": "gd"
},
{
  "text": ">Turn out a simple design in an hour\n>Spend the next 3 months padding out a booklet with grids, lines, curves, and paragraph upon paragraph of hollow sales waffle as to why your 'new' version is so great, even though it looks like you've done no work\n\nWelcome to graphic design.",
  "board": "gd"
},
{
  "text": "Interesting. Horrible at first though.",
  "board": "gd"
},
{
  "text": "Are smartphones helpful for a designer? All I have is an old camera phone, don't know if I should get a new one.",
  "board": "gd"
},
{
  "text": "Lineage IS stock Android with continuous updates. You would be overpaying 120-150 EUR for a thin, generic slab of brand glass and aluminum running Android, unless you really value a supposedly better camera in a thin, generic slab of glass and aluminum running Android.",
  "board": "gd"
},
{
  "text": "Bahahaha not getting contiunous updates is a thing with shithead android users",
  "board": "gd"
},
{
  "text": "Bahahaha getting continuous updates which artificially slow down your phone is a thing with shithead iPhone users.",
  "board": "gd"
},
{
  "text": "And Playstation, Xbox, Switch, Windows and Android users.",
  "board": "gd"
},
{
  "text": "No NFC. Fuck is this, an iPhone? No, thanks.",
  "board": "gd"
},
{
  "text": "Made this for /g/\n(>>>/g/64867904)\nHow can I improve it?",
  "board": "gd"
},
{
  "text": "Find a better replacement for San Francisco, bitch.",
  "board": "gd"
},
{
  "text": "Here's a homework lesson for you two: Hierarchy in graphic design\n\nGet that down first. After that negative space",
  "board": "gd"
},
{
  "text": "Allignement",
  "board": "gd"
},
{
  "text": "Mate, I'm \nHow the fuck does so fucking many of you not understand that that was just a 5 min, barely, mockup to get OP more on the right track...\n\nThe fucking retardation of this board never ceases to amaze. How about you shove that homework? I went to RISD, I've done enough to know all about negative space and hierarchy.\n\nBut I guess you read about it in a PDF online, so you are an expert right?",
  "board": "gd"
},
{
  "text": "Ignore that faggot, it looks good",
  "board": "gd"
},
{
  "text": "As an up and coming graphic designer who specializes on album/ep covers, i wanna know how much i should charge for my work in order to maximize profits. How much should i charge so that i still get clients but also paid fairly well? \n\nPic some examples of my work",
  "board": "gd"
},
{
  "text": "thanks for the critique, i think you're right about the barcode, they have become a bit overused. ill keep that in mind on future work\n\n\nall of these are digital exclusive and will probably never be printed, i dont think anyones retarded enough to incorporate digital wear and tear on physical prints, ive never even seen that before lmao. I think you just dont like the aesthetic (which has only been really popularized recently actually), but that doesnt change the fact that a lot of people do and it sells fairly well. Also idk if you've noticed, but graphic design, especially in music, has a lot to do with trends actually",
  "board": "gd"
},
{
  "text": "In my opinion the bar codes are distracting. Top left corner is favourite, would totally give it a listen because of the art work alone. Don't know anything about pricing but don't sell your work cheap. I've seen horribel stuff go for insane amounts of money. Keep up the good work!",
  "board": "gd"
},
{
  "text": "How did you create bottom left hill thing with white boxes?",
  "board": "gd"
},
{
  "text": "Not him but I make similar wireframe renders using c4d. Creating a landscape and rendering with the wireframe settings. From there you can throw it into photoshop etc",
  "board": "gd"
},
{
  "text": "Looks pretty damn good to me. Ignore any comments about the aesthetic being dated or how you shouldn't use grain. This goes for anyone doing design on here, actually. Clients won't care nor will the fans of the band/artist. Only other designers will comment on it and quite frankly they aren't paying you nor will they get you more work. Hell, they'll take away work from you by discouraging you or making you do subpar design just so you can say your work is \"authentic\". So you shouldn't care.\n\nTo answer your question OP, I wouldn't do the top two designs for for less than $150. Probably could charge $300 - $400 for the top left with the right sales attitude. Bottom left is the worst because it reveals the \"copy and paste\" technique of it.",
  "board": "gd"
},
{
  "text": "Please Deliver Pen to Vector references and experiences in this thread. It's an esoteric sub-genre on modern design, and often overlooked, but there's huge creative potential.\n\nthis is one of my better attempts - I used stock shit paper and a fine tip sharpie at full 11x8.5\" size then scanned and live traced it - but I know there is more that can be done with technique and process, share it! I want to know how to make truly orange lines, is it my pen? Or my paper?",
  "board": "gd"
},
{
  "text": "*organic* lines",
  "board": "gd"
},
{
  "text": ">It's an esoteric sub-genre on modern design\nwew",
  "board": "gd"
},
{
  "text": "i like it",
  "board": "gd"
},
{
  "text": "Graphic design",
  "board": "gd"
},
{
  "text": "left shit, middle good, right meh",
  "board": "gd"
},
{
  "text": "Z3JhcGhpYyBkZXNpZ24=",
  "board": "gd"
},
{
  "text": "I'm a total novice but I threw something together for my band's soundcloud and social media in general. Is this passable? Critiques? Scathing criticism?",
  "board": "gd"
},
{
  "text": "its a beginner post in a beginner's board my dude",
  "board": "gd"
},
{
  "text": "is that how this board is seen now, explains a lot",
  "board": "gd"
},
{
  "text": "It's passable, anything relying on bitmaps is a gamble, but you did good.\n\nThis guy is being hostile but he's not wrong, if we didn't chastise these kinds of posts there would be a million of them and any legit content would be dumpstered in hours - which is fast for us.",
  "board": "gd"
},
{
  "text": "newfags stops time.\nno /gd/ is safe\n\nno /gd/ exist.",
  "board": "gd"
},
{
  "text": "As wrong as he might be - this post is devoid of content, meaning or application, kinda not worth doing.",
  "board": "gd"
},{
  "text": "Stratis is dumping a lot of tech this month, smart contracts that can use visual studio to debug (i.e. not an EVM translator), side chains, breeze wallet, ICO platform on Azure, two actual companies doing their ICOs. \n\nHere are the companies we know of so far using Stratis.\nGluon, beyond globabl trade, DeStream, Blitz coin, earthtwine, and another coin moving to stratis platform as a side chain I cant remember. \n\nC# corner, basically an army of indian .NET programmers \n\nPotentially an ethereum killer because it's got a literal army of coders who don't need to learn a new language. \n\nJust wondering why this isn't shilled more. Same coin supply as eth but no inflation, and its proof of stake already. Don't understand.",
  "board": "biz"
},
{
  "text": "But it's run by a nigger. You really think Asians are going to invest in a coin headed by a nigger.",
  "board": "biz"
},
{
  "text": "I'm holding a huge bag that I cant even call a bag because I accumulated at rock bottom for months, but i dont bother shilling because I'm just unsure about all these \"new ETH\" high market cap coins anymore. i just dont think thats where the hype is this year. And even if it is there are already like 10 other coins with more hype and we all know hype is all that matters.",
  "board": "biz"
},
{
  "text": ">nigger coin\n>got PnD pretty hard last year\n>never recovered\n>lots of other projects like it, some are even better\n>no one cares about it anymore\nThat's why.",
  "board": "biz"
},
{
  "text": ">nigger ceo\n>too many ico/smart contract platforms (\"the next Eth\") out already with smaller marketcaps\n>interoperability is the new hot thing anyway\n>owned by a small amount of whales who got it during the ICO for nothing\n>staking is making said whales even bigger whales, everyone who buys it is a cuck paying for their financial independence\n>already got pump and dumped by said whales\n>nigger ceo",
  "board": "biz"
},
{
  "text": "Serious question, why is the flippenning so slow? It's obvious which Bitcoin is the winner. And nobody wants to be losing money, right?",
  "board": "biz"
},
{
  "text": "Luckily for bcash it's literally all the same miners as bcore. Most miners are in support of bcash and attacking it would only hurt their bottom line.",
  "board": "biz"
},
{
  "text": "Kek/10\nAlso SPV makes non mining nodes pointless unless you're an exchange",
  "board": "biz"
},
{
  "text": ">doesn't understand hashrate\n\nYou're literally as dumb money as it gets.",
  "board": "biz"
},
{
  "text": "bcash has 13% of the total sha256 hashrate right now.\ndigibyte has some too, does that mean its the same miners as bcash?\nits literally not the same miners.",
  "board": "biz"
},
{
  "text": "You've not really thought through this. Miners have an economic incentive to tank BTC and pump BCH. The BCH fork is the first time in Bitcoins history that the economic model that assured attacking BTC was pointless has been broken. No hardware or infrastructure gets bricked, no value is lost. A mining cartel can literally decide at any time to dump their BTC on the market for BCH and switch hashpower. That would literally end BTC and they'd make a killing doing it. The only issue is making sure it doesn't spook the market too bad to have long term negative impacts",
  "board": "biz"
},
{
  "text": "What's his portfolio?",
  "board": "biz"
},
{
  "text": "100% USDT and Storm ;)",
  "board": "biz"
},
{
  "text": "yes",
  "board": "biz"
},
{
  "text": "DRGN",
  "board": "biz"
},
{
  "text": "bean cash, about $2000000000 worth of it",
  "board": "biz"
},
{
  "text": "ETH, which he's earned by scamming.",
  "board": "biz"
},
{
  "text": ">The investors claim that Ripple is breaking both, federal, as well as state security laws in order to make money for itself. In addition to breaking laws, these investors also claim that Ripple is misleading the public regarding their services.\n(...)\n>Basically, Ripple was trying to convince the investors that there is an increase for XRP by the public when there really wasn’t any. The lawsuit also claims that Ripple attempted to bribe exchanges so that they would put XRP on the list.\n\n>\nOH NO NO NO NO",
  "board": "biz"
},
{
  "text": "you sue the company not the token, op is mixing it up\n\nif ripple is a security then stellar would be too",
  "board": "biz"
},
{
  "text": "... I thought this was literally how the exchanges worked? How can you bribe a company to sell a product? Even your fucking breakfast cereal pays bribes for the best shelf space.\n\nThis is fake jewry for the purpose of jewing. The kikes aren't going to sue themselves.",
  "board": "biz"
},
{
  "text": "shit, wrong pic",
  "board": "biz"
},
{
  "text": ">XRP is bad. The banks don't want it.\n>Hey guys - this fork of XRP is good! The banks want it!",
  "board": "biz"
},
{
  "text": "Which is why I said sue the controlling party. XRP is very much their baby even if the network exists outside of them.",
  "board": "biz"
},
{
  "text": "Broken english ... check\nDefinitely has bags ... check\nBold predicition ... check\n\nWow can't wait to lose money on this",
  "board": "biz"
},
{
  "text": ">nah, it's nice to finally see some serious verge competitor. don't have bags\npajeed HARD",
  "board": "biz"
},
{
  "text": "god dammit, fuck off shills, I'm actually trying to hold this coin, not pump and dump it down the shitter",
  "board": "biz"
},
{
  "text": ">Sneak 0",
  "board": "biz"
},
{
  "text": "I hope you make some nice gains boy but the Holo,Colx shill kills BIZ",
  "board": "biz"
},
{
  "text": "It's different if you are, you know, bribing to get your coin listed.",
  "board": "biz"
},
{
  "text": "I think the difference is that they went to Coinbase trying to hand them cash in exchange for a listing instead of being told by Coinbase they want a fee to do so and is something they want to do of their own free will. Fuck XRP and the kike shills who support it.",
  "board": "biz"
},
{
  "text": "Since the Ethereum foundation stopped selling Ether, the value has gone up. No one was injured. No suit will prevail. \n\nRipple Labs is still selling XRP. The price has come off of its highs that Ripple Labs sold at. They will feel the hot cock of justice in their shit tunnel.",
  "board": "biz"
},
{
  "text": "I traded all my stash for btc fuck that noise.",
  "board": "biz"
},
{
  "text": "Now that you mention it...\nIt was so obvious. I mean Ripple was on it's way below 1k sats, no one cared about it, then suddenly the whole catalog was filled with Ripple threads and how it's going to be listed on Coinbase. The suspicious part was how it all happened at once and how coordinated the shilling was.",
  "board": "biz"
},
{
  "text": "Is this a bullish? Anyone else comfy during this dip.",
  "board": "biz"
},
{
  "text": "So my man Craig Grant thought it would be a good idea to get his name on a pyramid and get his YouTube buddies on it to spread the word. Good idea? It's mooning so yeah. Get in before the normie low iq YouTube sheep do. Cgnow dot fun is where it is at.",
  "board": "biz"
},
{
  "text": "BTFO you fuckboy. This is the poorfag coin, we all know youre here bc youre a poorfag trying to make some money, heres your chance. Buy in now or continue to stress yourself out as you refresh the contract over the next few days. Youre going to hate yourself. Wait until the craig grant shill fest happens.",
  "board": "biz"
},
{
  "text": "or you research proper projects and sell high buy low. faggot.",
  "board": "biz"
},
{
  "text": "kek, okay, you keep doing that buddy. Meanwhile we're over 100 eth and im getting 25% of the divs on buys and sells.",
  "board": "biz"
},
{
  "text": "Imagine being as stupid as you. Kys.",
  "board": "biz"
},
{
  "text": "lmfao get in if you love money.\nthis is literally going to blow up, this craig grant dumb fuck is a scamming legend. he will shill on his youtube.\nhes been making me money for months now. i can live off craigrant money alone.",
  "board": "biz"
},
{
  "text": "If it was sold to raise funds specifically for the project, I would think so. Thoughts?",
  "board": "biz"
},
{
  "text": "Right but if an ICO funds a project then it’s a security, right?",
  "board": "biz"
},
{
  "text": "so you are saying link tokens will not appreciate in value as most of them are staked by nodes so they people staking their link \"its not a security\" but the people doing no work and sitting on their ass and letting their coin appreciate in value \"it is a security for them\" \n\nwow good points",
  "board": "biz"
},
{
  "text": "he's right. NEO/GAS = a security because you literally do nothing to earn it, its completely passive. to earn LINK you have to set up and operate a node, pulling in API data and providing it to the blockchain. not a security.",
  "board": "biz"
},
{
  "text": "Well then every crypto is a security.\nWhat are we even doing here?\nPack it up boys.",
  "board": "biz"
},
{
  "text": "The people holding do not earn more Link (even if that amount of link becomes more valuable).",
  "board": "biz"
},
{
  "text": "because dozens of websites have the same articles written by journo or communication majors that have zero understanding of the crypto market?",
  "board": "biz"
},
{
  "text": "Altcoins to out perform BTC? I mean literally throw a dart at a board of the other top 100 and you've got 99% chance of beating that hot garbage",
  "board": "biz"
},
{
  "text": "surprised to see digibyte in there. one of my heaviest bags.",
  "board": "biz"
},
{
  "text": "ameritard here, wtf do i do before tomorrow's reckoning? should I buy more now, before the hearing? Or, just go cook up a burger?",
  "board": "biz"
},
{
  "text": "Problem is, what exactly is this dip? Is the surge from the past week insiders/smartmoney buying the rumor? I expect a dump regardless when the people who bought last week sell the news.",
  "board": "biz"
},
{
  "text": "Ethereum's lawyers have stated that they are absolutely confident that it wont be classified as a security. The shit going around is just FUD.",
  "board": "biz"
},
{
  "text": "scared money dont make money",
  "board": "biz"
},
{
  "text": "doesnt mean it wont dump",
  "board": "biz"
},
{
  "text": "SEC stated that every crypto they see is a security.\n\nthey define security as anything where you make money off the group's enterprise. so as long as people buy because the value will increase because of the actions of VB and his team , or simply the growth of ETH, its a security",
  "board": "biz"
},
{
  "text": "I got some good gains with a few hyped ICO's. Are there any ICO whitelists coming up of projects which are limited to get into and have a large hype surrounding it. Am already in the NEX whitelist",
  "board": "biz"
},
{
  "text": "EdenChain and QuarkChain\n\nBuena suerte",
  "board": "biz"
},
{
  "text": "pssssst.\n\nbuy the dip.\nthank me when the summer's over.",
  "board": "biz"
},
{
  "text": "There's this stupid game on Telegram you can play that'll generate free ETH.\nIt'll take you like 6 months but it'll increase exponentially overtime as it multiplies the more you play.\n\nYou collect X which farms Y every hour which helps you afford more X with produces even more Y every hour.\n\nYou don't have to spend a fucking dime, you can let it play itself, however I wouldn't mind a referral if you guys decide to play, which will increase our free stacks.\nIt's pretty much peanuts but be a bro because eventually payouts will reduce.\n\nAll 3 games are essentially the same with different skins.\n\nEther Cars\nt.me/CarETH_bot?start=505967183\n\nEther Robots\nt.me/RobotsETHBot?start=505967183",
  "board": "biz"
},
{
  "text": "Rate and thougths plz.",
  "board": "biz"
},
{
  "text": "I have no opinion on the fundamentals but it has been a stinker in my trade history so I blacklisted it",
  "board": "biz"
},
{
  "text": "Rate this cocksuckers",
  "board": "biz"
},
{
  "text": "ICX has good potential imo",
  "board": "biz"
},
{
  "text": "Fasholy my nig",
  "board": "biz"
},
{
  "text": "Sell everything but the Nuls and Aion. Buy Zil. That's it. Could buy some Holo just in case it continues to rise. But that's it.",
  "board": "biz"
},{
  "text": "I fucking love fruit. Is it too high in sugar to eat every day?",
  "board": "fit"
},
{
  "text": "Everything in moderation I guess. Maybe eat only 1 banana and 1 apple with some acidic fruit like pineapple or orange. If you eat too much without a good balance of vegetables or meat then yeah you probably will get fat from all the sugar.",
  "board": "fit"
},
{
  "text": "There is something about women and food...",
  "board": "fit"
},
{
  "text": "Doesnt fruit have more fibre than white rice and most bread?",
  "board": "fit"
},
{
  "text": "yeah but the sugar acts pretty quick too along with the minerals it has its better than candy",
  "board": "fit"
},
{
  "text": "Nah fruits are GOAT.",
  "board": "fit"
},
{
  "text": "lol this got hundreds of upvotes . WTF?",
  "board": "fit"
},
{
  "text": "this\n\ncan confirm, was skelly for 25 years\n\nbest way to lose weight and be skinny is just to find something you like to do more than eating",
  "board": "fit"
},
{
  "text": "can i ask what you did? in my case im struggling to lose the last 10lbs",
  "board": "fit"
},
{
  "text": "Thing is, when your typical redditor sees a post with a thousand upvotes, they dont consider that theyre probably just purchased by an ad company, they think it must be popular for a good reason and will sometimes manage to write comments rationalising it. Reddit can host good content but the users are pretty annoying and the ranking system is gay as fuxk",
  "board": "fit"
},
{
  "text": "t-minus 30 minutes? 30 minutes before eating it??",
  "board": "fit"
},
{
  "text": "OP is a ridiculously massive faggot.",
  "board": "fit"
},
{
  "text": "I used to think fat girls were disgusting and I thought the chubby chasers on this board were just memeing but now that I’ve been working out for a while I’m starting to get extremely horny with primal urges when I see a fat girl. FPH threads are now high T threads for me. What do?",
  "board": "fit"
},
{
  "text": "P-pls have a Snapchat",
  "board": "fit"
},
{
  "text": "Any \"attractive\" hambeasts only look passable in photos because they can angle, lighting and Photoshop themselves into something almost human, but in person look like something the dog threw up. This cos-thot is a great example. In one set she seemingly forgot to blur her entire body and you can see her thigh looks like the surface of the moon, but hairier. Stop obsessing over hamplanets.",
  "board": "fit"
},
{
  "text": "Unironically stop working out and get out of my thread you disgusting dike",
  "board": "fit"
},
{
  "text": "i like her thicc body but my god that face is so fucking awful that’s a paper bag job if i’ve ever seen one",
  "board": "fit"
},
{
  "text": "I despise obese people but I love chubby women.",
  "board": "fit"
},
{
  "text": "Does anyone else have a mom that touches them too much since they got muscular/fit? I used to often walk around the house without a shirt but she used to squeeze my stomach and then smack my ass hard right after for no reason, she would just say \" wow \" or \"\" look at you \" or \" big boy \". I now stopped and wear a shirt and she squeezes my shoulders and still smacks my behind, sometimes I start running when she does and she just laughs. I then noticed she started to get very jealous of any girls I brought home even if it was just for studying. Does anyone have a mom who does this? Oh, and sometimes she just opens my door really quick to \" check on me \".. what..",
  "board": "fit"
},
{
  "text": "My mom looks like an older this, she's Italian if maybe that's a cultural reason? Doesn't explain why she didn't do it when I was dyel.",
  "board": "fit"
},
{
  "text": "i wanna fuck your mom anon",
  "board": "fit"
},
{
  "text": "my mom smacked my butt today too!!",
  "board": "fit"
},
{
  "text": "What is the best penis extension device?",
  "board": "fit"
},
{
  "text": "could you win over this girl?",
  "board": "fit"
},
{
  "text": ">could you win over this girl?\nWhy would I?\nI hate chestlets.",
  "board": "fit"
},
{
  "text": ">faster developing girl beats 12 year old obvious future giga chad that hasnt even grown hair on his legs yet\n>will probably use this moment in her life to talk endless shit\n>will stop wrestling and never be humbled until justifiably raped and murdered one day",
  "board": "fit"
},
{
  "text": "She looks like a child, and I have a lot of bjj experience, so I'm guessing yes.",
  "board": "fit"
},
{
  "text": "they look like 12 year olds.",
  "board": "fit"
},
{
  "text": ">strong girl boasting a victory over manlets\n>they are so ashamed of losing they aren't even wearing their singlets anymore",
  "board": "fit"
},
{
  "text": "/fit/, I don't feel so good...",
  "board": "fit"
},
{
  "text": "4 SCOOPS C'MON",
  "board": "fit"
},
{
  "text": "4 SCOOPS C'MON",
  "board": "fit"
},
{
  "text": "Maybe because it actually just is shit",
  "board": "fit"
},
{
  "text": "4 SCOOPS C'MON",
  "board": "fit"
},
{
  "text": "4 SCOOPS C'MON",
  "board": "fit"
},
{
  "text": "Low Carb Breakfast ideas? Trying to lose some weight",
  "board": "fit"
},
{
  "text": "So wait, /fit/ is usually quite happy to answer any questions, but with low carb shit all I ever see are memes.\n\nSo, why is low carb bad? Is keto really shit? I was sure I read enough to at least give it a try, anything I should know?",
  "board": "fit"
},
{
  "text": "Fuck off cunt, you have LITERALLY the WORST food in the world",
  "board": "fit"
},
{
  "text": "2 eggs, skip or keep the yolk if you'd like depending on your goals in life.\n2 tbsp Avacodo oil\nUsually some bacon or if I have it pepperoni diced up and mixed with eggs after cooked.\n1-2 cups of spinach, usually cooked with the leftover oils in the pan and added onto of the eggs/meat combo with some sharp cheddar cheese. I have a horseradish cheddar I get from my store, shits the bomb. If you get tired of the cheese switch to a mozzarella or Munster and top it off with some schriache sauce for spice, if you don't like spice stick with a nice whole ground sugar-free mustard. \n\nIf you want to forgoe that just stick with some salmon or other red/pink fish, add some fennel and some avo oil, bit of sliced lemon and crushed black pepper, roast in the oven for a bit depending on the size of the fish fillet. Add a green such of spinach or broccoli, i usually do broccoli and cheese. Good fat content and low carb. Excellent macros there.",
  "board": "fit"
},
{
  "text": "6 boiled eggs, unironically",
  "board": "fit"
},
{
  "text": ">schriache sauce",
  "board": "fit"
},
{
  "text": ">start taking it\n>get more rock hard erections \nAnyone know why this is?",
  "board": "fit"
},
{
  "text": "Creatine increases DHT which is a more potent form of testosterone\nIt also increases erections, but it can cause hair loss in genetically susceptible people\nThat's why people take finasteride of dutasteride to block DHT to stop balding, but they have less/weaker erections",
  "board": "fit"
},
{
  "text": ">but it can cause hair loss (((in genetically susceptible people)))\nThe real redpill is that everyone who takes creatine experiences hair loss",
  "board": "fit"
},
{
  "text": "Don't project your garbage tier genes onto other people\nA very small amount of people who take Creatine experience hair loss and when they stop creatine the hair loss also stops\nI have been taking it for 1.5 years, cycling it every 5 months and have noticed 0 recession, shedding or anything\nI'm NW0",
  "board": "fit"
},
{
  "text": "welcome to my thread \n\nyou can discuss the hobby of powerlifting in this thread",
  "board": "fit"
},
{
  "text": "I'd kill for some of that gumbo.",
  "board": "fit"
},
{
  "text": "But that's me",
  "board": "fit"
},
{
  "text": "FPH/FPS",
  "board": "fit"
},
{
  "text": "checked",
  "board": "fit"
},
{
  "text": "oh come on",
  "board": "fit"
},
{
  "text": "kek",
  "board": "fit"
},
{
  "text": ">>cute knocked up redhead at the counter\nHNNNNNG",
  "board": "fit"
},
{
  "text": "If we're lifting for girls, then why don't we have threads dedicated to give each other advice on how to actually get a gf?\nInstead of having a bunch of >tfnogf threads.",
  "board": "fit"
},
{
  "text": "FPBP",
  "board": "fit"
},
{
  "text": "Cope",
  "board": "fit"
},
{
  "text": "im gonna be honest with you. I've spent a shit ton of time in many many fighting gyms. if you go to a UFC gym there will be qts who are turned on by you going to town on a bag or on pads. I say the UFC gym because it's the only one I've seen normies going to. non UFC gyms tend to have the hardworkers who come for the training and will not give you the time of day. plus if you get a good instructor they've been probably in some pro matches. trust me. these ugly tall fighters get the hottest chicks- they sense the scary toughness or something. anyway good luck.",
  "board": "fit"
},
{
  "text": "Should've fucked maybe? Or she was drunk and is embarrassed?",
  "board": "fit"
},
{
  "text": "homegym thread?\njust finishe setting up mine",
  "board": "fit"
},
{
  "text": "the fuck u plan on doin with this dungeon nigga? where the chains at? look like all u fixin to do up in here is 5x5year old rapes/week for 30 years nigga",
  "board": "fit"
},
{
  "text": "It's in my condo's individual basement",
  "board": "fit"
},
{
  "text": "mirin clean ass barbell",
  "board": "fit"
},
{
  "text": "As if you're ever going to lifting the max weight the equipment can handle...\nFuck off with this shit you skelly",
  "board": "fit"
},
{
  "text": ">not a single useful power rack shown\n\nLand of no gains.",
  "board": "fit"
},
{
  "text": "Muscles aren't enough.",
  "board": "fit"
},
{
  "text": "He's sure in a good mood for someone losing his life savings",
  "board": "fit"
},
{
  "text": "Thanks for ruining the mood.",
  "board": "fit"
},
{
  "text": ">\"if you take this vinegar mixture you won't need to diet, the pounds just fall right off!\"\n>mom, that doesnt work because at its core, losing weight is just a matter of calories in calories out and while it may mute your appetite (which i doubt it will) it won't-\n>\"always have to argue don't you? your aunt Becky has been studying this stuff for YEARS and there's... research and stuff and she knows what shes talking about, unlike you\"",
  "board": "fit"
},
{
  "text": "Post pics of your mom.",
  "board": "fit"
},
{
  "text": "When you are big they disregard your advice because they think unless they lift 600 pounds deadlift like me my nutrition knowledge is useless",
  "board": "fit"
},
{
  "text": ">dark chocolate\n\nIs great. Anything above 90% you shouldnt hesitate to eat.",
  "board": "fit"
},
{
  "text": "t. the mom",
  "board": "fit"
},
{
  "text": ">When she says stuff like that just day \"okay, let me know how it goes\" and when you notice it hasent done anything or she finally admits it just say \"i told you so\"\nBut if al you’re doing is saying “okay,” then you can’t say “I told you so,” because all you said was “okay”",
  "board": "fit"
},{
  "text": "rude moth,\nyou have no chance against him\nhe will smother you with love",
  "board": "s4s"
},
{
  "text": "AAAAx",
  "board": "s4s"
},
{
  "text": "I am so much more powerful now. Just try to fucking stop me.",
  "board": "s4s"
},
{
  "text": "That's that gay Shit.",
  "board": "s4s"
},
{
  "text": "i love you the rude moth",
  "board": "s4s"
},
{
  "text": "rude moth is the best they're number 1",
  "board": "s4s"
},
{
  "text": "butte",
  "board": "s4s"
},
{
  "text": "wowe thate nicee butte",
  "board": "s4s"
},
{
  "text": "Dubs",
  "board": "s4s"
},
{
  "text": "i like it!",
  "board": "s4s"
},
{
  "text": "oooh i liek dat imge",
  "board": "s4s"
},
{
  "text": "Image posting is back. Expecting a more permanent fix soon!",
  "board": "s4s"
},
{
  "text": "dream on posting will never come back",
  "board": "s4s"
},
{
  "text": "lol he is masturbating comically hard\nthat is humorous",
  "board": "s4s"
},
{
  "text": "Shorts.",
  "board": "s4s"
},
{
  "text": "wharf",
  "board": "s4s"
},
{
  "text": "HE THICC",
  "board": "s4s"
},
{
  "text": "welccome backe fren!!",
  "board": "s4s"
},
{
  "text": "These unchecked dubs were on page 10.\nS4s is declining.",
  "board": "s4s"
},
{
  "text": "ur mom lole #wrek",
  "board": "s4s"
},
{
  "text": "Daily reminder that you shouldn't create porn/rude threads in esfores, remember that this is a family-friendly funny-facebook board so please, don't let the red theme of this place fool you, it's just actually an inside ruse to make newfriends think this is not a sophisticated place, haha!\nNow that you have read this you can have fun posting here!\nBut if you really want to post lewd/rude stuff I strongly suggest you to visit other boards more situable for that stuff like reddit and :^)\n\nt.",
  "board": "s4s"
},
{
  "text": "bumping this gem",
  "board": "s4s"
},
{
  "text": "bumping this epic gem",
  "board": "s4s"
},
{
  "text": "hmm?",
  "board": "s4s"
},
{
  "text": "reported",
  "board": "s4s"
},
{
  "text": "that's not very nice",
  "board": "s4s"
},
{
  "text": "ass",
  "board": "s4s"
},
{
  "text": "Make a meme comic of this so i can save it for the epic win",
  "board": "s4s"
},
{
  "text": "le shit nigger",
  "board": "s4s"
},
{
  "text": "namefags must be killed\npassfags must be tortured to death",
  "board": "s4s"
},
{
  "text": "no",
  "board": "s4s"
},
{
  "text": "niggers",
  "board": "s4s"
},
{
  "text": "Wat do when no frens no money and sick of bideo game",
  "board": "s4s"
},
{
  "text": "dubs\n\nI lobe you",
  "board": "s4s"
},
{
  "text": "I’m not NEET",
  "board": "s4s"
},
{
  "text": "wheres all your money going then",
  "board": "s4s"
},
{
  "text": "My savings lasted me about 6 or 7 months. \nI don’t have a job but I’m not NEET. Won’t say much more than that. I’ll have one by the end of two weeks though.",
  "board": "s4s"
},
{
  "text": "I have $7, hopefully prison.",
  "board": "s4s"
},
{
  "text": "LOLE!!!!!!!!!!!!",
  "board": "s4s"
},
{
  "text": "LOLE. . . . .. .",
  "board": "s4s"
},
{
  "text": "Doobless\n\nYour fortune: ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━ !!!!",
  "board": "s4s"
},
{
  "text": "LOL!!!!!!!!!!!!!!!!!!!!!!!!!!",
  "board": "s4s"
},
{
  "text": "rip in pieces akari tsukasaposter same person",
  "board": "s4s"
},
{
  "text": "cade",
  "board": "s4s"
},
{
  "text": "YOU MAKE KITTY SCARED",
  "board": "s4s"
},
{
  "text": "ass",
  "board": "s4s"
},
{
  "text": "THE SHIT NIGGER",
  "board": "s4s"
},
{
  "text": "r*de",
  "board": "s4s"
},
{
  "text": "ass",
  "board": "s4s"
},
{
  "text": "Just admit it. \n\nHIV is a gay disease.",
  "board": "s4s"
},
{
  "text": "It's only like that because patient zero happened to be a faggot air steward who travelled around the world infecting every homo he came into contact with.",
  "board": "s4s"
},
{
  "text": "pick your fighter",
  "board": "s4s"
},
{
  "text": "you would know because you are a gay namefig\ngayboy.",
  "board": "s4s"
},
{
  "text": "is.. is this inglish? fiahjote?",
  "board": "s4s"
},
{
  "text": "sorry, I don't speak third world",
  "board": "s4s"
},
{
  "text": "Yosho Brainwashing doesn't make sense\nIt doesn't make sense.\nHere's why it doesn't make sense\nIt doesn't make sense because if Yosho was brainwashing you then how would you know Yosho is brainwashing you? Therefore Yosho brainwashing doesn't make sense. It doesn't make sense. Yosho brain washing does not make sense\n\nHere are the facts:\n1. If Yosho was effectively brainwashing you then you wouldn't know you were being brainwashed because you would be effectively brainwashed.\n2. If Yosho weren't brainwashing you then you'd have the free will to claim you aren't being brainwashed.\n\nThe fact that you can claim that you are brainwashed is proof Yosho isn't brainwashing you. Of course, if no one claimed Yosho was brain washing them, then it would be proof Yosho was brain washing people. Unfortunately claiming to be brain washed seems to be essential to prove Yosho isn't brainwashing you.",
  "board": "s4s"
},
{
  "text": "omg! OMG!!! WHAT???\ni love the spikeman now!!!",
  "board": "s4s"
},
{
  "text": "I honestly don't think these posts make any sense\nWhy would Spikeman say any of that? The Spikeman is really dumb. These posts don't make any sense. Furthmore the textual content of them is just a mismash of random words. These posts don't make any sense. I just don't understand them. Why Would anyone make posts like these that make no sense, even in context? I just don't understand",
  "board": "s4s"
},
{
  "text": "ingredible",
  "board": "s4s"
},
{
  "text": "Can a mishmash of random words make a coherent sentence? Probably, but there’s an infinitesimal chance of that happening, so it leads me to believe that the Spikeman is being sincere.",
  "board": "s4s"
},
{
  "text": "I LOVE YOU THE SPIKEMAN!!!!!! THANK YOU THE SPIKEMAN!!!!!!!!!!!!!!!!!!\n\nnice dubs",
  "board": "s4s"
},
{
  "text": "Tea. Earl Grey. Hot.",
  "board": "s4s"
},
{
  "text": "Soda. Boba Bola. Ice cold.",
  "board": "s4s"
},
{
  "text": "Beer. Bud Light. Cold.",
  "board": "s4s"
},
{
  "text": "nice meme dude",
  "board": "s4s"
},
{
  "text": "wumia",
  "board": "s4s"
},
{
  "text": "Kikes deserve to be fucking gassed. Niggers need to be deported back Africa. This country is for white christian europeans. /s4s/ is full of degeneracy.",
  "board": "s4s"
},
{
  "text": "Dude -_- ... srsly? -_- ... .",
  "board": "s4s"
},
{
  "text": "your obviously not redpilled. Jews run the media. They want all these minorities with an IQ of an ape to come and plunder western civilisation. Hitler tried to prevent this but failed. Jews keep latching onto the 6 gorillion lie so they have an excuse to keep destroying nations. The holocaust didn't happen. But it should happen,",
  "board": "s4s"
},
{
  "text": "Redpilled and enlightened",
  "board": "s4s"
},
{
  "text": "you want to kill jews with me. Tomorrow im gonna beat up some niggers. interested?",
  "board": "s4s"
},
{
  "text": "If you don't have a maid outfit, you don't belong on [s4s] tbh",
  "board": "s4s"
},
{
  "text": "I have a sailor suit and a creepy susie dress can I stay please",
  "board": "s4s"
},
{
  "text": "if you aren't a mentally ill faggot, you don't belong on new [s4s] to be tbh",
  "board": "s4s"
},
{
  "text": "this tbh lol namecuckolds btfo again\n\n\nshut the fuck up you fucking imbecile or else your beb threads will start dying with no replies again",
  "board": "s4s"
},
{
  "text": "I bought one off ebay the other year.\nA PU one. \nIt's not too shiny, but slightly textured shiny. Almost like faux leather I guess.\n\nI wear it while fucking my doll. Or the doll wears it while fucking me :3",
  "board": "s4s"
},
{
  "text": "but i'm a boy",
  "board": "s4s"
},{
  "text": "Reflection's BluRay comes out in 2 weeks on April 11th.\nDetonation is supposed to come out this year but has no release date yet.\n\nPrevious thread:\n>>2447939",
  "board": "u"
},
{
  "text": "What goes on there?",
  "board": "u"
},
{
  "text": "They all saw Fuuka give an unconscious Rinne a bridal carry and all of them blush at how chivalrous it is or something.\n\nEinhart in particular gets riled up and either wants to be carried by Vivio or to carry Vivio. Vivio refuses leading to Einhart becoming depressed and Yumina trying to comfort her.",
  "board": "u"
},
{
  "text": "He's so good at drawing Vivio, not so much the other girls.",
  "board": "u"
},
{
  "text": "Your favorite unpopular pairing.\n\nI'll start:",
  "board": "u"
},
{
  "text": "I’ll just go over here and hang my head in shame, now.",
  "board": "u"
},
{
  "text": "Please don't, nee-san. I still love you.",
  "board": "u"
},
{
  "text": "Even if it wasn't a big part of the show I liked their relationship. The dynamic of a newbie and her experienced co-worker is pretty good and I hope they get some screentime together in the movie that was just announced.",
  "board": "u"
},
{
  "text": "It's Bayo's 606th Birthday!\n\nSwitch port of Bayonetta 1 & 2 announced with a released date of February 16, 2018.\n\nBayonetta 3 announced to be in development as a Switch exclusive.\n\nEyes of Bayonetta 2 artbook release date is MIA.\n\nAnd Cereza & Jeanne are eternally o/u/r OTP.",
  "board": "u"
},
{
  "text": "So, I saw that the wiki finally has Konoka and Setsuna as spouses. Was this because the UQ Holder manga finally stated it even more outright than the end of the original manga, or did someone get their head out of their ass and fix it?\n\nOtherwise, I'm just going to slowly dump my Negima folder into here for those few KonoSetsu-fags that are left in case some of them don't have the same art as I do. \nIf you have any Negima yuri, other pairings or not, please post it.",
  "board": "u"
},
{
  "text": "Well, sis', this is my last one. If I can find any more I'll see if I can keep this thread alive for longer, but I can't find anything on Pixiv, Dynasty, Sankaku, Danbooru. If anyone has some new place to look then please link me to it.",
  "board": "u"
},
{
  "text": "Found one more.",
  "board": "u"
},
{
  "text": "is there any yuri of Yuri? ddlc yuri in general\nyuri^3",
  "board": "u"
},
{
  "text": "I'll give you a bit of credit on Kodaka. But when the entire climax of the story is all about Danganronpa ending because it has been running for too long, it's hard not to suspect that he's a bit sick of the series and the fans and wants to move on to something else. And I remember he said in an interview that he's fine with the series continuing in someone else's hands but that he won't be working in it in the foreseeable future.\n\n>I'm fairly certain that's a minority opinion. I certainly felt zero desire to even come within fifty feet of the VN once I was done.\nNow THIS is opinion-based. For me DDLC is one of thoses games I see myself playing every now and then when I'm bored on a rainy day. Perfect length for an afternoon and the characters are entertaining enough for keeping it from getting old. It's also fun playing for the alternate ending.",
  "board": "u"
},
{
  "text": "Best image on the thread",
  "board": "u"
},
{
  "text": "dokis in a box",
  "board": "u"
},
{
  "text": "Is there anything with Yuri and Natsuki involving Yuri's self-harm fetish?",
  "board": "u"
},
{
  "text": "Bullying and sadism thread anyone?\nAnything extremely rough also welcome.",
  "board": "u"
},
{
  "text": "Sounds like a Touhou doujin involving Hatate being bullied by the weasel.",
  "board": "u"
},
{
  "text": "Furry?",
  "board": "u"
},
{
  "text": "Is it possible... for a sociopath and a literal Autist to find love?\n\nThat moment before the finale fight where it’s revealed that everyone in the series could tell from one or two conversations that Yuzuko is very much unstable and Natsuo is the only one that thinks she’s normal and beautiful but hates her with all her heart was some of the most disturbingly romantic things I’ve ever read. \n\nHas anything else come close? Wish the series continued.",
  "board": "u"
},
{
  "text": "I was really looking forward to beanstalk and besto friendu together, but then it ended all of a sudden. They really had a thing going on and the friend definitely wanted to get ground pounded, imo.",
  "board": "u"
},
{
  "text": ">Natsuo is the only one that thinks she’s normal and beautiful but hates her with all her heart was some of the most disturbingly romantic things I’ve ever read.\nI don't think she's thinks Yuzuko is normal. It more she wishes she could have the same attitude but can't so she feels compelled to destroy it",
  "board": "u"
},
{
  "text": ">Finally a good sports manga with yuri undertones\n>The author suddenly gets sick and has to wrap it up in a hurry without delivering on most of the things he built up to",
  "board": "u"
},
{
  "text": "Which friend? They all seemed pretty thirsty for one girl or another. \n\nRingi never even got 2 words from Natsuo, despite being the first person to realize Yuzuko was fucked up, and reading likening Na-chan",
  "board": "u"
},
{
  "text": ">2608799\nProbably the best ending for an axed manga I have eve seen, though.",
  "board": "u"
},
{
  "text": "I'm making a thread for this masterpiece of mom/daughter incest. \n\nEnglish:\n\nCreators fantia, which is like patreon and gaijin-friendly:\n\nAlex_Rain rough translations:\n",
  "board": "u"
},
{
  "text": "3.",
  "board": "u"
},
{
  "text": "4.",
  "board": "u"
},
{
  "text": "5. The last one for now.",
  "board": "u"
},
{
  "text": "I'd just like to apologize for the shitty translation I did for the first chapter\nSorry onee-samas",
  "board": "u"
},
{
  "text": "dont worry im just grateful this masterpiece is getting translated",
  "board": "u"
},
{
  "text": "The previous threads were fairly successful, so I'm starting one again.\n\nPost anything that can be related to this image.\n\nAs long as it's /u/ related of course.",
  "board": "u"
},
{
  "text": "Are brown and purple closer to red and blue?",
  "board": "u"
},
{
  "text": "Oh shit it's almost E3 again\nOld thread: \n\nThread themes:\n\nNews:\n>bunch of Wii U to Switch ports; Tropical Dong, Hyrule Warriors Definitive, Captain To Treasure Ad Tracker\n>Octopath, Octoling this summer\n>Smash and Splatoon tourneys at E3\n>still waiting on that Fire Emblem 16 news\n>expecting Pokemon news is being really optimistic",
  "board": "u"
},
{
  "text": "ARMS comic from FCBD\n\n",
  "board": "u"
},
{
  "text": "I mean it's neat, but doesn't seem terribly relevant to our interests.",
  "board": "u"
},
{
  "text": "Stardew Valley.",
  "board": "u"
},
{
  "text": "What's your favorite yuri manga?",
  "board": "u"
},
{
  "text": ">Why does the curly haired woman have jewish nose?\nAlso, tb'h I think this is the actual reason why Erica likes Gunjo.",
  "board": "u"
},
{
  "text": "Unmentioned thus far:\n- Kimi Koi Limit. Has made me feel things.\n- Poor Poor Lips. Has made me laugh, then hit me with pic related.\n- Sweet Guilty Love Bites. When Shuninta was love.\n- Ebisu & Hotei. Fuck that editor.",
  "board": "u"
},
{
  "text": "Poor Poor Lips is fantastic. I can't help but think all the side characters were fun despite how antagonistic they were. You know a 4-koma's great when it can make you cry outta nowhere (not that all 4-koma should try for that)",
  "board": "u"
},
{
  "text": ">all the side characters were fun despite how antagonistic they were\nI vehemently disagree. The forced marriage, the inevitable forgiveness of the villain, all of the idiocy of the non-mains was absurd, and worst of all it was mostly pointless seeing as the manga would have progressed just as well without them. Whenever people say this is one of the greats I have to wonder if nostalgia is painting over those parts because I can never stand to read through the last third of it without getting annoyed. It was really good and I like most of it a lot but the drama dragged it down hard.",
  "board": "u"
},
{
  "text": "Prism.",
  "board": "u"
},
{
  "text": "I swear there was a symphogear thread here on /u/ (not the archived one), what happened to it?\n\nPrevious thread: >>2534269",
  "board": "u"
},
{
  "text": "This, people watch it for hot blood action scenes.",
  "board": "u"
},
{
  "text": "So you would like it if Ogawa soloed the final boss while Hibiki sat in a bench and watched it?",
  "board": "u"
},
{
  "text": "They have been lacking in this department ever since alchemy was introduced. We got enemies who lost on purpose, beam/element spam and the fights kept being interrupted because the enemies teleported away.\n\nAXZ's first episode was fucking amazing, but everything else was so-so.",
  "board": "u"
},
{
  "text": "No, we are just saying Ninja's asspulls are fun to watch, especially in a show like Symphogear that doesn't take itself seriously. I don't know how you managed to reach this conclusion from what we said.",
  "board": "u"
},
{
  "text": "Ninja stunts are boring compared to what the gears can do.",
  "board": "u"
},
{
  "text": "Breaking news, Ikuno made her move on Ichigo\nthe yuri is happening for real.",
  "board": "u"
},
{
  "text": "The manga also has some /u/ moments.",
  "board": "u"
},
{
  "text": "Ichigo really wants to taste Ikuno grape jelly down there.",
  "board": "u"
},
{
  "text": "Chapter ?",
  "board": "u"
},
{
  "text": "I think that the reason why she refused the friend's advances was that she knew her friend was going to die and she didn't want to feel even worse afterwards.",
  "board": "u"
},
{
  "text": "We don't know about that, from what we know she's het with some weak homosexual tendencies, or a bislut. Either way, she wasn't a lesbian in the first pace and wasn't «converted»",
  "board": "u"
},
{
  "text": ">Centerpiece\n>Harem\n>Gangbang\n>Etc.\npost images or stories where one girl is getting all the attention from multiple girls. she can be on top or they can.",
  "board": "u"
},
{
  "text": "A Kiss And A White Lily ch04",
  "board": "u"
},
{
  "text": "Charlotte is what every yuri protag should aim for",
  "board": "u"
},
{
  "text": "ITT: we pretend Universe doesn’t exist.",
  "board": "u"
},
{
  "text": ">the worst part is how utterly useless the scene is, it can even become annoying and uncomfortable considering the age of the involuntary people, personally it was a rather silly moment.\nWell the new epsidoe again has similair idiotic scenes, Ithink after Nat-chan dead I'm just gonna drop it, it's not funny at all, it's like a teenage boy would make anime aimed at his taste and be proud of it.",
  "board": "u"
},
{
  "text": ">it's like a teenage boy would make anime aimed at his taste and be proud of it.\nThe original manga was aimed to teenage boys\nAbout the anime, the series composition is made by a woman, Natsuko Takahashi, and she seems pretty knowledgeable about Nagai. Many Japanese women seem to enjoy Nagai mangas considering he was very important for the birth of BL, see Clamp. This is anecdotal but when I went to see Mazinger Infinity, half ot the audience were women and a fangirl next to me was really into the movie",
  "board": "u"
},
{
  "text": "This episode it was made very clear that Ganet/Jill's end game is to eat sweet Honey pussy.",
  "board": "u"
},
{
  "text": "What I got is a Clamp vibe of kill/to be killed by the person you love.",
  "board": "u"
},
{
  "text": "The first 3 episodes of Kill la Kill were a dozen times more rapey and uncomfortable than anything Cutie Honey has done",
  "board": "u"
},{
  "text": "How does it feel to witness the birth of a Type-moon level japanese franchise ?",
  "board": "a"
},
{
  "text": ">AskedSCP-105out. Was rejected.",
  "board": "a"
},
{
  "text": "C U T E",
  "board": "a"
},
{
  "text": ">observers have noted that SCP-085 has begun to show signs of clinical depression\nSCP can protect the world, but it couldn't protect her smile.",
  "board": "a"
},
{
  "text": "((You))\n\nI wasn't talking quality, although Fate is, comparatively, better than SCP in all respects. Stop having shit taste in creepy content.",
  "board": "a"
},
{
  "text": ">ETERNAL GOAT SEALED AWAY BECAUSE OF HER STRENGTH TIER\n1. Iona (Rumi)\n\n>TOP TIER\n2. Ruuko\n3. Iona (Kuro)\n4. Carnival\n4.5 Satomi\n5. Layla\n\nPOWER GAP\n\n>PLAYOFFS TIER\n6. Futase\n7. Kiyoi",
  "board": "a"
},
{
  "text": "Mayu died.",
  "board": "a"
},
{
  "text": "Then who are these voices from?",
  "board": "a"
},
{
  "text": ">tfw tama got upgraded too",
  "board": "a"
},
{
  "text": "sheeit",
  "board": "a"
},
{
  "text": "The White Room itself maybe. Dona and Carnival heard the voices of the room when they visited it for a bit so it's possible Tama's connection to it is making her hear voices in the real world.",
  "board": "a"
},
{
  "text": "This fat fucker became anorexic because he didn't get his bread and then his waifu was stolen by a superior stamen. His character traits are being a fatass and a bitch. Literally the shittiest character in the show, worse than self insert main protag Hiro. Does anybody wish for his happiness?",
  "board": "a"
},
{
  "text": "He has provided no evidence of his claim in the first place.\nI don't have to prove shit, egghead.",
  "board": "a"
},
{
  "text": "Idiot, the one who provides evidence is the one that brings about someone's wrong.",
  "board": "a"
},
{
  "text": "I just hate him because he's worthless",
  "board": "a"
},
{
  "text": "No, the one who makes a claim has to bring evidence that their claim is correct.\nHow old are you?",
  "board": "a"
},
{
  "text": "It's the opposite, idiot. Or do you go around proving everything you affirm all the time? No, it happens when someone calls on your shit. Grab a book every once in a while.",
  "board": "a"
},
{
  "text": "Not that I care about stuff like that or anything, b-baka!",
  "board": "a"
},
{
  "text": "Is Taiga the greatest tsundere of the 21st century? She is the best modern representation of the true appeal of tsundere girls, who else even comes close?",
  "board": "a"
},
{
  "text": ">Taiga\nmore like palmtop tiger lol",
  "board": "a"
},
{
  "text": "I-It's not like I'm posting in this thread because I like or anything, OP. Baka.",
  "board": "a"
},
{
  "text": "Iori, who has the same VA and is older than both Taiga and Shana.",
  "board": "a"
},
{
  "text": "The anime is ten years old in October",
  "board": "a"
},
{
  "text": "How would you bully Akko, /a/?",
  "board": "a"
},
{
  "text": "They only do it to assert dominance!",
  "board": "a"
},
{
  "text": "The show was pretty good until season 2.",
  "board": "a"
},
{
  "text": "Sucy would probably dominate Akko until she gives in .",
  "board": "a"
},
{
  "text": "Those two dorks assert dominance over eachother.",
  "board": "a"
},
{
  "text": "I'd bully Milkgirl",
  "board": "a"
},
{
  "text": "I'm from Mexico and was watching TV and it looks like Ranma will air once again on public TV\n\n\nAlso Sword Art Online and Astroboy will return as well\n\nLet's have a Ranma thread to celebrate",
  "board": "a"
},
{
  "text": "Nah. \"Cleaner\" version have a nasty reddish tone because of fucking Toei and his negligency with its DVDBoxes.\n\nActually they were airing mostly \"new\" animu: Yuri!!! On Ice, All Out, SS Omega S2, One Piece East Blue and soon OPM and Black Clover. Past year they aired Zero no Tsukaima and 2 subbed animu donated by the Japan Foundation. SAO and Cap. Tsubasa are most likely to be aired because ETC is aiming mostly for recent animu and dorama. Besides, chilean audience is mildly pissed with recent dubs and Toei's decisions of replacing the old masters with funimation cropped shit for DBZ and other animu. Other issue is ETC being technically, a monopoly in anime broadcasting here. Without competence, there is less chances to get animu at cheaper prices. Local regulations don't help it and make things harder (the chilean National Television Council has banned the anime from the national air tv because of its content, local school system has children from 8AM to 5PM, killing potential audience in home, new regulations about unhealthy food has banned sponsoring of Junk food and other things high on sugar and saturated fat like Cheetos, Frost Flakes and similars and that affected the net income of almost every local, cable and national tv stations... only a small bunch of small regional tv stations in Constitucion, Temuco, and Iquique air anime, although illegal, TV is on crisis and some big channels are on the verge of closing or externalizing their production). At least we aren't in a dead situation like Argentina where no anime is available on air tv.",
  "board": "a"
},
{
  "text": "Shampoo makes for an outrageously adorable kitty.",
  "board": "a"
},
{
  "text": "Fuck off to ANMTVLA, UMR-10. At least we aren't dead like argies or uruguayans. They have zero anime on air.",
  "board": "a"
},
{
  "text": "Reddish tone? No idea dude, it looks pretty fine to me\n\n\nFuck ANMTVLA, they block people because sudacas can't handle banter",
  "board": "a"
},
{
  "text": "But remember that ETC TV is a paid channel, most of the new anime being broadcasted in Mexico are airing on free public TV so it's reaching more people, also, Captain Tsubasa new anime is basically confirmed to be coming to Mexican public TV",
  "board": "a"
},
{
  "text": "Virgin killer sweaters\nCat keyhole bras\nThis string thing\netc\n\nWhat's the next big thing?",
  "board": "a"
},
{
  "text": "This seems like a variation of thighhighs, elbow gloves and nothing else, something I'm very fond of.",
  "board": "a"
},
{
  "text": "Spoon-feed: Minimum\nLook up 300 year single witch",
  "board": "a"
},
{
  "text": "spring dresses and sun hats\n\nI can have wholesome fetishes!",
  "board": "a"
},
{
  "text": "my brother.",
  "board": "a"
},
{
  "text": "Should have a bit around the stomach to make it an inverse bikini.",
  "board": "a"
},
{
  "text": "New omake is out, TL next.",
  "board": "a"
},
{
  "text": "...\ndo japs not have a single english speaking person at their anime studios? \nis their english education really that bad despite being (supposedly) one of the top scoring countries in the world in terms of education?",
  "board": "a"
},
{
  "text": ">18 replies\n>8 posters\nWhat the fuck is going on in this thread? Is one anon really talking to himself?",
  "board": "a"
},
{
  "text": "If a stat that you thought would be helpful to your character in an RPG, would you at least allocate more points into it?",
  "board": "a"
},
{
  "text": "They're too cheap (or prideful) to hire a fluent English speaker to double-check their stuff, so they'll just ask whoever in the office remembers their high school language classes the best, and things through Google translate.",
  "board": "a"
},
{
  "text": ">or prideful\nThis actually, fucking Japs, I'm not working over there ever again",
  "board": "a"
},
{
  "text": ">it would be good to have points in luck\n>\"what? how do you know she put points into luck??\"\nare you slow?",
  "board": "a"
},
{
  "text": "Will vrains' second half be as good as zexal II? I dare to say yes.",
  "board": "a"
},
{
  "text": "we call it link sense.",
  "board": "a"
},
{
  "text": "Probably the most frustrating thing about the end of Arc-V is that the card games stopped mattering. There were way too many times the outcome of a game was just ignored to further the plot (\"I lost, guess I'll kidnap Yuzu anyway\" \"I won, but I'll turn into Zarc anyway\" \"I beat Ruri. Still mind controlled.\" etc etc). For a series where deciding things by card games is the entire point, they completely dropped their own premise on its head.\n\nBest part is the OST, fuck the late Arc-V osts were great. That feeling when listening to the CD version feels weird because it doesn't have the muffled snatches of dialogue the ripper couldn't get rid of.",
  "board": "a"
},
{
  "text": "In the stuff that it references.",
  "board": "a"
},
{
  "text": "That's basic shit.",
  "board": "a"
},
{
  "text": "Is Fate/Strange Fake the best HGW?",
  "board": "a"
},
{
  "text": "Enkidu is literally whatever gender they prefer",
  "board": "a"
},
{
  "text": "Can either be of no consequence or can be one of the principle players. Altogether depends on how Narita wishes to write her. There is a thematically appropriate way in which she can defeat Alcides and there is a thematically appropriate way in which she can die with no formal resolution.",
  "board": "a"
},
{
  "text": "Gil and Enkidu relationship is so nice.",
  "board": "a"
},
{
  "text": "Her interest in thaumaturgy is clearly comparatively casual. I mean, it's not like she has no interest, but do you see her going to the Clock Tower to study or putting effort into research? Compare her to Rin, and look at how hard she works for her craft. Now look at Sakura; she's more invested in living her happy life. She's the captain of the archery club, she spends most of her time cooking or hanging with Rider, etc. If we were to take Rin as a serious magus, then Sakura is clearly a casual.",
  "board": "a"
},
{
  "text": "Everyone can agree at least that this is the best Type-Moon animated series, right?",
  "board": "a"
},
{
  "text": "Who would win, team friirf or team sdneends?",
  "board": "a"
},
{
  "text": "I always laugh at this specific scene.",
  "board": "a"
},
{
  "text": "I want to die",
  "board": "a"
},
{
  "text": "So how long until Hori runs out of creative ways to use OFA? I already feel like he's struggling to keep Deku's power fresh.",
  "board": "a"
},
{
  "text": "how about jumping really high",
  "board": "a"
},
{
  "text": "He'll learn how to skywalk at some point. I guarantee it.",
  "board": "a"
},
{
  "text": "give deky martial arts/have deku head-butt/do that gran torino thing/whatever- is all he can do\n\nOFA isnt a very creative power, which is why its going to be his opponents who bring the interesting aspect",
  "board": "a"
},
{
  "text": "I'll be happy if Hori makes more villains with quirks like Gentle's and less like Overhaul's and Shiggy's. They don't really make for good fights imo.",
  "board": "a"
},
{
  "text": "ITT: characters who did nothing wrong.\nThis manga has surprised me with how well written its plot has been so far outside of the sudden 180 that Carnute's character did in the space of about 15 minutes.",
  "board": "a"
},
{
  "text": "it took quite a few years before he finally straighten his shit out \n\nAskeladd and his experiences almost getting assassinated by his father just put the idea in his head.",
  "board": "a"
},
{
  "text": ">outside of the sudden 180 that Carnute's character did in the space of about 15 minutes\n\nActually this manga is full of these rushed character development. It happened with Thorfinn, Canude, Hild etc. Pic related was probably the worst one.\n\nDon't get me wrong, the manga is great. But this is the mainly factor that makes the manga falls short of classic stuff like Lone Wolf and Cub, Ashita no Joe, Berserk, Vagabond etc.",
  "board": "a"
},
{
  "text": ">It happened with Thorfinn\nThorfinn's change was not exactly slow, what are you talking about?",
  "board": "a"
},
{
  "text": "We typeset anon's TL from the previous thread and combined it with our own in-house. Have a taste of these giant fruits, or something.",
  "board": "a"
},
{
  "text": "Yeah but Hatoba is yuuchuba kino though.",
  "board": "a"
},
{
  "text": "Any other instances of a character starting off as an OC donut steal and becoming a legitimate character in a series?",
  "board": "a"
},
{
  "text": "Nagatoro?",
  "board": "a"
},
{
  "text": "As opposed to what?",
  "board": "a"
},
{
  "text": "Galko-chan was just a gyaru at first I think.",
  "board": "a"
},{
  "text": "I'm looking for a switch box like pic related, but for converting rca connections to hdmi. I seem to be having trouble finding one. \n\nI've got a bunch of older game consoles that I'd like to hook up to my LG c7 tv. The tv has a single rca connection, but it doesn't seem to work very well. \n\nAre there any better ways to do what hook up my old consoles to the tv?",
  "board": "g"
},
{
  "text": "I'm not sure I've seen any with this many ports, but there definitely are RCA -> HDMI boxes on Aliexpress and such. Maybe if you combined a multiple RCA input switching box with one of these, you could have all the ports you want?",
  "board": "g"
},
{
  "text": "PS: At some point, I personally went with mainly using PC emulators. There's a limit to how many consoles I can put under my TV plus the various video filters and so on that emulators have are just more comfortable.",
  "board": "g"
},
{
  "text": "Yeah, that's actually what I was going to try if I couldn't find what I wad looking for. \n\n\nI've considered that, but i just love the nostalgia of playing on the actual console like I did as a kid!",
  "board": "g"
},
{
  "text": "Just compare it vs DOS:\n\n>Designed for personal computers\n>Simple, easy directory tree\n>Handul of configuration files (autoexec.bat, himem.sys, config.sys)\n>No complicated user configurations and permissions\n>Literally one directory (DOS)\n>Add windows: literally 2 directories, Dos, and Windows\n>Run Windows by calling win.com from autoexec.bat\n>Using only dos, just load the mouse driver and mscdex and sound drivers and you're fine\n>Everyone in DOS world was happy with EDIT.EXE, no arguments\n>God said let there be 256 colors\n>You are the only user and you can run any command you want\n>Modern windows continues the simple directory tree and uses the same DOS interface for command line",
  "board": "g"
},
{
  "text": "Honestly everything is going to shit in the OS market right now. \n\nYou have dragonfly/openBSD, and maybe I dunno, fucking haiku? \n\nThat's it. Everything else is either slowly getting fucked over or already there.\n\nIt's time for a new OS.",
  "board": "g"
},
{
  "text": "How long before Windows looks like this?",
  "board": "g"
},
{
  "text": "hopefully never, this looks retarded",
  "board": "g"
},
{
  "text": "Why fucking bother here when VP9 isn't and has no sign of being supported at any time?",
  "board": "g"
},
{
  "text": ">Windows\nMs will fall before they even attempt to make something like this",
  "board": "g"
},
{
  "text": "What exactly is the point of this?",
  "board": "g"
},
{
  "text": ">wearing a headset\n\nNo anon, I don't want to to lug around anything on my body just to use a computer.",
  "board": "g"
},
{
  "text": "What's the best keyboard for android?\n\nPic related, Samsung added a stupid bar to their keyboard and I fucking hate it",
  "board": "g"
},
{
  "text": "Nice keyloggers.",
  "board": "g"
},
{
  "text": "Emoticon Keyboard\n",
  "board": "g"
},
{
  "text": "Stock",
  "board": "g"
},
{
  "text": "Blackberry has the best keyboard for android",
  "board": "g"
},
{
  "text": "Fleksy keyboard is comfy af and minimizes wasted screen real estate if configured right",
  "board": "g"
},
{
  "text": ">mum found the git repository",
  "board": "g"
},
{
  "text": "thanks mum",
  "board": "g"
},
{
  "text": "what does your home folder look like?",
  "board": "g"
},
{
  "text": "what the actual fuck is this",
  "board": "g"
},
{
  "text": "da fuck is a home folder?",
  "board": "g"
},
{
  "text": "if you use windows, you should have one",
  "board": "g"
},
{
  "text": "Proof that the Korean government has engineered android pop-stars. Riddled throughout the lyrics of most K-pop songs you will find hidden subliminal messages intended to inject their unique brand of asian botnet directly into the minds of 12-30 year old males.",
  "board": "g"
},
{
  "text": "youtube-dl downloads everything to the homefolder",
  "board": "g"
},
{
  "text": "You know, I don't mind Manjaro getting the number 1 spot on distrowatch, because I don't really give a fuck. But seriously though, who the fuck uses Elementary?",
  "board": "g"
},
{
  "text": "Fags who can't afford a mac., yet still want that man feel.",
  "board": "g"
},
{
  "text": ">bunch of DE showcases and derivatives-of-derivatives",
  "board": "g"
},
{
  "text": "why?",
  "board": "g"
},
{
  "text": "What's wrong with elementary OS? It has nice defaults and the devs encourage people to create new applications with a cohesive design.",
  "board": "g"
},
{
  "text": "This is why linux will never be ready for the desktop. Too many distros that are just thrown together lazily with no real purpose.\n>durr we added some obscure and ugly DE to ubuntu, its now CrapOs 1.0",
  "board": "g"
},
{
  "text": "Which famous rapper do you think secretly uses GNU/Linux? \"nerdcore\" and comedy rappers need not apply.",
  "board": "g"
},
{
  "text": "Death grips",
  "board": "g"
},
{
  "text": "idk every so often some random celebrity turns out to be a linux user, iirc stephen fry, a uk comedy legend, is a huge proponent of ubuntu. \nrappers seem to mainly use their iphones for everything. if i had to guess which one might use linux then maybe madlib.",
  "board": "g"
},
{
  "text": "Greydon Square.",
  "board": "g"
},
{
  "text": "Post Malone.",
  "board": "g"
},
{
  "text": "Post questions so stupid they aren't worth even worth posting in /sqt/\n\n \nif you can make websites with CMSs like squarespace, what do front end web devs actually do",
  "board": "g"
},
{
  "text": "Just one?",
  "board": "g"
},
{
  "text": "Yes sir.",
  "board": "g"
},
{
  "text": "Sounds like the app sucks, and isn't related to MySQL.\n\nAnyway, check that you're not changing the DB in a transaction, and that you're not automatically rolling back which would revert all changes.\n\nIf there is a choice, you may have to manually commit then, too.",
  "board": "g"
},
{
  "text": "Maybe your cable is getting faulty, or there's a loose connection.\n\nIf not, your monitor may be going faulty then, but I'd just try the process of elimination.",
  "board": "g"
},
{
  "text": "Has anyone had experience with stuff like Greenify and Amplify? Do they really work in terms of saving battery? How much of a difference does it make if your device is rooted?",
  "board": "g"
},
{
  "text": "What email provider does /g/ use?",
  "board": "g"
},
{
  "text": "Isn't it just Outlook now?",
  "board": "g"
},
{
  "text": "I am my own provider",
  "board": "g"
},
{
  "text": "gmail\nprotonmail memeshit",
  "board": "g"
},
{
  "text": "email in an insecure file sharing and communications format. I don't use any",
  "board": "g"
},
{
  "text": ">t. neet",
  "board": "g"
},
{
  "text": "Do you use a netbook?\nWhich one?\nAre you happy with it?",
  "board": "g"
},
{
  "text": "GPD pocket",
  "board": "g"
},
{
  "text": ">Dogshit\nIt's a 60hz 1920x1200 IPS panel. \nReviews actually praised the screen.",
  "board": "g"
},
{
  "text": "Found this qt hiding in my moving box. Dusted her off and off to installing Archlinux",
  "board": "g"
},
{
  "text": "Are Pinebooks worth it?",
  "board": "g"
},
{
  "text": "Yes.\nAcer Aspire One AO522. The 1GHz AMD Fusion version. Upgraded to 4GB, 1TB, and a 9 cell battery.\nNot really. It's ageing poorly: bluescreens regularly, fan labors and creaks, and I really crave something with more go. Two heavy websites, and it grinds to a halt - yet smokes multiple VMs (RAM permitting).",
  "board": "g"
},
{
  "text": ">Don't plug power strips into power strips\n>Don't press the keys so fast\n>Don't press multiple keys at once\n>Don't be a virgin",
  "board": "g"
},
{
  "text": "lol!!",
  "board": "g"
},
{
  "text": "they have a valid point desu",
  "board": "g"
},
{
  "text": ">Googling",
  "board": "g"
},
{
  "text": "My house in Amsterdam doesn't have grounded outlets except in the kitchen.\nIt might be mandatory for new homes, but not existing circuits.",
  "board": "g"
},
{
  "text": ">dont get too close to the TV\n>literally has their face in their phone 24/7 which is just a smaller screen\nThe bad for your eyes meme comes from CRTs in the first place doesnt ir?",
  "board": "g"
},
{
  "text": ">buy usb MIDI keyboard\n>want to use it on my linux desktop\n>plug it in the front port\n>usb device descriptor error -71\n>try the other front port\n>same error\n>mouse works fine in both ports\n>keyboard works fine on my windows laptop\n>must be a linux problem\n>try every solution to this error posted online in the last 10 years\n>5 hours later\n>almost ready to give up\n>plug MIDI keyboard into a usb port on the back\n>instantly works",
  "board": "g"
},
{
  "text": "Probably this. Always use 2.0 for maximum compatibility.",
  "board": "g"
},
{
  "text": "must be some chinese shit, mine worked on-plug",
  "board": "g"
},
{
  "text": "The front ports are hooked up to an unpowered hub. OK for mice etc but no go for anything that needs power.",
  "board": "g"
},
{
  "text": "Ye it is actually is chinese shit. \nHaven't they figured out how to use USB 3.0 by now?",
  "board": "g"
},
{
  "text": "Doesnt a USB mouse still need power tho",
  "board": "g"
},
{
  "text": "Question of the day: How did you create your master password?",
  "board": "g"
},
{
  "text": "Build it from source then.",
  "board": "g"
},
{
  "text": "I'm actually guilty of doing the same thing with my local passwords for full disk encryption and veracrypt containers (strong base password and then a couple of characters that describe the machine or container in question)\n\nWhich means if the fucko seizes one of my computer while it's running, they can dump the encryption key in ram and then just place some educated guesses on the rest of my encrypted containers and devices\n\nI'm gonna start generating random passwords for containers and external hard drives, since they are removable devices so I can only access them after my computer is inside the oprating system anyway",
  "board": "g"
},
{
  "text": ">I believe in security through obscurity\nLook at this mentally handicapped retard and laugh.",
  "board": "g"
},
{
  "text": "I used to store my passwords in a text file, 7zipped with into a password protected arhive. But after discovering keepass I fucking love it.\n\nFor master password I use a large phrase with plain English that I will always remember.\nit's something like:\n>xxxxx xxxxx xx xxxxx xxxxxx xxxxx xxxxx xxxxxxxxx xx",
  "board": "g"
},
{
  "text": "write it down on a piece of paper, you will forget it one day for a brief moment",
  "board": "g"
},
{
  "text": "DEEP WEB THREAD Post your best deep web links or pics",
  "board": "g"
},
{
  "text": "VPN xd",
  "board": "g"
},
{
  "text": "Now please go back to r*ddit.",
  "board": "g"
},
{
  "text": "Funny thing is reddit is leaps and bounds beyond this shit. /g/ is shit, it's users are shit, the knowledge is shit., You guys know nothing other than what you read in school papers..Fuck off the whole lot of you.",
  "board": "g"
},
{
  "text": "Is overchan/oniichan still kill?\nWhat has become of deep web chans?",
  "board": "g"
},
{
  "text": ">VPN",
  "board": "g"
},{
  "text": "cheeky tongues out thread",
  "board": "c"
},
{
  "text": "Horse girls!",
  "board": "c"
},
{
  "text": "Is there anything the Japanese won´t draw a a cute girl?",
  "board": "c"
},
{
  "text": "horse girls being lolimoes doesn't make any sense to me. they should be tall, strong women or have larger teeth or something, not just be nekololis with slightly different ears.",
  "board": "c"
},
{
  "text": "Let's make this thing happen",
  "board": "c"
},
{
  "text": "Let's show our little aryan vocaloid a little affection",
  "board": "c"
},
{
  "text": "Woo, 20th thread! \n\nPrevious thread: \nOld threads: ",
  "board": "c"
},
{
  "text": ">Previous thread\n>>3107183\n\n>/a/ threads archive\npastebin.com/8JXubF7Q\n\n>/c/ threads archive\npastebin.com/T3UBT3kz\n\n>Stories\npastebin.com/MEkFk3Sk\n\n>Imagedump\ndropbox.com/sh/fbddo08ok063kid/AADnuPQqqdKKm87NWcaeKqMAa\nmega.nz/#F!c9IEQAKY!ApG64LjKvmtvUI-jrZIJfQ",
  "board": "c"
},
{
  "text": "Let's share images of cute and innocent physical displays of affection!",
  "board": "c"
},
{
  "text": "Previous thread: \nOld threads: Info-dump of the series: ",
  "board": "c"
},
{
  "text": "Rinne Berlinetta Time? I think it's Rinne Berlinetta Time.",
  "board": "c"
},
{
  "text": "blessed image",
  "board": "c"
},
{
  "text": "Cute.",
  "board": "c"
},
{
  "text": "I ship these two so hard.\n\nYes i have been to /u/.",
  "board": "c"
},
{
  "text": "The widest day of the year is here again!\n\nHappy birthday, Yuno!",
  "board": "c"
},
{
  "text": "Yuno is so cute!",
  "board": "c"
},
{
  "text": "Bonus points if the girl is crying out of happiness.",
  "board": "c"
},
{
  "text": "Not sure if counts but cute as hell",
  "board": "c"
},
{
  "text": "...I would like to complain, but I just can't.\nToo cute.",
  "board": "c"
},
{
  "text": "Let’s keep the party going!\n\nPrevious thread",
  "board": "c"
},
{
  "text": "Squid Girl deserves some love!",
  "board": "c"
},{
  "text": "PREVIOUS >>18698996\n\n>MUGEN MIRAI MV\n\n>MUGEN MIRAI PERFUME VIEW\n\n>PTA DVDS\n\n>PERFUME CLIPS\n\n>COMFY",
  "board": "jp"
},
{
  "text": "Anyone know of any good lewd perfume faces pics?",
  "board": "jp"
},
{
  "text": "Say who?\nSeihou!",
  "board": "jp"
},
{
  "text": "I bet it's the autist who sperged out in the ZUNart thread too.",
  "board": "jp"
},
{
  "text": "provided arguments*",
  "board": "jp"
},
{
  "text": "bump",
  "board": "jp"
},
{
  "text": "This is a thread for sharing links to music releases from this year's Spring M3 doujin event.\n\n\n>What we want\nSharing pics of your loot, posting FLAC if you can (others can convert if desired)\n\n>What we don't want\nArguing about formats, DS discord cancer, shitting up the thread\n\n>Where to buy\n\n>Where to steal\nAstost | Red | Sows | DS | Nyaa",
  "board": "jp"
},
{
  "text": "I know what you mean. Some of them you don't know if they'll even release certain albums digitally, pic related. I will gladly pay for all digital albums but the physical album + shipping is more than $40 USD",
  "board": "jp"
},
{
  "text": "any reitaisai download threads? ill share 2 albums i bought",
  "board": "jp"
},
{
  "text": "Maybe just post them to the RTS thread the people there will surely appreciate it",
  "board": "jp"
},
{
  "text": "The only reitaisai thread I'm seeing in the catalog is just a general one. Wouldn't hurt to just put them in either that one or this one.",
  "board": "jp"
},
{
  "text": "I don't feel like reitaisai has enough releases to sustain both a general and a download thread.",
  "board": "jp"
},
{
  "text": "A thread for discussion and recommendation of Japanese TV and movies.\n\nFAQ: \nPrevious Thread: \n\nPlease put sauce in the filename if posting pictures/gifs/webms.",
  "board": "jp"
},
{
  "text": "It's funny. It has the same scriptwriter as Legal High.",
  "board": "jp"
},
{
  "text": "what are the best yuichi fukuda shows(writer or director)?",
  "board": "jp"
},
{
  "text": "Aoi Honoo",
  "board": "jp"
},
{
  "text": "No turtle :(",
  "board": "jp"
},
{
  "text": "Meiling is STRONG!",
  "board": "jp"
},
{
  "text": "wow",
  "board": "jp"
},
{
  "text": "True, slutsen is a joke as a sage.",
  "board": "jp"
},
{
  "text": "What if hong meiling was Chinese: a thought experiment.",
  "board": "jp"
},
{
  "text": "Fuck yes I loved that doujin. Is there a continuation?",
  "board": "jp"
},
{
  "text": "Aizu-Wakamatsu Train Station Camera, rest in peace. For now.\n\n湯野上温泉駅 Yunokami-Onsen Station:\nrtmpt://114.160.7.45/livepkgr/live-cam003\n\n別所温泉駅 Bessho-Onsen Station:\n\nOld pastebin:\n\nPrevious threads:\n>>18117594\n>>17910155",
  "board": "jp"
},
{
  "text": "Have a night time screenshot.",
  "board": "jp"
},
{
  "text": "Look at her go.",
  "board": "jp"
},
{
  "text": "What is the link to this stream?",
  "board": "jp"
},
{
  "text": "Cute",
  "board": "jp"
},
{
  "text": "Re-read the thread and I found it",
  "board": "jp"
},
{
  "text": "Going outside for spring adventures.\n\nPlease read this before posting: \nMay releases + re-releases have been announced!\n\nPlaces to buy fumos and other plushes:\n\nGift:\n\nAmiami:\n\nBuyee/Yahoo Auction Japan:",
  "board": "jp"
},
{
  "text": "FREE THEM\n\n\nShe is a putitomo custom.",
  "board": "jp"
},
{
  "text": "Piss off",
  "board": "jp"
},
{
  "text": "Not Mokou ;_;",
  "board": "jp"
},
{
  "text": "Why not sit them on some boxes?",
  "board": "jp"
},
{
  "text": "I had a dream that a local shop was replaced by one of those really nice futuristic mega-arcades you find only in japan.\nIt was really dark inside too with neon lights and all. \n\nI walked in, and was approached by 2 elderly fat japanese Businessmen who were the arcade owners- offering me free coins to because they thought I had no money,\nbut I had plenty of money on me (300$) so I refused.\nHowever I realized that I had left my car unlocked, so I started leaving\n\nBut for some reason I couldn't bring my 300$ outside, so I needed to find somewhere to hide it inside the arcade so I could grab it when I came back from the parking lot. \nBefore I left, I noticed there was a mini indoor 9-person ferris wheel where the seats are individual enclosed dark pods with lights and screens inside \nI slid my 300$ under the seat when I walked back to the car\n\nWhen I returned, my 300$ was not there\nSomeone must have thought it was their dead drop for a drug deal.\nHowever in my seat, I found a giant Cirno fumo and in her lap a gift basket filled 6 regular fumos and a bunch of touhou merchandise.\nThere was also unrelated scattered anime stuff in the basket as well.",
  "board": "jp"
},
{
  "text": "This thread is for all current and former idols of Up-Front & Hello!Project.\n\n>Masterlist: \n\n>Wiki:\n\n>Agency Links:",
  "board": "jp"
},
{
  "text": "H!P's celebrity fandom slowly grows.",
  "board": "jp"
},
{
  "text": "How is it possible to be an ESPer in the outside world? Wasn’t the supernatural being erradicated in the outside world the only reason Gensokyo was created?\nWhat did ZUN mean by this?",
  "board": "jp"
},
{
  "text": "I thought all the versions of her died except one or something",
  "board": "jp"
},
{
  "text": "One was her real self, one was her dream self, and one was some random doppelganger.",
  "board": "jp"
},
{
  "text": "Is there a more realistic chuuni than Sumireko personality-wise?",
  "board": "jp"
},
{
  "text": "I always assumed she had some kind of psychic powers due to her bloodline. I think we all kind of assumed Renko was also special even if she is completely outclassed by Yukaribel and her power is pretty lame.\n\nEven if Sumireko just made herself had ESP by believing in it or if she just got that power out of nowhere, she's really no different than Kosuzu who inexplicably was able to read any kind of text.",
  "board": "jp"
},
{
  "text": "pls stop themaribel is yukari meme",
  "board": "jp"
},
{
  "text": "How could you possibly call such a cute tomboy a \"moonbitch\", /jp/?",
  "board": "jp"
},
{
  "text": ">she",
  "board": "jp"
},
{
  "text": "gu",
  "board": "jp"
},
{
  "text": "prove it",
  "board": "jp"
},
{
  "text": "marisa kirisame",
  "board": "jp"
},
{
  "text": "gu",
  "board": "jp"
},
{
  "text": "Remi is so STUPID",
  "board": "jp"
},
{
  "text": "wew indeed",
  "board": "jp"
},
{
  "text": "wow",
  "board": "jp"
},
{
  "text": "Mimirery.",
  "board": "jp"
},
{
  "text": "Remimimiry",
  "board": "jp"
},
{
  "text": "gross",
  "board": "jp"
},
{
  "text": "Previous thread: \n\nPost Japanese gravure here\n2D, 3D are welcomed\nRemember this is a SFW board\nRelax, and rejuvenate your eyes with beauties.\nA gravure idol (グラビアアイドル gurabia aidoru), often abbreviated to gradol (グラドル guradoru), is a Japanese female model who primarily models on magazines, especially men's magazines, photobooks or DVDs. Gravure idols appear in a wide range of photography styles and genres. Their photos are largely aimed at male audiences with poses or activities intended to be provocative or suggestive, generally accentuated by an air of playfulness and innocence rather than aggressive sexuality. Although gravure models may sometimes wear clothing that exposes most of their body, they seldom appear fully nude.\n\n> Sales Rankings\n\n> What's New",
  "board": "jp"
},
{
  "text": "lovely piggy\n\n\nnothing very lewd on her twitter but I can guarantee her DVDs are pretty good",
  "board": "jp"
},
{
  "text": "In some pics she seems fat",
  "board": "jp"
},
{
  "text": "I fao to lewd newspapers with girls",
  "board": "jp"
},
{
  "text": "Post lewd pics of DVD",
  "board": "jp"
},
{
  "text": "Lads, I cannot stop thinking about her, I think I'm falling in love.",
  "board": "jp"
},
{
  "text": "How would the 2hu's react to someone walking in on them changing?",
  "board": "jp"
},
{
  "text": "fatass",
  "board": "jp"
},
{
  "text": "I really like Kokoro’s mask in this image",
  "board": "jp"
},
{
  "text": "it's yassy",
  "board": "jp"
},
{
  "text": "BRAAAAAAAAAAAAAAAAAAAAAAAP!",
  "board": "jp"
},
{
  "text": ":3",
  "board": "jp"
},
{
  "text": "The yama is very hungry, but she wants to make the right choice. What shall she do?",
  "board": "jp"
},
{
  "text": "There’s nothing cute about those breasts",
  "board": "jp"
},
{
  "text": "yes",
  "board": "jp"
},
{
  "text": "Reminder to never sin. Or else Eiki will have to punish you by sitting on your face!",
  "board": "jp"
},
{
  "text": "What sins do I need to commit so that I can violently rape and mindbreak her?",
  "board": "jp"
},
{
  "text": "I don't think you understand how this works.",
  "board": "jp"
},
{
  "text": "東方 appreciation, collection and coping circle in search of fans of eastern made content and touhou:\n\nThis secret code let's you access this area! Uky6NXV",
  "board": "jp"
},
{
  "text": "People still use discord?",
  "board": "jp"
},
{
  "text": "MEIDO REMOVE THIS TRASH",
  "board": "jp"
},
{
  "text": "Sage",
  "board": "jp"
},
{
  "text": "Dunno my man, the people in here seem pretty otaku if you ask me",
  "board": "jp"
},
{
  "text": "Meido is slacking.",
  "board": "jp"
},{
  "text": "What are some games where the hero doesn’t get the girl?",
  "board": "v"
},
{
  "text": "Haven't seen the Simpsons in 100 years. what am I looking at here OP?",
  "board": "v"
},
{
  "text": "An AMV based on a nuSimpsons episode.\nEpisode is still fairly old though.",
  "board": "v"
},
{
  "text": "life",
  "board": "v"
},
{
  "text": "what is nuSimpsons?",
  "board": "v"
},
{
  "text": ">tfw you can’t date merula snyde",
  "board": "v"
},
{
  "text": "I want to fug that",
  "board": "v"
},
{
  "text": ">actually playing this shit\nlol?",
  "board": "v"
},
{
  "text": "I wanted to give it a chance because Merula was cute",
  "board": "v"
},
{
  "text": "What? No Wizard schools in Australia? We could channel the dreamtime or conjure flaming spiders and shit.",
  "board": "v"
},
{
  "text": "Played it for a day or two to check out what the fuss was about\n\neven if you completely whale out and pay for energy nonstop, the story is completely streamlined and lame. Dialogue choices don't matter at all, it is pretty much predetermined that character A is your friend while character B is your enemy, etc. \n\nignore at all costs",
  "board": "v"
},
{
  "text": "Previous thread\n\n\n>Post character name/franchises and references and keep them in a single post\n>Keep it vidya\n>The character(s) must be of vidya origin\n>Post an art sample with your \"taking requests\" requests\n>No bumping your requests\n>If a post breaks the rules, DO report and hide it. DON'T respond to it.\n>No OC requests. You can, however, request the creation of vidya characters\n>Everyone posting \"LOOMIS\" without explanations and proper criticism is just spam, which should be ignored and reported.\n>Please bump if the thread reaches page 10\n>Have fun\n\nPost your art to the booru for anons to find later in case they miss a delivery or if it is NSFW:",
  "board": "v"
},
{
  "text": "lmao so true",
  "board": "v"
},
{
  "text": "Thank you again for whoever did this",
  "board": "v"
},
{
  "text": "Still amazing.\n\n\nBecause you're asking for a fetish and expect a free commission (or half of one) or how some people believe",
  "board": "v"
},
{
  "text": "Waifus are a fetish now?\nAlso I rarely even request my waifu here, I usually commission instead",
  "board": "v"
},
{
  "text": "I hate you guys, you assholes keep making my matches fucking toxic you hateful fucks, I need you to stay off CS:GO or else I am going to call my friends on you!!!",
  "board": "v"
},
{
  "text": "I don't know about that, but I do go fast and kill shitters who've never played Tribes before.",
  "board": "v"
},
{
  "text": "CS:GO fuck yourself",
  "board": "v"
},
{
  "text": ">I've literally never played a game with a female before",
  "board": "v"
},
{
  "text": "so we're like the only people that even remember this was a thing anymore right?",
  "board": "v"
},
{
  "text": "Does anyone else find nu-toxicity aka passive-aggressive phrasing and undermining worse than the old \"straight up verbal abuse\" we used to have?",
  "board": "v"
},
{
  "text": "What are your honest thoughts on Camilla?",
  "board": "v"
},
{
  "text": "Even though that's true for Camilla since there's plenty of other qualities about her that make her overrated, the point is for typical in Fire Emblem the most broken/easy mode units are usually the most overrated ones.",
  "board": "v"
},
{
  "text": "Yea. Shit sucks. I mean I get why she's not liked but it's still annoying.",
  "board": "v"
},
{
  "text": "This man understands.",
  "board": "v"
},
{
  "text": ">she has a mental disorder. She would hide bleach in her siblings drinks if she knew it'd keep them sick in bed begging for her nurturing nature.\nMOMMY",
  "board": "v"
},
{
  "text": ">old hero converts to Judaism",
  "board": "v"
},
{
  "text": "By adding it to my library when it was free. Only newcomers have to cough up the dough",
  "board": "v"
},
{
  "text": "I've been playing a lot of Wipeout 3 lately, everything about the game is perfect.\nNot that that has anything to do with this thread, it's just the closest thing to a wipeout thread.",
  "board": "v"
},
{
  "text": "lol no I doubt youve even played BNG for more than an hour if you believe that",
  "board": "v"
},
{
  "text": "Wait I thought we were going to lose it when it left early access or if we delete it from our HDD?",
  "board": "v"
},
{
  "text": "desu I prefer Wipeout HD, that's the real peak of the series.\nI just wish it had a cockpit mode, it'd be perfect then.",
  "board": "v"
},
{
  "text": "Which mario parties use blast processing?",
  "board": "v"
},
{
  "text": "MP8 GET IN HERE",
  "board": "v"
},
{
  "text": "yawn",
  "board": "v"
},
{
  "text": "While we're waiting for the next game to start;\nSince Mario Tennis for Switch is the \"we swear we're trying this time\" game, I hope the inevitable Mario Party for Switch is pretty robust and harkens back to its best incarnations.",
  "board": "v"
},
{
  "text": "If I have to put up with 7 shenanigans, you can survive an 8 board or two.",
  "board": "v"
},
{
  "text": "Did and all I see is this",
  "board": "v"
},
{
  "text": "It's Sunday anons\nWhaddya\n>Playin'\n>Eatin'\n>Readin'\n>Drinkin'\n>Listenin'\n>How are ya feeling lately? \nDon't feel bad. Tomorrow can be a better day if you do your best",
  "board": "v"
},
{
  "text": "Stop forcing this shit girl in these threads faggot.",
  "board": "v"
},
{
  "text": "Tomorrow I have to go back to my shitty landscaping job. I've been playing FE Fates conquest lunatic all day, tried to brute force my way through 26 sacrificing units but end game is too hard without them so now I have to go back and do it again. At least 27 is easy.",
  "board": "v"
},
{
  "text": ">Playan\nGonna try and finish Ace Combat 5 tonight\n>Eatan\nJust ordered a pizza\n>Readan\nNothing right now\n>Drinkan\nHoney brown\n>Listenan\n>Feelan\npretty alright",
  "board": "v"
},
{
  "text": ">>Playin'\nP4G\n>>Eatin'\nBetter\n>>Readin'\nNone\n>>Drinkin'\nWater\n>>Listenin'\nCream\n>>How are ya feeling lately? \nBetter",
  "board": "v"
},
{
  "text": "tenryuu isn't shit you double nigger",
  "board": "v"
},
{
  "text": "You watching the Texas showdown top 8 /v/",
  "board": "v"
},
{
  "text": "Chris T admitting Ken wins a matchup!?",
  "board": "v"
},
{
  "text": "Delete this. Ken is Z tier and every match up requires a PHD in neuroscience and a team of rocket scientists to prep",
  "board": "v"
},
{
  "text": "I thought menard retired because of \"racism\"",
  "board": "v"
},
{
  "text": "kek no",
  "board": "v"
},
{
  "text": ">Punk vs Du\nBut what if I can't stand them both? Who should I be cheering for?",
  "board": "v"
},
{
  "text": "What is the Dark Knight trilogy of vidya?",
  "board": "v"
},
{
  "text": "arkham games without counting origins",
  "board": "v"
},
{
  "text": ">first game is great\n>second game is brilliant\n>third game is literally memes\n\ndiablo",
  "board": "v"
},
{
  "text": "Literally this",
  "board": "v"
},
{
  "text": "Burton's>Nolan's\nProve me wrong",
  "board": "v"
},
{
  "text": "Desexualize this Japanese dragon /v/",
  "board": "v"
},
{
  "text": "I want to FUCK, DESTROY HER CUNNY, BUT MOSTLY FUCK Nowi",
  "board": "v"
},
{
  "text": "Well shit, good thing the first thing that happened when i got back in was that i got black Knight from a free summon",
  "board": "v"
},
{
  "text": "Oh there was probably some labor going on.",
  "board": "v"
},
{
  "text": "All the armor units got power crept but most units can still hold their own with proper skill inheritance if you really like them.",
  "board": "v"
},
{
  "text": "It's pretty odd, because being how old she is, she would probably have been around when Grima was fucking around the first time",
  "board": "v"
},
{
  "text": "How can western devs expect to compete?",
  "board": "v"
},
{
  "text": "I'm working on a game that's already a pretty big deal on YouTube plebian.",
  "board": "v"
},
{
  "text": "Name? I have an interest for games made in /v/.",
  "board": "v"
},
{
  "text": "Todd is better than you, faggot",
  "board": "v"
},
{
  "text": "so because nicki minaj sells six quintipulloon records her music is good\n\ngotcha\n\ni mean dont make it this obvious you're a triggered skyrim/nu fallout fan\n\nstupid cucks",
  "board": "v"
},
{
  "text": ">It's a sub-par 2d sidescrolling platformer\nEwww",
  "board": "v"
},
{
  "text": "Is it any good? How bad is the input lag?",
  "board": "v"
},
{
  "text": ">bring this up in MMO threads\n>mfw MMOfags dismiss it like \"it's part of the game!\"",
  "board": "v"
},
{
  "text": "It's kinda like a youtube video except you can control it. Played last of us and it got real bad when the servers shit itself.",
  "board": "v"
},
{
  "text": "I wish they'd just do what m$ did with their Xbox game pass and just let us download the fucking games we want to play, fuck streaming video games. OnLive sucked cock and so does ps now.",
  "board": "v"
},
{
  "text": "They always add new games. Older PS4 exclusives like Killzone: Shadow Fall are also available and it seems to make money. Maybe they'll port the games to PC as rumor says.",
  "board": "v"
},
{
  "text": ">Maybe they'll port the games to PC as rumor says\n\nwhat",
  "board": "v"
},
{
  "text": "I just got into this and am at the 2nd half of the library.\nI think this is a fucking great game, and great horror game.\nThe Librarians are fucking spooky.\nThe guns look so nice too!\nWhat are your opinions on this game?",
  "board": "v"
},
{
  "text": "Redux changes 2033 in a few worse ways, but 2033 and Last Light are insanely great games that seem like a miracle that they exist.",
  "board": "v"
},
{
  "text": "post your gamefu",
  "board": "v"
},
{
  "text": "On one hand I'm sad that she is not so popular now and I can't talk to anyone about her but on the other hand I get autistically jealous when someone else claims her.",
  "board": "v"
},
{
  "text": "On 4chan? I wouldn't say I'm jealous but I do find some of the people that she attracts to be annoying and sometimes downright insufferable. In general though her relative popularity leads to fan art and merch so of course I'm not bothered by that.\n\n\nNo, I was busy most of the day and not really feeling it right now.",
  "board": "v"
},
{
  "text": ">Fat shit\n>Good",
  "board": "v"
},
{
  "text": "Yeah yeah whatever.",
  "board": "v"
},{
  "text": "I've been getting into retro VN's. Can someone tell me how to play this game (YU NO)? I can't get any of the PC versions to run for shit...",
  "board": "vr"
},
{
  "text": "Do not bother, a porn game with too much text",
  "board": "vr"
},
{
  "text": "The Saturn version isn't even porn.",
  "board": "vr"
},
{
  "text": "A great game even without the porn.",
  "board": "vr"
},
{
  "text": "Is there a good tutorial how to configure DxWnd for Windows 10?",
  "board": "vr"
},
{
  "text": "I miss the art style",
  "board": "vr"
},
{
  "text": "This thing has my favorite library of any Nintendo console, but the original hardware makes nearly every game unplayable. The awful green and yellow display, plus the motion smearing makes any game with fast movement impossible. Playing this fantastic games on literally any other console is great. Super Gameboy? No problem. Gameboy Color? No problem. Gameboy Advance? No problem. Hell, even the Gameboy Pocket looks fine, but the grey brick is just awful. Slower games are fine. Pokemon plays perfectly fine on the original Gameboy. Tetris works okay, until the later levels. I beat Link's Awakening on the original Gameboy, with relative ease, but anything else? Mario? Metroid? Donkey Kong Land? Fucking forget it. Its a shame because the library is so good. Obviously now there are better ways to play these games, but how did people in 1989 play on this screen?",
  "board": "vr"
},
{
  "text": "nice blog post",
  "board": "vr"
},
{
  "text": "I notice the motion blur, but it never bothered me, and it certainly never made any game \"unplayable\" to me. Must be brutal to have the 'tism.",
  "board": "vr"
},
{
  "text": "I still keep one in the drawer in my bathroom and play Tetris while I take a shit. The screen is fine. The more exposure to the sun a game boy has had, the worse the blur will be.",
  "board": "vr"
},
{
  "text": "I'd just play it on GBA SP\n\nGreat library, normies can enjoy Tetris and Mario Land, and there's great obscure RPGs like The Frog for Whom the Bell Tolls",
  "board": "vr"
},
{
  "text": "I want to mod my Gameboy Color to have a backlight but theres various LCD builds and variations and also frontlight LCDs on eBay? \n\nWhat's the best mod?",
  "board": "vr"
},
{
  "text": "Anyone here like Tomb Raider? Currently going through number 4 and having a blast.",
  "board": "vr"
},
{
  "text": ">and stop there\n\nThe stand-alone expansions are worth anyone's time as well. Only the first one was underwhelming due to having so few levels, but Golden Mask and Lost Artifact are pretty well fleshed out.\n\nAnd why no mention of Anniversary? Just because it's a remake doesn't mean you should skip it if you're played the original TR1. Play them both.",
  "board": "vr"
},
{
  "text": "Maybe you guys are right as far as the controls go, I dont really understand this idea that I have to get used to the camera. Camera shouldnt be something to get used to but i can meet you halfway on that.\nalso i'll say just the idea of Tomb Raider seems really lame. I get its Indiana Jones essentially but a hot chick, but..meh. Like I said before, tigers and bears. could be cool. but it just didnt click with me.\nanyway, i appreciate the replies guys.",
  "board": "vr"
},
{
  "text": "Those are some digusting toes",
  "board": "vr"
},
{
  "text": "So you're saying you wouldn't them?",
  "board": "vr"
},
{
  "text": "They're long like insect legs",
  "board": "vr"
},
{
  "text": "*blocks your OCD*",
  "board": "vr"
},
{
  "text": "blue magic, I think it's limit glove that breaks the game",
  "board": "vr"
},
{
  "text": "Copyright infringement",
  "board": "vr"
},
{
  "text": "So yeah, Goku.",
  "board": "vr"
},
{
  "text": "Worst characters of any FF hands down.\nI'm not counting 15 because it's the first FF in my life I didn't even bother to play or buy.",
  "board": "vr"
},
{
  "text": "8 > 7 > 9 > everything else",
  "board": "vr"
},
{
  "text": "90s hot girls thread? It can be npcs or main characters, anything that's worth checking out. Let me see those big pixelated tiddies",
  "board": "vr"
},
{
  "text": "It's not games either. What's your point?",
  "board": "vr"
},
{
  "text": ">characters originating from video games\n>not video games\nreally fires the neurons",
  "board": "vr"
},
{
  "text": "Did he deserve what he got?",
  "board": "vr"
},
{
  "text": ">get teddy so you can get up Mt. Itoi with ease\n>lose teddy\n>Climb your ass all the way back up Mt. Itoi except now you have piss-weak, under levelled Lloyd\n>get EVE which does basically the same thing Teddy did\n>almost immediately lose EVE\n\nI don't know how I feel about this game design.",
  "board": "vr"
},
{
  "text": "but why does Ninten's dad yell SLAM! every time he hangs up the phone?",
  "board": "vr"
},
{
  "text": "Wow, Mewtwo really let himself go after Mother.",
  "board": "vr"
},
{
  "text": "he got mentally fucked up by a bunch of singing children",
  "board": "vr"
},
{
  "text": "Why has doom aged so well? I'm playing this for the first time since back when I had a ps1 and hadn't gotten past the second level. Literally the only problem with it was that I have to use the gzdoom version so my controller works and it doesn't look as nice as the dos version. \n\nThere are games that came out 10-15 years after doom and haven't aged as well",
  "board": "vr"
},
{
  "text": "I know nobody by that name.",
  "board": "vr"
},
{
  "text": "Darlington?",
  "board": "vr"
},
{
  "text": "Sorry.",
  "board": "vr"
},
{
  "text": ">Playing Brutal Doom\n>Sacrificial Grounds.\n\nMfw\n\nSeriously there needs to be more Doom Hell levels that go into the really fucked up aspects of hell. Like entire rooms of impaled, tortured people screaming and crying. Endless suffering.",
  "board": "vr"
},
{
  "text": "I never really liked Brutal Doom very much, but I'll fully acknowledge that Brazilian Robbie Rotten is actually a pretty good mapper, I'd have no trouble believe parts of BD Starter Pack have some pretty strong levels (I heard a few were phoned in, however).",
  "board": "vr"
},
{
  "text": "What is the most unique and obscure game you have played?",
  "board": "vr"
},
{
  "text": "Here you go my dude. \n",
  "board": "vr"
},
{
  "text": "The PS2 one is more obscure.",
  "board": "vr"
},
{
  "text": "probably not that obscure for people who own the system, but I'd say in general it's pretty unique.",
  "board": "vr"
},
{
  "text": "Thanks. Really appreciate it.",
  "board": "vr"
},
{
  "text": "I remember finding this dos space shooter game in the early 2000s on a shitty abandonware site done by someone that maybe knew how to format text and place links in html but not much more. The game was obviously inspired by the bombing run on the deathstar because that was every level with more enemies and obstacles. Everything was black with the dos green making outlines for objects. You could only move horizontally and shoot, nothing else. It was garbage but very challenging, 3 deaths put you at the beginning. I never got past level 6. Then I got some bootleg copies of Doom, Duke and Wolfenstein from my mom's coworker's husband and never played it again",
  "board": "vr"
},
{
  "text": "who else loves kof 02?",
  "board": "vr"
},
{
  "text": "Based",
  "board": "vr"
},
{
  "text": "My '96 bretheren",
  "board": "vr"
},
{
  "text": "Max mode combos are hard as fuck, you not only need only need press 2 bottons and dash but also have to quickly hit and has like zero hitstun, I don't see them all that much outside of korean players but they are cool as fuck tho. I really want to get into kof because very big playerbase on fightcade but those more than 2 type of jumps wont let me which is the maximum number of type of jumps street fighter have featured, I do play last blade 2 with my neighbor tho",
  "board": "vr"
},
{
  "text": "96 was immensely popular in our arcades before 97 fad started, everyone would pick chizuru like absolute everyone",
  "board": "vr"
},
{
  "text": "Only the kids who play the hacked versions of this game\n> inb4 MAGIC PLUS II",
  "board": "vr"
},
{
  "text": "---Handy/interesting Links---\n\n=DIABLO 1=\nLast semi active D1 community \n\nDiablo evolution - very cool site where you can read about early D 1 versions and even test some of them\n\nInfo for those D1 players that look for a challenge\n\nSomething for D1 hellfire lovers an unnoficial patch that fixes most of the annoying bugs and adds extra optional features like gillian stash, adria and wirt are closer to the rest of the townsfolk, exp sharing work in multiplayer games",
  "board": "vr"
},
{
  "text": "Again, I know you're new. Again, play PoD and not vanilla as I already told you.",
  "board": "vr"
},
{
  "text": "Someone find the contract for Mel Gibson and bug the shit out of him to reopen /v/net because it's what everyone here needs.\n\n",
  "board": "vr"
},
{
  "text": "It's worth it if you play PoD.\n\n\nI had his skype, but he stopped logging years ago, and I did ad well some time after. I'm pretty sure nobody in here can find him, unless he somehow magically shows up on his own.\n\n>tfw a Canadian tranny gave me a free infinity on vnet\n\nThat was kind of sus, and map hack was also allowed, so I don't know if remaking vnet again is worth it. I wish we could just have out sekrit game names and passwords and play PoD together instead.",
  "board": "vr"
},
{
  "text": "i started a few months ago on HC then got lured to my death by a griefing asshole\n\n\"tp is safe bro\"",
  "board": "vr"
},
{
  "text": ">playing HV\n\nlmaoing @ you rn",
  "board": "vr"
},
{
  "text": "I have both a CRT and an HDTV, neither are particular good, both were some low cost pick-up from my college years that I had in storage.\nI want to play some PS1 games. I currently only have access to a PS2.\nWhich is the better option for enjoying PS1 games, S-Video cables into the CRT or Component cables into the PS2.\nFor all purposes treat this PS2 like it's exclusively a PS1 player.",
  "board": "vr"
},
{
  "text": "Yes, it looks much better. Take a look at that pic.",
  "board": "vr"
},
{
  "text": ">You'll also have problems with transparency.\n\nThis is not the Saturn we're talking about, PS1 supports true semi-transparency. That said, putting a smooth on the dithering is nice.",
  "board": "vr"
},
{
  "text": "It's highly dependent on the game. The dithering isn't annoying in every title.",
  "board": "vr"
},
{
  "text": ">video games\n>VIDEO games",
  "board": "vr"
},
{
  "text": "You realize this thread is about getting PS1 games playing on another hardware, and OP's post is very much technical. Kys and delete your post.",
  "board": "vr"
},
{
  "text": ">>4627628\nHammerites are the best group and pagans are the worst",
  "board": "vr"
},
{
  "text": ">implying",
  "board": "vr"
},
{
  "text": "Well, in a way it's still something new. The inn as a safe zone evolved into a whole fraction of the City that connects three restricted zones, a true hub. As you said the Rose of Bantry had one, but this one is lively, detailed, with variety and different streets. It's funny how it's more heterogeneous looking than the City portayed in Garrett's Revenge, even if there's nothing to look for here. All the loot needed in expert can be found in the three restricted zones.\nSome neat architectural touches, like the colonnade around the mansion, the upper galleries in the church or the canal full of boats, that characterize the \"useful\" parts of the City. Sometimes it's the most simple stuff that gives depth to a mission. The same goes for the interiors. The mansion is circular like many others but the circle patrolled by the guards consits of two floors. The church develops vertically and every floor has Hammers watching over the one below, especially the priest in the bell tower.\n\nNew stuff on the gameplay side too, like witnessing the completion of a rival thief hit (to your detriment) or being able to get the key for the manor's back entrance only with the permit from the temple.\n\nCan you recognize the sound used for the drawbridge? It could be from any TDP mission and I just forgot it, but after seeing the red hammer on Brother Roban's model I started wondering if that one was the only custom element of the FM.",
  "board": "vr"
},
{
  "text": "Who keeps buying this shit?",
  "board": "vr"
},
{
  "text": ">repo\nthis is the real deal not a repo",
  "board": "vr"
},
{
  "text": ">retro retro retro classic classic retro classy classic\n>#nintendo switch\n>#wii\nI guess his classy retro shtick doesn't get much retweets by itself",
  "board": "vr"
},
{
  "text": "You need to go back. \ntwitter.com",
  "board": "vr"
},
{
  "text": "The wii is retro depending on who you ask.\n\"Aww man I'd spend hours just browsing the wii shop when I was a kid.!\"",
  "board": "vr"
},
{
  "text": "i kept seeing this ad and reported it to Nintendo before I realized its officially licensed.",
  "board": "vr"
},
{
  "text": "What went wrong?",
  "board": "vr"
},
{
  "text": "No games that aren't freelance garage coding experiments.",
  "board": "vr"
},
{
  "text": "First, 52 is too many games at once. There is no possibility a small team could create good 52 games in that timeframe. There are like, 5 decent games in this set for a reason. They should've stuck to making like, 5-10 games.\n\nIn fact - this should've been something like a Kirby Super Star, where the main 'games' are various remixes of Cheetahmen with different story and objectives and slightly different mechanics - plus smaller minigames. The problem here is lack of focus.\n\nSecond, price. Because the cartridge was priced at ridiculous 200$ - it should've been priced like, similarly to regular game carts, where the amount of games would be seen as an advantage.\nIt's just a bad business move. If you price your cart at 40$, 5 people might buy it and you will make 200$. But if you price it at 200$, 0 people will buy it because it's way too expensive, and you will make 0$.\n\nThird, if Active wanted to turn Cheetahmen into its own franchise, they should've followed up with a polished multiplatform Cheetahmen sequel, instead of trying SECOND Action52 cart.",
  "board": "vr"
},
{
  "text": "No it did not, noone fucking bought this because this bullshit costed 200$. They'd shift tonnes more copies if it was priced more reasonably.",
  "board": "vr"
},
{
  "text": "Almost all the games were Tiger Electronics tier",
  "board": "vr"
},
{
  "text": ">the cartridge was priced at ridiculous 200$\n\n>this bullshit costed 200$.\n\nI know right of they'd priced it more like $99 for the Sega version, $79 for the NES version then maybe there'd be hundreds of copies out there and it would get discussed on forums today.",
  "board": "vr"
},
{
  "text": "Hey anon, Why aren't you watching the annotated Symphony of the Night series? \n\n",
  "board": "vr"
},
{
  "text": "\"The Best\" is a bit hyperbolic. I might agree with you if it had more interesting bosses. Still, it's a better game than SotN.",
  "board": "vr"
},
{
  "text": ">he still thinks sotn is better than rondo \nAnon, I...",
  "board": "vr"
},
{
  "text": "man this guy isn't cool\n\nI think if I were gonna make a video about a game I'd just show off skillful play while being real chill and cracking jokes the whole time",
  "board": "vr"
},
{
  "text": "waste of time",
  "board": "vr"
},
{
  "text": ">annotated\n>doesn't even mention the differences in opening crawl between US and JPN versions.",
  "board": "vr"
},{
  "text": "Why didn't Tony say anything to Peter and let him go just like that?",
  "board": "tv"
},
{
  "text": "Don’t be a fucking pussy",
  "board": "tv"
},
{
  "text": "Why does every scene of this movie look like shit, like they used some hazy color distortion filter on it?",
  "board": "tv"
},
{
  "text": "I'm pretty sure the gravity of the situation hadn't set in yet",
  "board": "tv"
},
{
  "text": "Because it's a camrip.",
  "board": "tv"
},
{
  "text": ">Nothing Personal Kid",
  "board": "tv"
},
{
  "text": "What the fuck? This guy basically wanted White genocide. Why was there so much praise for the character?",
  "board": "tv"
},
{
  "text": "The praise was from people who also want white genocide. \n\nI saw this movie today and it is identical to every other cape shot movie except it’s set in some African utopia.",
  "board": "tv"
},
{
  "text": "He was right.",
  "board": "tv"
},
{
  "text": "And that's a good thing.",
  "board": "tv"
},
{
  "text": ">At one point he was earmarked to be the Caped Crusader in the DCEU – something he’s recently said to be grateful for not happening. \n\nFucking seriously though? I used to like Brolin but does anyone else see this as a dick move on his part? There's no fucking way he could've known back then that one franchise would've been bigger than the other.",
  "board": "tv"
},
{
  "text": "It's a loss for everyone really. Average movie goer doesn't know Marvel and DC, he just sees superheroes. Competition is not a bad thing.",
  "board": "tv"
},
{
  "text": ">we got this covered",
  "board": "tv"
},
{
  "text": "Actually the average movie goer DOES know the difference\n\nWhy else do you think the MCU has been so successful and DCEU such a disaster?",
  "board": "tv"
},
{
  "text": "Word of mouth.\n>hey did you see that new superhero movie? yeah it was pretty bad\nAnd voila DC fails",
  "board": "tv"
},
{
  "text": "How is this a dick move? He disagreed creatively so he didn't get the part for Batman, something that he was clearly bummed about at the time. The fact that the DCEU ended up being such a clusterfuck and he found a much more suited and fulfilling role out of Marvel's biggest bad guy is just a happy coincidence that he's probably thankful for.",
  "board": "tv"
},
{
  "text": "Why did she pissed herself?",
  "board": "tv"
},
{
  "text": "based",
  "board": "tv"
},
{
  "text": "That's very very mean anon. Mckenna wouldn't like that.",
  "board": "tv"
},
{
  "text": ">At least dozens of people were involved in the request, design, approval, and production of a dress that size with a huge slit up the side.",
  "board": "tv"
},
{
  "text": ">Some of us have daughters\n\nyour g/f's kids don't count",
  "board": "tv"
},
{
  "text": "It's an innocent dress. You have to have a pretty dirty mind to think of anything beyond that.",
  "board": "tv"
},
{
  "text": "Doctor Strange has the ability to go back in time and kill Baby Thanos. think about it.",
  "board": "tv"
},
{
  "text": "We really need to stop making characters who can control time.\n98217009\nWew. I'm not (you)ing you.",
  "board": "tv"
},
{
  "text": "doesnt need to kill him\n\njust go back in time and raise baby thanos, make him become a good boy instead of a psycho.\n\n\nfucking shit marvel you failed again",
  "board": "tv"
},
{
  "text": "He gave the green Chaos Emerald away because when he looked into the future he saw that Stark would've been among the 50% who'd survive, so he didn't see the point in having Stark sacrifice himself for it, so he just handed it over.",
  "board": "tv"
},
{
  "text": "If Strange can peer into the future, why didn't he see Thanos coming?\nMore importantly, why didn't he see Drumpf getting elected and do something about it?",
  "board": "tv"
},
{
  "text": "Who cares?",
  "board": "tv"
},
{
  "text": "Yeah, poor jocks, fucking that beauty in the ass and mouth for hours until they were totally satisfied. Poor, poor jocks!!",
  "board": "tv"
},
{
  "text": "I'd let him fuck me for a million",
  "board": "tv"
},
{
  "text": ">The goody goody Nickelodeon actress who had her own show on Nick and is not named Victoria Justice and is now trying to make it in movies or mainstream television was certainly not acting goody goody this week at a frat party. She even brought her own coke to go with the frat provided Molly. Miranda Cosgrove \"iCarly\"\n\nEntylawyer outed cokehead Miranda years ago. Something happened.",
  "board": "tv"
},
{
  "text": "iCarly, iCarly\n\nI don't care if you look like Michael Jackson\n\nAs long as you givin' me action\n\nAnd Freddie gon film the reaction",
  "board": "tv"
},
{
  "text": "BASED",
  "board": "tv"
},
{
  "text": ">main guy UNJUSTS himself\n>turns beta BASEDboy into alpha Chad\n>mocks over-sensitive millenials\n>SJW character gets BTFO\n>”the weak should fear the strong”\n>good guys becomes bad guys and win\n\n10/10 would watch again",
  "board": "tv"
},
{
  "text": "PREV: \n\nThread theme: \nQotD: What are your thoughts on Nicki Minaj?",
  "board": "tv"
},
{
  "text": "humans are attracted to genetic diversity, who knew",
  "board": "tv"
},
{
  "text": "Perfect mix of ghetto thot, plastic bimbo and kino music videos.",
  "board": "tv"
},
{
  "text": ">Implying that's not her best feature",
  "board": "tv"
},
{
  "text": "Almost everything she does tells you upfront that she know you're masturbating to her and wants more cum.",
  "board": "tv"
},
{
  "text": "EXTRA THICC",
  "board": "tv"
},
{
  "text": "Does anybody else hate Doug as a character? I don't really understand why the show makes him out to be some good guy; you watch it and all he does is whine and complain about not getting that juicy mayonnaise pussy. He's like charlie brown but an idiot.",
  "board": "tv"
},
{
  "text": "total alpha",
  "board": "tv"
},
{
  "text": "Which Nickkino era resonated most for you?",
  "board": "tv"
},
{
  "text": ">\nbig oof",
  "board": "tv"
},
{
  "text": "early gen Y and some core gen 7\n\nborn in 87",
  "board": "tv"
},
{
  "text": "What did you guys think of this movie? I don't usually watch these types of movies but I loved this one. Enjoyed it way more than I thought I would. Throughout the movie I found myself wondering how I would have acted if I were in that scenario (mostly putting myself in the prisoners' shoes). Also thought about how I would have gone about starting a revolution against the prisoners.\nDo you guys think the prisoners could have done a better job of rebelling against the guards? I think the knowledge that this is not a real prison would fuel a lot of my rebellion but who knows what kind of mental breakdown I would have if I were actually in there. The prisoners started to believe that it was an actual prison and I suppose it essentially was.\nI immerse myself way too much into movies and perhaps it is a testament of how great the acting was but I really wanted to clock those stupid guards. I was genuinely getting anxiety from watching all that injustice going on. \nBrilliant movie and I would definitely recommend it if you haven't watched it already!\nPlease recommend similar movies!",
  "board": "tv"
},
{
  "text": "He won't have a source on it being \"debunked\".",
  "board": "tv"
},
{
  "text": "I would have acted differently in the experiment.",
  "board": "tv"
},
{
  "text": "I admit I only looked through the first couple of results but I couldn't find any debunking which is why I asked. would actually somewhat ruin the movie for me if he's actually telling the truth\n\nU R LITERALLY ZE WURST!!12@!2!",
  "board": "tv"
},
{
  "text": "Watched this for the first time recently. Though it was really good but Ezra miller overacted so fucking badly. Really wanted to beat the fuck out of him in every scene where he had more than 3 lines of dialogue.",
  "board": "tv"
},
{
  "text": "lol I think someone else also complained about Ezra Miller ITT. I thought he was fine. he really sold the part where he was having a breakdown into the camera begging to be released",
  "board": "tv"
},
{
  "text": "How come nobody bleeds in Nolan movies?\n\n>Foley gets shot to death\n>Not a speck of blood on him",
  "board": "tv"
},
{
  "text": "what's the name of the documentary?",
  "board": "tv"
},
{
  "text": "this film is not yet rated",
  "board": "tv"
},
{
  "text": "thanks senpai",
  "board": "tv"
},
{
  "text": "np la",
  "board": "tv"
},
{
  "text": ">Impressionable young minds aren't aware of the carnage a gun can cause because these films don't have bloo\nWhat? If anything films have far too much stylized gore and blood, a single bullet magically causes blood explosions out of people, while in reality you just see people mostly drop down on the ground with no instant blood spray whatsoever, one of the reasons why people of today are confused when watching a liveleak video of a gang shooting and people just falling like dolls with no blood spray and organs exploding \n>or suffering \nNow here lies the real problem, the desensitization of the general public to violence itself.\nHaneke is trying to tackle this problem from the start of his career. Funny Games is Haneke's fuck you to the standard moviegoer who enjoys and fetishizes violence as long as it is \"morally justified\" by the hero of the story, so Haneke flips the genre completely.\nAt the first screening at Cannes the entire audience applauded and cheered when that guy finally got shotgunned to the wall, only to go dead silent in utter disbelief when the rewind happened. That's exactly the reaction Haneke wanted to produce, I bet he formed the most smug face in existence at that very moment.",
  "board": "tv"
},
{
  "text": "what the fuck was his problem?",
  "board": "tv"
},
{
  "text": "What the fuck was my problem?",
  "board": "tv"
},
{
  "text": "Keep it that way, the third was terrible and uwe clearly lacked the budget to finish it but did so anyway.",
  "board": "tv"
},
{
  "text": "garbage judge dredd",
  "board": "tv"
},
{
  "text": "Underachiever, he didn't kill enough.",
  "board": "tv"
},
{
  "text": "......there’s three?",
  "board": "tv"
},
{
  "text": "brochacherinos recomend me some movies to watch with my girlfriend\n\nshe likes to take xanax, listen to soundcloud rappers and drink sprite with cough sirup",
  "board": "tv"
},
{
  "text": "Is your gf Lil Tay?",
  "board": "tv"
},
{
  "text": "Blacked, Harry Potter, Avengers, No Country For Old Men, Little White Chicks Big Black Dicks vol 4,",
  "board": "tv"
},
{
  "text": ">listen to soundcloud rappers\nbbc whore",
  "board": "tv"
},
{
  "text": "your girlfriend sounds like an uncultured slut",
  "board": "tv"
},
{
  "text": "/mu/ is such pretensious trash. try hard much>?",
  "board": "tv"
},
{
  "text": "You know if it wasn't this faggot's sperg moment about Thanos killing his green nigger GF, Tony and peter would have been able to get the Gauntlet off of Thanos and this movie would have been cut short by a lot\n\nbut no he had to ruin everything for the Avengers because of green pussy",
  "board": "tv"
},
{
  "text": "infinite is not a number",
  "board": "tv"
},
{
  "text": "anon please dont give marvel ideas",
  "board": "tv"
},
{
  "text": "*Avengers 4",
  "board": "tv"
},
{
  "text": "reddit does it again",
  "board": "tv"
},
{
  "text": ">tfw villains were more competent than the heroes the movie\n\nIf it wasn't for black widow plot armor, mind gem should have been taken earlier.",
  "board": "tv"
},{
  "text": "is it possible to sharpen a stainless steel sword into a home-defense claymore?\n\nif so how?",
  "board": "k"
},
{
  "text": "Don't\nStainless steel is too brittle for longsword blades, you can get hair poppin sharp but as soon as you try to cut water bottles and archery targets in your driveway it'll fucking shatter, that is if the blade will even stay in the handle that long.",
  "board": "k"
},
{
  "text": "You don't want stainless in a katana either\nI'll translate into weeaboo for you\nGrorious nippon brade musta be carbon steeru.",
  "board": "k"
},
{
  "text": "Are you retarded? You position yourself on the draw bridge over your moat, obviously. Plenty of space to swing it.",
  "board": "k"
},
{
  "text": ">groin to shoulder\nWhat, on the upswing? Sounds like a pretty advanced technique to me.",
  "board": "k"
},
{
  "text": "Don't ever insult the Gaels by calling that trash a claymore.",
  "board": "k"
},
{
  "text": "Post guns with holsters, saddle bags, scabbords, caddies, cartridge belts, and stock wraps. \nKnives snd sheaths also welcome, maybe even an axe or two.\n\nLooking for that aesthetic",
  "board": "k"
},
{
  "text": "Thanks!",
  "board": "k"
},
{
  "text": "This was from a kit but I did the tooling. El Patron inside.",
  "board": "k"
},
{
  "text": "She's sexy m8, do you walk around your house with it on for no reason sometimes?",
  "board": "k"
},
{
  "text": "If you do you better be naked save the belt, riding boots, and sunglasses.",
  "board": "k"
},
{
  "text": "The hammer would have to be back. 1911s are SAO so even if you did fat finger the trigger you couldn't do shit until you pull the hammer back.",
  "board": "k"
},
{
  "text": "what's the most fucked up thing you've ever seen in the military?\n\n",
  "board": "k"
},
{
  "text": "It's a tale as old as time. Man yell woman cry. Woman think she man? Man yell woman still cry.\n\nI don't see anything unordinary or cruel in any of it. The warriors that defend your nation should be impervious to yelling. People that decry this type of behavior must think they live in a utopia where the need for primitive violence, sacrifice, and hard decisions doesn't exist.",
  "board": "k"
},
{
  "text": "One of my instructors beer fined (had to buy him a 6pack) me after a bad landing. I guess that's the closest thing to \"hazing\" in naval aviation in today's navy.",
  "board": "k"
},
{
  "text": ">Also, I fly MQ9S and I see shit that haunts me on a regular goddamned basis.\n\nKEK",
  "board": "k"
},
{
  "text": ">he spelt Court Martial wrong",
  "board": "k"
},
{
  "text": ">2017",
  "board": "k"
},
{
  "text": "Post PCCs. Compare who has the best subgun denial syndrome",
  "board": "k"
},
{
  "text": ">expensive means quality\n>cheap means junk\n>\"made in america\" actually means something and isn't just marketing for gullible republicans\n\nlearn how to shop, retard",
  "board": "k"
},
{
  "text": "it is the Polish response to the Uzi and the Skorpion. It is the Glauberyt SMG",
  "board": "k"
},
{
  "text": "related",
  "board": "k"
},
{
  "text": "This. And my question for\n\n\nHow's the decibel level respective to everything not exiting at the crown? Can you get that granular, even? If so, will it render\n\nthis a moot point?",
  "board": "k"
},
{
  "text": "Realized I could go space gun on my AR9 today.",
  "board": "k"
},
{
  "text": "Innawoods thread",
  "board": "k"
},
{
  "text": "Kek",
  "board": "k"
},
{
  "text": "DO NOT summon the undertale fags",
  "board": "k"
},
{
  "text": "I actually had a dream about a sexy sapient deer last night. Didn't fuck it though.",
  "board": "k"
},
{
  "text": "What was life like for NVA soldiers?",
  "board": "k"
},
{
  "text": "That is an unusually fitting comparison.",
  "board": "k"
},
{
  "text": "Vietnamese people don't really hate Americans. They hate China and the Chinese more. Americans were only there for a few years. The Chinese have been their enemies for hundreds of years. This is why the Vietnamese people are quick to be friendly with the US again.",
  "board": "k"
},
{
  "text": ">Also hot damn is Vietnam still using Pith Helmits and chicom rigs?\nFor the last few years they've been working with military modernization.",
  "board": "k"
},
{
  "text": "Hot",
  "board": "k"
},
{
  "text": "Also remainder that anybody who was anybody to the communists didn’t have to go.\nRelated to Le Duan or any of his cronies? Go take a vacation in the Soviet Union for a few years, only the poor rice farmers are sent to the south to be burned alive by napalm.",
  "board": "k"
},
{
  "text": "So /k/, it is said that imitation is the sincerest form of flattery. It is also said that the M-16 and it's derivatives are the best service rifles in use. If both of these statements are true, then why hasn't the gas operating system invented by Stoner for the AR-15 been copied by other manufacturers?\nArguably, the AR-18 has been more influential to firearms development since the 60's. Even Kalashnikov's operating system has been copied or emulated more than that of the AR-15.\nIs it because of patent restrictions, inferior performance, or what?",
  "board": "k"
},
{
  "text": ">patent restrictions\nUS patents typically last 20 years",
  "board": "k"
},
{
  "text": "Because the benefits of such a system are lost on rifles that are not ARs. DI is intended to help keep the recoil in a straight line directly into the shooter's shoulder.",
  "board": "k"
},
{
  "text": "I would argue that copying just the gas system would be stupid, when literally everyone makes a full on fucking AR-15 these days. So they didn't take this bit from that gun and this bit from that one to cobble together a more effective design. They just took the whole thing and went \"I maked this\".",
  "board": "k"
},
{
  "text": ">then why hasn't the gas operating system invented by Stoner for the AR-15 been copied by other manufacturers?\nBecause Daddy USA has a shitton of military aid and small arms to supply third world nations and poorfag NATO countries with their DI rifles",
  "board": "k"
},
{
  "text": "Elaborate on this? Short-stroke piston has all the same problems and none of the benefits. Long-stroke piston has different benefits and different problems. So what would you suggest? Get off your ass and invent something better if you're so smart",
  "board": "k"
},
{
  "text": "ITT: childhood /k/ and /k/ characters",
  "board": "k"
},
{
  "text": "Ayyyy, nigga please. Clone Wars is still the best star wars in my opinion.\n\nThe show is anyway. The movie sucked fucking donkey balls. I'll never not hold a grudge for Disney shutting it down.",
  "board": "k"
},
{
  "text": "Shame the franchise had such a shit ending.",
  "board": "k"
},
{
  "text": "Yet another former CoDkiddie.\n>I'm an autistic fuck\nNah. Real autists don't play normie FPS.",
  "board": "k"
},
{
  "text": "F; was a good soldier and didn't afraid of anything.",
  "board": "k"
},
{
  "text": ">he pack a gun\nThis is a nice fucking reference. My Dad raised us on these, and we still fucking quote that line.",
  "board": "k"
},
{
  "text": "Would /k/ buy a modern En Bloc rifle? One that takes Garand clips and sells for under 600 I'm planning on making a more modern take on the Garand for .308 as a scout rifle or a good rifle for cucked states like California",
  "board": "k"
},
{
  "text": "Haha. nope. Though I used to post on Calguns.",
  "board": "k"
},
{
  "text": "Then you are Red Hat. Being afraid to post the pics makes it more fun to find out",
  "board": "k"
},
{
  "text": "All autism aside I feel like it could actually make sense. AR18 style action with piston on side, open top with dust cover, brass deflected to side when fired, 10 round clips that are easily stuck together, so you can reload 20 at once faster than a mag change. Would require some thought on how those clips would actually work but it could be done.",
  "board": "k"
},
{
  "text": ">Stacked enblock clips\nWhen you *PING* but still have 10 in the clip\n\nAbsolute mad man, loving this.",
  "board": "k"
},
{
  "text": "For the time being box magazine rifles are still legal. If that changes anyone with an M1A or Mini-14 can still run stripper clips with a detach mag conversion kit on the sly.\n\nThere is a magazine for fixed mag ARs now that lets you reload it from the side, but that's not exactly an en bloc system.\n",
  "board": "k"
},
{
  "text": "Thoughts on aluminum case ammo? What are the pros and cons vs brass and steel case ammo?",
  "board": "k"
},
{
  "text": "I keep aluminum case ammo in my carry gun because it is lighter. a lighter gun draws faster.\n\nyes you can have lighter bullets but when you change bullet weight you change terminal performance.\n\naluminum case is weight savings with the exact same function.\ndesu i have only fired 2-300 rounds of aluminum, blazer and federal with no issues so its not like ive done a 10000 round torture test but it works for me. \nnot only is the gun lighter but it will change the weight distribution of the gun away from the grip and towards the muzzle which i personally prefer, also why i carry a polymer frame handgun is i prefer the balance of the gun to be a bit forward to reduce muzzle rise.",
  "board": "k"
},
{
  "text": "Are you really saving that much money going for steel or aluminum cased. I can buy 100 rounds of 9mm brass cases for around 18 dollars every day locally. If I go aluminum I might save a dollar or less. If I’m going bulk I might save 30-40 bucks on a case of 1000 going with steel. Really not worth it at that point.",
  "board": "k"
},
{
  "text": "Why in God's name would you carry cheap FMJ target loads in a concealed carry gun? A .40, no less. You've got a lot of learning to do.",
  "board": "k"
},
{
  "text": ">fires 200rnds to vet a carry piece\n>carries cheap range ammo FMJ\n>opts for aluminum cased rounds for the weight savings, pointability, and recoil reduction\nI can only hope these decisions come to bite you in the ass. It'd help clean the gene pool up a little.",
  "board": "k"
},
{
  "text": "Holy shit, go sell your guns. You are not fit to carry.",
  "board": "k"
},
{
  "text": "This thread is for writing /k/ related stuff and the recommendation of books that are /k/ related\n\nGive thanks to Polybius, Archivefag and BumpAnon for keeping /wfg/ afloat.\n\n>It's been unscientifically proven that a lack of (you)s for writers can lead depression, alcoholism, story abandonment, and an hero.\n\n>But it's so easy to make a difference in a writer's life. Just one (you) a day can make the difference between a happy writer and a writer on permanent hiatus.\n\n>Please, post now. Help make a writer's day.\n\nA2fag\nUntiled AR healing: Anon gets on a gunshow a bonafide 80s gun and helps her back\nFake Russian The\nGun runners: A team helps 'geists get away from the states that have heavy prohibitions on them",
  "board": "k"
},
{
  "text": "Does anyone remember that one anon who wrote in the thread (assumingly) about the apocalypse and his turn from Mr. Rogers into the Governor? It was about a year ago",
  "board": "k"
},
{
  "text": "I need this camo. Time to google.",
  "board": "k"
},
{
  "text": "I got you.",
  "board": "k"
},
{
  "text": "Update: \nSpoiler: everybody dies*\n\nAlso, if I self publish I'm probably using this cover but I've started querying literary agents so hopefully it never becomes necessary. Also, on the subject of literary agents, do you guys think I have a shadow of a chance of being picked up by an agent and a publisher? People on this board like it, and some of others have told me its good, but I worry people are just humoring me. \n*eventually",
  "board": "k"
},
{
  "text": "i'll keep working! thanks for the kind words!",
  "board": "k"
},
{
  "text": "Page 10 Edition\n\nPastebin for Helpful Tips/Buyers Guide:\n\nShooting Guide:\n\nDiscord Link: \nOld Thread:",
  "board": "k"
},
{
  "text": "new fag\n+p?",
  "board": "k"
},
{
  "text": "probably larger diameter?\nmore stopping power prefered. is there a source where i can learn more about bullets?",
  "board": "k"
},
{
  "text": "+P means that the cartridge is overpressured.",
  "board": "k"
},
{
  "text": ".14 WMR #XxX+++[P]+++XxX#",
  "board": "k"
},
{
  "text": "probably larger diameter?\nmore stopping power prefered. is there a source where i can learn more about bullets?",
  "board": "k"
},
{
  "text": "Tennessee fags check in.\nEast Tennessee master race.",
  "board": "k"
},
{
  "text": "Yeah, works best financially, oddly enough. Working at a restaurant over the summer and taking a class I had to drop in the spring. How about yourself?",
  "board": "k"
},
{
  "text": "Maryville here.\nlife is good.",
  "board": "k"
},
{
  "text": "Another Maryville reporting in.\n\nFather?",
  "board": "k"
},
{
  "text": "Hey I’m in the boro too. It’s comfy here",
  "board": "k"
},
{
  "text": "i'm originally from out of state, living off highway 70 going towards montery",
  "board": "k"
},
{
  "text": "Using only quotes from spongebob describe guns",
  "board": "k"
},
{
  "text": "Underrated post",
  "board": "k"
},
{
  "text": "is this RWBY?",
  "board": "k"
},
{
  "text": "IT WAS BIG\nIT WAS ALL WiGgLY\nAND IT ATE EVERYTHING",
  "board": "k"
},
{
  "text": ">It feels like somebody...WANTS TO SELL ME SOMETHING",
  "board": "k"
},
{
  "text": "So who here has \"Militia\" friends that are full of shit? Fat, lazy, unskilled, and practically dripping with the Dunning-Kruger effect and macho posturing. With the kinds of weaponry available to American civilians, these guys get hung up on cheap 90's milsurp gun fads instead. \"My SKS is good enough!\" they say, lacking a complete understanding of fire superiority and continuity of fire. If its all you got, its all you got, but these guys put the fucking things on a god damn pedestal. No knowledge of even basic fire and maneuver tactics, if they did, they would quickly ditch those things. They remind me so much of the webm at that /k/ rally. Guns draw some of the worst kinds of people to them. I feel that most of these militia types care more about playing dress-up with camo and buying into some fantasy that lets them blow money on stupid shit rather than actually readying themselves to fight for a cause. Anyone have janky militia stories or know similar people? How wide spread is this shit? Pic related, a self proclaimed militia man in better condition than most.",
  "board": "k"
},
{
  "text": "Most militias are on the same capability level as European special forces.",
  "board": "k"
},
{
  "text": "I live in the PA backwoods bud. \n\nThat’s all we got.",
  "board": "k"
},
{
  "text": "Abloobloobloo, they have friends and guns and I don't: The Post",
  "board": "k"
},
{
  "text": "I used to live in a small town, the local white collar guys (still country white trash) got together for \"militia\" meetings. Most were fat and compensating and just wanted to get away from their wives. Everyone knew the blue collar guys were the real militia if anything happened. A couple of the guys who worked at the mechanics shop supposedly had some fully automatic weapons.",
  "board": "k"
},{
  "text": ">loses lemans this year\n>president fired for touching children\n>can't afford to build anymore cars\n>gets raped by ZR1 at VIR\n\npffffffthahahahahaha",
  "board": "o"
},
{
  "text": ">GM still loses at Le Mans",
  "board": "o"
},
{
  "text": "This",
  "board": "o"
},
{
  "text": "He went straight into the wall",
  "board": "o"
},
{
  "text": "I'm wondering if anyone here knows why those cars changed since the first year.",
  "board": "o"
},
{
  "text": "I'm so confused. How did this happen? There's one right in front of him going what looks to be the same speed.",
  "board": "o"
},
{
  "text": "and I fucking like it without the spoiler",
  "board": "o"
},
{
  "text": "if only it had a 2GR.\nIt's just a gutless, overpriced shitheap as is",
  "board": "o"
},
{
  "text": "Me and my Cayman S don't need this shit\nbut thx.",
  "board": "o"
},
{
  "text": "It's a comfy dd that gets decent mileage and can corner \nBuying it for anything else makes you a colossal faggot",
  "board": "o"
},
{
  "text": "The torque dip is so bad like holy shit.",
  "board": "o"
},
{
  "text": ">modern looks\n\nTheres the issue right there. Its fugly.",
  "board": "o"
},
{
  "text": "Let's have a thread for little-known stock parts interchange facts. I'll start:\n>The ECU from the 3G manual 2.4L Eclipse is identical to the ECU from the Evo 8. Pick one up from any junkyard for $20 instead of $300 from eBay. \n>Also, you can use it to control pretty much any medium-displacement 4 cylinder engine. It's perfect for a turbo BP, KA24, 4A, 420A, etc. You can also use the Montero/Outlander ECU to control a 6 cylinder engine. For maximum jankiness, hook up two 4 cylinder ECUs to control a single V8. Connect each ECU to the two outside cylinders from one bank and the two inside cylinders from the other.\n>The KA24 is just a bored and stroked L20B with a fancy dual cam head. You can bolt an engine (or just a head, manifolds, and pistons) from a 240SX or Frontier onto an old 510 for an easy 50 horsepower gain. You'll have to bend the shifter if you swap a whole engine since the L-series mounts at an angle and the KA doesn't\n>You can also find dual cam heads for Mitsubishi 4G6* equipped cars and trucks on early 2000s Hyundais.\n>The RX-7 Turbo II, B2600, and F-150 share a transmission. The bellhousings interchange so you can easily swap a 13B, 4G63 (wideblock), or SBF between the three chassis.\n>All other Mazda trucks use the same transmission as the NA FC, and NA/NB Miata\n>The S15, NB Miata, RX-8, and IS200 share a 6 speed transmission. Pay attention to input shaft lengths when swapping bell housings. The FR-S and S2000 may or may not interchange some parts with the others, as well.\n>Nissan 71-series transmissions interchange bellhousings. This includes RWD transmissions attached to the L, U, R, Z, CA, SR, VG, and RB (non-turbo) engines.",
  "board": "o"
},
{
  "text": "If you want a manual behind your ls engine and dont want to pay crazy boomer prices for T56 trans, you can find an NV3500 5 speed transmission behind almost any manual jeeps between 2000 to 2004 and Silverado/Sierra between 93 to 06 and 93 to 03 S10s. Jeeps have removable bell housings so you can put them on just about any swap",
  "board": "o"
},
{
  "text": "Are there any difference between the Jeep/s10 and full size trucks trans? A lot of manufacturers had a light duty model and HD model",
  "board": "o"
},
{
  "text": "They're all the same im not sure about the ones in the heavy duty silverados/sierras the bell housing is different between the jeeps and GM cars but jeep belhousing unbolts",
  "board": "o"
},
{
  "text": "While it would work, it's not a good plan. The Silverado/Sierra version of the transmission is incredibly rare.\nIt's literally easier to get a T56.",
  "board": "o"
},
{
  "text": "some of your info is partially incorrect. the 240sx and frontier heads are different in the distributor orientation and drive mechanism. the 240sx dizzy is driven by cam gear and the frontier is driven by the oil pump at a 65ish degree cant through the timing cover. there are several differences in timing covers from all the ka24 variants. also the frontier ka24 is a single cam block with DOHC head. to install a frontier ka24 in a 240 or vice-versa you would need to be VERY desperate. the 71 series transmissions weren't available to my knowledge on any VG platform. the vg20 variant that we never got MAY be an exception but I've never seen proof nor has anyone cared. early 71 series needs major part swapping to equip to later 71c equipped cars and then there are strength concerns with the smaller countershaft bearing. this is the extent of my personal experience with these platforms.",
  "board": "o"
},
{
  "text": "I need a new car that will be primarily a work car, so I'm more interested in gas mileage and reliability more that anything else. \n\nI'm gonna be buying new and will have about 10k to put down. I'm kinda settled on these two but open for other options and pros and cons between the ford fusion and toyota camry.\nthanks",
  "board": "o"
},
{
  "text": "I was leaning more towards the camry based on the better gas mileage and overall look. I just wanted to see if anyone felt strongly on the fusion.",
  "board": "o"
},
{
  "text": "I like the fusions but you need to test drive both",
  "board": "o"
},
{
  "text": "From what I've heard, the Fusion is a good car by it's own merits, just not as good as the Camry or Accord. Personally, I think Camry is the way to go, but keep in mind that they depreciate like hell because they're so popular. You can get 2016 Camrys for like $15k with less than 50k miles on them. Also, look into the Mazda6 and Buick's sedans. Buicks are probably the most reliable out of any domestic brand and Toyota is the most reliable in general.",
  "board": "o"
},
{
  "text": "yeah, i feel the same way. I should have said this is gonna be a permanent ride thats never getting sold. I like the mazda's too.",
  "board": "o"
},
{
  "text": "Fusion with the 2.7 ecoboost is a hoot, but if you’re not going to get that or AWD, just get the Camry.",
  "board": "o"
},
{
  "text": ">Cars that aren't wagons",
  "board": "o"
},
{
  "text": ">cars",
  "board": "o"
},
{
  "text": ">going anywhere near a station wagon post-1983",
  "board": "o"
},
{
  "text": "is it a fast wagon?\n\nis it\n\na SPEEEEEEEDWAGOHWNN",
  "board": "o"
},
{
  "text": "Which would you go with? Why?",
  "board": "o"
},
{
  "text": "It was the 80s, mattell gifted a kilo of coke and they were square",
  "board": "o"
},
{
  "text": "If you drive both you'll end up with a miata",
  "board": "o"
},
{
  "text": ">ferd\n>ever\nIt’s a slow pile of shit with a maaco tier paintjob. Ultimate fagmobile",
  "board": "o"
},
{
  "text": "see",
  "board": "o"
},
{
  "text": "How to tell someone is mad that their life is shit 101",
  "board": "o"
},
{
  "text": "What does /o/ think of these",
  "board": "o"
},
{
  "text": "Decent drivers with a Subaru swap. Syncro models are impressive offroaders, Westfailia (campers) are neat if you're into that.",
  "board": "o"
},
{
  "text": "thats a $15k vehicle in my neck of the woods.",
  "board": "o"
},
{
  "text": "Some that need some work go for for about 5k I’m my area.",
  "board": "o"
},
{
  "text": "This is how you fix the FRS",
  "board": "o"
},
{
  "text": ">shitty engines\n2/10 made me reply",
  "board": "o"
},
{
  "text": "i like it, but youve basically just made a bigger s2k",
  "board": "o"
},
{
  "text": ">KILL MEEEEEEEEE",
  "board": "o"
},
{
  "text": "What? The un-dressed engine alone is 2500. For a shit one. The engine with all components and tranny is 5500.",
  "board": "o"
},
{
  "text": "a k24a longblock is only $550 from most importers.",
  "board": "o"
},
{
  "text": "Considering buying a used 2005 Pontiac Grand Prix GXP. Anything to watch out for?\n\nAlso, does the LS4 engine run fine on regular gas? I'm in Canada and the differential here is around 15 cents a litre between regular and premium. I was able to find an 06 manual which said you CAN run 87 octane but experience decreased acceleration/possible slight knocking(!).",
  "board": "o"
},
{
  "text": "Starting in 06 GM started taking bribe money from the oil companies, which is why the 06 manual recommended the premium gas.\n\n05 and older models run on regular just fine.",
  "board": "o"
},
{
  "text": "You can run any modern vehicle on whatever fuel you want. Sensors will de-tune the engine in 99.995% of cases to run.\n\nYou'll likely experience reduced power and worse economy as the engine compensates, but that's it.\n\nBeware of MPG changes nullifying any cost savings from the less expensive fuel. Keep a chart of hand calcs and run a few tanks of each before you decide whole-heartedly to run one or the other.",
  "board": "o"
},
{
  "text": "Look for rust in typical areas around the wheel wells, rocker panels, trunk lid, etc.\nPontiacs in general are known for wiring issues, so test all the switches and optional equipment for functionality. The 5.3 is generally a bulletproof motor, but the transmissions are a bit weak for a car with this weight and hp. That'd be my biggest concern.",
  "board": "o"
},
{
  "text": "Thanks lads. How does one go about checking the transmission?\n\n>hard/soft acceleration during test drive\n>check dipstick for colour/smell\n\nAm I missing anything here? First time buyer here.",
  "board": "o"
},
{
  "text": "You'll be fine on 87 fue\n\n>Anything to watch out for?\nThe transmission. They are KNOWN for blowing them, especially if it's been beaten on.",
  "board": "o"
},
{
  "text": "What (regular) car would you convert into a racer?\nThat means rendering it completely impractical as a daily driver, no seats, roll bar, loud exhaust, no a/c etc.\nI would do a ford mustang because the sight of a mustang with a huge wing and canards is really nice in my eyes\nAnd stuff like the 911 GT3 RS doesnt count",
  "board": "o"
},
{
  "text": "1985 ford ranger",
  "board": "o"
},
{
  "text": "/thread",
  "board": "o"
},
{
  "text": "twingo\nmiata nd\nfucking anything desu, all cars are cool when you racecar the shit out of them\n\nalso id still daily it im not a pussy ass boomer",
  "board": "o"
},
{
  "text": "what do i have to google to learn more about the car with the massive wang and boobies on it",
  "board": "o"
},
{
  "text": "Turd gen, but not for drag strip. \nI'd love to see someone make a canturn 3rd gen camaro",
  "board": "o"
},
{
  "text": "How would you save Cadillac? Or is that an impossible task after decades of c-suite stupidity?",
  "board": "o"
},
{
  "text": "doubt, unless they want to hurt marketing in China.",
  "board": "o"
},
{
  "text": ">Consumers want good cars. Cadillac can make good cars\nThen why not just buy ATS-V or CTS-V right now? Not used ones cuz the money will not go to GM - A big sign that Cadillac remains a major failure. You refuse? Then GM has a reason to scrap them cuz of you.",
  "board": "o"
},
{
  "text": "Make giant land yachts and make the fins larer than ever before",
  "board": "o"
},
{
  "text": ">stop selling Buick outside of China. It just eats Cadillac's marketshare\nBut does it though? It's entirely possible, if not probable, that the person buying a Buick specifically didn't want a Caddy because of the baggage Cadillac carries with it.",
  "board": "o"
},
{
  "text": "I think this might do it. Seriously. Cadillac was all about bling and unrestrained opulence. They're too subdued now, they don't stand out. If I wanted understated luxury, I'd go with Benz or BMW. It's pretty much the same price point, at better quality. Cadillac was dead last on reliability in Consumer Reports last year.\n\nThey don't stand out amongst their competitors, and they're badly built. Who in their right mind, who isn't 60+ yrs old, would by a Cadillac?",
  "board": "o"
},
{
  "text": ">give rides to qt girl from work since it's on my way home\n>hope everyone at stoplights think that she's my gf\n\ni-i-im not the only one who does this right?",
  "board": "o"
},
{
  "text": "fucking p platers",
  "board": "o"
},
{
  "text": "My little sister pretty much only listens to Eurobeat and has one of those eurobeat stickers on her WRX. She’s an initiald weebfag though.",
  "board": "o"
},
{
  "text": "Just say you're using a race-spec clutch for trackdays",
  "board": "o"
},
{
  "text": "Is she cute?",
  "board": "o"
},
{
  "text": "Yeah I guess",
  "board": "o"
},
{
  "text": "How the fuck do you take off from a stop in a 4 cylinder car. I learned how to drive on an old diesel pickup and my first \"car\" was a handed down mustang but it still had enough torque to take off without the gas. The only way I figured out how to get this weak little four banger to get moving is basically just slipping the clutch which I'm sure is awful for it. Give it too much gas and you look like a tool, but let the clutch out too fast and it dies on the spot.",
  "board": "o"
},
{
  "text": "Hard edges are not child friendly. There are laws governing children's toys for a reason.",
  "board": "o"
},
{
  "text": "I can take off without gas in my 1.8l NA car.\nBe more smooth with inputs.",
  "board": "o"
},
{
  "text": "Give it some gas and learn to clutch control, you ham-fisted americunt.",
  "board": "o"
},
{
  "text": "the dial is for wash temp",
  "board": "o"
},
{
  "text": ">tfw 540Nm at 2100rpm in my 2 liter 4cyl.\nI literally drive off with zero throttle and sometimes even at 400RPM though 800RPM is optimal.",
  "board": "o"
},
{
  "text": "No craigslist thread? Shame on you /o/.\n\nI'll start\n\nAlmost $9,000 dollars for a 1998 Ford Exploder with almost 200k on the dash.\n\nFeaturing a cold air intake and designed by F O R D R A C I N G",
  "board": "o"
},
{
  "text": "What's your budget?",
  "board": "o"
},
{
  "text": "since I'm poor, I'm thinking around $2000. I can save up later to fix other non critical mechanical things.",
  "board": "o"
},
{
  "text": ">old people keep cars clean, easy to do business with & very fair on price\n>middle aged people are greedy, too stubborn to haggle and their cars always has something wrong with them that they aren't being honest with\n>people in their 20's are like middle aged people but the cars are in even worse condition \nFlorida must be a really good state to buy used vehicles privately.",
  "board": "o"
},
{
  "text": ">What do ?",
  "board": "o"
},
{
  "text": ">1k for a probe \nit will probably cost that much to just keep it on the road",
  "board": "o"
},
{
  "text": "*jobs in the UK for years before becoming a cripple in his 20s*",
  "board": "o"
},
{
  "text": ">not one of these slices of heaven\nThey have a completely flat floor and are very easy to convert for wheelchair access. They were one of the most popular cars with the disabled for years.",
  "board": "o"
},
{
  "text": "Cars at the time aren't ICE anymore. He's either will be driving a Prious or a Mirai.",
  "board": "o"
},
{
  "text": "We don't have Prius in Britain",
  "board": "o"
},
{
  "text": "I meant on current MFG timeline.",
  "board": "o"
},
{
  "text": "We do, but it's also irrelevant because MF Ghost takes place in Japan.",
  "board": "o"
},{
  "text": "I had a dog who died of severe epilepsy when he was four years old, it was a nightmare and brutal for everyone. It started off once every three months 20 seconds seizes until it was down to 2, 2 minute seizures in a row. It killed him. I've mourned and I've cried about it for months and I've gone on with my life as I have the ability to, in my dreams he's stayed for the last three years. I wake up crying some times even though I haven't though about him for a week, I have this dream where he's an old boy laying on my side when I'm just day-dreaming or resting, but he's on my side and his fur is old and scruffy, he's just my old boy laying there and we're just hanging out like he never died so young. I have this dream multiple times a weak, his face is shaking a little bit but he's looking at me in the eyes and that's it. He died when he was a young dog, he had many years ahead of him yet all of the dreams that I have of him is him being an old boy on my side. I don't want to keep on thinking about him, It's being forced on me and I don't know why, I have no choice but to think about him and mourn again as it's in my dreams. How do I stop thinking about my boy?",
  "board": "an"
},
{
  "text": "Nothing wrong with being sad. If you realize that you'll probably sleep better. Sounds like a beautiful dream though.",
  "board": "an"
},
{
  "text": "I still have dreams of pets that died 15+ years ago. \nUsually it's just them, happy to see me. But every goddamn time something horrific starts happening to them like dissolving, getting mutilated and murdered. If they're not in my hands, something is preventing me from reaching them. \nShit sucks and it's not like I even think about them often at all. \n\nAt this point I can wake myself up before the horror happens and while it's sad to be reminded, being able to feel like they are really there, touch them and it just feeling so real is almost nice, like I got to see them again. Wish I could realize it was a dream so I could say goodbye.",
  "board": "an"
},
{
  "text": "Are you undergoing a lot of stress in your life right now",
  "board": "an"
},
{
  "text": "I've had it occur between moments of happiness and sadness in my life, it doesn't seem to be caused by anything.\n\n\nI get what you're saying, maybe I should look at it different, maybe I'm being too negative.\n\n\nIt must mean it's a subconscious thing, right, or maybe not, I questioned whether it means something hasn't been done yet or concluded/given closure to, but, I feel like all the boxes have been checked. \n\nThat's really tough, such a harsh dream. You must be mentally strong to go through all of that for so long, I get that it's a dream but it feels emotionally real as anything else when it's happening.",
  "board": "an"
},
{
  "text": "He wants you to know that he loves and misses you. He'll leave your mind when he's ready",
  "board": "an"
},
{
  "text": "Hey /an/ons I'm going to be making a project about pitbulls that will spread the awareness.\nCan you help?",
  "board": "an"
},
{
  "text": "Only if it gets the shitty breed and it's nigger owners gassed",
  "board": "an"
},
{
  "text": "Go on",
  "board": "an"
},
{
  "text": "awareness of what?",
  "board": "an"
},
{
  "text": "EL OWNBLINO",
  "board": "an"
},
{
  "text": "of pitbulls being disproportionately violent",
  "board": "an"
},
{
  "text": "Is it just me, or are people far too lenient with their dogs?",
  "board": "an"
},
{
  "text": "fuck, someone threw out a good chicken",
  "board": "an"
},
{
  "text": "Which dogs?\nIf its shitbulls, they yes",
  "board": "an"
},
{
  "text": ">Sister's baby is just starting to walk\n>Enters house with nuggets\n>Doggo runs right up to him and steals the nugget right out of his hand\n\nIt just clicked bros, all the dog haters on this board are the proverbial child who had their nuggets stolen (or muslims LMAO). It all makes sense now.",
  "board": "an"
},
{
  "text": "can confirm goat horns don't do shit from the back\nt. muslim",
  "board": "an"
},
{
  "text": "Why would you let your child walk around with poop in their hands? Or is nugget American slang for something else? Disgusting",
  "board": "an"
},
{
  "text": "Nugget as in chicken nugget probably",
  "board": "an"
},
{
  "text": ">all the dog haters on this board\ngive me 3(three) examples",
  "board": "an"
},
{
  "text": "There's more muh toxo fags here",
  "board": "an"
},
{
  "text": "Anyone have advice on taking cats for long car rides? We are planning on staying at hotels as we drive to Fargo.\n\nThe cats: Kiara: young female, has a lot of experience with car travel and has previously traveled from NV to KS just fine. Used litterbox in car and has never peed on car carpet. Shakey: elder female, has a little experience in the car, but doesn't freak out too bad. Has previously peed in my car, but did not have access to a litterbox\n\nI'm thinking of getting a tarp and putting it on the car seats/floor or some kind of plastic to prevent Shakey from peeing. Last time the smell was horrid.\n\nWould appreciate any help! I want this trip to be as painless as possible for them and would rather Shakey not be cooped up in a cage while Kiara gets to hang out wherever she wants. Thanks in advance!",
  "board": "an"
},
{
  "text": "Fell off the first page. Bump!",
  "board": "an"
},
{
  "text": "Bump",
  "board": "an"
},
{
  "text": "previous thread \n\nReptile classifieds for finding breeders of various scaled and sundry creatures\n\n>kingsnake.com\n>faunaclassifieds.com\n>reptilescanada.com (Canadian breeders)\n>caudata.org for newts, salamanders and lots more amphibians\n>Also check to see if there are any annual reptile shows/expos in your area as these are good places to find good animals from good breeders at partial discount\n\n\n/herp/ officially official all purpose care sheet of wonder and magic\n\n>sand a shit\n>use a thermostat",
  "board": "an"
},
{
  "text": "true. you don't need to buy reptile specific. any halogen or incandescent will work for just heat purposes.in fact I recommend this as generic bulbs are a whole lot cheaper than ones labelled for herp use. Only need to buy special bulbs for UVB output.",
  "board": "an"
},
{
  "text": "Anyone know some real quality locales for herping in Australia?",
  "board": "an"
},
{
  "text": "I'm doing some research today into automatic misting systems, but any experience or insight into this would be greatly appreciated. Basically I will have a friend taking care of my crested geckers because I will be traveling for work a lot more to make more money, possibly only a few months possibly for awhile but I'd really rather not give up my geckers unless I really have to.\nIf anyone has any insight into making a crestie tank as self sustaining as possible with plants and humidity I am very interested. Thanks in advance! I am willing to invest some cash to keep them.",
  "board": "an"
},
{
  "text": "Mistking is the best auto mister. The geckos still need to be fed every second day so someone has to be around for that.",
  "board": "an"
},
{
  "text": "Thats literally the exact one I was just looking at. I have 3 geckos in 3 tanks so I'm hoping I can get away with the mistking starter at $130.\n\nAnd indeed, I prefer to feed my guys 2 days in a row and skip the third, especially in the warmer months when they eat more. The more responsibility I can automate the more patience my friend will have with taking care of them. Thanks for the response!",
  "board": "an"
},
{
  "text": ">my dog doesn't need training, because that's just too expensive to teach a simple sit\n>he doesn't need a crate, because crates are inhumane\n>crates are just for potty training, so why even bother buying one?\n>he doesn't need any corrections, training, or socializing because i'm treating my doggo with lots of love and cuddles\n>he has free reign of the house, and is allowed everywhere I go. I just tell people he's my ESA, and they can't do anything about it\n\nIf I just treat him with lots of love and cuddles, he'll become a perfect doggo. Besides, I grew up with dogs before and barking wildly and peeing inside is just what dogs do. It's like how cat owners house always smells like cat shit, because that is just how cats are.",
  "board": "an"
},
{
  "text": "I just got two cockatiels! \nHow do I get them to feel comfortable at home and like me?",
  "board": "an"
},
{
  "text": "That cage looks way too small for two cockatiels, and there's no toys in there. They're going to be bored out of their minds.",
  "board": "an"
},
{
  "text": "It is not too small if OP gets them tamed and allows them out for play time.",
  "board": "an"
},
{
  "text": "Be patient my man. They live for a long time, be nice and gentle with them and most importantly be consistent. They will come to like you just don't give up.",
  "board": "an"
},
{
  "text": "Clicker training is very good. Remember if you can click with your mouth you dont need to buy a clicker though.",
  "board": "an"
},
{
  "text": "It's way too small retard. Assuming Op lives like a self functional human, the birds will be in there at least 8 hours every day, that is torture. OP GET A BIGGER CAGE YOU PIECE OF SHIT",
  "board": "an"
},
{
  "text": "Why cant birds wait until like 9am before they start scream begging for some pussy?",
  "board": "an"
},
{
  "text": "Try having mocking birds around. \nThese fuckers are going 24/7 outside my window. They favor hawk screeching, sirens and car alarms more than any other 'song'.",
  "board": "an"
},
{
  "text": "They are trying to say your dumb ass it's healthier to go to sleep early and get up early.",
  "board": "an"
},
{
  "text": ">i hate birds cuz they wake me up at dawn\n\nThis is possibly the dumbest argument against birds that is ever put forth here or in any other place.",
  "board": "an"
},
{
  "text": "They're competing so its clear as day to start as early as possible. \n\nClose your window faggot, if bird sounds were waking me up i'd be living in an unusually considerate neighborhood.",
  "board": "an"
},
{
  "text": "soundproof your flat \nbuy a guitar \nrock hard\n???\nprofit",
  "board": "an"
},
{
  "text": "My friend insists that this fishbowl is clean.\nPlease talk some sense into him.",
  "board": "an"
},
{
  "text": "Full res pic\n\nFilter is in the center of the tank with the pump bellow the stand. It's a cold water tank so no need for a heater.\n\nThis\n\nThanks anon\n\nIt's a fish TANK. I know the pic doesn't look like it but it's a 60 liter tank\n\nI just cleaned it before the picture, now that the water has settled is looks a little better now.\nAnd thanks, it's a black dress with a white apron that fits pretty perfectly. I'll change my bed later maybe\n\nHey, there's only one bottle of water there. Next to it is fish food and water testers.\nWires are a bit of a mess though, too many consoles",
  "board": "an"
},
{
  "text": "Whoops",
  "board": "an"
},
{
  "text": "...",
  "board": "an"
},
{
  "text": "Whoever took this pic looks like its wearing a french maid costume",
  "board": "an"
},
{
  "text": "yes, my friend is known to do that",
  "board": "an"
},
{
  "text": "Okay /an/ this is my snake Caligula, he's a 3 year old Arizona King, for the past 3 months he hasn't eaten, and when I took him to the vet he had a respiratory infection.\nThey gave me the medicine and I shoot him every 3 days, but still he hasn't eaten.\nHe hasn't lost weight since I took him to the vet,(about a month ago now) but acts afraid of the frozen food.\nShould I try the zilla jump start? Or take him to the vet again? He shed three days ago and I thought after that he'd be hungry but still no luck.\n\nI love him like a dog and really need advice, Monday I'm gonna probably call the vet again and see what they say I was mainly wondering if I should try the Zilla stuff first.",
  "board": "an"
},
{
  "text": "have you tried braining a feeder yet?",
  "board": "an"
},
{
  "text": "Are you double checking all of your husbandry? Heat, cool, and humidity. Is he in an area with a lot of foot traffic. Have you tried feeding with lights off and away from windows. Is he being fed in another enclosure?",
  "board": "an"
},
{
  "text": "I have a sand boa who goes months without eating every year starting in early spring. I think he wants to fuck even more, poor guy. He just tries to escape. Hes 15 years old so hes getting desperate.",
  "board": "an"
},
{
  "text": "How do animals know to eat certain things for medicinal purposes, especially when it's not part of their natural diet? \nSuch as dogs eating grass when their stomach bothers them to induce vomitting without being taught to do it or herbivores eating meat to make up for something in their diet. \n\nFor chimps eating certain plants to get rid of parasites or elephants eating certain plants to induce labor I can understand but it seems something that would be learned from one another. Rolling in mud, moss and clay for wounds and parasites seems I can get too for any animal. It's immediately soothing so it wouldn't take much to figure out. \n\nEven wooly caterpillars will eat a specific plant to combat a parasitic fly.",
  "board": "an"
},
{
  "text": "I only saw them eating generic grass. That's for digestion. Good old cellular tissue to get that large intestine contracting and such.",
  "board": "an"
},
{
  "text": "I just finished making a new ecosphere when I noticed something swimming around innit. Pic related, that worm-like thing. I think they are nematodes. If they are, they have a chance in three of beeing parasitic ones. Could they infect me?",
  "board": "an"
},
{
  "text": "cant see shit",
  "board": "an"
},
{
  "text": "Hey guys can you ID this for me thanks",
  "board": "an"
},
{
  "text": "Sorry, my camera is shit",
  "board": "an"
},
{
  "text": "Detritus worm or one of the harmless nematodes. \nYou should still be wearing long gloves when working on your tank, but not just because of these.",
  "board": "an"
},
{
  "text": "Looks like a snibbedy",
  "board": "an"
},
{
  "text": "I've never in my life willingly owned a cat. The fuckers just show up crying at my door step and I feel too guilty not to feed them.",
  "board": "an"
},
{
  "text": "That's how I got mine as well.\n>tfw I'm a catfag by obligation\nI'm so sorry toxofags.",
  "board": "an"
},
{
  "text": "free food for based pet snake",
  "board": "an"
},
{
  "text": "Lel he got the toxo.",
  "board": "an"
},
{
  "text": "Its not toxo\nIt’s the love blossoming in your heart\nYou’re a cat fav now\nCongrats",
  "board": "an"
},
{
  "text": "If they don't shit on your door mat at least they are shedding on it. Stop enabling parasitism. You wouldn't give your money to a blue-faced drunkard would you? It's the fucking same. Spray some lemon oil near your door or something.",
  "board": "an"
},
{
  "text": "Did you like it, /an/imal lovers?",
  "board": "an"
},
{
  "text": "Intensely faggy post",
  "board": "an"
},
{
  "text": "It was really disappointing. And I watched it stoned.",
  "board": "an"
},
{
  "text": "It might not be. There are a lot of dumb regressive leftist women who are here on /an/.",
  "board": "an"
},
{
  "text": ">dogs raised and born in japan\n>somehow speak english and no japanese whatsoever\n>have voice of old white men, instead of any kind of japanese dialect",
  "board": "an"
},
{
  "text": "Look at all the triggered leftists here\nWes Anderson can do what the fuck he wants\nHe doesnt answer to underachievers like you",
  "board": "an"
},{
  "text": "Why doctors get so flustered with people self-diagnosing? How hard is it to do if you are not a brainlet? Can't you just follow a decently detailed flowchart or something? At least to rule out a specific disease, I shouldn't need to waste time and money with a doctor in the fucking internet era",
  "board": "sci"
},
{
  "text": "5th year med student here. They get mad, because normally people overdiagnose themselves and their logic because having symptoms is heavily flawed. We're trained first in the essentials like biology, biochemistry, anatomy and physiology then work our way up to the clinical sciences. Good doctors and diagnosticians normally know the basics very well and know why are you having said symptom. It's way beyond symptom=diagnosis. You also have to rule out other deseases when you diagnose. What you can do is give a detailed history of your symptoms, other conditions you have and family history, you have no idea how much this helps. And asking for a second oppinion is the most normal thing you can do and it's perfectly fine. I wouldn't be mad if one day a patient wanted one.",
  "board": "sci"
},
{
  "text": "You have to understand it's both the doctrors and the patients who are at fault. Doctors do have a \"muh authority\" mentality, because their training is very harsh and they feel you undermine all those years of suffering by thinking you can do what they do. The thing is though, many of them (if not most) aren't caught up on the latest research and most of them don't remember the biochem etc they learned in uni. They are in essence glorified pillpushers and butchers, but with the hours they work it's not like you can blame them.\n\nOn the other hand, you have really stupid people who don't possess any knowledge of biology or physiology, so they don't even understand what they read. And since the majority of the self-diagnose crowd are from that pool, its logical for doctors to get frustrated.",
  "board": "sci"
},
{
  "text": "He \"needs\" a doctor for purely bureaucratic reasons.",
  "board": "sci"
},
{
  "text": "doctors don’t like to have their delusions of grandeur shattered by the reminder that in 99.9% of cases their job can be done by a bright high school student with an internet connection",
  "board": "sci"
},
{
  "text": ">That said I think docs actually appreciate a calm effort to figure it out because if you can rationally provide clues of a suspected illness you make it easier.\nThis. A few years back I got strokelike symptoms (weakness on half of the body,) self-diagnosed a nitrous oxide induced acute B12 deficiency, and took B12 megadoses to treat it. I went to the ER anyway just in case I was wrong. MRI came back normal and they ran a blood test. Eventually the doctor came in with a confused look on his face\n>\"Well, your bloodwork was mostly normal, except for...\"\n>\"My elevated B12 levels?\"\nI gave him my \"diagnosis\" and history (which they were rushing around too much to take, I guess, other than allergies.) He looked taken aback, then grinned, agreed, said something like \"So you already diagnosed AND treated yourself. Not many patients would have figured that one out,\" gave me a two sentence lecture on why abusing nitrous is bad, but coming in for the MRI was the right thing to do, and discharged me.",
  "board": "sci"
},
{
  "text": ">three computers working in tandem with one another and before any decisions are made, two of the computers have to agre with one other.\nSounds familiar, my questions are:\nDoes such a system have a particular name? I'd like to do some research about that but google ain't really helpin.\nAlso, how can this be worth the collaboration of THREE COMPUTAS, like, if they get the same input, doesn't this imply that they will always get the same output? Unless some einstein added some stupid ass artificial complexity to comply MIT nerds like a strong AI or shit like that.\nNot like such a simple system will ever need something like that, I mean, a good system architect can manage to create a safe and functioning train network system as a human r-right?",
  "board": "sci"
},
{
  "text": "Space probes do this because cosmic rays can randomly flip bits and corrupt the program, so they have multiple copies of the hardware and independent copies of the software so if one half breaks the other half can detect it and initiate a sort of \"negotiation\" stage where they both perform diagnostics on each other and figure out which half is broken, then agree that the broken one has to restart fresh while the valid one takes over for a while",
  "board": "sci"
},
{
  "text": "The space shuttle had something like seven different computers running it.\nAll, of course, had error correction to catch bit-errors.\n\nSeven separate computers because computers do suffer hardware failure and they'd found (in flight simulators) that no human could land the shuttle unaided. Crashed every time.\n\nBut they also had software redundancy! The computers didn't share a common operating system and the programs were written by separate groups of programmers (not 7 sets, but maybe 2 or 3) who didn't talk to each other. Each solved the problems in their own way, making it unlikely that they'd ALL jam in the same situation. Think of having computers running Windows, Apple OS, and Linux.\n\nYou do not want to be re-entering atmosphere with plasma all around and the controls show the infamous BSOD (blue screen of death) with a recommendation you re-boot.",
  "board": "sci"
},
{
  "text": "A form of this is legitimately what we use in machine learning applications. It's called committee decision / ensemble, and helps get around the over fitting problem. boosted trees are one of my favorite classification application to run.\n\nBasically, instead of training a NN or CART to all the data, you create a bunch of different trees or NN, and show them only random partitions of the data. They are then all trained differently, and you have an ensemble of weak learners instead of one expertly trained tree or what have you. When you go to classify something, you input it into all of the trees, and they all come out with answers which may be different from each other. It's generally majority rule, and so whatever class the majority votes, is what the final classification will be.\n\nTurns out boosting/ensembles are waaaay better at generalized predictions (making predictions on data not previously seen before).",
  "board": "sci"
},
{
  "text": "That's cool anon. Hey I had a random idea, would this be helpful for boosted tree ensembles?\n\n>Make an ensemble of 7 different decision trees\n>Also make another decision tree that is used for deciding how to weight the value of the opinion of each tree in the ensemble\n>Its input is the same inputs as the other trees, and instead of outputting a score it instead outputs a score vector of size 7 telling you how to weight the opinion of each tree in the ensemble\nIs this a thing or is it dumb",
  "board": "sci"
},
{
  "text": "so 7 brainlet computers are better than 1 smartie",
  "board": "sci"
},
{
  "text": "Why do you guys hate CS majors so much? I see you talk a lot about CS majors who think they're geniuses but in reality they can't write FizzBuzz, but I've never seen anyone actually act that way on /sci/\n\nCan you point me to actual examples of CS majors acting like retards?\n\nCS is a great major and it will teach you the most important details of how computers work, down to the digital circuit level and up to the network protocol and OS level. What's wrong with that? It will also teach you the math required for analysis of algorithms and for implementing scalable systems\n\nWith a CS major you can find a great career and make tons of money, upwards of 6 figures with just a Bachelor's in CS.\n\nWhy do you hate it so much? Is it jealousy? Ignorance? Just a meme that's fun to post at this point?",
  "board": "sci"
},
{
  "text": ">CS majors acting like retards\nChrome. Specifically Google Chrome.",
  "board": "sci"
},
{
  "text": "...What?",
  "board": "sci"
},
{
  "text": "I share a study room with the cs majors. You're like talking memes irl.\n>muh genetic algorithms\n>muh neural nets\n>muh empirical deduction\n>muh ARTIFICIAL INTELLIGENCE\n>muh singularity\n\nSame buzzwords every day. Very low IQ.",
  "board": "sci"
},
{
  "text": "How to learn mathematics faster, as a muck-dweller?",
  "board": "sci"
},
{
  "text": "whats the best way to get rid of space debris in orbit? i heard something about if you even accidentally hit another countrys space property it could an act of war and the launching nation is liable. so say even if a commercial space entity were to go about removing junk from orbit and were to hit or damage someone elses satellite on the way down it could spell big trouble for the launching state.\n\nwell shit man",
  "board": "sci"
},
{
  "text": "Alessandro Francesconi",
  "board": "sci"
},
{
  "text": "Most of the junk is in LEO so it's not so much of an issue for hitting things except the ISS.",
  "board": "sci"
},
{
  "text": "Imagine if all the satellites were taken out. No gps or nothing, no weather tracking",
  "board": "sci"
},
{
  "text": "I don't know if there is a best way to get rid of space debris. There are a bunch of people working on this including startups, old space companies, and government agencies. There are even some satellites in space that are being used to experiment with different forms of debris management, such as the \"RemoveDebris\" mission (see >autonomous hazard avoidance systems\n>using less congested orbits\n>requiring controlled end-of-life re-entry capabilities\n>development of space debris remediation systems (systematic removal of space junk)\n>an international space traffic management system\n>restricting certain orbits to specific types of spacecraft\n>(Source \nKeep in mind that this is about managing space debris, not eliminating it entirely. It may be that space debris will always be a problem and that our best bet is to make it as little a problem as possible.",
  "board": "sci"
},
{
  "text": "As for nations going to war over damaged spacecraft...who knows? That's why an international space traffic management system is important, so not only can we manage space debris, but also attribute the source of damage to a spacecraft. Was the damage an accident?, was it intentional?, is there a way that it could have been avoided?, what lessons can we learn?, etc. The problem is that an international framework can cause issues with national security objectives, so countries have been reluctant to work together.",
  "board": "sci"
},
{
  "text": "Can someone spoon feed me a good book specifically about neurology? When looking at random online resources information is incredibly scarce",
  "board": "sci"
},
{
  "text": "What's the difference between neurology and neuroscience",
  "board": "sci"
},
{
  "text": "this is probably one of the funniest brainlet wojaks i have ever seen.",
  "board": "sci"
},
{
  "text": "you again?",
  "board": "sci"
},
{
  "text": ">the only notion we have of cause and effect is that certain objects exists always in conjunction, and that, in all the previous cases, they have shown as inseparable. We cannot penetrate at the reason of the conjunction. We only observe the fact itself and see that, in the consequence of their constant conjunction, these objects acquire unity in the imagination. (Treatise of Human Nature, Hume)\n\nHow much of Hume's analysis of causation do you understand? What do you think of it?",
  "board": "sci"
},
{
  "text": ">accepting induction\n>being this much of a brainlet\n\nYou don't deserve philosophy, you scum.",
  "board": "sci"
},
{
  "text": "Yes, because if I didn't move my arm, the stone wouldn't have moved either.",
  "board": "sci"
},
{
  "text": "Yeah you're right, take it away.",
  "board": "sci"
},
{
  "text": "You see, that's the problem. Causal reasoning has this element of necessity to it, in the sense of like you said, \"B\" couldn't have not happened given the cause \"A\".\n\nBut never two objects in experience are necessarly connected. For nothing we receive from the senses is necessarly the case.",
  "board": "sci"
},
{
  "text": "> how much do i understand\nlol\n> what do i think of it\nlol\n\nbut more seriously, humes position stems mostly to the epistemic issue of making substantive claims about the world. based on his conception of the mind, we cannot positively claim to know about causal relations, it is merely our experience of regularities which creates this idea in us. we do not have direct experience of this \"causality\" thing, thus no impressions, thus no idea of it",
  "board": "sci"
},
{
  "text": "I've always had a pet theory that /sci/ is mostly high school and college students, with little to no latter year undergrads or actual grads. Am I wrong? Lets see how well you guys can do on a pretty standard stats problem.\n\nThere's no tricks, the coin's a totally normal one, I actually do have the money, and you're not going to get screwed by something weird like inflation or what 10% means.",
  "board": "sci"
},
{
  "text": "not a problem with bitcoin",
  "board": "sci"
},
{
  "text": "Then at some point you'll only have 0.00000001 bitcoin and you won't be able to give 10% of that.",
  "board": "sci"
},
{
  "text": "A very low chance of infinite money? All I have to do is give you 10% of nothing and wait for you?\n\nSure, worth a shot",
  "board": "sci"
},
{
  "text": "not a problem with espers",
  "board": "sci"
},
{
  "text": "because having unlimited money would cause people to realize their money is worthless, and society would have to change such that my infinite money is no longer a problem\nI might get executed in the process, so, no, fuck this deal",
  "board": "sci"
},
{
  "text": "NASA's latest Flagship-class space observatory, the James Webb Space Telescope, is facing new problems after a previous decade of setbacks and failures.\n\n\n\n\n\nThe James Webb Space Telescope is now $7 billion over budget and 8 years behind schedule. The latest problems include washers and bolts literally falling off of it, the sunshield snagging during deployment, and pieces of the sunshield (which was manufactured in China) ripping and falling apart.\n\nThe JWST has so far narrowly avoided getting the ax during previous reviews over NASA's budget, and the 2018 launch date has now been postponed to 2020. Many are beginning to wonder if it will ever leave the ground, or if it will be cancelled entirely to avoid any further expenditures on this already grossly overpriced and late project.",
  "board": "sci"
},
{
  "text": "The issues remain and will be even worse. The telescope will naturally have to be much larger to make use of the additional lift capacity and that reflects on difficulty and cost.\nLarger and cheaper rockets don't solve anything.\nI wish spacex fanboys stopped acting like idiots who found a hammer and just look for nails everywhere.",
  "board": "sci"
},
{
  "text": "What else do you expect from American products. Most American companies just end up exporting the work because they want it as cheap as possible that way they can line their pockets. God forbid we actually take pride in the shit we build in this nation, who needs that shit when you can get a deal and get paid for less work.",
  "board": "sci"
},
{
  "text": "if it's going to launch on a considerably smaller rocket and still be able to go there, why can't the BFR do it?",
  "board": "sci"
},
{
  "text": "Kek lied",
  "board": "sci"
},
{
  "text": "KEK LIED\n\nNOBODY DIED",
  "board": "sci"
},
{
  "text": "Hello Everyone,\n\nI recently spent some time interning and then working part time at a company that mainly used SQL/Hadoop/SAS for all their data work. I got pretty fluent with all 3. But I know most companies have switched or will be switching to R and Python for most of the data-related work.\n\nI only have limited exposure to R, but would like to learn more. I know there are palces like Data Camp, Udemy, coursera, etc...but do you have any recommendations which is the best way to go about learning R and python?\n\nThank you very much",
  "board": "sci"
},
{
  "text": "ok, col thank you. That's exactly how I laerned SAS. I had co workers and internal training material. Once I got a hang of the basics, I just looked up any new methods/syntax/procedures I needed to use",
  "board": "sci"
},
{
  "text": "Python: Data Analysis in Python by Wes McKinney\n\nR: R For Data Science by Hadley Whickam and some other guy\n\nI forget the exact titles and authors, but that should be enough for you to go off - these are THESE books for data stuff in these environments. You should be able to take it from there.",
  "board": "sci"
},
{
  "text": "There's a humble bundle for python stuff. The bare minimum $1 buy in seems good. At a dollar what can go wrong?",
  "board": "sci"
},
{
  "text": "thank you!",
  "board": "sci"
},
{
  "text": "oh yes, I used one of thosee series when I first was learning sql. was helpful, actually",
  "board": "sci"
},
{
  "text": "there's always people posting on /sci/ threads with questions relating to studying techniques, approaches, whether or not a course they're taking is hard, how to deal with a professor that does x, etc.\n\nso I thought it would be a good idea to make a thread to contain all questions/discussions pertaining to studying.\n\nsome ground rules:\n\n>this is NOT a homework help thread, go to /sqt/ or /wsr/ for that.\n>this is NOT a career advice thread as it is not an appropriate thread to make questions such as\"should I study X or Y?\".\n>you must be studying in a STEM field to post here, this is 4chan's board for science and math.\n>no /pol/ race-baiting or IQ nonsense please, the last two are a bane on this site.\n\nwhat I intend this thread to be about:\n\n>sharing and explaining studying habits, techniques and tips.\n>discussing the contents of courses and how to best approach them.\n>sharing notes/resources on courses an anon is taking that you might have taken in the past.\n>sharing time management techniques maybe even helping anons organize their schedule and getting help organizing your own.\n>discussing everything related to PEDs (adderall, ritalin and whatnot)\n>tips on how to deal with professors, take tests etc.\n> sharing general thoughts on your major and the courses you're currently taking and discussing said thoughts.",
  "board": "sci"
},
{
  "text": "P is real (not necessarily natural)",
  "board": "sci"
},
{
  "text": "Amphetamine.",
  "board": "sci"
},
{
  "text": "DMT",
  "board": "sci"
},
{
  "text": "Are you a quick typist?",
  "board": "sci"
},
{
  "text": "Read these:",
  "board": "sci"
},
{
  "text": "Why is the Golden Ratio called such even though it has nothing to do with Gold? Do scientists just make up whatever names they want?",
  "board": "sci"
},
{
  "text": "this",
  "board": "sci"
},
{
  "text": "if casually you are jonh wheeler can you make a vid calculating the neccesary resolution of a screen in a vr headset to be able to look inside the vr app in a virtual monitor and read text in a quality of 1080p? would be cool",
  "board": "sci"
},
{
  "text": "here\n\n\n\nlol what.",
  "board": "sci"
},
{
  "text": "im interested in the minimum resolution possible to achieve the normal reading capabilities inside vr so we can have multiple virtual monitors floating around",
  "board": "sci"
},
{
  "text": "A E S T H E T I C S \n",
  "board": "sci"
},
{
  "text": "/Math/ Humor thread\n\n",
  "board": "sci"
},
{
  "text": "just search google for the filename",
  "board": "sci"
},
{
  "text": "thanks, but why did I even bother that image sucks",
  "board": "sci"
},
{
  "text": "when I read\n>/Math/ Humor thread\n>Math Humor\n>Math\n>Humor",
  "board": "sci"
},
{
  "text": "Describe a physical law, mathematical solution, chemical reaction, or biological process as poorly as possible while still being true.",
  "board": "sci"
},
{
  "text": ">No matter how fast light goes, darkness was always there first.",
  "board": "sci"
},
{
  "text": "Or relative motion.",
  "board": "sci"
},
{
  "text": "What is this refering to?",
  "board": "sci"
},
{
  "text": "Shit gets fucked up with time",
  "board": "sci"
},
{
  "text": "Unless that \"far away\" is a black hole",
  "board": "sci"
},
{
  "text": "no",
  "board": "sci"
},
{
  "text": "It's the language of science. Among other things",
  "board": "sci"
},
{
  "text": "No, math is the underlying truth but science is only concerned with this universe and it's laws.\nEssentially, there is an infinite \"magical\" realm of infinite complexity and beauty and math comes from there, and all difference universes with different laws' of physics and such come from there. Our universe is just one of them.",
  "board": "sci"
},
{
  "text": "math isn't science\nscience is math.",
  "board": "sci"
},
{
  "text": "it's the language of the worlds nature",
  "board": "sci"
},{
  "text": "Well, /his/, what do YOU think is the probability of the world being dominated by Sub-Saharan Africans?",
  "board": "his"
},
{
  "text": "who's side are you on?",
  "board": "his"
},
{
  "text": "nikola tesla believed in breeding out retards so he should be considered a bad guy to redditors",
  "board": "his"
},
{
  "text": ">breeding out retards\nWhich is funny because he didn't have children himself.",
  "board": "his"
},
{
  "text": "No you fucking idiot, you don't thread until we learn which side TC is on",
  "board": "his"
},
{
  "text": "I don't remember much shitting on the Founding Fathers. In AC3 Connor's friends/allies are people like Franklin, Washington and Sam Adams. The only Revolutionaries on the Templar side are military guys like Charles Lee and Nicholas Biddle and Biddle's not made overly villainois and Lee was an asshole fuck up in real life anyway.\n\n>Is the series just a huge SJW wankfest?\nNot as much as it could be but it's gotten worse. I can't speak for Origins but Syndicate is the worst at it. Karl Marx as an ally, Evie's relationship with a Pajeet, Evie in general being portrayed as hypercompetent in comparison to Jacob who's basically a bumbling oaf that fucks things up and Evie has to fix behind him.",
  "board": "his"
},
{
  "text": "the assassin stuff stopped making sense after first or second game. a hood and cloak is conspicuous as hell in the later eras of the game",
  "board": "his"
},
{
  "text": ">battle of verdun:\n>3 million men participate over 10 months\n>700,000 men are killed or maimed\n>10,000,000 shells with a weight of 1,350,000 tons are fired\n>200,000 gas-filled shells fired by the Germans in three weeks (June 22 to July 15) alone\n>all in a battlefield of less than 100 square kilometers\nIf you actually think about some of the numbers being quoted in historical battles, they're pure fucking insanity on a level that most fiction could never really properly depict.",
  "board": "his"
},
{
  "text": ">tfw brazil 2.0 will still be the strongest superpower by far in 70 years\nUS annex of Mexico and Canada when",
  "board": "his"
},
{
  "text": ">Alle sieben Sekunden stirbt ein deutscher Soldat. Stalingrad - Massengrab",
  "board": "his"
},
{
  "text": "Imagine that happening today holy shit. What percentage of the population was it again?",
  "board": "his"
},
{
  "text": "It's real.\n>On 8 May 1916, an unattended cooking fire had detonated grenades and flamethrower fuel, which detonated an ammunition cache. Apparently some of the soldiers tried to heat coffee using flamethrower fuel, which proved to be too flammable and spread to shells which were without caution placed right next to such environments. A firestorm ripped through the fort, killing hundreds of soldiers instantly, including the 12th Grenadiers regimental staff. Some of the 1,800 wounded and soot-blackened survivors attempting to escape from the inferno, were mistaken for French colonial infantry and were fired upon by their comrades; 679 German soldiers perished in this fire.[5]\nSource cited is \n>Mosier, John. \"Verdun: The Lost History of the Most Important Battle of World War I, 1914-1918.\" Penguin Group: USA, 2013. Page 302.",
  "board": "his"
},
{
  "text": "Imagine being one of those 8 guys",
  "board": "his"
},
{
  "text": "I'm in the US, where did my ancestors come from?",
  "board": "his"
},
{
  "text": "el monstroso",
  "board": "his"
},
{
  "text": "el abominacion...",
  "board": "his"
},
{
  "text": "Hooray a fellow amermiutt",
  "board": "his"
},
{
  "text": "Good lord...",
  "board": "his"
},
{
  "text": "feels good to not be alone",
  "board": "his"
},
{
  "text": "post /his/ related things that trigger you",
  "board": "his"
},
{
  "text": ">we're not into military history because we focus on causes and effects in history\n\nI fucking hate John Green dude. What a pretentious pussy",
  "board": "his"
},
{
  "text": "It would probably be more upsetting if there weren't thousands of those vases.",
  "board": "his"
},
{
  "text": "Dick.",
  "board": "his"
},
{
  "text": "youtube.com/watch?v=DjqdgGb739w \n\n>the background music",
  "board": "his"
},
{
  "text": "can a european become a non larping hindu? or should i just stick with my own paganism?",
  "board": "his"
},
{
  "text": "Off topic but I find it funny how Christcucks online have reverted in some ways. 3 years ago when young right wingers were converting to Christianity because muh deus boolt they were celebrating and wrubbing their hands. \n\nNow that the tide is switching to paganism they are throwing every petty insult they got at you. Maybe it's just subconscious coping of being aware or worshipping a random desert semite. \n\nTruly a petty people.",
  "board": "his"
},
{
  "text": "Well, there are 3 kinds of hinduism (broadly speaking): the Vedic-Upanishadic tradition (this would only cover Vedic and Upanishadic texts), the second being the Puranic traditions (uses early post-Upanishadic texts, Manu-samriti as its foundation, has heavily altered versions of Vedic stories and ultimately ends up focusing on the Puranic texts) and finally, the third being a Vedanta tradition, that generally considers itself as the \"true successor\" to the Vedic-Upanishadic tradition and ends with Advaita. \n\nIf you want to follow the first one- then the Key texts are the Vedas and Upanishads.\nIf you want to follow the second tradition, then they key texts are Manusamriti (and related samritis), the epics and Puranas. \nIf you want to follow the third tradition, then go for Adi Shankara's works.",
  "board": "his"
},
{
  "text": "thank you for the insight",
  "board": "his"
},
{
  "text": ">>4610882\nwhy?",
  "board": "his"
},
{
  "text": "When people refer to Hinduism what is really referred to is the sanatana dharma. Dharma is nonsectarian, and transcends all race, nationality, sex, etc. Dharma is equally applicable for a european as much as it is an indian, because it's the underlying order of the universe.",
  "board": "his"
},
{
  "text": ">becomes pregnant",
  "board": "his"
},
{
  "text": "Everyone spamming this shitty pedo meme needs to be executed desu",
  "board": "his"
},
{
  "text": "No u",
  "board": "his"
},
{
  "text": ">becomes pregnant\nuh no, not again",
  "board": "his"
},
{
  "text": ">Bumps it\n\nFuck you",
  "board": "his"
},
{
  "text": "Sorry, won't happen again",
  "board": "his"
},
{
  "text": "Had a dream about this last night so humor me;\n\nI just earned my blue belt in BJJ but I'm not particularly strong. If I had a time machine, do you think I could beat a Greek Pankration olympic champion fighter who's much stronger than me with my much more modern technique, or are \"modern\" martial arts not evolved enough to give me a win in this situation?",
  "board": "his"
},
{
  "text": "ive been a blue belt since i wwas 16 anon rodrigo gracie gave it to me",
  "board": "his"
},
{
  "text": "It depends on how strong, strong is. 2000 years ago I would be considered a giant. People where much smaller and weaker back then. If you're say 6 ft and 180 lb you would destroy them with strength alone",
  "board": "his"
},
{
  "text": "I might be the only one on this board researched in both mma and greek history \nthe answer depends on whether he gets top position, if you get into guard youre done for, and pankration was scrappy as shit, ive seen bjj of higher skill wilt under unorthodox pressure \nyour chances in a pure wrestling match arent bad though",
  "board": "his"
},
{
  "text": "haha no you'd be gaped almost immediately.\n\nalso not listing height/weight...",
  "board": "his"
},
{
  "text": ">I might be the only one on this board researched in both mma and greek history \n\nJesus, the arrogance",
  "board": "his"
},
{
  "text": "So Hitler pretty much blamed the Jews for taking Germany's wealth and conducted business that benefited their own kind right? \n\nIs their any statistical figure at the time that can support his claim or did people simply believed him without sufficient proof?",
  "board": "his"
},
{
  "text": ">still believing in the boogeyman\nThe persecution of Jews by nazi g*rmany stared in 1933. From there it slowly elevated to what the G*rmans called \"The final solution\" in January 1942.",
  "board": "his"
},
{
  "text": "Well at least you won't be able to reproduce.\n\nKill yourself, you're not even really a man.",
  "board": "his"
},
{
  "text": ">everyone that disagrees with me is a jew\n\nWe should just start calling all /pol/ shitposters impotent, dickless faggots, because I'm gonna assume every one I see is you, dickless faggot",
  "board": "his"
},
{
  "text": "This is pretty much /his/: the book, just look at all le ebin bomber harris posting around here",
  "board": "his"
},
{
  "text": "Can users contact mods? If so, how?",
  "board": "his"
},
{
  "text": "I find African history really fascinating. What's some recommended reading?",
  "board": "his"
},
{
  "text": "*very isolated achievements that aren't shared",
  "board": "his"
},
{
  "text": "Tell us about Nri Kingdom(but avoid wewuzzDaJoos theories please). Also wtf is this tomb? The king seat on his throne and is put in the ground in a sort of container?",
  "board": "his"
},
{
  "text": "Sort of.",
  "board": "his"
},
{
  "text": "Timbuktu was a small city, not an empire. The Empire was Songhai.\n\nAlso, most(fulani) scholars were who were more interested in studying Islam.\n\nYou can't compare it to Europe where a lot of people had access to a lot of knowledge from a lot of places. Europe is like that since antiquity.\n\nEven the writing that we use actually is not totally indigenous to Europe.",
  "board": "his"
},
{
  "text": ">from a lot of places\nfrom a lot of sources*",
  "board": "his"
},
{
  "text": ">Everything under heaven is in utter chaos; the situation is excellent.",
  "board": "his"
},
{
  "text": ">All individual and all specific things have their births, development, and deaths. Every person must die, because he was born. Man must die, and Chang San [i.e., any Tom, Dick or Harry] being a man, Chang San must die. None can see Confucius who lived 2,000 years ago, because he had to die. Mankind is born, and therefore mankind must also die. The earth was born, and so the earth must also die.",
  "board": "his"
},
{
  "text": ">One thing destroys another, things emerge, develop, and are destroyed, everywhere is like this. If things are not destroyed by others, then they destroy themselves. Why should people die? Does the aristocracy die too? This is a natural law. Forests live longer than human beings, yet even they last only a few thousand years. If there were no such thing as death, that would be unbearable. If we could still see Confucius alive today, the earth wouldn’t be able to hold so many people. I approve of Chuang-tzu’s approach.[38] When his wife died, he banged on a basin and sang. When people die there should be parties to celebrate the victory of dialectics, to celebrate the destruction of the old.",
  "board": "his"
},
{
  "text": "What a shit translation.\n\n[天下] [大乱],[形势] [大好]\n[China] [big rebellion], [situation] [big good]",
  "board": "his"
},
{
  "text": "天下 is world btw.\n\nHow is the translation shit? China is basically under heaven and many times it has been under chaos. When chaos ensues, there comes heroes and villains. Mao Zedong is implying that because China is in chaos, its his time to shine.",
  "board": "his"
},
{
  "text": ">天下 is world btw.\nNo. Tianxia is a bit distinct from China, but it's all the portions of the world the Emperor is supposed to have dominion over. A bit more precisely, it's all the parts of the world.that shouldn't be split among multiple rulers (which is why they're so salty about Mongolia, Tibet, et al.).",
  "board": "his"
},
{
  "text": "YOU WANT A WAR GAV?",
  "board": "his"
},
{
  "text": ">beat revs up\nBack to the story, the story of doom\nFor poor tiny Serbia's about to go boom!\nYou hear me, assassin? Our troops are massin'\nGet ready for the bombing, the shootin', the gassin'\nHere is the deal yo! Shit just got real yo!\nYou'll be crushed under Austro-Hungary's heel yo!\nI'll kick you in the Balkans and degrade Belgrade\nEven if those Russians are rushin' to your aid",
  "board": "his"
},
{
  "text": "You think so?",
  "board": "his"
},
{
  "text": "Oh crap!",
  "board": "his"
},
{
  "text": ">I'm Frederick the Great, out the gate first servant of state\n>Oblique attack tactics ain't exactly straight\n>I've got creative talents and battle malice\n>Hard as steel on the field, genteel in the palace",
  "board": "his"
},
{
  "text": "*krap",
  "board": "his"
},
{
  "text": "I just finished reading With the Old Breed. Let's talk about the Okinawa campaign.\n\n- 12,500~ U.S. deaths, 40,000-55,000 wounded\n- 90,000+ Japanese deaths\n- 75,000-150,000 Okinawan civilian deaths\n- One of the worst artillery barrages of the whole war, and the single worst in the Pacific theater\n- Torrential rains and mud",
  "board": "his"
},
{
  "text": "A few out 70 million? Certainly. But look at Germany, the military fought on to save the civilians, but the civilians did nothing to save themselves. Matters were worse in Japan as people had almost no food left and US bombings had all but destroyed the countrys infrastructure. By the time the invasion would have landed, civilians would be starving. Perhaps even dying off from starvation.\n\nThe japanese public wanted the war to end. They had fought since 1937 and knew very well that the only thing preventing peace was the military government in Tokyo.",
  "board": "his"
},
{
  "text": "There are bigger battles on the Eastern front that didnt even get a wikipedia page because of how commonplace massive ass battles were",
  "board": "his"
},
{
  "text": ">muh europe",
  "board": "his"
},
{
  "text": "For some reason the Pacific War has always fascinated me more than the European Theater. \n>battleships\n>carriers\n>all kinds of aviation\n>subs'n sheet\n>sneeky jungle warfare\n>massive artillery battles\n>mg's. mg's everywhere\n>everything from tiny atoll hand-to-hand fighting to tank-infantry battles on plains\n\nEurope had all of this, but for some reason i've never felt the urge to read about Kursk in the same way as Guadalcanal or Okinawa",
  "board": "his"
},
{
  "text": "same man. the European theater is really cool too, but i'm just more drawn to the Asia-Pacific war more for some reason",
  "board": "his"
},
{
  "text": "how true is this?",
  "board": "his"
},
{
  "text": "Basically this, it is all the fault of the Finno Korean hyper wars, can we move on?",
  "board": "his"
},
{
  "text": ">The inca had an advanced empire",
  "board": "his"
},
{
  "text": "^^^^^^^^^",
  "board": "his"
},
{
  "text": "Some anon pointed it out, Europeans discovering stuff if you go by that chart",
  "board": "his"
},
{
  "text": ">A.D.E.\nEveryone knows its A.C.E",
  "board": "his"
},
{
  "text": "Why does everyone like Alfred the Great, especially why do even pagans like him?",
  "board": "his"
},
{
  "text": "Because he wrote the history that exalts him.",
  "board": "his"
},
{
  "text": "literally who",
  "board": "his"
},
{
  "text": "Because his life is the perfect Hero's story\nOvershadowed by his brother's and made clear he won't be king. At age 5 he is taken to be blessed by the pope who fortells his kingship\n1 by 1 his brothers die as the Anglo-Saxon kingdoms fall to the great heathen army.\nOnly wessex is left standing and Alfred is now king. Guthrum bursts into the royal hall with his soldiers but Alfred has escaped\nKing Alfred goes into hiding in the marshes and comes along peasants hut\nPeasant takes him in\nAlfred deep in thought comes to revelation of how to beat vikings\nAmusing anecdote of accidentally burning cakes\nHe accepts the woman's scolding and doesn't reveal his identity\nHe stalks the south England countryside like a wraith and lays waste to viking camps and punishes rebellious lords\nBuilds an army behind the scenes\nConfronts guthrum at eddington\nWins the battle\nGuthrum converts to Christianity",
  "board": "his"
},
{
  "text": ">he's not a native English speaker\nEww",
  "board": "his"
},{
  "text": "post oc to me i draw post oc",
  "board": "i"
},
{
  "text": "glad you you like it it like",
  "board": "i"
},
{
  "text": "(;",
  "board": "i"
},
{
  "text": "Thank you. /i/ is my second best board thnx.",
  "board": "i"
},
{
  "text": "youyou're welcome",
  "board": "i"
},
{
  "text": "ITT: Post your idea for a story arc, provide characters, and I will do my best to implement every idea that someone suggests.\nNearly anything goes, willing to go NSFW, just please stay out of /b/ territory (ex. gore, furry, pedo, etc.)\n\nPost any character you'd like to be in the story and their role, and other anons can suggest the story and what happens.",
  "board": "i"
},
{
  "text": "Virgin's Tournament/ Virgin's Game\nDue to declining birthrates the Japanese Government subdues 500 virgins and neets, pitting them against eachother in a tournament style dating game. One on one, they must successfully impress and/or impregnate their target girl. If you don't get laid you get eliminated. Directly harming your opponent forbidden but sabotage is allowed",
  "board": "i"
},
{
  "text": "...I thought we already had a premise though?",
  "board": "i"
},
{
  "text": "what's the point of you coming back if you are only going to dissapear forever again",
  "board": "i"
},
{
  "text": "If this ever starts up again, give the characters an airship. Like a literal flying pirate ship.",
  "board": "i"
},
{
  "text": "I thought they already had a spaceship...",
  "board": "i"
},
{
  "text": "Let's draw some flat chests or really small breasts on busty female characters.\n\nIt's something of a visual experiment, I guess.",
  "board": "i"
},
{
  "text": "so good!!",
  "board": "i"
},
{
  "text": "appreciated !",
  "board": "i"
},
{
  "text": "bump for the bump god",
  "board": "i"
},
{
  "text": "It was a good thread",
  "board": "i"
},
{
  "text": "It's been a while since i saw a robot thread so here it is.",
  "board": "i"
},
{
  "text": "I'm going to post a shit ton of art on my twitter account on the 1st of may.\nLike, comment, and subscribe.",
  "board": "i"
},
{
  "text": "Not a fan of how stiff and \"concept art\" your work feels.",
  "board": "i"
},
{
  "text": "nice\ngot any more?",
  "board": "i"
},
{
  "text": "Big ass.",
  "board": "i"
},
{
  "text": "oh I get it, it's a shrimp",
  "board": "i"
},
{
  "text": "Draw your favorite characters or just post any JoJo stuff you've done.",
  "board": "i"
},
{
  "text": "It was faster to just use the touchpad than it was to get the tablet out and plug it in.\n\nI've been practicing with tablet drawings, just haven't felt good enough about of them to post here. I usually end up scrapping them without saving.",
  "board": "i"
},
{
  "text": "Start with your framework(really loose lines and shapes to simplify the design) then build up the details and all that, aside from that, just keep drawing i guess.\n(I don't even know if you'll read this, i wish you good luck nonetheless)",
  "board": "i"
},
{
  "text": "Done? Although one month and a half late... I hope you like this, excuse the shitty filters, I'll scan it later if you want.\n\n\nOh, ok, I understand. Do your best! I'll be waiting.",
  "board": "i"
},
{
  "text": ">jolyne's face when anasui asks her if she spits or swallows",
  "board": "i"
},
{
  "text": "Gyroooo",
  "board": "i"
},
{
  "text": "Draw a character from the last anime you watched (or from the last manga you've read) \n\nPrevious: >>497857",
  "board": "i"
},
{
  "text": "No. Do you?",
  "board": "i"
},
{
  "text": "Please, tell me your honest opinion on my OC. \nHis name is Edward, but later on he began calling himself Madward once he went insane. You can also call him Maddie on short since he doesn't mind. \nMadward is a ghoul who works as a butcher for a meat company. He is incredibly selfish ,flamboyant and vain, believing himself to be the most fabulous creature alive. He used to have his own TV show but it got canceled due to nobody watching it. Madward would often bring up macabre/creepy/disturbing discussions in his show and the audience was highlly afraid. \nThen, Mettaton came into the picture and managed to steal all of his fame and fans with his TV show. \nMadward 's insanity was awakened by Mettaton and he hates the robot with all his heart. \nI can see him working at his meat store ,cutting beef while watching the tiny TV in the corner, seeing Mettaton at his concerts being applauded and cheeref on by entire crowds of people while stepping on the red carpet. Madward would be watching all that with his teeth gritted afterwards throwing a freshly chicken throat at the TV with rage, scaring his customers away. \nMaddie, then decided it's time to step up and do something to feed his Mettaton hatred. Sometimes, he would call Mettaton 's fans and tell them to gather to the dark alley by lying to them that he saw their idol there. All the fans would gather there expecting to see Mettaton and Madward would come out and stab to them with his butcher knife. \nAfter a while, Maddie got bored and decided he needs to step up & hit the big superstar himself. \nMettaton was really worried about his fans dieing and being murdered all of a sudden. \nDuring one of his shows, Madward disguised himself as a stagehand and sneaked into the studio. He tied Mettaton up and went on the stage himself by claiming to everyone that their favorite robot star has a cold.",
  "board": "i"
},
{
  "text": "D I S G U S T I N G",
  "board": "i"
},
{
  "text": "more like epicward\nfucking epic dude",
  "board": "i"
},
{
  "text": "is it time again?",
  "board": "i"
},
{
  "text": "very nice",
  "board": "i"
},
{
  "text": "This is honestly the best OC i have ever layed eyes on! I give it a solid 11/10",
  "board": "i"
},
{
  "text": "Here's a drawing I made days ago.",
  "board": "i"
},
{
  "text": "YA WANT LEWD WITH YOUR FRIES?",
  "board": "i"
},
{
  "text": "Requesting lewds of OP",
  "board": "i"
},
{
  "text": "If OP is fine with it, his OC will take it in the pooper.",
  "board": "i"
},
{
  "text": "What the fuck is up with /i/ and anal? Half the nsfw thread is filled with you fu ks",
  "board": "i"
},
{
  "text": "Most of the /nsfw/ drawfags are fine and willing to anal too, so even though I'm not a fan of the pooper, you can't blame them.",
  "board": "i"
},
{
  "text": "Studying perspectives",
  "board": "i"
},
{
  "text": "it's a box",
  "board": "i"
},
{
  "text": "Hello im teh dog of fundies, Thats so good wow you are so studious but I think you need a little more practice on your fundies if you want to be more studious like me. Keep up the work my friend and drop your blog so I can watch you improve on your findies and be studious \n\n~~tEh DoG oF fUnDiEs",
  "board": "i"
},
{
  "text": "what are you working on right now OwO",
  "board": "i"
},
{
  "text": "Fellas, relax it just be a drawing. Besides, I'd be lying if I said I've never had my attention drawn to metal bikinis at one point or another. In this case, the whole armor adds more of a mystery as to what's under it.",
  "board": "i"
},
{
  "text": "It looks like you ended up redrawing the whole thing too, its pretty nice m8",
  "board": "i"
},
{
  "text": "Thank you, bro ! I appreciate it",
  "board": "i"
},
{
  "text": "show the full one my dude",
  "board": "i"
},
{
  "text": "Trying to practice colouring but I hate colouring so much",
  "board": "i"
},
{
  "text": "Hi /i/.\n\nMay do some SFW reqs.",
  "board": "i"
},
{
  "text": "did not know the oekaki could go so big",
  "board": "i"
},
{
  "text": "big canvas small effort",
  "board": "i"
},
{
  "text": "The thread for Female Mario enemies and other series. Shy-gals and other characters also accepted.\n\nPrevious thread\n>> 474934",
  "board": "i"
},
{
  "text": "Last one I have with her.\nThese were made by Omeganazi.",
  "board": "i"
},
{
  "text": "Surprised nobody ever gave this guy a request.\nAnyway, have some more Bob-Omb girls.",
  "board": "i"
},
{
  "text": "robo-pirate",
  "board": "i"
},
{
  "text": "I've been drawing images near daily now and posting them in another thread. But since I don't want to clutter it up with my mess, I decided to make another one.\n\nDraw a maid if you wish as well.",
  "board": "i"
},
{
  "text": "Still waiting for that mess in the study to be tidied up",
  "board": "i"
},
{
  "text": "pretty adorbs, my dude.",
  "board": "i"
},
{
  "text": "I wanted to contribute but my piece of shit surface book fought me, then didn't save the note. Fuck msft have a photo",
  "board": "i"
},
{
  "text": "Qt af, even with the jew-nose",
  "board": "i"
},
{
  "text": "> Be gone for months due to work issues and schedule changes\n> Expect thread to have fallen off the board by now.\n> It's still alive\n\nI'm still blown away by this. Pic is fanart, but still a maid so posting.",
  "board": "i"
},
{
  "text": "drawthread,hi everyone give me something cute and i will do this with her..(no real person and only girls :) thank you!",
  "board": "i"
},
{
  "text": "do you want to erotic drowing?",
  "board": "i"
},
{
  "text": "She is the cutest!",
  "board": "i"
},
{
  "text": "Yes. Can I request Kotonoha giving paizuri (titjob) to a man?",
  "board": "i"
},
{
  "text": "I'm not op, but you got something in mind for her?",
  "board": "i"
},
{
  "text": "Have a guy pull her short shorts down to expose her bare butt and fine thighs/hips to the viewer while she blushes. As a nice option, finger her butthole",
  "board": "i"
},
{
  "text": "Let's draw Bait-chan porn cuz Porn!",
  "board": "i"
},
{
  "text": "kek",
  "board": "i"
},
{
  "text": "hummm...\n\nheh",
  "board": "i"
},
{
  "text": "Holy macaroni!!! can you make a male version. you know nothing personal",
  "board": "i"
},
{
  "text": "cute",
  "board": "i"
},{
  "text": ">Recent\nOnell- Buildstation White, Mraedis Agents\nAVRobot- Hades+Metallic Purple\nMega Merge- Fallout @ Gamestop\n\n>Onell Drop - Late May\n>Speaking of upcoming releases, our next one (late May) focuses on a pretty specific and somewhat obscure homage that some of you may be familiar with from when you were kids. It's a little outside the more popular 80's toylines, but does have some significant meaning behind the scenes over here, particularly in regard to the DSG design. I consider this coming wave a temporally displaced birthday gift to my much younger and less gray counterpart, playing under the bed somewhere in a permanent 1984. Be prepared for extra weirdness with this one, and of course, expect a couple surprises.\n\n>Soon\nNothing yet\n\n>Ongoing Topics\n1984 toylines\nBuild Challenge Suggestions\nConfigurables prototypes",
  "board": "toy"
},
{
  "text": "Backpack view which is also similar to 's minus the swing bits and Zeroid shoulders",
  "board": "toy"
},
{
  "text": "I really like this one",
  "board": "toy"
},
{
  "text": "Banimon drop WHEN",
  "board": "toy"
},
{
  "text": "next to never\n\npink was only one last year. custom drop only one this year",
  "board": "toy"
},
{
  "text": "I miss him so much",
  "board": "toy"
},
{
  "text": ">Newly Released\n-Super Mini-Pla King Brachion\n\n-Legacy Zeonizer\n-Legacy Golden Power Staff\n-Legacy MMPR Green Ranger Helmet\n\n-Legacy 6.5 inch Series 5 (Zeo Red/Blue, DT Black)\n\n-Legacy Good vs. Evil 5 inch 2-Packs (Lunar Wolf vs Madame Odius, NStl Yellow vs Spinferno, MF Red vs Spellbinder, DC Silver vs Doomwing)\n\n-Super Ninja Steel 5 inch (Lion Fire Mode Red/Blue/Gold, Galvanax, Brax)\n\n-Imaginext Thunder Megazord vs Pirantishead",
  "board": "toy"
},
{
  "text": "Doing show accurate reissues is always a bit touchy, especially when there are better toys on the market for the same design now. The point was to look just like the old toy you \"used\" to have, for the people who don't still have the original or not in good condition.",
  "board": "toy"
},
{
  "text": "But you could get the old inaccurate looking toys on eBay for less. The fact that they've been collecting dust for months goes to show that Bandai should have done something different with them. Especially if they were going to have to end up re-tooling them anyway. I always thought it would have been neat to have the prototype versions without the dinosaur emblems. They also had better helmets across the board. Not sure why they changed the helmets for the production figures.",
  "board": "toy"
},
{
  "text": "They did at one point technically, if you include foam roleplay weapons as “Nerf.”",
  "board": "toy"
},
{
  "text": "Today was a good day.",
  "board": "toy"
},
{
  "text": "Damn I really need to get to a Toys R Us. The deals are finally starting to get good.",
  "board": "toy"
},
{
  "text": "Read the fucking guide:\nbusoushinki.buyfags.moe\n\nPrev. thread: \n\nNews:\n>Season 2 of FA girls anime announced \n>Pretty Armor V02 announced\n>Hunter Type Shinki Edelweiss announced as fully parts compatible Megami Device collab kit, Strarf and Arnval pulled from display.\n>Kadokawa, Konami and Kotobukiya announce relaunch of the Busou Shinki line\n>>ASRA Swimsuit editions up for preorder\n>ASRA Kotoshop exclusive recolors up for preorder\n>Alice Gear collab MD Sitara announced, Kaede colored prototype shown\n>FAGirl Manga Volume 2 out 2/20",
  "board": "toy"
},
{
  "text": "Printing things that will fit 3mm ports exactly is going to be really tough, though. The Chinki versions of the MSGs really dumb them down just to lower the cost by a fraction.\n\nYou can definitely print your own parts as part of building your own custom FAG, but it's a lot more effort, and you're probably not going to beat Koto's prices if you want to sell them at comparable quality. There's a reason all these third-party kits are stupidly expensive when they're just some hair and breast parts.",
  "board": "toy"
},
{
  "text": "The doll is kind of cute but i'm not digging the valk, if i cant get a mecha girl version of the zentradi mecha id at least expect one of the original VF.",
  "board": "toy"
},
{
  "text": ">I can't fucking believe Kotobukiya hasn't capitalized on faceplates.\nA great mystery of our time. Seems they're at least selling eye decals now, though. \n\n>Still, Koto should make a Gundam Breaker for Frame Arms and FAGs. \nI'm starved for that variety of content anyway. I'd be all over that.",
  "board": "toy"
},
{
  "text": ">Chinkies\n\nNo matter how much you use that, it's never going to catch on.",
  "board": "toy"
},
{
  "text": "Jinkies!",
  "board": "toy"
},
{
  "text": "who is this for?",
  "board": "toy"
},
{
  "text": "Mostly for horror fans, probably? I have a lot of horror people in my circle - one of them posted about this and a lot of them expressed interest.",
  "board": "toy"
},
{
  "text": ">Funko\n>Toy\n>Funk\n>Toy\nThis thread is like dividing by zero then trying to find the square root of such result. funko aren't /toy/s they are cheap, mass produced rubber statues with little to no real value.",
  "board": "toy"
},
{
  "text": "Fucking this. I see more of these threads than I see pops themselves.",
  "board": "toy"
},
{
  "text": ">they are cheap, mass produced rubber statues with little to no real value.\nSo regular toys then?",
  "board": "toy"
},
{
  "text": "So army men aren't toys? Gashapon? Those little vinyl aliens and ninjas you'd get out of gumball machines? Pop caps? M.U.S.C.L.E? Nigga watchu sayin here?",
  "board": "toy"
},
{
  "text": ">\nPrevious Thread \n\nToyline general info:\n>\nMax Factory figma list & blog\n>>>\nReviews and news about GSC/MF products by Kahotan\n>>",
  "board": "toy"
},
{
  "text": ">Release schedule:\n\nMay\n>Moguro Fukuzou\n>Hunter\n>Nero Claudius\n>Genji\n>Ludens\n>Seto Kaiba\n>Yami Yugi\n>figFIX Hanayo Koizumi: Cheerleader ver.\n>figFIX Nico Yazawa: Cheerleader ver.\n\nJune\n>Lancer/Cu Chulainn",
  "board": "toy"
},
{
  "text": "LATEST FIGMAS ON PO:\n\nLively Lillie\n>>\nReaper\n>\nWarspite\n>>\nArashi Ishino\n>",
  "board": "toy"
},
{
  "text": "Reminder: if you want GSC to make something you need to tell them you want it.\n>\nLeave the Knoe post for the Knoe threads\nSome anons will shitpost on your choices and derail the thread\n\nDon't fall for shitposting bait\nJust report, filter and/or ignore.",
  "board": "toy"
},
{
  "text": "Don't forget her, Max Factory.",
  "board": "toy"
},
{
  "text": "For those unfamiliar, \"Plamo\" is a shortened form of \"plastic model.\" If it's made of plastic, someone can probably help you here.\n\n>\"If you're new, you're gonna fuck up. Don't worry! If you're experienced, don't make the new people worry!\"\n\n***READ THE GUIDE***\n\nIRC Channel\n>Server\nRizon\n>Channel\n#gunpla\n\nThe guide:",
  "board": "toy"
},
{
  "text": "Thats a landmate guges-d resin kit.\n",
  "board": "toy"
},
{
  "text": "A twitt with only moonrunes and nothing helpful at all.\n\n\nSweet, thanks mate. Have the other pic I saved.",
  "board": "toy"
},
{
  "text": "UUUUNGH THICKER",
  "board": "toy"
},
{
  "text": ">reverse image search\n>led to twitter with moonrunes that translate exactly into what it is\n\nare you a retard?",
  "board": "toy"
},
{
  "text": "Yes. Happy?",
  "board": "toy"
},
{
  "text": "Buy!\nSell!\nTrade!\n\nRead the rules in the image (ESPECIALLY 3 and 4), ignore the trolls. \n\nRemember! You can click the ▶ and hide irrelevant posts!\n\nOld thread:",
  "board": "toy"
},
{
  "text": "I am currently going on 5 hours after a facebook transaction where the guy hasn't paid me yet so it happens",
  "board": "toy"
},
{
  "text": "lots of people or they ask you to either hold it or for a significant discount for reasons that are not relevant",
  "board": "toy"
},
{
  "text": "Some people just drop transactions without giving a shit. When deals goes quick and smoothly its a load off the chest.",
  "board": "toy"
},
{
  "text": "Anon that bought the Yugi here. Arrived quickly yesterday. No trouble to report.",
  "board": "toy"
},
{
  "text": "Did you make sure to check your junk/spam folder just in case?",
  "board": "toy"
},
{
  "text": "oof",
  "board": "toy"
},
{
  "text": "Previous thread \n\nPost your GI Joes, Acid Rain, Marauders, Boss Fight HACKS, Hiya, Shodo, PTE, BBi, and compatible figures, vehicles, playsets, and any dioramas/backgrounds/customs you've made.",
  "board": "toy"
},
{
  "text": "why we need to censor a nude body on a doll in 4 chan? is this normal in USA? I mean it's not even a real person nipple and it's just a nude, nothing sexual",
  "board": "toy"
},
{
  "text": "Talk to the owner of 4chan, this isn't classified as a NSFW board so it might get deleted if anon didn't censor it.",
  "board": "toy"
},
{
  "text": "how a figure of a nude human being can be NDFW? even little girls play with nude barbies",
  "board": "toy"
},
{
  "text": "Because business owners don't want their employees looking at nudity on the clock",
  "board": "toy"
},
{
  "text": "I just want the halberd and polearm. Knight is not complete without traditional knight weapons, the majority of knights in medieval period used pole weapons rather than sword/shield",
  "board": "toy"
},
{
  "text": "Is there some good South Park toys?\nAnd where i can get those plushes?",
  "board": "toy"
},
{
  "text": "these are great to me",
  "board": "toy"
},
{
  "text": "If you can find them, and I have no idea how much the aftermarket is, the Mezco South Park figures were stellar. They managed to get a ton of characters out there, variants of Cartman, etc. \n\nThe eyebrows on Cartman were articulated, too.",
  "board": "toy"
},
{
  "text": "The original releases had tons of accessories too. And their arms were really clever attachments to match the show's style.",
  "board": "toy"
},
{
  "text": "ohh this look nice,but where i can find them for a decent price?\n\ni want only pc principal from that line of toys\n\nbetter than funko pops",
  "board": "toy"
},
{
  "text": ">The anal probe\n\nI need this...I also need his whore mom.",
  "board": "toy"
},
{
  "text": "FAQs:\n/toy/ - bjd.buyfags.moe (link is dead, /toy has currently no FAQ)\n/jp/ - dollfaq.buyfags.moe\n\nDoll news and company list:\n>>\nWIP Database/Height comparison:\n>dollection.fi\n\nDoll magazine scans (patterns!):\n>plus.google.com/112174196208952755265/photos\n\nCommon sealants for faceups (there are more, but these are most frequently used):",
  "board": "toy"
},
{
  "text": "Lucky me! Thanks, anon. You just made my life a million times easier.",
  "board": "toy"
},
{
  "text": "For my fellow lazy anons:\n>>\nI feel really bad for this person. I own a few artist cast dolls, and their imperfections are NOTHING like this. It's more like the artist forgot to sand a small part of a seam. Not like the doll looked like it took a ride in a garbage compactor.",
  "board": "toy"
},
{
  "text": "This is horrific. Did they buy it at full price, or was it deeply discounted?",
  "board": "toy"
},
{
  "text": "It would be a hundred times better if the artist get rids of the tits. It looks like a chubby kid.",
  "board": "toy"
},
{
  "text": "Anyone have /toy/ related memes? They don't even need to be good ones.",
  "board": "toy"
},
{
  "text": ">She's not a fun thing to exist, whereas Danbeard requires nothing more than a stereotypical /toy/ reaction going into a word bubble to bring him to life. Even a speech bubble of him arguing about how /toy/'s tan should be a little girl doll perfectly represents the /board/ culture.\n\nThis is an absolutely pathetic attempt to say danbeard is better. Stop grasping at straws and accept they can both be a thing. A fat neckbeard spouting memes isnt more \"fun\" than a cute toy/robot girl with swappable parts who can spout the mes just fine and was doing so before danbeard existed.",
  "board": "toy"
},
{
  "text": "The artist of danbeard is super down with having the two be roomates.\n\nthis has been settled over and over and over again.",
  "board": "toy"
},
{
  "text": "And yet he we are with who I assume is the artist pulling the same old shit again. Same old arrogance and stupid enough to believe a fat loser would be more popular than a cute girl. I've never seen the artist to much to calm down his \"fan\".",
  "board": "toy"
},
{
  "text": "Only because there had to compromise since pushing him so hard wasn't taking hold but they still would give.",
  "board": "toy"
},
{
  "text": "Best /toy/ tan design coming through.",
  "board": "toy"
},
{
  "text": "Show off your figure Displays!\nWhat have you changed last time?\nI finally got around to rearranging the lighting and hiding all those disgusting cords. Feels good!",
  "board": "toy"
},
{
  "text": "Very nice - if I remember correctly, you’re the collector who got me into Figuarts when I asked what make that Rey and Solo were.\n\nWhat risers are you using for this and your Marvel display?",
  "board": "toy"
},
{
  "text": "My Star Wars display is using these:\nMy Marvel display just uses tamashii stands, and Thanos is standing on a small box I had.",
  "board": "toy"
},
{
  "text": "I think you might like the Sazabi.",
  "board": "toy"
},
{
  "text": "bretty gud anon. tasteful and concise",
  "board": "toy"
},
{
  "text": "Only thing missing is a onions shelf and you'll be good.",
  "board": "toy"
},
{
  "text": "The vendor is selling for $10.",
  "board": "toy"
},
{
  "text": "Old 12\" toyline known as The Villains. This one is simply named Armed Terrorist",
  "board": "toy"
},
{
  "text": "Armed Terrorist figure",
  "board": "toy"
},
{
  "text": "Thank you!",
  "board": "toy"
},
{
  "text": "Fuck the Po Po.\n\nTRU is dead, but shit is still coming out.\nAsh vs Evil Dead series 2 is shipping out.\nAlien Club 2018 has started if you're ordering that stuff. \n\n18\" Shredder will be shown off at SDCC and available by the end of this year, apparently.",
  "board": "toy"
},
{
  "text": "just keep the blue out of the mask and I think you'll have a better result",
  "board": "toy"
},
{
  "text": "I’m the opposite. I want the puppy face.\n\nThe real question: we getting the theatrical version or the unedited version? (Pic very related)",
  "board": "toy"
},
{
  "text": "I dunno, I'm starting to think it was something interesting in concept but not in execution. It's also fairly difficult finding real celtic warpaint designs",
  "board": "toy"
},
{
  "text": "oops I meant this as a reply for",
  "board": "toy"
},
{
  "text": "IMO, I think it looks good Anon. Just keep rolling with it, sometimes ideas turn out differently than you imagine, but it doesn't make 'em bad.",
  "board": "toy"
},{
  "text": "sb fancy?",
  "board": "p"
},
{
  "text": "Ancient Luminous Landscape video about Canon's first \"home grown\" digital SLR, comparisons to 35mm film, and 12x16 inch prints from 3MP sensor :",
  "board": "p"
},
{
  "text": ">I'm convinced that in print sizes up to 8x10 inches the D30 (3 megapixel DSLR from the year 2000) actually is superior to film. \n\n>Using appropriate digital technology, prints up to anywhere in the range of 13x19\" can be equal to those from 35mm.\n\n>What I want you to notice in particular is the luminance of the out of focus background. There is smoothness and a lack of texture. Obviously it's a lack of grain, because there is no grain in digital. It adds something that I've rarely seen in a film image. \n\n>I've done no scientific tests yet, but it seems to me there is anywhere from a half stop of additional dynamic range from the D30 over transparency film. \n\n>A print like this needs a minimum of 240DPI, and these images are 6x9 at that size, so to make a print that's bigger then 6x9 you have to do what's called \"resing it up\". The most effective way of doing this is to use a program called Genuine Fractals Pro. It effectively allows you to make much bigger images without losing quality. It can't create information that isn't there, but what it does is that it extrapolates the information without degrading image quality, which is what would've happened if you were to use for example bicubic interpolation that Photoshop uses when you increase the size of an image from its original pixel density. \n\n>The important thing is that here we have an image that's roughly 12x15 or 12x16, that is about the biggest size one could normally make from a 35mm frame before you start to lose quality. \n\n>The image quality here is as good as one could want (for this size). Let me also mention that almost all of these photographs were taken at ISO400.",
  "board": "p"
},
{
  "text": "*discusses hard*",
  "board": "p"
},
{
  "text": "The dude really hated grain.\n\nThe whole argument makes my head hurt tbqh, so I just shoot both. I did once make a 36x24” print from a 12mp file though. \nPractically speaking, I could print bigger from a 35mm neg scanned at 6300dpi on a Flextight, but the arseache involved means film is really for special occasions, and that’s comparing to a 12mp cam. By 24mp you’re into hairsplitting territory.",
  "board": "p"
},
{
  "text": "You know Ken Rockwell’s rants about film?\nIt’s the same thing, for digital.",
  "board": "p"
},
{
  "text": "which is best?",
  "board": "p"
},
{
  "text": ">I have no idea why I do what I do\n\nOh. You're one of those \"Art\" people. I bet your last project where you shit in an acrylic box and called it the horrors of capitalism didn't pan out.",
  "board": "p"
},
{
  "text": "Lol",
  "board": "p"
},
{
  "text": "FUCK YOU ALL",
  "board": "p"
},
{
  "text": "njdjd",
  "board": "p"
},
{
  "text": "How about this one?",
  "board": "p"
},
{
  "text": "Post recent street photos you have taken.",
  "board": "p"
},
{
  "text": "yes it very countings sir",
  "board": "p"
},
{
  "text": "Yeah that's pretty much what I'm doing, enrolled in a night course which has been helpful with weekly homework covering different settings and so on.",
  "board": "p"
},
{
  "text": "5/8",
  "board": "p"
},
{
  "text": "Take that back",
  "board": "p"
},
{
  "text": "this is like some aunt took a pic with her 3 year old asus smart phone shit. just terrible",
  "board": "p"
},
{
  "text": "HURR DURR SNAPSHIT",
  "board": "p"
},
{
  "text": "good thread",
  "board": "p"
},
{
  "text": "great thread",
  "board": "p"
},
{
  "text": "Post what you are doing and discuss other anon's projects.\n\nPrevious thread: >>3254502",
  "board": "p"
},
{
  "text": "Leica M-mount has a FFD of 27.80 mm, so yeah that'd be super easy. Just fix the lens 22.2mm from the mount face and you are good to go. Keep in mind that you can't focus unless you physically move the camera forwards or backwards. You'd probably want to place it further away so that you can focus on things closer to you. It is pretty easy to experiment with two sliding tubes like in this image. Though this is a 60x185mm lens.",
  "board": "p"
},
{
  "text": "i see, im trying to take pictures of people on the street and my camera can only do 40mm, 50mm, 90mm. but yeah thanks ill look into it.",
  "board": "p"
},
{
  "text": "I know he made the camera himself, but why does it look like it was made from literal human shit?",
  "board": "p"
},
{
  "text": "So the qts think it's a fake.",
  "board": "p"
},
{
  "text": "It is the exact same methods. the length of the tube is dictated by the focal length of the single lens or the lens element group. With an FFD of 27.80mm, you could do a 27.80mm single element lens easily.",
  "board": "p"
},
{
  "text": "Last thread: \nRead the sticky first!\n\nPost anything gear related, cameras, lenses, filters, bags, tripods, other accessories (clothing, fancy straps, Leica) etc...\nPost your question here, instead of starting a new thread about which lens to buy or what are the best beginner cameras.\n\nAnd don't forget, be polite!",
  "board": "p"
},
{
  "text": "I like taking walks in my free time and take pictures of the city, nature, flowers what have you, and I'm a complete beginner at photography, and want to go into it as a hobby. All I have right now is my phone. What's a good camera to go for? Budget is flexible",
  "board": "p"
},
{
  "text": "That exif says that shot is from an a7ii though?",
  "board": "p"
},
{
  "text": "Any entry level MILC or DSLR with kit lens will work for you. Get to know the controls, learn the exposure triangle (read Understanding Exposure by Bryan Peterson) get to know your favourite focal lengths. It will last you a good couple of years to find out your exact style or where to start going further into the hobby.",
  "board": "p"
},
{
  "text": "We were talking about viewing angle f the lens.",
  "board": "p"
},
{
  "text": "New thread",
  "board": "p"
},
{
  "text": ">pic unrelated...kinda..sort of \nDo any of you have experience buying gear from Ebay? I've found some excellent lens (used) in descent prices but still not all of them can be trusted. How did it turn out for you?",
  "board": "p"
},
{
  "text": "With Japanese sellers (most of the good stuff at ok prices):\n\nTop mint means mint\nMint means barely used\nMint- means used but not damaged\nExcellent++++++ means good\nExcellent+++ means ok but may be bad. I’ve seen this used when there is some hazing in the lens\nExcellent means fungus",
  "board": "p"
},
{
  "text": ">excellent\n>fungus",
  "board": "p"
},
{
  "text": "That's his point. These Japanese sellers severely abuse the English language to grade their lenses.",
  "board": "p"
},
{
  "text": "I buy cheap vintage primes, clean the fungus out of them, then use them for video. Works great.",
  "board": "p"
},
{
  "text": "How do you clean the fungus?",
  "board": "p"
},
{
  "text": "I predict that the MJUII cameras will cost $1000 each by the end of 2018.\n\nOlympus is stupid for not re relasing it.",
  "board": "p"
},
{
  "text": "The Panorama is pretty much the same thing as the original but with the panorama mode. I sold one not long ago for $80 along with a Infinity Stylus Zoom for $50.\n\nI guess i should be heading to the thrift stores again sooner or later.",
  "board": "p"
},
{
  "text": ">the current trend must continue!\nOP is genius of economics",
  "board": "p"
},
{
  "text": "ive been keeping my eye out for these at the thrift for the last year or so, never any luck",
  "board": "p"
},
{
  "text": "more like you're stupid for not buying 20 of them when they first came out",
  "board": "p"
},
{
  "text": "I got one on a local auction site in my country for €50",
  "board": "p"
},
{
  "text": "Some old shit, some new shit. Will be a lot of Bonneville 2017 in here I haven't got to yet and I can't remember what I already posted so expect good old sugary reposts laced in with new shit.\n\nExpect to see truck stop shenanigans, Northeast, Bonneville, trolls gonna troll, plenty of shitposting and some 35mm if I can get home to scan it before the thread hits autosage\n\nAs always OP is a faggot.",
  "board": "p"
},
{
  "text": "I'd like to address this without trolling.\n\nI actually own both cameras, albeit an FE with a motor drive and not an FM2, but the body is the same.\n\nThe FE with motor drive actually weighs more than the Df and is physically larger in height. They both compliment each other, the FE shooting only Tri-X 400, the only proper way to shoot BW in any format except 320 Tri-X on 4x5.\n\nThe only place they went wrong on the Df is no split-image focus screen and no interchangeable screens, FFS a Canon 5D from 2005 has this and takes the FE's focus screen without modification, Nikon seriously dropped the ball here majorly. So yes, that's where it went wrong, but otherwise the Df is a solid performer, it does low-light well and can use literally every Nikon F mount lens ever made since 1959, with no modification, even those weird ultrawides carried over from the S rangefinder that require mirror lockup.",
  "board": "p"
},
{
  "text": "yeah but who the fuck needs a motor drive shooting film in 2018 if you're buying a film camera for high speed shooting you're off your goddamn rocker. \n\nnikon better not fuck up their \"pro\" mirrorless.",
  "board": "p"
},
{
  "text": "I don't need it but it's nice to shoot continuously without having to wind the next frame, and I can focus on the subject and keep it in frame without having to move the camera to wind, also I got it for like 10 bucks and it makes holding the camera a lot easier.\n\nThe Df is pretty light despite being 25% larger than an FE, for what it uses as a sensor it's mind-boggling when you consider its weight. Imagine if Canon built a digital AE-1 with a 1Dx II sensor in it and AF from a 70d, that's what Nikon did with the Df",
  "board": "p"
},
{
  "text": "And that AE-1 weighed as much as a Rebel.",
  "board": "p"
},
{
  "text": "...is she dead",
  "board": "p"
},
{
  "text": "So the goddamn sun came out for once and I tried to use the light after weeks of greyness.\n\nI've been shooting for some five weeks now and recently started to try and wrap my head around Capture One. That, and the art of composition.\n\nHere are some of my results.",
  "board": "p"
},
{
  "text": "This was done in Strasbourg. There's a tripfag around who shoots there quite a lot, I think he does film. Maybe he has it.",
  "board": "p"
},
{
  "text": "I like this one the most of everything I’ve seen so far.\n\nGenerally your composition is a lot better when you soot in black and white or sepia, or when you try to create a film look. The super sharp clor images are a little bland and soft, like you’re taking them without much thought. Good stuff though, lots of quality images.\n\nIs this all shot on an a6000? I’ve been thinking of switching from Canon to Sony.",
  "board": "p"
},
{
  "text": "Thanks man, I liked the picture you mentioned very much at first but in hindsight it felt very overprocessed. Glad you like it.\n\n>Is this all shot on an a6000?\n\nYup. Up until everything was done with the 1850 kit lens - which is pretty fucking shitty I can tell now.\n\nAfter that, I used a Neewer 35 mm and love it so far.\n\nPic related was done with a Minolta MD 35-105, which is even more fun even though it has some light issues.\n\nI can't say anything about Canon but I can say that I think the a6000 is an amazing, versatile camera. If I had the money, though, I'd rather go for a full frame to make full use of the vintage lenses I have recently acquired.",
  "board": "p"
},
{
  "text": "If everyone could ignore the fucked-up dust removal attempt and rather say something about the color processing, that'd be great.",
  "board": "p"
},
{
  "text": "Was in Spain last summer. At that point I would have had this camera (D7200) for about a year. I started photography with this camera.\n\nAdvice, criticism, or anything constructive about these photos or photography in general would be highly appreciated.",
  "board": "p"
},
{
  "text": ", Thanks!\n>should have zoomed out a bit, no reason to crop out the bigger monkey.\nSo something like this for the monkey with her baby?\n\n>could use some better post processing\nI don't have photoshop or lightroom, are there any good free (or inexpensive) programs for something like that?",
  "board": "p"
},
{
  "text": "This is the picture with the Monkey and her baby before I cropped it",
  "board": "p"
},
{
  "text": "I think gimp, and picassa are free.",
  "board": "p"
},
{
  "text": "Go to Japan next time.",
  "board": "p"
},
{
  "text": "Lol, if I could.",
  "board": "p"
},
{
  "text": "Is this the most basic bitch of all photobooks?",
  "board": "p"
},
{
  "text": "i mean, it's influential and had a very large cultural impact. there's a reason he had to start with an out-of-country publisher.\njust because it's popular now doesn't diminish its significance, you hipster",
  "board": "p"
},
{
  "text": "I love this book.",
  "board": "p"
},
{
  "text": "Robert Frank is one of the best photographers who's ever lived. It's in the canon for a reason.",
  "board": "p"
},
{
  "text": "It's not spicy by today's standards, but this was a genre-defining set of pictures.",
  "board": "p"
},
{
  "text": "I am getting really tired of this shit\nSo after finished editing my pictures and finally getting a result that I like, I need to transfer it to my phone to upload to instagram. \nAnd every time when i see the picture through my phone it is shit. \nIt`s oversaturated, blotchy and looks very poorly.\nSo what i end up doing is reediting the photographs so it looks better on my phone. But of course it completely fucks up the original image. \nIt bothers me on number of issues:\n1) I`ve seen a lot of tutorials and even searched \"Exporting photographs for social media\" and no one ever mentions this problem. It`s like this problem doesn`t exist for photographers.\n2) Showing the photographs to clients/ models/make up artists.\nNeedless to say I am confused. When I send them two versions (one for phones and the normal one) I get confusion because photographers they had worked with in the past never did this, they send one pic and it ws good enough.\n3) Doing double work and needing to go back and forth beween phone and computer fucks up my workflow.\n\nWhat can I do? Am I doing something wrong?\nThis pic is the \"mobile\" version",
  "board": "p"
},
{
  "text": "OP LISTEN TO ME\n\ncheck the color profile that you're exporting. I was having this issue for a while too. The problem is that you're probably exporting the images as prophoto rgb, change the settings when exporting from lightroom to adobe rgb and that will fix your problem, I promise",
  "board": "p"
},
{
  "text": "People need to export srgb exclusively",
  "board": "p"
},
{
  "text": "On higher end phones like the S8 the screens can auto calibrate, so they will fuck up your images in ways that are hard to predict. Unless there is a standard. You can't have the accuracy on anything other than print.",
  "board": "p"
},
{
  "text": ">adobe rgb\nYou don't export adobe rgb for the web or anything else unless the person knows to decode it as adobe rgb. Otherwise people decode AdobeRGB as SRGB.",
  "board": "p"
},
{
  "text": ">My point is my workflow now ends up constantly uploading image to dropbox and viewing it from my phone to make sure it looks better there\nShit lol, I do the same thing.\n\nWhat you gotta understand is that, sadly, everyone out there has a different phone and every screen is different.\nSamsung tends to be overly saturated because of the AMOLED screen, Iphone is more neutral. Then you have like LG/Moto/One+ and the other thousand brands.\n\nOnce you start thinking about how many people out there are gonna see your image in a different way, you'll go mad and stop caring.\nI have a S7, so I just get my images to look okay saturated on there and then it'll pass on samsung and probably look good on other phones.",
  "board": "p"
},
{
  "text": "Well after some re-working, we've decide to turn this into a Winter & Summer issue. This will be the second issue of the /p/hotozine (or book, either or). So here is the official submission post for Issue No. 2 (if you've already sent in stuff feel free to send more). Each assignment will have it's own section, every submitter will have One photo in the section, however you can submit more than one.\n\nGuidelines:\n>All submissions to be sent to (grs.piq@yahoo.com), or will not be included\n>use .JPEG, .PNG, .TIFF or .BMP formats\n>Include a name (optional), any submissions that are nameless will go down as Anon\n>if it won't get you banned here, it's good to go\nAs previously posted, there are indeed two assignments (obviously optional), with the addition of a third.\n\nMemory Lane:\n>a photo of a place, person or object that impacted you growing up\n\nSelf Portrait:\nI'm not even gonna detail this out, but creativeness would be great.",
  "board": "p"
},
{
  "text": "I thought you guys knew that the /p/ book was just for the edification of the ego of the current tripfag of the moment.",
  "board": "p"
},
{
  "text": "Nah, not going to bother. First one ended being a majestic wreck, pissing off even guys that you picked to be featured alongside your own crap. \nJust do me a favour and drop /p/ moniker altogether, what you're doing with it is in no way better that what you baned chosis for.",
  "board": "p"
},
{
  "text": "why not have actual community input so we don't have another pleb zine being vomited out by tripfags?",
  "board": "p"
},
{
  "text": "He still fucking posts here without his tripcode, does he not understand that fucking NO ONE likes him?",
  "board": "p"
},
{
  "text": ">imblying we’re a community",
  "board": "p"
},{
  "text": "Someone went and let the last one get archived, so here we go again. \n\nOfficial /Deenz/ Anthem: \n/Deenz/ Recipes: lol no I'm not posting all the recipes like the last shitty OP. Just eat 'em on crackers or something. \n\nI'm personally about to crack open a can of Brunswick brand fillets in Mustard & Dill sauce and thought it was high time for everyone to share the deenz love.",
  "board": "ck"
},
{
  "text": "Regular, Mediterranean or bone/skinless oscars?",
  "board": "ck"
},
{
  "text": "Regular. Med is good, but not nearly worth the hype and you get less fish in the can. \n\n>skinless/boneless\nGTFO my /deenz/",
  "board": "ck"
},
{
  "text": "Alright, thanks. I found a Puttanesca recipe that calls for deenz instead of anchovies and I'm excited to try it",
  "board": "ck"
},
{
  "text": ">clearly anchovy\nPucciboi can't handle the salt.",
  "board": "ck"
},
{
  "text": "Cheese is the most overrated food. It usually makes things it is added to worse. I don't even know how people can eat is straight, it is gross. I can't understand why people are obsessed with making the cheesiest cheesy cheese on everything they everything they eat.",
  "board": "ck"
},
{
  "text": "What is wrong with you amerifats",
  "board": "ck"
},
{
  "text": "success breeds jealousy",
  "board": "ck"
},
{
  "text": "Looks good to me\n\nDumbass\n\nWhat's your point? Cheese doesn't spoil and any hard cheese like that is already aged at least three months.",
  "board": "ck"
},
{
  "text": "Beemster is good entry level stuff",
  "board": "ck"
},
{
  "text": "Pure cancer",
  "board": "ck"
},
{
  "text": ">skyr\n>sour milk\nIt's yogurt.",
  "board": "ck"
},
{
  "text": "Artificial/low cal sweetener users: which one is your favorite? I'm a sucralose guy myself but I haven't tried any of the fancier ones like stevia yet, how are they? \n>inb4 sugar shills tell me i have cancer",
  "board": "ck"
},
{
  "text": "You mean Truvia? That seems to be used by a lot of low-carb baking recipes, I'll have to try it.",
  "board": "ck"
},
{
  "text": "Cyclamate is the only artificial sweetner that doesn't taste like soapy chemical bullshit.",
  "board": "ck"
},
{
  "text": "Sweet-n-Low > Stevia > Splenda\nNever tried Truvia (isn't it pretty similar to Stevia?) and Equal.\nSweet-n-low tastes the most similar to sugar and doesn't leave the same weird after taste as other zero cal sweeteners imo.",
  "board": "ck"
},
{
  "text": ">I try to avoid shitty processed sugar, and it's immitations all together, because it's shit for health and makes my face break out. I use honey if I want to sweeten something. Your palate needs to be cleansed if you think adding fake or real sugar to your daily diet is a necessity\nNo one cares about your health problems and OP never said it was a necessity.",
  "board": "ck"
},
{
  "text": "Truvia, it can bother some people’s stomachs at first but I like using it.",
  "board": "ck"
},
{
  "text": ">at a fish store in alaska\n>ask if they have any herring\n>they look at me in disgust and go \"herring? that's a bait fish!\"\n\nI'm confused. Is herring considered basically inedible in some parts of the country/world? I thought it was a standard seafood dish but apparently some places only use it as bait to catch salmon and other fish.",
  "board": "ck"
},
{
  "text": "pickled herring is delicious, as is pickled anything.\n>na zdrowie",
  "board": "ck"
},
{
  "text": "Yes, herring is a bait fish. At the same time, yes you can eat it. There is a restaurant right on the Anclote River in Tarpon Springs, FL that will take your unused bait fish and flash fry them.",
  "board": "ck"
},
{
  "text": "Smaller stuff is bait for bigger stuff. Some people like to get uppity about bullshit. Dont worry about it",
  "board": "ck"
},
{
  "text": "Are not all fish bait?",
  "board": "ck"
},
{
  "text": "What's funny is we hooligan instead...tbqhfama hooligan is more of a British than herring",
  "board": "ck"
},
{
  "text": ">country famous for its teas\n>serves it totally wrong: hot, and often with milk\nCan the brits do anything right?",
  "board": "ck"
},
{
  "text": "90% of the tea in Japan is sencha and matcha. he's not that far off the mark.\n\nchinese tea is immensely more varied.",
  "board": "ck"
},
{
  "text": "China has more land, so what did you expect you mongo?",
  "board": "ck"
},
{
  "text": "You're a little dumb, aren't you?\n\nChina has more land, but that's obviously not why they have a wider variety of tea. There's nothing that actually keeps Japan from producing black, white and oolong teas. It's all the same god damn plant. But instead they keep producing only green tea.",
  "board": "ck"
},
{
  "text": "the guy was acting like tea aficionados commonly drink \"special tea like in my anime\", which isn't actually true because japanese tea is only a very, very small part of the tea world.\n\nread the fucking reply chain. no one is shitting on japan for having less tea.",
  "board": "ck"
},
{
  "text": ">Clearly american\n>Thinking they know tea",
  "board": "ck"
},
{
  "text": "What do you usually get on McDonald's night?",
  "board": "ck"
},
{
  "text": "I miss their pizza, my local one did them perfectly",
  "board": "ck"
},
{
  "text": "Oh no! He's opened up another option on the menu that no one will buy. He sure showed those nasty Americans!!!",
  "board": "ck"
},
{
  "text": "McChicken, Cheeseburger, small fries, medium drink. $4 and change, maybe $5 and change in the more expensive part of town.",
  "board": "ck"
},
{
  "text": "Imagine being at computers",
  "board": "ck"
},
{
  "text": "i usually get a classic chicken sandwich or a sausage and egg mcmuffin. the quarter pounders are good too but the mcdonald's near me overcooks the shit out of them so they're completely dry.",
  "board": "ck"
},
{
  "text": "Cooking fails thread.\nWas using homemade soup powder to make soup, I think I didn't add enough water.",
  "board": "ck"
},
{
  "text": "Also half a day in the kitchen?\n>boil chicken for 1.5 hour in chicken stock - 5 min prep\n>make tiny meatballs - 5 min prep\n>boil meat balls in broth\n>make roux, add half broth half cream instead of milk - 10 min\n> pluck chicken and add meat + meatballs into sauce - 5 min\n>boil mushrooms in half butter, water and some lemon juice - 5 min\n>add shrooms to sauce\n\nAll your prep can be done in the 1.5 hour window of boiling the chicken. I've even done it in the 20 minute window of pressure cooking it.",
  "board": "ck"
},
{
  "text": ">he doesn't know about puff pastry",
  "board": "ck"
},
{
  "text": "Yeah if you want to make your own puff pastry to drown in sauce you're retarded.",
  "board": "ck"
},
{
  "text": ">not having a sheeter and a very cold freezer\nA quick puff pastry (depending on the flour and how many folds) will take at most 6 hours and most of that time is chilling and resting\nI prep tons of puff dough at my bakery and take some myself when I can afford it. be jelly fag",
  "board": "ck"
},
{
  "text": ">will take at most 6 hours\nyeah, that was the point. doofus.",
  "board": "ck"
},
{
  "text": "What do y’all use?\n>v60\nTechnique: \nAnd I know my handle broke, so I’ve been using a huck towel to pinch the metal end and pour that way.\n\nI’m buying a Fellow EKG+ and Acacia scale with crypto gains.\n\nThis week on rotation is a Honduran from Camber Coffee in Washington. Tastes like guava, melon, cola, and cherries",
  "board": "ck"
},
{
  "text": "Vegetables are for hipsters and single mothers",
  "board": "ck"
},
{
  "text": ">my handle broke\n\nHow exactly did you manage that?",
  "board": "ck"
},
{
  "text": "Note to OP: Cofftism",
  "board": "ck"
},
{
  "text": "you need a thermometer, a timer and a Ph meter too.",
  "board": "ck"
},
{
  "text": "I have a thermometer, its not in pic tho. Already have a timer, my phone. And as for a ph meter I just have a tds tester (water quality is shit in my area, thus the need for reverse osmosis in my house in addition to remineralization of water for coffee.\n\nI’ve had the kettle for 6 years now, and i dropped it and the handle broke.",
  "board": "ck"
},
{
  "text": "Is this the irl equivalent of grinding xp?",
  "board": "ck"
},
{
  "text": "Just make your own man. It's way cheaper and tastes a lot better. Buy a French press, go to a coffee shop and get your beans ground extra coarse, and use distilled water. Find a video on YouTube showing you how to do it. Thank me later.",
  "board": "ck"
},
{
  "text": "i made 14,000 last year and 16,000 the year before",
  "board": "ck"
},
{
  "text": ">799 credit score\n>Hasn't moved up or down in fuck knows how long\nI thing the worse issue is failing to friend even when you try",
  "board": "ck"
},
{
  "text": "lel wtf dude you only have 730 points? i thought that was your fucking credit score. dont even make me screenshot my points its 5 digits",
  "board": "ck"
},
{
  "text": "glad im not the only one that was confused\nnice score bro",
  "board": "ck"
},
{
  "text": "Anyone else in love with powdered milk?\n>won't spoil on you\n>can be bought in bulk\n>can add as little or as much powder as you want, giving you control over the flavor\n>can add milk to recipes that don't need a wet ingredient, such as DIY pancake mix\nJust try to find a flaw",
  "board": "ck"
},
{
  "text": "That's a seagull.",
  "board": "ck"
},
{
  "text": "Yeah, we get that But given that gluten only comes from grain, why would a bag of milk powder be labeled gluten free? In other words why would anyone ever think that milk contains gluten?",
  "board": "ck"
},
{
  "text": "That's only valid for drinking it straight.\nIf you're baking, cooking, putting it in coffee, even putting it in cereal, there's no difference as long as it's cold.",
  "board": "ck"
},
{
  "text": "I pretty much exclusively buy long lasting milk (no idea how that is called in english), which lasts for months even outside of a fridge. It tastes almost exactly like regular milk too. It used to taste different (which I kinda liked actually), but nowadays the procedures are so good it's pretty much identical. I think it's the perfect midway solution.",
  "board": "ck"
},
{
  "text": "Presumably, being a powder product, there is a possibility of it being packaged in a mixed manufacturing facility that also handles things that might contain gluten, such as pancake mix. Specifying it is gluten free is really the only way to express the reciprocal of the usual 'manufactured in a facility which also processes X' warning.",
  "board": "ck"
},
{
  "text": "R8 it /ck/! Any tips are welcome.\n\n>Bagnet (Illocano-style fried pork belly). Served with radish sprouts in a spiced coconut vinaigrette, SV caramelized carrot, and steamed okra.",
  "board": "ck"
},
{
  "text": "why are you hiding the main component? pork looks pretty good but i dislike the plating. not sure what i think about those carrots",
  "board": "ck"
},
{
  "text": "That’s my bad on my part, I was trying to layer it nicely but my plating sucks.\n\nAny tips?",
  "board": "ck"
},
{
  "text": "You gotta try SV carrots... i guarantee it tastes much better compared to boiling or even sauteing them\n\n\nSome kenji autism",
  "board": "ck"
},
{
  "text": "Nice",
  "board": "ck"
},
{
  "text": "Thanks brah any tips!",
  "board": "ck"
},
{
  "text": "What does /ck/ think of bubble tea?\n\nI've only found it in one place in my country, where I had strawberry tea with tapioca balls. Not a big fan of the tea, but I loved the feel of balls in my mouth (pun acknowledged but not intended). It was just a satisfying experience.",
  "board": "ck"
},
{
  "text": "This shit right here. Taro milk tea is the bomb. I wish the tea places near me had red bean as an option though.",
  "board": "ck"
},
{
  "text": "see:",
  "board": "ck"
},
{
  "text": "everyone drank this shit on a near daily basis\nt. gweilo who grew up in a 70% asian town",
  "board": "ck"
},
{
  "text": "How do we have 2 simultaneous threads about a fad drink from a decade ago?",
  "board": "ck"
},
{
  "text": "real good but so sweet. i like the fruit ones because i'm not into sweet milky tea flavour.\njust give me a whole cup of the tapioca balls hnggng",
  "board": "ck"
},
{
  "text": "For me? It's IHOP.",
  "board": "ck"
},
{
  "text": ">IHOP\nThey perfected the art of how to make food that looks good in pictures, but tastes bad when you eat it.",
  "board": "ck"
},
{
  "text": ">pancakes\n>at waffle house",
  "board": "ck"
},
{
  "text": "IHOP\n>International House of Pancake...\nOnly found in the US...go fucking figure...",
  "board": "ck"
},
{
  "text": "Where you at though?",
  "board": "ck"
},
{
  "text": "*Throws acid at your dick \n\nEat that.",
  "board": "ck"
},
{
  "text": "Why are fries and salad on a pizza so controversial?",
  "board": "ck"
},
{
  "text": "Meet the Lord",
  "board": "ck"
},
{
  "text": "they add texture",
  "board": "ck"
},
{
  "text": "Because you can't heat up lettuce or cucumbers, or cream based dressing, without them turning into shit, so it's just a salad on bread rather than a pizza.",
  "board": "ck"
},
{
  "text": ">>salad on pizza\n>Fuckin why though, several pizza toppings are already things included in salad, basically the only thing you would gain is leaves, and who the fuck wants to eat leaves on pizza that are just going to be sitting their awkwardly and add little to the flavor\nI disagree. \n\nPizza Rustica in S. Florida took this \"california salad on pizza\" thing to extremes a good couple of decades ago and it _all_ works. Pic related. Arugula of course, as well as spinach is just fine at room temp or even warm. A cooled off pizza with salad on top, is moved to an oven to crisp up on the bottom and not really affect the cool toppings. It's like garlic bread with your salad, or getting salad dressing on your tomatoes, as welcome as the brine of olives on your pizza. Also when it's 85F and you're conscious of your calorie count, and you've been drinking and dancing til 4am, it's open, and it hits the spot for a lot of people. This place always is slammed, no matter the location. ",
  "board": "ck"
},
{
  "text": "hnngh",
  "board": "ck"
},{
  "text": "I'm curious about the gumroad vids by \"foundation group.\" Anyone have the vids or is a patron? Are they any good?",
  "board": "ic"
},
{
  "text": "PLS DO",
  "board": "ic"
},
{
  "text": "Who are these niggers? I only recognize the modern day james dude",
  "board": "ic"
},
{
  "text": "Where's torrent-bro when you need him?",
  "board": "ic"
},
{
  "text": "I actually have this foundation group video. It's the only one I bought.\n\nIt's really helpful.\nI took a little break before finishing this vid since I'm going back and going through perspective made easy.",
  "board": "ic"
},
{
  "text": "Well are ya gonna??",
  "board": "ic"
},
{
  "text": "Did you do your -gesture- drawing today /ic/?",
  "board": "ic"
},
{
  "text": ">So please take the surgical knife away from the paper every now and then and just draw\n\nThe problem is that \"feel the pose\" in an abstract concept.\n\nYes, it's ok to just draw and have fun, but knowledge helps you understand what that \"feel\" could mean for you, and how you can translate it to a drawing.",
  "board": "ic"
},
{
  "text": "this is The thing to study as a beginner, otherwise all your poses would have to be copied or still mannequins.",
  "board": "ic"
},
{
  "text": "So I tried a few things I've been recommended today like exaggerating the pose, adding arms (the neck too) and drawing over the model to see if I got the things right.\n\nThe torsos with 1 above them are the one where I tried to copy the model and the one with 2 are a bit more exaggerated/stylised. So once again, if I did some mistake, please tell me what's wrong.",
  "board": "ic"
},
{
  "text": "WHAT The hell? Who would even buy this?!!",
  "board": "ic"
},
{
  "text": "learn some perspective will yuh",
  "board": "ic"
},
{
  "text": "haven't seen one in a while",
  "board": "ic"
},
{
  "text": "And yet his edits are a big improvement. You just look like a shitposter right now",
  "board": "ic"
},
{
  "text": "if you think the fucked up shadows that they attempted on their edits is an improvement, then you only have my condolences",
  "board": "ic"
},
{
  "text": "His edits are the ones on the left side btw. If you're not going to elaborate on anything, then you're a waste of time.",
  "board": "ic"
},
{
  "text": ">His edits are the ones on the left side btw\nI know",
  "board": "ic"
},
{
  "text": "i tried making a knight. what do you guys think? i took references for the helmet and the shield but tried to make my own out of it",
  "board": "ic"
},
{
  "text": "What do you think, /ic/. Is it true? Is it too late for the late starters?",
  "board": "ic"
},
{
  "text": "\"You know it to be true\"\n\ngr8 source \n\nI'm well aware that most \"masters\" will start in their teens but they don't necessarily have to. That, and it isn't really a requirement for actually making it, so it's kind of irrelevant, don't you think? Sure, you might not ever be as good as someone who started at a young age, but why should you bog yourself down with caring about that at all?",
  "board": "ic"
},
{
  "text": "look at this hotshot, being above surviving and drawing for comfort",
  "board": "ic"
},
{
  "text": "In the unfinite future when our galaxy has no only atrophosized in plasma and then reformed in another big bang, the next form of life will look at the mathematical inertia of the universe and say \"holy shit that guy really wanted to be the best at drawing,\" because of how much dark matter the gravitational pull of my mental penis displaces. I fucking dare life to be inconvient, because i'm already concieving a child with society against their will. It will be the analysis of my art once im dead. I fucking dare life to even bother giving me lemons because life should know where those lemons are going to end up.\n\nLooking at my goals realistically is what gives me comfort. The time window that society has to stop me is closing every month. I got in a bunch of reps while literally being tortured at the school of infantry. What coukd society possibly throw at me? A car accident where I lose my arms wouldnt stop me, i'd still draw. My job doesnt stop me. Prison wouldnt stop me. The time window to contain my forcible breeding with society is closing, and soon not even death will stop my art gains.",
  "board": "ic"
},
{
  "text": "Van Gogh was a shitty artist technically speaking",
  "board": "ic"
},
{
  "text": "Late starters owned.\n\n/thread",
  "board": "ic"
},
{
  "text": "Does copying someone allow you to sap someone else's style? I wanna draw like yoh yoshinari, but aside from my fundies, is it possible to draw more like him if I copy along side his sketchbook?",
  "board": "ic"
},
{
  "text": ">but you must be able to capture the essence of a drawing/photograph with no anxiety or frustration.\n>no anxiety or frustration.\nHow?",
  "board": "ic"
},
{
  "text": ">Anime\n\nthere is your answer. There is no unique artistic expression involved, which basically allows animators to just straight out copy the facial features from the anime, which already looks almost the same in the first place. It's animu",
  "board": "ic"
},
{
  "text": ">Literally paints over photos and calls it study\n\nWhy would anyone take his advice seriously lol",
  "board": "ic"
},
{
  "text": "this only applies after youve got the fundamentals down, you can copy all you want but without fundies all youll retain is symbol knowledge",
  "board": "ic"
},
{
  "text": "But don't you form your own style by copying other artists and combining the aspects you enjoy about their art into an amalgamation that you claim is your own, unique style?",
  "board": "ic"
},
{
  "text": "Post your current drawing here and give constructive critique to others!\n\nPlease make sure your posted image is clear, downsized to around 1000 pixels wide, rotated to the correct orientation, and that any unused space is cropped.\nIf you want critique on a drawing from the previous thread, you can delete it there and repost in this one.\n\n>dA /ic/ group :\n\n>/ic/ Resources/Reference/Downloads/Links:\n\n>General resources :",
  "board": "ic"
},
{
  "text": "This is me",
  "board": "ic"
},
{
  "text": "blog?",
  "board": "ic"
},
{
  "text": "No blog sorry, instagram is @bestabcna\n\n",
  "board": "ic"
},
{
  "text": "Thanks, here's an update taking into account what you said",
  "board": "ic"
},
{
  "text": "I feel like I blew my day's brain energy on the warmup sketch, oh well",
  "board": "ic"
},
{
  "text": "Let's get a portrait study going.\n\n>Focus on the portrait, values, edges etc.;\n> After a satisfying number of submissions, new reference will be posted.",
  "board": "ic"
},
{
  "text": "ill do a study when i get out of work tonight but just out of curiosity did you take offense to what i said? i honestly like that anons blending regardless if it was accidental or not due to smudging with his finger.",
  "board": "ic"
},
{
  "text": "this one is really good, i like it anon",
  "board": "ic"
},
{
  "text": "Added value.",
  "board": "ic"
},
{
  "text": "Dig your tones, have you got any blog or anything (Flickr, IG)?",
  "board": "ic"
},
{
  "text": "someone requested me to draw the world serpent from gow as an anime girl and i gave up because its so impossible to do. all the designs i made look like a generic lamia with zero distinctive features.\nis it me or the design of the snake is weird?",
  "board": "ic"
},
{
  "text": "Get the eye color, sharp teeth, rockyish bits, and maybe a big grin.",
  "board": "ic"
},
{
  "text": "Because you're dumb as a motherfucker.\n\nFirst draw an average anime girl, probably an ARA ARA type one, then slap the snake shit on top of it.",
  "board": "ic"
},
{
  "text": "use these bits around the eyes",
  "board": "ic"
},
{
  "text": "Just draw a generic anime girl but us ethe colo scheme from the lizard",
  "board": "ic"
},
{
  "text": ">why is it so hard to turn this thing into an anime girl?\nBecause you have no imagination.",
  "board": "ic"
},
{
  "text": "been in a arts slump for a while thought doing some art request would be fun and help\n\nWell drawn almost anything probly mostly doodles tho\n\nask away!",
  "board": "ic"
},
{
  "text": "Sorry in advance, I can't draw",
  "board": "ic"
},
{
  "text": "Okay, who leaked this thread?",
  "board": "ic"
},
{
  "text": "Me, sorry",
  "board": "ic"
},
{
  "text": "Curse you",
  "board": "ic"
},
{
  "text": "Okay, but why? Is it bad?",
  "board": "ic"
},
{
  "text": "So this post is less about \"Teach me to draw!\" and more about how to get a specific result.\n\nI've seen Simon/TLG's images and I like his style, but I really like his blending on his images and I've tried to create a similar effect on my own art but cannot seem to get the same effect.\n\nCan anyone help me figure out the settings to get the same effect? \n\n[Specifically the way Pacifica's Hair fades]",
  "board": "ic"
},
{
  "text": "If you've ever seen his drawing process, you'd know that he simply uses a hard round watercolor brush. You can even accomplish this with a hard round/airbrush. It's not an issue of what tools to use, just how you use them.",
  "board": "ic"
},
{
  "text": "have you watched him draw in video/streaming?\nThe effect is achieve by lots and lots and lots of stokes that leaves really little color change each time. \nit's not much of a pencil setting than a way to color. \nIf you have issues achieving that, you can reduce the flow of your tool (in photoshop at least), or change the settings of your pencil to be a bit on the \"hard\" side (on wacom at least)",
  "board": "ic"
},
{
  "text": ">Watching someone else paint/draw instead of actually drawing.\nThe absolute state of /ic/. This is just as bad as watching a camwhore on twitch play video games instead of actually playing the fucking game. Why do you people do this shit?",
  "board": "ic"
},
{
  "text": ">have you watched him draw in video/streaming?\nIgnore the retard above and give links.",
  "board": "ic"
},
{
  "text": "To steal their knowledges",
  "board": "ic"
},
{
  "text": "Ear sucks but at least it looks like me",
  "board": "ic"
},
{
  "text": "poor you",
  "board": "ic"
},
{
  "text": "Cool idea and nice painting anon.",
  "board": "ic"
},
{
  "text": "your rendering is very good, but your proportions are ridiculous. fix that and you're gonna be good. im not a pro btw.",
  "board": "ic"
},
{
  "text": "That's his face anon. Don't be rude.",
  "board": "ic"
},
{
  "text": "What was the worst thing you experienced in art class?\n\n>That kid who drew his fursona for his final and had to do a small presentation on it in front of the whole class",
  "board": "ic"
},
{
  "text": "Are you kidding, I am a complete stranger to anime and I know of flcl, it's some sort of cult everyone knows about",
  "board": "ic"
},
{
  "text": "> someone drew swastikas on all of the erasers\nlearned nothing from that art class too.",
  "board": "ic"
},
{
  "text": "making the final artwork peice bringing it in and whole class critquing the work, but not remembering to bring in the CD even though i painstakingly put it together and failing the final even though the artwork was very good.",
  "board": "ic"
},
{
  "text": "i passed the class though ofc",
  "board": "ic"
},
{
  "text": "We had a kid in our class who wore these huge headphones and the same outfit every day. Mexican kid with a generic Mexican name but he called himself 'Quote'. He would only draw in mechanical pencil and only drew super stylized cartoons, even when it was supposed to be a study. Didn't challenge himself at all. The teacher embarrassed him a lot, which I think is the reason he started skipping a lot. I honestly wanted to help him but he seemed super against having anyone demand anything more of him artistically than he was already putting out. \nShe forbade listening to music on headphones, and when on the third day of class asked him to put his headphones away (they were on his ears) he showed her he wasn't playing anything from them. They hung around his neck for the rest of the semester.",
  "board": "ic"
},
{
  "text": "Whats your opinion on acrylic art? Do you have favorite artists?",
  "board": "ic"
},
{
  "text": "Also posting some aquarells",
  "board": "ic"
},
{
  "text": ">Be me\n>Study art(anime drawing actually) in South Korea\n>Lurk on /ic/ to check current western trends\n>Everyone talks shit about loomis here whereas my art teachers&classes say I should master his book \n\nwtf? What happened?",
  "board": "ic"
},
{
  "text": "Newfag here, the hell is a Loomi???",
  "board": "ic"
},
{
  "text": "loomis is my papi",
  "board": "ic"
},
{
  "text": "Kinky",
  "board": "ic"
},
{
  "text": ">things that never happened\nLol okay retard. No one here in S. Korea even knows what a Loomis is",
  "board": "ic"
},
{
  "text": "because you are a disappointment in his eyes?",
  "board": "ic"
},
{
  "text": "I used to buy these instantly when I saw them in stores. The cover art was always rad as fuck to me and ran the gamut from pseudo-anime to concept art. With print publishing being brought to the low point it has been I'm kind of surprised they're still around but it's sort of a comforting thought that they are for some reason. \n\nThey had a lot of cool tutorials, though a lot of the magazine's real estate was reserved for interviews I would mostly gloss over in general they always seemed to have pretty damn good artists featured. \n\nApart from 90s-era video game instruction manuals I think this magazine was another big inspiration for me. \n\nWhat are some things that inspired you to take the artist's journey into the realm of torment and despair, Anon?",
  "board": "ic"
},
{
  "text": "Which issues are the best to read?",
  "board": "ic"
},
{
  "text": "Seeing as it's a relatively short magazine you might as well read them all lol. Most of the articles are similar to online infographics you'd see on deviantart or something, just with generally decent artists contributing their process. \n\nYou can get all of them back to 2009 on ipad for less than $50, unfortunately they don't have a similar deal on the microsoft store (I'm emailing them about that right now) but they're likely floating around on the internet for free on PC as well for what it's worth.",
  "board": "ic"
},
{
  "text": ">With print publishing being brought to the low point it has been I'm kind of surprised they're still around but it's sort of a comforting thought that they are for some reason\nIts because its a UK magazine. They're still viable there because its small-ish country with a high population and a well developed distribution system.",
  "board": "ic"
},
{
  "text": "I still get them from time to time depending on the focus of the issue (my art is very high contrast so I try to stick to the issues that focus more on illustration, comic art, inks, and other similar things) I would also recommend their special issues/books that are absolutely overloaded with all kind of helpful shit.",
  "board": "ic"
},
{
  "text": "Where did you find this?",
  "board": "ic"
},{
  "text": "Just bought this. What am I in for?",
  "board": "lit"
},
{
  "text": "Just bought this. What am i in for?",
  "board": "lit"
},
{
  "text": "Just tell me what the book is about.",
  "board": "lit"
},
{
  "text": "An early enthusiast for the Melville Revival, British author E. M. Forster, remarked in 1927: \"Moby-Dick is full of meanings: its meaning is a different problem.\"[19] Yet he saw as \"the essential\" in the book \"its prophetic song\", which flows \"like an undercurrent\" beneath the surface action and morality.[20]\n\nBiographer Laurie Robertson-Lorant sees epistemology as the book's theme. Ishmael's taxonomy of whales merely demonstrates \"the limitations of scientific knowledge and the impossibility of achieving certainty\". She also contrasts Ishmael and Ahab's attitudes toward life, with Ishmael's open-minded and meditative, \"polypositional stance\" as antithetical to Ahab's monomania, adhering to dogmatic rigidity.[21]\n\nMelville biographer Delbanco cites race as an example of this search for truth beneath surface differences. All races are represented among the crew members of the Pequod. Although Ishmael initially is afraid of Queequeg as a tattooed cannibal, he soon decides, \"Better sleep with a sober cannibal than a drunken Christian.\"[22] While it may be rare for a mid-19th century American book to feature black characters in a nonslavery context, slavery is frequently mentioned. The theme of race is primarily carried by Pip, the diminutive black cabin boy.[23] When Pip has almost drowned, Ahab, genuinely touched by Pip's suffering, questions him gently, Pip \"can only parrot the language of an advertisement for the return of a fugitive slave: 'Pip! Reward for Pip!'\".[24]\n\nEditors Bryant and Springer suggest perception is a central theme, the difficulty of seeing and understanding, which makes deep reality hard to discover and truth hard to pin down. Ahab explains that, like all things, the evil whale wears a disguise: \"All visible objects, man, are but pasteboard masks\" — and Ahab is determined to \"strike through the mask! How can the prisoner reach outside, except by thrusting through the wall? To me, the white whale is that wall\" (Ch. 36, \"The Quarter-Deck\"). This theme pervades the novel, perhaps never so emphatically as in \"The Doubloon\" (Ch. 99), where each crewmember perceives the coin in a way shaped by his own personality. Later, the American edition has Ahab \"discover no sign\" (Ch. 133) of the whale when he is staring into the deep. In fact, Moby Dick is then swimming up at him. In the British edition, Melville changed the word \"discover\" to \"perceive\", and with good reason, for \"discovery\" means finding what is already there, but \"perceiving\", or better still, perception, is \"a matter of shaping what exists by the way in which we see it\".[25] The point is not that Ahab would discover the whale as an object, but that he would perceive it as a symbol of his making.[25]\n\nYet Melville does not offer easy solutions. Ishmael and Queequeg's sensual friendship initiates a kind of racial harmony that is shattered when the crew's dancing erupts into racial conflict in \"Midnight, Forecastle\" (Ch. 40).[13] Fifty chapters later...",
  "board": "lit"
},
{
  "text": "This is pretty long. Give me the gist.",
  "board": "lit"
},
{
  "text": "bump",
  "board": "lit"
},
{
  "text": "/clas/ - Classical Greek and Roman Literature Thread and /lit/'s bulwark of bitter battle\n\nIt's been awhile lads\n\n>classics that you are reading right now\n>expected future readings\n>interesting scholarship you’ve come across, old and new\n\nCHARTS\nStart with the Greeks\n\nResume with the Romans",
  "board": "lit"
},
{
  "text": "Its a rebinding that was done in red. Its in greek. Disrespecting the Minotaur is a cardinal sin.",
  "board": "lit"
},
{
  "text": "Finished Odyssey and I tried reading the Aeneid but it was just too confusing for me with all the Roman names (pic related for feel) as well as the translation doesn't seem that smooth. Still debating whether to just read Posthomerica as my next classic instead or order the Homeric fragments and Hymns and wait a bit",
  "board": "lit"
},
{
  "text": "This won't answer your question, but the Neoplatonist Damascius has many interesting things to say about pleasure.",
  "board": "lit"
},
{
  "text": "What are some Classical Fetishes you guys have? I always like when the hero dies at the end, like Jason",
  "board": "lit"
},
{
  "text": "What's the funniest or best Aristophanes play?",
  "board": "lit"
},
{
  "text": "ITT: Based Novels",
  "board": "lit"
},
{
  "text": ">thinking the stranger is any good\n>using \"based\"\nreddit go away",
  "board": "lit"
},
{
  "text": "Why can't I get into contemporary female-authored books, or, with few exceptions, female-authored books in general? One reason might be banality, most of the authors seems to be permutation of a fixed set of ideas, and rarely introduce anything out-of-the-box. But it isn't the only thing. Is it the prose, writing style, I really can't say, I just don't simply find the same pleasure as reading a man-authored book.",
  "board": "lit"
},
{
  "text": "All of her work can be summarized with:\n>tfw craving for Chad's cock",
  "board": "lit"
},
{
  "text": "Because women don't know what it's like to take this world and crush it in your fucking hands, so their shit is stanky and boring as fuck\nYou wanna read about making cupcakes and sucking cock or going to war and raping an entire village?",
  "board": "lit"
},
{
  "text": "women cant right good",
  "board": "lit"
},
{
  "text": "Annie Dillard\nMary Oliver\nSusan Sontag\nJoan Didion\nAmy Tan\nJoyce Carol Oates",
  "board": "lit"
},
{
  "text": "so, if you die in neverland you die irl?",
  "board": "lit"
},
{
  "text": "What sa ts a palindrome",
  "board": "lit"
},
{
  "text": "Yeah\n\nInception rules",
  "board": "lit"
},
{
  "text": "oye done puedo encontrar concursos para relatos cortos en espanol? (haci se dice 'short stories'?) quiero practicar traduciendo mi espanol pero necesito objetivos solidos para darme motivacion. gracias chicos",
  "board": "lit"
},
{
  "text": "Son muy comunes al menos aquí en México, checa en las páginas de universidades en facebook, normalmente comparten covocatorias y espacialmente en esta época hay muchas.",
  "board": "lit"
},
{
  "text": "He de ser sincero, no manejas lo suficientemente bien el español como para escribir relatos cortos.",
  "board": "lit"
},
{
  "text": "At least it's pronounced the way it's written unlike French or some other faggot language.",
  "board": "lit"
},
{
  "text": "They're more commonly known as \"cuentos\", too.",
  "board": "lit"
},
{
  "text": "Keep practicing, there are like 8 mistakes in your small text (at least).",
  "board": "lit"
},
{
  "text": "Where do you personally get to find today's philosophers, /lit/?\n\nIf it wasn't for 4chan i would probably never have found out about Nick Land or Mencius Moldbug. \n\nBut i was wondering if there's any \"spots\",\"pools\" or \"places\" (if you catch my drift) where contemporary philosophers can be found, or at the very least get a higher exposure as to find them out more easily?",
  "board": "lit"
},
{
  "text": "bump",
  "board": "lit"
},
{
  "text": "Good riddance",
  "board": "lit"
},
{
  "text": "super edgy",
  "board": "lit"
},
{
  "text": ">modern literature at ENS and none of them knew about Ellul for exemple.\nFrench \"exceptionalism\" at work right there. \nWhen will you fuckers admit that the grandes ecoles were a mistake? I've never met people so formatted to to most blind conformism, and I come from one of those Anglo-American colleges where people take trannies seriously.",
  "board": "lit"
},
{
  "text": "Does anyone here use audiobooks? I find I make a lot more progress with them.",
  "board": "lit"
},
{
  "text": ">be me reading some passage from Plato the one where Socrates is condemned to death\n>\"Bruh the soul is eternal\"\n>\"Duude like everything is opposites man\"\n>\"you can never go to heaven if you aren't a true philosopher.\"\nI am having a hard time reading philosophy and an even harder time finding reasons to read it. The essays I have written for PHI101 makes me feel like a talentless pseud. Is it normal to disgree vehemently with philosophers? What is the goal of philosophy because my Prof already starting to lecture us on female embodiment which I'm not sure is political?\n\nAlso, the passages are written abstrusively that it takes me up to 10 minutes to understand one page. Plato is easy reading but Hume is fucking hard man.",
  "board": "lit"
},
{
  "text": ">Hume is fucking hard\nNo, he's not. If you have any difficulty with him maybe you can tell us what's boolin so we can help you?",
  "board": "lit"
},
{
  "text": ">Socrates and Plato are primitive\n\nPlease stop this.",
  "board": "lit"
},
{
  "text": "I'm stuck on his theater metaphor.",
  "board": "lit"
},
{
  "text": ">He didn't start with the presocratics.\nNGMI",
  "board": "lit"
},
{
  "text": "Its not like you have to agree with everything philosophers say. I despise platos idea of philosopher kings. \nForm your own opinion, from a wide range of works.",
  "board": "lit"
},
{
  "text": "Stack thread.",
  "board": "lit"
},
{
  "text": "Is Mandarin Chinese about the Italian Mafia?\nThe Corleone family in particular.",
  "board": "lit"
},
{
  "text": "lol. \n\nthat's funny. But seriously I've read both P&V and Schwartz' in full and the latter is far superior. You can tell in first few pages. Just the first chapters yourself.",
  "board": "lit"
},
{
  "text": ">the anatomy of melancholy \n\nnice to see this meme catching on desu",
  "board": "lit"
},
{
  "text": "yes, but it’s written like a grammar reference book. It reminds me of the Dictionary of the Khazars, except that it’s even more complex.",
  "board": "lit"
},
{
  "text": "How is it a meme? Barzun sold me on it in Decadence.",
  "board": "lit"
},
{
  "text": ">maybe the real Infinite Jest is the friends we made along the way\n\nWhat the fuck DFW",
  "board": "lit"
},
{
  "text": "\"Yeah, so, that was the Origin of Species.\"\n\nwhat in the absolute dick, Darwin?",
  "board": "lit"
},
{
  "text": ">Hello and welcome to the bible\nwtf jesus",
  "board": "lit"
},
{
  "text": "Lifts-Her-Tail\nYou embarrass me, sir!\nCrantius Colto\nFear not. You are safe here with me. You truly are a Lusty Argonian Maid\n\nWhat in Oblivion, Crassius Curio??",
  "board": "lit"
},
{
  "text": "Kek'd",
  "board": "lit"
},
{
  "text": "\"I walke thru the wuds, wonderin wer I culd feind The Wake.\"\nWhat the fuck Kingsnorth, couldn't even change the title for your fake language!?!",
  "board": "lit"
},
{
  "text": "My reading list for the summer. \n\nWhat to expect?\n\nHave you planned on reading anything particular during this summer?",
  "board": "lit"
},
{
  "text": "White Noise was really great in my opinion.",
  "board": "lit"
},
{
  "text": ">Fear and Loathing in Las Vegas\n>The Picture of Dorian Gray\n>The Scarlet Letter (I never had to read it in HS, so I figured I should)\n>Siddhartha (re-read)\n>Anna Karenina (re-read)\n>The War of Art\n>Wuthering Heights\n>Carmilla\n>Jane Eyre\n>Don Quixote\n\nIn no particular order. Probably some poetry and light reading in between, as well.",
  "board": "lit"
},
{
  "text": "Samesies OP.",
  "board": "lit"
},
{
  "text": "Currently Reading:\n>Paradise Lost\n>The Trial\n>Ulysses\nOver the Summer I'm planning to read:\n>Don Quixote\n>The Waste Land\n>The Old Man and the Sea\n>Candide\n>Lolita\n>The Master and Margarita",
  "board": "lit"
},
{
  "text": "My reading list is just The Bible and a bunch of hermetic sacred texts",
  "board": "lit"
},
{
  "text": "What is your favorite novel of all time?",
  "board": "lit"
},
{
  "text": "The Long Walk\n>realistically we will never see another get this big on /lit/\nMakes me sad",
  "board": "lit"
},
{
  "text": "check\nThe Master and Margarita",
  "board": "lit"
},
{
  "text": "It is obfuscation. Everything I share must be cryptic, because as the great minds before me taught, sacred knowledge is not to be shared with the uninitiated, and can be earned only by those who can decipher it from a riddle\nAlso without arguing there can be brotherly love and acceptance, together in which we shall fight against the perverts and degenerates! Love or fight, but cease to argue with fools!\nYou are on the right side, though, that is plain to see, brother",
  "board": "lit"
},
{
  "text": "Could you link the theory? Thanks",
  "board": "lit"
},
{
  "text": "It doesn't matter how old I get. \n\nWhen I sit down with a warm cup of tea or hot chocolate, and I got a blanket over my shoulders, this book always takes me to the next level of comfy.\n\nI don't know why.",
  "board": "lit"
},
{
  "text": "What’s your favorite banned books?",
  "board": "lit"
},
{
  "text": "sure showed him you pathetic coward",
  "board": "lit"
},
{
  "text": "but what about his magazines?",
  "board": "lit"
},
{
  "text": "Mein Kampf\nAnarchist Cookbook",
  "board": "lit"
},
{
  "text": "the rest of the Corpus Hermeticum, Plato’s dialogues and personal instructions, Aristotle’s writings and the Egyptian magical papyri hidden in the Vatcian archives",
  "board": "lit"
},
{
  "text": "200 years together.",
  "board": "lit"
},
{
  "text": "Trying to improve my life /lit/\nPlease recommend some good reads to help me in my journey.",
  "board": "lit"
},
{
  "text": "Yeah, so what?",
  "board": "lit"
},
{
  "text": "unironically?",
  "board": "lit"
},
{
  "text": "Read Harold Bloom to improve your spiritual health\nRead everything George Orwell wrote EXCEPT 1884\nDon't bother reading the Greeks, but read their 18th century advocates\nMemorize a poem; any poem. I'd suggest either of the Brownings.\nRead all the modern non-fiction that interests you; it'll make you sound more intelligent at parties.",
  "board": "lit"
},
{
  "text": "more of her and I'll give you 3 recs",
  "board": "lit"
},
{
  "text": "120 days of Sodom by the Divine Marquis.",
  "board": "lit"
},{
  "text": "ITT: disturbing albums",
  "board": "mu"
},
{
  "text": "wait why\n\nis it just blocked?",
  "board": "mu"
},
{
  "text": "i am really concerned from where that album art came from, i really hope it's not a snap shot of a CP as well.",
  "board": "mu"
},
{
  "text": ":^)",
  "board": "mu"
},
{
  "text": "idk how to open a port there",
  "board": "mu"
},
{
  "text": "insane how nobody has mentioned this",
  "board": "mu"
},
{
  "text": "Sharethread\n\nETIQUETTE\n- Include correct format (artist / band, title of release, year of release, cover art, the file type (v0, 320 mp3, FLAC, etc), short description, YouTube sample, link)\n- Send thanks if you have downloaded something to let them know they did a good thing\n- Avoid sharing / requesting things that are already on the archive\n- Soulseek / rutracker are your friends, too - just don't argue in this thread about it\n\nREQUESTS\n>I have a request! Did I...\n- Check the archive for a live link before requesting?\n- Share something first?\n- Google \"blogspot + artist name + album name\"\n\nARCHIVE",
  "board": "mu"
},
{
  "text": "Thanks!\n\n\nThis is crazy, really cool though. It's like a punk version of Guerilla Toss",
  "board": "mu"
},
{
  "text": "legendary",
  "board": "mu"
},
{
  "text": "1979 - Richard Lloyd - Alchemy @FLAC\n>pop rock, power pop\nthe guitarist from Television who also worked with Matthew Sweet\n",
  "board": "mu"
},
{
  "text": "shit forgot the cover",
  "board": "mu"
},
{
  "text": "cool, thanks",
  "board": "mu"
},
{
  "text": "trips or better decides the best album of the 80s",
  "board": "mu"
},
{
  "text": "digits have decided",
  "board": "mu"
},
{
  "text": "Some great reward is better",
  "board": "mu"
},
{
  "text": "the wife album",
  "board": "mu"
},
{
  "text": "Dubs confirm",
  "board": "mu"
},
{
  "text": "When I find myself in times of trouble\nWife Cynthia comes to me\nScreaming words of horror\nLet it beat",
  "board": "mu"
},
{
  "text": ">General Folder #1. Renaissance up to 20th century/modern classical. Also contains a folder of live recordings/recitals by some outstanding performers.\n>General Folder #3. Mostly 20th century/modern with other assorted bits and pieces\n>General Folder #4. Renaissance up to early/mid-20th century. Also contains a folder of Scarlatti sonate and another live recording/recital folder.\n>General Folder #5. Renaissance up to late 19th century\n>General Folder #6. Very eclectic mix\n>General Folder #7. Mostly Romantic and modern music.\n>Renaissance Folder #2. Motets and madrigals (plus Leiden choirbooks)",
  "board": "mu"
},
{
  "text": "in which ways?\n\nyou're such a pretentious fool",
  "board": "mu"
},
{
  "text": ">this bullshit post\n>implying Bach and all his contemporaries didn't copy the shit out of Vivaldi\n\ntop lel",
  "board": "mu"
},
{
  "text": "Phillip Glass sucks cock.",
  "board": "mu"
},
{
  "text": "brave post",
  "board": "mu"
},
{
  "text": "dead before it was born edition\n\n",
  "board": "mu"
},
{
  "text": "ataraxia - prophetia\n\n\nthe dead c - tusk\n\n\nbgm - back ground music\n\n\nandrew cox - hydra\n\n\ncheck out the motion sickness of time travel / nova scotian arms splits",
  "board": "mu"
},
{
  "text": "will do thanks",
  "board": "mu"
},
{
  "text": "actually you're just getting bored with 4chan",
  "board": "mu"
},
{
  "text": ">prophetia\nAye, your recomendation was pretty spot on. Thanks!\n\nNow why the fuck would you think i would listen to Grateful Dead?",
  "board": "mu"
},
{
  "text": "What the hell went so wrong?",
  "board": "mu"
},
{
  "text": "I never take anyone's opinion seriously when their issue with the album is that it \"sounds too much like top 40 radio\" or that there's too many features. the reason why it sucks is because the production is fucking horrible. the album would be better if it actually sounded like generic trap and edm. instead all of it sounds like it was produced by a 16 year old in garageband (which isn't entirely off base). it blows my mind that someone who's had as long as a career as damon could produce something so amateurish and hollow.",
  "board": "mu"
},
{
  "text": "sounds too much like top 40 radio\nthere's too many features",
  "board": "mu"
},
{
  "text": "I don't get why every track was a boring demo with a rapper? The tracks featuring rappers on Demon Days and Plastic Beach were much more diverse and interesting and they never feel monotonous, you have songs like Empire Ants, the Cloud of Unknowing and Stylo on the same record and it really works",
  "board": "mu"
},
{
  "text": "also, how are you going to have Danny Brown and DRAM, (even if you don't like them, they're very charismatic rappers) and make them as bland and forgettable as everything else on the record?",
  "board": "mu"
},
{
  "text": "nothing. this is their best album",
  "board": "mu"
},
{
  "text": "Previous threads: \n\nDON'T POST Soundcloud, YouTube, or any other links where you are not anonymous (unless somebody asks you for it). That's considered self promotion and will result in bad feedback.\n\nGIVE feedback and RECEIVE feedback. Upload WIPs on \n>RESOURCES:\nSound Design:\n>SeamlessR (in-depth music production and sound design tutorials, based on FL Studio)\n>Rocket Powered Sound (Constant quality uploads of various EDM sounds in Serum with explanations that help make something unique)\n>Syntorial (widely considered the best place to go to learn synthesis)\n>Mr. Bill (Ableton based Sound Design)",
  "board": "mu"
},
{
  "text": "It depends on what the pots do, if they're simply potentiometers then yeah you could add a small VCA circuit that has the same range as the pot and control that with CV. If the pots are actually encoders that send digitized signals to a processor then to replace them you're looking at building a circuit to recreate those signals and it would be a more involved task.",
  "board": "mu"
},
{
  "text": "probably. i guess measure what the pots do and then see if you can replicate that with whatever you'll output to it. \n\nthough from the little i know modular is voltages and pots change resistance so i dunno - you'll have to read up",
  "board": "mu"
},
{
  "text": "Any advice for someone who knows absolutely nothing about music and loves and wants to make electronic music?",
  "board": "mu"
},
{
  "text": "kys",
  "board": "mu"
},
{
  "text": "Nice dubs. I will.",
  "board": "mu"
},
{
  "text": "YOU JUST GOT",
  "board": "mu"
},
{
  "text": "IT SHOULD BE CALLED ANTI DEPRESSION",
  "board": "mu"
},
{
  "text": "A BOOK OF AUBREY BEARDSLEY ART CORRUPTED ME IN MY YOUTH",
  "board": "mu"
},
{
  "text": "Say \"Ma, this is my broTHEER\"",
  "board": "mu"
},
{
  "text": "why the fuck did he have to remove this line",
  "board": "mu"
},
{
  "text": "there aren't enough dogs in this CSH thread",
  "board": "mu"
},
{
  "text": "ANTIDEPRESSIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON",
  "board": "mu"
},
{
  "text": "there is loads of interestin and strange minimal a lot of plus8 is just dull",
  "board": "mu"
},
{
  "text": "i agree with everything you said, I don't even like richie hawtin especially not his later stuff",
  "board": "mu"
},
{
  "text": "because the gyms around here rarely play anything that isn't top 40 reggaeton",
  "board": "mu"
},
{
  "text": "post offbeat techno",
  "board": "mu"
},
{
  "text": "Is this the absolute state of this board?",
  "board": "mu"
},
{
  "text": "Jesus, what happened to this board? It's all normalfag shit now.",
  "board": "mu"
},
{
  "text": "based",
  "board": "mu"
},
{
  "text": "No, I'm not based. That isn't my goal nor a compliment to me. I haven't done anything until I fully redpill the entire world of Kanye's mediocrity.",
  "board": "mu"
},
{
  "text": "> the only reasons people could possibly dislike Kanye are because they're racist neckbeards\n\nwhy do hiphop fans always do this? Is it because the only listen to hiphop out of white guilt and project that onto anyone that doesn't?",
  "board": "mu"
},
{
  "text": "I’m guessing you weren’t here when Pitchfork gave MBDTF a 10/10.",
  "board": "mu"
},
{
  "text": "After Chabon by Sumo is God Tier",
  "board": "mu"
},
{
  "text": "patrician",
  "board": "mu"
},
{
  "text": "Still loving this",
  "board": "mu"
},
{
  "text": "help me /mu what's my opinion about this?\n\n>ig stream\nile.io/81ct2\n>split tracks",
  "board": "mu"
},
{
  "text": "Sorry, it's not exactly like WPSIATWIN so 1/10.",
  "board": "mu"
},
{
  "text": "Understandable",
  "board": "mu"
},
{
  "text": ">is /mu/ usually this reddit?\nhe asks as he types with reddit spacing",
  "board": "mu"
},
{
  "text": "The Reddit spacing is a myth",
  "board": "mu"
},
{
  "text": "So what's the consensus on star treatment?",
  "board": "mu"
},
{
  "text": "Why is everyone talking about this suddenly?",
  "board": "mu"
},
{
  "text": "Just ordered these in black. Did I waste my money or what",
  "board": "fa"
},
{
  "text": "At the end of the day it's just fucking converse with a print on it. And you spent double. What for? Literally almost every 16 year old has a pair of converse I will never understand the impulse to stand out by being so rebellious as to buy converse with a heart on instead.",
  "board": "fa"
},
{
  "text": "would have been better to make it yourself imho",
  "board": "fa"
},
{
  "text": "how to do that",
  "board": "fa"
},
{
  "text": "take converse and draw heart",
  "board": "fa"
},
{
  "text": "painting, heat press, idk mac learn some art",
  "board": "fa"
},
{
  "text": "/Cringe/ - Delusional edition",
  "board": "fa"
},
{
  "text": "Pretty good, not cringe at all.",
  "board": "fa"
},
{
  "text": "I see no problem with this, the band keeps time and its some pretty good shit imho...\n\ncringe to some probably based on genre alone but come on now, there is some way worse shit on the internet",
  "board": "fa"
},
{
  "text": "How is this cringe?",
  "board": "fa"
},
{
  "text": "hey this is pretty good, not cringe at all",
  "board": "fa"
},
{
  "text": "Seen this posted numerous times, never actually watched it til now. Pretty cool, actually. But why does the guitarist do that stuff with his legs?",
  "board": "fa"
},
{
  "text": ">*Jacks your style*",
  "board": "fa"
},
{
  "text": ">watches akira once \n>or more like over a hundred times",
  "board": "fa"
},
{
  "text": "w2c reps of those CПOPT pants",
  "board": "fa"
},
{
  "text": ">Oscars Wao core",
  "board": "fa"
},
{
  "text": "just get regular sweats, waste to get fakes",
  "board": "fa"
},
{
  "text": "What are some /fa/ dog breeds?",
  "board": "fa"
},
{
  "text": "This one",
  "board": "fa"
},
{
  "text": "far right inspo?",
  "board": "fa"
},
{
  "text": "ive always wanted a boot that looks kinda like this. any suggestions?",
  "board": "fa"
},
{
  "text": "where 2 cop this sweater? looks really comfy.",
  "board": "fa"
},
{
  "text": "What's are the best shoe protection sprays?",
  "board": "fa"
},
{
  "text": "Whats a good colour shirt to go with dark brown trousers?",
  "board": "fa"
},
{
  "text": "If it looked strange then no",
  "board": "fa"
},
{
  "text": "i recieved this jacket as a gift and i dont know what to wear with it. i was thinking of white gats, grey tshirt and navy pants. what would you wear with it?\n\nor maybe i should just sell it because the jacket looks kinda tacky?",
  "board": "fa"
},
{
  "text": "Is this bait? Those would all look awful with brown. Blue is the best complement.",
  "board": "fa"
},
{
  "text": "if you have a somewhat thin neck then maybe; otherwise \n\nhow do i compensate short legs via clothing?",
  "board": "fa"
},
{
  "text": "Good jacket colour for forest green pants?",
  "board": "fa"
},
{
  "text": "Lunarcore/astrowave general\n\"We finally figure out this 'summer' thing\" edition",
  "board": "fa"
},
{
  "text": "I see your point\nAll I really wanted was the pants, I think the site is best used as a reference for fit ideas",
  "board": "fa"
},
{
  "text": "and what are they exactly?",
  "board": "fa"
},
{
  "text": "Anyone have the one of this dude with yeezys?",
  "board": "fa"
},
{
  "text": "Fashion is for narsissitic faggots who cannot deal with their insecurities and shallow mentality, prove wrong",
  "board": "fa"
},
{
  "text": "ID on pic related jacket?",
  "board": "fa"
},
{
  "text": "narcissistic INSECURE faggots",
  "board": "fa"
},
{
  "text": "so?",
  "board": "fa"
},
{
  "text": "W2c pustulent cyst?",
  "board": "fa"
},
{
  "text": "This is what i wear 95% of the time, workwear pants and a t-shirt. what are some cool things i can add to my outfit to make me stand out more ? maybe a ring or get a tattoo ?",
  "board": "fa"
},
{
  "text": "expensive shoes and a single ear looped earring.\nall the kids are wearing rings.",
  "board": "fa"
},
{
  "text": "Nice watch n cool belt",
  "board": "fa"
},
{
  "text": "thanks",
  "board": "fa"
},
{
  "text": "im thinking about getting this on my upper arm, should i get it ?",
  "board": "fa"
},
{
  "text": "no that would be gay",
  "board": "fa"
},
{
  "text": "What do you guys do with your arms and legs during the summer? My arms look like picture related and I'm not sure if shaving them would look better or not.",
  "board": "fa"
},
{
  "text": "Once again, you didn't say which body part, but I'm assuming legs now. I trim my leg hair once a month just a little bit so it isn't as dense and bushy. It takes about 10 mins which is okay to me, since I do it so rarely. Whatever works for you man.",
  "board": "fa"
},
{
  "text": "No, no. Sorry, arms. I think rogaine made my arms hairier. That or they just turned darker with age (i'm over 25 and my father is way more hairy than me). I don't understand why you think it's not possible to trim your arm hair with a electric razor?",
  "board": "fa"
},
{
  "text": ">scissors\nyou have no idea what the fuck you're talking about\nalso who the fucks goal is it to have stubbly arms, thats somehow even gayer than completely smooth\n\n\n\nimpressed, i use a razor and it takes me forever and a half to shave even just my arms",
  "board": "fa"
},
{
  "text": ">arms\nOh, okay. Well, I can tell you from experience that women don't mind my smooth arms at all, and they also don't mind the super hairy arms. But what they really HATE with a passion is when I forgot to shave and they discover the stubble on my arm. For some reason a baby smooth arm is okay, but as soon as they realize it's the product of shaving, they pop a vein. So I don't know about you, but I always make sure they're smooth by wet shaving. I can't imagine you get a perfect result with an electric razor.\n\n\n>it takes me forever\nDo you use shaving cream? I use one of these razors with 4 razor blades in them if that makes a difference. (pic related) Though I guess you need a lubricant and also flush the razor after each stroke under the tap.",
  "board": "fa"
},
{
  "text": "nah i dont use shaving cream, maybe i should though ill give it a shot, thanks",
  "board": "fa"
},
{
  "text": "is Rick & Morty fa?",
  "board": "fa"
},
{
  "text": "no",
  "board": "fa"
},
{
  "text": "So the why did the edgy rapper JPEGMAFIA unironically name dropped Rick & Morty in 2018?",
  "board": "fa"
},
{
  "text": "No, but Bushworld Adventures is",
  "board": "fa"
},
{
  "text": "How does /fa/ treat their nails? Long, short, clear coat, painted etc. What's the most /fa/ and why won't you stop biting yours?",
  "board": "fa"
},
{
  "text": "This is ogre hand tier",
  "board": "fa"
},
{
  "text": ">Ogre life\n>Ogre work\n>Ogre clothes\n>Ogre hands\nBased.",
  "board": "fa"
},
{
  "text": "Left is freshly cut, right is after a week.\nI'm a guy btw",
  "board": "fa"
},
{
  "text": "When I'm in NA, short w rounded edges, gel polish manicure in a neutral colour or red or baby pink or like the \"minimal nail art\" specials my nail place did (pic relatedt)\n\nHere in Germany I have to paint my own nails though yikes",
  "board": "fa"
},
{
  "text": "the long nails and retracted skin make this look like the hands of a corpse",
  "board": "fa"
},
{
  "text": "This argument has been everywhere, but I just want /fa/'s opinion on this\n\nWhite converses or black converses?\nI want to buy a pair for the summer but can only afford one\nWhether they're high top or low top is up for debate too\n\nFor reference, I'm a fairly short guy\n\nPic related, those are all the pairs I'd consider wearing",
  "board": "fa"
},
{
  "text": "LOOOOL anon took the first retards advice and got the literal worst one",
  "board": "fa"
},
{
  "text": "this",
  "board": "fa"
},
{
  "text": "High tops or nothing",
  "board": "fa"
},
{
  "text": "id on pants?",
  "board": "fa"
},
{
  "text": "thoughts on jack purcells?",
  "board": "fa"
},{
  "text": "what are the best designed flags? here are my top 4",
  "board": "gd"
},
{
  "text": "I really like the fact that, unlike older flags, instead of drawing the island and the lake they just drew the gliphs for rock and water to create the symbol for island.\nHowever my country’s flag still needs a lot of work",
  "board": "gd"
},
{
  "text": ">Considering UK citizens often don't even which way it goes makes it crappie design. Also it's not even symmetrical.\nNani? If you flip it around, it's still the same. Are you, or am I retarded?",
  "board": "gd"
},
{
  "text": ">Nani\n>If you flip it around, it's still the same\nConfirmed for retard.",
  "board": "gd"
},
{
  "text": "???????????????????",
  "board": "gd"
},
{
  "text": "Anyone here know where I can find good examples of graphic design portfolios?",
  "board": "gd"
},
{
  "text": "www.telegraaf.nl",
  "board": "gd"
},
{
  "text": "Does anyone know where i can find myself a free download for henry dreyfuss' symbol sourcebook? I need it bad for some artwork but a paperback copy will cost my almost 50 bucks.",
  "board": "gd"
},
{
  "text": ">almost 50 bucks.\noh noooo. 50 bucks, how will you ever recover?\n\nBuy a used one then poorfag\nIf you can't afford $27 you have no business doing designwork anyway and you should go get a job.",
  "board": "gd"
},
{
  "text": "archive search throws no results and I've never heard of this book before\n\n\nnot OP but $50 is 3 days of minimum wage work at my shithole country",
  "board": "gd"
},
{
  "text": "Got a copy of this used in great condition for less than a fifth of that recently on Amazon, just keep an eye out for deals.",
  "board": "gd"
},
{
  "text": "true grit texture packs",
  "board": "gd"
},
{
  "text": "Aphex Twin, Patrician.",
  "board": "gd"
},
{
  "text": "I agree, but is that way",
  "board": "gd"
},
{
  "text": "anyone know where i can find true grit textures ILLEGALLY",
  "board": "gd"
},
{
  "text": "My university break is coming up soon and I want to add Photoshop and Illustrator to my set of skills. Do you guys have any beginner resources or resources that really helped you when you first started learning?",
  "board": "gd"
},
{
  "text": "honestly for ps and ai you barely need anything more than the basics which could take a few days to learn, from there you'll just have to practice a lot but you might need to study the fundamentals of design/typography first, I've seen quite a few professional designers some that even worked on big hollywood movies saying that they know less than 5% of both ps or ai and that they used the software in a different way from others, as a start I would recommend the book series called Adobe \"x\" in a classroom -just replace x with any adobe software you want (also you can get them for free at cgpeers). \n\nfor videos here's some (some are long but its useful to see how photographers work using a non-destructive workflow)",
  "board": "gd"
},
{
  "text": "thanks a lot, will start working through those textbooks",
  "board": "gd"
},
{
  "text": "Hi, I'm having some trouble understanding the differences between semi-formal and informal structures in a design. I get that formal designs are rigidly placed into grids, which makes them easy to identify, so that's out of the question. I can tell semi-formal and informal designs apart when taken to extremes, but the middle grounds feel a bit muddled to me. I was hoping someone here could clear things out.\n\nTake these two Jack In the Box logos for example. Is it safe to say that the left one is Informal whereas the right one is Semi-Formal? The one int he left has little if any repetition or correlations in spacing while the one in the right at least retains some boundaries such as the limits being the same between the \"Jack\" and \"in the box\" as well as the different elements being aligned towards the center. I'd appreciate it if you guys could give me more examples to help me set these two apart. Thanks beforehand.",
  "board": "gd"
},
{
  "text": "Post good round designs",
  "board": "gd"
},
{
  "text": "yes\n\nno\n\nno\n\nyes\n\nno\n\nyes\n\nyes",
  "board": "gd"
},
{
  "text": "no one cares",
  "board": "gd"
},
{
  "text": "yes",
  "board": "gd"
},
{
  "text": "Hey /gd/, quick question, how much could I charge for and overlay/emoji job for a Twitch channel? I've gotta close this one quick but I have zero idea how much to charge.",
  "board": "gd"
},
{
  "text": "Also I've realized I wrote emojis instead of emotes. Sorry for that.",
  "board": "gd"
},
{
  "text": "Bump!\n\nPlease anons I need an answer",
  "board": "gd"
},
{
  "text": ">wrote emojis instead of emotes. Sorry for that.\nlol, who cares. it's all the same dumb shit.\n\n>I have zero idea how much to charge.\n>Please anons I need an answer\nGoogle it, asshole. 10 seconds of effort showed me that prices people pay usually range from $10-$50 per emote, which sounds extremely cheap to me, but ultimately we can't give you a number, because what you charge is going to depend on how good you are, how detailed the art is, etc.\n\nGamers are generally cheap assholes, so don't be surprised if they balk when you quote them a big number.\n\nAlthough, if you're on 4chan asking how much to charge to make shitty gamer flair you probably suck anyway and don't know what you're doing. charge them five dollars.",
  "board": "gd"
},
{
  "text": "Thanks anon, you can go back to your child porn now.",
  "board": "gd"
},
{
  "text": "...",
  "board": "gd"
},
{
  "text": "Your silence about your own crap speaks volumes",
  "board": "gd"
},
{
  "text": "My mom told her church friends that im really good on a computer so i got forced into making this for them. my first time using illustrator instead of paint. can I get some pointers? and do you think a border would suit the design?",
  "board": "gd"
},
{
  "text": ">using a font or visual element because a famous designer used it without knowing the context or technique behind that choice\nNow THIS is why I hate this board. You think because someone famous uses something then you can just slap it on anything and it will automatically just work.\n\nFuck all of the way off.",
  "board": "gd"
},
{
  "text": "i mentioned it because you said some shit about it not looking good in print. rand said he used walbaum all the time just because its beautiful. and design reflect the integration of the beautiful and the useful\n\nwhat i'm saying is i don't think you have any design chops. make a better poster - i bet you won't",
  "board": "gd"
},
{
  "text": "I challenge him to make a worse poster\n>I bet he can't",
  "board": "gd"
},
{
  "text": "why would you want to sucker people into a shitty catholic dance? this shit does not deserve a good design.",
  "board": "gd"
},
{
  "text": "Why is this such a nightmare to use? Photoshop and Illustrator are easy in comparison.",
  "board": "gd"
},
{
  "text": "pre-compose those layers man.\nor atleast post-compose in a similar way to how you would merge selected layers in photoshop",
  "board": "gd"
},
{
  "text": "not an AE wiz nor am i complete AE tard but i do have a problem with bezier handles, not sure if its related to RG trapcode or cc2017 if anyone could help?",
  "board": "gd"
},
{
  "text": "Proving my point, the editing you do in Premiere is really basic.\n\n\nGuess we agree to disagree on that.\n\n\n>i would say that, for someone who doesnt know how to use after effects that Pr is a good way to learn the basics.\nit certainly helps to understand PR's editing tools as its kind of a really light version of Ae.\n>its kind of a really light version of Ae\nThat's like saying you can learn the basics of Photoshop by using Illustrator because it shares a few tools... Granted, it probably works to some very minor degree, but why is that ever a point?",
  "board": "gd"
},
{
  "text": "Ae is a piece of cake compared to learning nuke or houdini, I've been wishing to find a software that is like Illustrator but for vector animation where you can animate geometric shapes or 2d illustration and type using vector points etc. maybe one day, eg \n\nare you referring to the graph editor? maybe post a screenshot.",
  "board": "gd"
},
{
  "text": ">2018\n>/gd/\nPeople still thinking Ae is meant for video editing\n\n>it certainly helps to understand PR's editing tools as its kind of a really light version of Ae\nIt's actually closer to Ps with the timeline open\n\n\n>I've been wishing to find a software that is like Illustrator but for vector animation where you can animate geometric shapes or 2d illustration and type using vector points etc\nAe can do this and output it as video\nHTML5 animator can do this as well and output it as html (haven't tried it since beta though and it was pretty buggy)\n>are you referring to the graph editor?\nPretty sure this is him",
  "board": "gd"
},
{
  "text": "How do you do this style or graphic design? \n\nI'm talking about using fibonacci circles and exact angles to determine corners and shit. \n\nIs this something you can do in illustrator?",
  "board": "gd"
},
{
  "text": "it's just a geometric construction of a logo\n\nit's something you DO in illustrator, or did on the drafting-paper before such computer software was available\n\nmainly out of the principle that logo must be reproducable for any medium / use case. having coherent mathematical relationship is very relevant to that.\n\ngolden ratio and such shit is more or less designer's mental masturbation or 'the added value' - a way to sell crap to normies using fancy memewords",
  "board": "gd"
},
{
  "text": "You go straight up. Sketch one by your hand and follow the line and curve/fillet the edges by using circle shape tool.\n\nAlso you don't have to follow golden-rule bullshit, but still understand the ratio of your logo (widh height and every aspect of kerning, etc.)",
  "board": "gd"
},
{
  "text": "fibonacci circles aren't used for anything",
  "board": "gd"
},
{
  "text": ">fibonacci circles",
  "board": "gd"
},
{
  "text": "anon",
  "board": "gd"
},
{
  "text": "So In short I'm trying to start my own motocross/dual-sport business with a focus on clothing and gear. I'd like to start with a youtube channel to gain a following, organize rides, then start selling merch. \n>Issues I am having are:\nHow do you come up with a company name that isn't taken? I've tried combining words I like with prefix/suffixes, but they've all been taken. Also is there a site to check business and domain names?\n>Coming up with a versatile logo that fits into the market. EX Rockstar has claimed yellow/black, Monster has claimed Green. Etc. \n\nAlso, motoX graphics thread? they're mostly vibrant colors and sharp or rugged designs",
  "board": "gd"
},
{
  "text": "Contrary to the popular opinion 98% of a brand is the actual content/product and 2% is design. Design won't save a sub-par product, nor sink a quality one.",
  "board": "gd"
},
{
  "text": ">How do you come up with a company name that isn't taken? \nIt used to be easier a few years ago but then people started buying domain names that sounded cool in the hope of selling it to people who wanted to start an online business, so every semi-coherent name nowadays is already owned by someone, if you're serious about the startup company and/or if you have the money you can try buying a cool-sounding name/.com-domain at some brand.selling website like: \n\n>I've tried combining words I like with prefix/suffixes, but they've all been taken.\nYeah I went through the same thing a few weeks ago, I wanted to came up with two original names and it took me forever. Here's a list I've made of names that could give you some inspiration:\nAlso there's a few things you could try, I would recommend combining an acronym or numbers that are meaningful to you (like a year or initials) with an interesting name (eg. ActionXL, Planet51, JGLimited, Division13)\n\n>Coming up with a versatile logo that fits into the market. EX Rockstar has claimed yellow/black, Monster has claimed Green. Etc. \nComing up with a logo could be complicated, again if you're serious you can either take your time and research how good logos are made or hire a graphic designer (although it could be tricky to find someone who could really nail the look you're going for) check out this vid for an example of how to design a logo/branding:",
  "board": "gd"
},
{
  "text": "Hello /gd/ it seems our IRC is just left barren empty. Instead of making a new thread for a simple discussion why not revive for our IRC?\n\nThe address is on the sticky, but for those who hasn't know it here is it:\n\n#/gd/ @ irc.rizon.net\n#4chan-gd @ irc.freenode.net\n\nAlso this thread is for bumping for anyone is online in the IRC. Feel free.\n\nNote : If you want to have some general discussion on how and why the IRC should/shouldn't be used or have some alternatives, discuss here.",
  "board": "gd"
},
{
  "text": ">text-only protocol for graphic design",
  "board": "gd"
},
{
  "text": "there's a discord or two flying around with /gd/ people in it but it always turns into \"muh glitch art\"\nshit posting, so i dont know if we truly deserve it",
  "board": "gd"
},
{
  "text": "I never seen the point of having IRC channels for a messageboard. One just cannibalise the other too.",
  "board": "gd"
},
{
  "text": "Well those are valid points.\n\n\nAnd that's a disaster.",
  "board": "gd"
},
{
  "text": "I think the point of irc is if anybody needs a fellow /gd/ to work with they can have some convo there before finally decide wether their information is worth giving to us/him. Making a thread is quite slow for answers but good for bumping job vacancy.",
  "board": "gd"
},
{
  "text": "How do you guys feel about spring publisher? I'm thinking of buying the pro version to use instead of indesign and scribus.",
  "board": "gd"
},
{
  "text": ">How do you guys feel\n>to use instead of indesign\ndon't fix what isn't broken",
  "board": "gd"
},
{
  "text": "I just don't feel like subscribing to them, plus you can make cool stuff with other programs as well.",
  "board": "gd"
},
{
  "text": "What is this, My First Publishing Software?",
  "board": "gd"
},
{
  "text": ">buying Adobe CC",
  "board": "gd"
},{
  "text": "There's this stupid game on Telegram you can play that'll generate free ETH.\nIt'll take you like 6 months but it'll increase exponentially overtime as it multiplies the more you play.\n\nYou collect X which farms Y every hour which helps you afford more X with produces even more Y every hour.\n\nYou don't have to spend a fucking dime, you can let it play itself, however I wouldn't mind a referral if you guys decide to play, which will increase our free stacks.\nIt's pretty much peanuts but be a bro because eventually payouts will reduce.\n\nAll 3 games are essentially the same with different skins.\n\nEther Cars\nt.me/CarETH_bot?start=505967183\n\nEther Robots\nt.me/RobotsETHBot?start=505967183",
  "board": "biz"
},
{
  "text": "My friend showed me this shit and all he did was leave it running for 3 months after accumulating a certain amount of multipliers, then after that initial 3 months he's averaging $19 a day",
  "board": "biz"
},
{
  "text": "Rate and thougths plz.",
  "board": "biz"
},
{
  "text": "I have no opinion on the fundamentals but it has been a stinker in my trade history so I blacklisted it",
  "board": "biz"
},
{
  "text": "Rate this cocksuckers",
  "board": "biz"
},
{
  "text": "ICX has good potential imo",
  "board": "biz"
},
{
  "text": "Fasholy my nig",
  "board": "biz"
},
{
  "text": "Sell everything but the Nuls and Aion. Buy Zil. That's it. Could buy some Holo just in case it continues to rise. But that's it.",
  "board": "biz"
},
{
  "text": "A methodology that changed the way software development worked for the better in the late 90's between devs.\n\nAnd that now today has destroyed itself though a cult like dogmatism of project managers that micomanage sweatshops of devs smelling of ass and testosterone to give speedy buggy poorly conceived deliverables known as minimum viable products.\n\nYour Agile Project fails? well your just not doing it the agile way so pay $150 hr consultant/clergyman to show you for nth time how its \"Meant\" to be done.\n\nIts like the argument communism has never been tried.",
  "board": "biz"
},
{
  "text": "/sign of the aquila",
  "board": "biz"
},
{
  "text": ">Not using team coding\n\nLawl cows.",
  "board": "biz"
},
{
  "text": "Pic related is mine, only $12k.",
  "board": "biz"
},
{
  "text": "This. Watchmaking is an art. It’s appreciating something that works wonders on you wrist without the use of batteries or electricity.\n\n\nEach of the older JLC watches have a unique movement that’s only tailored for that one watch. Unlike many other brands who use the same movement in many watches.",
  "board": "biz"
},
{
  "text": "I wear shorts and H&M T-shirt’s and simple $60 Amazon bought Lacoste shoes. But on my wrist I want something I love and enjoy.",
  "board": "biz"
},
{
  "text": "JLC is god tier",
  "board": "biz"
},
{
  "text": "This. Not a breitling or Rolex that any retard can see is an expensive watch but one that is clearly badass and shits on everything else.",
  "board": "biz"
},
{
  "text": "That why it’s a FOCK OFF watch not just a expensive shitter. Chinks and arabs wears AP and Rolexes without care or enjoyment",
  "board": "biz"
},
{
  "text": "Are we going to make it?",
  "board": "biz"
},
{
  "text": "hmmmmm",
  "board": "biz"
},
{
  "text": "plz no",
  "board": "biz"
},
{
  "text": "fuggg",
  "board": "biz"
},
{
  "text": "SEXYYY",
  "board": "biz"
},
{
  "text": "you'll be golden",
  "board": "biz"
},
{
  "text": ">> 0 shill by pajeets still mooning\n\nStay mad shit eaters",
  "board": "biz"
},
{
  "text": "It’s only up 5%",
  "board": "biz"
},
{
  "text": "the coin to end the others. this mooned without a front-end. and this is only the beginning. This is the Youtube coin that we have been waiting for. 85 eth and climbing.\n\nwho got in? who's sleeping on craig grant?\nYOU GON LEARN TODAY\n25% divs are beyond sweet\n\nfun/",
  "board": "biz"
},
{
  "text": "2 eth in and if I sold right now I'd pull out 4.5. That's what's up.",
  "board": "biz"
},
{
  "text": "If anyone actually falls for this shit they deserve to lose their gains.",
  "board": "biz"
},
{
  "text": "what if i told you im already 2.5x? does that mean i hate money? let me know, if you say so then i will sell. Awaiting your response",
  "board": "biz"
},
{
  "text": ">9290127\ndumb cuck, i make money on any contract, im obviously fucking bumping this thread. are you fucking new????\n\nim bringing awareness to p3d because i know that it will pop off again. but yea im fucking killing it in this one, i got in right away as soon as i saw craig throw in that last 1.1 eth to make it over 7. how fucking stupid are you?\n\noh wait you must be new to this.",
  "board": "biz"
},
{
  "text": "nah fuck you. i bet we know eachother, hows it going on your end my guy :D",
  "board": "biz"
},
{
  "text": "Okay guys, serious crypto thread\n\nHow do you take profits and manage your portfolio?\n\nAs we know, only thing which makes sense when it comes to altcoins is BTC value of them.\n\nSay, you bought 0.5 BTC at 8000$, then alt season has begun, you took positions in 3 coins, one short term, one mid term, one long term.\n\n1) Short term coin has mooned from say 24k sats to 37k sats (50-55%). You took your BTC profits.\n\n2) Mid term coin shows steady growth, but due to overall market it could possibly have a dip to levels you had bought in earlier, but could not dip and continue to steady grow. \nA) Sell your stack at +10% to buy the dip\nB) Don't sell your stack, but use gains from previous short term coin to buy the dip if it happens\n\n3) Your long term coin is trading +/- sideways, sometimes goes up, sometimes goes down, but clearly many people are accumulating, moon mission is 6-18 months away",
  "board": "biz"
},
{
  "text": "Shotgun method anon. Make a snapshot of every shillthread and invest a fraction equally into everything. You cannot possibly lose. The entire market cant possibly die.\n\nThe hardest part is keeping up with the exchanges and remembering all the passwords and codes, I bought one of the blank pages books for studying for that and keep everything it in.\n\nIm literally invested in about ~900 projects by now. I dont have much money, but I wont be going down :)",
  "board": "biz"
},
{
  "text": "I thought about this, but there's too much information to process in order to keep track of everything + in my opinion by doing this you're overexposed to whole market sentiment. Few exchanges could exit scam, 666 projects could go to zero, but other part of your folio will grow. \nAt which point do you take profit to upgrade your lifestyle and cover entry costs? Or you're going all in till 2025?\n\nBtw by upgrading lifestyle I mean some basic things, I don't even have a car for example and still have 12k debt for my house, also have list of things need to buy to be more flexible with my decisions and opportunities. At the moment I can't afford a ticket to visit my friends in London and make new connections IRL, and so on, but at the same time I don't know when to cash out from crypto to afford these things",
  "board": "biz"
},
{
  "text": "Never take profits just keep acumalating",
  "board": "biz"
},
{
  "text": "Concentrate on a few big moves like BCH or EOS or ETH, long all the way up, short all the way down.\nDon't get lost in diversification and low mcap shitcoins, it's for plebs.",
  "board": "biz"
},
{
  "text": "As I said I dont have much but what I can set aside I pretty much go all in with. The sad part is that alot of it gets lost in fees, about half my losses came through that manner. But Im hedged against the entire market.\n\nI dont keep the coins on exchanges, I download the wallets should there be wallets available.",
  "board": "biz"
},
{
  "text": "Is LINK going to be affected by tomorrows SEC hearing?",
  "board": "biz"
},
{
  "text": "You dip shit, not every token would be classified as a security. There are a couple of contracts that will win big if true.",
  "board": "biz"
},
{
  "text": ">what is gas",
  "board": "biz"
},
{
  "text": "Depends. There are projects being implemented that will allow you to pay gas in the native token. If you are trying to insinuate that ETH will go away because is will be classified as a security by the US gubment, you would WRONG. It would just get cheaper.",
  "board": "biz"
},
{
  "text": "Probably not but I pulled all my LINK off binance in the off chance things go sideways and the four horsemen of the crypto apocalypse emerge. I don't plan on trading it for a while anyway so there's no need to risk the larger half of my stack.",
  "board": "biz"
},
{
  "text": "chainlink is erc677 not erc20 so it will be fine but the price will tank to 5 cents if eth is declared a security and if eth is not declared a security the price will not go even 1 cent",
  "board": "biz"
},
{
  "text": "fuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuck\n\nyouuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
  "board": "biz"
},
{
  "text": "The spergs on this one are strong. Can we just filter this shit and be done with it?",
  "board": "biz"
},
{
  "text": "I can smell OP's buttblast from here.",
  "board": "biz"
},
{
  "text": "I literally wish I could claim that I missed out on any losses and there was any reason for me to be upset besides these fucking idiots being the weakest kind of shit ive ever seen spammed on /biz/ but NO\n\nTHIS PIECE OF SHIT NEVER EVEN TOOK OFF",
  "board": "biz"
},
{
  "text": "Newfag to /biz/ here. How does one get started?",
  "board": "biz"
},
{
  "text": "All in LINK",
  "board": "biz"
},
{
  "text": "Put your entire life savings into BAT right now thank me later",
  "board": "biz"
},
{
  "text": "kys",
  "board": "biz"
},
{
  "text": "by not being a +28 yo boomer",
  "board": "biz"
},
{
  "text": "suck 100 dicks for $10 to make it",
  "board": "biz"
},
{
  "text": "I guess EOS really is the Chadcoin. Look at that all-time graph and tell me we're not going way up real soon.",
  "board": "biz"
},
{
  "text": "You need to register it yourself. Binance wont hand out airdrops.\n\nsorry senpai",
  "board": "biz"
},
{
  "text": "Unfortunately EOS won't do anything more than occasionally PnD as long as BTC stays faggy. It's taken so many runs at 10k and failed every time. If BTC can crack it and stay there for a day or three, EOS will have another massive roll in cash",
  "board": "biz"
},
{
  "text": "This triangle will break real soon and my bet is UP unless BTC shits the bed.",
  "board": "biz"
},
{
  "text": "I still remain bearish on BTC for a while but it certainly looks like a little breakout on the graph that matters...",
  "board": "biz"
},
{
  "text": "This thread is for iron hands only. If you panic sell, margin trade, or succumb to FUD, you are not allowed to post here.\n\nWhat is Iron Hands?\nIron Hands is a trading philosophy that believes that trying to time the market on a micro scale is the fastest way to lose money. We try to remove luck from the question by buying into projects we believe have a serious future and holding our positions for months or years.\n\nWhy hold instead of daytrading?\nBecause the vast majority of people who daytrade lose money. With luck on your side, swing trading CAN be much more profitable — but the odds are just as good that you’ve called your position incorrectly and will lose out. Beyond the financial benefits of holding, the best thing offered by holding is peace of mind. Iron hands are numb to the feelings of despair and panic that cause other traders to sell at a loss. Because we look ahead to the horizon, short term bearish trends can be ignored.\n\nWhy is margin trading bad?\nCryptocurrency is an unregulated market. This is both a great thing and a terrible curse. There are several instances in recent memory of enormous, manipulated short squeezes liquidating millions and planting that money firmly into the pockets of the exchanges. Remember: margin trading is gambling at a casino where the house openly cheats.\n\nWhat do Iron Hands hold?\nAnything and everything. If your hands are made of metal and your eyes are on the future, it doesn’t matter what’s in your bags.",
  "board": "biz"
},
{
  "text": "iron hand reporting in\n\nJust gotta hold until ETH is $1300 again",
  "board": "biz"
},
{
  "text": "I installed by Blockfolio back this month after deleting it in February and stop browsing /biz/. sup? Is Ponzicoin still around?",
  "board": "biz"
},
{
  "text": "You're gonna make it, friend.\n\n\nRefreshing Blockfolio constantly if you're not actively trading is a really bad habit. Had to force myself to stop.",
  "board": "biz"
},
{
  "text": ">he scammed ME!\n>no, I'm not a scammer",
  "board": "biz"
},
{
  "text": "Tl:dr Roger doxxed someone over $50",
  "board": "biz"
},
{
  "text": ">Title edited to:\n>Please delete.\nA self-proclaimed, self-made millionaire, personally pursuing someone for a $50 refund that was his own company's fault for issuing in the first place. Most normal people would have just let it drop and move on.\n\nLOL. He's such a prick isn't he? This is yet another example of his weird personality traits. He's not exactly what you could call rational or stable.",
  "board": "biz"
},
{
  "text": ">not realizing this is how justice will be served in an AnCap future.",
  "board": "biz"
},
{
  "text": ">When the tradesman hands you the incorrect change thus breaking the NAP as you, in order to retaliate by calling for a public lynching.",
  "board": "biz"
},
{
  "text": "Energy is contagious. Together we can take steps towards actualizing our common goals. \n\nImagine the year is 2025 and take a moment to read this image. We will all make it.",
  "board": "biz"
},
{
  "text": "I can’t even imagine it sometimes. What changes will we make to the world due to the freedom granted by buying LINK in 2018??",
  "board": "biz"
},
{
  "text": "that'd be fun if we got there",
  "board": "biz"
},
{
  "text": "Imagine knowing that this image is true but having to live you regular life until everyone else realizes it. \n\nIt's quite stressful.",
  "board": "biz"
},
{
  "text": ">blog chains\n\nwhoever made the picture is a pajeet",
  "board": "biz"
},
{
  "text": "Remember guys, I told ya so",
  "board": "biz"
},{
  "text": "homegym thread?\njust finishe setting up mine",
  "board": "fit"
},
{
  "text": "the fuck u plan on doin with this dungeon nigga? where the chains at? look like all u fixin to do up in here is 5x5year old rapes/week for 30 years nigga",
  "board": "fit"
},
{
  "text": "It's in my condo's individual basement",
  "board": "fit"
},
{
  "text": "mirin clean ass barbell",
  "board": "fit"
},
{
  "text": "As if you're ever going to lifting the max weight the equipment can handle...\nFuck off with this shit you skelly",
  "board": "fit"
},
{
  "text": ">not a single useful power rack shown\n\nLand of no gains.",
  "board": "fit"
},
{
  "text": "Muscles aren't enough.",
  "board": "fit"
},
{
  "text": "He's sure in a good mood for someone losing his life savings",
  "board": "fit"
},
{
  "text": "Thanks for ruining the mood.",
  "board": "fit"
},
{
  "text": ">\"if you take this vinegar mixture you won't need to diet, the pounds just fall right off!\"\n>mom, that doesnt work because at its core, losing weight is just a matter of calories in calories out and while it may mute your appetite (which i doubt it will) it won't-\n>\"always have to argue don't you? your aunt Becky has been studying this stuff for YEARS and there's... research and stuff and she knows what shes talking about, unlike you\"",
  "board": "fit"
},
{
  "text": "Post pics of your mom.",
  "board": "fit"
},
{
  "text": "When you are big they disregard your advice because they think unless they lift 600 pounds deadlift like me my nutrition knowledge is useless",
  "board": "fit"
},
{
  "text": ">dark chocolate\n\nIs great. Anything above 90% you shouldnt hesitate to eat.",
  "board": "fit"
},
{
  "text": "t. the mom",
  "board": "fit"
},
{
  "text": ">When she says stuff like that just day \"okay, let me know how it goes\" and when you notice it hasent done anything or she finally admits it just say \"i told you so\"\nBut if al you’re doing is saying “okay,” then you can’t say “I told you so,” because all you said was “okay”",
  "board": "fit"
},
{
  "text": "A while ago I watched a Japanese film called Yojimbo. I won't get into the full plot, but it's basically about an alpha Samauri who enters a village and offers his services to two rival gangs. During the film he learns of a mans wife who was sold over to someone because of a gambling debt, and decides to rescue her and reunite them. As he is imploring them to make their escape, they both get on their knees, bowing and crying while thanking him. Instead of accepting this, he gets extremely angry and shouts at them to stop, saying \"I hate pathetic people!\" This stuck with me, and ever since I've watched the film, I've stopped caring about being single, I've stopped caring about what people think, I've stopped feeling sorry for myself. Because truly there is nothing worse than a pathetic person, and that's mostly what I see when I visit this forum. People crying over their feels, how they look, how others have it so much better... Stop it, you are a man, start acting like one and stop being pathetic. That's what makes you unattractive and that's what stops you from achieving your goals.",
  "board": "fit"
},
{
  "text": "Thread theme",
  "board": "fit"
},
{
  "text": ">pre 1945 and that's when the japanese were one of the most alpha of all people\ndesu most of the world was alpha in 1945, we're all just a bunch of s o y faggots right now. Thanks to this retarded culture.",
  "board": "fit"
},
{
  "text": "No, this is the theme",
  "board": "fit"
},
{
  "text": "No, this is the theme",
  "board": "fit"
},
{
  "text": "What lifts will impress my 2D waifu?\n\nAlso which anime girl do you lift for",
  "board": "fit"
},
{
  "text": ">le incel club \n\ndrink bleach faggot",
  "board": "fit"
},
{
  "text": ">tfw no autistic qf to quote Starting Strengh from memory while you lift\nWhy even live?",
  "board": "fit"
},
{
  "text": ">muh 4chan is for le animoos \n>posting on /v/\n\n\nHAHAHAHAHA WHAT A FAGGOT LOSER",
  "board": "fit"
},
{
  "text": ">being this butthurt",
  "board": "fit"
},
{
  "text": "Can manlets look big and lean?",
  "board": "fit"
},
{
  "text": "they usually have wider hips and gyno so they look a bit more girly",
  "board": "fit"
},
{
  "text": "cope",
  "board": "fit"
},
{
  "text": "No woman would fuck him because he is short. 6'+ only boys",
  "board": "fit"
},
{
  "text": "well in his case he probably has a gh deficiency\n\nif youre a manlet OP yourself im willing to bet you have wider hips and gyno",
  "board": "fit"
},
{
  "text": "Are you telling me we should turn the manelt pit into a breeding camp?",
  "board": "fit"
},
{
  "text": "why does /fit/ not like lean bulking?",
  "board": "fit"
},
{
  "text": ">evade questions\nlul, caffeine addicts are pathetic as fuck",
  "board": "fit"
},
{
  "text": ">not having an iv with coffee that goes off on a silent timer to wake you up in the morning",
  "board": "fit"
},
{
  "text": ">Coping loser or loserette\nK.\nHave fun with that.",
  "board": "fit"
},
{
  "text": ">still not posting body\nur pathetic",
  "board": "fit"
},
{
  "text": ">where do you go on dates\n\nSomeplace where you can do something that lessens the need for conversation but where you can talk if you feel like it.\n\n>ice rink\n>amusement park\n>carnival\n>some kind of festival\n>wine and cheese tasting event",
  "board": "fit"
},
{
  "text": "I really want to go to the gym but never was there. I'm really autistic and not self conscious at all, so i don't even know if i smell or if i wear the wrong clothes. I'm really afraid that people will laugh at me. So here are my questions\n>I go in to the gym with normal or already sports clothes on?\n>Do i take a bag and a towel with me? Do i go into the locker room and change to my sports clothes there?\n>After i'm done do i need to shower and change to normal clothes?\nare these showers where everyone is naked in the same room?\n>Do i always have to have an towel with me at the machines/benches or does it look autistic?\n>What should i do when i'm doing a pause between sets? \n\n\nPlease, i just need an guide for autistic people on how to behave / do things at the gym..im scared",
  "board": "fit"
},
{
  "text": "Go to the gym with gym clothes on. Bring a change of clothes if you want to shower there. Just go through your routine. Chances are you'll be too tired after your sets to do much else than sit down for your rests",
  "board": "fit"
},
{
  "text": ">>I go in to the gym with normal or already sports clothes on?\nDoesn't matter. I go in my gym clothes so I don't have to change after I get there.\n>>Do i take a bag and a towel with me? Do i go into the locker room and change to my sports clothes there?\nSome people (usually underages) go to the gym in their gym clothes and leave after their workout to shower at home. Most adults use a locker, take a towel and fresh clothes, then after their workout they take a shower and change into clean clothes and leave.\n>>After i'm done do i need to shower and change to normal clothes?\nUp to you, see above.\n>are these showers where everyone is naked in the same room?\nShowers are almost always in private stalls, though they often don't have a door.\n>>Do i always have to have an towel with me at the machines/benches or does it look autistic?\nOnly if you sweat a lot. Even then, most gyms will have paper towel dispensers so you can clean your sweaty equipment with those.\n>>What should i do when i'm doing a pause between sets?\nBreathe, look at the clock, the TVs, the floor, stare at your phone if you want.\n\nYou're overthinking this man, no one is watching anyone else. Just go.",
  "board": "fit"
},
{
  "text": ">I go in to the gym with normal or already sports clothes on?\n\nwhatever you want. its an extra step to change. i go in ready to work out.\n\n>Do i take a bag and a towel with me? Do i go into the locker room and change to my sports clothes there?\n\nif you want to\n\n>After i'm done do i need to shower and change to normal clothes?\n\nno go home and shower in comfort. theres usually creepy old guys walking around naked and using the hand dryer to dry their balls. unless youre into that.\n\n>are these showers where everyone is naked in the same room?",
  "board": "fit"
},
{
  "text": "Go in the middle of the night",
  "board": "fit"
},
{
  "text": "What are you there for? To PT or to fuck around like a faggot? Just wear your pt gear there and shower at home.",
  "board": "fit"
},
{
  "text": "How can I get cardio in if I'm crippled? Portions of bone in my knee are dead (literally) so I can't incorporate a lot of leg motions into my activity, this rules out swimming, running, jumping around, elliptical, etc.\n\nIf anyone is interested in bone death here you go band",
  "board": "fit"
},
{
  "text": "swimming can be done without using legs though\nalso you can try riding a wheel chair as cardio, there is this dude on my gym that he does half marathons on his wheelchair and he is pretty fast with it, he also rides it on the threadmil",
  "board": "fit"
},
{
  "text": "thanks these are some great common sense solutions",
  "board": "fit"
},
{
  "text": "For the swimming thing don't use a noodle, they make leg floats you clamp with your shins. Could probably do thighs instead.",
  "board": "fit"
},
{
  "text": "Hey I asked my dad about your condition. He's a sports med doc. He said to gear up and go swimming. I'm not sure if you can even do much moving with your knee at all, but the floaty things don't sound like a bad idea.",
  "board": "fit"
},
{
  "text": "curious, how do you get around without a wheel chair? Is it just one knee and you crutch around?",
  "board": "fit"
},
{
  "text": "HOW THE FUCK DO YOU DO THIS???\ni'v trained my chest for years and STILL CANT FUCKING DO IT!\nmy cousin who doesnt even lift can do this and he doesnt lift. he said he was able to do it when he joined the military",
  "board": "fit"
},
{
  "text": "MUSCLE\nMIND \nCONNECTION",
  "board": "fit"
},
{
  "text": "Put your hands together and in front of you and push, then push separately. When you get the feeling down, you'll be able to do it without using this method.",
  "board": "fit"
},
{
  "text": "lose weight",
  "board": "fit"
},
{
  "text": ">he can't individually control each muscle by now \nYou train like shit.",
  "board": "fit"
},
{
  "text": "What’s more important for fat loss? Avoiding carbs or cico?",
  "board": "fit"
},
{
  "text": "OP didn't ask about those things, you illiterate mong.",
  "board": "fit"
},
{
  "text": "Everyone please fucking read this shit.\n\nI don't know where the \"no carbs\" shit came from but I've been seeing it more and more. I think it might have something to do with how popular the ultimate meme is becoming: Keto diet. \n\nAs a general rule, lowering carbs while cutting is good. But not cutting them out completely. And fucking lowering everything is good when cutting. That is why it is called cutting. \n\nCarbs are energy. Unless you're lifting baby weight, you need them. That is why I will never support fasting unless you're morbidly obese.",
  "board": "fit"
},
{
  "text": "pick a macro spread suitable to your activity, hit the calories, that's it.\n\nSo your question cannot be easily answered.\n\nBut, get your protein, fill in the calories. You will want the calories to be filled in with logs of veggies you will be perma hungry and overeat.\n\nketo is magic, but bad for you depending.",
  "board": "fit"
},
{
  "text": "if you eat mostly carbs but under tdee you would look like a girl so protein matters.\n\nunless you burn 10k calories a day and get 1-1.5x lbm of protein",
  "board": "fit"
},
{
  "text": "I don't think so, that is triangles.\n\nThis is smoke ala burning fat.",
  "board": "fit"
},
{
  "text": "Everyone knows being lean is where aesthetics come from...and you cant be big and lean as a natural.",
  "board": "fit"
},
{
  "text": "there is a 95% chance this is made up\nwhat disturbs me is the other 5%",
  "board": "fit"
},
{
  "text": ">I run college track\nYeah but which distances? 100m? 200? 400?",
  "board": "fit"
},
{
  "text": "2 and the 4. Hence the reason I need to cut weight.",
  "board": "fit"
},
{
  "text": "mirin’ bro\nI’m trying to get leaner too, do you drink coffee or tea?",
  "board": "fit"
},
{
  "text": "Damn my friend your know what's going on, every faggot larping here is obsessed with mass, but what is your routine plan and diet for that body ? I want to achieve something similar but I seems to be doing something wrong",
  "board": "fit"
},
{
  "text": "2 points better looking in 5 months. If you're not mewing you're a fool",
  "board": "fit"
},
{
  "text": ">you can reform your entire skull after it's done developing by pushing your tongue against it",
  "board": "fit"
},
{
  "text": "his mouth looks fucking weird. not better",
  "board": "fit"
},
{
  "text": "Here is the incel autist that can't get a gf that makes the same thread",
  "board": "fit"
},
{
  "text": ">degenerative muscle illness do not cause bone-facial deformation",
  "board": "fit"
},
{
  "text": "If you don't feed him, he will go away you bozos.",
  "board": "fit"
},
{
  "text": "How you holding up /fit/ ? Hows the gym going ? You feeling good today ?",
  "board": "fit"
},
{
  "text": ">tfw allergies \nI’m cold, my nose is super stuffy and runny, I work up with a migraine and the Allegra did fuckall for it",
  "board": "fit"
},
{
  "text": "Finally got the guts to get help with my depression, I just hope that one day it might improve for the long term.",
  "board": "fit"
},
{
  "text": ">tfw no dorothy gf\nfeels bad man\n\n>tfw tryna get /fit/ (and /biz/+//lit/) so no more drinking alone and playing vidya\nFeels mixed. Was simple pleasure, but hope to be on my way to better things",
  "board": "fit"
},
{
  "text": "R u a grill?\nL O N D O N?\nO\nN\nD\nO\nN\n?",
  "board": "fit"
},
{
  "text": "Practicing vipassana and studying Buddhism made me realize how empty my moment to moment lived experience is. Things kind of morphed into an existential crisis from there. Other than that, the job is good, I'm healthy and my family is healthy so there is nothing to really complain about.",
  "board": "fit"
},
{
  "text": ">Who is /fat/ for?\nFor /fat/ people who want to better themselves through meaningful hard-work, strategy, and dedication\n\n>This is not QTDDTOT, ask questions about fat loss but use that thread for general questions\n\n>Calculate your Body Fat Percentage\n\n>Calculate your TDEE (Total Daily Energy Expenditure)\n\n>Plan your weight loss week by week",
  "board": "fit"
},
{
  "text": "Who can say what the scale shows?\nWhere your cut goes?\nOnly time...",
  "board": "fit"
},
{
  "text": "It's yakitori not meatballs",
  "board": "fit"
},
{
  "text": "Yeah I don't think that's right but it was a joke anyway so who the fuck cares what it actually is",
  "board": "fit"
},
{
  "text": "I care about the poor anime girl",
  "board": "fit"
},
{
  "text": "I ate a log of ground beef yesterday.",
  "board": "fit"
},{
  "text": "If you don't have a maid outfit, you don't belong on [s4s] tbh",
  "board": "s4s"
},
{
  "text": "I have a sailor suit and a creepy susie dress can I stay please",
  "board": "s4s"
},
{
  "text": "if you aren't a mentally ill faggot, you don't belong on new [s4s] to be tbh",
  "board": "s4s"
},
{
  "text": "this tbh lol namecuckolds btfo again\n\n\nshut the fuck up you fucking imbecile or else your beb threads will start dying with no replies again",
  "board": "s4s"
},
{
  "text": "I bought one off ebay the other year.\nA PU one. \nIt's not too shiny, but slightly textured shiny. Almost like faux leather I guess.\n\nI wear it while fucking my doll. Or the doll wears it while fucking me :3",
  "board": "s4s"
},
{
  "text": "but i'm a boy",
  "board": "s4s"
},
{
  "text": "this is irony board",
  "board": "s4s"
},
{
  "text": ":^y",
  "board": "s4s"
},
{
  "text": "n ice dubs Jewwy",
  "board": "s4s"
},
{
  "text": "Stop being a nigger",
  "board": "s4s"
},
{
  "text": "nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger nigger",
  "board": "s4s"
},
{
  "text": "y nme ig",
  "board": "s4s"
},
{
  "text": "Marina from Splatoon 2",
  "board": "s4s"
},
{
  "text": "Is she a squid or is she a kid?\n\nYour fortune: Better not tell you now",
  "board": "s4s"
},
{
  "text": "the nig squid",
  "board": "s4s"
},
{
  "text": "I'm splatooning",
  "board": "s4s"
},
{
  "text": "neither actually\n\nnice dubs",
  "board": "s4s"
},
{
  "text": "Me on the right",
  "board": "s4s"
},
{
  "text": "poopballs",
  "board": "s4s"
},
{
  "text": "EAT SHIT AND DIE",
  "board": "s4s"
},
{
  "text": "(trips)\nblow it out your ass",
  "board": "s4s"
},
{
  "text": "is this the scarlett johansson thread?",
  "board": "s4s"
},
{
  "text": "IT'S A BEATLES THREAD",
  "board": "s4s"
},
{
  "text": "a bit tepid",
  "board": "s4s"
},
{
  "text": "ACTIVATING STAND!\n!![[[NO RAPE]]]!!",
  "board": "s4s"
},
{
  "text": "pg10saverave",
  "board": "s4s"
},
{
  "text": "namefags must be killed\npassfags must be tortured to death",
  "board": "s4s"
},
{
  "text": "you rang?",
  "board": "s4s"
},
{
  "text": "so theres like 3 posters now who all have to bump ever thread with trash reaponses.....**sigh** at least jiin is adorable and will chat a bit....at least taytay comes up with something to saysay....",
  "board": "s4s"
},
{
  "text": "potat",
  "board": "s4s"
},
{
  "text": "Nice 00 PNG dubs",
  "board": "s4s"
},
{
  "text": "the potato conducts current",
  "board": "s4s"
},
{
  "text": "Your fortune: Outlook good",
  "board": "s4s"
},
{
  "text": "The fun begins when you stop fapping with ur pepbin!\n\nYour fortune: Godly Luck",
  "board": "s4s"
},
{
  "text": "namefags must be killed",
  "board": "s4s"
},
{
  "text": "I put something real in my butt last night for the first time. I ordered a knockoff aneros and real lube and I tried putting it in while I was fapping. It felt weird but good a little bit, but not as much as I imagined. I don't know if it really hit the place, I don't know, maybe. But it felt really good fapping with it, especially since it was the first time putting real lube on my bepper. I felt like I had to c*m right away do I just kept stroking for a few seconds then stopping when I get too close while my butt squeezes the massager. I got really close so I stopped fapping with my finger still on my pepper, but stuff was still coming out. I remember thinking \"it's coming out still just like in those videos\" and then I c*me. It was kind of nice I hope it would feel better in my butt in the future maybe. All the preparation for it is really gross though and a lot of work and i hate it especially since its just for one fap session",
  "board": "s4s"
},
{
  "text": "Just do it in the shower lmao",
  "board": "s4s"
},
{
  "text": "the \"gender is determined by your chromosomes\" boy",
  "board": "s4s"
},
{
  "text": "this story got me at half mast",
  "board": "s4s"
},
{
  "text": "the lole girl\n\nYour fortune: Better not tell you now",
  "board": "s4s"
},
{
  "text": "t. forced meme",
  "board": "s4s"
},
{
  "text": "nice dubs",
  "board": "s4s"
},
{
  "text": "Here is an image guys. Feel free to do what you want with it. :^)",
  "board": "s4s"
},
{
  "text": "Is Miranda and I'm in control now Kevin is my boyfriend Taylor Swift is going to have to first get him to divorce Colleen Ballinger who is not me she's a w**** and a monster and I hate her but not as much as I hate her mother my mother because I'm Miranda Sings Kevin's girlfriend also I'm a ghost I died when they injected Mercury solution into my spine to prepare me for my implant I mean Colleen's implant I'm in control this is Miranda thanks for listening guys",
  "board": "s4s"
},
{
  "text": "lol",
  "board": "s4s"
},
{
  "text": "namefags must be killed",
  "board": "s4s"
},
{
  "text": "Is that Emiliana Torrini?",
  "board": "s4s"
},
{
  "text": "I don't think so.",
  "board": "s4s"
},
{
  "text": "this board died for me ever since the doremi retard started posting, is he still here?",
  "board": "s4s"
},
{
  "text": "He left due to head trauma. Not even joking.",
  "board": "s4s"
},
{
  "text": "he has a head injury or something hasent posted in a pretty long while",
  "board": "s4s"
},
{
  "text": "sounds dumb but Okey.",
  "board": "s4s"
},
{
  "text": "well this is fucking depressing.\ni just wanted to call him an autist one last time but now i just feel bad.",
  "board": "s4s"
},
{
  "text": "so ugh.. how have you guys been the past.. 15 months?",
  "board": "s4s"
},
{
  "text": "anime",
  "board": "s4s"
},
{
  "text": "anime",
  "board": "s4s"
},
{
  "text": "s4s is for niggers and kikes",
  "board": "s4s"
},
{
  "text": "Hmm what do we have here?",
  "board": "s4s"
},
{
  "text": "Enhance..",
  "board": "s4s"
},
{
  "text": "Snael lole",
  "board": "s4s"
},
{
  "text": "Looks like a terrorist.\nCall an library.",
  "board": "s4s"
},
{
  "text": "snale on butt, masturbate",
  "board": "s4s"
},
{
  "text": "SHE SMUGE..... LOLE",
  "board": "s4s"
},{
  "text": "Story:\nTensions run high on the battlefield as soldiers fight through death. Bombs rain from the sky and bullets pepper the ground. In battle, beasts screech through the sky and tear through the earth. After the smoke clears, the soldiers return to their human forms weary from battle and numbed by death. But amid the explosions and chaos, a spark of passion ignites. Time will tell whether it can survive the horrors of war, or if it will succumb to it.\n\nOriginal Release Site: \n\nEnglish Release Site: \n\nMasterpad:\n",
  "board": "u"
},
{
  "text": "that well that is canceled this shit has yaoi graphics",
  "board": "u"
},
{
  "text": "Go back to eating shit.",
  "board": "u"
},
{
  "text": "And it's got sexy full on animal transformations with tits now gtfo.",
  "board": "u"
},
{
  "text": "kek",
  "board": "u"
},
{
  "text": "So?",
  "board": "u"
},
{
  "text": ">it's an \"anon clicks on /u/ instead of /v/ episode\"",
  "board": "u"
},
{
  "text": "I don't see anything /u/ related in your image.",
  "board": "u"
},
{
  "text": "To borrow from James bond:\n>What's she doing there?\n>Sir, I think she's attempting reentry.",
  "board": "u"
},
{
  "text": "Does she have volleyballs stuffed inside her bra?",
  "board": "u"
},
{
  "text": "Yes.",
  "board": "u"
},
{
  "text": "The Godness of Yuri has descended from lesbian heaven and bestowed you the power of Yurization Beam.\n\nThe ability to canonicaly turn one straight fictional girl (or a couple) into a lesbian.\n\nThis thread is about the straight girls you guys would like to turn into Canon Yuri If you had the power. You can only use It once on a girl or couple, so choose wisely.\n\nMy pick would be Tifa Lockhart from FFVII. Because... Boobs.",
  "board": "u"
},
{
  "text": "Dude. Rose actually kissed Juleka in the lips on the show. It doesn't show but it's highly implied.",
  "board": "u"
},
{
  "text": "Okabe x Kurisu is one of my all-time favorite het pairings but I still vote for this. I absolutely love their dynamic and find it adorable that Kurisu is legitimately the only person that treats Maho with respect.",
  "board": "u"
},
{
  "text": "The SoKai romance has been treated very ambiguously since CoM other than that weird scene in Halloween Town in 2 and I doubt that's going to change. Any canonized pairing is just going to piss a whole lotta people off and SE's PR has got to be very aware of it by now. So rejoice in the continued, enabling ambiguity, my friend.\nI'm not a particular fan of NamiKai but if there's any Nobody who deserves a chance at a normal life it's Naminé. Roxas at the very least lived an illusion of one, her entire existence was nothing but being a dedicated plot point and she never complained once.\nI really hope she also get to come back when Roxas and Xion inevitably do in KH3.",
  "board": "u"
},
{
  "text": "Sweet.",
  "board": "u"
},
{
  "text": "It's been a while since our last thread. Chapter 40 was just released yesterday, so let's discuss the recent developments.",
  "board": "u"
},
{
  "text": "If you have the volume on hand, feel free to dump in the Translation Thread.",
  "board": "u"
},
{
  "text": "It's at the New Game's thread",
  "board": "u"
},
{
  "text": "Actually the whole world is gay, as seen by the college girls couple that keeps turning up every now and then",
  "board": "u"
},
{
  "text": "What an interesting world.",
  "board": "u"
},
{
  "text": "Previous thread: >>2312788\n\nLatest chapter: \nEnglish releases: ",
  "board": "u"
},
{
  "text": "Volume 12 came out in March. Not sure why it's not on cdjapan.",
  "board": "u"
},
{
  "text": ">Pandora in the Crimson Shell - Ghost Urn v10 (2018) (Digital) (danke-Empire)\n",
  "board": "u"
},
{
  "text": "Too bad Nene and Clarion only use the Pandora Device once this volume. \nI like seeing all of the different ways they do it.",
  "board": "u"
},
{
  "text": "This series is way too underrated.\n.\n>How well is the series doing in Japan anyway?\nI want to know this too. Is there a site that keeps track of tankobon sales or something?",
  "board": "u"
},
{
  "text": "Reminds me of Excel Saga, we had to wait an eternity for new volumes, too.\nAnd tghere wasn't anything on the web, too.\nI really want to see a full view of Vli~'s boss, judging by the long hair he might look like Il Palazzo.",
  "board": "u"
},
{
  "text": "No love for manhua? Any reason why it's rarely mentioned?",
  "board": "u"
},
{
  "text": "Lala is done by the same authors?\nHow much chapters it has so far?",
  "board": "u"
},
{
  "text": "Yes, the same\nAnd 1st season is completed (200 chapters). But it's unknown when the 2 season will be released",
  "board": "u"
},
{
  "text": "Thanks for the hard work <3",
  "board": "u"
},
{
  "text": "Man... Lily moves at snail pace but Lala is on a whole new level.\nThankfully, I'm a sucker for slow burn so it's all good!!!",
  "board": "u"
},
{
  "text": "Still waiting for chapter 46, three weeks now. But in the meantime a miracle happened, it's being translated to english (1 chapter till now)!\n",
  "board": "u"
},
{
  "text": "As we were reaching the 2 weeks that the new translator anon decided to wait to see if the old one would appear, the old thread got archived, and now that the 2 weeks have passed, here is the new thread. New, old, old, new.",
  "board": "u"
},
{
  "text": "So... why was Kuroko groping a bisected android on the cover of Volume 1 anyway?",
  "board": "u"
},
{
  "text": "So the black haired one is the sister, who was in Rose cult and has now awakened incestous siscon lust?\n",
  "board": "u"
},
{
  "text": "Yes, unless you interpret it as her sister's dream.",
  "board": "u"
},
{
  "text": "Style.",
  "board": "u"
},
{
  "text": "They were already in a threesome",
  "board": "u"
},
{
  "text": "This looks fairly promising so let's have a thread.",
  "board": "u"
},
{
  "text": "Thanks, nee-san.",
  "board": "u"
},
{
  "text": "Are these getting up on Dynasty?",
  "board": "u"
},
{
  "text": "Make an Upload Request and see.",
  "board": "u"
},
{
  "text": "are you the same goggled anon that does Kase-san? You are my hero",
  "board": "u"
},
{
  "text": "thank you!",
  "board": "u"
},
{
  "text": "Previous Thread: >>2512898",
  "board": "u"
},
{
  "text": "I'm kind of curious which characters, if any, survived the storm or if they'll even mention it.",
  "board": "u"
},
{
  "text": "Amberprice is shit.",
  "board": "u"
},
{
  "text": "Thanks for sharing!",
  "board": "u"
},
{
  "text": "who's the artist?",
  "board": "u"
},
{
  "text": "Getting a comic sounds pretty great to me. Especially with Max and Chloe.",
  "board": "u"
},
{
  "text": "New chapter of Isn't The Moon Beautiful has been translated!\n\nitou's art style is just gorgeous! I can't think of another art style that matchs it. This is by far my favorite. \n\nI only wish we could have more of Itou's work available.",
  "board": "u"
},
{
  "text": "I guess 05.05 was this:\n",
  "board": "u"
},
{
  "text": "The article about Itou Hachi on Yurinavi says that she is a female mangaka: \nAlso, I am very perplexed about what happened with the R18 onerori doujinshi, I don't know if it was a joke or if it was delayed to the Summer Comiket or if it even got cancelled because she chickened out, after all this doujinshi would be her first R18 manga, after a carrier of 10 years publishing manga since March 2008.",
  "board": "u"
},
{
  "text": "Isn’t she a bit too gropey?",
  "board": "u"
},
{
  "text": "It's getting dangerous, an extremelly soft onee-san touching an extremelly soft imouto. It's weaponized moe capable of mass destruction.",
  "board": "u"
},
{
  "text": "They were both advertised with images that were quickly deleted.",
  "board": "u"
},
{
  "text": "Discuss, request, and recommend /u/-related /lit/ works!\n\nPrevious Thread: >>2539877\n\nRecommendations doc\n\n------\n>Downloads:\n\nZippyshare links from previous thread:\n\nulit Archives 2017 torrent magnet link (4670 books, release dates up till December 2017):",
  "board": "u"
},
{
  "text": "Oh, totally forgot about this. I randomly read Red Sister a year ago and kinda liked it.\n\nIs book 2 good?",
  "board": "u"
},
{
  "text": "it's not as good as the first one",
  "board": "u"
},
{
  "text": "FINALLY there's a date (January 15th 2019) for the 3rd book in the Arravan series, took long enough.",
  "board": "u"
},
{
  "text": "I read that was \"corn port\" which made me giggle. Ah, kerning, my arch enemy.",
  "board": "u"
},
{
  "text": "Well then! I might finally read Nightshade.\nI gotta ask though. I heard from a more... sensitive acquaintance, that the topic of racism was handled badly. I don't mind the theme of course, but she said it came off more like the author being racist than racism existing in the story.",
  "board": "u"
},
{
  "text": "Previous thread\n>>2543868\nElsanna RPG Maker game\nDropboxes\nArt Archives\n\nWho would you rather date, Elsa or Anna?",
  "board": "u"
},
{
  "text": "Adorable :)",
  "board": "u"
},
{
  "text": "WOOHOO",
  "board": "u"
},
{
  "text": "BOO",
  "board": "u"
},
{
  "text": "BOOHOO",
  "board": "u"
},
{
  "text": "poor /u/",
  "board": "u"
},
{
  "text": "Since previous thread is on page 9. New one. \n\nAnime - season 1 :\nOP : nano.RIPE - Azalea : ED : Mia REGINA - Dear Teardrop : 12 episodes: ended the 24th of March\n\nOST (28th of March) : Countdown arts : =============\nStudio : Passione (Hinako Note)\nDirector : Takahashi Takeo (Hinako Note)\nSeries Composition : Hayashi Naoki (Flip Flappers)\nCharacter Design/Animation Direction : Ijuuin Izuro (Working!!!)\nMusic : Lantis (Tari Tari, Glasslip...)",
  "board": "u"
},
{
  "text": "Yuzutop = epic win",
  "board": "u"
},
{
  "text": "So i guess the same thing is happening to Yuzu.",
  "board": "u"
},
{
  "text": "Well, it is a theory. She's in the situation she distances herself. \nBut we also have glimpses of the old Yuzu, when she smiles and cheers seeing Shiraho, or when she smiles about the sisters' antics on the phone.\n\nSo it's not lost, but Mei, when she will have solved her dilemma, could have some hard work to do to earn Yuzu back who could be reluctant. After all, Mei did say yes four times in the library when she promised to Yuzu to love her and be at her side. \n\nIt would be a nice reversal, but, I don't want Yuzu to be a copy of Mei. Maybe the end of the volume will be Mei coming back to Yuzu who smiles, but puts her hands on Mei's shoulders and say \"sorry...\". The volume 9 cover could be Yuzu giving Mei the ring back, reluctantly but because she's too scarred.",
  "board": "u"
},
{
  "text": "It would be nice. But in the end Yuzu will save the day again. It’s cruel, since she’s the one suffering the most. I would like to see Yuzu feeling scared to love Mei again, but she’s too good for this world and will easily accept Mei again.",
  "board": "u"
},
{
  "text": "We don't know. I mean, the author explained retrospectively Mei's behavior during 5 volumes and more. So she could at least use a full volume (11?) for Mei to patch Yuzu. especially if Mei is helped by her father to make her choice. Yuzu could think she's the default choice since Mei would be relieved of her duty. And so, another string of chapters for Mei to learn to really know Yuzu and to act an active part in rebuilding their relationship. But yeah, that would be in an optimistic view of the way the author writes her plot. \nEasy road, Saint Yuzu saves the day and has no doubt to accept Mei back.\nRealistic road, Yuzu makes things hard for Mei, she still loves her but her confidence in their romance needs to be patched up.",
  "board": "u"
},
{
  "text": "Previous thread: >>2559549\n\n>New fic recommendation list: >Old recommendation list: \n>Ancient rec list: \n>Ship list: ",
  "board": "u"
},
{
  "text": "rarepair",
  "board": "u"
},
{
  "text": ">>2608951\nWrong board lad.",
  "board": "u"
},
{
  "text": "the previous thread reached the image limit.\n\n>Pastebin (spoiler free)\n\n>recent news\n\n>previous thread",
  "board": "u"
},
{
  "text": "I like it but I prefer Eirin x Reisen\n(thanks to this doujin ",
  "board": "u"
},
{
  "text": ">YukaRei get dwarfed by ReiMari\nWith the passing of time I have seen how YukaRei started to overcome ReiMari and I'm glad because I never liked it",
  "board": "u"
},
{
  "text": "I feel the same. If Kaguya and Mokou had no better options they'd be my OTP, but as it stands their relationships with Eirin and Keine are much more intimate and likelier to result in romance. I think I prefer Kaguya and Mokou as bros.\n\nAnd naturally is difficult not to see Eirin's actions towards Kaguya as romantic. She had everything but she gave it away to live with her forever.",
  "board": "u"
},
{
  "text": "YukaRei getting dwarfed by ReiMari has little to do with yurifags disliking old hag, it's simply because ReiMari is too popular - de facto protagonist pair with lots of screen time together and such.\nAlso the closest to canon pair in 2hu is Toyosato and Soga.",
  "board": "u"
},
{
  "text": "I can't believe I used to write yukkuri fanfiction. There's something deeply wrong with me.",
  "board": "u"
}
];