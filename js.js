const menuLink = document.getElementById("menuLink")
const ulMenu =[
    {menu: "پشتیبانی"},
    {menu: "معرفی راننده"},
    {menu: "خدمات کسب و کار ها"},
    {menu: "فرصت هایه شغلی"},
    {menu: "وبلاگ"},
]

ulMenu.forEach((item) => {
    var aElement = document.createElement("a")
    var li = document.createElement("li")
    aElement.setAttribute("href" , "#")
    aElement.innerHTML = item.menu
    li.appendChild(aElement)
    menuLink.appendChild(li)
})


/*picture*/

const picture = document.getElementById("par1-picture")
const par1Picture =[
    {src:"https://tapsi.ir/images/home/banner.webp"},
    {src:"https://tapsi.ir/images/home/banner.jpg"},
    {src:"https://tapsi.ir/images/home/banner-mobile.webp"},
    {src:"https://tapsi.ir/images/home/banner-mobile.jpg"},
]

par1Picture.forEach((item) => {
    var source = document.createElement("source")
    source.setAttribute("srcset" , item.src)
    source.innerHTML 
    picture.appendChild(source)
})
var Img = document.createElement("img")
Img.setAttribute("src" , "https://tapsi.ir/images/home/banner.jpg")
Img.innerHTML
picture.appendChild(Img)


/*icon-par2*/

const iconApp = document.getElementById("icon-par2")
const iconInfo = [
    {src:"https://tapsi.ir/images/home/cc-classic.png", info:"تپسی کلاسیک" },
    {src:"https://tapsi.ir/images/home/cc-tel.png", info:"تپسی تلفنی" },
    {src:"https://tapsi.ir/images/home/cc-line.png", info:"تپسی لاین" },
    {src:"https://tapsi.ir/images/home/cc-motopeyk.png", info:"موتوپیک" },
    {src:"https://tapsi.ir/images/home/cc-autopeyk.png", info:"اتو پیک" },
    {src:"https://tapsi.ir/images/home/cc-plus.png", info:"تپسی پلاس" },
    {src:"https://tapsi.ir/images/home/cc-taxi.png", info:"تاکسی" },
    {src:"https://tapsi.ir/images/home/cc-hamyar.png", info:"همیار" },
]
iconInfo.forEach((item) => {
    var ImgIcon = document.createElement("img")
    var pElement = document.createElement("p")
    var aElement = document.createElement("a")
    ImgIcon.setAttribute("src" , item.src)
    pElement.innerHTML = item.info
    aElement.appendChild(ImgIcon)
    aElement.appendChild(pElement)
    iconApp.appendChild(aElement)
})

/*explain*/

const explainPar2 = document.getElementById("explain-par2")
const explain = document.querySelector(".explain")
var h2Element = document.createElement("h2")
h2Element.innerHTML = "تپسی کلاسیک"
var pElementExplain = document.createElement("p")
pElementExplain.innerHTML = "با سرویس کلاسیک تپسی، یک خودروی اختصاصی  برای رسیدن به مقصدتان دارید. تپسی کلاسیک، راهی  سریع و آسان برای سفرهای درون‌شهری در هر ساعتی  از روز است. در این سرویس، شما امکان تعیین دو یا  چند مقصد و همچنین توقف در مسیر را دارید"
explain.appendChild(h2Element)
explain.appendChild(pElementExplain)
explainPar2.appendChild(explain)

const explainImgDiv = document.querySelector(".explain-img")
var explainImg = document.createElement("img")
explainImg.setAttribute("src" , "https://tapsi.ir/images/home/illus-classic.png")
explainImgDiv.appendChild(explainImg)
explainPar2.appendChild(explainImgDiv)



/*explain-par3*/

const explainPar3 = document.querySelector(".explain-par3")

var h2ElementPar3 = document.createElement("h2");
h2Element.innerHTML = "خدمات تپسی ویژه کسب‌وکارها";
explainPar3.appendChild(h2Element);

var pElementPar3 = document.createElement("p");
pElementPar3.innerHTML = "پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت کنید.";
pElementPar3.style.textAlign = "justify";
explainPar3.appendChild(pElementPar3);

var aElementArrow = document.createElement("a")
aElementArrow.setAttribute("href" ,"info")
aElementArrow.setAttribute("src" , "./icons/arrow.png")
aElementArrow.innerHTML = "اطلاعات بیشتر سرویس سازمانی";
explainPar3.appendChild(aElementArrow)

var aElementInfoPar3 = document.createElement("a")
aElementInfoPar3.setAttribute("href" , "login")
aElementInfoPar3.innerHTML = "ورود و ثبت نام پنل سازمانی"
explainPar3.appendChild(aElementInfoPar3)

/*explain-par3-img*/

var explainPar3Img = document.querySelector(".explain-par3-img")
var ImgElementPar3 = document.createElement("img")
ImgElementPar3.setAttribute("class" , "section-img right-padding")
ImgElementPar3.setAttribute("src" , "https://tapsi.ir/images/home/i-mac.png")
explainPar3Img.appendChild(ImgElementPar3)

/*explain-par4*/
var explainPar4 = document.querySelector(".explain-par4")

var h2explainPar4 = document.createElement("h2")
h2explainPar4.innerHTML = "خرید کد اعتبار تپسی"
explainPar4.appendChild(h2explainPar4)

var pElementPar4 = document.createElement("p");
pElementPar4.setAttribute("class" , "explain-p");
pElementPar4.style.textAlign = "justify";
pElementPar4.style.wordSpacing = "2px";
pElementPar4.innerHTML = " کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان، کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا مشتریانشان استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند. این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را دارند. "
explainPar4.appendChild(pElementPar4);

var aElementPar4 = document.createElement("a")
aElementPar4.setAttribute("href" , "gif")
aElementPar4.innerHTML = "خرید کد اعتبار و تخفیف"
explainPar4.appendChild(aElementPar4)


/*background-middle*/

var divBackgroundMiddle = document.querySelector(".middle")
var divBackgroundMiddleObj = [
    {class : "middle1" , h3divBackgroundMidd : "بسته امنیت سفر" , classP : "middle-p" , pdivBackgroundMidd: "امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی" },
    {class : "middle1" , h3divBackgroundMidd : "درخواست تلفنی" , classP : "middle-p" , pdivBackgroundMidd: "امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰" },
    {class : "middle1" , h3divBackgroundMidd : "دسترس‌پذیری برای توان‌یابان" , classP : "middle-p" , pdivBackgroundMidd: "امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر کمیسیون از سفر مسافران ویلچردار" },
    {class : "middle1" , h3divBackgroundMidd : "امکانات هوشمند" , classP : "middle-p" , pdivBackgroundMidd: "    سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب و پیشنهادهای ویژه شما" },
        
] 
let i = 0

divBackgroundMiddleObj.forEach((item) => {
    
    console.log(i)
    divBackground = document.createElement("div")
    h3divBackground = document.createElement("h3");
    pdivBackground = document.createElement("p");

    divBackground.setAttribute("class" , item.class)
    h3divBackground.innerHTML = item.h3divBackgroundMidd
    pdivBackground.setAttribute("class" , item.classP)
    pdivBackground.innerHTML = item.pdivBackgroundMidd
    
    if(i >= 1){
        pLine = document.createElement("p");
        pLine.setAttribute("class" , "border")
        pLine.innerHTML = " | "
        divBackgroundMiddle.appendChild(pLine)     
    }
    divBackgroundMiddle.appendChild(divBackground)
    divBackground.appendChild(h3divBackground)
    divBackground.appendChild(pdivBackground)
    
    i++
})

/*explain-pr5-1*/

var explainPr5 = document.createElement("div")
explainPr5.setAttribute("class" , "explain-pr5-1")
var sectionPar5 = document.querySelector(".par5")
sectionPar5.appendChild(explainPr5)
var explainPr5ObjUlfirst = [
    {liElementPar5first : "۱. امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز"},
    {liElementPar5first : "۲. طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه به‌طور دوره‌ای"},
    {liElementPar5first : "۳. نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی"},
]

var h2Par5 = document.createElement("h2")
h2Par5.innerHTML = "مزایای تپسی برای رانندگان تاکسی اینترنتی"
explainPr5.appendChild(h2Par5)  

var pPar5 = document.createElement("p")
pPar5.innerHTML = "رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت دارند. به همین‌دلیل مزایای مختلفی برای آنها در نظر گرفته شده است"
explainPr5.appendChild(pPar5)

var h3Par5first = document.createElement("h3")
h3Par5first.innerHTML = "کسب درآمد روزانه، پایدار و بدون محدودیت"
explainPr5.appendChild(h3Par5first)

var Ulpar5first = document.createElement("ul")    
explainPr5ObjUlfirst.forEach((item) => {
    var liPar5 = document.createElement("li")
    liPar5.innerHTML = item.liElementPar5first
    Ulpar5first.appendChild(liPar5)
    explainPr5.appendChild(Ulpar5first)
})

var h3Par5second = document.createElement("h3")
h3Par5second.innerHTML = "تضمین امنیت و پشتیبانی رانندگان"
explainPr5.appendChild(h3Par5second)  

var explainPr5ObjUlSecond = [
    {liElementPar5Second : "۱. پشتیبانی ۲۴ ساعته"},
    {liElementPar5Second : "۲. امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴ ساعته تیم امنیت"},   
]

var Ulpar5Second = document.createElement("ul")
explainPr5ObjUlSecond.forEach((item) => {
    var liPar5second = document.createElement("li")
    liPar5second.innerHTML = item.liElementPar5Second
    Ulpar5Second.appendChild(liPar5second)
    explainPr5.appendChild(Ulpar5Second)
})

var h3Par5Thired = document.createElement("h3")
h3Par5Thired.innerHTML = "واریز سهمیه بنزین ویژه رانندگان تپسی"
explainPr5.appendChild(h3Par5Thired)

var explainPr5ObjUlThired = [
    {liElementPar5Thired : "۱. نمایش میزان پیمایش ماهانه درون اپلیکیشن"},
    {liElementPar5Thired : "۲. محاسبه‌ی مسافت طی شده تا مسافر در پیمایش"}
]   

var Ulpar5Thired = document.createElement("ul")
explainPr5ObjUlThired.forEach((item) => {
    var liPar5Thired = document.createElement("li")
    liPar5Thired.innerHTML = item.liElementPar5Thired
    Ulpar5Thired.appendChild(liPar5Thired)
    explainPr5.appendChild(Ulpar5Thired) 
})

var h3Par5last = document.createElement("h3")
var aPar5first = document.createElement("a")
aPar5first.style.color = "#0065dc"
aPar5first.innerHTML = " باشگاه رانندگان تپسی"
h3Par5last.innerHTML = "استفاده از مزایای" + aPar5first
aPar5first.setAttribute("href" , "#")
h3Par5last.appendChild(aPar5first)
explainPr5.appendChild(h3Par5last)

var explainPr5ObjUlLast = [
    {liElementPar5Last : "۱. تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک و ..." },
    {liElementPar5Last : "۲. تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید اقساطی و ..."}
]

var Ulpar5Last = document.createElement("ul")
explainPr5ObjUlLast.forEach((item) => {
    var liPar5Lat = document.createElement("li")
    liPar5Lat.innerHTML = item.liElementPar5Last
    Ulpar5Last.appendChild(liPar5Lat)
    explainPr5.appendChild(Ulpar5Last)  
})


var divPar5 = document.createElement("div")
divPar5.setAttribute("class" , "link-login")
var explainPr5Obja = [
    {aElementPar5 : "ثبت نام راننده تاکسی آنلاین" , href : " "},
    {aElementPar5 : "دانلود برنامه تپسی راننده"  , href : "driverapp"}
]
explainPr5Obja.forEach((item) => {
    var aPar5 = document.createElement("a")
    aPar5.setAttribute("href" , item.href)
    aPar5.innerHTML = item.aElementPar5
    divPar5.appendChild(aPar5)
    explainPr5.appendChild(divPar5)
})

/*par 6*/
var divPar6 = document.querySelector(".blogs")
var par6Obj = [
    {src : "https://blog.tapsi.ir/wp-content/uploads/2022/08/peyk-scaled-1-1130x580-2.jpg" , h3Par6Obj : "تپسی‌پک ، سرویس جدید تپسی برای ارسال به‌صرفه" , pPar6ObjFirst : "تمایل مردم به خرید آنلاین و غیرحضوری روز به روز در حال افزایش است و روزانه افراد زیادی بدون مراجعه به فروشگاه‌ها..." },
    {src : "https://blog.tapsi.ir/wp-content/uploads/2022/04/etehadie-no-logo-scaled.jpg" , h3Par6Obj : "دومین دوره انتخابات اتحادیه کسب و کارهای مجازی" , pPar6ObjFirst : "دیدگاه و اهداف میلاد منشی‌پور، کاندیدای دومین دوره انتخابات اتحادیه کسب و کارهای مجازی درباره‌ من... […]" },
    {src : "https://blog.tapsi.ir/wp-content/uploads/2022/03/A68CB9F1-AA36-4B75-99B7-DE475A5FFBDF.jpeg" , h3Par6Obj : "تخفیف ویژه دیجی‌کالا جت برای کاربران تپسی" , pPar6ObjFirst : "(منقضی شده) سوپرمارکت آنلاین «دیجی‌کالا جت» با ارسال سریع محصولات سوپرمارکتی شروع به کار کرده است و... […]..." },
]
par6Obj.forEach((item) => {
    var aElementPar6 = document.createElement("a")
    aElementPar6.setAttribute("href" , "#")
    aElementPar6.setAttribute("class" , "blog")
    divPar6.appendChild(aElementPar6)

    var imgPar6 = document.createElement("img")
    imgPar6.setAttribute("src" , item.src)
    aElementPar6.appendChild(imgPar6)
    
    var h3Par6 = document.createElement("h3")
    h3Par6.innerHTML = item.h3Par6Obj
    aElementPar6.appendChild(h3Par6)

    var pPar6 = document.createElement("p")
    pPar6.innerHTML = item.pPar6ObjFirst
    aElementPar6.appendChild(pPar6)
})


/*par7*/


var divPar7 = document.querySelector(".par7-div")

var h3Par7 = document.createElement("h3")
h3Par7.innerHTML = "تپسی در ایران"
h3Par7.setAttribute("id" , "par7-p")
divPar7.appendChild(h3Par7)



var divPar7One = document.querySelector(".one")
divPar7.appendChild(divPar7One)

var divPar7oneObj = [
    {h3Par7onefaObj : "تهران" , h3Par7oneEnObj : "Tehran"},
    {h3Par7onefaObj : "کرج" , h3Par7oneEnObj : "Karaj"},
    {h3Par7onefaObj : "مشهد" , h3Par7oneEnObj : "Mashhad"},
    {h3Par7onefaObj : "اصفهان" , h3Par7oneEnObj : "Isfehan"},
    {h3Par7onefaObj : "شیراز" , h3Par7oneEnObj : "Shiraz"},
    {h3Par7onefaObj : "ارومیه" , h3Par7oneEnObj : "Urmie"},
    {h3Par7onefaObj : "لاهیجان" , h3Par7oneEnObj : "Lahijan"},
    {h3Par7onefaObj : "رشت" , h3Par7oneEnObj : "Rasht"},
]
divPar7oneObj.forEach((item) => {
    var divPar7first = document.createElement("div")
    divPar7first.setAttribute("class" , "row")
    divPar7One.appendChild(divPar7first)

    var h3Par7Fafirst = document.createElement("h3")
    h3Par7Fafirst.innerHTML = item.h3Par7onefaObj
    divPar7first.appendChild(h3Par7Fafirst)
    
    var h3Par7Enfirst =document.createElement("h3")
    h3Par7Enfirst.setAttribute("id" , "en-center")
    h3Par7Enfirst.innerHTML = item.h3Par7oneEnObj
    divPar7first.appendChild(h3Par7Enfirst)
})


var divPar7Two = document.querySelector(".two")
divPar7.appendChild(divPar7Two)

var divPar7oneObjSecond = [
    {h3Par7onefaObjSec : "انزلی" ,  h3Par7oneEnObjSec : "Anzali"},
    {h3Par7onefaObjSec : "تبریز" ,    h3Par7oneEnObjSec : "Tabriz"},
    {h3Par7onefaObjSec : "ساری" ,   h3Par7oneEnObjSec : "Sari"},
    {h3Par7onefaObjSec : "یزد" , h3Par7oneEnObjSec : "Yazd"},
    {h3Par7onefaObjSec : "کرمان" , h3Par7oneEnObjSec : "Kerman"},
    {h3Par7onefaObjSec : "قم" ,  h3Par7oneEnObjSec : "Qom"},
    {h3Par7onefaObjSec : "اهواز" , h3Par7oneEnObjSec : "Ahvaz"},
    {h3Par7onefaObjSec : "بابل" , h3Par7oneEnObjSec : "Babol"},
]
divPar7oneObjSecond.forEach((item) => {
    var divClassTwo = document.createElement("div")
    divClassTwo.setAttribute("class" , "row3")
    divPar7Two.appendChild(divClassTwo)

    var h3Par7TwoFa = document.createElement("h3")
    h3Par7TwoFa.innerHTML = item.h3Par7onefaObjSec
    divClassTwo.appendChild(h3Par7TwoFa)

    var h3Par7En = document.createElement("h3")
    h3Par7En.setAttribute("id" , "en-center")
    h3Par7En.innerHTML = item.h3Par7oneEnObjSec
    divClassTwo.appendChild(h3Par7En)

})

var divPar7Three = document.querySelector(".three")
divPar7.appendChild(divPar7Three)

var divPar7oneObjThired = [
    {h3Par7onefaObjThi : "قائم‌شهر" , h3Par7oneEnObjThi : "Qaem Shahr"},
    {h3Par7onefaObjThi : "آمل" ,     h3Par7oneEnObjThi : "Amol"},
    {h3Par7onefaObjThi : "کرمانشاه", h3Par7oneEnObjThi : "Kermanshah"},
    {h3Par7onefaObjThi : "گرگان" ,   h3Par7oneEnObjThi : "Gorgan"},
    {h3Par7onefaObjThi : "قزوین" ,   h3Par7oneEnObjThi : "Qazvin"},
    {h3Par7onefaObjThi : "اراک" ,    h3Par7oneEnObjThi : "Arak"},
    {h3Par7onefaObjThi : "نیشابور" , h3Par7oneEnObjThi : "Neyshabur"},
    {h3Par7onefaObjThi : "  " ,       h3Par7oneEnObjThi : "  "},
]
divPar7oneObjThired.forEach((item) => {
    var divClassThree = document.createElement("div")
    divClassThree.setAttribute("class" , "row3")
    divPar7Three.appendChild(divClassThree)

    var h3Par7ThreeFa = document.createElement("h3")
    h3Par7ThreeFa.innerHTML = item.h3Par7onefaObjThi
    divClassThree.appendChild(h3Par7ThreeFa)

    var h3Par7ThreeEn = document.createElement("h3")
    h3Par7ThreeEn.setAttribute("id" , "en-center")
    h3Par7ThreeEn.innerHTML = item.h3Par7oneEnObjThi
    divClassThree.appendChild(h3Par7ThreeEn)

})


/*footer*/

