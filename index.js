// lessonLevel fetch =>
const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((level) => displayLesson(level.data)); //display lesson function open
};

//loadLevelWord fetch (2nd task starts)
const loadLevelWord = (id) => {
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)       //id use korar jonno ` er vitor link/ ${id}` use
    .then((res) => res.json())
    .then((wordLevelList) => displayWordLevelList(wordLevelList.data)); //wordlist er .data kore display korlam, baire ei display function likhbo
};

//display word level list function
const displayWordLevelList = (words) => {
  const wordListContainer = document.getElementById("word_list");  //id(" er vitor likte hobe")
  wordListContainer.innerHTML = "";

       //click korar por innerHtml khali thakle length == 0 pele innerHtml e text show kora
              if(words.length == 0){
                   wordListContainer.innerHTML = `
                    <div class="col-span-full space-y-4 bangla_font">
                    <img src="./assets/alert-error.png" alt="" class="mx-auto">
                    <p class="text-[#79716B]"> empty </p>
                    <h2 class="font-medium font_bangla text-4xl"> next Lesson Select করুন। </h2>
                    </div>
                 `;
                 }                                            //img er class mx-auto dile center e ashbe 

  words.forEach((word) => {
    console.log(word);
    const wordDiv = document.createElement("div")      //html er vitor ${word.word} likhte hobe kono string hobe na + ? rendaring: truthy?falsi
    wordDiv.innerHTML = `
    <div class="bg-white rounded-lg shadow-sm text-center px-5 py-10 space-y-2 flex flex-col justify-between">
          <h2 class="font-bold text-2xl">${word.word ? word.word:"অর্থ পাওয়া যায় নি" }</h2>               
          <p class="">Meaning /Pronounciation</p>
          <h2 class="font-bold font_bangla text-2xl">${word.meaning ? word.meaning : "অর্থ পাওয়া যায় নি"} / ${word.pronunciation}</h2>

          <div class="flex justify-between">
            <button class="btn bg-[#1A91FF10]"> <i class="fa-solid fa-circle-info"></i> </button>
            <button class="btn bg-[#1A91FF10]"> <i class="fa-solid fa-volume-high"></i></button>
          </div>
        </div>
    
    `
  wordListContainer.append(wordDiv)
  });
};             //(2nd task done)

// display lesson function create
const displayLesson = (lessons) => {
  // 1. get the container
  const levelLessonContainer = document.getElementById("lesson_container");
  levelLessonContainer.innerHTML = ""; //container khali korlam

  //2. lessons er every lesson/levelCard ke forEach diye show kora
  lessons.forEach((lesson) => {
    //3. lesson level er ekta div + innerHtml=` create kora `
    const levelBtnDiv = document.createElement("div");
    levelBtnDiv.innerHTML = `
                      <button onclick="loadLevelWord(${lesson.level_no})" class="p-4 btn btn-outline btn-primary text-[#422AD5] hover:text-white">
                              <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
                      </button>
           `;

    //4. levelBtnDiv ke levelContainer e append kora
    levelLessonContainer.append(levelBtnDiv);
  });
};

//function call list =>
loadLessons();

// {
// "id": 101,
// "level_no": 1,
// "lessonName": "Basic Vocabulary"
// },

// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"

// 1st kaj: function load kore level button create
// 2nd kaj: btnDiv e click kore ekta loadLevelWord() function baire create kora
