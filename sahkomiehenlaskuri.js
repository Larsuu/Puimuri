<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="fi" http-equiv="Content-Language" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>SAHKOLASKIN</title>
</head>
<body>

<script type="text/javascript">

function laske()
{
var Syottojannite = document.syotto.jannite.value;
var Syottovirta = document.syotto.virta.value;
var tulos = Syottojannite / Syottovirta;

//document.getElementById("laske")

document.getElementById('uloste').textContent = tulos;

// document.write(tulos)
}

</script>

    <center>
    <h3> lasketaan vastus, anna Jännite ja Virta </h3>
    </center>

    <br />
    <br />

    <form name="syotto">

        <br />
        Jannite: <input type="text" name="jannite" value="jannite" />
        <br />
        <br />
        Virta: <input type="text" name="virta" value="virta" />
        <br />
        <br />
        <input type="button" value="laske" onclick="laske()" />
        <br />
        <br />

        <div id="uloste"> Vastaus</div>
    </form>

</body>
</html>
