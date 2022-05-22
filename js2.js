function Automat (Wort) {
var Wort = document.Formular.Eingabe.value
var t = 2
var s = 2
if (Wort == "BTXSE")
{alert(Wort + " passt zur Sprache. :-)")}
    else if (Wort[0] == "B" && Wort[1] == "T"){
      switch (Wort[2])
      {
        case "S":
          while (Wort[s] == "S")
            {
              s++
            }
            if (Wort[s] == "X" && Wort [s+1] == "S" && Wort [s+2] == "E")
            {
              alert(Wort + " passt zur Sprache. :-)")
              break;
            }
        default:
          alert(Wort + " passt nicht zur Sprache.")
      }
    }
    else if (Wort == "BPVVE")
      {alert(Wort + " passt zur Sprache. :-)")}
    else if (Wort[0] == "B" && Wort[1] == "P"){
      switch (Wort[2])
      {
        case "T":
          while (Wort[t] == "T")
            {
              t++
            }
            if (Wort[t] == "V" && Wort[t+1] == "V" && Wort[t+2] == "E")
            {
              alert(Wort + " passt zur Sprache. :-)")
              break;
            }
            else if (Wort[t] == "V" && Wort[t+1] == "P" && Wort[t+2] == "S" && Wort[t+3] == "E") {
              alert(Wort + " passt zur Sprache. :-)")
              break;
            }
            else if (Wort[t] == "V" && Wort[t+1] == "P" && Wort[t+2] == "X") {

            }
        default:
          alert(Wort + " passt nicht zur Sprache.")
        }
    }
else {alert(Wort + " passt nicht zur Sprache.")}
}
