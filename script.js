const questions = [
  {
    q: "नेपालको संविधान २०७२ अनुसार नेपालको राज्य संरचना कति तहको छ?",
    options: ["२ तह", "३ तह", "४ तह", "५ तह"],
    answer: 1,
    explanation: "नेपालमा संघ, प्रदेश र स्थानीय गरी ३ तहको राज्य संरचना छ।"
  },
  {
    q: "नेपालको संविधान २०७२ कहिले जारी भएको हो?",
    options: ["२०७२ असोज ३", "२०७१ असोज ३", "२०७३ असोज ३", "२०७२ भदौ ३"],
    answer: 0,
    explanation: "नेपालको संविधान २०७२ असोज ३ गते जारी भएको हो।"
  },
  {
    q: "नेपालको राष्ट्रिय फूल कुन हो?",
    options: ["गुलाफ", "लालीगुराँस", "कमल", "सुनाखरी"],
    answer: 1,
    explanation: "लालीगुराँस नेपालको राष्ट्रिय फूल हो।"
  },
  {
    q: "नेपालको राष्ट्रिय जनावर कुन हो?",
    options: ["गाई", "बाघ", "गैंडा", "हिमचितुवा"],
    answer: 0,
    explanation: "गाई नेपालको राष्ट्रिय जनावर हो।"
  },
  {
    q: "नेपालको राष्ट्रिय पक्षी कुन हो?",
    options: ["डाँफे", "मयूर", "गरुड", "सारस"],
    answer: 0,
    explanation: "डाँफे नेपालको राष्ट्रिय पक्षी हो।"
  },
  {
    q: "नेपालको सबैभन्दा अग्लो हिमाल कुन हो?",
    options: ["कञ्चनजङ्घा", "धौलागिरी", "सगरमाथा", "मनास्लु"],
    answer: 2,
    explanation: "सगरमाथा ८,८४८.८६ मिटर उचाइका साथ नेपालको सबैभन्दा अग्लो हिमाल हो।"
  },
  {
    q: "नेपालको राजधानी कुन हो?",
    options: ["पोखरा", "ललितपुर", "काठमाडौं", "भक्तपुर"],
    answer: 2,
    explanation: "नेपालको राजधानी काठमाडौं हो।"
  },
  {
    q: "नेपालमा कति वटा प्रदेश छन्?",
    options: ["५", "६", "७", "८"],
    answer: 2,
    explanation: "नेपालमा ७ वटा प्रदेश छन्।"
  },
  {
    q: "नेपालको संविधानले सार्वभौमसत्ता र राजकीयसत्ता कसमा निहित रहेको मानेको छ?",
    options: ["राष्ट्रपतिमा", "जनतामा", "संसदमा", "प्रधानमन्त्रीमा"],
    answer: 1,
    explanation: "संविधानअनुसार नेपालको सार्वभौमसत्ता र राजकीयसत्ता नेपाली जनतामा निहित छ।"
  },
  {
    q: "नेपालको संघीय संसदमा कति वटा सदन छन्?",
    options: ["१", "२", "३", "४"],
    answer: 1,
    explanation: "संघीय संसद प्रतिनिधि सभा र राष्ट्रिय सभा गरी दुई सदनको हुन्छ।"
  },
  {
    q: "प्रतिनिधि सभामा कति सदस्य हुन्छन्?",
    options: ["२७५", "२६५", "२९५", "२५५"],
    answer: 0,
    explanation: "प्रतिनिधि सभामा जम्मा २७५ सदस्य हुन्छन्।"
  },
  {
    q: "राष्ट्रिय सभामा कति सदस्य हुन्छन्?",
    options: ["५५", "५९", "६०", "६५"],
    answer: 1,
    explanation: "राष्ट्रिय सभामा जम्मा ५९ सदस्य हुन्छन्।"
  },
  {
    q: "नेपालको राष्ट्रिय रंग कुन हो?",
    options: ["हरियो", "नीलो", "क्रिमसन/सिम्रिक", "पहेंलो"],
    answer: 2,
    explanation: "नेपालको राष्ट्रिय रंग सिम्रिक हो।"
  },
  {
    q: "नेपालको झण्डा कुन विशेषताका कारण विश्वमा फरक मानिन्छ?",
    options: ["यसमा कुनै रंग छैन", "यो आयताकार छैन", "यसमा केवल एउटा त्रिभुज छ", "यो गोलाकार छ"],
    answer: 1,
    explanation: "नेपालको राष्ट्रिय झण्डा आयताकार नभएको विशिष्ट राष्ट्रिय झण्डा हो।"
  },
  {
    q: "लुम्बिनी कुन कारणले प्रसिद्ध छ?",
    options: ["पृथ्वीनारायण शाहको जन्मस्थान", "भगवान बुद्धको जन्मस्थान", "अरनिकोको जन्मस्थान", "भानुभक्तको जन्मस्थान"],
    answer: 1,
    explanation: "लुम्बिनी भगवान गौतम बुद्धको जन्मस्थल हो।"
  },
  {
    q: "नेपालको सबैभन्दा ठूलो ताल कुन हो?",
    options: ["फेवा ताल", "रारा ताल", "बेगनास ताल", "तिलिचो ताल"],
    answer: 1,
    explanation: "क्षेत्रफलका आधारमा रारा ताल नेपालको सबैभन्दा ठूलो ताल हो।"
  },
  {
    q: "नेपालको सबैभन्दा ठूलो जिल्ला क्षेत्रफलका आधारमा कुन हो?",
    options: ["डोल्पा", "हुम्ला", "ताप्लेजुङ", "मुस्ताङ"],
    answer: 0,
    explanation: "क्षेत्रफलका आधारमा डोल्पा नेपालको सबैभन्दा ठूलो जिल्ला हो।"
  },
  {
    q: "नेपालको सबैभन्दा सानो जिल्ला क्षेत्रफलका आधारमा कुन हो?",
    options: ["काठमाडौं", "भक्तपुर", "ललितपुर", "पर्सा"],
    answer: 1,
    explanation: "क्षेत्रफलका आधारमा भक्तपुर नेपालको सबैभन्दा सानो जिल्ला हो।"
  },
  {
    q: "नेपालको पहिलो निर्वाचित प्रधानमन्त्री को हुन्?",
    options: ["बी.पी. कोइराला", "मातृकाप्रसाद कोइराला", "टंकप्रसाद आचार्य", "कृष्णप्रसाद भट्टराई"],
    answer: 0,
    explanation: "बी.पी. कोइराला नेपालको पहिलो निर्वाचित प्रधानमन्त्री हुन्।"
  },
  {
    q: "नेपालको सरकारी कामकाजको भाषा कुन हो?",
    options: ["मैथिली", "नेपाली", "अंग्रेजी", "नेपाल भाषासहित सबै भाषा"],
    answer: 1,
    explanation: "संविधानको धारा ७ अनुसार देवनागरी लिपिमा लेखिने नेपाली भाषा नेपालको सरकारी कामकाजको भाषा हो।"
  },
  {
    q: "लोकसेवा आयोग नेपालको संविधानमा कुन निकायको रूपमा व्यवस्था गरिएको छ?",
    options: ["संवैधानिक निकाय", "निजी संस्था", "स्थानीय संस्था", "न्यायिक अदालत"],
    answer: 0,
    explanation: "लोकसेवा आयोग नेपालको संविधानद्वारा स्थापित संवैधानिक निकाय हो।"
  }
];

let current = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const questionNumberEl = document.getElementById("questionNumber");
const scoreTextEl = document.getElementById("scoreText");
const progressBarEl = document.getElementById("progressBar");
const quizCardEl = document.getElementById("quizCard");
const resultCardEl = document.getElementById("resultCard");
const finalScoreEl = document.getElementById("finalScore");
const resultMessageEl = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restartBtn");

const nepaliDigits = "०१२३४५६७८९";
function np(n) {
  return String(n).replace(/\d/g, d => nepaliDigits[d]);
}

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  feedbackEl.classList.add("hidden");
  feedbackEl.textContent = "";

  const item = questions[current];
  questionNumberEl.textContent = `प्रश्न ${np(current + 1)} / ${np(questions.length)}`;
  scoreTextEl.textContent = `स्कोर: ${np(score)}`;
  progressBarEl.style.width = `${((current + 1) / questions.length) * 100}%`;
  questionEl.textContent = item.q;
  optionsEl.innerHTML = "";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.addEventListener("click", () => chooseAnswer(index, button));
    optionsEl.appendChild(button);
  });
}

function chooseAnswer(selected, clickedButton) {
  if (answered) return;
  answered = true;

  const item = questions[current];
  const buttons = [...optionsEl.querySelectorAll(".option")];

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === item.answer) btn.classList.add("correct");
  });

  if (selected === item.answer) {
    score++;
    clickedButton.classList.add("correct");
    feedbackEl.innerHTML = `✅ <strong>सही उत्तर!</strong><br>${item.explanation}`;
  } else {
    clickedButton.classList.add("wrong");
    feedbackEl.innerHTML = `❌ <strong>गलत उत्तर।</strong><br>सही उत्तर: <strong>${item.options[item.answer]}</strong><br>${item.explanation}`;
  }

  scoreTextEl.textContent = `स्कोर: ${np(score)}`;
  feedbackEl.classList.remove("hidden");
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  if (!answered) return;

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizCardEl.classList.add("hidden");
  resultCardEl.classList.remove("hidden");

  finalScoreEl.textContent = `${np(score)} / ${np(questions.length)}`;

  let message = "";
  const percentage = (score / questions.length) * 100;

  if (percentage >= 80) {
    message = "🔥 उत्कृष्ट! तपाईंको लोकसेवा तयारी राम्रो दिशामा छ।";
  } else if (percentage >= 60) {
    message = "👏 राम्रो प्रयास! कमजोर भएका विषयहरू फेरि अभ्यास गर्नुहोस्।";
  } else {
    message = "📚 अझै अभ्यास आवश्यक छ। फेरि क्विज खेलेर आफ्नो स्कोर सुधार्नुहोस्।";
  }

  resultMessageEl.textContent = message;

  if (typeof gtag === "function") {
    gtag("event", "quiz_completed", {
      score: score,
      total_questions: questions.length
    });
  }
}

restartBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  resultCardEl.classList.add("hidden");
  quizCardEl.classList.remove("hidden");
  loadQuestion();
});

loadQuestion();
