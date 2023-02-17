
/* 1. 1.  צרו 2 משתנים המכילים מספר כלשהו..
אם 2 המספרים שווים , אני אדפיס לקונסול BOOM
אם המספרים לא שווים, אני אדפיס לקונסול TRY AGAIN. */

var n1 = 5;
var n2 = 3;

if(n1 == n2){
    console.log('BOOM');

}else{
    console.log('TRY AGAIN');
}


/* 
 2. צרו 2 משתנים והדפיסו לקונסול את הסכום של שניהם (חברו אותם)
*/

var num1 = 6;
var num2 = 6;

console.log(num1+num2);


/*
3. צרו 2 משתנים והדפיסו לקונסול את המכפלה של שניהם.
*/

var num1 = 10;
var num2 = 7;

console.log(num1*num2);

/*
4. צרו משתנה שמכיל מספר
שמייצג יום בשבוע ( 1 עבור יום ראשון , 2 עבור יום שני , 7 עבור שבת)
ואז הדפיסו הודעה בהתאם לאותו יום.
אם היום יום ראשון, הדפיסו good week
אם היום הוא : שני/שלישי/ רביעי : הדפיסו good day
אם היום הוא חמישי/שישי/שבת הדפיסו : happy weekend !
*/

var Sunday = 1;
var Monday = 2;
var Tuesday = 3;
var Wednesday = 4;
var Thursday = 5;
var Friday = 6;
var Saturday = 7;

if(Sunday === 1){
   console.log("Good Day");
}   
else if (Sunday=== 2 || Monday === 3 || Tuesday === 4) {
    console.log("Good Day");
}
else if (day === 5 || day === 6 || day ===7){
    console.log("Happy weekend");
}

/*
5. כתוב משתנה שמכיל מספר שמייצג יום בחודש.( מ1 עד 31)
אם התאריך הוא 1 לחודש : אני אדפיס good month
אם התאריך הוא בין 2-10 לחודש אני אדפיס : start work
אם התאריך הוא 10 לחודש אני אדפיס : get salary
אם התאריך הוא בין 11-20 לחודש אני אדפיס : BE HAPPY
אם התאריך הוא בין 20-30 לחודש אני אדפיס: the end
אם התאריך הוא 31 לחודש אני אדפיס : BOOM BOOM
*/

var day = 10;

if(day === 1){
    console.log("good month");
}
else if(day > 0 && day < 10){
     console.log("start work");
}
else if (day === 10){
    console.log("Happy salary Day");
}
else if (day > 11 && day < 20){
      console.log("Be Happy");
}
else if (day > 20 && day < 30){
      console.log("the end");
}
else if(day === 31){
      console.log("Boom Boom");
} 

/*
6. כתבו משתנה שמכיל שם של חג כ string
אם השם הוא purim – אני אדפיס : happy purim
אם השם הוא passover- אני אדפיס : clear home
אם השם הוא shavoout – אני אדפיס – eat milk
אם השם הוא suckot – אני אדפיס build sucka
*/

var Holiday = "passover";

if(Holiday === "purim") {
    console.log("happy purim");
}
else if (Holiday === "passover") {
     console.log("clear home");
}
else if (Holiday === "shavoout") {
     console.log("eat milk");
}
else if (Holiday === "suckot") {
     console.log("build sucka");
}


/*
7. בתחרות זריקת כדור המנצח הוא מי שזורק כדור למרחק הגדול ביותר.
הגדירו 2 שחקנים, לכל שחקן יש שם של משתנה שמכיל 
את שמו ושם של משתנה שמכיל את התוצאה, למשל :
player1_name = 'shlomi'
player1_score = 60;
לבסוף הדפיסו את שם השחקן שזרק למרחק הגדול ביותר, ואת המרחק אליו הוא זרק.
*/

player1_name = "itay";
player1_score = 100;

player2_name = "shlomi";
player2_score = 70;

if(player1_score > player2_score){
    console.log("player 1 win");
    console.log("name:",player1_name,"distance:",player1_score);
}
else if (player1_score < player2_score){
    console.log("player 2 win");
    console.log("Name:", player2_name,"Disctance:",player2_score);
}
else if (player1_score === player2_score) {
    console.log("Equal");
}

/*
8. כתבו משתנה שמכיל מספר, והדפיסו האם הערך במשתנה הוא מספר זוגי או לא.
*/

var num = 2;

if (num % 2 === 0){
    console.log("Zugi",num); 
}
else{
    console.log("not Zugi",num);
}

/*
9. הגדירו 2 משתנים שבשניהם יש מספר, והדפיסו את המספר הגדול יותר מבינהם.
*/

var num1 = 5;
var num2 = 7;

if (num1 > num2){
    console.log("bigger",num1);
}
else{
    console.log("bigger",num2);
}

/*
10 : חישוב ממוצע:
הגדירו 7 משתנים, לכל אחד מהם יש מספר כלשהו.
לבסוף הדפיסו לקונסול את הממוצע של כל המספרים.

11: מדד כושר:
הגדירו אדם באמצעות 3 משתנים. משתנה אחד מכיל את שם הבן אדם, משתנה שני מכיל את גילו
משתנה שלישי מכיל את המספר ק"מ שהוא רץ
אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 30 ל 50 ק"מ – יודפס לי "אתה בכושר מעולה + השם שלי + הגיל שלי".
אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 10 ל 30 ק"מ – יודפס לי "אתה בכושר טוב + השם שלי + הגיל שלי".
אם הגיל שלי הוא בין 30 ל 50 ורצתי בין 0 ל 10 ק"מ – יודפס לי "חייב להשתפר + השם שלי + הגיל שלי ".
אם הגיל שלי הוא בין 18-30 ורצתי בין 25-50 ק"מ – יודפס לי " אתה בכושר מעולה + השם שלי + הגיל שלי "
אם הגיל שלי הוא בין 18-30 ורצתי פחות מ 25 ק"מ – יודפס לי " יש מקום לשיפור + השם שלי + הגיל שלי ".

12. צרו משתנה שמכיל שעה בין 5 ל 24
בין השעות 5 בבוקר ל 11 בבוקר כולל יודפס לי "בוקר טוב".
ביום השעות 12 בצהרים עד 17 (כולל) יודפס לי "צהרים טובים"
בין השעות 18:00 ל 23 יודפס לי "ערב טוב".
*/

var personName="mike";
var personAge=27;
var personKmRun=50;


if( personAge>30 && personAge<50 && personKmRun<=50 && personKmRun>=30)
{
    console.log("אתה בכושר מעולה ",personName ," הגיל שלי",personAge);
}
else if(personAge>30 && personAge<50 && personKmRun<=30 && personKmRun>=10)
{
    console.log("אתה בכושר טוב",personName ," הגיל שלי",personAge);
}
else if(personAge>30 && personAge<50 && personKmRun<=10 && personKmRun>=0)
{
    console.log("חייב להשתפר",personName ," הגיל שלי",personAge);
}
else if(personAge>18 && personAge<30 && personKmRun<=50 && personKmRun>=25)
{
    console.log("אתה בכושר מעולה",personName ," הגיל שלי",personAge);
}
else if(personAge>18 && personAge<30 && personKmRun<=25)
{
    console.log(" יש מקום לשיפור  ",personName ," הגיל שלי",personAge);
}