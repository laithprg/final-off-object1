let addplayerButton=document.querySelector(".addplayer-button");
let count=0;
let countplayerSpan=document.querySelector('.countplayer-span');
let container1=document.querySelector('.container1');
let continueButton=document.querySelector('.continue-button');
let chooseblyerForm=document.querySelector('.chooseblyer-form');
let finalContainer=document.querySelector('.final-container');
let voteH1=document.querySelector(".vote-h1");
let offobjectNamedisplay=document.querySelector(".offobject-namedisplay");
let containerbeforeOffobject=document.querySelector('.containerbefore-offobject');
let beforeoffobjectButton=document.querySelector('.beforeoffobject-button');
let voitingcontainerspan=document.querySelector('.startvote-container span');
let buttonsvoteDiv=document.querySelector('.buttonsvote-div');
let startvoteContainer=document.querySelector('.startvote-container');
let resultDisplay=document.querySelector('.result-display');
let mainoffobjectContainer=document.querySelector('.mainoffobject-container');
let resutlsButton=document.querySelector('.resutls-button');
let submitSound=new Audio('click.wav');
let resultsButtonSound=new Audio('resultsbutton.wav');
let addplayerButtonSound=new Audio('addplayerbutton.wav');
let removeplayerButtonSound=new Audio('removeplayerbutton.wav');
let voteButtonSound=new Audio('votebutton.mp3');
let revealOffobjectSound=new Audio('revealoffobject.wav');
let gunShotSound=new Audio('gunshot.wav');
let categorySound=new Audio('categorysound.mp3');
let correctAnswerSound=new Audio('correctanswer.wav');
let wrongAnswerSound=new Audio('wronganswer.wav');
let choseAskSound=new Audio('choseask.wav');
let soundButton=document.querySelector('.sound-button');
let soundEnable;
let resultsContainer=document.querySelector('.resutls-container');
let playagainButton=document.querySelector('.playagain-button');
let newgameButton=document.querySelector('.newgame-button');
let welcomeContainer=document.querySelector('.welcome-container');
let welcomeButton=document.querySelector('.welcome-button');
let categoriesContainer=document.querySelector('.categories-container');
let animalsButton=document.querySelector('.animals-button');
let clothesButton=document.querySelector('.clothes-button');
let foodButton=document.querySelector('.food-button');
let frutesButton=document.querySelector('.frutes-button');
let gamesButton=document.querySelector('.games-button');
let randomButton=document.querySelector('.random-button');
let offobjectownvoteContainer=document.querySelector('.offobjectownvote-container');
let offobjectnameSpan=document.querySelector('.offobjectname-span');
let resutls2Button=document.createElement('button');
let questions1Container=document.querySelector('.questions1-container');
let questionsButton=document.querySelector('.questions-button');
let thequestion1Container=document.querySelector('.thequestion1-container');
let askSpan=document.querySelector('.ask-span');
let answerSpan=document.querySelector('.answer-span');
let thequestionButton=document.querySelector('.thequestion-button');
let thequestion2Container=document.querySelector('.thequestion2-container');
let thequestion2NameSpan=document.querySelector('.thequestion2-name-span');
let choseToaskDiv=document.querySelector('.chose-toask-div');
let thequestion2Buttonnext=document.querySelector('.thequestion2-buttonnext');
let choseToaskDivButtons=document.querySelector('.chose-toask-div-buttons');



if(localStorage.getItem('sound')!=null){
    soundEnable=localStorage.getItem('sound')!=='false';
}else{
    soundEnable=true;
}

if(soundEnable){
    soundButton.textContent='🔊';
}else{
    soundButton.textContent='🔇';
}


soundButton.addEventListener('click',function(){
    soundEnable=!soundEnable;
    localStorage.setItem('sound',soundEnable);
    if(soundEnable){
        soundButton.textContent='🔊';
    }else{
        soundButton.textContent='🔇';

    }
});

function playSound(sound){
    if(!soundEnable){
        return;
    }
    sound.currentTime=0;
    sound.play();
}

welcomeButton.addEventListener('click',function(){
    welcomeContainer.classList.add('hidden');
    categoriesContainer.classList.remove('hidden');
    playSound(submitSound);
});

animalsButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
    playSound(categorySound);
objectsArray = [
        'أسد','نمر','فيل','زرافة','قرد','دب','ذئب','ثعلب','أرنب','سلحفاة',
        'تمساح','كنغر','غزال','حصان','حمار','جمل','بقرة','خروف','ماعز','كلب',
        'قطة','فأر','سنجاب','قنفذ','باندا','دب قطبي','فهد','فهد أسود','وحيد القرن','فرس النهر',
        'غوريلا','شمبانزي','غزال','ظبي','حمار وحشي','بطريق','دجاجة','ديك','بطة','إوزة',
        'ببغاء','نسر','صقر','بومة','حمامة','عصفور','طاووس','نعامة','فلامنغو','بجعة',
        'دلفين','حوت','قرش','أخطبوط','سلطعون','قنديل البحر','فقمة','سحلية','أفعى','ضفدع'
    ];
});

clothesButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
    objectsArray = [
        'قميص','بنطال','حذاء','جوارب','قبعة','جاكيت','معطف','هودي','كنزة','تيشيرت',
        'شورت','تنورة','فستان','بدلة','ربطة عنق','حزام','وشاح','قفازات','نظارة شمسية','حقيبة',
        'حذاء رياضي','صندل','شبشب','حذاء رسمي','بوت','عباءة','ثوب','بيجاما','ملابس داخلية','ملابس سباحة',
        'طاقية','كوفية','شماغ','عقال','ساعة يد','سوار','خاتم','قلادة','أقراط','مشبك شعر',
        'ربطة شعر','حجاب','طرحة','جلباب','مريول','مئزر','قميص نوم','سترة جلدية','سترة جينز','سترة صوف',
        'حذاء بكعب','رباط حذاء','زر قميص','سحاب','جيب','ياقة','كم','ياقة عالية','معطف مطر','ملابس رياضية'
    ];
});

foodButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
    objectsArray = [
        'برغر','بيتزا','بطاطا مقلية','سوشي','دونات','ساندويش','آيس كريم','كيك','شاورما','فلافل',
        'منسف','مقلوبة','كبسة','مندي','مجدرة','كبة','ورق عنب','محشي','مسخن','مفتول',
        'مكرونة','سباغيتي','لازانيا','نودلز','شوربة','سلطة','تبولة','فتوش','حمص','متبل',
        'فول','بيض مقلي','بيض مسلوق','أومليت','دجاج مشوي','دجاج مقلي','سمك مشوي','جمبري','ستيك','كباب',
        'كفتة','نقانق','هوت دوغ','فطيرة','مناقيش','كروسان','فطائر الجبن','بان كيك','وافل','بسكويت',
        'شوكولاتة','حلوى','بقلاوة','كنافة','قطايف','مهلبية','بودينغ','مهلبية','أرز بالحليب','تشيز كيك'
    ];

});

frutesButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
     objectsArray = [
        'تفاحة','موز','برتقال','فراولة','عنب','بطيخ','شمام','أناناس','مانجو','خوخ',
        'مشمش','كرز','كمثرى','رمان','كيوي','ليمون','جريب فروت','توت','توت أزرق','توت بري',
        'جوافة','بابايا','أفوكادو','تين','تمر','جوز الهند','يوسفي','برقوق','نكتارين','كاكا',
        'جزر','خيار','طماطم','بطاطا','بطاطا حلوة','بصل','ثوم','فلفل أخضر','فلفل أحمر','فلفل حار',
        'خس','ملفوف','قرنبيط','بروكلي','سبانخ','بقدونس','كزبرة','نعناع','كوسا','باذنجان',
        'فاصولياء','بازيلاء','ذرة','فجل','لفت','شمندر','يقطين','فطر','بامية','كرفس'
    ];

});

gamesButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);
      objectsArray = [
        'قراند 5','قراند 4','قراند سان أندرياس',
        'ذا لاست أوف أس','ذا لاست أوف أس 2',
        'إلدن رينغ','دارك سولز 3','دارك سولز 1',
        'سيكيرو','بلودبورن','ديمون سولز',
        'ريد ديد ريدمبشن 2','ريد ديد ريدمبشن',
        'ذا ويتشر 3','سايبربانك 2077',
        'غود أوف وور','غود أوف وور راغناروك',
        'سبايدر مان 2','سبايدر مان','مايلز موراليس',
        'ريزدنت إيفل 4','ريزدنت إيفل 2',
        'ريزدنت إيفل 7','ريزدنت إيفل 8',
        'سايلنت هيل 2','دارك سولز 2',
        'هولو نايت','هولو نايت سيلك سونغ',
        'بلدورز غيت 3','سيكيرو شادوز داي توايس',
        'أنشارتد 4','أنشارتد 2',
        'جوست أوف تسوشيما','جوست أوف يوتي',
        'هورايزن زيرو داون','هورايزن فوربيدن ويست',
        'ديس أونرد','آلان ويك 2',
        'دث ستراندينغ','دث ستراندينغ 2',
        'دوم إترنال','كول أوف ديوتي',
        'باتلفيلد','فورتنايت','ماينكرافت',
        'روكيت ليغ','فورزا هورايزن 5',
        'أساسنز كريد','فار كراي 5',
        'باتمان أركام نايت','سي أوف ثيفز',
        'إت تيكس تو','سبليت فيكشن',
        'ببجي موبايل',
        'كلاش أوف كلانس',
        'فري فاير',
        'كول أوف ديوتي موبايل',
        'موبايل ليجندز',
        'براول ستارز',
        'سابواي سيرفرز'
    ];
});

randomButton.addEventListener('click',function(){
    categoriesContainer.classList.add('hidden');
    container1.classList.remove('hidden');
        playSound(categorySound);

    objectsArray=[
    'سيارة','عامود كهرباء','كيبورد','ساعة','تفاحة',
    'كمبيوتر','بحر','طائرة','كرسي',
    'قلم','مفتاح','ثلاجة','جبل','كتاب',
    'هاتف','نافذة','مصباح','حذاء','كرة',
    'باب','قمر','شجرة','سفينة','نظارة','حقيبة',
    'مرآة','مروحة','تلفاز','سماعة','درج','مصعد',
    'جسر','قطار','دراجة','مظلة','كاميرا','وسادة',
    'بطارية','ساعة رملية','شمعة','ملعقة','شوكة',
    'صحن','كوب','زجاجة','خريطة','مقص','مطرقة',
    'مغناطيس','روبوت','فيل','زرافة','ذئب','ثعلب',
    'دب','أرنب','سلحفاة','تمساح','كنغر','غزال'
];
});


addplayerButton.addEventListener('click',function(){
    playSound(addplayerButtonSound);
    count++;
    let addplayerDiv=document.createElement('div');
    let playerNumber=document.createElement('span');
    let inputtextPlayer=document.createElement('input');
    let deleteplayerButton =document.createElement('button');

    inputtextPlayer.type='text';

    playerNumber.textContent=count;
    addplayerDiv.appendChild(playerNumber);

    inputtextPlayer.classList.add('inputtext-player');
    inputtextPlayer.required=true;
    inputtextPlayer.maxLength=10;
    addplayerDiv.appendChild(inputtextPlayer);

    deleteplayerButton.textContent='🗑️';
    deleteplayerButton.classList.add('deleteplayer-button');
    deleteplayerButton.addEventListener('click',function(){
     playSound(removeplayerButtonSound);
     addplayerDiv.remove();
     count--;
     countplayerSpan.textContent=count;
    });

    addplayerDiv.appendChild(deleteplayerButton);
    addplayerDiv.classList.add('addplayer-div');
    document.querySelector('main').appendChild(addplayerDiv);
    
    countplayerSpan.textContent=count;
});


let playersInput=[];
let players=[];
let randomPlayerIndex;
let offobjectPlayer;
let objectsArray;
let randomObjectIndex;
let finalObject;


chooseblyerForm.addEventListener('submit',function(e){
    e.preventDefault();
   
    let playersForCheckNull=document.querySelectorAll('main input');
    let booleanForCheckNull=true;
    playersForCheckNull.forEach(playername=>{
        if(playername.value.trim()==='')
        {
            booleanForCheckNull=false;
        }
    });

     if(count<3||booleanForCheckNull==false){
        return;
     }

   playSound(submitSound);
    container1.classList.add('hidden');
  players=[];
    playersInput=document.querySelectorAll('.addplayer-div input');
    playersInput.forEach(player=>{
        players.push({
        name:player.value.trim(),
        status:true,
        score:0
    });
});

randomPlayerIndex=Math.floor(Math.random()*players.length);
offobjectPlayer=players[randomPlayerIndex];
offobjectPlayer.status=false;
 

randomObjectIndex=Math.floor(Math.random()*(objectsArray.length));
finalObject=objectsArray[randomObjectIndex];
startphase2();
});


let i=0;
function startphase2(){        
        function startcontainer2(){
            if(i==players.length){
                questions1Container.classList.remove('hidden');
                return;
            }
            let container2=document.createElement("div");
            let container2H1=document.createElement("h1");
            let container2Span=document.createElement('span');
            let container2Button=document.createElement('button');
            let nameTitleTell=document.createElement('h1');
            let givePhoneH1tow=document.createElement('h1');

            nameTitleTell.textContent=players[i].name;
            nameTitleTell.classList.add('name-title-tell');
            container2.appendChild(nameTitleTell);

            container2Span.textContent=players[i].name;
            container2H1.textContent='اعطو الجوال ل ';
            container2H1.classList.add('give-phone-h1one');
            container2H1.appendChild(container2Span);
            container2.appendChild(container2H1);
            
            givePhoneH1tow.textContent=`
            اضغط التالي حتى تعرف هل انت برا السالفة او داخلها
            ولا تخلي حدا غيرك يشوف الشاشة
            `;
            givePhoneH1tow.classList.add('give-phone-h1tow');
            container2.appendChild(givePhoneH1tow);
            
            container2Button.textContent='التالي';
            container2Button.classList.add('keepgo-button');
            container2.appendChild(container2Button);
            
            
            container2.classList.add('container2');
            document.body.appendChild(container2);
            
            
            container2Button.addEventListener('click',function(){
                playSound(submitSound);
                container2.remove();
                startcontainer3();
            });
        }
        
        function startcontainer3(){
            let container3=document.createElement("div");
            let container3H1=document.createElement("h1");
            let container3Span2=document.createElement('span');
            let container3h1=document.createElement('h1');
            let container3Span3=document.createElement('span');
            let container3Button=document.createElement('button');
            let yourpurposeinH1=document.createElement('h1');
            let nametitleforidH1=document.createElement('h1');


            yourpurposeinH1.textContent=`
            هدفك في اللعبة معرفة
             مين منكم اللي برا السالفة اضغط التالي 

            `;
            yourpurposeinH1.classList.add('yourpurposein-h1');

            nametitleforidH1.textContent=players[i].name;
            nametitleforidH1.classList.add('nametitleforid-H1');
            container3.appendChild(nametitleforidH1)
            
            if(players[i].status==true){
                container3Span2.textContent='انت داخل في السالفة واللي هي';
            }
            else{
                container3Span2.textContent=`انت اللي برا السالفة حاول تعرف شو السالفة بالضبط
                 من كلام البقية او اقنعهم يصوتو على الشخص الخطأ`;
            }

            container3Span2.classList.add('choise-span');
            container3H1.appendChild(container3Span2);
            container3H1.classList.add('container3-H1');
            container3.appendChild(container3H1);
            
            if(players[i].status==true){
                container3Span3.textContent=finalObject;
                container3Span3.classList.add('animal-name');
                container3h1.appendChild(container3Span3);
                container3.appendChild(container3h1);
                container3.appendChild(yourpurposeinH1);

            }

            container3Button.textContent='التالي';
            container3Button.classList.add('keepgo-button2');
            container3.appendChild(container3Button);
            
            container3.classList.add('container3');
            document.body.appendChild(container3);
            
            container3Button.addEventListener('click',function(){
                playSound(submitSound);
                i++;
                container3.remove();
                startcontainer2();
            });
        }
        startcontainer2();
    }

    questionsButton.addEventListener('click',function(){
        playSound(submitSound);
        thequestions1Start();
    });
    
    let varforquestion1=0;
    let checkquestionfun=true;
    function thequestions1Start(){
        questions1Container.classList.add('hidden');
        thequestion1Container.classList.remove('hidden');
        if(!checkquestionfun){
            thequestions2start();
            return;
        }
       
        askSpan.textContent= players[varforquestion1].name;
        if(varforquestion1===players.length-1){
            varforquestion1=-1;
            checkquestionfun=false;
        }
        answerSpan.textContent=players[varforquestion1+1].name;
    }

     thequestionButton.addEventListener('click',function(){
        playSound(submitSound);
        varforquestion1++;
        thequestions1Start();
     });
     
    let theq2checkfirst=true;
    let theq2checkfirst2=true;
     let forcuntinuename;
     function thequestions2start(){
         thequestion1Container.classList.add('hidden');
         thequestion2Container.classList.remove('hidden');
         if(theq2checkfirst){
             thequestion2NameSpan.textContent=players[0].name;
             theq2checkfirst=false;
            }

            for(let i=0;i<players.length;i++){
                if(theq2checkfirst2==true&&i==players.length-1){
                    theq2checkfirst2=false;
                    continue;
                }

                if(players[i].name==thequestion2NameSpan.textContent||players[i].name==forcuntinuename){
                    continue;
                }
                let choseToaskButton=document.createElement('button');
            choseToaskButton.classList.add('chose-toask-button');
            choseToaskButton.textContent=players[i].name;
            choseToaskDivButtons.appendChild(choseToaskButton);
        
            choseToaskButton.addEventListener('click',function(){
                playSound(choseAskSound);
               choseToaskDivButtons.innerHTML="";
        forcuntinuename=thequestion2NameSpan.textContent;
        thequestion2NameSpan.textContent=choseToaskButton.textContent;
        thequestions2start();
     });
        }
     }

    thequestion2Buttonnext.addEventListener('click',function(){
        playSound(submitSound);
        thequestion2Container.classList.add('hidden');
        voting();

    });
    
    beforeoffobjectButton.addEventListener('click',function(){
        playSound(revealOffobjectSound);
        containerbeforeOffobject.classList.add('hidden');
        startoffobjectcontainer();
    });

 function startoffobjectcontainer() {

    mainoffobjectContainer.classList.remove("hidden");
    voteH1.textContent = players[0].name;

    let i = 0;

    let intraval = setInterval(function () {
        voteH1.textContent = players[i].name;
        i++;

        if (i >= players.length) {
            i = 0;
        }
    }, 150); 

    setTimeout(function () {
        clearInterval(intraval);
        revealOffobjectSound.pause();
        playSound(gunShotSound);
        voteH1.style.color = 'red';
        voteH1.textContent = offobjectPlayer.name;
        resutlsButton.classList.remove('hidden');
    }, 6000); 
}

let votingcount=0;
function voting(){
    startvoteContainer.classList.remove("hidden");
    if(votingcount>=players.length){
        startvoteContainer.classList.add('hidden');
        containerbeforeOffobject.classList.remove('hidden');
        return;
    }
    voitingcontainerspan.textContent=players[votingcount].name;
    for (let i=0;i<players.length;i++){
        let playervotebutton=document.createElement('button');
        playervotebutton.textContent=players[i].name;
        buttonsvoteDiv.appendChild(playervotebutton);
        playervotebutton.addEventListener('click',function(){
            playSound(voteButtonSound);
            if(players[i]===offobjectPlayer){
                if(players[votingcount]!==offobjectPlayer){
                    players[votingcount].score+=100;
                }
            }
            let votebuttons=document.querySelectorAll('.buttonsvote-div button');
            votebuttons.forEach(button=>{
                button.remove();
            });
            votingcount++;
            voting();
        });
    }
    
}
 
resutlsButton.addEventListener('click',function(){
    playSound(submitSound);
    mainoffobjectContainer.classList.add('hidden');
    startoffobjectownvote();
});

function startoffobjectownvote(){
    offobjectownvoteContainer.classList.remove('hidden');
    resutls2Button.className = '';
    resutls2Button.textContent = '';
    let h1OffVote=document.createElement('h1');
    let spanOffVote=document.createElement('span');
    spanOffVote.textContent=offobjectPlayer.name;
    spanOffVote.classList.add('offobjectname-span');
    h1OffVote.textContent=' ايش هي السالفة؟';
    h1OffVote.prepend(spanOffVote);
    offobjectownvoteContainer.appendChild(h1OffVote);


    let voted=false;
    let correctbutton;

    let randomdisplayobject=Math.floor(Math.random() * 7);
    for(let i=0;i<7;i++){
        let offobjectVoteButton=document.createElement('button');
        offobjectVoteButton.classList.add('offobject-vote-button');
        if(i==randomdisplayobject){
            correctbutton=offobjectVoteButton;
            offobjectVoteButton.textContent=finalObject;
            offobjectownvoteContainer.appendChild(offobjectVoteButton);
          
            offobjectVoteButton.addEventListener('click',function(){
                if(voted){
                    return;
                }
                playSound(correctAnswerSound);
                voted=true;
                offobjectPlayer.score+=100;
                offobjectVoteButton.className="correct-choose";
                resutls2Button.classList.add('resutls2-button');
                resutls2Button.textContent='النتائج';
                offobjectownvoteContainer.appendChild(resutls2Button);            
            });
        }
        else{
            do
            randomObjectForDisplay=Math.floor(Math.random()*objectsArray.length);
            while(randomObjectForDisplay==randomObjectIndex);

            offobjectVoteButton.textContent=objectsArray[randomObjectForDisplay];
            offobjectownvoteContainer.appendChild(offobjectVoteButton);
             
            offobjectVoteButton.addEventListener('click',function(){
                if(voted){
                    return;
                }
                playSound(wrongAnswerSound);
                voted=true;
                offobjectVoteButton.className="false-choose";
                correctbutton.className='correct-choose';
                resutls2Button.classList.add('resutls2-button');
                resutls2Button.textContent='النتائج';
                offobjectownvoteContainer.appendChild(resutls2Button);
            });
        }
    }
}

resutls2Button.addEventListener('click',function(){
    playSound(resultsButtonSound);
    offobjectownvoteContainer.classList.add('hidden');
    results();
});

function results(){
    resultsContainer.classList.remove('hidden');
    for(let i=0;i<players.length;i++){
        let resultPlayerSpan=document.createElement('span');
        let resultplayerp=document.createElement('p');

        resultPlayerSpan.textContent=players[i].score;

        resultplayerp.textContent=`${players[i].name}`;
        resultplayerp.prepend(resultPlayerSpan);
        resultDisplay.appendChild(resultplayerp);
    }
} 

playagainButton.addEventListener('click',function(){
    playSound(submitSound);
    resultsContainer.classList.add('hidden');

    resultDisplay.innerHTML = '';
    offobjectownvoteContainer.innerHTML='';
    for(let i=0;i<players.length;i++){
        players[i].status=true;

    }
    votingcount=0;
    i=0;

    randomPlayerIndex=Math.floor(Math.random()*players.length);
    offobjectPlayer=players[randomPlayerIndex];
    offobjectPlayer.status=false;


    randomObjectIndex=Math.floor(Math.random()*(objectsArray.length));
    finalObject=objectsArray[randomObjectIndex];
    resutlsButton.classList.add('hidden');
    voteH1.style.color = '#F8F5FF';

    varforquestion1=0;
    checkquestionfun=true;
    theq2checkfirst=true;
    theq2checkfirst2=true;
    forcuntinuename = undefined;

    choseToaskDivButtons.innerHTML="";

startphase2();
});

newgameButton.addEventListener('click',function(){
    playSound(submitSound);
    categoriesContainer.classList.remove('hidden');
    resultDisplay.innerHTML = '';
    offobjectownvoteContainer.innerHTML='';
    resultsContainer.classList.add('hidden');
    votingcount=0;
    i=0;
    resutlsButton.classList.add('hidden');
    voteH1.style.color = '#F8F5FF';
    players.length=0;
    let clearplayersDivForDel=document.querySelectorAll('main .addplayer-div');
    clearplayersDivForDel.forEach(input => {
    input.remove();        
    });
    count=0;
    countplayerSpan.textContent=0;

    varforquestion1=0;
    checkquestionfun=true;
    theq2checkfirst=true;
    theq2checkfirst2=true;
    forcuntinuename = undefined;

    choseToaskDivButtons.innerHTML="";

});
