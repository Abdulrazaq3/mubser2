
import { useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const arTranslations = {
  "header": {
    "nav": {
      "home": "الرئيسية",
      "signToText": "إشارة إلى نص",
      "textToSign": "نص إلى إشارة",
      "faq": "الأسئلة الشائعة",
      "licensing": "تراخيص البيانات"
    },
    "logoAlt": "شعار مُبصِر",
    "homeAria": "الصفحة الرئيسية لـ مُبصِر",
    "darkModeAria": "تفعيل الوضع الداكن",
    "lightModeAria": "تفعيل الوضع الفاتح",
    "toggleLanguageAria": "تبديل اللغة",
    "openMenuAria": "فتح القائمة",
    "closeMenuAria": "إغلاق القائمة"
  },
  "hero": {
    "title": "ترجمة لغة الإشارة لحظيًا",
    "subtitle": {
      "line1": "مُبصِر يساعدك على تواصل ثنائي متكامل",
      "line2": "يحوّل لغة الإشارة إلى كلمات منطوقة،",
      "line3": "والكلمات إلى إشارة — بسلاسة وفي اللحظة نفسها."
    },
    "ctaButton": "ابدأ الآن"
  },
  "datasetBanner": {
    "title": "مُبصر يمتلك أكبر داتا سيت عربية للغة الإشارة",
    "subtitle": "تم بناؤها داخليًا، وتنظيفها، وتوثيقها بالكامل داخل فريق العمل."
  },
  "chatTeaser": {
    "title": "المساعد الذكي من مُبصِر",
    "subtitle": "هل لديك استفسار؟ تحدث مع المساعد الذكي للحصول على إجابات فورية حول خدماتنا، لغة الإشارة، أو الدعم الفني.",
    "button": "تحدث مع المساعد الذكي",
    "commingSoon": "قريباً"
  },
  "pricing": {
    "title": "باقات الأسعار",
    "subtitle": "اختر الخطة المناسبة لاحتياجاتك، سواء كنت فرداً أو مؤسسة",
    "b2c": "الأفراد",
    "b2b": "الجهات والشركات",
    "choosePlan": "اختر الخطة",
    "plans": {
        "free": {
            "name": "الخطة المجانية",
            "price": "مجاناً",
            "period": "",
            "features": [
                "ترجمة حتى 10 إشارات يوميًا",
                "نص فقط",
                "إعلانات بسيطة"
            ]
        },
        "personal": {
            "name": "الخطة الشهرية",
            "price": "29 ريال",
            "period": "/ شهر",
            "features": [
                "ترجمة غير محدودة",
                "نص + صوت",
                "دقة عالية"
            ]
        },
        "family": {
            "name": "الخطة العائلية",
            "price": "49 ريال",
            "period": "/ شهر",
            "features": [
                "3 مستخدمين",
                "كل خصائص الخطة الشهرية",
                "لوحة تحكم للعائلة"
            ]
        },
        "small": {
            "name": "باقة الشركات الصغيرة",
            "price": "5,000 - 12,000 ريال",
            "period": "/ سنة",
            "features": [
                "إلى 5 مستخدمين",
                "Dashboard بسيط",
                "دعم خلال ساعات العمل"
            ]
        },
        "standard": {
            "name": "الباقة القياسية",
            "price": "25,000 - 50,000 ريال",
            "period": "/ سنة",
            "features": [
                "إلى 20 مستخدم",
                "Dashboard كامل",
                "API محدود",
                "دعم 24 ساعة"
            ]
        },
        "enterprise": {
            "name": "الباقة الحكومية / المؤسسية",
            "price": "70,000 - 150,000 ريال",
            "period": "/ سنة",
            "features": [
                "عدد مستخدمين غير محدود",
                "API مفتوح",
                "تكامل مع أنظمة المؤسسة",
                "دعم 24/7",
                "SLA رسمي"
            ]
        }
    }
  },
  "vision2030": {
    "title": "مُبصِر ورؤية المملكة 2030",
    "subtitle": "نحو مجتمع حيوي، شامل، ورقمي",
    "description": "يفتخر مُبصِر بمواءمته التامة مع مستهدفات رؤية المملكة 2030، حيث نسخر الذكاء الاصطناعي لخدمة الإنسان وتحسين جودة الحياة.",
    "points": [
      {
        "title": "تمكين ذوي الإعاقة",
        "desc": "تعزيز استقلالية ذوي الإعاقة السمعية ودمجهم الكامل في المجتمع وسوق العمل."
      },
      {
        "title": "جودة الحياة",
        "desc": "إزالة حواجز التواصل اليومية لخلق بيئة مجتمعية أكثر ترابطاً وسعادة."
      },
      {
        "title": "التحول الرقمي",
        "desc": "توظيف أحدث تقنيات الذكاء الاصطناعي والبيانات الضخمة في حلول وطنية مبتكرة."
      }
    ]
  },
  "whyMubsir": {
    "title": "لماذا مُبصِر؟",
    "features": [
      {
        "icon": "fast",
        "title": "سريع",
        "description": "معالجة فورية ومباشرة داخل المتصفح لضمان استجابة لحظية دون تأخير."
      },
      {
        "icon": "accurate",
        "title": "دقيق",
        "description": "نستخدم نماذج ذكاء اصطناعي متطورة ومُدرّبة للتعرّف على الإشارات الشائعة بكفاءة عالية."
      },
      {
        "icon": "private",
        "title": "خاص",
        "description": "خصوصيتك هي أولويتنا. لا نُخزّن أو نشارك صورك أو فيديوهاتك على الإطلاق."
      },
      {
        "icon": "bilingual",
        "title": "ترجمة ثنائية",
        "description": "يحوّل لغة الإشارة إلى كلمات منطوقة، والكلمات إلى إشارة — بسلاسة وفي اللحظة نفسها."
      }
    ]
  },
  "howToUse": {
    "title": "كيفية الاستخدام",
    "steps": [
      {
        "icon": "camera",
        "title": "امنح الإذن للكاميرا",
        "description": "اضغط على زر \"تشغيل الكاميرا\" واسمح للمتصفح بالوصول إليها."
      },
      {
        "icon": "hand",
        "title": "لوّح بإشارتك",
        "description": "قف بوضوح أمام الكاميرا وقم بالإشارة داخل الإطار المحدد."
      },
      {
        "icon": "read",
        "title": "اقرأ واستمع للترجمة",
        "description": "شاهد النص يظهر فورًا على الشاشة واستمع للنطق الصوتي."
      }
    ]
  },
  "team": {
    "title": "تعرّف على فريق مُبصِر",
    "viewDetails": "عرض التفاصيل",
    "members": [
      {
        "id": "ahmed",
        "name": "أحمد الرشيد",
        "title": "قائد الفريق ومهندس ذكاء اصطناعي",
        "avatar": "https://i.postimg.cc/YCdRJrCv/ahmd.jpg",
        "bio": "أنا طالب علوم حاسب في جامعة شقراء، ومهندس ذكاء اصطناعي، ومطور تطبيقات iOS، ومطور متكامل (Full-Stack Developer)، شغوف بابتكار حلول تقنية حديثة تجمع بين الذكاء الاصطناعي وتطوير البرمجيات. شاركت في قيادة وتطوير مشاريع مؤثرة مثل صلة لترجمة أحرف لغة الإشارة، وEduEye للتنبؤ بالمتعثرين واكتشاف الموهوبين، إضافة إلى تطوير Velorent لتأجير السيارات الشخصية، كما كنت جزءًا من فريق عمل على مشروع يسرا لتسهيل الوصول للأماكن المهيأة لذوي الإعاقة. حققت مع فريقي المركز الثاني في هاكاثون كواليثون بين 63 فريقًا من 30 جامعة. كما حصدت المركز الأول ثلاث سنوات متتالية في الملتقى العلمي بالجامعة بمسار الفكرة المتميزة بريادة الأعمال. أنا خريج المعسكر التأسيسي للذكاء الاصطناعي من أبل، وبرنامج سامسونج للذكاء الاصطناعي. أحمل شهادة القيادة العالمية من جامعة كوفنتري ببريطانيا بعد اختياري ضمن أفضل 16 طالبًا في الجامعة. كما حققت المركز الاول في هاكاثون المبادرات الشبابيه حول المملكة بمشروع طوع لجعل الساعات التطوعيه كتنافس جامعي. هذه الإنجازات عززت مهاراتي في القيادة، الابتكار، والجودة، وأسعى لتسخير التقنية في صناعة حلول واقعية ملهمة.",
        "linkedin": "https://www.linkedin.com/in/ahmed-k-alrasheed-446b8829b"
      },
      {
        "id": "amirah",
        "name": "اميرة الدعجاني",
        "title": "مهندسة البيانات",
        "avatar": "https://i.postimg.cc/fbdq44t7/Amirah.jpg",
        "bio": "طالبة في السنة الأخيرة بقسم علوم الحاسب – مسار الذكاء الاصطناعي. أمتلك خبرة عملية في الذكاء الاصطناعي، إنترنت الأشياء، تحليل البيانات، وأتمتة العمليات الروبوتية. نفذت عدة مشاريع بارزة مثل \"صلة\" لترجمة أحرف لغة الإشارة و\"غراس\" لاكتشاف أمراض النباتات. كما طورت نظام حجز مواقف ذكي يعتمد على الذكاء الاصطناعي وIoT. شاركت في هاكاثونات وتحديات تقنية وحصلت على المركز الثاني في هاكاثون المدن الذكية. أنجزت تدريبًا متنوعًا في مجموعة الخريف شمل تحليل البيانات، RPA، وتطوير الويب، إضافةً إلى معسكر سامسونج للذكاء الاصطناعي. وحصلت على شهادات احترافية مستقلة في الذكاء الاصطناعي، إنترنت الأشياء، وتحليل البيانات.",
        "linkedin": "https://www.linkedin.com/in/aldajanii/"
      },
      {
        "id": "abdulrazaq",
        "name": "عبدالرزاق الدوسري",
        "title": "مطور متكامل",
        "avatar": "https://i.postimg.cc/26szkNTt/self-Pecture.png",
        "bio": "طالب في السنة اﻷخيرة بقسم علوم الحاسب - مسار الذكاء اﻷصطناعي. مهتم بتطوير الويب والذكاء الاصطناعي، ولدي خبرة في بناء تطبيقات ويب متكاملة باستخدام تقنيات حديثة. شاركت في مشروع 'صلة' لترجمة لغة الإشارة وساهمت في تطوير الواجهات الخلفية. أسعى لتطبيق مهاراتي في حل مشكلات العالم الحقيقي.",
        "linkedin": "https://www.linkedin.com/in/abdulrazaq-h-aldawsari-046511209/"
      },
      {
        "id": "sadeem",
        "name": "سديم الرشيد",
        "title": "مولدة بيانات",
        "avatar": "https://i.postimg.cc/xjpvPx8G/Sadeem.jpg",
        "bio": "طالبة في السنة الأخيرة بقسم علوم الحاسب - مسار ذكاء اصطناعي، أمتلك أساسًا في تقنيات إنترنت الأشياء والذكاء الاصطناعي والتقنيات الذكية، مع خبرة في تطوير النماذج الأولية، قواعد البيانات، وتحليل الجدوى للأفكار التقنية. طورت نظام ري ذكي مستدام، كما تم اختياري ضمن أفضل 15 فريقًا على مستوى السعودية في تحدي إنترنت الأشياء 23 لمنشآت، مما عزز خبرتي في العرض الاحترافي وبناء النماذج العملية. حصلت على عدة شهادات احترافية في الذكاء الاصطناعي، تحليلات البيانات، وإنترنت الأشياء من جهات معتمدة وأتميز بسرعة التعلم، والقدرة على توظيف التقنيات الحديثة في ابتكار حلول تخدم التحول الرقمي والتنمية المستدامة.",
        "linkedin": "https://www.linkedin.com/in/sadeem-alrasheed-b5b021306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      }
    ]
  },
  "faq": {
    "title": "أسئلة شائعة",
    "questions": [
      {
        "question": "هل مُبصر مناسب للأفراد والجهات؟",
        "answer": "نعم، مُبصر يقدم خدمات B2C للأفراد وخدمات B2B للجهات الحكومية والشركات."
      },
      {
        "question": "هل يتم حفظ صور المستخدم؟",
        "answer": "لا، يوجد وضع خصوصية يمنع تخزين الصور نهائيًا، وتتم المعالجة في المتصفح."
      },
      {
        "question": "هل النموذج يدعم اللغة العربية بالكامل؟",
        "answer": "نعم، مُبصر مبني على أكبر داتا سيت عربية للغة الإشارة بدقة تتجاوز 98%."
      },
      {
        "question": "هل يمكن دمج مُبصر مع أنظمة المؤسسات؟",
        "answer": "نعم، نوفر API وتكامل كامل للجهات الراغبة ضمن الباقات المؤسسية."
      },
      {
        "question": "هل هناك نسخة تجريبية (Demo)؟",
        "answer": "نعم، يمكن تشغيل النموذج من المتصفح مباشرة عبر صفحة 'إشارة إلى نص'."
      },
      {
        "question": "كيف يمكن للجهات طلب باقة مؤسسية؟",
        "answer": "عبر التواصل المباشر أو زر طلب الباقة داخل الموقع في قسم التراخيص."
      },
      {
        "question": "هل توجد نسخة خاصة للمدارس والمستشفيات؟",
        "answer": "نعم، يمكن توفير نسخة مخصصة حسب احتياج المؤسسة لخدمة قطاعات التعليم والصحة."
      }
    ]
  },
  "cta": {
    "title": "هل أنت مستعد لسد فجوة التواصل؟",
    "subtitle": "انضم إلينا اليوم وجرّب مستقبل التواصل بلغة الإشارة. إنه سريع ومجاني ويحترم خصوصيتك.",
    "button1": "ترجمة إشارة إلى نص",
    "button2": "ترجمة نص إلى إشارة"
  },
  "footer": {
    "about": "مُبصِر هو أداة لترجمة لغة الإشارة مدعومة بالذكاء الاصطناعي، مصممة لجعل التواصل أكثر سهولة للجميع.",
    "quickLinksTitle": "روابط سريعة",
    "followUsTitle": "تابعنا",
    "copyright": "مُبصِر. جميع الحقوق محفوظة."
  },
  "textToSign": {
    "title": "من النص إلى لغة الإشارة",
    "subtitle": "تقنياتنا تحول النصوص المكتوبة إلى إشارات بصرية سلسة، مما يعزز التواصل الفعال.",
    "inputLabel": "ابدأ التجربة",
    "placeholder": "شاهد كيف تتحول الكلمات إلى لغة الإشارة... اضغط على زر التشغيل أدناه لمشاهدة الفيديو التوضيحي.",
    "startButton": "تشغيل",
    "loadingAria": "جاري تحميل الفيديو"
  },
  "signToTextPage": {
    "title": "من الإشارة إلى النص",
    "subtitle": "استخدم كاميرا جهازك لترجمة لغة الإشارة إلى نص في الوقت الفعلي.",
    "lettersTab": "ترجمة الحروف",
    "wordsTab": "ترجمة الكلمات",
    "confidenceLabel": "مستوى الثقة",
    "copyButton": "نسخ النص"
  },
  "translator": {
    "prompt": "وجّه الكاميرا أو حمّل صورة للبدء.",
    "handInFrame": "ضع يدك بوضوح داخل الإطار",
    "imagePreviewAlt": "معاينة الصورة المحملة",
    "cameraError": "فشل الوصول إلى الكاميرا. يرجى التحقق من الأذونات.",
    "apiError": "حدث خطأ أثناء التحليل.",
    "retryButton": "إعادة المحاولة",
    "speakButton": "نطق النص",
    "copyButton": "نسخ النص",
    "startCamera": "تشغيل الكاميرا",
    "uploadImage": "تحميل صورة",
    "stopButton": "إيقاف",
    "captureIntervalLabel": "التقاط كل {seconds} ثواني",
    "analyzeImageButton": "تحليل الصورة",
    "removeImageButton": "إزالة الصورة",
    "privacyNote": "تتم معالجة جميع الصور محليًا في متصفحك. خصوصيتك مضمونة.",
    "placeholder": {
      "letters": "سيظهر الحرف المترجم هنا...",
      "words": "ستظهر الكلمة المترجمة هنا..."
    },
    "status": {
      "idle": "خامل",
      "requesting": "طلب الكاميرا...",
      "watching": "مراقبة",
      "translating": "جار الترجمة...",
      "error": "خطأ"
    }
  },
  "licensing": {
    "title": "تراخيص البيانات – مُبصر",
    "subtitle": "أكبر وأشمل داتا سيت عربية للغة الإشارة",
    "about": {
        "title": "لماذا بيانات مُبصر مميزة؟",
        "content": "تمتلك مُبصر أكبر داتا سيت عربية متخصصة في لغة الإشارة، تم بناؤها، تنظيفها، وتحسينها بالكامل داخل الفريق دون أي مصادر خارجية. تتضمن آلاف العينات المصنّفة بعناية لتغطي الحروف والإشارات والكلمات الأكثر استخدامًا في التواصل اليومي."
    },
    "whyFeatures": [
        "أكبر داتا سيت عربية للغة الإشارة",
        "بيانات مُنظّفة ومصنفة بدقة",
        "أصل تقني نادر لا يمكن نسخه بسهولة",
        "مبنية 100% داخل الفريق",
        "مناسبة للذكاء الاصطناعي والتعلم العميق",
        "تدعم رؤية 2030 في الوصول الشامل"
    ],
    "types": {
        "title": "أنواع تراخيص البيانات",
        "academic": {
            "title": "الترخيص الأكاديمي",
            "price": "5,000 - 10,000 ريال",
            "description": "مناسب للباحثين، الجامعات، الطلاب، والمختبرات العلمية. يتيح الوصول للداتا سيت للأغراض البحثية والتعليمية."
        },
        "commercial": {
            "title": "الترخيص التجاري",
            "price": "20,000 - 45,000 ريال",
            "description": "مخصص للشركات التي ترغب باستخدام الداتا سيت لتطوير منتجات، حلول تجارية، أو دمجها في أنظمتها الخاصة."
        },
        "enterprise": {
            "title": "الترخيص المؤسسي / الحكومي",
            "price": "80,000 - 200,000 ريال",
            "description": "للمؤسسات الكبيرة، الوزارات، المستشفيات، الجامعات الحكومية، والجهات الرسمية التي تتطلب دعمًا كاملاً، تحديثات مستمرة، ونسخًا مخصصة."
        }
    },
    "cta": {
        "title": "اطلب ترخيص البيانات الآن",
        "button": "طلب ترخيص البيانات"
    },
    "contact": {
        "title": "تحتاج استشارة أو تفاصيل إضافية؟",
        "text": "فريق مُبصر جاهز لمساعدتك وتقديم نسخة مناسبة لاحتياجات جهتك.",
        "email": "Mubser.info0@gmail.com",
        "phone": "+966 509 688559"
    }
  },
  "common": {
    "scrollToTop": "العودة للأعلى"
  }
};

const enTranslations = {
  "header": {
    "nav": {
      "home": "Home",
      "signToText": "Sign to Text",
      "textToSign": "Text to Sign",
      "faq": "FAQ",
      "licensing": "Dataset Licensing"
    },
    "logoAlt": "Mubsir Logo",
    "homeAria": "Mubsir Home Page",
    "darkModeAria": "Enable Dark Mode",
    "lightModeAria": "Enable Light Mode",
    "toggleLanguageAria": "Toggle Language",
    "openMenuAria": "Open Menu",
    "closeMenuAria": "Close Menu"
  },
  "hero": {
    "title": "Real-time Sign Language Translation",
    "subtitle": {
      "line1": "Mubsir helps you with seamless two-way communication,",
      "line2": "translating sign language into spoken words,",
      "line3": "and words into sign language—instantly and effortlessly."
    },
    "ctaButton": "Get Started"
  },
  "datasetBanner": {
    "title": "Mubser owns the largest Arabic Sign Language Dataset",
    "subtitle": "Built in-house, cleaned, and fully documented by our team."
  },
  "chatTeaser": {
    "title": "Mubsir Smart Assistant",
    "subtitle": "Have a question? Chat with our smart assistant to get instant answers about our services, sign language, or technical support.",
    "button": "Chat with Assistant",
    "commingSoon": "Coming Soon"
  },
  "pricing": {
    "title": "Pricing Plans",
    "subtitle": "Choose the plan that fits your needs, whether you're an individual or an organization",
    "b2c": "Individuals",
    "b2b": "Businesses & Institutions",
    "choosePlan": "Choose Plan",
    "plans": {
        "free": {
            "name": "Free Plan",
            "price": "Free",
            "period": "",
            "features": [
                "Translate up to 10 signs/day",
                "Text only",
                "Basic ads"
            ]
        },
        "personal": {
            "name": "Personal Plan",
            "price": "SAR 29",
            "period": "/ Month",
            "features": [
                "Unlimited translation",
                "Text + Audio",
                "High accuracy"
            ]
        },
        "family": {
            "name": "Family Plan",
            "price": "SAR 49",
            "period": "/ Month",
            "features": [
                "3 Users",
                "All Personal Plan features",
                "Family Dashboard"
            ]
        },
        "small": {
            "name": "Small Business Package",
            "price": "SAR 5,000 - 12,000",
            "period": "/ Year",
            "features": [
                "Up to 5 Users",
                "Basic Dashboard",
                "Business Hours Support"
            ]
        },
        "standard": {
            "name": "Standard Package",
            "price": "SAR 25,000 - 50,000",
            "period": "/ Year",
            "features": [
                "Up to 20 Users",
                "Full Dashboard",
                "Limited API",
                "24h Support"
            ]
        },
        "enterprise": {
            "name": "Enterprise / Government",
            "price": "SAR 70,000 - 150,000",
            "period": "/ Year",
            "features": [
                "Unlimited Users",
                "Open API",
                "Enterprise Integration",
                "24/7 Support",
                "Official SLA"
            ]
        }
    }
  },
  "vision2030": {
    "title": "Mubsir & Vision 2030",
    "subtitle": "Towards a Vibrant, Inclusive, and Digital Society",
    "description": "Mubsir is proud to fully align with the goals of Saudi Vision 2030, leveraging AI to serve humanity and improve quality of life.",
    "points": [
      {
        "title": "Empowering People with Disabilities",
        "desc": "Enhancing the independence of the hearing-impaired and their full integration into society and the job market."
      },
      {
        "title": "Quality of Life",
        "desc": "Removing daily communication barriers to create a more connected and happy community environment."
      },
      {
        "title": "Digital Transformation",
        "desc": "Employing the latest AI technologies and big data in innovative national solutions."
      }
    ]
  },
  "whyMubsir": {
    "title": "Why Mubsir?",
    "features": [
      {
        "icon": "fast",
        "title": "Fast",
        "description": "Instant, in-browser processing ensures real-time responses with no delay."
      },
      {
        "icon": "accurate",
        "title": "Accurate",
        "description": "We use advanced, trained AI models to recognize common signs with high efficiency."
      },
      {
        "icon": "private",
        "title": "Private",
        "description": "Your privacy is our priority. We never store or share your images or videos."
      },
      {
        "icon": "bilingual",
        "title": "Two-Way Translation",
        "description": "Translates sign language to spoken words and words to sign language—seamlessly."
      }
    ]
  },
  "howToUse": {
    "title": "How to Use",
    "steps": [
      {
        "icon": "camera",
        "title": "Allow Camera Access",
        "description": "Click the 'Start Camera' button and allow the browser to access it."
      },
      {
        "icon": "hand",
        "title": "Make Your Sign",
        "description": "Stand clearly in front of the camera and make your sign within the designated frame."
      },
      {
        "icon": "read",
        "title": "Read & Hear the Translation",
        "description": "Watch the text appear instantly on the screen and listen to the audio pronunciation."
      }
    ]
  },
  "team": {
    "title": "Meet the Mubsir Team",
    "viewDetails": "View Details",
    "members": [
      {
        "id": "ahmed",
        "name": "Ahmed Alrasheed",
        "title": "Team Lead & AI Engineer",
        "avatar": "https://i.postimg.cc/YCdRJrCv/ahmd.jpg",
        "bio": "I am a computer science student at Shaqra University, an AI engineer, an iOS app developer, and a full-stack developer, passionate about creating modern tech solutions that combine AI and software development. I have led and developed impactful projects like 'Silah' for sign language letter translation, and 'EduEye' for predicting struggling students and identifying gifted ones, in addition to developing 'Velorent' for personal car rentals. I was also part of a team working on the 'Yusra' project to facilitate access for people with disabilities. My team and I won second place at the Qualithon hackathon among 63 teams from 30 universities. I also won first place for three consecutive years at the university's scientific forum in the outstanding entrepreneurship idea track. I am a graduate of Apple's AI foundational bootcamp and Samsung's AI program. I hold a Global Leadership certificate from Coventry University in the UK after being selected among the top 16 students at the university. I also achieved first place in the youth initiatives hackathon across the kingdom with the 'Tawq' project, which gamifies volunteer hours for university competition. These achievements have enhanced my skills in leadership, innovation, and quality, and I seek to harness technology to create inspiring, real-world solutions.",
        "linkedin": "https://www.linkedin.com/in/ahmed-k-alrasheed-446b8829b"
      },
      {
        "id": "amirah",
        "name": "Amirah Aldajani",
        "title": "Data Engineer",
        "avatar": "https://i.postimg.cc/fbdq44t7/Amirah.jpg",
        "bio": "Final year Computer Science student – AI track. I have practical experience in AI, IoT, data analysis, and robotic process automation. I have implemented several notable projects like 'Silah' for sign language letter translation and 'Ghiras' for detecting plant diseases. I also developed a smart parking reservation system based on AI and IoT. I have participated in hackathons and tech challenges, winning second place in the Smart Cities Hackathon. I completed a diverse internship at Al-Khorayef Group covering data analysis, RPA, and web development, in addition to Samsung's AI camp. I have also obtained independent professional certifications in AI, IoT, and data analysis.",
        "linkedin": "https://www.linkedin.com/in/aldajanii/"
      },
      {
        "id": "abdulrazaq",
        "name": "Abdulrazaq Aldosari",
        "title": "Full-Stack Developer",
        "avatar": "https://i.postimg.cc/26szkNTt/self-Pecture.png",
        "bio": "Final year Computer Science student - AI track. Interested in web development and AI, I have experience building full-stack web applications using modern technologies. I participated in the 'Silah' project for sign language translation and contributed to back-end development. I strive to apply my skills to solve real-world problems.",
        "linkedin": "https://www.linkedin.com/in/abdulrazaq-h-aldawsari-046511209/"
      },
      {
        "id": "sadeem",
        "name": "Sadeem Alrasheed",
        "title": "Data Generator",
        "avatar": "https://i.postimg.cc/xjpvPx8G/Sadeem.jpg",
        "bio": "A final-year Computer Science student, specializing in Artificial Intelligence. I have a foundation in IoT, AI, and smart technologies, with experience in prototype development, databases, and feasibility analysis for tech ideas. I developed a sustainable smart irrigation system and was selected among the top 15 teams in Saudi Arabia for the Monsha'at IoT Challenge 23, which enhanced my experience in professional presentation and building practical models. I have obtained several professional certifications in AI, data analytics, and IoT from accredited institutions. I am a fast learner with the ability to leverage modern technologies to create solutions that serve digital transformation and sustainable development.",
        "linkedin": "https://www.linkedin.com/in/sadeem-alrasheed-b5b021306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      }
    ]
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "questions": [
      {
        "question": "Is Mubsir suitable for individuals and organizations?",
        "answer": "Yes, Mubsir provides B2C services for individuals and B2B services for government entities and companies."
      },
      {
        "question": "Are user images stored?",
        "answer": "No, there is a privacy mode that prevents image storage completely; processing happens in the browser."
      },
      {
        "question": "Does the model fully support Arabic?",
        "answer": "Yes, Mubsir is built on the largest Arabic sign language dataset with over 98% accuracy."
      },
      {
        "question": "Can Mubsir be integrated with enterprise systems?",
        "answer": "Yes, we provide APIs and full integration for organizations wishing to use our enterprise packages."
      },
      {
        "question": "Is there a demo version?",
        "answer": "Yes, you can run the model directly from the browser via the 'Sign to Text' page."
      },
      {
        "question": "How can organizations request an enterprise package?",
        "answer": "Through direct contact or the package request button within the site's Licensing section."
      },
      {
        "question": "Is there a special version for schools and hospitals?",
        "answer": "Yes, you can run the model directly from the browser via the 'Sign to Text' page."
      }
    ]
  },
  "cta": {
    "title": "Ready to Bridge the Communication Gap?",
    "subtitle": "Join us today and experience the future of sign language communication. It's fast, free, and respects your privacy.",
    "button1": "Translate Sign to Text",
    "button2": "Translate Text to Sign"
  },
  "footer": {
    "about": "Mubsir is an AI-powered sign language translation tool designed to make communication more accessible for everyone.",
    "quickLinksTitle": "Quick Links",
    "followUsTitle": "Follow Us",
    "copyright": "Mubsir. All rights reserved."
  },
  "textToSign": {
    "title": "Text to Sign Language",
    "subtitle": "Our technology converts written text into seamless visual signs, enhancing effective communication.",
    "inputLabel": "Start Experience",
    "placeholder": "Welcome to Mubsir experience. To translate text to sign language, we have prepared a special demo video. Please click the play button to watch.",
    "startButton": "Watch Video",
    "loadingAria": "Loading video"
  },
  "signToTextPage": {
    "title": "Sign to Text",
    "subtitle": "Use your device's camera to translate sign language into text in real-time.",
    "lettersTab": "Translate Letters",
    "wordsTab": "Translate Words",
    "confidenceLabel": "Confidence",
    "copyButton": "Copy Text"
  },
  "translator": {
    "prompt": "Point your camera or upload an image to start.",
    "handInFrame": "Place your hand clearly inside the frame",
    "imagePreviewAlt": "Uploaded image preview",
    "cameraError": "Failed to access camera. Please check permissions.",
    "apiError": "An error occurred during analysis.",
    "retryButton": "Retry",
    "speakButton": "Speak Text",
    "copyButton": "Copy Text",
    "startCamera": "Start Camera",
    "uploadImage": "Upload Image",
    "stopButton": "Stop",
    "captureIntervalLabel": "Capture every {seconds}s",
    "analyzeImageButton": "Analyze Image",
    "removeImageButton": "Remove Image",
    "privacyNote": "All image processing is done locally in your browser. Your privacy is guaranteed.",
    "placeholder": {
      "letters": "Translated letter will appear here...",
      "words": "Translated word will appear here..."
    },
    "status": {
      "idle": "Idle",
      "requesting": "Requesting Camera...",
      "watching": "Watching",
      "translating": "Translating...",
      "error": "Error"
    }
  },
  "licensing": {
    "title": "Mubsir Dataset Licensing",
    "subtitle": "The Largest & Most Comprehensive Arabic Sign Language Dataset",
    "about": {
        "title": "Why Mubsir's Dataset is Unique?",
        "content": "Mubsir owns the largest dataset specialized in Arabic Sign Language, built, cleaned, and refined entirely in-house without external sources. It includes thousands of carefully labeled samples covering alphabets, signs, and words most used in daily communication."
    },
    "whyFeatures": [
        "Largest Arabic Sign Language dataset",
        "Cleaned and accurately classified data",
        "Rare technical asset difficult to replicate",
        "Built 100% in-house",
        "Suitable for AI and Deep Learning",
        "Supports Vision 2030 in universal access"
    ],
    "types": {
        "title": "Dataset License Types",
        "academic": {
            "title": "Academic License",
            "price": "SAR 5,000 - 10,000",
            "description": "For researchers, universities, and education labs. Allows access for research and educational purposes."
        },
        "commercial": {
            "title": "Commercial License",
            "price": "SAR 20,000 - 45,000",
            "description": "For companies wishing to use the dataset to develop products, commercial solutions, or integrate into their own systems."
        },
        "enterprise": {
            "title": "Enterprise / Government License",
            "price": "SAR 80,000 - 200,000",
            "description": "For large organizations, ministries, hospitals, universities, and official bodies requiring full support, continuous updates, and custom versions."
        }
    },
    "cta": {
        "title": "Request Dataset License",
        "button": "Request License"
    },
    "contact": {
        "title": "Need more details?",
        "text": "Our team will help you choose the best license for your organization.",
        "email": "Mubser.info0@gmail.com",
        "phone": "+966 509 688559"
    }
  },
  "common": {
    "scrollToTop": "Scroll to top"
  }
};

const translations = {
  ar: arTranslations,
  en: enTranslations,
};

// A simple deep-get function to retrieve nested values
function get(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export const useTranslations = () => {
  const { language } = useLanguage();
  const isLoaded = true; // Assume translations are always loaded

  const t = useCallback(
    (key: string) => {
      const translation = get(translations[language], key);
      return typeof translation === 'string' ? translation : key;
    },
    [language]
  );
  
  // Gets a non-string value (like an array of objects)
  const T = useCallback(
    (key: string) => {
        const translation = get(translations[language], key);
        return translation || [];
    },
    [language]
  );

  return { t, T, isLoaded };
};
