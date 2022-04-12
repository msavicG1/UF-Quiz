//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Well done!"
compliments[1]="There is no stopping you!"
compliments[2]="You are correct!"
compliments[3]="Exactly."
compliments[4]="Spot on!"
compliments[5]="Job well done!"
compliments[6]="Phenomenal"
compliments[7]="You're on fire!"
compliments[8]="Nice!"
compliments[9]="Slam dunk!"
compliments[10]="Cracking"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="What year was the University of Florida founded?"
choice1[1]="1921"
choice1[2]="1908"
choice1[3]="1853"
choice1[4]="1945"

question[2]="The following are considered to be the school colors of the University of Florida:"
choice2[1]="Blue and Green"
choice2[2]="Orange and Blue"
choice2[3]="Red and Gold"
choice2[4]="Orange and Black"

question[3]="What is the common name used for University of Florida intercollegiate sports teams?"
choice3[1]="Seminoles"
choice3[2]="Roll tide"
choice3[3]="Volunteers"
choice3[4]="Gators"

question[4]="The most popular student athlete sport at the University of Florida is:"
choice4[1]="Soccer"
choice4[2]="Basketball"
choice4[3]="Football"
choice4[4]="Field Hockey"

question[5]="In what athletic conference does the Univerity of Florida participate?"
choice5[1]="Atlantic Coast Conference (ACC)"
choice5[2]="Southeastern Conference (SEC)"
choice5[3]="Conference USA"
choice5[4]="Big 12"

question[6]="Which sports drink was founded at the University of Florida's research facilities?"
choice6[1]="Powerade"
choice6[2]="Gatorade"
choice6[3]="Limeade"
choice6[4]="Orangade"

question[7]="How many colleges are at the University of Florida?"
choice7[1]="20"
choice7[2]="15"
choice7[3]="25"
choice7[4]="16"

question[8]="U.S.and World Report ranked The University of Florida as what number among public universities?"
choice8[1]="6"
choice8[2]="10"
choice8[3]="12"
choice8[4]="8"

question[9]="How many libraries are on campus at the University of Florida?"
choice9[1]="3"
choice9[2]="5"
choice9[3]="6"
choice9[4]="7"

question[10]="What is the student-faculty ratio at the University of Florida?"
choice10[1]="20:1"
choice10[2]="30:1"
choice10[3]="40:1"
choice10[4]="50:1"

solution[1]="c"
solution[2]="b"
solution[3]="d"
solution[4]="c"
solution[5]="b"
solution[6]="b"
solution[7]="d"
solution[8]="a"
solution[9]="d"
solution[10]="a"

