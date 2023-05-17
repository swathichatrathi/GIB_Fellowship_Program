/* Write A javascript code which displays a digital clock by date and time method which should be in the format of 00:00:00.(if it is 8:9:9(hours:minutes: seconds)
clock in the morning it should display as 08:09:09)if less than 10 it must display as 0 and number.*/

// CODE 

setInterval(digitalclockTime, 1000);
function digitalclockTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
    let millisec = time.getMilliseconds();

	am_or_pm = "AM";
	if (hour > 12) {
		hour -= 12;
		am_or_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_or_pm = "AM";
	}

	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;
    millisec = (millisec < 100) ? (millisec < 10 ? "00" + millisec : "0" + millisec) : millisec ;
	let presenttime = hour + ":" + min + ":" + sec + ":" + millisec+ " "+am_or_pm;
    console.log(presenttime);
}
digitalclockTime();

// sample output

/* 
06:47:46:733 PM
06:47:47:735 PM
06:47:48:737 PM
06:47:49:744 PM
06:47:50:757 PM
06:47:51:763 PM
06:47:52:773 PM
06:47:53:786 PM
06:47:54:798 PM
06:47:55:809 PM
06:47:56:819 PM
06:47:57:825 PM
06:47:58:833 PM
06:47:59:840 PM
06:48:00:853 PM
06:48:01:860 PM
06:48:02:871 PM
06:48:03:878 PM
06:48:04:879 PM
06:48:05:889 PM
06:48:06:898 PM
06:48:07:907 PM
06:48:08:915 PM
06:48:09:928 PM
06:48:10:937 PM
06:48:11:949 PM
06:48:12:960 PM
06:48:13:972 PM
06:48:14:983 PM
06:48:15:996 PM
06:48:17:011 PM
06:48:18:021 PM
06:48:27:125 PM
06:48:28:134 PM
06:48:29:141 PM
06:48:30:153 PM
06:48:31:164 PM
06:48:32:171 PM
06:48:33:184 PM
06:48:34:195 PM
06:48:35:196 PM
06:48:36:207 PM
06:48:37:215 PM
06:48:38:227 PM
06:48:39:238 PM
06:48:40:246 PM
06:48:41:256 PM
06:48:42:267 PM */
