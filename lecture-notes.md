# עקרונות שפות תכנות

**מני אדלר**

---

TypeScript 1. מבוא, תחביר סמנטיקה וטיפוסים ב

## 1.1 מבוא


### 1.1.1 מטרות ונושאי הקורס

ספר עזר לרופא שיניים בהוצאת כתר
בלשנים:
- חוקי השפה: פונטיקה, מורפולוגיה, תחביר, משמעות,...
- אפיון השפות השונות בעולם ע"פ מאפייניהן, משפחות של שפות, וכו'
- התפתחות השפה, אבולוציה
מטרה ראשית בקורס: ברצוננו להיות בלשנים של שפות תכנות
- מהם הרכיבים השונים של שפת תכנות (בפרט, תחביר וסמנטיקה/משמעות)
- סוגים שונים של שפות תכנות
- התפתחות של שפת תכנות
מטרות משנה:
- הכרות עם שפות תכנות חדשות
L1-L7 'שפות ש'נמציא ,JavaScript/TypeScript :שפות פונקציונאליות o
  - שפה לוגית: Prolog / שתי שפות לוגיות שנגדיר.
- (Meta-Programming) עיצוב מטה-תוכניות
תוכניות המקבלות כקלט תוכניות אחרות, ועושות איתן משהו:
  - אינטרפרטר: מקבל תוכנית, מריץ/מחשב אותה.
  - בדיקת תחביר (parser): מקבל תוכנית ובודק האם היא תקינה מבחינה תחבירית
(נעשה בד"כ כחלק מתהליך הקומפילציה)
  - בדיקת טיפוסים (type checking): מקבלת תוכנית עם טיפוסים ובודקת את
תאימותם (נעשה בד"כ כחלק מתהליך הקומפילציה)
  - מערכת הסק טיפוסים: מקבלת תוכנית ללא טיפוסים, מחזירה את התוכנית
מהקלט עם טיפוסים.
  - המרת קוד: קבלת תוכנית בשפה אחת, והחזרת תוכנית שקולה בשפה אחרת.
בפרט, הקומפיילר מקבל תוכנית בשפה גבוהה (C++, Java) ומתרגם אותה
(Assembly, Byte code) לתוכנית בשפה נמוכה יותר

  - אימות קוד: קבלת תוכנית, ובדיקה האם היא תקינה סמנטית (כלומר מבצעת את
מה שהיא אמורה / מקיימת את תנאי הסיום – כמו הרצת טסטים)
תוכנית הקורס:
1. מבוא, תכנות פונקציונאלי ב TypeScript, טיפוסים
2. סמנטיקה אופרציונאלית: הרכיבים המרכזיים של שפות התכנות - המבנה והמשמעות.
.L1-L4 הגדרת השפות
L5 3. טיפוסים, הסק טיפוסים (מימוש מערכת), השפה
L6-L7 4. אבסטרקציה של בקרת הריצה, השפות
5. תכנות לוגי, שפה לוגית, אינטרפרטר וכו'

### 1.1.2 דגמי שפות תכנות

- (Imperative Languages) שפות אימפרטיביות
תוכנית = רצף של פקודות
הרצת תוכנית = ביצוע של הפקודות, בזו אחר זו
דוגמאות: Java, C++, Python, אסמבלי
- (Declarative Languages) שפות הצהרתיות
תוכנית = הצהרה על הדבר המבוקש
Prolog .התוכנית היא שאילתא בה אנחנו מצהירים מה אנו מעוניינים לקבל ,SQL :דוגמא
CSS ,(כשפה לוגית (להלן
- (Structural Languages) שפות מבניות
goto): if-else, do-while תחביר השפה כולל מבנים מקוננים (כך שאין צורך ב
Java, C++, Python :דוגמאות
- (Procedural Languages) שפות פרוצדוראליות
תחביר השפה מאפשר להגדיר קוד כפרוצדורה, כך שניתן לקרוא ממקומות שונים בקוד
(עם פרמטרים שונים).
Java, C++, Python :דוגמאות
- (Functional Languages) שפות פונקציונאליות
  - התוכנית היא ביטוי, או סדרת ביטויים, ולא רצף של פקודות
הרצת התוכנית היא חישוב של הביטוי(ים), כלומר מציאת הערך שלו, ולא ביצוע
של הפקודות
דוגמאות:
+
(2 * 3) + (4 * 5)

  - פונקציות הן גם כן ביטויים. קריאה לפונקציה היא חישוב של ביטוי.
דוגמא:
function square(x) {
return x*x;
}
square(3);
אפשר להעביר פונקציה כפרמטר לפונקציה אחרת, אפשר להחזיר פונקציה כערך
מפונקציה אחרת.
פונקציות מסדר גבוה
מאחר שגם פונקציה היא ביטוי, ניתן להעביר פונקציה כפרמטר לפרוצדורה
אחרת, וכן להחזיר כערך מפרוצדורה פונקציה.
  - פונקציה מקבלת פרמטרים ומחזירה ערך: אין פעולת השמה, ובמובן הרחב יותר
side-effects אין
יתרונות התכנות הפונקציונאלי:
  - אימות קוד
  - מקבול
  - הפשטה/עיצוב
L1-L7, Scheme, JavaScript, Python :דוגמא
- (Object-Oriented) שפות מונחות עצמים
תוכנית = הגדרת אובייקטים, העברת הודעות (קריאה למתודות) בין אובייקטים.
Java, C++, L31 :דוגמאות
- (Event-driven) שפות מונחות אירועים
תוכנית = הגדרת תגובות שונות לאירועים שונים
JavaScript Node :דוגמא
- (Logic Programming) שפות לוגיות
תוכנית = אוסף של עובדות, כללי הסק, ושאילתא
הרצת התוכנית הינה ביצוע של שאילתות על העובדות ועל ההיסקים

### 1.1.3 התפתחות היסטורית של שפה

נקודת פתיחה: שפה אימפרטיבית, כלומר ניתן להגדיר אוסף פקודות

console.log(0*0);
console.log(1*1);
console.log(2*2);
console.log(3*3);
חסרונות:
- חזרתיות שלא לצורך (בפרט, מספר רב של פקודות דומות)
- התאמה לערכים אחרים (נניח במקום 0-3, 4-7) דורשת שינוי של הקוד
- תחביר השפה לא מלמד על כך שמדובר בדפוס חוזר
שפה עם מבנה:
- משתנים
- מבנה נתונים: רשימה
- לולאה
const numbers = [0,1,2,3];
for (let i=0; i< numbers.length; i++)
console.log(numbers[i] * numbers[i]);
חסרונות:
- שינוי הפרמטרים (נניח ל 4-7) דורש שינוי של הקוד (המשתנה numbers), כלומר יש
להפריד את ה'לוגיקה' מהנתונים
שפה פרוצדורלית
function printSquares(numbers) {
for (let i=0; i< numbers.length; i++)
console.log(numbers[i] * numbers[i]);
}
printSquares([0,1,2,3]);
printSquares([4,5,6,7]);
חסרון: הלוגיקה מורכבת מדי. הפרוצדורה printSquares מבצעת שלושה דברים - העלאה בריבוע,
הדפסה, מעבר על אברי המערך.
מקשה על אימות נכונות הקוד, ועוד.
נפריד את הלוגיקה בעזרת פרוצדורות נוספות:
function squares(numbers) {
for (let i=0; i< arr.length; i++)

numbers[i] = numbers[i] * numbers[i];
}
function print(arr) {
for (let i=0; i< arr.length; i++)
console.log(arr[i]);
}
function printSquares(numbers) {
squares(numbers);
print(numbers);
}
printSquares([0,1,2,3]);
printSquares([4,5,6,7]);
חסרונות:
- יש מצב משותף שמתעדכן (מערך המספרים numbers בפרוצדורה squares): מקשה על
מקביליות, אימות קוד, אופטימיזציות... ניתן היה לפתור זאת על ידי החזרת מערך חדש
- הפרוצדורות print ו squares מבצעות עדיין שני דברים – מעבר על מערך ופעולה על כל
איבר.
תכנות פונקציונאלי
const square = (number) => number * number;
const print = (obj) => { console.log(obj); return; }
map(square,[0,1,2,3])
> [0,1,4,9]
const printSquares = (numbers) => map(print, map(square,numbers));
printSquares([0,1,2,3]);
printSquares([4,5,6,7]);;
הערה: סוג כזה של פונקציות, המקבל פונקציה ונתונים ועושה איתם משהו מכונה 'פונקציות מסדר גבוה'.
.filter דוגמא נוספת: הפונקציה
מקבלת – פונקציה בוליאנית, ורשימה.

מפעילה את הפונקציה הבוליאנית על כל אחד מאיברי הרשימה, ומחזירה את רשימת האיברים שצלחו את
הפונקציה הבוליאנית (כלומר, שהפונקציה הבוליאנית החזירה עבורם ערך אמת).
const isEven = (x) => x % 2 == 0;
filter(isEven, [0,1,2,3]);
> [0,2]
reduce דוגמא נוספת: הפונקציה
מקבלת – רשימה, ערך התחלתי, ופונקציית מיזוג שני אברים
מחזירה – מיזוג של הרשימה
reduce(+,0,[1,2,3])
> 6
reduce(+,13,[1,2,3])
> 19
reduce(max,0,[1,2,3])
> 3
reduce(*,1,[1,2,3])
> 6
reduce(concat,[],[[1,2],[3,4],[5,6])
> [1,2,3,4,5,6]
הערה: ב-JavaScript, קריאה לפונקציות מסדר גבוה map, filter עם פרמטר אחד בלבד – הפונקציה
לביצוע, ללא רשימת האברים להפעלה – מחזירה פונקציה המקבלת רשימה ומבצעת על איבריה את
הפונקציה שניתנה בשלב הראשון כפרמטר.
לדוגמא:
square מחזירה פונקציה המקבלת רשימה ומפעילה על איבריה את הפונקציה (map(square
const squareMap = map(square);
squareMap([0,1,2,3]);
>[0,1,4,9]
squareMap([4,5,6,7]);
>[16,25,36,49]
const isEvenFilter = filter(isEven);
isEvenFilter([0,1,2,3]);
>[0,2]
isEvenFilter([4,5,6,7]);
>[4,6]

המרה כזו של פונקציה המקבלת מספר פרמטרים לסדרת פונקציות המקבלות פרמטר אחד מכונה בתכנות
(Currying: f(x,y,z)  f(x)(y)(z פונקציונאלי
ובמקרה שלנו:
map(f,lst)  map(f)(lst)
filter(f,lst)  filter(f)(lst)
.compose ניתן אף להרכיב שתי פונקציות לפונקציה מורכבת חדשה, בעזרת הפונקציה מסדר גבוה
x] המקבלות פרמטר אחד f g עבור] ((f(g(x מחזירה את הפונקציה המורכבת (compose(f,g הפעולה
:compose הרכבת הפונקציות בעזרת
const isEvenSquare = compose(isEvenFilter, squareMap);
isEvenSquareF([0,1,2,3]);
> [0,4]
שקילות של פונקציות
הרעיון הכללי: שתי פונקציות שקולות, אם עבור אותו קלט (פרמטרים) הן מחזירות את אותו ערך.
פורמלית:
R וטווח D עם תחום הגדרה f נתונה פונקציה
g נתונה פונקציה
הפונקציה f שקולה לפונקציה g אם"ם:
- D הוא גם g התחום של
- (f(x) = g(x :מתקיים D ב x לכל
side-effect הגדרה זו תקפה לשפות תכנות פונקציונאליות, כי אין להן
אם כי, צריך לכלול גם תופעות של הרצת קוד:
- exception זורקת (g(x אז גם ,exception זורקת (f(x אם
- אם f(x) לא מסתיימת, אז גם g(x) לא מסתיימת
לדוגמא:
f = compose(filter(isEven), map(cube))
g = compose(map(cube), filter(isEven))
האם f ו g שקולות?
(f(a) = g(a מתקיים =a ,…a]a] יש להראות כי לכל מערך סופי
1 l
:compose ע"פ הגדרת

:map ו filter על פי הגדרת
∀𝑖∈𝑁,𝑖𝑠𝐸𝑣𝑒𝑛(𝑖)= 𝑖𝑠𝐸𝑣𝑒𝑛(𝑐𝑢𝑏𝑒(𝑖)) כך שנשאר רק להראות שמתקיים
TypeScript-1.2 תחביר, סמנטיקה, וטיפוסים, ב

### 1.2.1 סמנטיקה אופרציונאלית

1. תחביר וסמנטיקה
"אבנים שחקו מים" (איוב יד)
מי שחק את מי?
3 + 5 * 3
מה הערך של הביטוי?
התחביר מגדיר את המבנה של המשפט/הביטויים (בפרט, כדי למנוע דו משמעות)
הסמנטיקה מגדירה את המשמעות של המבנה – את משמעות המשפט או את ערך הביטוי
עבור כל שפת תכנות, יש להגדיר את המבנה והסמנטיקה של השפה. כלומר, מהם הביטויים
החוקיים בשפה, וכיצד מחשבים כל ביטוי לכדי ערך.
הגדרה זו חשובה עבור מי שלומד השפה, עבור מי שכותב מטה-פרוגמינג המקבל כקלט תוכנית
בשפה, וכן עבור מי שרוצה להוכיח שקילות בין תוכניות וכו'.
סמנטיקה פורמאלית, מגדירה את האופן שבו יש לפרש/לחשב ביטוי נתון כערך.
קיימות דרכים לתאר סמנטיקה באופן פורמאלי. בקורס, נלך בגישת הסמנטיקה האופרציונאלית:
המשמעות של ביטוי בשפת תוכנת מוגדרת על פי תהליך החישוב שלו ('אלגוריתם החישוב') מביטוי
לערך:

לדוגמא:
E נתון ביטוי
  - זיהוי סוג הביטוי
  - במידה ומדובר בביטוי מורכב
▪ זיהוי תתי הביטויים
▪ חישוב תתי הביטויים בהתאם לסוג הביטוי הכולל אותם
[פירוט של הסוגים השונים]
▪ החזרת הערך של הביטוי E, על פי הערכים של תתי הביטויים שלו, ולאור
סוג הביטוי
  - אחרת, נחזיר את הערך המוגדר לביטוי פשוט זה (כל סוג ביטוי לגופו)
const x = 12
…
(x > 7) ? (x * 3) : 9
2. ביטויים וערכים
כזכור, המונח ביטוי מתייחס למבנים השונים בשפת התכנות, והערכים הם המשמעות של ביטויים
אלו.
ניתן לסווג את הביטויים והערכים השונים בשפה ע"פ שני מאפיינים:
- פרימיטיבי / לא פרימיטיבי
האם הביטוי או הערך הינם חלק מובנה בשפה (פרימיטיב) או שהם הוגדרו ע"י המתכנתים
(לא פרימיטיבי)
לדוגמא:
* ,true ,3 :ביטוי פרימיטיבי
ערך פרימיטיבי: הערך המספרי 3, ערך אמת, פעולת הכפל
x :ביטוי שאינו פרימיטיבי
enum RED ערך שאינו פרימיטיבי: ה
- אטומי / מורכב
האם הביטוי או הערך הם פשוטים, כלומר לא כוללים בתוכם תתי ביטויים, או מורכבים,
כלומר כוללים בתוכם תתי ביטויים.
לדוגמא:
x ,3 :ביטוי אטומי
x > 7 ? 5 : 9 ,5 + 3 :ביטוי מורכב

### 1.2.2 טיפוסים


1.2.2.1 טיפוס כקבוצה
נגדיר טיפוס כקבוצה של ערכים
לדוגמא:
int - קבוצת המספרים השלמים
String – קבוצת כל המחרוזות האפשריות
{true, false} הקבוצה – boolean
any – קבוצת כל הערכים האפשריים
ניתן בשפות תכנות להגדיר טיפוסים חדשים על בסיס הטיפוסים הקיימים, ע"י פעולות על קבוצות:
- מכפלה קרטזית: לדוגמא, המחלקה 'קלף' הכוללת שלושה שדות – מספר, צבע, צורה – היא
הקבוצה המתקבלת ע"י המכפלה הקרטזית של קבוצות המספרים {2-10, נסיך, מלכה, מלך, אס,
ג'וקר}, הצבעים {שחור,אדום} והצורות {לב, תלתן, יהלום, עלה}
- איחוד של טיפוסים: יונקים ושוכני מים
- חיתוך של טיפוסים: יונקים שהם אוכלי עשב.
- disjoint union נראה בהמשך הגדרת טיפוס חדש ע"י פעולת
ניתן אף לאפיין קשרים בין טיפוסים, כיחסים בין קבוצות:
- ספיציפיות (טיפוס ותת-טיפוס): 1T (כלב) הוא תת-טיפוס של 2T (חיה) אם הקבוצה 1T (כל הכלבים
האפשריים) מוכלת בקבוצה 2T (כל החיות האפשריות)
- זרות: הטיפוס 1T (יונקים) זר לטיפוס 2T (ציפורים), אם החיתוך של הקבוצות 1T ו 2T (ציפורים
יונקות) ריק.
Type Checking 1.2.2.2
מנגנון (meta-programming!) המבטיח תאימות של טיפוסים בקוד התוכנית. ובפרט תאימות של
טיפוסי ביטויים לטיפוסי ערכים.
int i = ‘a’
- בשפות עם טיפוסים (כמו java) ניתן לבצע בדיקה זו בזמן קומפילציה.
- בשפות ללא טיפוסים (כמו JavaScript) הבדיקה תתבצע בזמן ריצה.
הערה: גם אם אין טיפוסים למשתנים בשפה, קיימים תמיד טיפוס לערך.
לדוגמא, בקוד הבא - אין ל-x טיפוס מוגדר, אך לאחר ההשמה הערך הנוכחי שלו הוא תו, כך
if שתהיה שגיאת זמן ריצה כאשר יחושב ביטוי ה
x = ‘a’
if (x > 7)…
כדאי להגדיר טיפוסים:
- בדיקת תאימות טיפוסים מראש (לא בזמן ריצה)
- הקוד קריא יותר
- תורם לעיצוב נכון יותר

Type Checker-אם חישובו בזמן ריצה אינו גורר שגיאת תאימות טיפוסים. ה type safe-ביטוי מוגדר כ
מזהה בעיות טיפוס ברמה התחבירית. הוא מקיים 'נְאוֹתוּת' (soundness),כלומר:
- כאשר הוא קובע את הטיפוס של ביטוי נתון, קביעה זו תקפה לכל חישוב אפשרי.
- אם הוא אומר שיש תאימות טיפוסים, לא תהיה בעיית טיפוסים בזמן ריצה.
לעומת זאת, ה-type checker אינו מקיים 'שלמוּת' (completeness): ייתכן שהוא מצביע על בעיית תאימות
טיפוסים, אך בזמן ריצה בעייה זו לא תתרחש בפועל.
לדוגמא:
int x;
boolean b;
…
b = false;
…
if (b)
x = “a”
ה-type checker יצביע על בעיית בהשמה של x, אין תאימות טיפוס בין הטיפוס של x כמספר שלם לבין
הערך המושם שהוא מחרוזת, אך זה לא יתרחש בפועל בזמן ריצה.
דוגמאות נוספות בהמשך.
TypeScript 1.2.2.3 טיפוסים ב
- הרחבה של JavaScript עם אפשרות להגדרת טיפוסים
- :TS הקומפיילר של
  - מסיק את הטיפוסים החסרים בתוכנית
  - בודק את תאימות הטיפוסים
  - מוריד את הטיפוסים מהקוד, ומשאיר לאינטרפרטר של JS להריץ אותו.
- TypeScript סוגי טיפוסים ב
  - פשוטים/אטומיים (הם גם פרימיטיביים במקרה זה)
{true, false} הקבוצה – boolean ▪
(float קבוצת כל המספרים (כמו – number ▪
▪ string – קבוצת כל המחרוזות
{null} הקבוצה – null ▪
{undefined} הקבוצה – undefined ▪
▪ any – קבוצת כל הערכים האפשריים
  - מורכבים
arrays ,מערכים ▪
maps ,מילונים ▪
לדוגמא:
let arr = [1,2,3]
let dict = { ‘a’ : 1, ‘b’ : true}

▪ פונקציות
const add = (x, y) => x+y;
- ניתן 'לברר' בזמן ריצה מה הטיפוס של ביטוי בעזרת הפונקציה typeof (זה קצת מוגבל ב
:(TS אך טוב יותר ב JS
typeof (1)
> [number]
typeof(‘1’)
> [string]
typeof([1,2,3])
> [object]
typeof({ 'a' : 1, 'b' : true})
> [object]
instanceof את הטיפוס ע"י השאלה JS ניתן לברר באופן מדויק יותר ב
let arr = [1,2,3], dict = { a: 1, b: true };
(arr instanceof Array)
> true
(dict instanceof Map)
> true
הגדרת ערכים בשפת התכנות
כיצד מתארים בקוד התוכנית ערכים שונים? מהם הביטויים המתארים ערכים שונים?
לדוגמא:
- מספרים
כיצד מתארים מספרים בשפה?
3, הוא הביטוי למספר 3
מספר רציונאלי: 0.5, ½
מספר מרוכב: ?
- מחרוזות

'אבג', "אבג",...
- בולאניים
true/false, #t/#f
- מערכים
...,{1,2,3} ,[1,2,3]
- טבלאות / מילונים
{JavaScript, Python: {a:1, b:true
ב Java לא קיימת דרך לתאר טבלה. צריך לעשות זאת בקוד:
Map<String,Object> m = new HashMap<String,Object<();
m.put(“a”,1);
m.put(“b”, true);
או על ידי הגדרת מופע של מחלקה:
class C {
public int a;
public boolean b;
C(int a, boolean b) { this.a = a; this.b = b; }
}
C c = new C(1,true);
literal ,או במילים אחרות .literal expression האופן שבו מוגדרים ערכים בעזרת ביטויים מכונה
expression הוא ביטוי המתאר ישירות ערך.
Java Script Object קיימת דרך כללית לתאר כל סוג של ערך שהוא, בעזרת הפורמט JavaScript ב
(Notation (JSON
ב JSON ניתן לתאר כל ערך מורכב באופן רקורסיבי (פרטים בתרגול)
לדוגמא: תיאור ערך של רשימת סרטים
let movieList = [
{
name: "New Releases",
videos: [
{
"id": 70111470,
"title": "Die Hard",
"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",

"uri":
"http://api.netflix.com/catalog/titles/movies/70111470",
"rating": 4.0,
"bookmark": []
},
{
"id": 654356453,
"title": "Bad Boys",
"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
"uri":
"http://api.netflix.com/catalog/titles/movies/70111470",
"rating": 5.0,
"bookmark": [{ id: 432534, time: 65876586 }]
}
]
},
{
name: "Dramas",
videos: [
{
"id": 65432445,
"title": "The Chamber",
"boxart":
"http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
"uri":
"http://api.netflix.com/catalog/titles/movies/70111470",
"rating": 4.0,
"bookmark": []
},
{
"id": 675465,
"title": "Fracture",
"boxart":"http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
"uri":"http://api.netflix.com/catalog/titles/movies/70111470",
"rating": 5.0,
"bookmark": [{ id: 432534, time: 65876586 }]
}
]
}
];
TS הגדרת טיפוסים ב
טיפוסים פשוטים:
let x : number = 5;

let s : string = 'a';
let b : boolean = true;
מערכים:
let arr : number[] = [1,2,3];
let x : number = arr[0];
arr = [1,'b',4] /* type error */
x = true /* type error */
מילונים
let s1 : { name : string, age : number} = { name : 'Danny', age : 3};
let s2 : { name : string, adult : boolean} = { name : 'Dinna', adult : true};
s1 = { name : 'Noa', age : 17};
s1 = { name : 'Koko', age : 19};
מבחינת קבוצות, הטיפוס של s1 הוא כל המילונים בעולם עם שדה בשם name מסוג מחרוזת
name הוא כל המילונים בעולם עם שדה בשם s2 מסוג מספר, בעוד שהטיפוס של age ושדה בשם
מסוג מחרוזת ושדה adult מסוג ערך בוליאני.
כלומר הטיפוסים של s1 ו s2 אינם תואמים.
s1 = s2; X
s2 = s1; X
האם הם זרים זה לזה, כלומר האם החיתוך ביניהם ריק?
מה לגבי:
let s1 : { name : string, age : number } = { name : 'Danny', age : 3}
let s2 : { name : string, adult : boolean } = { name : 'Dinna', adult : true};
let s3 : { name : string, age :number, adult: boolean } =
{ name : 'Danny', age : 3, adult : false }
?s2 תואם ל s3 האם ?s1 תואם ל s3 האם
s3 = { name : 'Danny', age : 3} X
s3 = { name : 'Dinna', adult : true} X
s1 = { name : 'Danny', age : 3, adult : true } V
s2 = { name : 'Danny', age : 3, adult : true } V

age מסוג מחרוזת ושדה name הוא קבוצת כל המילונים שיש בהם (לפחות) שדה s1 הטיפוס של
מסוג מספר.
הטיפוס של s2 הוא קבוצת כל המילונים שיש בהם (לפחות) שדה name מסוג מחרוזת ושדה
adult בוליאני.
הטיפוס של s3 הוא קבוצת כל המילונים שיש בהם שדה name מסוג מחרוזת, שדה age מסוג
מספר, ושדה adult בוליאני.
.s1 הוא תת-טיפוס / יותר ספציפי מהטיפוס של s3 הטיפוס של
.s2 הוא תת-טיפוס / יותר ספציפי מהטיפוס של s3 הטיפוס של
.s2 ו s1 הוא למעשה החיתוך של s3
טיפוס לפונקציות:
const add = (x,y) => x+y;
const add : (x : number, y : number) => number =
(x : number, y : number) : number => x+y;
מתן שם לטיפוס
ראינו כי ניתן להגדיר טיפוסים חדשים. ניתן אף לתת שם, לשם נוחות או כדי לתמוך בטיפוסים
רקורסיביים, לטיפוסים אלה.
type <type name> = <type>
לדוגמא:
type StringArray = string[]
type Person = { name : string, kids : Person[] }
type Course = { id : number, name : string, students : Student[]}
type Student = { id : number, name : string, courses : Course[]}
שימוש בפעולות על קבוצות לשם הגדרת טיפוסים חדשים:
- מכפלה קרטזית
  - הגדרת טיפוס של מילון לעיל
- איחוד וחיתוך
קבוצת המספרים והמחרוזות
type NumberOrString = number | string;
{true,false} קבוצת המספרים והערכים

type NumberOrBoolean = number | boolean;
קבוצת המספרים (חיתוך של שתי הקבוצות הנ"ל)
type Numbers = NumberOrString & NumberOrBoolean;
- (disjoint union) בידול
דוגמא:
type Person = { name : string, address : string }
type Variable = { name : string, address : string}
let p : Person = { name : 'yossi', address : 'beer sheva'};
let v : Variable = { name : 'x' , address : '14576'};
v = p;
תאימות הטיפוסים ב TS מבוססת על מבניות (Structural) ועל ההשמה v=p חוקית.
הקבוצות של שני הטיפוסים זהות.
(Nominal) בהם התאימות הנדרשת מבוססת על שם הטיפוס Java בניגוד לשפות כמו
Structural כיצד נוכל לאלץ ולגרום להשמה הנ"ל להיות לא חוקית גם בשפות עם
?Checking
נגרום לכך שמבנה הטיפוסים יהיה שונה (באופן 'מלאכותי')
type Person = { tag : “person” , name : string, address : string }
type Variable = { tag : “variable”, name : string, address : string}
let p : Person = { tag : “person”, name : 'yossi', address : 'beer sheva'};
let v : Variable = { tag : “variable”, name : 'x' , address : '14576'};
v = p; // incorrect
דוגמא נוספת בה נדרש ל'בדל' טיפוסים: כאשר נדרש להבחין בין תתי טיפוסים של טיפוס כללי אחד.
type Circle = {
center: {x:number, y:number};
radius: number;
}
type Rectangle = {
upperLeft: {x:number, y:number};
lowerRight: {x:number; y:number};
}

type = Triangle {
p1: {x:number, y:number};
p2: {x:number, y:number};
p3: {x:number, y:number};
}
type Shape = Circle | Rectangle | Triangle;
נתונה הפונקציה area המקבלת shape ומחזירה את שטחו. בשל עיצוב גרוע, הפונקציה נדרשת לדעת מהו
הטיפוס הספציפי של ה shape הנתון כדי לחשב את שטחו:
const area : (s : Shape) => number =
(s : Shape) : number => {
if (??s is circle??)
return s.radius * s.radius * 3.14;
if (??s is rectangle??)
return (s.upperLeft.x - s.lowerRight.x) *
(s.upperLeft.y - s.lowerRight.y);
if (??s is triangle??)
return 0; // I do not know the formula
}
מאחר ולא ניתן להבחין בין סוגי הצורות השונות, שהרי כולן סך הכל מילונים, נדרש לאחד אותם לצורה
תוך שמירת ייחודם. נעשה זאת, גם כאן, ע"י הוספת רכיב ייחודי למבנה של כל אחד המציין את סוגו:
type Circle = {
tag: "circle";
center: {x:number, y:number};
radius: number;
};
type Rectangle = {
tag: "rectangle";
upperLeft: {x:number, y:number};
lowerRight: {x:number; y:number};
};
type = Triangle {
tag: "triangle";
p1: {x:number, y:number};
p2: {x:number, y:number};
p3: {x:number, y:number};
};
type Shape = Circle | Rectangle | Triangle;

const area : (s : Shape) => number = (s : Shape) : number => {
switch (s.tag) {
case "circle": return s.radius * s.radius * 3.14;
case "rectangle": return (s.upperLeft.x - s.lowerRight.x) *
(s.upperLeft.y - s.lowerRight.y);
case "triangle": return 0; // I do not know the formula :(
}
}
:disjoint union מבחינת 'תורת הקבוצות', פעולות הבידול היא למעשה הפעולה
A U+ B = (A X {0}) U (B X {1})
{0,1,2} U {2,3} = {0,1,2,3}
{0,1,2} U+ {2,3} = {(0,0), (1,0), (2,0)} U {(2,1), (3,1)} =
{(0,0), (1,0), (2,0), (2,1), (3,1)}
:getArea 'הצעה אחרת, יותר אלגנטית: נממש את הפולימורפיזם כ'מימושים' שונים של 'המתודה
type Circle = {
center: {x:number, y:number};
radius: number;
area : (s : Shape) : number => s.radius * s.radius * 3.14;
}
type Rectangle = {
upperLeft: {x:number, y:number};
lowerRight: {x:number; y:number};
area: (s : Shape) : number =>
(s.upperLeft.x - s.lowerRight.x) * (s.upperLeft.y - s.lowerRight.y);
}
const area : (s : Shape) => number = (s : Shape) : number =>
s.area(s);
מבנים רקורסיביים
(Person, Student, Course) ראינו כי ניתן להגדיר טיפוסים רקורסיביים
נבחן דוגמא נוספת:
type BinTree = {
root : number,

left : BinTree,
right : BinTree
}
let tree : BinTree = {
root : 2,
left : { root : 1 },
right : { root : 3}
}
בעיה: העץ המושם לשדות left, right אינו שלם.
:undefined כך שהטיפוס יכלול גם left, right פתרון: נרחיב את הגדרת השדות
type BinTree = {
root : number,
left : BinTree | undefined,
right : BinTree | undefined
}
let tree : BinTree = {
root : 2,
left : { root : 1, left : undefined, right : undefined },
right : { root : 3, left : undefined, right : undefined }
}
לשם נוחות, קיים syntactic sugar עבור מקרים כאלו: האופציה ?
type BinTree = {
root : number,
left? : BinTree,
right? : BinTree
}
let tree : BinTree = {
root : 2,
left : { root : 1},
right : { root : 3}
}
טיפוסים גנריים
ניתן להגדיר תבניות של טיפוסים עם משתנה המציין את אחד, או יותר, הטיפוסים במבנה:

type BinTree<T> = {
root : T,
left? : BinTree<T>,
right? : BinTree<T>
}
באופן זה ניתן לאלץ את כל הערכים להיות מסוג אחד:
let tree : BinTree<number> = {
root : 2,
left : { root : 1},
right : { root : 3}
};
let tree : BinTree<number> = {
root : 2,
left : { root : 1},
right : { root : ‘a’} //incorrect
};
let tree : BinTree<number | string> = {
root : 2,
left : { root : 1},
right : { root : ‘a’}
};
let tree : BinTree<any> = {
root : 2,
left : { root : false},
right : { root : ‘a’}
};
דוגמא: פונקציה המקבלת עץ בינארי של מספרים ומעלה אותם בריבוע.
const square : (x:number)=>number = (x : number) : number => x*x;
מימוש לא פונקציונאלי:
const squareTree : (t : BinTree<number>) => undefined =
(t : BinTree<number>) : undefined = {
t.root = square(t.root)
if (t.left !== undefined)

squareTree(t.left)
if (t.right !== undefined)
squareTree(t.right)
return;
}
מימוש פונקציונאלי:
const squareTree : (t : BinTree<number>) => BinTree<number> =
(t : BinTree<number>) : BinTree<number> =>
(t.left === undefined && t.right === undefined) ?
{ root : square(t.root) }
: (t.left === undefined) ?
{ root: square(t.root), right : squareTree(t.right) }
: (t.right === undefined) ?
{ root : square(t.root), left : squareTree(t.left) }
: { root: square(t.root),
left : squareTree(t.left),
right: squareTree(t.right) };
הערה: שימו לב כי העיצוב של הקוד הינו פונקציונאלי טהור – לא משתמשים בפעולת השמה על הערכים
בקודקודים אלא מייצרים עץ חדש (כמו ה Immutable Objects בתכנות מערכות).
דוגמא נוספת לעיצוב שכזה – מימוש הפעולות push, pop על מחסנית, המחזירות מחסנית חדשה במקום
לשנות את הקיימת:
type Stack<T> = T[];
// A utility to clone an array - relies on the fact that concat copies
// This is a shallow copy
const cloneArray = <T>(array: T[]): T[] => [].concat(array);
// Constructor
const makeStack = <T>(initValues: T[]): Stack<T> => cloneArray(initValues);
// peek and empty are queries - they do not mutate the stack - no change needed
from V1.
const peek = <T>(stack: Stack<T>): T => stack[0];
const empty = <T>(stack: Stack<T>): boolean => stack.length === 0;
// push() and pop() are commands - they return a new copy of the stack
const push = <T>(stack: Stack<T>, newVal: T): Stack<T> => {
let res = cloneArray(stack);
res.unshift(newVal);

return res;
};
const pop = <T>(stack: Stack<T>): Stack<T> => {
let res = cloneArray(stack);
res.shift();
return res;
};
לפרטים נוספים ודיון על עיצוב המחסנית, ראו את הסעיף 'Mutable (Persistent) Data Types in FP' כאן.
יחסי טיפוסים בין טיפוסים גנריים:
BinTree<number> ------ instantiation -------- BinTree<T>
BinTree<string> -------- disjoint ------ BinTree<number>
BinTree<{ name : string , age : number}> ----- subtype ------> BinTree<{ name : string}>
BinTree<S> ------- subtype -----> BinTree<T>, S is a subtype of T
תאימות טיפוסים
- .T למשתנה מטיפוסT אם ניתן לשייך ערך מטיפוס T לטיפוס (compatible) תואםT נאמר כי טיפוס
1 2 , 1 2
(דוגמאות להלן)
- תאימות טיפוסים אינה סימטרית. לדוגמא:
let s : Student = …;
let p : Person = …;
s = p // incorrect, s is more specific
p = s // correct, s is more specific
- חוקי התאימות
עקרון מנחה כללי: יחס ההכלה בין קבוצות הטיפוסים
- טיפוסים פשוטים (ב-TypeScript) תואמים רק לאותו טיפוס בדיוק
let x : number = 3;
let y : number = 4;
let s : string = ‘a’;
x = y // correct
y = x // correct
x = s // incorrect

s = x // incorrect
- טיפוסים פשוטים ומורכבים אינם תואמים
let x : number = 1,
let arr : number[] = [1];
let dict : { id : number } = { id :1 }
x = arr // incorrect
x = dict // incorrect
- מערכים תואמים רק למערכים, מילונים למילונים, פונקציות לפונקציות
let arr : number[] = [1,2],
let map : { a:number, b : number} = { a:1, b:2},
let f : (a : number) => number = (a) => a+1;
arr = map // incorrect
map = f // incorrect
  - מערך עם טיפוס יהיה תואם למערך אחר אם הטיפוס של אבריהם תואם
let pArr : Person[] = …;
let sArr : Student[] = …;
pArr = sArr; // correct
sArr = pArr; // incorrect
  - מילון תואם למילון אם יש לו לפחות אותו מספר שדות, עם אותם שמות, ועם טיפוסים
תואמים עבור ערכי השדות
let person : { id: number, name : string } = …;
let student : { id : number, name : string, univ : string } = …;
person = student // correct
student = person // incorrect
let room : { id : number, content : Person[] } = …;
let class : { id : number, content : Student[] } = …;
room = class // correct
class = room // incorrect
  - פונקציה תואמת לפונקציה כאשר:
▪ מספר הפרמטרים זהה
▪ הערך המוחזר תואם

▪ הפרמטרים תואמים באופן הפוך
let f : () => Person = …;
let g : () => Student = …;
f = g // correct
g = f // incorrect
let f : (x : Person) => number = …;
let g : (x : Student) => number = …;
f = g // incorrect
g = f // correct
תופעה זו של היפוך התאימות של הפרמטרים מכונה Contravariance. הרציונאל הוא: הטיפוס של
הפונקציה הוא קבוצת כל קטעי הקוד האפשריים העונים על דרישות 'החתימה'. כאשר פונקציה
מקבלת פרמטרים עשירים יותר (=יותר ספציפיים, עם יותר נתונים) יש יותר אפשרויות לכתוב את
ה body שלה.
let f : (x : Person) => Person = …,
let g : (x : Student) => Student= …;
f = g // incorrect
g = f // incorrect
Clusure
נתבונן בדוגמת הקוד הבאה:
let z = 10;
const add = (x,y) => x+y+z;
add(1,2)
> 13
המשתנה add הוא פונקציה המתייחסת בקוד שלה למשתנה z המאותחל ל 10. כך שהערך החוזר
מהפעלתה עם 1,2 הוא 13.
אם נשנה אחר כך את z נקבל עבור אותה פונקציה תוצאה אחרת:
z=20
add(1,2)
> 23
כלומר, הפונקציה אינה מוגדרת רק ע"י הקוד שלה אלא גם ע"פ 'העולם' שהיה בזמן שהיא נוצרה (נכנה
.(z אותו בהמשך ה'סביבה' של הפרוצדורה, אוסף המשתנים עם הערכים שהיו קיימים בזמן שנוצרה, כמו
הפונקציה היא ' ְסגוֹר' closure של הגדרת הקוד שלה עם סביבה זו.
דוגמא נוספת:
const adder = (inc) => (x => x+inc);

const a5 = adder(5);
const a2 = adder(2);
{inc:5} ומהסביבה x => x+inc המורכב מהפונקציה closure הוא a5
{inc:2} ומהסביבה x => x+inc המורכב מהפונקציה closure הוא a2
כך שהקריאה a5(10) תחזיר 15, בעוד שהקריאה a2(10) תחזיר 12.
a5(10)
> 15
a2(10)
> 12
2. תחביר וסמנטיקה

## 2.1 מבוא

I
עד כה:
- דגמים שונים של שפות תכנות
- תחביר וסמנטיקה (ביטוי וערך, חישוב ביטוי לערך)
- טיפוסים (קבוצות, מערכת טיפוסים, תאימות טיפוסים)
בפרק זה:
- נגדיר שפת תכנות באופן שלם
  - הגדרת הרכיבים בשפה, התחביר
▪ באופן לא פורמאלי
▪ באופן פורמאלי
▪ מימוש התחביר בפארסר
  - הגדרת משמעות הביטויים, הסמנטיקה (כיצד מחשבים ביטוי לערך)
▪ באופן לא פורמאלי
▪ באופן פורמאלי
▪ מימוש הסמנטיקה באינטרפרטר
Program string  Parser (syntactic rules)  Abstract Syntax Tree
Abstract Syntax Tree  Interpreter (semantic rules)  Value
L1-L4 :באופן זה נגדיר ארבע שפות
- נתכנת בשפות אלו
II רכיבי שפת התכנות
הרכיבים המרכזיים בשפת התכנות הם:
1. פרימיטיביים

ביטויים מובנים בשפה, אבני הבסיס של התחביר.
לדוגמא:
ביטויים המתארים ערכים: מספרים, בוליאנים, מחרוזות...
פונקציות: +, =, >, <,...
[המשמעות של ביטויים אלו נקבעת על ידי האינטרפרטר]
2. אופני הרכבה
כיצד לבנות ביטוי מורכב מביטויים פשוטים / ביטויים מורכבים קיימים ('תתי ביטויים').
3. אופני הפשטה
כיצד ניתן לתאר ביטויים מורכבים כיחידה עצמאית / באופן פשוט יותר.

## 2.2 הגדרת שפות תכנות בסיסיות

L1 2.2.1 השפה
1L תחביר השפה I
1. ביטויים פרימיטיביים
אטומיים:
Literal numbers (as ‘number’ in JS): …,-3, -2, -1, 0, 1, 2, 3, 3.5, 2.7…
Literal booleans: #t, #f
Primitive procedures: +, -, *, /, >, <, =, not
מורכבים: מבנה הצורה define להלן
2. אופני הרכבה
בשפה 1L ניתן לבנות ביטויים מורכבים מביטויים פשוטים בעזרת סוגריים: ().
כאשר הביטוי השמאלי ביותר הוא פרוצדורה ושאר הביטויים בסוגריים הם הפרמטרים. למעט
מקרים של אופרטורים מיוחדים (להלן).
(+ 4 5)
> 9
(- 6 3)
> 3
(* (/ 6 2) (+ 4 5))
> 27
(not (> 3 4))
> #t
ג. אופני הפשטה
define 1 ניתן לתת שם לביטוי, בעזרת האופרטור המיוחדL ב

(define pi (/ 22 7))
(define n (* (/ 6 2) (+ 4 5)))
…
(* pi n)
> 84.78
.binding הקישור בין שם לבין ביטוי/ערך מכונה
L1 סמנטיקת השפה II
יש להגדיר עבור כל סוג של ביטוי אפשרי בשפה, כיצד הוא יחושב לערך.
1. חישוב ביטויים אטומיים לערך
- פרימיטיביים )ע"פ מה שימומש באינטרפרטר(
  - מספרים – הערך החשבוני
(t true, #f false#) בוליאני – הערך הלוגי o
  - אופרטורים (נניח '+', דיון להלן)
- משתנים
pi :לדוגמא
ע"פ הערך שהוגדר עבורו ב define (כלומר lookup, להלן)
- ('define' אופרטור מיוחד (המילה
לא מחושבים - מופיעים בתוכנית אך ורק במסגרת מבנה מיוחד (אחרת הם יתפרשו כשם
של משתנה), וגם אז רק לשם זיהוי סוג המבנה המיוחד.
2. חישוב ביטויים מורכבים לערך
- הפעלה של פרוצדורה (ברירת המחדל)
  - חישוב האופרטור
  - חישוב כל אחד מהפרמטרים
  - הפעלת הפרוצדורה/אופרטור על הפרמטרים
(+ (* 2 3) pi)
> 9.14
(= 2 (+ 1 1))
> #t
(define plus +)
…
(plus 3 5)
> 8

- צורות מיוחדות ((special form, סוגריים שבמקום השמאלי נמצא אופרטור מיוחד, כמו
define) מחושבות כל אחת על פי משמעות הספציפית.
define :1 יש רק צורה מיוחדת אחתL בשפה
חישוב מבנה ה define מוגדר באופן הבא:
  - חישוב הביטוי מימין
(binding הוספת הזוג <משתנה, ערך> ל'סביבה' (מבנה נתונים השומר את כל ה o
(define x (+ 1 2))
Eval (+ 1 2)
Add binding <x,3> to the environment
נקודות למחשבה
- האם מתן שם לביטוי (define) הכרחי בשפת תכנות?
היכולת לתת שם לביטוי הופכת את הקוד לקריא יותר, ומקלה על כתיבת הקוד (אין צורך לחזור על
הביטוי שוב ושוב, מספיק לציין את שמו)
מתן שם לביטוי עשוי להיות גם חיוני לשם הגדרת פונקציות רקורסיביות (נראה בהמשך), שהיא
התכונה המרכזית של שפת תכנות שלמה. אך נראה בהמשך כי ניתן להגדיר רקורסיה גם מבלי
(y-combinator לתת לה שם (בטכניקת
המסקנה מכך: נוח יותר לכתוב קוד בשפה עם אופני הפשטה, אך זה לא הכרחי תאורטית, ובטח
.L1-לא הכרחי ב
- האם סדר החישוב של הביטויים בתוכנית משנה?
עקרונית, סדר החישוב אינו משנה אם מדובר בשפה פונקציונאלית טהורה (אין פעולות השמה)
(+ 3 4)
(/ 7 8)
(not (< 3 4))
למעט פעולת define המבצעת side-effect – הרחבת הסביבה.
(define pi 3.14)
…
(+ pi 5)
- האם הפרימיטיביים הם חלק מהשפה או עניינו הפרטי של האינטרפרטר?
שאלה פילוסופית... (מקבילה לשאלה האם מילה חדשה בשפת בני אדם הופכת אותה לשפה
חדשה)
בקורס נתייחס להוספת פרימיטיביים כעדכון של האינטרפרטר אך לא כיצירת שפה חדשה. מה
שמגדיר את השפה ומבחין אותה משפות אחרות הם המבנים התחביריים השונים, ובפרט אוסף ה
special forms. במילים אחרות, הוספה של special form חדש לשפה יוצרת שפה חדשה.
:1L חסרונות השפה
- יש רק פרוצדורות פרימיטיביות. לא ניתן (כמתכנתי L1) להגדיר חדשות.

- סוגי ערכים מצומצמים (רק מספרים ובוליאנים)
if, for אין 'מבני בקרה' כמו -
- לא ניתן לתחום את ה binding לקטע קוד מסוים (כל המשתנים גלובליים)
lambda או בניסוח אחר, אינה) Turing-Complete אינה L1 באופן כללי ועקרוני: השפה -
calculus). לא ניתן לדוגמא לחשב בה עצרת עבור כל המספרים השלמים. הריצה שלה תמיד
מסתיימת (בניגוד לשפת מחשב, כפי שנלמד בקורס בחישוביות)
2L 2.2.2 השפה
בשפה 2L נוסף מבנה בקרה (הצורה המיוחדת if) ואפשרות להגדרת פרוצדורות חדשות
(lambda הצורה המיוחדת)
I תחביר
1. נגדיר מבנה תחבירי חדש, צורה מיוחדת, עבור הגדרת פרוצדורות
(lambda (<var> …) <exp>)
לדוגמא:
(lambda (x) (* x x))
כמו כל ביטוי אחר, ניתן לתת שם לביטוי של הגדרת פרוצדורה:
(define square (lambda (x) (* x x)))
כמו כל אופרטור פרימיטיבי, ניתן להפעיל את הפרוצדורות שאנחנו מגדירים:
(
(lambda (x y) (* x y))
3 4
)
>12
(square (+ 3 4))
> 49
if 2. נגדיר את הצורה המיוחדת
(if <test> <then> <else>)
(if (> 3 1) #t #f)
(if (= (square 3) 9) (+ 1 2) (\ 3 0))
II סמנטיקה
lambda 1. אופן החישוב של

- ((lambda (x) (* x x) :הגדרת פרוצדורה, לדוגמא
הערך של ביטוי זה הוא closure, הכולל בתוכו את: רשימת הפרמטרים, גוף הפרוצדורה,
)ואת הסביבה הנוכחית -נדון בהמשך).
- (((lambda (x) (* x x)3 ) :הפעלת פרוצדורה, לדוגמא
  - החלפת/הצבת כל מופע של הפרמטר בגוף הפרוצדורה בערך שנשלח עבורו,
(x x)  (* 3 3 *) :לדוגמא
9  (3 3 *) :חישוב הביטויים בגוף הפרוצדורה, לדוגמא o
  - הערך החוזר הוא ערכו של הביטוי האחרון, לדוגמא: 9
if 2. אופן החישוב של
- (test) חישוב התנאי הבוליאני
- אם הוא בעל ערך אמת: חישוב ביטוי ה then (שהוא ערך ביטוי ה if כולו)
- אחרת: חישוב ביטוי ה else (שהוא ערך ביטוי ה if כולו)
!Turing-Complete 2 היאL השפה
תכנות ב 2L: דוגמא – פונקציה המחשבת קירוב של שורש של מספר נתון, ע"פ מתודת ניוטון:
- x נתון מספר
- ננחש את השורש y (שונה מ-0)
y + x/y) / 2) :על ידי x לשורש האמיתי של y נקרב את o
  - וחוזר חלילה, עד שמספיק קרוב
(define sqrt (lambda (x) (sqrt-iter x 1)))
(define sqrt-iter
(lambda (x root)
(if (good? x root)
root
(sqrt-iter x (improve x root)))))
(define epsilon (/ 1 1000))
(define good?
(lambda (x root)
(< (abs (- (* root root) x) epsilon))))
(define abs (lambda (x) (if (< x 0) (* -1 x) x)))
(define improve
(lambda (x root)
(average root (/ x root))))
(define average
(lambda (x y)

(/ (+ x y) 2)))
חסרון: התכנות ב 2L לא תמיד נוח
- אין לולאות (בשפה פונקציונאלית טהורה אין משמעות ללולאה כי אין side effect, נדרשת
קריאה רקורסיבית בה ניתן להעביר את תוצאת כל איטרציה כפרמטר חדש)
- לא ניתן לשנות ערך של משתנה (בשפה פונקציונאלית זה בכל מקרה אסור)
- אין מבנה נתונים מורכב, כמו זוג ורשימה (נראה בהמשך כיצד ניתן לממש מבנים אלו
(L2-ב
- אין אפשרות להגדיר משתנים לוקאליים
בשפה 3L יתווספו מבנה נתונים בסיסי ומשתנים לוקאליים.
3L 2.2.3 השפה
בשפה זו נוסיף ביטויים עבור ערכים מורכבים, ומשתנים מקומיים.
1. משתנים לוקאליים
מוטיבציה
- ביטוי החוזר מספר פעמים
(+ (/ (sqrt 2) (sqrt 3)) (/ (sqrt 2) (sqrt 3)))
(i)  חזרה מיותרת על קוד קיים (פחות קריא, שגיאות בהעתקה, יותר טסטים); (ii) חישוב
כפול מיותר בזמן ריצה.
- פתרון א: הגדרתו כפרוצדורה
(define f
(lambda () (/ (sqrt 2) (sqrt 3)))
(+ (f) (f))
- יתרון: אין צורך לכתוב מחדש כל פעם את הביטויים, הם מוגדרים פעם אחת בפונקציה
- חיסרון: חישוב חוזר של הקריאה לפרצודורה (כל פעם שהביטוי מופיע)
- פתרון: הגדת הביטוי כמשתנה לוקאלי.
הצורה המיוחדת let, המאפשרת להגדיר משתנים לוקאליים.
תחביר:
(let ( (<var1> <exp1>)
(<var2> <exp2>)
...
(<varn> <expn>) )
<body>)
(body) וגוף הקוד (bindings) כולל שני חלקים: הגדרת המשתנים הלוקליים let מבנה ה
(let
(
(v (/ (sqrt 2) (sqrt 3)))

)
(+ v v)
)
let סמנטיקה: מה הערך של הצורה המיוחדת
- חישוב הערכים ב bindings (ע"פ הסביבה הנוכחית)
- הגדרת המשתנים ב binding כך שהם מקושרים לערכים לחושבו
- הצבת הערכים של המשתנים הלוקאליים ב body של ה let, וחישוב של ה body לאחר
ההצבה.
- body הוא הערך של הביטוי האחרון ב let הערך של כל מבנה ה
אבחנה: מבנה ה let הוא סה"כ קיצור-תחבירי (syntactic abbreviation), כלומר ניתן היה להגדיר אותו עם
הפרימיטיביים הקיימים כבר בשפה. ובפרט, כהפעלה של פונקציה:
(
(lambda (v v2) (+ v v))
(/ (sqrt 2) (sqrt 3))
)
2. ערכים נוספים
:3L לשם נוחות, נרחיב במקצת את אוסף סוגי הערכים בשפה
עד כה היו שני סוגי ערכים ב-L2: מספרים ובוליאנים.
נוסיף ב-L3 גם מחרוזות, סמלים, וערכים מורכבים.
מחרוזות וסמלים:
String: “abc”
Symbol: 'green
(define name “Yossi”)
(define color ‘green)
(define f
(lambda (color)
(if (= color ‘green)
(+ 3 5)
(if (= color ‘red)
(* 7 9)
0))))
ערכים מורכבים:

ב JS היו שני סוגים של ערכים מורכבים: מערכים ומילונים.
ב 3L נגדיר מבנה בסיסי יותר: זוג ביטויים/ערכים
תחביר:
נגדיר מבנה נתונים של 'זוג' ביטויים/ערכים בעזרת האופרטורים הפרימיטיביים הבאים (כלומר,
אנחנו מרחיבים את אוסף האופרטורים הבסיסי, שכלל +,-,*...):
cons – בנאי הבונה זוג
car – מקבל זוג ומחזיר את האיבר הראשון
cdr – מקבל זוג ומחזיר את האיבר השני
pair? – מקבל ביטוי ומחזיר #t אם הביטוי הוא זוג
כעת כשיש כבר סוגים שונים יותר של ביטוים, נגדיר פרימיטיב לשם השוואה ביניהם (מעין == של
JS, הכללה של =):
eq? – מקבל שני ביטויים מחזיר #t אם הם שווים
הערה, לשם נוחות, נגדיר גם literal expression עבור זוג: ‘(1 . 5)
(define p1 '(1 . 5))
(define p2 (cons 2 6))
(car p1)
(cdr p2)
(define p3 (cons p1 p2))
(car p3)
‘(1 . 5)
(cdr p3)
‘(2 . 6)
(pair? 1)
#f
(pair? (cdr p3))
#t
(eq? (car p3) (cdr p3))
#f
(eq? (cons 1 2) ‘(1 . 2))
#t
הערה: ניתן היה בפשטות לממש את האופרטור הפרימיטיבי החדש eq? כפרצודרת משתמש:
(define eq?
(lambda (p1 p2)

(or (= p1 p2)
(and (pair? p1)
(pair? p2)
(eq? (car p1) (car p2))
(eq? (cdr p1) (cdr p2)))))(
אך נוח יותר להגדיר פעולה זו כאופרטור פרימיטיבי, בפרט לשם תמיכה בהמשך של בדיקת
השוויון של אובייקטים מורכבים נוספים.
בעזרת זוגות, ניתן לתאר בנוחות יחסית כל מבנה נתונים.
לשם נוחות יתר, נרחיב את השפה כך שתתמוך ברשימות.
הגדרה אינדוקטיבית של רשימה:
- רשימה יכולה להיות הרשימה הריקה
- או זוג של ביטוי ורשימה
הרשימה 1,2,3 לדוגמא תהיה:
(cons 1 (cons 2 (cons 3 ‘())))
נוסיף לשפה פרימיטיב חדש עבור הרשימה הריקה: ‘()
ניתן להגדיר בנאי לרשימה באופן הבא:
;; constructor for list with given two items
(define list
(lambda (x y)
(cons x (cons y '()))))
list אך לשם נוחות נגדיר את ,append ניתן לבנות רשימה עם יותר איברים על ידי מימוש פונקציית
כאופרטור פרימיטיבי המקבל מספר כלשהו של איברים.
נרחיב את מגוון השאילתות, ע"פ פרוצדורות שלנו:
כעת ניתן ניתן להגדיר רשימה, ע"פ ההגדרה לעיל:
(define list?
(lambda (lst)
(or (eq? lst ‘())
(and (pair? lst)
(list? (cdr lst))))))
(define head car)
(define tail cdr)
(define first (lambda (l) (car l))
(define second (lambda (l) (car (cdr l)))
…

וכן פעולות שונות:
(define length
(lambda (lst)
(if (eq? lst ‘())
(+ 1 (length (cdr lst))))))
(define nth
(lambda (lst n)
(if (eq? lst ‘())
'()
(if (= n 0)
(car lst)
(nth (cdr lst) (- n 1))))))
3L ב (High Order Functions) 2.2.3.1 פונקציות מסדר גבוה
כזכור, פונקציות מסדר גבוה מקבלות פונקציות כפרמטר ו/או מחזירות פונקציות כערך. באופן זה, ניתן
לבנות תשתית גבוהה/מופשטת של פונקציות מעל תשתית נמוכה יותר.
נבחן כמה פונקציות קלאסיות שכאלה:
map, filter, reduce .1
map
;; Signature: map(f,l)
;;Type: [ (T1->T2) * List(T1) -> List(T2) ]
;; Purpose: Apply f to all elements in lst. Return the list of results
;; Pre-condition: true
;; Tests: (map square ‘(1 2 3))  ‘(1 4 9); (map (lambda (x) (> x 0)) ‘(-3 4))  ‘(#f #t)
(define map
(lambda (f lst)
(if (eq? lst ‘())
'()
(cons (f (car lst))
(map f (cdr lst))))))
דוגמת ריצה:
(map (lambda (x) (* x x)) '(2 3))
lst = '(2 3)
f = (lambda (x) (* x x))

(cons 4 (map f '(3)))
lst = '(3)
f = (lambda (X) (* x x))
(cons 9 (map f '()))
lst = '()
f = (lambda (x) (* x x))
'()
(cons 4 (cons 9 '()))
‘(4 9)
filter
;;Signature: filter(pred,lst)
;;Type: [(T1->Boolean)*List(T1) -> List(T1) ]
;;Purpose: Return the elements of l which satisfy the predicate pred
;; Pre-condition: true
;; Tests: (filter (lambda (x) (> x 0)) ‘(-2 4))  ‘(4)
(define filter
(lambda (pred lst)
(if (eq? lst ‘())
‘()
(if (pred (car lst))
(cons (car lst) (filter pred (cdr lst)))
(filter pred (cdr lst))))))
(filter (lambda (x) (> x 0)) ‘(1 -1))
pred = (lambda (x) (> x 0))
lst = ‘(1 -1)
(cons 1 (filter (lambda (x) (> x 0)) ‘(-1))
pred = (lambda (x) (> x 0))
lst = ‘(-1)
(filter (lambda (x) (> x 0)) ‘())
‘()
-> (cons 1 ‘())
-> ‘(1)

reduce
;;Signature: reduce1(merge,init,lst)
;;Type: [(T1*T2->T2)*T2*List(T1)-> T2]
;;Purpose: Combine the values of l, starting with init, according to the reducer
;; Pre-condition: true
;; Tests: (reduce + 0 ‘(1 2 3))  6; (reduce (lambda (x b) (and b (> x 0)) #t ‘(1 -2))  #f
(define reduce1
(lambda (merge init lst)
(if (eq? lst ‘())
init
(merge (car lst)
(reduce1 merge init (cdr lst))))))
(reduce1 + 0 '(1 2))
merge: +
init: 0
lst: '(1 2)
(+ 1 (reduce1 + 0 '(2)))
merge: +
init: 0
lst: '(2)
(+ 2 (reduce1 + 0 '()))
reducer: +
init: 0
l: '()
[1 + 2 + 0]
;;Signature: reduce2(merge,init,l)
;;Type: [(T1*T2->T2)*T2*List(T1)-> T2]
;;Purpose: Combine the values of l, starting with init, according to the reducer
;; Pre-condition: true
;; Tests: (reduce2 + 0 ‘(1 2 3))  6; (reduce2 (lambda (x b) (and b (> x 0)) #t ‘(1 -2))  #f
(define reduce2

(lambda (merge init lst)
(if (eq? lst ‘())
init
(reduce2 merge
(merge (car lst) init)
(cdr lst)))))
(reduce2 + 0 '(1 2))
merge: +
init: 0
lst: '(1 2)
(reduce2 + 1 '(2))
merge: +
init: 1
lst: '(2)
(reduce2 + 3 '())
merge: +
init: 3
lst: '()
[0 + 1 + 2]
האם reduce1, reduce2 שקולות?
ראינו כי סדר הפעלת פונקציית המיזוג (merge) על איברי הרשימה שונה בשני המימושים.
אם היא אינה אסוציטיבית/קומוטטיבית (כמו לדוגמא חלוקה) הפונקציות אינן שקולות.
(reduce1 / 1 ‘(2 3))  1 \ (3 \ 1)
(reduce2 / 1 ‘(2 3))  3 \ (2 \ 1)
2. הכללת דפוס פעולה
נתבונן בפונקציות הבאות:
הפונקציה sum-integers מקבל תחום של מספרים [a,b] וסוכמת את המספרים בתחום זה:
;; Signature: sum-integers(a,b)
;; Type: (Number*Number)->Number
;; Purpose: compute the sum of all integers a to b
(define sum-integers

(lambda (a b)
(if (> a b)
(+ a (sum-integers (+ a 1) b)))))
(sum 1 3)
הפונקציה sum-cubes מקבל תחום של מספרים [a,b] וסוכמת את הערך המעוקב של המספרים
בתחום זה:
(define cube (lambda (x) (* x x x)))
;; Signature: sum-cubes(a,b)
;; Type: (Number*Number)->Number
;; Purpose: compute the sum of the cube of all integers a to b
(define sum-cubes
(lambda (a b)
(if (> a b)
(+ (cube a) (sum-cubes (+ a 1) b)))))
(sum-cubes 1 3)

הפונקציה pi-sum מחשבת קירוב למספר pi ע"פ הטור הבא:
1/a(a+2) + 1/(a+4)(a+6) + 1/(a+8)(a+10)…
a=1 כאשר מתחילים מ pi/8 מתכנס ל
;; Signature: pi-sum(a,b)
;; Type: (Number*Number)->Number
;; Purpose: compute the sum of 1/a*(a+2) + ... + 1/(a+4n)*(a+4n+2)
;; s.t. a+4n <= b < a + 4(n + 1)
(define pi-sum
(lambda (a b)
(if (> a b)
(+ (/ 1 (* a (+ a 2)))
(pi-sum (+ a 4) b)))))
(define pi (* 8 (pi-sum 1 10000000))
שלושת הפונקציות הנ"ל בנויות באותה תבנית:
(define <name>
(lambda (a b)
(if (> a b)
(+ (<f> a)
(<name> (<next> a) b))))
נגדיר פונקציה כללית מסדר גבוה, המקבלת את next ו f (כיצד להתקדם, ומה מבצעים על כל
איבר) כפרמטרים:
;; Signature: sum(f, a, next, b)
;; Type: [ [Number->Number] * Number * [Number->Number] * Number -> Number]
;; Purpose: Compute the sum: (term a) + (term (next a)) + .... + (term n)
;; where n = (next (next (... (next a)))) <= b and (next n) > b.
(define sum
(lambda (a b f next)
(if (> a b)
(+ (f a)
(sum (next a) b f next)))))
(define sum-integers

(lambda (a b)
(sum a b (lambda (x) x) (lambda (n) (+ n 1)))))
(define sum-cubes
(lambda (a b)
(sum a b cube (lambda (n) (+ n 1)))))
(define pi-sum
(lambda (a b)
(sum a b (lambda (x) (/ 1 (* x (+ x 2)))) (lambda (n) (+ n 4)))))
:[a,b] בתחום f נשתמש בתבנית זו עבור קירוב לחישוב האינטגרל של פונקציה נתונה
[f(a+dx/2) + f(a+dx+dx/2) + f(a+2dx+dx/2)… + f(a+ndx+dx/2)]dx
dx יחידות של n-מחולק ל [a,b] כאשר התחום
כדי להשתמש בתבנית sum שהגדרנו, נגדיר את f,next,a,b באופן הבא:
''a:' a+dx/2
'b:' a + ndx+ dx/2
f:' f
'next': +dx
;; Signature: integral(f,a,b,dx)
;; Type: [ [Number->Number] * Number * Number * Number -> Number]
;; Purpose: Compute an approximation of the definite integral of f between a and b.
(define integral
(lambda (f a b dx)
(* (sum (+ a (/ dx 2)) b f (lambda (x) (+ x dx))
dx)))
3. פונקציה המחזירה פונקציה
דוגמא: חישוב קירוב לנגזרת
הפונקציה derive מקבלת פונקציה f, דרגת קירוב dx, ומחזירה קירוב לפונקציית הנגזרת, ע"פ הנוסחה
הבאה:
f′(x)=[f(x+dx)−f(x)]/dx
;; Signature: derive(f, dx)
;; Type: [ (Number->Number) * Number -> (Number->Number) ]

;; Purpose: Construct a function that computes a numerical approx of the derivative of f with
;; resolution dx.
(define derive
(lambda (f dx)
(lambda (x)
(/ (- (f (+ x dx))
(f x))
dx))))
דוגמת הפעלה:
(define d-square-001 (derive square 0.001))
(define d-square-1 (derive square 0.1))
(d-square-001 2)

## 4.000999999999699 (Real value is 4)

(d-square-1 2)
4.100000000000001
הפונקציה nth-deriv מקבלת פונקציה ומחזירה את הנגזרת ה-nית שלה.
בגרסה הראשונה, מוחזרת פונקציה, או קוד, המבצע את כל תהליך ה-n גזירות בכל פעם שנדרש להפעיל
את פונציית הנגזרת ה-nית על X נתון.
;; Signature: nth-deriv(f,dx,n)
;; Type: [ (Number->Number) * Number * Number -> (Number->Number) ]
;; Purpose: construct a function that computes a numerical approximation of the nth derivative
of f, according to approximation dx
(define nth-deriv
(lambda (f n dx)
(lambda (x)
(if (= n 0)
(f x)
( (nth-deriv (derive f dx) (- n 1) dx) x)
) ;; if
) ;; lambda
) ;; lambda
) ;; define
(define cube-derive-2 (nth-deriv cube 2 0.0001))
(cube-derive-2 4)
(cube-derive-2 5)

בגרסה השניה, היעילה יותר, מוחזרת כבר פונקציית הנגזרת ה-nית, כך שבהינתן x בהמשך, תופעל עליו
מיד פונקציית הנגזרת ה-nית:
(define nth-deriv-early
(lambda (f n dx)
(if (= n 0)
f
(derive (nth-deriv-early f (- n 1) dx) dx))))
(define cube-derive-2 (nth-deriv-early cube 2 0.0001))
(cube-derive-2 4)
(cube-derive-2 5)

## 2.3 הגדרה פורמאלית של תחביר, ומימושו


### 2.3.1 מבוא

התחביר:
1. מגדיר את ה'מילים'/ה'טוקנים' החוקיות בשפה
דוגמאות:
- שפה אנושית (עברית, ערבית, רוסית, אנגלית): המילון, אוצר המילים בשפה, כולל הטיות
כסא
שולחן
הכסא
שולחני
שולחנות
...
- פרוטוקול תקשורת בין תהליכים
SPL לדוגמא, הפרוטוקול מתרגיל 3 ב
login, register, ‘abc’, \n, \0….
- 2L השפה
(, ), define, lambda, if, 3, #f,x, …
2. מגדיר את מבנה ה'משפטים' בשפה, כלומר את הסדרים החוקיים של המילים, ואת התפקיד של
כל חלק.
- שפה אנושית

S
N V N
דני הלך הביתה
הלך
דני הביתה
- פרוקטוקול תקשורת
login [command] danny [parameter]\n
register [command] spl [parameter] ‘…’\n
- L2
(if (> x 3) 4 5)
[if-expr: test, then, else]
הגדרת תחביר באופן פורמאלי, מבוססת על שני סוגים של חוקים:
1. חוקים לקסיקאליים
כיצד לחלק את רצף התווים בתוכנית ל'טוקנים'
  - תווים מפרידים, משתנים, מספרים
  - ניתן לתיאור ע"י ביטוי רגולרי
2. חוקים תחביריים
הגדרת המבנה ההיררכי של הטוקנים, והתפקיד של כל רכיב
  - ניתן לתיאור ע"י דקדוק חסר הקשר
המערכת שנבנה עבור ניתוח תוכנית נתונה והרצתה, תורכב מהרכיבים/השלבים הבאים:
Scanner o
מקבל מחרוזת של תוכנית/ביטוי ומחזיר מערך של טוקנים, ע"פ החוקים הלקסיקאליים.
"(if (> x 3) 4 5)”

[‘(‘, ‘if’, ‘(‘, ’>’, ‘x’, ‘3’, ‘)’,’4’,’5’, ‘)’]
Reader o

מקבל מערך של טוקנים, ומחזיר את המבנה ההיררכי שלהם, ע"פ החוקים התחביריים.
[‘(‘, ‘if’, ‘(‘, ’>’, ‘x’, ‘3’, ‘)’,’4’,’5’, ‘)’]

[‘if’, [’>’, ‘x’, ‘3’],’4’,’5’]
S-Exp או בקיצור Symbolic Expression מבנה היררכי זה מכונה
Parser o
מקבל s-exp ומחזיר עץ תחבירי מופשט (Abstract Syntax Tree, AST), הכולל מידע על
התפקיד של כל רכיב, ע"פ החוקים התחביריים.
[‘if’, [’>’, ‘x’, ‘3’],’4’,’5’]

if-exp
app-exp num-exp num-exp
prim-op [var-ref num-exp] 4 5
< x 3

Interpreter o
מקבל AST ומחזיר ערך, ע"פ החוקים הסמנטיים
לדוגמא: עבור ה AST הנ"ל, בהנחה ש x הוגדר קודם כ 6 (בעזרת define) – האינטרפרטר יחזיר
את הערך 5.

### 2.3.2 הגדרה פורמאלית של חוקי התחביר

1. חוקים לקסיקאליים
ניתן ע"י ביטוי רגולרי.
לשם נוחות, נשתמש בדקדוק חסר הקשר:
<token> ==> <identifier> | <boolean> | <number> | <string> |( | ) | ' | .
<delimiter> ==> <whitespace> | ( | ) | "
<whitespace> ==> <space or newline>
<identifier> ==> <initial> <subsequent>*
<initial> ==> <letter>
<letter> ==> a | b | c | ... | z
<subsequent> ==> <letter> | <digit>
<number> ==> <digit>+
<digit> ==> 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
<string> ==> " <string element>* "
<string element> ==> <any character other than " or \> | \" | \\
<boolean> ==> #t | #f
2. חוקים תחביריים
על ידי דקדוק חסר הקשר.
(Bank-Naor Form (BNF :נאמץ את הפורמט של בנק-נאור
קיימות שתי דרכים להגדיר את חוקי התחביר:
מבנה תחבירי קונקרטי:
  - תלוי שפה (משתמש בביטויים בשפה, כמו keywords, סימני פיסוק...)
  - נוח יותר לקריאה והבנה
  - מיועד למשתמשים בשפה, כלומר לכותבי הקוד
מבנה תחבירי מופשט:
  - התיאור אינו תלוי שפה
  - התיאור מבוסס על מבני נתונים
  - מקצועי, מיועד לאנשי המטה-פרוגרמינג (כמו כותבי הפארסר והאינטרפרטר)

<program> ::= (L3 <exp>+) / Program(exps:List(Exp))
<exp> ::= <define> | <cexp> / def-exp | cexp
<define> ::= ( define <var> <cexp> ) / def-exp(var:varDecl, val:cexp)
<var-decl> ::= <identifier> / varDecl(var:string)
<binding> ::= ( <var> <cexp> ) / binding(var:varDecl, val:cexp)
<var-ref> ::= <identifier> / varRef(var:string)
<cexp> ::= <number> / num-exp(val:number)
| <boolean> / bool-exp(val:boolean)
| <string> / str-exp(val:string)
| <varRef> / varRef(var:string)
| ( lambda ( <varDecl>* ) <cexp>+ ) / proc-exp(params:List(varDecl), body:List(cexp))
| ( if <cexp> <cexp> <cexp> ) / if-exp(test: cexp, then: cexp, else: cexp)
| ( let ( binding* ) <cexp>+ ) / let-exp(bindings:List(binding), body:List(cexp))
| ( <cexp> <cexp>* ) / app-exp(operator:cexp, operands:List(cexp))
| ( quote <sexp> ) / lit-exp(val:sexp)
Scanner, Reader, Parser 2.6.3 מימוש ה
Scanner, Reader .1
מאחר והשפות שלנו (L1-L3) הינן 'שפות סוגריים', כלומר שפות שבהן ההיררכיה של הטוקנים נקבעת אך ורק
.S-Exp ע"י סוגריים, קל מאוד להמיר את התוכנית למבנה של
.TypeScript לשמחתנו קיים כבר כלי שכזה ב
Parser .2
L3-ast.ts מימוש הפארסר ממוקד בקובץ
מבוא לקוד:
- תשתית
  - מבנה נתונים עבור כל סוג ביטוי בתחביר המופשט
▪ בנאי
▪ שאילתת טיפוס
  - הכללת מבנים שונים ע"י disjoint union (כלומר, הוספת שדה tag לכל interface, וביצוע
איחוד של טיפוסים)
  - טיפול בשגיאות (בעזרת המבנה Result ואוסף פונקציות המטפלות בתרחיש בו המידע
הנתון הינו או תוצאה או שגיאה)
- הרעיון הכללי
  - בכל שלב יש לעבד s-exp נתון.
  - ה s-exp יכול להיות מחרוזת או מערך
NumExp, BoolExp,) בהתאם לתוכן המחרוזת AtomicExp מחרוזת: הגדרת ▪
(PrimOp, VarRef, StrExp
▪ מערך: בניית CompoundExp על פי האיבר הראשון במערך - צורה מיוחדת
(IfExp, ProcExp, LetExp, LitExp), או AppExp כברירת מחדל – תוך קריאה
רקורסיבית לביצוע הפארס על רכיבי המבנה (שאר ה s-exp במערך הנתון)

הדגמת הקוד:
"(L3
(define x 5)
(define s ‘abc)
(if (> x 2) 3 4)
(lambda (y) (+ x y))
(let ((z 2) (y 5))
(* x y z))”
[‘L3’, [‘define’, ‘x’, ‘5’],
[‘define’, ‘s’, [‘quote’, ‘abc’]],
[‘if’, [‘>’, ‘x’, ‘2’], ‘3’, ‘4’],
[‘lambda’, [‘y’], ][‘+’, ‘x’, ‘y’][],
[‘let’, [[‘z’, ‘2’], [‘y’, ‘5’]], [‘*’, ‘x’, ‘y’, ‘z’]]
]
program
]def-exp def-exp if-exp proc-exp let-exp[
var-decl num-exp var-decl lit-exp app-exp num-exp num-exp [var-decl] [app-exp] […]
[…]
x 5 s abc prim-op [var-ref num-exp] 3 4 y prim-op [var-ref var-ref]
> x 2 + x y

### 2.3.3 ביצוע טרנספורמציות תחביריות על AST נתון של תוכנית

ה-AST מייצג באופן נוח את התוכנית שאותה אנו מעוניינים לעבד.
ה interpreter ייקח AST ויהפוך אותו לערך.
היום נבחן כמה פעולות אחרות שניתן לבצע על AST של תוכנית.

1. חישוב 'גובה' ה AST (כלומר 'עומק' התוכנית)
export const height = (exp: Program | Exp): number =>
isAtomicExp(exp) ? 1 :
isLitExp(exp) ? 1 :
isDefineExp(exp) ? 1 + height(exp.val) :
isIfExp(exp) ? 1 + Math.max(height(exp.test),
height(exp.then),
height(exp.alt)) :
isProcExp(exp) ? 1 + reduce(Math.max, zero,
map((bodyExp) => height(bodyExp), exp.body)) :
isLetExp(exp) ? 1 + Math.max(
reduce(Math.max, zero,
map((binding) => height(binding.val),
exp.bindings)),
reduce(Math.max, zero,
map((bodyExp) => height(bodyExp), exp.body))) :
isAppExp(exp) ? 1 + Math.max(height(exp.rator),
reduce(Math.max, zero,
map((rand) => height(rand), exp.rands))) :
isProgram(exp) ? 1 + reduce(Math.max, zero,
map((e) => height(e), exp.exps)) :
-1;
2. בדיקה האם משתנה נתון 'מופיע חופשי' (occurs free) בביטוי נתון
הגדרות:
משתנה x מופיע חופשי (occurs free) בביטוי E אם ורק אם:
- E בביטוי x-ל (VarRef) יש התייחסות
- define, :בשלושה מבנים L3 בביטוי [הגדרת ביטוי אפשרית ב (VarDecl) אינו מוגדר x
[lambda, let
משתנה x קשור (bound) בביטוי E אם ורק אם:
- E בביטוי x-ל (VarRef) יש התייחסות
- x מוגדר (VarDecl) בביטוי
דוגמאות:
((lambda (x) x) y)
- x occurs bound - since the 2nd occurrence of x in the body of the lambda is bound by the
first occurrence in the formals of the lambda.

- y occurs free.
(lambda (y)
((lambda (x) x) y))
- The reference of y in the second line is now bound by the declaration of y in the first line.
export const occursFree = (v: string, e: Program | Exp): boolean =>
isBoolExp(e) ? false :
isNumExp(e) ? false :
isStrExp(e) ? false :
isLitExp(e) ? false :
isPrimOp(e) ? false :
isVarRef(e) ? (v === e.var) :
isIfExp(e) ? occursFree(v, e.test) ||
occursFree(v, e.then) ||
occursFree(v, e.alt) :
isProcExp(e) ? !includes(v, map((arg) => arg.var, e.args)) &&
some((b) => occursFree(v, b), e.body) :
isAppExp(e) ? occursFree(v, e.rator) ||
some((rand) => occursFree(v, rand), e.rands) :
isDefineExp(e) ? (v !== e.var.var) && occursFree(v, e.val) :
isLetExp(e) ? false : // TODO
isProgram(e) ? false : // TODO
false;
3. מציאת כל המשתנים שיש אליהם ref בביטוי נתון
export const referencedVars = (e: Program | Exp): VarRef[] =>
isBoolExp(e) ? Array<VarRef>() :
isNumExp(e) ? Array<VarRef>() :
isStrExp(e) ? Array<VarRef>() :
isLitExp(e) ? Array<VarRef>() :
isPrimOp(e) ? Array<VarRef>() :
isVarRef(e) ? [e] :
isIfExp(e) ? reduce(varRefUnion, Array<VarRef>(),
map(referencedVars, [e.test, e.then, e.alt])) :
isAppExp(e) ? union(referencedVars(e.rator),
reduce(varRefUnion, Array<VarRef>(),
map(referencedVars, e.rands))) :
isProcExp(e) ? reduce(varRefUnion, Array<VarRef>(),
map(referencedVars, e.body)) :
isDefineExp(e) ? referencedVars(e.val) :
isProgram(e) ? reduce(varRefUnion, Array<VarRef>(),

map(referencedVars, e.exps)) :
isLetExp(e) ? Array<VarRef>() : // TODO
[];
4. המרת מבני ה let בתוכנית ל app-exp שקול
תזכורת: מבנה ה let הוא syntactic abbreviation למבנה של הפעלת פרוצדורות
(let
( (a 3) (b 4) )
(+ a b)
)

(
(lambda (a b)
(+ a b)
)
3 4
)
/*
Purpose: rewrite a single LetExp as a lambda-application form
Signature: rewriteLet(cexp)
Type: [LetExp => AppExp]
*/
const rewriteLet = (e: LetExp): AppExp => {
const vars : VarDecl[] = map((b) => b.var, e.bindings);
const vals : CExp[] = map((b) => b.val, e.bindings);
return makeAppExp(
makeProcExp(vars, e.body),
vals);
}
/*
Purpose: rewrite all occurrences of let in an expression to lambda-applications.
Signature: rewriteAllLet(exp)
Type: [Program | Exp -> Program | Exp]
*/
export const rewriteAllLet = (exp: Program | Exp): Program | Exp =>
isExp(exp) ? rewriteAllLetExp(exp) :
isProgram(exp) ? makeProgram(map(rewriteAllLetExp, exp.exps)) :
exp;

const rewriteAllLetExp = (exp: Exp): Exp =>
isCExp(exp) ? rewriteAllLetCExp(exp) :
isDefineExp(exp) ? makeDefineExp(exp.var, rewriteAllLetCExp(exp.val)) :
exp;
const rewriteAllLetCExp = (exp: CExp): CExp =>
isAtomicExp(exp) ? exp :
isLitExp(exp) ? exp :
isIfExp(exp) ? makeIfExp(rewriteAllLetCExp(exp.test),
rewriteAllLetCExp(exp.then),
rewriteAllLetCExp(exp.alt)) :
isAppExp(exp) ? makeAppExp(rewriteAllLetCExp(exp.rator),
map(rewriteAllLetCExp, exp.rands)) :
isProcExp(exp) ? makeProcExp(exp.args, map(rewriteAllLetCExp, exp.body)) :
isLetExp(exp) ? rewriteAllLetCExp(rewriteLet(exp)) :
exp;
הערה: נדרש לקרוא ל rewriteAllLetCExp לאחר המרת ה LextExp, כי ייתכן שהוא כולל בתוכו תת
ביטוי נוסף מסוג LetExp. לדוגמא:
(let ( (a 1)
(b (let ((c 3)) c))
)
( + a b))

(
(lambda (a b)
(+ a b)
)
1 (let ((c 3)) c)
)
5. הוספת 'כתובת לקסיקאלית' לכל התייחסות למשתנה בתוכנית (מעין מצביע למקום שבו הוא
מוגדר)
נגדיר 'כתובת לקסיקאלית' של VarRef כ'הצבעה' למקום בו הוא מוגדר:
- כמה רמות של הגדרה צריך לעלות כדי להגיע להגדרה שלו
- היכן הוא ממקום ברשימת ההגדרות ברמה זו
נצמצם את מרחב הכתובות לביטוי בודד, לביטוי בודד, כך שהכתובת הלקסיקלית של משתנים
המוגדרים בסביבה הגלובלית על ידי define (כולל אופרטורים פרימיטיביים, בגישה המייצגת
.free היא (VarRef אותם כ
(lambda (x y)

(
(lambda (x) (+ x y)(
(+ x z)
)
)
(lambda (x y)
(
(lambda (x) (+ [x : 0 0] [y : 1 1])(
(+ [x : 0 0] [z : free])
)
)
מימוש:
- VarRef הרחבת מבני הנתונים בדקדוק עם מבנים התומכים בכתובות ה
FreeVar o
LexicalAddress o
CExpLA o (הרחבה של Cexp כך שמתאפשר גם VarRef מסוג FreeVar ו
(LexicalAddress
- מבנה נתונים
,VarDecl במהלך ביצוע הטרנספורמציה, כלומר הוספת הכתובות של המשתנים בכל
(AST מתוחזק מאגר הממפה את המשתנים בהם נתקלנו עד כה (תוך כדי המעבר על ה
למקום שבהם הם מוגדרים (כלומר ל Lexical Address שלהם). במילים אחרות, כל פעם
שאנו מגיעים ל VarDecl (define, lambda, let) אנו מוסיפים את המשתנה וכתובתו
למאגר, ומצד שני, כל פעם שאנו נכנסים לרמה עמוקה יותר (נניח ל lambda פנימית) יש
לעדכן את הרמה של כל המשתנים במאגר.
- פונקציות עזר
crossContour
מבוצעת כאשר נכנסים לרמה חדשה של הגדרת משתנים (כל פעם שאנחנו מגיעים ל
:(VarDecl
- הוספת המשתנים החדשים למאגר, ברמה 0
- העמקת הרמה עבור המשתנים שהוגדרו קודם
crossContour(
[[VarDecl a], [VarDecl b]],
[[LexAddr a 0 0], [LexAddr c 0 1]]) =>
[[LexAddr a 0 0], [LexAddr b 0 1], [LexAddr a 1 0], [LexAddr c 1 1]]
getLexicalAddress

:Lexical Address ונדרשים להמירו ל VarRef מופעלת בכל פעם שאנו מגיעים ל
בהינתן מאגר של הגדרת הכתובות של המשתנים השונים, ושם של משתנה, מחזירה את הכתובת
האחרונה ביותר של משתנה זה:
getLexicalAddress(>var-ref a<, [[lex-addr a 0 0], [lex-addr b 0 1], [lex-add a 1 1]])
=> [LexAddr a 0 0]
.FreeVar אם המשתנה אינו מופיע במאגר הכתובות, יחזור
הפונקציה הראשית להוספת הכתובות בביטוי נתון:
export const addLexicalAddresses = (exp: CExpLA): Result<CExpLA> => {
const visitProc =
(proc: ProcExpLA, addresses: LexicalAddress[]): Result<ProcExpLA> => {
const newAddresses = crossContour(proc.params, addresses);
return mapv(mapResult(b => visit(b, newAddresses), proc.body),
(bs: CExpLA[]) =>
makeProcExpLA(proc.params, bs));
};
const visit = (exp: CExpLA, addresses: LexicalAddress[]): Result<CExpLA> =>
isBoolExp(exp) ? makeOk(exp) :
isNumExp(exp) ? makeOk(exp) :
isStrExp(exp) ? makeOk(exp) :
isVarRef(exp) ? makeOk(getLexicalAddress(exp, addresses)) :
isFreeVar(exp) ? makeFailure(`unexpected LA ${format(exp)}`) :
isLexicalAddress(exp) ? makeFailure(`unexpected LA ${format(exp)}`) :
isLitExp(exp) ? makeOk(exp) :
isIfExpLA(exp) ? bind(visit(exp.test, addresses), (test: CExpLA) =>
bind(visit(exp.then, addresses), (then: CExpLA) =>
mapv(visit(exp.alt, addresses), (alt: CExpLA) =>
makeIfExpLA(test, then, alt)))) :
isProcExpLA(exp) ? visitProc(exp, addresses) :
isAppExpLA(exp) ? bind(visit(exp.rator, addresses),
(rator: CExpLA) =>
mapv(mapResult(rand => visit(rand, addresses), exp.rands),
(rands: CExpLA[]) =>
makeAppExpLA(rator, rands))) :
exp;
return visit(exp, []);
};
לחמש הפעולות שהדגמנו יש תבנית משותפת:

- פעולות על עץ תחבירי מופשט, בהתאם לבעיה הספציפית:
  - מקרה קצה
▪ חישוב גובה: ביטוי אטומי - כל קודקוד מגדיל את הגובה באחד
▪ האם משתנה חופשי בביטוי: VarRef - כן
[v] הרשימהVarRef - :מציאת התייחסות למשתנים ▪
AppExp ב LetExp החלפת ה :let המרת ▪
▪ הוספת כתובת לקסיקאלית:
- VarDecl (lambda) – הרחבת והעמקת מאגר ההגדרות
- VarRef – החלפת ה VarRef ב LexicalAddrees/FreeVar בהתאם למאגר
  - קריאה רקורסיבית לתתי הביטויים, ואחר כך מיזוג תוצאות
- + ,max :חישוב גובה
- or :האם משתנה חופשי בביטוי
- union :מציאת התייחסויות למשתנים
- המרת let: בניית קודקוד תואם חדש עם תתי הביטויים המומרים
- הוספת כתובת לקסיקאלית: בניית קודקוד תואם חדש עם תתי הביטויים
החדשים הכוללים כתובות

## 2.4 הגדרה פורמלית של סמנטיקה ומימושה באינטרפרטר

.Parser ומימשנו אותו ע"י כתיבת ,L1-L3 עד כה, הגדרנו באופן פורמאלי את התחביר עבור השפות
כעת, נגדיר את הסמנטיקה של שפות אלו – כלומר, כיצד המבנים/ביטויים השונים בשפה הופכים
לערכים, ונממש סמנטיקה זו כאינטרפרטר:
- נגדיר את סוגי/טיפוסי הערכים עבור הביטויים השונים בשפה.
- נגדיר חוקי חישוב פורמאליים, המתארים מהו הערך עבור כל סוג של ביטוי.
- מימוש את חוקי החישוב באינטרפרטר
L1-L3 2.4.1 הגדרת ערכים וחוקי חישוב לשפות
L1-L3 1. הערכים בשפות
יש להגדיר לכל אחד מסוגי הביטויים בשפות את הערך שאליו הוא יחושב.
1L
ביטויים אטומיים: מספרים, בולאניים, אופרטורים פרימיטיביים, משתנים.
ביטויים מורכבים: define, הפעלה של אופרטור.
נגדיר את הערכים הבאים עבורם:
Value = number | boolean | PrimOp [*] | undefined[**]

נקודות לדיון:
* מה הערך של ביטוי אופרטור פרימיטיבי
לדוגמא: מה הערך של +, -?
+
גישה א: ערכו של אופרטור פרימיטיבי זהה לערכה של פרוצדורת משתמש
- .Closure הוא (ProcExp) 2), הערך של הגדרת פרוצדורהL כזכור (כפי שנראה להלן ב
- באותו אופן, האינטרפרטר יגדיר מראש כל אופרטור פרימיטיבי כ Closure ויוסיף אותו
(define לסביבה, ויתן לו שם (כמו הגדרת פרוצדורת משתמש ע"י
- בגישה זו, האופרטור הפרימיטיבי ייוצג בתחביר כ VarRef, כמו שמות של פרוצדורות
המוגדרות על ידי כותבי הקוד.
- ביצוע/חישוב של האופרטור, יתחיל בגישה לסביבה עם שמו כדי לקבל את ה Closure שלו.
גישה זו תמומש בתרגול הבא.
גישה ב: האופרטור הפרימיטיבי מטופל באופן מיוחד באינטרפרטר
- (VarRef 'בפארסר שלנו, לא כ'סתם PrimOp יש לו ייצוג מיוחד בתחביר (כ
- PrimOp ,הערך שלו הוא מיוחד
- כאשר נדרש להפעילו, יופעל קוד מיוחד באינטרפרטר עבור כל סוג של אופרטור
פרימיטיבי.
בהרצאות נלך על הגישה השניה.
define מה הערך של **
.side-effect הוא גוף חריג ב'נוף' של השפה הפונקציונאלית. אין לו למעשה ערך, אלא רק Define
מאחר שבשפה פונקציונאלית חייב להיות ערך לכל ביטוי, נגדיר לו ערך באופן מלאכותי.
Void הבחירה הטבעית: נגדיר טיפוס בשם
type Void = { tag: “void” }
makeVoid
isVoid
.JS של undefined לכן נבחר ב ,JS גורר בעיות טכניות ב void השימוש ב
2L
IfExp, ProcExp :נוספו שני סוגי ביטויים

Value = number | boolean | PrimOp | undefined | Closure
L3
נוסף המבנה LetExp, וכן הגדרת זוגות ורשימות, סמלים ומחרוזות.
יש להגדיר ערך המייצג זוגות רשימות סמלים ומחרוזות.
באופן מעשי, ערך זה מייצג כל סוג של היררכיית ערכים.
ניתן לייצג כל היררכיית ערכים בעזרת הקונספט של S-Exp (בפארסר ה S-Exp ייצג את היררכיית
הטוקנים בתוכנית, כאן הוא מייצג את היררכיית הערכים).
ה S-Exp הוא ה literal expression של השפות שלנו, מאפשר להגדיר כל קומבינציה של ערכים.
SExp = number | boolean | Symbol | string | PrimOp | Closure | Pair(SExp) | List(SExp)
Value = undefined | SExp
2. הגדרה פורמאלית של חוקי החישוב
כזכור, המשמעות/הסמנטיקה של השפה היא האופן שבה ביטויים בתוכנית הופכים לערכים
('סמנטיקה אופרציונאלית).
את התחביר הגדרנו באופן פורמלי ע"י ניסוח חוקים לקסיקאליים (שהגדירו את המילים בשפה)
וחוקים תחביריים (שהגדירו את המבנים בשפה). באופן דומה, נגדיר את הסמנטיקה על ידי חוקי
חישוב, המקובעים כיצד הופך כל אחד מהביטויים התחביריים האפשריים בשפה לערך:
Atomic Expressions
Numbers
eval(<num-exp exp>, env)  exp.val
Example
Program: “3”
AST: NumExp(3)
eval(NumExp(3), {…})  3
Booleans
eval(<bool-exp exp> env)  exp.val
Example
Program: “#t”
AST: BoolExp(true)

eval(BoolExp(true), {…})  true
Primitive operators
eval(<prim-op exp>, env)  exp
Example
Program: “+”
AST: PrimOp(‘+’)
eval(PrimOp(‘+’), {…})  PrimOp(‘+’)
Var references
eval(<var-ref exp>, env)  apply_env(env, exp.var)
Example:
Program: “x”
AST: VarRef(‘x’)
eval(VarRef(‘x’), { x : 3, y : 4})  3
Compound Expressions
Define expressions
eval(<def-exp exp>, env)
val = eval(exp.val,env)
extend_env(env, exp.var.var, val)
return undefined
Example:
Program: “(define x (+ 5 6)”
AST: DefExp(VarDecl(‘x’), AppExp(PrimOp(‘+’),[NumExp(5),NumExp(6)]))
eval(DefExp(‘x’, AppExp(PrimOp(‘+’),[NumExp(5),NumExp(6)])), { y : 4})  undefined
{ y:4, x:11}
If expressions
eval(<if-exp exp>, env)
eval(exp.test, env) ? eval(exp.then, env) : eval(exp.alt, env)
Example:
Program: “(if (> x 4) 5 6)”
AST: IfExp(AppExp(> x 4), NumExp(5), NumExp(6))
eval(IfExp(AppExp(> x 4), NumExp(5), NumExp(6)), { x : 3, y : 4})
eval(AppExp(> x 4), { x : 3, y : 4})  false
eval(NumExp(6), { x : 3, y : 4})  6
Literal expression

eval(<lit-exp exp>, env)  exp.val
Example
Program: “‘(1,2,3)”
AST: LitExp([1 2 3])
eval(LitExp([1 2 3], {…})  [1,2,3]
Procedures
eval(<proc-exp exp>, env)  make_closure(exp.args, exp.body)
Example
Program: “(lambda (x) (* x x))”
AST: ProcExp([x],[AppExp(PrimOp(‘*’), [VarRef(‘x’), VarRef(‘x’)]))
eval(ProcExp([x],[AppExp(PrimOp(‘*’), [VarRef(‘x’), VarRef(‘x’)]))), {…})  Closure([x],[
ProcExp([x],[AppExp(PrimOp(‘*’), [VarRef(‘x’), VarRef(‘x’)])) [)
Application Expressions
eval(<app-exp exp>, env)
proc = eval(exp.rator,env)
args = [ eval(rand,env) for rand in exp.rands ]
is_primitive(proc) ? apply_primitive(proc,args) : apply_closure(proc,args,env)
הפרוצדורה apply_primitive באינטרפרטר מממשת, בשפה של האינטרפרטר, את הסמנטיקה
.L של האופרטורים הפרימיטיביים השונים בשפה
Example
Program: ( (if (> x 4) + -) 5 6 )
AST: AppExp( IfExp((AppExp (PrimOp(‘>’),[VarRef(‘x’),NumExp(4)]), ‘PrimOp(‘+), PrimOp(‘-‘)),
[NumExp(5), NumExp(6)])
eval(AppExp( IfExp((AppExp (PrimOp(‘>’),[VarRef(‘x’),NumExp(4)]), ‘PrimOp(‘+), PrimOp(‘-‘)),
[NumExp(5), NumExp(6)]), { x:3} )
proc
eval(IfExp((AppExp (PrimOp(‘>’),[VarRef(‘x’),NumExp(4)]), ‘PrimOp(‘+), PrimOp(‘-‘)), { x:3})
PrimOp(‘-')
args
eval(NumExp(5))  5
eval(NumExp(6))  6
[5,6]
apply_primitive(PrimOp(‘-'), [5,6])  -1

L באינטרפרטר, מחשבת את הערך של הפעלת הפרצודרה הנתונה ב apply_closure הפרוצדורה
עם הארגומנטים (המחושבים) הנתונים.
קיימים (לפחות) שני מודלים לחישוב זה:
- (substitution model) מודל ההצבה
- (environment model) מודל הסביבות
נתמקד השבוע במודל ההצבה.
מודל ההצבה - כדי לחשב פרוצדורה נתונה (Closure) על פי רשימת ארגומנטים:
- VarRef של הפרוצדורה את הארגומנטים, כל אחד מהם יחליף את כל ה body מציבים ב
.body שלו ב
- מחשבים את ה body (כלומר, קוראים ל eval עבור כל הביטויים ב body, ומחזירים את
הערך של הביטוי האחרון)
Example
Program: ( (lambda (x) (* x x)) 3)
AST: AppExp( ProcExp([x],[AppExp(PrimOp(‘*’), [VarRef(‘x’), VarRef(‘x’))]), [NumExp(3)] )
Eval(AppExp( ProcExp([x],[(* x x)]), [NumExp(3)] ), { …})
proc
eval(ProcExp([x], [AppExp(* x x)]), {…})  Closure([x], [AppExp(PrimOp(‘*’), [VarRef(‘x’),
VarRef(‘x’))])
args
eval(NumExp(3), {…})  3
apply_closure( Closure([x], [AppExp(PrimOp(‘*’), [VarRef(‘x’), VarRef(‘x’))]), [3], {…} )
eval(AppExp(PrimOp(‘*’), [3, 3]), {…})  9
הערה: בחוק החישוב שהצגנו עבור הפעלת פרוצדורה/אופרטור, חישבנו מראש את כל
הארגומנטים. גישה זו מכונה applicative order. בהמשך נדון בגישה אחרת, המשהה חישוב זה
normal order של הארגומנטים עד לרגע שבו זה נדרש, גישה המכונה

### 2.4.2 מימוש האינטרפרטר

1. תשתית
L3-value.ts :הגדרת הערכים השונים
L3-env.ts :(מימוש הסביבה (כרגע הגלובלית
2. קוד האינטרפרטר

המסגרת הראשית:
L3-eval.ts
evalL3program
חישוב הערך של התוכנית, הוא חישוב הערך של כל הביטויים בגוף התוכנית, והחזרת
הערך של הביטוי האחרון.
evalSequence
חישוב סדרת ביטויים, העשויה להתחיל בסדרת ביטויי define, מחשבת אותם בזה אחר
זה, ומחזירה את הערך של הביטוי האחרון.
evalDefineExps
.define חישוב סדרת ביטויים המתחילה בביטוי מסוג
הרחבת הסביבה ע"פ ביטוי defineהראשון, וחישוב שאר הביטויים ברשימה ע"פ הסביבה
המורחבת.
L3applicativeEval
חישוב ביטוי בעל ערך (Cexp) ע"פ הסוג שלו, בהתאם לחוקי החישוב.
חישוב הפעלת אופרטור פרימיטיבי:
evalPrimitives.ts

applyPrimitive
3L של כל אחד מהאופרטורים הפרימיטיביים ב TS מימוש ב
חישוב הפעלת קלוז'ר:
פונקציה ראשית
L3-eval.ts
applyClosure
- המרת רשימת הערכים להצבה לרשימת ביטויים מקבילה (value2LitExp). נדרש משיקולי
תאימות טיפוסים: גוף הפרוצדורה להצבה מוגדר במושגים של CExp של הפארסר, בעוד
שהערכים להצבה הם כבר במושגי ה Valueשל האינטרפרטר.
מימוש ההצבה
substitute.ts
substitute
הצבת רשימת ביטויי ערכים ברשימת משתנים, עבור רשימת ביטויים.
sub
הצבת רשימת ביטויי ערכים ברשימת משתנים, עבור ביטוי נתון:
  - מקרי קצה
▪ VarRef: החלפתו בביטוי המתאים (אם נדרש)
▪ ProcExp: סינון רשימת המשתנים להצבה, כך שלא תכלול את המשתנים
של הפרוצדורה המקוננת.
(lambda (x y) (+ ( (lambda (x) (* x y)) x ) y) 3 4) ) :על substitute הדגמת
דוגמאות הרצה:
(L3
(define a 3)
(define b 4)
(
(lambda (x)
(if x
( (lambda (x) (* a x)) 3)
( (lambda (x) (+ b x)) 4)
)
)
#t
)
)
<program
[
<def-exp <var-decl a> <num-exp 3>>
<def-exp <var-decl b> <num-exp 4>>

<app-exp
<proc-exp
[<var-decl x>]
[<if-exp <var-ref x>
<app-exp
<proc-exp <var-decl x> [app-exp <prim-op *> [<var-ref a> <var-ref x>]]>
<num-exp 3>
>
<app-exp
<proc-exp <var-decl x> [app-exp <prim-op +> [<var-ref b> <var-ref x>]]>
<num-exp 4>
>
>]
>
<bool-exp #t>
>
]
>
ENV: [ a:3, b:4]
args = [true]
vars = [x]
litArgs = [<bool-exp #t>]
argNames = [x]
subst = [<x <bool-exp #t>>]
freeSubst = []
דוגמא נוספת:
(define z 3)
(
(
(lambda (f) ;; rator
(lambda (z)
(f z)
)
)
(lambda (w) (+ w z)) ;; rands
)
)

-->
(define z 3)
(
(lambda (z)
((lambda (w) (+ w z)) z))
)
בעיה: ההצבה מטשטשת את ההבדל בין z בפרוצדורה עם הפרמטר w, הקשור ל z בdefine , ובין ה
.z בפרוצדורה הפנימית שמקבלתz
פתרון: נדאג לכך שכל שמות המשתנים בפרוצדורות שונות (הקריאה לפרוצדורה renameExps במסגרת ה
(applyClosure
-->
(define z 3)
(lambda (z1)
((lambda (w2) (+ w2 z)) z1)
)
Applicative Order vs. Normal Order 2.4.3
ראינו כי בגישת Applicative Order מחשבים את הערך של כל האופרנדים לפני הפעלת הפרוצדורה.
ניתן לחשוב על גישה אחרת שבה לא במחשבים בשלב זה את הארגומנטים, אלא מציבים אותם כפי שהם
.Normal Order כרגע. החישוב של כל ארגומנט ייעשה בהמשך רק כאשר נזדקק לו. גישה זו מכונה
דוגמאות:
א.
)
(lambda (x) (+ x x))
(* 2 3)
)
אפליקטיב: נחשב תחילה את (* 2 3) ונציב
(6 6 +)
נורמל: נציב (* 2 3) מבלי לחשבם בשלב זה. הם יחושבו מאוחר יותר כאשר זה יידרש עבור הפעלת
האופרטור הפרימיטיבי +.
(+ (* 2 3) (* 2 3))
בדוגמא זו, אפליקטיב יעיל יותר, בנורמל החישוב של (* 2 3) יבוצע פעמיים.

ב.
(
(lambda (x y z) (if x y z))
#t 3 (sqrt 2)
)
אפליקטיב: כל שלושת האופרנדים מחושבים מראש
(if true 3 1.412…)
נורמל: האופרנדים מוצבים כפי שהם, החישוב נדחה לזמן בו האופרנד נדרש
(if #t 3 (sqrt 2))
(alt (sqrt 2 במקרה זה נורמל יעיל יותר, אין צורך מעשי לחשב את הביטוי של ה
ג.
(
(lambda (x y z) (if x y z))
#t 3 (\ 30 0)
)
אפליקטיב: כל שלושת האופרנדים מחושבים מראש, כך שהתוכנית תיפול על חלוקה באפס בחישוב
האופרנד השלישי.
נורמל: האופרנדים מוצבים כפי שהם, החישוב נדחה לזמן בו האופרנד נדרש. מאחר שבתרחיש זה אין
צורך לחשב אתת ה alt, לא נגיע לחלוקה באפס.
(if #t 3 (\ 30 0))
ד.
(define loop (lambda () (loop)))
(define f (lambda (x) 5))
(f (loop))
אפליקטיב: יחושב האופרנד (loop) בהפעלה של f, וניכנס ללואה אינסופית.
נורמל: האופרנד (loop) יוצב ב f מבלי לחשבו. מאחר ואין התייחסות אליו ב f, הוא לא יחושב כלל והתוכנית
תסתיים כסדרה.

שקילות:
האם חישוב ביטוי ב applicative order וב normal order שקול?
ראינו שלא – דוגמאות ג,ד
משפט צ'רץ'-רוזר: אם חישוב ביטוי ב applicative order מסתיים וללא שגיאת זמן ריצה, אז חישובו ב
(side-effects שקול. כלומר, סדר החישוב לא משנה במקרה זה (כאשר אין כמובן normal order
[ב lambda calculus אין שום side effect, כולל define, כך שקל יותר להוכיח זאת. לגבי L3, יש לבחון האם
ה define עשוי להשפיע על שקילות סדר החישוב]
L3-normal.ts :מימוש
שינויים:
- במקרה של IsApp בפרוצדורה L3normalEval, לא מחשבים את האופרנדים
אפליקטיב:
נורמל:
- מחשבים את האופרנדים לפני הקריאה ל applyPrimitive בפרוצדורה
.L3normalApplyProc
אפליקטיב:
נורמל:

- אין צורך בהמרת האופרנדים בחזרה מערכים לביטויים במקרהשל isClosure בפרוצדורה
L3normalApplyProc (value2LitExp) כי הם לא מחושבים (כלומר הטיפוס שלהם הוא
CExp ולא Value עדיין)
אפליקטיב:
נורמל:

## 2.5 מודל הסביבות


### 2.5.1 מוטיבציה

במודל ההצבה, כל הפעלה של פרוצדורה (גם אם היא הופעלה כבר בעבר), כרוכה בשכתוב
גוף הקוד שלה:
- חישוב ערכי הארגומנטים (באפליקטיב, או אח"כ בנורמל)
- body שינוי שמות כל הפרמטרים של כל הפרוצדורות המוגדרות ב
- (באפליקטיב) החזרת ערכי הארגומנטים למבנה של ביטויים.
- הצבת הארגומנטים בכל VarRef מתאים.
כבד!

?++Java, C מה קורה בשפות כמו
- נפתח Activation Frame, בו מוגדרים הערכים של כל הפרמטרים של הפרוצדורה, מבלי
לשנות הקוד.
- כל פעם שיש התייחסות למשתנה, ניגשים למקום ב AF שבו הוא מוגדר (כלומר הוא נקרא
מהזיכרון)
- קיימת היררכיה של פריימים, כלומר ניתן לגשת רק ל AF האחרון, כך שאין בלבול בין שמות
זהים של משתנים שונים.
- בתום הפרוצדורה ה AF נסגר ועוברים ל AF הקודם.
ניישם קונספט דומה אך שונה עבור האינטרפרטר של שפות ה-L: מודל הסביבות.

### 2.5.2 הגדרת מודל הסביבות

1. מבנה נתונים
עד כה: השתמשנו בסביבה הגלובלית, בו אוכסנו כל ה bindings שהוגדרו ע"י פעולות ה
define (במימוש הפונקציונאלי, הסביבה היתה למעשה רשימה מקושרת של
'סביבות'/'פריימים', כאשר כל סביבה היא מעין פריים עם בינדינג אחד)
- נרחיב קונספט זה לכדי היררכיה של פריימים (שהשורש שלה הוא הסביבה הגלובלית).
- בכל הפעלה של פרוצדורה, במקום לשכתב אותה כמו במודל ההצבה, נגדיר פריים חדש,
שבו יוגדרו ה bindings של הפרמטרים של הפרוצדורה עם הערכים שנשלחו עבורם.
פריים זה יתווסף להיררכיה, כלומר יקושר לאחד הפריימים הקיימים.
- כאשר יש VarRef, האינטרפרטר יחפש את ערכו בהיררכיית פריימים, מהפריים האחרון
ולמעלה.
כלומר:
- השימוש במבנה הנתונים של הסביבה משחרר אותנו מהצורך בהצבה של הארגומטים
בתוך גוף הפרוצדורות.
- המבנה ההיררכי של הפריימים משחרר אותנו מהצורך בשינוי שמות המשתנים לייחודיים.
המופע הראשון של הגדרת המשתנה בהיררכיית הפריימים הוא הרלבנטי לקטע הקוד
הנתון.
הערת מינוח: נשתמש במונח 'פריים' עבור מבנה הנתונים הכולל bindings לשם חישוב פרוצדורה,
.frames ובמונח 'סביבה' עבור רצף כלשהו של
נעדכן את חוק החישוב של הפעלת הפרוצדורה, כך שיתאים למודל הסביבות:
Procedure/Operator application ;; (+ 3 4) ;; ((lambda (x) (* x x)) 3)
eval(<app-exp exp>, env)
proc = eval(exp.rator,env)
args = [ eval(r,env) for r in exp.rands ]
is_primitive(proc) ? apply_primitive(proc,args) :
eval_sequence(proc.body,

ext_env(env,make_frame(proc.params, args)))
דוגמאות:
א.
(define y 3)
(
(lambda (x) (+ x y))
(+ 5 2)
(
ב.
(define x 1)
(
(lambda (f)
(
(lambda (x) (f x))
)
)
(lambda (y) (+ x y))
(

Value: 4 (instead of 3)
האופן שבו בנינו את היררכיית הפריימים – חיבור הפריים החדש של הפעלת פרוצדורה לסביבה
הנוכחית של זמן ההפעלה, כלומר לפריים האחרון – גרמה לכך, שהפרמטר x של הפרוצדורה
(lambda (y) (+ x y)) התפרש כערך של x בזמן הפעלת הפרוצדורה ולא בזמן שהפרוצדורה
נוצרה.
(במודל ההצבה, עניין זה בדיוק גרם לנו לשינוי שמות המשתנים בפרוצדורות כך שיהיו ייחודיים)
נרחיב את מבנה ה Clusore כך שמלבד רשימת הפרמרטרים וה body, נזכור גם את 'העולם'
שבו נוצרה הפרוצדורה, כלומר מה היתה הסביבה כאשר היא נוצרה.
כאשר פרוצדורה תופעל, הפריים החדש עם הצבות הפרמטרים יחובר לסביבה שהיתה בזמן
שהיא נוצרה.
(define x 1)

(
(lambda (f) ( (lambda (x) (f x)) 2 )))
(lambda (y) (+ x y))
(
Value: 3 (correct)
עדכון חוקי החישוב:
Procedures ;; (lambda (x) (* x x))
eval(<proc-exp exp>, env)  make_closure(exp.args, exp.body, env)
Procedure/Operator application ;; (+ 3 4) ;; ((lambda (x) (* x x)) 3)
eval(<app-exp exp>, env)
proc = eval(exp.rator,env)
args = [ eval(r,env) for r in exp.rands ]
is_primitive(proc) ? apply_primitive(proc,args) :
eval_sequence(proc.body,
ext_env(proc.env,make_frame(proc.params, args)))

'גישה' זו, של הפעלת פרוצדורה לאור הסביבה שהיתה בזמן הגדרתה ולא הסביבה הקיימת בזמן
.lexical scoping הפעלתה, מכונה
[במשך כמה שנים בשנות השבעים לא עמדו על נקודה זו – האינטרפרטר של Lisp עבד עם
dynamic scoping, כלומר חיבר את הפריים של הפעלת הפרוצדורה לסביבה בזמן הפעלתה. יש
ל-dynamic scoping שימוש אחר, אך להפעלת פונקציה כמו אצלנו הוא שגוי]
syntactic) כי היא סה"כ קיצור תחבירי ,let כזכור, אין צורך לטפל באינטרפרטר בצורת ה
abbreviation) להפעלה של פרוצדורה.
frame נדרש לפתוח let בכל זאת, כדי לחדד את עניין הסביבות (בדומה להפעלת פרוצדורה, גם ב
חדש עבור חישוב ה body עם המשתנים הלוקאליים), נגדיר עבורה חוק חישוב ונממש אותו
באינטרפרטר:
Let expression ;; (let ((a 3) (b 4)) (+ a b))
eval(<let-exp exp>, env)
vars = vars in exp.bindings
vals = vals in exp.bindings
cvals = [ eval(val,env) for val in vals]
eval_sequence(exp.body, ext_env(env, make_frame(vars,cvals))
:במודל ההצבה השורה האחרונה בחוק היתה]
[eval_sequence(substitute(rename(exp.body), vars, cvals), env)
שימו לב שאת הפריים החדש עם ערכי המשתנים הלוקאליים מחברים לסביבה הנוכחית – שהרי סביבת
ההגדרה של גוף ה let הוא הסביבה הנוכחית.
דוגמא:
(let ( (a 1) )
(let ( (b (+ a a )) )
(+ a b)))
סיכום שלבי ציור הדיאגרמות:
סביבה גלובאלית ריקה
define

value-1. חישוב ה
2. הוספת ה-binding של שם המשתנה והערך לסביבה הגלובלית
הפעלות פונקציה לא פרימיטיבית
1. חישוב האופרטור
2. חישוב האופרנדים
3. יצירת פריים חדש עם הפרמטרים של האופרטור וערכי האופרנדים
4. חיבור הפריים החדש לסביבה של האופרטור
5. חישוב ה-body של האופרטור על פי הסביבה החדשה
let
1. חישוב ערכי המשתנים הלוקאליים
2. יצירת פריים חדש עם המשתנים הלוקאליים והערכים שחושבו עבורם
3. חיבור הפריים החדש לסביבה הנוכחית
4. חישוב ה-body של ה-let על פי הסביבה החדשה
Java/C ב Activation Frame הערה: השוואה למודל ה
- ההיררכיה ב Java/C היא שרשור של פריימים, כאן מדובר בעץ (ראינו כי הפריים של
הפעלת פרוצדורה לא מתחבר לפריים האחרון אלא לזה שהיה כאשר הפרוצדורה
הוגדרה).
- במודל הסביבות ניתן להתייחס להגדרות של משתנה בפריימים אחרים לאורך ההיררכיה.
ב Java/C ניתן לגשת רק לפריים הנוכחי.
- עם תום הפעלת הפרוצדורה ה AF נמחק ב Java/C. במודל הסביבות הפריים נשאר כל עוד
יש אליו התייחסות (בפרט, כל עוד קיימת פרוצדורה שנוצרה תחתיו)

### 2.5.3 עדכון קוד האינטרפרטר עבור מודל הסביבות

תשתית:
עדכון הערכים (כעת מבנה ה Closure כולל שדה נוסף המציין את הסביבה שבה הוא הוגדר):
L4-value.ts
L4-env.ts :ולא רק אחד bindings עדכון מבנה הנתונים של הסביבות, כך שבכל פריים יש כמה

L4-eval.ts :האינטרפרטר
evalProc – הוספת הסביבה הנוכחית לקלוז'ר המוחזר
applyClosure – מימוש חוק החישוב עבור הפעלת פרוצדורה (בניית פריים וחיבורו לסביבת הגדרתה)
מודל ההצבה:
מודל הסביבות:
שימו לב כי במודל הסביבות אין צורך ב-valueToLitExp, כי הערכים אינם מוצבים ב-body, וכן אין צורך
ב-renaming, כי האבחנה בין המשתנים ניתנת על ידי הירככית הפריימים ועל ידי מימוש מדיניות
.lexical scoping-ה
evalLet – מימוש חוק החישוב עבור let (הגדרת פריים עם המשתנים הלוקאליים וערכיהם וחיבורו
לסביבה הנוכחית)
Object Oriented Programing in L2 2.5.4
אמרנו כבר כי ניתן לממש OOP החל מ-2L. נדגים זאת כעת (כאשר ניתן להמחיש זאת ויזואלית עם
דיאגרמת הסביבות).
דוגמא: מחלקה הכוללת ערך מספרי, ומתודה של חיבורו למספר נתון.
class Adder {
int a;
Adder(int a) { this.a = a; }
public int add(int x) { return a + x; }
}

Adder a3 = new Adder(3);
Adder a5 = new Adder(5);
a3.add(2);
a5.add(2);
:2L-מימוש ב
הגדרת בנאי, המחזיר מופע של מחלקה זו:
(define make-adder
(lambda (a)
(lambda (x)
(+ a x))))
הגדרת שני מופעים של המחלקה (אחד עם שדה בעל ערך 3, ואחד עם שדה בעל ערך 5):
(define a3 (make-adder 3))
(define a5 (make-adder 5))
ביצוע המתודה עבור כל אחד מהאובייקטים:
(a3 2)  5
(a5 2)

Pair דוגמא נוספת: המחלקה
class Pair {
int a,b;
Pair(int a, int b) { this.a = a; this.b = b; }
int getFirst() { return a; }
int getSecond() { return b; }
int add() { return a + b;}
Pair scale (int k) { return new Pair(a*k,b*k) }
}
:2L מימוש ב
(define make-pair
(lambda (a b)
(lambda (method)
(if (eq? method 'first) a
(if (eq? method 'second) b
(if (eq? method 'add) (+ a b)
(if (eq? method 'scale)
(lambda (k)
(make-pair (* a k) (* b k)))
#f)))))))
(define p (make-pair 1 2))
(p 'first)  1
(p 'second)  2
(p 'add)  3
(((p 'scale) 2) 'add)  6
ניתן להציע גם מימוש כללי יותר, בו 'המשתמש' שולח את המתודה/הפעולה שהוא רוצה לבצע
על האובייקט:
(define make-pair
(lambda (a b)
(lambda (f)
(f a b))))
(define p (make-pair 1 2))

(p (lambda (a b) a))
(p (lambda (a b) b))
(p (lambda (a b) (+ a b)))
(p (lambda (a b) (* a b)))
(p (lambda (a b) (make-pair (* 2 a) (* 2 b))))
הערה: החל מהשפה 3L ניתן לממש OOP גם בעזרת רשימות, כאשר האיבר הראשון ברשימה הוא סימבול
המציין את שם המחלקה (כמו ה tag בממשקים שלנו באינטרפרטר, ‘pair), ושאר אברי הרשימה הם ערכי
.5L השדות. נשתמש בגישה זו כאשר נכתוב אינטרפרטר לפרולוג בשפה

### 2.5.5 רקורסיות

מודל ההצבה תומך ברקורסיות (החל מ 2L. פירוט בסוף הפרק)
מודל הסביבות, כפי שהוצג עד כה, אינו תומך ברקורסיות (אלא אם כן משתמשים ב y-combinator, פירוט
בסוף הפרק)
let, define :בשני אופנים של הגדרה fact דוגמא: הפרוצדורה

(let (
(fact (lambda (n)
(if (=n 1)
(* n (fact (- n 1))))))
(fact 2))
(define fact
(lambda (n)
(if (= n 1)
(* n (fact (- n 1))))))
(fact 2)
נשהה את יצירת הקלוז'ר במקרים כאלה עד לאחר יצירת הפריים שבו המשתנה שלו מוגדר.
מימוש א: פונקציונאלי, ללא שימוש בהשמה באינטרפרטר
נמקד תרחיש זה על ידי הגדרת צורה חדשה בשפה (4L) letrec - וראיציה של let עבור משתנים לוקאליים
מסוג פרוצדורות רקורסיביות, בה נשמר בפריים מבנה נתונים עם נתוני הפרוצדורה (מערך הפרמטרים
ומערך הביטויים ב body) אך לא ה closure עצמו.
VarDecl אלא מערך Value אינו bindings בו טיפוס הערכים ב ,'rec env' לשם כך נגדיר פריים מסוג חדש
ומערך CExp (עבור הפרמטרים וביטויי גוף הפרוצדורה). בפריים זה הקלוז'ר של הפרוצדורה נבנה בכל

פעם שמבוצע applyEnv, כלומר בכל פעם שנדרש להשתמש בקלוז'ר, כאשר הסביבה של הקלוז'ר היא
הפריים שבה מאוחסנים נתוניה.
לדוגמא:
(letrec ((fact (lambda (n)
(if (=n 1)
(* n (fact (- n 1))))))
(fact 2))
(define fact
(lambda (n)
(if (= n 1)
(* n (fact (- n 1))))))
(fact 2)

מימוש בקוד:
RecEnv הגדרת - L4-env.ts
L4-eval.ts - שכתוב evalLet כ evalLetRec ושכתוב evalDefineExps (עבור הגדרת משתנה המייצג
.ExtEnv במקום RecEnv פרוצדורה) כך שיגדירו פריים מסוג
בנוסף, שכתוב evalDefineExps עבור מקרה שבו יש הגדרה של פרוצדורה:
const evalDefineExps = (exps: Exp[], env): Result<Value> => {
let def = first(exps);
if (isDefineExp(def)) {

// Check if rhs is ProcExp - use a recEnv - else an extEnv
if (isProcExp(def.val)) {
const newEnv = makeRecEnv([def.var.var], [def.val.args], [def.val.body], env);
return evalExps(rest(exps), newEnv);
} else {
const rhs = applicativeEval(def.val, env);
if (isFailure(rhs)) {
return rhs;
} else {
const newEnv = makeExtEnv([def.var.var], [rhs], env);
return evalSequence(rest(exps), newEnv);
}
}
} else {
MakeFailure("never");
}
}
חיסרון: בכל קריאה לפרוצדורה שהמשתנה המייצג אותה נמצא בפריים רקורסיבי, יש ייצור מחדש של
אותו קלוז'ר שלה.
define בעיה: קריאות הדדיות בין פרוצדרות לא נתמכות על ידי
)define even?
(lambda (n)
(if (= n 0)
#t
(odd? (- n 1)))))
(define odd?
(lambda (n)
(if (= n 0)
#f
(even? (- n 1)))))
(even? 2)

פתרון ב: נשתמש בפעולות השמה כדי לתמוך בסביבה גלובלית עם פריים אחד בלבד, וכן בפריים
רקורסיבי הכולל ערכי קלוז'ר המחושבים פעם אחת.
הבעיה של הקריאה ההדדית נבעה מכך שהסביבה הגלובלית הוגדרה כרשימה מקושרת של פריימים, כדי
להימנע מפעולות השמה בקוד האינטרפרטר.
נשנה את הגישה ונשתמש בפעולות השמה (גם עבור letrec), אך נעשה זאת באופן ממוקד ביותר:
,(define חדש (נדרש כאשר מחשבים ביטוי binding לפריים היחיד של הסביבה הגלובלית ניתן להוסיף -
אך לא ניתן לשנות binding קיים (לא נדרש).
- בפריים הרקורסיבי (הפריים של letrec) ניתן לשנות את הערך של binding קיים (נדרש לשם עדכון
הקלוז'ר של הפרוצדורות הרקורסיביות לאחר שהפריים נוצר, כך שיצביעו לפריים זה), אך לא להוסיף
binding חדשים (לא נדרש).
- נמקד תחבירית את פעולות ההשמה בממשק Box. רק דרך ממשק זה ניתן לבצע פעולות השמה.
:define חוק החישוב של
- מחשבים את הערך של המשתנה החדש (כמו פעם)
- מוסיפים את ה binding החדש (המשתנה וערכו המחושב) לפריים היחיד בסביבה
הגלובלית
דוגמא:
(define even?
(lambda (n)
(if (= n 0)
#t
(odd? (- n 1)))))
(define odd?
(lambda (n)
(if (= n 0)
#f
(even? (- n 1)))))
(even? 2)


:letrec חוק החישוב עבור
- ,undefined בניית פריים חדש, כאשר שמות המשתנים הלוקאליים מקושרים לערך
וחיבורו לסביבה הקיימת.
- חישוב ערכי המשתנים כקלוז'רים, כאשר הסביבה הנוכחית כוללת כבר את הפריים
החדש.
- עדכון ערכי המשתנים ב bindings של הפריים החדש עם החישוב של הערכים שלהם
(קלוז'רים החיים בסביבה הכוללת את הפריים החדש).
דוגמא:
(letrec ((even? (lambda (n) (if (= n 0) #t (odd? (- n 1)))))
(odd? (lambda (n) (if (= n 0) #f (even? (- n 1))))))
(even? 2))
מימוש:
סביבה: L4-env-box.ts - הגדרת Box, הפעולות על הסביבה הגלובלית ועל הסביבה הרקורסיבית.

L4-eval-box.ts :חישוב
evalDefineExps –הוספת binding חדש לפריים היחיד בסביבה הגלובלית.
evalLetRec – הגדרת פריים רקורסיבי עם שמות המשתנים וערכי undefined, לאחר שהפריים נוצר יצירת קלוז'ר
(undefined של הפריים בהתאם (מבמקום ה bindings עם פריים זה לכל פרוצדורה ועדכון הערכים ב
הערה:
במודל ההצבה, ה define הרגיל תומך ברקורסיה כי בזמן ההפעלה הסביבה הגלובלית כוללת כבר את שם
הפרוצדורה:
(define fact
(lambda (n)
(if (= n 0)
(* n (fact (- n 1))))))
(fact 2)
after substitution:
(if (= 2 0) 1
(* 2 (fact (- 2 1))))
אך ה-let הרגיל לא, כי ההצבה משאירה ב-body את הקריאה הרקורסיבית לפונקציה, ששמה אינו מוכר בסביבה:
(let ((fact (lambda (n)
(if (= n 0) 1
(* n (fact (- n 1)))))))
(fact 2))
A lexical abbreviation of:
(
(lambda (fact)
(fact 2))
(lambda (n) (if (= n 0) 1 (* n (fact (- n 1))))
)
Substitution:
(
(lambda (n) (if (= n 0) 1 (* n (fact (- n 1))))
)

(if (= 2 0) 1
(* 2 (fact (- 2 1))))))
בכל מקרה, ניתן לממש רקורסיות במבנה let, define הרגילים (במודל הסביבות ובמודל ההצבה) בתבנית העיצוב
:y-combinator הבאה, המכונה
(let ((fact (lambda (n fact)
(if (= n 0) 1
(* n (fact (- n 1) fact))))))
(fact 2 fact))
(define fact (lambda (n fact)
(if (= n 0) 1
(* n (fact (- n 1) fact)))))
(fact 2 fact)
:define-וללא שימוש כלל ב
(
(lambda (n fact)
(if (= n1)
(* n (fact (- n 1) fact))))
(lambda (n fact) (if (= n1) 1 (* n (fact (- n 1) fact))))
)
נספח: רקורסיות בלמדה-קלקולוס (להעשרה בלבד)
הזכרנו לא פעם את למדה-קלקולוס - השפה השלמה המינימאלית ביותר, השקולה למכונת טיורינג, שכל קוד בשפה
כל שהיא ניתן למימוש גם בה.
בשפה זו ביטוי יכול להיות או משתנה, או פונקציה עם פרמטר אחד וביטוי אחד בגופה, או הפעלה של פונקציה כזו
עם ארגומנט:
<exp> ::= <cexp> / cexp
<var-decl> ::= <identifier> / varDecl(var:string)
<var-ref> ::= <identifier> / varRef(var:string)
<cexp> ::= <varRef> / varRef(var:string)
| ( lambda ( <varDecl> ) <cexp> ) / proc-exp(param: varDecl, body:exp)
| ( <cexp> <cexp> ) / app-exp(operator:cexp, operand: cexp)
אין מספרים, אין בוליאנים, אין מבנה בקרה (if), אין הפשטה של מתן שם לביטוי (define), ולא כל שכן מחרוזות,
סמלים ורשימות.
ניתן להגדיר כל אלה רק על פי הפעלות של פונקציות. לדוגמא (אני משתמש ב-define רק כדי שיהיה ברור, ניתן
להחליף כל מופע של משתנה גלובאלי בערך שלו):
מספרים:

(define zero
(lambda (f)
(lambda (x)
x)))
(define one
(lambda (f)
(lambda (x)
(f x))))
(define two
(lambda (f)
(lambda (x)
(f (f x)))))
(define three
(lambda (f)
(lambda (x)
(f (f (f x))))))
אופרטורים אריטמטיים
(define successor
(lambda (n)
(lambda (f)
(lambda (x)
(f ((n f) x))))))
(define predecessor
(lambda (n)
(lambda (f)
(lambda (x)
(((n (lambda (g) (lambda (h) (h (g f))))) (lambda (u) x)) (lambda (u)
u))))))
(define plus
(lambda (m)
(lambda (n)
(lambda (f)
(lambda (x)
((m f) ((n f) x)))))))
(define minus
(lambda (m)
(lambda (n)
((n predecessor) m))))
(define mult
(lambda (m)
(lambda (n)
(lambda (f)
(m (n f))))))

(define is-zero
(lambda (n)
((n (lambda (x) false)) true)))
(define equal
(lambda (m)
(lambda (n)
((and (is-zero ((minus m) n)))
(is-zero ((minus n) m))))))
]
debug לצורכי
(define church-to-int
(lambda (n)
((n (lambda (x) (+ x 1))) 0)))
[
בוליאנים
(define true
(lambda (x)
(lambda (y)
x)))
(define false
(lambda (x)
(lambda (y)
y)))
אופרטורים בוליאנים
(define and
(lambda (p)
(lambda (q)
((p q) p))))
(define or
(lambda (p)
(lambda (q)
((p p) q))))
]
debug לצורכי
(define to-bool (lambda (b) ((b #t) #f)))
[
מבנה בקרה
(define if
(lambda (c)
(lambda (x)

(lambda (y)
((c x) y)))))
.normal order-רק ב if שומרת על הסמנטיקה המקורית של הצורה המיוחדת if שימו לב: פונקציית המשתמש
ב-applicative order יחושבו כל שלושת הפרמטרים – test, then, else – מראש בכל מקרה.
ניתן כעת להגדיר את הפונקציה fact כפי שעשינו קודם:
(define fact
(lambda (n)
(lambda (fact)
(((if ((equal n) one)) one) ((mult n) ((fact (predecessor n)) fact))))))
ניתן אף לעשות אבסטרקציה לקריאה הרקורסיבית על ידי הגדרת y-combinator כללי:
(define y-combinator
(lambda (f)
(
(lambda (x) (f (x x)))
(lambda (x) (f (x x)))
)
)
)
באופן זה ניתן להגדיר את fact 'כרגיל', עם פרמטר אחד של המספר, ולהכניס אותה לתבנית של y-combinator כך
שתתאפשר הקריאה הרקורסיבית:
(define fact
(y-combinator
(lambda (fact)
(lambda (n)
(((if ((equal n) one)) one) ((mult n) (fact (predecessor n)))))))
)
שימו לב: הקוד הנ"ל מסתיים רק ב-normal order. ב-applicative orderגם כאשר יש מקרה קצה, האפשרות השניה
של הקריאה הרקורסיבית תחושב אף היא, כי היא פרמטר של פונקציית הלמדה של מבנה הבקרה, כך שניקלע
CPS על ידי מימוש מנגנון עצל של הפעלת פונקציה, כמו applicative order-לחישוב אינסופי (ניתן לפתור זאת גם ב
שיילמד בפרק הרביעי).
לבסוף ניתן להשמיט את כל ה-define על ידי החלפת של שם בערך שהוגדר עבורו. כך ייראה חישוב 3!
(
(
(lambda (f)
(
(lambda (x) (f (x x)))
(lambda (x) (f (x x)))
)
)
(lambda (fact)
(lambda (n)
((((lambda (n)

((n (lambda (x) (lambda (x)
(lambda (y)
y)))) (lambda (x)
(lambda (y)
x)))) n) (lambda (f)
(lambda (x)
(f x)))) (((lambda (m)
(lambda (n)
(lambda (f)
(m (n f))))) n) (fact ((lambda (n)
(lambda (f)
(lambda (x)
(((n (lambda (g) (lambda (h) (h (g f)))))
(lambda (u) x)) (lambda (u) u))))) n)))))))
(lambda (f)
(lambda (x)
(f (f (f x)))))
)

3. טיפוסים
בפרק זה נרחיב את השפה L4 לשפה L5 כך שתכלול טיפוסים.
- תחביר
  - כיצד מתארים טיפוסים (מערכת טיפוסים)
  - כיצד מוסיפים טיפוסים לביטויים בתוכנית
- סמנטיקה (מה המשמעות של טיפוסים בתוכנית)
type checker ,בדיקת תאימות טיפוסים o
- מערכת להסק טיפוסים

## 3.1 תחביר

תחביר הטיפוסים מגדיר:
- מערכת הטיפוסים של השפה
- תיוג הטיפוסים של הביטויים בתוכנית
1. מערכת טיפוסים
מערכת טיפוסים (Type System) של שפה:
- קובעת את הטיפוסים הפשוטים/הפרימיטיביים של הביטויים/הערכים.
Java, TS, ++C (int/number, לדוגמא: הטיפוסים הפשוטים ב
(…,*boolean/bool,String/string/char
- קובעת כיצד ניתן להגדיר טיפוסים מורכבים מטיפוסים פשוטים.
... ,TS איחוד/חיתוך/מכפלה קרטזית (מילון) של טיפוסים ב ,++Java/C לדוגמא: הגדרת מחלקה ב
- מאפשרת להגדיר יחס בין טיפוסים.
JS יחס הספציפיות בין מילונים ב ,++Java/C לדוגמא: יחס ירושה ב
:5L מערכת הטיפוסים של
- טיפוסים פשוטים/פרימיטיביים
number, boolean, string, void, Empty
- טיפוסים מורכבים
ניתן רק להגדיר טיפוס מורכב של חתימת פרוצדורה (אין טיפוס של זוג, רשימה,...)
[number * boolean -> void]
[Empty -> string]
…
- קביעת יחס בין טיפוסים
כרגע, לא ניתן לקבוע יחס בין טיפוסים (כמו לדוגמא לומר שטיפוס אחד יותר ספציפי מטיפוס שני).
כלומר, כרגע, נדרשת התאמה מלאה בין טיפוסים.
:L5 הגדרה פורמלית של מערכת הטיפוסים של
<texp> ::= <atomic-te> | <composite-te> | <tvar>
<atomic-te> ::= <num-te> | <bool-te> | <str-te> | <void-te>
<num-te> ::= number // num-te()
<bool-te> ::= boolean // bool-te()

<str-te> ::= string // str-te()
<void-te> ::= void // void-te()
<composite-te> ::= <proc-te>
<non-tuple-te> ::= <atomic-te> | <proc-te> | <tvar>
<proc-te> ::= ) <tuple-te> -> <non-tuple-te> ( // proc-te(param-tes: list(texp), return-te: texp)
<tuple-te> ::= <non-empty-tuple-te> | <empty-te>
<non-empty-tuple-te> ::= ( <non-tuple-te> *)* <non-tuple-te> // tuple-te(tes: list(texp))
<empty-te> ::= Empty // empt-te()
<tvar> ::= a symbol starting with T // tvar(id: Symbol)
number
boolean
(number*number -> boolean)
(Empty -> string)
(T1 -> T2)
2. תיוג הטיפוסים
שפות שונות מאפשרות להגדיר את הטיפוסים של הביטויים בתוכנית, באופנים שונים:
Java
int x = 3;
boolean f(int i, int j) { return i > j; }
TS
const x : number = 3;
const f : (i : number, j : number) => boolean = (i : number ,j : number) : boolean => i > j;
ב-5L נאמץ את הגישה של TS בצורה אלגנטית יותר:
(define ]x : number[ 3)
(define ]f : [number * number -> boolean][ (lambda (]i: number] [j : number]) [: boolean] (> i j)))
הגדרה פורמאלית של תחביר השפה 5L עם תיוג הטיפוסים (התוספות על 4L מודגשות):
<program> ::= (L5 <exp>+) // program(exps:List(exp))
<exp> ::= <define-exp> | <cexp>
<define-exp> ::= (define <var-decl> <cexp>) // def-exp(var:var-decl, val:cexp)
<cexp> ::= <num-exp> // num-exp(val:Number)
| <bool-exp> // bool-exp(val:Boolean)
| <prim-op> // prim-op(op:Symbol)
| <var-ref> // var-ref(var:Symbol)
| (if <exp> <exp> <exp>) // if-exp(test,then,else)
| (quote <sexp>) // lit-exp(val:Sexp)
| (let (<binding>*) <cexp>+) // let-exp(bindings:List(binding), body:List(cexp))
| (letrec (<binding>*) <cexp>+) // letrec-exp(bindings:List(binding), body:List(cexp))
| (<cexp> <cexp>*) // app-exp(rator:cexp, rands:List(cexp))
| (lambda (<var-decl>*) : <texp>? <cexp>+)

// proc-exp(params:List(var-decl), body:List(cexp), return-te: Texp) ##### L5
<var-decl> ::= <symbol> | (<symbol> : <texp>) // var-decl(var:string, type:Texp) ##### L5
מימוש הפארסר
TExp.ts :מערכת הטיפוסים
T5-ast.ts :תיוג הטיפוסים
T1, -בתוספת קריאה לפארסר של הטיפוסים (אם הם לא מוגדרים מוגדר משתה טיפוס ,T4 כמו הפארסר של
T2…): parseVarDecl, parseProcExp

## 3.2 סמנטיקה

הסמנטיקה קובעת כזכור את המשמעות של המבנים התחביריים. בפרק הקודם, הסמנטיקה קבעה את הערך
של כל סוג ביטוי בשפה. בפרק זה, הסמנטיקה קובעת את המשמעות של טיפוסי הביטויים – האם טיפוסי
הביטויים השונים בתוכנית תואמים זה לזה.
ה-Type Checker מקבל ביטוי E בשפה L5 (כלומר AST בכולל בתוכו גם טיפוסים) ומחשב מה הטיפוס שלו
(בניגוד לאינטרפרטר שמחשב מה הערך שלו). בנוסף, בודק ה- Type Checker האם הטיפוסים בביטוי תואמים
זה לזה.
כזכור, בשפה עם טיפוסים, כמו 5L, ניתן לבצע בדיקה זו 'בזמן קומפילציה', על ה AST, כלומר בין הפארסר
לאינטרפרטר.

- נגדיר חוקי טיפוסים באופן פורמאלי
- type checker נממש את החוקים ב
1. הגדרה פורמאלית של חוקי טיפוסים
תשתית:
כאשר הגדרנו את חוקי החישוב עבור האינטרפרטר, השתמשנו בפרמטר של סביבה, כאשר סביבה זו
הכילה את הערכים של משתנים שהוגדרו קודם. בחוקי הטיפוסים נשתמש גם כן בסביבה , הסביבה
במקרה זה תכיל את הטיפוסים הידועים עד כה עבור משתנים שונים.
לדוגמא:
{ x : number, y : [number -> T5] }
באופן זה, הפרוצדורה apply_env מקבלת שם של משתנה ומחזירה את הטיפוס שלו ע"פ הסביבה.
:(Typing Statement בתיאור החוקים נשתמש במבנה הפורמאלי הבא (המכונה
Tenv |-- e : t
.t הוא e מתקיים שהטיפוס של הביטוי ,Tenv שמשמעו: בהינתן הסביבה

במקרה הכללי הצהרת טיפוס היא ביטוי בוליאני שערכו אמת או שקר. לדוגמא:
ערך הצהרת הטיפוס הבאה היא שקר
{ x : boolean } |-- (f x) : boolean
ניתן להסיק אולי שהפרוצדורה f מקבלת פרמטר בוליאני, אך לא ניתן להסיק שגם הערך המוחזר הוא
בולאני.
לעומת זאת, ערך הצהרת הטיפוס הבאה הוא אמת:
{ f : boolean -> boolean, x : boolean } |-- (f x) : boolean
שימו לב כי ערך ההצהרה הבאה הוא שקר:
{ f : boolean -> boolean } |-- (f x) : boolean
הסיבה – הפרמטר x אינו מוגדר בסביבת הטיפוסים, כך שייתכן f הופעלה עם x בעל טיפוס שגוי ובמקום
להחזיר boolean יש שגיאת זמן ריצה.
יש צורך להגדיר בסביבה הנחות על המשתנים החופשיים המופיעים בביטוי מימין.
{} |- (lambda (x) (+ x 3)) : [number -> number]
ערך ההצהרה הבאה הוא אמת: אין משתנים חופשיים בביטוי מימין, כך שלא נדרשת כל הנחת טיפוסים
בסביבה. ע"פ הסמנטיקה של פעולת +, ניתן להסיק כי x הוא מספר.
הגדרת חוקי הטיפוס מבוססת על הצהרת טיפוס שהן אמת.
חוקי הטיפוס:
Numbers
Example: the type of ‘4’ is ‘number’
_Tenv |-- <num-exp _e> : number
Booleans
Example: the type of ‘#t’ is ‘boolean’
_Tenv |-- <bool-exp _e> : boolean
Strings
Example: the type of “abc” is ‘string’
_Tenv |-- <str-exp _e> : string
VarRef
Example: the type of ‘x’ given the environment { x: number} is ‘number’
_Tenv |-- <var-ref e> : apply_env(_Tenv,e.var)

Primitive operators
Example: the type of ‘+’ is [number * number -> number]
_Tenv |-- + : [number * number -> number]
Example: the type of ‘not’ is [boolean -> boolean]
_Tenv |-- not : [boolean -> boolean]
[בהגדרה זו של חוק הטיפוס ל not, אנו דורשים כי הפרמטר יהיה בוליאני. ניתן היה גם של לאלץ זאת,
[[Tenv |-- not : [_S -> boolean_ :כלומר
… [all remain primitive operators]
בניגוד לביטויים האטומיים עד כה, הביטויים להלן מורכבים, כך שמלבד הגדרת הטיפוס שלהם, חוק הטיפוס
מתייחס גם לתאימות בין תתי הטיפוסים שלהם.
If
Example: the type of ‘(if (> x 5) y z)’ is…
if 1 y) האם אנו רוצים לתמוך בביטויים כמו] boolean להיות test האם אנו רוצים לאלץ את החלק של ה -
?[(z
- האם אנו רוצים לאלץ שהטיפוס של ה then יהיה כמו הטיפוס של ה else [האם אנו רוצים לתמוך בביטויים
?[(if (3 > 4) #t 16) כמו
בשפה כמו 5L, שאין בה איחוד טיפוסים, לא נוכל להצהיר על הטיפוס של מבנה ה if, כמו כן, מבחינה
עיצובית זה לא כל כך אלגנטי להחזיר טיפוסים שונים בהתאם לתרחיש.
נאלץ את שתי הנקודות הנ"ל: התנאי חייב להיות בוליאני, טיפוסי ה then וה else חייבים להיות תואמים.
Given: <if-exp _e>
If _Tenv |-- _e.test : boolean
_Tenv |-- _e.then : _S
_Tenv |-- _e.alt : _S
Then _Tenv |-- _e : _S
Procedures
Example: the type of ‘(lambda ([x : number]) [: number] (* x x))’ is ‘number-> number’)
Given <proc-exp _e>
If _Tenv o { _e.params .var : _e.params .texp, …, _e.params .var : _e.params .texp } |--
1 1 n n
_e.body : _S , … ,_e.body : _S
1 1 M M
_e.returnTE : _S
M
Then _e : [_e.params .texp * … * _e.params .texp -> _e.returnTE]
1 n
חוק זה למעשה קובע שטיפוס הערך המוחזר כפי שהוגדר בפרוצדורה חייב להיות תואם לטיפוס של
.body הביטוי האחרון ב
לדוגמא, הביטוי ‘(lambda (x : number) : [boolean] (* x x))’ לא יעבור type checking, מכיוון שטיפוס

number הוא body בעוד שטיפוס הביטוי האחרון ב boolean הערך המוחזר שהוגדר במפורש הוא
(כפי שמוגדר בחוק הטיפוס של *)
כלומר, הטיפוס של פרוצדורה נתונה הוא 'חתימה' בה טיפוסי הפרמטרים הם הטיפוסים שהוגדרו עבור
הפרמטרים של הפרוצדורה, וטיפוס הערך המוחזר הוא הטיפוס של הביטוי האחרון בגוף הפרוצדורה.
Application
Example: (f 3)
Given: <app-exp _e>
If _Tenv |-- _e.rator : [_S * … * _S -> _S]
1 n
_Tenv |-- _e.rands : _S , … _e.rands : _S
1 1 n n
Then _e : _S
כלומר, החוק דורש תאימות של טיפוסי האופרנדים לפרמטרים של הפרוצדורה (ע"פ הגדרתם), ומגדיר את הטיפוס
של ביטוי הפעלת הפרוצדורה להיות טיפוס הערך המוחזר של הפרוצדורה (ע"פ הגדרתה).
2. מימוש חוקי הטיפוסים
typeOf הפרוצדורה - L5-typecheck.ts
בדומה לאינטרפרטר, מקבלת ביטוי וסביבה (הפעם סביבת טיפוסים) אך מחזירה את הטיפוס של
הביטוי, תוך בדיקת אילוצי תאימות הטיפוסים, ולא את ערכו.
בשונה מהאינטרפרטר, הפונקציה עוברת על כל הקודקודים בעץ (כדי לבדוק את אילוצי התאימות) ורק
פעם אחת על כל קדקוד.
(Type Inference) 3.3 הסק טיפוסים
עד כה, קיבלנו תוכנית עם טיפוסים, ובדקנו האם הם תואמים כפי שהוגדר בחוקים.
כעת, נרחיק לכת, וננסה להסיק בעצמנו את הטיפוסים שלא הוגדרו התוכנית.
כלומר, נקבל תוכנית שבה לא כל הטיפוסים בהכרח מוגדרים (אם הם לא מוגדרים, הפארסר מוסיף בשדה של
הטיפוס 'משתנה טיפוס' (T12, T45,…)), ונחזיר תוכנית בה הטיפוסים הניתנים להסק מפוענחים.

### 3.3.1 דוגמאות

א.
(
(lambda (x) (+ x 3))
)

?x מה הטיפוס של
מהו טיפוס הערך המוחזר של הפרוצדורה?
ניתן לראות ש x הוא number: טיפוס האופרנד שנשלח עבורו, 5, הוא מספר; x עצמו נשלח כאופרנד לאופרטור +,
.number המצפה לקבל פרמטרים מסוג
ניתן לראות שחתימת הפרוצדורה היא: number -> number: טיפוס הפרמטר (x) הוא number, טיפוס גוף
הפרוצדורה הוא מספר (ע"פ הגדרת אופרטור +)
ננסה להכניס תובנות אלו תחת מסגרת שיטתית
- נסמן כל תת ביטוי ע"י משתנה טיפוס
((lambda (x) (+ x (f x))) 5) : T1
(lambda (x) (+ x )f x))) : T2
(+ x (f x)) : T3
(f x) : T4
+ : T5
x : T6
f : T7
5 : T8
- נתאר את כל התובנות על טיפוסי תתי הביטויים כמשוואות
T2 = T8 -> T1 (הפעלת פרוצדורה)
T2 = T6 -> T3 (הגדרת פרוצדורה)
T5 = T6*T4 -> T3 (הפעלת פרוצדורה)
T7 = T6 -> T4 (הפעלת פרוצדורה)
T5 = number * number -> number (טיפוס אופרטור פרימיטיבי)
T8 = number (חוק הטיפוס עבור ביטוי מספרי)
- נפתור את מערכת המשוואות
T5 = number (טיפוס המשתנה איקס)
T2 = number -> number (טיפוס הפרוצדורה)
T7 = number -> number (f)
(
(lambda ([x : number]) : number (+ x 3))
)
ב.

(lambda (x ) (x x))
?x מה הטיפוס של המשתנה
מה טיפוס הערך המוחזר של הפרוצדורה?
- נציין את הטיפוס של כל תת ביטוי על ידי משתנה טיפוס
(lambda (x) (x x)) : T1
(x x) : T2
x : T3
- נתאר את התובנות השונות על טיפוסי תתי הביטויים כמשוואות
T1 = T3 -> T2 (הגדרת פרוצדורה)
T3 = T3 -> T2 (הטיפוס של הפרוצדורה איקס על פי ההפעלה שלה)
T3 = T3 (משוואת זהות)
Contradiction
הסתירה בפתרון המשוואות מלמדת שלא ניתן להסיק את הטיפוס, הוא אינסופי. אין הצבה של טיפוסים
קונסיסטנטית סופית עבור תוכנית זאת (נשים לב שהתכנית לכשעצמה יכולה לרוץ, כלומר ניתן לחשב את הביטוי
(x במקרים מסויימים, בהתאם לפונקציה
ג.
(lambda (f x) (f x x))
?f מה הטיפוס של המשתנה
?x מה הטיפוס של המשתנה
מה טיפוס הערך המוחזר של הפרוצדורה?
- נציין את הטיפוס של כל תת ביטוי על ידי משתנה טיפוס
(lambda (f x) (f x x)) : T1
(f x x) : T2
f : T3
x : T4
- נתאר את תובנות הטיפוסים כמשוואות
T3 = T4 * T4 -> T2 (סמנטיקת הפעלת פרוצדורה)
T1 = T3 * T4 -> T2 ((סמנטיקת הגדרת פרוצדורה
- נפתור את המשוואות
T1 = ((T4 * T4 -> T2 ) * T4) - > T2
פולימורפי, יכול לעבוד עם זוגות שונים של T2,T4 המקיימים את פתרון המשוואה.


### 3.3.2 אלגוריתם פורמאלי להסק טיפוסים

נתון ביטוי e, יש למצוא את הטיפוס של כל ה VarDecl ושל הערך המוחזר עבור הפרוצדורות (תכלס, את כל
הטיפוסים הניתנים להסקה).
שלבי האלגוריתם באופן כללי:
0. [שינוי שמות המשתנים בתוכנית לשמות יחודיים (האלגוריתם ישתמש בסביבה (שלב 3 להלן), כדי
להימנע מתחזוק היררכיה של פריימים אנחנו מראש קובעים שאין שני משתנים בעלי אותו שם)]
1. הגדרת משתנה טיפוס לכל תת ביטוי
2. יצירת מערכת משוואות המתארות את קשרי הטיפוסים בין משתני הטיפוסים
3. פתרון מערכת המשוואות
דוגמא מלווה:
(lambda (f g)
(lambda (x)
(f (+ x (g 3)))))
3.3.2.0 מתן שמות יחודיים לכל משתנה
בדוגמא שלנו לכל המשתנים יש שמות יחודיים, אין צורך לשנות את שמותם
3.3.2.1 הגדרת משתנה טיפוס לכל תת ביטוי
(lambda (f g) (lambda (x) (f (+ x (g 3))))) T0
(lambda (x) (f (+ x (g 3)))) T1
(f (+ x (g 3))) T2
f Tf
(+ x (g 3)) T3
+ T+
x Tx
(g 3) T4
g Tg
3 Tnum3
L5-type-equations.ts בקובץ expToPool קוד: הפונקציה
3.3.2.2 יצירת משוואות הטיפוס
- ביטויים אטומיים פרימיטיביים
משווה ע"פ הטיפוס המוגדר

T = number
num
T = boolean
bool
...
T+ = number * number -> number
- If
משוואות ע"פ האילוצים
T = boolean
test
T = T
then alt
- הגדרת פרוצדורה
משוואות ע"פ האילוצים
(lambda (p …p ) e …e ) :נתון
1 n 1 m
T = [Tp *… * Tp -> Te ]
lam 1 n m
T = Empty -> Te ] אם אין פרמטרים]
lam m
- הפעלת פרוצדורה
משוואות ע"פ האילוצים
(f a …a ) :נתון
1 n
Tf = [Ta *… * Ta -> Tapp]
1 n
בדוגמא שלנו
Expression ,Tvar Equation
3 , Tnum3 Tnum3 = Number
+ , T+ T+ = Number * Number -> Number
(lambda (f g) (lambda (x) (f (+ x (g 3))))) , T0 T0 = [Tf * Tg -> T1]
(lambda (x) (f (+ x (g 3)))) , T1 T1 = [Tx -> T2]
(f (+ x (g 3))) , T2 Tf = [T3 -> T2]
(+ x (g 3)) , T3 T+ = [Tx * T4 -> T3]
(g 3) , T4 Tg = [Tnum3 -> T4]
L5-type-equations.ts בקובץ makeEquationsFromExp קוד: הפונקציה
3.3.2.3 פתרון מערכת משוואות הטיפוס
תשתית: הצבת טיפוסים והפעולות עליה
- (Type Substitution) הצבת טיפוסים
(number, boolean -> T5) לביטויי טיפוס (T1, T3) מבנה נתונים הממפה משתני טיפוס
(x,y) אך שם מופו משתנים בתוכנית ,type-checker מבנה זה דומה לסביבה בה השתמשנו ב]
לביטויי טיפוס, וכאן אנו ממפים משתני טיפוס (T1, T5) לביטויי טיפוס שכאלה]

לדוגמא:
{ T1 = number, T2 = ][number -> T3] -> T4] }
אילוץ: משתנה הטיפוס משמאל אינו יכול להופיע בביטוי הטיפוס מימין.
לדוגמא, T2 = number -> T2 אינו חוקי.
אלגוריתם פתרון המשוואות יתחיל עם הצבה ריקה, שתלך ותגדל כל פעם נגיע לתובנות חדשות
על משתני הטיפוס בזכות המשוואות.
- (Substitution application) הפעלת הצבה
הפעלת הצבה על ביטוי 'מפרשת' אותו ע"י הצבת משתני הטיפוס המוגדרים בהצבה במופעים
שלהם בביטוי. כלומר, החלפת כל משתנה טיפוס בביטוי ב RHS של משתנה זה בהצבה (אם הוא
קיים שם).
לדוגמא:
[[T1->T2]->T2] o {T1=Boolean, T2=[T3->T3]} = [[Boolean->[T3->T3]] -> [T3->T3]]
- (Substitution combination) הרכבת הצבות
בהינתן שתי הצבות, פעולת ההרכבה תהפוך אותם להצבה אחת כוללת.
המדיניות הכללית: ניקח כבסיס את אחת ההצבות (ההצבה הראשונה), ונשתמש בהצבה השניה
כדי להעשיר אותה (לפרש משתני טיפוס בהצבה הראשונה, להוסיף הגדרות של משתני טיפוס
חדשים), תוך סינון הגדרות משתנים הסותרות את המוגדר בהצבה הראשונה.
בפועל, בהינתן שתי הצבות 'S,S, נגדיר את פעולת ההרכבה S o S’ באופן הבא:
  - החלפת משתני טיפוס המופיעים בביטויי הטיפוס (ב-RHS) ב S, בהגדרתם (אם קיימת)
.S' ע"פ הידוע עליהם ב S במילים אחרות, פרשנות משתני טיפוס ב .S'-ב
  - הוספת הגדרות של משתני טיפוס ב-'S ל S, אם ה אינם מוגדרים עדיין ב-S (כלומר,
(S-הסותרים את הגדרם ב S' מסננים הגדרות משתני טיפוס ב
דוגמא:
{T1=Number, T2=[[Number->T3] -> T5]} o {T3=Boolean, T1=[T2->T2], T4 = Number} =
{ T1 = Number, T2 = [[Number-> Boolean] -> T5], T3 = Boolean, T4 = Number }
applySub, combineSub בפרט הפרוצדורות ,L5-substitution-adt.ts קוד: הקובץ
(Unification) הערה: יוניפיקציה
בעזרת קונספט זה של הצבה, ניתן להגדיר את יחס הספציפיות בין טיפוסים.
כזכור, הגדרנו יחס זה כבר בפרק הראשון, כיחס הכלה בין קבוצות (חיות - כלבים). ניתן להגדיר אותו
גם ע"י הפעלת הצבה באופן הבא:
נאמר כי טיפוס 'T ספציפי מטיפוס T, אם קיימת הצבה S כך ש T o S = T’ (כלומר, 'T הוא פרשנות
(T ספציפית של הטיפוס הכללי יותר
לדוגמא:
T = [T1 -> T1]

T’ = [number -> number]
T’ ספציפית מ T מבחינת קריטריון הכלת הקבוצות.
T1 = } ע"פ ההצבה T הוא פירוש ספציפי של ’T גם מבחינת הקריטריון החדש, כי T ספציפית מ ’T
:{number
T o { T1 = number } = T’
נאמר כי שני ביטויי טיפוס נחשבים למאוחדים אם קיימת הצבה ההופכת אותם לזהים (כלומר, קיים
unifier עולם שבו יש להם פירוש זהה). הצבה זו מכונה
T o S = T’ o S
לדוגמא:
T = [T4 * [number -> T1] -> T4]
T’ = [Pair(T2) * [T2 -> T2] - > T3]
S = { T4 = Pair(number), T2 = number, T1 = number, T3 = Pair(Number)}
T o S = T’ o S = [Pair(number) * [number -> number] -> Pair(number)]
– (Most General Unifier (MGU – בהינתן שני ביטויי טיפוס, נגדיר את המאחד הכללי ביותר שלהם
כהצבה הכללית ביותר מבין כל ההצבות המאחדות בין שני ביטויי הטיפוס.
לדוגמא:
T = [T3 * T3 -> T3]
T’ = [Pair(T1) * T2 -> T2]
S' וכן ע"י ההצבה S ע"י ההצבה T' ו T ניתן לאחד את
S = { T3 = Pair(T1}, T2 = Pair(T1) }
S’ = { T3 = Pair(number}, T2 = Pair(number) , T1 = number}
.’S כי היא כללית יותר מMGU היא ה S ההצבה
יש רק MGU אחד, עד כדי שינוי שמות משתנים.
האלגוריתם להלן מוצא את ה MGU של משתני הטיפוס שיצרנו עבור הביטויים בתוכנית. כלומר,
האלגוריתם מוצא את ההצבה הכללית ביותר עבורם המקיימת את המשוואות שיוצרו בשלב הקודם.
האלגוריתם:
אתחול: מאגר משוואות, הצבה ריקה
לולאה:
כל עוד יש משוואות במאגר:
  - הסרת משוואה אחת מהמאגר, והפעלת ההצבה על שני צדדיה (=פרשנות המשוואה ע"פ
הידע שהצטבר עד כה על משתני הטיפוס)

  - טיפול במשוואה ע"פ שלושה מקרים:
number=number,) שני הצדדים אטומיים והם אינם משתני טיפוס ▪
:(number=boolean
בדיקה שהם זהים, אחרת שגיאה
:(T1=number, boolean = T4, T2=T3,) אחד הצדדים הוא משתנה טיפוס ▪
הרכבת ההצבה הנוכחית עם הצבה הכוללת את המשוואה הנתונה (הוספת
התובנה ש T1=number וש T2=T3 להצבה)
▪ שני הביטויים במשוואה מורכבים (טיפוסי פרוצדורה בשפה שלנו) ובעלי אותו
מבנה:
(T1->boolean = number->T2)
פירוק רכיבי הביטויים במשוואה והוספת המשוואות המקבילות להצבה
(T1 = number, T2 = boolean)
אחרת: שגיאה
בדוגמא שלנו
Equations substitution
1. T0 = [Tf * Tg -> T1] {}
2: T1 = [Tx -> T2]
3: Tf = [T3 -> T2]
4: T+ = [Tx * T4 -> T3]
5: Tg = [Tnum3 -> T4]
6: Tnum3 = Number
7: T+ = Number * Number -> Number
Equation 1 is processed by the case 2 of the algorithm - since one of its sides is a type variable (T0).
Equations substitution
2: T1 = [Tx -> T2] {T0 = [Tf * Tg -> T1]}
3: Tf = [T3 -> T2]
4: T+ = [Tx * T4 -> T3]
5: Tg = [Tnum3 -> T4]
6: Tnum3 = Number
7: T+ = Number * Number -> Number
In the second iteration, we process the second equation, and again apply case 2 of the algorithm:
Note how the substitution composition resulted in the transformation of the T1 argument by its value in
the right hand side of T0 in the substitution.
Equations substitution

3: Tf = [T3 -> T2] {T0 = Tf * Tg -> [Tx -> T2], T1 = [Tx -> T2]}
4: T+ = [Tx * T4 -> T3]
5: Tg = [Tnum3 -> T4]
6: Tnum3 = Number
7: T+ = Number * Number -> Number
Same case 2 for the third equation.
Equations substitution
4: T+ = [Tx * T4 -> T3] {T0 = [[T3 -> T2] * Tg -> [Tx -> T2]], T1 = [Tx -> T2], Tf = [T3 -> T2]}
5: Tg = [Tnum3 -> T4]
6: Tnum3 = Number
7: T+ = Number * Number -> Number
Again case 2 for the 4th equation:
Equations substitution
5: Tg = [Tnum3 -> T4] {T0 = [[T3 -> T2] * Tg -> [Tx -> T2]], T1 = [Tx -> T2], Tf = [T3 -> T2],
6: Tnum3 = Number T+ = [Tx * T4 -> T3]}
7: T+ = Number * Number -> Number
One more case 2 for the 5th equation:
Equations substitution
6: Tnum3 = Number {T0 = [[T3 -> T2] * [Tnum3 -> T4] -> [Tx -> T2]], T1 = [Tx -> T2],
7: T+ = Number * Number -> Number Tf = [T3 -> T2], T+ = [Tx * T4 -> T3], Tg = [Tnum3 -> T4]}
One more case 2 for the 6th equation.
Note how the substitution composition resulted in the transformation of the Tnum argument by its value
in the right hand side of Tg in the substitution.
Equations substitution
7: T+ = Number * Number -> Number {T0 = [[T3 -> T2] * [Number -> T4] -> [Tx -> T2]],
T1 = [Tx -> T2], Tf = [T3 -> T2],
T+ = [Tx * T4 -> T3],
Tg = [Number -> T4],
Tnum3 = Number }
Equation 7 is first interpreted by the substitution as: [Tx * T4 -> T3] = [Number * Number -> Number]
This is case 3 of the algorithm - we split the two sides of the equation into components - because they
have the same type constructor (proc-te) and yield the new equations:
Tx = Number
T4 = Number
T3 = Number
Equations substitution

8: Tx = Number {T0 = [[T3 -> T2] * [Number -> T4] -> [Tx -> T2]],
9: T4 = Number T1 = [Tx -> T2], Tf = [T3 -> T2],
10: T3 = Number T+ = [Tx * T4 -> T3],
Tg = [Number -> T4],
Tnum3 = Number }
Case 2 for equation 8:
Equations substitution
9: T4 = Number {T0 = [[T3 -> T2] * [Number -> T4] -> [Number -> T2]],
10: T3 = Number T1 = [Number -> T2], Tf = [T3 -> T2],
T+ = [Number * T4 -> T3],
Tg = [Number -> T4],
Tnum3 = Number, Tx = Number }
Case 2 for equation 9:
Equations substitution
10: T3 = Number {T0 = [[T3 -> T2] * [Number -> Number] -> [Number -> T2]],
T1 = [Number -> T2], Tf = [T3 -> T2],
T+ = [Number * Number -> T3],
Tg = [Number -> Number],
Tnum3 = Number, Tx = Number, T4 = Number }
Case 2 for equation 9:
Equations substitution
{T0 = [[Number -> T2] * [Number -> Number] -> [Number -> T2]],
T1 = [Number -> T2], Tf = [Number -> T2],
T+ = [Number * Number -> Number],
Tg = [Number -> Number],
Tnum3 = Number, Tx = Number, T4 = Number, T3 = Number }
We eventually output the following substitution:
{T0 = [[Number -> T2] * [Number -> Number] -> [Number -> T2]],
T1 = [Number -> T2],
Tf = [Number -> T2],
T+ = [Number * Number -> Number],
Tg = [Number -> Number],
Tnum3 = Number,
Tx = Number
T4 = Number
T3 = Number}
On the basis of this substitution, we can return the fully annotated expression:
(lambda ([f : [Number -> T2] [g : [Number -> Number]]) : [Number -> T2]

(lambda ([x : Number]) : T2
(f (+ x (g 3)))))
L5-type-equations.ts בקובץ solveEquations קוד: הפונקציה
התכנסות אלגוריתם ההסק
טענה: אלגוריתם ההסק מתכנס
הוכחה: נסמן את 'מצב' האלגוריתם ע"י הזוג <D,N>, כאשר N הוא מספר המשוואות הנוכחי, ו D הוא עומק ביטוי
הטיפוס המורכב המופיע במשוואות.
בכל שלב בלולאה, או ש N קטן באחד (מקרים 1,2), או ש D קטן (מקרה 3, מוריד את רמת המורכבות של אחת
המשוואות). כלומר בסוף N=0 או D=0, כלומר אין יותר משוואות.
מימוש קומפקטי ויעיל יותר של האלגוריתם
אבחנות:
- כל תת-ביטוי שחילצנו ובחרנו עבורו משתנה טיפוס חדש בשלב 1 של אלגוריתם ההסק, הוא למעשה
קודקוד בעץ התחבירי המופשט (ה-AST) של הביטוי הנתון. כלומר, כל אחד מתתי-הביטויים נבחן על ידי ה
type checker. יתרה מכך, הפארסר מייצר משתנה טיפוס לכל המשתנים המוגדרים ולערך המוחזר של
הפרוצדורות (כלומר, לכל הטיפוסים שאנחנו רוצים להסיק מה הם)
- משוואות הטיפוס שגזרנו בשלב 2 של אלגוריתם ההסק, ע"פ תתי הביטויים השונים, תואמות אחת לאחת
.AST עבור כל קודקוד ב Type Checker לאילוצים שבדקנו ב
נממש את כל אלגוריתם ההסק כחלק מה Type Checker. כלומר נריץ את ה Type Checker ללא כל הסק מקדים,
:type checking תוך עדכון קל – מימוש שלב 3 של אלגוריתם ההסק (פתרון המשוואות) כחלק מה
כאשר נבדקת התאימות בין שני טיפוסים – הפרוצדורה checkEqualType – אם אחד הטיפוסים הוא משתנה טיפוס
(T12), במקום להחזיר שגיאה אם אין תאימות (מצד אחד T12 מצד שני number), נציין כי הטיפוס של משתנה
הטיפוס הוא ביטוי הטיפוס.
לדוגמא:
(
(lambda (x) x)
)
.T1 בפרוצדורה משתנה טיפוס חדש, נניח x הפארסר יצמיד למשתנה
(
(lambda (x : T1) : T2 x)
)

ויבדוק האם הטיפוס של AppExp במסגרת המעבר עם תתי הביטויים, יגיע לתרחיש של type-checker לאחר מכן, ה
type-checker כך שה – T1 הוא x הטיפוס של ,number הטיפוס של 3 הוא .x האופרנד 3 תואם לטיפוס של הפרמטר
.Failure יחזיר
באופן כזה (T1) כך שעבור השוואת שני טיפוסים שאחד מהם הוא משתנה טיפוס checkEqualType אם נשנה את
(number) הוא מכאן ואילך הטיפוס שאליו הוא הושווה (T1) אלא תציין שמשתנה הטיפוס false שהיא לא תחזיר
בהמשך, אם ניתקל שוב בבדיקת הטיפוס של משתנה זה, נצרף שוב את הטיפוס שאליו הוא מושווה לרשימות
הטיפוסים האפשריים עבורו:
(define f (lambda (x) x))
…
(f 2)
(f y)
בכל קריאה ל f בוצעה בדיקה של תאימות טיפוס האופרנד לטיפוס הפרמטר.
אם הטיפוס של x לאחר הפארסינג הוא נניח T1, בבדיקת הטיפוסים של הקריאה הראשונה שדה התוכן שלו יהיה
(T2 נניח משתנה הטיפוס) y בבדיקת הטיפוס בקריאה השניה, שדה התוכן שלו יתעדכן גם עם הטיפוס של .number
שדה התוכן אוגר לתוכו את כל ההצבות עבור משתנה הטיפוס, כך שההרכבה שלהם היא למעשה 'פתרון'
T1=T2=number המשוואות עבורו. בפרט
במידה שתהיה סתירה בשדה התוכן. לדוגמא:
(f 2)
(f y)
(f #t)
T1=T2=number=boolean :כך שייווצר שדה תוכן
נסיק שיש בעיה בטיפוסי התוכנית / לא ניתן להסיקם (בשפה שלנו בה אין איחוד טיפוסים, אם יש איחוד שכזה
(T1=T2=number|boolean בתחביר, ניתן יהיה להסיק במקרה זה של
L5-typeinference.ts בקובץ checkEqualType מימוש: הפרוצדורה
שימוש באלגוריתם ההסק עבור קביעה האם הצהרת טיפוס הכוללת משתנים גנריים תקפה או לא
פתחנו את הפרק בהצגת הפורמליזם של הצהרות טיפוס (typing statements). הצהרות אלו עשויות לכלול משתנים
גנריים, לדוגמא:
- {f : [T1 → T2], g : [T1 → T2], a : T1} ⊢ (f (g a)) : T2
- {f : [T1 × T2 → T3]} ⊢ (lambda (x) (f x 100)) : [T2 → T3]
כיצד נקבע האם ההצהרות הן אמת או שקר?
1. נפעיל את אלגוריתם ההסק על הביטוי הנדון מימין, כאשר הצבת הטיפוסים משמאל מהווה את נקודת
ההתחלה.

2. נפעיל את ההצבה המתקבלת מאלגוריתם ההסק על הביטוי הנדון מימין, ונרכיב אותה על הצבת הטיפוסים
משמאל, ונקבל הצהרת טיפוס ספציפית יותר.
3. נבדוק האם הצהרת הטיפוס הספציפית שהתקבלה תקפה.
עבור שתי הדוגמאות לעיל:
{f : [T1 → T2], g : [T1 → T2], a : T1} ⊢ (f (g a)) : T2
1. נפעיל את אלגוריתם ההסק על הביטוי הנדון מימין, כאשר הצבת הטיפוסים משמאל מהווה את נקודת
{T1 = T2} ההתחלה ונקבל את ההצבה
2. נפעיל את ההצבה המתקבלת מאלגוריתם ההסק על הביטוי הנדון מימין, ונרכיב אותה על הצבת הטיפוסים
משמאל, ונקבל הצהרת טיפוס ספציפית יותר:
{f : [T2 → T2], g : [T2 → T2], a : T2} ⊢ (f (g a)) : T2
3. נבדוק האם הצהרת הטיפוס הספציפית שהתקבלה תקפה
.T2 מקבלת f הצהרת הטיפוס כעת תקפה, כי
{f : [T1 × T2 → T3]} ⊢ (lambda (x) (f x 100)) : [T2 → T3]
1. נפעיל את אלגוריתם ההסק על הביטוי הנדון מימין, כאשר הצבת הטיפוסים משמאל מהווה את נקודת
{Tx = T1, T2 = Number} ההתחלה ונקבל את ההצבה
2. נפעיל את ההצבה המתקבלת מאלגוריתם ההסק על הביטוי הנדון מימין, ונרכיב אותה על הצבת הטיפוסים
משמאל, ונקבל הצהרת טיפוס ספציפית יותר:
{f : [T1 × Number → T3]} ⊢ (lambda (x) (f x 100)) : [Number → T3]
3. נבדוק האם הצהרת הטיפוס הספציפית שהתקבלה תקפה:
הצהרת הטיפוס קובעת שהלמדה הנתונה חייבת לקבל Number אך אין לכך כל אילוץ בהצבה. ייתכן
שהלמדה מקבלת טיפוס אחר, String לדוגמא.
4. בקרת החישוב
מבני בקרה בשפות תכנות קובעים את סדר ביצוע הפקודות.
עד כה התוודענו למבני בקרה שונים:
- הרצה סדרתית של פקודות
- if-else מבנה
- לולאה
- קריאה לפרוצדורה
- exception זריקת
בפרק זה, נבחן שני מבני בקרה נוספים, המאפשרים לנו, כמתכנתים בשפת ה-L, לשלוט על זמן החישוב של
הביטויים. בפרט, להשהות את החישוב של ביטויים שונים בתוכנית לזמן מאוחר יותר:
- קריאות אסינכרוניות
- קו-רוטינות

.L ולאחר מכן נממש אותם בשפת ,JavaScript נדגים תחילה מבנים אלו בשימוש מודרני ואופנתי ב
במסגרת זאת, נעדכן גם את האינטרפרטר – L6,L7 (לא מדובר בשפות חדשות, אין סוגים חדשים של ביטויים, אלא
באינטרפרטר יעיל יותר)
JavaScript ב i/o 4.1 גישה אסינכרונית ל
נתקלנו כבר בעבר במנגנונים בהם ביטויים/פקודות מסויימים מחושבים/מבוצעות בזמן מאוחר יותר:
- יצירת ת'רד
Thread t = new Thread(() => { … });
t.start();
- טיפול בבקשת לקוח בשרת הריאקטור
בשני מקרים אלו, הקוד לא בוצע באופן סנכרוני, כלומר ביצוע כעת של המשימה שורה אחרי שורה, אלא באופן
אסינכרוני, כלומר, הגדרנו משימה (ת'רד, טיפול בלקוח), העברנו אותה למנגנון שייטפל בה בהמשך (סביבת הריצה
תריץ את הת'רד, השרת יגיב בהמשך ל i/o זמין של הלקוח), והמשכנו הלאה לשורת הקוד הבאה על אף שהמשימה
לא בוצעה עדיין.
שתי דוגמאות נוספות למנגנונים שכאלה:
- ה event loop של ה browser (גוגל כרום, אקספלורר)
html ניתוח דף ה o
  - הרצת סקריפטים של JS המוגדרים בדף
  - תגובות לפעולות משתמש
  - תגובות להודעות מהשרת
לדוגמא:
:html אם מופיע בדף ה
setTimeout(()=> { console.log(‘abc’) }, 1000)
undefined
abc
$(“btn_1”).click(() => alert(“Btn 1 clicked”));
- (JS סביבת הריצה של) node של event loop ה
האינטרפרטר רץ בת'רד אחד. הגישה ל i/o לוקחת זמן רב (בסדר גודל עצום ביחס לפעולות
בזיכרון). קריאה סנכרונית תמתין עד שהפעולה תתבצע. בקריאה אסינכרונית הבקשה מועברת
למערכת ההפעלה עם פונקציית callback לביצוע כאשר הגישה ל i/o תסתיים, והתוכנית ממשיכה.
כאשר מערכת ההפעלה תסיים את הקריאה/כתיבה/... מ/ל io תתווסף משימה של ביצוע ה
.node של eventloop ל callback

כפי שנאמר כבר, ניתן לגשת למידע בקובץ (לקריאה או לכתיבה) באופן סינכרוני, כך שהפעולה לא תסתיים עד אשר
ניגש למידע, או לחלופין באופן א-סינכרוני, כך שהפעולה הנוכחית מסתיימת מייד והטיפול במידע יתרחש במועד
מאוחר יותר, לאחר שהמידע יהיה נגיש.
גישה סנכרונית לקבצים
קריאה מקובץ
// Synchronous (blocking) call to readFileSync
// The return value of the readFileSync procedure can be passed directly to the JSON.parse
function.
const readJSONSync = (filename) => {
return JSON.parse(fs.readFileSync(filename, 'utf8'));
}
filename תחילה, אנו מבקשים ממערכת ההפעלה לקרוא באופן סנכרוני את תוכן הקובץ
fs.readFileSync(filename, 'utf8')
התוכנית תחכה עד אשר המידע ייקרא מהקובץ, ולאחר מכן, אנו מבצעים ניתוח של המחרוזת החוזרת לאובייקט
Json
JSON.parse(fs.readFileSync(filename, 'utf8')(
כתיבה לקובץ
const writeJSONSync = (filename, map) => {
return fs.writeFileSync(filename, JSON.stringfy(map), 'utf8');
}
writeJSONSync("test", {id:1, text:'hello'});
console.log(readJSONSync("test"));
filename לקובץ (JSON אנו מבקשים ממערכת ההפעלה לכתוב באופן סנכרוני מחרוזת (המרה של אובייקט
גישה לא סנכרונית
const readJSON = (filename) => {
fs.readFile(filename, 'utf8', (err, res) => {
if (err)
console.log(err);
else
console.log(JSON.parse(res));
});
}

node אנו מבקשים ממערכת ההפעלה לקרוא באופן לא סינכרוני את תוכן הקובץ, ומבקשים מ readFile בפעולת
לבצע את הקלוז'ר המצורף על תוצאת הקריאה האסינכרונית (הפרמטרים res, err) לאחר שמערכת ההפעלה תסיים
בהמשך את הקריאה.
כתיבה לקובץ
const writeJSON = (filename, map) => {
fs.writeFile(filename, JSON.stringify(map), (err) => {
if (err)
console.error(err);
else
console.log("The file was saved: ", filename);
});
console.log("This is invoked before the callback is invoked.");
}
,filename לקובץ JSON בגרסה זו אנו רק מבקשים ממערכת ההפעלה לכתוב את ייצוג המחרוזת של אובייקט ה
,err ,במקרה זה היא מקבלת רק פרטמר אחד) callback ומספקים את התגובה לפעולה זו בהמשך ע"י פונקציית ה
כי אין ערך מוחזר לפעולת הכתיבה (בניגוד לפעולת הקריאה שהחזירה את תוכן הקובץ)).
הערה: פונקציית ה callback שאנו מספקים היא למעשה closure הכולל לא רק את הקוד של הפונקציה אלא גם את
'הסביבה' שהיתה שבזמן היווצרותה.
לדוגמא
const writeJSON = (filename, map) => {
let date = Date();
fs.writeFile(filename, JSON.stringify(map), (err) => {
if (err)
console.error(err);
else
console.log(date + ": The file was saved: ", filename);
});
console.log("This is invoked before the callback is invoked.");
}
הקלוז'ר של ה callback שהגדרנו עבור פעולת הכתיבה, כולל לא רק את הקוד של הפונקציה אלא גם את המשתנה
date שהוגדר מחוצה לה. כך שהתאריך שיודפס, יהיה התאריך בזמן הקריאה לפונקציה writeFile, ולא התאריך של
זמן ביצוע ההדפסה.
הרכבת קריאות אסינכרוניות
לעתים נדרש לבצע שרשרת של פעולות על מידע.
לדוגמא, קריאת קובץ, עדכון מידע, וכתיבה של התוכן המעודכן לקובץ.
בקריאה סנכרונית, הדבר פשוט:

writeJsonSync(update(readJsonSync(‘a.json’)), ‘a.json’)
בקריאה אסינכרונית זה מורכב יותר, שהרי הקריאה האסינכרונית הינה void. המידע ייקרא רק בהמשך, וייתכנו
בהמשך שגיאות שצריך לטפל בהן.
.callbacks שרשור הפעולות יהיה למעשה שרשור של התגובות לכל פעולה, כלומר שרשור של
לדוגמא: שרשור הפעולות הסינכרוניות f(g(h(x))), ייראה בגרסה האסינכרונית כך:
h(x, (hRes) => {
g(hRes, (gRes) => {
f(gRes, (fRes)=> fRes);
})
});
אם נדרש לטפל בשגיאות, זה ייראה כך:
h(x, (hErr, hRes) => {
if (hErr) {
failCallback(hErr);
} else {
g(hRes, (gErr, gRes) => {
if (gErr) {
failCallback(gErr);
} else {
f(gRes, (fErr, fRes) => {
if (fErr) {
failCallback(fErr);
} else {
fRes;
});
}
})
}
});
ועבור הדוגמא שלנו:
readJson(‘a.json’, (err, res) => {
if (err) …
else
writeJson(‘a.json’, update(res), (err) => {…});
}
const readJSON = (filename, callback) => {
fs.readFile(filename, 'utf8', calback);}
const writeJSON = (filename, map, callback) => {
fs.writeFile(filename, JSON.stringify(map), callback);}

מסורבל משהו...
Promise :נשתמש בעיצוב נוח להרכבת פונקציות אסינכרוניות
Promise
Promise הינו אובייקט עם השדות הבאים:
task – המשימה לביצוע
value – התוצאה של ביצוע המשימה
err – מאחסן את אפיון השגיאה של ביצוע המשימה (אם נכשלה)
handlers – פונקציות לביצוע על תוצאת הפעלת המשימה (התגובות השונות לתוצאה)
then: הפונקציה לביצוע במקרה של הצלחה
catch: הפונקציה לביצוע במקרה של כישלון
state – מצבו הנוכחי של הפרומיס
Pending: המשימה לא התבצעה עדיין
Fulfilled: המשימה בוצעה והסתיימה בהצלחה
Rejected: המשימה בוצעה אך נכשלה
:Promise אורח חייו של
- Pending נוצר במצב
- (node) מתווסף לתור המשימות של הסביבה
- כשמגיע תורו להתבצע (במסגרת ה event loop), מופעלת פונקציית ה task שלו
  - אם הצליחה: מעבר למצב fulfilled, יופעל על התוצאה (השדה value) הנדלר של
(then) ההצלחה
  - אם נכשלה: מעבר למצב rejected, יופעלו על השגיאה (השדה err) ההנדלר של הכישלון
(catch)
:Promise נעצב מחדש את פעולות הקריאה והכתיבה בעזרת ה
קריאה
const readFilePromise = (filename: string) : Promise<string> => {
return new Promise<string>( (resolve, reject) => {
fs.readFile(filename, (err, res) => {
if (err)
reject(err);
else
resolve(res.toString('utf8'));
})

})
}
הבנאי מקבל כפרמטר את תיאור המשימה.
המשימה מוגדרת כפונקציה המקבלת שתי פונקציות, האחת הנדלר לטיפול בהצלחה (הפרמטר resolve), והשניה
.(reject הנדלר לטיפול בכישלון (הפרמטר
במקרה שלנו, קוד המשימה הוא קריאה מקובץ (באופן אסינכרוני, עם פונקציית callback), תוך הפעלת שני
ההנדלרים על תוצאת פעולת הקריאה.
עם הגדרתו, ה Promise מתווסף ל event loop. כאשר יגיע תורו, תבוצע המשימה.
:Promise דוגמא לשימוש ב
const testContent : Promise<string> = readFilePromise('test.json);
testContent
.then((content: string) => console.log("Content: ", JSON.parse(content)))
.catch((err) => console.error(err));
לאחר הגדרת ה Promise אנו מגדירים שני הנדלרים לטיפול בתוצאת הצלחה ולטיפול בכישלון (כמו בדוגמא
המקורית).
כתיבה לקובץ
const writeFilePromise = (filename: string, content: string): Promise<void> => {
return new Promise( (resolve, reject) => {
fs.writeFile(filename, content, (err) => {
if (err)
reject(err);
else
resolve();
})
})
}
כעת ניתן להרכיב את שתי הפעולות האסינכרוניות, על ידי שרשור של ההנדלרים:
const readUpdateWrite = (filename: string) : Promise<void> => {
return readFilePromise(filename)
.then((content) => {
let j = JSON.parse(content);
j.lastModified = new Date(); // update
return writeFilePromise(filename, JSON.stringify(j));
})
.catch((err) => console.error(err));
}
Async, Await
קיים תחביר נוח, syntactic abstraction, לעבודה עם פרומיסים:

// Chain the calls together
const readUpdateWrite = (filename: string): Promise<void> => {
return readFilePromise(filename)
.then((content) => {
let j = JSON.parse(content);
j.lastModified = new Date();
return writeFilePromise(filename, JSON.stringify(j));
})
.catch((err) => console.error(err));
}
שקול ל:
// The async/await version
const readUpdateWrite_async = async (filename: string): Promise<void> => {
try {
const content = await readFilePromise(filename);
let j = JSON.parse(content);
j.lastModified = new Date();
return writeFilePromise(filename, JSON.stringify(j));
}
catch (err) {
return console.error(err);
}
}
await כלומר כל מה שמופיע אחרי ה .readUpdateWrite מומרת תחבירית ל readUpdateWrite_async ליתר דיוק
יוגדר כפונקציית ה then של ה Promise, וכל מה שמוגדר בתפיסת ה exeption יוגדר כפונקציית ה catch של ה
.Promise
.Promise ותרוץ כשיגיע תורה. היא תמיד מחזירה event loop נוספת ל async פונקציה שהוגדרה כ
:await הערות לגבי
- Await can only be used within the body of an async function.
- Await is followed by a call that produces a Promise (usually an async function)
- Await can throw an exception (corresponding to the fact that the promise that is awaited is
rejected) - it should therefore be wrapped in try/catch construct.
- const x = await <something producing a promise>; <continuation>; is equivalent to: <something
producing a promise>.then((x) => <continuation>);
(Generators) מחוללים ,JavaScript 4.2 קו-רוטינות ב
קו-רוטינה (co-routine) היא פונקציה שניתן לבצע אותה בשלבים. כלומר, במהלך ביצוע גוף הפונקציה ניתן לחזור
באמצע (עם תוצאת ביניים) לשורת הקריאה לפונקציה, ולחזור אליה בהמשך, לאותה נקודה, בקריאה חוזרת.
ב TypeScriptקו-רוטינות מעוצבות בעזרת הממשקים הבאים:
interface Iterator {
next() : IteratorResult;
}
interface IteratorResult {
value : any;

done : boolean;
}
הממשק Iterator מגדיר ביצוע של שלב אחד בפרוצדורה. והממשק IteratorResult מגדיר תוצאה של ביצוע שלב
(done כולל אינדיקציה האם זהו השלב האחרון (הערך (value אחד בפרוצדורה (הערך
באופן זה, אובייקט המממש את הממשק Iterator הינה למעשה קו-רוטינה, כאשר ביצוע כל שלב ניתן על ידי קריאה
.done עד אשר מקבלים ערך אמת בשדה ,next 'ל'מתודה
ב JavaScript קיים תחביר נוח, syntactic sugar, להגדרת קו-רוטינות. לדוגמא:
function* idMaker () {
yield 1;
yield 2;
yield 3;
}
yield שלו מריצה את הקוד עד ה next שכל פעולתת ,Iterator מבנה זה הינו למעשה בנאי שמחזיר אובייקט מטיפוס
.done האחרון יחזיר ערך אמת עבור השדה yield ה .yield הבא, עם תוצאת ביניים בעלת הערך שניתן ל
דוגמא לשימוש בקו-רוטינה הנ"ל:
let cr : Iterator = idMaker();
let ir : IteratorResult = cr.next();
console.log(ir.value); // 1
console.log(ir.done); // false
ir = cr.next();
console.log(ir.value); // 2
console.log(ir.done); // false
ir = cr.next();
console.log(ir.value); // 3
console.log(ir.done); // false
ir = cr.next();
console.log(ir.value); // undefined
console.log(ir.done); // true
במסגרת הגדרת ה Iterator ניתן כמובן להגדיר שדה באובייקט שערכו נשמר:
function* idMaker() {
let index : number = 1;
yield index++;
yield index++;
yield index++;
}

מקרה פרטי של קו-ריטוניות הם generators, המחוללים רשימה של ערכים. ובמובן הרחב יותר, הגדרה של מבנה
נתונים ע"י קוד, כאשר המידע עצמו מיוצר איבר איבר בזמן אמת רק כאשר הוא נדרש
:end ל start דוגמא: קו-רוטינה/ג'נטרטור המייצרים את רשימת המספרים מ
function* range(start, end) {
for (let i = start; i < end; i++)
yield i;
}
ניתן להשתמש ברשימה הנוצרת באופן הבא:
let numList = range(1,4);
while (true) {
ir :IteratorResult = range.next();
if (ir.done)
break;
console.log(ir.value);
}
לא כל כך נוח...
:(syntactic sugar) קיים תחביר נוח עבור תבנית זו
for (let v of range(1,4))
console.log(v);
בעזרת ג'נרטור ניתן להגדיר רשימה אינסופית:
function* naturalNumbers() {
for (let i = 0; ; i++)
yield i;
}
כדי לעבוד עם רשימות אינסופיות, נגדיר ג'נרטור נוסף המחלץ מרשימה אינסופית את מספר האיברים שאנו רוצים
כרגע:
function* take(n, gen) {
for (let x of gen)
if (n <= 0)

return;
n--;
yield x;
}
נדפיס בעזרת מחוללים אלו את שלושת המספרים הטבעיים הראשונים:
for (let n of take (3, naturalNumbers()))
console.log(n); // 0,1,2
יתרון הגדרת רשימה ע"י מחולל:
- ניתן להגדיר רשימה אינסופית
(lazy) איבר ברשימה מיוצר רק כאשר יש בו שימוש -
חסרון:
- לא ניתן לגשת מיד, בגישה ישירה, לאיבר באמצע הרשימה. אי אפשר לחזור אחורה. צריך תחילה לייצר את כל
האיברים לפניו.
נגדיר את פעולת ה Map כג'נרטור המקבל ג'נרטור ופעולה, ומחזיר בכל שלב את האיבר הבא לאחר ביצוע הפעולה
עליו:
function* mapGen(generator, f) {
for (let x of generator) {
yield f(x);
}
}
for (let n of take(4, mapGen(naturalNumbers(), x => x * x))) {
console.log(n); // 0, 1, 4, 9
}
באותו אפן, נגדיר את פעולת ה Filter כג'נרטור המקבל ג'נרטור ופרדיקט, ומחזיר בכל שלב את האיבר הבא שמקיים
את הפרדיקט:
function* filterGen(generator, pred) {
for (let x of generator) {
if (pred(x)) {
yield x;
}
}
}
for (let n of take(4, filterGen(naturalNumbers(), x => (x % 2) === 0))) {

console.log(n); // 0 , 2 , 4 , 6
}
כמו תמיד, ניתן להרכיב את שתי הפעולות יחדיו:
const evenSquares = filterGen(mapGen(naturalNumbers(), x=> x*x), x=> (x % 2) === 0);
for (let n of take(4, evenSquares))
console.log(n); // 0, 4, 16, 36
Continuation Passing Style 4.3

### 4.3.1 מוטיבציה

נתבונן בפרוצדורה fact המממשת את פעולת העצרת (!) על מספר נתון:
(define fact
(lambda (n)
(if (= n 1)
(* n (fact (- n 1))))))
הרצה/חישוב של הפעלת הפרוצדורה, כרוכה בשמירת המצב של הפונקציה הקוראת (ה 'AF' שלה) עד
.(n) שתחזור התוצאה ותמוזג (מכפלה) עם הערך הנוכחי
(fact 4) לדוגמא, עבור
(* 4 (* 3 (* 2 1)))
עד כדי כך, שקריאה ל (fact 1000) תגרום ל Stack Overflow באינטרפרטר שלנו.
בתרגול ראינו מימוש איטרטיבי לפרוצדורה זו, כלומר מימוש עם רקורסיית זנב בלבד:
(define fact-iter
(lambda (n acc)
(if (= n 1)
acc
(fact-iter (- n 1) (* n acc)))))
(define fact
(lambda (n)
(fact-iter (n 1))))
נשים לב, כי בעיצוב איטרטיבי יש קריאה רקורסיבית אך היא הפעולה האחרונה ('רקורסיית זנב'). בניגוד לעיצוב
רקורסיבי בו יש רקורסיות ראש.
עבור מקרים אלו,ניתן לממש אופטימיזציה שנמנעת מלשמור את המצב בזמן הקריאה הרקורסיבית.
הקריאות הרקורסיביות עבור (fact 4) יהיו כעת:
(fact 4)
(fact-iter 4 1)

(fact-iter 3 4)
(fact-iter 2 12)
(fact-iter 1 24)
מטרתנו בסעיף זה: להגדיר שיטה כללית הממירה פרוצדורה עם רקורסיית ראש לפרוצדורה שקולה עם רקורסיית
זנב. ובמקרה הכללי יותר, ממירה פרוצדורה בה יש קריאה לפרוצדורה אחרת שאינה הפעולה האחרונה, לפרוצדורה
שקולה בה כל קריאה לפרוצדורה אחרת הינה הפעולה האחרונה.
השיטה תתבסס על הוספת 'פונקציית המשך' (continuation) כפרמטר לכל פרוצדורה, מעין callback אסינכרוני.
CPS 4.3.2 עיצוב פרוצדורה על ידי
ננסה תחילה לאפיין באופן כללי את התרחיש הבעייתי שבו אנו מעוניינים לטפל.
בהינתן ביטוי (AST) נגדיר:
Head Position
תת-ביטוי נמצא ב Head Position אם נדרש לחשבו ולמזגו עם ערך אחר כדי לחשב את ערכו של הביטוי הנתון.
Tail Position
תת-ביטוי נמצא ב Tail Position אם לאחר חישובו לא נדרש פעולה נוספת לשם חישוב הביטוי הנתון.
לדוגמא:
(if (> x 2)
(* x 3)
x
)
בביטוי הנתון יש שלושה תת-ביטויים:
if כי לאחר חישובו נדרש חישוב נוסף עבור ערך ביטוי ה ,HP נמצא ב (x 2 <)
(* x 3) נמצא ב TP, כי אם נדרש לחשבו זוהי הפעולה האחרונה, לא נדרש לחשב דבר נוסף על מנת למצוא את הערך
if של ביטוי ה
x נמצא ב TP, כי אם נדרש לחשבו זוהי הפעולה האחרונה, לא נדרש לחשב דבר נוסף על מנת למצוא את הערך של
.if ביטוי ה
ניתן לקבוע מראש, עבור כל סוג של ביטוי בשפה, מה סוג ה position של כל אחד מתתי-ביטוייו:
(define var H) לאחר חישוב הערך, נדרש להוסיף את ה binding לסביבה
(if H T T) לאחר חישוב הבדיקה נדרש לבצע חישוב נוסף של אז/אחרת, שהם הפעולות האחרונות
(lambda (v1 … vn) E E E… E) הערך של ה lambda הוא ה closure העוטף אותה. אין צורך לחשב בשלב זה את
TP אם ב HP הביטויים בגוף הפרוצדורה, כך שהם אינם ב
(let ( (v1 H) … (vn H) ) H H ... H T) ערכי המשתנים הלוקאליים, וכן כל הביטויים הראשונים בגוף הלט אינם
הפעולה האחרונה, רק הביטוי האחרון הוא הפעולה האחרונה

(H … H) באפליקציה, לאחר חישוב האופרטור והפרמטרים, נדרש לבצע את ההצבה וחישוב הפרוצדורה
נאמר שביטוי נתון הוא tail form אם לא קיימת באף HP קריאה לפרוצדורת משתמש.
פורמלית:
- כל תתי הביטויים (הישירים) ב HP אינם קריאה לפרוצדורת משתמש (שאינה פרימיטיבית)
- tail form כל תתי הביטויים הם בעצמם
דוגמאות:
- (+ 1 x) is in tail form.
- (* (* x x) (+ x x)) is in tail form (combination of primitive applications).
- (if p x (+ 1 (+ 1 x))) is in tail form.
- (f (+ x y)) is in tail form.
- (+ 1 (f x)) is not in tail form (but (f x) is in tail form) because after (f x) is
computed, the result must be passed to further computation.
- (if p x (f (- x 1))) is in tail form.
- (if (f x) x (f (- x 1))) is not in tail form - because the head call (f x) must be
followed by other calls.
- (lambda (x) (f x)) is in tail form.
- (lambda (x) (+ 1 (f x))) is not in tail form because the sub-expression (+ 1 (f
x)) is not in tail form.
- (lambda (x) (g (f 5))) is not in tail form.
- (let ((a 1) (b 2)) (f (+ a b))) is in tail form
- (let ((a 1) (b 2)) (f (g a b))) is not in tail form
- (let ((a (g 1)) (b 2)) (+ a b)) is not in tail form
tail form המרת פרוצדורה ל
,('return value' הרעיון הכללי: בכל מקרה בו יש קריאה לפרוצדורת משתמש שאינה הפעולה האחרונה (אינה ה
נהפוך אותה להיות הפעולה האחרונה, ע"י ידי הגדרת שאר הקוד כפונקציית ההמשך שלה.
לדוגמא:
(+ (f a) (* a a))

(f$ a
(lambda (res) (+ res (* a a))))
פרוטוקול ההמרה:
בהינתן פרוצדורה:
  - מוסיפים לשם הפרוצדורה המקורית את הסימן $ (קונבנציה)
cont מוספים לפרמטרים של הפרוצדורה המקורית פרמטר נוסף - פונקציית ההמשך o

  - מפעילים על כל ערך מוחזר את פונקציית ההמשך
tail form הוא body-1. כאשר ה
- הערך המוחזר אינו הפעלת פרוצדורת משתמש
נפעיל את פונקציה ההמשך על הערך המוחזר
(define square
(lambda (x) (* x x)))

(define square$
(lambda (x cont) (cont (* x x))))
(define add1
(lambda (x) (+ 1 x)))

(define add1$
(lambda (x cont) (cont (+ 1 x))))
- הערך המוחזר הוא תוצאת הפעלת פרוצדורת משתמש (כלומר זו הפעולה האחרונה)
נקרא לגרסת ה CPS שלה עם פונקציית ההמשך
(define f1
(lambda (x y) (square (+ x y)))
(define f1$
(lambda (x y cont) (square$ (+ x y) cont))
(define f2
(lambda (x y) (add1 (+ x y)))

(define f2$
(lambda (x y cont) (add1$ (+ x y) cont))
tail form אינו body-2. כאשר ה
(define f3
(lambda (x y) (square (add1 (+ x y)))))
- מזהים את המקומות הבעייתיים שבהם יש קריאה לפרוצדורה ב HP (אם יש כמה, נבחר אחת מהן
(נניח את את הקריאה הפנימית ביותר))

- [res מסמנים את תוצאת הפעלתו על ידי פרמטר [נניח
- משאירים את ההפעלה כפעולה האחרונה ומגדירים את שאר הקוד כפונקציית ההמשך שלה
(define f3$
(lambda (x y cont) (add1$ (+ x y) (lambda (res) (square$ res cont)))))
דוגמא נוספת:
(define mult
(lambda (x y) (* x y)))

(define mult$
(lambda (x y cont) (cont (* x y))))
(define f4
(lambda (x y) (mult (square x) (add1 y))))

(define f4$
(lambda (x y cont) (add1$ y (lambda (add1res) (mult$ (square x) add1res cont)))))
(define f4$
(lambda (x y cont) (add1$ y
(lambda (add1res) (square$ x
(lambda (squareres) (mult$ squareres add1res cont)))))
:fact בחזרה לדוגמת ה
(define fact
(lambda (n)
(if (= n 1)
(* n (fact (- n 1))))))

(define fact$
(lambda (n cont)
(if (= n 1)
(cont 1)
(fact$ (- n 1) (lambda (res) (cont (* n res)))))))

נריץ את fact$ עבור החישוב של 2!:
  - יש להגדיר פונקציית המשך ראשונית (קובעת את ה ‘post processing’ על התוצאה
הסופית של 2!)
  - באופן טבעי נבחר פונקציית הזהות (lambda(x) x), כי לא נדרש שום עיבוד מאוחר על
התוצאה.
(fact$ 2 (lambda (x) x))
(fact$ 1 (lambda (res) ((lambda (x) x) (* 2 res)))))))
((lambda (x) x) (* 2 1))))
במובן הרחב ניתן לחשוב על פונקציית CPS כפונקצייה המעבירה ערך במקום להחזיר ערך.
sum-odd-squares :דוגמא נוספת
(define sum-odd-squares
(lambda (tree)
(if (empty? tree)
(if (not (list? tree))
(if (odd? tree) (square tree) 0)
(+ (sum-odd-squares (car tree)) (sum-odd-squares (cdr tree)))))))

(define sum-odd-squares$
(lambda (tree cont)
(if (empty? tree)
(cont 0)
(if (not (list? tree))
(if (odd? tree) (square$ tree cont) (cont 0))
(+ (sum-odd-squares (car tree))
(sum-odd-squares (cdr tree)))))))

(define sum-odd-squares$
(lambda (tree cont)
(if (empty? tree)
(cont 0)
(if (not (list? tree))
(if (odd? tree) (square$ tree cont) (cont 0))
(sum-odd-squares$ (car tree)
(lambda (sum-odd-squares-car-res)
(+ sum-odd-squares-car-res (sum-odd-squares (cdr tree))) ))))))


(define sum-odd-squares$
(lambda (tree cont)
(if (empty? tree)
(cont 0)
(if (not (list? tree))
(if (odd? tree) (square$ tree cont) (cont 0))
(sum-odd-squares$ (car tree)
(lambda (sum-odd-squares-car-res)
(sum-odd-squares$ (cdr tree)
(lambda (sum-odd-square-cdr-res)
(cont (+ sum-odd-square-car-res sum-odd-square-cdr-res))))))))))
map, filter :לפונקציות מסדר גבוה CPS גרסת
(define map
(lambda (f lst)
(if (empty? lst)
lst
(cons (f (car lst))
(map f (cdr lst))))))

(define map$
(lambda (f$ lst cont)
(if (empty? lst)
(cont lst)
(f$ (car lst)
(lambda (f-res)
(cons f-res (map f (cdr lst))) )))))

(define map$
(lambda (f$ lst cont)
(if (empty? lst)
(cont lst)
(f$ (car lst)
(lambda (f-car-res)
(map$ f$ (cdr lst)
(lambda (map-f-cdr-res)
(cont (cons f-car-res map-f-cdr-res)))))))))
(define filter
(lambda (pred? lst)

(if (empty? lst)
lst
(if (pred? (car lst))
(cons (car lst) (filter pred? (cdr lst))))
(filter pred? (cdr lst))))))

(define filter$
(lambda (pred?$ lst cont)
(if (empty? lst)
(cont lst))
(pred?$ (car lst)
(lambda (pred-res)
(if (pred-res)
(cons (car lst) (filter pred? (cdr lst))))
(filter pred? (cdr list))))))))

(define filter$
(lambda (pred?$ lst cont)
(if (empty? lst)
(cont lst))
(pred?$ (car lst)
(lambda (pred-res)
(filter$ pred?$ (cdr list)
(lambda (filter-cdr-res)
(if (pred-res)
(cont (cons (car list) filter-cdr-res)))))
(cont filter-cdr-res)))))))))
הגדרת יחס שקילות בין פרוצדורה לגרסת ה CPS שלה:
ראינו כבר הגדרת יחס שקילות עבור שתי פונקציות.
יש להגדיר מחדש יחס זה, עבור פונקציה וגרסת ה CPS שלה (שהרי לגרסת ה CPS יש פרמטר נוסף של פונקציית
ההמשך).
(f$ x …x cont) שלה CPS וגרסת ה ,(f x …x ) בהינתן פונקציה
1 n 1 n
נאמר כי הפונקציות שקולות, אם לכל סדרת אופרנדים a1,…,an ופונקציית המשך המשך k מתקיים:
(f$ a1…an k) = (k (f a1…an))
(n שקולות (אפשר להוכיח באינדוקציה על $fact, fact
בפרט:
(fact$ 3 square) = (square (fact 3))

מימוש אינטרפרטר המבצע כל קריאה לפרוצדורה כפעולה אחרונה
,(ProcExp) של פרוצדורה AST המקבלת (TS מאחר ומדובר בהמרה תחבירית, ניתן היה לממש פרוצדורה (ב
ומחזירה AST של גרסת ה CPS שלה.
אנו נבחר בדרך אחרת: נממש את התנהגות ה CPS בקוד של האינטרפרטר עצמו.
כלומר, נעצב את האינטרפרטר כך שהוא אף פעם לא קורא לפרוצדורה כשהיא לא הפעולה האחרונה.
evalCont הפרוצדורה ,L6-eval.ts :קוד
מימוש אופטימיזציית קריאות הזנב
האינטרפרטר/הקומפיילר של שפות תכנות שונות כולל אופטימיזציה המבטיחה שאם יש קריאה לפרוצדורה שהיא
הפעולה האחרונה, אזי לא נשמר המצב של הפונקציה הקוראת.
זו אינה ממומשת ב JavaScript (הסיבה המרכזית היא שהאופטימיזציה מקשה על debuging – רכיב מובנה בכל
(browser
כלומר, בכל מקרה יישמר המצב של הפונקציה הקוראת.
.L6 גם באינטרפרטר של Stack Overflow יגרום ל (fact$ 1000 (lambda (x) x)) מבחינה מעשית, חישוב הקריאה
כדי להתמודד עם זאת, מעצב את קוד האינטרפרטר בתבנית עיצוב המדמה את קוד האסמבלי: לולאה השולפת כל
פעם משימה מתור, שולפת את הפעולה הבאה לביצוע, טוענת את הרגיסטירים (משתנים גלובליים בסימולציה
שלנו), מבצעת את הפעולה, ושמה את הערך המוחזר ברגיסטר מוסכם (משתנה גלובאלי במקרה שלנו):
- נגדיר משתנים 'גלובליים' עבור המידע הקיים בדרך כלל ב AF: הפרמטרים של הפרוצדורה
המופעלת כעת, הערך המוחזר שלה, כתובת החזרה (לאיזו שורה בקוד צריך לחזור בתום
הפרוצדורה)
- pc כל קריאה לפרוצדורה תיפתח בהשמת הפרמטרים למשתנים אלו, וכן לכתובת החזרה (ה
הנוכחי)
- בתום כל פרוצדורה נעתיק את הערך החוזר מהמשתנה שלו.
L7c-eval.ts :קוד
Success-Fail Continuations
ניתן להרחיב את הקונספט של פונקציות ההמשך, לתבנית עיצוב בה פרוצדורה מקבלת שתי פונקציות המשך:
האחת להפעלה במקרה של הצלחה (עיבוד מאוחר של תוצאת הפרוצדורה, בדומה להנדלר ה then בתבנית ה
(Promise בתבנית ה catch והשניה להפעלה במקרה של כישלון (בדומה לפונקציית ה ,(Promise
דוגמאות:
1. סכימת מספרים ברשימה הטרוגנית
(3 1 2)‘
a 3) 2)‘
error
;; Signature: sumlist(lst)

;; Purpose: Sum the elements of a number list.
;; If the list includes a non-number element -- produce an error.
;; Type: [List -> Number union Error]
(define sumlist
(lambda (lst)
(if (empty? lst)
(if (number? (car lst))
(+ (car lst) (sumlist (cdr lst)))
(make-error "non numeric value!")))
)
)
גרסת CPS, עם פונקציות המשך להצלחה ולכישלון:
(define sumlist$
(lambda (lst succ-cont fail-cont)
(if (empty? lst)
(succ-cont 0)
(if (number? (car lst))
(sumlist$ (cdr lst)
(lambda (sum-cdr)
(succ-cont (+ (car lst) sum-cdr)))
fail-cont))
(fail-cont)))
)
)
(define sumlist2
(lambda (lst)
(sumlist$ lst
(lambda (x) x)
(lambda () (make-error "non numeric value!")))
)
)
2. חיפוש המספר הזוגי השמאלי ביותר בעץ
;; Signature: leftmost-even(tree)
;; Purpose: Find the leftmost even leaf of an unlabeled tree whose leaves are labeled by
numbers.
;; If no leaf is even, return #f.
;; Type: [List<Number> -> Number union Boolean]
;; Examples: (leftmost-even ’((1 2) (3 4 5))) ==> 2
;; (leftmost-even ’((1 1) (3 3) 5)) ==> #f
(define leftmost-even
(lambda (tree)
(if (eq? tree ‘()) #f)

(if (not (list? tree)) ;; leaf?
(if (even? tree) tree #f))
(let ((res-first (leftmost-even (car tree)))) ;;; Composite tree
(if res-first
res-first
(leftmost-even (cdr tree))))))
)
)
גרסת CPS עם פונקציות המשך להצלחה ולכישלון
(define leftmost-even$
(lambda (tree succ-cont fail-cont)
(if (eq? tree ‘())
(fail-cont)
(if (not (list? tree))
(if (even? tree) (succ-cont tree) (fail-cont))
; Composite tree
(leftmost-even$ (car tree)
succ-cont
(lambda () (leftmost-even$ (cdr tree) succ-cont fail-cont)))))))
(define leftmost-even2
(lambda (tree)
(leftmost-even$ tree
(lambda (x) x)
(lambda () #f))))
L-4.4 רשימות עצלות וקו-רוטינות ב
כזכור, ראינו כי ניתן להגדיר ב JS מחוללים (generators) המייצרים בפרט רשימות אינסופיות (כמו
המחולל naturalNumbers המייצר את רשימת המספרים השלמים, מספר אחרי מספר ע"פ
דרישה). כמו כן כי המחולל הוא מקרה פרטי של קונספט הקו-רוטינה – ביצוע פרוצדורה שלב אחרי
(Iterator של ממשק ה next שלב (מתודת ה
(2L החל מ) L ניישם שני דברים אלו בשפה
(Lazy Lists) 4.4.1 רשימות עצלות
רשימה עצלה מייצגת רשימה כזוג של האיבר הבא, וקוד המשך לייצור שאר איברי הרשימה.
Lzl(T) = Empty-Lzl | Pair(T, (Empty  Lzl(T)))
:ADT

(define empty-lzl? empty?)
(define empty-lzl '())
(define cons-lzl cons)
(define head car)
(define tail
(lambda (lzl)
( (cdr lzl) )
)
)
דוגמאות:
(n 1. רשימת המספרים השלמים (החל ממספר נתון
;; Signature: integers-from(n)
;; Type: [number -> LZL(number)]
(define integers-from
(lambda (n)
(cons-lzl n (lambda () (integers-from (+ n 1)))
(define numbers (integers-from 0))
numbers
‘(0 . (lambda() (integers-from 1)))
(head numbers)
(tail numbers)
‘(1 . (lambda() (integers-from 2)))
(head (tail numbers))
(tail (tail numbers))
‘(2 . (lambda() (integers-from 3)))
(head (tail (tail numbers)))
2. ייצור n האברים הראשונים ברשימה עצלה נתונה
;; Signature: take(lz-lst,n)
;; Type: [LzL*Number -> List]
;; If n > length(lz-lst) then the result is lz-lst as a List
(define take
(lambda (lz-lst n)
(if (or (= n 0) (empty-lzl? lz-lst))
empty-lzl

(cons (head lz-lst)
(take (tail lz-lst) (- n 1))))))
(take numbers 2)
‘(0 1)
3. החזרת המספר ה-nי ברשימה עצלה נתונה
; Signature: nth(lz-lst,n)
;; Type: [LzL<T>*Number -> T]
;; Pre-condition: n < length(lz-lst)
(define nth
(lambda (lz-lst n)
(if (= n 0)
(head lz-lst)
(nth (tail lz-lst) (- n 1)))))
(nth numbers 2)
4. רשימה עצלה של 1ים
(define ones (cons-lzl 1 (lambda () ones)))
!n 5. רשימה עצלה של
(define facts-gen
(lambda ()
(letrec ((loop (lambda (n fact-n)
(cons-lzl fact-n
(lambda () (loop (+ n 1)
(* (+ n 1) fact-n)))))))
(loop 1 1))))
>(fact-gen)
(loop 1 1)
(cons-lzl 1 (lambda () (loop 2 2)))
>(head (fact-gen))
>(tail (fact-gen))
(loop 2 2)
(cons-lzl 2 (lambda () (loop 3 6)))
>(haed (tail (fact-gen)))
>(tail (tail (fact-gen)))
(loop 3 6)

(cons-lzl 6 (lambda () (loop 4 24)))
> (take (facts-gen) 6)
'(1 2 6 24 120 720)
‘(1 . (lambda () (loop 2 2)))
‘(2 . (lambda () (loop 3 6)))
‘(6 . (lambda () (loop 4 24)))
…
6. בניית רשימות עצלות מרשימות עצלות קיימות
;; Signature: lz-lst-add(lz1,lz2)
;; Type: [LzL(Number) * LzL(Number) -> LzL(number)]
(define lzl-add
(lambda (lz1 lz2)
(cond ((empty-lzl? lz1) lz2)
((empty-lzl? lz2) lz1)
(else (cons-lzl (+ (head lz1) (head lz2))
(lambda () (lzl-add (tail lz1) (tail lz2))))))))
(define integers
(cons-lzl 0
(lambda () (lzl-add ones integers))))
0,
11111111…
+
0123….
(define fib-numbers
(cons-lzl 0
(lambda () (cons-lzl 1
(lambda ()
(lzl-add (tail fib-numbers) fib-numbers))))))
0,
1,
1,1,2,3…
+
0,1,1,2…
(take fib-numbers 7)
--> ’(0 1 1 2 3 5 8)

7. פעולות על רשימות עצלות
;; Signature: lz-lst-append(lz1, lz2)
;; Type: [Lzl(T) * Lzl(T) -> Lzl(T)]
(define lzl-append
(lambda (lz1 lz2)
(if (empty-lzl? lz1)
lz2
(cons-lzl (head lz1)
(lambda () (lzl-append (tail lz1) lz2))))))
במימוש זה, אם הרשימה הראשונה היא אינסופית, לא נגיע לעולם לאיבר הראשון ברשימה השניה:
> (take (lzl-append (integers-from 100) fibs) 7)
’(100 101 102 103 104 105 106)
הפרוצדורה interleave משרשרת לסירוגין אברים משתי הרשימות:
;; Signature: interleave(lz1, lz2)
;; Type: [Lzl(T) *Lzl(T) -> Lzl(T)]
(define interleave
(lambda (lz1 lz2)
(if (empty-lzl? lz1)
lz2
(cons-lzl (head lz1)
(lambda () (interleave lz2 (tail lz1)))))))
> (take (interleave (integers-from 100) fibs) 10)
’(100 0 101 1 102 1 103 2 104 3 105 5)
8. פונקציות מסדר גבוה על רשימות עצלות
;; Signature: lzl-map(f, lz)
;; Type: [[T1 -> T2] * Lzl(T1) -> Lzl(T2)]
(define lzl-map
(lambda (f lzl)
(if (empty-lzl? lzl)
lzl
(cons-lzl (f (head lzl))
(lambda () (lzl-map f (tail lzl)))))))
;; Signature: lz-lst-filter(p,lz)
;; Type: [[T -> Boolean] * Lzl(T) -> LzL(T)]
(define lzl-filter
(lambda (p lzl)
(if (empty-lzl? lzl)
lzl

(if (p (head lzl))
(cons-lzl (head lzl) (lambda () (lzl-filter p (tail lzl))))
(lzl-filter p (tail lzl))))))
9. רשימה עצלה של המספרים הראשוניים
(define prime?
(lambda (n)
(letrec ((iter (lambda (lz)
(cond ((> (sqr (head lz)) n) #t)
((divisible? n (head lz)) #f)
(else (iter (tail lz)))))))
(iter primes))))
(define primes
(cons-lzl 2 (lambda () (lzl-filter prime? (integers-from 3)))))
(take primes 6)
--> ’(2 3 5 7 11 13)
[גרסה יעילה יותר הנמנעת מחישובים מיותרים – חומר קריאה
The second definition we present avoids the redundancy of the computation above. It implements the
sieve algorithm. The lazy-list of primes can be created as follows:
Start with the integers lazy-list: [2,3,4,5,....].
Select the first prime: 2.
Filter the current lazy-list from all multiples of 2: [2,3,5,7,9,...]
Select the next element on the list: 3.
Filter the current lazy-list from all multiples of 3: [2,3,5,6,11,13,17,...].
i-th step: Select the next element on the list: k. Surely it is a prime, since it is not a multiplication of any
smaller integer.
Filter the current lazy-list from all multiples of k.
All elements of the resulting lazy-list are primes, and all primes are in the resulting lazy-list.
;; Signature: sieve(lzl)
;; Type: [Lzl(Number) -> Lzl(Number)]
(define sieve
(lambda (lzl)
(cons-lzl (head lzl)
(lambda ()
(sieve (lzl-filter (lambda (x) (not (divisible? x (head lzl))))
(tail lzl)))))))
(define primes1 (sieve (integers-from 2)))
(take primes1 7)
--> ’(2 3 5 7 11 13 17)
[


### 4.4.2 מימוש קו-רוטינות (co-routines) בעזרת רשימות עצלות

1. מבנה נתונים
ניתן להשתמש בקונספט של רשימות עצלות, כדי להגדיר קו-רוטינות, כלומר פרוצדורה
המתבצעת שלב אחרי שלב.
הרעיון הכללי: קו-רוטינה תהיה רשימה עצלה, שהאבר הראשון שלה הוא ביטוי שערכו הוא
הערך המוחזר מהשלב הראשון, וקוד ההמשך יבצע את שאר השלבים (כלומר, הוא יהיה
פונקציה המחזירה זוג של ביטוי שערכו הוא הערך המוחזר מהשלב השני ופונקציית המשך).
.done‘ פונקציית ההמשך של השלב האחרון תחזיר
בנאי: הפרוצדורה yield - מקבלת את תוצאת השלב הנוכחי ואת פונקציית ההמשך המקודדת
את השלבים הבאים, ומחזירה אותם כ 'Iterator' - זוג של תוצאת השלב הנוכחי ופונקציית
המשך המקודדת את השלבים הבאים.
(define yield
(lambda (step cont-steps)
(cons-lzl step cont-steps)))
'מתודות':
הערך של השלב הנוכחי/האחרון
(define iter->value
(lambda (iter)
(if (iter->done? iter)
iter
(car iter))))
(define iter->done?
(lambda (iter)
(eq? iter 'done)))
(define iter->next
(lambda (iter)
(if (iter->done? iter)
iter
(let ((cont (cdr iter)))
(if (eq? cont 'done)
cont
(cont))))))
co-routine 2. הגדרת

function* idMaker () {
yield 1;
yield 2;
yield 3;
}
let cr : Iterator = idMaker();
(define cr
(yield 1
(lambda ()
(yield 2
(lambda ()
(yield 3
'done)))))))
co-routine 3. שימוש ב
let ir : IteratorResult = cr.next();
console.log(ir.value); // 1
console.log(ir.done); // false
ir = cr.next();
console.log(ir.value); // 2
console.log(ir.done); // false
ir = cr.next();
console.log(ir.value); // 3
console.log(ir.done); // false
ir = cr.next();
console.log(ir.value); // undefined
console.log(ir.done); // true
(iter->value cr)
(iter->done? cr)
#f
(iter->value (iter->next cr))
(iter->done? cr)
#f
(iter->value (iter->next (iter->next cr)))
(iter->value (iter->next (iter->next (iter->next cr))))
‘done

הפרוצדורה iter->take מחזירה את התוצאה של n השלבים הראשונים של איטרטור נתון:
;; Purpose: return the first n elements generated by an iterator as a list.
;; Type: [Iterator(T) * number -> List(T)]
;; Returns a list of up to n elements - can be less if the generator is done before.
;; On a done iterator, returns an empty list.
(define iter->take
(lambda (iter n)
(if (or (= n 0) (iter->done? iter))
‘()
(cons (iter->value iter) (iter->take (iter->next iter) (- n 1)))
)
)
)
;; Iterative version with accumulator
(define iter->take
(lambda (iter n)
(letrec ((loop (lambda (iter n res-lst)
(if (= n 0)
res-lst
(if (iter->done? iter)
res-lst
(loop (iter->next iter)
(- n 1)
(concat res-lst (iter->value iter))))))))
(loop iter n ‘()))))
(iter->take cr 2)
‘(1 2)
5. תכנות לוגי
.(L1-L5 עד כה עסקנו בעיקר בדגם אחד של שפות תכנות – שפות פונקציונאליות (ואף מימשנו חמש שפות
בפרק זה, נתוודע לדגם אחר של שפות תכנות (אותו הזכרנו כבר בשיעור המבוא) – שפות לוגיות.
במסגרת זו נגדיר שתי שפות, האחת (שפה לוגית רציונלית) שאינה Turing-complete, והשניה (שפה לוגית) שכן.
בדומה לשפות ה -L שהיו תת-שפה של שפה אמיתית (scheme) אך כתבנו להן אינטרפרטר משלנו, גם השפות
הלוגיות שנגדיר הן תת-שפה של שפה אמיתית (Prolog) וגם במקרה זה נכתוב אינטרפרטר בעצמנו, משלנו (נכתוב
.(L5-אותו ב
כהרגלנו, נתמקד בתחביר ובסמנטיקה של השפה הלוגית.

## 5.1 שפה לוגית רלציונית


### 5.1.1 תחביר

השפה הלוגית הרציונלית מורכב מביטויים ונוסחאות (יחסים בין ביטויים).

.(rules) או מורכבות – חוקים ,(facts) הנוסחאות יכולות להיות אטומיות - עובדות
ביטוי יכול להיות סמל (מתחיל באות קטנה), או משתנה (מתחיל באות גדולה או ב '_')
abraham, computer :ניתן לחשוב על הסמלים כמייצגים ישויות בעולם
המשתנים, כמו כל משתנה בשפת תכנות, מייצגים ערך כלשהו שעשוי להתקבל בהמשך, כלומר סמל מסוים:
Person, _Device
.true עובדה מתארת יחס בוליאני בין ביטויים. יחס שערכו הוא
לדוגמא:
parent(abraham, isaac).
male(abraham).
female(sara).
female(hagar).
parent(abraham, ishmael).
parent(sara,isaac).
parent(hagar, ishmael).
תוכנית לוגית מורכבת מביטויים ונוסחאות, ומשאילתא עליהם:
?- parent(hagar, ishmael)
true
?- parent(ishmael, hagar)
false
האופן שבו מתבצע ההסק, או המעבר משאילתא לערך, מוגדר על ידי הסמנטיקה של השפה. נעסוק בכך בהמשך
(קשור למושג היוניפיקציה שפגשנו כבר בפרק על הטיפוסים).
?- parent(abraham, X)
X = isaac
X = ishmael
?- parent(X, isaac)
X = abraham
X = sara
?- parent(X, Y)
X = abraham, Y = isaac
X = sara, Y = isaac
X = abraham, Y = ishmael
X = hagar, Y = ishmael
במקרה זה, הערך המוחזר הוא הצבות המשתנים שעבורן השאילתא תהיה בעלת ערך אמת.
?-parent(ishmael, X)
false

אם נוסיף לתכנית את העובדה
parent(ishmael, nevayot).
אז נקבל עבור אותה שאילתא:
?-parent(ishmael, X)
X = nevayot
מי הם ההורים של ישמעאל?
?- parent(X, ishmael), parent(Y, ishmael)
X = hagar, Y = hagar
X = abraham, Y = abraham
X = abraham, Y = hagar
X = hagar, Y = abraham
אם רוצים ש X ו Y יהיו שונים:
?- parent(X, ishmael), parent(Y, ishmael), X \= Y
X = abraham, Y = hagar
X = hagar, Y = abraham
אם רוצים 'אבא' ו'אמא':
?- parent(X, ishmael), male(X) , parent(Y, ishmael), female(Y)
X = abraham, Y = hagar
האם יש בן של שרה שהוא הורה של מישהו אחר?
?- parent(sara, X), parent(X,Y)
false
נוסיף את הבנים של יצחק לאוסף העובדות:
parent(isaac,jacob).
parent(isaac,esav).
?- parent(sara, X), parent(X,Y)
X = isaac, Y = jacob
X = isaac, Y = esav
חוקים קובעים יחס מורכב יותר בין ביטויים. ניתן לחשוב עליהם כמו 'כללי הסק'.
לדוגמא: חוק המגדיר את יחס ה'אבהות' ויחס ה'אימהות' (שאינם מוגדרים במפורש על ידי העובדות, אך ניתן
להסיקן בהתאם ל'כוונת המחוקק')
father(Dad, Child):- parent(Dad,Child), male(Dad).
mother(Mom, Child):- parent(Mom,Child), female(Mom).
משמעות החוק (המכונה גם 'פרוצדורה') היא: לכל המשתנים האפשריים בחוקDad/Mom, Child) בדוגמא שלנו),
אם מתקיים ה RHS (המכונה body) אז ה LHS (המכונה Head) נכון / ערכו אמת.

.true שלו הוא RHS הערה: נשים לב לכך, כי עובדה היא למעשה חוק שה
parent(hagar, ishmael).

parent(hagar,ishmael):-true.
נוסיף כמה עובדות:
parent(rivka, jacob).
parent(rivka, esav).
female(rivka).
יש למצוא אמא של שני ילדים:
?-mother(M,C1), mother(M,C2), C1 \= C2
M = rivka, C1 = jacob, C2 = esav
M = rivka, C1 = esav, C2 = jacob
נגדיר חוק נוסף (ואחרון בשלב זה) המגדיר את יחס הורה קדמון ויוצאי חלציו:
ancestor(A, D):- parent(A,D).
ancestor(A, D):- parent(A, Person), ancestor(Person, D).
מיהם צאצאיו של אברהם:
?-ancestor(abraham, D)
D = isaac
D = ishmael
D = jacob [Person = isaac]
D = esav [ Person = isaac]
D = nevayot [ Person = ishmael]
מיהם הוריו הקדמונים של עשו?
?-ancestor(A, esav)
A = isaac
A = rivka
A = abraham [Person = isaac]
A = sara [Person = isaac]
שאלה: מה היה קורה אם היינו הופכים את סדר החוקים, כלומר ממקמים את החוק של מקרה הקצה אחרי החוק
השני?
ancestor(A, D):- ancestor(Person, D), parent(A, Person).
ancestor(A, D):- parent(A,D).
נראה בהמשך, כי אנו עשויים להיקלע ללולאה אינסופית.


### 5.1.2 סמנטיקה (אופרציונאלית)

יש להגדיר כיצד הופכת השאילתא לערך (לתשובה / הצבה)
5.1.2.1 תשתית: יוניפיקציה
1. הגדרות (תזכורת)
(Substitution) הצבה
אוסף של זוגות, כאשר האיבר הראשון בכל זוג הוא משתנה לוגי, והשני ביטוי לוגי (תחת האילוץ שהמשתנה
משמאל לא מופיע בביטוי מימין)
לדוגמא:
{ X = abraham, Z = isaac }
{X = abraham, Y = Y } Error
(substitution application) הפעלת הצבה
בפעולה זו אנו מפרשים נוסחה לוגית נתונה לאור הצבה קיימת: החלפת משתנים בנוסחה המוגדרים
בהצבה, על ידי הצבת ה RHS שלהם בנוסחה.
parent(X,Y) ◦ { X = abraham, Y = isaac } = parent(abraham, isaac)
(substitution combination) הרכבת הצבות
S1,S2 נתונות שתי הצבות
S1 ∘ S2 :יש להרכיב אותן להצבה אחת
כזכור, העיקרון הכללי: לוקחים כבסיס את ההצבה הראשונה (1S), ומפרשים אותה ע"פ ההצבה השניה
(2S), כל עוד זה לא סותר.
- 1S 2 עלS הפעלת
- 1S שלהן אינו מוגדר ב LHS 2 שהS הוספת הזוגות ב
- X=X הסרת חוקי זהות
∘
{ X = Y, Z = V } { Y = abraham, D = issac, Z = X} = { X = abraham, Z = V, Y = abraham, D = isaac}
ספציפיות
נאמר כי נוסחה אטומית (כלומר לא חוק שלם / כלל הסק עם head ו body) 'A ספציפית יותר מנוסחה
’A ∘ S = A :כך ש S אם יש הצבה ,A אטומית
כלומר, 'A היא פירוש מסוים של A על פי תרחיש/הצבה מסוים/מת.
לדוגמא:

A = parent(X,Y)
A’ = parent(abraham, Y)
’A ∘ { X = abraham } = A :כי הוא פרשנות מסוימת שלו, ופורמאלית A ספציפי יותר מ A'
(unifier) מאחד
A ∘ S = A’ ∘ S :הוא הצבה ההופכת אותם לשווים ’A,A של שתי נוסחאות אטומיות S המאחד
לדוגמא:
A = parent(X,Z)
A’ = parent(abraham, Y)
S1 = { X = abraham, Y = isaac, Z = isaac}
S2 ={ X = abraham, Y = Z }
S1 ו S2 הם מאחדים של A ו 'A, כאשר S2 כללי יותר.
.S2 במקרה שלנו – MGU המאחד הכללי ביותר מכונה כזכור
2. אלגוריתם למציאת ה MGU – יוניפיקציה
נתונים שני ביטויים, יש למצוא את המאחד הכללי ביותר, כלומר את התנאים הבסיסיים ביותר (=ההצבה הכללית
ביותר) ההופכים אותם לשווים.
נגדיר משוואה של שני הביטויים, ונפעיל את אלגוריתם פתרון המשוואות מהפרק על הטיפוסים.
דוגמא: יש לאחד את הביטויים
p(X,a,X,W)
p(Y,Y,Z,Z)
= (p(Y,Y,Z,Z) p(X,a,X,W :ניצור משוואה
ונריץ את אלגוריתם פתרון המשוואות:
אתחול
[ = (p(Y,Y,Z,Z) p(X,a,X,W ] :אוסף המשוואות
הצבה: {}
= (p(Y,Y,Z,Z) p(X,a,X,W :בחירת משוואה מהאוסף
= (p(Y,Y,Z,Z) p(X,a,X,W :פרשנות' המשוואה על ידי הפעלת ההצבה הנוכחית על שתי אגפיה'
'מקרה ג' – שני האגפים הם ביטויים מורכבים בעלי אותו מבנה (אותו פרדיקט, אותו מספר פרמטרים)
פירוק למשוואת קטנות יותר

[X=Y, Y=a, X=Z, W=Z ] :אוסף המשוואות
הצבה: {}
X = Y :בחירת משוואה מהאוסף
X = Y :פרשנות' המשוואה על ידי הפעלת ההצבה הנוכחית על שתי אגפיה'
'מקרה ב' – אחד הצדדים הוא משתנה לוגי
{X=Y} = {X=Y} ∘ {} :הוספת המשוואה להצבה
[Y=a, X=Z, W=Z] :אוסף המשוואות
{ X=Y } :הצבה
Y = a :בחירת משוואה מהאוסף
Y=a :פרשנות' המשוואה על ידי הפעלת ההצבה הנוכחית על שתי אגפיה'
'מקרה ב' – אחד הצדדים הוא משתנה לוגי
{X=Y } ∘ {Y=a} = {X=a, Y=a } :הוספת המשוואה להצבה
[X=Z, W=Z] :אוסף המשוואות
{X=a, Y=a} :הצבה
X = Z :בחירת משוואה מהאוסף
a=Z :פרשנות' המשוואה על ידי הפעלת ההצבה הנוכחית על שתי אגפיה'
'מקרה ב' – אחד הצדדים הוא משתנה לוגי
{X=a, Y=a } ∘ {Z=a} = {X=a, Y=a, Z = a } :הוספת המשוואה להצבה
[W=Z] :אוסף המשוואות
{X=a, Y=a, Z=a} :הצבה
W = Z :בחירת משוואה מהאוסף
W=a :פרשנות' המשוואה על ידי הפעלת ההצבה הנוכחית על שתי אגפיה'
'מקרה ב' – אחד הצדדים הוא משתנה לוגי
{X=a, Y=a, Z=a } ∘ {W=a} = {X=a, Y=a, Z = a, W=a } :הוספת המשוואה להצבה
אוסף המשוואות: []
{X=a, Y=a, Z=a, W=a} :הצבה
{X=a, Y=a, Z=a, W=a} הוא ההצבה (mgu) המאחד הכללי ביותר
5.1.2.2 תיאור אלגוריתם חישוב השאילתא
נתונה תוכנית הכוללת אוסף נוסחאות (עובדות, כללי הסק) ושאילתא.
יש למצוא את הצבות המשתנים בשאילתא ההופכות אותה לערך אמת.
לדוגמא

נגדיר חוק חדש:
son(X,Y) :- parent(Y,X), male(X).
נוסיף את העובדות הבאות:
parent(jacob, josef).
parent(jacob, dan).
parent(jacob, dina).
male(josef).
male(dan).
female(dina).
יש לחשב את השאילתה:
?- son(S, jacob)
אנו מצפים שהאלגוריתם יתן שתי תשובות/הצבות אפשריות:
{ S = josef }
{ S = dan }
הרעיון הכללי:
- נעבור על כל חלק של השאילתא (במקרה שלנו יש רק אחד son(S, jacob)), כל חלק שכזה מכונה
goal, ועבור כל חלק נמצא את התנאים/ההצבות שהופכות אותו לערך true. ואחר כך נרכיב יחדיו
את ההצבות של כל חלק, כדי לקבל את התנאים לערך אמת עבור השאילתא כולה.
- מציאת ההצבה ההופכת כל חלק/goal לערך אמת:
  - נעבור על כל החוקים הרלבנטיים עבור ה goal הנתון, כלומר כל החוקים שקיימת הצבה
המאחדת את ה LHS שלהם עם ה goal, ונחליף את ה goal ב RHS שלהם.
- במהלך מציאת התשובה, לא נמצא רק את ההצבה הנדרשת, אלא גם נקודד את הדרכים השונות
לפיתרון, ע"י בניית מבנה נתונים המכונה 'עץ הוכחה'.
תשתית לאלגוריתם
(goals 1. יש לקבוע את הסדר בו עוברים על חלקי השאילתא השונים (על ה
הפונקציה Gsel מקבלת שאילתא, כלומר סדרת goals, ומחזירה את ה goal הבא לפיתוח.
לדוגמא:
?- parent(X,jacob), female(X)
Gsel([parent(X,jacob), female(X)]) = parent(X,jacob)
2. יש לקבוע את הסדר בו בוחרים את החוקים מהתוכנית
הפונקציה Rsel מקבלת goal ותוכנית, ומחזירה את אוסף החוקים הרלבטיים ל goal באופן ממוין, כאשר כל חוק ניתן
יחד עם ההצבה המתאימה (כלומר יד עם התנאים שבהם הוא מתאים ל goal ע"פ היוניפיקציה)
Rsel( son(S, jacob), Program ) = [ <son(X,Y):-parent(Y,X),male(X) , { S=X, Y=jacob} > ]

3. מבנה הנתונים של עץ ההוכחה
כזכור, האלגוריתם לא רק מוצא את ההצבות ההופכות את השאילתא לערך אמת, אלא גם מתאר את הדרך
על ידי 'עץ הוכחה'.
קודקודים: כל קודקוד מציין שאילתא (וכן סימון מה ה goal הבא בשאילתא זו לפיתוח). בתחילת האלגוריתם
יהיה קודקוד אחד, השורש, המייצג את שאילתת המשתמש/ת, בהמשך תפורק שאילתא זו לשאילתות
פשוטות יותר תוך יצירת קודקודים נוספים המייצגים אותן.
צלעות: כל צלע מכוונת מייצגת חוק לפיתוח השאילתא (ממנה הצלע יוצאת) לשאילתא חדשה ופשוטה יותר
(הקודקוד אליה הצלע מגיעה). הצלע תכלול גם את ההצבה שעל פיה נבחר החוק.
פעולות:
make_node(query)
התווית כוללת את השאילתא
add_branch(node, edge_label, branch)
הוספת תת העץ branch לעץ הנתון node, עם צלע שהתווית שלה edge_label כוללת את החוק הנבחר
ואת ההצבה שבשמה הוא נבחר.
label(node)
החזרת התווית של קודקוד נתון, כלומר את השאילתא שהוא מייצג
האלגוריתם
קלט:
Query: Q = ?-G ,…,G
1 n
Program: P [a set of (numbered) rules]
Gsel [selects the next goal for a given query]
Rsel [selects the relevant rules for a given goal and program]
פלט:
Proof Tree
תאור האלגוריתם:
proof_tree(make_node(Q))
כאשר
proof_tree(node)
query := label(node)
if query is ‘?- true,…,true’
mark node as ‘success’
else
goal := Gsel(query)
[rename rules’ variables]

rules := Rsel(goal,P)
if empty(rules)
mark node as ‘failure’
else
for <rule,sub> in rules
new_query := replace(query, goal, body(rule))
∘
sub
add_branch(node, <rule,sub>, proof_tree(make_node(new_query)))
return node
בסוף התהליך, נקבל עץ שחלק מהעלים שלו הם 'קודקודי הצלחה', וחלק הם 'קודקודי כישלון'. כל מסלול מהשורש
לקודקוד הצלחה מייצג אפשרות אחת לפיתרון. כאשר הפיתרון הוא הרכבת כל ההצבות הניתנות בצלעות של
המסלול הנתון.
5.1.2.3 מושגים ומאפיינים
מושגים
- מסלול הצלחה (successful computation path) הינו מסלול בעץ ההוכחה, מהשורש ועד לקודקוד הצלחה.
- מסלול כישלון (failure computation path) הינו מסלול בעץ ההוכחה, מהשורש ועד לקודקוד כישלון.
.(success tree) עץ הכולל מסלול הצלחה (אחד לכל הפחות) נקרא עץ הצלחה -

.(failure tree) עץ שכל מסלוליו הם מסלולי כישלון נקרא עץ כישלון -
- עץ הכולל מסלול אינסופי מכונה עץ אינסופי (בדרך כלל בשל רקורסיה).
- עץ שכל מסלוליו סופיים מכונה עץ סופי.
- עץ הצלחה סופי הוא עץ סופי עם מסלול הצלחה.
- עץ כישלון סופי הוא עץ סופי שכל מסלוליו הם מסלולי כישלון.
- עץ הצלחה אינסופי הוא עץ אינסופי שיש בו מסלול הצלחה (סופי).
מאפיינים
- שאילתא Q הינה ברת-הוכחה (provable) מתוכנית נתונה P, מסומן על ידי P |-- Q, אם"ם קיים Gsel ו
Rsel שניתן לחשב על פיהם עץ הצלחה (על פי האלגוריתם שתארנו). כלומר האלגוריתם שהצגנו מחזיר
ערך אמת.
- שאילתא Q משתמעת לוגית (logically implied) מתוכנית נתונה P, מסומן על ידי P |= Q, אם
השאילתא בעל ערך אמת כאשר התוכנית בעת ערך אמת. כלומר תוצאת השאילתא תואמת את הערך
הלוגי ה'אמיתי' (לאו דווקא ביחס לאלגוריתם מסוים).
- נאותות: P |-- Q גורר P |= Q, כלומר: אם השאילתא ברת-הוכחה מהתוכנית (יש לה ערך אמת על פי
האלגוריתם), היא גם משתמעת לוגית מהתוכנית, כלומר שהשאילתא תואמת את האמת הלוגית, וניתן
'לסמוך' על תוצאתה.
- שלמות: P |= Q גורר P |-- Q, כלומר: אם השאילתא משתמעת לוגית מהתוכנית (כלומר יש לה ערך
אמת בעולם הלוגי), אז היא ברת-הוכחה מהתוכנית (יש לה ערך אמת על פי האלגוריתם). ובמילים
אחרות, אם הערך הלוגי הטהור הוא אמת – גם אלגוריתם פתרון השאילתא יחזיר ערך אמת; אם הערך
הלוגי הטהור הוא שקר – גם אלגוריתם פתרון השאילתא יחזיר ערך שקר.
- לשאילתא ולתכנית נתונות יש עץ הוכחה יחיד, ללא תלות בסדר החישוב (Gsel, Rsel), עד כדי
איזומורפיות.
Gsel,Rsel-קביעה זו מתייחסת לעץ ההוכחה הפוטנציאלי, אם נפתח את כל האפשרויות. בפועל, ייתכן ש
אחד יחתוך את פיתוח העץ, בעוד השני יפתח את המסלול האינסופי קודם. כמו לדוגמא בפרוצדורת
ה-ancestor שראינו קודם.
- תוכנית בשפה הלוגית-רלציונית היא כריעה (decidable). כלומר, ניתן מראש לענות על השאלה, האם כל
שאילתא נתונה היא ברת-הוכחה ביחס לתוכנית נתונה.
לכאורה עשוי להתפתח עץ הוכחה אינסופי, כך שלא ניתן לדעת האם נגיע אי פעם לקודקוד הצלחה. אך
אופי השפה הנוכחית (מספר חוקים סופי, מספר מטרות סופי בשאילתא) גוזר, שאם חזרנו לקודקוד
שיצרנו כבר (עם אותה שאילתא), ניתן להסיק שזה מסלול אינסופי, עם לולאה, שלעולם לא יגיע לקודקוד
הצלחה.
Turing-Complete השפה הלוגית-רלציונית אינה
השפה הלוגית-רלציונית מקיימת נאותות ושלמות

## 5.2 שפה לוגית

נרחיב את השפה הלוגית-רלציונית כך שתכלול אפשרות להגדרת ביטוי מורכב (המציין 'אובייקט'), נכנה
.functor ביטוי/אובייקט שכזה


### 5.2.1 תחביר

true, וכן הביטויים/ערכים הפרימיטיביים ,(X) ומשתנים (abraham) עד כה, היו שני סוגים של ביטויים: סמלים
.false
(parent(abraham, ishmael :הדרך היחידה להרכיב אותם היתה ע"י הגדרת יחס
בשפה הלוגית החדשה יש literal expression המאפשר להגדיר ביטוי שהוא מבנה, 'אובייקט'.
לדוגמא:
time(june,mon)
location(beersheva, israel)
ניתן לחשוב על שני פקטורים אלו כמו על שני אובייקטים בג'אווה, האחד מופע של המחלקה Time והשני מופע של
.Location המחלקה
נשים לב לכך, שהמבנה של הפנקטור זהה למבנה של נוסחה אטומית. האבחנה שלהם ניתנת על ההקשר שבהם
הם מופיעים: פנקטורים ממומקים תמיד 'בתוך סוגרים', כ'פרמטר' של משהו אחר.
לדוגמא:
א.
time(june,mon).
location(beersheva,israel).
נוסחאות: היחס time מתקיים (ערך אמת) עבור june ו mon. היחס location מתקיים (ערך אמת) עבור
.israel ו beersheva
ב.
course(ppl, time(june,mon), location(beersheva,israel)).
(ppl, time(june,mon), location(beersheva,israel מתקיים עבור הישויות course פנקורים: היחס

### 5.2.2 סמנטיקה

ללא שינוי, כמו קודם, אותו אלגוריתם למציאת ההצבות ההופכות שאילתא נתונה לערך אמת (בהינתן תכנית).
נדרש רק לטפל שאפשרות של פנקטור בשני מקרים:
- כאשר מרכיבים הצבות, כזכור, נדרש לוודא שהמשתנה המופיע בצד שמאל בבביטוי הלוגי אינו מופיע גם מצד
ימין. עד כה, האפשרות היחידה לכך היתה ביטוי מהצורה X = X, כעת יש גם את האפשרות (שצריך לפסול) של
(X = location(X,israel :פנקטורים, לדוגמא
- בפתרון המשוואות (במסגרת היוניפיקציה), ב'מקרה ג', בו יש שני ביטויים מורכבים בעלי אותו מבנה, עד כה
parent(X,isaac) = parent(abraham,Y)  X = :האפשרות היחידה היתה שני יחסים בעלי אותו מבנה
abraham, Y = isaac. כעת יש מקרה נוסף של משוואה בין ביטויים מורכבים, עבור פנקטורים:
.location(beersheva,Y) = location(X,israel)  X = beersheva, Y = israel
Case a:
true=false
true=true

abraham=abraham
isaac=abraham
Case b:
X = abraham
X = location(bs,is)
X = location(bs,X)
Case c:
parent(abrahem,Y) = parent(X,isaac)
location(C,is) = location(bs,S)
השפה הלוגית החדשה אינה כריעה, ומימלא Turing-Complete - לא ניתן להניח שאם הגענו שוב לאותו
קודקוד אין טעם להמשיך, כי למרות שמספר החוקים והמטרות סופי, מספר הפנקטורים עשוי להיות אין-סופי.
לדוגמא:
pred(f(X)):-pred(f(f(X)).
?-pred(f(a))
האם השפה הלוגית מקיימת שלמות, מלבד נאותות?
לכאורה לא, כי היא לא כריעה, כך שייתכן כי אובייקטיבית יש פתרון לשאילתא, אך האלגוריתם לא יגיע אליו בשל
מסלול אינסופי.
אך אם מדייקים את הגדרת השלמות, לא נדרש להבטיח שזה יקרה בהכרח בפועל אלא שיש סדר חישוב מסוים
(Gsel, Rsel) שבו האלגוריתם יגיע לפתרון. על פי זה, השפה הלוגית מקיימת גם שלמות.

### 5.2.3 ייצוג מבני נתונים ומספרים בשפה הלוגית: עצים, רשימות, מספרים שלמים

1. עצים
נגדיר עץ בינארי ע"פ החוק/יחס הבא:
binary_tree(void).
binary_tree(tree(Element,Left,Right)) :- binary_tree(Left), binary_tree(Right).
העצים הבאים מקיימים את יחס העץ הבינארי:
void
tree(two,void,void)
tree(two,tree(one,void,void),tree(three,void,void))
הערה: האם ניתן היה להגדיר עץ בינארי ללא פנקטורים, רק על פי יחסים?
binary_tree(void).
binary_tree(Element,Left,Right):-binary_tree(Left),binary_tree(Right).
העצים הבאים מקיימים את יחס העץ הבינארי:
void
tree(two,void,void)

אך לא העץ הבא:
tree(two, one, three)
נגדיר את יחס ה'חברות' בעץ בניארי:
tree_member(X,tree(X,_,_)).
tree_member(X, tree(_,Left,_)) :- tree_member(X,Left).
tree_member(X, tree(_,_,Right)) :- tree_member(X,Right).
שאילתות:
?- tree_member(X,
tree(a,
tree(b, void,void),
tree(c, void,void)))
X = a
X = b
X = c
?- tree_member(g(X),
tree(g(a),
tree(g(b), void,void),
tree(f(a), void,void)))
X = a
X = b
?- tree_member(a, T)
a כל העצים בעולם שיש להם קודקוד כלשהו עם הערך – (Tree נקבל אינסוף פתרונות (הצבות למשתנה
T = tree(a,void,void)
T = tree(_X1,tree(a,void,void), _X2)
T = tree(_X1, _X2, tree(a,void,void))
…
2. רשימות
ניתן, בעזרת פנקטורים, להגדיר רשימות.
כזכור, כדי להגדיר רשימה באופן אינדוקטיבי, צריך:
- להגדיר את הרשימה הריקה
- להגדיר זוג איברים, כאשר האבר השני הוא בעצמו רשימה
cons ,()‘ :הגדרנו לשם כך שני פרימיטיביים L3-ב
cons והפנקטור empty בשפה הלוגית נעשה זאת בעזרת הסמל
כעת ניתן להגדיר באופן אינדוקטיבי את היחס 'רשימה':
list(empty).
list(cons(X,Xs)) :- list(Xs).
הרשימות הבאות מקיימות את יחס הרשימה:
empty
cons(a,empty)

cons(a,cons(b,empty))
cons(a,cons(b,cons(c,empty)))
בשפה L3 הגדרנו תחביר נוח לרשימות, כמו ‘(a b c), נעשה זאת אף לשפה הלוגית שלנו:
empty  [] :הרשימה הריקה
((((a,b,c]  cons(a, cons(b, cons(c,empty] :רשימה עם איברים
בשפה L3 הגדרנו אופרטורים פרימיטיבייים car,cdr המאפשרים באופן נוח גישה לאיברי הרשימה, לשם נוחות
נוסיף לשפה הלוגית אופרטור פרימיטיבי '|', המחלק רשימה לשני חלקים: [X|Xs] – X מייצג את האיבר הראשון
ברשימה ו Xsאת כל השאר. באותו אופן: [X,Y|L] – X,Y הם שני האיברים הראשונים ברשימה ו L היא שאר
הרשימה.
נגדיר מספר יחסים:
list([]).
list([X|Xs]) :- list(Xs).
חברות ברשימה
member(X, [X|_]).
member(X,[_|Ys]) :- member(X, Ys).
?- member(a, [c, a, d]).
true
?- member(X, [a,b,c]).
X = a
X = b
X = c
?- member(a, L).
L = [a]
L = [_X1,a]
…
any list containing ‘a’
שרשור רשימות
append([], Xs, Xs):-list(Xs).
append([X | Xs], Ys, [X | Zs]) :- append(Xs, Ys, Zs).
?- append([a,b], [c], L).
L = [a,b,c]
?- append(Xs, [c,d], [a,b,c,d]).
Xs = [a,b]

?- append(Xs, Ys, [a,b,c]).
Xs = [a,b,c] Ys = []
Xs = [a,b] Ys = [c]
Xs = [a] Ys = [b,c]
Xs = [] Ys = [a,b,c]
append הגדרת יחסים שונים ברשימות על בסיס יחס השרשור
% (a) List prefix and suffix:
prefix(Xs, Ys) :- append(Xs, _Zs, Ys).
suffix(Xs, Ys) :- append(_Zs, Xs, Ys).
% (b) Redefine member:
member(X, Ys) :- append(_Zs, [X | _Xs], Ys).
% (c) Adjacent list elements:
adjacent(X, Y, Zs) :- append(_Ws, [X, Y | _Ys], Zs).
% (d) Last element of a list:
last(X, Ys) :- append(_Xs, [X], Ys).
הגדרת היחס בין רשימה ורשימה הפוכה (עם אותם איברים בסדר הפוך)
reverse([], []).
reverse([H | T], R) :- reverse(T, S), append(S, [H], R).
?- reverse([a, b, c], R).
R=[ c, b, a]
גרסה איטרטיבית, ללא רקורסיות ראש, תוך שימוש באקומולטור:
reverse(Xs, Ys):- reverse_help(Xs,[],Ys).
reverse_help([X | Xs], Acc, Ys) :- reverse_help(Xs, [X | Acc], Ys).
reverse_help([], Ys, Ys).
?- reverse([a,b,c], R).
reverse_help([a,b,c],[],R)
reverse_help([b,c],[a|[]],R)
reverse_help([c],[b|[a|[]]],R)
reverse_help([],[c|[b|[a|[]]]],R)
R = [c|[b|[a|[]]]] = [c,b,a]
3. מספרים

בשפה הלוגית יש רק סמלים, אין מושג אריתמטי של מספר (0 לדוגמא הוא הסמל '0', לא הערך החשבוני
(0
:(successor functor (Church Numeral Encoding נגדיר את המספרים הטבעיים באופן לוגי בעזרת
zero נייצג את המספר 0 על ידי הסמל -
- נייצג את המספר 1 על ידי הפנקטור s(zero) [שמשמעו עבורנו הוא המספר הבא אחרי 0]
- נייצג את המספר 2 על ידי הפנקטור s(s(zero)) [שמשמעו עבורנו הוא המספר הבא אחרי המספר הבא
אחרי 0]
- וכן הלאה
כעת ניתן להגדיר את יחס 'המספר הטבעי':
natural_number(zero).
natural_number(s(X)) :- natural_number(X).
?- natural_number(s(s(zero))).
true
נגדיר את פעולות החיבור והכפל בין מספרים שלמים בייצוג זה כיחסים, וכן את יחס ההשוואה (קטן מ):
% Signature: plus(X, Y, Z)/3
% Purpose: Z is the sum of X and Y.
plus(X, zero, X) :- natural_number(X).
plus(X, s(Y), s(Z)) :- plus(X, Y, Z). % x + (y+1) = (z+1)  x + y = z
?- plus(s(zero), zero, s(zero)).
true.
?- plus(X, s(zero), s(s(zero)).
X=s(zero)
?- plus(X, Y, s(s(zero))).
X= zero, Y=s(s(zero))
X=s(zero), Y=s(zero)
X=s(s(zero)), Y= zero
% Signature: times(X,Y,Z)/3
% Purpose: Z = X*Y
times(zero, X, zero) :- natural_number(X).
times(s(X), Y, Z) :- times(X, Y, XY), plus(XY, Y, Z).
% Signature: le(X,Y)/2
% Purpose: X is less or equal Y.
le(zero, X) :- natural_number(X).
le(s(X), s(Z)) :- le(X, Z).
(L4 5.3 מימוש האינטרפרטר (ב

1. ייצוג תחבירי
LP-ast.rkt
- תחביר קונקרטי ומופשט
- L4-מימוש התחביר ב
  - ייצוג כל אובייקט תחבירי כרשימה (מה שהיה ב JS מילון)
▪ [ה-tag מופיע במקום הראשון ברשימה, ולאחריו השדות]
  - פרוצדורת הבנאי make המייצרת רשימה בהתאם
getters' o' לחילוץ השדות על פי מיקומם הרשימה (קונבנציית ה '->' בשם הפרוצדורה)
  - [פרדיקט טיפוס (על בסיס התג בראש הרשימה)]
- (tests-אין כרגע פארסר (תש כוחנו...), אך ניתן להגדיר תוכנית לוגית בעזרת הבנאים (ראו קבצי ה
2. מימוש ההצבה
substitution-ADT.rkt
apply, combine :פרוצדורות
מימוש ב-L4 של L5-substitution-adt.ts מהפרק על הטיפוסים.
3. יוניפיקציה
unify.rkt
unify_formulas :פרוצדורה
מימוש ב-L4 של אלגוריתם פתרון מהשוואות מהפרק על הטיפוסים.
4. עצים עצלים
lazy-tree-ADT.rkt
- ייצוג עץ עצל כזוג של שורש ופונקציה ליצירת בנים.
- expand-lzt :בנאי
- ה'מתודה' lzt->branches מייצרת את רשימת הבנים של הקודקוד הנתון, על ידי הפעלת פונקציית ייצור
הבנים של קודקוד זה.
- filter

מקבלת עץ עצל ופרדיקט סינון, ומחזירה את הקודקודים שמספקים את הפרדיקט.
שתי גרסאות:
lzt-filter מחזירה את הקודקודים כרשימה רגילה
lzt-filter-lzl מחזירה את הקודקודים כרשימה עצלה
5. מימוש אלגוריתם פתרון השאילתא
answer-query.rkt
- הגדרת פונקציית ייצור הבנים LP-node-expander, על פי האלגוריתם (=על פי רשימת החוקים-סביבות
החוזרים מ Rsel עבור המטרה הנבחרת על פי Gsel, כאשר כל חוק-הצבה מייצר שאילתא פשוטה יותר)
- הגדרת שורש עץ ההוכחה עם השאילתא המקורית (במימוש זה, שומרים לשם נוחות בקודקוד לא רק את
השאילתא אלא גם את הרכבת ההצבות על הצלעות מהשורש ועד הקודקוד)

- 'בניית עץ ההוכחה' (בגרסה העצלה לא מבצעים את פיתוח העץ כעת אלא מסתפקים רק בשורש הכולל את
פונקציית ייצור הבנים)
- חילוץ התשובות ע"י ביצוע filter עם פרדיקט המסנן קודקודים שאינם קודקודי הצלחה (בגרסת
answer-query-lzl המחזירה את כל הקודקודים כרשימה, בגרסת lzt-filter מופעלת גרסת answer-query
מופעלת גרסת lzt-filter-lzl המחזירה את הקודקודים כרשימה עצלה, כלומר פתרון אחר פתרון)
- כל קודקוד הצלחה שחוזר מ filter מכיל כבר את הרכבת ההצבות מהשורש אליו. נותר רק לחלץ מההצבה רק
את המשתנים שהופיעו בשאילתא המקורית.

חזרה
- סוגי שפות תכנות
  - שפות אימפרטיביות – שפות דקלרטיביות
C ,אימפרטיביות: אסמבלי, ג'אווה ▪
SQL, css, Prolog :דקלרטיביות ▪
  - שפה עם מבניות
  - שפה פרוצדורלית
  - שפה פונקציונלית
▪ התוכנית היא ביטוי, הרצת תוכנית היא חישוב הביטוי
▪ פונקציה היא גם ביטוי, יתן להעבירה כפרמטר או להחזירה כערך
▪ אין side-effects, בפרט השמות
▪ תכנות פונקציונאלי
  - שפה מונחית עצמים
  - שפה מונחית אירועים
  - שפה לוגית
- התפתחות של שפה
L1-L5 אבולוציית השפות o
  - אבולוציית השפה הלוגית-רלציונית והשפה הלוגית
  - שלמות של שפה
▪ אלו רכיבים חיוניים ואלו רק לשם נוחות
- תחביר
  - קובע את מבנה התוכנית: מהם הטוקנים בשפה וכיצד מרכיבים אותם
  - מוגדר ע"י דקדוק חסר הקשר באופן קונקרטי ומופשט
  - ממומש על ידי הפארסר
AST פעולות על -
VarRef חישוב גובה, מציאת משתנים חופשיים, איסוף o
LexicalAddress-ל VarRef המרת ,AppExp-ל LepExp טרנספורמציות: המרת o
- סמנטיקה
  - קובעת את הערך של כל ביטוי
  - מוגדרת על ידי חוקי חישוב הממפים כל סוג של ביטוי לערך
  - ממומשת על ידי האינטרפרטר
- סוגי ביטויים וערכים
  - פרימיטיבי ולא-פרימיטיבי
  - אטומי ומורכב
- מימוש
makeEnv, applyEnv :הסביבה o
L3ApplicativeEval, applyProcedure, applyPrimitives, :הפונקציות החשובות ביותר o
applyClosure
- סוגי פעולות
  - צורות מיוחדות
  - אופרטורים פרימיטיביים
  - פונקציות משתמש
  - כיצד מוסיפים כל אחד, יתרונות וחסרונות
- סדר חישוב אפליקטיבי מול סדר חישוב נורמאלי
  - מעבר ממימוש אחד למימוש שני
L3Applicative/NormalEval, applyProcedure, applyPrimitives-ב isAppExp :נוגע ל ▪
  - יתרונות וחסרונות
  - שקילות תחת תנאים שונים
- מודל ההצבה מול מודל הסביבות

  - מעבר ממימוש אחד למימוש שני
ExtEnv :הרחבת הסביבה ▪
▪ הרחבת מבנה ה-Closure כך שיכלול את הסביבה בזמן יצירתו
▪ ב-applyClosure, חישוב ה-body המקורי עם הסביבה בקלוז'ר ופריים נוסף עם הארגומנטים,
במקום הצבת הארגומנטים ב-body וחישובו לאחר מכן עם הסביבה הגלובלית.
  - יתרונות וחסרונות
Lexical vs. Dynamic Scoping o
- בעיית הרקורסיה, והקריאות ההדדיות
let-וב define-ב o
  - במודל ההצבה ובמודל הסביבות
  - פתרונות
▪ פתרון פונקציונאלי
- חסרונות
▪ פתרון לא-פונקציונאלי
▪ פתרון ברמת עיצוב הקוד על ידי שליחת הפונקציה כפרמטר נוסף
- טיפוסים
  - טיפוס כקבוצה
▪ תאימות טיפוסים על פי יחס הכלה
- ספציפיות של מילונים
- contravariance בתאימות פונקציות
▪ יצירת טיפוסים חדשים על ידי פעולות על קבוצות
- (disjoint union) איחוד, חיתוך, מכפלה קרטזית, בידול
▪ תיאור הטיפוסים
- (JavaScript, L3) בחוזה של הפונקציה
- (TypeScript, L5) בקוד עצמו
▪ מערכת טיפוסים
- טיפוסים פרימיטיביים
- יצירת טיפוסים חדשים
- קביעת יחס בין טיפוסים
▪ תחביר הטיפוסים
- הטיפוסים עצמם
- תיוגם בתוכנית
- תחביר קונקרטי ומופשט
- מימוש בפארסר
▪ סמנטיקת הטיפוסים
- הגדרה פורמאלית על ידי הצהרות טיפוס
  - הצהרות טיפוס לכשעצמן: בדיקה האם הן אמת או שקר תוך שימוש באלגוריתם
ההסק
▪ מפעילים את את אלגוריתם ההסק על הביטוי הנדון מימין, כאשר
הצבת הטיפוסים משמאל מהווה את נקודת ההתחלה.
▪ מפעילים את ההצבה המתקבלת מאלגוריתם ההסק על הביטוי הנדון
מימין, ומרכיבים אותה על הצבת הטיפוסים משמאל, לקבלת הצהרת
טיפוס ספציפית יותר.
▪ בדיקה האם הצהרת הטיפוס הספציפית שהתקבלה תקפה
- Type Checker-ב typeof-פונקציית ה
▪ הסק טיפוסים
- הצבת טיפוסים
apply o: פרשנות ביטוי טיפוס על פי ההצבה
combine o: הרכבת שתי הצבות להצבה אחת
- יוניפיקציה
- אלגוריתם ההסק

  - הגדרת משתני טיפוס לתתי-ביטויים
  - יצירת משוואות לכל סוג ביטוי
  - פתרון מערכת המשוואות
▪ אלגוריתם
- type checker-מימוש קצר לאלגוריתם על ידי עדכון ה
- בקרת הריצה
  - קריאות סנכרוניות וא-סנכרוניות
Promise, CPS ,הרכבת קריאות אסינכרוניות o
CPS-מוטיבציה ל ▪
- רקורסיית זנב
- יתרון עיצובי
CPS פרוטוקול המרת פונקציה לצורת ▪
▪ שקילות בין פונקציה לגרסת ה-CPS שלה
Success-Fail עיצוב פוקציה בתבנית ▪
CPS בתבנית L6 עיצוב האינטרפרטר של ▪
▪ עיצוב האינטרפרטר של L7 ללא פרמטרים
CPS עם L4-ב Promise מימוש ▪
  - ג'נרטורים ורשימות עצלות
▪ רשימה רגילה מול רשימה עצלה/ ג'נרטור
- יתרונות וחסרונות
- שקילות
- מעבר מצורה אחת לשניה
▪ דוגמאות
- תכנות לוגי
  - השפה הלוגית-רלציונית
▪ סמלים, משתנים, עובדות, כללי היסק
▪ כריעה, לא שלמה
  - השפה הלוגית
▪ תוספת פנקטורים
▪ לא כריעה, שלמה
▪ עיצוב מבני נתונים בעזרת פנקטורים
- עצים
- רשימות
- מספרים ואריתמטיקה
  - בניית עץ הוכחה לשאילתא
▪ הצבה
▪ יוניפיקציה
▪ אלגוריתם
▪ עצי הצלחה וכישלון
▪ עצים סופיים ואינסופיים
(GSel) סדר קריאת חלקי השאילתא ,(RSel) סדר קריאת החוקים בתוכנית ▪
- עץ הוכחה יחיד עד כדי איזומורפיות
  - שאילתא ברת-הוכחה, שאילתא משתמעת לוגית
  - נאותות ושלמות
L4-מימוש האינטרפרטר ב o
▪ עצים עצלים
▪ ליבת האלגוריתם
