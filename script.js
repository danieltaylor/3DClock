var generateTime = function(i) {
	var nums = ["<img src=./img/0.gif>", "<img src=./img/1.gif>", "<img src=./img/2.gif>", "<img src=./img/3.gif>", "<img src=./img/4.gif>", "<img src=./img/5.gif>", "<img src=./img/6.gif>", "<img src=./img/7.gif>", "<img src=./img/8.gif>", "<img src=./img/9.gif>"];

	return nums[i];
}

	var d;
	var h;
	var m;
	var s;
	var col = ":";
	var ampm = "";

//CLOCK VALUES
	var h1 = 10;
	var h2 = 10;
	var m1 = 10;
	var m2 = 10;
	var s1 = 10;
	var s2 = 10;

	var refreshTime = function() {
		d = new Date();
		h = d.getHours();
		m = d.getMinutes();
		s = d.getSeconds();
		/*
		if (h<10) {
			h="0"+h;
		}

		if (m<10) {
			m="0"+m;
		}

		if (s<10) {
			s="0"+s;
		}
*/
		if (h1!=Math.floor(h/10)) {
			h1=Math.floor(h/10);
			document.getElementById("h1").innerHTML=generateTime(h1);
		}

		if (h2!=h%10) {
			h2=h%10;
			document.getElementById("h2").innerHTML=generateTime(h2);
		}

		if (m1!=Math.floor(m/10)) {
			m1=Math.floor(m/10);
			document.getElementById("m1").innerHTML=generateTime(m1);
		}

		if (m2!=m%10) {
			m2=m%10;
			document.getElementById("m2").innerHTML=generateTime(m2);
		}
	}
	setInterval(refreshTime, 1000);